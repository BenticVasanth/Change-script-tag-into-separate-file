const fs = require('fs');
const cheerio = require('cheerio');

// Load your HTML file
const html = fs.readFileSync('script.html', 'utf8');

// Use cheerio to parse the HTML
const $ = cheerio.load(html);

// Initialize an array to hold all script contents
let combinedScripts = '';

// Find all script tags and process them
$('script').each((i, el) => {
    const scriptContent = $(el).html().trim();
    if (scriptContent) {
        // Append the script content to the combinedScripts variable
        combinedScripts += scriptContent + '\n';
        
        // Remove the inline script from the HTML
        $(el).remove();
    }
});

// Write the combined scripts to a single file
fs.writeFileSync('script.js', combinedScripts);

// Insert a new script tag linking to the combined script.js file
$('body').append('<script src="script.js"></script>');

// Write the modified HTML back to a new file
fs.writeFileSync('index.modified.html', $.html());

console.log('All scripts have been extracted and combined into script.js.');
