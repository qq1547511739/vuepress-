module.exports = {
  title:'四月的个人博客', 
  head: [ // 注入到当前页面的HTML <head> 中的标签 
    ['link',{rel:'icon',href:'/四月人间.jpg'}], //增加一个自定义的favicon(网页标签的图标)
  ],
  themeConfig:{
    logo: '/四月人间.jpg', // 左上角logo
    nav:[ //导航栏配置
      {text: '首页', link: '/' },

      {
        text: 'html css记录',
        items: [
          { text: 'flex布局', link: '/html css记录/flex布局/' },
          { text: 'css选择器及权重', link: '/html css记录/css选择器及权重/' },
          { text: '盒模型', link: '/html css记录/盒模型/' }
        ]
      },
      {
        text: 'javascript记录',
        items: [
          { text: 'javascript基础', link: '/javascript记录/javascript基础/' },
          { text: 'javascript进阶', link: '/javascript记录/javascript进阶/' },
          { text: 'javascript高级', link: '/javascript记录/javascript高级/' }
        ]
      },
      {
        text: 'vue记录',
        items: [
          { text: 'cli3搭建', link: '/vue记录/cli3搭建过程/' },
          { text: '生命周期', link: '/vue记录/生命周期/' },
          { text: 'MVVM的理解', link: '/vue记录/MVVM的理解/' },
          { text: 'vue基础', link: '/vue记录/vue基础/' },
        ]
      },
      {
        text: '其他记录',
        items: [
          { text: '题目', link: '/其他记录/题目/' },
          { text: 'http协议', link: '/其他记录/http协议/' },
          { text: 'js', link: '/其他记录/js/' },
          { text: 'es6', link: '/其他记录/es6/' },
          { text: 'vue', link: '/其他记录/vue/' },
        ]
      },

      {text: 'csdn博客记录', link:'https://blog.csdn.net/qq1547511739'}
    ],
  sidebar: 'auto', //侧边栏配置
    } 
}; 

