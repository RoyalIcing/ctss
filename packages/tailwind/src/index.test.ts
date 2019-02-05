import { ctt } from "ctt";
import { md, hover, focus, bg, mx } from "./compose";

describe("ctt", () => {
  test("bg with hover, focus, md", () => {
    expect(ctt(
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
      expect(ctt(mx(1))).toEqual("mx-1");
    });
  
    test("two arguments", () => {
      expect(ctt(mx(2, 4))).toEqual("ml-2 mr-4");
    });
  
    test("two arguments, first null", () => {
      expect(ctt(mx(null, 2))).toEqual("mr-2");
    });
  
    test("two arguments, second null", () => {
      expect(ctt(mx(2, null))).toEqual("ml-2");
    });
  
    test("one argument with breakpoint", () => {
      expect(ctt(mx(2), md(mx(4)))).toEqual("mx-2 md:mx-4");
    });
  
    test("two arguments and breakpoint with one", () => {
      expect(ctt(mx(2, 3), md(mx(4)))).toEqual("ml-2 mr-3 md:mx-4");
    });
  
    test("two arguments and breakpoint with two", () => {
      expect(ctt(mx(2, 3), md(mx(4, 3)))).toEqual("ml-2 mr-3 md:ml-4 md:mr-3");
    });
  
    test("one argument and breakpoint with two", () => {
      expect(ctt(mx(2), md(mx(4, 3)))).toEqual("mx-2 md:ml-4 md:mr-3");
    });
  });
});
