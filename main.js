// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);

// 1: Show me how to calculate the average price of all items.
function question1() {
  let listItems = 0;
  for (let i = 0; i < data.length; i++) {
    listItems += data[i].price;
    console.log(listItems);
  }
  let averageprice = listItems / 25;
  console.log(averageprice);

}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let listItems = [];
  for (let i = 0; i < data.length; i++) {
    if ((data[i].price >= 13.99) && (data[i].price <= 18.00)) {
      listItems.push(data[i].title);

    }
  }
  console.log("Items that cost between $14.00 USD and $18.00 USD:", listItems);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  let itemGBP = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      itemGBP.price = data[i].price;
      itemGBP.name = data[i].title;
    }
  }
  console.log(itemGBP);
}

// 4: Display a list of all items who are made of wood.
function question4() {
  let woodItems = {};
  for (let i = 0; i < data.length; i++) {
    for (let woodItems = items.forEach(function(item) {
      return item.materials.indexOf("wood") >= 0;

    }); console.log(woodItems);

    // 5: Which items are made of eight or more materials?
    //    Display the name, number of items and the items it is made of.
    function question5() {
      let materialItems = items.forEach(function(item) {
        if (item.materials >= 0 && item.materials <= 8)
          materialItems.push(items);
        }
      );
      console.log(materialItems);

      // 6: How many items were made by their sellers?
      // Answer:
      function question6() {
        let whoMade = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i].seller === "i_did") {
            whoMade = whoMade + 1
          }
        }
      };
       console.log(whoMade);
