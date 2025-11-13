let studentsId = 0;
let testsId = 0;
let scoressId = 0;

const students = [];
const tests = [];
const scores = [];

class Student{
  static add(name){
    if(typeof(name) == 'string' && name.trim() != ''){
      students.push({
        id: studentsId++,
        name: name,
      });

      return true;
    }
    return false;
  }
  
  static getAll(){
    return JSON.parse(JSON.stringify(students));
  }

  static getOne(id){
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

class Test{
  static add(name){
    if(typeof(name) == 'string' && name.trim() != ''){
      tests.push({
        id: testsId++,
        name: name,
      });

      return true;
    }
    return false;
  }

  static getAll(){
    return JSON.parse(JSON.stringify(tests))
  }
}

class Score{
  static add(score, studentId, testId){
    if(typeof(score) == 'number' && score >=0 && score <= 10){
      const studentFound = students.findIndex(student => student == studentId);
      const testFound = tests.findIndex(test => test == testId);

      if(studentFound != -1 && testFound != -1){
        scores.push({
          score: score,
          studentId: studentId,
          testId: testId,
        });
        return true;
      }
      return false;
    }
    return false;
  }

  static getAll(){
    return JSON.parse(JSON.stringify(scores));
  }

  static getAllByTest(testId){
    if(typeof(testId) == 'number'){
      const scoresFound = scores.filter(score => score.testId == testId);

      return scoresFound.map(score => score.score)
    }
    return []
  }
}