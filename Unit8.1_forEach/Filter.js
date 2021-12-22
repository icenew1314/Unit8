/* done
Write a function called filterByValue which accepts an array of objects and a key and 
returns a new array with all the objects that contain that key.
*/
function filterByValue(value)
{

    let filter = value.filter(function(arry)
    {
        if(arry.isCatOwner === true)
        {
            return arry.first + arry.last + arry.isCatOwner
        }
    })
    console.log(filter)

}
/* done
Write a function called find which accepts an array and a value and 
returns the first element in the array that has the same value as the second parameter or 
undefined if the value is not found in the array.
*/
function find(value,element)
{
    let result = []
    value.filter(function(arry)
    {   
        if(element == arry)
        {
            result.push(element)
        }
        else{
            result = console.log("undefined")
        }
    })
    
    return result
}
/*  done
Write a function called findInObj which accepts an array of objects, a key, and 
some value to search for and returns the first found value in the array.
*/
function findInObj(value)
{
    let result = []
    let x = 0
    value.filter(function(arry){
        if(arry.isCatOwner === true)
        {
            if(x <1)
            {
                x+=1
                result.push(arry)
            }
        }
    })

    return result
}
/* done
Write a function called removeVowels which accepts a string and 
returns a new string with all of the vowels (both uppercased and lowercased) removed. 
Every character in the new string should be lowercased.
*/
function removeVowels(value)
{
    let result = []
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    let a = value.toString().split('')
    a.filter(function(arry,index,arry2){
        vowels.includes(arry2[index]) ? null: result.push(arry2[index].toLowerCase());
    })

    return result.join("")
}
/* done
Write a function called doubleOddNumbers which accepts an array and 
returns a new array with all of the odd numbers doubled 
(HINT - you can use map and fitler to double and then filter the odd numbers).
*/
function doubleOddNumbers(value)
{
    let result = []
    value.filter(function(arry){
        (arry %2 == 0) ? null : result.push(arry *=2)
    })
    return result
}