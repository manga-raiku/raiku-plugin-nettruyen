import type { Cheerio, Element } from "cheerio"
import { upgradeToHttps } from "raiku-pgs/plugin"

export function getImage($img: Cheerio<Element>) {
  return upgradeToHttps(
    $img.attr("data-src") ??
      $img.attr("data-original") ??
      $img.attr("data-cdn") ??
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $img.attr("src")!
  )
}
