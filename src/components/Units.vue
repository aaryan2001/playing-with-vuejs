<template>
<div>
	<h2>Unit Descriptions </h2>
		<v-simple-table>
			<thead>
				<tr>
					<th>Code</th>
					<th>Description</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="unit in units" :key="unit.code" >
					<td>{{unit.code}}</td>
					<td>{{unit.desc}}</td>
				</tr>
			</tbody>
		</v-simple-table>
</div>
</template>

<script>
	import Units from "../assets/units.json";
	export default {
	name: 'Units',
	data: function(){
		return {
			units:Units
		}
}
}
</script>

<style scoped>

</style>
