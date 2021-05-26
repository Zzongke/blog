module.exports = {
	title: 'Zzongke',
	description: 'Zzongke的前端',
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		['link', {
			rel: 'icon',
			// href: '/favicon.ico'
			href: '/logo.jpg'
		}], // 增加一个自定义的 favicon(网页标签的图标)
	],
	// base: '/', // 这是部署到github相关的配置 下面会讲
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	themeConfig: {
		logo: '/logo.jpg',
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		nav: [{
				text: 'Javascript',
				link: '/Javascript/'
			},
			{
				text: 'Vue',
				link: '/Vue/'
			},
			{
				text: 'React',
				link: 'https://zh-hans.reactjs.org/'
			},
			{
				text: 'Nginx',
				link: 'https://www.nginx.cn/doc/'
			},
			{
				text: 'Node',
				link: 'https://nodejs.org/api/'
			},
		],
		sidebar:{
			'/Javascript/':[
				'1-Git常用指令',
				'2-this指令',
				'test3'
			],
			'/Vue/':[
				'Vue常见问题'
			]
		}
	},
}
