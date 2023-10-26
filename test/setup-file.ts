import { parseDom } from "raiku-pgs/thread"
import { AppInfo } from "raiku-pgs/plugin"

const AppInfo: AppInfo = {
  mode: "spa",
  extension: false,
  version: "0.0.1"
}

// eslint-disable-next-line functional/immutable-data
Object.assign(self, { parseDom, setReferrers: () => { }, AppInfo })
