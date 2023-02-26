(() => {
  // ns-hugo:/home/runner/work/alexbu-go/alexbu-go/assets/ts/deburr.ts
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var deburredLetters = {
    // Latin-1 Supplement block.
    "\xC0": "A",
    "\xC1": "A",
    "\xC2": "A",
    "\xC3": "A",
    "\xC4": "A",
    "\xC5": "A",
    "\xE0": "a",
    "\xE1": "a",
    "\xE2": "a",
    "\xE3": "a",
    "\xE4": "a",
    "\xE5": "a",
    "\xC7": "C",
    "\xE7": "c",
    "\xD0": "D",
    "\xF0": "d",
    "\xC8": "E",
    "\xC9": "E",
    "\xCA": "E",
    "\xCB": "E",
    "\xE8": "e",
    "\xE9": "e",
    "\xEA": "e",
    "\xEB": "e",
    "\xCC": "I",
    "\xCD": "I",
    "\xCE": "I",
    "\xCF": "I",
    "\xEC": "i",
    "\xED": "i",
    "\xEE": "i",
    "\xEF": "i",
    "\xD1": "N",
    "\xF1": "n",
    "\xD2": "O",
    "\xD3": "O",
    "\xD4": "O",
    "\xD5": "O",
    "\xD6": "O",
    "\xD8": "O",
    "\xF2": "o",
    "\xF3": "o",
    "\xF4": "o",
    "\xF5": "o",
    "\xF6": "o",
    "\xF8": "o",
    "\xD9": "U",
    "\xDA": "U",
    "\xDB": "U",
    "\xDC": "U",
    "\xF9": "u",
    "\xFA": "u",
    "\xFB": "u",
    "\xFC": "u",
    "\xDD": "Y",
    "\xFD": "y",
    "\xFF": "y",
    "\xC6": "Ae",
    "\xE6": "ae",
    "\xDE": "Th",
    "\xFE": "th",
    "\xDF": "ss",
    // Latin Extended-A block.
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010A": "C",
    "\u010C": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010B": "c",
    "\u010D": "c",
    "\u010E": "D",
    "\u0110": "D",
    "\u010F": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011A": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011B": "e",
    "\u011C": "G",
    "\u011E": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011D": "g",
    "\u011F": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012A": "I",
    "\u012C": "I",
    "\u012E": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012B": "i",
    "\u012D": "i",
    "\u012F": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013B": "L",
    "\u013D": "L",
    "\u013F": "L",
    "\u0141": "L",
    "\u013A": "l",
    "\u013C": "l",
    "\u013E": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014A": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014B": "n",
    "\u014C": "O",
    "\u014E": "O",
    "\u0150": "O",
    "\u014D": "o",
    "\u014F": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015A": "S",
    "\u015C": "S",
    "\u015E": "S",
    "\u0160": "S",
    "\u015B": "s",
    "\u015D": "s",
    "\u015F": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016A": "U",
    "\u016C": "U",
    "\u016E": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016B": "u",
    "\u016D": "u",
    "\u016F": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017B": "Z",
    "\u017D": "Z",
    "\u017A": "z",
    "\u017C": "z",
    "\u017E": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017F": "s"
  };
  var basePropertyOf = function(object) {
    return (key) => object == null ? void 0 : object[key];
  };
  var deburrLetter = basePropertyOf(deburredLetters);
  function deburr(input2) {
    return input2.replace(reLatin, deburrLetter);
  }

  // <stdin>
  function clean_terms(input2) {
    return (input2 || "").toLocaleLowerCase().split(" ").map((v) => v.trim()).flatMap((v) => [v, deburr(v)]).filter((value, index, array) => array.indexOf(value) === index);
  }
  var books = Array.from(document.querySelectorAll("[id^=book-entry-]"));
  var ids_to_words = books.map((book) => {
    let id = book.id;
    let words = clean_terms(book.textContent);
    let split = id.split("-");
    return { id, words, element: document.getElementById(id), category: split[2], year: split[3] };
  });
  var input = document.getElementById("reading-input");
  var clear = document.getElementById("reading-clear");
  function search_books() {
    let terms = clean_terms(input.value);
    let indexInCategory = 0;
    let currentCategory;
    let indexInYear = 0;
    let currentYear;
    ids_to_words.forEach((v) => {
      let m = terms.every((t) => v.words.some((w) => w.includes(t)));
      if (m) {
        v.element?.classList.remove("hidden");
        if (!currentCategory || currentCategory != v.category) {
          currentCategory = v.category;
          indexInCategory = 0;
        }
        if (!currentYear || currentYear != v.year) {
          currentYear = v.year;
          indexInYear = 0;
        }
        if (indexInCategory == 0) {
          v.element?.classList.remove("mt-4");
        }
        if (indexInYear == 0) {
          document.getElementById(`${v.category}-year-marker-${v.year}`)?.classList.remove("hidden");
        } else {
          v.element?.classList.add("mt-4");
        }
        indexInCategory += 1;
        indexInYear += 1;
      } else {
        v.element?.classList.add("hidden");
        if (!currentYear || currentYear != v.year) {
          document.getElementById(`${v.category}-year-marker-${v.year}`)?.classList.add("hidden");
        }
      }
    });
  }
  input?.addEventListener("input", search_books, false);
  clear?.addEventListener(
    "click",
    function() {
      input.value = "";
      search_books();
    },
    false
  );
})();
