import {createRouter,createWebHistory} from "vue-router"

import Login from "../pages/Login.vue"
import Signup from "../pages/Signup.vue"
import EmployeeDashboard from "../pages/EmployeeDashboard.vue"
import EmployerDashboard from "../pages/EmployerDashboard.vue"

const routes = [

{path:"/",component:Login},

{path:"/signup",component:Signup},

{path:"/employee",component:EmployeeDashboard},

{path:"/employer",component:EmployerDashboard}

]

const router = createRouter({

history:createWebHistory(),
routes

})

export default router