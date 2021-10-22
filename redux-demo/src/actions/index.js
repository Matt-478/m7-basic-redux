// a place for action creators - function returning actions, so we can call a function
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

export const increaseAction = () => ({
  type: INCREASE,
})

export const decreaseAction = () => ({
  type: DECREASE
})