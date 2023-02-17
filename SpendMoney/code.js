const productsEl = document.querySelector(".cards");


function renderCard() {
  products.forEach((product) => {
    productsEl.innerHTML += `
                        <div class="card">
                        <div class="cardDescription">
                          <div class="cardImage"> 
                            <img src=${product.image}></div>
                        </div>
                        <div class="cardBottom">
                          <div class="cardPrice "> ${product.price}</div>
                          <div class="cardTitle"> ${product.name}</div>
                          <div class="btns">
                            <button class="cardDelete" onclick="delete(${product.id})">-</button>
                            <div class="counter">0</div>
                            <button class="cardAdd" onclick="add(${product.id})">+</button>
                          </div>
                      </div>
                    </div>
        `;
  });

}

renderCard();