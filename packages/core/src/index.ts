type Ignorables = null | undefined | false;

export function ctss<Name extends string>(...arrayOfNames: Array<Array<Name | Ignorables> | Ignorables>): string {
  const flat: Array<string> = [];

  arrayOfNames.forEach(names => {
    if (names) {
      names.forEach(name => {
        if (name) {
          flat.push(name as string);
        }
      });
    }
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
