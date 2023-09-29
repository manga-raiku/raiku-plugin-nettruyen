import { definePackage } from "raiku-pgs/plugin"

import { name as id, pluginName as name, version, author, description, homepage } from "package.json"

import favicon from "./favicon.png?inline"

export const meta = definePackage({
  id,
  name,
  favicon,
  version,
  description,
  author,
  homepage,
  updatedAt: import.meta.env.DEV ? Date.now() : __NOW__
})
