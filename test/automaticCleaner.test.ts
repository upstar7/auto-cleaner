import {
    AutomaticCleaner,
    Orientation,
    Position,
    Grid,
} from "../src/automaticCleaner";

describe("AutomaticCleaner", () => {
    it("should execute instructions and return final position", () => {
        const initialPosition: Position = {
            x: 5,
            y: 5,
            orientation: Orientation.North,
        };
        const grid: Grid = { width: 10, height: 10 };
        const automaticCleaner = new AutomaticCleaner(initialPosition, grid);

        const instructions: string = "DADADADAA";
        automaticCleaner.executeInstructions(instructions);

        const finalPosition = automaticCleaner.getPosition();
        const expectedPosition: Position = {
            x: 5,
            y: 6,
            orientation: Orientation.North,
        };
        expect(finalPosition).toEqual(expectedPosition);
    });
});
