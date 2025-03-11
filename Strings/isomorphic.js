/*
Isomorphic strings require a one-to-one character mapping while maintaining order. This means:

Each character in s must map to exactly one character in t.
Each character in t must map to exactly one character in s.
The mapping should be consistent throughout the string.
Characters cannot be skipped or picked arbitrarily; they must match in order.
*/

function is_isomorphic(s, t) {
  if (s.length != t.length) return false;

  let sToT = new Map();
  let tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    let chrS = s[i];
    let chrT = t[i];

    if (sToT.has(chrS)) {
      if (sToT.get(chrS) != chrT) return false;
    } else {
      sToT.set(chrS, chrT);
    }

    if (tToS.has(chrT)) {
      if (tToS.get(chrT) != chrS) return false;
    } else {
      tToS.set(chrT, chrS);
    }
  }

  return true;
}
