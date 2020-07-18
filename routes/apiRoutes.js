const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => [
            res.json(dbWorkout)
        ])
        .catch(err => {
            res.json(err);
        });
});
