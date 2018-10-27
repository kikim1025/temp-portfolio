const intro = function() {
    //maybe need to adjust time depending on window size
    const heliTime = 3000;
    const wWidth = $( window ).width();
    console.log(wWidth);
    const x = wWidth / 2 / 5 * 2 - 100; //change depending on screen size
    $(".box").animate({marginLeft: x}, heliTime) 
}