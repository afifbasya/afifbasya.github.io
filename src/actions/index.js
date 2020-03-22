export const setFilter = filter => ({
  type: "SET_FILTER",
  filter
});

export const setHover = (id, active) => ({
  type: "SET_HOVER",
  payload: { id, active }
});
