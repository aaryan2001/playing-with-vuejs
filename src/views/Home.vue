<template>
	<div>
		<h1>Hello {{fname}} {{lname}} </h1>
		<p>What is your name?</p>
		<p>First name: <input type="text" v-model="fname"></p>
		<p>Last name: <input type="text" v-model="lname"></p>
	<div>
	<input type="radio" id="summer" value="summer" v-model="picked">
	<label for="summer">summer</label>

	<input type="radio" id="winter" value="winter" v-model="picked">
	<label for="winter">winter</label>
	<br>

	<p v-show="picked == 'summer'"><img alt="summer" src="../assets/summer.png"></p>
	<p v-show="picked == 'winter'"><img alt="winter" src="../assets/winter.png"></p>
	</div>
	</div>
	</template>


<script>
	export default{
		name: 'Home',
		data() {
		return{
		fname:"",
		lname:"",
		picked:""
		}
		}
	}
	</script>
