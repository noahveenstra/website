function copy() {
    var copyText = document.querySelector("#email"); 
    copyText.select(); document.execCommand("copy");
  }
  document.querySelector("#copy").addEventListener("click", copy);