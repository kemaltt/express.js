// tours ile alakalı route işlemleri.
const router = require('express').Router();
const { getAlltours, getTour, createTour, updateTour, deleteTour, checkID, checkBody } = require('../controller/tourController')

// gelen parametreyi yakaladığımız middleware
// router.param('id', (req, res, next, val) => {
//     console.log('id: ' + val)
//     next();
// })

router.param('id', checkID)

router.get("/", getAlltours);
router.get("/:id", getTour);
router.post("/", checkBody, createTour);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;