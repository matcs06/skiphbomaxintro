// Background script (background.js)

// Listen for messages from content scripts or other parts of the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   if (request.action === 'getSkipIntroChecked') {
      // Retrieve skipIntroChecked value from storage
      chrome.storage.local.get('skipIntroChecked', function (data) {
         const skipIntroChecked = data.skipIntroChecked;
         sendResponse({ skipIntroChecked: skipIntroChecked });
      });
      return true; // Indicates that sendResponse will be called asynchronously
   }
});
