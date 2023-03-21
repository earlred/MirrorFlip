/*
The MirrorFlip functions provide an easy way to flip a string to its mirror image string.
 */
function mirrorFlip(str) {
  let flipped = "";
  const flipTable = {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ɘ",
    f: "ɟ",
    g: "ƃ",
    h: "ʜ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
  };
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i].toLowerCase();
    flipped += flipTable[char] || char;
  }
  return flipped;
}

/*
The unmirrorFlip function takes a mirror flipped string str as input and returns its original string.
 */
function unmirrorFlip(flipped) {
  let original = "";
  const flipTable = {
    ɐ: "a",
    q: "b",
    ɔ: "c",
    p: "d",
    ɘ: "e",
    ɟ: "f",
    ƃ: "g",
    ʜ: "h",
    ᴉ: "i",
    ɾ: "j",
    ʞ: "k",
    l: "l",
    ɯ: "m",
    u: "n",
    o: "o",
    d: "p",
    b: "q",
    ɹ: "r",
    s: "s",
    ʇ: "t",
    n: "u",
    ʌ: "v",
    ʍ: "w",
    x: "x",
    ʎ: "y",
    z: "z",
  };
  for (let i = flipped.length - 1; i >= 0; i--) {
    const char = flipped[i];
    original += flipTable[char] || char;
  }
  return original;
}
