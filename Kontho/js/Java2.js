// JavaScript Document

fetch('navbar.html')
           .then(response => response.text())
           .then(data => {
               document.getElementById('navbarContainer2').innerHTML = data;
           });


discountPercent = 20; // Default discount percentage
 // Set the finish date (year, month (0-indexed), day, hour, minute, second)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
const finishDate = new Date(2025, 10, 22, 0, 0, 0, 0); // January 1, 2026, 00:00:00// December 25th, 2024, 23:59:59


const offerCountDownDiv = document.getElementById('offerCountDown');


function setOfferPercentage(percent) {
  const offerPercent = document.getElementById("offerPercent");
  offerPercent.textContent = `${percent}%`;
}

setOfferPercentage(discountPercent); // Updates text to "Limited Time Offer: 30% Off"

function setPrice(count, minimum=200) {
  let basePrices = {
    count10DA: [25, 50],  // Base prices for count = 1, 2, 3
    count1MA: [60, 120],
    count3MA: [160, 300],
    count6MA: [250, 480],
    count1YA: [425, 800],
    count8YA: [875, 1020],
    count8YAINR: [820, 920]
  };

  if (count == 1) {
    countIndex = 0;
  } else {
    countIndex = 1;
  }

  function calculateDiscountedPrice(price, discount) {
    return price - (price * (discount / 100));
  }

  function generatePriceHTML(basePrice, discountedPrice) {
    if (discountPercent > 0 && basePrice>minimum) {
      return `<s style="color: gray;">${basePrice}</s><br>${discountedPrice.toFixed(0)}`;
    } else {
      return `${basePrice}`;
    }
  }
  // Update prices based on count and discount
  count10DA.innerHTML = `${generatePriceHTML(calculatePrice(basePrices.count10DA[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count10DA[countIndex], count), discountPercent))} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count1MA.innerHTML = `${generatePriceHTML(calculatePrice(basePrices.count1MA[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count1MA[countIndex], count), discountPercent))} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count3MA.innerHTML = `${generatePriceHTML(calculatePrice(basePrices.count3MA[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count3MA[countIndex], count), discountPercent))} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count6MA.innerHTML = `${generatePriceHTML(calculatePrice(basePrices.count6MA[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count6MA[countIndex], count), discountPercent))} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count1YA.innerHTML = `${generatePriceHTML(calculatePrice(basePrices.count1YA[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count1YA[countIndex], count), discountPercent))} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count8YA.innerHTML = `${generatePriceHTML(calculatePrice(basePrices.count8YA[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count8YA[countIndex], count), discountPercent))} <i class="fa-solid fa-bangladeshi-taka-sign"></i><br>${generatePriceHTML(calculatePrice(basePrices.count8YAINR[countIndex], count), calculateDiscountedPrice(calculatePrice(basePrices.count8YAINR[countIndex], count), discountPercent))} <i class="fa-solid fa-indian-rupee-sign"></i>`;
}

// Function to calculate price based on count and increase percentage
function calculatePrice(basePrice, count) {
  if (count <= 2) {
    return basePrice;
  } else if (basePrice == 50){
      return (20*count)
  } else if (basePrice == 120){
      return (50*count)
  } else if (basePrice == 300){
    return (140*count)
  } else if (basePrice == 480){
    return (230*count)
  }
  else if (basePrice == 800){
    return (380*count)
  }
  else if (basePrice == 1020){
    return (400*count)
  }
  else if (basePrice == 920){
    return (380*count)
  }
}

// Get the increase and decrease buttons
const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');

const NODElement = document.getElementById('NOD');
const count10DA = document.getElementById('10DA');
const count1MA = document.getElementById('1MA');
const count3MA = document.getElementById('3MA');
const count6MA = document.getElementById('6MA');
const count1YA = document.getElementById('1YA');
const count8YA = document.getElementById('8YA');

increaseBtn.addEventListener('click', function() {
  increaseCount();
});

decreaseBtn.addEventListener('click', function() {
  decreaseCount();
});

function increaseCount() {
  let count = parseInt(NODElement.textContent);
  count++;

  NODElement.innerHTML = `<strong>${count}</strong> devices <i class="fa-solid fa-computer"></i>`;


  setPrice(count)
}

function decreaseCount() {
  // Assuming there's an element with an ID "count"

  // Get the current count
  let count = parseInt(NODElement.textContent);

  // Decrement the count, ensuring it doesn't go below 0
  count = count > 1 ? count - 1 : 1;

	
	if (count == 1) {
		NODElement.innerHTML = `<strong>${count}</strong> device <i class="fa-solid fa-computer"></i>`;
	} else {
		NODElement.innerHTML = `<strong>${count}</strong> devices <i class="fa-solid fa-computer"></i>`;
	}
  

  setPrice(count)
};


function copyMobileNumber() {
      const mobileNumber = document.getElementById("mobileNumber");
      const el = document.createElement("textarea");
      el.value = mobileNumber.textContent.trim();
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("copied: " + el.value);
    }


const originalTexts = new Map();

function storeOriginalText(elementId) {
    const element = document.getElementById(elementId);
    if (element && !originalTexts.has(elementId)) {
        originalTexts.set(elementId, element.innerHTML);
    }
}

function setTextAndFont(elementId, banglaText, isBangla) {
    const element = document.getElementById(elementId);
    if (element) {
        if (isBangla) {
            storeOriginalText(elementId);
            element.style.fontFamily = "Noto Sans Bengali, sans-serif";
            element.innerHTML = banglaText;
        } else {
            element.style.fontFamily = "";
            element.innerHTML = originalTexts.get(elementId) || element.innerHTML;
        }
    }
}
let state = false; // default
// document.getElementById('language-toggle').addEventListener('change',
 function changeLangFunc() {
    state = !state;
    const isBangla = state;
    setTextAndFont('s1H', '১০', isBangla);
    setTextAndFont('s2H', '৩০', isBangla);
    setTextAndFont('s3H', '৯০', isBangla);
    setTextAndFont('s4H', '১৮০', isBangla);
    setTextAndFont('s5H', '৩৬৫', isBangla);
    setTextAndFont('s6H', '১৪৬০', isBangla);
    setTextAndFont('saveTime', 'যে পরিমাণ সময় সাশ্রয় হবে, তার তুলনায় নিম্নোক্ত 💰 মূল্য তালিকা খুবই সামান্য।', isBangla);

    setTextAndFont('numberSerial', 'সংখ্যা', isBangla);
    setTextAndFont('totalAmount', 'মোট পরিমাণ', isBangla);
    setTextAndFont('daysHead', 'দিন', isBangla);
    setTextAndFont('UnloadAllPremiumFeatures', 'সকল প্রিমিয়াম ফিচার আনলক করুন', isBangla);
    setTextAndFont('step1', 'ধাপ ১: সেন্ড মানি।', isBangla);
    setTextAndFont('step2', 'ধাপ ২: key সংগ্রহ। <i class="fa-solid fa-key" style="color: #5e6a75;"></i>', isBangla);
    setTextAndFont('subsPlanHeader', 'সাবস্ক্রিপশন প্ল্যান', isBangla);
    setTextAndFont('howToBuyHead', 'সিরিয়াল key কিনতে নিম্নোক্ত <strong>২টি ধাপ</strong> অনুসরণ করুন', isBangla);
    setTextAndFont('claimInst', 'পছন্দের প্ল্যান অনুযায়ী সেন্ড মানি করার পর ফোনের শেষের চারটি ডিজিট বা ট্রানসাকশান আইডি অথবা স্ক্রিনশট এবং প্ল্যান উল্লেখ করে নিম্নোক্ত যেকোনো মাধ্যমে মেসেজ করুন।<br><br><i class="fa-solid fa-hourglass-start"></i> সাধারণত <strong>কয়েক সেকেন্ড</strong> থেকে শুরু করে  <strong>মিনিট</strong>, এমনকি ডিমান্ড বেশি থাকা অবস্থায় key পাঠাতে <strong>এক ঘন্টা</strong> পর্যন্ত সময় লাগতে পারে।', isBangla);
    setTextAndFont('howToActivateHead', '<i class="fa-solid fa-circle-play"></i> এক্টিভেশন প্রক্রিয়া জানতে <strong>১ মিনিটের</strong> ছোট্ট ভিডিওটি দেখে নিন।', isBangla);
    setTextAndFont('InstructionHeaderForActivation', 'এক্টিভেশনের ধাপ সমূহ:', isBangla);
    setTextAndFont('howToActivate', '১। কম্পিউটারের <strong>তারিখ এবং সময়</strong> ঠিক আছে কি না দেখে নিন।<br>২। সিরিয়াল key দিয়ে এক্টিভেট করার পর তা একটি <strong>নিরাপদ</strong> জায়গায় সেভ করে রাখুন।<br><br> যতবার ইচ্ছা ডিভাইস পরিবর্তন করা যায়, তবে কোনো ডিভাইস একবার পরিত্যাগ করলে একই key 🔑 ব্যবহার করে সেই ডিভাইসে পুনরায় Activate করা সম্ভব হবে না।<br><br>⚠️ সিরিয়াল কী সংরক্ষণ করা অত্যন্ত গুরুত্বপূর্ণ, যাতে অন্য কেউ এটি ব্যবহার করতে না পারে।', isBangla);
    setTextAndFont('RenewPeraHead', 'আইডি <strong>রিনিউ</strong> করতে চান?', isBangla);
    setTextAndFont('renewReqHeader', 'ডিভাইস আইডি রিনিউ করতে রিকোয়েস্ট পাঠান।', isBangla);
    setTextAndFont('renewalPlatsHead', 'যে মাধ্যমে রিকোয়েস্ট পাঠাতে চান সেখানে ক্লিক করুন:', isBangla);

    const inputField = document.getElementById('DeviceIdInputField');
    if (inputField) {
        if (!originalTexts.has('DeviceIdInputField')) {
            originalTexts.set('DeviceIdInputField', inputField.placeholder);
        }
        inputField.style.fontFamily = isBangla ? "Noto Sans Bengali, sans-serif" : "";
        inputField.placeholder = isBangla ? 'আইডি এখানে পেস্ট করুন।' : originalTexts.get('DeviceIdInputField');
    }
};


async function PasteIDFunc () {
      try {
        const text = await navigator.clipboard.readText(); // Read text from clipboard
        document.getElementById('DeviceIdInputField').value = text; // Set the input field value
      } catch (err) {
        console.error('Failed to read clipboard: ', err);
      }
    }


function sendRequest (mainLink) {
	const deviceId = document.getElementById('DeviceIdInputField').value;
	if (!deviceId) {
        alert("Please enter a Device ID."); // Show an alert if it's empty
        return; // Exit the function if no Device ID is entered
      }
      const url = `${mainLink}Plz%20renew%20this%20Device%20ID:%20${deviceId}`;
      window.open(url, '_blank');
}

// window.onload = function() {
//      
//	 
//	 
//	 const button = document.getElementById('renewByMessenger');
//      button.addEventListener('click', sendRequestByMessenger);
//	 
//	 const button = document.getElementById('renewByMessenger');
//      button.addEventListener('click', sendRequestByMessenger(myParameter));
//	 
//    };

setPrice(count=1);


function setOfferCountdown(finishDate) {
  const daysNum = document.getElementById("daysNum");
  const hoursNum = document.getElementById("hoursNum");
  const minutesNum = document.getElementById("minutesNum");
  const secondsNum = document.getElementById("secondsNum");

  let intervalId; // Declare in outer scope so updateCountdown can access it

  function updateCountdown() {
      const now = new Date();
      const timeLeft = finishDate.getTime() - now.getTime();

      if (timeLeft <= 0) {
          daysNum.textContent = "00";
          hoursNum.textContent = "00";
          minutesNum.textContent = "00";
          secondsNum.textContent = "00";
          clearInterval(intervalId); // Stop updating when time is up
          // Optional: show "Offer expired" message here
      } else {
          const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          daysNum.textContent = days.toString().padStart(2, "0");
          hoursNum.textContent = hours.toString().padStart(2, "0");
          minutesNum.textContent = minutes.toString().padStart(2, "0");
          secondsNum.textContent = seconds.toString().padStart(2, "0");
      }
  }

  updateCountdown(); // Initial update
  intervalId = setInterval(updateCountdown, 1000); // Start interval
}

  
  // Example usage:
  if (discountPercent === 0) {
    offerCountDownDiv.style.display = 'none';
    
  }else{
    setOfferCountdown(finishDate);
    // offerCountDownDiv.style.display = 'none';
  }
 
