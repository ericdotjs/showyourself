import './style.css'
import {createIcons, Utensils ,Coffee, ShoppingBag, Shirt, FerrisWheel, Popcorn   } from 'lucide'
//import { setupCounter } from './counter.ts'

let application_name = 'Show Yourself';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section class="section_header">
<div class="title_app">
<h1>${application_name}</h1>
</div>
</section>
<section>
<p>Select what do you wish to see</p>
</section>
<section class="interest_selector">
<div class="interest_layout">
<button><i data-lucide="coffee"></i></button>
<button><i data-lucide="utensils"></i></button>
<button><i data-lucide="shoppingBag"></i></button>
<button><i data-lucide="Shirt"></i></button>
<button><i data-lucide="FerrisWheel"></i></button>
<button><i data-lucide="Popcorn"></i></button>
</div>
</section>
`

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

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

