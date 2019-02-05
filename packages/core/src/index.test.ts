import { ctss } from "./index";

describe("ctss", () => {
  test("passed one array of a single item", () => {
    expect(ctss(
      ["first"]
    )).toEqual("first");
  });

  test("passed one array of multiple items", () => {
    expect(ctss(
      ["first", "Second", "third-item", "fourth_item"]
    )).toEqual("first Second third-item fourth_item");
  });

  test("passed two arrays of multiple items", () => {
    expect(ctss(
      ["first", "Second"],
      ["third-item", "fourth_item"]
    )).toEqual("first Second third-item fourth_item");
  });

  test("passed three arrays of multiple items", () => {
    expect(ctss(
      ["first", "Second"],
      ["third-item", "fourth_item"],
      ["fifth", "SIXTH"]
    )).toEqual("first Second third-item fourth_item fifth SIXTH");
  });
});
