export function getParamComic(url: string): string {
  const tt = url.indexOf("/truyen-tranh/") + 14
  const genre = url
    .slice(tt, url.indexOf("?", tt) >>> 0)
    .replace(/-\d{4,}$/, "")

  return genre
}
