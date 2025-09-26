var version = 7.022

fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbarContainer').innerHTML = data;
  });

$(document).ready(function () {
  $({ value: 0 }).animate({ value: version }, {
    duration: 2000,
    easing: "linear",
    step: function (now) {
      $("#variableValue").text(now.toFixed(3));
    }
  });
});

// =======================
// Global JSON Content
// =======================
let siteContent = {};
let currentLang = "en";

// Load JSON
fetch("js/content.json")
  .then(res => res.json())
  .then(data => {
    siteContent = data;
    loadContent("en");
  });

// Load content dynamically
function loadContent(lang) {
  currentLang = lang;
  const data = siteContent[lang];
  if (!data) return;

  // Installation
  document.getElementById("InstallationHeader").innerHTML = `<strong>${data.installation.header}</strong>`;
  document.getElementById("InstallationPara").innerHTML = data.installation.body.map(p => `<p>${p}</p>`).join("");

  // Message
  document.getElementById("msgForUseresHeader").innerHTML = `<strong>${data.message.header}</strong>`;
  document.getElementById("msgForUsersPara").innerHTML = data.message.body.map(p => `<p>${p}</p>`).join("");

  // FAQ
  document.getElementById("FAQHeader").innerHTML = `<strong>${data.faqHeader}</strong>`;
  const faqContainer = document.getElementById("accordion1");
  faqContainer.innerHTML = data.faq.map((item, i) => `
    <div class="card">
      <div class="card-header" role="tab" id="heading${i}">
        <h5 class="mb-0 d-flex justify-content-between align-items-center">
          <a id="faqH${i + 1}" data-toggle="collapse" href="#collapse${i}" role="button" aria-expanded="false" aria-controls="collapse${i}">
            ${item.q}
          </a>
          <a data-toggle="collapse" href="#collapse${i}" role="button" aria-expanded="false" aria-controls="collapse${i}">
            <i class="fa-solid fa-angles-down"></i>
          </a>
        </h5>
      </div>
      <div id="collapse${i}" class="collapse" role="tabpanel" aria-labelledby="heading${i}" data-parent="#accordion1">
        <div class="card-body" id="faqA${i + 1}">${item.a}</div>
      </div>
    </div>
  `).join("");

  // Policy
  document.getElementById("policyHeader").innerHTML = `<strong>${data.policy.header}</strong>`;
  document.getElementById("policyParas").innerHTML = data.policy.body.map(p => `<p>${p}</p>`).join("");
}

// Language Switch
function changeLangFunc() {
  const btn = document.getElementById("navLangSwitchBtn");
  if (currentLang === "en") {
    loadContent("bn");
    btn.textContent = "English";
  } else {
    loadContent("en");
    btn.textContent = "বাংলা";
  }
}

// =======================
// Confirmation Functions (unchanged from your working code)
// =======================
function confirmationWinCommonTast() {
  document.getElementById('enableInstallerBtnCheckbox').style.display = '';
  document.getElementById('enableInstallerBtnCheckboxID').style.display = '';
  const checkbox = document.getElementById('enableInstallerBtnCheckbox');
  const downloadButton1 = document.getElementById('32bitInstallerDownloadButton');
  const downloadButton2 = document.getElementById('64bitInstallerDownloadButton');

  document.getElementById('32bitInstallerDownloadButton').innerHTML = '<i class="fa-solid fa-download"></i> 32-bit';
  downloadButton1.disabled = true;
  downloadButton2.disabled = true;
  checkbox.addEventListener('change', function () {
    downloadButton1.disabled = !this.checked;
    downloadButton2.disabled = !this.checked;
  });
  var element = document.querySelector('.blurArea');
  element.style.filter = 'blur(10px)';
}

function ShowMsStoreMsg() {
  document.getElementById('confirmationWindow').style.display = 'block';
  document.getElementById('tutorial-link').style.display = 'none';

  if (currentLang === "en") {
    document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Before installing Nms Kontho from the Microsoft Store</strong>";
    document.querySelector('#confirmationWindow p').innerHTML = "If you previously installed Nms Kontho with the installer, check Documents for a <strong>Kontho</strong> folder and delete it.<br><br>🔵 Sometimes the Store version may not be the latest.";
  } else {
    document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Microsoft Store থেকে Nms Kontho ইনস্টল করার আগে</strong>";
    document.querySelector('#confirmationWindow p').innerHTML = "যদি আগে ইনস্টলার দিয়ে ইনস্টল করা থাকে, Documents ডিরেক্টরিতে থাকা <strong>Kontho</strong> ফোল্ডার ডিলিট করুন।<br><br>🔵 কখনও কখনও Microsoft Store-এর সংস্করণটি লেটেস্ট নাও হতে পারে।";
  }

  let downloadButton = document.getElementById('MsStoreDownloadButton');
  downloadButton.onclick = function () {
    window.open("https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare", '_blank');
  };

  document.getElementById('MsStoreDownloadButton').style.display = 'block';
  document.getElementById('confirmationCheckbox').style.display = 'none';
  document.getElementById('32bitInstallerDownloadButton').style.display = 'none';
  document.getElementById('64bitInstallerDownloadButton').style.display = 'none';
  var element = document.querySelector('.blurArea');
  element.style.filter = 'blur(10px)';
}

function showInstallerConfirmationFunc() {
  document.getElementById('confirmationWindow').style.display = 'block';
  document.getElementById('tutorial-link').style.display = 'none';
  document.getElementById('MsStoreDownloadButton').style.display = 'none';
  document.getElementById('enableInstallerBtnCheckbox').checked = false;

  document.getElementById('32bitInstallerDownloadButton').style.display = 'block';
  document.getElementById('64bitInstallerDownloadButton').style.display = 'block';

  if (currentLang === "en") {
    document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Are you sure you want to download Nms Kontho installer❓</strong>";
    document.querySelector('#confirmationWindow p').innerHTML = "📢 Please note: while safe, antivirus may flag it 🚩. We recommend Microsoft Store.";
    document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and want to download the Installer.</strong>";
  } else {
    document.querySelector('#confirmationWindow h4').innerHTML = "<strong>আপনি কি Nms Kontho ইনস্টলার ডাউনলোড করতে চান❓</strong>";
    document.querySelector('#confirmationWindow p').innerHTML = "📢 দয়া করে জেনে রাখুন: ইনস্টলারটি নিরাপদ, তবে কিছু অ্যান্টিভাইরাস এটি 🚩 ফ্ল্যাগ করতে পারে। Microsoft Store থেকে ইনস্টল করা উত্তম।";
    document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;সতর্কতা পড়েছি এবং আমি ইনস্টলার ডাউনলোড করতে চাই।</strong>";
  }

  document.getElementById('32bitInstallerDownloadButton').onclick = function () {
    window.open("https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x32_Installer.zip", '_blank');
  };
  document.getElementById('64bitInstallerDownloadButton').onclick = function () {
    window.open("https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x64_Installer.zip", '_blank');
  };

  document.getElementById('confirmationCheckbox').style.display = '';
  confirmationWinCommonTast();
}

function showPortableConfirmationFunc() {
  document.getElementById('confirmationWindow').style.display = 'block';
  document.getElementById('MsStoreDownloadButton').style.display = 'none';
  document.getElementById('32bitInstallerDownloadButton').style.display = 'block';
  document.getElementById('64bitInstallerDownloadButton').style.display = 'block';

  document.getElementById('tutorial-link').style.display = '';
  document.getElementById('enableInstallerBtnCheckbox').checked = false;

  if (currentLang === "en") {
    document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Are you sure you want to download Nms Kontho Portable❓</strong>";
    document.querySelector('#confirmationWindow p').innerHTML = "📢 Please note: while safe, antivirus may flag it 🚩. We recommend Microsoft Store.";
    document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and want to download the Portable.</strong>";
  } else {
    document.querySelector('#confirmationWindow h4').innerHTML = "<strong>আপনি কি Nms Kontho পোর্টেবল ডাউনলোড করতে চান❓</strong>";
    document.querySelector('#confirmationWindow p').innerHTML = "📢 দয়া করে জেনে রাখুন: পোর্টেবল নিরাপদ, তবে কিছু অ্যান্টিভাইরাস এটি 🚩 ফ্ল্যাগ করতে পারে। Microsoft Store থেকে ইনস্টল করা উত্তম।";
    document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;সতর্কতা পড়েছি এবং আমি পোর্টেবল ডাউনলোড করতে চাই।</strong>";
  }

  document.getElementById('32bitInstallerDownloadButton').onclick = function () {
    window.open("https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x32_Portable.zip", '_blank');
  };
  document.getElementById('64bitInstallerDownloadButton').onclick = function () {
    window.open("https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Nms_Kontho_x64_Portable.zip", '_blank');
  };

  document.getElementById('confirmationCheckbox').style.display = '';
  confirmationWinCommonTast();
}

function cancelfunc() {
  document.getElementById('confirmationWindow').style.display = '';
  var element = document.querySelector('.blurArea');
  element.style.filter = 'blur(0px)';
}

function openArchive() {
  var link = "https://github.com/nabil-bot/KonthoExes/activity?ref=main";
  window.open(link, '_blank');
}
