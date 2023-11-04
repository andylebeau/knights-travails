// const directions = [
//     [1, 2],
//     [2, 1],
//     [2, -1],
//     [1, -2],
//     [-1, -2],
//     [-2, -1],
//     [-2, 1],
//     [-1, 2],
//   ];

function Node(position, path) {
  const [x, y] = [...position];
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    return null;
  }
  return { position, path };
}

function knightsTravails([x, y], [targetX, targetY]) {
  const nextMove = [x, y];
  const queue = [Node([x, y], [nextMove])];
  let node = queue.shift();

  while (node.position[0] !== targetX || node.position[1] !== targetY) {
    // possible nextMoves (neighbors)

    let neighbors = [
      [node.position[0] + 1, node.position[1] + 2],
      [node.position[0] + 2, node.position[1] + 1],
      [node.position[0] + 2, node.position[1] - 1],
      [node.position[0] + 1, node.position[1] - 2],
      [node.position[0] - 1, node.position[1] - 2],
      [node.position[0] - 2, node.position[1] - 1],
      [node.position[0] - 2, node.position[1] + 1],
      [node.position[0] - 1, node.position[1] + 2],
    ];

    neighbors.forEach((nextMove) => {
      const newNode = Node(nextMove, node.path.concat([nextMove]));
      if (newNode) {
        queue.push(newNode);
      }
    });

    node = queue.shift();
  }

  console.log(
    `=> You made it in ${node.path.length - 1} moves!  Here's your path:`
  );

  node.path.forEach((position) => {
    const [row, col] = [...position];
    console.log(`[${row}, ${col}]`);
  });
}

knightsTravails([3, 3], [4, 3]);
