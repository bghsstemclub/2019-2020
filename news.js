var i = 0;
var slide = []

//slide list
slide[0] = 'STEM Pictures/STEM4.jpg';
slide[1] = 'STEM Pictures/Achievements/Achievement1.jpg';
slide[2] = 'STEM Pictures/Achievements/Achievement2.jpg';
slide[3] = 'STEM Pictures/Achievements/Achievement3.JPG';

//function to change slide
function changeSlides(){
    document.slideShow.src = slide[i];

    //check to see if this is the last image. image.length has to minus one since the image start with 0
    if(i < slide.length - 1){
        i++;
    }
    //if it's at the last image, set the index value to 0
    else{
        i = 0;
    }
    //caption changes
    switch(i){
        case 1:
            document.getElementById("fade3").innerHTML = "MESA NEDC Competition: 3rd Place(2018-2019 State) Huy Banh, Minh Duong, David Chuong, Khanh Nguyen";
            break;
        case 2:
            document.getElementById("fade3").innerHTML = "MESA NEDC Competition: 2nd Place(2017-2018 National) Danny Vo, Duy Pham, David Chuong";
            break;
        case 3:
            document.getElementById("fade3").innerHTML = "MESA NEDC Competition: 1st Place(2017-2018 State) Danny Vo, Duy Pham, David Chuong";
            break;
        case 0:
            document.getElementById("fade3").innerHTML = "MESA Machine Competition: 2nd Place(2018-2019 Prelim) Derreck Bui, Willian Tran, Alexandros Davalos";
            break;
        default:
            document.getElementById("fade3").innerHTML = "Malfunction";
    }
    //timers
    setTimeout("changeSlides()", 5000);
}
//uploading  it onto the window
window.onload = changeSlides;
