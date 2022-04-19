import { makeId } from './utils'

describe('makeId', () => {
  it('replaces single space in string', () => {
    const id = makeId('first floor')
    expect(id).toBe('firstfloor')
  })
})
