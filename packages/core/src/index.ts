export function ctt<Name extends string>(...arrayOfNames: Array<Array<Name>>): string {
  const flat: Array<string> = [];

  arrayOfNames.forEach(names => {
    names.forEach(name => {
      flat.push(name as string);
    });
  });

  return flat.join(" ");
}

export function addPrefixToMany(arrayOfSuffixes: Array<Array<string>>, prefix: string): Array<string> {
  const out: Array<string> = [];

  arrayOfSuffixes.forEach(suffixes => {
    suffixes.forEach(suffix => {
      out.push(prefix + suffix);
    });
  });

  return out;
}
