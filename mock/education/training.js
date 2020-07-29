module.exports = [
  {
    url: "/nledu-etmlab-education/training/course/tree/",
    type: "get",
    response: _ => ({
      code: "0",
      data: {
        courseName: "coursename",
        "list|10": [
          {
            "state|0-2": 0,
            etmresCourseId: "@id",
            etmresCatalogId: "@id",
            context: "neirong",
            catalogBo: {
              catalogName: "catalogname",
              etmresCourseId: "@id",
              id: "@id",
              sn: "2222",
              introduce: "introduce 介绍"
            }
          }
        ]
      },
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-education/training/course/catalog/",
    type: "get",
    response: _ => ({
      code: "0",
      data: {
        "state|0-2": 0,
        etmresCourseId: "123",
        etmresCatalogId: "321",
        context: "neirong@id",
        catalogBo: {
          catalogName: "catalogname",
          etmresCourseId: "123213",
          id: "1111",
          sn: "2222",
          introduce: "introduce 介绍",
          "experiments|10": [
            {
              id: "@id",
              experimentName: "name-@id",
              "state|0-3": 0
            }
          ],
          "handouts|10": [
            {
              id: "@id",
              info: {
                fileName: "filename@id",
                extendName: "ppt",
                createPersonName: "pname",
                createTIme: "2019-1-1",
                fileSize: "10MB"
              }
            }
          ],
          miniVideos: []
        }
      },
      message: "success"
    })
  }
];
