let toggle = document.querySelector(".toggle");

let price_basic = document.querySelector(".price-basic");
let price_pro = document.querySelector(".price-professional");
let price_master = document.querySelector(".price-master");



function activate(){
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")){
        price_basic.innerHTML = 19.99;
        price_pro.innerHTML = 24.99;
        price_master.innerHTML = 39.99;
    } else {
        price_basic.innerHTML = 199.99;
        price_pro.innerHTML = 249.99;
        price_master.innerHTML = 399.99; 
    }

}