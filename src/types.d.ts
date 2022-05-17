// Export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy' // Se pasó a enums
import { Visibility, Weather } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number;
// }

// Export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
