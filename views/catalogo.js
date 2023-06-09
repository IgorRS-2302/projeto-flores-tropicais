const catalogo = document.getElementById("listaCatalogo");

let allPages;
let currentPage = 1;
let pages = 1;
let numFlor;
let wSize = window.innerWidth;

window.addEventListener("resize", ()=>
    {
        wSize=window.innerWidth;
        pages = 1;
        catalogo.innerHTML = "";
        renderCatalogo();
    });


function renderCatalogo(){
    let newPage = createPage(pages);
    for(let flor of flores){
        numFlor = flor.num;
        if(wSize > 992){
            if(flor.title !== ""){
                newPage.children[0].appendChild(renderCard(flor));
                if(flor.num%8 === 0){
                    catalogo.appendChild(newPage);
                    if(numFlor != flores.length){
                        pages++;
                        newPage = createPage(pages);
                    }
                }
            }
            if(flor.title === ""){
                catalogo.appendChild(newPage);
            }
        }else{
            if(flor.title !== ""){
                newPage.children[0].appendChild(renderCard(flor));
                if(flor.num%4 === 0){
                    catalogo.appendChild(newPage);
                    if(numFlor != flores.length){
                        pages++;
                        newPage = createPage(pages);
                    }
                }
            }
            if(flor.title === ""){
                catalogo.appendChild(newPage);
            }
        }
    }
    showPage();
}

function createPage(n){
    const page = document.createElement("div");
    const pageContent = document.createElement("div");
    pageContent.classList.add("pageContent");
    page.classList.add("page");
    page.setAttribute("value", n);
    page.setAttribute("hidden", "true");
    page.appendChild(pageContent);
    return page;
}
function nextPage(){
    currentPage++;
    if(currentPage>pages)currentPage = 1;
    showPage();

}
function backPage(){
    currentPage--;
    if(currentPage<1)currentPage = pages;
    showPage();
}

function showPage(){
    allPages = document.querySelectorAll(".page");
    for(let p of allPages){
        const v = p.getAttribute("value");
        if(v == currentPage){
            p.classList.add("w3-show");
        }else{
            p.classList.remove("w3-show");
        }
    }
}

renderCatalogo();