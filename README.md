# Base32 Encoder

It's a lightweight client-side web page for converting text strings into standard Base32 encoding.

## Features

* **Real-Time Conversion:** Encodes text instantly as you type.
* **RFC 4648 Compliant:** Uses the standard Base32 alphabet (`A-Z`, `2-7`) with standard `=` padding.
* **UTF-8 Support:** Accurately encodes special characters and emojis.
* **One-Click Copy:** Native clipboard integration with visual success feedback and graceful fallbacks for older browsers.
* **Fully Self-Contained:** Requires no external libraries.

## Project Structure

The project is organized into three core files for clean separation of concerns:
* `index.html` - The layout structure.
* `style.css` - The styling and layout rules.
* `script.js` - The encoding logic and clipboard handling.

## Getting Started

Because this tool relies entirely on native browser APIs, there is no installation or build process required.

1. Clone this repository or download all three files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Double-click `index.html` to open it in any web browser.
3. Type or paste your string into the input text box to generate the Base32 output.

## Web Page Interface
![App interface](./Screenshot.png)