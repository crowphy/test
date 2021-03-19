const SCORES = [2, 3, 0, 4, 5, 1, 8, 1, 9];
const STATES = [0, 1, 1, 1, 0, 1, 0, 1, 1];
const SLEEP_COUNT = 2;

const maxScore = () => {
    const wakeScores = [];
    let score = 0;
    for (let index = 0; index < SCORES.length; index++) {
        if (STATES[index]) {
            wakeScores.push(SCORES[index]);
        } else {
            score += SCORES[index];
        }
    }
    return wakeScores.sort((a, b) => b - a).slice(0, SLEEP_COUNT).reduce((acc, cur) => {
        return acc + cur;
    }, score);
}

const score = maxScore();
console.log(score);