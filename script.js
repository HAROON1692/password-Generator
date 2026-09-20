let input = document.getElementById("input")

function randomPassword() {
    let result = "";
    let allChars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:'\",.<>/?\\~`";
    for (let i = 0; i < 9; i++){
        let randomIndex = Math.floor(Math.random() * allChars.length);
        // console.log(`this is random index${randomIndex}`)
        result += allChars[randomIndex];
    }
console.log(result)
return result;
}

function generate() {
document.getElementById("input").value=randomPassword();

}
function select() {
    const inputElement = document.getElementById("input");
    inputElement.focus();
    inputElement.select();
    navigator.clipboard.writeText(inputElement.value)
    alert("تم نسخ النص إلى الحافظة بنجاح!");
}
