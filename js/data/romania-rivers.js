// Romania Rivers SVG Map Data
// Rivers overlaid on the real Romania SVG (612.36 x 432.29 viewBox)
// Complete BAC list - 30 rivers (top rivers by length in Romania)

const RIVERS_DATA = [
    // Dunărea - pe granița de sud
    { id: "dunarea", name: "Dunărea", path: "M5,310 L20,315 L40,320 L60,326 L85,333 L110,340 L140,348 L170,355 L200,362 L230,367 L260,370 L290,368 L315,362 L340,355 L365,345 L385,335 L405,322 L425,310 L445,297 L462,285 L478,272 L492,260 L508,248 L522,238 L538,228 L552,218 L568,208 L582,198" },
    
    // Tisa - pe granița de NV
    { id: "tisa", name: "Tisa", path: "M48,50 L62,55 L78,60 L95,63 L112,64 L130,62 L148,58 L165,54 L182,50 L198,48 L212,50" },
    
    // Bazinul Someș
    { id: "somes", name: "Someș", path: "M172,70 L180,85 L190,100 L200,115 L210,130 L218,145 L222,160 L224,172" },
    { id: "somesul_mic", name: "Someșul Mic", path: "M210,128 L222,135 L235,142 L245,150 L252,158" },
    
    // Bazinul Crișuri
    { id: "crisul_repede", name: "Crișul Repede", path: "M38,158 L58,160 L78,163 L98,165 L118,167 L138,168 L155,166 L170,162" },
    { id: "crisul_negru", name: "Crișul Negru", path: "M42,178 L62,180 L82,182 L102,183 L122,182 L142,180 L158,176" },
    { id: "crisul_alb", name: "Crișul Alb", path: "M45,198 L65,199 L85,200 L108,199 L130,196 L150,192 L168,186" },
    
    // Bazinul Mureș
    { id: "mures", name: "Mureș", path: "M52,212 L78,208 L105,204 L132,200 L160,198 L188,196 L215,200 L242,208 L268,215 L292,220 L315,218 L335,212 L352,205 L365,195 L378,185" },
    { id: "aries", name: "Arieș", path: "M225,185 L238,190 L252,195 L265,200 L278,205" },
    { id: "tarnava_mare", name: "Târnava Mare", path: "M285,218 L298,225 L312,232 L328,235 L342,232 L355,225" },
    { id: "tarnava_mica", name: "Târnava Mică", path: "M280,208 L295,212 L310,218 L325,222 L340,220 L352,215" },
    
    // Bega
    { id: "bega", name: "Bega", path: "M55,225 L72,222 L90,220 L108,219 L125,220 L140,222" },
    
    // Timiș
    { id: "timis", name: "Timiș", path: "M72,205 L75,222 L78,238 L80,255 L78,272 L75,288 L72,302" },
    
    // Cerna
    { id: "cerna", name: "Cerna", path: "M132,285 L134,300 L135,315 L134,328 L130,340" },
    
    // Jiu
    { id: "jiu", name: "Jiu", path: "M212,260 L208,278 L205,295 L202,312 L198,328 L195,342 L193,355" },
    
    // Olt și afluenți
    { id: "olt", name: "Olt", path: "M362,130 L358,148 L352,165 L345,182 L338,198 L328,215 L318,232 L308,248 L298,265 L288,280 L278,295 L270,310 L262,325 L256,340 L252,355 L250,365" },
    { id: "oltet", name: "Olteț", path: "M238,282 L240,295 L242,308 L243,320 L242,332 L240,342" },
    { id: "lotru", name: "Lotru", path: "M268,270 L282,275 L295,278 L308,275 L318,268" },
    
    // Vedea, Neajlov
    { id: "vedea", name: "Vedea", path: "M302,305 L308,318 L315,332 L322,345 L328,355 L335,362" },
    { id: "neajlov", name: "Neajlov", path: "M330,310 L340,322 L352,335 L365,345 L378,352" },
    
    // Argeș și Dâmbovița
    { id: "arges", name: "Argeș", path: "M342,255 L348,272 L355,288 L362,305 L370,318 L378,332 L388,345 L398,355 L408,362" },
    { id: "dambovita", name: "Dâmbovița", path: "M350,268 L356,282 L362,296 L368,308 L375,320" },
    
    // Prahova
    { id: "prahova", name: "Prahova", path: "M385,232 L390,248 L395,262 L400,275 L405,285" },
    
    // Ialomița
    { id: "ialomita", name: "Ialomița", path: "M378,252 L392,265 L408,275 L425,285 L442,292 L460,296 L478,295 L492,290" },
    
    // Buzău
    { id: "buzau", name: "Buzău", path: "M418,208 L428,222 L438,235 L450,248 L462,258 L475,265" },
    
    // Siret și afluenți
    { id: "siret", name: "Siret", path: "M458,42 L460,62 L462,82 L465,102 L468,122 L472,142 L476,160 L480,178 L485,195 L490,212 L495,228 L500,242 L505,255 L510,268 L515,278" },
    { id: "suceava_rau", name: "Suceava", path: "M385,55 L395,68 L405,80 L415,90 L425,98" },
    { id: "moldova_rau", name: "Moldova", path: "M405,62 L412,80 L418,98 L425,115 L432,132 L438,148 L442,162" },
    { id: "bistrita", name: "Bistrița", path: "M392,98 L398,115 L405,132 L412,148 L420,162 L428,175 L435,188" },
    { id: "trotus", name: "Trotuș", path: "M408,158 L418,172 L430,185 L442,196 L455,205" },
    { id: "putna", name: "Putna", path: "M430,195 L438,208 L448,220 L458,230 L468,238" },
    { id: "barlad", name: "Bârlad", path: "M490,155 L495,172 L500,188 L505,205 L508,220 L510,235" },
    { id: "jijia", name: "Jijia", path: "M495,80 L500,95 L505,110 L510,125 L515,140 L518,152" },
    
    // Prut
    { id: "prut", name: "Prut", path: "M522,28 L520,48 L518,68 L516,88 L515,108 L514,128 L512,148 L510,168 L507,185 L503,202 L498,218 L492,235 L486,250 L480,265" }
];

// Function to load rivers SVG (overlaid on Romania outline)
async function loadRiversSVG() {
    const response = await fetch('assets/romania-real.svg');
    const svgText = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    const svg = doc.querySelector('svg');
    
    const w = svg.getAttribute('width');
    const h = svg.getAttribute('height');
    
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.removeAttribute('width');
    svg.removeAttribute('height');
    
    // Make county paths non-interactive background (land color)
    const paths = svg.querySelectorAll('path[id^="RO-"]');
    paths.forEach(path => {
        path.removeAttribute('id');
        path.removeAttribute('class');
        path.setAttribute('fill', '#e8e4d8');
        path.setAttribute('stroke', '#c0b8a8');
        path.setAttribute('stroke-width', '0.3');
        path.style.pointerEvents = 'none';
        path.style.cursor = 'default';
    });
    
    // Add river paths on top
    RIVERS_DATA.forEach(river => {
        const riverPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
        riverPath.setAttribute('class', 'river');
        riverPath.setAttribute('d', river.path);
        riverPath.setAttribute('data-id', river.id);
        riverPath.setAttribute('data-name', river.name);
        riverPath.setAttribute('fill', 'none');
        riverPath.setAttribute('stroke', '#5dade2');
        riverPath.setAttribute('stroke-width', '2');
        riverPath.setAttribute('stroke-linecap', 'round');
        riverPath.setAttribute('stroke-linejoin', 'round');
        
        const title = doc.createElementNS('http://www.w3.org/2000/svg', 'title');
        title.textContent = river.name;
        riverPath.appendChild(title);
        
        svg.appendChild(riverPath);
    });
    
    return svg.outerHTML;
}

// Fallback sync function
function generateRiversSVG() {
    let svg = `<svg viewBox="0 0 612 432" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">`;
    svg += `<rect width="612" height="432" fill="#f5f3ed" />`;
    RIVERS_DATA.forEach(river => {
        svg += `<path class="river" d="${river.path}" data-id="${river.id}" data-name="${river.name}" fill="none" stroke="#5dade2" stroke-width="2" stroke-linecap="round">
            <title>${river.name}</title>
        </path>`;
    });
    svg += `</svg>`;
    return svg;
}
