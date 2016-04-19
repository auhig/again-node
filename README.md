名词解释
========

* 条目（entry）：用于记忆的最小单位，包含诸如记忆内容、发音、翻译、解释等属性。
* 库（repository）：关联一组相关条目，如“CET4”、“日本语初级”。
* 回合（round）：用户开始若干单词记忆至记忆结束成为一回合。
* hit：某条目记忆正确一次，则“hit”加1。
* miss：某条目记忆错误一次，则“miss”加1。
* combo：某条目在连续回合中均无“miss”则加1，反之如连续回合均错误则减1，详见下文“规则”。
* 等级（等级）：表明当前条目的记忆等级，越高代表越熟练，初始值为0。

规则
====

2 ^ level

常用命令
========

npm install --production

npm start

npm test

bower install

gulp bower