# 隐私网络浏览器http接口文档

## 响应结构体定义

| 参数名 | 说明                    |
|:------ |:----------------------- |
| code   | 0：成功；其它：错误代码 |
| msg    | 错误信息                |
| data   | 返回数据                |



## 首页

### 全网统计数据
- url: /home/globalStats

- 请求参数

无

- 响应参数

| 参数名           | 说明               |
|:---------------- |:------------------ |
| dataServerCount  | 数据host个数       |
| powerServerCount | 算力host个数       |
| dataFileSize     | 上传数据大小,byte  |
| usedDataFileSize | 使用数据大小，byte |
| taskCount        | 总任务数           |
| partnerCount     | 总参与方数         |
| totalCore        | 总CPU核心数        |
| totalMemory      | 总内存             |
| totalBandwidth   | 总带宽             |


### 算力走势图

- url: /home/powerTrend

- 请求参数

| 参数名    | 说明                              |
|:--------- |:--------------------------------- |
| startDate | 开始日期，开始日期最大值=now-days |
| days      | 多少天的数据                      |

- 响应参数

| 参数名         | 参数类型         |    说明     |
|:-------------- |:------------ |:-----------|
| updateAt       | array         | 日期         |
| dailyMemory    | array | 当日新增内存 |
| dailyCore      | array  | 当日新增cpu  |
| dailyBandwidth | array | 当日新增带宽 |
| totalMemory    | array     | 内存累计     |
| totalCore      | array      | cpu累计      
| totalBandwidth | array     | 带宽累计     |


### 数据量走势图

- url: /home/dataTrend

- 请求参数

| 参数名    | 说明                              |
|:--------- |:--------------------------------- |
| startDate | 开始日期，开始日期最大值=now-days |
| days      | 多少天的数据                      |

- 响应参数

| 参数名    | 参数类型           |     说明      |
|:--------- |:-------------- |:------------|
| dailySize | array | 当日新增数据量 |
| totalSize | array     | 数据量累计     |


### 算力排行

- url: /home/powerRanking

- 请求参数

| 参数名   | 说明          |
|:-------- |:------------- |
| pageNo   | 页码，从1开始 |
| pageSize | 每页数据      |


- 响应参数

| 参数名     | 说明              |
|:---------- |:----------------- |
| identityId | 组织身份ID        |
| orgName    | 组织名称          |
| core       | cpu，从小到大排序 |
| memory     | 内存              |
| bandwidth  | 带宽              |
| idleDays   | 空闲天数          |

### 活跃度排行

url: /home/activityRanking

- 请求参数

| 参数名   | 说明          |
|:-------- |:------------- |
| pageNo   | 页码，从1开始 |
| pageSize | 每页数据      |


- 响应参数

| 参数名     | 说明                   |
|:---------- |:---------------------- |
| identityId | 组织身份ID             |
| orgName    | 组织名称               |
| core       | cpu                    |
| memory     | 内存                   |
| bandwidth  | 带宽                   |
| idleDays   | 空闲天数，从小到大排序 |




## 节点

### 列表全网组织

- url: /org/listOrgInfo

- 请求参数

| 参数名   | 说明          |
|:-------- |:------------- |
| pageNo   | 页码，从1开始 |
| pageSize | 每页数据      |


- 响应参数

| 参数名                     | 说明                         |
|:-------------------------- |:---------------------------- |
| identityId                 | 组织身份ID                   |
| identityType               | 组织身份ID类型               |
| orgName                    | 组织名称                     |
| status                     | 状态                         |
| accumulativeMemory         | 总内存                       |
| accumulativeCore           | 总核心                       |
| accumulativeBandwidth      | 总带宽                       |
| accumulativePowerTaskCount | 累计任务（以算力提供方参与） |
| accumulativeDataTaskCount  | 累计任务（以数据提供方参与） |
| accumulativeDataFileCount  | 累计数据文件数量             |
| dynamicFields.idleDays     | 空闲天数                     |
| dynamicFields.remainMemory     | 剩余内存                     |
| dynamicFields.remainCore     | 剩余cpu                     |
| dynamicFields.remainBandwidth     | 剩余带宽                     |
| dynamicFields.totalMemory     | 可用总内存                     |
| dynamicFields.totalCore     | 可用总cpu                     |
| dynamicFields.totalBandwidth     | 可用总带宽                     |


### 指定组织详情

- url: /org/findOrgInfo

- 请求参数

| 参数名   | 说明          |
|:-------- |:------------- |
| identityId   | 组织身份ID |


- 响应参数

| 参数名                     | 说明                         |
|:-------------------------- |:---------------------------- |
| identityId                 | 组织身份ID                   |
| identityType               | 组织身份ID类型               |
| orgName                    | 组织名称                     |
| status                     | 状态                         |
| accumulativeMemory         | 总内存                       |
| accumulativeCore           | 总核心                       |
| accumulativeBandwidth      | 总带宽                       |
| accumulativePowerTaskCount | 累计任务（以算力提供方参与） |
| accumulativeDataTaskCount  | 累计任务（以数据提供方参与） |
| accumulativeDataFileCount  | 累计数据文件数量             |

### 指定组织参与任务数量走势

- url: /org/taskTrend

- 请求参数

| 参数名     | 说明                              |
|:---------- |:--------------------------------- |
| identityId | 组织身份ID                        |
| startDate  | 开始日期，开始日期最大值=now-days |
| days       | 多少天的数据                      |

- 响应参数

| 参数名    | 说明     |
|:--------- |:-------- |
| createAt  | 日期     |
| taskCount | 任务数量 |
|           |          |



### 查询指定组织上传的数据文件列表

- url: /data/listDataFileByIdentityId

- 请求参数

| 参数名     | 说明          |
|:---------- |:------------- |
| identityId | 组织身份ID    |
| pageNo     | 页码，从1开始 |
| pageSize   | 每页数据      |

- 响应参数

| 参数名                  | 说明                 |
|:----------------------- |:-------------------- |
| id                      | 数据文件ID           |
| identityId              | 所属组织的组织身份ID |
| fileName                | 文件名称             |
| filePath                | 文件路径             |
| fileType                | 文件类型             |
| resourceName            | 数据资源名称         |
| size                    | 文件大小，字节       |
| rows                    | 数据行数             |
| columns                 | 数据列数             |
| published               | 是否公开             |
| publishedAt             | 公开时间             |
| hasTitle                | 数据文件是否有表头   |
| remarks                 | 备注                 |
| status                  | 状态                 |
| metaDataId              | 数据文件的元数据ID   |
| dynamicFields.taskCount | 参与任务数量         |


### 查询数据文件描述

- url: /data/getDataFile

- 请求参数

| 参数名     | 说明          |
|:---------- |:------------- |
| metaDataId | 数据文件的元数据ID    |

- 响应参数

| 参数名                  | 说明                 |
|:----------------------- |:-------------------- |
| id                      | 数据文件ID           |
| identityId              | 所属组织的组织身份ID |
| fileName                | 文件名称             |
| filePath                | 文件路径             |
| fileType                | 文件类型             |
| resourceName            | 数据资源名称         |
| size                    | 文件大小，字节       |
| rows                    | 数据行数             |
| columns                 | 数据列数             |
| published               | 是否公开             |
| publishedAt             | 公开时间             |
| hasTitle                | 数据文件是否有表头   |
| remarks                 | 备注                 |
| status                  | 状态                 |
| metaDataId              | 数据文件的元数据ID   |


### 查询数据文件的metaData定义

- url: /data/listMetaDataColumn

- 请求参数

| 参数名     | 说明          |
|:---------- |:------------- |
| metaDataId | 数据文件的元数据ID    |
| pageNo     | 页码，从1开始 |
| pageSize   | 每页数据      |

- 响应参数

| 参数名     | 说明                     |
|:---------- |:------------------------ |
| metaDataId | 数据文件的元数据ID       |
| columnIdx  | 数据列索引，从小到大排序 |
| columnName | 数据列名称               |
| columnType | 数据列类型               |
| remarks    | 备注                     |
| published  | 是否公开                 |



### 查询指定组织参与的任务（组织在任务中的角色是：提供算力，或者数据的任务，或者只是发起方）

- url: /task/listTaskByIdentityId

- 请求参数

| 参数名     | 说明          |
|:---------- |:------------- |
| identityId | 组织身份ID    |
| pageNo     | 页码，从1开始 |
| pageSize   | 每页数据      |

- 响应参数

| 参数名            | 说明                            |
|:----------------- |:------------------------------- |
| id                | 任务ID                          |
| taskName          | 任务名称                        |
| requiredMemory    | 任务要求的内存                  |
| requiredCore      | 任务要求的核心                  |
| requiredBandwidth | 任务要求的带宽                  |
| requiredDuration  | 任务要求的时长                  |
| ownerIdentityId   | 任务的发起者组织身份ID          |
| createAt          | 任务发起时间                    |
| startAt           | 任务开始时间                    |
| endAt             | 任务结束时间                    |
| usedMemory        | 任务使用的内存                  |
| usedCore          | 任务使用的核心                  |
| usedBandwidth     | 任务使用的带宽                  |
| ---               | ----                            |
| taskSponsor       | 是否是发起人，0：不是；1：是    |
| dataProvider      | 是否数据提供者，0：不是；1：是  |
| powerProvider     | 是否算力提供者 ，0：不是；1：是 |


### 查询任务的详情

- url: /task/getTaskDetails

- 请求参数

| 参数名     | 说明          |
|:---------- |:------------- |
| taskId | 任务ID    |

- 响应参数

| 参数名                 | 说明                           |
|:---------------------- |:------------------------------ |
| id                     | 任务ID                         |
| taskName               | 任务名称                       |
| requiredMemory         | 任务要求的内存                 |
| requiredCore           | 任务要求的核心                 |
| requiredBandwidth      | 任务要求的带宽                 |
| requiredDuration       | 任务要求的时长                 |
| ownerIdentityId        | 任务的发起者组织身份ID         |
| createAt               | 任务发起时间                   |
| startAt                | 任务开始时间                   |
| endAt                  | 任务结束时间                   |
| usedMemory             | 任务使用的内存                 |
| usedCore               | 任务使用的核心                 |
| usedBandwidth          | 任务使用的带宽                 |
| ---                    | ----                           |
| sponsor                | 任务发起者信息,object          |
| taskPowerProviderList  | 任务算力提供者列表,object      |
| taskDataProviderList   | 任务数据提供者列表,object      |
| taskResultReceiverList | 任务结果接收者列表,object list |


sponor对象属性，参考/org/findOrgInfo返回数据

| 参数名                     | 说明                         |
|:-------------------------- |:---------------------------- |
| identityId                 | 组织身份ID                   |
| identityType               | 组织身份ID类型               |
| orgName                    | 组织名称                     |
| status                     | 状态                         |
| accumulativeMemory         | 总内存                       |
| accumulativeCore           | 总核心                       |
| accumulativeBandwidth      | 总带宽                       |
| accumulativePowerTaskCount | 累计任务（以算力提供方参与） |
| accumulativeDataTaskCount  | 累计任务（以数据提供方参与） |
| accumulativeDataFileCount  | 累计数据文件数量             |

taskPowerProvider对象属性

| 参数名                | 说明           |
|:--------------------- |:-------------- |
| taskId                | 任务ID         |
| identityId            | 组织身份ID     |
| usedMemory            | 任务使用的内存 |
| usedCore              | 任务使用的核心 |
| usedBandwidth         | 任务使用的带宽 |
| dynamicFields.orgName | 组织名称       |


taskDataProvider对象属性

| 参数名                     | 说明                 |
|:-------------------------- |:-------------------- |
| taskId                     | 任务ID               |
| metaDataId                 | 数据文件的metaDataID |
| dynamicFields.resourceName | 数据资源名称         |
| dynamicFields.identityId   | 组织身份ID类型       |
| dynamicFields.orgName      | 组织名称             |

taskResultReceiver对象属性，参考/org/findOrgInfo返回数据

| 参数名                     | 说明                         |
|:-------------------------- |:---------------------------- |
| identityId                 | 组织身份ID                   |
| identityType               | 组织身份ID类型               |
| orgName                    | 组织名称                     |
| status                     | 状态                         |
| accumulativeMemory         | 总内存                       |
| accumulativeCore           | 总核心                       |
| accumulativeBandwidth      | 总带宽                       |
| accumulativePowerTaskCount | 累计任务（以算力提供方参与） |
| accumulativeDataTaskCount  | 累计任务（以数据提供方参与） |
| accumulativeDataFileCount  | 累计数据文件数量             |
| taskResultSenderList       | 结果发送方, object List      |


taskResultSender对象属性，参考/org/findOrgInfo返回数据

| 参数名                     | 说明                         |
|:-------------------------- |:---------------------------- |
| identityId                 | 组织身份ID                   |
| identityType               | 组织身份ID类型               |
| orgName                    | 组织名称                     |
| status                     | 状态                         |
| accumulativeMemory         | 总内存                       |
| accumulativeCore           | 总核心                       |
| accumulativeBandwidth      | 总带宽                       |
| accumulativePowerTaskCount | 累计任务（以算力提供方参与） |
| accumulativeDataTaskCount  | 累计任务（以数据提供方参与） |
| accumulativeDataFileCount  | 累计数据文件数量             |



### 查询所有组织上传的数据文件列表

- url: /data/listDataFile

- 请求参数

| 参数名     | 说明                              |
|:---------- |:--------------------------------- |
| pageNo   | 页码，从1开始 |
| pageSize | 每页数据      |

- 响应参数

| 参数名                  | 说明                 |
|:----------------------- |:-------------------- |
| id                      | 数据文件ID           |
| identityId              | 所属组织的组织身份ID |
| fileName                | 文件名称             |
| filePath                | 文件路径             |
| fileType                | 文件类型             |
| resourceName            | 数据资源名称         |
| size                    | 文件大小，字节       |
| rows                    | 数据行数             |
| columns                 | 数据列数             |
| published               | 是否公开             |
| publishedAt             | 公开时间             |
| hasTitle                | 数据文件是否有表头   |
| remarks                 | 备注                 |
| status                  | 状态                 |
| metaDataId              | 数据文件的元数据ID   |
| dynamicFields.taskCount | 参与任务数量         |
| dynamicFields.orgName   | 所属组织的名称       |



### 查询所有组织的任务列表
- url: /task/listTask
- 请求参数

| 参数名    | 说明           |
|:--------- |:-------------- |
| status    | 任务状态，可选 |
| startDate | 开始日期，可选 |
| endDate   | 结束日期，可选 |
| pageNo    | 页码，从1开始  |
| pageSize  | 每页数据       |

- 响应参数

| 参数名                  | 说明                 |
|:----------------------- |:-------------------- |

- 响应参数，参考：/task/listTaskByIdentityId

| 参数名                    | 说明                   |
|:------------------------- |:---------------------- |
| id                        | 任务ID                 |
| taskName                  | 任务名称               |
| requiredMemory            | 任务要求的内存         |
| requiredCore              | 任务要求的核心         |
| requiredBandwidth         | 任务要求的带宽         |
| requiredDuration          | 任务要求的时长         |
| ownerIdentityId           | 任务的发起者组织身份ID |
| createAt                  | 任务发起时间           |
| startAt                   | 任务开始时间           |
| endAt                     | 任务结束时间           |
| usedMemory                | 任务使用的内存         |
| usedCore                  | 任务使用的核心         |
| usedBandwidth             | 任务使用的带宽         |
| dynamicFields.sponsorName | 发起人组织名称         | 
