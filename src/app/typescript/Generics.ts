/*  Below code is used  to create a new array which returns an array with value in beginning and array followed by it*/
function insertAtBeginning (array: any[], value: any){
    const newArray =[value, ...array];
    return newArray;
}

const demoArray =[1,2,3];
/* The below array is of type any
But it has only numbers in it
*/
const updatedArray =insertAtBeginning(demoArray, -1); // outpput = [-1,1,2,3]

/* The below array is of type any
But it has only string in it
*/
const demoArray2 =['a','b','c'];
const updatedArray2 =insertAtBeginning(demoArray2, 'z') // outpput = ['z','a','b','c']



/* To Solve the issue of data type of a function we use generics */
function insertAtBeginning2<T> (array: T[], value: T){
    const newArray =[value, ...array];
    return newArray;
}

const demoArray3 =[1,2,3];
/* The below array is of type Number*/
const updatedArray3 =insertAtBeginning(demoArray, -1); // outpput = [-1,1,2,3]

/* The below array is of type String But it has only string in it */
const demoArray4 =['a','b','c'];
const updatedArray4 =insertAtBeginning(demoArray2, 'z') // outpput = ['z','a','b','c']
