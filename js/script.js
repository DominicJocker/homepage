{
    const welcome = () => {
        console.log("Hallo!");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const none = document.querySelector(".js-currentTheme");

        body.classList.toggle("darkTheme");
        none.innerText = body.classList.contains("darkTheme") ? " dark page" : " light page";
    };
    
    const init = () => {
    const button = document.querySelector(".js-button"); 
    button.addEventListener("click", toggleBackground);

    welcome();
};

init();
        
}