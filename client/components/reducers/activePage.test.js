import { NAVIGATE } from "../actions/activePage";

import activePage from "./activePage";

test("if reducer changes state on navigation", () => {
  // Mock current state
  const state = {
    MAP: "map",
    LANDING_PAGE: "landingpage",
    DETAILS: "details"
  };

  // Create action
  const action = {
    type: NAVIGATE,
    destination: state.MAP
  };

  // Expected result
  const expected = state.MAP;

  // Actual result
  const actual = activePage(state.MAP, action);

  // Compare expected to actual
  expect(actual).toEqual(expected);
});
