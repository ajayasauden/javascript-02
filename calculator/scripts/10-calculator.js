

 // if there is value in localstorage or set to zero
 let calculation=localStorage.getItem('calculation')|| '';
        
 function updateCalculation(data){
     calculation += data
     document.querySelector('.js-display-output').innerHTML=`${calculation}`
     //console.log(calculation)
     localStorage.setItem('calculation',calculation)
 }
 function saveCalculation(){
     localStorage.setItem('calculation',calculation)
 }