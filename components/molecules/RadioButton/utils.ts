import { isUndefined } from 'lodash'

const getTabIndex = (index: number, selected?: number) => {
  if (isUndefined(selected)) {
    return index === 0 ? 0 : -1
  }
  return selected === index ? 0 : -1
}

const makeId = (id: string) => id.toLowerCase().replace(/ /g, '')

export { getTabIndex, makeId }
