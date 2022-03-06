---
sidebarDepth: 2
displayAllHeaders: true 
title: 数据检查
---

## 数据检查

### isJSON
(String): Boolean => {}
判断字符串是否是符合json格式的字符串
#### 使用

```js
import { isJSON } from 'web-toolkits'

isJSON(JSON.stringify({a: 1})) // true
isJSON('a:123') // false
```