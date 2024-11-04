const kettle = {
  top: [
    [0, 2, 1, 1, 0, 0, 2, 4, 5, 1, 4, 2, 1, 1, 8],
    [0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 7, 7, 6, 3, 3],
  ],

  left: [
    [0, 0, 5, 0, 1, 1, 1, 1, 1, 0, 0, 5, 0, 0, 7],
    [0, 8, 1, 0, 1, 8, 0, 1, 7, 0, 2, 5, 0, 0, 7],
  ],

  game: [
    [0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
  ],

  name: 'kettle',
  size: '10x10',
  count: 62,
  playFieldWidth: '254px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '77px',
};

const apple = {
  top: [
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 4, 4, 3, 4, 6],
    [0, 0, 3, 1, 0, 1, 1, 1, 2, 0, 6, 6, 4, 2, 4],
  ],

  left: [
    [0, 0, 4, 0, 4, 1, 0, 5, 2, 0, 4, 1, 0, 2, 5],
    [1, 4, 2, 0, 5, 1, 0, 5, 1, 0, 0, 7, 0, 0, 5],
  ],

  game: [
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  ],

  name: 'apple',
  size: '10x10',
  count: 59,
  playFieldWidth: '254px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '77px',
};

const cat = {
  top: [
    [0, 3, 2, 1, 0, 0, 1, 4, 1, 0, 3, 1, 1, 4, 5],
    [0, 1, 0, 0, 0, 0, 1, 2, 3, 0, 5, 5, 4, 1, 3],
  ],

  left: [
    [0, 0, 0, 2, 2, 0, 0, 0, 3, 3, 0, 0, 1, 2, 1, 0, 0, 1, 6, 1, 1, 1, 2, 1, 1],
    [0, 0, 1, 6, 1, 0, 0, 0, 0, 8, 0, 0, 0, 1, 1, 0, 0, 0, 2, 1, 0, 0, 0, 1, 1],
  ],

  game: [
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  ],

  name: 'cat',
  size: '10x10',
  count: 51,
  playFieldWidth: '254px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '127px',
};

const saucepan = {
  top: [
    [0, 1, 0, 0, 0, 3, 1, 4, 4, 0, 2, 2, 2, 2, 8],
    [0, 0, 2, 0, 0, 0, 6, 3, 1, 1, 8, 2, 2, 2, 2],
  ],

  left: [
    [0, 1, 0, 2, 3, 3, 1, 8, 1, 6],
    [0, 7, 0, 4, 0, 2, 0, 10, 0, 10],
  ],

  game: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],

  name: 'saucepan',
  size: '10x10',
  count: 58,
  playFieldWidth: '254px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '52px',
};

const lama = {
  top: [
    [2, 6, 4, 4, 4],
    [6, 7, 5, 2, 2],
  ],

  left: [
    [0, 1, 0, 4, 0, 4, 1, 2, 0, 8],
    [0, 7, 0, 6, 0, 5, 1, 1, 1, 1],
  ],

  game: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  ],

  name: 'lama',
  size: '10x10',
  count: 42,
  playFieldWidth: '254px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '52px',
};

export {
  kettle, apple, cat, saucepan, lama,
};
