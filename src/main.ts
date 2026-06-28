import './style.css'
import {optionsInterest} from './scripts/fillOptions'
import {createIcons, Utensils ,Coffee, ShoppingBag, Shirt, FerrisWheel, Popcorn   } from 'lucide'
import htmlContent from './templates/app.html?raw'
import { buildMap } from './scripts/settingMap';

let application_name = 'Show Yourself';
const options = optionsInterest;

const app = document.querySelector<HTMLDivElement>('#app');
app!.innerHTML = htmlContent

const title_section =app?.querySelector('#title_app_h1');
if(title_section)
   title_section.textContent = application_name;

const optionsLayout = document.querySelector<HTMLDivElement>('.interest_layout');

options.forEach(btn => {
  if(btn.component)
  optionsLayout?.appendChild(btn.component)
})

buildMap();

createIcons({
  icons: {
    Utensils,
    Coffee,
    ShoppingBag,
    Shirt,
    FerrisWheel,
    Popcorn
  }
})

