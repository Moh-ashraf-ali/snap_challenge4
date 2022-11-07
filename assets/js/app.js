let imgArrow = document.querySelectorAll(".arrow");
let dropDowm = document.querySelectorAll(".dropDowma");

imgArrow[0].src = "./assets/images/icon-arrow-down.svg";


let arrowReverse = () =>{
if(imgArrow[0].src != "./assets/images/icon-arrow-up.svg"){
    imgArrow[0].src = "./assets/images/icon-arrow-up.svg";
}else{
    imgArrow[0].src = "./assets/images/icon-arrow-down.svg"
}
}
dropDowm[0].addEventListener("click" , arrowReverse);




wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

  $(document).ready(function(){
    $(function() {  
        $("body").niceScroll();
    });
    $("#thisdiv").niceScroll({
      background: "#000000"    })
  })