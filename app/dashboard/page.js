import { use } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    message: "Hello, Dashboard!",
  };
}

export default function Page(props) {
  const { message } = use(getData());
  return <h1>{message}</h1>;
}
