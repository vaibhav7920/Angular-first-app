/*  Type  Alias
            when same type of object is needed to be created multiple time.
            Create a custom type and use that to declare the variables of same type
*/

type Car ={         // TYPE Car is created
    name: string,
    tyre: number,
    isPowerstayring: boolean
    
};

let i20 : Car;      // i20 is a variable of Car type
i20.name ="Sportz";
i20.isPowerstayring =false;
i20.tyre=4;


let cars : Car[];  // cars is an array of Car type
cars =[
    {"name" : "Thar","isPowerstayring" : false,"tyre": 4},
    {"name" : "Grand Vitara","isPowerstayring" : true,"tyre": 4}, i20];

    console.log(cars[0].name);



