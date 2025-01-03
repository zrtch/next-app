/*
 * @Author: zrt 15970334351@163.com
 * @Date: 2024-11-15 15:14:00
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-28 10:52:04
 * @FilePath: \demo\next-app\app\page.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import Link from "next/link";
// import { photos } from "./data";

// export default function Home() {
//   return (
//     <main className="flex flex-row flex-wrap">
//       {photos.map(({ id, src }) => (
//         <Link key={id} href={`/photo/${id}`}>
//           <img width="200" src={src} className="m-1" />
//         </Link>
//       ))}
//     </main>
//   );
// }


// async function getData() {
//   const res = await fetch('https://api.thecatapi.com/v1/images/search', { next: { tags: ['collection'] } })
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

// export default async function Page() {
//   const data = await getData()

//   return <img src={data[0].url} width="300" />
// }



// 缓存
async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  // 因为设置了 fetch 不缓存，页面自动从静态渲染转为动态渲染，所以每次刷新，接口都会返回新的图片。
  const { signal } = new AbortController()
  const res = await fetch('https://api.thecatapi.com/v1/images/search', { signal })
  return res.json()
}

export async function generateMetadata() {
  const data = await getData()
  return {
    title: data[0].id
  }
}

export default async function Page() {
  const data = await getData()
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" />
      <CatDetail />
    </>
  )
}

async function CatDetail() {
  const data = await getData()
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" />
    </>
  )
}