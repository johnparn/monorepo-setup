import React from "react";
import { mount, render } from "enzyme";

import sbabTheme from "./";

describe("SBAB Theme", function() {
  it("exports the theme object", () => {
    const expected = expect.objectContaining({
      primary: expect.any(String),
      secondary: expect.any(String)
    });

    expect(sbabTheme).toEqual(expected);
  });
});
