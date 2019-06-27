The following are the urls that open the measurement page, and parameters can be passed as needed. Can be added to the shortcut command, or can be set to wake up via Siri.

## Directly start measuring

```url
heartmatepro://record
```
[[Run Demo]](heartmatepro://record)


## Custom brightness

The brightness value `l` is a floating point number, and the value range is `0~1`.

Example 1:
```url
heartmatepro://record?l=0
```
[[Run Demo]](heartmatepro://record?l=0)

Example 2:
```url
heartmatepro://record?l=0.3
```
[[Run Demo]](heartmatepro://record?l=0.3)

 
## Custom Brightness and Measuring Sample Container Size

The brightness value `l` is a floating point number, and the value range is `0~1`.

Sample container size `c` is a positive integer, the value range is `1~20`.

Example 1:
```url
heartmatepro://record?l=0.1&c=10
```
[[Run Demo]](heartmatepro://record?l=0.1&c=10)

 
  Example 2:
```url
heartmatepro://record?l=0.8&c=20
```
[[Run Demo]](heartmatepro://record?l=0.8&c=20)
