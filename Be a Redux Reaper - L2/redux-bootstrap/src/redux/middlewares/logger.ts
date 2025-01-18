/* eslint-disable @typescript-eslint/ban-ts-comment */
//creating a logger middleware using curring function
// @ts-expect-error
const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("Prev State", state.getState());
  const result = next(action); // must provide action inside next func or else redux application will not work
  console.info("Next State", state.getState());
  console.groupEnd();
  return result;
};

export default logger; // used in store.ts
