/* eslint-disable no-unused-vars */
<template>
	<div class="rtable">
		<div class="rtr rthead">
			<div v-for="{ label } in titles" class="rth">{{ label }}</div>
			<div></div>
		</div>
		<div v-for="(item, index) in list" class="rtr">
			<div class="name">{{ item.name }}</div>
			<div class="num">{{ item.ddl }}</div>
			<div class="zj">{{ item.zj }}</div>
			<div class="rno">{{ index + 1}}</div>
		</div>
		<div class="rtr">
			<div class="todaySum">本日合计</div>
			<div class="tsum">{{ todaySum }}</div>
			<div class="tsum">{{ todayZJ }}</div>
			<div></div>
		</div>
		<div class="rtr">
			<div class="yesSum">上日合计</div>
			<div class="ysum">3060</div>
			<div class="ysum"></div>
			<div></div>
		</div>
		<div class="rtr">
			<div class="zjSum">总量增减</div>
			<div class="zjsum">-540</div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
import { totalList } from './data'

import axios from 'axios'
import api from '@/api'
import utils from '@/utils'
import Vue from 'vue'
export default {
	name: 'ZLTable',
	props: {
		titles: {
			default: (_) => [],
			type: Array,
		},
		list: {
			default: (_) => [],
			type: Array,
		},
		total: {
			default: (_) => [],
			type: Array,
		},
		totalList: {
			default: (_) => [],
			type: Array,
		},
	},
	computed: {
		todaySum: function () {
			let todaySum = 0
			this.list.map((item) => {
				todaySum += item.ddl
			})
			return todaySum
		},
		todayZJ: function () {
			let todayZJ = 0
			this.list.map((item) => {
				todayZJ += item.zj
			})
			return todayZJ
		},
	},
}
</script>

<style lang="scss">
@import '~@/style/common';
.rtable {
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 18px;
	.rtr {
		@include flex-center(row, space-between);
		&.rthead {
			.rth {
				line-height: 25px;
				color: #898d96;
			}
		}
		color: #ccceda;
		@include flex-center(row, space-between, flex-start);
		text-align: right;
		margin-top: 11px;
		.rno {
			width: 30px;
			height: 30px;
			font-family: SourceHanSansSC-Medium;
			font-size: 21px;
			color: #48db61;
			background: rgba(7, 194, 116, 0.2);
			border-radius: 14.25px;
			text-align: center;
		}
		div:nth-child(1) {
			width: 80px;
		}
		div:nth-child(2) {
			width: 70px;
		}
		div:nth-child(3) {
			width: 70px;
		}
		div:nth-child(4) {
			margin-left: 10px;
			width: 30px;
		}
	}
}
</style>
