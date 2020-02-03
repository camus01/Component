# tabBar init

##cli3
```
vue create tabbar
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#tabBar design scheme

##两个组件
组件一为tabBar,定义一个插槽：tabBarItem
组件二为tabBarItem,定义三个插槽：icon  iconActive  font

##自定义
属性：path  activeColor
标签：tab-bar-item > img + div 
文件：views router (etc.)


