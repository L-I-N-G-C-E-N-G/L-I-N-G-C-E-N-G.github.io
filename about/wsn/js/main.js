window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    if(window.scrollY>=300){
        $('nav').slideDown()
    }else{
        $('nav').slideUp()
    }
})