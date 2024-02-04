const initialStudents = [
  [
    'Matricula',
    'Aluno',
    'Faltas',
    'P1',
    'P2',
    'P3',
    'Situação',
    'Nota para Aprovação Final'
  ],
  [ '1', 'Eduardo', '8', '35', '63', '61' ],
  [ '4', 'Flavia ', '23', '66', '98', '62' ],
  [ '8', 'Fabio', '10', '53', '96', '89' ],
  [ '19', 'Kira', '8', '36', '46', '48' ],
];

const finalStudents = [
  [
    'Matricula',
    'Aluno',
    'Faltas',
    'P1',
    'P2',
    'P3',
    'Situação',
    'Nota para Aprovação Final'
  ],
  [ '1', 'Eduardo', '8', '35', '63', '61', 'Exame Final', 47 ],
  [ '4', 'Flavia ', '23', '66', '98', '62', 'Reprovado por Falta', 0 ],
  [ '8', 'Fabio', '10', '53', '96', '89', 'Aprovado', 0 ],
  [ '19', 'Kira', '8', '36', '46', '48', 'Reprovado por Nota', 0 ],
];

module.exports = {
  initialStudents,
  finalStudents
};