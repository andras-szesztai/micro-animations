import { isUndefined } from 'lodash'

export const getTabIndex = (index: number, selected?: number) => {
  if (isUndefined(selected)) {
    return index === 0 ? 0 : -1
  }
  return selected === index ? 0 : -1
}
