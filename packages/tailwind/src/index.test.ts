import { ctss } from "@ctss/core";
import { md, hover, focus, bg, mx } from "./index";

describe("ctt", () => {
  test("bg with hover, focus, md", () => {
    expect(ctss(
      bg("white"),
      hover(
        bg("black")
      ),
      focus(
        bg("orange")
      ),
      md(
        bg("red"),
        hover(
          bg("green"),
        ),
        focus(
          bg("yellow")
        ),
      ),
    )).toEqual("bg-white hover:bg-black focus:bg-orange md:bg-red md:hover:bg-green md:focus:bg-yellow");
  });

  describe("mx", () => {
    test("one argument", () => {
      expect(ctss(mx(1))).toEqual("mx-1");
    });
  
    test("two arguments", () => {
      expect(ctss(mx(2, 4))).toEqual("ml-2 mr-4");
    });
  
    test("two arguments, first null", () => {
      expect(ctss(mx(null, 2))).toEqual("mr-2");
    });
  
    test("two arguments, second null", () => {
      expect(ctss(mx(2, null))).toEqual("ml-2");
    });
  
    test("one argument with breakpoint", () => {
      expect(ctss(mx(2), md(mx(4)))).toEqual("mx-2 md:mx-4");
    });
  
    test("two arguments and breakpoint with one", () => {
      expect(ctss(mx(2, 3), md(mx(4)))).toEqual("ml-2 mr-3 md:mx-4");
    });
  
    test("two arguments and breakpoint with two", () => {
      expect(ctss(mx(2, 3), md(mx(4, 3)))).toEqual("ml-2 mr-3 md:ml-4 md:mr-3");
    });
  
    test("one argument and breakpoint with two", () => {
      expect(ctss(mx(2), md(mx(4, 3)))).toEqual("mx-2 md:ml-4 md:mr-3");
    });
  });
});
