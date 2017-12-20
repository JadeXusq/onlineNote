# onlineNote 在线电子笔记
---
## 需求分析
* 通过在线保存用户笔记，来实现对笔记的存储
* 为了抵制国家纸质资源的浪费，保护环境，该项目应运而生
* 好吧，这只是个练手小项目
## 前端需求
* 用户登陆界面（实现用户登陆功能，可跳转到用户注册界面，验证用户填写信息规范性）
* 用户注册界面（实现新用户的注册功能，验证用户填写信息规范性）
* 笔记列表界面（显示当前用户笔记列表，可选择查看该笔记内容，或者新建笔记本）
* 笔记内容界面（包含用户笔记的内容，有则显示没有则新建笔记，可进行保存和修改笔记内容）
## 后端需求
* 用户登录信息验证接口（返回验证信息给前端）
* 用户注册注册接口（包括保存用户到数据库，以及验证用户是否注册）
* 用户笔记列表接口（返回当前用户笔记列表数据，包含笔记标题及保存时间等内容）
* 用户笔记修改接口（实现用户笔记的数据修改更新操作）
* 用户笔记新建接口（实现用户笔记新建数据的保存）
## 环境配置及搭建
* 前端部分
>>> 使用jq+ajax来进行前后端交互,布局方面由于处于测试阶段，暂时不使用响应式布局，下阶段会考虑
    

