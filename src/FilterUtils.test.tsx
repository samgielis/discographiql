import { FilterConfiguration, filterNodes } from "./FilterUtils";

const nodeA = {
  id: "1",
  name: "a",
};
const nodeA1 = nodeA;
const nodeA2 = {
  id: "2",
  name: "a",
};
const nodeZ = {
  id: "",
  name: "z",
};

nodeA1;
const azArray = [nodeA, nodeZ];
const zaArray = [nodeZ, nodeA];

const aaArray = [nodeA, nodeA];
const aArray = [nodeA];

const configFF: FilterConfiguration = {
  sortDescending: false,
  filterDuplicates: false,
};
const configTF: FilterConfiguration = {
  sortDescending: true,
  filterDuplicates: false,
};
const configFT: FilterConfiguration = {
  sortDescending: false,
  filterDuplicates: true,
};
const configTT: FilterConfiguration = {
  sortDescending: true,
  filterDuplicates: true,
};

function givenConfigClause(config: FilterConfiguration): string {
  return `Given config {sortDescending:${config.sortDescending}, filterDuplicates:${config.filterDuplicates}}`;
}

const testSimpleCases = (config: FilterConfiguration) => {
  describe("Base case " + givenConfigClause(config), () => {
    it(`Given an empty array, when filterNodes, then empty array`, () => {
      expect(filterNodes([], config)).toEqual([]);
    });
    it(`Given a single element array , when filterNodes, then same array`, () => {
      expect(filterNodes([nodeA], config)).toEqual([nodeA]);
    });
  });
};

const testFilterDuplicates = (configXT: FilterConfiguration) => {
  describe("Filter duplicates " + givenConfigClause(configXT), () => {
    it("Given array with two duplicate elements with the same name (and id), when filterNodes, then array with single element", () => {
      expect(filterNodes(aaArray, configXT)).toEqual(aArray);
    });

    it("Given array with two duplicate elements with the same name (and id), when filterNodes, then array with single element", () => {
      expect(filterNodes(aaArray, configTT)).toEqual(aArray);
    });
  });
};

const testSortDescending = (configTX: FilterConfiguration) => {
  describe("sort Descending " + givenConfigClause(configTX), () => {
    it("Given an array with elements sorted alphabetically descending, when filterNodes, then same array", () => {
      expect(filterNodes(zaArray, configTX)).toEqual(zaArray);
    });

    it("Given an array with elements sorted alphabetically ascending, when filterNodes, then array sorted descending", () => {
      expect(filterNodes(azArray, configTX)).toEqual(zaArray);
    });
  });
};

const testSortAscending = (configFX: FilterConfiguration) => {
  describe("sort Ascending " + givenConfigClause(configFX), () => {
    it("Given an array with elements sorted alphabetically descending, when filterNodes, then array sorted ascending", () => {
      expect(filterNodes(zaArray, configFX)).toEqual(azArray);
    });

    it("Given an array with elements sorted alphabetically ascending, when filterNodes, then same array", () => {
      expect(filterNodes(azArray, configFX)).toEqual(azArray);
    });
  });
};

describe("filterNodes", () => {
  const allConfigCombinations = [configFF, configFT, configTF, configTT];
  allConfigCombinations.forEach(testSimpleCases);
  [configFT, configTT].forEach(testFilterDuplicates);
  [configFF, configFT].forEach(testSortAscending);
  [configTF, configTT].forEach(testSortDescending);
});
