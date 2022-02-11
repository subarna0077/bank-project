'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts=[account1,account2,account3,account4];



const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements= function(movements){

  containerMovements.innerHTML='';

  movements.forEach(function(mov,i){

    const type= mov>0? 'deposit':'withdrawal';
    const html= `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    
    <div class="movements__value">${mov}</div>
  </div>
    `;
     containerMovements.insertAdjacentHTML('afterbegin',html); 
  });

 
 }

       



const createusername= function(accs){
 accs.forEach(function(acc){
   acc.username= acc.owner.toLowerCase().split(' ').map(name=> name[0]).join('');
 })



};
createusername(accounts);
console.log(accounts);

const calcDisplayBalance= function(accs){
const balance= accs.reduce((acc,cur)=>
 acc+ cur,0);
 labelBalance.textContent=`${balance} $`;

//  movements.reduce((acc,cur)=>
// acc+ cur,0
}


const calcDisplaySummary= function(accs){
  const incomes= accs.movements.filter(mov=> mov>0).reduce((accu,sum,i,arr)=> 
  accu+sum,0);
  labelSumIn.textContent= incomes;
  
  const withdrawal= accs.movements.filter(mov=> mov<0).reduce((accu,sum,i,arr)=> 
  accu+sum,0);
  labelSumOut.textContent=Math.abs( withdrawal);

  const interest= accs.movements.filter(mov=> mov>0).map(mov=> mov* accs.interestRate/100).
  filter((acc,i)=> acc>=1).reduce((accu,sum,i,arr)=> 
  accu+sum,0);

  labelSumInterest.textContent=interest;


}



let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  console.log('Hey');

 currentAccount= accounts.find(acc=> acc.username === inputLoginUsername.value);
 console.log(currentAccount);

 if(currentAccount?.pin===Number(inputLoginPin.value)){

  // display movemetns

  labelWelcome.textContent=`Welcome back , ${currentAccount.owner.split(' ')[0]}`;
  containerApp.style.opacity=100;
  inputLoginUsername.value=inputLoginPin.value= '';

  inputLoginPin.blur();


  displayMovements(currentAccount.movements);

  // display balance
  calcDisplayBalance(currentAccount.movements);


  // display summary
  calcDisplaySummary(currentAccount);


   console.log('Login');



};
});

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount= Number(inputTransferAmount.value);
  const receiverAcc= accounts.find(acc=> acc.username === inputTransferTo.value);
  console.log(receiverAcc,amount);
  receiverAcc.movements.push(amount);



})

























const movements=[200,450,-400,3000,-650,-130,70,1300];

const firstWithdrawal= movements.find(mov=> mov<0);
console.log(firstWithdrawal);


const account= accounts.find(acc=> acc.owner==='Jessica Davis');

// const movements=[200,450,-400,3000,-650,-130,70,1300];
// const deposits= movements.filter(function(mov){
//   return mov>0;

// });
// console.log(deposits);

// const withdrawals= movements.filter(mov=> mov<0);
// console.log(withdrawals);

// const balance=movements.reduce((acc,cur)=>
// acc+ cur,0
// );
// console.log(balance);


const calcAverageHumanAge= function(ages){
  // const humanAge= ages.map(age=> age<=2? 2*age: 16+ age*4).filter(age=> age>=18);
  
    
  //  console.log(humanAge);
  //  const average= humanAge.reduce((acc,mov,i)=> 
  //  acc+mov,0
  //  )/humanAge.length;

  const humanAge= ages.map(age=> (age<=2? 2*age: 16+ age*4)).filter(age=> age>=18).reduce((acc,mov,i,ar)=> acc+mov/ar.length,0);
  
    
  //  console.log(humanAge);
  //  const average= humanAge.reduce((acc,mov,i)=> 
  //  acc+mov,0
  //  )/humanAge.length;

   return humanAge;
   
}
 

  
 






const x= calcAverageHumanAge([5,2,4,1,15,8,3]);
console.log(x);

























// const currencies= new Map([
//   ['usd','United States dollar'],
//   ['eur','Euro'],
//   ['GBD','Pound Sterling'],
// ]);

// currencies.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique= new Set(['usd','sss','dff','sunn']);
// currenciesUnique.forEach(function(value,key,map){
//   console.log(`${key}: ${value}`);
// })












// movements.entries();
// for(const[i,key] of movements.entries()){
//   if(key>0){
//     console.log(`${i +1 }: YOu deposited ${key}`)
//   }
//   else{
//     console.log(`${i+1}: YOu withdrew ${Math.abs(key)}`)

//   }
  
// }








//  movements.forEach(function(movement,index,array){
//    if(movement>0){
//      console.log(`${index+1}:You deposited ${movement}`)
//    }else{
//     console.log(`${index+1}:You withdrew ${Math.abs(movement)}`)

//    }


//  })











// let arr=['a','b',
// 'c','d','e'];

// //slice

// console.log(arr.slice(3));
// console.log(arr.slice(1,3));
// console.log(arr.slice(-2));

//splice

// console.log(arr.splice(2));


// arr.splice(2,0,'suman');
// arr.splice(3,1);
// console.log(arr);
// const months=['January',22,'feb','mrch'];

// months.splice(2,0,22,23,23);
// console.log(months);

// //concat
// const letters= arr.concat(months);
// console.log(letters);

// //join method
// console.log(letters.join(' + '))


const eurToUsd= 1.1;

const movementUsd=movements.map(
  mov=> mov= mov* eurToUsd);






console.log(movements);
console.log(movementUsd);



























const checkdogs= function(juliadogs,katedogs){

 const correctedjuliadogs= juliadogs.slice(1,-2);
 console.log(correctedjuliadogs);

 const dogs= [...correctedjuliadogs,...katedogs];


 console.log(dogs);
 dogs.forEach(function(dog ,i){
   if(dog>=3) console.log(`dog ${i+1} is an adult `);
   else console.log(`dog ${i+1} is an still a puppy `)
 })
 

//  correctedjuliadogs.splice(0,1);
//  correctedjuliadogs.splice(-2);
//  console.log(correctedjuliadogs);





};

checkdogs([3,5,2,12,7],[4,1,15,8,3]);








