var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

const downloadBtn = document.querySelector(".download-btn");

const fileLink = "https://acrobat.adobe.com/id/urn:aaid:sc:AP:62facfd0-c005-4eac-a31a-f53c4c4c15f5";

function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const initTimer = () =>{
    downloadBtn.innerHtml = "Your file downloaded";
    location.href = fileLink;
}
downloadBtn.addEventListener("click",initTimer);