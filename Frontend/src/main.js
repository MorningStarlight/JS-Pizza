/**
 * Created by chaika on 25.01.16.
 */


$(function(){
    //This code will execute when the page is ready
    var fs = require('fs');
    
    var PizzaMenu = fs.readFileSync('./pizza/PizzaMenu');
    var PizzaCart = fs.readFileSync('./pizza/PizzaCart');
    var Pizza_List = fs.readFileSync('./Pizza_List');
    
    PizzaCart.initialiseCart();
    PizzaMenu.initialiseMenu();
 

});