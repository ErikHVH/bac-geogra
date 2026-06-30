// Romania Counties - uses the real SVG map from assets/romania-real.svg
// The SVG file contains paths with id="RO-XX" for each county

const ROMANIA_SVG_VIEWBOX = "0 0 612.36 432.29";

// County ID mapping (SVG uses "RO-XX" format, quiz uses "XX" format)
const COUNTY_NAMES = {
    "AB": "Alba",
    "AR": "Arad", 
    "AG": "Argeș",
    "BC": "Bacău",
    "BH": "Bihor",
    "BN": "Bistrița-Năsăud",
    "BT": "Botoșani",
    "BV": "Brașov",
    "BR": "Brăila",
    "BZ": "Buzău",
    "CS": "Caraș-Severin",
    "CL": "Călărași",
    "CJ": "Cluj",
    "CT": "Constanța",
    "CV": "Covasna",
    "DB": "Dâmbovița",
    "DJ": "Dolj",
    "GL": "Galați",
    "GR": "Giurgiu",
    "GJ": "Gorj",
    "HR": "Harghita",
    "HD": "Hunedoara",
    "IL": "Ialomița",
    "IS": "Iași",
    "IF": "Ilfov",
    "MM": "Maramureș",
    "MH": "Mehedinți",
    "MS": "Mureș",
    "NT": "Neamț",
    "OT": "Olt",
    "PH": "Prahova",
    "SM": "Satu Mare",
    "SJ": "Sălaj",
    "SB": "Sibiu",
    "SV": "Suceava",
    "TR": "Teleorman",
    "TM": "Timiș",
    "TL": "Tulcea",
    "VS": "Vaslui",
    "VL": "Vâlcea",
    "VN": "Vrancea",
    "B": "București"
};

// Function to load and prepare Romania SVG
async function loadRomaniaSVG() {
    const response = await fetch('assets/romania-real.svg');
    const svgText = await response.text();
    
    // Parse and modify the SVG
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    const svg = doc.querySelector('svg');
    
    // Set proper attributes for display
    svg.setAttribute('viewBox', `0 0 ${svg.getAttribute('width')} ${svg.getAttribute('height')}`);
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    
    // Remove old namespaces we don't need
    svg.removeAttribute('xmlns:dc');
    svg.removeAttribute('xmlns:rdf');
    svg.removeAttribute('xmlns:svg');
    
    // Process all county paths
    const paths = svg.querySelectorAll('path[id^="RO-"]');
    paths.forEach(path => {
        const fullId = path.getAttribute('id'); // e.g. "RO-AB"
        const countyCode = fullId.replace('RO-', ''); // e.g. "AB"
        
        path.classList.add('county');
        path.setAttribute('data-id', countyCode);
        path.setAttribute('data-name', COUNTY_NAMES[countyCode] || path.getAttribute('title') || '');
        
        // Remove old fill and styling
        path.removeAttribute('style');
    });
    
    return svg.outerHTML;
}

// Sync fallback - generates a simple SVG (used if fetch fails)
function generateRomaniaSVG() {
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="50" text-anchor="middle" font-size="5">Se încarcă harta...</text>
    </svg>`;
}
