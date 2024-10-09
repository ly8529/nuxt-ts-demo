<template>
	<div class="red filter">hhhh 我是红色字体</div>
	<h1 class="text-3xl font-bold underline" @click="addCount">
		{{ counterStore.count }}
	</h1>
	<!-- <nuxt-icon name="art" class="text-32px"></nuxt-icon> -->
	<a-button>ant-btn</a-button>
	<p>切换中英文：{{ $t('test') }}</p>
	<a-button @click="changeLang">切换语言</a-button>
</template>
<script setup lang="ts">
import { Button as AButton } from 'ant-design-vue'
import { useCounterStore } from '@/store/index'
import { setCurSystemLang, curLang } from '@/plugins/i18n/index'
import { SystemLang } from '@/global/enum'
import { APIs } from '@/service/apiList.js'
import $api from '@/service/webRequest'
const counterStore = useCounterStore()
function addCount() {
	counterStore.increment()
}

let lang = curLang
function changeLang() {
	if (lang === SystemLang.EN) {
		setCurSystemLang(SystemLang.ZH)
		lang = SystemLang.ZH
	} else {
		setCurSystemLang(SystemLang.EN)
		lang = SystemLang.EN
	}
}

//测试请求
$api.post(APIs.login)
	.then(() => {})
	.catch(err => {
		console.log(err)
	})
</script>
<style lang="scss">
@import url(assets/common/reset.scss);
.filter {
	filter: blur(10px);
	display: flex;
}
</style>
