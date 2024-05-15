const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/WorkoutController')
const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get single workout
router.get('/:id', getWorkout)

//POST a workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)


//UPDATE a workout
router.patch('/:id', updateWorkout)



module.exports = router