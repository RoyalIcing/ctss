import { addPrefixToMany } from "@ctss/core";

export type CanHover = string & {
  startsWith(searchString: "hover:"): false;
};
export type CanFocus = string & {
  startsWith(searchString: "focus:"): false;
};
export type CanActive = string & {
  startsWith(searchString: "active:"): false;
};
export type Breakpointable = string & {
  startsWith(searchString: "sm:" | "md:" | "lg:" | "xl:"): false;
};
export type Base = CanHover & CanFocus & CanActive & Breakpointable;

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

export function xl(...arrayOfSuffixes: Array<Array<Breakpointable>>): Array<string> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "xl:");
}

export function hover(...arrayOfSuffixes: Array<Array<CanHover>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "hover:") as Array<Breakpointable>;
}

export function focus(...arrayOfSuffixes: Array<Array<CanFocus>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "focus:") as Array<Breakpointable>;
}

export function active(...arrayOfSuffixes: Array<Array<CanActive>>): Array<Breakpointable> {
  return addPrefixToMany(arrayOfSuffixes as Array<Array<string>>, "active:") as Array<Breakpointable>;
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
