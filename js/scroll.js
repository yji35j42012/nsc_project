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