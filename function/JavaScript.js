// Немедленно вызываемая функция для изоляции области видимости
(function () {
    // Массив для хранения функций, которые нужно выполнить после загрузки DOM
    var functions = [];
    // Флаг, указывающий, готов ли DOM
    var isReady = false;

    // Функция для добавления функций в массив или немедленного их выполнения, если DOM готов
    function ready(fn) {
        if (isReady) {
            fn();
        } else {
            functions.push(fn);
        }
    }

    // Функция для выполнения всех функций в массиве, когда DOM становится готовым
    function runReady() {
        if (!isReady) {
            isReady = true;
            while (functions.length) {
                functions.shift()();
            }
        }
    }

    // Проверяем, готов ли DOM
    if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        // Если DOM уже готов, немедленно выполняем все функции
        window.setTimeout(runReady);
    } else {
        // Если DOM еще не готов, добавляем обработчики событий для выполнения функций, когда он станет готовым
        document.addEventListener("DOMContentLoaded", runReady);
        window.addEventListener("load", runReady);
    }

    // Заменяем $ на нашу функцию ready
    window.$ = ready;
})();
