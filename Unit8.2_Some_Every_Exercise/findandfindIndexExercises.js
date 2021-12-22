/* 
done
Write a function called findUserByUsername which accepts an array of objects, 
each with a key of username, and a string. The function should return the first object with the 
key of username that matches the string passed to the function. If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
function findUserByUsername(value,key)
{
    return value.find((obj)=>obj.username === key)
}
/* 
Write a function called removeUser which accepts an array of objects, each with a key of username, 
and a string. The function should remove the object from the array and return this object. 
If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/
function removeUser(value,key)
{
    let x = value.findIndex((obj)=> obj.username === key)

    if(x === -1)return
    
    value.splice(x,1)[0]
    
}