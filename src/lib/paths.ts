// GitHub Pages用のbasePath設定
export const basePath = process.env.NODE_ENV === 'production' ? '/iepoyo-candle' : '';

// アセット用のURLを生成する関数
export function getAssetUrl(path: string): string {
  // pathが既にhttp://やhttps://で始まっている場合はそのまま返す
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // 先頭のスラッシュを確保
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // 本番環境の場合はbasePathを追加
  return process.env.NODE_ENV === 'production' 
    ? `${basePath}${normalizedPath}` 
    : normalizedPath;
}

// favicon用の特別な関数（キャッシュ対策付き）
export function getFaviconUrl(path: string): string {
  const baseUrl = getAssetUrl(path);
  // キャッシュ対策として現在時刻をクエリパラメータに追加
  const timestamp = Date.now();
  return `${baseUrl}?v=${timestamp}`;
}