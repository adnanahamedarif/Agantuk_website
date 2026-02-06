// refresh.js - GitHub Pages এর জন্য
(function() {
    let lastUpdateTime = localStorage.getItem('agantuk_last_update') || 0;
    
    // Check for updates every 30 seconds
    setInterval(() => {
        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?action=getLastUpdate')
            .then(res => res.json())
            .then(data => {
                if (data.timestamp > lastUpdateTime) {
                    // New update available
                    localStorage.setItem('agantuk_last_update', data.timestamp);
                    
                    // Reload the page if user is not actively typing
                    if (!document.activeElement || 
                        !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                        location.reload();
                    }
                }
            })
            .catch(console.error);
    }, 30000);
})();
