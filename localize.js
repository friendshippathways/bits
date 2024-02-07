window.onload = function() {

	// Get the iframe element
	var iframe = document.getElementById('ytplayeriframe');
	if (iframe) { // Ensure the iframe exists
		// Get the current src attribute
		var src = iframe.getAttribute('src');

		// Define an object with language codes as keys
		var languages = {
			'ar': 'Arabic',
			'fa': 'Farsi',
			'tr': 'Filipino',
			'fr': 'French',
			'id': 'Indonesian',
			// Add more languages as needed
		};

	// Get the current URL
	var currentUrl = window.location.href;

	// Iterate over each language code
	Object.keys(languages).forEach(function(langCode) {
		if (currentUrl.includes('=' + langCode)) {

			// Replace the cc_lang_pref and hl parameters
			src = src.replace(/(cc_lang_pref=)[^&]+/, '$1' + langCode);
			src = src.replace(/(hl=)[^&]+/, '$1' + langCode);

			// Update the iframe src attribute once for the found language code
			iframe.setAttribute('src', src);
            
			// After setting the src
			iframe.style.display = 'block';
			}
		});
	}
};