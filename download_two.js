const fs = require('fs');
const https = require('https');

function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Node.js Mozilla/5.0' } }, (res) => {
            if (res.statusCode === 200) {
                const file = fs.createWriteStream(dest);
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(); });
            } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const redirect = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
                download(redirect, dest).then(resolve).catch(reject);
            } else {
                reject(`Failed with status: ${res.statusCode}`);
            }
        }).on('error', reject);
    });
}

download("https://upload.wikimedia.org/wikipedia/commons/3/38/Two_red_roses.jpg", "images/rose.jpg")
  .then(() => {
      console.log("Rose downloaded");
      return download("https://upload.wikimedia.org/wikipedia/commons/c/ca/Aloe_vera_in_Chandigarh.jpg", "images/aloe-vera.jpg");
  })
  .then(() => console.log("Success"))
  .catch(console.error);
