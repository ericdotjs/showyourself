import type { ButtonInfo } from "../interfaces/ButtonInfo";
import {GetPlaces} from './api'

export const optionsInterest : ButtonInfo[] = [];

function createOptionos() {
    optionsInterest.push({ category: 'coffee', enable: false, equivalent: 'catering.cafe' });
    optionsInterest.push({ category: 'utensils', enable: false, equivalent: 'catering.restaurant' });
    optionsInterest.push({ category: 'shoppingBag', enable: false, equivalent: 'commercial.marketplace' });
    optionsInterest.push({ category: 'shirt', enable: false, equivalent: 'commercial.clothing' });
    optionsInterest.push({ category: 'ferrisWheel', enable: false, equivalent: 'entertainment.activity_park' });
    optionsInterest.push({ category: 'popcorn', enable: false, equivalent: 'entertainment.cinema' });

    optionsInterest.forEach(btn => {
        const newBtn = document.createElement('button');
        newBtn.id = btn.category;
        newBtn.classList.toggle('interes_op');
        newBtn.innerHTML = `<i data-lucide=${btn.category}></i>`;
        newBtn.addEventListener('click', () => selectInterest(newBtn, btn));
        btn.component = newBtn;
    })

    return optionsInterest;
}

async function selectInterest(element: HTMLButtonElement, buttonInfo: ButtonInfo) {
    console.log(buttonInfo)


    debugger;
    if (element.id === buttonInfo.category) {
        element.classList.toggle('interest_selected')
        buttonInfo.enable = !buttonInfo.enable;
        console.log(buttonInfo)
        if (buttonInfo.enable) {
            uncheckOtherButtons(buttonInfo.category)
            if (buttonInfo.equivalent) {
                await GetPlaces(buttonInfo.equivalent)
                return
            }
        }
        else {
            const div = document.querySelector("#places_list")
            if (div)
                div.innerHTML = ``
            console.log(buttonInfo)
        }
    }
}

function uncheckOtherButtons(category:string){
    debugger;
    optionsInterest.forEach(element => {
        if(element.component && element.category !== category && element.enable){
            element.component.classList.toggle('interest_selected');
            element.enable = false;
        }
    });
    console.log(optionsInterest)
}

createOptionos();


