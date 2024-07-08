// Saves options to chrome.storage
function save_options() {
  var flashColor = document.getElementById('flash').checked;
  chrome.storage.sync.set({
     flashColor: flashColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and flashColor = true.
  chrome.storage.sync.get({
      flashColor: false
  }, function(items) {
     document.getElementById('flash').checked = items.flashColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);