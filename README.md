# CTSS: Composable TypeScript Styles

## Benefits

- Compatible with React, Vue, Preact — anywhere class names are supported.
- Use static CSS.
  - No CSS-in-JS.
  - No dynamically inserted `<style>` elements.
  - No [CSS injection attacks.](https://frontarm.com/james-k-nelson/how-can-i-use-css-in-js-securely/)
  - Supports `@media` queries, `:hover`, `:focus` — no JavaScript
- Handle breakpoints easily: `sm() md() lg()`
- Handle hover and focus states: `hover() focus()`
- Reusable building blocks for your components.
- Autocompletion and type-checking with TypeScript.

## Example with TailwindCSS

### Compose multiple classes with type-safety

```ts
import { ctss } from "ctss";
import { text, font, bg, p } from "ctss-tailwind";

const className = ctss(
  text("center", "lg", "purple-dark"),
  font("sans")
  bg("white"),
  p(4)
);
// "text-center text-lg text-purple-dark font-sans bg-white p-4"
```

### Handle hover states

```ts
const className = ctss(
  bg("white"),
  hover(
    bg("red")
  )
);
// "bg-white hover:bg-red"
```

### Dynamically change based on variables

```ts
const makeButtonClass = (isPrimary: boolean) => ctss(
  isPrimary ? bg("primary") : bg("white"),
  hover(
    isPrimary ? bg("primary-light") : bg("grey-lightest")
  )
);

makeButtonClass(true); // "bg-primary hover:bg-primary-light"
makeButtonClass(false); // "bg-white hover:bg-grey-lightest"
```


## Functions

- bg:background color `bg("white") // bg-white`
- mx, my: margin `mx(4) // mx-4` `my(2, 4) // mt-2 mb-4` `mx("auto") // mx-auto` `mx(null, 2) // mr-2` `mx(8, null) // ml-8`
- px, py: padding
- text: `text("center", "lg", "red") text-center text-lg text-red`
- font: `font("bold") // font-bold`
- leading: `leading("tight")`
- h: height `h(16) // h-16`
- rounded: `rounded("full") // rounded-full`
- flex: `flex("row") // flex flex-row` `flex(1) // flex-1`
- items: `items("center") // items-center`
- justify: `justify("start") // justify-start`
