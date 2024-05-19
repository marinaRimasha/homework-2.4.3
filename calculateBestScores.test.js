const { group1, group2, group3, findTopStudents } = require('./calculateBestScores');

describe('findTopStudents', () => {
  test('should find students with highest score in group 1', () => {
    const result = findTopStudents(group1);
    expect(result).toEqual({
      names: 'Ivan, Stepan',
      score: 35
    });
  });

  test('should find students with highest score in group 2', () => {
    const result = findTopStudents(group2);
    expect(result).toEqual({
      names: 'Natalia, Marina, Dmitry',
      score: 25
    });
  });

  test('should find students with highest score in group 3', () => {
    const result = findTopStudents(group3);
    expect(result).toEqual({
      names: '',
      score: 0
    });
  });

  test('should handle empty input', () => {
    const result = findTopStudents([]);
    expect(result).toEqual({
      names: '',
      score: 0
    });
  });

  test('should handle single student with non-zero score', () => {
    const singleStudent = [{ name: 'Alex', score: 10, date: '2022-10-10' }];
    const result = findTopStudents(singleStudent);
    expect(result).toEqual({
      names: 'Alex',
      score: 10
    });
  });

  test('should handle single student with zero score', () => {
    const singleStudent = [{ name: 'Alex', score: 0, date: '2022-10-10' }];
    const result = findTopStudents(singleStudent);
    expect(result).toEqual({
      names: '',
      score: 0
    });
  });

  test('should handle students with the same score', () => {
    const sameScoreStudents = [
      { name: 'Bob', score: 20, date: '2022-10-10' },
      { name: 'Alice', score: 20, date: '2022-10-11' }
    ];
    const result = findTopStudents(sameScoreStudents);
    expect(result).toEqual({
      names: 'Bob, Alice',
      score: 20
    });
  });

  test('should filter out students with zero score', () => {
    const mixedScoreStudents = [
      { name: 'Bob', score: 0, date: '2022-10-10' },
      { name: 'Alice', score: 10, date: '2022-10-11' },
      { name: 'Charlie', score: 0, date: '2022-10-12' },
      { name: 'Dana', score: 10, date: '2022-10-13' }
    ];
    const result = findTopStudents(mixedScoreStudents);
    expect(result).toEqual({
      names: 'Alice, Dana',
      score: 10
    });
  });
});
