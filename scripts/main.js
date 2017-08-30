function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("backOpacity").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

// document.addEventListener('click', function(event) {

//     if (!event.target.matches('.dropbtn')) {
//         document.getElementById("backOpacity").classList.toggle("show");
//         document.getElementById("myDropdown").classList.toggle("show");
//     }
// })

$("#backOpacity").on('click', function(event) {
    $('#backOpacity,#myDropdown').toggleClass("show");
})