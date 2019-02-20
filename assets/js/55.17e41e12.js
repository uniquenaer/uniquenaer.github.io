(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{253:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 复杂度分析")],1),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("数据结构和算法解决的是“快”和“省”的问题，主要围绕如何让代码运行的更快，和如何让代码更省储存空间。复杂度分析是用来衡量算法代码的执行效率的。")]),t._v(" "),a("p",[t._v("那为什么要用复杂度分析呢？除了复杂度分析还有什么办法可以衡量算法代码的执行效率么？")]),t._v(" "),a("p",[t._v("有，那就是把代码跑一遍，通过统计、监控，就能得到算法执行的时间和占用的内存大小，这种方法有的数据结构和算法书上起名为：事后统计法。这种方法有下面两种局限性：")]),t._v(" "),a("p",[t._v("1 测试结果非常依赖测试环境：不同的运行环境会影响结果")]),t._v(" "),a("p",[t._v("2 测试结果受数据规模的影响很大，不同规模的数据，同一规模下不同状态的数据同样会影响结果")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("算法的执行效率，粗略的讲，就是算法代码的执行时间。但是，如何在不运行代码的情况下，用“肉眼”得到一段代码的执行时间呢？")]),t._v(" "),a("p",[t._v("举个栗子：求 1，2，3，4...n 的累加和。该如何估算这段代码的执行时间呢？")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("在分析下面这段代码")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("用公式来表达这个规律如下：")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("如何分析一段代码的时间复杂度呢？有下面三个方法可以使用：")]),t._v(" "),a("p",[t._v("1 只关注循环执行次数最多的一段代码")]),t._v(" "),a("p",[t._v("2 加法法则：总复杂度等于量级最大的那段代码的复杂度")]),t._v(" "),a("p",[t._v("3 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("复杂度量级可以粗略的分为两类：多项式量级和非多项式量级，具体如下")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("O(1) 只是常量级时间复杂度的表示方法，并不是指只执行了一行代码。只要代码的执行时间不随 n 的增大而增长，这样的代码的时间复杂度都记住 O(1)。")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("在对数阶中，不管是以 2 为底，还是以 3 为底，我们可以把所有的对数阶的时间复杂度都记为：O(logn) 。因为对数之间是可以相互转换的，且在采用大 O 标记复杂度的时候，可以忽略系数。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("当数据规模越来越大时，非多项式算法的执行时间会急剧增加，求解问题的执行时间会无线增长。所以，非多项式时间复杂度的算法其实是非常低效的。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),a("p",[t._v("上面这段代码要实现的功能是：在一个数组（array）中，查找变量 x 出现的位置。如果没有找到返回 -1。我们在一个数组中查找一个数据，并不是每次都会把整个数组都遍历一遍，因为有可能中途找到，此时就会以前结束循环。那么这个情况下的时间复杂度就不能用 O(n)来表示了。为了表示代码在不同情况下的不同时间复杂度，需要引入三个概念：")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("由此，我们可知上面这段代码的最好情况时间复杂度为 O(1)，最坏情况时间复杂度为： O(n)")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("要查找变量 x 在数组中的位置，有 n+1 种情况：在数组的 0~n-1 位置和不在数组中，同时，我们需要考虑各种情况发生的概率，假设在数组中与不在数组中的概率都为 1/2。另外，要查找的数据出现在 0~n-1 的概率也是一样的，为 1/n。所以，要查找的数据出现在 0~n-1 的任意位置的概率就是 1/(2n)。\n那么平均时间复杂度计算方式就是：")]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),a("RightMenu")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("复杂度也叫渐进复杂度，包括时间复杂度和空间复杂度，用来分析算法执行效率与数据规模之间的增长关系")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"大-o-复杂度表示法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大-o-复杂度表示法","aria-hidden":"true"}},[this._v("#")]),this._v(" 大 O 复杂度表示法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),a("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("从 CPU 的角度来看，这段代码的每一行都执行着类似的操作："),s("strong",[this._v("读数据-运算-写数据")]),this._v("。尽管每行代码对应的 CPU 执行时间、个数都不一样，但是 在粗略估计得前提下，可以假设每行代码执行时间都一样，为"),s("code",[this._v("unit_time")]),this._v("。在这个假设基础上，计算这段代码的执行总时间就好算多了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第 2 代码需要 1 个 unit_time 的执行时间，第 3、4 行都运行了 n 遍，所以需要 "),s("code",[this._v("2n*unit_time")]),this._v(" 的执行时间。所以折行代码的总执行时间就是 "),s("code",[this._v("(2n+1)*unit_time")]),this._v("。可以看出来，"),s("strong",[this._v("所有代码的执行时间 T(n) 与每行代码的执行次数成正比")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("cal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" j"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("依旧假设每行代码执行时间为"),s("code",[this._v("unit_time")]),this._v("；那这段代码的执行总时间 T(n)是多少呢？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("第 2 行代码执行 1 遍，第 3 行都执行了 n 遍，所以是"),s("code",[this._v("n*unit_time")]),this._v(",第 4、5 行都执行了 n² 遍，所以需要"),s("code",[this._v("2n²*unit_time")]),this._v("的执行时间。所以整段代码的总执行时间为"),s("code",[this._v("T(n)=(2n²+n+1)*unit_time")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过这两段代码执行时间的推导过程，可以得到一个规律："),s("strong",[this._v("所有代码的执行时间 T(n) 与每行代码的执行次数成正比")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token constant"}},[t._v("O")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("f")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("T(n)")]),t._v(" :代码的执行时间")]),t._v(" "),a("li",[a("code",[t._v("n")]),t._v(" 数据规模的大小")]),t._v(" "),a("li",[a("code",[t._v("f(n)")]),t._v(" 每行代码执行次数总和")]),t._v(" "),a("li",[a("code",[t._v("O")]),t._v(" 表示代码的执行时间 T(n) 与 f(n)表达式成正比")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("所以上面第一个例子中的执行总时间为 "),s("code",[this._v("T(n)=O(2n+1)")]),this._v("，第二个例子中的执行总时间为"),s("code",[this._v("T(n)=O(2n²+n+1)")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("大 O 时间复杂度")]),this._v("实际上并不具体表示代码真正的执行时间，而是代表代码执行时间随数据规模增长的变化趋势，也叫做"),s("strong",[this._v("渐进时间复杂度")]),this._v("，简称"),s("strong",[this._v("时间复杂度")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 n 很大时，公式中的低阶、常量、系数并不左右增长趋势，因此都可以忽略不计，只需记住最大量级就可以了。如果用大 o 表示法表示上两个例子中的时间复杂度，就可以记为:"),s("code",[this._v("T(n)=O(n)")]),this._v("、"),s("code",[this._v("T(n)=O(n²)")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"时间复杂度分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间复杂度分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常见的时间复杂度案例分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的时间复杂度案例分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见的时间复杂度案例分析")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"多项式量级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多项式量级","aria-hidden":"true"}},[this._v("#")]),this._v(" 多项式量级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("常量阶 O(1)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("对数阶 O(logn)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("线性对数阶 O(nlogn)")])]),this._v(" "),s("li",[s("p",[this._v("线性阶 O(n)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("平方阶 O(n²)、立方阶 O(n³)...k 次方阶 O(n^k)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"非多项式量级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非多项式量级","aria-hidden":"true"}},[this._v("#")]),this._v(" 非多项式量级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("O(2^n)")]),this._v(" "),s("li",[this._v("O(n!)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"最好、最坏时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最好、最坏时间复杂度","aria-hidden":"true"}},[this._v("#")]),this._v(" 最好、最坏时间复杂度")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("find")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pos "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      pos "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pos"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("最好情况时间复杂度：在最理想的情况下，执行这段代码的时间复杂度")])]),this._v(" "),s("li",[s("strong",[this._v("最坏情况时间复杂度：在最糟糕的情况下，执行这段代码的时间复杂度")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"平均情况时间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平均情况时间复杂度","aria-hidden":"true"}},[this._v("#")]),this._v(" 平均情况时间复杂度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("平均情况时间复杂度：加权平均时间复杂度或者期望时间复杂度")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" n "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v("n"),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"空间复杂度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度","aria-hidden":"true"}},[this._v("#")]),this._v(" 空间复杂度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("时间复杂度全称是："),s("strong",[this._v("渐进时间复杂度")]),this._v("，表达算法的执行时间与数据规模之间的增长关系")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("空间复杂度："),s("strong",[this._v("渐进空间复杂度")]),this._v("，表示算法的存储空间与数据规模之间的增长关系，常见的空间复杂度就是 O(1) 、O(n) 、O(n²)")])}],!1,null,null,null);s.default=e.exports}}]);