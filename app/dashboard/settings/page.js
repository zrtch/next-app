/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-11-26 14:41:58
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-27 11:08:36
 * @FilePath: \demo\next-app\app\dashboard\settings\page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'

import { useSearchParams } from "next/navigation"
export default function Page() {
  const searchParams = useSearchParams()

  function updateSorting(sortOrder){
    const params = new URLSearchParams(searchParams)
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <div>
      <button onClick={() => updateSorting('asc')}>Asc</button>
      <button onClick={() => updateSorting('desc')}>Desc</button>
    </div>
  )

  }