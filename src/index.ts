import {
    AutomaticCleaner,
    Orientation,
    Position,
    Grid,
} from "./automaticCleaner";

// Set up initial position, grid size, and instructions
const initialPosition: Position = {
    x: 5,
    y: 5,
    orientation: Orientation.North,
};
const grid: Grid = { width: 10, height: 10 };
const instructions: string = "DADADADAA";

// Create a Automatic cleaner object
const automaticCleaner = new AutomaticCleaner(initialPosition, grid);

// Execute the instructions
automaticCleaner.executeInstructions(instructions);

// Get the final position
const finalPosition = automaticCleaner.getPosition();
console.log("Final Position:", finalPosition);
