var version = 7.021
    const version = 7.021;
    const contentElements = document.querySelectorAll('[data-key]');
    const langEnBtn = document.getElementById('lang-en');
    const langBnBtn = document.getElementById('lang-bn');
    const downloadBtn32 = document.getElementById('download-32bit-btn');
    const downloadBtn64 = document.getElementById('download-64bit-btn');
    const termsCheckbox = document.getElementById('terms-checkbox');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const loader = document.getElementById('loader');

    let appData = {};

    // Initial state: disable download buttons
    downloadBtn32.classList.add('opacity-50', 'cursor-not-allowed');
    downloadBtn64.classList.add('opacity-50', 'cursor-not-allowed');

    const fetchContent = async () => {
        try {
            const response = await fetch('index_data.json');
            if (!response.ok) {
                throw new Error('Failed to load website content.');
            }
            appData = await response.json();
            const storedLang = localStorage.getItem('lang') || 'en';
            updateContent(storedLang);
            loader.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
            document.body.classList.add('fade-in'); // Trigger a fade-in effect on the body
        } catch (error) {
            console.error("Error fetching content:", error);
            loader.innerHTML = `<div class="text-center">
                                  <p class="text-red-500 text-lg">Failed to load content. Please try again later.</p>
                                </div>`;
        }
    };

    const updateContent = (lang) => {
        if (!appData[lang]) return;
        
        // Update simple text content
        contentElements.forEach(el => {
            const key = el.getAttribute('data-key');
            const value = getNestedProperty(appData[lang], key);
            if (value) {
                el.textContent = value;
                // For the download button, also update the inner HTML for the icon and text
                if (key === "hero.downloadButton") {
                    el.innerHTML = `<i class="fa-solid fa-download mr-2"></i><span>${value}</span>`;
                }
            }
        });
        
        // Dynamically update FAQ section
        const faqContainer = document.getElementById('faq-container');
        faqContainer.innerHTML = '';
        appData[lang].faq.questions.forEach((item, index) => {
            if (item.q && item.a) {
                const div = document.createElement('div');
                div.className = `border-b border-gray-200 py-4 ${index === 0 ? 'border-t' : ''}`;
                div.innerHTML = `
                    <details class="group">
                        <summary class="flex justify-between items-center cursor-pointer text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                            <span class="inline-block" data-key="faq.questions.${index}.q">${item.q}</span>
                            <span class="transform group-open:rotate-180 transition-transform duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </summary>
                        <p class="mt-4 text-gray-600 leading-relaxed" data-key="faq.questions.${index}.a">${item.a}</p>
                    </details>
                `;
                faqContainer.appendChild(div);
            }
        });

        // Dynamically update Policy section
        const policyContainer = document.getElementById('policy-container');
        policyContainer.innerHTML = '';
        appData[lang].policy.sections.forEach((section, index) => {
            if (section.title && section.content) {
                const div = document.createElement('div');
                div.className = "mb-6";
                div.innerHTML = `
                    <h3 class="text-xl font-semibold text-gray-800 mb-2" data-key="policy.sections.${index}.title">${section.title}</h3>
                    <p class="text-gray-600 leading-relaxed" data-key="policy.sections.${index}.content">${section.content}</p>
                `;
                policyContainer.appendChild(div);
            }
        });
    };

    const getNestedProperty = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    // Event listeners
    termsCheckbox.addEventListener('change', () => {
        if (termsCheckbox.checked) {
            downloadBtn32.classList.remove('opacity-50', 'cursor-not-allowed');
            downloadBtn64.classList.remove('opacity-50', 'cursor-not-allowed');
            downloadBtn32.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
            downloadBtn64.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700');
            downloadBtn32.href = "https://github.com/mdnabilmustofa/Kontho/raw/main/Dist/32-bit%20Installer/Kontho%20Setup%20(32-bit).exe";
            downloadBtn64.href = "https://github.com/mdnabilmustofa/Kontho/raw/main/Dist/64-bit%20Installer/Kontho%20Setup%20(64-bit).exe";
        } else {
            downloadBtn32.classList.add('opacity-50', 'cursor-not-allowed');
            downloadBtn64.classList.add('opacity-50', 'cursor-not-allowed');
            downloadBtn32.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
            downloadBtn64.classList.remove('bg-blue-600', 'text-white', 'hover:bg-blue-700');
            downloadBtn32.href = "#";
            downloadBtn64.href = "#";
        }
    });

    langEnBtn.addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        updateContent('en');
    });

    langBnBtn.addEventListener('click', () => {
        localStorage.setItem('lang', 'bn');
        updateContent('bn');
    });

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
    });

    // Version counter animation
    const versionElement = document.getElementById('variableValue');
    const duration = 2000;
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        versionElement.textContent = (progress * version).toFixed(3);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);

    // Fetch content on page load
    fetchContent();
});
