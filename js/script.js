{
    const welcome = () => {
        console.log("Hallo!");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const none = document.querySelector(".js-none");
        body.classList.toggle("dark");
        none.innerText = body.classList.contains("dark") ? " dark page" : " light page";
    };
    
    const init = () => {
    const button = document.querySelector(".js-button"); 
    button.addEventListener("click", toggleBackground);

    welcome();
};

init();
        
}