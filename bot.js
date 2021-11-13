class Bot {

    constructor(words, difficulty) {
        this.diff = difficulty;
        this.words = Object.assign([], words);
        this.keyLetters = [];

        let self = this;
        document.querySelector('.turn input').addEventListener('change',function(e){
            if(e.target.checked){
                self.chooseWord();
            }
        });
        
    }

    resetData(words){
        this.words = Object.assign([], words);
        this.keyLetters = [];
    }

    minusWord(word) {
        var index = this.words.indexOf(word);
        if (index !== -1) {
            this.words.splice(index, 1);
        }
    }

    chooseWord() {
        let reg = this.createRegex();
        let word;

        if(this.diff===3&&reg){
            let filteredWords = this.words.filter(function(word){
                return reg.test(word);
            });
            this.words = Object.assign([],filteredWords)
            word = getRandomWord(filteredWords)
        }else{
            word = getRandomWord(this.words);
        }


        this.minusWord(word);
        AddWord(word.split(''),true)
    }

    //doesn't get called on easy difficulty
    limitWords(word){
        let words_temp = Object.assign([], this.words);
        word.forEach(l => {
            if(l.state>0){
                words_temp = Object.assign([],words_temp.filter(function(w){
                    return w.includes(l.letter);
                }));
            }else if(this.diff===3){
                words_temp = Object.assign([],words_temp.filter(function(w){
                    return w.indexOf(l.letter)===-1;
                }));
            }
        });
        this.words = Object.assign([], words_temp);
    }

    checkForKeyLetters(word){
        var self = this;
        word.forEach(function(letter,index){
            if(letter.state===2){
                self.keyLetters.push(letter.state===2?Object.assign(letter,{index:index}):letter)
            }
        })
    }


    createRegex(){
        let regexArr = ['\\D','\\D','\\D','\\D','\\D']
        if(this.keyLetters.length>0){
            this.keyLetters.forEach(function(letter){
                regexArr[letter.index] = letter.letter;
            })
            return new RegExp(regexArr.join(''))
        }   
    }
}