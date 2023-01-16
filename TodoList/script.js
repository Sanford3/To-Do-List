let div1 = document.getElementById("div1");


function addTask(){    
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let inputbox = document.createElement("input");
    inputbox.setAttribute("readonly",true)
    inputbox.classList.add("tasks");
    let string=document.getElementById("input1").value;
    inputbox.value=string;
    div3.appendChild(inputbox);
    div2.appendChild(div3);   
    div1.appendChild(div2);
    document.getElementById("input1").value="";
    let editbtn = document.createElement("button");
    let delbtn = document.createElement("button");
    editbtn.classList.add("edit");
    delbtn.classList.add("delete");
    editbtn.innerText="edit";
    delbtn.innerText="Delete";
    div3.appendChild(editbtn);
    div3.appendChild(delbtn);
    
function Editbtn(params) {
    if (editbtn.innerHTML=="edit") {
        inputbox.removeAttribute("readonly"); 
        inputbox.focus()
        editbtn.innerHTML="save" 
    }
    else{
        inputbox.setAttribute("readonly",true)
        editbtn.innerHTML="Edit"
       
    }


}

function Delbtn(params) {
 div2.removeChild(div3)
}
delbtn.addEventListener("click",()=>{
    Delbtn();
})

    editbtn.addEventListener("click",()=>{
        Editbtn();
    })
}


