import { createMachine, assign } from "xstate";

const revive = (context) => {
  return context.lifespan > 0;
};

const gameOver = (context) => {
  return context.lifespan <= 0;
};

export const marioMachine = createMachine({
  id: "mario-bross",
  initial: "mario",
  context: {
    score: 0,
    lifespan: 3,
  },
  states: {
    mario: {
      on: {
        TAKE_COIN: {
          actions: assign({
            score: (context) => context.score + 200,
          }),
        },
        EAT_SM: {
          actions: assign({
            score: (context) => context.score + 1000,
          }),
          target: "superMario",
        },
        EAT_1UP_M: {
          actions: assign({
            lifespan: (context) => context.lifespan + 1,
          }),
        },
        GET_DAMAGE: [
          {
            cond: revive,
            actions: assign({
              lifespan: (context) => context.lifespan - 1,
            }),
          },
          {
            cond: gameOver,
            target: "gameOver",
          },
        ],
      },
    },
    superMario: {
      on: {
        TAKE_COIN: {
          actions: assign({
            score: (context) => context.score + 200,
          }),
        },
        EAT_SM: {
          actions: assign({
            score: (context) => context.score + 1000,
          }),
          target: "fireMario",
        },
        EAT_1UP_M: {
          actions: assign({
            lifespan: (context) => context.lifespan + 1,
          }),
        },
        GET_DAMAGE: {
          target: "mario",
        },
      },
    },
    fireMario: {
      on: {
        TAKE_COIN: {
          actions: assign({
            score: (context) => context.score + 200,
          }),
        },
        EAT_SM: {
          actions: assign({
            score: (context) => context.score + 1000,
          }),
        },
        EAT_1UP_M: {
          actions: assign({
            lifespan: (context) => context.lifespan + 1,
          }),
        },
        GET_DAMAGE: {
          target: "mario",
        },
      },
    },
    gameOver: {
      type: "final",
    },
  },
});
