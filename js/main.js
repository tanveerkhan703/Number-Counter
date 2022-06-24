let count = 0
 
const countEl = document.querySelector('span')

countEl.textContent = count;

const addbtn = document.querySelector('.add')
addbtn.addEventListener('click', () =>{
    count += 1;
    countEl.textContent = count

})
const subbtn = document.querySelector('.sub')
subbtn.addEventListener('click', () =>{
    count -= 1;
    countEl.textContent = count
})

const reset = document.querySelector('.reset')
reset.addEventListener('click', () =>{
    count = 0;
    countEl.textContent = count
})
