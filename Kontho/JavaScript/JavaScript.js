
//<!------- JavaScript for toggle mobile menu ------>
var mainmenu = document.getElementById("mainmenu");
function showMenu() {
    mainmenu.style.right = "0";
}
function hideMenu() {
    mainmenu.style.right = "-170px";
}
//<!------- JavaScript for toggle mobile menu ------>




//<!------- JavaScript for the "Back to Top" button ------>
const buttomtotop = document.getElementById("buttomtotop");

//<!-------  Show or hide the button based on the scroll position ------>
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttomtotop.style.display = "block";
    } else {
        buttomtotop.style.display = "none";
    }
});

//<!-------  Scroll to the top of the page when the button is clicked ------>
buttomtotop.addEventListener("click", () => {
    document.body.scrollTop = 0; //<!-------  For Safari ------>
    document.documentElement.scrollTop = 0; //<!-------  For Chrome, Firefox, IE, Edge and Opera ------>
});
// <!------- JavaScript for the "Back to Top" button end ------>



document.body.addEventListener('click', (event) => {
    // Create two circle elements
    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');

    // Reset the animation properties
    circle1.style.transition = 'none';
    circle2.style.transition = 'none';

    // Get the mouse coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the initial position for the circles
    const initialX = mouseX - circle1.clientWidth / 2;
    const initialY = mouseY - circle1.clientHeight / 2;

    // Position the circles at the initial coordinates
    circle1.style.left = initialX + 'px';
    circle1.style.top = initialY + 'px';
    circle2.style.left = initialX + 'px';
    circle2.style.top = initialY + 'px';

    // Reset the scale and opacity
    circle1.style.transform = 'scale(0)';
    circle2.style.transform = 'scale(0)';
    circle1.style.opacity = '1';
    circle2.style.opacity = '1';

    // Delay the animation to allow resetting
    setTimeout(() => {
        // Add transition back to the circles
        circle1.style.transition = 'transform 0.3s, opacity .3s';
        circle2.style.transition = 'transform 0.3s, opacity .3s';

        // Grow the circles
        circle1.style.transform = 'scale(1)';
        circle2.style.transform = 'scale(2)';

        // Hide the circles after 150 Mili-seconds
        setTimeout(() => {
            circle1.style.opacity = '0';
            circle2.style.opacity = '0';
        }, 150);
    }, 10); // A small delay to allow resetting to take effect
});
