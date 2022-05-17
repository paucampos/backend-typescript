// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'poor'
import { Visibility, Weather } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number;
// }

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
