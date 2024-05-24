"use strict";

// Function that will detect the OS and will redirect the user to the download page in the corresponding store
// If it has no store, it will show the 3 stores (Microsoft Store, Apple AppStore and Google Play Store)
function store_detector(element) {
    
    // Windows
    if (navigator.userAgent.indexOf("Windows") != -1) {
        window.location.href = "https://apps.microsoft.com/detail/RiumApp/9n0ddtw8jvvp?mode=direct";
    }
    
    // iOS (iPhone and iPad)
    else if (navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1) {
        window.location.href = "https://apps.apple.com/fr/app/riumapp/id6448548520";
    }

    // Android
    else if (navigator.userAgent.indexOf("Android") != -1) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.icohup.riumapp&pcampaignid=web_share";
    }

    else {

    }
}
