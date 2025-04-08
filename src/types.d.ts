//todos los tipos estan aca
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'strmy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}



