mysubb = document.getElementById ('mySubmit')

let nameN =document.getElementById ('myText');
   let displayT = document.getElementById ('name')
   let resultT =  document.getElementById ('result')



 mysubb.onclick = function(){
 // result for the input and submit name
    let username = nameN.value;
    let  firstname = username.slice(username.indexOf(' ') + 1);
    displayT.textContent = `Hello ${firstname}, you are welcome to IBN BARBING SHOP!`;
    localStorage.setItem("username", firstname);
    
 }
     
     let storedName = localStorage.getItem("username");
    let storedSubscription = localStorage.getItem("subscribed");
    let storedPayment = localStorage.getItem("paymentMethod");

    
    if (storedName) {
      displayT.textContent = `Hello ${storedName}, welcome to IBN BARBING SHOP!`;
  }

    
  
     // Another work for subscribe button

     let myCheckBoxEle = document.getElementById ('myCheckBox')
     let visaEle = document.getElementById ('visaBtn')
     let masterEle = document.getElementById ('masterBtn')
     let paypalEle = document.getElementById ('payPalBtn')
     let PayBtn = document.getElementById('mySubmitt')
     let subREle = document.getElementById('subR')
     let paymentREle = document.getElementById('paymentR')
     let checkIt = document.getElementById ('check')



// when click on the checkbox
myCheckBoxEle.checked = storedSubscription;
    checkIt.textContent = storedSubscription ? "Subscribed" : "Subscribe";
    subREle.textContent = storedSubscription ? "Subscribed" : "Please Subscribe";

    myCheckBoxEle.addEventListener("change", function () {
      localStorage.setItem("subscribed", myCheckBoxEle.checked ? "true" : "false");
      checkIt.textContent = myCheckBoxEle.checked ? "Subscribed" : "Subscribe";
      subREle.textContent = myCheckBoxEle.checked ? "Subscribed" : "Please Subscribe";
  
   if (storedSubscription) {
      if(storedSubscription  === 'Subsrcibed')  myCheckBoxEle.checked = true
   
      
   } else storedSubscription = 'Subscribe'
}
    );

  

//when click on the pay button


// for visa payment
visaEle.onclick = function(){
   localStorage.setItem("paymentMethod", "VisaCard");
        
if (visaEle.checked){
   paymentREle.textContent = `You are paying with VisaCard`
}
else {
   paymentREle.textContent = `Please select a payment method`
}
}

masterEle.onclick =function(){
   localStorage.setItem("paymentMethod", "MasterCard");
 if(masterEle.checked){
   paymentREle.textContent = `You are paying MasterCard `
   }
   else {
      paymentREle.textContent = `Please select a payment method`
   }
}
paypalEle.onclick = function(){
   localStorage.setItem("paymentMethod", "PayPal");
if (paypalEle.checked){
   paymentREle.textContent = `You are paying with PayPal`
}
else {
   paymentREle.textContent = `Please select a payment method`
}
}
if (storedPayment) {
   paymentREle.textContent = `You are paying with ${storedPayment}`;
   if (storedPayment === "Visa") visaEle.checked = true;
   else if (storedPayment === "MasterCard") masterEle.checked = true;
   else if (storedPayment === "PayPal") paypalEle.checked = true;
} else {
   paymentREle.textContent = "Please select a payment method";
}



//when click on the pay button to display result
  PayBtn.onclick = function () {
   if (!myCheckBoxEle.checked) {
       subREle.textContent = "You are not Subscribed";
       return;
   }

   if (visaEle.checked || masterEle.checked || paypalEle.checked) {
       window.location.href = "payment.html";
   } else {
       paymentREle.textContent = "Please select a payment method";
   }
};