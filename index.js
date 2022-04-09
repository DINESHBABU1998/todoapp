function popup(){
    document.getElementById("container2").style.display="block"
    document.getElementById("todo").style.display="none"
    document.getElementById("container1").style.filter="blur(10px)"
}

const tasklist=[]

function addme(){

document.getElementById("container2").style.display="none"
document.getElementById("container1").style.filter="blur(0px)"

const name=document.getElementById("new").value;
console.log(name);

const tempObj={
id:Date.now(),
taskName:name
}
tasklist.push(tempObj)
console.log(tasklist)

addtaskonscreen()
}

function addtaskonscreen(){
const element=document.createElement("div");
element.setAttribute("class","child")

element.innerText=tasklist[tasklist.length-1].taskName
const existingelement=document.getElementById("parent");
existingelement.appendChild(element)

const hr=document.createElement("hr")
hr.setAttribute("id","hr")
const add=document.createElement("a")
add.setAttribute("id","additem")
const del=document.createElement("a")
del.setAttribute("id","delitem")

element.appendChild(hr)
element.appendChild(add)
element.appendChild(del)

add.innerHTML=`<i class="fa-solid fa-circle-plus" id="additem" style="color:red" ; onclick="additem()"></i>`
del.innerHTML=`<span class="material-icons del" id="delitem" style="color:red" ; onclick="delitem()">delete</span>`

}

