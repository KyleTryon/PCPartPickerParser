import {getPartsList} from '../src/index'


describe("Fetch a sample parts list", () => {
  test("Test 404 page", async() => {
    await expect(getPartsList('x')).rejects.toThrowError()
  })
  test("Get list results", async() => {
    await expect(getPartsList('test')).resolves.not.toThrowError()
  })
  test("Fetch list containing CPU", async() => {
    await expect(getPartsList('test')).resolves.toEqual(expect.arrayContaining([
      expect.objectContaining({
        type: 'CPU'
      })
    ]))
  })
})