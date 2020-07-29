import Index from "./index";
const namespace = "contesttraining";

export default class Team extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  
  /**
   * 获取团队信息
   * @param startPage 第几页
   * @param limit 分页每页条数
   * @param teamType  团队类型
   * @param keyword 关键字
   * @param type  产品类型
   * @returns {Promise<boolean|*>}
   */
  getTeam({startPage = 1, limit = 10, teamType = 1, keyword = "", type}) {
    return this.http(
      `${this.url}/team/${type}/${teamType}/${startPage}/${limit}` + (keyword ? `?keyword=${keyword}` : ""),
      "GET",
    )
  }
  
  addTeam(content) {
    return this.http(
      `${this.url}/team`,
      "POST",
      content
    )
  }
  
  updateTeam(content) {
    return this.http(
      `${this.url}/team`,
      "PUT",
      content
    )
  }
  
  deleteTeam(teamId) {
    return this.http(
      `${this.url}/team/${teamId}`,
      "DELETE",
    )
  }
  
  batchDeleteTeam(team) {
    return this.http(
      `${this.url}/team`,
      "DELETE",
      team
    )
  }

  deleteSeat(teamId){
    /**
     * 删除赛位
     */
    return this.http(
        `${this.url}/team/delcontestteam`,
        "DELETE",
        teamId
    )
  }

  addSeat(content){
    /**
     * 新增/修改赛位
     */
    return this.http(
        `${this.url}/team/editContestTeam`,
        "POST",
        content
    )
  }
}
