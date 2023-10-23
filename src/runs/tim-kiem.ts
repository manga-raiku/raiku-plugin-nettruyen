
import { CURL } from "../const"
import Parse from "../parsers/[general]"

export default async function (query: string, page: number) {
  const { data } = await get({
    url: `${CURL}/tim-truyen?keyword=${encodeURIComponent(query)}&page=${page}`
  })

  return Parse(data, Date.now())
}
