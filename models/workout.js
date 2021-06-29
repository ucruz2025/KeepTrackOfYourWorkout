const mongoose = require('mongoose');
const {Schema} = mongoose;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter the type of workout you'd be doing",
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the exercise",
        },
        duration: {
            type: Number,
            required: "Enter the length of the exercise",
        },
        //Not required since seed doesn't include all types
        weight: {
            type: Number,
            required: false,
        },
        reps: {
            type: Number,
            required: false,
        },
        sets: {
            type: Number,
            required: false,
        },
        distance: {
            type: Number,
            required: false,
        }
    }]
})

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;