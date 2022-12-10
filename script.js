

const button = document.getElementById('play')
console.log(button);


let counter = 0; 
let isGameOver = false ;

button.innerHTML = `Click (${counter})` 

button.addEventListener('click' , function(){

if (counter < 10) {

    counter++;

    button.innerHTML = `Click (${counter})` 

} else{
    isGameOver = true;
    
    button.classList.add('bg-danger');

    setTimeout(() => {
        
        isGameOver = false; 

        counter = 0; 

        button.innerHTML = `Click (${counter})`
    
        button.classList.remove('bg-danger');
    }, 700);
}

console.log(counter)

})