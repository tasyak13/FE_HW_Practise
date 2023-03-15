'use strict';

// Написать функцию которая принимает id пользователя, если пользователь с таким id не найден сделать alert данный пользователь 
// не найден, если найден вывести на экран имя пользователя
// https://jsonplaceholder.typicode.com/users/{id}

async function getUserNameNyId(id) {
  const getId = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  if(getId.status < 400) {
    const user = await getId.json();
    console.log(user.name);
    nameId.innerText = `${user.name}`
    return user.name
  } else {
    alert('Error')
    throw 'User is not defined'
  }
}

getUserNameNyId(1)
getUserNameNyId(999)




