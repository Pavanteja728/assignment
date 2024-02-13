let t=document.getElementById("texts");
let c=document.getElementById("colorss");
let x=document.getElementById("ff");
let z=document.getElementById("n");

let r=document.getElementById("inp");

let fom=document.getElementById("f");

r.addEventListener("change",function(event){
    t.textContent=event.target.value;
})

x.addEventListener("change",function(event){
    t.style.fontFamily=event.target.value;
})

c.addEventListener("change",function(event){
    t.style.color=event.target.value;
})

z.addEventListener("change",function(event){
    t.style.fontSize=parseInt(event.target.value)+"px";
})



t.setAttribute("draggable","true");

t.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("text/plain","Anything");
});



fom.addEventListener("submit",function(event){
    event.preventDefault();

})