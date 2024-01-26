import { defineApi } from "raiku-pgs/plugin"
import type {
  API,
  Comic,
  ID,
  Ranking,
  Server
} from "raiku-pgs/plugin"
import { CURL } from "src/const"

import { withProxyImage } from "./src/logic/with-proxy-image"
import General from "./src/runs/[general]"
import getListChapters from "./src/runs/get-list-chapters"
import Index from "./src/runs/index"
import searchQuickly from "./src/runs/pre-search"
import search from "./src/runs/tim-kiem"
import getComic from "./src/runs/truyen-tranh/[slug]"
import getComicChapter from "./src/runs/truyen-tranh/[slug]-chap-[chap]"
import getComicComment from "./src/runs/truyen-tranh/comment/get"

const Rankings: Ranking[] = [
  {
    value: "ngay",
    match: "/tim-truyen?status=-1&sort=13",
    name: {
      "vi-VN": "Ngày",
      "en-US": "Date"
    }
  },
  {
    value: "tuan",
    match: "/tim-truyen?status=-1&sort=12",
    name: {
      "vi-VN": "Tuần",
      "en-US": "Week"
    }
  },
  {
    value: "thang",
    match: "/tim-truyen?status=-1&sort=11",
    name: {
      "vi-VN": "Tháng",
      "en-US": "Month"
    }
  }
]
export const headersNettruyen = {
  referer: "https://www.nettruyenmax.com"
}
const Servers: Server[] = [
  {
    name: "Server 1",
    has: () => true,
    parse: ({ pages }) =>
      pages.map((page) => withProxyImage(page.src, headersNettruyen))
  },
  {
    name: "Server 2",
    has: ({ pages }) =>
      pages[0].original !== null && pages[0].original !== pages[0].src,
    parse({ pages }) {
      return pages.map((page) => {
        if (
          page.original?.indexOf("focus-opensocial.googleusercontent") !== -1
        ) {
          return withProxyImage(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            decodeURIComponent(page.original!.split("&url", 2)[1]),
            headersNettruyen
          )
        }

        return withProxyImage(
          `https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&resize_h=0&rewriteMime=image%2F*&url=${encodeURIComponent(
            page.original
          )}`,
          headersNettruyen
        )
      })
    }
  },
  {
    name: "Server 3",
    has: (item) => item.cdn !== null,

    parse: ({ pages }) =>
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      pages.map((item) => withProxyImage(item.cdn!, headersNettruyen))
  },
  {
    name: "Server 4",
    has: ({ pages, cdn, cdn2 }) => pages[0].cdn !== null && !!cdn && !!cdn2,
    parse: ({ pages, cdn, cdn2 }) => {
      return pages.map((item) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        withProxyImage(item.cdn!.replace(cdn!, cdn2!), headersNettruyen)
      )
    }
  }
]

const TAGS_IS_MANGA = ["manga", "anime", "japan"]
class Nettruyen implements API<true> {
  public readonly Rankings = Rankings
  public readonly Servers = Servers

  public readonly autoFetchComicIsManga = true

  async setup() {
    if (AppInfo.extension) {
      console.log("Plugin run mode extension.")
      await setReferrers({
        "#nettruyen": CURL
      })
    }
  }

  async index() {
    return Index()
  }

  async getComic(zlug: string) {
    return getComic(zlug)
  }

  async getModeReader(_: string, __: string, comicData: Comic) {
    debugger
    if (comicData.genres.some(item => TAGS_IS_MANGA.includes(item.name.toLowerCase()))) {
      return {
        scrollingMode: false,
        rightToLeft: true
      }
    }

    return {}
  }

  async getComicChapter<Fast extends boolean>(
    mangaId: ID,
    epId: ID,
    fast: Fast
  ) {
    const lastI = epId.lastIndexOf("-i") >>> 0

    return getComicChapter(
      mangaId.replace(/-\d+$/, "") +
      "/chap-" +
      epId.slice(0, lastI) +
      "/" +
      epId.slice(lastI + 2),
      fast
    )
  }

  async getComicComments(
    comicId: number,
    orderByNews: boolean,
    chapterId = -1,
    parentId = 0,
    page: number,
    comicKey: string
  ) {
    return getComicComment(
      comicId,
      orderByNews,
      chapterId,
      parentId,
      page,
      comicKey
    )
  }

  async getListChapters(mangaId: ID) {
    return getListChapters(mangaId)
  }

  async searchQuickly(keyword: string, page: number) {
    return searchQuickly(keyword, page)
  }

  async search(keyword: string, page: number) {
    return search(keyword, page)
  }

  async getRanking(type: string, page: number, filter: Record<string, string>) {
    const match = Rankings.find((item) => item.value === type)?.match
    if (!match) throw new Error("not_found")

    return General(match, page, filter)
  }

  async getCategory(
    type: string,
    page: number,
    filter: Record<string, string | string[]>
  ) {
    return General(`/tim-truyen/${type}`, page, filter)
  }
}

defineApi(Nettruyen)
