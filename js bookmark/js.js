let test = document.getElementById('widget_metal').getElementsByTagName('span');
console.log(test);
console.log(test [0].innerText);
console.log(test.innerText [0]);


firstChild

// let test = document.getElementById('widget_metal').getElementsByTagName('span');
// console.log(test);
// let test2 = test[0];
// console.log(test2);
// let test3 = document.getElementById('widget_metal').getElementsByTagName('span');
// console.log(test3 [0].textContent);


let priceAu = document.getElementById('widget_metal').getElementsByTagName('span');
console.log(priceAu [0].textContent);
let priceAuKg = function() {
    priceAu [0].textContent * 1000;
}
console.log(priceAuKg);


console.log($('#widget_metal', this)).innerText;




// let priceAu = document.getElementById('widget_metal').getElementsByTagName('span');
// let test = priceAu [0].textContent;
// console.log(test);
// test = test.replace(/ /g, '');
// console.log(test);
// test = test.replace(',', '.');  
// //test = parseFloat(test.replace(',', '.') && test.replace(/ /g, '') );
// console.log(typeof(test)); 
// parseFloat(test);
// console.log(typeof(test)); 
// let test2 = test * 1000; 
// console.log(test2); 
// console.log(typeof(test2)); 

//test = parseInt(test.replace(/\D/g, ''));
//test = Number.parseInt(test.replace(/\D/g, ''));


let x = 23.56
let y = 44.44
let c = x + y 
console.log(c);




javascript:(function(){
let priceAu = document.getElementById('widget_metal').getElementsByTagName('span');
let priceAuRub = priceAu [0].textContent;
priceAuRub = priceAuRub.replace(/ /g, '');
priceAuRub = priceAuRub.replace(',', '.');  
let priceAuRubKG = priceAuRub * 1000; 

let exchangeDollar = document.getElementById('widget_exchange').getElementsByClassName('weak');
let exchangeDollarToRub = exchangeDollar [0].textContent;
exchangeDollarToRub = exchangeDollarToRub.replace(/[^,\d]/g, '');
exchangeDollarToRub = exchangeDollarToRub.replace(',', '.').trim();

priceAuDolLarKG = priceAuRubKG / exchangeDollarToRub;
alert('Цена кг золота ' + priceAuDolLarKG.toFixed(2) + ' $');
})();

javascript:(function(){ let priceAu = document.getElementById('widget_metal').getElementsByTagName('span'); let priceAuRub = priceAu [0].textContent; priceAuRub = priceAuRub.replace(/ /g, ''); priceAuRub = priceAuRub.replace(',', '.');   let priceAuRubKG = priceAuRub * 1000;   let exchangeDollar = document.getElementById('widget_exchange').getElementsByClassName('weak'); let exchangeDollarToRub = exchangeDollar [0].textContent; exchangeDollarToRub = exchangeDollarToRub.replace(/[^,\d]/g, ''); exchangeDollarToRub = exchangeDollarToRub.replace(',', '.').trim();  priceAuDolLarKG = priceAuRubKG / exchangeDollarToRub; alert('%D0%A6%D0%B5%D0%BD%D0%B0 %D0%BA%D0%B3 %D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%B0 ' + priceAuDolLarKG.toFixed(2) + ' $'); })();



javascript:(function(){
    let priceAu = document.getElementById('widget_metal').getElementsByTagName('span');
    let priceAuRub = priceAu [0].textContent;
    priceAuRub = priceAuRub.replace(/ /g, '');
    priceAuRub = priceAuRub.replace(',', '.');  
    let priceAuRubKG = priceAuRub * 1000; 
    
    let exchangeDollar = document.getElementById('widget_exchange').getElementsByClassName('weak');
    let exchangeDollarToRub = exchangeDollar [0].textContent;
    exchangeDollarToRub = exchangeDollarToRub.replace(/[^,\d]/g, '');
    exchangeDollarToRub = exchangeDollarToRub.replace(',', '.').trim();
    
    priceAuDolLarKG = priceAuRubKG / exchangeDollarToRub;
    alert('Цена кг золота ' + priceAuDolLarKG.toFixed(2) + ' $');
    })();


    javascript:(function(){document.querySelector('video').playbackRate = 1.5})();
    
    let x = 5; alert( x++ );
    