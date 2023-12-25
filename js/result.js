var html = document.querySelector('html')
var searchBar = document.querySelector("#searchBar");
var hlogo = document.querySelector("#hlogo");





window.addEventListener('scroll', function (params) {
    console.log('html.scrollTop',html.scrollTop);
    if (html.scrollTop > 80) {
        searchBar.classList.add('fixed');
        hlogo.classList.add('hide')
    } else {
        searchBar.classList.remove('fixed');
        hlogo.classList.remove('hide')
    }
});



var selHandler = document.querySelectorAll("[name='selHandler']")
var selBox = document.querySelectorAll("[name='selBox']")
var selHandlerCount = null
for (let i = 0; i < selHandler.length; i++) {
    const element = selHandler[i];
    element.onclick = function (e) {
        e.preventDefault();
        if (selHandlerCount == null) {
            selBox[i].classList.add('showGroup')
            selHandlerCount = i
        } else if (selHandlerCount == i) {
            selBox[i].classList.remove('showGroup')
            selHandlerCount = null
        } else {
            selBox[selHandlerCount].classList.remove('showGroup')
            selBox[i].classList.add('showGroup')
            selHandlerCount = i
        }

    }
}