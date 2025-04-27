document.addEventListener('DOMContentLoaded', function() {
  const commands = [
    "Order a coke at the restaurant.",
    "Order a hamburger at the restaurant.",
    "Order a salad at the restaurant.",
    "Order a coffee at the restaurant.",
    "Order an ice cream at the restaurant."
  ];

  document.getElementById('generateBtn').addEventListener('click', function() {
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    document.getElementById('randomCommand').innerText = randomCommand;

    const qrDiv = document.getElementById('randomQrcode');
    qrDiv.innerHTML = '';
    new QRCode(qrDiv, {
      text: randomCommand,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff"
    });
  });

  document.getElementById('customBtn').addEventListener('click', function() {
    const customText = document.getElementById('customInput').value.trim();
    if (customText === "") {
      alert("コマンドを入力してください！");
      return;
    }

    document.getElementById('customCommand').innerText = customText;

    const customQrDiv = document.getElementById('customQrcode');
    customQrDiv.innerHTML = '';
    new QRCode(customQrDiv, {
      text: customText,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff"
    });
  });
});
