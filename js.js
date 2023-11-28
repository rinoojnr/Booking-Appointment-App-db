// let userName = document.getElementById('userName');
// let userEmail = document.getElementById('userEmail');
// let userPhone = document.getElementById('userNumber');
// let userForm =document.getElementById('userForm');
// let ul =document.getElementById('listItems')


// userForm.addEventListener('submit',addToLocalStorage);

// function addToLocalStorage(e){
//     e.preventDefault();
//     let userListObject = {
//         "userName":userName.value,
//         "userEmail":userEmail.value,
//         "userPhone":userNumber.value
//     }
//     localStorage.setItem(userEmail.value,JSON.stringify(userListObject))
//     showOnScreen(userListObject)
// }


// function showOnScreen(userListObject){
//     let li =document.createElement('li');
//     let textContent = document.createTextNode(`${userListObject.userName} -- ${userListObject.userEmail}`)
//     li.appendChild(textContent)
    

//     let deleteButton = document.createElement('input');
//     deleteButton.type='button';
//     deleteButton.value = 'DELETE'
//     deleteButton.onclick = () =>{
//         localStorage.removeItem(userListObject.userEmail);
//         ul.removeChild(li)
//     }

//     let editButton = document.createElement('input');
//     editButton.type='button';
//     editButton.value = 'EDIT';
//     editButton.onclick = () =>{
//         userName.value =userListObject.userName;
//         userEmail.value=userListObject.userEmail;
//         userPhone = userListObject.userNumber; 
//         localStorage.removeItem(userListObject.userEmail);
//         ul.removeChild(li)
//     }
//     li.appendChild(editButton)
//     li.appendChild(deleteButton)
//     ul.appendChild(li)
// }