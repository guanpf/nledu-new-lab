module.exports = [
  {
    url: "/nledu-etmlab-education/experiment/open",
    type: "post",
    response: _ => ({
      code: "0",
      data: {
        createOrg: "a8af6c56492e11e9976602420a00000a",
        createPerson: "c79fae6a720611e982fd02420a000018",
        createTime: 1559290643941,
        etmeaCurriculumScheduleId: "284103727aec11e9818902420a00001c",
        etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
        experimentEndTime: 1559296046125,
        experimentStatus: "3",
        experimentTime: 90,
        id: "cbd2f41a0f5349ada2c7950b54514388",
        isValid: "1",
        keyWord: null,
        limit: 0,
        startPage: 0,
        updateOrg: "a8af6c56492e11e9976602420a00000a",
        updatePerson: "c79fae6a720611e982fd02420a000018",
        updateTime: 1559290643941,
        vmList: [
          {
            cloudVmId: "9b7bc34a-667f-4435-b2c0-94a43acc0721",
            createOrg: "",
            createPerson: "c79fae6a720611e982fd02420a000018",
            createTime: 1558708973000,
            etmeduExperimentInstanceId: null,
            etmresExperimentConfigId: "70acf9e370bd11e9b8d102420a00001a",
            experimentConfigBo: {
              cloudVmStandardId: "3",
              clusterRole: null,
              components: null,
              cpu: 2,
              createOrg: null,
              createPerson: "5f653b3534ee11e98c9f02420a00002c",
              createTime: 1557198336000,
              downMirrorId: "08f9e894-9717-4ea1-96d3-49b66d887627",
              etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
              etmresMirrorId: "0ad89d7170b811e982fd02420a000018",
              etmresVmStandardId: "70acf9e370bd11e9b8d102420a00001a",
              hardDisk: 20,
              id: "70acf9e370bd11e9b8d102420a00001a",
              isValid: "1",
              memory: 4,
              mirrorBo: null,
              mirrorDescribe:
                "林子雨实验三镜像（基础镜像，仅操作系统和课程所需要的安装包）",
              mirrorName: "林子雨实验三镜像",
              operatingSystem: "ubuntukylin 16.04 64位",
              tag: 1,
              updateOrg: null,
              updatePerson: "5f653b3534ee11e98c9f02420a00002c",
              updateTime: 1557198336000,
              vmName: "vm",
              vmStandardBo: null
            },
            id: "e0f15016ed0f4563be3d9f3b88fedcbf",
            isValid: "1",
            keyWord: null,
            limit: 0,
            startPage: 0,
            updateOrg: "a8af6c56492e11e9976602420a00000a",
            updatePerson: "c79fae6a720611e982fd02420a000018",
            updateTime: 1559290641000,
            vmFloatIp: null,
            vmIp: "10.20.0.24",
            vmName: "VM0",
            vmStatus: "1",
            vmType: "1",
            vmUrl:
              "http://192.168.1.240:6082/spice_auto.html?token=6d272805-3127-4e23-83ea-21883da39533",
            vmUseStatus: "2"
          },
          {
            cloudVmId: "0f099f7a-6b9e-4ee7-ae88-c5eaa1891e50",
            createOrg: "",
            createPerson: "c79fae6a720611e982fd02420a000018",
            createTime: 1558708973000,
            etmeduExperimentInstanceId: null,
            etmresExperimentConfigId: "c996603a70c111e9b8d102420a00001a",
            experimentConfigBo: {
              cloudVmStandardId: "3",
              clusterRole: null,
              components: null,
              cpu: 2,
              createOrg: null,
              createPerson: "5f653b3534ee11e98c9f02420a00002c",
              createTime: 1557198336000,
              downMirrorId: "51bd5957-189e-415d-a0c3-a0a66bf93c56",
              etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
              etmresMirrorId: "249c8dd370c411e982fd02420a000018",
              etmresVmStandardId: "70acf9e370bd11e9b8d102420a00001a",
              hardDisk: 20,
              id: "c996603a70c111e9b8d102420a00001a",
              isValid: "1",
              memory: 4,
              mirrorBo: null,
              mirrorDescribe:
                "林子雨实验三镜像（基础镜像，仅操作系统和课程所需要的安装包）",
              mirrorName: "林子雨实验三镜像",
              operatingSystem: "ubuntukylin 16.04 64位",
              tag: 1,
              updateOrg: null,
              updatePerson: "5f653b3534ee11e98c9f02420a00002c",
              updateTime: 1557198336000,
              vmName: "vm",
              vmStandardBo: null
            },
            id: "9690ae6504a240148988a0ba85f10972",
            isValid: "1",
            keyWord: null,
            limit: 0,
            startPage: 0,
            updateOrg: "a8af6c56492e11e9976602420a00000a",
            updatePerson: "c79fae6a720611e982fd02420a000018",
            updateTime: 1559290641000,
            vmFloatIp: null,
            vmIp: "10.20.0.40",
            vmName: "VM1",
            vmStatus: "1",
            vmType: "1",
            vmUrl:
              "http://192.168.1.240:6082/spice_auto.html?token=bc8978d8-c0ca-4848-bd24-3ea1ea2a1d6a",
            vmUseStatus: "2"
          }
        ]
      },
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-resource/experiment/652bf006d26b48d182c38540f890d5fb",
    type: "get",
    response: _ => ({
      code: "0",
      data: {
        catalogName: "第二章  大数据处理架构hadoop",
        configs: null,
        courseName: "大数据技术原理与应用",
        etmresCourseId: null,
        experimentDesc: "本实验课程介绍Hadoop的具体安装方法",
        experimentGroup: 1,
        experimentName: "Hadoop的安装和使用",
        experimentScenario: "8",
        experimentTime: 90,
        handouts: null,
        id: "652bf006d26b48d182c38540f890d5fb",
        isChecking: null,
        manuals: [
          {
            content:"",
            directory: "步骤7：Hadoop伪分布式模式配置",
            etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
            id: "05fcb4fabbb344068d2addbb31b3880c",
            parentId: "90aa4a2c3a804fa0958f0fd9bb591205",
            sort: 13,
            type: 2
          },
          {
            content:
              '',
            directory: "步骤8：Hadoop分布式模式配置",
            etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
            id: "cedc79f287a24e17bec482bf0c0c8b31",
            parentId: null,
            sort: 14,
            type: 2
          }
        ],
        miniVideos: null,
        summarys: [
          {
            content: "",
            directory: "实验概述",
            etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
            id: "124d741230924865a7db9d470e92cb29",
            parentId: null,
            sort: 0,
            type: 1
          },
          {
            content:"",
            directory: "实验目标",
            etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
            id: "95c9752f739d403fb80b96f5d18d20cf",
            parentId: null,
            sort: 1,
            type: 1
          },
          {
            content: "大数据技术原理与应用",
            directory: "所属课程",
            etmresExperimentId: "652bf006d26b48d182c38540f890d5fb",
            id: "7190520c44314f709228832e5c40d97d",
            parentId: null,
            sort: 3,
            type: 1
          }
        ],
        textbooks: null,
        title:
          "大数据技术原理与应用：第二章  大数据处理架构hadoop：Hadoop的安装和使用"
        // wholeContent:
        //   '<p>实验概述</p><p style="text-indent:21.0pt;">此实验编写了详细的实训步骤，学员按照文档的步骤，一步一步的操作执行。</p><p style="text-indent:21.0pt;">此课程主要分为两部分，第一部分为操作系统相关环境的前期配置，为大数据环境的搭建做好准备；第二部分为大数据Hadoop环境搭建的核心内容。</p><p style="text-indent:21.0pt;">本实验课程介绍Hadoop的具体安装方法，包括下载安装文件、单机模式配置、伪分布式模式配置、分布式模式配置等。</p><p style="text-indent:21.0pt;">Hadoop包括三种安装模式：</p><p class="a X11">• 单机模式：只在一台机器上运行，存储是采用本地文件系统，没有采用分布式文件系统HDFS；</p><p class="a X11">• 伪分布式模式：存储采用分布式文件系统HDFS，但是，HDFS的名称节点和数据节点都在同一台机器上；</p><p class="a X11">• 分布式模式：存储采用分布式文件系统HDFS，而且，HDFS的名称节点和数据节点位于不同机器上。</p><p>实验目标</p><p class="a X11">• 掌握APT命令的使用</p><p class="a X11">• 掌握SSH的安装与使用</p><p class="a X11">• 掌握JAVA环境的搭建</p><p class="a X11">• 掌握Hadoop单机环境的搭建</p><p class="a X11">• Hadoop伪分布式环境的搭建</p><p class="a X11">• Hadoop分布式环境的搭建</p><p class="a X11" style="text-align:left;text-indent:24.0pt;"> </p><p>所属课程</p>大数据技术原理与应用<p>课程级别</p><p style="text-indent:21.0pt;">适用于Hadoop平台运维工程师、大数据运维工程师、大数据开发工程师、数据库开发工程师。</p><p>推荐课时数</p><p style="text-indent:21.0pt;">推荐课时数：2课时</p><p>考核标准</p><p class="a X11">• 能独立搭建Hadoop的三种环境</p><p>项目需求规划</p><p class="a X11">• <br></p><p>项目实施流程</p><p style="text-indent:0.0pt;text-align:justified;"> </p><p>项目前期准备</p><p class="a X11">• 准备机器和网络</p><p class="a X11">准备至少4G内存的服务器机器，以便后续的安装软件和代码的实现。</p><p class="a X11">• 软件准备</p><p class="a X11">Ubuntu操作系统、Hadoop2.7.1、JDK</p><p>步骤1：创建hadoop用户</p><p style="text-indent:21.0pt;">本教程需要创建一个名称为hadoop的普通用户，后续所有操作都会使用该用户名登录到Linux系统。使用root用户登录Linux 系统，然后，打开一个终端（可以使用快捷键 Ctrl+Alt+T），使用如下命令创建一个用户hadoop：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo useradd -m hadoop -s /bin/bash</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">这条命令创建了可以登陆的 hadoop 用户，并使用 /bin/bash 作为 Shell。</p><p style="text-indent:21.0pt;">接着使用如下命令为hadoop用户设置密码：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo passwd hadoop</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">由于是处于学习阶段，不需要把密码设置得过于复杂，本教程把密码简单设置为 hadoop，也就是，用户名和密码相同，方便记忆。需要按照提示输入两次密码。</p><p style="text-indent:21.0pt;">然后，可为hadoop用户增加管理员权限，以方便部署，避免一些对于新手来说比较棘手的权限问题，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo adduser hadoop sudo</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">最后，点击屏幕右上角的“齿轮”图标，选择“注销”，注销当前登录的root用户，返回到Linux系统的登录界面。在登录界面中选择刚创建的hadoop用户并输入密码进行登录。</p><p>步骤2：更新APT</p><p style="text-indent:21.0pt;">为了确保Hadoop安装过程顺利进行，建议执行下面命令更新APT软件：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo apt-get update</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> </p><p>步骤3：安装SSH</p><p style="text-indent:21.0pt;">Ubuntu默认已安装了SSH客户端，因此，这里还需要安装SSH服务端，请在Linux的终端中执行以下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo apt-get install openssh-server</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">安装后，可以使用如下命令登录本机：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ssh localhost</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">执行该命令后会，会出现“yes/no”选择提示，输入“yes”，然后按提示输入密码hadoop，就登录到本机了。</p><p style="text-indent:21.0pt;">然后，请输入命令“exit”退出刚才的SSH，就回到了原先的终端窗口；然后，可以利用ssh-keygen生成密钥，并将密钥加入到授权中，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd ~/.ssh/ # 若没有该目录，请先执行一次ssh localhost</p><p style="text-indent:20.0pt;">$ ssh-keygen -t rsa # 会有提示，都按回车即可</p><p style="text-indent:20.0pt;">$ cat ./id_rsa.pub &gt;&gt; ./authorized_keys # 加入授权</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;此时，再执行ssh localhost命令，无需输入密码就可以直接登录了。</p><p style="text-indent:21.0pt;"> </p><p>步骤4：安装Java环境</p><p style="text-indent:21.0pt;">在Linux终端中，执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo apt-get install default-jre default-jdk</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;上述安装过程需要访问网络下载相关文件，请保持联网状态。安装结束以后，需要配置JAVA_HOME环境变量，请在Linux终端中输入下面命令打开当前登录用户的环境变量配置文件.bashrc：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ vim ~/.bashrc</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> 在文件最前面添加如下单独一行（注意，等号“=”前后不能有空格），然后保存退出：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">export JAVA_HOME=/usr/lib/jvm/default-java</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">接下来，要让环境变量立即生效，请执行如下代码：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ source ~/.bashrc # 使变量设置生效</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;执行上述命令后，可以检验一下是否设置正确：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ echo $JAVA_HOME # 检验变量值</p><p style="text-indent:20.0pt;">$ java -version</p><p style="text-indent:20.0pt;">$ $JAVA_HOME/bin/java -version # 与直接执行java -version一样</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;至此，就成功安装了Java环境。下面就可以进入Hadoop的安装。</p><p style="text-indent:21.0pt;"> </p><p>步骤5：下载Hadoop安装文件</p><p style="text-indent:21.0pt;">到Hadoop官网下载安装文件hadoop-2.7.1.tar.gz，假设下载得到的安装文件为hadoop-2.7.1.tar.gz。下载完安装文件以后，需要对文件进行解压。按照Linux系统使用的默认规范，用户安装的软件一般都是存放在“/usr/local/”目录下。请使用hadoop用户登录Linux系统，打开一个终端，执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo tar -zxf ~/下载/hadoop-2.7.1.tar.gz -C /usr/local # 解压到/usr/local中</p><p style="text-indent:20.0pt;">$ cd /usr/local/</p><p style="text-indent:20.0pt;">$ sudo mv ./hadoop-2.7.1/ ./hadoop # 将文件夹名改为hadoop</p><p style="text-indent:20.0pt;">$ sudo chown -R hadoop ./hadoop # 修改文件权限</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;Hadoop解压后即可使用，可以输入如下命令来检查 Hadoop是否可用，成功则会显示 Hadoop版本信息：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./bin/hadoop version</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:0.0pt;"> </p><p>步骤6：Hadoop单机模式配置</p><p style="text-indent:21.0pt;">Hadoop默认模式为非分布式模式（本地模式），无需进行其他配置即可运行。Hadoop附带了丰富的例子，运行如下命令可以查看所有例子：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./bin/hadoop jar ./share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.1.jar</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">上述命令执行后，会显示所有例子的简介信息，包括grep、join、wordcount等。这里选择运行grep例子，可以先在“/usr/local/hadoop”目录下创建一个文件夹input，并复制一些文件到该文件夹下，然后，运行grep程序，将 input文件夹中的所有文件作为grep的输入，让grep程序从所有文件中筛选出符合正则表达式“dfs[a-z.]+”的单词，并统计单词出现的次数，最后，把统计结果输出到“/usr/local/hadoop/output”文件夹中。完成上述操作的具体命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ mkdir input</p><p style="text-indent:20.0pt;">$ cp ./etc/hadoop/*.xml ./input # 将配置文件复制到input目录下</p><p style="text-indent:20.0pt;">$ ./bin/hadoop jar ./share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar grep ./input ./output \'dfs[a-z.]+\'</p><p style="text-indent:20.0pt;">$ cat ./output/* # 查看运行结果</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">执行成功后，输出了作业的相关信息，输出的结果是符合正则表达式的单词 “dfsadmin”出现了1次。</p><p style="text-indent:21.0pt;">需要注意的是，Hadoop默认不会覆盖结果文件，因此，再次运行上面实例会提示出错。如果要再次运行，需要先使用如下命令把output文件夹删除：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ rm -r ./output</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:0.0pt;"> </p><p>步骤7：Hadoop伪分布式模式配置</p><p style="text-indent:21.0pt;">Hadoop可以在单个节点（一台机器）上以伪分布式的方式运行，同一个节点既作为名称节点（NameNode），也作为数据节点（DataNode），读取的是分布式文件系统 HDFS 中的文件。</p><p style="text-indent:21.0pt;">1. 修改配置文件</p><p style="text-indent:21.0pt;">需要配置相关文件，才能够让Hadoop在伪分布式模式下顺利运行。Hadoop的配置文件位于“/usr/local/hadoop/etc/hadoop/”中，进行伪分布式模式配置时，需要修改2个配置文件，即core-site.xml和hdfs-site.xml。</p><p style="text-indent:21.0pt;">可以使用vim编辑器打开core-site.xml文件，它的初始内容如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;修改以后，core-site.xml文件的内容如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;file:/usr/local/hadoop/tmp&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;description&gt;Abase for other temporary directories.&lt;/description&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;fs.defaultFS&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;hdfs://localhost:9000&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> 在上面的配置文件中，hadoop.tmp.dir用于保存临时文件，若没有配置hadoop.tmp.dir这个参数，则默认使用的临时目录为“/tmp/hadoo-hadoop”，而这个目录在Hadoop重启时有可能被系统清理掉，导致一些意想不到的问题，因此，必须配置这个参数。fs.defaultFS这个参数，用于指定HDFS的访问地址，其中，9000是端口号。</p><p style="text-indent:21.0pt;">同样，需要修改配置文件hdfs-site.xml，修改后的内容如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.replication&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;1&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.namenode.name.dir&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;file:/usr/local/hadoop/tmp/dfs/name&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.datanode.data.dir&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;file:/usr/local/hadoop/tmp/dfs/data&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> </p><p style="text-indent:21.0pt;">2. 执行名称节点格式化</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;修改配置文件以后，要执行名称节点的格式化，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./bin/hdfs&nbsp;namenode -format</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;如果格式化成功，会看到“successfully formatted”和“Exitting with status 0”的提示信息，若为“Exitting with status 1”，则表示出现错误。</p><p style="text-indent:21.0pt;">3. 启动Hadoop</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;执行下面命令启动Hadoop：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./sbin/start-dfs.sh #start-dfs.sh是个完整的可执行文件，中间没有空格</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;启动时可能会出现如下警告信息：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">WARN util.NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable WARN</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">这个警告提示信息可以忽略，并不会影响Hadoop正常使用。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;Hadoop启动完成后，可以通过命令 jps 来判断是否成功启动，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ jps</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">若成功启动，则会列出如下进程：NameNode、DataNode和SecondaryNameNode。</p><p style="text-indent:21.0pt;"> 通过start-dfs.sh命令启动Hadoop以后，就可以运行MapReduce程序处理数据，此时是对HDFS进行数据读写，而不是对本地文件进行读写。</p><p style="text-indent:21.0pt;">5. 使用Web界面查看HDFS信息</p><p style="text-indent:21.0pt;">Hadoop成功启动后，可以在Linux系统中（不是Windows系统）打开一个浏览器，在地址栏输入地址“http://localhost:50070”，就可以查看名称节点和数据节点信息，还可以在线查看 HDFS 中的文件。</p><p style="text-indent:21.0pt;">6. 运行Hadoop伪分布式实例</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;上面的单机模式中，grep例子读取的是本地数据，伪分布式模式下，读取的则是分布式文件系统HDFS 上的数据。要使用HDFS，首先需要在HDFS中创建用户目录（本教程全部统一采用hadoop用户名登录Linux系统），命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./bin/hdfs dfs -mkdir -p /user/hadoop</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;接着需要把本地文件系统的“/usr/local/hadoop/etc/hadoop”目录中的所有xml文件作为输入文件，复制到分布式文件系统HDFS中的“/user/hadoop/input”目录中，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./bin/hdfs dfs -mkdir input #在HDFS中创建hadoop用户对应的input目录</p><p style="text-indent:20.0pt;">$ ./bin/hdfs dfs -put ./etc/hadoop/*.xml input #把本地文件复制到HDFS中</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;复制完成后，可以通过如下命令查看HDFS中的文件列表：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ./bin/hdfs dfs -ls input</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;执行上述命令以后，可以看到input目录下的文件信息。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;现在就可以运行Hadoop自带的grep程序，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ./bin/hadoop jar ./share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar grep input output \'dfs[a-z.]+\'</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;运行结束后，可以通过如下命令查看HDFS中的output文件夹中的内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ./bin/hdfs dfs -cat output/*</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;需要强调的是，Hadoop运行程序时，输出目录不能存在，否则会提示如下错误信息：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">org.apache.hadoop.mapred.FileAlreadyExistsException: Output directory hdfs://localhost:9000/user/hadoop/output already exists</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">因此，若要再次执行grep程序，需要执行如下命令删除HDFS中的output文件夹：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ./bin/hdfs dfs -rm -r output # 删除 output 文件夹</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> </p><p style="text-indent:21.0pt;">7. 关闭Hadoop</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;如果要关闭Hadoop，可以执行下面命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local/hadoop</p><p style="text-indent:20.0pt;">$ ./sbin/stop-dfs.sh</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;下次启动Hadoop时，无需进行名称节点的初始化（否则会出错），也就是说，不要再次执行“hdfs namenode -format”命令，每次启动Hadoop只需要直接运行start-dfs.sh命令即可。</p><p style="text-indent:21.0pt;">9. 配置PATH变量</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;前面在启动Hadoop时，都要加上命令的路径，比如，“./sbin/start-dfs.sh”这个命令中就带上了路径，实际上，通过设置PATH变量，就可以在执行命令时，不用带上命令本身所在的路径。具体操作方法是，首先使用vim编辑器打开“~/.bashrc”这个文件，然后，在这个文件的最前面位置加入如下单独一行：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">export PATH=$PATH:/usr/local/hadoop/sbin</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;添加后，执行命令“source ~/.bashrc”使设置生效。设置生效后，在任何目录下启动Hadoop，都只要直接输入start-dfs.sh命令即可，同理，停止Hadoop，也只需要在任何目录下输入stop-dfs.sh命令即可。</p><p style="text-indent:0.0pt;text-align:justified;background-color:#ffffff;"> </p><p>步骤8：Hadoop分布式模式配置</p><p style="text-indent:21.0pt;">当Hadoop采用分布式模式部署和运行时，存储采用分布式文件系统HDFS，而且，HDFS的名称节点和数据节点位于不同机器上。这时，数据就可以分布到多个节点上，不同数据节点上的数据计算可以并行执行，这时的MapReduce分布式计算能力才能真正发挥作用。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;为了降低分布式模式部署难度，本教程简单使用两个节点（两台物理机器）来搭建集群环境，一台机器作为 Master节点，局域网IP地址为192.168.1.121，另一台机器作为 Slave 节点，局域网 IP 地址为192.168.1.122。由三个以上节点构成的集群，也可以采用类似的方法完成安装部署。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;Hadoop 集群的安装配置大致包括以下步骤：</p><p class="a X11">• 步骤1：选定一台机器作为 Master；</p><p class="a X11">• 步骤2：在Master节点上创建hadoop用户、安装SSH服务端、安装Java环境；</p><p class="a X11">• 步骤3：在Master节点上安装Hadoop，并完成配置；</p><p class="a X11">• 步骤4：在其他Slave节点上创建hadoop用户、安装SSH服务端、安装Java环境；</p><p class="a X11">• 步骤5：将Master节点上的“/usr/local/hadoop”目录复制到其他Slave节点上；</p><p class="a X11">• 步骤6：在Master节点上开启Hadoop；</p><p style="text-indent:21.0pt;">上述这些步骤中，关于如何创建hadoop用户、安装SSH服务端、安装Java环境、安装Hadoop等过程，已经在前面介绍伪分布式安装的时候做了详细介绍，请按照之前介绍的方法完成步骤1到步骤4，这里不再赘述。在完成步骤1到步骤4的操作以后，才可以继续进行下面的操作。</p><p style="text-indent:21.0pt;">1. 网络配置</p><p style="text-indent:21.0pt;">假设集群所用的两个节点（机器）都位于同一个局域网内，两台机器的IP地址分别是192.168.1.121和192.168.1.122。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;由于集群中有两台机器需要设置，所以，在接下来的操作中，一定要注意区分Master节点和Slave节点。为了便于区分Master节点和Slave节点，可以修改各个节点的主机名，这样，在Linux系统中打开一个终端以后，在终端窗口的标题和命令行中都可以看到主机名，就比较容易区分当前是对哪台机器进行操作。在Ubuntu中，我们在 Master 节点上执行如下命令修改主机名：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo vim /etc/hostname</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;执行上面命令后，就打开了“/etc/hostname”这个文件，这个文件里面记录了主机名，比如，在安装Ubuntu系统时，设置的主机名是“dblab-VirtualBox”，因此，打开这个文件以后，里面就只有“dblab-VirtualBox”这一行内容，可以直接删除，并修改为“Master”（注意是区分大小写的），然后，保存退出vim编辑器，这样就完成了主机名的修改，需要重启Linux系统才能看到主机名的变化。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;要注意观察主机名修改前后的变化。在修改主机名之前，如果用hadoop登录Linux系统，打开终端，进入Shell命令提示符状态，会显示如下内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">hadoop@ dblab-VirtualBox:~$</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;修改主机名并且重启系统之后，用hadoop登录Linux系统，打开终端，进入Shell命令提示符状态，会显示如下内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">hadoop@ Master:~$</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;可以看出，这时就很容易辨认出当前是处于Master节点上进行操作，不会和Slave节点产生混淆。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;然后，执行如下命令打开并修改Master节点中的“/etc/hosts”文件：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo vim /etc/hosts</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;可以在hosts文件中增加如下两条IP和主机名映射关系：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">192.168.1.121 Master</p><p style="text-indent:20.0pt;">192.168.1.122 Slave1</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;需要注意的是，一般hosts文件中只能有一个127.0.0.1，其对应主机名为localhost，如果有多余127.0.0.1映射，应删除，特别是不能存在“127.0.0.1 Master”这样的映射记录。修改后需要重启Linux系统。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;上面完成了Master节点的配置，接下来要继续完成对其他Slave节点的配置修改。本教程只有一个Slave节点，主机名为Slave1。请参照上面的方法，把Slave节点上的“/etc/hostname”文件中的主机名修改为“Slave1”，同时，修改“/etc/hosts”的内容，在hosts文件中增加如下两条IP和主机名映射关系：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">192.168.1.121 Master</p><p style="text-indent:20.0pt;">192.168.1.122 Slave1</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;修改完成以后，请重新启动Slave节点的Linux系统。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;这样就完成了Master节点和Slave节点的配置，然后，需要在各个节点上都执行如下命令，测试是否相互ping得通，如果ping不通，后面就无法顺利配置成功：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ping Master -c 3 # 只ping 3次就会停止，否则要按Ctrl+c中断ping命令</p><p style="text-indent:20.0pt;">$ ping Slave1 -c 3</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;</p><p style="text-indent:21.0pt;">2. SSH无密码登录节点</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;必须要让Master节点可以SSH无密码登录到各个Slave节点上。首先，生成Master节点的公匙，如果之前已经生成过公钥，必须要删除原来生成的公钥，重新生成一次，因为前面我们对主机名进行了修改。具体命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd ~/.ssh # 如果没有该目录，先执行一次ssh localhost</p><p style="text-indent:20.0pt;">$ rm ./id_rsa* # 删除之前生成的公匙（如果已经存在）</p><p style="text-indent:20.0pt;">$ ssh-keygen -t rsa # 执行该命令后，遇到提示信息，一直按回车就可以</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;为了让Master节点能够无密码SSH登录本机，需要在Master节点上执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cat ./id_rsa.pub &gt;&gt; ./authorized_keys</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;完成后可以执行命令“ssh Master”来验证一下，可能会遇到提示信息，只要输入yes即可，测试成功后，请执行“exit”命令返回原来的终端。</p><p style="text-indent:21.0pt;">接下来，在Master节点将上公匙传输到Slave1节点：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">scp ~/.ssh/id_rsa.pub hadoop@Slave1:/home/hadoop/</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;上面的命令中，scp是secure copy的简写，用于在 Linux下进行远程拷贝文件，类似于cp命令，不过，cp只能在本机中拷贝。执行scp时会要求输入Slave1上hadoop用户的密码，输入完成后会提示传输完毕。</p><p style="text-indent:21.0pt;">接着在Slave1节点上，将SSH公匙加入授权：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ mkdir ~/.ssh # 如果不存在该文件夹需先创建，若已存在，则忽略本命令</p><p style="text-indent:20.0pt;">$ cat ~/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys</p><p style="text-indent:20.0pt;">$ rm ~/id_rsa.pub # 用完以后就可以删掉</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">如果有其他Slave节点，也要执行将Master公匙传输到Slave节点以及在Slave节点上加入授权这两步操作。</p><p style="text-indent:21.0pt;">这样，在Master节点上就可以无密码SSH登录到各个Slave节点了，可在Master节点上执行如下命令进行检验：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ ssh Slave1</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;</p><p style="text-indent:21.0pt;">3. 配置PATH变量</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;配置PATH变量，就可以在任意目录中直接使用hadoop、hdfs等命令了。如果还没有配置PATH变量，那么需要在Master节点上进行配置。 首先执行命令“vim ~/.bashrc”，也就是使用vim编辑器打开“~/.bashrc”文件，然后，在该文件最上面的位置加入下面一行内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">export PATH=$PATH:/usr/local/hadoop/bin:/usr/local/hadoop/sbin</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;保存后执行命令“source ~/.bashrc”，使配置生效。</p><p style="text-indent:21.0pt;">4. 配置集群/分布式环境</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;在配置集群/分布式模式时，需要修改“/usr/local/hadoop/etc/hadoop”目录下的配置文件，这里仅设置正常启动所必须的设置项，包括slaves、core-site.xml、hdfs-site.xml、mapred-site.xml、yarn-site.xml共5个文件，更多设置项可查看官方说明。</p><p style="text-indent:21.0pt;">（1）修改文件slaves</p><p style="text-indent:21.0pt;">需要把所有数据节点的主机名写入该文件，每行一个，默认为 localhost（即把本机作为数据节点），所以，在伪分布式配置时，就采用了这种默认的配置，使得节点既作为名称节点也作为数据节点。在进行分布式配置时，可以保留localhost，让Master节点同时充当名称节点和数据节点，或者也可以删掉localhost这行，让Master节点仅作为名称节点使用。</p><p style="text-indent:21.0pt;">本教程让Master节点仅作为名称节点使用，因此将slaves文件中原来的localhost删除，只添加如下一行内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">Slave1</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> </p><p style="text-indent:21.0pt;">（2）修改文件core-site.xml </p><p style="text-align:left;text-indent:21.0pt;text-indent:21.0pt;">请把core-site.xml文件修改为如下内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;fs.defaultFS&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;hdfs://Master:9000&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;file:/usr/local/hadoop/tmp&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;description&gt;Abase for other temporary directories.&lt;/description&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;各个配置项的含义可以参考前面伪分布式模式时的介绍，这里不再赘述。</p><p style="text-indent:21.0pt;">（3）修改文件hdfs-site.xml</p><p style="text-indent:21.0pt;">对于Hadoop的分布式文件系统HDFS而言，一般都是采用冗余存储，冗余因子通常为3，也就是说，一份数据保存三份副本。但是，本教程只有一个Slave节点作为数据节点，即集群中只有一个数据节点，数据只能保存一份，所以 ，dfs.replication的值还是设置为 1。hdfs-site.xml具体内容如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.namenode.secondary.http-address&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;Master:50090&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.replication&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;1&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.namenode.name.dir&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;file:/usr/local/hadoop/tmp/dfs/name&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;dfs.datanode.data.dir&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;file:/usr/local/hadoop/tmp/dfs/data&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;</p><p style="text-indent:21.0pt;">（4）修改文件mapred-site.xml</p><p style="text-indent:21.0pt;">“/usr/local/hadoop/etc/hadoop”目录下有一个mapred-site.xml.template，需要修改文件名称，把它重命名为mapred-site.xml，然后，把mapred-site.xml文件配置成如下内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;mapreduce.framework.name&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;yarn&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;mapreduce.jobhistory.address&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;Master:10020&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;mapreduce.jobhistory.webapp.address&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;Master:19888&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> </p><p style="text-indent:21.0pt;">（5）修改文件 yarn-site.xml</p><p style="text-align:left;text-indent:21.0pt;text-indent:21.0pt;">请把yarn-site.xml文件配置成如下内容：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">&lt;configuration&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;Master&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;"> &lt;property&gt;</p><p style="text-indent:20.0pt;"> &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;</p><p style="text-indent:20.0pt;"> &lt;value&gt;mapreduce_shuffle&lt;/value&gt;</p><p style="text-indent:20.0pt;"> &lt;/property&gt;</p><p style="text-indent:20.0pt;">&lt;/configuration&gt;</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> </p><p style="text-indent:21.0pt;">上述5个文件全部配置完成以后，需要把Master节点上的“/usr/local/hadoop”文件夹复制到各个节点上。如果之前已经运行过伪分布式模式，建议在切换到集群模式之前首先删除之前在伪分布式模式下生成的临时文件。具体来说，需要首先在Master节点上执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ cd /usr/local</p><p style="text-indent:20.0pt;">$ sudo rm -r ./hadoop/tmp # 删除 Hadoop 临时文件</p><p style="text-indent:20.0pt;">$ sudo rm -r ./hadoop/logs/* # 删除日志文件</p><p style="text-indent:20.0pt;">$ tar -zcf ~/hadoop.master.tar.gz ./hadoop # 先压缩再复制</p><p style="text-indent:20.0pt;">$ cd ~</p><p style="text-indent:20.0pt;">$ scp ./hadoop.master.tar.gz Slave1:/home/hadoop</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;然后在Slave1节点上执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ sudo rm -r /usr/local/hadoop # 删掉旧的（如果存在）</p><p style="text-indent:20.0pt;">$ sudo tar -zxf ~/hadoop.master.tar.gz -C /usr/local</p><p style="text-indent:20.0pt;">$ sudo chown -R hadoop /usr/local/hadoop</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;"> 同样，如果有其他Slave节点，也要执行将hadoop.master.tar.gz传输到Slave节点以及在Slave节点解压文件的操作。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;首次启动Hadoop集群时，需要先在Master节点执行名称节点的格式化（只需要执行这一次，后面再启动Hadoop时，不要再次格式化名称节点），命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ hdfs namenode -format</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;现在就可以启动Hadoop了，启动需要在Master节点上进行，执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ start-dfs.sh</p><p style="text-indent:20.0pt;">$ start-yarn.sh</p><p style="text-indent:20.0pt;">$ mr-jobhistory-daemon.sh start historyserver</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;通过命令jps可以查看各个节点所启动的进程。如果已经正确启动，则在Master节点上可以看到NameNode、ResourceManager、SecondrryNameNode和JobHistoryServer进程。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;在Slave节点可以看到DataNode和NodeManager进程。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;缺少任一进程都表示出错。另外还需要在Master节点上通过命令“hdfs dfsadmin -report”查看数据节点是否正常启动，如果屏幕信息中的“Live datanodes”不为 0 ，则说明集群启动成功。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;可以在Linux系统的浏览器中输入地址“http://master:50070/”，通过 Web 页面看到查看名称节点和数据节点的状态。如果不成功，可以通过启动日志排查原因。</p><p style="text-indent:21.0pt;">5. 执行分布式实例</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;执行分布式实例过程与伪分布式模式一样，首先创建HDFS上的用户目录，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ hdfs dfs -mkdir -p /user/hadoop</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;然后，在HDFS中创建一个input目录，并把“/usr/local/hadoop/etc/hadoop”目录中的配置文件作为输入文件复制到input目录中，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ hdfs dfs -mkdir input</p><p style="text-indent:20.0pt;">$ hdfs dfs -put /usr/local/hadoop/etc/hadoop/*.xml input</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;接着就可以运行 MapReduce 作业了，命令如下：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ hadoop jar /usr/local/hadoop/share/hadoop/mapreduce/hadoop-mapreduce-examples-*.jar grep input output \'dfs[a-z.]+\'</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;运行时的输出信息与伪分布式类似，会显示MapReduce作业的进度。</p><p style="text-indent:21.0pt;">在执行过程中，可以在Linux系统中打开浏览器，在地址栏输入“http://master:8088/cluster”，通过Web界面查看任务进度，在Web界面点击 "Tracking UI" 这一列的History连接，可以看到任务的运行信息。</p><p style="text-indent:21.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;最后，关闭Hadoop集群，需要在Master节点执行如下命令：</p><table class="a1 a7" style="width:426.1pt;border-collapse:collapse;">\n <tbody>\n  <tr class="a1 a7">\n   <td class="a1 a7" style="width:426.1pt;border-top:0.5px solid #000000;border-bottom:0.5px solid #000000;border-left:0.5px solid #000000;border-right:0.5px solid #000000;"><p style="text-indent:20.0pt;">$ stop-yarn.sh</p><p style="text-indent:20.0pt;">$ stop-dfs.sh</p><p style="text-indent:20.0pt;">$ mr-jobhistory-daemon.sh stop historyserver</p></td>\n  </tr>\n </tbody>\n</table><p style="text-indent:9.0pt;">&nbsp;&nbsp;&nbsp;&nbsp;至此，就顺利完成了Hadoop集群搭建。</p><p style="text-indent:21.0pt;"></p>'
      },
      message: "success"
    })
  },
  {
    url: "/nledu-etmlab-resource/es/[0-9]/[0-9]/[0-9]",
    type: 'get',
    response: _ => {
      return {
        code: "0",

        data: {

          "esHead": [
            {
              "count": "13",
              "typeId": "0",
              "typeName": "全部"
            },
            {
              "count": "3",
              "typeId": "1",
              "typeName": "课程"
            },
            {
              "count": "2",
              "typeId": "2",
              "typeName": "实验"
            },
            {
              "count": "0",
              "typeId": "3",
              "typeName": "微课视频"
            },
            {
              "count": "0",
              "typeId": "4",
              "typeName": "电子教材"
            },
            {
              "count": "0",
              "typeId": "5",
              "typeName": "讲义"
            },
            {
              "count": "2",
              "typeId": "6",
              "typeName": "习题"
            },
            {
              "count": "2",
              "typeId": "7",
              "typeName": "作业"
            },
            {
              "count": "2",
              "typeId": "8",
              "typeName": "试卷"
            },
            {
              "count": "2",
              "typeId": "9",
              "typeName": "随手笔记"
            }
          ],
          "esBody": [
            {
              "catalogCnt": null,
              "catalogName": null,
              "courseName": null,
              "courseType": null,
              "coverimg": null,
              "id": "34a1195d8e524273ad65e54793565d8f",
              "introduce": "课程将系统讲授大<mark>数据</mark>的基本概念、大<mark>数据</mark>处理架构Hadoop、分布式文件系统HDFS、分布式<mark>数据</mark>库HBase、NoSQL<mark>数据</mark>库、云<mark>数据</mark>库、分布式并行编程模型MapReduce、基于内存的大<mark>数据</mark>处理架构Spark",
              "knowledgeCnt": null,
              "knowledgeName": "",
              "resourceType": "课程",
              "skillsCnt": 0,
              "skillsName": "",
              "teachingType": null,
              attribution: {
                chapter_id: '6dd5e212c1d342edbb0ca96aba4f2e7e',
                chapter_name: 'hdfs介绍',
                course_id: '34a1195d8e524273ad65e54793565d8f',
                course_name: '测试课程'
              }
            },
            {
              "catalogCnt": null,
              "catalogName": "hdfs介绍",
              "courseName": "测试课程2",
              "courseType": "T.互联网.大<mark>数据</mark>",
              "coverimg": "http://192.xxxx.1:8080/test2.png",
              "id": "2",
              "introduce": "测试大<mark>数据</mark>课程2介绍",
              "knowledgeCnt": null,
              "knowledgeName": "hdfs介绍",
              "resourceType": "课程",
              "skillsCnt": null,
              "skillsName": "了解什么是hdfs",
              "teachingType": "专业课",
            attribution: {
              chapter_id: '1',
                chapter_name: 'hdfs介绍',
                course_id: '2',
                course_name: '测试课程'
            }
            },
            {
              "catalogCnt": null,
              "catalogName": "大<mark>数据</mark>概述",
              "courseName": "测试大<mark>数据</mark>课程1",
              "courseType": "T.互联网.大<mark>数据</mark>",
              "coverimg": "http://192.xxxx.1:8080/test1.png",
              "id": "1",
              "introduce": "测试大<mark>数据</mark>课程1介绍",
              "knowledgeCnt": null,
              "knowledgeName": "大<mark>数据</mark>介绍",
              "resourceType": "课程",
              "skillsCnt": null,
              "skillsName": "了解什么是大<mark>数据</mark>",
              "teachingType": "专业课"
            },
            {
              "content": "测试大<mark>数据</mark>实验2",
              "coverimg": "",
              "id": "2",
              "name": "测试大<mark>数据</mark>实验2",
              "resourceType": "微课",
              "time": "3600"
            },
            {
              "content": "测试大<mark>数据</mark>实验2",
              "coverimg": "",
              "id": "2",
              "name": "测试大<mark>数据</mark>实验2",
              "resourceType": "实验",
              "time": "3600"
            },
            {
              "content": "测试大<mark>数据</mark>实验1",
              "coverimg": "",
              "id": "1",
              "name": "测试大<mark>数据</mark>实验1",
              "resourceType": "实验",
              "time": "3600"
            },
            {
              "content": "测试大<mark>数据</mark>习题2",
              "coverimg": "",
              "id": "2",
              "name": "测试大<mark>数据</mark>习题2",
              "resourceType": "习题"
            },
            {
              "content": "测试大<mark>数据</mark>习题1",
              "coverimg": "",
              "id": "1",
              "name": "测试大<mark>数据</mark>习题1",
              "resourceType": "习题"
            },
            {
              "content": "请简单介绍一下什么是hdfs",
              "coverimg": "",
              "id": "2",
              "name": "测试大<mark>数据</mark>作业集2",
              "resourceType": "作业",
              "time": ""
            },
            {
              "content": "请简单介绍一下什么是大<mark>数据</mark>",
              "coverimg": "",
              "id": "1",
              "name": "测试大<mark>数据</mark>作业集1",
              "resourceType": "作业",
              "time": ""
            },
            {
              "content": "请简单介绍一下什么是hdfs",
              "coverimg": "",
              "id": "4",
              "name": "测试大<mark>数据</mark>试卷2",
              "resourceType": "试卷",
              "time": ""
            }
          ],
          // result: [{
          //   type:'课程',
          //   coursename: '大数据Hadoop-Storm-Spark高级工程师课程',
          //   coverimg: 'http://www.baidu.com',
          //   introduce: '本套课程，面向零基础学员，主要是用Hadoop-2.6系统为例，讲解Hadoop生态系统中常用的分布式框架，带你走进大数据的大门。讲解Hadoop生态系统中常用的分布式框架，带你走进大数据的大门。本文介绍如何通过编写代码的方式 CREATE TABLE `post` ( `postingType` int NOT ...',
          //   edutype: '专业课',
          //   coursetype: 'T . 互联网 . 大数据',
          //   knowledges: 'Hadoop环境的安装和配置',
          //   countknowledges: 15,
          //   skills: '掌握大数据的理论基础 ',
          //   countskills: 16,
          //   chapters: '分布式文件概念',
          //   countchapters: 17,
          //   courseid: '123'
          // },
          //   {
          //     type:"微课",
          //     name: '大数据Hadoop-Storm-Spark高级工程师课程',
          //     time: '1小时20分',
          //     filetype: 'MP4',
          //     coverimg: 'https://www.baidu.com'
          //   },
          //   {
          //     type: "实验",
          //     name: '大数据Hadoop-Storm-Spark高级工程师课程',
          //     coverimg: 'https://www.baidu.com',
          //     intro: '本文介绍大数据网络增强型实例规格族d1ne和大数据型实例规格族d1，并列出了具体的实例规格。 大数据型实例规格族介绍 d1ne 和 d1 是为 Hadoop 分布式计算、海量日志处理和大型数据仓库 ...',
          //     time: '1小时20分'
          //   },
          //   {
          //     type: '电子教材',
          //     name: "大数据Hadoop-Storm-Spark高级工程师课程",
          //     coverimg: 'http://www.baidu.com',
          //     content: '大数据处理，提供的大数据框架可以让您轻松、高速、经济、安全、稳定地处理大数据，满足如日志分析、数据仓库、商业智供的大数据框架可以让您轻松、高速、经济、安全、稳定地处理大数据，满足如日志分析、数据仓库。满科学模拟等业务需求您可以运行 Hadoop ...'
          //   },
          //   {
          //     type: '讲义',
          //     name: '大数据Hadoop-Storm-Spark高级工程师课程',
          //     coverimg: 'http://www.baidu.com',
          //     content: '简化了大数据处理，提供的大数据框架可以让您轻松、高速、经济、安全、稳定地处理大数据，满足如日志分析、数据仓库、商业智供的大数据框架可以让您轻松、高速、经济、安全、稳定地处理大数据，满足如日志分析、数据仓库、商业智能、机器学习、科学模拟等业务需求。您可以运行 Hadoop ...'
          //   },
          //   {
          //     type: '习题',
          //     name: '大数据Hadoop-Storm-Spark高级工程师课程',
          //     coverimg: '',
          //     content: '什么是大数据，大数据为什么重要，如何应用大数据_关于大数据应用的问题 ...',
          //     time: '2019/02/01',
          //   },
          //   {
          //     type: '作业',
          //     name: '大数据Hadoop-Storm-Spark高级工程师课程',
          //     coverimg: '',
          //     content: '什么是大数据，大数据为什么重要，如何应用大数据_关于大数据应用的问题 ...',
          //     time: '2019/02/01',
          //   },
          //   {
          //     type: '试卷',
          //     name: '大数据Hadoop-Storm-Spark高级工程师课程',
          //     coverimg: '',
          //     content: '什么是大数据，大数据为什么重要，如何应用大数据_关于大数据应用的问题 ...',
          //     time: '2019/02/01',
          //   },
          //   {
          //     type: '随手笔记',
          //     name: '大数据笔记内容',
          //     coverimg: '',
          //     content: '大数据正在迅速膨胀并变大，它决定着企业的未来发展，虽然很多企业可能并没有意识到数据爆炸性增长带来问题的隐患，但是随着时间的推移，人们将越来越多的意识到大数据对企业的重要性。',
          //     time: '2019/02/01',
          //   }
          // ]
          //

        }
      }
    }
  },
];
