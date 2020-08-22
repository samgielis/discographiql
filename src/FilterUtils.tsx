import { NamedNode } from "./DataModel";

export interface FilterConfiguration {
  sortDescending: boolean;
  filterDuplicates: boolean;
}

export const DEFAULT_FILTER_CONFIG = {
  sortDescending: false,
  filterDuplicates: false,
};

function uniqueNameReducer<T extends NamedNode>(set: T[], currentValue: T) {
  const hasEntryWithSameName = !!set.find((element) => {
    return element.name === currentValue.name;
  });

  return hasEntryWithSameName ? set : [...set, currentValue];
}

function sortyByName<T extends NamedNode>(set: T[], descending: boolean): T[] {
  return set.slice().sort((node1, node2) => {
    if (!descending) {
      return node1.name.localeCompare(node2.name);
    } else {
      return node2.name.localeCompare(node1.name);
    }
  });
}

export function filterNodes<T extends NamedNode>(
  nodes: T[],
  configuration: FilterConfiguration
): T[] {
  let result = nodes;

  if (configuration.filterDuplicates) {
    result = nodes.reduce<T[]>(uniqueNameReducer, []);
  }

  result = sortyByName(result, configuration.sortDescending);

  return result;
}
