class Circle {
    private radius: number = 1.0;
    private color: string = "red";

    constructor();
    constructor(radius: number, color: string);
    constructor(radius?: number, color?: string) {
        if (radius !== undefined && color !== undefined) {
            this.radius = radius;
            this.color = color;
        }
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getColor(): string {
        return this.color;
    }

    setColor(color: string): void {
        this.color = color;
    }

    toString(): string {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(5.0, "blue");
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());
