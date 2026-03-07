let cart = [];

function addToCart(name,price){

cart.push({
name:name,
price:price
});

alert("تم إضافة المنتج للسلة");

}

function checkout(){

let message="طلب جديد:%0A";

cart.forEach(item=>{
message+=item.name+" - "+item.price+" جنيه%0A";
});

window.open("https://wa.me/201234567890?text="+message);

}