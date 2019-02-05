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

  describe("ignoring items", () => {
    test("ignores null items", () => {
      expect(ctss(
        ["first", null, "Second"],
      )).toEqual("first Second");
    });
  
    test("ignores undefined items", () => {
      expect(ctss(
        ["first", undefined, "Second"],
      )).toEqual("first Second");
    });
  
    test("ignores false items", () => {
      expect(ctss(
        ["first", false, "Second"],
      )).toEqual("first Second");
    });
  
    test("ignores empty strings", () => {
      expect(ctss(
        ["first", "", "Second"],
      )).toEqual("first Second");
    });
  });

  describe("ignoring arguments", () => {
    test("ignores null argument", () => {
      expect(ctss(
        ["first"],
        null,
        ["second"]
      )).toEqual("first second");
    });
  
    test("ignores undefined argument", () => {
      expect(ctss(
        ["first"],
        undefined,
        ["second"]
      )).toEqual("first second");
    });
  
    test("ignores false argument", () => {
      expect(ctss(
        ["first"],
        false,
        ["second"]
      )).toEqual("first second");
    });
  
    test("ignores empty array argument", () => {
      expect(ctss(
        ["first"] as Array<string>,
        [],
        ["second"]
      )).toEqual("first second");
    });
  });
});
