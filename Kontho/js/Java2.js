// JavaScript Document

fetch('navbar.html')
           .then(response => response.text())
           .then(data => {
               document.getElementById('navbarContainer2').innerHTML = data;
           });

discountPercent = 0; // Default discount percentage
 // Set the finish date (year, month (0-indexed), day, hour, minute, second)
const finishDate = new Date(2025, 3, 16, 23, 59, 59); // December 25th, 2024, 23:59:59


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

// function changeLangFunc() {
//   console.log('changeLangFunc called');
// }



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


// Add click event listeners
increaseBtn.addEventListener('click', function() {
  increaseCount();
});

decreaseBtn.addEventListener('click', function() {
  decreaseCount();
});

// Function to increase count
function increaseCount() {
  let count = parseInt(NODElement.textContent);
  count++;

  NODElement.innerHTML = `<strong>${count}</strong> devices <i class="fa-solid fa-computer"></i>`;


  setPrice(count)
}


// Function to decrease count
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

// document.getElementById('language-toggle').addEventListener('change', function() {
//     if (this.checked) {
//       document.getElementById('numberSerial').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('numberSerial').innerHTML = 'সংখ্যা';

//       document.getElementById('totalAmount').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('totalAmount').innerHTML = 'মোট পরিমাণ';

//       document.getElementById('daysHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('daysHead').innerHTML = 'দিন';

//     document.getElementById('UnloadAllPremiumFeatures').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('UnloadAllPremiumFeatures').innerHTML = 'সকল প্রিমিয়াম ফিচার আনলক করুন';
        
// 		document.getElementById('step1').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('step1').innerHTML = 'ধাপ ১: সেন্ড মানি।';
    	
// 		document.getElementById('step2').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('step2').innerHTML = 'ধাপ ২: key সংগ্রহ। <i class="fa-solid fa-key" style="color: #5e6a75;"></i>';
		
// 		document.getElementById('subsPlanHeader').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('subsPlanHeader').innerHTML = 'সাবস্ক্রিপশন প্ল্যান';
		
		
// 		document.getElementById('howToBuyHead').innerHTML = 'সিরিয়াল key কিনতে নিম্নোক্ত <strong>২টি ধাপ</strong> অনুসরণ করুন'
// 		document.getElementById('howToBuyHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
		
// 		document.getElementById('claimInst').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('claimInst').innerHTML = 'পছন্দের প্ল্যান অনুযায়ী সেন্ড মানি করার পর ফোনের শেষের চারটি ডিজিট বা ট্রানসাকশান আইডি অথবা স্ক্রিনশট এবং প্ল্যান উল্লেখ করে নিম্নোক্ত যেকোনো মাধ্যমে মেসেজ করুন।<br><br><i class="fa-solid fa-hourglass-start"></i> সাধারণত <strong>কয়েক সেকেন্ড</strong> থেকে শুরু করে  <strong>মিনিট</strong>, এমনকি ডিমান্ড বেশি থাকা অবস্থায় key পাঠাতে <strong>এক ঘন্টা</strong> পর্যন্ত সময় লাগতে পারে।'
		
// 		document.getElementById('howToActivateHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('howToActivateHead').innerHTML = '<i class="fa-solid fa-circle-play"></i> এক্টিভেশন প্রক্রিয়া জানতে <strong>১ মিনিটের</strong> ছোট্ট ভিডিওটি দেখে নিন।'
		
		
// 		document.getElementById('InstructionHeaderForActivation').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('InstructionHeaderForActivation').innerHTML = 'এক্টিভেশনের ধাপ সমূহ:'
		
		
// 		document.getElementById('howToActivate').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('howToActivate').innerHTML = '১। কম্পিউটারের টাইমজোন <strong>Dhaka, Bangladesh</strong> সেট করে নিন এবং দেখেনিন সময় ঠিক আছে কি না।<br>২। সিরিয়াল key দিয়ে এক্টিভেট করার পর <strong>device ID</strong> একটি নিরাপদ জায়গায় সেভ করে রাখুন।<br><br><i class="fa-solid fa-thumbtack" style="color: #ff0000;"></i> মেয়াদ থাকাকালীন device ID ব্যাবহার করে ঐ ডিভাইসে Nms Kontho <strong>যতবার ইচ্ছা</strong> এক্টিভেট করা যাবে।<br><i class="fa-regular fa-star"></i> প্রয়োজন হলে <strong>বিনামূল্যে রিনিউ</strong> করে নেওয়া যাবে।'
		



//     document.getElementById('RenewPeraHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('RenewPeraHead').innerHTML = 'আইডি <strong>রিনিউ</strong> করতে চান?'
		
// 		document.getElementById('renewReqHeader').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('renewReqHeader').innerHTML = 'ডিভাইস আইডি রিনিউ করতে রিকোয়েস্ট পাঠান।'
		
// 		const inputField = document.getElementById('DeviceIdInputField');
//       	inputField.style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		inputField.placeholder = 'আইডি এখানে পেস্ট করুন।';  // Set the placeholder text
		
// 		document.getElementById('renewalPlatsHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
// 		document.getElementById('renewalPlatsHead').innerHTML = 'যে মাধ্যমে রিকোয়েস্ট পাঠাতে চান সেখানে ক্লিক করুন:'
// 	} else {
// 		document.getElementById('numberSerial').style.fontFamily = "";
// 		document.getElementById('numberSerial').innerHTML = 'Number&nbsp;';
    
//     document.getElementById('totalAmount').style.fontFamily = "";
// 		document.getElementById('totalAmount').innerHTML = 'Total Amount&nbsp;&nbsp;';



//     document.getElementById('daysHead').style.fontFamily = "";
// 		document.getElementById('daysHead').innerHTML = 'Days&nbsp;';
    
//     document.getElementById('UnloadAllPremiumFeatures').style.fontFamily = "";
// 		document.getElementById('UnloadAllPremiumFeatures').innerHTML = 'Unlock All Premium Features';


// 		document.getElementById('step1').style.fontFamily = "";
// 		document.getElementById('step1').innerHTML = 'Step 1: Send Money';
		
// 		document.getElementById('step2').style.fontFamily = "";
// 		document.getElementById('step2').innerHTML = 'Step 2: Claim the Key <i class="fa-solid fa-key" style="color: #5e6a75;"></i>';
		
// 		document.getElementById('subsPlanHeader').style.fontFamily = "";
// 		document.getElementById('subsPlanHeader').innerHTML = 'Subscription Plans';
		
		
// 		// document.getElementById('freeTrialMsg').style.fontFamily = "";
// 		// document.getElementById('freeTrialMsg').innerHTML = 'Obtain your free trial key from any of our contact platforms:&nbsp; <a href="m.me/101469266332395" target="_blank"><i class="fa-brands fa-facebook-messenger"></i> <a href="https://wa.me/8801689865823" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a></a> <a href="https://t.me/NmsKontho" target="_blank"><i class="fa-brands fa-telegram"></i> </a><br>📣<strong>We encourage users to try the application using the trial key before considering a purchase.</strong>';
		
// 		document.getElementById('howToBuyHead').style.fontFamily = "";
// 		document.getElementById('howToBuyHead').innerHTML = '<strong>How to buy a serial key?</strong> Just follow these 2 steps:'
        
// 		document.getElementById('claimInst').style.fontFamily = "";
// 		document.getElementById('claimInst').innerHTML = 'After sending the payment for your selected subscription plan, send message on any of the following platforms with the <strong>last 4 digits</strong> of your phone number or <strong>transaction ID</strong> or a <strong>screenshot</strong>, along with your <strong>plan details</strong>.<br><br><i class="fa-solid fa-hourglass-start"></i> If demand is high, it may take <strong>up to an hour</strong> to send the key.'
		
// 		document.getElementById('howToActivateHead').style.fontFamily = "";
// 		document.getElementById('howToActivateHead').innerHTML = '<i class="fa-solid fa-circle-play"></i> Watch the full <strong>1-min</strong> video to learn how to activate Nms Kontho properly.'
		
		
// 		document.getElementById('InstructionHeaderForActivation').style.fontFamily = "";
// 		document.getElementById('InstructionHeaderForActivation').innerHTML = 'Activation Instructions:'
		
// 		document.getElementById('howToActivate').style.fontFamily = "";
// 		document.getElementById('howToActivate').innerHTML = '1️⃣ Set your system timezone to <strong>Dhaka, Bangladesh</strong>and ensure your device time is correct.&nbsp;<br>2️⃣ Use one-time <strong>serial key</strong> for activation and save the <strong>device ID</strong> in a safe place.<br><br><i class="fa-solid fa-thumbtack" style="color: #ff0000;"></i> You can use that <strong>device ID</strong> to activate Nms Kontho on the same device <strong>unlimited times</strong> until the serial key expires. You can also renew the ID for <strong>free</strong>.<br><i class="fa-regular fa-star"></i> When needed, simply send us your device ID, and we will renew it for you in just a couple of minutes.'
    
	
		
// 		document.getElementById('RenewPeraHead').style.fontFamily = "";
// 		document.getElementById('RenewPeraHead').innerHTML = 'Need to <strong>Renew</strong> Your Device ID?'
		
// 		document.getElementById('renewReqHeader').style.fontFamily = "";
// 		document.getElementById('renewReqHeader').innerHTML = 'Request for a Renewed Serial Key'
		
// 		const inputField = document.getElementById('DeviceIdInputField');
//       	inputField.style.fontFamily = "";
// 		inputField.placeholder = 'Paste your Device ID here';  // Set the placeholder text
		
// 		document.getElementById('renewalPlatsHead').style.fontFamily = "";
// 		document.getElementById('renewalPlatsHead').innerHTML = 'Select where you want to send the request'
// 	}
// });


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
    setTextAndFont('howToActivate', '১। কম্পিউটারের <strong>তারিখ এবং সময়</strong> ঠিক আছে কি না দেখে নিন।<br>২। সিরিয়াল key দিয়ে এক্টিভেট করার পর তা একটি <strong>নিরাপদ</strong> জায়গায় সেভ করে রাখুন।<br><br> ⚠️ সিরিয়াল কী সংরক্ষণ করা অত্যন্ত গুরুত্বপূর্ণ, যাতে অন্য কেউ এটি ব্যবহার করতে না পারে।', isBangla);
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
  }
 
