import { AppInfo } from "raiku-pgs/plugin"
import { parseDom } from "raiku-pgs/thread"

// eslint-disable-next-line no-redeclare, no-import-assign
const AppInfo: AppInfo = {
  mode: "spa",
  native: false,
  standalone: false,
  extension: false,
  version: "0.0.1"
}

// eslint-disable-next-line functional/immutable-data, @typescript-eslint/no-empty-function
Object.assign(self, { parseDom, setReferrers: () => { }, AppInfo })
