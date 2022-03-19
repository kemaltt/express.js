const router = require('express').Router()
const { getAlltours, getTour, createTour } = require('../controller/controller')

router.get('/', getAlltours)

router.get('/:id', getTour)

router.post('/', createTour)

router.patch('/:id', (req, res) => {
    res.status(200).send('patch')
})
router.delete('/:id', (req, res) => {
    res.status(200).send('delete')
})

module.exports = router