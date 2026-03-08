<script setup>

import {ref} from "vue"
import API from "../services/api"
import {useRouter} from "vue-router"

const router = useRouter()

const email = ref("")
const password = ref("")

const login = async ()=>{

const res = await API.post("/auth/login",{

email:email.value,
password:password.value

})

localStorage.setItem("token",res.data.token)
localStorage.setItem("role",res.data.user.role)

if(res.data.user.role === "employee"){
router.push("/employee")
}else{
router.push("/employer")
}

}

</script>

<template>

<div class="flex justify-center items-center h-screen">

<div class="border p-6 w-96">

<h2 class="text-xl mb-4">Login</h2>

<input v-model="email" placeholder="Email" class="border p-2 w-full mb-2"/>

<input type="password" v-model="password" placeholder="Password" class="border p-2 w-full mb-3"/>

<button @click="login" class="bg-green-500 text-white px-4 py-2 w-full">

Login

</button>

<p class="mt-4 text-center">
Don't have an account?
<router-link to="/signup" class="text-blue-500 underline">
Signup
</router-link>
</p>

</div>

</div>

</template>