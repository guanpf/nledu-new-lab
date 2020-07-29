import Index from "./index";
const namespace = "es";
export default class Experiment extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getSearchRes(type, startPage = 1, limit = 10, keyword) {
    keyword = encodeURIComponent(keyword);
    return this.http(
      `${this.url}/${type}/${startPage}/${limit}?keyword=${keyword}`,
      "GET"
    );
  }
  getPopularSearch() {
    return this.http(`${this.url}/popularsearch`, "GET");
  }
  getSuggestion(keyword) {
    keyword = encodeURIComponent(keyword);
    return this.http(`${this.url}/suggestion?keyword=${keyword}`, "GET");
  }
}
