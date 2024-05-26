const CardType = {
    COURSES: 'courses',
    AREAS: 'areas'
};

const Cards= {
    [CardType.COURSES]: {
        title: 'Пройденные курсы',
        select: ['Все семестры', '1 семестр', '2 семестр', '3 семестр', '4 семестр'],
        names: [
            'Веб-технологии и верстка (Смешанный курс, SkillBox)',
            'Анализ данных и искусственный интеллект (онлайн, ИТМО, ОК)',
            'Основные концепции биологии и экологии',
            'Эффективные коммуникации (онлайн, УрФУ, ОК)',
            'Теория вероятности и математическая статистика',
            'Проектирование и реализация баз данных (Онлайн, ИТМО, ОК)',
        ]
    },
    [CardType.AREAS]: {
        title: 'Выбор направления',
        select: [
            'Все направления',
            'Безопасность компьютерных систем', 
            'Инфокоммуникационные технологии и системы ', 
            'Информатика и вычислительная техника', 
            'Конструирование и технология электронных', 
            'Прикладная информатика',
            'Программная инженерия',
            'Радиотехника',
            'Управление в технических системах',
        ],
        names: [
            'Программная инженерия',
            'Прикладная информатика',
            'Радиотехника',
            'Безопасность компьютерных систем',
        ]
    },
};



export {CardType, Cards}