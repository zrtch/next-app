/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-11-27 17:13:58
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-27 17:18:51
 * @FilePath: \demo\next-app\app\blog\[slug]\page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function Page({ params }) {
  return <div>My Post: {JSON.stringify(params)}</div>;
}
