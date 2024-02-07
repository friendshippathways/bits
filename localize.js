window.onload = function() {
    // Your script logic here

// Get the iframe element
var iframe = document.getElementById('ytplayeriframe');
if (iframe) { // Ensure the iframe exists
    // Get the current src attribute
    var src = iframe.getAttribute('src');

    // Define an object with language codes as keys
    var languages = {
        'ar': 'Arabic',
        'fa': 'Farsi',
        'fr': 'French',
        'id': 'Indonesian',
        'tr': 'Filipino',
        // Add more languages as needed
    };

    // Get the current URL
    var currentUrl = window.location.href;

    // Iterate over each language code
    Object.keys(languages).forEach(function(langCode) {
        if (currentUrl.includes('=' + langCode)) {
            // Alert the found language code for testing
            //alert('Language code found: ' + langCode);

            // Alert the original src for testing
            //alert('src before replace: ' + src);

            // Replace the cc_lang_pref and hl parameters
            src = src.replace(/(cc_lang_pref=)[^&]+/, '$1' + langCode);
            src = src.replace(/(hl=)[^&]+/, '$1' + langCode);

            // Alert the replaces src for testing
            //alert('src after replace: ' + src);

            // Update the iframe src attribute once for the found language code
            iframe.setAttribute('src', src);
        }
    });
}
};
