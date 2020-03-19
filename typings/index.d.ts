import 'egg';
declare module 'egg' {
  // 补充 app 声明
  interface Application {
    mysql: any
    jwt: {
      sign: any
      verify: any
    }
  }
}