export class LocalStorage {
  static getItem(key) {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item) {
      return false;
    }
    const { val, expire } = item;
    if (expire <= +new Date()) {
      return false;
    }
    return val;
  }
  static setItem(key, val, expire) {
    // expire: 传入date对象就直接记录，传入时间戳则转换为 +new Date() + expire * 1000
    if (typeof val === "object") {
      val = JSON.stringify(val);
    }
    localStorage.setItem(
      key,
      JSON.stringify({ val, expire: getExpirtTime(expire) })
    );
  }
  static removeItem(key) {
    localStorage.removeItem(key);
  }
  static clear() {
    localStorage.clear();
  }
}

export class SessionStorage {
  static getItem(key) {
    let { val, expire } = JSON.parse(sessionStorage.getItem(key));
    if (expire > +new Date()) {
      return val;
    }
    return false;
  }
  static setItem(key, val, expire) {
    if (typeof val === "object") {
      val = JSON.stringify(val);
    }
    sessionStorage.setItem(
      key,
      JSON.stringify({ val, expire: getExpirtTime(expire) })
    );
  }
  static removeItem(key) {
    sessionStorage.removeItem(key);
  }
  static clear() {
    sessionStorage.clear();
  }
}

export class Cookie {
  static getItem(key) {
    let name = key + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }
  static setItem(key, val, expire = 86400) {
    if (expire !== 0) {
      let d = new Date(+new Date() + expire * 1000);
      let expires = "expires=" + d.toGMTString();
      document.cookie = `${key}=${val};${expires};path=/`;
    } else {
      document.cookie = `${key}=${val};path=/`;
    }
  }
  static removeItem(key) {
    this.setItem(key, " ", -1);
  }
}
function getExpirtTime(time) {
  if (typeof time === "object") {
    return +time;
  }
  const now = +new Date();
  return now + time * 1000;
}
