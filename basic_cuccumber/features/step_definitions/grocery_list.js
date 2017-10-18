const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert-plus')

let GroceryList = require('../../script/grocery-list.js');  

defineSupportCode(function({Given, When, Then}) {
  let myList;
  let item = 'Pizza'
  Given('I have an empty grocery list', function () {
     // Write code here that turns the phrase above into concrete actions
     myList = GroceryList.create()
   });
 
   When('I add an item to the list', function () {
     // Write code here that turns the phrase above into concrete actions
     myList.addItem(item)
   });

   Then('the grocery list contains a single item', function () {
     // Write code here that turns the phrase above into concrete actions
     assert.equal(myList.list.length, 1)
   });
   
   Then('I can access that item from the grocery list', function () {
     // Write code here that turns the phrase above into concrete actions
     assert.equal(myList.list[0], item)
   });
  
})  
