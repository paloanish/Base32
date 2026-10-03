const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const copyBtn = document.getElementById('copyBtn');

// Standard RFC 4648 Base32 Alphabet
const base32Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

function encodeBase32(text) {
    // Convert string to UTF-8 byte array
    const bytes = new TextEncoder().encode(text);
    let bits = 0;
    let value = 0;
    let output = "";

    // Process 8-bit bytes into 5-bit chunks
    for (let i = 0; i < bytes.length; i++) {
        value = (value << 8) | bytes[i];
        bits += 8;

        while (bits >= 5) {
            output += base32Alphabet[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }

    // Handle remaining bits
    if (bits > 0) {
        output += base32Alphabet[(value << (5 - bits)) & 31];
    }

    // Add standard padding '='
    while (output.length % 8 !== 0) {
        output += "=";
    }

    return output;
}

inputText.addEventListener('input', () => {
    const text = inputText.value;
    if (text.length === 0) {
        outputText.value = '';
        return;
    }
    
    try {
        outputText.value = encodeBase32(text);
    } catch (err) {
        outputText.value = 'Error encoding text';
    }
});

// Handle the Copy button click
copyBtn.addEventListener('click', async () => {
    if (!outputText.value) return;
    
    try {
        await navigator.clipboard.writeText(outputText.value);

        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied!';
        copyBtn.classList.add('success');

        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.classList.remove('success');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        
        // Fallback for older browsers
        outputText.select();
        try {
            document.execCommand('copy');
            copyBtn.innerText = 'Copied!';
            copyBtn.classList.add('success');
            setTimeout(() => {
                copyBtn.innerText = 'Copy';
                copyBtn.classList.remove('success');
            }, 2000);
        } catch (fallbackErr) {
            alert('Failed to copy. Your browser might not support this feature.');
        }
    }
});