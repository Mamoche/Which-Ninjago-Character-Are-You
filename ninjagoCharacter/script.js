//-----html DOM-----
//id
const yellow = document.getElementById("Yellow");
const pink = document.getElementById("pink");
const blue = document.getElementById("Blue");
const red = document.getElementById("red");
const green = document.getElementById("green");
const orange = document.getElementById("orange");
const pizza = document.getElementById("pizza");
const cake = document.getElementById("Cake");
const sushi = document.getElementById("sushi");
const pasta = document.getElementById("pasta");
const salade = document.getElementById("salade");
const tea = document.getElementById("Tea");
const dancing = document.getElementById("dancing");
const sportsOp = document.getElementById("sports");
const gaming = document.getElementById("gaming");
const cooking = document.getElementById("cooking");
const traveling = document.getElementById("traveling");
const drawing = document.getElementById("drawing");
const math = document.getElementById("math");
const science = document.getElementById("science");
const history = document.getElementById("history");
const art = document.getElementById("art");
const musicOp = document.getElementById("music");
const physicalEducation = document.getElementById("physicalEducation");
const morining = document.getElementById("morning");
const night = document.getElementById("night");
const doctor = document.getElementById("doctor");
const engineer = document.getElementById("engineer");
const artist = document.getElementById("artist");
const teacher = document.getElementById("teacher");
const athelete = document.getElementById("athlete");
const otherjob = document.getElementById("otherjob");
const dog = document.getElementById("dog");
const cat = document.getElementById("cat");
const bird = document.getElementById("bird");
const fish = document.getElementById("fish");
const rabbit = document.getElementById("rabbit");
const chiken = document.getElementById("chiken");
const ninjago = document.getElementById("Ninjago");
const malcom = document.getElementById("Malcom");
const friends = document.getElementById("Friends");
const theBigBangTheory = document.getElementById("TheBigBangTheory");
const gumball = document.getElementById("Gumball");
const otherShows = document.getElementById("OtherShows");
const pop = document.getElementById("pop");
const rock = document.getElementById("rock");
const rap = document.getElementById("rap");
const jazz = document.getElementById("jazz");
const classical = document.getElementById("classical");
const hipHop = document.getElementById("hipHop");
const soccer = document.getElementById("soccer");
const basketball = document.getElementById("basketball");
const tennis = document.getElementById("tennis");
const swimming = document.getElementById("swimming");
const running = document.getElementById("running");
const otherSports = document.getElementById("otherSports");
const submit = document.getElementById("submitBtn");
const result = document.getElementById("result");
const kai = document.getElementById("kai");
const jay = document.getElementById("jay");
const cole = document.getElementById("cole");
const zane = document.getElementById("zane");
const lloyd = document.getElementById("lloyd");
const nya = document.getElementById("nya");
const dareth = document.getElementById("dareth");
const playerCharacter = document.getElementById("playerCharacter");
const description = document.getElementById("description");
const chance = document.getElementById("chance");
//class
const colorbtn = document.querySelectorAll(".colorbtn");
const foodbtn = document.querySelectorAll(".foodbtn");
const habitsbtn = document.querySelectorAll(".habitsbtn");
const subjectsbtn = document.querySelectorAll(".subjectbtn");
const morningbtn = document.querySelectorAll(".morningbtn");
const dreamJobbtn = document.querySelectorAll(".dreamJobbtn");
const animalbtn = document.querySelectorAll(".animalbtn");
const tvShowsbtn = document.querySelectorAll(".tvShowsbtn");
const musicbtn = document.querySelectorAll(".musicbtn");
const sportsbtn = document.querySelectorAll(".sportsbtn");
//variable + array
let didAllquestion = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let continueTheSubmit = true;
let finalCharacter;
//JSON et database
const ctx = chance.getContext("2d");
let charcterPoint = {
  kai: 0,
  jay: 0,
  zane: 0,
  cole: 0,
  lloyd: 0,
  nya: 0,
};

let color = {
  yellow: false,
  pink: false,
  blue: false,
  green: false,
  orange: false,
  red: false,
};

let food = {
  pizza: false,
  cake: false,
  sushi: false,
  pasta: false,
  salade: false,
  tea: false,
};
let habits = {
  dancing: false,
  sports: false,
  gaming: false,
  cooking: false,
  traveling: false,
  drawing: false,
};
let subjects = {
  math: false,
  science: false,
  history: false,
  art: false,
  music: false,
  physicalEducation: false,
};
let morningOrNight = {
  morning: false,
  night: false,
};
let dreamJob = {
  doctor: false,
  engineer: false,
  artist: false,
  teacher: false,
  athlete: false,
  otherjob: false,
};
let animal = {
  dog: false,
  cat: false,
  bird: false,
  fish: false,
  rabbit: false,
  chiken: false,
};
let tvShows = {
  ninjago: false,
  malcom: false,
  friends: false,
  theBigBangTheory: false,
  gumball: false,
  otherShows: false,
};
let music = {
  pop: false,
  rock: false,
  rap: false,
  jazz: false,
  classical: false,
  hipHop: false,
};
let sports = {
  soccer: false,
  basketball: false,
  tennis: false,
  swimming: false,
  running: false,
  otherSports: false,
};
//les cles
const characterKey = Object.keys(charcterPoint);
const colorKey = Object.keys(color);
const foodKey = Object.keys(food);
const habitsKey = Object.keys(habits);
const subjectsKey = Object.keys(subjects);
const morningOrNightKey = Object.keys(morningOrNight);
const dreamJobKey = Object.keys(dreamJob);
const animalKey = Object.keys(animal);
const tvShowsKey = Object.keys(tvShows);
const musicKey = Object.keys(music);
const sportsKey = Object.keys(sports);
//---fonctions---

//couleurs
yellow.addEventListener("click", () => {
  colorbtn.forEach((element) => {
    element.style.border = "none";
  });
  for (let i = 0; i < colorKey.length; i++) {
    const key = colorKey[i];
    color[key] = false;
  }
  color.yellow = true;
  yellow.style.border = "solid green";
  didAllquestion[0] = true;
});
pink.addEventListener("click", () => {
  colorbtn.forEach((element) => {
    element.style.border = "none";
  });
  for (let i = 0; i < colorKey.length; i++) {
    const key = colorKey[i];
    color[key] = false;
  }
  color.pink = true;
  pink.style.border = "solid green";
  didAllquestion[0] = true;
});
blue.addEventListener("click", () => {
  colorbtn.forEach((element) => {
    element.style.border = "none";
  });
  for (let i = 0; i < colorKey.length; i++) {
    const key = colorKey[i];
    color[key] = false;
  }
  color.blue = true;
  blue.style.border = "solid green";
  didAllquestion[0] = true;
});

green.addEventListener("click", () => {
  colorbtn.forEach((element) => {
    element.style.border = "none";
  });
  for (let i = 0; i < colorKey.length; i++) {
    const key = colorKey[i];
    color[key] = false;
  }
  color.green = true;
  green.style.border = "solid green";
  didAllquestion[0] = true;
});
orange.addEventListener("click", () => {
  colorbtn.forEach((element) => {
    element.style.border = "none";
  });
  for (let i = 0; i < colorKey.length; i++) {
    const key = colorKey[i];
    color[key] = false;
  }
  color.orange = true;
  orange.style.border = "solid green";
  didAllquestion[0] = true;
});
red.addEventListener("click", () => {
  colorbtn.forEach((element) => {
    element.style.border = "none";
  });
  for (let i = 0; i < colorKey.length; i++) {
    const key = colorKey[i];
    color[key] = false;
  }
  color.red = true;
  red.style.border = "solid green";
  didAllquestion[0] = true;
});

//food;

pizza.addEventListener("click", () => {
  foodbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < foodKey.length; i++) {
    const key = foodKey[i];
    food[key] = false;
  }
  food.pizza = true;
  pizza.style.border = "solid green";
  didAllquestion[1] = true;
});
cake.addEventListener("click", () => {
  foodbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < foodKey.length; i++) {
    const key = foodKey[i];
    food[key] = false;
  }
  food.cake = true;
  cake.style.border = "solid green";
  didAllquestion[1] = true;
});
sushi.addEventListener("click", () => {
  foodbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < foodKey.length; i++) {
    const key = foodKey[i];
    food[key] = false;
  }
  food.sushi = true;
  sushi.style.border = "solid green";
  didAllquestion[1] = true;
});
pasta.addEventListener("click", () => {
  foodbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < foodKey.length; i++) {
    const key = foodKey[i];
    food[key] = false;
  }
  food.pasta = true;
  pasta.style.border = "solid green";
  didAllquestion[1] = true;
});
salade.addEventListener("click", () => {
  foodbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < foodKey.length; i++) {
    const key = foodKey[i];
    food[key] = false;
  }
  food.salade = true;
  salade.style.border = "solid green";
  didAllquestion[1] = true;
});
tea.addEventListener("click", () => {
  foodbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < foodKey.length; i++) {
    const key = foodKey[i];
    food[key] = false;
  }
  food.tea = true;
  tea.style.border = "solid green";
  didAllquestion[1] = true;
});
//habits
dancing.addEventListener("click", () => {
  habitsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < habitsKey.length; i++) {
    const key = habitsKey[i];
    habits[key] = false;
  }
  habits.dancing = true;
  dancing.style.border = "solid green";
  didAllquestion[2] = true;
});
sportsOp.addEventListener("click", () => {
  habitsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < habitsKey.length; i++) {
    const key = habitsKey[i];
    habits[key] = false;
  }
  habits.sports = true;
  sportsOp.style.border = "solid green";
  didAllquestion[2] = true;
});
gaming.addEventListener("click", () => {
  habitsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < habitsKey.length; i++) {
    const key = habitsKey[i];
    habits[key] = false;
  }
  habits.gaming = true;
  gaming.style.border = "solid green";
  didAllquestion[2] = true;
});
cooking.addEventListener("click", () => {
  habitsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < habitsKey.length; i++) {
    const key = habitsKey[i];
    habits[key] = false;
  }
  habits.cooking = true;
  cooking.style.border = "solid green";
  didAllquestion[2] = true;
});
traveling.addEventListener("click", () => {
  habitsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < habitsKey.length; i++) {
    const key = habitsKey[i];
    habits[key] = false;
  }
  habits.traveling = true;
  traveling.style.border = "solid green";
  didAllquestion[2] = true;
});
drawing.addEventListener("click", () => {
  habitsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < habitsKey.length; i++) {
    const key = habitsKey[i];
    habits[key] = false;
  }
  habits.drawing = true;
  drawing.style.border = "solid green";
  didAllquestion[2] = true;
});
//subjects
math.addEventListener("click", () => {
  subjectsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < subjectsKey.length; i++) {
    const key = subjectsKey[i];
    subjects[key] = false;
  }
  subjects.math = true;
  math.style.border = "solid green";
  didAllquestion[3] = true;
});
science.addEventListener("click", () => {
  subjectsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < subjectsKey.length; i++) {
    const key = subjectsKey[i];
    subjects[key] = false;
  }
  subjects.science = true;
  science.style.border = "solid green";
  didAllquestion[3] = true;
});
history.addEventListener("click", () => {
  subjectsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < subjectsKey.length; i++) {
    const key = subjectsKey[i];
    subjects[key] = false;
  }
  subjects.history = true;
  history.style.border = "solid green";
  didAllquestion[3] = true;
});
art.addEventListener("click", () => {
  subjectsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < subjectsKey.length; i++) {
    const key = subjectsKey[i];
    subjects[key] = false;
  }
  subjects.art = true;
  art.style.border = "solid green";
  didAllquestion[3] = true;
});
musicOp.addEventListener("click", () => {
  subjectsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < subjectsKey.length; i++) {
    const key = subjectsKey[i];
    subjects[key] = false;
  }
  subjects.music = true;
  musicOp.style.border = "solid green";
  didAllquestion[3] = true;
});
physicalEducation.addEventListener("click", () => {
  subjectsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < subjectsKey.length; i++) {
    const key = subjectsKey[i];
    subjects[key] = false;
  }
  subjects.physicalEducation = true;
  physicalEducation.style.border = "solid green";
  didAllquestion[3] = true;
});
//morning or night
morining.addEventListener("click", () => {
  morningbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < morningOrNightKey.length; i++) {
    const key = morningOrNightKey[i];
    morningOrNight[key] = false;
  }
  morningOrNight.morning = true;
  morining.style.border = "solid green";
  didAllquestion[4] = true;
});
night.addEventListener("click", () => {
  morningbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < morningOrNightKey.length; i++) {
    const key = morningOrNightKey[i];
    morningOrNight[key] = false;
  }
  morningOrNight.night = true;
  night.style.border = "solid green";
  didAllquestion[4] = true;
});
//dream job
doctor.addEventListener("click", () => {
  dreamJobbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < dreamJobKey.length; i++) {
    const key = dreamJobKey[i];
    dreamJob[key] = false;
  }
  dreamJob.doctor = true;
  doctor.style.border = "solid green";
  didAllquestion[5] = true;
});
engineer.addEventListener("click", () => {
  dreamJobbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < dreamJobKey.length; i++) {
    const key = dreamJobKey[i];
    dreamJob[key] = false;
  }
  dreamJob.engineer = true;
  engineer.style.border = "solid green";
  didAllquestion[5] = true;
});
artist.addEventListener("click", () => {
  dreamJobbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < dreamJobKey.length; i++) {
    const key = dreamJobKey[i];
    dreamJob[key] = false;
  }
  dreamJob.artist = true;
  artist.style.border = "solid green";
  didAllquestion[5] = true;
});
teacher.addEventListener("click", () => {
  dreamJobbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < dreamJobKey.length; i++) {
    const key = dreamJobKey[i];
    dreamJob[key] = false;
  }
  dreamJob.teacher = true;
  teacher.style.border = "solid green";
  didAllquestion[5] = true;
});
athelete.addEventListener("click", () => {
  dreamJobbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < dreamJobKey.length; i++) {
    const key = dreamJobKey[i];
    dreamJob[key] = false;
  }
  dreamJob.athlete = true;
  athlete.style.border = "solid green";
  didAllquestion[5] = true;
});
otherjob.addEventListener("click", () => {
  dreamJobbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < dreamJobKey.length; i++) {
    const key = dreamJobKey[i];
    dreamJob[key] = false;
  }
  dreamJob.otherjob = true;
  otherjob.style.border = "solid green";
  didAllquestion[5] = true;
});
//aniaml
dog.addEventListener("click", () => {
  animalbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < animalKey.length; i++) {
    const key = animalKey[i];
    animal[key] = false;
  }
  animal.dog = true;
  dog.style.border = "solid green";
  didAllquestion[6] = true;
});
cat.addEventListener("click", () => {
  animalbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < animalKey.length; i++) {
    const key = animalKey[i];
    animal[key] = false;
  }
  animal.cat = true;
  cat.style.border = "solid green";
  didAllquestion[6] = true;
});
bird.addEventListener("click", () => {
  animalbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < animalKey.length; i++) {
    const key = animalKey[i];
    animal[key] = false;
  }
  animal.bird = true;
  bird.style.border = "solid green";
  didAllquestion[6] = true;
});
fish.addEventListener("click", () => {
  animalbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < animalKey.length; i++) {
    const key = animalKey[i];
    animal[key] = false;
  }
  animal.fish = true;
  fish.style.border = "solid green";
  didAllquestion[6] = true;
});
rabbit.addEventListener("click", () => {
  animalbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < animalKey.length; i++) {
    const key = animalKey[i];
    animal[key] = false;
  }
  animal.rabbit = true;
  rabbit.style.border = "solid green";
  didAllquestion[6] = true;
});
chiken.addEventListener("click", () => {
  animalbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < animalKey.length; i++) {
    const key = animalKey[i];
    animal[key] = false;
  }
  animal.chiken = true;
  chiken.style.border = "solid green";
  didAllquestion[6] = true;
});
//tvShows
ninjago.addEventListener("click", () => {
  tvShowsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < tvShowsKey.length; i++) {
    const key = tvShowsKey[i];
    tvShows[key] = false;
  }
  tvShows.ninjago = true;
  ninjago.style.border = "solid green";
  didAllquestion[7] = true;
});
malcom.addEventListener("click", () => {
  tvShowsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < tvShowsKey.length; i++) {
    const key = tvShowsKey[i];
    tvShows[key] = false;
  }
  tvShows.malcom = true;
  malcom.style.border = "solid green";
  didAllquestion[7] = true;
});
friends.addEventListener("click", () => {
  tvShowsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < tvShowsKey.length; i++) {
    const key = tvShowsKey[i];
    tvShows[key] = false;
  }
  tvShows.friends = true;
  friends.style.border = "solid green";
  didAllquestion[7] = true;
});
theBigBangTheory.addEventListener("click", () => {
  tvShowsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < tvShowsKey.length; i++) {
    const key = tvShowsKey[i];
    tvShows[key] = false;
  }
  tvShows.theBigBangTheory = true;
  theBigBangTheory.style.border = "solid green";
  didAllquestion[7] = true;
});
gumball.addEventListener("click", () => {
  tvShowsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < tvShowsKey.length; i++) {
    const key = tvShowsKey[i];
    tvShows[key] = false;
  }
  tvShows.gumball = true;
  gumball.style.border = "solid green";
  didAllquestion[7] = true;
});
otherShows.addEventListener("click", () => {
  tvShowsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < tvShowsKey.length; i++) {
    const key = tvShowsKey[i];
    tvShows[key] = false;
  }
  tvShows.otherShows = true;
  otherShows.style.border = "solid green";
  didAllquestion[7] = true;
});
//Musique
pop.addEventListener("click", () => {
  musicbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < musicKey.length; i++) {
    const key = musicKey[i];
    music[key] = false;
  }
  music.pop = true;
  pop.style.border = "solid green";
  didAllquestion[8] = true;
});
rock.addEventListener("click", () => {
  musicbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < musicKey.length; i++) {
    const key = musicKey[i];
    music[key] = false;
  }
  music.rock = true;
  rock.style.border = "solid green";
  didAllquestion[8] = true;
});
rap.addEventListener("click", () => {
  musicbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < musicKey.length; i++) {
    const key = musicKey[i];
    music[key] = false;
  }
  music.rap = true;
  rap.style.border = "solid green";
  didAllquestion[8] = true;
});
jazz.addEventListener("click", () => {
  musicbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < musicKey.length; i++) {
    const key = musicKey[i];
    music[key] = false;
  }
  music.jazz = true;
  jazz.style.border = "solid green";
  didAllquestion[8] = true;
});
classical.addEventListener("click", () => {
  musicbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < musicKey.length; i++) {
    const key = musicKey[i];
    music[key] = false;
  }
  music.classical = true;
  classical.style.border = "solid green";
  didAllquestion[8] = true;
});
hipHop.addEventListener("click", () => {
  musicbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < musicKey.length; i++) {
    const key = musicKey[i];
    music[key] = false;
  }
  music.hipHop = true;
  hipHop.style.border = "solid green";
  didAllquestion[8] = true;
});
//sports
soccer.addEventListener("click", () => {
  sportsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < sportsKey.length; i++) {
    const key = sportsKey[i];
    sports[key] = false;
  }
  sports.soccer = true;
  soccer.style.border = "solid green";
  didAllquestion[9] = true;
});
basketball.addEventListener("click", () => {
  sportsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < sportsKey.length; i++) {
    const key = sportsKey[i];
    sports[key] = false;
  }
  sports.basketball = true;
  basketball.style.border = "solid green";
  didAllquestion[9] = true;
});
tennis.addEventListener("click", () => {
  sportsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < sportsKey.length; i++) {
    const key = sportsKey[i];
    sports[key] = false;
  }
  sports.tennis = true;
  tennis.style.border = "solid green";
  didAllquestion[9] = true;
});
swimming.addEventListener("click", () => {
  sportsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < sportsKey.length; i++) {
    const key = sportsKey[i];
    sports[key] = false;
  }
  sports.swimming = true;
  swimming.style.border = "solid green";
  didAllquestion[9] = true;
});
running.addEventListener("click", () => {
  sportsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < sportsKey.length; i++) {
    const key = sportsKey[i];
    sports[key] = false;
  }
  sports.running = true;
  running.style.border = "solid green";
  didAllquestion[9] = true;
});
otherSports.addEventListener("click", () => {
  sportsbtn.forEach((el) => {
    el.style.border = "none";
  });
  for (let i = 0; i < sportsKey.length; i++) {
    const key = sportsKey[i];
    sports[key] = false;
  }
  sports.otherSports = true;
  otherSports.style.border = "solid green";
  didAllquestion[9] = true;
});
//subbmit
submit.addEventListener("click", () => {
  for (let i = 0; i < didAllquestion.length; i++) {
    if (didAllquestion[i] === false) {
      alert(`You didn't do the ${i + 1} question`);
      continueTheSubmit = false;
    }
  }
  if (!continueTheSubmit) {
    return;
  }
  result.style.display = "flex";
  eachCharacterScore();
  yourCharacter();
  switch (finalCharacter) {
    case "kai":
      playerCharacter.textContent = "🔥 KAI — The Hot-Headed Protector";
      description.textContent =
        "You're the one who feels everything at 100%. When someone messes with your people, you're already throwing hands before anyone else has even stood up. You've got a temper like a wildfire and a heart to match — fiercely loyal, stubborn as a rock, and secretly terrified of failing the people you love.";
      kai.style.display = "flex";
      break;
    case "jay":
      playerCharacter.textContent = "⚡ JAY — The Anxious Comedian";
      description.textContent =
        "You cope with stress by making jokes, and honestly? Same. You're the group's emotional support clown — always ready with a quip, a nervous laugh, or a completely unhinged invention that somehow works. Underneath the humor is a genuinely sweet, insecure person who just wants to be liked and probably needs a hug.";
      jay.style.display = "flex";
      break;
    case "zane":
      playerCharacter.textContent = "❄️ ZANE — The Logical Sweetheart";
      description.textContent =
        "You're the calm, collected one who thinks before they act — sometimes to a fault. You're deeply kind, unfailingly honest, and have a quiet weirdness that only your closest friends get to see. You're the person who says 'I don't understand this social convention' with complete sincerity, then proceeds to be the most loyal friend anyone could ask for.";
      zane.style.display = "flex";
      break;
    case "cole":
      playerCharacter.textContent = "🪨 COLE — The Reliable Leader";
      description.textContent =
        "You're the grounded one — literally and emotionally. You're steady, dependable, and carry more weight (metaphorically... and sometimes physically) than anyone realizes. You've got a dry sense of humor, a competitive streak, and a deep fear of failure that you hide behind a confident exterior. You're the mom friend. Embrace it.";
      cole.style.display = "flex";
      break;
    case "nya":
      playerCharacter.textContent = "💧 NYA — The Fierce Heart";
      description.textContent =
        "You're adaptable, emotionally intelligent, and absolutely refuse to be underestimated. You've spent your whole life proving you're just as capable as anyone else — probably more. You're fiercely protective of your people, you call out nonsense when you see it, and you have a quiet strength that holds everyone together. You're the glue.";
      nya.style.display = "flex";
      break;
    case "lloyd":
      playerCharacter.textContent = "💚 LLOYD — The Reluctant Chosen One";
      description.textContent =
        "You've got big 'I didn't ask for this' energy. You're constantly growing, constantly learning, and constantly feeling like you're not ready — but you show up anyway. You're wise beyond your years (sometimes), deeply compassionate, and carry the weight of everyone's expectations on your shoulders. You just want to make the people you love proud.";
      lloyd.style.display = "flex";
      break;
    default:
      playerCharacter.textContent = "🥷 DARETH — The Undefined Wildcard";
      description.textContent =
        "You're the chaotic neutral of the group. Nobody really knows what your deal is — including you. You're loyal, brave, and inexplicably always there when it counts, even if you're not entirely sure how you got there. You're the comic relief, the unexpected hero, and the guy who somehow survives situations that should have killed you three times over.";
      dareth.style.display = "flex";
  }
  let data;
  if(finalCharacter === "dareth"){
     data = [{label: "Dareth", value: 100, color:"rgb(165, 79, 42);"}];
  }else{
     data = [
    { label: "kai", value: charcterPoint.kai * 10, color: "red" },
    { label: "jay", value: charcterPoint.jay * 10, color: "blue" },
    { label: "cole", value: charcterPoint.cole * 10, color: "black" },
    { label: "zane", value: charcterPoint.zane * 10, color: "white" },
    { label: "lloyd", value: charcterPoint.lloyd * 10, color: "green" },
    { label: "nya", value: charcterPoint.nya * 10, color: "cyan" },
  ];
  }
  const total = data.reduce((sum, item) => (sum += item.value), 0);
  let angle = 0;
  const centerX = chance.width / 2;
  const centerY = chance.height / 2;
  const radius = 100;
  data.forEach((item) => {
    const sliceAngle = (item.value / total) * (2 * Math.PI);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + sliceAngle);
    ctx.closePath();

    ctx.fillStyle = item.color;
    ctx.fill();

    angle += sliceAngle;
  });
});

function eachCharacterScore() {
  //color
  if (color.yellow) {
    charcterPoint.lloyd++;
  }
  if (color.blue) {
    charcterPoint.nya++;
  }
  if (color.red) {
    charcterPoint.jay++;
  }
  if (color.green) {
    charcterPoint.kai++;
  }
  if (color.orange) {
    charcterPoint.cole++;
  }
  if (color.pink) {
    charcterPoint.zane++;
  }
  //food
  if (food.pizza) {
    charcterPoint.kai++;
  }
  if (food.cake) {
    charcterPoint.cole++;
  }
  if (food.pasta) {
    charcterPoint.nya++;
  }
  if (food.salade) {
    charcterPoint.zane++;
  }
  if (food.tea) {
    charcterPoint.lloyd++;
  }
  //habits
  if (habits.dancing) {
    charcterPoint.jay++;
  }
  if (habits.sports) {
    charcterPoint.nya++;
  }
  if (habits.gaming) {
    charcterPoint.cole++;
  }
  if (habits.cooking) {
    charcterPoint.lloyd++;
  }
  if (habits.traveling) {
    charcterPoint.kai++;
  }
  if (habits.drawing) {
    charcterPoint.zane++;
  }
  //subject
  switch (true) {
    case subjects.math:
      charcterPoint.zane++;
      break;
    case subjects.science:
      charcterPoint.nya++;
      break;
    case subjects.history:
      charcterPoint.lloyd++;
      break;
    case subjects.art:
      charcterPoint.cole++;
      break;
    case subjects.music:
      charcterPoint.jay++;
      break;
    case subjects.physicalEducation:
      charcterPoint.kai++;
      break;
    default:
      alert("There's a bug");
  }
  //morning
  if (morningOrNight.morning) {
    charcterPoint.jay++;
    charcterPoint.nya++;
    charcterPoint.lloyd++;
  } else {
    charcterPoint.cole++;
    charcterPoint.zane++;
    charcterPoint.kai++;
  }
  //dream job
  switch (true) {
    case dreamJob.doctor:
      charcterPoint.jay++;
      break;
    case dreamJob.engineer:
      charcterPoint.nya++;
      break;
    case dreamJob.artist:
      charcterPoint.zane++;
      break;
    case dreamJob.teacher:
      charcterPoint.cole++;
      break;
    case dreamJob.athlete:
      charcterPoint.kai++;
      break;
    case dreamJob.otherjob:
      charcterPoint.lloyd++;
      break;
    default:
      alert("Error");
  }
  //animal
  switch (true) {
    case animal.dog:
      charcterPoint.kai++;
      break;
    case animal.cat:
      charcterPoint.nya++;
      break;
    case animal.bird:
      charcterPoint.zane++;
      break;
    case animal.fish:
      charcterPoint.cole++;
      break;
    case animal.rabbit:
      charcterPoint.jay++;
      break;
    case animal.chiken:
      charcterPoint.lloyd++;
      break;
    default:
      alert("Error!");
  }
  //tv show
  switch (true) {
    case tvShows.ninjago:
      charcterPoint.kai++;
      break;
    case tvShows.malcom:
      charcterPoint.lloyd++;
      break;
    case tvShows.friends:
      charcterPoint.jay++;
      break;
    case tvShows.theBigBangTheory:
      charcterPoint.zane++;
      break;
    case tvShows.gumball:
      charcterPoint.cole++;
      break;
    case tvShows.otherShows:
      charcterPoint.lloyd++;
      break;
    default:
      alert("There's a bug");
  }
  //music
  switch (true) {
    case music.pop:
      charcterPoint.jay++;
      break;
    case music.rock:
      charcterPoint.kai++;
      break;
    case music.hipHop:
      charcterPoint.lloyd++;
      break;
    case music.classical:
      charcterPoint.nya++;
      break;
    case music.jazz:
      charcterPoint.zane++;
      break;
    case music.rap:
      charcterPoint.cole++;
      break;
    default:
      alert("Error");
  }

  //sports
  switch (true) {
    case sports.soccer:
      charcterPoint.kai++;
      break;
    case sports.basketball:
      charcterPoint.cole++;
      break;
    case sports.tennis:
      charcterPoint.zane++;
      break;
    case sports.swimming:
      charcterPoint.nya++;
      break;
    case sports.running:
      charcterPoint.lloyd++;
      break;
    case sports.otherSports:
      charcterPoint.jay++;
      break;
    default:
      alert("Error!");
  }
}
function yourCharacter() {
  let arr = [];
  for (let i = 0; i < characterKey.length; i++) {
    const key = characterKey[i];
    arr.push([key, charcterPoint[key]]);
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j][1] < arr[j + 1][1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  //final character
  arr[0][1] === arr[1][1]
    ? (finalCharacter = "dareth")
    : (finalCharacter = arr[0][0]);
  console.log(arr);
}
