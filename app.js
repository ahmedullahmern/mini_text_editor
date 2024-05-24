var btns = document.getElementsByClassName("fun_chal")
var para = document.getElementById("text")
var font_family = document.getElementById("font_family")
var text_color = document.getElementById("color-piker")

font_family.addEventListener("click",function(){
    console.log("options ==> " , this.value)
    if(this.value=="sans-serif"){
        para.style.fontFamily="sans-serif"
    }
    if(this.value=="monospace"){
        para.style.fontFamily="monospace"
    }
    if(this.value=="serif"){
        para.style.fontFamily="serif"
    }
})


text_color.addEventListener("input", function() {
    para.style.color = this.value;
});

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        console.log(this.innerHTML)

        switch (this.innerHTML) {
            case 'Bold':
                if(para.style.fontWeight == 'bold'){
                    para.style.fontWeight = 'normal'
                }else{para.style.fontWeight = 'bold'}
                break;
            case 'Itelic':
                if(para.style.fontStyle == 'italic'){
                    para.style.fontStyle = 'normal'
                }else{para.style.fontStyle = 'italic'}
                break;
            case 'UnderLine':
                if(para.style.textDecoration == 'underline'){
                    para.style.textDecoration = 'none'
                }else{para.style.textDecoration = 'underline'}
                break;
            case 'Right':
                para.style.textAlign = 'right'
                break;
            case 'Left':
                para.style.textAlign = 'left'
                break;
            case 'Justify':
                para.style.textAlign = 'justify'
                break;
            case 'Center':
                para.style.textAlign = 'center'
                break;
        
            default:
                break;
        }

    })
}





































//var bold_chal =  document.getElementById("bold_chal")
// var italic_chal =  document.getElementById("italic_chal")
// var underline_chal =  document.getElementById("underline_chal")
// var text =  document.getElementById("text")


// bold_chal.addEventListener('click',function(){
//     text.style.fontWeight = 'bold'
// })
// italic_chal.addEventListener('click',function(){
//     text.style.fontStyle='italic'
// })
// underline_chal.addEventListener('click',function(){
//     text.style.textDecoration='underline'
// })
                                      





