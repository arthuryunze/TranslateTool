TranslateTool
---

GoogleTranslate
翻译工具(包装了GoogleTranslate的网页:-) )。  
最初使用pyqt实现，发现体积(95.1MB)，启动速度（10s左右），占用内存(120MB左右)，效果不太理想。  
于是重新用electron实现，效果好很多。  
目前打包后exe体积：99.2MB  
启动速度：3s左右  
占用内存：94MB左右

TODO：
- 添加鼠标mouseEnter，mouseLeave事件，窗口透明效果，实现鼠标移入，透明度减少，鼠标移出，透明度增加。
- 打包linux release
