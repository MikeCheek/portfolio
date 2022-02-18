import randomNumber from './randomNumber'
import data from './words.json'

const randomWord = (length: number = 20): string => {
  const keys = Object.keys(data)
  const l = keys.length
  let rand;

  while(true){
      rand = randomNumber(0, l-1)
      if(keys[rand].length <= length)
        break;
  }
  
  return keys[rand]
}

export default randomWord