
"use strict";

// ==================================================
// §4. ГЕОМЕТРИЯЛЫҚ ЖӘНЕ ФИЗИКАЛЫҚ ЕСЕПТЕРДЕ
// ИНТЕГРАЛДЫ ҚОЛДАНУ
// MATH LAB PRO — BY DARKHAN
// ==================================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Геометриялық және физикалық есептерде интегралды қолдану",
  goal:
    "Анықталған интеграл арқылы жазық фигураның ауданын, " +
    "екі график арасындағы ауданды, қозғалыстағы " +
    "орын ауыстыру мен жүрілген жолды, айнымалы күштің " +
    "жұмысын және айналу денесінің көлемін есептеу."
};

// ==================================================
// 1. ТОЛЫҚ ТҮСІНДІРМЕЛЕР
// ==================================================

const theory = [
  {
    title: "Анықталған интеграл арқылы аудан табу",

    definition:
      "Егер функция берілген аралықта теріс болмаса, " +
      "оның графигі, Ox осі және аралық шекаралары " +
      "қоршаған фигураның ауданы анықталған " +
      "интегралмен есептеледі.",

    explain:
      "Мысалы, y = 2x функциясының графигін " +
      "нөлден үшке дейін қарастырайық. Оның графигі " +
      "түзу, ал берілген бөліктің астында үшбұрыш " +
      "пайда болады. Үшбұрыш ауданының формуласы " +
      "арқылы да нәтижені табуға болады. " +
      "Бірақ функция қисық болса, ауданын қарапайым " +
      "геометриялық формуламен есептеу қиындайды. " +
      "Сол кезде интеграл қолданылады. " +
      "Алдымен функцияның алғашқы функциясын " +
      "табамыз. Кейін жоғарғы шектегі мәнінен " +
      "төменгі шектегі мәнін азайтамыз. " +
      "Бұл — Ньютон–Лейбниц формуласын қолдану. " +
      "Берілген мысалда 2x функциясының алғашқы " +
      "функциясы x квадраты. Үштің квадраты тоғыз, " +
      "нөлдің квадраты нөл, сондықтан аудан тоғыз.",

    rule:
      "Функцияның таңбасын тексер. Егер функция " +
      "берілген аралықта теріс болмаса, аудан " +
      "оның анықталған интегралына тең.",

    formula:
      M`S=\int_a^b f(x)\,dx`,

    steps: [
      M`f(x)=2x`,
      M`a=0,\qquad b=3`,
      M`S=\int_0^3 2x\,dx`,
      M`F(x)=x^2`,
      M`S=F(3)-F(0)`,
      M`S=9-0=9`
    ],

    warning:
      "График Ox осінен төмен жатса, интеграл теріс " +
      "болуы мүмкін. Геометриялық аудан әрқашан " +
      "теріс емес сан болады."
  },

  {
    title: "Екі графиктің арасындағы аудан",

    definition:
      "Екі функцияның арасындағы аудан жоғарғы " +
      "графиктен төменгі графикті алып, айырманы " +
      "анықталған интегралдау арқылы табылады.",

    explain:
      "Мысалы, y = x + 2 түзуі мен y = x квадратының " +
      "нөлден бірге дейінгі бөліктерін алайық. " +
      "Осы аралықта түзу параболадан жоғары " +
      "орналасқан. Сондықтан біріншісінен " +
      "екіншісін азайтамыз. " +
      "Айырмасы x плюс екі минус x квадраты. " +
      "Интегралды есептегенде нәтижесі он үштен " +
      "алты емес, алтыдан он үш болады. " +
      "Яғни аудан алтыдан он үш шаршы бірлік. " +
      "Егер екі график аралық ішінде қиылысса, " +
      "қайсысы жоғары екенін анықтап, қажет " +
      "болса аралықты бөліктерге бөлеміз.",

    rule:
      "Жоғарғы функциядан төменгі функцияны " +
      "азайтып интегралдаймыз. Графиктердің " +
      "орындары өзгерсе, интегралды бөліктерге бөлеміз.",

    formula:
      M`S=\int_a^b(f(x)-g(x))\,dx`,

    steps: [
      M`f(x)=x+2`,
      M`g(x)=x^2`,
      M`S=\int_0^1(x+2-x^2)\,dx`,
      M`F(x)=\frac{x^2}{2}+2x-\frac{x^3}{3}`,
      M`S=\frac12+2-\frac13`,
      M`S=\frac{13}{6}`
    ],

    warning:
      "Жоғарғы және төменгі функцияларды " +
      "шатастырсаң, ауданның таңбасы қате болады."
  },

  {
    title: "Жылдамдық, орын ауыстыру және жүрілген жол",

    definition:
      "Жылдамдықтың уақыт бойынша интегралы " +
      "дененің орын ауыстыруын береді. " +
      "Ал жүрілген толық жолды табу үшін " +
      "жылдамдықтың модулін интегралдаймыз.",

    explain:
      "Дене қозғалған кезде оның жылдамдығы " +
      "уақыт бойынша өзгеруі мүмкін. Мысалы, " +
      "жылдамдық v(t) = 2t болсын. Нөлден төрт " +
      "секундқа дейін орын ауыстыруды табу үшін " +
      "2t функциясын нөлден төртке дейін " +
      "интегралдаймыз. Алғашқы функция t квадраты, " +
      "сондықтан орын ауыстыру он алты метр. " +
      "Бұл мысалда жылдамдық теріс емес, сол себепті " +
      "жүрілген жол да он алты метр. " +
      "Бірақ дене кері қозғалса, жылдамдық теріс " +
      "болуы мүмкін. Ондай кезде орын ауыстыру " +
      "мен толық жүрілген жол бірдей болмайды.",

    rule:
      "Орын ауыстыру — жылдамдық интегралы. " +
      "Жүрілген жол — жылдамдық модулінің интегралы.",

    formula:
      M`\Delta s=\int_{t_1}^{t_2}v(t)\,dt`,

    steps: [
      M`v(t)=2t`,
      M`t_1=0,\qquad t_2=4`,
      M`\Delta s=\int_0^4 2t\,dt`,
      M`\Delta s=\left.t^2\right|_0^4`,
      M`\Delta s=16`,
      M`L=\int_0^4|2t|\,dt=16`
    ],

    warning:
      "Жылдамдық таңбасын өзгертсе, толық жолды " +
      "есептегенде модуль қолдануды ұмытпа."
  },

  {
    title: "Айнымалы күштің жұмысы",

    definition:
      "Дене түзу бағытта қозғалғанда сол " +
      "бағыттағы айнымалы күштің атқаратын " +
      "жұмысы күштің орын ауыстыру бойынша " +
      "анықталған интегралына тең.",

    explain:
      "Тұрақты күш әсер еткенде жұмыс күш пен " +
      "орын ауыстырудың көбейтіндісі болады. " +
      "Ал күш қашықтыққа байланысты өзгерсе, " +
      "жай көбейту жеткіліксіз. " +
      "Мысалы, күш F(x) = 4x ньютон болсын. " +
      "Дене нөлден үш метрге дейін қозғалады. " +
      "Жұмысты табу үшін 4x функциясын " +
      "нөлден үшке дейін интегралдаймыз. " +
      "4x функциясының алғашқы функциясы 2x " +
      "квадраты, ал нәтиже он сегіз джоуль. " +
      "Бұл есепте күш қозғалыс бағытымен бағыттас. " +
      "Егер күштің проекциясы теріс болса, " +
      "жұмыс та теріс болуы мүмкін.",

    rule:
      "Айнымалы күштің қозғалыс бағытына " +
      "проекциясын орын ауыстыру бойынша интегралда.",

    formula:
      M`A=\int_a^b F(x)\,dx`,

    steps: [
      M`F(x)=4x`,
      M`a=0,\qquad b=3`,
      M`A=\int_0^3 4x\,dx`,
      M`A=\left.2x^2\right|_0^3`,
      M`A=18`,
      M`A=18\,\mathrm{J}`
    ],

    warning:
      "Күштің өлшем бірлігі — ньютон, " +
      "қашықтықтың — метр, ал жұмыстың — джоуль."
  },

  {
    title: "Айналу денесінің көлемі",

    definition:
      "Функция графигі мен Ox осі арасындағы " +
      "фигураны Ox осінен айналдырғанда пайда " +
      "болатын дененің көлемін интегралмен " +
      "есептеуге болады.",

    explain:
      "Мысалы, y = x функциясының нөлден екіге " +
      "дейінгі бөлігін Ox осінен айналдырайық. " +
      "Кеңістікте конус пайда болады. " +
      "Оның көлемін интегралмен табу үшін " +
      "функцияның квадратын алып, пи санына " +
      "көбейтеміз және нөлден екіге дейін " +
      "интегралдаймыз. x квадратының алғашқы " +
      "функциясы x кубы бөлінген үшке тең. " +
      "Нәтиже сегіз пи бөлінген үш болады. " +
      "Бұл әдіс дискілер әдісі деп аталады. " +
      "Егер айналу денесінде ішкі қуыс болса, " +
      "сыртқы радиустың квадратынан ішкі " +
      "радиустың квадратын азайтамыз.",

    rule:
      "Ox осінен айналдырғанда көлденең " +
      "қиманың ауданы pi көбейтілген радиус " +
      "квадратына тең.",

    formula:
      M`V=\pi\int_a^b[f(x)]^2\,dx`,

    steps: [
      M`f(x)=x`,
      M`a=0,\qquad b=2`,
      M`V=\pi\int_0^2x^2\,dx`,
      M`V=\pi\left.\frac{x^3}{3}\right|_0^2`,
      M`V=\frac{8\pi}{3}`
    ],

    warning:
      "Бұл формула Ox осінен айналдыруға " +
      "арналған. Басқа оське қатысты айналдырғанда " +
      "радиусты жаңадан анықтау керек."
  }
];

// ==================================================
// 2. КОНСПЕКТ ЖӘНЕ ЕСЕП ҚҰРУ
// ==================================================

function ex(q,steps,answer,label) {
  return {q,steps,answer,label};
}

function note(title,text,formula,example,a,b) {
  return {title,text,formula,example,self:[a,b]};
}

// ==================================================
// 3. 10 КОНСПЕКТ / 20 ӨЗІНДІК ЕСЕП
// ==================================================

const notes = [

  note(
    "Анықталған интегралдың мағынасы",
    "Интеграл функцияның графигі мен ось " +
    "арасындағы таңбалы ауданды сипаттайды. " +
    "Функция теріс емес болса, ол геометриялық " +
    "ауданмен бірдей болады.",

    M`\int_a^bf(x)\,dx=F(b)-F(a)`,

    [
      M`\int_0^2x\,dx`,
      M`F(x)=\frac{x^2}{2}`,
      M`\frac{2^2}{2}-0=2`
    ],

    ex(
      M`\int_0^3x\,dx`,
      [M`\left.\frac{x^2}{2}\right|_0^3`],
      M`\frac92`,
      "y = x графигінің астындағы ауданды табыңдар."
    ),

    ex(
      M`\int_0^4 2\,dx`,
      [M`\left.2x\right|_0^4`],
      M`8`,
      "y = 2 түзуінің астындағы ауданды табыңдар."
    )
  ),

  note(
    "Параболаның астындағы аудан",
    "Парабола астындағы ауданды табу үшін " +
    "дәрежелік функцияны интегралдаймыз. " +
    "x квадратының алғашқы функциясы " +
    "x кубы бөлінген үшке тең.",

    M`\int x^2\,dx=\frac{x^3}{3}+C`,

    [
      M`S=\int_0^3x^2\,dx`,
      M`S=\left.\frac{x^3}{3}\right|_0^3`,
      M`S=9`
    ],

    ex(
      M`\int_0^2x^2\,dx`,
      [M`\left.\frac{x^3}{3}\right|_0^2`],
      M`\frac83`,
      "y = x² параболасының астындағы ауданды табыңдар."
    ),

    ex(
      M`\int_1^3x^2\,dx`,
      [M`\frac{27}{3}-\frac13`],
      M`\frac{26}{3}`,
      "y = x² графигінің 1 мен 3 арасындағы ауданын табыңдар."
    )
  ),

  note(
    "Көпмүшенің интегралы",
    "Қосындының интегралы жеке мүшелердің " +
    "интегралдарының қосындысына тең. " +
    "Әр мүшені бөлек интегралдауға болады.",

    M`\int(x^2+2x)\,dx=\frac{x^3}{3}+x^2+C`,

    [
      M`\int_0^2(x^2+2x)\,dx`,
      M`\left.\left(\frac{x^3}{3}+x^2\right)\right|_0^2`,
      M`\frac83+4=\frac{20}{3}`
    ],

    ex(
      M`\int_0^2(3x^2+2)\,dx`,
      [M`\left.(x^3+2x)\right|_0^2`],
      M`12`,
      "Берілген оң функцияның графигі астындағы ауданды табыңдар."
    ),

    ex(
      M`\int_0^1(2x+3)\,dx`,
      [M`\left.(x^2+3x)\right|_0^1`],
      M`4`,
      "y = 2x + 3 графигінің астындағы ауданды табыңдар."
    )
  ),

  note(
    "Екі түзу арасындағы аудан",
    "Екі графиктің арасындағы аудан " +
    "жоғарыдағы функциядан төмендегі " +
    "функцияны азайтып интегралдау " +
    "арқылы табылады.",

    M`S=\int_a^b(f(x)-g(x))\,dx`,

    [
      M`f(x)=x+3`,
      M`g(x)=x+1`,
      M`S=\int_0^2 2\,dx=4`
    ],

    ex(
      M`f(x)=x+4,\quad g(x)=x+1`,
      [M`S=\int_0^2 3\,dx`],
      M`6`,
      "0 мен 2 арасында екі түзу арасындағы ауданды табыңдар."
    ),

    ex(
      M`f(x)=5,\quad g(x)=2`,
      [M`S=\int_1^4 3\,dx`],
      M`9`,
      "1 мен 4 арасында екі түзу арасындағы ауданды табыңдар."
    )
  ),

  note(
    "Түзу мен парабола арасындағы аудан",
    "Екі қисықтың қайсысы жоғары екенін " +
    "анықтап, интегралдың ішінде жоғарғы " +
    "функциядан төменгі функцияны азайтамыз.",

    M`S=\int_a^b(f(x)-g(x))\,dx`,

    [
      M`f(x)=2x`,
      M`g(x)=x^2`,
      M`S=\int_0^2(2x-x^2)\,dx`,
      M`S=\frac43`
    ],

    ex(
      M`f(x)=x,\quad g(x)=x^2`,
      [
        M`S=\int_0^1(x-x^2)\,dx`,
        M`S=\frac12-\frac13`
      ],
      M`\frac16`,
      "0 мен 1 арасында екі графиктің ауданын табыңдар."
    ),

    ex(
      M`f(x)=2,\quad g(x)=x`,
      [
        M`S=\int_0^2(2-x)\,dx`
      ],
      M`2`,
      "0 мен 2 арасындағы екі графиктің ауданын табыңдар."
    )
  ),

  note(
    "Жылдамдықтан орын ауыстыруды табу",
    "Дененің жылдамдығын уақыт бойынша " +
    "интегралдау арқылы орын ауыстыруды " +
    "табуға болады.",

    M`\Delta s=\int_{t_1}^{t_2}v(t)\,dt`,

    [
      M`v(t)=3t^2`,
      M`\Delta s=\int_0^2 3t^2\,dt`,
      M`\Delta s=\left.t^3\right|_0^2=8`
    ],

    ex(
      M`v(t)=2t`,
      [M`\Delta s=\int_0^5 2t\,dt`],
      M`25`,
      "0–5 секунд аралығындағы орын ауыстыруды метрмен табыңдар."
    ),

    ex(
      M`v(t)=6`,
      [M`\Delta s=\int_1^4 6\,dt`],
      M`18`,
      "1–4 секунд аралығындағы орын ауыстыруды метрмен табыңдар."
    )
  ),

  note(
    "Орын ауыстыру мен жолдың айырмашылығы",
    "Орын ауыстыру бағытқа тәуелді. " +
    "Толық жүрілген жол әрқашан теріс " +
    "емес және жылдамдықтың модулімен " +
    "есептеледі.",

    M`L=\int_{t_1}^{t_2}|v(t)|\,dt`,

    [
      M`v(t)=t-1`,
      M`\Delta s=\int_0^2(t-1)\,dt=0`,
      M`L=\int_0^2|t-1|\,dt=1`
    ],

    ex(
      M`v(t)=t-2`,
      [
        M`\Delta s=\int_0^4(t-2)\,dt`,
        M`L=\int_0^4|t-2|\,dt`
      ],
      M`L=4`,
      "0–4 секундтағы толық жүрілген жолды табыңдар."
    ),

    ex(
      M`v(t)=-3`,
      [
        M`\Delta s=\int_0^2(-3)\,dt=-6`,
        M`L=\int_0^2 3\,dt=6`
      ],
      M`L=6`,
      "0–2 секундтағы толық жүрілген жолды табыңдар."
    )
  ),

  note(
    "Айнымалы күштің жұмысы",
    "Күш қашықтыққа байланысты өзгерсе, " +
    "оның атқарған жұмысын интегралмен табамыз.",

    M`A=\int_a^b F(x)\,dx`,

    [
      M`F(x)=2x`,
      M`A=\int_0^3 2x\,dx`,
      M`A=9\,\mathrm J`
    ],

    ex(
      M`F(x)=5x`,
      [
        M`A=\int_0^2 5x\,dx`,
        M`A=\left.\frac{5x^2}{2}\right|_0^2`
      ],
      M`10\,\mathrm J`,
      "0–2 метрде күш атқарған жұмысты джоульмен табыңдар."
    ),

    ex(
      M`F(x)=4`,
      [M`A=\int_0^5 4\,dx`],
      M`20\,\mathrm J`,
      "0–5 метрде күш атқарған жұмысты джоульмен табыңдар."
    )
  ),

  note(
    "Айналу денесінің көлемі",
    "Фигура Ox осінен айналғанда көлем " +
    "функция квадратының интегралына " +
    "пи санын көбейту арқылы табылады.",

    M`V=\pi\int_a^b[f(x)]^2\,dx`,

    [
      M`f(x)=x`,
      M`V=\pi\int_0^2x^2\,dx`,
      M`V=\frac{8\pi}{3}`
    ],

    ex(
      M`f(x)=2`,
      [M`V=\pi\int_0^3 4\,dx`],
      M`12\pi`,
      "0–3 аралығында Ox осінен айналу көлемін табыңдар."
    ),

    ex(
      M`f(x)=x`,
      [M`V=\pi\int_0^3x^2\,dx`],
      M`9\pi`,
      "0–3 аралығында Ox осінен айналу көлемін табыңдар."
    )
  ),

  note(
    "Аралық пен өлшем бірліктерін тексеру",
    "Есеп шығарарда шектерді, функцияның " +
    "таңбасын және нәтижесінің өлшем " +
    "бірлігін міндетті түрде тексереміз.",

    M`\int_a^b f(x)\,dx=F(b)-F(a)`,

    [
      M`f(x)=4x`,
      M`\int_1^3 4x\,dx`,
      M`\left.2x^2\right|_1^3`,
      M`18-2=16`
    ],

    ex(
      M`\int_1^2 6x\,dx`,
      [M`\left.3x^2\right|_1^2`],
      M`9`,
      "Анықталған интегралдың мәнін табыңдар."
    ),

    ex(
      M`\int_2^4 3\,dx`,
      [M`\left.3x\right|_2^4`],
      M`6`,
      "Анықталған интегралдың мәнін табыңдар."
    )
  )
];

// ==================================================
// 4. ДЕҢГЕЙЛІК ЕСЕПТЕР
// ==================================================

function task(q,options,correct,steps,label="") {
  return {q,options,correct,steps,label};
}

const levels = [
  {
    name:"I деңгей — Жеңіл",
    points:5,
    tasks:[
      task(
        M`\int_0^2 x\,dx`,
        ["2","4","1","8"],0,
        [M`\left.\frac{x^2}{2}\right|_0^2=2`],
        "Интегралды есептеңдер."
      ),
      task(
        M`\int_0^3 2\,dx`,
        ["3","6","9","2"],1,
        [M`\left.2x\right|_0^3=6`],
        "y = 2 функциясының астындағы ауданды табыңдар."
      ),
      task(
        M`\int_0^2 3x^2\,dx`,
        ["6","12","8","4"],2,
        [M`\left.x^3\right|_0^2=8`],
        "Интегралды есептеңдер."
      ),
      task(
        M`\int_1^4 1\,dx`,
        ["1","4","2","3"],3,
        [M`\left.x\right|_1^4=3`],
        "Интегралды есептеңдер."
      ),
      task(
        M`\int_0^1 4x\,dx`,
        ["2","4","1","8"],0,
        [M`\left.2x^2\right|_0^1=2`],
        "Интегралды есептеңдер."
      )
    ]
  },
  {
    name:"II деңгей — Орташа",
    points:10,
    tasks:[
      task(
        M`\int_0^2(x+1)\,dx`,
        ["2","4","6","3"],1,
        [
          M`\left.\left(\frac{x^2}{2}+x\right)\right|_0^2`,
          M`2+2=4`
        ],
        "Қисық астындағы ауданды табыңдар."
      ),
      task(
        M`\int_0^3x^2\,dx`,
        ["3","6","9","12"],2,
        [M`\left.\frac{x^3}{3}\right|_0^3=9`],
        "Парабола астындағы ауданды табыңдар."
      ),
      task(
        M`\int_0^2(4-x)\,dx`,
        ["4","5","8","6"],3,
        [M`\left.(4x-\frac{x^2}{2})\right|_0^2=6`],
        "Ауданды табыңдар."
      ),
      task(
        M`v(t)=3t`,
        ["6","9","12","18"],0,
        [M`\Delta s=\int_0^2 3t\,dt=6`],
        "0–2 секундтағы орын ауыстыруды табыңдар."
      ),
      task(
        M`F(x)=2x`,
        ["6","9","12","18"],1,
        [M`A=\int_0^3 2x\,dx=9`],
        "0–3 метрдегі жұмысты джоульмен табыңдар."
      )
    ]
  },
  {
    name:"III деңгей — Қиын",
    points:15,
    tasks:[
      task(
        M`\int_0^2(3x^2+2x)\,dx`,
        ["8","10","12","16"],2,
        [
          M`\left.(x^3+x^2)\right|_0^2`,
          M`8+4=12`
        ],
        "Интегралды есептеңдер."
      ),
      task(
        M`f(x)=2x,\quad g(x)=x^2`,
        ["2","2/3","1","4/3"],3,
        [
          M`S=\int_0^2(2x-x^2)\,dx`,
          M`S=\left.(x^2-\frac{x^3}{3})\right|_0^2`,
          M`S=\frac43`
        ],
        "0–2 аралығындағы екі графиктің ауданын табыңдар."
      ),
      task(
        M`v(t)=4t+2`,
        ["12","16","20","24"],0,
        [
          M`\Delta s=\int_0^2(4t+2)\,dt`,
          M`\Delta s=\left.(2t^2+2t)\right|_0^2`,
          M`\Delta s=12`
        ],
        "0–2 секундтағы орын ауыстыруды метрмен табыңдар."
      ),
      task(
        M`F(x)=3x^2`,
        ["6","8","12","24"],1,
        [M`A=\int_0^2 3x^2\,dx=8`],
        "0–2 метрдегі жұмысты джоульмен табыңдар."
      ),
      task(
        M`\int_1^3 2x\,dx`,
        ["6","4","8","10"],2,
        [M`\left.x^2\right|_1^3=9-1=8`],
        "Анықталған интегралды есептеңдер."
      )
    ]
  },
  {
    name:"IV деңгей — Өте қиын",
    points:20,
    tasks:[
      task(
        M`f(x)=x,\quad g(x)=x^2`,
        ["1/2","1/3","1","1/6"],3,
        [
          M`S=\int_0^1(x-x^2)\,dx`,
          M`S=\frac12-\frac13=\frac16`
        ],
        "0–1 аралығындағы екі графиктің ауданын табыңдар."
      ),
      task(
        M`V=\pi\int_0^2x^2\,dx`,
        ["8π/3","4π","2π","8π"],0,
        [
          M`V=\pi\left.\frac{x^3}{3}\right|_0^2`,
          M`V=\frac{8\pi}{3}`
        ],
        "Ox осінен айналу денесінің көлемін табыңдар."
      ),
      task(
        M`v(t)=t-2`,
        ["2","4","0","8"],1,
        [
          M`L=\int_0^4|t-2|\,dt`,
          M`L=\int_0^2(2-t)\,dt+\int_2^4(t-2)\,dt`,
          M`L=2+2=4`
        ],
        "0–4 секундтағы толық жүрілген жолды табыңдар."
      ),
      task(
        M`F(x)=4x^3`,
        ["8","12","16","32"],2,
        [M`A=\int_0^2 4x^3\,dx=16`],
        "0–2 метр аралығындағы жұмысты табыңдар."
      ),
      task(
        M`f(x)=x+1,\quad g(x)=x^2`,
        ["3/2","7/6","4/3","13/6"],3,
        [
          M`S=\int_0^1(x+1-x^2)\,dx`,
          M`S=\frac12+1-\frac13`,
          M`S=\frac76`
        ],
        "0–1 аралығындағы екі графиктің ауданын табыңдар."
      )
    ]
  }
];

// ==================================================
// 5. 3 ТОП — 15 ОЙЫН СҰРАҒЫ
// ==================================================

const quiz = [
  {
    q:"Анықталған интегралдың негізгі қолданылуы?",
    a:["Ауданды есептеу","Тек санды көбейту","Санды жуықтау","Теңдеуді көшіру"],
    c:0
  },
  {
    q:"Ньютон–Лейбниц формуласында не азайтылады?",
    a:["f(a)+f(b)","F(b)−F(a)","F(a)+F(b)","b+a"],
    c:1
  },
  {
    q:"x² функциясының алғашқы функциясы?",
    a:["2x","x²","x³/3+C","3x"],
    c:2
  },
  {
    q:"Екі график арасындағы ауданның интегралындағы өрнек?",
    a:["f+g","fg","f/g","Жоғарғы функция − төменгі функция"],
    c:3
  },
  {
    q:"Жылдамдықты уақыт бойынша интегралдасақ не табылады?",
    a:["Орын ауыстыру","Масса","Күш","Қысым"],
    c:0
  },
  {
    q:"Толық жүрілген жолда қандай өрнек қолданылады?",
    a:["v²","|v(t)|","1/v","−v"],
    c:1
  },
  {
    q:"Айнымалы күштің жұмысы қалай табылады?",
    a:["F+S","F/S","Күштің интегралы","Тек масса арқылы"],
    c:2
  },
  {
    q:"Жұмыстың SI өлшем бірлігі?",
    a:["Метр","Секунд","Ньютон","Джоуль"],
    c:3
  },
  {
    q:"Жазық фигураның ауданы қандай сан?",
    a:["Теріс емес","Міндетті түрде теріс","Әрқашан нөл","Жорамал"],
    c:0
  },
  {
    q:"∫₀² x dx нәтижесі?",
    a:["1","2","3","4"],
    c:1
  },
  {
    q:"Ox осінен айналу көлемінің формуласында не бар?",
    a:["Тек f(x)","Тек x","π және f(x)²","Тек sin x"],
    c:2
  },
  {
    q:"∫₀³ 2 dx нәтижесі?",
    a:["2","3","5","6"],
    c:3
  },
  {
    q:"Жылдамдық теріс болса, орын ауыстыру мен жол бірдей ме?",
    a:["Әрқашан емес","Әрқашан бірдей","Екеуі де нөл","Екеуі де теріс"],
    c:0
  },
  {
    q:"v(t)=4 болса, 0–3 секундтағы жол?",
    a:["7","12","4","3"],
    c:1
  },
  {
    q:"∫₀¹ 3x² dx нәтижесі?",
    a:["3","2","1","0"],
    c:2
  }
];

// ==================================================
// 6. ҮЙ ТАПСЫРМАСЫ
// ==================================================

const homework = [
  {
    title:"1. Геометриялық есеп",

    text:
      "Дәптерге координаталар жүйесін сызыңдар. " +
      "y = x² және y = 4 функцияларының " +
      "0 мен 2 арасындағы графиктерін кескіндеңдер. " +
      "Қай график жоғары жатқанын анықтап, " +
      "екі график арасындағы ауданды интеграл " +
      "арқылы есептеңдер.",

    formulas:[
      M`f(x)=4`,
      M`g(x)=x^2`,
      M`S=\int_0^2(4-x^2)\,dx`
    ]
  },
  {
    title:"2. Физикалық есеп",

    text:
      "Дененің жылдамдығы уақыт бойынша " +
      "v(t) = 3t² формуласымен өзгереді. " +
      "Нөлден үш секундқа дейінгі орын " +
      "ауыстыруын есептеңдер. Қандай формула " +
      "қолданғандарыңды және шыққан санның " +
      "өлшем бірлігін түсіндіріңдер.",

    formulas:[
      M`v(t)=3t^2`,
      M`\Delta s=\int_0^3v(t)\,dt`
    ]
  },
  {
    title:"3. Ауызша түсіндіру",

    text:
      "«Интеграл өмірде не үшін қажет?» " +
      "тақырыбында дәптерге 10–12 сөйлем жазыңдар. " +
      "Геометриядан екі, физикадан екі қолдану " +
      "мысалын келтіріңдер. " +
      "Келесі сабақта бір формуланы тақтада " +
      "түсіндіріп, мысал келтіріңдер.",

    formulas:[
      M`S=\int_a^b f(x)\,dx`,
      M`A=\int_a^bF(x)\,dx`
    ]
  }
];

// ==================================================
// 7. СЛАЙДТАРДЫ ҚҰРАСТЫРУ
// ==================================================

const slides=[{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i)=>{
  slides.push({
    type:"theory",
    index:i,
    title:`Түсіндірме ${i+1}`
  });
});

notes.forEach((_,i)=>{
  slides.push({
    type:"note",
    index:i,
    title:`Конспект ${i+1}`
  });
});

levels.forEach((_,i)=>{
  slides.push({
    type:"level",
    index:i,
    title:`${i+1}-деңгей`
  });
});

quiz.forEach((_,i)=>{
  slides.push({
    type:"game",
    index:i,
    title:`${i%3+1}-топ — ${i+1}-сұрақ`
  });
});

slides.push(
  {type:"homework",title:"Үй жұмысы"},
  {type:"finish",title:"Қорытынды"}
);

// ==================================================
// 8. САЙТТЫҢ КҮЙІ
// ==================================================

let page=0;
let individualScore=0;
let teamScores=[0,0,0];

const levelAnswers=new Map();
const gameAnswers=new Map();
const openedSolutions=new Set();

const TOTAL_SECONDS=80*60;

let remainingSeconds=TOTAL_SECONDS;
let timerID=null;
let deadline=0;

// ==================================================
// 9. ҚАУІПСІЗ HTML ЖӘНЕ ФОРМУЛАЛАР
// ==================================================

function safe(value){
  return String(value).replace(/[&<>"']/g,ch=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  })[ch]);
}

function math(tex){
  return `<div class="math"
    data-tex="${encodeURIComponent(String(tex))}"></div>`;
}

let mathVersion=0;
let mathQueue=Promise.resolve();

function drawFormulas(){
  const version=++mathVersion;

  const elements=[
    ...$("content").querySelectorAll(".math[data-tex]")
  ].filter(el=>!el.closest("[hidden]"));

  for(const el of elements){
    el.textContent=decodeURIComponent(el.dataset.tex);
    el.classList.add("fallback");
  }

  mathQueue=mathQueue.then(async()=>{
    if(!window.MathJax)return;

    await MathJax.startup.promise;

    if(typeof MathJax.tex2svgPromise!=="function"){
      return;
    }

    for(const el of elements){
      if(version!==mathVersion)return;
      if(!el.isConnected)continue;

      const encoded=el.getAttribute("data-tex");
      if(!encoded)continue;

      const tex=decodeURIComponent(encoded);

      try {
        const node=await MathJax.tex2svgPromise(
          tex,{display:true}
        );

        if(version!==mathVersion||!el.isConnected)return;

        el.replaceChildren(node);
        el.classList.remove("fallback");
        el.removeAttribute("data-tex");

      }catch(error){
        el.textContent=tex;
        console.warn("Формула қатесі:",tex,error);
      }
    }
  }).catch(error=>{
    console.warn("MathJax қатесі:",error);
  });
}

// ==================================================
// 10. КАРТОЧКАЛАР
// ==================================================

function card(color,title,body){
  return `<section class="card ${color}">
    <h3>${safe(title)}</h3>
    ${body}
  </section>`;
}

function stepsHTML(steps){
  return steps.map((step,i)=>`
    <div class="step">
      <strong>${i+1}-қадам</strong>
      ${math(step)}
    </div>
  `).join("");
}

function solutionHTML(id,steps,answer,answerMath=true){
  const opened=openedSolutions.has(id);

  return `
    <button class="action" data-toggle="${id}">
      ${opened?"Шешу жолын жасыру":"Шешу жолын көрсету"}
    </button>

    <div class="solution" id="${id}" ${opened?"":"hidden"}>
      ${stepsHTML(steps)}
      <h3>Дұрыс жауап</h3>
      ${answerMath?math(answer):`<p>${safe(answer)}</p>`}
    </div>
  `;
}

// ==================================================
// 11. КІРІСПЕ
// ==================================================

function introHTML(){
  return `<div class="slide">
    <div class="eyebrow">
      МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
    </div>

    <h1 class="gradient">
      §4. ${safe(lesson.title)}
    </h1>

    ${card("blue","Сабақтың мақсаты",
      `<p>${safe(lesson.goal)}</p>`)}

    ${card("gold","Аудан формуласы",
      math(M`S=\int_a^b(f(x)-g(x))\,dx`))}

    ${card("purple","Физикалық жұмыс",
      math(M`A=\int_a^bF(x)\,dx`))}

    ${card("green","Сабақ мазмұны",`
      <p>5 толық түсіндірме</p>
      <p>10 конспект және 20 өзіндік есеп</p>
      <p>4 деңгейдегі 20 есеп</p>
      <p>3 командаға арналған 15 ойын</p>
      <p>Үй жұмысы және қорытынды</p>
    `)}

    ${card("blue","80 минуттық жоспар",`
      <p>Кіріспе — 5 минут</p>
      <p>Түсіндірме — 20 минут</p>
      <p>Конспект — 15 минут</p>
      <p>Деңгейлік есептер — 20 минут</p>
      <p>Командалық ойын — 15 минут</p>
      <p>Үй жұмысы және қорытынды — 5 минут</p>
    `)}
  </div>`;
}

// ==================================================
// 12. ТЕОРИЯ БЕТІ
// ==================================================

function theoryHTML(i){
  const t=theory[i];

  return `<div class="slide">
    <div class="eyebrow">ТҮСІНДІРМЕ ${i+1} / 5</div>
    <h2>${safe(t.title)}</h2>

    ${card("blue","Анықтама",
      `<p>${safe(t.definition)}</p>`)}

    ${card("purple","Толық түсіндірме",
      `<p>${safe(t.explain)}</p>`)}

    ${card("green","Негізгі ереже",
      `<p>${safe(t.rule)}</p>`)}

    ${card("gold","Негізгі формула",
      math(t.formula))}

    ${card("green","Шығарылған мысал",
      stepsHTML(t.steps))}

    ${card("red","Маңызды ескерту",
      `<p>${safe(t.warning)}</p>`)}
  </div>`;
}

// ==================================================
// 13. КОНСПЕКТ БЕТІ
// ==================================================

function noteHTML(i){
  const n=notes[i];

  return `<div class="slide">
    <div class="eyebrow">КОНСПЕКТ ${i+1} / 10</div>
    <h2>${safe(n.title)}</h2>

    <div class="notebook">
      <h3>Дәптерге жазып алыңдар</h3>
      <p>${safe(n.text)}</p>
    </div>

    ${card("gold","Формула",math(n.formula))}

    ${card("green","Шығарылған мысал",
      stepsHTML(n.example))}

    <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>

    <h2>Екі есеп</h2>

    ${n.self.map((t,j)=>`
      <section class="self-task">
        <h3>${j+1}-өзіндік есеп</h3>

        <p>${safe(t.label)}</p>

        ${math(t.q)}

        <p>Алдымен дәптерге шығарыңдар.</p>

        ${solutionHTML(
          `self_${i}_${j}`,
          t.steps,
          t.answer,
          true
        )}
      </section>
    `).join("")}
  </div>`;
}

// ==================================================
// 14. ДЕҢГЕЙЛІК ЕСЕПТЕР
// ==================================================

function levelHTML(i){
  const level=levels[i];

  return `<div class="slide">
    <div class="eyebrow">ДЕҢГЕЙ ${i+1} / 4</div>
    <h2>${safe(level.name)}</h2>

    <div class="level-header">
      <span>5 есеп</span>
      <span>Дұрыс жауап: +${level.points} ұпай</span>
    </div>

    <p>
      Алдымен дәптерге шығарып,
      төрт нұсқадан бір дұрыс жауап таңдаңдар.
    </p>

    <div class="level-grid">
      ${level.tasks.map((t,j)=>{
        const key=`${i}_${j}`;
        const selected=levelAnswers.get(key);
        const done=selected!==undefined;

        return `<section class="level-task">
          <h3>${j+1}-есеп</h3>
          <p>${safe(t.label)}</p>

          ${math(t.q)}

          <div class="answers">
            ${t.options.map((option,k)=>{
              let cls="";

              if(done){
                if(k===t.correct)cls="correct";
                else if(k===selected)cls="wrong";
              }

              return `<button
                data-task="${key}"
                data-option="${k}"
                class="${cls}"
                ${done?"disabled":""}>
                ${"ABCD"[k]}. ${safe(option)}
              </button>`;
            }).join("")}
          </div>

          <p class="feedback ${done&&selected===t.correct?"correct":""}">
            ${!done
              ?"Жауапты таңдаңдар."
              :selected===t.correct
                ?`Дұрыс! +${level.points} ұпай`
                :"Қате. Дұрыс нұсқа белгіленді."}
          </p>

          ${solutionHTML(
            `level_${key}`,
            t.steps,
            t.options[t.correct],
            false
          )}
        </section>`;
      }).join("")}
    </div>
  </div>`;
}

// ==================================================
// 15. КОМАНДАЛЫҚ ОЙЫН
// ==================================================

function gameHTML(i){
  const q=quiz[i];
  const team=i%3;
  const selected=gameAnswers.get(i);
  const done=selected!==undefined;

  return `<div class="slide">
    <div class="eyebrow">КОМАНДАЛЫҚ ОЙЫН ${i+1} / 15</div>
    <h2>${team+1}-топ жауап береді</h2>

    <div class="scores">
      ${teamScores.map((score,j)=>`
        <div class="team ${team===j?"current":""}">
          ${j+1}-топ
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("gold",`${i+1}-сұрақ`,`
      <p>${safe(q.q)}</p>

      <div class="answers">
        ${q.a.map((answer,k)=>{
          let cls="";

          if(done){
            if(k===q.c)cls="correct";
            else if(k===selected)cls="wrong";
          }

          return `<button
            data-choice="${k}"
            class="${cls}"
            ${done?"disabled":""}>
            ${"ABCD"[k]}. ${safe(answer)}
          </button>`;
        }).join("")}
      </div>

      <p>${!done
        ?"Жауапты таңдаңдар."
        :selected===q.c
          ?"Дұрыс! +10 ұпай."
          :"Дұрыс жауап: "+safe(q.a[q.c])}
      </p>
    `)}

    ${card("blue","Ойын ережесі",`
      <p>1-топ → 2-топ → 3-топ.</p>
      <p>Дұрыс жауапқа +10 ұпай.</p>
      <p>Жауаптан кейін «Келесі» басыңдар.</p>
    `)}
  </div>`;
}

// ==================================================
// 16. ҮЙ ЖҰМЫСЫ
// ==================================================

function homeworkHTML(){
  return `<div class="slide">
    <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
    <h2>Үй жұмысы</h2>

    ${homework.map((h,i)=>card(
      ["blue","gold","green"][i],
      h.title,
      `<p>${safe(h.text)}</p>`+
      h.formulas.map(math).join("")
    )).join("")}
  </div>`;
}

// ==================================================
// 17. ҚОРЫТЫНДЫ
// ==================================================

function finishHTML(){
  const finished=gameAnswers.size===quiz.length;
  const max=Math.max(...teamScores);

  const winners=teamScores
    .map((score,i)=>score===max?`${i+1}-топ`:null)
    .filter(Boolean);

  const correct=[...levelAnswers].filter(([key,value])=>{
    const [i,j]=key.split("_").map(Number);
    return value===levels[i].tasks[j].correct;
  }).length;

  return `<div class="slide">
    <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>
    <h1 class="gradient">Сабақ аяқталды!</h1>

    <div class="scores">
      ${teamScores.map((score,i)=>`
        <div class="team">
          ${i+1}-топ
          <strong>${score}</strong>
        </div>
      `).join("")}
    </div>

    ${card("green","Командалық ойын",`
      <p>Жауап берілген сұрақтар:
        ${gameAnswers.size}/15
      </p>
      <p>${finished
        ?winners.join(", ")+(winners.length===1
          ?" — жеңімпаз!":" — тең ұпай!")
        :"Ойын толық аяқталған жоқ."}
      </p>
    `)}

    ${card("blue","Деңгейлік есептер",`
      <p>Жауап берілгені: ${levelAnswers.size}/20</p>
      <p>Дұрыс жауаптар: ${correct}/20</p>
      <p>Жеке ұпай: ${individualScore}</p>
    `)}

    ${card("gold","Бүгін не үйрендік?",`
      <p>Интеграл арқылы аудан табуды үйрендік.</p>
      <p>Екі график арасындағы ауданды есептедік.</p>
      <p>Жылдамдықтан орын ауыстыру мен жолды таптық.</p>
      <p>Айнымалы күштің жұмысын анықтадық.</p>
      <p>Айналу денесінің көлемін есептедік.</p>
    `)}

    <h2>Сау болыңыздар!</h2>
  </div>`;
}

// ==================================================
// 18. БЕТТЕРДІ КӨРСЕТУ
// ==================================================

function updateScore(){
  $("totalScore").textContent=
    individualScore+
    teamScores.reduce((sum,v)=>sum+v,0);
}

function render(){
  const s=slides[page];
  mathVersion++;

  const views={
    intro:()=>introHTML(),
    theory:()=>theoryHTML(s.index),
    note:()=>noteHTML(s.index),
    level:()=>levelHTML(s.index),
    game:()=>gameHTML(s.index),
    homework:()=>homeworkHTML(),
    finish:()=>finishHTML()
  };

  $("content").innerHTML=views[s.type]();
  $("content").scrollTop=0;

  $("pageCounter").textContent=
    `${page+1} / ${slides.length}`;

  $("pageTitle").textContent=s.title;

  $("pageProgress").style.width=
    `${(page+1)/slides.length*100}%`;

  $("prevPage").disabled=page===0;
  $("nextPage").disabled=page===slides.length-1;

  document.querySelectorAll("[data-section]").forEach(btn=>{
    btn.classList.toggle(
      "active",
      btn.dataset.section===s.type
    );
  });

  updateScore();
  drawFormulas();
}

// ==================================================
// 19. СЛАЙД БАСҚАРУ
// ==================================================

$("nextPage").addEventListener("click",()=>{
  if(page<slides.length-1){
    page++;
    render();
  }
});

$("prevPage").addEventListener("click",()=>{
  if(page>0){
    page--;
    render();
  }
});

document.querySelectorAll("[data-section]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const index=slides.findIndex(
      s=>s.type===btn.dataset.section
    );

    if(index>=0){
      page=index;
      render();
    }
  });
});

// ==================================================
// 20. ТАПСЫРМАЛАРДЫҢ БАТЫРМАЛАРЫ
// ==================================================

$("content").addEventListener("click",event=>{
  const toggle=event.target.closest("[data-toggle]");

  if(toggle){
    const id=toggle.dataset.toggle;

    if(openedSolutions.has(id)){
      openedSolutions.delete(id);
    }else{
      openedSolutions.add(id);
    }

    const el=$(id);

    if(el){
      el.hidden=!openedSolutions.has(id);
      toggle.textContent=el.hidden
        ?"Шешу жолын көрсету"
        :"Шешу жолын жасыру";

      if(!el.hidden)drawFormulas();
    }
    return;
  }

  const taskBtn=event.target.closest("[data-task]");

  if(taskBtn){
    const key=taskBtn.dataset.task;
    if(levelAnswers.has(key))return;

    const [i,j]=key.split("_").map(Number);
    const selected=Number(taskBtn.dataset.option);

    levelAnswers.set(key,selected);

    if(selected===levels[i].tasks[j].correct){
      individualScore+=levels[i].points;
    }

    render();
    return;
  }

  const choice=event.target.closest("[data-choice]");

  if(choice){
    const s=slides[page];
    if(s.type!=="game")return;
    if(gameAnswers.has(s.index))return;

    const selected=Number(choice.dataset.choice);
    gameAnswers.set(s.index,selected);

    if(selected===quiz[s.index].c){
      teamScores[s.index%3]+=10;
    }

    render();
  }
});

// ==================================================
// 21. ОЙЫНДЫ ЖАҢАРТУ
// ==================================================

$("resetGame").addEventListener("click",()=>{
  gameAnswers.clear();
  teamScores=[0,0,0];
  render();
});

// ==================================================
// 22. ТОЛЫҚ ЭКРАН
// ==================================================

$("fullscreenBtn").addEventListener("click",async()=>{
  try{
    if(document.fullscreenElement){
      await document.exitFullscreen();
    }else{
      await document.documentElement.requestFullscreen();
    }
  }catch(error){
    console.warn("Толық экран қатесі:",error);
  }
});

// ==================================================
// 23. ТАЙМЕР
// ==================================================

function formatTime(seconds){
  return String(Math.floor(seconds/60)).padStart(2,"0")+
    ":"+String(seconds%60).padStart(2,"0");
}

function updateTimer(){
  $("remaining").textContent=formatTime(remainingSeconds);

  $("elapsed").textContent=
    formatTime(TOTAL_SECONDS-remainingSeconds);

  $("timeProgress").style.width=
    `${(TOTAL_SECONDS-remainingSeconds)/TOTAL_SECONDS*100}%`;
}

function pauseTimer(){
  if(timerID!==null){
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );

    clearInterval(timerID);
    timerID=null;
    updateTimer();
  }
}

function startTimer(){
  if(timerID!==null||remainingSeconds<=0)return;

  deadline=Date.now()+remainingSeconds*1000;

  timerID=setInterval(()=>{
    remainingSeconds=Math.max(
      0,Math.ceil((deadline-Date.now())/1000)
    );

    updateTimer();

    if(remainingSeconds===0){
      clearInterval(timerID);
      timerID=null;
    }
  },250);
}

function resetTimer(){
  if(timerID!==null)clearInterval(timerID);

  timerID=null;
  remainingSeconds=TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click",startTimer);
$("timerPause").addEventListener("click",pauseTimer);
$("timerReset").addEventListener("click",resetTimer);

// ==================================================
// 24. АЛМАТЫ УАҚЫТЫ
// ==================================================

function updateClock(){
  $("clock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

updateClock();
setInterval(updateClock,1000);

// ==================================================
// 25. ЕКІ КАЛЬКУЛЯТОР
// ==================================================

const calcValues={basic:"",science:""};

const calcKeys={
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+","="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tan","ctg",
    "√","∛","x²","xʸ",
    "log","ln","π","e",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+","="
  ]
};

const calcMap={
  "×":"*","÷":"/","−":"-",
  "sin":"sin(","cos":"cos(",
  "tan":"tan(","ctg":"ctg(",
  "√":"sqrt(","∛":"cbrt(",
  "log":"log(","ln":"ln(",
  "π":"pi","x²":"^2","xʸ":"^"
};

function createCalculator(type){
  const grid=$("keys-"+type);
  grid.replaceChildren();

  calcKeys[type].forEach(key=>{
    const btn=document.createElement("button");

    btn.type="button";
    btn.textContent=key;

    if(key==="C")btn.classList.add("clear");
    if(key==="=")btn.classList.add("equal");

    if(["sin","cos","tan","ctg","log","ln"].includes(key)){
      btn.classList.add("trig");
    }

    if(["×","÷","−","+","√","∛","x²","xʸ"].includes(key)){
      btn.classList.add("op");
    }

    btn.addEventListener("click",()=>pressCalculator(type,key));
    grid.appendChild(btn);
  });
}

function pressCalculator(type,key){
  let value=calcValues[type];

  if(key==="C"){
    value="";
  }else if(key==="⌫"){
    value=value==="Қате"?"":value.slice(0,-1);
  }else if(key==="="){
    try{
      value=String(Number(calculate(value).toPrecision(12)));
    }catch(error){
      value="Қате";
    }
  }else{
    if(value==="Қате")value="";
    value+=calcMap[key]??key;
  }

  calcValues[type]=value;

  const display=$("display-"+type);
  display.textContent=value||"0";
  display.scrollLeft=display.scrollWidth;
}

// ==================================================
// 26. ҚАУІПСІЗ ЕСЕПТЕУ ЖҮЙЕСІ
// ==================================================

function calculate(input){
  const source=String(input)
    .replace(/\s+/g,"")
    .replace(/,/g,".")
    .replace(/−/g,"-")
    .replace(/×/g,"*")
    .replace(/÷/g,"/");

  let pos=0;
  const rad=x=>x*Math.PI/180;

  const funcs={
    sin:x=>Math.sin(rad(x)),
    cos:x=>Math.cos(rad(x)),

    tan:x=>{
      if(Math.abs(Math.cos(rad(x)))<1e-12)
        throw Error("Тангенс анықталмаған");

      return Math.tan(rad(x));
    },

    ctg:x=>{
      if(Math.abs(Math.sin(rad(x)))<1e-12)
        throw Error("Котангенс анықталмаған");

      return Math.cos(rad(x))/Math.sin(rad(x));
    },

    sqrt:Math.sqrt,
    cbrt:Math.cbrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(char){
    if(source[pos]===char){
      pos++;
      return true;
    }
    return false;
  }

  function atom(){
    if(take("(")){
      const value=expression();
      if(!take(")"))throw Error("Жақша қатесі");
      return value;
    }

    const rest=source.slice(pos);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number){
      pos+=number[0].length;
      return Number(number[0]);
    }

    for(const name of Object.keys(funcs)){
      if(rest.startsWith(name+"(")){
        pos+=name.length+1;

        const argument=expression();
        if(!take(")"))throw Error("Жақша қатесі");

        const result=funcs[name](argument);
        if(!Number.isFinite(result))
          throw Error("Анықталмаған мән");

        return result;
      }
    }

    if(rest.startsWith("pi")){
      pos+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")){
      pos++;
      return Math.E;
    }

    throw Error("Қате өрнек");
  }

  function postfix(){
    let value=atom();
    while(take("%"))value/=100;
    return value;
  }

  function unary(){
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function power(){
    let value=postfix();
    if(take("^"))value=Math.pow(value,unary());
    return value;
  }

  function term(){
    let value=unary();

    while(true){
      if(take("*")){
        value*=unary();
      }else if(take("/")){
        const divisor=unary();

        if(divisor===0)
          throw Error("Нөлге бөлуге болмайды");

        value/=divisor;
      }else{
        break;
      }
    }
    return value;
  }

  function expression(){
    let value=term();

    while(true){
      if(take("+"))value+=term();
      else if(take("-"))value-=term();
      else break;
    }

    return value;
  }

  if(!source)throw Error("Бос өрнек");

  const result=expression();

  if(pos!==source.length||!Number.isFinite(result))
    throw Error("Есептеу қатесі");

  return Math.abs(result)<1e-12?0:result;
}

// ==================================================
// 27. КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// ==================================================

function toggleCalculator(type){
  const el=$("calc-"+type);
  const opening=!el.classList.contains("visible");

  el.classList.toggle("visible",opening);

  if(opening){
    const rect=el.getBoundingClientRect();

    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=Math.max(
      0,Math.min(maxX,rect.left)
    )+"px";

    el.style.top=Math.max(
      0,Math.min(maxY,rect.top)
    )+"px";
  }
}

$("basicOpen").addEventListener(
  "click",()=>toggleCalculator("basic")
);

$("scienceOpen").addEventListener(
  "click",()=>toggleCalculator("science")
);

document.querySelectorAll("[data-close]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("calc-"+btn.dataset.close).classList.remove("visible");
  });
});

// ==================================================
// 28. КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ==================================================

function makeDraggable(el){
  const head=el.querySelector(".calc-head");
  let drag=null;

  head.addEventListener("pointerdown",event=>{
    if(event.target.closest("button"))return;
    if(event.pointerType==="mouse"&&event.button!==0)return;

    const rect=el.getBoundingClientRect();

    drag={
      id:event.pointerId,
      x:event.clientX,
      y:event.clientY,
      left:rect.left,
      top:rect.top
    };

    head.setPointerCapture(event.pointerId);
  });

  head.addEventListener("pointermove",event=>{
    if(!drag||drag.id!==event.pointerId)return;

    const maxX=Math.max(0,innerWidth-el.offsetWidth);
    const maxY=Math.max(0,innerHeight-el.offsetHeight);

    el.style.left=Math.max(
      0,
      Math.min(maxX,drag.left+event.clientX-drag.x)
    )+"px";

    el.style.top=Math.max(
      0,
      Math.min(maxY,drag.top+event.clientY-drag.y)
    )+"px";
  });

  head.addEventListener("pointerup",()=>drag=null);
  head.addEventListener("pointercancel",()=>drag=null);
}

// ==================================================
// 29. БАСТАПҚЫ ТЕКСЕРУЛЕР
// ==================================================

function runChecks(){
  const check=(condition,message)=>{
    if(!condition)throw Error(message);
  };

  check(theory.length===5,"5 түсіндірме болуы керек");
  check(notes.length===10,"10 конспект болуы керек");

  check(
    notes.every(n=>n.self.length===2),
    "Әр конспектте екі есеп болуы керек"
  );

  check(levels.length===4,"4 деңгей болуы керек");

  check(
    levels.every(l=>l.tasks.length===5),
    "Әр деңгейде 5 есеп болуы керек"
  );

  check(quiz.length===15,"15 сұрақ болуы керек");
  check(slides.length===37,"37 слайд болуы керек");

  levels.forEach((level,i)=>{
    level.tasks.forEach((t,j)=>{
      check(
        t.options.length===4 &&
        Number.isInteger(t.correct) &&
        t.correct>=0 &&
        t.correct<4,
        `Деңгейлік есеп ${i+1}.${j+1} қате`
      );

      check(
        Boolean(t.label),
        `Есеп шарты жоқ: ${i+1}.${j+1}`
      );
    });
  });

  quiz.forEach((q,i)=>{
    check(
      q.a.length===4 &&
      Number.isInteger(q.c) &&
      q.c>=0 &&
      q.c<4,
      `Ойын сұрағы ${i+1} қате`
    );
  });

  const formulas=[
    ...theory.flatMap(t=>[t.formula,...t.steps]),

    ...notes.flatMap(n=>[
      n.formula,
      ...n.example,
      ...n.self.flatMap(t=>[
        t.q,...t.steps,t.answer
      ])
    ]),

    ...levels.flatMap(l=>
      l.tasks.flatMap(t=>[t.q,...t.steps])
    ),

    ...homework.flatMap(h=>h.formulas)
  ];

  check(
    formulas.every(f=>
      typeof f==="string" &&
      !/\\text\s*\{|\\boxed/.test(f)
    ),
    "Формула ішінде қолдау көрсетілмейтін мәтін бар"
  );

  check(calculate("2^5")===32,"Дәреже қатесі");
  check(calculate("8/4")===2,"Бөлу қатесі");
  check(calculate("log(100)")===2,"Логарифм қатесі");

  check(
    Math.abs(calculate("sin(30)")-0.5)<1e-10,
    "Тригонометрия қатесі"
  );

  const near=(a,b)=>Math.abs(a-b)<1e-10;

  check(
    near((3**2)/2,4.5),
    "Аудан есебінің қатесі"
  );

  check(
    near(4-8/3,4/3),
    "Екі график арасындағы аудан қатесі"
  );

  check(
    near(2*3**2,18),
    "Физикалық жұмыс есебінің қатесі"
  );

  check(
    near(Math.PI*8/3,8*Math.PI/3),
    "Көлем есебінің қатесі"
  );

  check(
    levels[3].tasks[0].options[
      levels[3].tasks[0].correct
    ]==="1/6",
    "IV деңгей, 1-есеп жауабы қате"
  );

  check(
    levels[3].tasks[1].options[
      levels[3].tasks[1].correct
    ]==="8π/3",
    "IV деңгей, 2-есеп жауабы қате"
  );

  console.log(
    "§4: құрылымдық және негізгі есептеу тексерулері өтті."
  );
}

// ==================================================
// 30. САЙТТЫ ІСКЕ ҚОСУ
// ==================================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
