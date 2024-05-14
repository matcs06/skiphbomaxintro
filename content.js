// Content script (content.js)

// Send a message to the background script requesting the skipIntroChecked value
chrome.runtime.sendMessage({ action: 'getSkipIntroChecked' }, function (response) {
   const skipIntroChecked = response.skipIntroChecked;
   if (skipIntroChecked) {
      // Function to click the "Skip Intro" button
      const clickSkipIntroButton = () => {
         const skipIntroButton = document.querySelector('[data-testid="player-ux-skip-button"]');
         const computedStyle = window.getComputedStyle(skipIntroButton);

         if (skipIntroButton && computedStyle.visibility !== 'hidden') {
            skipIntroButton.click(); // Click the button if it exists
            // Send a message to the background script indicating that the skip button was clicked
         }
      };

      // Check for the "Skip Intro" button every 2 seconds and click it if found
      setInterval(clickSkipIntroButton, 2000); // Adjust the interval as needed
   }
});
