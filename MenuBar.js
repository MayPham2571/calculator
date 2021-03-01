// function myFunction(x){
//     changeIcon(x);
//     dropDown(x);
// }

// function changeIcon(x) {
//     x.classList.toggle("change");
// }
// $(document).ready(function(){
//   $("#hide").click(function(){
//     $("p").hide();
//   });
//   $("#show").click(function(){
//     $("p").show();
//   });
// });

var standard = document.getElementById("standard");
var converter = document.getElementById("converter");
converter.style.display = "none";

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    // tabcontent = document.getElementsByClassName("tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;

    if (pageName == "Calculator"){
        document.getElementById("title").innerHTML = "Standard";
        standard.style.display = "";
        converter.style.display ="none";
        
    }
    else {
        document.getElementById("title").innerHTML = "Length";
        standard.style.display = "none";
        converter.style.display = "";
    }
}
  
  // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


