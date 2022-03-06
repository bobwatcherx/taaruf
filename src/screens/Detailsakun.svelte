<script >
	import {onMount} from 'svelte'
	import {supabase} from '../supabase/supabase.js'
	import { useParams } from "svelte-navigator";
const params = useParams();
let btnberteman = false
let postdata = []
let profilephoto = []
onMount(()=>{
	getdetails()
})
async function getdetails(){
	const { data, error } = await supabase
  .from('tblig')
  .select()
  .match({id:$params.id})
  postdata = data
  postdata.forEach((p)=>{
  	profilephoto = p.child_photo
  })
}
async function kirimteman(p){
	btnberteman = !btnberteman
	const { data, error } = await supabase
  .from('tblberteman')
  .insert([
  {
  	nama_couple:p.nama,
  	nama_folow:"boby",
  	status:false,
  	date:new Date().toJSON().slice(0,10)  
  }
  ])
  if(error){
  	console.log(error)
  }
}
</script>
<div class="bgmain">
	{#each postdata as p}
		<div class="profilephoto">
		<img src={p.photo}
		style="width:130px;
		border-radius: 80%;" 
		/>
		<br/>
	</div>
		<div style="text-align: center;
		">
			<h3 >{p.nama}</h3>
			<h3 >{p.asal}</h3>
		</div>
		<div class="infobio">
			<h3>ig :{p.nama_ac}</h3>
			<h3>Flwr :{p.folower} </h3>
		</div>
		<div style="margin-top:10px;text-align:center;">
		{#if btnberteman === false}
		<button class="btninvite"
		type="button"
		on:click={kirimteman(p)}
		>{btnberteman === false ? "Ajukan Pertemanan ": ""}</button>
		{:else if btnberteman === true}
		<h3
		style="font-weight: bold;
		color: white;padding:5px"
		>Diminta ....</h3>
		{/if}		
		</div>
	{/each}
</div>
<div>
	<h3 style="padding-top:30px;padding-left: 20px;font-size: 30px;">Reels</h3>
	<br/>
	{#each postdata as x}
	<video src={x.reels} controls
	style="width:40%;margin:5px"
	/>
	{/each}
</div>
<div>
	<h3 style="padding-top:30px;padding-left: 20px;font-size: 30px;">Foto</h3>
	<br/>
	{#each profilephoto as d}
	<img src={d}
	style="width:40%;margin:5px"
	/>
	{/each}
</div>
<style >
	.btninvite{
		color: white;
		font-size: 20px;
		border: none;
		padding: 5px;
		background-image: linear-gradient(120deg,#F1B94E,#7678C9);
	}
	.infobio{
		background-color: black;
		color: white;
		display: flex;
		padding: 10px;
		border-radius: 30px;
		box-shadow: 0px 25px 50px 30px rgba(0, 0, 0, 0.2);
		flex-direction: row;
		justify-content: space-evenly;
	}
	.bgmain{
		background-color: salmon;
		box-shadow: 0px 25px 50px 30px rgba(0, 0, 0, 0.2);
		border-radius: 0px 0px 30px 30px;
		color: black;
		height: 100%;
		padding: 20px;
	}
	.profilephoto{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>