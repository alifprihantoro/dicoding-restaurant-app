import dbLove from './db'
import togleBtnLove from './toggle'

export default async function clickBtn(restaurant) {
  const addToDb = await dbLove(restaurant)
  await togleBtnLove()
  if (addToDb === 'err') {
    return 'err'
  }
  return 'succes'
}
