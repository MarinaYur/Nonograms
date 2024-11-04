const airplane = {
  top: [[0, 2, 0, 2, 0, 1, 1, 5, 1, 1]],

  left: [[1, 3, 5, 1, 3]],

  game: [[
    0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0,
  ]],

  name: 'airplane',
  size: '5x5',
  count: 13,
  playFieldWidth: '127px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '26px',
};

const hourglass = {
  top: [[1,2,3,2,1,1,2,1,2,1]],

  left: [[0,5,0,3,0,1,1,1,0,5]],

  game: [[1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1]],

  name: 'hourglass',
  size: '5x5',
  count: 16,
  playFieldWidth: '127px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '52px',
};

const heart = {
  top: [[2,1,1,1,2,0,1,1,1,0]],

  left: [[0,1,1,1,1,1,0,1,1,0,1,1,0,0,1]],

  game: [[0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0]],

  name: 'heart',
  size: '5x5',
  count: 10,
  playFieldWidth: '127px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '77px',
};

const five = {
  top: [[0,1,1,1,0,3,1,1,1,1,1,1,1,1,3]],

  left: [[5,1,5,1,5]],

  game: [[1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1]],

  name: 'five',
  size: '5x5',
  count: 17,
  playFieldWidth: '127px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '26px',
};

const dog = {
  top: [[1,3,2,5,1]],

  left: [[0,1,1,3,0,3,1,1,1,1]],

  game: [[0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0]],

  name: 'dog',
  size: '5x5',
  count: 12,
  playFieldWidth: '127px',
  gameButtonBlock: '127px',
  gameButtonBlockLeft: '52px',
};
export { airplane, hourglass, heart, five, dog };
