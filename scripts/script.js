(function() {
    'use strict';
    function replaceFavicon() {
        let favicon = document.querySelector('link[rel="shortcut icon"]');
        if (favicon) {
            favicon.href = "https://tooru.konataizumi.ru/img/konata.ico";
        }
    };
    const replacements = {
        "Моя Страница": "Отаку",
        "Мои Фотографии": "Мой Фанарт",
        "Мои Аудиозаписи": "Мои OST'ы",
        "Мои Сообщения": "Мои НЯ",
        "Мои Заметки": "Мои Фанфики",
        "Мои Группы": "Мои Аниме-клубы",
        "Мои Ответы": "Мой Кавай",
        "Мои Настройки": "Мои НЯстройки",
        "Поиск": "доко ни",
        "Тип группы": "Тип клуба",
        "группы": "аниме-клубы",
        "выйти": "дзя нэ",
        "помощь": "отаковать",
        "люди": "анимешники",
        "Онлайн": "в сети ^_^",
        "Все сообщения": "Все НЯ",
        "Приватность": "Секреты^^",
        "Чёрный список": "Дыз Нот",
        "время подавать напитки и вершить судьбы": "аригато! ^_^",
        "C'mon Grab Your Friends": "аригато! ^_^",
        "В вашем чёрном списке": "В вашей тетради смерти",
    };
    function replaceText() {
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        while (walker.nextNode()) {
            const node = walker.currentNode;
            for (const [oldText, newText] of Object.entries(replacements)) {
                if (node.nodeValue.includes(oldText)) {
                    node.nodeValue = node.nodeValue.replace(new RegExp(oldText, 'g'), newText);
                }
            }
        }
    }
    replaceText();
    replaceFavicon();
    const observer = new MutationObserver(replaceText);
    observer.observe(document.body, { childList: true, subtree: true });
})();