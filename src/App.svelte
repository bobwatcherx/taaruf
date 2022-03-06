<script >
import './global.css'
  import { Router, Link, Route } from "svelte-navigator";
import Bottombar from './components/Bottombar.svelte';
import Home from './screens/Home.svelte'
import About from './screens/About.svelte'
import Friends from './screens/Friends.svelte'
import Detailsakun from './screens/Detailsakun.svelte'

</script>

<div>
<Router>
    <div>
        <Route path="/">
            <Home />
        </Route>
        <Route path="about" component={About} />
        <Route path="friends" component={Friends} />
        <Route path="details/:id" let:params >
        <Detailsakun payload={params.id}/>
        </Route>
    </div>
</Router>
<Bottombar/>
</div>