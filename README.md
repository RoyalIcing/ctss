# CTSS: Composable TypeScript Styles

## Benefits

- Compatible with React, Vue, Preact — anywhere class names are supported.
- Use static CSS, and _not_ CSS-in-JS.
  - No dynamically inserted `<style>` elements.
  - No [CSS injection attacks.](https://frontarm.com/james-k-nelson/how-can-i-use-css-in-js-securely/)
  - Supports `@media` queries, `:hover`, `:focus`, `:active` — without JavaScript
- Handle breakpoints easily: `sm() md() lg() xl()`
- Handle hover and focus states: `hover() focus() active()`
- Reusable atomic building blocks for your components.
- Autocompletion and type-safety with TypeScript.

## Example

(With the provided [TailwindCSS functions](https://github.com/RoyalIcing/ctss/blob/master/packages/tailwind/README.md). You can bring your own too.)

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


## Core package: @ctss/core

Core currently has two functions.

```ts
export function ctt<Name extends string>(...arrayOfNames: Array<Array<Name>>): string;
export function addPrefixToMany(arrayOfSuffixes: Array<Array<string>>, prefix: string): Array<string>;
```

## Further Reading

- [CSS Utility Classes and “Separation of Concerns”](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
- [In Defense of Functional CSS](https://www.mikecr.it/ramblings/functional-css/)
- [In Defense of Utility-First CSS](https://frontstuff.io/in-defense-of-utility-first-css)
- [Shopify’s Polaris: Design Tokens](https://shopify.github.io/polaris-tokens/)
- [Thumbtack’s Thumbprint: Color System](https://thumbprint.design/guide/product/color/)
- [Salesforce’s Lightning: Design Tokens](https://www.lightningdesignsystem.com/design-tokens/)