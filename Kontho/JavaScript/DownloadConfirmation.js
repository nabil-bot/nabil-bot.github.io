
//<!------- JavaScript for download button confirmation------>

const downloadBtns = document.querySelectorAll(".downloadbtn");
const checkboxes = document.querySelectorAll(".checkbox");
const agreementTexts = document.querySelectorAll(".agreementtext");
const downloadNowBtns = document.querySelectorAll(".downloadnowbtn");

downloadBtns.forEach((downloadbtn, index) => {
  downloadbtn.addEventListener("click", () => {
    checkboxes[index].style.display = "inline-block";
    agreementTexts[index].style.display = "inline-block";
    if (!checkboxes[index].checked) {
      downloadNowBtns[index].classList.add("refer");
    } else {
      agreementTexts[index].classList.remove("change");
    }
  });
});

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      downloadNowBtns[index].style.display = "inline-block";
      agreementTexts[index].classList.add("valid");
      agreementTexts[index].classList.remove("invalid");
    } else {
      agreementTexts[index].classList.add("invalid");
      downloadNowBtns[index].style.display = "none";
    }
  });
});
