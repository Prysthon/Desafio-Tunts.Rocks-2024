const { expect } = require ('chai');
const { calculateSituation } = require ("../src/student")

const {
  initialStudents,
  finalStudents
} = require("./mocks/student.mock")

describe('1. Student Tests', () => {
  it('should calculate situation for a student and return rights values', function () {
    // Act
    const result = calculateSituation(initialStudents);
    // Assert
    expect(result).deep.equal(finalStudents);
    expect(initialStudents).not.deep.equal(finalStudents);
  });
});
