const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..');
for (let i = 1; i <= 6; i++) {
    const movPath = path.join(appDir, `voice${i}.mov`);
    const mp3Path = path.join(appDir, `voice${i}.mp3`);
    if (fs.existsSync(movPath)) {
        console.log(`Converting ${movPath} to MP3...`);
        execSync(`"${ffmpeg}" -i "${movPath}" -q:a 0 -map a "${mp3Path}" -y`);
        console.log(`Done voice${i}`);
    }
}
