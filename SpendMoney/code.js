let money = 20000000000000;
let sMoney = 0;
let limitProduct = 500;

const productsEl = document.querySelector(".cards");
let totalMoney = document.querySelector(".totalMoney");
let spendMoney = document.querySelector(".spendMoney");
let productInReceipt = document.querySelector(".productInReceipt");
let resultPriceReceipt = document.querySelector(".resultPriceReceipt");

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
                            <button class="cardDelete" onclick="deleteCard(${product.id})">-</button>
                            <div class="counter+${product.id}">${product.count}</div>
                            <button class="cardAdd" onclick="addCard(${product.id})">+</button>
                          </div>
                      </div>
                    </div>
        `;
  });
}

renderCard();

function renderReceipt() {
  productInReceipt.innerHTML = "";
  products.forEach((product) => {
    if(product.count > 0){
      productInReceipt.innerHTML += `<p> ${product.name} X${product.count}  ..............  ${product.totalPrice} ₽ \n</p>`;
    }
  });
}

function deleteCard(id){
  products.forEach((product) => {
    if(id == product.id && product.count > 0){

     product.count --;
     money += product.price;
     sMoney -= product.price;
     product.totalPrice -= product.price;

     spendMoney.innerHTML = "Потрачено: " + sMoney + " ₽";
     totalMoney.innerHTML = "Всего: " + money + " ₽"; 
     resultPriceReceipt.innerHTML = "Итого: " + sMoney;

     renderReceipt();
     productsEl.innerHTML = "";
     renderCard();
    }
   });
}

function addCard(id){
  products.forEach((product) => {
    if(id == product.id  && product.count < limitProduct && product.price <= money){

     product.count++;
     money -= product.price;
     sMoney += product.price;
     product.totalPrice += product.price;

     totalMoney.innerHTML = "Всего: " + money + " ₽";
     spendMoney.innerHTML = "Потрачено: " + sMoney + " ₽";
     resultPriceReceipt.innerHTML = "Итого: " + sMoney;

     renderReceipt();

     productsEl.innerHTML = "";
     renderCard();

    if(money == 0){
      totalMoney.innerHTML = "Тебе удалось потратить все деньги!!!";
      spendMoney.innerHTML = "Поздравляю!!!";
    }
    }
   });
}

function saveInFile(){
  let text = document.querySelector('.receipt').textContent;
  let file = document.createElement('a');
  file.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  file.setAttribute('download', 'Ваш чек.txt');
  file.style.display = 'none';
  document.body.appendChild(file);
  file.click();
  document.body.removeChild(file);
}