﻿function parseCount(number) {
    const parsednumber = Number.parseFloat(number);
    if (isNaN(parsednumber)) {
        throw new Error("Невалидное значение");
    }
    return parsednumber;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

//2 задание

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const tr = new Triangle(a, b, c)
        return tr;
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}