const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
           default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter a type of Exercise."
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the Exercise."
                },
                duration: {
                    type: Number,
                    required: "How long is this Exercise?"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;