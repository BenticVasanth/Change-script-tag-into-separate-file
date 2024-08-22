# Inline Script Extractor and Combiner

This Node.js script extracts all inline `<script>` tags from an HTML file, combines them into a single `script.js` file, and updates the HTML file to reference this external script file.

## Prerequisites

Ensure you have Node.js installed. You will also need to install the following npm packages:

- `cheerio` - A fast, flexible, and lean implementation of core jQuery designed specifically for the server.
- `fs` (File System) - A built-in Node.js module for file operations.

You can install `cheerio` using npm:

```bash
npm install cheerio
