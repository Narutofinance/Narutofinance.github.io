function getreflink() {
    var refaddr = document.getElementById("refaddress").value;
    var reflink = document.getElementById("refht");
    reflink.href = '/?ref=' + refaddr;
    reflink.innerHTML = 'https://NARUTO.site/?ref=' + refaddr;
    document.getElementById('refs').style.display = 'block';
}

function copyToClipboard(id) {
    var text = document.getElementById(id).href;
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("airdropbtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}