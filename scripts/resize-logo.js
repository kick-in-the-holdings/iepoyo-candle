const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '..', 'public', 'images', 'logo-original.png');
const outputDir = path.join(__dirname, '..', 'public', 'images');

// ロゴのリサイズ設定
const logoSizes = [
  { name: 'logo-sm.png', width: 40, height: 40 },
  { name: 'logo.png', width: 100, height: 100 },
  { name: 'logo-lg.png', width: 300, height: 300 },
];

// ファビコン用のサイズ設定
const faviconSizes = [
  { name: 'favicon-16x16.png', width: 16, height: 16 },
  { name: 'favicon-32x32.png', width: 32, height: 32 },
  { name: 'favicon-96x96.png', width: 96, height: 96 },
  { name: 'apple-touch-icon.png', width: 180, height: 180 },
];

async function resizeImages() {
  try {
    // 入力ファイルが存在するかチェック
    if (!fs.existsSync(inputFile)) {
      console.error('❌ 元画像が見つかりません:', inputFile);
      return;
    }

    console.log('🖼️  元画像:', inputFile);
    console.log('📁 出力先:', outputDir);

    // ロゴのリサイズ
    console.log('\\n📏 ロゴをリサイズ中...');
    for (const size of logoSizes) {
      const outputPath = path.join(outputDir, size.name);
      await sharp(inputFile)
        .resize(size.width, size.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${size.name} (${size.width}x${size.height})`);
    }

    // ファビコンのリサイズ
    console.log('\\n🔖 ファビコンをリサイズ中...');
    for (const size of faviconSizes) {
      const outputPath = path.join(outputDir, size.name);
      await sharp(inputFile)
        .resize(size.width, size.height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${size.name} (${size.width}x${size.height})`);
    }

    // ファビコン用のICOファイル作成
    const faviconIcoPath = path.join(outputDir, '..', 'favicon.ico');
    await sharp(inputFile)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(faviconIcoPath);
    
    console.log(`✅ favicon.ico (32x32)`);

    console.log('\\n🎉 すべてのリサイズが完了しました！');

  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
  }
}

resizeImages();