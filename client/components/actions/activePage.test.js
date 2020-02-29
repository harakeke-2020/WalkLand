// Import action constant and action function.
import { NAVIGATE, activePage } from "./activePage";

// Unit test for the current active page.
test("the current active page", () => {
  // Mock destinations
  const destinations = {
    MAP: "map",
    LANDING_PAGE: "landingpage",
    DETAILS: "details"
  };

  // Expected result from test.
  const expected = {
    type: NAVIGATE,
    destination: destinations.MAP
  };

  // Actual result from function.
  const actual = activePage(destinations.MAP);

  // Compare expected result to actual result.
  expect(actual).toEqual(expected);
});
