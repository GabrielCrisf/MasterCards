
let CardNum = localStorage.getItem("CardNum")
let CardNaipe = localStorage.getItem("CardNaipe")

// Muda o Tituilo
document.getElementById("Title3").textContent = `${CardNum} ${CardNaipe}`

// Muda a Logo:
const Logo = document.querySelector(".Logo")
Logo.style.backgroundImage = `url('css/${CardNaipe}.png')`
Logo.classList.add(`${CardNaipe}`)



//Preenche o texto:
import { copas } from "./Copas.js";
import { espa } from "./Espa.js";
import { ouro } from "./Ouro.js";
import { paus } from "./Paus.js";

const Paus = paus();
const Espa = espa();
const Ouro = ouro()
const Copa = copas();

const DeckTotal = {
    "Paus":Paus,
    "Espa":Espa,
    "Ouro":Ouro,
    "Copa":Copa,
}

console.log(DeckTotal)

document.getElementById("MAO").textContent = `${DeckTotal[CardNaipe][CardNum]["MAO"]}`
document.getElementById("CAMPO").textContent = `${DeckTotal[CardNaipe][CardNum]["CAMPO"]}`
document.getElementById("DESCT").textContent = `${DeckTotal[CardNaipe][CardNum]["DESCT"]}`

let Naipes = ["Paus","Espa", "Ouro", "Copa"]
//percorre os circles NEXT:
let i=1

for(let N of Naipes)
{
    if(CardNaipe != N)
    {
        const LogoNex = document.getElementById(`Next ${i}`)
        LogoNex.style.backgroundImage = `url('css/${N}.png')`
        LogoNex.classList.add(`${N}`)
        
        LogoNex.onclick = ()=>
            {
                localStorage.setItem("CardNum", CardNum)
                localStorage.setItem("CardNaipe", N)
                window.location.reload()
            }
        i=i+1
    }
}




