const Table = document.getElementById("GridCont")

const Cards = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "","", "K","Q","J", "Joker"
];

/* 
            <div id="Card-1" class="Card">
                <div class="Circle" onclick="window.location.href='./pages/page1.html'">1</div>
            </div>
*/

for (let Card of Cards)
{
    const div = document.createElement("div");

    //Fora
    div.id = Card
    div.classList.add(`Card`)

    //Circle
    const Circle = document.createElement("div");
    Circle.classList.add(`Circle`)
    Circle.textContent = Card
    Circle.setAttribute("value",`${Card}`)
    



    Circle.onclick = () => {

        // Salva LocalStorage:
        localStorage.setItem("CardNum",`${Card}`)
        //Muda a Janela:
        window.location.href = `Page-INTER/PageINTER.html`;
    };


    div.appendChild(Circle)
    Table.appendChild(div)
}

