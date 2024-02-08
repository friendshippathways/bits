window.onload = function() {

// Get all iframe elements with class 'ytplayeriframe'
var iframes = document.querySelectorAll('.ytplayeriframe');

// Define an object with YouTube language codes as keys
var language_mapping = {
    'ar': 'Arabic',
    'bn': 'Bengali',
    'tl': 'Filipino',
    'fr': 'French',
    'ha': 'Hausa',
    'id': 'Indonesian',
    'ms': 'Malay',
    'ps': 'Pashto',
    'fa': 'Persian',
    'sw': 'Swahili',
    'tr': 'Turkish',
    'ur': 'Urdu'
	// Add more languages as needed
};

// Get the current URL
var currentUrl = window.location.href;

// Function to update iframe src based on language code
function updateIframeSrc(iframe, langCode) {
    var src = iframe.getAttribute('src');
    src = src.replace(/(cc_lang_pref=)[^&]+/, '$1' + langCode);
    src = src.replace(/(hl=)[^&]+/, '$1' + langCode);
    iframe.setAttribute('src', src);
}

// Iterate over each iframe and apply language settings
iframes.forEach(function(iframe) {
    Object.keys(language_mapping).forEach(function(langCode) {
        if (currentUrl.includes('=' + langCode)) {
            updateIframeSrc(iframe, langCode);
        }
    });
});

};