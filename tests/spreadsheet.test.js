const { expect } = require ('chai');
const sinon = require('sinon');

const spreadsheet = require("../src/spreadsheet")

const { initialStudents, finalStudents } = require("./mocks/student.mock");

describe('2. Spreadsheet Tests', () => {
  it('should return spreadsheet', async function () {
    // Arrange
    sinon.stub(spreadsheet, 'getSheet').resolves(initialStudents);
    // Act
    const result = await spreadsheet.getSheet();
    // Assert
    expect(result).deep.equal(initialStudents);
  });
  it('should update spreadsheet', async function () {
    // Arrange
    sinon.stub(spreadsheet, 'postSheet').resolves(finalStudents);
    // Act
    const result = await spreadsheet.postSheet(finalStudents);
    // Assert
    expect(result).deep.equal(finalStudents);
  });

  afterEach(function () {
    sinon.restore();
  });
});