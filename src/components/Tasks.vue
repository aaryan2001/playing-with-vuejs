
<script>
	export default {
		data:function(){
		return{
			statPosts:[],
			strStatus:''
		}
},
methods:{
		add:function(status){
			this.statPosts.push(status)
},
		remove:function(index){
		this.statPosts.splice(index,1)}
	}
}
</script>

<template>
	<div>
	<p>Status: <input type="text" id="status" v-model="strStatus"/> 
	<button @click="add(strStatus)">Publish</button></p> 
	<div v-for = "(i,index) in statPosts" :key="i">
	<p>{{i}} <button @click="remove(index)">Delete</button></p>
	</div></div>
</template>