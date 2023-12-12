//Primitives - number, string, boolean

let age : number
age =12; // can be assigned integer
age =235.678;  //// can be assigned float

let num : number =14; // can be assigned when declared

let num1 :Number; // this points at number object and not primitive data type

let userName: string;
userName= 'Vaibhav';

let isInstructor : boolean;
isInstructor=true;


/*

COMPLEX  DATA TYPES

*/

let hobbies : string[]; // array of string
hobbies = ['Sports', 'Cooking'];


/*  OBJECT */ 

let person: { // this the way to tell typeScript the data types that can be stored in an object
    name: string;
    age :number;
 }

 person ={          // person can only store the string and number data types with variables name and age as specifed in declaration
    name: "roshnan",
    age:45,
 }

/* Array of objects */
 let people:{ 
    name: string;
    age :number;
 }[];     // Array of objects


/* ANY  DATA TYPE Start  */

let student :any; // any is the default type
 student ={
    name: "max",
    age: 10
 }

 student={        // any type can store any data which is like javascript
    isStudent:false
 }


/*  TYPE INFERENCE */ 

let course ="Maths"; // we can initallize the variable without telling the datatype

//course=23;  // this line will throw error because typeScript implicitly assigns string type at the time of initialization to course