/*
 * Shopping Cart Requirements:
 * - Before you start, please run `npm run start:api` to start mock API server
 * - data for mock APIs come from ./db/db.json
 * - There are 2 APIs you need to call:
 *     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
 *     - http://localhost:4002/products : this will provide a list of products with full details
 *
 * We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
 * product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
 * inside table#shopping-cart-tbl as below:
 * ID     Item
 * 1001   TV
 * 1002   iPad
 *
 * */
const View = {
  init: () => {
    const tbodyElem = document
      .getElementById("shopping-cart-tbl")
      .querySelector("tbody")

    console.log("TODO: Please see the above requirement")

    const productsList = "http://localhost:4002/products/"
    const cartList = "http://localhost:4002/cart/"

    fetch(cartList)
      .then(function (response) {
        response.json().then(function (dataCart) {
          dataCart.map((item) => {
            fetch(productsList).then(function (response) {
              response.json().then(function (dataProduct) {
                dataProduct.map((itemList) => {
                  
                  const productID = itemList.id
                  const productName = itemList.name

                  const container = document.querySelector("tbody")
                  const listItem0 = document.createElement("tr")
                  const listItem = document.createElement("th")
                  const listItem2 = document.createElement("td")

                  listItem.textContent = productID
                  listItem2.textContent = productName
                  container.appendChild(listItem0)
                  container.appendChild(listItem)
                  container.appendChild(listItem2)
                })
              })
            })
          })
        })
      })
      .catch(function (error) {
        console.log("Request failed", error)
      })
  },
}
document.addEventListener("DOMContentLoaded", View.init)
