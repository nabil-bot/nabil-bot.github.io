var version = 7.005


fetch('navbar.html')
           .then(response => response.text())
           .then(data => {
               document.getElementById('navbarContainer').innerHTML = data;
           });

$(document).ready(function() {
  $({ value: 0 }).animate({ value: version }, {
    duration: 2000,
    easing: "linear",
    step: function(now) {
      $("#variableValue").text(now.toFixed(3));
    }
  });
});



function confirmationWinCommonTast() {
	document.getElementById('enableInstallerBtnCheckbox').style.display = '';
	document.getElementById('enableInstallerBtnCheckboxID').style.display = '';
	const checkbox = document.getElementById('enableInstallerBtnCheckbox');
	const downloadButton1 = document.getElementById('32bitInstallerDownloadButton');
	const downloadButton2 = document.getElementById('64bitInstallerDownloadButton');

	document.getElementById('32bitInstallerDownloadButton').innerHTML = '<i class="fa-solid fa-download"></i> 32-bit  ';
	downloadButton1.disabled = true;
	downloadButton2.disabled = true;
	checkbox.addEventListener('change', function() {
	  downloadButton1.disabled = !this.checked; // Enable button when checkbox is checked
	  downloadButton2.disabled = !this.checked;
	});
	var element = document.querySelector('.blurArea');
		element.style.filter = 'blur(10px)'; 
}

function ShowMsStoreMsg(){
	document.getElementById('confirmationWindow').style.display = 'block';
	
	if (document.getElementById("navLangSwitchBtn").textContent === "বাংলা") {
		document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Before installing Nms Kontho from the Microsoft Store</strong>";
		document.querySelector('#confirmationWindow p').innerHTML =  "<p>⚠️ Due to recent policy updates from Microsoft, this app is temporarily unavailable.</p>🔧 আসন্ন ভার্সনটি ৩২-বিট এবং ৬৪-বিট উভয় অপারেটিং সিস্টেমে সমর্থিত হবে।🚀.<br>In the meantime, you can still use the installer version 💻." //"If you have previously installed Nms Kontho using the installer, check the Documents directory on your PC for a <i class='fa-regular fa-folder'></i> <strong>Kontho</strong> folder and delete it if you find one.<br><br>🔵Sometimes the version available on the Microsoft Store may not be the latest one.";
	}else{
		document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Microsoft Store থেকে Nms Kontho ইনস্টল করার আগে</strong>";
		document.querySelector('#confirmationWindow p').innerHTML = "⚠️ মাইক্রোসফটের সাম্প্রতিক নীতিমালা পরিবর্তনের কারণে অ্যাপটি সাময়িকভাবে স্টোরে অনুপলব্ধ।🔧 আমরা সর্বোচ্চ চেষ্টা করছি নতুন সংস্করণটি খুব শিগগিরই প্রকাশ করার জন্য 🚀।<br> এই সময়ে, আপনি ইনস্টলার সংস্করণটি ব্যবহার করতে পারেন 💻।" // "যদি আপনি পূর্বে ইনস্টলার ব্যবহার করে Nms Kontho ইনস্টল করে থাকেন, এবং আপনার পিসিতে ডকুমেন্টস ডিরেক্টরিতে যদি একটি <i class='fa-regular fa-folder'></i> <strong>Kontho</strong> ফোল্ডার থাকে তাহলে তা ডিলিট করে নিন।<br><br>Documents --> Kontho (remove)";
	}
	// document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and I would like to download the Installer.</strong>";
	
	
	document.getElementById('32bitInstallerDownloadButton').innerHTML = '<i class="fas fa-external-link-alt"></i><strong> MS Store</strong>';
	
	downloadButton = document.getElementById('32bitInstallerDownloadButton');
	downloadButton.disabled = false;

	downloadButton.addEventListener('click', function() {
		var link = "https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});
	
	document.getElementById('confirmationCheckbox').style.display = 'none';
	// document.getElementById('enableInstallerBtnCheckboxID').style.display = 'none';
	document.getElementById('64bitInstallerDownloadButton').style.display = 'none';
	var element = document.querySelector('.blurArea');
		element.style.filter = 'blur(10px)';
}

// JavaScript function to load content from index2.html
function showInstallerConfirmationFunc() {
	document.getElementById('confirmationWindow').style.display = 'block';
	document.getElementById('enableInstallerBtnCheckbox').checked = false;
	

	if (document.getElementById("navLangSwitchBtn").textContent === "বাংলা") {
		
		document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Are you sure you want to download Nms Kontho installer❓</strong>";
		document.querySelector('#confirmationWindow p').innerHTML = "📢Please note that while it is completely ✅<strong>safe</strong> to use the Installer, but some antivirus may flag it 🚩. To avoid this issue, we recommend installing Nms Kontho directly from the <strong><a href='https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare' target='_blank'>Microsoft Store</a>.</strong>💥&nbsp;<br><br>🔵Sometimes the version available on the Microsoft Store may not be the latest one.";
		document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and I would like to download the Installer.</strong>";
	
	} else {
		document.querySelector('#confirmationWindow h4').innerHTML = "<strong>আপনি কি Nms Kontho ইনস্টলার ডাউনলোড করতে চান❓</strong>";
		document.querySelector('#confirmationWindow p').innerHTML = "📢 দয়া করে জেনে রাখুন যে, ইনস্টলারটি ব্যবহার করা সম্পূর্ণরূপে ✅ <strong>নিরাপদ</strong>, তবে কিছু অ্যান্টিভাইরাস এটি 🚩 ফ্ল্যাগ করে মুছে দিতে পারে। এই সমস্যা এড়াতে, আমরা Nms Kontho সরাসরি <strong><a href='https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare' target='_blank'>Microsoft Store</a></strong> থেকে ইনস্টল করার পরামর্শ দিচ্ছি। 💥<br><br>🔵 কখনও কখনও Microsoft Store-এর সংস্করণটি লেটেস্ট নাও হতে পারে। (প্রকাশিত হতে দেরি হয় কিছুটা)";
		document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;সতর্কতা পড়েছি এবং আমি ইনস্টলার ডাউনলোড করতে চাই।</strong>";
	
	}
	
	// document.querySelector('#confirmationWindow .btn-success').innerHTML = '<strong>Download</strong>';
	document.getElementById('32bitInstallerDownloadButton').addEventListener('click', function() {
		var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x32_Installer.zip"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});
	document.getElementById('64bitInstallerDownloadButton').addEventListener('click', function() {
		var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x64_Installer.zip"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});

	// document.getElementById('32bitPortableDownloadButton').addEventListener('click', function() {
	// 	var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x32_Portable.zip"; // Decide which link to open
	// 	window.open(link, '_blank'); // Opens in a new tab
	// });
	// document.getElementById('64bitPortableDownloadButton').addEventListener('click', function() {
	// 	var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x64_Portable.zip; // Decide which link to open
	// 	window.open(link, '_blank'); // Opens in a new tab
	// });
	document.getElementById('confirmationCheckbox').style.display = '';
	document.getElementById('64bitInstallerDownloadButton').style.display = '';
	confirmationWinCommonTast()
}


function showPortableConfirmationFunc() {
	document.getElementById('confirmationWindow').style.display = 'block';
	
	document.getElementById('enableInstallerBtnCheckbox').checked = false;
	if (document.getElementById("navLangSwitchBtn").textContent === "বাংলা") {
		document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Are you sure you want to download Nms Kontho Portable❓</strong>";
		document.querySelector('#confirmationWindow p').innerHTML = "📢Please note that while it is completely ✅<strong>safe</strong> to use the Portable version, but some antivirus may flag it 🚩. To avoid this issue, we recommend installing Nms Kontho directly from the <strong><a href='https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare' target='_blank'>Microsoft Store</a>.</strong>💥&nbsp;<br><br>🔵Sometimes the version available on the Microsoft Store may not be the latest one.";
		document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and I would like to download the Portable.</strong>";
	} else{
		document.querySelector('#confirmationWindow h4').innerHTML = "<strong>আপনি কি Nms Kontho পোর্টেবল ডাউনলোড করতে চান❓</strong>";
		document.querySelector('#confirmationWindow p').innerHTML = "📢 দয়া করে জেনে রাখুন যে, পোর্টেবল ব্যবহার করা সম্পূর্ণরূপে ✅ <strong>নিরাপদ</strong>, তবে কিছু অ্যান্টিভাইরাস এটি 🚩 <strong>ফ্ল্যাগ</strong> করে মুছে দিতে পারে। এই সমস্যা এড়াতে, আমরা Nms Kontho সরাসরি <a href='https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare' target='_blank'>Microsoft Store</a> থেকে ইনস্টল করার পরামর্শ দিচ্ছি। 💥<br><br>🔵 কখনও কখনও Microsoft Store-এর সংস্করণটি লেটেস্ট নাও হতে পারে। (প্রকাশিত হতে দেরি হয় কিছুটা)";
		document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;সতর্কতা পড়েছি এবং আমি পোর্টেবল ডাউনলোড করতে চাই।</strong>";
	}
	// document.querySelector('#confirmationWindow .btn-success').innerHTML = '<strong>Download</strong>';
	// document.getElementById('downloadButton').addEventListener('click', function() {
	// 	var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Kontho_Portable.zip"; // Decide which link to open
	// 	window.open(link, '_blank'); // Opens in a new tab
	// });

	document.getElementById('32bitInstallerDownloadButton').addEventListener('click', function() {
		var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x32_Portable.zip"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});
	document.getElementById('64bitInstallerDownloadButton').addEventListener('click', function() {
		var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x64_Portable.zip"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});

	document.getElementById('confirmationCheckbox').style.display = '';
	document.getElementById('64bitInstallerDownloadButton').style.display = '';

	confirmationWinCommonTast()
}


function  cancelfunc(){
	document.getElementById('confirmationWindow').style.display = '';
	var element = document.querySelector('.blurArea');
	element.style.filter = 'blur(0px)'; // Apply a 10px blur
}

function openArchive() {
	var link = "https://github.com/nabil-bot/KonthoExes/activity?ref=main"; // Decide which link to open
	window.open(link, '_blank'); // Opens in a new tab
}



function changeLangFunc() {
    const langButton = document.getElementById("navLangSwitchBtn");

    // Elements with text content to toggle
    const installationHeader = document.getElementById("InstallationHeader");
    const installationPara = document.getElementById("InstallationPara");
    const msgForUsersHeader = document.getElementById("msgForUseresHeader");
    const msgForUsersPara = document.getElementById("msgForUsersPara");
    const FAQHeader = document.getElementById("FAQHeader");
	const faqH1 = document.getElementById("faqH1");
	const faqA1 = document.getElementById("faqA1");


	const faqH2 = document.getElementById("faqH2");
	const faqA2 = document.getElementById("faqA2");

	const faqH3 = document.getElementById("faqH3");
	const faqA3 = document.getElementById("faqA3");

	const faqH4 = document.getElementById("faqH4");
	const faqA4 = document.getElementById("faqA4");

	const faqH5 = document.getElementById("faqH5");
	const faqA5 = document.getElementById("faqA5");

	const policyHeader = document.getElementById("policyHeader")

	const policyParas = document.getElementById("policyParas")
	

    // Store English content if not already stored
    if (!installationHeader.dataset.english) {
        installationHeader.dataset.english = installationHeader.innerHTML;
        installationPara.dataset.english = installationPara.innerHTML;
        msgForUsersHeader.dataset.english = msgForUsersHeader.innerHTML;
		msgForUsersPara.dataset.english = msgForUsersPara.innerHTML;
		FAQHeader.dataset.english = FAQHeader.innerHTML;

		faqH1.dataset.english = faqH1.innerHTML;
		faqA1.dataset.english = faqA1.innerHTML;

		faqH2.dataset.english = faqH2.innerHTML;
		faqA2.dataset.english = faqA2.innerHTML;

		faqH3.dataset.english = faqH3.innerHTML;
		faqA3.dataset.english = faqA3.innerHTML;

		faqH4.dataset.english = faqH4.innerHTML;
		faqA4.dataset.english = faqA4.innerHTML;

		faqH5.dataset.english = faqH5.innerHTML;
		faqA5.dataset.english = faqA5.innerHTML;

		policyHeader.dataset.english = policyHeader.innerHTML;

		policyParas.dataset.english = policyParas.innerHTML;
		

    }

    // Toggle between English and Bangla
    if (langButton.textContent === "বাংলা") {
		langButton.textContent = "English";

        installationHeader.innerHTML = "<strong>ইনস্টলেশন</strong>";
        installationPara.innerHTML = "📌 <strong>সিস্টেমের প্রয়োজনীয়তা:</strong> এই অ্যাপ্লিকেশনটি নির্বিঘ্নে ইনস্টল ও ব্যবহার করতে আপনার সিস্টেমে নিচের শর্তগুলো পূরণ করতে হবে।<br><br><strong>অপারেটিং সিস্টেম:</strong>১০, ১১, বা এর পরবর্তী ভার্সন (নূন্যতম প্রয়োজন উইন্ডোজ ১০)।<br><strong>RAM:</strong> ন্যূনতম ৪ জিবি (প্রস্তাবিত)।<br><strong>ডিস্ক স্পেস:</strong> ৬৫ এমবি ফাঁকা জায়গা প্রয়োজন।<br><br><strong>অতিরিক্ত তথ্য:</strong>এটি অন্যান্য অ্যাপ্লিকেশনের সাথে যোগাযোগ স্থাপন করার মাধ্যমে কাজ করে, তাই যদি সিস্টেমের অন্য কোনো অ্যাপ্লিকেশন এতে হস্তক্ষেপ করে বা এর সাথে সঠিকভাবে ইন্টারঅ্যাক্ট করতে সক্ষম না হয়, তাহলে এই অ্যাপটি প্রত্যাশিতভাবে কাজ নাও করতে পারে।"
        msgForUsersHeader.innerHTML = "📧 <strong>ব্যবহারকারীদের উদ্দেশে</strong>";
		msgForUsersPara.innerHTML = "স্কুলে থাকতে ২০২০ সালে মহামারীর সময় এটা নিয়ে কাজ শুরু করি। কম্পিউটারের সামনে বেশি সময় কাটানোর সুযোগ পেয়ে, দৈনন্দিন কাজগুলোকে সহজ করার উদ্দেশেই মূলত অটোমেশন টুল হিসেবে এর যাত্রা শুরু। বেশ কয়েক বছর কেবলমাত্র ফ্রেন্ড সার্কেলের মধ্যেই সফটওয়্যারটা ব্যবহার করা হতো। এরপর ২০২৩ এর মাঝামাঝি সময়ে BETA ভার্সন উন্মুক্ত করা হয়। সম্প্রতি লক্ষাধিক অ্যাক্টিভ ইউজার এর মাইল ফলক পূর্ণ হয়েছে। সময়ের বিচারে, এটি এখনো একটি নতুন অ্যাপ্লিকেশন। পাড়ি দিতে হবে বহু পথ। আর এর জন্য প্রয়োজন <strong>ইউজার ফিডব্যাক</strong>। ব্যবহারকালে কোনো অস্বাভাবিকতা, ত্রুটি বা সমস্যার সম্মুখীন হলে দয়া করে তা রিপোর্ট করুন Nms Kontho-র অফিসিয়াল ফেসবুক পেজে।<br><br>📌 <strong>অ্যান্টিভাইরাস ফ্ল্যাগিং:</strong> 🚩 কিছু অ্যান্টিভাইরাস অ্যাপ্লিকেশন Nms Kontho-র ইনস্টলার এবং পোর্টেবল ভার্সনটিকে ফ্ল্যাগ করতে পারে।<br> এ সমস্যার সম্মুখীন হতে না চাইলে, Microsoft Store থেকে সফটওয়্যারটি ইনস্টল করার পরামর্শ রইলো।<br><br><strong>ডেভলপার:</strong> মোঃ নাবিল মোস্তফা"
		FAQHeader.innerHTML = "<strong>প্রায়শই জিজ্ঞাসিত প্রশ্ন ও উত্তর</strong>"
		faqH1.innerHTML = "<strong>🔷ওয়েবসাইট লিঙ্কটি এমন কেন❓</strong>"
		faqA1.innerHTML = "<strong>উত্তর:</strong> 💠 ওয়েবসাইটের লিঙ্কটি এমন হওয়ার কারণ এটি আমার ব্যক্তিগত GitHub Repository তে হোস্ট করা হয়েছে।<br>যেহেতু এটি কোনো বাণিজ্যিক অ্যাপ্লিকেশন নয়।"

		faqH2.innerHTML = "<strong>🔷কেন Access Plus সংস্করণ ব্যবহারের জন্য অর্থ প্রদান করতে হয়❓</strong>"
		faqA2.innerHTML = "<strong>উত্তর:</strong> 💠 এই অ্যাপ্লিকেশনে ব্যবহৃত কিছু API বিনামূল্যে নয়, এবং আমি এটাকে ঘিরে এমন একটি ইকোসিস্টেম দাঁড় করানোর চেষ্টা করছি যাতে এর ধারাবাহিক উন্নয়ন ও রক্ষণাবেক্ষণ সম্ভব হয়।"

		faqH3.innerHTML = "<strong>🔷কেন কিছু অ্যান্টিভাইরাস ইনস্টলার এবং পোর্টেবল সংস্করণকে ফ্ল্যাগ করে❓</strong>"
		faqA3.innerHTML = "<strong>উত্তর:</strong> 💠 এই ধরনের অ্যাপ্লিকেশন বিতরণের জন্য একটি কোড সিগনেচার সার্টিফিকেট প্রয়োজন, যা ফ্ল্যাগিং সমস্যাগুলি এড়াতে সহায়ক। তবে, কোনো প্রতিষ্ঠানিক সহায়তা ছাড়াই একজন ব্যক্তির পক্ষে এই প্রক্রিয়াটি সম্পন্ন করা অত্যন্ত চ্যালেঞ্জিং।<br>Microsoft Store থেকে এই অ্যাপ্লিকেশনটি ইনস্টল করলে ফ্ল্যাগিং সমস্যাটি এড়ানো যাবে।"

		faqH4.innerHTML = "<strong>🔷Nms Kontho ব্যবহার করা কি নিরাপদ❓</strong>"
		faqA4.innerHTML = "<strong>উত্তর:</strong> 💠 হ্যাঁ, আপনি যদি অফিসিয়াল ওয়েবসাইট বা Microsoft Store থেকে Nms Kontho ডাউনলোড করেন তবে <strong>এটি ব্যবহার করা সম্পূর্ণ নিরাপদ</strong>।<br><br> একই অ্যাপ্লিকেশন তিনটি ফরম্যাটে উপলব্ধ: ইনস্টলার (.exe), পোর্টেবল ভার্সন, এবং Microsoft Store-এর জন্য একটি MSIX প্যাকেজ। প্রতিটি ফরম্যাটই নিরাপদ, তবে MSIX প্যাকেজটি স্টোরে প্রকাশিত হওয়ার জন্য দীর্ঘতর একটি সার্টিফিকেশন প্রক্রিয়ার মধ্য দিয়ে যায়।<br> আমরা Microsoft Store-এর বাইরেও ইনস্টলার এবং পোর্টেবল সংস্করণ ডাউনলোড করার সুযোগ করে দিয়েছি, কারণ স্টোরের কিছু সীমাবদ্ধতা রয়েছে, যেমন পুরোনো সংস্করণের অ্যাক্সেসের অভাব এবং আপডেট প্রকাশে বিলম্ব। Microsoft Store ভার্সন পরিবর্তনের জন্য তেমন আদর্শ নয়, তাই এই ডাউনলোড বিকল্পগুলো প্রদান করা হয়।"

		faqH5.innerHTML = "<strong>🔷আমাদের সীমাবদ্ধতা❗</strong>"
		faqA5.innerHTML = "<strong>উত্তর:</strong> 💠বর্তমানে কন্ঠের প্রায় ২ লক্ষ অ্যাক্টিভ ইউজার রয়েছে। এখনো বাণিজ্যিক পর্যায়ে না পৌঁছানোয়, ছোট একটি টিম দিয়ে এতো বড় ইউজার বেস হ্যান্ডেল করা বেশ চ্যালেঞ্জের। কম্পিউটার ব্যবহারে অনভিজ্ঞদের জন্য আমাদের পরামর্শ হলো, কন্ঠ-এর ফ্রি ভার্সন ব্যবহার করা, পেইড প্ল্যান না নেওয়া।<br>ছোটখাটো সমস্যা নিজেরাই সমাধান করার চেষ্টা করার জন্য ব্যবহারকারীদের উৎসাহিত করা হয়। আমাদের উপর নির্ভরশীলতাকে নিরুৎসাহিত করা হচ্ছে। কারণ আমাদের এখনো 24/7 ডেডিকেটেড ইউজার সাপোর্ট টিম নেই। সম্ভব হলে আপনার আশেপাশে অভিজ্ঞ কারো সাহায্য নিতে পারেন।<br>ডিমান্ড বেশি থাকা অবস্থায় সবাইকে রিপ্লাই দেওয়া সম্ভব হয়ে উঠে না। "



		policyHeader.innerHTML = "<strong>নীতিমালা</strong>"


		fetch('js/banglaPolicyHtml.txt')
			.then(response => response.text())
			.then(data => {
				document.getElementById('policyParas').innerHTML = data;
			})
			.catch(error => console.error('Error fetching text file:', error));






		installationHeader.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		installationPara.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		msgForUsersHeader.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		msgForUsersPara.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		FAQHeader.style.fontFamily = "'Noto Sans Bengali', sans-serif";

		faqH1.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		faqA1.style.fontFamily = "'Noto Sans Bengali', sans-serif";


		faqH2.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		faqA2.style.fontFamily = "'Noto Sans Bengali', sans-serif";

		faqH3.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		faqA3.style.fontFamily = "'Noto Sans Bengali', sans-serif";

		faqH4.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		faqA4.style.fontFamily = "'Noto Sans Bengali', sans-serif";

		faqH5.style.fontFamily = "'Noto Sans Bengali', sans-serif";
		faqA5.style.fontFamily = "'Noto Sans Bengali', sans-serif";

		policyHeader.style.fontFamily = "'Noto Sans Bengali', sans-serif";

		policyParas.style.fontFamily = "'Noto Sans Bengali', sans-serif";


		msgForUsersPara.style.fontWeight = "500";

    } else {

        langButton.textContent = "বাংলা";

		installationHeader.style.fontFamily = "";
        installationPara.style.fontFamily = "";
        msgForUsersHeader.style.fontFamily = "";
		msgForUsersPara.style.fontFamily = "";
		FAQHeader.style.fontFamily = "";



		faqH1.style.fontFamily = "";
		faqA1.style.fontFamily = "";


		faqH2.style.fontFamily = "";
		faqA2.style.fontFamily = "";

		faqH3.style.fontFamily = "";
		faqA3.style.fontFamily = "";

		faqH4.style.fontFamily = "";
		faqA4.style.fontFamily = "";

		faqH5.style.fontFamily = "";
		faqA5.style.fontFamily = "";

		policyHeader.style.fontFamily = "";
		policyParas.style.fontFamily = "";



        // Restore English content from data attributes
        installationHeader.innerHTML = installationHeader.dataset.english;
        installationPara.innerHTML = installationPara.dataset.english;
        msgForUsersHeader.innerHTML = msgForUsersHeader.dataset.english;
		msgForUsersPara.innerHTML = msgForUsersPara.dataset.english;
		FAQHeader.innerHTML = FAQHeader.dataset.english;

		faqH1.innerHTML = faqH1.dataset.english;
		faqA1.innerHTML = faqA1.dataset.english;

		faqH2.innerHTML = faqH2.dataset.english;
		faqA2.innerHTML = faqA2.dataset.english;

		faqH3.innerHTML = faqH3.dataset.english;
		faqA3.innerHTML = faqA3.dataset.english;

		faqH4.innerHTML = faqH4.dataset.english;
		faqA4.innerHTML = faqA4.dataset.english;


		faqH5.innerHTML = faqH5.dataset.english;
		faqA5.innerHTML = faqA5.dataset.english;

		policyHeader.innerHTML = policyHeader.dataset.english;
		policyParas.innerHTML = policyParas.dataset.english;


    }

	
}
