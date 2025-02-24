/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-12-04 16:43:01
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-12-04 16:45:43
 * @FilePath: \demo\next-app\app\api\image\route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: { revalidate: 5 },
  })
  const data = await res.json()
  return Response.json(data)
}