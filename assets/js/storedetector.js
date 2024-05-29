"use strict";

// Triggered by "GET THE APP" button
// Function that will detect the OS and will redirect the user to the download page in the corresponding store
// If it has no store, it will show the 3 stores (Microsoft Store, Apple App Store and Google Play Store)
function store_detector() {

    // iOS (iPhone and iPad)
    if (navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1) {
        window.open("https://apps.apple.com/fr/app/riumapp/id6448548520", "_blank");
    }

    // Android
    else if (navigator.userAgent.indexOf("Android") != -1) {
        window.open("https://play.google.com/store/apps/details?id=com.icohup.riumapp&pcampaignid=web_share", "_blank");
    }

    // Windows
    else if (navigator.userAgent.indexOf("Windows") != -1) {
        window.open("https://apps.microsoft.com/detail/RiumApp/9n0ddtw8jvvp?mode=direct", "_blank");
    }

    // Other cases, when the OS has no corresponding application store
    else {
        // Getting "GET THE APP" button
        let get_the_app_button = document.getElementById("getAppButton");
        
        // Getting store-select element
        let store_selector = document.getElementById("store-selector");
        store_selector.classList.toggle("hide"); // toggle() adds the class "hide" if it's not set already,
                                                 // and removes this same class if it's already set
        
        // Changing "GET THE APP" button's aspect
        // if store_selector is shown
        if (!store_selector.classList.contains("hide")) {
            get_the_app_button.style.backgroundColor = "#AAA";
            get_the_app_button.style.color = "#FFF";
            
        }
        // if store_selector is hidden
        else {
            get_the_app_button.style.backgroundColor = "#FFF";
            get_the_app_button.style.color = "#555";
        }
    }
}
