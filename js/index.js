var html = document.querySelector('html')
var searchBar = document.querySelector("#searchBar");
var hlogo = document.querySelector("#hlogo");





window.addEventListener('scroll', function (params) {
    if (html.scrollTop > 250) {
        searchBar.classList.add('fixed');
        hlogo.classList.add('hide')
    } else {
        searchBar.classList.remove('fixed');
        hlogo.classList.remove('hide')
    }
});
var searchHandler = document.querySelector("#searchHandler");
searchHandler.onclick = function (params) {
    location.href = "result.html"
}

var searchBar_inp = document.querySelector("#searchBar_inp")

searchBar_inp.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        location.href = './result.html'
    }
});