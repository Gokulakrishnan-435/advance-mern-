const url="https://api.github.com/users"
const XY=document.getElementById('template');
async function fetchApi(){
    let convert=await window.fetch(url);
    let converJson=await convert.json();
    let output ="";
    for (let user of converJson){
        output +=`<div class=userBlock>
        <img src=${user.avatar_url} alt=${user.login}/>
        <h2>${user.login}</h2>
        <button>
        <a href=${user.html_url}>go to family</a></button></div>`

    }
    template.innerHTML=output;
}

fetchApi();