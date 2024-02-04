function calculateAverage(grades) {
    const sum = parseInt(grades[3]) + parseInt(grades[4]) + parseInt(grades[5]);
    return sum / 3;
}

function determineSituation(student) {
    const attendanceThreshold = 60 * 0.25;
    if (student[2] >= attendanceThreshold) return [...student, "Reprovado por Falta", 0];

    const average = calculateAverage(student);

    if (average >= 70) return [...student, "Aprovado", 0];
    else if (average < 50) return [...student, "Reprovado por Nota", 0];
    else return [...student, "Exame Final", 100 - average];
}

function calculateSituation(data) {
    const students = data.slice(1);
    const result = students.map(student => determineSituation(student));
    return [data[0], ...result];
}

module.exports = { calculateSituation };
