var div=document.createElement('div')
div.style.textAlign="center"
div.style.marginTop="180px"
var button=document.createElement('button')
button.textContent='click here to get name'
var h=document.createElement('h1')
div.appendChild(button)
div.appendChild(h)
document.body.appendChild(div)
button.addEventListener('click',test)


var arr = [
    "Elon musk",
    "Gokul",
    "Krishnan",
    "Harish",
    "Karthick",
    "Guna",
    "Chandru",
    "Bill gates",
    "Jeeva",
    "Guru",
    "Shang Chi",
    "Dragon",
    "Spider man",
    "Parker",
    "Peter",
    
    ];
    function test(){
    var randomItem = arr[Math.floor(Math.random()*arr.length)];
    h.innerHTML=randomItem
    }