/* eslint-disable camelcase */

import { API_CURL } from "../const"
import Parse from "../parsers/[general]"

export default async function (
  page: number,
  user_uid: string,
  token: string,
  type: string
) {
  const { data } = await get({
    url: `${API_CURL}/Comic/Services/ComicService.asmx/GetFollowedPageComics?page=${page}&userGuid=${user_uid}&loadType=${type}&token=${token}`
  })

  return Parse(
    decodeURIComponent(JSON.parse(data).followedListHtml),
    Date.now()
  )
}
