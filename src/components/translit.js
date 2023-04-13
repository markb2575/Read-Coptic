

function getPronunciation(c) {
    if (c === "ⲁ") {
        return "a"
    } else if (c === "ⲉ") {
        return "e"
    } else if (c === "ⲍ") {
        return "z"
    } else if (c === "ⲏ") {
        return "ee"
    } else if (c === "ⲑ") {
        return "th"
    } else if (c === "ⲕ") {
        return "k"
    } else if (c === "ⲗ") {
        return "l"
    } else if (c === "ⲙ") {
        return "m"
    } else if (c === "ⲛ") {
        return "n"
    } else if (c === "ⲝ") {
        return "x"
    } else if (c === "ⲟ") {
        return "o"
    } else if (c === "ⲡ") {
        return "p"
    } else if (c === "ⲣ") {
        return "r"
    } else if (c === "ⲧ") {
        return "t"
    } else if (c === "ⲫ") {
        return "f"
    } else if (c === "ⲯ") {
        return "ps"
    } else if (c === "ⲱ") {
        return "o"
    } else if (c === "ϣ") {
        return "sh"
    } else if (c === "ϥ") {
        return "f"
    } else if (c === "ϧ") {
        return "kh"
    } else if (c === "ϩ") {
        return "h"
    } else if (c === "ϭ") {
        return "ch"
    } else if (c === "ϯ") {
        return "tee"
    } else if (c === "ⲇ") {
        return "d"
    } else if (c === "ⲓ") {
        return "i"
    } else if (c === "ⲥ") {
        return "s"
    }
    return c
}

function getPronunciationSpecial(c, cNext, cPrev) {
    if (c === "ⲃ") {
        if (cNext === "ⲁ" || cNext === "ⲉ" || cNext === "ⲏ" || cNext === "ⲓ" || cNext === "ⲟ" || cNext === "ⲩ" || cNext === "ⲱ") {
            return "v"
        } else {
            return "b"
        }
    } else if (c === "ⲅ") {
        if (cNext === "" || cNext === "ⲓ" || cNext === "ⲏ" || cNext === "ⲩ") {
            return "g"
        }
        if (cNext === "ⲅ" || cNext === "ⲕ" || cNext === "ⲝ" || cNext === "ⲭ") {
            return "ng"
        } else {
            return "gh"
        }
    } else if (c === "ⲩ") {
        if (cPrev === "ⲁ" || cPrev === "ⲉ") {
            return "v"
        }
        if (cPrev === "ⲟ") {
            return "u"
        } else {
            return "e"
        }
    } else if (c === "ⲭ") {
        if (cNext === "ⲉ" || cNext === "ⲓ" || cNext === "ⲏ" || cNext === "ⲩ") {
            return "sh"
        } else {
            return "kh"
        }
    } else if (c === "ϫ") {
        if (cNext === "ⲉ" || cNext === "ⲓ" || cNext === "ⲏ" || cNext === "ⲩ") {
            return "j"
        } else {
            return "g"
        }
    } else if (c === "̀") {
        if (cNext === "ⲁ" || cNext === "ⲉ" || cNext === "ⲏ" || cNext === "ⲓ" || cNext === "ⲟ" || cNext === "ⲩ" || cNext === "ⲱ") {
            return ""
        } else {
            return "e"
        }
    }
    return c
}

function hasRules(c) {
    if (c === "ⲃ") {
        return 1
    } else if (c === "ⲅ") {
        return 1
    } else if (c === "ⲩ") {
        return 1
    } else if (c === "ⲭ") {
        return 1
    } else if (c === "ϫ") {
        return 1
    } else if (c === "̀") {
        return 1
    }
    return 0
}
const trans = function(word) {
    if (word === null) {
        return null
    }
    let after = ''
    let before = ''
    let transliterate = ""
    for (let i = 0; i < word.length; i++) {
        if (hasRules(word[i])) {
            if (i === 0) {
                before = ""
            } else {
                before = word[i - 1]
            }
            if (i === word.length - 1) {
                after = ""
            } else {
                after = word[i + 1]
            }
            transliterate = transliterate + getPronunciationSpecial(word[i], after, before)
        } else {
            transliterate = transliterate + getPronunciation(word[i])
        }
    }
    return transliterate
}
export default trans;