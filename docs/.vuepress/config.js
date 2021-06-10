module.exports = {
	title: 'Zzongke',
	// description: 'Zzongke的前端',
	base: '/blog/',
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
				link: '/Javascript/1-Git常用指令'
			},
			{
				text: 'Vue',
				link: '/Vue/Vue常见问题'
			},
			{
				text: 'React',
				link: 'https://zh-hans.reactjs.org/'
			},
			{
				text: '其他',
				link: '/Other/Git常用指令'
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
		sidebar: {
			'/Javascript/': [{
				title: 'Javascript', // 必要的
				// path: '', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				// sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/Javascript/1-Git常用指令',
					'/Javascript/2-this指令',
					'/Javascript/test3',
				]
			}],
			'/Vue/': [{
				title: 'Vue',
				children: [
					'/Vue/Vue常见问题',
				],
				initialOpenGroupIndex: -1 // 可选的, 默认值是 0
			}],
			'/Other/': [{
				title: 'Git常用指令',
				collapsable: false,
				children: [
					'/Other/Git常用指令',
					'/Other/Markdown'
				],
			}]
		}
	},
}
