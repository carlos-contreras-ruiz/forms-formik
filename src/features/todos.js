export const setFulfilled = (payload) => ({ type: "todos/fulfilled", payload });
export const setError = (e) => ({ type: "todo/error", error: e.message });
export const setComplete = (payload) => ({ type: "todo/complete", payload });
export const setFilter = (payload) => ({
  type: "filters/filter-set",
  payload,
});

export const setPending = () => {
  return {
    type: "todo/pending",
  };
};

export const fetchThunk = () => async (dispatch) => {
  dispatch(setPending());
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((res) => res.json());

    const todos = response.slice(0, 10);

    dispatch(setFulfilled(todos));
  } catch (e) {
    dispatch(setError(e));
  }
};
