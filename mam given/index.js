let input=document.getElementById('search');
let template=document.getElementById('template');

input.addEventListener('keyup',e=>{
    let searchText=e.target.value;
    searchUser(searchText);
});

async function searchUser(searchValue){
    let n="https://jsonplaceholder.typicode.com/users";
    let data=await fetch(`${n}/${searchValue}`);
    let JSON=await data.json();
    console.log(JSON);
    let {id,name,email,address,company}=JSON;
    template.innerHTML=`<div>
    <h2>${id}</br>
    ${name}</br>
    ${company.name}</h2></div>`
}