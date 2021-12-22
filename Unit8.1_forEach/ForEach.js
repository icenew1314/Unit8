/*1.done
Write a function called doubleValues which accepts an array 
and returns a new array with all the values in the array passed to the function doubled
*/
function doubleValues(arry){
    let result = []
    arry.forEach((value) =>
    {
        result.push(value * 2)
    })
    
    return result
}
/*2.done
Write a function called onlyEvenValues which accepts an array 
and returns a new array with only the even values in the array passed to the function
*/
function onlyEvenValues(even)
{
    let result = []
    even.forEach((value) =>
    {
        if(value%2 === 0)
        {
            result.push(value)
        }
        
    })
    return result
}
/*3.done
Write a function called showFirstAndLast which accepts an array of strings 
and returns a new array with only the first and last character of each string.
*/
function showFirstAndLast(arry)
{
    let result = []
    arry.forEach((value) =>
    {
        result.push(value.charAt(0) + value.charAt(value.length - 1))
    })

    return result

}
/*4.done
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value 
and returns the array passed to the function with the new key and value added for each object
*/

function addKeyAndValue(arry)
{
    let result = []
    arry.forEach((value) =>
    {
        result.push("name:" + value.name +" , "+ "title:'instructor'") 
    })

    return result

}

/*5.done
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel 
and the values as the number of times the vowel appears in the string. 
This function should be case insensitive so a lowercase letter and uppercase letter should count
*/
function vowelCount(arry)
{
    let result = []     
    let vowel = ['a','e','i','o','u']
    let a = arry.toString().split('')
    console.log(a)
    a.forEach((value,index,arry2)=>
    {
        vowel.includes(arry2[index]) ? result.push(arry2[index]): null;
    })

    return result
}