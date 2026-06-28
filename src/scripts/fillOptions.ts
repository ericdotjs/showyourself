import type { ButtonInfo } from "../interfaces/ButtonInfo";

function createOptionos(){
let optionsInterest: ButtonInfo[] = [
    {category:'coffee', enable:false, equivalent:'catering.cafe'},
    {category:'utensils', enable:false, equivalent:'catering.restaurant'},
    {category:'shoppingBag', enable:false, equivalent:'commercial.marketplace'},
    {category:'shirt', enable:false, equivalent:'commercial.clothing'},
    {category:'ferrisWheel', enable:false, equivalent:'entertainment.activity_park'},
    {category:'popcorn', enable:false, equivalent:'entertainment.cinema'}
]

optionsInterest.forEach(btn => {
    const newBtn = document.createElement('button');
    newBtn.id = btn.category.toString()
    newBtn.classList.toggle('interes_op');
    newBtn.innerHTML = `<i data-lucide=${btn.category}></i>`;
    newBtn.addEventListener('click', () => selectInterest(newBtn, btn));
    btn.component = newBtn;
})

return optionsInterest;
}

function selectInterest(element: HTMLButtonElement, buttonInfo: ButtonInfo) {
    debugger;
    if (element.id === buttonInfo.category){
        element.classList.toggle('interest_selected')
        buttonInfo.enable = !buttonInfo.enable;
        console.log(buttonInfo)
    }
}


export const optionsInterest = createOptionos();

