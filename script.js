const myOutput = document.getElementById("email-list");
console.log(myOutput);

const endPoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for (let i = 0; i < 10; i++) {

    axios.get(endPoint)
    .then (response =>{
    // la req ok
    console.log(response.data.response)
    
    myOutput.innerHTML  += `<li>${response.data.response}</li>`

    })
    .catch(error =>{
        console.error(error)
    })
    .finally(()=>{
     // sempre
    })
}