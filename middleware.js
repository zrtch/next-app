import { NextResponse } from "next/server";

// 中间件可以是 async 函数，如果使用了 await
export function middleware(request) {
    let cookie = request.cookies.get('nextjs');
    console.log(cookie)
}

// 设置匹配路径
export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'],
}

