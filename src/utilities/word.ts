import randomNumber from './randomNumber'
//import data from './words.json'
import data from './dictionary.json'

const randomWord = (length: number = 20): string => {
  const keys = Object.keys(data)
  const l = keys.length
  let rand;

  while(true){
      rand = randomNumber(0, l-1)
      if(keys[rand].length <= length && keys[rand].match(/^([a-z]|[A-Z])*$/i))
        break;
  }
  
  return keys[rand]
}

export const getDefinition = (key: string): string => {
  return data[key]
}

export default randomWord