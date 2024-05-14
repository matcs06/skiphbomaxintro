document.addEventListener('DOMContentLoaded', function () {
   const skipIntroCheckbox = document.getElementById('skipIntroCheckbox');

   // Load saved state from storage on popup load
   chrome.storage.local.get('skipIntroChecked', function (data) {
      const skipIntroChecked = data.skipIntroChecked;
      if (skipIntroChecked !== undefined) {
         skipIntroCheckbox.checked = skipIntroChecked;
      }
   });

   chrome.storage.local.set({ skipButtonClicked: false });


   // Add change event listener to checkbox
   skipIntroCheckbox.addEventListener('change', function () {
      // Save updated state to storage
      chrome.storage.local.set({ skipIntroChecked: skipIntroCheckbox.checked });
   });
});