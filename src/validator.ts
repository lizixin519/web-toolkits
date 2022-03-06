/*
 * @Author: your name
 * @Date: 2022-03-06 15:44:31
 * @LastEditTime: 2022-03-06 16:31:12
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /web-toolkit/src/validator.ts
 */
export const isJSON = (str: string) => {
    try {
        const obj = JSON.parse(str);
        return !!obj && typeof obj === 'object'
    } catch(e){
        return false
    }
}