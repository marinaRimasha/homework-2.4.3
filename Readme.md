# Инструкция по установке и запуску проекта


## Предусловие:

- установить VSCode
- Установить [Node.js](https://nodejs.org/en/) и [npm](https://www.npmjs.com/get-npm) согласно [официальной документации](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Установка

- Cоздайте папку на компьютере
- Откройте VSCode
- Откройте созданную папку(File->Open Folder... -> выберете созданную на этапе 1 папку. Нажмите "Открыть"
- Откройте терминал (Terminal -> New Terminal)

## Скачивание проекта

- В терминале напиши команду:
  ```bash 
  git init
  ```

- В терминале напиши команду:
  ```bash 
  git clone https://github.com/marinaRimasha/homework-2.4.3.git
  ```

## Установка библиотек и фреймверков

- Запусти в терминале команду:
  ```bash 
  npm install --save-dev jest
  ```

- Запусти в терминале команду для установки зависимостей:
  ```bash
  npm install
  ```

## Запуск теста

- В терминале запусти команду:

  ```bash
  npm test
  ```
    или 

  ```bash
  npx jest
  ```


<div style="text-align: center;">

**Оцени результат!**
 ![QA картинка из интернета](https://www.techslang.com/wp-content/uploads/2020/06/qa..jpg.webp)


</div>

 
## Проблемы и решения

- Если получаете ошибки при запуске, убедитесь
  - установлен Node.js запустив в терминале команду 
  
  ```bash
  node -v
  ```

