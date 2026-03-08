<script setup>

import {ref} from "vue"
import API from "../services/api"

const name = ref("")
const email = ref("")
const password = ref("")
const role = ref("employee")

const signup = async ()=>{

await API.post("/auth/signup",{

name:name.value,
email:email.value,
password:password.value,
role:role.value

})

alert("Signup successful")

}

</script>

<template>

<div class="flex justify-center items-center h-screen">

<div class="border p-6 w-96">

<h2 class="text-xl mb-4">Signup</h2>

<input v-model="name" placeholder="Name" class="border p-2 w-full mb-2"/>

<input v-model="email" placeholder="Email" class="border p-2 w-full mb-2"/>

<input type="password" v-model="password" placeholder="Password" class="border p-2 w-full mb-2"/>

<select v-model="role" class="border p-2 w-full mb-3">
<option value="employee">Employee</option>
<option value="employer">Employer</option>
</select>

<button @click="signup" class="bg-blue-500 text-white px-4 py-2 w-full">

Signup

</button>

</div>

</div>

</template>