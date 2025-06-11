// // step - 1 set event handlerAdd commentMore actions
// document.getElementById('button-login')
//     .addEventListener('click', function(event){
//         // step-2: prevent default behavior (prevent reloading browser)
//         event.preventDefault(); // <------ Vejal to beginners
//         // console.log('login button clicked');

//         // step-3: get the phone number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;
//         console.log(phoneNumber, pinNumber)

//         if(phoneNumber === '5' && pinNumber === '1234'){
//             console.log('Your are logged in');
            
//         }
//         else{
//             alert('Wrong phone number or pin');
//         }
//     })

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber == '1234'){
        console.log("You'r logged in!!");
        window.location.href = './home.html';
    }
    else{
        alert("Wrong phone number or pin")
    }
})