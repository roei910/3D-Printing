import { SuggestionsComponent } from "../main-content/suggestions/suggestions.component";

export const formDeactivateGuard = (component: SuggestionsComponent) => {
  return component.canExit();
};
