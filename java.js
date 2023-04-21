window.addEventListener("load", function() {
    const text = document.querySelector("#typing-text");
    const originalText = text.innerHTML; 
    text.innerHTML = "";
  
    let i = 0;
    let timer = setInterval(function() {
      if (i < originalText.length) {
        text.innerHTML += originalText.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50); 
  });




