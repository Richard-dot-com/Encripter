function encryptText() {
    const text = document.getElementById("text").value.toUpperCase().replace(/[^A-Z]/g, '');
    const shift = parseInt(document.getElementById("shift").value);
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char.match(/[A-Z]/)) {
            const code = text.charCodeAt(i);
            char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }

        result += char;
    }

    document.getElementById("result").value = result;
}
