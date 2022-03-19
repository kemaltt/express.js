const router = require('express').Router();
const { getAllFoods } = require('../controller/foodController')

router.get('/', getAllFoods)

// router.get('/', (req, res) => {
//     res.send('foods')
// })


module.exports = router