const fs = require('fs');
const path = require('path');
const https = require('https');

const plants = [
    'tomato', 'rose', 'aloe-vera', 'mint', 'basil', 'sunflower', 'lavender', 'orchid', 
    'snake-plant', 'spider-plant', 'pothos', 'peace-lily', 'monstera', 'ficus', 
    'cactus', 'succulent', 'fern', 'bamboo', 'bonsai', 'tulip', 'daffodil', 
    'lily', 'daisy', 'marigold', 'petunia', 'pansy', 'zinnia', 'geranium', 
    'begonia', 'impatiens'
];

const imgDir = path.join(__dirname, 'images');
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

async function downloadImage(plantName) {
    const url = `https://loremflickr.com/600/400/${plantName},plant/all`;
    const dest = path.join(imgDir, `${plantName}.jpg`);
    
    return new Promise((resolve, reject) => {
        const req = https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                let redirectUrl = response.headers.location;
                if (redirectUrl.startsWith('/')) {
                    redirectUrl = 'https://loremflickr.com' + redirectUrl;
                }
                https.get(redirectUrl, (res) => {
                    const file = fs.createWriteStream(dest);
                    res.pipe(file);
                    file.on('finish', () => { file.close(); resolve(); });
                }).on('error', reject);
            } else {
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => { file.close(); resolve(); });
            }
        }).on('error', reject);
    });
}

async function fetchAll() {
    console.log('Starting images download...');
    for (const p of plants) {
        console.log(`Downloading ${p}...`);
        try {
            await downloadImage(p);
        } catch (e) {
            console.error(`Error downloading ${p}`, e);
        }
    }
    console.log('Finished downloading all images.');
}

fetchAll();
