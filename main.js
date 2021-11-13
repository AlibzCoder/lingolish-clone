let difficulty;

class Main {
    constructor() {
        initWordInput();
        this.secretWord = getRandomWord().split('');
        this.checkButton = document.querySelector('.word-input button');
        this.bot = new Bot(WORDS, difficulty);
        let self = this;


        document.querySelector('.turn input').addEventListener('change', function (e) {
            if (e.target.checked) {
                disableAllInputs();
            } else {
                setTimeout(function () {
                    alert('You\'re Turn');
                }, 1000)
                enableAllInputs();
            }
        });
        document.addEventListener(WORD_INPUT_CHANGE, function (e) {
            self.checkButton.disabled = e.detail.length < 5;
        });
        this.checkButton.addEventListener('click', function () {
            let word = getInputValues();
            clearInput()
            isAWord(word.join('')).then(function () {
                AddWord(word);
            }).catch(function () {
                alert('That\'s not a word, come on is that all you got?')
            })
        });

        document.addEventListener(ADD_WORD, function (e) {
            let traversedWord = traverseWord(e.detail.word, self.secretWord);
            appendWord(traversedWord, e.detail.isBot);
    
            self.bot.checkForKeyLetters(traversedWord);
    
            if (difficulty > 1) {
                self.bot.limitWords(traversedWord);
            }
    
    
            setTimeout(function () {
                if (raversedWordMatch(traversedWord)) {
                    if (e.detail.isBot) {
                        alert('You Lost, refresh the Page to change difficulty');
                    } else {
                        alert('You Won.')
                    }
                    self.restart();
                } else {
                    changeTurn(!e.detail.isBot)
                }
            }, 200)
        });


    }

    start(){
        changeTurn(true)
    }

    restart(){
        this.bot.resetData(WORDS);
        document.querySelector('.words').innerHTML = ''
        this.secretWord = getRandomWord().split('');
        this.start();
    }
}








function setifficulty(diff) {
    difficulty = diff;
}

function initMenu() {
    let radios = document.getElementsByName('difficulty');
    let startbtn = document.querySelector('.menu button');
    let menu = document.querySelector('.menu');
    let game = document.querySelector('.game');
    radios.forEach(function (radio) {
        radio.addEventListener('change', function (e) {
            setifficulty(parseInt(e.target.value));
            startbtn.disabled = false;
        })
    })

    startbtn.addEventListener('click', function () {
        menu.classList.add("hidden");
        game.classList.remove("hidden");
        

        new Main().start()
    })
}

initMenu();