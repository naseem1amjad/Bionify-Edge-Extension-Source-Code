chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("edge://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content-script.js']
    });
  }
});