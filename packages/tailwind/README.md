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

## Functions

- `bg`: background color
  - `bg("white") // bg-white`
- `mx`, `my`: margin
  - `mx(4) // mx-4`
  - `my(2, 4) // mt-2 mb-4`
  - `mx("auto") // mx-auto`
  - `mx(8, null) // ml-8`
  - `mx(null, 2) // mr-2`
- `px`, `py`: padding
- `text`:
  - `text("center", "lg", "red") // text-center text-lg text-red`
- `font`: 
  - `font("bold") // font-bold`
- `leading`:
  - `leading("tight")`
- `h`: height 
  - `h(16) // h-16`
- `rounded`: border radius
  - `rounded("full") // rounded-full`
- `flex`:
  - `flex("row") // flex flex-row` `flex(1) // flex-1`
- `items`:
  - `items("center") // items-center`
- `justify`:
  - `justify("start") // justify-start`
