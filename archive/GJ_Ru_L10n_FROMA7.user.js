// ==UserScript==
// @name            Game Jolt ru-RU L10n
// @name:ru         Русская локализация Game Jolt
// @author          Deflecat, eiser_dip
// @contributionURL https://boosty.to/rushanm
// @description     Translates the Game Jolt website into Russian
// @description:ru  Переводит сайт Game Jolt на русский язык
// @downloadURL     https://github.com/RushanM/Game-Jolt-ru-RU-L10n/raw/master/archive/GJ_Ru_L10n_FROMA7.user.js
// @grant           none
// @homepageURL     https://github.com/RushanM/Game-Jolt-ru-RU-L10n
// @icon            https://s.gjcdn.net/img/favicon.png
// @license         MIT
// @match           https://*.gamejolt.com/*
// @match           https://gamejolt.com/*
// @namespace       gjrul10n
// @supportURL      https://github.com/RushanM/Game-Jolt-ru-RU-L10n/issues
// @updateURL       https://github.com/RushanM/Game-Jolt-ru-RU-L10n/raw/master/archive/GJ_Ru_L10n_FROMA7.user.js
// @version         A1-FROMA7
// ==/UserScript==

(function() {
    'use strict';

    // Загрузка шрифтов
    const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Sans+Condensed:wght@600&display=swap'
    ];

    fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.href = href;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    });

    // Применение стилей
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Inter', sans-serif;
        }
        .use-fira {
            font-family: 'Fira Sans Condensed', sans-serif !important;
        }
        h2.-content-row-header small {
            font-family: 'Inter', sans-serif;
        }
    `;
    document.head.appendChild(style);

    // Массив замен
    const replacements = [
        // Группировка по селекторам
        {
            selector: 'div.-header-lead-text.-main-header-text',
            replacements: [{
                    oldText: 'Become a Game Jolt Creator',
                    newText: 'СТАНЬ ТВОРЦОМ НА GAME JOLT'
                },
                {
                    oldText: '',
                    newText: '',
                    addClass: 'use-fira'
                }
            ]
        },
        {
            selector: 'div.text-center > div',
            replacements: [{
                    oldText: '',
                    newText: '',
                    addClass: 'use-fira'
                },
                {
                    oldText: 'Be the FIRST one to like a post',
                    newText: 'ПЕРВЫМИ ЛАЙКНИТЕ ПУБЛИКАЦИЮ'
                },
                {
                    oldText: 'Cast your vote on a poll',
                    newText: 'ПРОГОЛОСУЙТЕ В ОПРОСЕ'
                },
                {
                    oldText: 'Like 5 comments',
                    newText: 'ЛАЙКНИТЕ 5 КОММЕНТАРИЕВ'
                },
                {
                    oldText: 'DAILY QUEST',
                    newText: 'ЕЖЕДНЕВНЫЙ КВЕСТ'
                },
                {
                    oldText: 'WEEKLY QUEST',
                    newText: 'НЕДЕЛЬНЫЙ КВЕСТ'
                },
                {
                    oldText: 'WORLD EVENT',
                    newText: 'МИРОВОЕ СОБЫТИЕ'
                },
                {
                    oldText: 'Like a post with 100 or more likes on it',
                    newText: 'ЛАЙКНИТЕ ПУБЛИКАЦИЮ, У КОТОРОЙ УЖЕ 100 ИЛИ БОЛЕЕ ЛАЙКОВ'
                },
                {
                    oldText: 'Gift a sticker pack',
                    newText: 'ПОДАРИТЕ НАБОР НАКЛЕЕК'
                },
                {
                    oldText: 'React to 5 different comments',
                    newText: 'ПОСТАВЬТЕ РЕАКЦИЮ НА 5 РАЗНЫХ КОММЕНТАРИЕВ'
                },
                {
                    oldText: 'Complete 10 daily quests',
                    newText: 'ЗАВЕРШИТЕ 10 ЕЖЕДНЕВНЫХ КВЕСТОВ'
                },
                {
                    oldText: 'A Transmission From Beyond the Stars',
                    newText: 'СООБЩЕНИЕ ИЗ ГЛУБИН КОСМОСА'
                },
                {
                    oldText: 'June Login Streak',
                    newText: 'ИЮНЬСКИЙ МАРАФОН ПОСЕЩЕНИЙ'
                },
                {
                    oldText: 'Jule Login Streak',
                    newText: 'ИЮЛЬСКИЙ МАРАФОН ПОСЕЩЕНИЙ'
                },
                {
                    oldText: 'August Login Streak',
                    newText: 'АВГУСТОВСКИЙ МАРАФОН ПОСЕЩЕНИЙ'
                },
                {
                    oldText: 'September Login Streak',
                    newText: 'СЕНТЯБРЬСКИЙ МАРАФОН ПОСЕЩЕНИЙ'
                },
                {
                    oldText: 'Summon the Power of Lightning',
                    newText: 'ПРИЗОВИТЕ СИЛУ МОЛНИИ'
                }
            ]
        },
        {
            selector: 'div.sticker-charge-tooltip > p > span, div.sticker-charge-tooltip > div > span',
            replacements: [{
                    oldText: 'Complete daily quests to fill your charge orbs. Each day you miss a daily quest, your charge goes down.',
                    newText: 'Выполняйте ежедневные квесты, чтобы заряжать свои сферы. Каждый день, когда вы пропускаете квест, ваша энергия уменьшается.',
                },
                {
                    oldText: 'Once all your charge orbs are full, you can support your favorite Game Jolt Creators by giving them a charged sticker! Every charged sticker uses 2 charge orbs and puts 💰💰💰 in their IRL pockets.',
                    newText: 'Как только все сферы будут заряжены, вы сможете поддержать своих любимых творцов на Game Jolt, наклеив заряженную наклейку на их публикацию! Каждая заряженная наклейка расходует 2 заряженной сферы и ложит 💰💰💰 в их реальный кошелёк.'
                }
            ]
        },
        {
            selector: 'h4.-charge-text > span:first-child',
            replacements: [{
                oldText: 'Charge',
                newText: 'Заряд'
            }]
        },
        {
            selector: 'section.section > div',
            replacements: [{
                oldText: 'Objectives',
                newText: 'Цели и задачи'
            }]
        },
        {
            selector: 'div.-details',
            replacements: [{
                oldText: 'Like the post linked in the quest description',
                newText: 'Лайкните публикацию, указанную в описании квеста'
            }]
        },
        {
            selector: 'h4',
            replacements: [{
                oldText: 'Daily Quests',
                newText: 'Ежедневные квесты'
            }]
        },
        {
            selector: 'div._subheading',
            replacements: [{
                    oldText: 'Daily Quests',
                    newText: 'ЕЖЕДНЕВНЫЕ КВЕСТЫ'
                },
                {
                    oldText: '',
                    newText: '',
                    addClass: 'use-fira'
                },
                {
                    oldText: 'Active Quests',
                    newText: 'АКТИВНЫЕ КВЕСТЫ'
                },
                {
                    oldText: 'Available Quests',
                    newText: 'ДОСТУПНЫЕ КВЕСТЫ'
                }
            ]
        },
        {
            selector: 'span.user-dogtag.tag.tag-highlight',
            replacements: [{
                    oldText: 'Dev',
                    newText: 'Разраб'
                },
                {
                    oldText: 'GMR',
                    newText: 'Игрок'
                },
                {
                    oldText: 'MOD',
                    newText: 'Модер'
                },
                {
                    oldText: 'MOD',
                    newText: 'Модер'
                },
                {
                    oldText: 'GUY',
                    newText: 'Чел'
                },
                {
                    oldText: 'ELF',
                    newText: 'Эльф'
                },
                {
                    oldText: 'BUG',
                    newText: 'Баг'
                },
                {
                    oldText: 'She',
                    newText: 'Она'
                },
                {
                    oldText: 'Her',
                    newText: 'Ей'
                },
                {
                    oldText: 'He',
                    newText: 'Он'
                },
                {
                    oldText: 'Him',
                    newText: 'Ему'
                },
                {
                    oldText: 'They',
                    newText: 'Они'
                },
                {
                    oldText: 'Them',
                    newText: 'Им'
                }
            ]
        }, {
            selector: 'span.tag.tag-highlight',
            replacements: [{
                    oldText: 'Follows you',
                    newText: 'Ваш подписчик'
                },
                {
                    oldText: 'Friend',
                    newText: 'Друг'
                },
                {
                    oldText: 'Online',
                    newText: 'В сети'
                }
            ]
        }, {
            selector: 'span.tag',
            replacements: [{
                oldText: 'Offline',
                newText: 'Офлайн'
            }]
        }, {
            selector: 'nav#shell-top-nav a strong',
            replacements: [{
                    oldText: 'Discover',
                    newText: 'ОБЗОР'
                },
                {
                    oldText: 'Store',
                    newText: 'КАТАЛОГ'
                }
            ]
        }, {
            selector: 'div.-member-counts a',
            replacements: [{
                oldText: 'members',
                newText: 'участников'
            }]
        }, {
            selector: 'nav.-menu a span',
            replacements: [{
                    oldText: 'Following',
                    newText: 'Подписки'
                },
                {
                    oldText: 'For You',
                    newText: 'Для вас'
                }
            ]
        }, {
            selector: 'div.-username',
            replacements: [{
                oldText: 'Hey',
                newText: 'Ъуъ, '
            }]
        }, {
            selector: 'div.-input',
            replacements: [{
                    oldText: 'So, what\'s on your mind?',
                    newText: 'Что у вас на уме?'
                },
                {
                    oldText: 'Share your creations!',
                    newText: 'Поделитесь тем, что сделали!'
                },
                {
                    oldText: 'Keep it related to POPGOES!',
                    newText: 'Публикация должна быть связана с POPGOES!'
                }
            ]
        }, {
            selector: 'div.-message',
            replacements: [{
                oldText: 'Game Jolt\'s Store is an open platform to share your games with the world.',
                newText: 'Каталог Game Jolt — это открытая платформа, в которой вы можете делиться своими играми с миром.'
            }]
        }, {
            selector: 'label[for="search-input-1"] span',
            replacements: [{
                oldText: 'Search',
                newText: 'Поиск'
            }]
        }, {
            selector: 'input#search-input-1',
            replacements: [{
                oldText: 'Search',
                newText: 'Поиск',
                attr: 'placeholder'
            }]
        }, {
            selector: 'div.-hero-text',
            replacements: [{
                oldText: 'Join a growing community of creators and gamers from around the world!',
                newText: 'Присоединяйтесь к растущему сообществу творцов и геймеров со всего мира!'
            }]
        }, {
            selector: 'span',
            replacements: [{
                oldText: 'Sign up with Google',
                newText: 'Зарегистрироваться через Google'
            }]
        }, {
            selector: 'div.auth-line-thru',
            replacements: [{
                oldText: 'or',
                newText: 'или'
            }]
        }, {
            selector: 'a',
            replacements: [{
                oldText: 'Get App',
                newText: 'Скачать приложение'
            }]
        }, {
            selector: 'h5.section-header',
            replacements: [{
                oldText: 'Games',
                newText: 'Игры'
            }]
        }, {
            selector: 'h5.section-header',
            replacements: [{
                oldText: 'Collaborators',
                newText: 'Модераторы'
            }]
        }, {
            selector: 'span',
            replacements: [{
                oldText: 'Close',
                newText: 'Закрыть'
            }]
        }, {
            selector: 'a',
            replacements: [{
                oldText: 'Log in',
                newText: 'Авторизоваться'
            }]
        }, {
            selector: 'a',
            replacements: [{
                oldText: 'Sign up',
                newText: 'Зарегистрироваться'
            }]
        }, {
            selector: 'div.use-fira',
            replacements: [{
                oldText: 'Joltbux',
                newText: 'Джолтбаксы'
            }]
        }, {
            selector: 'div.use-fira',
            replacements: [{
                oldText: 'Coins',
                newText: 'Монеты'
            }]
        }, {
            selector: 'div.tooltip-inner',
            replacements: [{
                oldText: 'Notifications',
                newText: 'Уведомления'
            }]
        }, {
            selector: '.timeline-list-item-title, .timeline-list-item-meta',
            replacements: [{
                oldText: 'replied to your comment on',
                newText: 'ответил на ваш комментарий на странице'
            }]
        }, {
            selector: 'div.tooltip-inner',
            replacements: [{
                oldText: 'Friend Requests',
                newText: 'Запросы в друзья'
            }]
        }, {
            selector: 'span',
            replacements: [{
                oldText: 'Learn more',
                newText: 'Узнать больше'
            }]
        }, {
            selector: 'span.text-muted',
            replacements: [{
                oldText: /(\d+)h/g,
                newText: '$1 ч.'
            }]
        }, {
            selector: 'span.text-muted',
            replacements: [{
                oldText: /(\d+)w/g,
                newText: '$1 н.'
            }]
        }, {
            selector: 'span.text-muted',
            replacements: [{
                oldText: /(\d+)d/g,
                newText: '$1 д.'
            }]
        }, {
            selector: 'div[style="Staatliches"]',
            replacements: [{
                oldText: '',
                newText: '',
                addClass: 'use-fira'
            }]
        }, {
            selector: 'div.fill-offset > h2',
            replacements: [{
                oldText: '',
                newText: '',
                addClass: 'use-fira'
            }]
        }, {
            selector: 'div.content-viewer.quest-stage-description-content p span',
            replacements: [{
                    oldText: 'First! I gave the first like! It was me! Oh... You were first. Maybe next time!',
                    newText: 'Я! Я поставил первый лайк! Чего… Так ты поставил первый лайк… Ладно, в следующий раз точно буду я!'
                },
                {
                    oldText: 'Your choices will affect the outcome, good or bad, so choose carefully!',
                    newText: 'Ваши выборы повлияют на результат, каким бы он не вышел, поэтому выбирайте с умом!'
                },
                {
                    oldText: 'Though a multitude, our hearts beat as one! Lend your support! Let\'s vanquish the darkness!',
                    newText: 'Пусть наши сердца бьются в унисон, даже в большой толпе! Поддержите нас! Давайте вместе победим тьму!'
                },
                {
                    oldText: 'In this land, there is an age-old custom of raising one\'s thumb in support of a good point. Let\'s honor this tradition!',
                    newText: 'В этом мире… существует многолетняя традиция поддерживать хорошие идеи поднятым вверх большим пальцем. Давайте почтим эту традицию!'
                },
                {
                    oldText: 'Seek out and complete quests to become the very best, like no one ever was!',
                    newText: 'Понабирайте себе квестов и завершите каждый, чтобы стать лучше всех!'
                },
                {
                    oldText: '@TheGamingGoru is a Jolter to Watch!',
                    newText: 'Вот на кого стоит подписаться, так это на джолтера @TheGamingGoru!'
                },
                {
                    oldText: 'They post great fan art inspired by video games and cartoons!',
                    newText: 'Он публикует отличные фан-арты по видеоиграм и мультфильмам!'
                },
                {
                    oldText: 'Follow them before the quest ends on October 29 and you\'ll get Coins!',
                    newText: 'Подпишитесь на него до окончания квеста 29 октября и вы получите монеты!'
                },
                {
                    oldText: '',
                    newText: 'Хотите узнать о большем количестве крутых джолтеров? https://gamejolt.com/discover'
                },
                {
                    oldText: 'Give your friend the gift of stickers!',
                    newText: 'Порадуйте своего друга наклейками!'
                },
                {
                    oldText: 'Anyone can react to a comment. Can you react to 5 different ones?',
                    newText: 'Каждый может поставить реакцию на комментарий. А сможете ли вы поставить на 5 разных?'
                },
                {
                    oldText: 'You\'ve received a transmission from beyond the stars! An alien diplomat wants to introduce themselves to Earthlings.',
                    newText: 'Вы получили сигнал из-за пределов нашей галактики! Инопланетный дипломат хочет познакомиться с землянами.'
                }, {
                    oldText: 'Send the alien our message of good will by liking',
                    newText: 'Пошлите ему наше мирное послание, поставив лайк '
                }, {
                    oldText: 'this post',
                    newText: 'этой публикации'
                },
                {
                    oldText: '. If you do, they\'ll give you coins and stickers!',
                    newText: '. В ответ он подарит вам монеты и наклейки!'
                },
                {
                    oldText: 'Support your favorite Creators on Game Jolt with the power of lightning! Place 22 charged stickers before the quest expires and you’ll get a trophy! GJ Pro-Tip: You’ll also get a Welcome to Game Jolt pack after you’ve placed 11 charged stickers.',
                    newText: 'Поддержите своих любимых творцов на Game Jolt силой молнии! Приклейте 22 заряженных наклеек до истечения срока квеста и получите трофей! Заметка от GJ: Также вы получите набор «Добро пожаловать на Game Jolt» после размещения 11 заряженных наклеек.'
                },
                {
                    oldText: 'Support your favorite Creators on Game Jolt with the power of lightning!',
                    newText: 'Поддержите своих любимых творцов на Game Jolt силой молнии! '
                },
                {
                    oldText: 'Place 22 charged stickers before the quest expires and you’ll get a trophy!',
                    newText: 'Приклейте 22 заряженных наклеек до истечения срока квеста и получите трофей!'
                },
                {
                    oldText: 'GJ Pro-Tip:',
                    newText: 'Комментарий от GJ: '
                },
                {
                    oldText: 'You\'ll also get a Welcome to Game Jolt pack after you\'ve placed 11 charged stickers.',
                    newText: 'Также вы получите набор «Добро пожаловать на Game Jolt» после размещения 11 заряженных наклеек.'
                }
            ]
        }, {
            selector: 'div._details > div',
            replacements: [{
                    oldText: '',
                    newText: '',
                    addClass: 'use-fira'
                },
                {
                    oldText: 'What\'s Your Favorite Scary Movie?',
                    newText: 'Какой ужастик вам больше по душе?'
                },
                {
                    oldText: 'Post Your Halloween Costume!',
                    newText: 'Опубликуйте свой костюм на Хэллоуин!'
                },
                {
                    oldText: 'Help Kikkerstein Save Halloween!',
                    newText: 'Помогите Киккерштейну спасти Хэллоуин!'
                },
                {
                    oldText: 'Trick or Treat 2024',
                    newText: 'Сладость или гадость 2024'
                },
                {
                    oldText: 'Complete 10 daily quests',
                    newText: 'Завершите 10 ежедневных квестов'
                },
                {
                    oldText: 'Jolters to Watch: @TheGamingGoru',
                    newText: 'Джолтеры достойные подписки: @TheGamingGoru'
                },
                {
                    oldText: 'What\'s Your Favorite Character Design?',
                    newText: 'Ваш любимый дизайн персонажа'
                },
                {
                    oldText: 'Joltober 2024: Day 22: Gargoyle',
                    newText: 'Джолтябрь 2024: день 22 — гаргулья'
                },
                {
                    oldText: 'The Night of the Liking Dead',
                    newText: 'Ночь лайкающих мертвецов'
                },
                {
                    oldText: 'The Creature is Alive!',
                    newText: 'Оно ожило!'
                },
                {
                    oldText: 'What\'s Your Favorite Scary Game?',
                    newText: 'Ваш любимый ужастик'
                },
                {
                    oldText: 'October Login Streak',
                    newText: 'Октябрьский марафон посещений'
                },
                {
                    oldText: 'Like a post with 100 or more likes on it',
                    newText: 'Лайкните публикацию, у которой уже 100 или более лайков'
                },
                {
                    oldText: 'Gift a sticker pack',
                    newText: 'Подарите набор наклеек'
                },
                {
                    oldText: 'React to 5 different comments',
                    newText: 'Поставьте реакцию на 5 разных комментариев'
                },
                {
                    oldText: 'A Transmission From Beyond the Stars',
                    newText: 'Сообщение из глубин космоса '
                }, {
                    oldText: 'June Login Streak',
                    newText: 'Июньский марафон посещений'
                }, {
                    oldText: 'Jule Login Streak',
                    newText: 'Июльский марафон посещений'
                },
                {
                    oldText: 'August Login Streak',
                    newText: 'Августовский марафон посещений'
                },
                {
                    oldText: 'September Login Streak',
                    newText: 'Сентябрьский марафон посещений'
                }
            ]
        }, {
            selector: 'div.-page-cut-bottom.page-cut .page-cut-content .button.-trans',
            replacements: [{
                oldText: 'Read article',
                newText: 'Читать статью'
            }]
        }, {
            selector: '.modal-header .modal-title span',
            replacements: [{
                oldText: 'Your Game Token',
                newText: 'Ваш игровой токен'
            }]
        }, {
            selector: '.modal-body p.text-muted.small:nth-of-type(1) span',
            replacements: [{
                oldText: 'Your game token is like a special password you use to log into games that support high scores and achievements.',
                newText: 'Ваш игровой токен — это как специальный пароль, который вы используете для входа в игры, поддерживающие таблицы рекордов и достижения.'
            }]
        }, {
            selector: '.modal-body p.text-muted.small:nth-of-type(1) a span',
            replacements: [{
                oldText: 'more info',
                newText: 'больше информации'
            }]
        }, {
            selector: '.modal-body p.text-muted.small:nth-of-type(2) span',
            replacements: [{
                oldText: 'Never share your account password. In fact, if a game asks for your password instead of your game token, please report it!',
                newText: 'Никогда не делитесь паролем от своей учётной записи. Если же игра запрашивает ваш пароль заместо игрового токена, обязательно сообщите об этом!'
            }]
        }, {
            selector: 'h2.-content-row-header',
            replacements: [{
                    oldText: 'Realms',
                    newText: 'Темы'
                },
                {
                    oldText: 'Game Jolt Creators',
                    newText: 'Творцы на Game Jolt'
                }
            ]
        }, {
            selector: 'h2.-content-row-header small',
            replacements: [{
                    oldText: 'Realms bring all the content around a particular topic or interest into a single place for you to browse.',
                    newText: 'Темы объединяют весь контент, связанный с определённой тематикой или интересом, в одном месте для удобного просмотра.'
                },
                {
                    oldText: 'Follow and support your favorite creators on Game Jolt!',
                    newText: 'Следите за своими любимыми творцами на Game Jolt и поддерживайте их!'
                }
            ]
        }, {
            selector: 'div.content-viewer.community-description-content span',
            replacements: [{
                oldText: 'Community of GKProduction games players',
                newText: 'Сообщество игроков игр GKProduction'
            }]
        },
    ];

    // Функция перевода
    function translateText() {
        replacements.forEach(group => {
            const elements = document.querySelectorAll(group.selector);
            if (!elements.length) return;

            elements.forEach(element => {
                group.replacements.forEach(rep => {
                    if (rep.oldText) {
                        if (rep.attr) {
                            const attrValue = element.getAttribute(rep.attr);
                            if (attrValue && typeof rep.oldText === 'string') {
                                if (element[rep.attr].trim() === rep.oldText) {
                                    element[rep.attr] = rep.newText;
                                } else if (element[rep.attr].includes(rep.oldText)) {
                                    element[rep.attr] = element[rep.attr].replace(rep.oldText, rep.newText);
                                }
                            } else if (rep.oldText instanceof RegExp) {
                                element[rep.attr] = element[rep.attr].replace(rep.oldText, rep.newText);
                            }
                        } else {
                            if (typeof rep.oldText === 'string') {
                                if (element.textContent.trim() === rep.oldText) {
                                    element.textContent = rep.newText;
                                } else if (element.textContent.includes(rep.oldText)) {
                                    element.innerHTML = element.innerHTML.replace(rep.oldText, rep.newText);
                                }
                            } else if (rep.oldText instanceof RegExp) {
                                element.textContent = element.textContent.replace(rep.oldText, rep.newText);
                            }
                        }
                    }

                    if (rep.addClass) {
                        element.classList.add(rep.addClass);
                    }
                });
            });
        });

        // Применение замены заголовка страницы
        const titleReplacements = {
            ' - ': ' — ',
            'Share your creations': 'Делитесь своим творчеством',
            'Fan art, videos, guides, polls and more': 'Фан-арт, видео, руководства, опросы и многое другое',
            ' Community': ' (сообщество)',
            'Fairy Kingdom of King Froggold II': 'Сказочное королевство короля Фроггольда II',
            'Five Nights with Barsik': 'Пять ночей с Барсиком',
            'Mystery Chamber': 'Тайная Комната',
            'Godzilla': 'Годзилла',
            'Pokémon': 'Покемон'
        };

        Object.keys(titleReplacements).forEach(oldText => {
            if (document.title.includes(oldText)) {
                document.title = document.title.replace(oldText, titleReplacements[oldText]);
            }
        });

        // Дополнительные замены, такие как official, cancelled и т. д.
        handleSpecialReplacements();
    }

    // Функция для специальных замен, таких как official, cancelled и т. д.
    function handleSpecialReplacements() {
        // Замены «official»
        document.querySelectorAll('div.-title[title*="(Official)"]').forEach(element => {
            element.title = element.title.replace('(Official)', '(официальная)');
            element.textContent = element.textContent.replace('(Official)', '(официальная)');
        });

        // Замены cancelled с учётом различных форм
        document.querySelectorAll('div.-title').forEach(element => {
            const anyCancelledWordForm = /(\[|\()?(\s*CANCELLED\s*|\s*cancelled\s*|\s*Cancelled\s*)(\]|\))?/gi;
            const cancelledIsFullWord = /^\s*CANCELLED\s*$/i;

            if (!cancelledIsFullWord.test(element.textContent)) {
                element.textContent = element.textContent.replace(anyCancelledWordForm, (match, p1, p2, p3) => {
                    const prefix = p1 || '';
                    const suffix = p3 || '';
                    let replacement = `отменена`;

                    // Проверка на скобированное canceled в начале названия
                    if (/^\s*(\(\s*CANCELLED\s*\)|\[\s*CANCELLED\s*\])/.test(element.textContent)) {
                        replacement = `Отменена`;
                    }

                    return `${prefix}${replacement}${suffix}`.replace(/\s+/g, ' ').trim();
                }).replace(/([^\s])(\[|\()/g, '$1 $2');
            }

            if (!cancelledIsFullWord.test(element.title)) {
                element.title = element.title.replace(anyCancelledWordForm, (match, p1, p2, p3) => {
                    const prefix = p1 || '';
                    const suffix = p3 || '';
                    let replacement = `отменена`;

                    if (/^\s*(\(\s*CANCELLED\s*\)|\[\s*CANCELLED\s*\])/.test(element.title)) {
                        replacement = `Отменена`;
                    }

                    return `${prefix}${replacement}${suffix}`.replace(/\s+/g, ' ').trim();
                }).replace(/([^\s])(\[|\()/g, '$1 $2');
            }
        });

        // Замена ELLIE'S на «ЭЛЛИС»
        document.querySelectorAll('div.-title[title*="ELLIE\'S"]').forEach(element => {
            element.title = element.title.replace('ELLIE\'S', 'ЭЛЛИС');
            element.textContent = element.textContent.replace('ELLIE\'S', 'ЭЛЛИС');
        });
    }

    // Инициализация переводов и замены изображений после загрузки DOM
    function init() {
        translateText();
    }

    document.addEventListener('DOMContentLoaded', init);

    const observer = new MutationObserver(() => {
        clearTimeout(observer.timeout);
        observer.timeout = setTimeout(() => {
            translateText();
        }, 5);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
