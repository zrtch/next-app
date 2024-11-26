/*
 * @Author: zrt 15970334351@163.com
 * @Date: 2024-11-15 15:14:00
 * @LastEditors: zrt 15970334351@163.com
 * @LastEditTime: 2024-11-15 15:19:04
 * @FilePath: \demo\next-app\app\page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

export default function Page() {
  return (
    <React.Profiler id="hello">
      <p>hello app server</p>
    </React.Profiler>
  )
}