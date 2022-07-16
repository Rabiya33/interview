let display = document.querySelector(".display");
const back = document.querySelector(".fa-delete-left");

const keys = document.querySelectorAll(".key")

// keys.forEach(function (key) {
//     key.addEventListener('click', function (item) {
//         let input = item.currentTarget.textContent
//         display.textContent += input
//         if (display.textContent.length >= 10) {
//             alert("Maximum of 10 digits is allowed")
//         }

//         back.addEventListener('click', function () {
//             display = display.toString().slice(0, -1);
keys.forEach(function (key) {
    display.value = ""
    key.addEventListener('click', function (item) {
        let input = item.currentTarget.textContent
        display.value += input
        if (display.value.length >= 10) {
            alert("Maximum of 10 digits is allowed")
        }
    })
})
back.addEventListener('click', function () {
    if (display.value.length === 0) {
        alert("No digits left")
    }
    else {
        display.value = display.value.slice(0, -1)
    }
})