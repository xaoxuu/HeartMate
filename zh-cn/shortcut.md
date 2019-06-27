以下这些都是打开测量页面的url，根据需要可以传递参数。可以添加到快捷指令，也可以设置通过Siri唤醒。

## 直接开始测量

```url
heartmatepro://record
```
[[运行示例]](heartmatepro://record)


## 自定义亮度

亮度值 `l` 为浮点数，取值范围是`0~1`

示例1：
```url
heartmatepro://record?l=0
```
[[运行示例]](heartmatepro://record?l=0)

示例2：
```url
heartmatepro://record?l=0.3
```
[[运行示例]](heartmatepro://record?l=0.3)


## 自定义亮度和测量样本容器大小

亮度值 `l` 为浮点数，取值范围是`0~1`

样本容器大小 `c` 为正整数，取值范围是`1~20`

示例1：
```url
heartmatepro://record?l=0.1&c=10
```
[[运行示例]](heartmatepro://record?l=0.1&c=10)


 示例2：
 ```url
 heartmatepro://record?l=0.8&c=20
 ```
 [[运行示例]](heartmatepro://record?l=0.8&c=20)
