const calculateBonus = (a, b) => {
  let bonus; 
  const sum = a + b;
  debugger;
  /*  здесь уже из двух поданных переменных (как мы видим:  a=50, b=30)
   bonus пока ещё пуст ибо в него ничего не записали
   sum уже хранит в себе сумму a+b что равняется 80, понятно,
   что на данном этапе всё сработало как ожидалось 
   */
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  /* здесь мы видим, что bonus теперь хранит в себе значение 50 
  так как sum имеет значение 80, что есть больше 50 и 
  выполянется первое условие - присваивание значения 50 для bonus
  */
  return bonus;
};

calculateBonus(50, 30); //добавлено для проверки и запуска