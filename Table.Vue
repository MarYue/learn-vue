/* eslint-disable no-unused-vars */
<template>
	<div class="table">
		<div class="tr thead">
			<div></div>
			<div v-for="{ label } in titles" class="th">{{ label }}</div>
		</div>
		<div v-for="(item, index) in list" class="tr">
			<div class="no">{{ index + 1}}</div>
			<div class="name">{{ item.name }}</div>
			<div class="num">{{ item.ddl }}</div>
			<div class="zj">{{ item.zj }}</div>
		</div>

		<div class="tr">
			<div></div>
			<div class="todaySum">本日合计</div>
			<div class="tsum">{{ todaySum }}</div>
			<div class="tsum">{{ todayZJ }}</div>
		</div>
		<div class="tr">
			<div></div>
			<div class="yesSum">上日合计</div>
			<div class="ysum">3060</div>
			<div class="ysum"></div>
		</div>
		<div class="tr">
			<div></div>
			<div class="zjSum">总量增减</div>
			<div class="zjsum">-540</div>
			<div></div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import api from '@/api'
import utils from '@/utils'
import Vue from 'vue'
export default {
	name: 'CCTable',
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
.table {
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 18px;
	.tr {
		color: #ccceda;
		margin-top: 11px;
		&.thead {
			@include flex-center(row, space-between);

			.th {
				line-height: 25px;
				color: #898d96;
			}
		}
		
		@include flex-center(row, space-between, flex-start);
		text-align: right;

		.no {
			width: 30px;
			height: 30px;
			font-family: SourceHanSansSC-Medium;
			font-size: 21px;
			color: #fe302f;
			background: rgba(254, 48, 47, 0.2);
			border-radius: 14px;
			text-align: center;
		}
		div:nth-child(1) {
			width: 30px;
		}
		div:nth-child(2) {
			width: 80px;
		}
		div:nth-child(3) {
			width: 70px;
		}
		div:nth-child(4) {
			width: 70px;
		}
	}
}
</style>
