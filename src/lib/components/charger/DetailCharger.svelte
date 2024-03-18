<script>
	import ChargingUsing from './ChargingUsing.svelte';
	import DischargingUsing from './DischargingUsing.svelte';
	import Waiting from './Waiting.svelte';
</script>

<div class="w-[1044px] h-[604px] bg-white rounded-[25px] shadow">
	<div class="grid items-center justify-center grid-flow-col grid-rows-4 gap-4 p-4 mt-10">
		<ChargingUsing />
		<Waiting chargerName="A-2" />
		<Waiting chargerName="A-2" />

		<Waiting chargerName="A-2" />
		<!-- ... -->
		<DischargingUsing chargerName="A-2" />
		<Waiting chargerName="A-2" />
		<Waiting chargerName="A-2" />
		<Waiting chargerName="A-2" />
	</div>
</div>
