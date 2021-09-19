// api url
const api = "https://api.exchangeratesapi.io/";

const one=document.querySelector("#currency_one");
const two=document.querySelector("#currency_two");
const amount=document.querySelector("#amount");
const btn=document.querySelector("#btn_calculate");
const result = document.getElementById('result');


fetch("./currencies.json")
.then(res=> res.json())
.then(data=>{
  
    const keys=Object.keys(data);
    const values=Object.values(data);


    let options;

    for(let i=0; i<keys.length ; i++){
        options += `<option value=${keys[i]}>${values[i]}</option>`;
    }

   one.innerHTML=options;
   two.innerHTML=options;

})


btn.addEventListener("click", function(){

  const oneValue=one.value;
  const twoValue=two.value;
  const amountValue=amount.value;


  fetch(`${api}latest?base=${oneValue}`)
  .then(res=> res.json())
  .then(data=>{
     
    const rate=data.rates[twoValue];
    result.textContent=rate*amountValue;

  })




})