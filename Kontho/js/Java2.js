// JavaScript Document

fetch('navbar.html')
           .then(response => response.text())
           .then(data => {
               document.getElementById('navbarContainer2').innerHTML = data;
           });





function loadFeatures(features) {
    const container = document.getElementById('featureContainer');

    // Iterate over each feature in the JSON
    for (const [header, feature] of Object.entries(features)) {
        // Create the row div
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
		
		rowDiv.setAttribute('data-aos', 'flip-up');
        // Create the video column
        const colVideoDiv = document.createElement('div');
        colVideoDiv.classList.add('col-lg-5');

        const embedDiv = document.createElement('div');
        embedDiv.classList.add('embed-responsive', 'embed-responsive-16by9');

        const iframe = document.createElement('iframe');
        iframe.classList.add('embed-responsive-item');
        iframe.setAttribute('src', feature.videoSrcLink);
        iframe.setAttribute('allowfullscreen', '');

        embedDiv.appendChild(iframe);
        colVideoDiv.appendChild(embedDiv);

        // Create the text column
        const colTextDiv = document.createElement('div');
        colTextDiv.classList.add('col-lg-7');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'col-md-4', 'col-lg-12');

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        // Set the feature header
        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.innerHTML = header.replace(/([A-Z])/g, ' $1'); // Convert camelCase to spaced words

        // Set the feature description
        const p = document.createElement('p');
        p.classList.add('card-text');
        p.innerHTML = feature.description;

        // Append elements to card body
        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(p);
        cardDiv.appendChild(cardBodyDiv);
        colTextDiv.appendChild(cardDiv);

        // Append video and text columns to the row
        rowDiv.appendChild(colVideoDiv);
        rowDiv.appendChild(colTextDiv);

        // Append the row to the container
        container.appendChild(rowDiv);
    }
}

// Call the function to load features

let features = [];

fetch('js/features.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
    })
    .then(data => {
        features = data; // Store the JSON data into the `features` variable
        loadFeatures(features); // Call the loadFeatures function with the loaded features
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



// loadFeatures(features);







function setPrice(count) {
  let basePrices = {
    count10DA: [25, 50],  // Base prices for count = 1, 2, 3
    count1MA: [60, 120],
    count3MA: [160, 300],
    count6MA: [250, 480],
    count1YA: [425, 800],
    count8YA: [875, 1020],
    count8YAINR: [820, 920]
  };

  if (count == 1){
    countIndex = 0;
  } else {
    countIndex = 1;
  };

  // Update prices based on count
  count10DA.innerHTML = `${calculatePrice(basePrices.count10DA[countIndex], count)} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count1MA.innerHTML = `${calculatePrice(basePrices.count1MA[countIndex], count)} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count3MA.innerHTML = `${calculatePrice(basePrices.count3MA[countIndex], count)} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count6MA.innerHTML = `${calculatePrice(basePrices.count6MA[countIndex], count)} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count1YA.innerHTML = `${calculatePrice(basePrices.count1YA[countIndex], count)} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;
  count8YA.innerHTML = `${calculatePrice(basePrices.count8YA[countIndex], count)} <i class="fa-solid fa-bangladeshi-taka-sign"></i>\n\n <br> ${calculatePrice(basePrices.count8YAINR[countIndex], count)}  <i class="fa-solid fa-indian-rupee-sign"></i>`;
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




document.getElementById('language-toggle').addEventListener('change', function() {
    if (this.checked) {
        
		document.getElementById('step1').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('step1').innerHTML = 'ধাপ ১: সেন্ড মানি।';
    	
		document.getElementById('step2').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('step2').innerHTML = 'ধাপ ২: key সংগ্রহ। <i class="fa-solid fa-key" style="color: #5e6a75;"></i>';
		
		document.getElementById('subsPlanHeader').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('subsPlanHeader').innerHTML = 'সাবস্ক্রিপশন প্ল্যান';
		
		document.getElementById('freeTrialMsg').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('freeTrialMsg').innerHTML = 'ফ্রী ট্রায়াল key পেতে যোগাযোগ করুন:&nbsp; <a href="m.me/101469266332395" target="_blank"><i class="fa-brands fa-facebook-messenger"></i> <a href="https://wa.me/8801689865823" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a></a> <a href="https://t.me/NmsKontho" target="_blank"><i class="fa-brands fa-telegram"></i> </a><br>📣<strong>কেনার আগে ট্রায়াল Key ব্যবহারপূর্বক অ্যাপ্লিকেশানটি মূল্যায়ন করে নিতে উৎসাহিত করা হয়।</strong>';
    	
		
		
		document.getElementById('howToBuyHead').innerHTML = 'সিরিয়াল key কিনতে নিম্নোক্ত <strong>২টি ধাপ</strong> অনুসরণ করুন'
		document.getElementById('howToBuyHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
		
		document.getElementById('claimInst').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('claimInst').innerHTML = 'পছন্দের প্ল্যান অনুযায়ী টাকা পাঠানোর পর ফোনের <strong>শেষের চারটি ডিজিট</strong> বা <strong>ট্রানসাকশান আইডি</strong> অথবা <strong>স্ক্রিনশট</strong> এবং <strong>প্ল্যান</strong> উল্লেখ করে নিম্নোক্ত যেকোনো মাধ্যমে যোগাযোগ করুন।<br><br><i class="fa-solid fa-hourglass-start"></i> সাধারণত <strong>কয়েক সেকেন্ড</strong> থেকে শুরু করে  <strong>মিনিট</strong>, এমনকি ডিমান্ড বেশি থাকা অবস্থায় key পাঠাতে <strong>এক ঘন্টা</strong> পর্যন্ত সময় লাগতে পারে।'
		
		document.getElementById('howToActivateHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('howToActivateHead').innerHTML = '<i class="fa-solid fa-circle-play"></i> এক্টিভেশন প্রক্রিয়া জানতে <strong>১ মিনিটের</strong> ছোট্ট ভিডিওটি দেখে নিন।'
		
		
		document.getElementById('InstructionHeaderForActivation').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('InstructionHeaderForActivation').innerHTML = 'এক্টিভেশনের ধাপ সমূহ:'
		
		
		document.getElementById('howToActivate').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('howToActivate').innerHTML = '১। কম্পিউটারের টাইমজোন <strong>Dhaka, Bangladesh</strong> সেট করে নিন এবং দেখেনিন সময় ঠিক আছে কি না।<br>২। সিরিয়াল key দিয়ে এক্টিভেট করার পর <strong>device ID</strong> একটি নিরাপদ জায়গায় সেভ করে রাখুন।<br><br><i class="fa-solid fa-thumbtack" style="color: #ff0000;"></i> মেয়াদ থাকাকালীন device ID ব্যাবহার করে ঐ ডিভাইসে Nms Kontho <strong>যতবার ইচ্ছা</strong> এক্টিভেট করা যাবে।<br><i class="fa-regular fa-star"></i> প্রয়োজন হলে <strong>বিনামূল্যে রিনিউ</strong> করে নেওয়া যাবে।'
		





    document.getElementById('RenewPeraHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('RenewPeraHead').innerHTML = 'আইডি <strong>রিনিউ</strong> করতে চান?'
		
		document.getElementById('renewReqHeader').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('renewReqHeader').innerHTML = 'ডিভাইস আইডি রিনিউ করতে রিকোয়েস্ট পাঠান।'
		
		const inputField = document.getElementById('DeviceIdInputField');
      	inputField.style.fontFamily = "Noto Sans Bengali, sans-serif";
		inputField.placeholder = 'আইডি এখানে পেস্ট করুন।';  // Set the placeholder text
		
		document.getElementById('renewalPlatsHead').style.fontFamily = "Noto Sans Bengali, sans-serif";
		document.getElementById('renewalPlatsHead').innerHTML = 'যে মাধ্যমে রিকোয়েস্ট পাঠাতে চান সেখানে ক্লিক করুন:'
	} else {
		
		document.getElementById('step1').style.fontFamily = "";
		document.getElementById('step1').innerHTML = 'Step 1: Send Money';
		
		document.getElementById('step2').style.fontFamily = "";
		document.getElementById('step2').innerHTML = 'Step 2: Claim the Key <i class="fa-solid fa-key" style="color: #5e6a75;"></i>';
		
		document.getElementById('subsPlanHeader').style.fontFamily = "";
		document.getElementById('subsPlanHeader').innerHTML = 'Subscription Plans';
		
		
		document.getElementById('freeTrialMsg').style.fontFamily = "";
		document.getElementById('freeTrialMsg').innerHTML = 'Obtain your free trial key from any of our contact platforms:&nbsp; <a href="m.me/101469266332395" target="_blank"><i class="fa-brands fa-facebook-messenger"></i> <a href="https://wa.me/8801689865823" target="_blank"><i class="fa-brands fa-square-whatsapp"></i></a></a> <a href="https://t.me/NmsKontho" target="_blank"><i class="fa-brands fa-telegram"></i> </a><br>📣<strong>We encourage users to try the application using the trial key before considering a purchase.</strong>';
		
		document.getElementById('howToBuyHead').style.fontFamily = "";
		document.getElementById('howToBuyHead').innerHTML = '<strong>How to buy a serial key?</strong> Just follow these 2 steps:'
        
		document.getElementById('claimInst').style.fontFamily = "";
		document.getElementById('claimInst').innerHTML = 'After sending the payment for your selected subscription plan, contact us on any of the following platforms with the <strong>last 4 digits</strong> of your phone number or <strong>transaction ID</strong> or a <strong>screenshot</strong>, along with your <strong>plan details</strong>.<br><br><i class="fa-solid fa-hourglass-start"></i> If demand is high, it may take <strong>up to an hour</strong> to send the key.'
		
		document.getElementById('howToActivateHead').style.fontFamily = "";
		document.getElementById('howToActivateHead').innerHTML = '<i class="fa-solid fa-circle-play"></i> Watch the full <strong>1-min</strong> video to learn how to activate Nms Kontho properly.'
		
		
		document.getElementById('InstructionHeaderForActivation').style.fontFamily = "";
		document.getElementById('InstructionHeaderForActivation').innerHTML = 'Activation Instructions:'
		
		document.getElementById('howToActivate').style.fontFamily = "";
		document.getElementById('howToActivate').innerHTML = '1️⃣ Set your system timezone to <strong>Dhaka, Bangladesh</strong>and ensure your device time is correct.&nbsp;<br>2️⃣ Use one-time <strong>serial key</strong> for activation and save the <strong>device ID</strong> in a safe place.<br><br><i class="fa-solid fa-thumbtack" style="color: #ff0000;"></i> You can use that <strong>device ID</strong> to activate Nms Kontho on the same device <strong>unlimited times</strong> until the serial key expires. You can also renew the ID for <strong>free</strong>.<br><i class="fa-regular fa-star"></i> When needed, simply send us your device ID, and we will renew it for you in just a couple of minutes.'
    
	
		
		document.getElementById('RenewPeraHead').style.fontFamily = "";
		document.getElementById('RenewPeraHead').innerHTML = 'Need to <strong>Renew</strong> Your Device ID?'
		
		document.getElementById('renewReqHeader').style.fontFamily = "";
		document.getElementById('renewReqHeader').innerHTML = 'Request for a Renewed Serial Key'
		
		const inputField = document.getElementById('DeviceIdInputField');
      	inputField.style.fontFamily = "";
		inputField.placeholder = 'Paste your Device ID here';  // Set the placeholder text
		
		document.getElementById('renewalPlatsHead').style.fontFamily = "";
		document.getElementById('renewalPlatsHead').innerHTML = 'Select where you want to send the request'
	}
});



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

