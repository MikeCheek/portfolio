export const hashToStr = (hash: string) => {
  const arrHash = Array.from(hash)
    .reverse()
    .map((char) => prevLetter(char))
  const str = arrHash.join('')
  return [str.substring(0, str.length - 1).toUpperCase(), str.charAt(str.length - 1)]
}

export const strToHash = (str: string, lang: string = 'en') => {
  const l = lang === 'en' ? 'e' : 'i'
  const array = Array.from(str + l)
  const arrHash = array.map((char) => nextLetter(char)).reverse()
  const hash = arrHash.join('')
  return hash.toUpperCase()
}

const nextLetter = (letter: string) => {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1)
}

const prevLetter = (letter: string) => {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) - 1)
}
