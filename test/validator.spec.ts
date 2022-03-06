/*
 * @Author: your name
 * @Date: 2022-03-05 22:38:26
 * @LastEditTime: 2022-03-06 15:55:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /web-toolkit/test/validator.spec.ts
 */
import { isJSON } from '../index'

describe('validator test', () => {
    it('is json str?', () => {
        expect(isJSON('1234')).toBe(false)
        expect(isJSON('{"a":1}')).toBe(true)
        expect(isJSON('{a:1}')).toBe(false)
        expect(isJSON(JSON.stringify({a: 1}))).toBe(true)
    })
})