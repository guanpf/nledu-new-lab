import Index from "./index";

const namespace = "org";

/*
 * 查询所属组织树状数据
 *
 * @return {
 *    code: 0,
 *    data: [{}],
 *    message: 'success'
 *  }
 * */
export default class Org extends Index {
  constructor() {
    super();
    this.url = `${this.url || ""}/${namespace}`;
  }
  getOrg() {
    return this.http(`${this.url}/eusmgr_org`, "GET")
  }
  getOrgData() {
    return this.http(this.url + '/treeUserOrg', 'GET')
  }
  postOrgData(id, label, parentId, remark, orgType) {
    return this.http(
      this.url + '/addOrUpdateOrg',
      'POST',
      {
        'id': id,
        orgName: label,
        'parentId': parentId,
        'remark': remark,
        'orgType': orgType
      }
      )
  }
}
