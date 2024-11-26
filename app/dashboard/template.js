/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-11-26 14:35:37
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-26 14:43:30
 * @FilePath: \demo\next-app\app\template.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use client'

import { useState } from 'react'

export default function Template({ children }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {children}
    </>
  )
}