<script >
	import { StatusBar, Style } from '@capacitor/status-bar';
	
	import { useNavigate } from "svelte-navigator";

	import { Swiper, SwiperSlide } from 'swiper/svelte';
 import 'swiper/css';
	import iglogo from '../imglogo/iglogo.png'
	
	import {supabase} from '../supabase/supabase.js'
	import {count} from '../store/'
	import {onMount} from 'svelte'
	import Navigation from '../components/Navigation.svelte'
	import Reels from '../components/Reels.svelte'
import {globaldiscover} from '../store/'
// Display content under transparent status bar (Android only)
StatusBar.setOverlaysWebView({ overlay: true });

	let heightscr = window.screen.availHeight;

const navigate = useNavigate();
onMount(()=>{
	gettable()
})
async function gettable(){
	if($globaldiscover.length <= 0){
		const { data, error } = await supabase
  .from('tblig')
  .select()
  .order('created_at', { ascending: false })

	$globaldiscover = data
	console.log($globaldiscover)
	}

}
</script>
<div class="mainbg" style="height:100%" >
	<div style="margin-left:20px;top:60px">
		<Navigation/>
	</div>

		 <Swiper
    spaceBetween={30}
    slidesPerView={2}
    on:slideChange={() => console.log('slide change')}
    on:swiper={(e) => console.log(e.detail[0])}
  >
		{#each $globaldiscover as d}
    <SwiperSlide>
    	<div class="contentcard">
		<img src={d.photo}
		style="width:100%;background-size: cover;"/>

		<div class="captioncard">
			<h3 style="font-size: 12px">{d.nama}</h3>
			<h5
			style="font-size: 10px;color: grey;"
			>{d.asal}</h5>
		</div>
		<div style="display:flex;flex-direction:row;justify-content:flex-end;padding:5px">
			<button
			style="background-color: white;color: orange;border: none;"
			on:click={()=>navigate("details/" + d.id)}
			>Lihat Profile</button>
		</div>
		</div>
    </SwiperSlide>
		{/each}
  </Swiper>
<Reels/>
	
</div>

<style scoped>
	.mainbg{
		background-image: linear-gradient(10deg,#FF63A3,#F47F62);
	}
	.captioncard{
		padding: 10px;
	}
	.contentcard{
		margin-top: 20px;
		margin: 5px;
		background-color: white;
		border-radius: 10px;
		box-shadow: 0 1px 2px rgba(0,0,0,0,0.5);
	}
</style>