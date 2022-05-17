import express from 'express'
import * as diaryService from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesNonSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id) // +req.params.id = Number(req.params.id)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryService.addDiary(
      newDiaryEntry
    )
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
