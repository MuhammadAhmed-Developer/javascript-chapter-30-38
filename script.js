let dateToday = new Date
// console.log(dateToday)
document.getElementById('originaltext').innerHTML = dateToday
// console.log(dateToday.getFullYear())
// console.log(dateToday.getDay())
// console.log(dateToday.getDate())
// console.log(dateToday.getMinutes())
// console.log(dateToday.getMonth())
// console.log(dateToday.getMilliseconds())
// console.log(dateToday.getSeconds())
// console.log(typeof dateToday)
// dateToday = dateToday.toDateString()
// console.log(dateToday)

var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// console.log(dayNames[dateToday.getDay()])

// inputvalue 
// const inputValue  = () => {
//     return document.getElementById('inputText').value
// }

// inputvalue function..................------------------------------------------------------------------
function inputValue() {
    return document.getElementById('inputText').value;
}

// outputfunction-------------------------------------------------------------------------------
function showOutPut(outPut){
    document.getElementById('output').innerHTML = outPut
}
// ------------------------------------------------------------------------

// clearinput---------------------------------
function clearInput(){
    document.getElementById('inputText').value = ''
}
// clearoutput

function clear2(){
   let clearout = document.getElementById('output').innerHTML=''
    // if(!clearout.length){
    //  tostifyError('Alreadyclear')
    // }
}

// tostify sucess or -----------------------------------------------------
// function tostifyError(error){
//     Toastify({
//         text: "This is a toast",
//         duration: 3000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #11b69b, #111c99d)",
//         },
//       }).showToast();

// }

// -------------------------------------------------------------------------------------------------
// setTimeout(function(){
//     console.log(inputValue())
// },5000)

// setInterval(function(){
// console.log(inputValue())
// },2000)




// get day --------------------------------------
function getDay(){
    let rightNow = new Date
    // console.log(rightNow);
    let theDay = rightNow.getDay();
    // console.log(theDay)
    let nameOfToday = dayNames[theDay]
    // console.log(nameOfToday)
    showOutPut(nameOfToday);
    tellTime()
}

// get passedbirthdaydays------------------------------------------------------------------------------

function passBirthdayDays(){
    let dob = inputValue()
    console.log(dob)

    let today = new Date();
    let bornDate = new Date(dob);
    console.log(today)
    console.log(bornDate)
     
    let todayTime = today.getTime();
    let bornDateTime = bornDate.getTime()
    console.log(todayTime)
    console.log(bornDateTime)

    let difference = todayTime - bornDateTime
    console.log(difference)

    let finalResult = difference/(1000 * 60 * 60 * 24)
    console.log(finalResult)
    let html = Math.floor(finalResult)+ "days "
    showOutPut(html)
    tellTime()

}

// nextbirthday--------------------------------------------------

function nextBirthday(){
    let nextdob = inputValue();
    let today = new Date();
    let futureDate = new Date(nextdob);
    let subtract = futureDate - today
    console.log(subtract)
    let finalResult = subtract/(1000 * 60 * 60 * 24)
    console.log(finalResult)
    let html = Math.floor(finalResult)+ " Days Away"
    showOutPut(html)
    tellTime()

}

// greekuser----------------------------------------------------------------------------------------------------------

function greekUser(){
    let name = prompt('Enter Your Name!')
    let now = new Date();
    let hour = now.getHours();
    console.log(hour);

    let message = 'Good '

    if(hour >=4 && hour < 12){
        message += 'Morning'
    }
    else if(hour >=12 && hour < 17){
        message += 'Afternoon'

    }
    else if(hour >=17 && hour < 20){
        message += 'Evening'

    }else{
        message += 'Night'

    }

    let msg = message +' '+ name

    showOutPut(msg)
    tellTime()


}
// tell time=======-------------------=================-------------------------------------------

function tellTime(){
    let now = new Date();
    let theHr = now.getHours();
    let theMin = now.getMinutes();
    let theSec = now.getSeconds();
    output.innerHTML += '</br>You Click the Button @ = ' + theHr +' : '+ theMin +' : '+ theSec + '</br>'

}

// Tax--------------------------------------------------------------------------------------------------

function calculateTaxBtn(){
    let price = +prompt('Enter Price!')
    var taxRate =  16;
    // var tax = price * taxRate / 100;
    var tax = calculateTax(price, taxRate)
    let html = 'Tax: '+ tax;
    showOutPut(html)

}
 
function calculateTax(price, taxRate){
    return price * taxRate / 100;
    // return tax

}

// price+tax 

function priceORTax(){
    let price = +prompt('Enter Price!')
    if(!price){
        
        alert('Please Enter Price')
        return;
    }

    var total = calculateTotal(price)
    let html = 'Total: ' + Math.round(total);
    showOutPut(html)    
}

function calculateTotal(price){
    if(price<1000){
        var taxRate = 8;
    }else{
        var taxRate = 16;
    }
    let tax = calculateTax(price, taxRate)
    let total = price + tax;
    return total;
}