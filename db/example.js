let studentsId = 0;
let testsId = 0;
let scoressId = 0;

const students = [
  {name: 'José Almeida', id: 0},
  {name: 'Pedro Cunha', id: 1},
  {name: 'Alice de Sousa Amaral', id: 2},
  {name: 'Mario Henrique', id: 3},
  {name: 'Anderson Costa', id: 4},
  {name: 'Ana Schmitz', id: 5},
  {name: 'Alberto da Silva', id: 6},
];
const tests = [
  {name: 'Substantivos', id: 0},
  {name: 'Sinonimos', id: 1},
  {name: 'Verb to Be', id: 2},
  {name: '100 palavras', id: 3},
  {name: 'Teste de pronúncia', id: 4},
];
const scores = [
  {id: 0, score: 8, student: students[students.length - 1], test: tests[0]},
  {id: 1, score: 7, student: students[students.length - 1], test: tests[1]},
  {id: 2, score: 10, student: students[students.length - 1], test: tests[2]},
  {id: 3, score: 8, student: students[students.length - 1], test: tests[3]},
  {id: 4, score: 9, student: students[students.length - 1], test: tests[4]},

  {id: 5, score: 8, student: students[students.length - 2], test: tests[0]},
  {id: 6, score: 6, student: students[students.length - 2], test: tests[1]},
  {id: 7, score: 10, student: students[students.length - 2], test: tests[2]},
  {id: 8, score: 9, student: students[students.length - 2], test: tests[3]},
  {id: 9, score: 9, student: students[students.length - 2], test: tests[4]},

  {id: 10, score: 6, student: students[students.length - 3], test: tests[0]},
  {id: 11, score: 6, student: students[students.length - 3], test: tests[1]},
  {id: 12, score: 9, student: students[students.length - 3], test: tests[2]},
  {id: 13, score: 7, student: students[students.length - 3], test: tests[3]},
  {id: 14, score: 8, student: students[students.length - 3], test: tests[4]},

  {id: 15, score: 10, student: students[students.length - 4], test: tests[0]},
  {id: 16, score: 9, student: students[students.length - 4], test: tests[1]},
  {id: 17, score: 10, student: students[students.length - 4], test: tests[2]},
  {id: 18, score: 9, student: students[students.length - 4], test: tests[3]},
  {id: 19, score: 10, student: students[students.length - 4], test: tests[4]},

  {id: 20, score: 8, student: students[students.length - 5], test: tests[0]},
  {id: 21, score: 9, student: students[students.length - 5], test: tests[1]},
  {id: 22, score: 10, student: students[students.length - 5], test: tests[2]},
  {id: 23, score: 8, student: students[students.length - 5], test: tests[3]},
  {id: 24, score: 10, student: students[students.length - 5], test: tests[4]},

  {id: 25, score: 7, student: students[students.length - 6], test: tests[0]},
  {id: 26, score: 7, student: students[students.length - 6], test: tests[1]},
  {id: 27, score: 9, student: students[students.length - 6], test: tests[2]},
  {id: 28, score: 8, student: students[students.length - 6], test: tests[3]},
  {id: 29, score: 7, student: students[students.length - 6], test: tests[4]},

  {id: 30, score: 8, student: students[students.length - 7], test: tests[0]},
  {id: 31, score: 8, student: students[students.length - 7], test: tests[1]},
  {id: 32, score: 10, student: students[students.length - 7], test: tests[2]},
  {id: 33, score: 8, student: students[students.length - 7], test: tests[3]},
  {id: 34, score: 10, student: students[students.length - 7], test: tests[4]},
];

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

  static getOne(testId){
    return tests.find(test => test.id == testId) || [];
  }
}

export class Score {
  static add(score, studentId, testId) {
    if (typeof (score) == 'number' && score >= 0 && score <= 10) {
      const studentFound = students.findIndex(student => student.id == studentId);
      const testFound = tests.findIndex(test => test.id == testId);

      if (studentFound != -1 && testFound != -1) {
        scores.push({
          scoreid: score,
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
}