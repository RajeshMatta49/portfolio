
var bigimg=document.getElementById("intro");
var image=document.getElementById("scrollimg");
var nextdiv = document.getElementById("resume");

window.onscroll = function change()
{
    var k = pageYOffset;
    if((nextdiv.offsetTop-bigimg.offsetTop)<=k)
    image.style.opacity="1";
    else
    image.style.opacity="0";


};

alert("hi balaji");


var menud = document.getElementById("detai");
var details = document.getElementById("shower");
var hiddener = document.getElementById("hiddenbar");

menud.addEventListener("mouseover", () => {

    details.style.display="none";
    hiddener.style.display="flex";
}
);

menud.addEventListener("mouseout", () => {

    details.style.display="inline";
    hiddener.style.display="none";
}
);


var mar=document.getElementById("temp");
var clos = document.getElementById("span");
clos.addEventListener("click", ()=>{
    mar.style.display="none";
    clos.style.display="none";
});













var options = document.getElementsByClassName("slidopts");

function changeimg(num)
{
    
    var imaged = document.getElementById("ac1");
    var source=imaged.src;
    source=source.substring(source.length-10);
    source=source.replace(source.charAt(source.length-5),num);
    imaged.src=source;
    

}

    options[0].addEventListener("click", function(){changeimg(4)});
    options[1].addEventListener("click", function(){changeimg(5)});
    options[2].addEventListener("click", function(){changeimg(6)});
    options[3].addEventListener("click", function(){changeimg(7)});











var popimg=document.getElementById("popimg");
var wbody = document.getElementById("intro");
var wdetailbox=document.getElementById("detailsbox");
var wim = document.getElementById("im");

function popup()
{
        popimg.style.display="block";
        wbody.style.opacity=0.5;
        wdetailbox.style.opacity=0.5;
        wim.style.opacity=0.5;
    
        
}

function popup0()
{
    popimg.style.display="none";
    wbody.style.opacity=1;
    wdetailbox.style.opacity=1;
    wim.style.opacity=1;
}



















































