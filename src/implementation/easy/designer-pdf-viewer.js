/**
 * Designer PDF Viewer
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */
export const designerPdfViewer = (h, word) => {
  const alphabet = [
    { key: "a", height: 0 },
    { key: "b", height: 0 },
    { key: "c", height: 0 },
    { key: "d", height: 0 },
    { key: "e", height: 0 },
    { key: "f", height: 0 },
    { key: "g", height: 0 },
    { key: "h", height: 0 },
    { key: "i", height: 0 },
    { key: "j", height: 0 },
    { key: "k", height: 0 },
    { key: "l", height: 0 },
    { key: "m", height: 0 },
    { key: "n", height: 0 },
    { key: "o", height: 0 },
    { key: "p", height: 0 },
    { key: "q", height: 0 },
    { key: "r", height: 0 },
    { key: "s", height: 0 },
    { key: "t", height: 0 },
    { key: "u", height: 0 },
    { key: "v", height: 0 },
    { key: "w", height: 0 },
    { key: "x", height: 0 },
    { key: "y", height: 0 },
    { key: "z", height: 0 },
  ];

  alphabet.forEach((letter, i) => {
    letter.height = h[i];
  });

  const heightMap = alphabet.reduce((map, obj) => {
    map[obj.key] = obj.height;
    return map;
  }, {});

  let tallestLetter = 0;
  for (const letter of word) {
    if (heightMap[letter] > tallestLetter) tallestLetter = heightMap[letter];
  }

  return word.length * tallestLetter;
};
