// Task - 1 ---------------------
let  user = {
    firstname: 'giorgi',
    lastname: 'smith',
    age: 25,
    studentstatus: 'Active'
  };
console.log(user.studentstatus);

// Task - 2 ---------------------------
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
let z = 0;
while(z < numbers.length){
    console.log(numbers[z]);
    z++;
}
// Task 3 --------------------------
 for (i = 0; i < numbers.length; i++) {
     if (numbers[i] > 5 ) {
        console.log(numbers[i]);
    }
 }

 // Task 4 ---------------------
  let userName = {
     	name: 'david',
     	age:  20,
     	studentstatus: 'active'
    }
     if (userName['age'] > 20 && userName.studentstatus == 'active') {
         console.log('hello');
     } else if  (userName.name == 'david') {
         console.log('hello David');
     } else if (userName.studentstatus == 'active' || userName['age'] < 25) {
         console.log('hello world');
     } else {
         console.log('error');
     }
     // Task 5 ---------------------
     let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ]
     for ( let i of array) {
        if (typeof i == 'string') {
         console.log(i);
        }
    }
    // Task 6 --------------------
    let users =  [
             {username:'test1', status: false},
             {username:'test2', status: false},
             {username:'test3', status: true}
         ];
        
         for ( let x of users) {
             if (x.status == true) {
                 console.log(x);
             }
         }
         

