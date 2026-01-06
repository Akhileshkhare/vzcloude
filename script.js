  // Function to get URL parameters
  function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      document: params.get('document') || '0',
      image: params.get('image') || '0',
      video: params.get('video') || '0',
      audio: params.get('audio') || '0',
      storage_used: params.get('storage_used') || '0 GB',
      last_backup: params.get('last_backup') || 'Never'
    };
  }

  // Function to display data from URL parameters
  function displayParamData() {
    const data = getUrlParams();
    
    // Create or update display elements
    const displayContainer = document.getElementById('param-data-display') || createDisplayContainer();
    
    displayContainer.innerHTML = `
      <div class="param-data-card">
        <h2>Cloud Storage Overview</h2>
        <div class="param-grid">
          <div class="param-item">
            <span class="param-icon">📄</span>
            <span class="param-value">${data.document}</span>
            <span class="param-label">Documents</span>
          </div>
          <div class="param-item">
            <span class="param-icon">🖼️</span>
            <span class="param-value">${data.image}</span>
            <span class="param-label">Images</span>
          </div>
          <div class="param-item">
            <span class="param-icon">🎬</span>
            <span class="param-value">${data.video}</span>
            <span class="param-label">Videos</span>
          </div>
          <div class="param-item">
            <span class="param-icon">🎵</span>
            <span class="param-value">${data.audio}</span>
            <span class="param-label">Audio Files</span>
          </div>
          <div class="param-item">
            <span class="param-icon">💾</span>
            <span class="param-value">${data.storage_used}</span>
            <span class="param-label">Storage Used</span>
          </div>
          <div class="param-item">
            <span class="param-icon">☁️</span>
            <span class="param-value">${data.last_backup}</span>
            <span class="param-label">Last Backup</span>
          </div>
        </div>
      </div>
    `;
    
    return data;
  }

  // Create display container if it doesn't exist
  function createDisplayContainer() {
    const container = document.createElement('div');
    container.id = 'param-data-display';
    container.style.cssText = 'margin: 20px; padding: 20px;';
    document.body.insertBefore(container, document.body.firstChild);
    return container;
  }

  // Initialize on page load
  window.addEventListener('DOMContentLoaded', function() {
    // Check if there are URL parameters and display them
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('document') || urlParams.has('image') || 
        urlParams.has('video') || urlParams.has('audio') || 
        urlParams.has('storage_used') || urlParams.has('last_backup')) {
      displayParamData();
    }
  });

  function performAction(type) {
    const ua = navigator.userAgent || navigator.vendor;
    const isAndroid = /android/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua);
 
    // ---- ANDROID HANDLING ----
    if (isAndroid) {
      switch (type) {
        case "settings":
          window.location.href = "vzcloud://settings";
          setTimeout(() => {
            window.location.href =
              "intent://settings#Intent;scheme=vzcloud;package=com.vcast.mediamanager;end";
          }, 1500);
          return;
 
        case "home":
          window.location.href = "vzcloud://home";
          setTimeout(() => {
            window.location.href =
              "intent://home#Intent;scheme=vzcloud;package=com.vcast.mediamanager;end";
          }, 1500);
          return;
 
        case "gallery":
          window.location.href = "vzcloud://gallery";
          setTimeout(() => {
            window.location.href =
              "intent://gallery#Intent;scheme=vzcloud;package=com.vcast.mediamanager;end";
          }, 1500);
          return;
 
        case "backup":
          window.location.href = "vzcloud://backup";
          setTimeout(() => {
            window.location.href =
              "intent://backup#Intent;scheme=vzcloud;package=com.vcast.mediamanager;end";
          }, 1500);
          return;
      }
    }
 
    // ---- iOS HANDLING ----
    if (isIOS) {
      switch (type) {
        case "settings":
          window.location.href = "vzcloud://settings";
          setTimeout(() => {
            // Show download popup/fallback
            alert("We'll help you to download");
          }, 1500);
          return;
        case "home":
          window.location.href = "vzcloud://home";
          return;
        case "gallery":
          window.location.href = "vzcloud://gallery";
          return;
        case "backup":
          window.location.href = "vzcloud://backup";
          return;
      }
    }
 
    // ---- FINAL FALLBACK (Web) ----
    window.location.href = "https://verizoncloud.verizon.com/home";
  }

