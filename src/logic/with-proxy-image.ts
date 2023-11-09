import { headersNettruyen } from "../../plugin.ts"

// eslint-disable-next-line functional/no-let
let hash: string

export function withProxyImage(
  url: string,
  headers: Record<string, string>
): string {
  if (AppInfo.extension) return `${url}#nettruyen_extra`

  if (AppInfo.mode === "capacitor")
    return `${url}#${(hash ??= JSON.stringify(headersNettruyen))}`

  return `https://proxy.mangaraiku.eu.org/?url=${encodeURIComponent(
    url.slice(url.indexOf(".") + 1).split("/", 1)[0] === "googleusercontent.com"
      ? url
      : `https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&resize_h=0&rewriteMime=image%2F*&url=${encodeURIComponent(
          url
        )}`
  )}&headers=${encodeURIComponent(JSON.stringify(headers))}`
}
