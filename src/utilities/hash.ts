export const hashToStr = (hash: string) => {
  let n = 2
  const arrHash = Array.from(hash)
    .reverse()
    .map((char) => prevLetter(char, n))
  const str = arrHash.join('')
  return [str.substring(0, str.length - 1).toUpperCase(), str.charAt(str.length - 1)]
}

export const strToHash = (str: string, lang: string = 'en') => {
  const l = lang === 'en' ? 'e' : 'i'
  const array = Array.from(str + l)
  let n = 2
  const arrHash = array.map((char) => nextLetter(char, n)).reverse()
  const hash = arrHash.join('')
  return hash.toUpperCase()
}

const nextLetter = (letter: string, n: number = 1) => {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) + n)
}

const prevLetter = (letter: string, n: number = 1) => {
  return String.fromCharCode(letter.charCodeAt(letter.length - 1) - n)
}
