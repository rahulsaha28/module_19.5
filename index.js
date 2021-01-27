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


        total = updateUi(event, "previousElementSibling", ["increment", "fa-plus"], total, priceValue, i);
        
        
    })

     



}


for(let i=0; i<allDecrementButton.length; i++){
    allDecrementButton[i].addEventListener("click", function(event){

        total = updateUi(event, "nextElementSibling", ["decrement", "fa-minus"], total, priceValue, i);
        

    })
}


function updateUi(event, operation, nClass, total, priceValue, i){
    

    let priceV = document.querySelectorAll(".price");

    if(event.target.className.indexOf(nClass[0])!= -1){

        console.log(parseFloat(priceV[i].innerText)>0);

        if(nClass[0]=="decrement" && parseFloat(priceV[i].innerText)>0)
        {
            event.target[operation].value = parseFloat(event.target[operation].value)-1;
            priceV[i].innerText = priceValue[i]*event.target[operation].value;
            total -= priceValue[i]; 
        }    
        else if(nClass[0]=="increment" && parseFloat(priceV[i].innerText)>=0)
        {
            event.target[operation].value = parseFloat(event.target[operation].value)+1;
            priceV[i].innerText = priceValue[i]*event.target[operation].value;
            total += priceValue[i]; 
        }
        
        
        
        
        
    }
    else if(event.target.className.indexOf(nClass[1])!=-1)
    {
        if(nClass[0]=="decrement" && parseFloat(priceV[i].innerText)>0)
        {
            event.target.parentElement[operation].value = parseFloat(event.target.parentElement[operation].value)-1;
            priceV[i].innerText = priceValue[i]*event.target.parentElement[operation].value;
            total -= priceValue[i]; 

        }    
        else if(nClass[0]=="increment" && parseFloat(priceV[i].innerText)>=0)
        {
            event.target.parentElement[operation].value = parseFloat(event.target.parentElement[operation].value)+1;
            priceV[i].innerText = priceValue[i]*event.target.parentElement[operation].value;
            total += priceValue[i]; 
        }
        
        
        
        
    } 

    
    
    
    document.getElementById("sub").innerText = total;    
    document.getElementById("total").innerText = total;

    

    return total;

}




