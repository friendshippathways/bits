<script>
  // Get the iframe element
  var iframe = document.getElementById('ytplayeriframe');

  // Get the current src attribute
  var src = iframe.getAttribute('src');

  // Get the current URL
  var currentUrl = window.location.href;

  // Check if the URL contains "=ar"
  if (currentUrl.includes('=ar')) {
  	
  	alert ('ar');

    // Replace the cc_lang_pref parameter with "ar"
    src = src.replace(/cc_lang_pref=[^&]+/, 'cc_lang_pref=ar');

    // Update the src attribute
    iframe.setAttribute('src', src);

    // Replace the hl parameter with "ar"
    src = src.replace(/hl=[^&]+/, 'hl=ar');

    // Update the src attribute
    iframe.setAttribute('src', src);

  }

  // Check if the URL contains "=fa"
  if (currentUrl.includes('=fa')) {
  	  	  	
  	alert ('fa');

    // Replace the cc_lang_pref parameter with "fa"
    src = src.replace(/cc_lang_pref=[^&]+/, 'cc_lang_pref=fa');

    // Update the src attribute
    iframe.setAttribute('src', src);

    // Replace the hl parameter with "fa"
    src = src.replace(/hl=[^&]+/, 'hl=fa');

    // Update the src attribute
    iframe.setAttribute('src', src);

  }


  // Check if the URL contains "=fr"
  if (currentUrl.includes('=fr')) {
  	
  	alert ('fr');

    // Replace the cc_lang_pref parameter with "fr"
    src = src.replace(/cc_lang_pref=[^&]+/, 'cc_lang_pref=fr');

    // Update the src attribute
    iframe.setAttribute('src', src);

    // Replace the hl parameter with "fr"
    src = src.replace(/hl=[^&]+/, 'hl=fr');

    // Update the src attribute
    iframe.setAttribute('src', src);

  }

  // Reload the iframe source
  iframe.src = iframe.src;
</script>