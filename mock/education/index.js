const training = require('./training.js');
const experiment = require('./experiment.js');
const exam = require('./exam.js');

const examTrain= require('./examTrain.js');
const formalexam = require('./formalExam');


module.exports = [
  {
    url: "/nledu-etmlab-education/portal/student/trends",
    type: "get",
    response: _ => ({
      code: "0",
      data: [
        {
          courseName: "大数据技术原理与应用",
          index: -1,
          list: [
            {
              catalogId: "6dd5e212c1d342edbb0ca96aba4f2e7e",
              date: 1558627200000,
              index: 0,
              lessonName: "第一章  大数据概述",
              practices: null,
              prepares: null
            },
            {
              catalogId: "c380608fd0e949e88205bb066bd180c0",
              date: 1559232000000,
              index: 1,
              lessonName: "第二章  大数据处理架构hadoop",
              practices: [],
              prepares: null
            }
          ]
        }
      ],
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-education/portal/student/curriculumSchedule",
    type: "get",
    response: _ => ({
      code: "0",
      data: { curriculumScheduleList: [] },
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-education/experiment/close",
    type: "put",
    response: _ => ({
      code: "0",
      data: null,
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-education/experiment/reset",
    type: "put",
    response: _ => ({
      code: "0",
      data: null,
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-education/portal/teacher/courseProgress",
    type: "get",
    response: _ => ({
      code: "0",
      data: [
        {
          classMsgList: [
            {
              classCourseCnt: 3,
              classId: "455efdb779e911e982fd02420a000018",
              className: "2017软件1班"
            },
            {
              classCourseCnt: 1,
              classId: "9bc9ebd279e911e982fd02420a000018",
              className: "2017软件2班"
            },
            {
              classCourseCnt: 3,
              classId: "455efdb779e911e982fd02420a000018",
              className: "2017软件1班"
            }
          ],
          courseId: "34a1195d8e524273ad65e54793565d8f",
          courseName: "大数据技术原理与应用",
          totalCourse: 4,
          totalPrepareCourse: 2
        }
      ],
      message: "success"
    })
  },
  {
    url:
      "/nledu-etmlab-education/portal/teacher/curriculumSchedule/20190601/20190630",
    type: "get",
    response: _ => ({
      code: "0",
      data: {
        prepareLessonList: [
          {
            catalogNames: null,
            classPeriod: null,
            classScheduleInfos: null,
            courseDesigns: null,
            courseName: null,
            createOrg: "a8af6c56492e11e9976602420a00000a",
            createPerson: "c79fae6a720611e982fd02420a000018",
            createTime: 1558835110000,
            curriculumScheduleBos: null,
            curriculumScheduleIdList: ["284103727aec11e9818902420a00001c"],
            id: "c1c3094ec1274e94840e70931b326c50",
            isValid: "1",
            name: null,
            prepareLessonDirectoryBos: [
              {
                catalog: null,
                contents: [
                  {
                    contentId: "41f50e027cfd41c2920efdcef04296e1",
                    contentType: "1",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "80495dd2991d4a6cb26371e95d56321e",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  },
                  {
                    contentId: "04c485bbb6404ab3abcc2bfe03275e59",
                    contentType: "2",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "8214175e04e946ab9d04aef1b95187b2",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  },
                  {
                    contentId: "9cc370b92df94377a6b79a529ebb5c89",
                    contentType: "3",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "88ff990edbdc45db8664322c9ae9389a",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  },
                  {
                    contentId: "5883870df6dc4303a1b2c997c58ef505",
                    contentType: "2",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "9cb84131d48f477caa6bae92e993b03d",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  }
                ],
                createOrg: "a8af6c56492e11e9976602420a00000a",
                createPerson: "c79fae6a720611e982fd02420a000018",
                createTime: 1558835110000,
                etmeduPrepareLessonId: "c1c3094ec1274e94840e70931b326c50",
                etmresCatalogId: "6dd5e212c1d342edbb0ca96aba4f2e7e",
                id: "45edee2706e94caea786fbdf7da61fff",
                isValid: "1",
                updateOrg: null,
                updatePerson: null,
                updateTime: null
              },
              {
                catalog: null,
                contents: [
                  {
                    contentId: "57699597bd144b66b008aa0418b9af94",
                    contentType: "1",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "56722f1a00254ab3bcf925db383e55da",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  },
                  {
                    contentId: "71b03785b6344ed5b963a9dead6f4296",
                    contentType: "2",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "9db0c482ea0045b38aadf1cb12ca54fb",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  },
                  {
                    contentId: "66773d7f403045e18cb3132b16b7a442",
                    contentType: "1",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "c5c2c7b9518147b79c8e73ee58855365",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  },
                  {
                    contentId: "0eb779bd6c61400f9c2270bb32f06a82",
                    contentType: "3",
                    createOrg: "a8af6c56492e11e9976602420a00000a",
                    createPerson: "c79fae6a720611e982fd02420a000018",
                    createTime: 1558835110000,
                    etmeduPrepareLessonDirecotryId: null,
                    id: "decaf034b9474b05a147fb6ea614969e",
                    isValid: "1",
                    updateOrg: null,
                    updatePerson: null,
                    updateTime: null
                  }
                ],
                createOrg: "a8af6c56492e11e9976602420a00000a",
                createPerson: "c79fae6a720611e982fd02420a000018",
                createTime: 1558835110000,
                etmeduPrepareLessonId: "c1c3094ec1274e94840e70931b326c50",
                etmresCatalogId: "c380608fd0e949e88205bb066bd180c0",
                id: "f387fb57193d4627a31a511b76e41eb6",
                isValid: "1",
                updateOrg: null,
                updatePerson: null,
                updateTime: null
              }
            ],
            semesterName: null,
            status: "2",
            teacherName: null,
            tenantName: null,
            updateOrg: "a8af6c56492e11e9976602420a00000a",
            updatePerson: "c79fae6a720611e982fd02420a000018",
            updateTime: 1558835110000
          }
        ],
        curriculumScheduleList: [
          {
            catalogNames: [
              "第一章  大数据概述",
              "第二章  大数据处理架构hadoop"
            ],
            classDay: 1559750400000,
            classIds: ["455efdb779e911e982fd02420a000018"],
            classNames: ["2017软件1班"],
            classOverTime: 57599000,
            classRoomAddres: "1401",
            classRoomName: "大数据实验教室",
            classTime: -28799000,
            courseClass: 3,
            courseName: "大数据技术原理与应用",
            courseType: null,
            etmeaClassroomId: null,
            etmeaSemesterId: null,
            etmresCourseId: "34a1195d8e524273ad65e54793565d8f",
            eusmgrUserIds: null,
            id: "284103727aec11e9818902420a00001c",
            prepareLessonId: "c1c3094ec1274e94840e70931b326c50",
            prepareStatus: "3",
            section: "2",
            semesteName: null,
            teacherId: "c79fae6a720611e982fd02420a000018",
            teacherName: "陈建平",
            tenantName: null
          }
        ]
      },
      message: "success"
    })
  },
  {

    url: "/nledu-etmlab-education/prepare_lesson/step_first/284103727aec11e9818902420a00001c",
    type: "get",
    response: _ => ({"code":"0","data":{"catalogInfos":[{"catalogModifyStatus":null,"catalogName":"第一章  大数据概述","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"0dbf0bdd2227452ea87c0a5ee3ec6ad3","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson0-厦门大学林子雨主讲-大数据技术原理与应用-第0讲-课程介绍.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"e6a5966fc07f4d499c17c3e402e24c51","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter1-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第1章-大数据概述（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"大数据概述；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"f58aa5753bf04406b708b80454181233","id":"41f50e027cfd41c2920efdcef04296e1","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"f58aa5753bf04406b708b80454181233","isValid":"1","serialNumber":"1","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"e6a5966fc07f4d499c17c3e402e24c51","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter1-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第1章-大数据概述（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"6dd5e212c1d342edbb0ca96aba4f2e7e","introduce":"介绍大数据的基本概念和应用领域，并阐述大数据、云计算和物联网的相互关系","isChecking":null,"knowledges":[{"id":"5883870df6dc4303a1b2c997c58ef505","index":null,"isChecking":null,"isLessonOver":null,"name":"大数据基本概念","requirement":null,"summary":null},{"id":"04c485bbb6404ab3abcc2bfe03275e59","index":null,"isChecking":null,"isLessonOver":null,"name":"大数据应用领域","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"0dbf0bdd2227452ea87c0a5ee3ec6ad3","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson0-厦门大学林子雨主讲-大数据技术原理与应用-第0讲-课程介绍.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"9cc370b92df94377a6b79a529ebb5c89","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握大数据基本概念","requirement":null,"summary":null}],"sn":"C01","sort":0,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第二章  大数据处理架构hadoop","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"071df312a0d2402fb1cbc791b668ac64","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"5d6b2efa9a974ec3a47423da5c2bad96","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"64430cfe19444842ba3de7e18a6b758b","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter2-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第2章-大数据处理架构Hadoop（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"981616d69be3476185ed383f521420ec","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"cb6cd5cbba15413da8ef74729104c249","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"e6c3bccc6bea4b0ab6763805dea8d85a","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"01大数据概论.docx","rtcSuffix":"docx","rtcType":"1","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"大数据处理架构Hadoop；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"89a13126033f4a85ba253afdcf4c44ee","id":"66773d7f403045e18cb3132b16b7a442","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"c380608fd0e949e88205bb066bd180c0","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"89a13126033f4a85ba253afdcf4c44ee","isValid":"1","serialNumber":"2","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000},{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"实验：Hadoop环境搭建；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"8f02c1caee3c498cb202773a46af5562","id":"57699597bd144b66b008aa0418b9af94","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"c380608fd0e949e88205bb066bd180c0","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"8f02c1caee3c498cb202773a46af5562","isValid":"1","serialNumber":"3","sn":null,"teachMode":"实验","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[{"catalogName":null,"configs":null,"courseName":null,"etmresCourseId":null,"experimentDesc":"本实验课程介绍Hadoop的具体安装方法","experimentGroup":1,"experimentName":"Hadoop的安装和使用","experimentScenario":"8","experimentTime":90,"handouts":null,"id":"652bf006d26b48d182c38540f890d5fb","isChecking":null,"manuals":null,"miniVideos":null,"summarys":null,"textbooks":null,"title":null,"wholeContent":null}],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"64430cfe19444842ba3de7e18a6b758b","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter2-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第2章-大数据处理架构Hadoop（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"c380608fd0e949e88205bb066bd180c0","introduce":"介绍大数据处理架构Hadoop；","isChecking":null,"knowledges":[{"id":"71b03785b6344ed5b963a9dead6f4296","index":null,"isChecking":null,"isLessonOver":null,"name":"大数据处理架构Hadoop","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"071df312a0d2402fb1cbc791b668ac64","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"5d6b2efa9a974ec3a47423da5c2bad96","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"981616d69be3476185ed383f521420ec","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"cb6cd5cbba15413da8ef74729104c249","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson2-厦门大学林子雨主讲-大数据技术原理与应用-第2讲-教材第2章-大数据处理架构Hadoop-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[{"appType":"期末考","catalogIds":null,"catalogNames":null,"catalogs":null,"childs":null,"courseId":null,"courseName":null,"effectiveEndTime":null,"effectiveStartTime":null,"examTime":120,"exercise":null,"id":"7360e0f8f539406fbc44c7db64e9eb01","isChecking":null,"name":"大数据技术原理与应用课程习题集","parentId":null,"sort":null,"status":"10001","type":"3"}],"resources":null,"skills":[{"id":"0eb779bd6c61400f9c2270bb32f06a82","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握Hadoop环境的搭建与测试","requirement":null,"summary":null}],"sn":"C02","sort":1,"subCatalogs":null,"textbooks":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"c380608fd0e949e88205bb066bd180c0","id":"e6c3bccc6bea4b0ab6763805dea8d85a","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"01大数据概论.docx","rtcSuffix":"docx","rtcType":"1","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}]},{"catalogModifyStatus":null,"catalogName":"第三章  分布式文件系统HDFS","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"4b95e7f547924a5fa220aa18295749cc","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"744dc76e2db24812af060cfb7c592692","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter3-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第3章-分布式文件系统HDFS（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"75fafe5cad1e49f9af7d528bef987b8c","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"91ee7004844a4218b04d7ad5efe49bca","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"ee3fb64bd1f7488d9f3f48a0180c170d","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"实验：HDFS编程实践；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"1ff514021715469e9a153461c4d2339d","id":"cc6846fa416e4ceab06d62997dcfdae7","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"ff6605d514bf4444a2655832d77d48ac","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"1ff514021715469e9a153461c4d2339d","isValid":"1","serialNumber":"5","sn":null,"teachMode":"实验","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000},{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"分布式文件系统HDFS；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"ff9151f3dcc44be2b660895f8ac4affe","id":"14a27a44478a426499f7986dce6fbfac","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"ff6605d514bf4444a2655832d77d48ac","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"ff9151f3dcc44be2b660895f8ac4affe","isValid":"1","serialNumber":"4","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[{"catalogName":null,"configs":null,"courseName":null,"etmresCourseId":null,"experimentDesc":"本实验包含HDFS shell操作，设计此内容是希望学员可以了解HDFS相关的使用方法。此外本实验包含部分编程。","experimentGroup":2,"experimentName":"HDFS操作方法和基础编程","experimentScenario":"4","experimentTime":90,"handouts":null,"id":"f81ef671caec46b294eb689a77f92ae9","isChecking":null,"manuals":null,"miniVideos":null,"summarys":null,"textbooks":null,"title":null,"wholeContent":null}],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"744dc76e2db24812af060cfb7c592692","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter3-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第3章-分布式文件系统HDFS（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"ff6605d514bf4444a2655832d77d48ac","introduce":"分布式文件系统HDFS的基本原理和使用方法","isChecking":null,"knowledges":[{"id":"c0115d749e8f463ab21e3c996536d15d","index":null,"isChecking":null,"isLessonOver":null,"name":"分布式文件系统HDFS的基本原理","requirement":null,"summary":null},{"id":"1298f8ff715b4d468dec55fc62702990","index":null,"isChecking":null,"isLessonOver":null,"name":"分布式文件系统HDFS的使用方法","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"4b95e7f547924a5fa220aa18295749cc","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"75fafe5cad1e49f9af7d528bef987b8c","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"91ee7004844a4218b04d7ad5efe49bca","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"ff6605d514bf4444a2655832d77d48ac","id":"ee3fb64bd1f7488d9f3f48a0180c170d","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson3-厦门大学林子雨主讲-大数据技术原理与应用-教材第3章-HDFS-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"6d46af011a8e4369b0f105ecb4906bce","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握HDFS shell的基本使用","requirement":null,"summary":null}],"sn":"C03","sort":2,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第四章  分布式数据库Hbase","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"173bc0f6805b4036a15c1176c543e547","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"47e8f25073924ac191f57e12a61e0650","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter4-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第4章-分布式数据库HBase（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"bf873f1065134f62b89ff1b39bfb855f","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"d8c71fd2b9554a13a5df87015b4e8111","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"fc5e7c3e787949b69a4598c357488d96","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"分布式数据库Hbase；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"38980a8688f349f19dc7455025beef2d","id":"5f4f5eb148e24722b4b1b77a898e5847","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"38980a8688f349f19dc7455025beef2d","isValid":"1","serialNumber":"6","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000},{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"实验：HBase环境搭建与使用；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"afae96a062c8453e85cd79c6b1f29834","id":"e0e5cb5d592043b7b30a6c8f16b76423","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"afae96a062c8453e85cd79c6b1f29834","isValid":"1","serialNumber":"7","sn":null,"teachMode":"实验","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[{"catalogName":null,"configs":null,"courseName":null,"etmresCourseId":null,"experimentDesc":"本节介绍HBase的安装方法，包括下载安装文件、配置环境变量、添加用户权限等。","experimentGroup":null,"experimentName":"HBase的安装和基础编程","experimentScenario":"3","experimentTime":90,"handouts":null,"id":"6bbae9a6e004467fa6d0d6fcb623310c","isChecking":null,"manuals":null,"miniVideos":null,"summarys":null,"textbooks":null,"title":null,"wholeContent":null}],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"47e8f25073924ac191f57e12a61e0650","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter4-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第4章-分布式数据库HBase（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"0f6db1905ae048c3964b6c190c5fef2f","introduce":"分布式数据库HBase的基本原理和使用方法","isChecking":null,"knowledges":[{"id":"e28fc545646f44fe97ce01fbbd4a5ad5","index":null,"isChecking":null,"isLessonOver":null,"name":"分布式数据库HBase的基本原理","requirement":null,"summary":null},{"id":"02a6179be086474eb152fe951de3261a","index":null,"isChecking":null,"isLessonOver":null,"name":"分布式数据库HBase的使用方法","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"173bc0f6805b4036a15c1176c543e547","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"bf873f1065134f62b89ff1b39bfb855f","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"d8c71fd2b9554a13a5df87015b4e8111","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"0f6db1905ae048c3964b6c190c5fef2f","id":"fc5e7c3e787949b69a4598c357488d96","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson4-厦门大学林子雨主讲-大数据技术原理与应用-教材第四章-HBase-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"eda7d3484be0424b872431b1ec6cfc09","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握HBase环境的搭建掌握Hbase shell的基本使用","requirement":null,"summary":null}],"sn":"C04","sort":3,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第五章  NoSQL数据库的概念和基本原理","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"64dc9f9c5adc42709c6bcd2170557617","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"6a3323fcf4e64aee9aa8b74aa87c8676","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"6d3558297961425199ebaedb0812b166","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"f823f3dcefc54c5c92f94f84563c7330","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter5-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第5章-NoSQL数据库（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"fc833215c1d64d15a986d505d97087bf","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"实验：Redis、MongoDB环境搭建；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"728397eb52ce4f7ea4a51f270850299b","id":"829bed2433784209ba53d9a7904b5294","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"38ef45961e6942e4b24bc49f7295962f","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"728397eb52ce4f7ea4a51f270850299b","isValid":"1","serialNumber":"9","sn":null,"teachMode":"实验","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000},{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"NoSQL数据库；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"b303677ef13e4ee48d9e3c555b954ee6","id":"596abf3010a44177b64d9282df679118","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"38ef45961e6942e4b24bc49f7295962f","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"b303677ef13e4ee48d9e3c555b954ee6","isValid":"1","serialNumber":"8","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[{"catalogName":null,"configs":null,"courseName":null,"etmresCourseId":null,"experimentDesc":"本节内容包括Redis简介、安装Redis和Redis实例演示等","experimentGroup":null,"experimentName":"典型NoSQL数据库的安装和使用","experimentScenario":"3","experimentTime":90,"handouts":null,"id":"83e59d6bba9048a9877204844bc8ddf7","isChecking":null,"manuals":null,"miniVideos":null,"summarys":null,"textbooks":null,"title":null,"wholeContent":null}],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"f823f3dcefc54c5c92f94f84563c7330","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter5-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第5章-NoSQL数据库（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"38ef45961e6942e4b24bc49f7295962f","introduce":null,"isChecking":null,"knowledges":[{"id":"e0f9f4ffb5fa44fabe42734a77888894","index":null,"isChecking":null,"isLessonOver":null,"name":"Redis","requirement":null,"summary":null},{"id":"c7875155461c4e6792d050af148d56e7","index":null,"isChecking":null,"isLessonOver":null,"name":"MongoDB","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"64dc9f9c5adc42709c6bcd2170557617","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"6a3323fcf4e64aee9aa8b74aa87c8676","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"6d3558297961425199ebaedb0812b166","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"38ef45961e6942e4b24bc49f7295962f","id":"fc833215c1d64d15a986d505d97087bf","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson5-厦门大学林子雨主讲-大数据技术原理与应用-教材第5章- NoSQL数据库-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"0e7620f1f25346858d982d908bffbd01","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握Redis环境的搭建与使用掌握MongoDB的搭建与使用","requirement":null,"summary":null}],"sn":"C05","sort":4,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第六章  云数据库的概念和基本原理","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"390f93540b29461c98d925b89afdf65d","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"3ad36a9e44dc47fabeb622d1b5828d68","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter6-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第6章-云数据库（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"45ed3ea521bb4e05bbc9d977ae33747e","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"7dc455b28bb149edbfba91805e60c0aa","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"da79053301644958b4ef132caa707702","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"云数据库；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"10746dc414954175b78f7ed1929d85bf","id":"13276db1d2384d7b9a5545c9f4397570","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"017dc609859c403c942e60a6d19f96fe","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"10746dc414954175b78f7ed1929d85bf","isValid":"1","serialNumber":"10","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"3ad36a9e44dc47fabeb622d1b5828d68","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter6-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第6章-云数据库（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"017dc609859c403c942e60a6d19f96fe","introduce":null,"isChecking":null,"knowledges":[{"id":"dbda4f8594714685a557fcc9f12489af","index":null,"isChecking":null,"isLessonOver":null,"name":"云数据库的概念和基本原理","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"390f93540b29461c98d925b89afdf65d","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"45ed3ea521bb4e05bbc9d977ae33747e","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"7dc455b28bb149edbfba91805e60c0aa","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"017dc609859c403c942e60a6d19f96fe","id":"da79053301644958b4ef132caa707702","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson6-厦门大学林子雨主讲-大数据技术原理与应用-教材第6章-云数据库-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[],"sn":"C06","sort":5,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第七章  MapReduce","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"1b668f050db04e059e4b3d766ee318bc","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"4c28c9b43f994638a6e8cb9cdd881106","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"db3b5053324f4e0baed544b1abdced67","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter7-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第7章-MapReduce（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"f131d2a0f22e46e6afa57d8912dca812","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"fcfdce36edae4ae597f3258a007685be","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"MapReduce；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"0e50fae5215845fba58164d32082879a","id":"9c4578a73b3442bcbba8ead1a128b6ba","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"5bd3087d5b8a4a729756a98f60a39998","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"0e50fae5215845fba58164d32082879a","isValid":"1","serialNumber":"11","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000},{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"MapReduce编程实践；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"b5cea6e8bdc1438f9ab200960f90ef4c","id":"47ed7f641ccb4074af8bda4d960f0d6f","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"5bd3087d5b8a4a729756a98f60a39998","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"b5cea6e8bdc1438f9ab200960f90ef4c","isValid":"1","serialNumber":"12","sn":null,"teachMode":"实验","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[{"catalogName":null,"configs":null,"courseName":null,"etmresCourseId":null,"experimentDesc":"本课程针为对词频统计任务的编程。","experimentGroup":null,"experimentName":"MapReduce基础编程","experimentScenario":"4","experimentTime":90,"handouts":null,"id":"b190348e109a4bf4ac4c46cb72795431","isChecking":null,"manuals":null,"miniVideos":null,"summarys":null,"textbooks":null,"title":null,"wholeContent":null}],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"db3b5053324f4e0baed544b1abdced67","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter7-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第7章-MapReduce（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"5bd3087d5b8a4a729756a98f60a39998","introduce":null,"isChecking":null,"knowledges":[{"id":"fa26b7a45c384e3f99858dc9a1d3fcb7","index":null,"isChecking":null,"isLessonOver":null,"name":"分布式并行编程模型MapReduce原理和使用方法","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"1b668f050db04e059e4b3d766ee318bc","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"4c28c9b43f994638a6e8cb9cdd881106","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"f131d2a0f22e46e6afa57d8912dca812","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"5bd3087d5b8a4a729756a98f60a39998","id":"fcfdce36edae4ae597f3258a007685be","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson7-厦门大学林子雨主讲-大数据技术原理与应用-教材第七章-MapReduce-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"ccc9f6cdf4274b9c8952f6c35c863f19","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握MapReduce编程模型","requirement":null,"summary":null}],"sn":"C07","sort":6,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第八章  Hadoop架构再探讨","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"38d05448255e40299145918c8fa176d3","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part03.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"8759103bda0f4b1cbc138383074efd08","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part04.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"98b4cb5e662e402297abff5510653f4f","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part01.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"dafad790895e4aebae3a1dd67432ab8a","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter8-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第8章-Hadoop架构再探讨（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"e5d5069dd81d46ef96fe3a9f538c2ed1","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part02.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"Hadoop架构再探讨；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"e8257daee9ec4481be9be13ba5feab61","id":"720802f9505e45dcb7ce34ad7270f495","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"9a1b7d4743294c50b8515c0566e4b079","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"e8257daee9ec4481be9be13ba5feab61","isValid":"1","serialNumber":"13","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"dafad790895e4aebae3a1dd67432ab8a","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter8-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第8章-Hadoop架构再探讨（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"9a1b7d4743294c50b8515c0566e4b079","introduce":null,"isChecking":null,"knowledges":[{"id":"bacb40b1e8284436b5b238ace3674ecc","index":null,"isChecking":null,"isLessonOver":null,"name":"Hadoop架构再探讨","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"38d05448255e40299145918c8fa176d3","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part03.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"8759103bda0f4b1cbc138383074efd08","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part04.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"98b4cb5e662e402297abff5510653f4f","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part01.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"9a1b7d4743294c50b8515c0566e4b079","id":"e5d5069dd81d46ef96fe3a9f538c2ed1","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"第9讲Hadoop架构再探讨part02.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[],"sn":"C08","sort":7,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第九章  Spark","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"0e6c3f367cbc424bb9fe1c6b99e27140","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"89397d02cafa41a0a05bab7bb655230f","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"a12b2576d178499db69cc9835bdd3c39","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"da48129d6fdd444485e12d54872c1fc0","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"fa2cc1a09d554c1387d18d82259a6580","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter9-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第9章-Spark（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"实验：Spark编程实践；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"8dddd6af47ba4417898cc60f8874e041","id":"3c01885ea7dc4716827404e3267dbe8e","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"f9e9be9183654d6cb9558a988262c59f","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"8dddd6af47ba4417898cc60f8874e041","isValid":"1","serialNumber":"15","sn":null,"teachMode":"实验","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000},{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"Spark；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"bc117767bbe94859bd96b68dfd22109a","id":"2373201eb4b24441aaef7e112ca148ad","isChecking":null,"isLessonOver":null,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"f9e9be9183654d6cb9558a988262c59f","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"bc117767bbe94859bd96b68dfd22109a","isValid":"1","serialNumber":"14","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[{"catalogName":null,"configs":null,"courseName":null,"etmresCourseId":null,"experimentDesc":"本课程介绍Local模式（单机模式）的 Spark安装。","experimentGroup":null,"experimentName":"Spark的安装和基础编程使用","experimentScenario":"8","experimentTime":90,"handouts":null,"id":"1da0e760144648e99daf199148faa404","isChecking":null,"manuals":null,"miniVideos":null,"summarys":null,"textbooks":null,"title":null,"wholeContent":null}],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"fa2cc1a09d554c1387d18d82259a6580","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter9-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第9章-Spark（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"f9e9be9183654d6cb9558a988262c59f","introduce":null,"isChecking":null,"knowledges":[{"id":"fcc87453efa241c79373ff6cce253543","index":null,"isChecking":null,"isLessonOver":null,"name":"Spark原理与基础编程","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"0e6c3f367cbc424bb9fe1c6b99e27140","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part03.mp4","rtcSuffix":"0","rtcType":"4","sort":3,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"89397d02cafa41a0a05bab7bb655230f","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part04.mp4","rtcSuffix":"0","rtcType":"4","sort":4,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"a12b2576d178499db69cc9835bdd3c39","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part01.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"f9e9be9183654d6cb9558a988262c59f","id":"da48129d6fdd444485e12d54872c1fc0","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson10-厦门大学林子雨主讲-大数据技术原理与应用-第10讲-教材新增第十六章-Spark-Part02.mp4","rtcSuffix":"0","rtcType":"4","sort":2,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"6aec95523ff649618d5d20dc8600797a","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握Spark环境的搭建了解Spark编程","requirement":null,"summary":null}],"sn":"C09","sort":8,"subCatalogs":null,"textbooks":null},{"catalogModifyStatus":null,"catalogName":"第十章  综合案例实践","catalogRes":[],"coursePlans":[],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[],"handouts":null,"id":"134d4bde24a6459686a030e045d25f3b","introduce":null,"isChecking":null,"knowledges":[{"id":"b44192c884084a62aefbd18ed3e5ca89","index":null,"isChecking":null,"isLessonOver":null,"name":"大数据架构","requirement":null,"summary":null}],"miniVideos":null,"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"c8fa02b37ba54044a9bd11bc597e291e","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握大数据实际环境的部署掌握大数据组件的协调运行","requirement":null,"summary":null}],"sn":"C10","sort":9,"subCatalogs":null,"textbooks":null}],"prepareLessons":[{"catalogNames":["第一章  大数据概述"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["20c2ad3e7aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"4","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第二章  大数据处理架构hadoop"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["2437d1b67aec11e9818902420a00001c","7f9d05f87a1611e9b8d102420a00001a"],"id":null,"isValid":null,"name":"第二课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"4","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第二章  大数据处理架构hadoop"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["284103727aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第三课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"4","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第三章  分布式文件系统HDFS"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["1c4183827a1211e9b8d102420a00001a","842f8d0c7a1711e9b8d102420a00001a"],"id":null,"isValid":null,"name":"第四课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第三章  分布式文件系统HDFS"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["22c0766d7a1311e9b8d102420a00001a"],"id":null,"isValid":null,"name":"第五课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第四章  分布式数据库Hbase"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["32bcccf87a1811e9b8d102420a00001a","8adedde77a1411e9b8d102420a00001a"],"id":null,"isValid":null,"name":"第六课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第四章  分布式数据库Hbase"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["2b7d52dd7aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第七课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第五章  NoSQL数据库的概念和基本原理"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["2e9143307aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第八课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第五章  NoSQL数据库的概念和基本原理"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["31bc7f977aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第九课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第六章  云数据库的概念和基本原理"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["053faf387aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一十课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第七章  MapReduce"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["0d91cbdc7aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一十一课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第七章  MapReduce"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["6e9690877d6111e9b47b02420a000004"],"id":null,"isValid":null,"name":"第一十二课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第八章  Hadoop架构再探讨"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["10fe011b7aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一十三课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第九章  Spark"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["1496c9f57aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一十四课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第九章  Spark"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["175e46237aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一十五课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null},{"catalogNames":["第九章  Spark"],"classPeriod":null,"classScheduleInfos":null,"courseDesigns":null,"courseName":null,"createOrg":null,"createPerson":null,"createTime":null,"curriculumScheduleBos":null,"curriculumScheduleIdList":["1dde31407aec11e9818902420a00001c"],"id":null,"isValid":null,"name":"第一十六课","prepareLessonDirectoryBos":null,"semesterName":null,"status":"1","teacherName":null,"tenantName":null,"updateOrg":null,"updatePerson":null,"updateTime":null}],"classInfos":[{"classCourseCnt":0,"classId":"455efdb779e911e982fd02420a000018","className":"2017软件1班"}],"currentIndex":3},"message":"success"})
  },
  {
        url:"/nledu-etmlab-education/prepare_lesson/step_first",
        type:"post",
        response:_=>(
            {"code":"0",
                "data":
                    {"catalogNames":null,
                        "classPeriod":null,
                        "classScheduleInfos":null,
                        "courseDesigns":null,
                        "courseName":null,
                        "createOrg":null,
                        "createPerson":null,
                        "createTime":null,"curriculumScheduleBos":null,
                        "curriculumScheduleIdList":
                            ["1c4183827a1211e9b8d102420a00001a","842f8d0c7a1711e9b8d102420a00001a"],
                        "id":"0a8c89b7f8284c529b05b0f6bc1653ff",
                        "isValid":null,"name":null,
                        "prepareLessonDirectoryBos":[
                            {"catalog":null,"contents":[
                                {"contentId":"41f50e027cfd41c2920efdcef04296e1","contentType":"1",
                                    "createOrg":null,"createPerson":null,"createTime":null,
                                    "etmeduPrepareLessonDirecotryId":null,"id":null,"isValid":null,"updateOrg":null,
                                    "updatePerson":null,"updateTime":null}],"createOrg":null,"createPerson":null,
                                "createTime":null,"etmeduPrepareLessonId":"0a8c89b7f8284c529b05b0f6bc1653ff",
                                "etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":null,"isValid":null,
                                "updateOrg":null,"updatePerson":null,"updateTime":null}],
                        "semesterName":null,"status":null,"teacherName":null,"tenantName":null,
                        "updateOrg":null,"updatePerson":null,"updateTime":null},"message":"success"})
    },
  {
        url:"/nledu-etmlab-education/prepare_lesson/step_third/",
        type:"get",
        response:_=>({"code":"0","data":{"catalogNames":["第一章  大数据概述"],"classPeriod":"2","classScheduleInfos":null,"courseDesigns":[{"contentList":[],"etmeduPrepareLessonId":"0a8c89b7f8284c529b05b0f6bc1653ff","id":"0f719b094c61467f85636fee1660f9e9","step":1,"stepName":"新的步骤","stepTime":0},{"contentList":[],"etmeduPrepareLessonId":"0a8c89b7f8284c529b05b0f6bc1653ff","id":"552c4bb59f9d44209de003b070e459d0","step":2,"stepName":"新的步骤","stepTime":0},{"contentList":[],"etmeduPrepareLessonId":"0a8c89b7f8284c529b05b0f6bc1653ff","id":"def0325fd62a443e8b957c0cf7377cfb","step":3,"stepName":"新的步骤","stepTime":0}],"courseName":"大数据技术原理与应用","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"c79fae6a720611e982fd02420a000018","createTime":1560478346000,"curriculumScheduleBos":[{"catalogNames":null,"classDay":1560700800000,"classIds":["455efdb779e911e982fd02420a000018"],"classNames":["2017软件1班"],"classOverTime":13500000,"classRoomAddres":"1401","classRoomName":"大数据实验教室","classTime":7200000,"courseClass":4,"courseName":"大数据技术原理与应用","courseType":null,"etmeaClassroomId":null,"etmeaSemesterId":null,"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","eusmgrUserIds":null,"id":"1c4183827a1211e9b8d102420a00001a","prepareLessonId":null,"prepareStatus":null,"section":"1","semesteName":"2018-2019第2学期","teacherId":"c79fae6a720611e982fd02420a000018","teacherName":"陈建平","tenantName":null},{"catalogNames":null,"classDay":1560700800000,"classIds":["9bc9ebd279e911e982fd02420a000018"],"classNames":["2017软件2班"],"classOverTime":13500000,"classRoomAddres":"1401","classRoomName":"大数据实验教室","classTime":7200000,"courseClass":4,"courseName":"大数据技术原理与应用","courseType":null,"etmeaClassroomId":null,"etmeaSemesterId":null,"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","eusmgrUserIds":null,"id":"842f8d0c7a1711e9b8d102420a00001a","prepareLessonId":null,"prepareStatus":null,"section":"2","semesteName":"2018-2019第2学期","teacherId":"c79fae6a720611e982fd02420a000018","teacherName":"陈建平","tenantName":null}],"curriculumScheduleIdList":["1c4183827a1211e9b8d102420a00001a","842f8d0c7a1711e9b8d102420a00001a"],"id":"0a8c89b7f8284c529b05b0f6bc1653ff","isValid":"1","name":"第一课","prepareLessonDirectoryBos":[{"catalog":{"catalogModifyStatus":null,"catalogName":"第一章  大数据概述","catalogRes":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"0dbf0bdd2227452ea87c0a5ee3ec6ad3","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson0-厦门大学林子雨主讲-大数据技术原理与应用-第0讲-课程介绍.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null},{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"e6a5966fc07f4d499c17c3e402e24c51","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter1-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第1章-大数据概述（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"coursePlans":[{"catalog":null,"catalogName":null,"classPeriod":2,"contents":null,"courseContents":[{"content":"大数据概述；","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCoursePlanId":"f58aa5753bf04406b708b80454181233","id":"41f50e027cfd41c2920efdcef04296e1","isChecking":true,"isLessonOver":false,"isValid":"1"}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"a9e16e35709b11e9b8d102420a00001a","createTime":1558336405000,"etmresCourseCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","etmresCourseId":"34a1195d8e524273ad65e54793565d8f","id":"f58aa5753bf04406b708b80454181233","isValid":"1","serialNumber":"1","sn":null,"teachMode":"理论","updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"a9e16e35709b11e9b8d102420a00001a","updateTime":1558336405000}],"etmresCourseId":"34a1195d8e524273ad65e54793565d8f","experiments":[],"handouts":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"e6a5966fc07f4d499c17c3e402e24c51","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Chapter1-厦门大学-林子雨-大数据技术原理与应用（第2版教材）-第1章-大数据概述（2017年2月版本）.pptx","rtcSuffix":"pptx","rtcType":"2","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"id":"6dd5e212c1d342edbb0ca96aba4f2e7e","introduce":"介绍大数据的基本概念和应用领域，并阐述大数据、云计算和物联网的相互关系","isChecking":null,"knowledges":[{"id":"5883870df6dc4303a1b2c997c58ef505","index":null,"isChecking":null,"isLessonOver":null,"name":"大数据基本概念","requirement":null,"summary":null},{"id":"04c485bbb6404ab3abcc2bfe03275e59","index":null,"isChecking":null,"isLessonOver":null,"name":"大数据应用领域","requirement":null,"summary":null}],"miniVideos":[{"createOrg":null,"createPerson":null,"createTime":null,"etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"0dbf0bdd2227452ea87c0a5ee3ec6ad3","isChecking":null,"isValid":null,"rtcContent":null,"rtcName":"Lesson0-厦门大学林子雨主讲-大数据技术原理与应用-第0讲-课程介绍.mp4","rtcSuffix":"0","rtcType":"4","sort":1,"updateOrg":null,"updatePerson":null,"updateTime":null}],"parentId":"84ddc6d7c0bd40678c4475053ba17613","practices":[],"resources":null,"skills":[{"id":"9cc370b92df94377a6b79a529ebb5c89","index":null,"isChecking":null,"isLessonOver":null,"name":"掌握大数据基本概念","requirement":null,"summary":null}],"sn":"C01","sort":0,"subCatalogs":null,"textbooks":null},"contents":[{"contentId":"41f50e027cfd41c2920efdcef04296e1","contentType":"1","createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"c79fae6a720611e982fd02420a000018","createTime":1560478346000,"etmeduPrepareLessonDirecotryId":null,"id":"05e73975af484465a9872def0a25b597","isValid":"1","updateOrg":null,"updatePerson":null,"updateTime":null}],"createOrg":"a8af6c56492e11e9976602420a00000a","createPerson":"c79fae6a720611e982fd02420a000018","createTime":1560478346000,"etmeduPrepareLessonId":"0a8c89b7f8284c529b05b0f6bc1653ff","etmresCatalogId":"6dd5e212c1d342edbb0ca96aba4f2e7e","id":"e99f8157fb81496b90e114a23caec68e","isValid":"1","updateOrg":null,"updatePerson":null,"updateTime":null}],"semesterName":"2018-2019第2学期","status":"3","teacherName":"陈建平","tenantName":null,"updateOrg":"a8af6c56492e11e9976602420a00000a","updatePerson":"c79fae6a720611e982fd02420a000018","updateTime":1560478346000},"message":"success"})
    },

  {

        url:"/nledu-etmlab-resource/exerciseSet/11111",
    type:"get",
    response:_=>({
      "code": "0",
      "data": {
        "appType": null,
        "childs": [
          {
            "appType": null,
            "childs": null,
            "effectiveEndTime": null,
            "effectiveStartTime": null,
            "exercise": [
              {
                "answer": "AB",
                "content": "第一代电子数字计算机适应的程序设计语言为______。",
                "countdown": 0,
                "difficultyCoefficient": 0,
                "etmresExerciseSetsId": "f82475852dda4af8a666bd778ca4107d",
                "exerciseOptionBos": [
                  {
                    "content": "数据库语言",
                    "etmresExerciseId": "7e276ac1f4f942eabc50f1d9f5cf83fa",
                    "exerciseOptionType": "2",
                    "id": "67c9a69bf7fd4f62ad557cfbda4aa6c1",
                    "resource": [],
                    "sort": 2,
                    "tag": "C"
                  },
                  {
                    "content": "高级语言",
                    "etmresExerciseId": "7e276ac1f4f942eabc50f1d9f5cf83fa",
                    "exerciseOptionType": "2",
                    "id": "a008d81d2a164db2960f4d0c696bd0d2",
                    "resource": [],
                    "sort": 1,
                    "tag": "B"
                  },
                  {
                    "content": "机器语言",
                    "etmresExerciseId": "7e276ac1f4f942eabc50f1d9f5cf83fa",
                    "exerciseOptionType": "2",
                    "id": "c07954d203c64921833018bb55f998f7",
                    "resource": [],
                    "sort": 0,
                    "tag": "A"
                  },
                  {
                    "content": "可视化语言",
                    "etmresExerciseId": "7e276ac1f4f942eabc50f1d9f5cf83fa",
                    "exerciseOptionType": "2",
                    "id": "e6b4a281e3bb43a0a0c393523c7e2f30",
                    "resource": [],
                    "sort": 3,
                    "tag": "D"
                  }
                ],
                "exerciseRepositoryId": null,
                "exerciseType": "2",
                "id": "846d348dc16b460ba739610d29aa3e8c",
                "isSupplement": 0,
                "isUploadSupplement": 0,
                "parse": null,
                "referenceTime": 0,
                "resource": null,
                "summary": null,
                "versionType": null
              },
              {
                "answer": "ABC",
                "content": "下列各存储器中，存取速度最快的一种是()",
                "countdown": 0,
                "difficultyCoefficient": 0,
                "etmresExerciseSetsId": "f82475852dda4af8a666bd778ca4107d",
                "exerciseOptionBos": [
                  {
                    "content": "",
                    "etmresExerciseId": "45c61b3275f24a93bf94572cea71caff",
                    "exerciseOptionType": "1",
                    "id": "3f3e4b23a925421390143aadef9f8cde",
                    "resource": [],
                    "sort": 0,
                    "tag": "B"
                  },
                  {
                    "content": "",
                    "etmresExerciseId": "45c61b3275f24a93bf94572cea71caff",
                    "exerciseOptionType": "1",
                    "id": "cb20d4caa7884dc388437eaf8e80e458",
                    "resource": [],
                    "sort": 2,
                    "tag": "D"
                  },
                  {
                    "content": "",
                    "etmresExerciseId": "45c61b3275f24a93bf94572cea71caff",
                    "exerciseOptionType": "1",
                    "id": "db08f99a61c94be8a610d4b250cda8ce",
                    "resource": [],
                    "sort": 1,
                    "tag": "C"
                  }
                ],
                "exerciseRepositoryId": null,
                "exerciseType": "2",
                "id": "45c61b3275f24a93bf94572cea71caff",
                "isSupplement": 0,
                "isUploadSupplement": 0,
                "parse": null,
                "referenceTime": 0,
                "resource": null,
                "summary": null,
                "versionType": null
              }
            ],
            "id": "f82475852dda4af8a666bd778ca4107d",
            "name": "多选题",
            "parentId": "49be3a0a9e2748a4bea4fb9240f19433",
            "sort": null,
            "status": "10001",
            "type": "3"
          },
          {
            "appType": null,
            "childs": null,
            "effectiveEndTime": null,
            "effectiveStartTime": null,
            "exercise": [
              {
                "answer": "A",
                "content": "下列各存储器中，存取速度最快的一种是(　　)www",
                "countdown": 0,
                "difficultyCoefficient": 0,
                "etmresExerciseSetsId": "fddb7f16f7214193bc8e2a81fc1a123f",
                "exerciseOptionBos": [
                  {
                    "content": "",
                    "etmresExerciseId": "ef06c7d7dc5548a685aad0a10a77acb3",
                    "exerciseOptionType": "1",
                    "id": "18f0e376b5ee4e63a86ba78e151aba76",
                    "resource": [],
                    "sort": 3,
                    "tag": "D"
                  },
                  {
                    "content": "",
                    "etmresExerciseId": "ef06c7d7dc5548a685aad0a10a77acb3",
                    "exerciseOptionType": "1",
                    "id": "1dd42c9e493a4a62bfa33c05fa76300c",
                    "resource": [],
                    "sort": 1,
                    "tag": "B"
                  },
                  {
                    "content": "",
                    "etmresExerciseId": "ef06c7d7dc5548a685aad0a10a77acb3",
                    "exerciseOptionType": "1",
                    "id": "c77fcb4cad184ede87efc94414efbaf9",
                    "resource": [],
                    "sort": 2,
                    "tag": "C"
                  },
                  {
                    "content": " ",
                    "etmresExerciseId": "ef06c7d7dc5548a685aad0a10a77acb3",
                    "exerciseOptionType": "1",
                    "id": "ebc77745776d47e882c5673cf687bc4d",
                    "resource": [
                      "http://192.168.1.167:14000/webhdfs/v1/etmlab_res/4_bb8f574ff7234919a9218992f0d24294..png?op=OPEN&user.name=root"
                    ],
                    "sort": 0,
                    "tag": "A"
                  }
                ],
                "exerciseRepositoryId": null,
                "exerciseType": "1",
                "id": "d43e5997292a4d52ad1a4cc6cec3a12a",
                "isSupplement": 0,
                "isUploadSupplement": 0,
                "parse": null,
                "referenceTime": 0,
                "resource": null,
                "summary": null,
                "versionType": null
              },
              {
                "answer": "A",
                "content": "第一代电子数字计算机适应的程序设计语言为______。ddddddddd",
                "countdown": 0,
                "difficultyCoefficient": 0,
                "etmresExerciseSetsId": "fddb7f16f7214193bc8e2a81fc1a123f",
                "exerciseOptionBos": [
                  {
                    "content": "机器语言及其语言及其语言哒哒哒哒哒哒奥迪阿达达达达阿达达达阿达达达阿达阿达达达达达达达达达达",
                    "etmresExerciseId": "8b0efdc7894f4200ac69505fef4ad257",
                    "exerciseOptionType": "2",
                    "id": "0dfce8e2fe4740a5b5dd442ff86b052a",
                    "resource": [],
                    "sort": 0,
                    "tag": "A"
                  },
                  {
                    "content": "数据库语言",
                    "etmresExerciseId": "8b0efdc7894f4200ac69505fef4ad257",
                    "exerciseOptionType": "2",
                    "id": "4134915d7aee4232b01348218b683100",
                    "resource": [],
                    "sort": 2,
                    "tag": "C"
                  },
                  {
                    "content": "可视化语言",
                    "etmresExerciseId": "8b0efdc7894f4200ac69505fef4ad257",
                    "exerciseOptionType": "2",
                    "id": "6bc6b20ba5424dfdb72578595fd6742b",
                    "resource": [],
                    "sort": 3,
                    "tag": "D"
                  },
                  {
                    "content": "高级语言",
                    "etmresExerciseId": "8b0efdc7894f4200ac69505fef4ad257",
                    "exerciseOptionType": "2",
                    "id": "b8dc2fef151542ef94b02c2c596c04af",
                    "resource": [],
                    "sort": 1,
                    "tag": "B"
                  }
                ],
                "exerciseRepositoryId": null,
                "exerciseType": "1",
                "id": "8b0efdc7894f4200ac69505fef4ad257",
                "isSupplement": 0,
                "isUploadSupplement": 0,
                "parse": null,
                "referenceTime": 0,
                "resource": null,
                "summary": null,
                "versionType": null
              }
            ],
            "id": "fddb7f16f7214193bc8e2a81fc1a123f",
            "name": "单选题",
            "parentId": "49be3a0a9e2748a4bea4fb9240f19433",
            "sort": null,
            "status": "10001",
            "type": "3"
          }
        ],
        "effectiveEndTime": null,
        "effectiveStartTime": null,
        "exercise": [],
        "id": "49be3a0a9e2748a4bea4fb9240f19433",
        "name": "XXX学院XXX课程期末考试",
        "parentId": null,
        "sort": null,
        "status": "10001",
        "type": "3"
      },
      "message": "success"
    })
  },
  {
  // /nledu-etmlab-education/experiment/111/222/monitor
    url:"/nledu-etmlab-education/experiment/111/222/monitor",
    type:"get",
    response:_=>({
      "code": "0",
      "data": {
        "classId": null,
        "className": "2017软件1班",//班级名称
        "complete": 0,//完成实验人数
        "experimentCount": 1,//做实验人数
        "experimentDesc": "本实验课程介绍Hadoop的具体安装方法",//实验描述
        "exprimentId": "652bf006d26b48d182c38540f890d5fb",//实验id
        "lessonCount": 0,//已到人数
        "noComplete": 1,//未完成实验人数
        "noExperiment": 4,//缺勤（未做实验人数
        "noSign": 5,//未到人数
        "scheduleId": "31bc7f977aec11e9818902420a00001c",
        "student": [
          {
            "classStatus": "7",//实验状态 1.已上课 2.未上课 3.实验异常 4.请求协助 5.实验中（未完成） 6完成 7实验缺勤
            "consoleUrl": null,//当前实验虚拟机url
            "eusmgrUserName": "王主任",//学生姓名
            "id": "5f653b3534ee11e98c9f02420a00002c",
            "instanceId": null,//实验实例id
            "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",//实验监控地址
            "progress": 0,//进度条
            "reports": [],
            "scheduleId": "31bc7f977aec11e9818902420a00001c",
            "studentCode": "20190918",//学号
            "teacherId": "c79fae6a720611e982fd02420a000018",
            "useTime": 0//已经耗时
          },
          {
            "classStatus": "7",
            "consoleUrl": null,
            "eusmgrUserName": "温文学",
            "id": "580d44ba7a2311e982fd02420a000018",
            "instanceId": null,
            "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
            "progress": 0,
            "reports": [],
            "scheduleId": "31bc7f977aec11e9818902420a00001c",
            "studentCode": "2016090105",
            "teacherId": "c79fae6a720611e982fd02420a000018",
            "useTime": 0
          },
          {
            "classStatus": "5",
            "consoleUrl": null,
            "eusmgrUserName": "黄小农",
            "id": "ca45c781720611e982fd02420a000018",
            "instanceId": "db8e95819b8942318e44224361c641b1",
            "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
            "progress": 0,
            "reports": [
              {
                "createOrg": "a8af6c56492e11e9976602420a00000a",
                "createPerson": "ca45c781720611e982fd02420a000018",
                "createTime": 1561429861000,
                "etmresExperimentManualId": "7211b510eea247f8ba2566c151315f3d",
                "id": "d133340d0f2d4115bdeb91899532567e",
                "isValid": "1",
                "keyWord": null,
                "limit": 0,
                "reportContent": "/webhdfs/v1/ordinary_res/1561429860602_6d019695068344e4bc6c5ee8b02406ba..png?op=OPEN&user.name=root",
                "sort": 1,
                "startPage": 0,
                "updateOrg": "a8af6c56492e11e9976602420a00000a",
                "updatePerson": "ca45c781720611e982fd02420a000018",
                "updateTime": 1561429861000
              },
              {
                "createOrg": "a8af6c56492e11e9976602420a00000a",
                "createPerson": "ca45c781720611e982fd02420a000018",
                "createTime": 1561430070000,
                "etmresExperimentManualId": "7211b510eea247f8ba2566c151315f3d",
                "id": "fd76f93353f141ef82b2b634ebe07cf3",
                "isValid": "1",
                "keyWord": null,
                "limit": 0,
                "reportContent": "/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
                "sort": 1,
                "startPage": 0,
                "updateOrg": "a8af6c56492e11e9976602420a00000a",
                "updatePerson": "ca45c781720611e982fd02420a000018",
                "updateTime": 1561430070000
              }
            ],
            "scheduleId": "31bc7f977aec11e9818902420a00001c",
            "studentCode": "2017090102",
            "teacherId": "c79fae6a720611e982fd02420a000018",
            "useTime": 217
          },
          {
            "classStatus": "7",
            "consoleUrl": null,
            "eusmgrUserName": "王武",
            "id": "ca66dca1720611e982fd02420a000018",
            "instanceId": null,
            "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
            "progress": 0,
            "reports": [],
            "scheduleId": "31bc7f977aec11e9818902420a00001c",
            "studentCode": "2017090103",
            "teacherId": "c79fae6a720611e982fd02420a000018",
            "useTime": 0
          },
            {
                "classStatus": "7",
                "consoleUrl": null,
                "eusmgrUserName": "王武",
                "id": "ca66dca1720611e982fd02420a000018",
                "instanceId": null,
                "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
                "progress": 0,
                "reports": [],
                "scheduleId": "31bc7f977aec11e9818902420a00001c",
                "studentCode": "2017090103",
                "teacherId": "c79fae6a720611e982fd02420a000018",
                "useTime": 0
            },
            {
                "classStatus": "7",
                "consoleUrl": null,
                "eusmgrUserName": "王武",
                "id": "ca66dca1720611e982fd02420a000018",
                "instanceId": null,
                "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
                "progress": 0,
                "reports": [],
                "scheduleId": "31bc7f977aec11e9818902420a00001c",
                "studentCode": "2017090103",
                "teacherId": "c79fae6a720611e982fd02420a000018",
                "useTime": 0
            },
            {
                "classStatus": "7",
                "consoleUrl": null,
                "eusmgrUserName": "王武",
                "id": "ca66dca1720611e982fd02420a000018",
                "instanceId": null,
                "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
                "progress": 0,
                "reports": [],
                "scheduleId": "31bc7f977aec11e9818902420a00001c",
                "studentCode": "2017090103",
                "teacherId": "c79fae6a720611e982fd02420a000018",
                "useTime": 0
            },{
                "classStatus": "7",
                "consoleUrl": null,
                "eusmgrUserName": "王武",
                "id": "ca66dca1720611e982fd02420a000018",
                "instanceId": null,
                "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
                "progress": 0,
                "reports": [],
                "scheduleId": "31bc7f977aec11e9818902420a00001c",
                "studentCode": "2017090103",
                "teacherId": "c79fae6a720611e982fd02420a000018",
                "useTime": 0
            },{
                "classStatus": "7",
                "consoleUrl": null,
                "eusmgrUserName": "王武",
                "id": "ca66dca1720611e982fd02420a000018",
                "instanceId": null,
                "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
                "progress": 0,
                "reports": [],
                "scheduleId": "31bc7f977aec11e9818902420a00001c",
                "studentCode": "2017090103",
                "teacherId": "c79fae6a720611e982fd02420a000018",
                "useTime": 0
            },
          {
            "classStatus": "7",
            "consoleUrl": null,
            "eusmgrUserName": "陈洪华",
            "id": "ca94ee4d720611e982fd02420a000018",
            "instanceId": null,
            "monitorImgUrl": "http://192.168.1.167:14000/webhdfs/v1/ordinary_res/1561430069193_aaf7c8290bc247788546633e2615d927..png?op=OPEN&user.name=root",
            "progress": 0,
            "reports": [],
            "scheduleId": "31bc7f977aec11e9818902420a00001c",
            "studentCode": "2017090104",
            "teacherId": "c79fae6a720611e982fd02420a000018",
            "useTime": 0
          }
        ],
        "teacherId": "c79fae6a720611e982fd02420a000018",
        "totalCount": 5,//课堂总人数
        "troubleUser": 0,//实验异常人数
        "waitAssist": 0//等待协助人数
      },
      "message": "success"
    })
  },
    {
      url: "/nledu-etmlab-education/answerLog",
      type: "get",
      response: _ => ({
            "code": "0",
            "data": {
                "countDown": null,
                "createOrg": "a8af6c56492e11e9976602420a00000a",
                "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                "createTime": 1561628476000,
                "effectTime": 1561629600000,
                "etmresExerciseSetId": "7360e0f8f539406fbc44c7db64e9eb01",
                "etmresExerciseSetName": "大数据技术原理与应用课程习题集",
                "examTime": 120,
                "exerciseLogBoList": [
                    {
                        "actualScore": 0,
                        "answer": "C",
                        "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">请描述作为NoSQL数据库的基石之一的BASE的含义。</span></p>",
                        "createOrg": "a8af6c56492e11e9976602420a00000a",
                        "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                        "createTime": 1561628476000,
                        "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                        "etmresExerciseId": "d43e5997292a4d52ad1a4cc6cec3a12a",
                        "exerciseBo": null,
                        "exerciseType": null,
                        "id": "1e049fc5176141edb4553e6a6c103054",
                        "isValid": "1",
                        "score": 0,
                        "updateOrg": "a8af6c56492e11e9976602420a00000a",
                        "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                        "updateTime": 1561628476000
                    },
                    {
                        "actualScore": 0,
                        "answer": "C,B",
                        "content":
                            "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">" +
                            "构造方法与重载：</span> <span id=\"_GoBack\"></span> <span class=\"a X3\" " +
                            "style=\"font-size:10.0pt;\">定义一个网络用户类，要处理的 符串\"gameschool.com\"</span></p>",
                        "createOrg": "a8af6c56492e11e9976602420a00000a",
                        "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                        "createTime": 1561628476000,
                        "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                        "etmresExerciseId": "846d348dc16b460ba739610d29aa3e8c",
                        "exerciseBo": null,
                        "exerciseType": null,
                        "id": "2437cc07ca91423a92467e360c827968",
                        "isValid": "1",
                        "score": 0,
                        "updateOrg": "a8af6c56492e11e9976602420a00000a",
                        "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                        "updateTime": 1561628476000
                    },
                  /* {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">（1）请阐述HBase的三层结构；（2）请阐述在HBase三层结构下，客户端是如何访问到数据的？（3）在HBase中，每个HRegion Server维护一个HLog，而不是每个HRegion一个。请说明这种做法的优点和缺点。（4）当一台HRegionServer意外终止时，主服务器HMaster如何发现这种意外终止情况？为了恢复这台发生意外的HRegionServer上的HRegion，HMaster应该做出哪些处理（包括如何使用HLog进行恢复）？</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "f992561022ce4dd2a2cf4bd2c3a79dd6",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "2e7865ae3b2640b1b7a513813d10b16a",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">下图是Hadoop生态系统图，请分别阐述Hadoop生态系统各个组成部分（Avro、Zookeeper、HDFS、HBase、MapReduce、Pig、Hive、Sqoop）的主要功能。</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "a0f90ed3712648f09331311a7037327f",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "66cdde20074149fcaa69b8ecab061ad2",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">（1）请论述HDFS1.0中SecondaryNameNode的作用和工作原理。（2)请阐述HDFS的名称节点中关于数据块到数据节点的映射信息是如何维护。(3)HDFS HA解决了HDFS1.0中的什么问题?</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "c627e18a3b924ccea85b8373aaffb986",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "6c47978eb7044efc93c8f9d64893da9d",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">建立一个汽车类，包括轮胎个数，汽车颜色，车身重量等属性。并通过不同的构造方法创建事例。</span></p><p class=\"a X3\"><span class=\"a X3\" style=\"font-size:10.0pt;\">类型功能要求：汽车能够加速，减速，停车。 </span></p><p class=\"a X3\"><span class=\"a X3\" style=\"font-size:10.0pt;\">要求：命名规范，代码体现层次，有友好的操作提示。</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "a3117627a8b848d79f19ebc817dbec95",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "96e1f2b837e743bcaed30025c8d189ad",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">（1）请画出MapReduce1.0的体系结构，并说明各个租价不能的功能；（2）指出MapReduce1.0体系结构存在的缺陷</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "ee57b09126a64547a526ee87bb9ec68a",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "98acccd6f8a5481bb6a481f41f375068",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">定义一个类，该类有一个私有成员变量，通过构造方法将其进行赋初值，并提供该成员的getXXX()和setXXX()方法</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "fd4c4d67d1f34585b17eafdc0969caaf",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "a9962f0777e5489dbc47baa2bda76b1a",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">假设关系R(A，B)和S(B,C)都存储在一个文件中。请阐述如何用MapReduce实现R和S这两个关系的连接(join)操作。</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "0e7c9ef78b1e46b4a7227bce0b893e85",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "b409c1584d0c4dd09902f6bc574f0502",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">（1）Pregel的容错是通过检查点来实现的，请阐述Pregel的容错机制。（2）请描述用Pregel解决单源最短路径问题的基本过程。</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "2a6bb0b4ded642178517a555b29cd247",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "c77a471e97cd42b0994f48be30df1446",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">在MapReduce作业中，combine操作是可选的：（1）请指出combine操作的作用。（2）请指出combine操作在哪些场景下才能使用。（3）请指出在MapReduce作业的shuffle过程中，哪些环节可以使用combine操作。</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "b03adc8bdca84934be9d9f5cadbea79b",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "ca4acdfbe7234b67bec36ec8ce22cb3e",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">YARN的目标就是实现“一个集群多个框架”，所有计算框架采用YARN来提供统一的资源管理调度服务，请问这样做可以具有哪些优点？</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "c8e81b8a970349388825d98ecb6c5144",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "d1c6c00891714bbdbb1bb2adaab981d4",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">在Storm框架设计中，可以kill（杀）掉nimbus进程和supervisor进程，然后重启，它们将恢复状态并继续工作，表现出了极其好的稳定性。请问这种保证Storm稳定性的机制是如何设计的？</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "68bbbf0998c240258786c317a15b2073",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "d4b92f4fa5464d48941b3ec31f006d16",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">（1）相对于MapReduce而言，在执行迭代计算方面，为什么Spark具有更好的性能？（2）为什么说Spark的设计具有天生的容错性？（3）Spark有哪三种部署方式？</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "cb2ca9e982ed4f51b4df4d9feedeb107",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "ee7000fe527f4fd388592207c61d6e12",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">试述两种典型的推荐算法UserCF和ItemCF算法的区别，以及各自优缺点</span></p><p class=\"a X3\"><br></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "e858dfa22b1248a2b9b2b02adb13124d",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "f5b3136856014b3fba42eaf6767d276f",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   },
                   {
                       "actualScore": 0,
                       "answer": null,
                       "content": "<p class=\"a X3\"> <span class=\"a X3\" style=\"font-size:10.0pt;\">简述大数据、云计算和物联网三者之间的关系？</span></p>",
                       "createOrg": "a8af6c56492e11e9976602420a00000a",
                       "createPerson": "5f653b3534ee11e98c9f02420a00002c",
                       "createTime": 1561628476000,
                       "etmeduExerciseSetLogId": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                       "etmresExerciseId": "8dca1928b23f4f65ae37a59ff9b00151",
                       "exerciseBo": null,
                       "exerciseType": null,
                       "id": "fffd36999aea4b9783b14352ec1b0972",
                       "isValid": "1",
                       "score": 0,
                       "updateOrg": "a8af6c56492e11e9976602420a00000a",
                       "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                       "updateTime": 1561628476000
                   }*/
                ],
                "id": "bd66b0b3ddb84e249cb2a9fb0cf2dc6a",
                "isValid": "1",
                "operateType": null,
                "status": 1,
                "totalScore": 0,
                "type": "3",
                "updateOrg": "a8af6c56492e11e9976602420a00000a",
                "updatePerson": "5f653b3534ee11e98c9f02420a00002c",
                "updateTime": 1561628476000
            },
            "message": "success"
        })
    },
  ...training,
    ...experiment,
    ...exam,
    ...formalexam,
    ...examTrain,


]
