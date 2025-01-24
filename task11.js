
// 1. Самое простое - это иногда мы исправляем за пользователем его ввод данных и хотим, 
// чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
// Необходимо реализовать такую функцию.

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

console.log(capitalizeFirstLetter('hello world')); // Output: Hello world

// 2. Часто в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.
// Давайте напишем аналогичный метод.
// На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
// На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
// Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу 
// или по символу знака препинания (,.!?:;)/

function truncateString(string, limit) {
    let truncatedString = string.slice(0, limit);
    let lastSpaceIndex = truncatedString.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
        truncatedString = truncatedString.slice(0, lastSpaceIndex);
    }
    return truncatedString + '...';
}

console.log(truncateString('Hello, World! This is ano very long string.', 22)); // Output: Hello, World! This is...


//3. Небольшое практическое задание по работе с подстроками.
// Функция на вход получает 2 строки, а на выходе возвращает true/false
//  в зависимости от того, является хотя бы одна из строк (не важно какая) подстрокой другой строки.
//  Если да, то возвращается true. В противном случае - false.

function isSubString(string1, string2) {
    return string2.includes(string1);
}

console.log(isSubString('Hello', 'Hello, World!')); // Output: true