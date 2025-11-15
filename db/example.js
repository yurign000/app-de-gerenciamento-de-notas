let studentsId = 0;
let testsId = 0;
let scoressId = 0;

const students = [
  {name: 'José da Silva', id: 0},
  {name: 'Pedro Cunha', id: 1},
  {name: 'Alice', id: 2},
  {name: 'Mario', id: 3},
  {name: 'Anderson', id: 4},
  {name: 'Ana', id: 5},
  {name: 'Alberto', id: 6},
  {name: 'Lucas', id: 7},
  {name: 'Vinicius', id: 8},
  {name: 'Sergio Sousa', id: 9},
];
const tests = [
  {name: 'Substantivos', id: 0},
  {name: 'Sinonimos', id: 1},
  {name: 'Verb to Be', id: 2},
  {name: '100 palavras', id: 3},
  {name: 'Teste de pronuncia', id: 4},
  {name: 'Poemas', id: 5},
  {name: 'Redação', id: 6},
  {name: 'Leitura em voz alta', id: 7},
  {name: '200 palavras', id: 8},
];
const scores = [];

export class Student {
  static add(name) {
    if (typeof (name) == 'string' && name.trim() != '') {
      students.push({
        id: studentsId++,
        name: name,
      });

      return true;
    }
    return false;
  }

  static getAll() {
    return JSON.parse(JSON.stringify(students));
  }

  static getOne(id) {
    const studentScores = scores.filter(score => {
      return {
        score: score,
        test: tests.find(test => test.id == score.testId),
      }
    })
    return {
      student: students.find(student => student.id == id),
      scores: studentScores,
    };
  }
}

export class Test {
  static add(name) {
    if (typeof (name) == 'string' && name.trim() != '') {
      tests.push({
        id: testsId++,
        name: name,
      });

      return true;
    }
    return false;
  }

  static getAll() {
    return JSON.parse(JSON.stringify(tests))
  }
}

export class Score {
  static add(score, studentId, testId) {
    if (typeof (score) == 'number' && score >= 0 && score <= 10) {
      console.log(score)
      const studentFound = students.findIndex(student => student.id == studentId);
      const testFound = tests.findIndex(test => test.id == testId);

      if (studentFound != -1 && testFound != -1) {
        scores.push({
          score: score,
          student: students[studentId],
          test: tests[testId],
        });
        return true;
      }
      return false;
    }
    return false;
  }

  static getAll() {
    return JSON.parse(JSON.stringify(scores));
  }

  static getAllByTest(testId) {
    if (typeof (testId) == 'number') {
      const scoresFound = scores.filter(score => score.testId == testId);

      return scoresFound.map(score => score.score)
    }
    return []
  }
}