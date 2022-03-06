<script >
	import {Router,Link} from 'svelte-navigator'
</script>
<Router>

<div class="bottomnav">
	<div>
		<Link to="/" style="text-decoration: none;color:red">
			<div>
				Discover
			</div>
		</Link>
	</div>
	<div>
		<Link to="/friends" style="text-decoration: none;color: red;">
			<div>
				Friends
			</div>
		</Link>
	</div>
	<div>
		<Link to="/about" style="text-decoration: none;color: red;">
			<div>
				Profile
			</div>
		</Link>
	</div>
</div>
</Router>
<style scoped>
	.bottomnav{
		text-decoration: none;
		position: fixed;
		bottom: 0;
		padding: 20;
		color: #FF6B96;
		align-items: center;
		text-align: center;
		box-sizing: border-box;
		height: 50px;
		background-color: white;
		color: red;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
	}
</style>


