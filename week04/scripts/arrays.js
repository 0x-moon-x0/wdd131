const steps = ["one", "two", "three"];

function listTemplate(step) {
    return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();


const grades = ['A', 'B', 'A'];

function gradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(gradeToPoints);
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = words.filter((word) => word.length < 6);


const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyIndex = numbers.indexOf(luckyNumber);
