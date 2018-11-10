const Game = require('./bowling-game');

describe('Bowling Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });


  it(' scores 0 if the player didnt touch a pin', () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  })

  it('scores 1 every time', () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  })

  it(' test one spare', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });

  it('test one strike', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });

  it('test perfect game', () => {
    rollMany(12,10);
    expect(game.score()).toBe(300);
  });

  const rollMany = (n, pins) => {
    for ( let i=0; i < n; i++ ) {
      game.roll(pins);
    }
  }

  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  }

  const rollStrike = () => {
    game.roll(10);
  }
})