import Base from "./base";
const namespace = "api/";
// import qs from "qs";

let base = new Base();

export function play(data) {
  console.log(base);
  let url = `/${namespace}teach_class/play`;
  return base.http(url, "POST", data)
}

