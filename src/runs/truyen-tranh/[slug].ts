import { pathIsHome } from "raiku-pgs/plugin"

import { CURL } from "../../const"
import Parse from "../../parsers/truyen-tranh/[slug]"

export default async function (slug: string) {
  const { data, url } = await get({ url: `${CURL}/truyen-tranh/${slug}` })

  if (pathIsHome(url)) throw new Error("not_found")

  return Parse(data, Date.now())
}
