<script setup>
import { ref, onMounted } from "vue"
import API from "../services/api"

const leaves = ref([])

const fetchLeaves = async () => {
  const res = await API.get("/leave/all")
  leaves.value = res.data
}

const approve = async (id) => {
  await API.put(`/leave/${id}/approve`)
  fetchLeaves()
}

const reject = async (id) => {
  await API.put(`/leave/${id}/reject`)
  fetchLeaves()
}

onMounted(fetchLeaves)
</script>

<template>

<div class="p-6">

<h1 class="text-2xl mb-4">Employer Dashboard</h1>

<table class="border w-full">

<thead>
<tr class="bg-gray-200">
<th>Name</th>
<th>Leave Type</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

<tr v-for="leave in leaves" :key="leave._id">

<td>{{ leave.employeeId.name }}</td>
<td>{{ leave.leaveType }}</td>
<td>{{ leave.status }}</td>

<td>

<button
@click="approve(leave._id)"
class="bg-green-500 text-white px-2 py-1 mr-2"
>
Approve
</button>

<button
@click="reject(leave._id)"
class="bg-red-500 text-white px-2 py-1"
>
Reject
</button>

</td>

</tr>

</tbody>

</table>

</div>

</template>