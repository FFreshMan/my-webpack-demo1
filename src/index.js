
import less from './x.less'
import css from './y.css'
import scss from "./z.scss"
import styl from "./s.styl"
import png from "./asserts/1.png"

const app=document.getElementById("app")
console.log(png)
//这里会自动给图片名加上hash
app.innerHTML=`<img src="${png}">` 
//这里的路径直接引用就行


//懒加载
const button=document.createElement("button")
button.innerHTML=`懒加载`
button.onclick=()=>{
    const promise=new Promise((resolve,reject)=>{resolve(import("./x.js"))})
    promise.then((module)=>{
        module.default()
    },()=>{ 
        console.log("失败了")
    })
}
app.appendChild(button )