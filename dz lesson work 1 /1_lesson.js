let money, time;


function start() {
   money = +prompt('Ваш бюджет на мечяц?', '');
   time = prompt('Введите дату в формате YYYY-MM-DD', '');

   while(isNaN(money) || money == '' || money == null){
      money = +prompt('Ваш бюджет на мечяц?', '');
   }
}

//start();


let appData = {
   monyData: money,
   timeData: time,
   expenses: {
   },
   optionalExpenses: {
   },
   income: [],
   savings: false,
};

// let costItem = prompt('Введите обязательную статью расходов в этом месяце','');
// let costItemMony = prompt('Во сколько обойдется?', '');
// appData.expenses.costItem = costItemMony;



function choseExpenses () {
   for (let i = 0; i < 2; i++) {
      let costItem = prompt('Введите обязательную статью расходов в этом месяце',''),
          costItemMony = +prompt('Во сколько обойдется?', '');
   
      if( (typeof(costItem)) === 'string' && (typeof(costItem)) != null && (typeof(costItemMony)) != null 
         && costItemMony != '' &&  costItem != '' && costItem.length < 50 ){
         appData.expenses[costItem] = costItemMony;
      } else {
         i = i - 1; 
      }    
   }
}
//choseExpenses();

console.log(appData.expenses);

function detectDayBudget () {
   appData.monyPerDay = (appData.monyData / 30).toFixed();
   alert('Ваш бюджет на день = ' + appData.monyPerDay);
}
//detectDayBudget();


function detectLevel () {
   if(appData.monyPerDay < 100){
      console.log("маловато");
   } else if( 100 < appData.monyPerDay < 2000){
      console.log("норм");
   } else if (appData.monyPerDay > 2000){
      console.log("царюга");
   } else {
      console.log("что-то пошло не так");
   }
}
//detectLevel();



function chooseOptExpenses () {
   for (let i = 0; i < 3; i++) {
      let costOptItem = prompt('Статья необязательных расходов?',''),
          costOptItemMony = +prompt('Во сколько обойдется?', '');
   
      if( (typeof(costOptItem)) === 'string' && (typeof(costOptItem)) != null && (typeof(costOptItemMony)) != null 
         && costOptItemMony != '' &&  costOptItem != '' && costOptItem.length < 50 ){
         appData.optionalExpenses[costOptItem] = costOptItemMony;
      } else {
         i = i - 1; 
      }    
   }
}
//chooseOptExpenses();

let x = 5; 
alert( x++ );

alert( "1"[0] );


