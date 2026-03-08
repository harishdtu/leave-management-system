<script setup>
import { ref } from "vue"
import API from "../services/api"

const emit = defineEmits(["leaveApplied"])

const leaveType = ref("")
const startDate = ref("")
const endDate = ref("")
const reason = ref("")

const applyLeave = async () => {

await API.post("/leave/apply",{
leaveType: leaveType.value,
startDate: startDate.value,
endDate: endDate.value,
reason: reason.value
})

alert("Leave applied")

emit("leaveApplied")   // 👈 refresh dashboard

}
</script>

<template>

<div class="border p-4 mb-6">

<h2 class="text-lg mb-3">Apply Leave</h2>

<input v-model="leaveType" placeholder="Leave Type" class="border p-2 w-full mb-2"/>

<input type="date" v-model="startDate" class="border p-2 w-full mb-2"/>

<input type="date" v-model="endDate" class="border p-2 w-full mb-2"/>

<textarea v-model="reason" placeholder="Reason" class="border p-2 w-full mb-2"></textarea>

<button @click="applyLeave" class="bg-blue-500 text-white px-4 py-2">

Apply

</button>

</div>

</template>