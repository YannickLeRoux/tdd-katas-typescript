class Game {

  private currentRoll: number = 0;
  private rolls: number[] = [];

  public roll(pinsDown: number) {
    this.rolls[this.currentRoll++] = pinsDown;
  }

  public score(): number {

    let score: number = 0;
    let frameIndex: number = 0;

    for (let frame: number = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        console.log(frame, score);
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if ( this.isSpare(frameIndex) ) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }

  private sumOfBallsInFrame(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1 ] === 10;
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10;
  }

  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2];
  }

  private strikeBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }


}

module.exports = Game;
