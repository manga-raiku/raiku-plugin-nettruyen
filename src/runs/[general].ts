
import { CURL } from "../const"
import Parse from "../parsers/[general]"

export default async function (
  path: string,
  page: number,
  query: Record<string, string | string[]>
) {
  if (path.endsWith("/")) path = path.slice(0, -1)

  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  const url = new URL(path, "http://localhost")
  url.searchParams.set("page", page + "")

  // eslint-disable-next-line functional/no-loop-statements
  for (const key in query) url.searchParams.set(key, query[key] + "")

  const { data } = await get({
    url: `${CURL}/${url.pathname}?${url.searchParams + ""}`,
    method: undefined,
    cache: undefined,
    integrity: undefined,
    keepalive: undefined,
    redirect: undefined,
    referrerPolicy: undefined,
    window: undefined
  })

  return Parse(data, Date.now())
}
