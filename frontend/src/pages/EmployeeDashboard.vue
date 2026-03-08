<script setup>
import { ref, onMounted } from "vue"
import API from "../services/api"
import LeaveForm from "../components/LeaveForm.vue"

const leaves = ref([])

const fetchLeaves = async () => {
  const res = await API.get("/leave/my")
  leaves.value = res.data
}

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("role")
  window.location.href = "/"
}

onMounted(fetchLeaves)
</script>

<template>

<div class="p-6">

<button
@click="logout"
class="bg-gray-700 text-white px-3 py-1 mb-4"
>
Logout
</button>

<h1 class="text-2xl mb-4">Employee Dashboard</h1>

<LeaveForm @leaveApplied="fetchLeaves"/>

<h2 class="text-xl mt-6 mb-3">My Leave Requests</h2>

<table class="border w-full">

<thead>
<tr class="bg-gray-200">
<th>Leave Type</th>
<th>Start</th>
<th>End</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr v-for="leave in leaves" :key="leave._id">

<td>{{leave.leaveType}}</td>
<td>{{ new Date(leave.startDate).toLocaleDateString() }}</td>
<td>{{ new Date(leave.endDate).toLocaleDateString() }}</td>
<td>{{leave.status}}</td>

</tr>

</tbody>

</table>

</div>

</template>