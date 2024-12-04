/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-12-04 16:19:55
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-12-04 16:36:02
 * @FilePath: \demo\next-app\app\api\posts\route.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const field = request.nextUrl.searchParams.get("dataField")
  const data = await ((await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)).json())
  const result = field ? { [field]: data[field] } : data
  return NextResponse.json(result)
}