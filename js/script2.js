window.addEventListener('scroll', () => {
    const scrollable = window.document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(scrolled);
    
    if (scrolled === scrollable){
        alert('You are done scrolling');
    }
     
});


