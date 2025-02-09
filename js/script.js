let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", generateQR);

qrText.addEventListener("keydown", function(event) {
    if (event.keyCode===13) {
        event.preventDefault();
        submitButton.click();
    }
});

function generateQR() {
    if(qrText.value.trim().length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?siz e=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },400);
    }     
}