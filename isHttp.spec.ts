import { it, expect, describe } from 'vitest'
import { isHttp } from "./utils";

describe('isHttp', () => {
  it('should return true for the specific case: http://www.baidu.com', () => {
    const url = 'http://www.baidu.com'
    expect(isHttp(url)).toBeTruthy()
  })
  it('should return false for non-http URLs', () => {
    const url = 'http://www.goole.com'
    expect(isHttp(url)).toBeTruthy()
  })
})