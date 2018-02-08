interface Action {
  type: string;
}

interface AppState {

}

export function reducer(state: AppState = {}, action: Action): AppState {
  switch (action.type) {
    default:
      return state;
  }
}