const dictionaryApi = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const WORDS = ["ABOUT", "ABOVE", "ACTOR", "ACUTE", "ADEPT", "ADMIT", "ADOPT", "ADORE", "ADULT", "AFTER", "AGILE", "AGREE", "AISLE", "ALBUM", "ALERT", "ALIEN", "ALIKE", "ALIVE", "ALLOW", "ALONG", "ALOUD", "ALTER", "AMBER", "AMEND", "AMPLE", "AMPLY", "AMUSE", "ANGEL", "ANGLE", "ANKLE", "APPLE", "APPLY", "APRON", "ARROW", "ASSET", "AVERT", "AVOID", "BACON", "BAKER", "BASIC", "BASIL", "BASIN", "BATHE", "BEACH", "BEARD", "BEAST", "BEATS", "BEGIN", "BEGUN", "BEING", "BELOW", "BIRCH", "BIRTH", "BLACK", "BLANK", "BLINK", "BLOWN", "BLUSH", "BOARD", "BOAST", "BONUS", "BOOST", "BOUND", "BOWEL", "BRAID", "BRAIN", "BRAKE", "BRAND", "BRAVE", "BREAD", "BREAK", "BRIDE", "BRIEF", "BRING", "BRISK", "BROKE", "BROOM", "BROWN", "BULKY", "BUNCH", "BUYER", "CABIN", "CABLE", "CAMEL", "CANDY", "CATER", "CHAIN", "CHAIR", "CHALK", "CHARM", "CHART", "CHASM", "CHEAP", "CHIEF", "CHINA", "CHIPS", "CHOKE", "CHOPS", "CIGAR", "CLAIM", "CLAMP", "CLASP", "CLASS", "CLEAN", "CLEAR", "CLIMB", "CLOAK", "CLONE", "CLOSE", "CLOTH", "CLOUD", "CLOVE", "CLOWN", "COAST", "CORAL", "COUNT", "CRAFT", "CRANE", "CRANK", "CRAWL", "CRISP", "CROSS", "CROWD", "CROWN", "CRUSH", "CRUST", "CURVE", "DAILY", "DAIRY", "DANCE", "DATUM", "DECAY", "DECOR", "DELAY", "DEVIL", "DIARY", "DINER", "DIRTY", "DISCO", "DIVER", "DOUBT", "DOUGH", "DRAFT", "DRAIN", "DRAWN", "DREAM", "DRESS", "DRINK", "DRIVE", "EARLY", "EARTH", "EIGHT", "ELBOW", "EMAIL", "EMPTY", "ENJOY", "EQUAL", "EQUIP", "ETHIC", "EXACT", "EXIST", "EXTRA", "FACET", "FAIRY", "FAITH", "FALSE", "FANCY", "FAULT", "FAVOR", "FEAST", "FETCH", "FIBER", "FIELD", "FINAL", "FIRST", "FLAIR", "FLAKE", "FLASK", "FLICK", "FLOAT", "FLOCK", "FLOWN", "FLUSH", "FLUTE", "FOCAL", "FOCUS", "FORCE", "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH", "FRONT", "FROST", "FROZE", "FRUIT", "FUNGI", "FUNNY", "GHOST", "GIVEN", "GLASS", "GLAZE", "GLOBE", "GLORY", "GLOVE", "GRACE", "GRADE", "GRAIN", "GRAND", "GRAPE", "GRAPH", "GRASP", "GRASS", "GRAVY", "GREAT", "GREET", "GRILL", "GROUP", "GROWN", "GUARD", "GUESS", "GUEST", "GUIDE", "HABIT", "HAIRY", "HAPPY", "HARDY", "HASTE", "HAUNT", "HEART", "HEAVY", "HEFTY", "HONEY", "HORSE", "HOTEL", "HOUSE", "HUMAN", "HUMID", "HUMOR", "HUSKY", "IDEAL", "IMAGE", "IMPLY", "INCUR", "INDEX", "INFER", "INFRA", "INLET", "INNER", "INPUT", "INSET", "IVORY", "JEANS", "JOINT", "JUICE", "LABOR", "LADEN", "LAPSE", "LARGE", "LATEX", "LAUGH", "LAYER", "LEAFY", "LEANS", "LEARN", "LEMON", "LIGHT", "LINER", "LIVER", "LIVES", "LODGE", "LOFTY", "LOGIC", "LOVER", "LOWER", "LUCID", "LUCKY", "LUNCH", "LYMPH", "MACRO", "MAGIC", "MAIZE", "MAJOR", "MAKER", "MANGO", "MAPLE", "MARCH", "MATCH", "MEDAL", "MEDIA", "MERCY", "MERIT", "METAL", "MICRO", "MIDST", "MIGHT", "MINOR", "MINUS", "MIXER", "MODEL", "MOIST", "MONEY", "MONTH", "MORAL", "MOUNT", "MOUSE", "MOUTH", "MOVER", "MOVIE", "MULTI", "MUSIC", "NAIVE", "NEWLY", "NEXUS", "NICHE", "NIGHT", "NINJA", "NOBLE", "NODAL", "NOISE", "NOISY", "NORTH", "NOTCH", "NOTED", "NOVEL", "NURSE", "OCEAN", "OFTEN", "OLIVE", "ONSET", "OPERA", "OPTIC", "ORBIT", "ORGAN", "OTHER", "OUGHT", "OUNCE", "OUTER", "OVERT", "OWING", "OWNED", "OWNER", "OXIDE", "PACED", "PAINT", "PANIC", "PANTS", "PARTY", "PASTE", "PATCH", "PATIO", "PAUSE", "PAVED", "PAYER", "PEACH", "PEARL", "PEDAL", "PHASE", "PHONE", "PIANO", "PILOT", "PINCH", "PIVOT", "PIZZA", "PLACE", "PLAIN", "PLANE", "PLANK", "PLANT", "PLATE", "PLEAD", "PLUCK", "POINT", "POKER", "POLAR", "PORCH", "POUCH", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", "PRIZE", "PRONE", "PROUD", "PROVE", "PUNCH", "PUPPY", "PURGE", "PURSE", "QUAIL", "QUEEN", "QUERY", "QUEST", "QUICK", "QUIET", "QUILT", "QUITE", "QUOTA", "QUOTE", "RADIO", "RAINY", "RAISE", "RANCH", "RANGE", "RAPID", "RATIO", "REACH", "REACT", "READY", "REALM", "REGAL", "REIGN", "RELAX", "RELAY", "RELIC", "REMIT", "REPAY", "REPLY", "RESIN", "RIDGE", "RIGHT", "RINSE", "RISKY", "RIVAL", "ROAST", "ROCKY", "ROMAN", "ROUGH", "ROUND", "ROYAL", "RUSTY", "SADLY", "SAINT", "SALON", "SALTY", "SANDY", "SATIN", "SAUCE", "SCALE", "SCARE", "SCARF", "SCARY", "SCENT", "SCORE", "SCOUT", "SCREW", "SERUM", "SETUP", "SHADE", "SHADY", "SHAKE", "SHAKY", "SHAME", "SHAPE", "SHARE", "SHARK", "SHARP", "SHAVE", "SHEAR", "SHELF", "SHELL", "SHIFT", "SHINE", "SHIRT", "SHOCK", "SHORE", "SHORT", "SHOUT", "SHOVE", "SHOWN", "SHRUB", "SHRUG", "SIGHT", "SIGMA", "SILKY", "SINCE", "SIXTY", "SKATE", "SKILL", "SKIRT", "SLACK", "SLATE", "SLEEP", "SLEPT", "SLICE", "SLICK", "SLIDE", "SLING", "SLUMP", "SMALL", "SMART", "SMILE", "SMOKE", "SMOKY", "SNACK", "SNAIL", "SNAKE", "SNEAK", "SOBER", "SOLAR", "SOLVE", "SOUND", "SOUTH", "SPACE", "SPADE", "SPARE", "SPARK", "SPEAK", "SPEAR", "SPELL", "SPICE", "SPICY", "SPIKE", "SPILL", "SPINE", "SPLIT", "SPOIL", "SPOKE", "SPORT", "SPRAY", "SQUAD", "SQUAT", "SQUID", "STACK", "STAFF", "STAGE", "STAIN", "STAIR", "STAKE", "STALE", "STAMP", "STAND", "STARE", "STEAD", "STEAK", "STEAL", "STEAM", "STEEL", "STERN", "STICK", "STILL", "STING", "STOCK", "STONE", "STORE", "STORM", "STORY", "STOVE", "STRAP", "STRAW", "STRAY", "STUCK", "STUDY", "STUFF", "STUMP", "STYLE", "SUGAR", "SUITE", "SUNNY", "SUPER", "SWAMP", "SWEAT", "SWEPT", "SWIFT", "SWINE", "SWING", "SWIRL", "SYRUP", "TABLE", "TAKEN", "TEACH", "TEMPO", "THANK", "THEIR", "THICK", "THING", "THINK", "THIRD", "THORN", "THOSE", "THREE", "THROW", "THUMB", "THYME", "TIDAL", "TIGER", "TIMER", "TODAY", "TOKEN", "TONIC", "TOUCH", "TOUGH", "TOWEL", "TOWER", "TOXIC", "TOXIN", "TRACE", "TRACK", "TRADE", "TRAIL", "TRAIN", "TRASH", "TREAD", "TREND", "TRIAD", "TRIAL", "TRIBE", "TRICK", "TWICE", "TWINS", "ULCER", "ULTRA", "UNCLE", "UNDER", "UNIFY", "UNITE", "UNITY", "UPSET", "URBAN", "USAGE", "VAGUE", "VALID", "VALUE", "VIDEO", "VIRAL", "VITAL", "VOCAL", "VODKA", "VOICE", "VOWEL", "WAFER", "WAGED", "WAGER", "WAGON", "WAIST", "WAIVE", "WASTE", "WATCH", "WATER", "WEARY", "WEIGH", "WEIRD", "WHALE", "WHARF", "WHEAT", "WHILE", "WHITE", "WHOLE", "WHOSE", "WIDEN", "WIDTH", "WINDY", "WOMAN", "WOMEN", "WORLD", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WOVEN", "WRECK", "WRITE", "WRONG", "YEAST", "YIELD", "YOUNG", "YOUTH"]
const ADD_WORD = "ADD_WORD";

function isAWord(word) {
    return new Promise((resolve, reject) => {
        fetch(`${dictionaryApi}${word}`)
            .then(response => {
                if (response.status === 200) { resolve(true); }
                else { reject(false) }
            });
    });
}

function getRandomWord(w = WORDS) {
    return w[Math.floor(Math.random() * (w.length - 1))];
}

function traverseWord(inputWord, secretWord) {
    secretWord = secretWord.map(function(letter,index){return {letter:letter,index:index}});
    return inputWord.map((inputLetter, index) => {
        let letter = {
            letter: inputLetter,
            state: 0
        };


        let foundLetters = secretWord.filter(function(l){return l.letter===inputLetter})

        if(foundLetters.length>0){
            if(foundLetters.length>1){
                letter.state = foundLetters.map(function(l){return l.index}).includes(index) ? 2 : 1;
            }else{
                letter.state = foundLetters[0].index === index ? 2 : 1;
            }
        }

        // okay now you might say that you could just done that with the code below but 
        // that would lead to a problem with the words that have dupplicate letters 
        // such as "SMALL" , "GLASS" , "GRASS"
        // so i used the one abow , check it out , brilliant isn't it


        //let letterIndex = secretWord.indexOf(inputLetter);
        //if (letterIndex != -1) {
        //    letter.state = letterIndex === index ? 2 : 1;
        //}
        return letter;
    });
}
function raversedWordMatch(word) {
    return !word.map(letter => letter.state === 2).includes(false)
}

function AddWord(word, isBot) {
    document.dispatchEvent(new CustomEvent(ADD_WORD, {
        detail: {
            word: word,
            isBot: isBot
        }
    }))
}

function changeTurn(turn) {
    let turnCheckBox = document.querySelector('.turn input');
    turnCheckBox.checked = turn;
    var event = document.createEvent("HTMLEvents");
    event.initEvent('change', false, true);
    turnCheckBox.dispatchEvent(event);
}





function appendWord(word, isBot = false) {
    let words = document.querySelector('.words');
    let wordDiv = document.createElement('div');
    wordDiv.className = `word ${isBot ? 'bot' : ''}`;

    word.forEach(letter => {
        var letterSpan = document.createElement("span");
        letterSpan.innerText = letter.letter;
        if (letter.state > 0) {
            letterSpan.classList.add(letter.state === 2 ? 'green' : 'orange');
        }
        wordDiv.append(letterSpan)
    });

    words.append(wordDiv);
}




