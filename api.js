const url="https://api.github.com/users"
// // consume
// // fetch API is converting to json
// window.fetch(url).then(data=>{
//     data.json(user=>
//         // convert readSream to jason
//         console.log(user)
//     .catch(er=>console.log(er)))
// }).catch(err=>console.log(err))

async function call(){
    try{
        let data =await window.fetch(url);
        let user=await data.json();
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
}
call();
