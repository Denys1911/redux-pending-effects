declare namespace RPE {
  interface State {
    effectsEntity: Record<string, boolean>;
  }

  interface PayloadAction<T, P> {
    type: T;
    payload: P;
  }
}
