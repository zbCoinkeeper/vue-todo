import App from "./app.vue"
import Vue from "vue"
import "./assets/styles/global.styl"



const root=document.createElement("div");
document.body.appendChild(root)

new Vue({
    render:(createElement)=>createElement(App)
}).$mount(root)
