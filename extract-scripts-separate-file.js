const fs = require('fs');
const cheerio = require('cheerio');

// Define the HTML file path
const htmlFilePath = 'script.html';
const backupFilePath = 'script-backup.html';

// Read the original HTML file
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

// Create a backup of the original HTML file
fs.writeFileSync(backupFilePath, htmlContent, 'utf-8');

// Load the HTML into cheerio
const $ = cheerio.load(htmlContent);

// Extract and save inline scripts
$('script').each((index, element) => {
    const scriptContent = $(element).html().trim();
    
    if (scriptContent) {
        const scriptFileName = `script-${index + 1}.js`;
        fs.writeFileSync(scriptFileName, scriptContent, 'utf-8');

        // Replace the inline script with a script tag that references the new file
        $(element).attr('src', scriptFileName).html('');
    }
});

// Write the updated HTML back to the original file
fs.writeFileSync(htmlFilePath, $.html(), 'utf-8');

console.log('Inline scripts extracted successfully. Backup created at', backupFilePath);
