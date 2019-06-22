const fs = require('fs');
const QRCode = require('qrcode');

const generateQRBase64 = async text => {
  try {
    return QRCode.toDataURL(text)
  } catch (err) {
    console.error(err)
  }
}

const generateQRFile = async (path, text) => {
  try {
    return QRCode.toFile(path, text)
  } catch (err) {
    console.error(err)
  }
}

(async () => {
  // Create "data:image/png"
  const qrcodeBase64 = await generateQRBase64('This is test text');
  console.log('=== Base64 ===');
  console.log(qrcodeBase64);
  console.log('==============');

  // Create png file
  const qrCodePath = './qrcode-sample-with-nodejs.png';
  await generateQRFile(qrCodePath, 'This is test text');
  console.log(`Create QRCode file to ${qrCodePath}`);
})();
