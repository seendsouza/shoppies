import { render } from "@testing-library/react";
import { transformResToOptions, getMovies, notify } from "../utils";
import mockData, { testData as expectedMovies } from "./mockData";

describe("Transform Response into Options format", () => {
  it("Transforms response into options format", () => {
    const actual = transformResToOptions(mockData);
    const expected = expectedMovies;
    expect(actual).toEqual(expectedMovies);
  });
  it("Returns an empty array for a falsy response", () => {
    const actual = transformResToOptions(null);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});
describe("Get Movies", () => {
  it("Returns test data", async () => {
    const actualMovies = await getMovies("");
    expect(actualMovies).toEqual(expectedMovies);
  });
});
