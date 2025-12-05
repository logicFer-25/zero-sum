

class ScoreManager {

    constructor() {
        if (ScoreManager.instance) {
            return ScoreManager.instance;
        }

        this.userScore = 0;
        this.botScore = 0;

        ScoreManager.instance = this;
    }

    
    addUserPoint() {
        this.userScore++;
    }

    addBotPoint() {
        this.botScore++;
    }

    
    getUserScore() {
        return this.userScore;
    }

    getBotScore() {
        return this.botScore;
    }

    
    resetScores() {
        this.userScore = 0;
        this.botScore = 0;
    }
}

export const scoreManager = new ScoreManager(); 