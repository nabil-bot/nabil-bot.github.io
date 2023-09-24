
document.getElementById('readMeButton').addEventListener('click', function() {
    // Define the file path (assuming "ReadMe.txt" is in the same directory)
    var filePath = 'ReadMe.txt';

    // Open the file in a new tab/window
    window.open(filePath, '_blank');
});




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

// Get the required elements
const planOptions = document.querySelectorAll('input[name="select"]');
const quantityInput = document.getElementById('quantity');
const cancellationInput = document.getElementById('cancellation');

// Add event listeners for plan options and quantity input
planOptions.forEach((option) => {
  option.addEventListener('change', calculateCancellation);
});

quantityInput.addEventListener('input', calculateCancellation);

// Calculate the cancellation value based on the selected plan and quantity
function calculateCancellation() {
  const selectedPlan = document.querySelector('input[name="select"]:checked').value;
  const quantity = quantityInput.value;

  const cancellation = selectedPlan * quantity;

  cancellationInput.value = cancellation + " BDT";
}





