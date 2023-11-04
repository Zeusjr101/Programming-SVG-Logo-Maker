function svgGenerator() {
    return`
    ##svg-logo
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none" />
        <rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="2" fill="none" />
        <polygon points="10,10 80,10 80,80" stroke="black" stroke-width="2" fill="none" />
    </svg>
    
    `
};