/* done
Write a function called hasOddNumber which accepts an array and 
returns true if the array contains at least one odd number, otherwise it returns false.
hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false
 */
function hasOddNumber(value)
{
    let odd = (element) => element % 2 != 0;
    console.log(value.some(odd))

}
/* done
Write a function called hasAZero which accepts a number and 
returns true if that number contains at least one zero. Otherwise, the function should return false
hasAZero(33321232131012) // true
hasAZero(1212121) // false
 */
function hasAZero(value)
{
    let Azero = (element) => element === 0;
    let a = value.toString().split('')
    let result = []
    a.map((number) =>
    {
        result.push(parseInt(number)) 
    })
    console.log(result)
    console.log(result.some(Azero))
}
/* done
Write a function called hasOnlyOddNumbers which accepts an array and 
returns true if every single number in the array is odd. If any of the values in the array are not odd, 
the function should return false.
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false
 */
function hasOnlyOddNumbers(value)
{
    let odd = (element) => element % 2 != 0;
    console.log(value.every(odd))
    
}
/* done
Write a function called hasNoDuplicates which accepts an array and 
returns true if there are no duplicate values (more than one element in the array that has 
the same value as another). If there are any duplicates, the function should return false.
hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true
 */
function hasNoDuplicates(value)
{
    function isdup(arry,index,arry2)
    {
        return arry2.indexOf(arry) ===index
    }
    console.log(value.every(isdup))
}
/* done
Write a function called hasCertainKey which accepts an array of objects and a key, and 
returns true if every single object in the array contains that key. Otherwise it should return false.
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainKey(arr,'first') // true
  hasCertainKey(arr,'isCatOwner') // false
 */
function hasCertainKey(value,position)
{
    function isc(arry)
    {
        return position in arry === true
    }
    console.log(value.every(isc))
}
/* done
Write a function called hasCertainValue which accepts an array of objects and a key, and 
a value, and returns true if every single object in the array contains that value for the specific key. 
Otherwise it should return false.
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false
 */
function hasCertainValue(arry, key, value)
{
    /*function isc(arry)
    {
        console.log(Object.keys(arry).position)
        if(key in obj === true)
        {
            return value === arry[index][key]
        }
    }
    console.log(value.every(isc,index, arry2))
    */

    //arry[key]= "seconde"
    //console.log(arry[0][key])
   return arry.every((obj)=>{

       return obj[key] === value
   })
}