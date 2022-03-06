<script>
	import {onMount} from 'svelte'
	import {globalreels} from '../store/'
import {supabase} from '../supabase/supabase.js'

	onMount(()=>{
getreels()
	})
async function getreels(){
	if($globalreels.length <= 0){
		const { data, error } = await supabase
  .from('tblreels')
  .select()
  .order('created_at', { ascending: false })

	$globalreels = data
	console.log($globalreels)
	}
}
</script>
<div>
	<h1 class="textfont"
	style="margin:20px;color: white;" 
	>Reels</h1>
	{#each $globalreels as g}
	<div style="margin:auto;
	text-align: center;
	margin-bottom: 10px;">
		<video 
		class="cardreels" 
		src={g.video} muted autoplay controls
		style="width:80%" >
	</video>
		
	</div>

	{/each}
</div>
<style scoped>
	.cardreels{
		margin: 5px;
		box-sizing: border-box;
		box-shadow: 0px 25px 50px 30px rgba(0, 0, 0, 0.25);
		border-radius: 20px;
	}
	.infocaption{
		background-color: white;
		color: black;
		width: 50%;
	}
</style>