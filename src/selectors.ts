import type { State } from "./store";

export const happyCountSelector = (state: State) => state.happyCount;

export const sadCountSelector = (state: State) => state.sadCount;
