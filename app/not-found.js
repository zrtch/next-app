/*
 * @Author: zhourentian 15970334351@163.com
 * @Date: 2024-11-26 15:38:01
 * @LastEditors: zhourentian 15970334351@163.com
 * @LastEditTime: 2024-11-26 15:38:18
 * @FilePath: \demo\next-app\app\not-found.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
        </>
    );
}