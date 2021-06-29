const router = require('express').Router();
const db = require('../models');

router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
        .then((workoutData) => {
            res.json(workoutData);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id, {$push: {exercise: req.body}}
    )
    .then((workoutData) => {
        res.json(workoutData);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ]).then((workoutData) => {
        res.json(workoutData);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
    .then((workoutData) => {
        console.log(workoutData)
        res.json(workoutData);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = router;