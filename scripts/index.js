// coupon code
function discountCondition(btnId) {
  const bntCoupon = document.getElementById(btnId);

  const totalPrice = document.getElementById("total-price").innerText;
  if (totalPrice >= 200) {
    bntCoupon.removeAttribute("disabled");
  }
}

// discountCondition codes
document.getElementById("btn-coupon").addEventListener("click", function () {
  const couponField = document.getElementById("coupon-field");
  const couponValue = couponField.value;
  if (couponValue === "SELL200") {
    const totalPrice = document.getElementById("total-price").innerText;
    const totalPriceFixed = parseFloat(totalPrice).toFixed(2);
    if (totalPriceFixed >= 200) {
      const discount = 0.2 * totalPriceFixed;
      const discountFixed = discount.toFixed(2);
      const discountAmount = document.getElementById("total-discount");
      discountAmount.innerText = discountFixed;
      const newTotal =
        parseFloat(totalPriceFixed) - parseFloat(discountAmount.innerText);

      const newTotalFixed = newTotal.toFixed(2);
      const total = document.getElementById("total-amount");
      total.innerText = newTotalFixed;
    }
  } else {
    alert("You are using wrong coupon code.");
  }

  couponField.value = "";
});

// make dynamic purchase button
function dynamicPurchase(elementId) {
  const totalPrice = document.getElementById(elementId).innerText;
  const purchase = document.getElementById("btn-purchase");
  if (totalPrice > 0) {
    purchase.removeAttribute("disabled");
  } else {
    purchase.setAttribute("disabled");
  }
}

// card one function code
function getCardOneDetails() {
  const cardItemName = getElementIemName("card-detail-one");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-one");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card tow function code
function getCardTowDetails() {
  const cardItemName = getElementIemName("card-detail-tow");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-tow");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card three function code
function getCardTreeDetails() {
  const cardItemName = getElementIemName("card-detail-three");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-three");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card sportOne function code
function getCardSportOneDetails() {
  const cardItemName = getElementIemName("card-detail-sport-one");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-sport-one");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card sportTow function code
function getCardSportTowDetails() {
  const cardItemName = getElementIemName("card-detail-sport-tow");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-sport-tow");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card sportThree function code
function getCardSportThreeDetails() {
  const cardItemName = getElementIemName("card-detail-sport-three");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-sport-three");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card furnitureOne function code
function getCardFurnitureOneDetails() {
  const cardItemName = getElementIemName("card-detail-furniture-one");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-furniture-one");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card furnitureTow function code
function getCardFurnitureTowDetails() {
  const cardItemName = getElementIemName("card-detail-furniture-tow");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-furniture-tow");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}
// card furnitureThree function code
function getCardFurnitureThreeDetails() {
  const cardItemName = getElementIemName("card-detail-furniture-three");
  const productList = document.getElementById("product-list");
  const li = document.createElement("li");
  li.innerText = cardItemName;
  productList.appendChild(li);

  const itemPrice = getElementNumber("product-price-furniture-three");
  const totalPrice = document.getElementById("total-price");
  const previousTotalString = totalPrice.innerText;
  const previousTotal = parseFloat(previousTotalString);
  const totalAmount = itemPrice + previousTotal;
  const fixedTotal = totalAmount.toFixed(2);
  totalPrice.innerText = fixedTotal;
}

// get product name
function getElementIemName(elementId) {
  const getElementId = document.getElementById(elementId);
  const getElementValue = getElementId.childNodes[3].innerText;
  return getElementValue;
}

// get price innerText
function getElementNumber(priceId) {
  const getElement = document.getElementById(priceId);
  const getElementString = getElement.innerText;
  const getElementValue = parseFloat(getElementString);
  return getElementValue;
}

// set card product purchase and discount condition in one function
function getPurchaseAndDiscountCondition() {
  dynamicPurchase("total-price");
  discountCondition("btn-coupon");
}

// pageRefresher function
function pageRefresher() {
  location.reload();
}
