# CTSS Tailwind

Brings convenient types to [TailwindCSS](https://tailwindcss.com/).

## Benefits

- Type-safe: incorrect class names are TypeScript errors!
- Responsive: use breakpoints
- Supports hover and focus states with just CSS

## Installation

```
npm add @ctss/tailwind @ctss/core
```

## Overview

### Compose multiple classes

```ts
ctss(
  text("sans", "lg", "purple"),
  font("bold"),
  bg("white")
);
// "text-sans text-lg text-purple font-bold bg-white"
```

### Use breakpoints

```ts
ctss(
  text("sans", "lg", "purple"),
  md(
    text("xl"),
  ),
  lg(
    text("2xl"),
  )
);
// "text-sans text-lg text-purple md:text-xl lg:text-2xl"
```

### Use hover and focus states and breakpoints together

```ts
ctss(
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
);
// "bg-white hover:bg-black focus:bg-orange md:bg-red md:hover:bg-green md:focus:bg-yellow"
```
