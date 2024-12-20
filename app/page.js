/*
 * @Author: zrt 15970334351@163.com
 * @Date: 2024-11-15 15:14:00
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-28 10:52:04
 * @FilePath: \demo\next-app\app\page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from "next/link";
import { photos } from "./data";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/photo/${id}`}>
          <img width="200" src={src} className="m-1" />
        </Link>
      ))}
    </main>
  );
}