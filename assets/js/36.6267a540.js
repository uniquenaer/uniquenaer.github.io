(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{228:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"插件机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件机制","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 插件机制")],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("首先，我们通过 Lin 的默认 logger 插件来看看插件的目录规范和开发规范。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("由于插件本身就是一个微型的 app，插件的开发规范与项目的开发规范几乎一致，如果你还不够熟悉，那么请你再次阅读"),a("router-link",{attrs:{to:"./structure_and_specification.html"}},[t._v("开发规范")]),t._v("。")],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),a("p",[t._v("被 loader 加载红图会被直接挂载到默认的 CMS 蓝图中，你可通过相应的 url 直接访问。而加载的模型你可通过如下的方式得到：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("在"),a("router-link",{attrs:{to:"./run_process.html"}},[t._v("运行流程")]),t._v("一节中我们留下了一个悬念，那就是插件的加载流程。在 Lin 源代码中，可以在 Manager 的构造函数中找到如下代码段：")],1),t._v(" "),t._m(16),a("p",[t._v("这里初始化的 loader （插件加载器），由它来负责所有插件的加载，我们继续打开 Loader 的构造函数。")]),t._v(" "),t._m(17),a("p",[t._v("这里大致的流程是这样的，loader 率先加载内置插件的配置，然后加载其它插件的配置，随后加载内置的插件，最后加载其它插件。")]),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("好，插件的整体流程的梳理到此已经结束了。如果你感到疑惑，请记住 loader 的加载本身只是一个很简单的过程，当你亲身通过断点 Debug 的方式去运行程序时，你就会觉得豁然开朗。")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("RightMenu")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("本小节让我们来详细介绍一下 Lin 的精髓——插件机制")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"插件的规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件的规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"目录规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("├───logger\n│   │   config.py // 配置文件，记录关于插件的可用配置，所有配置项名均为大写，与starter项目的配置规范一致\n│   │\n│   └───app // app目录开发\n│           controller.py  // 控制层，每个控制层文件要求只有一个红图实例，当然你可以将文件名换成你喜欢的名字，而且你也可以拥有多个红图实例文件\n│           forms.py // 校验层，存放校验类文件\n│           log.py // 日志核心类库，插件的核心文件，如logger插件的核心文件为log.py，当然你也可有多个核心文件\n│           model.py // 模型层，数据库模型类\n│           __init__.py // 导出文件。重要！！！\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Lin 的插件可能与你以前了解的插件概念不一样，"),s("em",[this._v("你可以把每个插件理解为一个小 app")]),this._v("。每个插件都有自己的配置、控制层、模型层甚至校验层，换言之每个插件都有自己的业务，它的概念很像"),s("strong",[this._v("微服务")]),this._v("，即每个插件只负责完成某一项功能。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"开发规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发规范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然，插件这里也有一个自己独特的机制——加载。在前面，我们在介绍项目开发时，红图以及模型都是我们主动去通过"),s("code",[this._v("import")]),this._v("导入的。但是在插件中，我们可以不用做这件事情，因为 Lin 会自动通过 loader（加载器）来帮我们做这件事。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所以，在你开发的插件中，你必须明确告诉 loader，因为 loader 真的不够聪明，它到底该加载哪些东西。而"),s("code",[this._v("logger/app/__init__.py")]),this._v("这个文件则扮演这个角色，它里面的代码很简单，如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" log_api\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Log\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在代码的第一行，我们从当前目录中的"),a("code",[t._v("controller")]),t._v("导入了"),a("code",[t._v("log_api")]),t._v("这个红图，第二行从"),a("code",[t._v("model")]),t._v("中导入了"),a("code",[t._v("Log")]),t._v("这个模型类。而后，loader 会自动的从"),a("code",[t._v("__init__.py")]),t._v("文件得到刚才导出的"),a("code",[t._v("log_api")]),t._v("和"),a("code",[t._v("Log")]),t._v("，然后存储到自身的容器中。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然，在"),s("code",[this._v("__init__.py")]),this._v("你可以导入多个的红图和模型，如你还可能需要加载另外一个红图"),s("code",[this._v("some_api")]),this._v("和另外一个模型"),s("code",[this._v("Some")]),this._v("，接下来你应该在上段的代码中加入：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("some "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" some_api\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Some\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" manager "),a("span",{attrs:{class:"token comment"}},[t._v("# 得到manager")]),t._v("\nLog "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" manager"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_model"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Log'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 得到加载到容器中的Log模型")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然如果你不喜欢这种方式，你也可以通过"),s("code",[this._v("import")]),this._v("方式得到这个模型：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Log\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"插件的加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件的加载")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Loader\nself"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Loader "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Loader"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin_path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("__init__")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plugin_path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin_path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'plugin_path must be a dict'")]),t._v("\n    self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin_path "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" plugin_path\n    self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_default_plugins_config"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 加载内置插件的配置")]),t._v("\n    self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_plugins_config"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 加载插件的配置")]),t._v("\n    self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_default_plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 加载内置的插件")]),t._v("\n    self"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_plugins"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 加载其它插件")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("-----------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" 加载内置插件配置 "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("  ----"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("    "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" 加载插件配置 "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("  ----"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" 加载内置插件 "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("  ----"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" 加载其它插件 "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("-----------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("接下来我们继续，在 Loader 类中还有两个方法"),s("code",[this._v("_load_plugin")]),this._v("和"),s("code",[this._v("_load_config")]),this._v("，这两个方法是 loader 的核心方法，由它们向容器中加载插件和插件配置。这两个方法的思路很明确，我们相信你完全可以阅读"),s("a",{attrs:{href:"loader.py"}},[this._v("源代码")]),this._v("来理解。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"插件的开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的开发","aria-hidden":"true"}},[this._v("#")]),this._v(" 插件的开发")])}],!1,null,null,null);s.default=e.exports}}]);