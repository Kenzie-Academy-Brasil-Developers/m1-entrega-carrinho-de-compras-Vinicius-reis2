//############################### ARRAY DE PRODUTOS #################################

const productsCart = [
    {
        id: 1,
        name: "Banana",
        price: 2.30
    },
    {
        id: 2,
        name: "maça",
        price: 3.20
    },
    {
        id: 3,
        name: "uva",
        price: 1.80
    },
    {
        id: 4,
        name: "jaca",
        price: 10.99
    },
    {
        id: 5,
        name: "limão",
        price: 0.90
    },
    {
        id: 6,
        name: "morango",
        price: 4.00
    },
    {
        id: 7,
        name: "goiaba",
        price: 1.00
    },
    {
        id: 8,
        name: "pêra",
        price: 8.10
    },
]

//################################## FUNCTIONS #####################################

function createMain(main){
    const crtmain = document.querySelector("body")
    let tagMain = document.createElement("main")
    tagMain.setAttribute("class", "cass__main")
    crtmain.appendChild(tagMain)
}
createMain()

function createUl(ul){
    const ctrUl = document.querySelector("main")
    let tagUl = document.createElement("ul")
    ctrUl.appendChild(tagUl)
}
createUl()

function createLi(li){
    const tagList = document.querySelector("ul")
    for (let i = 0; i < li.length; i++){

        let tagLi = document.createElement("li")
        tagLi.setAttribute("class", "liProdutos")

        let tagNome = document.createElement("h2")
        tagNome.innerText = li[i].name;

        let tagPrice = document.createElement("p")
        tagPrice.innerHTML = li[i].price;


        tagList.appendChild(tagLi)
        tagLi.append(tagNome, tagPrice)
    }
}
createLi(productsCart)

function createSome(soma){
    let totalSoma = Number()
    for (let i = 0; i < soma.length; i++){
        totalSoma += soma[i].price
    }
    console.log(totalSoma)

    let resultMain = document.querySelector("main");
    let tagSection = document.createElement("section");
    
    let tagTotalSoma = document.createElement("h3");
    tagTotalSoma.innerHTML = totalSoma;

    let tagButton = document.createElement("button");
    tagButton.innerText = "Finalizar Compra"

    resultMain.appendChild(tagSection);
    tagSection.append(tagTotalSoma, tagButton);
}

createSome(productsCart)