// var edit = document.querySelector("#edit");
var borderColorpicker = document.querySelector("#color")
var bordercolor = document.querySelector("#bordercolor");
// var a = document.querySelector(".box-2");
var allbox = document.querySelectorAll(".all-border");
var backColor = document.querySelector("#bc");
var backbtn = document.querySelector("#backbtn");
var textColor = document.querySelector("#textColor");
var Textbtn = document.querySelector("#Textbtn");
var title = document.querySelectorAll(".all-title h2")
// a.setAttribute("style","")




// backbtn.oncilck = function(){
//     let backColors = backColor.value;
//     box.style.backgroundColor = backColors;
//     console.log(box.style);
// }
bordercolor.onclick = function(){
    for( i = 0; i<allbox.length;i++){
     let color =  borderColorpicker.value;
    allbox[i].style.borderColor = color;
 }
}

backbtn.onclick = function(){
    for(i = 0; i<allbox.length;i++){
        let backcolors = backColor.value;
        allbox[i].style.background = backcolors;
    }
}

// textColor   

Textbtn.onclick = function(){
    for(i = 0; i<title.length;i++){
        let titlecolor = textColor.value;
        title[i].style.color = titlecolor;
    }
}


// image

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector(".img-div5").style.backgroundImage = `url(${uploaded_image})`;
    })
    reader.readAsDataURL(this.files[0]);
})