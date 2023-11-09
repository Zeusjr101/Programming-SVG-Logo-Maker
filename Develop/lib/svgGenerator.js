function svgGenerator(data) {
    let svgContent = ""; 

    const circleSvg = `
        <svg width="200" height="200">
            <circle cx="50%" cy="50%" r="49%" stroke="black" stroke-width="2" fill="${data.shape.color}"/>
            <text x="50%" y="50%" fill="black" text-anchor="middle" font-size="55px" dominant-baseline="central">${data.letters}</text>
        </svg>`;

    const squareSvg = `
        <svg width="400" height="180" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="20" width="400" height="180" fill="${data['shape-color']}"/>
            <text x="50%" y="50%" fill="${data['text-color']}" text-anchor="middle" font-size="55px" dominant-baseline="central">${data.letters}</text>
        </svg>`;

    const triangleSvg = `
        <svg height="250" width="500" xmlns="http://www.w3.org/2000/svg">>
            <polygon points="220,20 300,230 123,234" style="fill:${data['shape-color']};stroke:purple;stroke-width:1" />
            <text x="220" y="130" fill="${data['text-color']}" text-anchor="middle" font-size="30px" dominant-baseline="text-before-edge">${data.letters}</text>
        </svg>`;

    if (data.shape.includes('Square')) {
        svgContent = squareSvg;
    } else if (data.shape.includes('Circle')) {
        svgContent = circleSvg;
    } else if (data.shape.includes('Triangle')) {
        svgContent = triangleSvg;
    } else {
        svgContent = "No shapes selected.";
    }

    return svgContent;
}

module.exports = svgGenerator;

