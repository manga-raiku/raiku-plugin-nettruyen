import { definePackage } from "raiku-pgs/plugin"

import favicon from "./favicon.png?inline"
import { version } from "./package.json"

export const meta = definePackage({
  id: "plugin",
  name: "Plugin template",
  favicon,
  version,
  description: "Plugin template description",
  author: "Tachibana Shin <tachibshin@duck.com>",
  updatedAt: Date.now()
})
