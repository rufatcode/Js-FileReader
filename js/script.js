 /*
 function RecurciveFactorial(num) {
    if(num==0){
        return 1;
    }
    else{
        return num*RecurciveFactorial(num-1);
    }
}
console.log(RecurciveFactorial(5));
let demo="";
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < i; j++) {
        demo+="*";
    }
    demo+="\n"
}
let text=document.querySelector("p");
text.innerText=demo;
*/
let id=1;
let area=document.querySelector(".area");
let icon=document.querySelector(".area i");
let btn=document.querySelector(".btn");
let tableElement=document.querySelector("table");
icon.addEventListener("click",()=>{
    icon.parentElement.nextElementSibling.click();
    icon.parentElement.nextElementSibling.onchange=function(e){
    Upload(e.target.files);
    }
})

btn.addEventListener("click",()=>{
    tableElement.lastChild.innerHtml="";
    tableElement.classList.add("d-none");
})
area.ondragover=function(e){
    e.preventDefault();
}
area.ondrop=function(e){
    e.preventDefault();
    Upload(e.dataTransfer.files)

}


function Upload(filees){
    for (const file of filees) {
        let fileReader=new FileReader();
        fileReader.onload=function(e){
            let trElement=document.createElement("tr");
            let tdId=document.createElement("td");
            tdId.innerText=id;
            tdId.setAttribute("class",id);
            let tdImage=document.createElement("td");
            let image=document.createElement("img");
            image.setAttribute("src",e.target.result);
            tdImage.append(image);
            let tdName=document.createElement("td");
            tdName.innerText=file.name;
            let tdSize=document.createElement("td");
            tdSize.innerText=file.size;
            let tdSetting=document.createElement("td");
            let settingIcon=document.createElement("i");
            settingIcon.classList.add("fa-solid","fa-trash");
            settingIcon.style.cursor="pointer";
            settingIcon.addEventListener("click",()=>{
                settingIcon.parentElement.parentElement.innerHTML="";
                
            })
            tdSetting.append(settingIcon);
            trElement.append(tdId,tdImage,tdName,tdSize,tdSetting);
            tableElement.lastElementChild.append(trElement);
            id++;
            tableElement.classList.remove("d-none");
        }
        fileReader.readAsDataURL(file);
       
    }
}
