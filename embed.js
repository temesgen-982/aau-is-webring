(async function() {
    // 1. Configuration - Set this to your live GitHub Pages URL path
    const REPO_URL = "https://github.com/temesgen-982/aau-is-webring"; 
    const DATA_URL = `${REPO_URL}/webring.json`;

    // 2. Target the container on the classmate's page
    const container = document.getElementById('aau-is-webring');
    if (!container) return;

    // 3. Inject minimal component styles directly into their head
    const style = document.createElement('style');
    style.textContent = `
        .aau-ring-widget {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-family: system-ui, sans-serif;
            background: #ffffff;
            border: 1px solid #dddddd;
            padding: 10px 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            max-width: fit-content;
            margin: 20px auto;
        }
        .aau-ring-link {
            color: #0066cc;
            text-decoration: none;
            font-weight: bold;
            font-size: 14px;
        }
        .aau-ring-link:hover { text-decoration: underline; }
        .aau-ring-text {
            font-size: 14px;
            color: #333333;
            font-weight: 500;
        }
    `;
    document.head.appendChild(style);

    try {
        // 4. Fetch the master member list
        const response = await fetch(DATA_URL);
        const sites = await response.json();
        
        // 5. Detect the current domain running this script
        const currentUrl = window.location.href.toLowerCase();
        
        // Find match by checking if the registered URL is contained within the current browser URL
        let index = sites.findIndex(site => currentUrl.includes(site.url.toLowerCase().replace(/^https?:\/\//, '')));
        
        // Default to the first site if someone views the widget from an unregistered domain
        if (index === -1) index = 0;

        // 6. Calculate circular navigation loop paths
        const prevIndex = (index - 1 + sites.length) % sites.length;
        const nextIndex = (index + 1) % sites.length;

        // 7. Inject the HTML structure into their placeholder div
        container.innerHTML = `
            <div class="aau-ring-widget">
                <a class="aau-ring-link" href="${sites[prevIndex].url}" title="Visit ${sites[prevIndex].name}">← Prev</a>
                <span class="aau-ring-text">
                    <a class="aau-ring-link" href="${REPO_URL}" target="_blank">AAU IS '26 Ring</a>
                </span>
                <a class="aau-ring-link" href="${sites[nextIndex].url}" title="Visit ${sites[nextIndex].name}">Next →</a>
            </div>
        `;
    } catch (error) {
        console.error("Webring loading failed:", error);
    }
})();
