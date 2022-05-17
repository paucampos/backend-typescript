import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'

const parseComment = (commentReq: any): string => {
  if (!isString(commentReq)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentReq
}

const parseDate = (dateReq: any): string => {
  if (!isString(dateReq) || !isDate(dateReq)) {
    throw new Error('Incorrect or missing date')
  }
  return dateReq
}

const parseWeather = (weatherReq: any): Weather => {
  if (!isString(weatherReq) || !isWeather(weatherReq)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherReq
}

const parseVisibility = (visibilityReq: any): Visibility => {
  if (!isString(visibilityReq) || !isVisibility(visibilityReq)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityReq
}

const isString = (string: string): boolean =>
  typeof string === 'string'

const isDate = (date: string): boolean => Boolean(Date.parse(date))

const isWeather = (weather: any): boolean =>
  Object.values(Weather).includes(weather)

const isVisibility = (visibility: any): boolean =>
  Object.values(Visibility).includes(visibility)

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
