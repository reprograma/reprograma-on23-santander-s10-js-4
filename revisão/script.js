const container = document.getElementById('demo')

function createCard(card){
    return `
    <div class="card">
        <img src="${card.card_images[0].image_url}"/>
        <h2 class="title">${card.name}</h2>
        <p class="type">${card.type}</p>
        <p class="description">${card.desc}</p>
    </div>
    `
}

async function getCards(){
    try {
        const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        const json = await response.json()
        const cards = json.data
        const oursCards = cards.slice(200, 205)
        return oursCards
    } catch (erro) {
        console.error("Erro:" + erro)
    }
}

async function main(){
    const cards = await getCards()
    cards.map((card) => container.innerHTML += createCard(card))
}

main()

getCards()