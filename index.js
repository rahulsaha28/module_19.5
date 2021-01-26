let allIncrementButton = document.querySelectorAll(".increment");
let allDecrementButton = document.querySelectorAll(".decrement");
let priceValue = [];
let total = 0;

for(let i=0; i<allDecrementButton.length; i++){
    priceValue.push(parseFloat(document.querySelectorAll(".price")[i].innerText));
    total += priceValue[i]; 
}



for(let i=0; i<allIncrementButton.length; i++){

    allIncrementButton[i].addEventListener("click", function(event){
    
        let priceV = document.querySelectorAll(".price");

        if(event.target.className.indexOf("increment")!= -1){

            
            event.target.previousElementSibling.value = parseFloat(event.target.previousElementSibling.value)+1;
            priceV[i].innerText = priceValue[i]*event.target.previousElementSibling.value;
        }
        else if(event.target.className.indexOf("fa-plus")!=-1)
        {
            event.target.parentElement.previousElementSibling.value = parseFloat(event.target.parentElement.previousElementSibling.value)+1;
            priceV[i].innerText = priceValue[i]*event.target.parentElement.previousElementSibling.value;
            
        }
        
        total += priceValue[i];
        document.getElementById("sub").innerText = total;    
        document.getElementById("total").innerText = total;
        
    })

     



}


for(let i=0; i<allDecrementButton.length; i++){
    allDecrementButton[i].addEventListener("click", function(event){


        let priceV = document.querySelectorAll(".price");
        
        if(event.target.className.indexOf("decrement")!= -1){

            
            event.target.nextElementSibling.value = parseFloat(event.target.nextElementSibling.value)-1;
            priceV[i].innerText = priceValue[i]*event.target.nextElementSibling.value;
            
        }
        else if(event.target.className.indexOf("fa-minus")!=-1)
        {
            
            event.target.parentElement.nextElementSibling.value = parseFloat(event.target.parentElement.nextElementSibling.value)-1;
            priceV[i].innerText = priceValue[i]*event.target.parentElement.nextElementSibling.value;
            
        } 

        total -= priceValue[i];
        document.getElementById("sub").innerText = total;    
        document.getElementById("total").innerText = total;

    })
}




