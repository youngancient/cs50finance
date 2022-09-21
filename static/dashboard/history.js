const form = document.querySelector("form");

function showChoice(){
    const div = document.querySelector("main .after");
  div.classList.remove('hide');
}
function removeChoice(){
    const div = document.querySelector("main .after");
  div.classList.add('hide');
}
form.addEventListener('submit', (e)=>{
    showChoice();
    e.preventDefault();
    const choiceButtons = document.querySelectorAll('.choice button')
    choiceButtons.forEach((button)=>{
        button.onclick =()=>{
            if(button.value == "no"){
                removeChoice();
                e.preventDefault();
            }else{
                const input = document.querySelector('form #choice');
                input.value = 'yes';
                console.log(input.value)
                form.submit();
            }
        }
    })
})
