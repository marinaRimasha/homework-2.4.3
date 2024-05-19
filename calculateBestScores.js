group1 = [
  { name: "Ivan", score: 35, date: "2022-10-11" },
  { name: "Maria", score: 5, date: "2022-10-10" },
  { name: "Olga", score: 0, date: "" },
  { name: "Stepan", score: 35, date: "2022-10-12" },
  { name: "Oleg", score: 9, date: "2022-10-01" },
  { name: "Zanna", score: 15, date: "2022-10-11" },
];

group2 = [
  { name: "Margo", score: 0, date: "2022-10-11" },
  { name: "Natalia", score: 25, date: "2022-10-10" },
  { name: "Marina", score: 25, date: "2022-10-01" },
  { name: "Dmitry", score: 25, date: "2022-10-12" },
  { name: "Denis", score: 0, date: "2022-10-02" },
  { name: "Vadimyr", score: 1, date: "2022-10-11" },
];
group3 = [
  { name: "Irina", score: 0, date: "2022-10-11" },
  { name: "Vasily", score: 0, date: "2022-10-10" },
  { name: "David", score: 0, date: "2022-10-11" },
  { name: "Kristina", score: 0, date: "2022-10-12" },
  { name: "Varvara", score: 0, date: "2022-10-01" },
  { name: "Tanya", score: 0, date: "2022-10-11" },
];

const findTopStudents = (data) => {
  const filteredData = data.filter((student) => student.score > 0); //нет смысла искать победителей среди тех, кто ничего не получил вовсе

  // Нахождение максимального количества баллов
  const maxScore = filteredData.reduce(
    (max, student) => Math.max(max, student.score),
    0
  );
  // Фильтрация студентов с максимальным количеством баллов
  const topStudents = filteredData.filter((student) => student.score === maxScore);

  // Получение списка имен студентов с максимальной оценкой
  const topStudentNames = topStudents.map((student) => student.name).join(", ");

  console.log(`Congratulations to ${topStudentNames} having top score ${maxScore} !`);

  return { names: topStudentNames, score: maxScore };
};

module.exports = { group1, group2, group3, findTopStudents };
