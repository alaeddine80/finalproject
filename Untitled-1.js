//Adjust the quantity of each item through  “+” and “-” buttons
const buttonmoin=document.getElementsByClassname("moins")
const buttonplus=document.getElementsByclassname("plus")
var TOT0=0
for (var i=0 ; i<buttonmoin.length;i++){
    const button=buttonmoin[i]
    button.addEventListener("click",function(){
        button.parentElement.children[3].value--;
    })
}
for (var i in buttonplus;i<buttonplus;i++){
    var button=buttonplus[i]
    button.addEventListener("click",function(){
        button.parentElement.children[4].value++;
    })
}
//Delete items from the cart.
var elements =document.getElementsByClassName("btnRemove");
for ( var i = 0 ;i < elements.length ; i++){
    const button = elements[i];
    button.addEventListener("click",function(){
        button.parentElement.remove();
    })
}
//Like items through a clickable heart-shaped button that will change color accordingly.
heart=document.getElementsByClassName("like")
for(var i=0 ;i<heart.length;i++){
    var button=heart[i]
     
    button.addEventListener('click',function(event){
        var buttonClicked=event.target
        buttonClicked.classList.toggle('liked')
    })
}