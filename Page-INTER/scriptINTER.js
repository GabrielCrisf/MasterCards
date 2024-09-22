
const CardNum = localStorage.getItem("CardNum");

document.getElementById("Title").textContent = `${"Card " +CardNum}`

let Naipes = ["Paus","Espa", "Ouro", "Copa"]

document.getElementById("Paus").onclick = ()=>{

    localStorage.setItem("CardNum",CardNum)
    localStorage.setItem("CardNaipe","Paus")
    window.location.href='../PagesEspc/Nutra.html'
}

document.getElementById("Espa").onclick = ()=>{

    localStorage.setItem("CardNum",CardNum)
    localStorage.setItem("CardNaipe","Espa")
    window.location.href='../PagesEspc/Nutra.html'
}

document.getElementById("Ouro").onclick = ()=>{

    localStorage.setItem("CardNum",CardNum)
    localStorage.setItem("CardNaipe","Ouro")
    window.location.href='../PagesEspc/Nutra.html'
}

document.getElementById("Copa").onclick = ()=>{

    localStorage.setItem("CardNum",CardNum)
    localStorage.setItem("CardNaipe","Copa")
    window.location.href='../PagesEspc/Nutra.html'
}

document.getElementById("Voltar").onclick = ()=>{

    localStorage.setItem("CardNum",null)
    localStorage.setItem("CardNaipe",null)
    window.location.href='../index.html'
}





