
import { API_CURL } from "../const"
import Parse from "../parsers/[general]"

export default async function (page: number, token: string) {
  const { data } = await get({
    url: `${API_CURL}/Comic/Services/ComicService.asmx/GetReadComics?token=${token}&page=${page}`
  })

  return Parse(decodeURIComponent(JSON.parse(data).listHtml), Date.now())
}
