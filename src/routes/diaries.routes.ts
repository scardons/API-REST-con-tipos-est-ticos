import express from 'express' // Esmodules
import * as diaryServices from '../services/diaryServices'

const router = express.Router() // creamos un router

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSenstiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  const {date, weather, visibility, comment} = req.body

  const newDiaryEntry = diaryServices.addEntry(
    date,
    weather,
    visibility,
    comment
  )

  res.json(newDiaryEntry)
})

export default router
