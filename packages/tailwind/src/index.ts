import { addPrefixToMany } from "@ctss/core";

export type Hoverable = string & {
  startsWith(searchString: "hover:"): false;
};
export type Focusable = string & {
  startsWith(searchString: "hover:"): false;
};
export type Breakpointable = string & {
  startsWith(searchString: "sm:" | "md:" | "lg:"): false;
};
export type Base = Hoverable & Focusable & Breakpointable;

function make(...strings: Array<string>): Array<Base> {
  return strings as Array<Base>;
}

export function sm(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "sm:");
}

export function md(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "md:");
}

export function lg(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "lg:");
}

export function hover(...arrayOfSuffixes: Array<Array<Hoverable>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "hover:") as Array<Breakpointable>;
}

export function focus(...arrayOfSuffixes: Array<Array<Focusable>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "focus:") as Array<Breakpointable>;
}

export function bg<Suffix extends string>(suffix: Suffix): Array<Base> {
  return make("bg-" + suffix);
}

export function mx<MarginX extends string | number>(leftOrBoth: MarginX | null, right?: MarginX | null): Array<Base> {
  if (leftOrBoth == null) {
    return make(`mr-${right}`);
  } else if (right === null) {
    return make(`ml-${leftOrBoth}`);
  } else if (right === undefined) {
    return make(`mx-${leftOrBoth}`);
  } else {
    return make(`ml-${leftOrBoth}`, `mr-${right}`);
  }
}

export function text<TextSuffix extends string>(...suffixes: Array<TextSuffix>): Array<Base> {
  return suffixes.map(suffix => `text-${suffix}` as Base);
}

export function font<FontSuffix extends string>(...suffixes: Array<FontSuffix>): Array<Base> {
  return suffixes.map(suffix => `font-${suffix}` as Base);
}
