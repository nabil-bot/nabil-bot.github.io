// Kontho Text Spreading GSAP JS
var density = 50,
    speed = 1,
    winHeight = $(window).height(),
    start = {
        yMin: -100,
        yMax: -100,
        xMin: -20,
        xMax: 1,
        scaleMin: 0.1,
        scaleMax: 0.25,
        opacityMin: 0.2,
        opacityMax: 0.4
    },
    mid = { 
        yMin: winHeight * 0.3, 
        yMax: winHeight * 0.5, 
        xMin: 400, 
        xMax: 600, 
        scaleMin: 0.2, 
        scaleMax: 1, 
        opacityMin: 0.4, 
        opacityMax: 1 
    },
    
    end = {
        yMin: winHeight + 50,
        yMax: winHeight + 50,
        xMin: 500,
        xMax: 900,
        scaleMin: 0.1,
        scaleMax: 1,
        opacityMin: 0.2,
        opacityMax: 0.7
    },

    colors = ["#003ed9", "#00e6d7", "#fb8100", "#ef0000", "#e849e0", "#c7e105", "#1bd51b", "#00f500", "#0025f5",  "#f5f100" ];

    // You can Define an array of Bengala, English alphabet and Number characters or else what you want.
    var bengaliAlphabet = ['অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ', 'া', ' ি', 'ী', 'ু', 'ূ', ' ে', ' ৈ', ' ো', ' ে ', 'কন্ঠ', 'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', 'ঁ', 'ক্ষ', 'জ্ঞ', 'ষ্ণ', 'ক্ষ'];
    var englishAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    var combinedCharacters = bengaliAlphabet.concat(englishAlphabet, numbers);

    if (window.innerWidth < 499) {
        mid.xMin = 50;
        mid.xMax = 100;
        end.xMin = 100;
        end.xMax = 200;
    } if (window.innerWidth >= 500 && window.innerWidth < 768) {
        mid.xMin = 50;
        mid.xMax = 150;
        end.xMin = 150;
        end.xMax = 250;
    } if (window.innerWidth >= 768 && window.innerWidth < 900) {
        mid.xMin = 200;
        mid.xMax = 400;
        end.xMin = 400;
        end.xMax = 550;
    } if (window.innerWidth >= 900 && window.innerWidth < 1024) {
        mid.xMin = 200;
        mid.xMax = 400;
        end.xMin = 400;
        end.xMax = 600;
    } if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        mid.xMin = 200;
        mid.xMax = 500;
        end.xMin = 500;
        end.xMax = 750;
    }




function range(map, prop) {
    var min = map[prop + "Min"],
        max = map[prop + "Max"];
    return min + (max - min) * Math.random();
}

function spawn(nms_kontho) {
    var wholeDuration = (10 / speed) * (0.7 + Math.random() * 0.4),
        delay = wholeDuration * Math.random(),
        partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);


    TweenLite.set(nms_kontho, { y: range(start, "y"), x: range(start, "x"), scale: range(start, "scale"), opacity: range(start, "opacity"), visibility: "hidden", color: colors[Math.floor(Math.random() * colors.length)] });

    TweenLite.to(nms_kontho, wholeDuration, { delay: delay, y: range(end, "y"), ease: Linear.easeNone });

    TweenLite.to(nms_kontho, partialDuration, { delay: delay, x: range(mid, "x"), ease: Power1.easeOut });
    TweenLite.to(nms_kontho, wholeDuration - partialDuration, { delay: partialDuration + delay, x: range(end, "x"), ease: Power1.easeIn });

    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
    TweenLite.to(nms_kontho, partialDuration, { delay: delay, scale: range(mid, "scale"), autoAlpha: range(mid, "opacity"), ease: Linear.easeNone });
    TweenLite.to(nms_kontho, wholeDuration - partialDuration, { delay: partialDuration + delay, scale: range(end, "scale"), autoAlpha: range(end, "opacity"), ease: Linear.easeNone, onComplete: spawn, onCompleteParams: [nms_kontho] });
}



$(window).ready(function () {
    var body = $(".nms_kontho"),
        i, nms_kontho;

    for (i = 0; i < density; i++) {
        nms_kontho = $("<div />", { id: "nms_kontho" + i }).addClass("nms_kontho");
        var randomIndex = Math.floor(Math.random() * combinedCharacters.length);
        nms_kontho.text(combinedCharacters[randomIndex]);
        nms_kontho.appendTo(body);
        spawn(nms_kontho);
    }
});



// JavaScript for Text Typing status of the word ------>

const dynamicText = document.querySelector("h1 span");
const words = ["a typing solution", "easy to use", "timesaver", "Speech to Text converter", "everything for user."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character  ------>
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character ------>
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word ------>
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

// JavaScript for Text Typing status of the word ------>








// cursor animation

// create instance of kinet with custom settings
var kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.20,
  names: ["x", "y"],
});

// select circle element
var circle = document.getElementById('circle');

// set handler on kinet tick event
kinet.on('tick', function(instances) {
  circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
});

// call kinet animate method on mousemove
document.addEventListener('mousemove', function (event) {
  kinet.animate('x', event.clientX - window.innerWidth/2);
  kinet.animate('y', event.clientY - window.innerHeight/2);
});

// log
kinet.on('start', function() {
  console.log('start');
});

kinet.on('end', function() {
  console.log('end');
});