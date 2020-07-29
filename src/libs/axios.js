import Axios from "axios";
import Storage from "../store";
import {getPlatformToken} from "./platformLib";

export default {
  customAxios(config) {
    var axios_instance = Axios.create({
      //baseURL: 'https://some-domain.com/api/',
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
      ...config
    });

    axios_instance.interceptors.request.use(
      function(config) {
        // let token = Storage.state.tokenModule.token;
        let token = getPlatformToken()
        if (token) {
          token = "Bearer" + " " + token.replace(/'|"/g, "");
          config.headers.common["Authorization"] = token;
        }
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );

    return axios_instance;
  }
};
