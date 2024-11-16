
<script>
import EqEditor from "../../lib/eqs/EqsEditor/EqsEditor.svelte";
import {Slide} from "./Slide";



</script>
{#if Slide}
<EqEditor  items={Slide.items}  />
{/if}

