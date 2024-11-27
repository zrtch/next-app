/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-11-15 15:14:00
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-27 18:07:42
 * @FilePath: \demo\next-app\app\layout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";



export default function RootLayout({ children, team }) {
  return (
    <html>
      <body className="p-6">
        <div className="p-10 mb-6 bg-sky-600 text-white rounded-xl">
          Parallel Routes Examples
        </div>
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/">Home</Link>
          <Link href="/page-views">Page Views</Link>
          <Link href="/visitors">Visitors</Link>
        </nav>
        <div className="flex gap-6">
          {team}
        </div>
        {children}
      </body>
    </html>
  );
}
