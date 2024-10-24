var version = 6.132;


//fetch('navbar.html')
//            .then(response => response.text())
//            .then(data => {
//                document.getElementById('navbarContainer').innerHTML = data;
//            });

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
	const downloadButton = document.querySelector('#confirmationWindow .btn-success');

	downloadButton.disabled = true;
	checkbox.addEventListener('change', function() {
	  downloadButton.disabled = !this.checked; // Enable button when checkbox is checked
	});
	var element = document.querySelector('.blurArea');
		element.style.filter = 'blur(10px)'; 
}

function ShowMsStoreMsg(){
	document.getElementById('confirmationWindow').style.display = 'block';
	document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Before installing Nms Kontho from the Microsoft Store</strong>";
  	document.querySelector('#confirmationWindow p').innerHTML = "If you have previously installed Nms Kontho using the installer, check the Documents directory on your PC for a <i class='fa-regular fa-folder'></i> <strong>Kontho</strong> folder and delete it if you find one.<br><br>🔵Sometimes the version available on the Microsoft Store may not be the latest one.";
	
	document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and I would like to download the Installer.</strong>";
	document.querySelector('#confirmationWindow .btn-success').innerHTML = '<i class="fas fa-external-link-alt"></i><strong> Microsoft Store</strong>';
	

	document.getElementById('downloadButton').addEventListener('click', function() {
		var link = "https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});
	
	document.getElementById('enableInstallerBtnCheckbox').style.display = 'none';
	document.getElementById('enableInstallerBtnCheckboxID').style.display = 'none';
	var element = document.querySelector('.blurArea');
		element.style.filter = 'blur(10px)';
}

// JavaScript function to load content from index2.html
function showInstallerConfirmationFunc() {
	document.getElementById('confirmationWindow').style.display = 'block';
	document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Are you sure you want to download Nms Kontho installer❓</strong>";
  	document.querySelector('#confirmationWindow p').innerHTML = "📢Please note that while it is completely ✅<strong>safe</strong> to use the Installer, but some antivirus may flag it 🚩. To avoid this issue, we recommend installing Nms Kontho directly from the <strong><a href='https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare' target='_blank'>Microsoft Store</a>.</strong>💥&nbsp;<br><br>🔵Sometimes the version available on the Microsoft Store may not be the latest one.";
	
	document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and I would like to download the Installer.</strong>";
	document.querySelector('#confirmationWindow .btn-success').innerHTML = '<strong>Download</strong>';
	

	document.getElementById('downloadButton').addEventListener('click', function() {
		var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Kontho_Installer.zip"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});
	
	confirmationWinCommonTast()
}


function showPortableConfirmationFunc() {
	document.getElementById('confirmationWindow').style.display = 'block';
	document.querySelector('#confirmationWindow h4').innerHTML = "<strong>Are you sure you want to download Nms Kontho Portable❓</strong>";
  	document.querySelector('#confirmationWindow p').innerHTML = "📢Please note that while it is completely ✅<strong>safe</strong> to use the Portable version, but some antivirus may flag it 🚩. To avoid this issue, we recommend installing Nms Kontho directly from the <strong><a href='https://www.microsoft.com/store/productId/9NZ2FZ4SJN7Z?ocid=pdpshare' target='_blank'>Microsoft Store</a>.</strong>💥&nbsp;<br><br>🔵Sometimes the version available on the Microsoft Store may not be the latest one.";
	
	document.querySelector('label[for="enableInstallerBtnCheckbox"]').innerHTML = "<strong>&nbsp;I've read the warning and I would like to download the Portable.</strong>";
	document.querySelector('#confirmationWindow .btn-success').innerHTML = '<strong>Download</strong>';
	

	document.getElementById('downloadButton').addEventListener('click', function() {
		var link = "https://github.com/nabil-bot/KonthoExes/raw/refs/heads/main/Kontho_Portable.zip"; // Decide which link to open
		window.open(link, '_blank'); // Opens in a new tab
	});
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


