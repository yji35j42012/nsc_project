var html=document.querySelector('html')
var searchBox=document.querySelector("#searchBox");
var goSearch=document.querySelector("#goSearch")

window.addEventListener('scroll', function (params) {
    if (html.scrollTop>searchBox.offsetTop) {
        goSearch.classList.add("_show");
        hlogo.classList.add('hide')
    } else {
        hlogo.classList.remove('hide')
        goSearch.classList.remove("_show");
    }
});

goSearch.onclick=function () {
    upScroll(html, 0);
}

function upScroll(sc, go) {
    var count=20
    this.scrollTime=setInterval(() => {
        sc.scrollTop-=count
        if (this.headerBg&&sc.scrollTop<this.screenH-60) {
            this.headerBg=false
        }
        if (sc.scrollTop<=go) {
            sc.scrollTop=go
            clearInterval(this.scrollTime)
        }
    }, 1);
}

var searchBar_inp=document.querySelector("#searchBar_inp")

searchBar_inp.addEventListener("keyup", function (e) {
    if (e.keyCode==13) {
        location.href='./result.html'
    }
});

var searchBar_inp=document.querySelector("#searchBar_inp")

searchBar_inp.addEventListener("keyup", function (e) {
    if (e.keyCode==13) {
        location.href='./result.html'
    }
});

var search_add=document.querySelector("#search_add");
var searchBoxCount
var mCount=0
search_add.onclick=function () {
    searchBoxCount=document.querySelectorAll(".searchBox_item");
    var sCount=searchBoxCount.length+mCount
    var li=document.createElement("li");
    li.setAttribute("class", "searchBox_item");
    li.setAttribute("id", "searchBox_item_"+sCount)
    var ul=document.createElement("ul");
    ul.setAttribute("class", "switch")
    ul.setAttribute("id", "switch_"+sCount)
    var li2=document.createElement("li");
    var li3=document.createElement("li");
    li2.setAttribute("class", "switch_item on")
    li2.innerHTML='and'
    li3.setAttribute("class", "switch_item")
    li3.innerHTML='or'
    ul.appendChild(li2);
    ul.appendChild(li3);

    var div=document.createElement("div");
    div.setAttribute("class", "searchBar");
    var input=document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "searchBar_inp");
    input.setAttribute("id", "searchBar_inp_"+sCount);
    input.setAttribute("placeholder", "請輸入關鍵字、專利所有人、學校、國別...等");
    var btn1=document.createElement("button");
    btn1.setAttribute("class", "icon_btn _search");
    btn1.setAttribute("id", "searchHandler_"+sCount);
    div.appendChild(input);
    div.appendChild(btn1);
    var btn2=document.createElement("button");
    btn2.setAttribute("class", "icon_btn _minus");
    btn2.setAttribute("id", "minus_"+sCount);


    li.appendChild(ul)
    li.appendChild(div)
    li.appendChild(btn2)

    searchBox.appendChild(li);

    setMinus("minus_"+sCount);
    setSwitch("switch_"+sCount);
    setSearchBtn("searchHandler_"+sCount);
    setInput("searchBar_inp_"+sCount);
}


function setMinus(s) {
    var setM=document.querySelector("#"+s)
    setM.onclick=function () {
        let idNum=this.getAttribute("id").split("minus_")[1]
        var r=document.querySelector("#searchBox_item_"+idNum);
        r.remove();
        mCount++
    }
}
function setSwitch(s) {
    var setS=document.querySelectorAll("#"+s+"> li")
    for (let i=0; i<setS.length; i++) {
        const element=setS[i];
        element.onclick=function () {
            if (i==0) {
                setS[1].classList.remove("on");
            } else {
                setS[0].classList.remove("on");
            }
            element.classList.add("on")
        }
    }
}
function setSearchBtn(s) {
    var setB=document.querySelector("#"+s)
    setB.onclick=function () {
        console.log('setB', setB.getAttribute("id"));
        location.href='./result.html'
    }
}
function setInput(s) {
    var setI=document.querySelector("#"+s)
    setI.addEventListener("keyup", function (e) {
        if (e.keyCode==13) {
            location.href='./result.html'
        }
    })
}

// 113.02.27新增
var result_txt=document.querySelector("#result_txt");
var searchHandler=document.querySelector("#searchHandler");
function downScroll(sc, go) {
    var count=20
    this.scrollTime=setInterval(() => {
        sc.scrollTop+=count
        if (sc.scrollTop>=go) {
            sc.scrollTop=go
            clearInterval(this.scrollTime)
        }
    }, 1);
}
searchHandler.onclick=function () {
    // 
    downScroll(html, result_txt.offsetTop-result_txt.offsetHeight-22);
}


