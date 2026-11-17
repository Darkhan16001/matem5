
"use strict";

const $ = id => document.getElementById(id);
const T = String.raw;

const lesson = {
  title: "Анықталған интеграл. Ньютон–Лейбниц формуласы",
  page: 21,
  goal: "Анықталған интегралдың мағынасын түсіну, алғашқы функцияны дұрыс табу, интегралдау шекараларын қолдану және Ньютон–Лейбниц формуласы бойынша есеп шығару."
};

// 5 ТҮСІНДІРМЕ
const theory = [
  {
    title: "Анықталған интеграл деген не?",
    definition:
      "Анықталған интеграл — функцияның белгілі бір аралықтағы интегралын есептегенде алынатын сан. Ол төменгі және жоғарғы шекара арқылы беріледі.",
    explain:
      "Мысалы, 0 мен 2 аралығында 2x функциясын интегралдау қажет болсын. Біз алдымен оның алғашқы функциясын табамыз. Одан кейін жоғарғы шекарадағы мәнді және төменгі шекарадағы мәнді есептеп, айырмасын аламыз. Нәтиже нақты сан болады.",
    another:
      "Анықталмаған интегралдан айырмашылығы — мұнда екі шекара көрсетілген. Анықталмаған интеграл функциялар жиынын береді, ал анықталған интеграл сандық мән береді.",
    formula: T`\int_a^b f(x)\,dx`,
    warning:
      "Анықталған интегралдың жауабына +C жазылмайды. Сонымен қатар интеграл мәні теріс болуы да мүмкін.",
    example: T`\int_0^2 2x\,dx=4`
  },
  {
    title: "Төменгі және жоғарғы шекара",
    definition:
      "Интеграл таңбасының төменгі жағындағы a саны — төменгі шекара, жоғарғы жағындағы b саны — жоғарғы шекара.",
    explain:
      "Мысалы, 1-ден 4-ке дейінгі интегралда a=1, b=4. Алғашқы функцияны есептеу барысында алдымен 4-ті, содан кейін 1-ді қоямыз. Бірінші нәтижеден екінші нәтижені азайтамыз.",
    another:
      "Шекаралар орын ауыстырса, интегралдың таңбасы керісінше өзгереді. Ал екі шекара бірдей болса, интеграл нөл болады.",
    formula: T`\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx`,
    warning:
      "Жиі кездесетін қате — F(a)−F(b) деп есептеу. Дұрыс реті: F(b)−F(a).",
    example: T`\int_1^3 2x\,dx=9-1=8`
  },
  {
    title: "Ньютон–Лейбниц формуласы",
    definition:
      "Ньютон–Лейбниц формуласы анықталған интегралды алғашқы функцияның екі шекарадағы мәндерінің айырмасы арқылы есептейді.",
    explain:
      "Бірінші қадам: интеграл астындағы f(x) функциясының F(x) алғашқы функциясын табамыз. Екінші қадам: F(b) мәнін есептейміз. Үшінші қадам: F(a) мәнін есептейміз. Төртінші қадам: F(b)−F(a) айырмасын табамыз.",
    another:
      "Мысалы, 6x функциясының алғашқы функциясы 3x² болады. Егер шекаралар 1 мен 3 болса, 3·3²−3·1²=27−3=24.",
    formula: T`\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}`,
    warning:
      "Формуланы қолдану үшін F′(x)=f(x) екені дұрыс болуы тиіс. Алғашқы функцияны қате тапсаңдар, барлық есеп қате шығады.",
    example: T`\int_1^3 6x\,dx=24`
  },
  {
    title: "Дәрежелік функцияны интегралдау",
    definition:
      "Дәрежелік функцияның алғашқы функциясын табу үшін көрсеткішіне бір қосып, шыққан көрсеткішке бөлеміз. Бұл тәсіл көрсеткіш −1 болмаған жағдайда орындалады.",
    explain:
      "Мысалы, x² функциясын интегралдасақ, көрсеткіші 2-ден 3-ке өседі. Алғашқы функция x³/3 болады. Егер интеграл шекаралары 0 және 3 болса, нәтиже 27/3−0=9.",
    another:
      "Бірнеше мүшеден тұратын көпмүшеліктің интегралын есептегенде әрбір мүшені жеке интегралдауға болады. Бұл есепті жеңілдетеді.",
    formula: T`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne-1`,
    warning:
      "Дәреже көрсеткішін арттырған соң жаңа көрсеткішке бөлуді ұмытпаңдар. Мысалы, x² интегралы x³ емес, x³/3 болады.",
    example: T`\int_0^3 x^2\,dx=\left.\frac{x^3}{3}\right|_0^3=9`
  },
  {
    title: "Интегралдың қасиеттері",
    definition:
      "Анықталған интегралдың бірнеше қасиеті бар: бірдей шекарада нөлге тең болуы, шекара ауысқанда таңба өзгеруі және аралық бойынша қосылуы.",
    explain:
      "Егер a мен b аралығында c нүктесі орналасса, бүкіл аралықтағы интегралды [a;c] және [c;b] аралықтарына бөліп есептеуге болады. Жеке интегралдардың қосындысы бастапқы интегралға тең.",
    another:
      "Интеграл астындағы тұрақты көбейткішті интеграл алдына шығаруға болады. Ал қосындының интегралын әрбір мүшені жеке интегралдау арқылы есептейміз.",
    formula: T`\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx`,
    warning:
      "Интеграл қасиеттерін қолданғанда шекаралардың ретіне назар аударыңдар.",
    example: T`\int_0^3 2x\,dx=\int_0^1 2x\,dx+\int_1^3 2x\,dx=1+8=9`
  }
];

// 10 КОНСПЕКТ — МӘТІН, ФОРМУЛА, МЫСАЛ
const notes = [
  {
    title: "Анықталған интеграл",
    text:
      "Анықталған интеграл — функцияның белгілі бір аралық бойынша интегралын сипаттайтын сан. Ол интеграл таңбасының төменгі және жоғарғы шекаралары арқылы беріледі. Анықталған интегралдың мәні функцияға және таңдалған шекараларға тәуелді болады.",
    explain:
      "Мысалы, f(x)=2x функциясын [0;2] аралығында интегралдаймыз. x² алғашқы функциясы арқылы есептегенде интеграл 4-ке тең болады.",
    formula: T`\int_a^b f(x)\,dx`,
    example: T`\int_0^2 2x\,dx=4`
  },
  {
    title: "Интеграл шекаралары",
    text:
      "a — төменгі шекара, b — жоғарғы шекара. Олар алғашқы функцияның қай нүктелерде есептелетінін көрсетеді. Алдымен жоғарғы шекарадағы мән, содан кейін төменгі шекарадағы мән табылады.",
    explain:
      "Мысалы, шекаралар 1 және 3 болса, F(3)−F(1) есептеледі. Осы айырма анықталған интегралдың мәнін береді.",
    formula: T`a=1,\quad b=3`,
    example: T`F(3)-F(1)`
  },
  {
    title: "Алғашқы функция",
    text:
      "F(x) функциясының туындысы f(x)-ке тең болса, F(x) функциясы f(x)-тің алғашқы функциясы болады. Ньютон–Лейбниц формуласын қолдану үшін алдымен осы алғашқы функцияны табамыз.",
    explain:
      "Мысалы, 4x³ функциясының алғашқы функциясы x⁴, себебі x⁴ туындысы 4x³ болады.",
    formula: T`F'(x)=f(x)`,
    example: T`(x^4)'=4x^3`
  },
  {
    title: "Ньютон–Лейбниц формуласы",
    text:
      "Анықталған интеграл алғашқы функцияның жоғарғы шекарадағы мәнінен төменгі шекарадағы мәнін азайту арқылы табылады. Бұл ереже Ньютон–Лейбниц формуласы деп аталады.",
    explain:
      "Алғашқы функцияны F(x) деп белгілейміз. Одан кейін F(b) және F(a) мәндерін есептейміз. Есептің соңында олардың айырмасын аламыз.",
    formula: T`\int_a^b f(x)\,dx=F(b)-F(a)`,
    example: T`\int_1^2 2x\,dx=4-1=3`
  },
  {
    title: "Шекаралық жазылу",
    text:
      "Алғашқы функцияның екі шекарадағы мәндерінің айырмасын ықшам жазу үшін тік сызық таңбасы қолданылады. Бұл белгі жоғарғы және төменгі мәндерді қою керектігін білдіреді.",
    explain:
      "Мысалы, x² функциясын 1-ден 3-ке дейін есептегенде x² өрнегінің жанына 1 және 3 шекаралары жазылады.",
    formula: T`\left.F(x)\right|_a^b=F(b)-F(a)`,
    example: T`\left.x^2\right|_1^3=9-1=8`
  },
  {
    title: "Бірдей шекаралар",
    text:
      "Егер анықталған интегралдың жоғарғы және төменгі шекаралары бірдей болса, интеграл нөлге тең. Өйткені алғашқы функцияның бір нүктедегі мәнінен сол мәннің өзін азайтамыз.",
    explain:
      "Мысалы, 2-ден 2-ге дейінгі кез келген үздіксіз функцияның анықталған интегралы нөл болады.",
    formula: T`\int_a^a f(x)\,dx=0`,
    example: T`\int_2^2 x^3\,dx=0`
  },
  {
    title: "Шекараларды алмастыру",
    text:
      "Анықталған интегралдың шекараларын кері ретпен жазсақ, интегралдың таңбасы өзгереді. Сондықтан есеп шығарғанда шекара ретін өзгертіп алуға болмайды.",
    explain:
      "Егер 1-ден 3-ке дейінгі интеграл 8 болса, 3-тен 1-ге дейінгі дәл сол функцияның интегралы −8 болады.",
    formula: T`\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx`,
    example: T`\int_3^1 2x\,dx=-8`
  },
  {
    title: "Тұрақты көбейткіш",
    text:
      "Интеграл астындағы функция тұрақты санға көбейтілсе, сол тұрақты көбейткішті интеграл таңбасының алдына шығаруға болады. Бұл ереже есептеуді жеңілдетеді.",
    explain:
      "Мысалы, 5x функциясының интегралын табу үшін 5 санын интеграл алдына шығаруға болады.",
    formula: T`\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx`,
    example: T`\int_0^2 5x\,dx=5\cdot\frac{2^2}{2}=10`
  },
  {
    title: "Интегралды аралықтарға бөлу",
    text:
      "Интегралдау аралығын бірнеше бөлікке бөліп, әр бөліктің интегралын жеке есептеуге болады. Барлық бөліктің интегралдарының қосындысы толық интегралға тең болады.",
    explain:
      "Мысалы, 0-ден 4-ке дейінгі аралықты 0-ден 2-ге және 2-ден 4-ке дейінгі аралықтарға бөлуге болады.",
    formula: T`\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx`,
    example: T`\int_0^4 2x\,dx=4+12=16`
  },
  {
    title: "Анықталған интегралдың геометриялық мағынасы",
    text:
      "Егер функция [a;b] аралығында үздіксіз және теріс емес болса, оның анықталған интегралы функция графигі мен Ox осінің арасындағы қисықсызықты трапецияның ауданына тең болады.",
    explain:
      "Мысалы, y=2x графигі [0;2] аралығында Ox осінен жоғары орналасқан. Осы фигураның ауданы интеграл арқылы 4 квадрат бірлікке тең.",
    formula: T`S=\int_a^b f(x)\,dx,\qquad f(x)\geq0`,
    example: T`S=\int_0^2 2x\,dx=4`
  }
];

// НЕГІЗГІ ФОРМУЛАЛАР
const formulas = [
  ["Ньютон–Лейбниц формуласы",
    T`\boxed{\int_a^b f(x)\,dx=F(b)-F(a)}`],
  ["Алғашқы функция",
    T`F'(x)=f(x)`],
  ["Дәрежелік функция",
    T`\int x^n\,dx=\frac{x^{n+1}}{n+1}+C,\quad n\ne-1`],
  ["Тұрақты көбейткіш",
    T`\int_a^b kf(x)\,dx=k\int_a^b f(x)\,dx`],
  ["Шекаралардың ауысуы",
    T`\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx`],
  ["Бірдей шекара",
    T`\int_a^a f(x)\,dx=0`]
];

// 4 ШЫҒАРЫЛҒАН ЕСЕП
const examples = [
  {
    title: "1-есеп. Сызықтық функция",
    question: T`\int_1^3 2x\,dx`,
    explain:
      "2x функциясының алғашқы функциясы x². Жоғарғы шекара 3, төменгі шекара 1. Алдымен x=3, кейін x=1 қоямыз.",
    steps: [
      ["Алғашқы функцияны табамыз",T`F(x)=x^2`],
      ["Жоғарғы шекара мәні",T`F(3)=3^2=9`],
      ["Төменгі шекара мәні",T`F(1)=1^2=1`],
      ["Айырмасын есептейміз",T`9-1=8`]
    ],
    answer:T`\boxed{8}`
  },
  {
    title: "2-есеп. Квадраттық функция",
    question: T`\int_0^2 3x^2\,dx`,
    explain:
      "3x² функциясының алғашқы функциясы x³. Екі шекарадағы мәндерді есептеп, айырмасын табамыз.",
    steps: [
      ["Алғашқы функция",T`F(x)=x^3`],
      ["Жоғарғы шекара",T`F(2)=2^3=8`],
      ["Төменгі шекара",T`F(0)=0^3=0`],
      ["Айырмасы",T`8-0=8`]
    ],
    answer:T`\boxed{8}`
  },
  {
    title: "3-есеп. Қосындыны интегралдау",
    question:T`\int_0^2(4x+3)\,dx`,
    explain:
      "Екі мүшені бөлек интегралдаймыз. 4x интегралы 2x², ал 3 интегралы 3x болады.",
    steps:[
      ["Алғашқы функция",T`F(x)=2x^2+3x`],
      ["Жоғарғы мән",T`F(2)=2\cdot4+6=14`],
      ["Төменгі мән",T`F(0)=0`],
      ["Нәтиже",T`14-0=14`]
    ],
    answer:T`\boxed{14}`
  },
  {
    title: "4-есеп. Теріс интеграл",
    question:T`\int_0^3(-2x)\,dx`,
    explain:
      "Интеграл астындағы функция теріс. Сондықтан анықталған интегралдың нәтижесі теріс сан болуы мүмкін.",
    steps:[
      ["Алғашқы функция",T`F(x)=-x^2`],
      ["Жоғарғы мән",T`F(3)=-9`],
      ["Төменгі мән",T`F(0)=0`],
      ["Айырмасы",T`-9-0=-9`]
    ],
    answer:T`\boxed{-9}`
  }
];

// ӨЗІНДІК ЖҰМЫС — 6 ЕСЕП
const selfWork = [
  {
    level:"Жеңіл",minutes:2,
    question:T`\int_0^4 2\,dx`,
    hint:"Тұрақты 2 санының алғашқы функциясы 2x болады.",
    steps:[
      T`F(x)=2x`,
      T`F(4)-F(0)=8-0`
    ],
    answer:T`\boxed{8}`
  },
  {
    level:"Жеңіл",minutes:2,
    question:T`\int_0^3 2x\,dx`,
    hint:"2x функциясының алғашқы функциясы x².",
    steps:[
      T`F(x)=x^2`,
      T`F(3)-F(0)=9-0`
    ],
    answer:T`\boxed{9}`
  },
  {
    level:"Орташа",minutes:3,
    question:T`\int_1^2 6x^2\,dx`,
    hint:"6x² функциясының алғашқы функциясы 2x³.",
    steps:[
      T`F(x)=2x^3`,
      T`F(2)-F(1)=16-2`
    ],
    answer:T`\boxed{14}`
  },
  {
    level:"Орташа",minutes:3,
    question:T`\int_0^2(3x^2+2x)\,dx`,
    hint:"Алдымен x³+x² алғашқы функциясын табыңдар.",
    steps:[
      T`F(x)=x^3+x^2`,
      T`F(2)-F(0)=8+4`
    ],
    answer:T`\boxed{12}`
  },
  {
    level:"Қиын",minutes:4,
    question:T`\int_1^3(x^2+2x)\,dx`,
    hint:"Алғашқы функция x³/3+x² түрінде болады.",
    steps:[
      T`F(x)=\frac{x^3}{3}+x^2`,
      T`F(3)=18,\quad F(1)=\frac43`,
      T`18-\frac43=\frac{50}{3}`
    ],
    answer:T`\boxed{\frac{50}{3}}`
  },
  {
    level:"Қиын",minutes:4,
    question:T`\int_{-1}^2(2x^3-4x)\,dx`,
    hint:"Теріс шекараны қойғанда тақ және жұп дәрежелерге назар аударыңдар.",
    steps:[
      T`F(x)=\frac{x^4}{2}-2x^2`,
      T`F(2)=0,\quad F(-1)=-\frac32`,
      T`0-\left(-\frac32\right)=\frac32`
    ],
    answer:T`\boxed{\frac32}`
  }
];

// 3 ТОП • 15 СҰРАҚ
const quiz = [
  ["Анықталған интегралдың нәтижесі қандай?",
    "Нақты сан","Функциялар жиыны","Тек C","Тек нөл"],
  ["Ньютон–Лейбниц формуласы?",
    "F(b)−F(a)","F(a)+F(b)","F(a)−F(b)","F(a)·F(b)"],
  ["∫₀¹2x dx нәтижесі?",
    "1","2","0","3"],
  ["∫₂²f(x)dx мәні?",
    "0","1","2","−2"],
  ["∫₀³2 dx мәні?",
    "6","3","9","2"],
  ["∫₁³2x dx мәні?",
    "8","4","6","10"],
  ["x² функциясының алғашқы функциясы?",
    "x³/3","2x","x²/2","3x"],
  ["∫₀²3x² dx мәні?",
    "8","6","4","2"],
  ["Интеграл шекаралары ауысса не өзгереді?",
    "Таңбасы өзгереді","Мәні екі еселенеді","Нөлге айналады","Ештеңе"],
  ["∫₀⁴x dx мәні?",
    "8","4","16","2"],
  ["F(4)=12, F(1)=3. Айырмасы?",
    "9","15","4","36"],
  ["∫₀²(−x)dx мәні?",
    "−2","2","4","0"],
  ["∫₀²x² dx мәні?",
    "8/3","4","2","8"],
  ["∫₁²4x³ dx мәні?",
    "15","8","12","16"],
  ["Анықталған интеграл соңына +C жазыла ма?",
    "Жоқ","Иә","Әрқашан","Тек нөл болса"]
];

const homework = [
  {
    title:"1-тапсырма. Интегралды есептеу",
    desc:"Үш интегралды толық шығарыңдар. Әр есепте алғашқы функцияны, жоғарғы және төменгі мәнді көрсетіңдер.",
    problems:[
      T`\int_1^4 2x\,dx`,
      T`\int_0^3(4x^3+2x)\,dx`,
      T`\int_1^2(6x^2-4x+3)\,dx`
    ]
  },
  {
    title:"2-тапсырма. Қатені табу",
    desc:"Оқушы есеп шығарғанда шекаралардың ретін шатастырды. Қатесін түсіндіріп, дұрыс жауабын жазыңдар.",
    problems:[
      T`\int_1^3 2x\,dx=1^2-3^2=-8`
    ]
  },
  {
    title:"3-тапсырма. Ойтолғау",
    desc:"«Ньютон–Лейбниц формуласы не үшін қажет?» тақырыбында 8–10 сөйлем жазыңдар. Анықталған және анықталмаған интегралдардың айырмашылығына мысал келтіріңдер.",
    problems:[]
  }
];

// ======================================
// СЛАЙДТАРДЫ ҚҰРАСТЫРУ
// ======================================

const pages = [{type:"intro",title:"Кіріспе"}];

theory.forEach((_,i) =>
  pages.push({type:"theory",index:i,title:"Түсіндірме "+(i+1)})
);

notes.forEach((_,i) =>
  pages.push({type:"note",index:i,title:"Конспект "+(i+1)})
);

pages.push({type:"formula",title:"Формулалар"});

examples.forEach((_,i) =>
  pages.push({type:"example",index:i,title:"Үлгі есеп "+(i+1)})
);

selfWork.forEach((_,i) =>
  pages.push({type:"self",index:i,title:"Өзіндік жұмыс "+(i+1)})
);

quiz.forEach((_,i) =>
  pages.push({type:"quiz",index:i,title:(i%3+1)+"-топ • "+(i+1)+"-сұрақ"})
);

pages.push({type:"homework",title:"Үй жұмысы"});
pages.push({type:"finish",title:"Қорытынды"});

let page = 0;
let teamScores = [0,0,0];
const answered = new Map();
const completedSelf = new Set();
const shuffledOptions = new Map();

const escapeHTML = value =>
  String(value).replace(/[&<>"']/g,c=>({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[c]));

function math(tex) {
  return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color,title,content) {
  return `<section class="card ${color}">
    <h3>${escapeHTML(title)}</h3>${content}
  </section>`;
}

function paragraph(value) {
  return `<p>${escapeHTML(value)}</p>`;
}

const graph = `
<svg class="graph" viewBox="0 0 600 290"
  xmlns="http://www.w3.org/2000/svg"
  role="img" aria-label="y тең 2x функциясының графигі және интеграл ауданы">
  <defs>
    <pattern id="gridlines" width="40" height="40"
      patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none"
        stroke="#34536e" stroke-width=".7"/>
    </pattern>
  </defs>
  <rect width="600" height="290" fill="url(#gridlines)"/>
  <path d="M65 240H560M125 265V20"
    stroke="#d6e9fa" stroke-width="2.5" fill="none"/>
  <polygon points="125,240 445,80 445,240"
    fill="#55e7ac" fill-opacity=".28"/>
  <path d="M125 240L445 80"
    stroke="#7debf2" stroke-width="4" fill="none"/>
  <path d="M445 80V240"
    stroke="#ffd47e" stroke-width="2.5"
    stroke-dasharray="7 5"/>
  <text x="560" y="233" fill="white" font-size="19">x</text>
  <text x="137" y="23" fill="white" font-size="19">y</text>
  <text x="105" y="260" fill="white" font-size="17">0</text>
  <text x="439" y="261" fill="white" font-size="17">2</text>
  <text x="344" y="62" fill="#7debf2" font-size="23">y = 2x</text>
  <text x="290" y="207" fill="#55e7ac" font-size="27"
    font-weight="bold">S = 4</text>
</svg>
<p class="graph-caption">
  y=2x графигінің [0;2] аралығындағы ауданы — 4 квадрат бірлік
</p>`;

// ======================================
// ФОРМУЛАЛАРДЫ ЖАҢАРТУ
// ======================================

let renderNumber = 0;
let mathQueue = Promise.resolve();

function typesetMath() {
  const version = ++renderNumber;

  if (!window.MathJax) return;

  mathQueue = mathQueue.then(async () => {
    await MathJax.startup.promise;

    if (version !== renderNumber) return;

    await MathJax.typesetPromise([$("content")]);
  }).catch(error => console.warn("MathJax:",error));
}

// ======================================
// БЕТ МАЗМҰНЫН КӨРСЕТУ
// ======================================

function render() {
  const current = pages[page];

  $("pageCounter").textContent =
    `${page+1} / ${pages.length}`;

  $("pageTitle").textContent = current.title;

  $("pageFill").style.width =
    ((page+1)/pages.length*100)+"%";

  $("taskScore").textContent =
    teamScores.reduce((a,b)=>a+b,0);

  $("backBtn").disabled = page === 0;
  $("nextBtn").disabled = page === pages.length-1;

  let html = `
    <article class="slide">
      <div class="eyebrow">
        I ТАРАУ • §3 • ОҚУЛЫҚТЫҢ 21-БЕТІ
      </div>
  `;

  // КІРІСПЕ
  if(current.type==="intro") {
    html += `
      <h1 class="gradient">
        Анықталған интеграл.<br>
        Ньютон–Лейбниц формуласы
      </h1>

      ${card("cyan","🎯 Сабақтың мақсаты",
        paragraph(lesson.goal))}

      <div class="grid2">
        ${card("purple","Бүгін не үйренеміз?",
          `<p>Анықталған интегралды есептеуді үйренеміз.</p>
           <p>Жоғарғы және төменгі шекараны ажыратамыз.</p>
           <p>Өзіндік жұмыс пен топтық ойын орындаймыз.</p>`)}

        ${card("gold","Сабақ жоспары",
          `<p>Түсіндірме → Конспект → Есептер →
           Өзіндік жұмыс → Топтық ойын →
           Үй жұмысы → Қорытынды</p>
           <p class="gold-text">Ұзақтығы: 80 минут</p>`)}
      </div>

      ${card("green","Негізгі формула",
        math(T`\int_a^b f(x)\,dx=F(b)-F(a)`))}
    `;
  }

  // ТЕОРИЯ
  if(current.type==="theory") {
    const item = theory[current.index];

    html += `
      <h2>${escapeHTML(item.title)}</h2>

      <div class="definition">
        <h3>📘 Анықтама</h3>
        ${paragraph(item.definition)}
      </div>

      ${card("green","Қарапайым тілмен түсіндіру",
        paragraph(item.explain)+paragraph(item.another))}

      ${card("gold","Негізгі формула",
        math(item.formula))}

      ${card("purple","Мысал",
        math(item.example))}

      ${card("red","⚠ Маңызды ескерту",
        paragraph(item.warning))}
    `;
  }

  // КОНСПЕКТ
  if(current.type==="note") {
    const item = notes[current.index];

    html += `
      <h2>📝 Конспект ${current.index+1} / 10</h2>

      ${card("gold",item.title,`
        <p class="cyan-text">Дәптерге жазып алыңдар:</p>
        <div class="note">${escapeHTML(item.text)}</div>
        ${math(item.formula)}
      `)}

      ${card("green","Мысал арқылы түсіну",
        paragraph(item.explain)+math(item.example))}

      ${card("purple","Ауызша тапсырма",
        `<p>Жазған анықтамаңды өз сөзіңмен
        түсіндір. Формуладағы әр таңбаның
        нені білдіретінін айтып бер.</p>`)}
    `;
  }

  // ФОРМУЛАЛАР
  if(current.type==="formula") {
    html += `<h2>∫ Негізгі формулалар</h2>`;

    formulas.forEach((f,i)=>{
      html += card(
        i%2===0?"gold":"cyan",
        `${i+1}. ${f[0]}`,
        math(f[1])
      );
    });
  }

  // ШЫҒАРЫЛҒАН ЕСЕПТЕР
  if(current.type==="example") {
    const ex = examples[current.index];

    html += `
      <h2>✏️ ${escapeHTML(ex.title)}</h2>

      ${card("cyan","Есептің шарты",
        math(ex.question))}

      ${card("purple","Есепті қалай шығарамыз?",
        paragraph(ex.explain))}
    `;

    ex.steps.forEach((step,i)=>{
      html += `
        <div class="step">
          <span class="step-label">
            ${i+1}-қадам. ${escapeHTML(step[0])}
          </span>
          ${math(step[1])}
        </div>
      `;
    });

    html += card("green","Дұрыс жауап",math(ex.answer));
  }

  // ӨЗІНДІК ЖҰМЫС
  if(current.type==="self") {
    const task = selfWork[current.index];
    const finished = completedSelf.has(current.index);

    html += `
      <h2>✏️ Өзіндік жұмыс</h2>
      <div class="task-number">
        ${current.index+1}-есеп / ${selfWork.length}
        • ${escapeHTML(task.level)} деңгей
        • ${task.minutes} минут
      </div>

      ${card("cyan","Есептің шарты",`
        ${math(task.question)}
        <p>Есепті дәптерге толық шығарыңдар.
        Жауапты бірден ашпай, алдымен өз
        шешімдеріңді дайындаңдар.</p>
      `)}

      ${card("purple","Көмек",`
        <button class="action" data-reveal="selfHint">
          Көмекті көрсету
        </button>
        <div class="reveal" id="selfHint">
          ${paragraph(task.hint)}
        </div>
      `)}

      ${card("green","Шешу жолы және дұрыс жауап",`
        <button class="action" data-reveal="selfAnswer">
          Жауапты тексеру
        </button>
        <div class="reveal" id="selfAnswer">
          ${task.steps.map((step,i)=>`
            <div class="step">
              <span class="step-label">${i+1}-қадам</span>
              ${math(step)}
            </div>
          `).join("")}
          ${math(task.answer)}
          <button class="action" data-complete="self">
            ✓ Тексеріп болдым
          </button>
        </div>
      `)}

      <p class="green-text" id="selfStatus">
        ${finished
          ? "✓ Бұл тапсырманың шешімі тексерілген."
          : "Өзіндік жұмыс: "+completedSelf.size+
            " / "+selfWork.length+" тексерілді"}
      </p>
    `;
  }

  // ТОПТЫҚ ОЙЫН
  if(current.type==="quiz") {
    const i = current.index;
    const question = quiz[i];
    const team = i%3;
    const previous = answered.get(i);

    if(!shuffledOptions.has(i)) {
      shuffledOptions.set(i,shuffle(question.slice(1)));
    }

    const options = shuffledOptions.get(i);

    html += `
      <h2>🏆 Командалық ойын</h2>

      <div class="scores">
        ${teamScores.map((score,index)=>`
          <div class="team ${index===team?"current":""}">
            ${index+1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}
      </div>

      ${card("gold",`${i+1}-сұрақ / ${quiz.length}`,`
        <p class="cyan-text">${team+1}-топ жауап береді</p>
        <h3>${escapeHTML(question[0])}</h3>

        <div class="answers">
          ${options.map((option,index)=>{
            let cls="";
            if(previous!==undefined) {
              if(option===question[1])cls="correct";
              else if(index===previous)cls="wrong";
            }

            return `
              <button data-answer="${index}"
                class="${cls}"
                ${previous!==undefined?"disabled":""}>
                ${"ABCD"[index]}. ${escapeHTML(option)}
              </button>
            `;
          }).join("")}
        </div>

        <p class="${previous===undefined
          ?"gold-text"
          :options[previous]===question[1]
            ?"green-text":"red-text"}"
          id="gameMessage">
          ${previous===undefined
            ?"Дұрыс жауапты таңдаңдар."
            :options[previous]===question[1]
              ?"✓ Дұрыс жауап! +10 ұпай."
              :"Қате. Дұрыс жауап: "+escapeHTML(question[1])}
        </p>
      `)}

      ${card("purple","Ойын ережесі",
        `<p>Әр топ кезекпен жауап береді.
        Дұрыс жауап үшін 10 ұпай беріледі.
        Жауап берген соң «Келесі» батырмасын
        басқанда келесі топқа өтеді.</p>`)}
    `;
  }

  // ҮЙ ЖҰМЫСЫ
  if(current.type==="homework") {
    html += `<h2>📚 Үй тапсырмасы</h2>`;

    homework.forEach((item,i)=>{
      html += card(
        ["cyan","gold","green"][i],
        item.title,
        paragraph(item.desc)+
        item.problems.map(math).join("")
      );
    });
  }

  // ҚОРЫТЫНДЫ
  if(current.type==="finish") {
    const max = Math.max(...teamScores);
    const winners = teamScores
      .map((score,i)=>score===max?(i+1)+"-топ":null)
      .filter(Boolean);

    html += `
      <h1 class="gradient">Сабақ аяқталды!</h1>

      <div class="scores">
        ${teamScores.map((score,i)=>`
          <div class="team">
            ${i+1}-топ <strong>${score}</strong>
          </div>
        `).join("")}
      </div>

      ${card("green","🏆 Ойын нәтижесі",
        `<p>${winners.join(", ")}
        ${winners.length===1
          ?"— жеңімпаз!"
          :"— бірдей ұпай жинады!"}</p>`)}

      ${card("cyan","Сабақтың қорытындысы",
        `<p>Ньютон–Лейбниц формуласының
        мағынасын түсіндік.</p>
        <p>Интеграл шекараларын қолданып
        есептер шығардық.</p>
        <p>Өзіндік жұмыстың
        ${completedSelf.size} тапсырмасын
        тексердік.</p>`)}

      ${card("gold","Сау болыңыздар!",
        `<p>Сабаққа қатысқандарыңызға рақмет!</p>`)}
    `;
  }

  $("content").innerHTML = html+"</article>";
  $("content").scrollTop = 0;

  typesetMath();
}

// ======================================
// ОЙЫН, БЕТ АУЫСТЫРУ, БАТЫРМАЛАР
// ======================================

function shuffle(array) {
  const result = [...array];

  for(let i=result.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}

function nextPage() {
  const current = pages[page];

  if(current.type==="quiz" &&
     !answered.has(current.index)) {
    $("gameMessage").textContent =
      "Алдымен топтың жауабын таңдаңдар.";
    return;
  }

  if(page<pages.length-1) {
    page++;
    render();
  }
}

function prevPage() {
  if(page>0) {
    page--;
    render();
  }
}

function jumpTo(type) {
  const index=pages.findIndex(x=>x.type===type);

  if(index>=0) {
    page=index;
    render();
  }
}

function answerQuiz(choice) {
  const current=pages[page];
  if(current.type!=="quiz")return;

  const i=current.index;
  if(answered.has(i))return;

  answered.set(i,choice);

  const correct=quiz[i][1];
  const selected=shuffledOptions.get(i)[choice];

  if(selected===correct) {
    teamScores[i%3]+=10;
  }

  render();
}

$("content").addEventListener("click",event=>{
  const reveal=event.target.closest("[data-reveal]");

  if(reveal) {
    const target=$(reveal.dataset.reveal);
    if(!target)return;

    target.classList.toggle("visible");
    return;
  }

  const answer=event.target.closest("[data-answer]");
  if(answer) {
    answerQuiz(Number(answer.dataset.answer));
    return;
  }

  const complete=event.target.closest("[data-complete]");
  if(complete) {
    const current=pages[page];
    if(current.type!=="self")return;

    completedSelf.add(current.index);
    $("selfStatus").textContent =
      "✓ Тапсырма тексерілді. Барлығы: "+
      completedSelf.size+" / "+selfWork.length;
  }
});

$("backBtn").addEventListener("click",prevPage);
$("nextBtn").addEventListener("click",nextPage);

$("jumpSelf").addEventListener("click",()=>jumpTo("self"));
$("jumpNotes").addEventListener("click",()=>jumpTo("note"));
$("jumpGame").addEventListener("click",()=>jumpTo("quiz"));

$("fullscreenBtn").addEventListener("click",async()=>{
  try {
    if(!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch(error) {
    console.warn("Толық экран:",error);
  }
});

// ======================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ======================================

let secondsLeft=4800;
let timer=null;
let endTime=0;
let timerRunning=false;

function formatTime(seconds) {
  return String(Math.floor(seconds/60)).padStart(2,"0")+
         ":"+String(seconds%60).padStart(2,"0");
}

function refreshTimer() {
  $("remaining").textContent=formatTime(secondsLeft);
  $("elapsed").textContent=formatTime(4800-secondsLeft);
  $("timeFill").style.width=
    ((4800-secondsLeft)/4800*100)+"%";

  $("timerStatus").textContent=
    timerRunning
      ?"Сабақ жүріп жатыр"
      :secondsLeft===4800
        ?"Сабақ басталған жоқ"
        :secondsLeft===0
          ?"Сабақ уақыты аяқталды"
          :"Үзіліс";
}

function startLesson() {
  if(timer!==null || secondsLeft<=0)return;

  timerRunning=true;
  endTime=Date.now()+secondsLeft*1000;
  refreshTimer();

  timer=setInterval(()=>{
    secondsLeft=Math.max(
      0,
      Math.ceil((endTime-Date.now())/1000)
    );

    if(secondsLeft===0)pauseLesson();
    refreshTimer();
  },250);
}

function pauseLesson() {
  if(timer!==null) {
    clearInterval(timer);
    timer=null;
  }
  timerRunning=false;
  refreshTimer();
}

function resetLesson() {
  pauseLesson();
  secondsLeft=4800;
  refreshTimer();
}

$("timerStart").addEventListener("click",startLesson);
$("timerPause").addEventListener("click",pauseLesson);
$("timerReset").addEventListener("click",resetLesson);

// Алматы уақыты
function refreshClock() {
  $("liveClock").textContent=
    new Intl.DateTimeFormat("kk-KZ",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hour12:false
    }).format(new Date());
}

refreshClock();
setInterval(refreshClock,1000);
refreshTimer();

// ======================================
// ҚАРАПАЙЫМ ЖӘНЕ ҒЫЛЫМИ КАЛЬКУЛЯТОР
// ======================================

const calcValues = {
  basic:"",
  science:""
};

const calcButtons = {
  basic:[
    "C","⌫","(",")",
    "7","8","9","÷",
    "4","5","6","×",
    "1","2","3","−",
    "%","0",".","+",
    "="
  ],
  science:[
    "C","⌫","(",")",
    "sin","cos","tan","cot",
    "√","log","ln","π",
    "x²","xʸ","1/x","÷",
    "7","8","9","×",
    "4","5","6","−",
    "1","2","3","+",
    "e","0",".","="
  ]
};

const replacements = {
  "×":"*",
  "÷":"/",
  "−":"-",
  "√":"sqrt(",
  "sin":"sin(",
  "cos":"cos(",
  "tan":"tan(",
  "cot":"cot(",
  "log":"log(",
  "ln":"ln(",
  "π":"pi",
  "x²":"^2",
  "xʸ":"^",
  "1/x":"1/("
};

function createCalculator(type) {
  const grid=$("keys-"+type);

  calcButtons[type].forEach(key=>{
    const button=document.createElement("button");
    button.type="button";
    button.textContent=key;

    if(key==="C")button.classList.add("clear");
    if(key==="=")button.classList.add("equal");

    if([
      "+","−","×","÷","%","√",
      "sin","cos","tan","cot","log",
      "ln","x²","xʸ","1/x"
    ].includes(key))button.classList.add("op");

    button.addEventListener("click",()=>{
      calcPress(type,key);
    });

    grid.appendChild(button);
  });
}

function calcPress(type,key) {
  let value=calcValues[type];

  if(key==="C") {
    value="";
  } else if(key==="⌫") {
    value=value.slice(0,-1);
  } else if(key==="=") {
    try {
      const result=evaluateMath(value);
      value=String(Number(result.toPrecision(12)));
    } catch(error) {
      value="Қате";
    }
  } else {
    if(value==="Қате")value="";
    value+=replacements[key]??key;
  }

  calcValues[type]=value;
  $("display-"+type).textContent=value||"0";
}

function showCalc(type) {
  const element=$("calc-"+type);
  const opening=!element.classList.contains("visible");

  element.classList.toggle("visible",opening);

  if(opening) {
    const other=type==="basic"?"science":"basic";
    $("calc-"+other).classList.remove("visible");

    const bounds=element.getBoundingClientRect();
    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    const left=Math.min(maxX,Math.max(0,bounds.left));
    const top=Math.min(maxY,Math.max(0,bounds.top));

    element.style.left=left+"px";
    element.style.top=top+"px";
  }
}

function hideCalc(type) {
  $("calc-"+type).classList.remove("visible");
}

$("basicLaunch").addEventListener("click",()=>{
  showCalc("basic");
});
$("scienceLaunch").addEventListener("click",()=>{
  showCalc("science");
});

document.querySelectorAll("[data-close]").forEach(button=>{
  button.addEventListener("click",()=>{
    hideCalc(button.dataset.close);
  });
});

// ======================================
// ҚАУІПСІЗ ЕСЕПТЕУ ПАРСЕРІ
// ======================================
// sin, cos, tan, cot — градуспен

function evaluateMath(input) {
  const source=String(input).replace(/\s+/g,"");
  let position=0;

  const functions={
    sin:x=>Math.sin(x*Math.PI/180),
    cos:x=>Math.cos(x*Math.PI/180),
    tan:x=>{
      const rad=x*Math.PI/180;
      if(Math.abs(Math.cos(rad))<1e-12)throw Error();
      return Math.tan(rad);
    },
    cot:x=>{
      const rad=x*Math.PI/180;
      if(Math.abs(Math.sin(rad))<1e-12)throw Error();
      return 1/Math.tan(rad);
    },
    sqrt:Math.sqrt,
    log:Math.log10,
    ln:Math.log
  };

  function take(char) {
    if(source[position]===char){
      position++;
      return true;
    }
    return false;
  }

  function primary() {
    if(take("(")) {
      const result=expression();
      if(!take(")"))throw Error();
      return result;
    }

    const rest=source.slice(position);
    const number=rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if(number) {
      position+=number[0].length;
      return Number(number[0]);
    }

    if(rest.startsWith("pi")) {
      position+=2;
      return Math.PI;
    }

    if(rest.startsWith("e")) {
      position++;
      return Math.E;
    }

    for(const name of Object.keys(functions)) {
      if(rest.startsWith(name+"(")) {
        position+=name.length+1;

        const argument=expression();
        if(!take(")"))throw Error();

        return functions[name](argument);
      }
    }

    throw Error();
  }

  function postfix() {
    let value=primary();
    while(take("%"))value/=100;
    return value;
  }

  function power() {
    let value=postfix();
    if(take("^"))value=Math.pow(value,unary());
    return value;
  }

  function unary() {
    if(take("+"))return unary();
    if(take("-"))return -unary();
    return power();
  }

  function term() {
    let value=unary();

    while(true) {
      if(take("*"))value*=unary();
      else if(take("/"))value/=unary();
      else break;
    }

    return value;
  }

  function expression() {
    let value=term();

    while(true) {
      if(take("+"))value+=term();
      else if(take("-"))value-=term();
      else break;
    }

    return value;
  }

  if(!source)throw Error();

  const result=expression();

  if(position!==source.length || !Number.isFinite(result)) {
    throw Error();
  }

  return result;
}

// ======================================
// КАЛЬКУЛЯТОРДЫ ҚОЗҒАЛТУ
// ======================================

function enableDragging(element) {
  let drag=null;
  let suppressClick=false;

  element.addEventListener("pointerdown",event=>{
    if(event.target.closest("[data-close]"))return;
    if(event.pointerType==="mouse" && event.button!==0)return;

    const rect=element.getBoundingClientRect();

    drag={
      id:event.pointerId,
      startX:event.clientX,
      startY:event.clientY,
      left:rect.left,
      top:rect.top,
      moved:false
    };
  });

  window.addEventListener("pointermove",event=>{
    if(!drag || event.pointerId!==drag.id)return;

    const dx=event.clientX-drag.startX;
    const dy=event.clientY-drag.startY;

    if(Math.hypot(dx,dy)>6)drag.moved=true;
    if(!drag.moved)return;

    element.classList.add("dragging");

    const maxX=Math.max(0,innerWidth-element.offsetWidth);
    const maxY=Math.max(0,innerHeight-element.offsetHeight);

    element.style.left=
      Math.max(0,Math.min(maxX,drag.left+dx))+"px";

    element.style.top=
      Math.max(0,Math.min(maxY,drag.top+dy))+"px";
  });

  window.addEventListener("pointerup",event=>{
    if(!drag || event.pointerId!==drag.id)return;

    suppressClick=drag.moved;
    drag=null;
    element.classList.remove("dragging");
  });

  window.addEventListener("pointercancel",event=>{
    if(!drag || event.pointerId!==drag.id)return;
    drag=null;
    element.classList.remove("dragging");
  });

  element.addEventListener("click",event=>{
    if(!suppressClick)return;

    event.preventDefault();
    event.stopImmediatePropagation();
    suppressClick=false;
  },true);
}

// ======================================
// ІСКЕ ҚОСУ
// ======================================

const basic=$("calc-basic");
const science=$("calc-science");

basic.style.left="16px";
basic.style.top="140px";

science.style.left="16px";
science.style.top="140px";

createCalculator("basic");
createCalculator("science");

enableDragging(basic);
enableDragging(science);

refreshTimer();
render();
