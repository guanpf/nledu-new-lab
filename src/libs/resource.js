/*
* 跳转到资源预览函数
* */
import {getPlatformCode} from "@/libs/platformLib";
import hcrtc from "@/api/HCRes/hcrtc";




const redirectToRtcDetail = (rtcId, option, vue) => {
    let platformCode = getPlatformCode()

    let hcrtcModel = new hcrtc()
    option = option || {}
    hcrtcModel.checkres(rtcId).then(e=> {
        let url = null
        if (platformCode === 8) {
            // eres
            url = vue.$router.resolve({
                name: 'eres-preview-resource',
                query: {
                    resid: rtcId
                }
            })
        }else if(platformCode === 9) {
            // eonline
            url = vue.$router.resolve({
                name: 'eonline-resourcePlay',
                query: {
                    rtcId: rtcId,
                    ...option
                }
            })
        }

        if (url) {
            window.open(url.href, 'preview_rtc');
        }


    }).catch(e=> {
        // 后端返回code 不为200，自动处理了弹errormessage
        console.log(e);
    })



}

/*
* 上传的资源文件
* */
const rtcFileType = {}


export {
    redirectToRtcDetail,
    rtcFileType
}
