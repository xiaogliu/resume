import '../styles/reset.css'
import '../styles/index.scss'

function hello(name: string) {
  console.log(name, 2999999);
}

hello('name')

// 配合 webpack 配置实现热更新
// console.log(module.hot, 29999)
// if (module.hot) {
//   module.hot.accept();
// }
