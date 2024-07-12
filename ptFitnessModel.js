import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

// Initialize your database connection; modify the URI as needed for your environment
const mongoURI = 'mongodb+srv://comfyfitness:root@cluster0.j7yazs1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB connection string

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(connection);

const ptFitnessSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Age: {
            type: Number,
            required: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
        Weight: {
            type: Number,
            required: true,
        },
        Height: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

// Apply the auto-increment plugin to the rmRequest schema
ptFitnessSchema.plugin(AutoIncrement, {
    id: 'psuser_id_counter', // Identifier for the sequence
    inc_field: 'UserID'    // Field to increment
});

export const ptFitness = mongoose.model('ptFitness', ptFitnessSchema);