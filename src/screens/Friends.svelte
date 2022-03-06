<script >
import {supabase} from '../supabase/supabase.js'
import {onMount}from 'svelte'
import {globalteman} from '../store/index.js'
	let heightscr = window.screen.availHeight
onMount(()=>{
getdata()
})
async function getdata(){
	if($globalteman.length <= 0 ){
		const { data, error } = await supabase
  .from('tblberteman')
  .select()
  $globalteman = data
	}
}
</script>

<div class="bgfren" style="height: {heightscr + 'px'};">
	<div style="padding: 20px;">
	<h3 class="textfont">Pertemanan</h3>
	{#each $globalteman as g}
		<div class="carditem">
			<h3>{g.nama_couple}</h3>
			<h3>{g.status  == false ? "blm disetujui":"disetujui"}</h3>
		</div>
	{/each}
	</div>
</div>

<style scoped>
	.bgfren{
		background-color: #F0DCDC;
	}
	.carditem{
		background-color: white;
		color: brown;
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
</style>