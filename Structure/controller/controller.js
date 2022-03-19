const fs = require('fs')

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`))

exports.getAlltours = (req, res) => {
    res.status(200).json({
        status: 'success',
        result: tours.length,
        json: {
            tours: tours
        }
    })
}

exports.getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)

    if (id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'invalid id'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })

}

exports.createTour = (req, res) => {
    const newID = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id: newID }, req.body)

    tours.push(newTour)
    fs.writeFile((`${__dirname}/data/tours.json`), JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: 'success',
            json: {
                tour: newTour
            }
        })
    })
}