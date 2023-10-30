
// JavaScript for accordion status of the word ------>
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let faqheader = item.querySelector(".faqheader");
    faqheader.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-angles-down", "fa-xmark");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-xmark", "fa-angles-down");
        }
        removeOpen(index); 
    });
});

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-xmark", "fa-angles-down");
        }
    });
}

// JavaScript for accordion status of the word ------>