/* 1.done
Write a function called doubleValuesWithMap which accepts an array 
and returns a new array with all the values in the array passed to the function doubled
*/
function doubleValuesWithmap(value)
{
    let result = value.map(function(element){
        return element * 2
    })
    console.log(result)
}
/* 2.done
Write a function called valTimesIndex which accepts an array and 
returns a new array with each value multiplied by the index it is currently at in the array.
*/
function valTimesIndex(value)
{
    let result = value.map(function(element,index){
        return element * index
    })
    console.log(result)
}
/* 3.done
Write a function called extractKey which accepts an array of objects and some key and 
returns a new array with the value of that key in each object.
*/
function extractKey(value)
{
    let result = value.map(function(element,index){

        return element.name
    },)
    console.log(result)

}
/* 4.done
Write a function called extractFullName which accepts an array of objects and 
returns a new array with the value of the key with a name of “first” and 
the value of a key with the name of “last” in each object, concatenated together with a space.
*/
function extractFullName(value)
{
    let result = value.map(function(element,index){
        return element.first + " " + element.last
    },)
    console.log(result)
}