<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
		<!-- v-bind绑定class，如果过于复杂可以放在methods或computed中 -->
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {//在计算属性和方法中操作prop
			path: String,
			activeColor: {
				type: String,
				default: '#3e75c3'
			}
		},
		data() {
			return{
				//isActive: false
			}
		},
		computed: {
			isActive() {
				return this.path==this.$route.path
				//this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}//动态控制颜色
			}
		},
		methods: {
			itemClick() {
				//console.log(this.path)
				//console.log(this.$route.path)
				if(this.path!=this.$route.path){
					this.$router.push(this.path)
				}
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item {
		flex: 1;
		height: 49px;
		text-align:center;
	}
	
	.tab-bar-item div {
		text-align: center;
		font-size: 11px;
	}

	img {
		height: 30px;
		margin-bottom: -3px;
		vertical-align:　middle;
	}
</style>