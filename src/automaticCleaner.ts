// Enums
export enum Orientation {
    North = "N",
    East = "E",
    West = "W",
    South = "S",
}

export enum Instruction {
    RotateRight = "D",
    RotateLeft = "G",
    MoveForward = "A",
}

// Interfaces
export interface Position {
    x: number;
    y: number;
    orientation: Orientation;
}

export interface Grid {
    width: number;
    height: number;
}

// AutomaticCleaner class
export class AutomaticCleaner {
    private position: Position;
    private grid: Grid;

    constructor(position: Position, grid: Grid) {
        this.position = position;
        this.grid = grid;
    }

    public executeInstructions(instructions: string): void {
        for (let i = 0; i < instructions.length; i++) {
            const instruction = instructions[i];
            switch (instruction) {
                case Instruction.RotateRight:
                    this.rotateRight();
                    break;
                case Instruction.RotateLeft:
                    this.rotateLeft();
                    break;
                case Instruction.MoveForward:
                    this.moveForward();
                    break;
                default:
                    console.error(`Invalid instruction: ${instruction}`);
                    break;
            }
        }
    }

    public getPosition(): Position {
        return this.position;
    }

    private rotateRight(): void {
        switch (this.position.orientation) {
            case Orientation.North:
                this.position.orientation = Orientation.East;
                break;
            case Orientation.East:
                this.position.orientation = Orientation.South;
                break;
            case Orientation.South:
                this.position.orientation = Orientation.West;
                break;
            case Orientation.West:
                this.position.orientation = Orientation.North;
                break;
            default:
                console.error("Invalid orientation");
                break;
        }
    }

    private rotateLeft(): void {
        switch (this.position.orientation) {
            case Orientation.North:
                this.position.orientation = Orientation.West;
                break;
            case Orientation.East:
                this.position.orientation = Orientation.North;
                break;
            case Orientation.South:
                this.position.orientation = Orientation.East;
                break;
            case Orientation.West:
                this.position.orientation = Orientation.South;
                break;
            default:
                console.error("Invalid orientation");
                break;
        }
    }

    private moveForward(): void {
        switch (this.position.orientation) {
            case Orientation.North:
                if (this.position.y < this.grid.height) {
                    this.position.y++;
                }
                break;
            case Orientation.East:
                if (this.position.x < this.grid.width) {
                    this.position.x++;
                }
                break;
            case Orientation.South:
                if (this.position.y > 0) {
                    this.position.y--;
                }
                break;
            case Orientation.West:
                if (this.position.x > 0) {
                    this.position.x--;
                }
                break;
            default:
                console.error("Invalid orientation");
                break;
        }
    }
}
