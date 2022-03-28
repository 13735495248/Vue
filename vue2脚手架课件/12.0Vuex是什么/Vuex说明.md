## Vuex是什么?
vuex 是一个专门为vue.js应用程序开发的状态管理工具。
这个状态我们可以理解为在data中的属性，需要共享给其他组件使用的部分。
也就是说,Vuex可以让所有组件共享数据。

每一个 Vuex 应用的核心就是store(store是一个仓库用来存储状态的)。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。

## Vuex的特点:
1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

2.你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用

## vuex的5个属性
vuex的五个属性分别为：state、getters、 mutations、actions、modules