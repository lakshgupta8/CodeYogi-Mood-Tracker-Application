import type { State } from "../store";

export const happyMomentSelector = (state: State) => state.happy.happyMoments;

export const sadMomentSelector = (state: State) => state.sad.sadMoments;
