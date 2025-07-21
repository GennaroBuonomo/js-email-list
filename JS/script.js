const emailsList = document.getElementById('email-list');


for(let i = 0; i < 10; i++){
  axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
  .then((resp) => {
    console.log(resp.data.response);
    emailsList.innerHTML += `<li>${resp.data.response}</li>`
  })
}
