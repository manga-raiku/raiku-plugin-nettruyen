import { expect } from "vitest"

import general from "./[general]"
import json from "./__test__/assets/tim-truyen.json"
import html from "./__test__/assets/tim-truyen.txt?raw"

describe("[general]", () => {
  test("works", () => {
    const results = general(html, 1690510234674)

    // eslint-disable-next-line functional/no-loop-statements
    for (const key in results.items)
      expect(results.items[key]).toEqual(json.items[key])
    expect(results).toEqual(json)
  })
})
