<script>
	import StatusCharging from '../StatusCharging.svelte';

	import StatusWaiting from '../StatusWaiting.svelte';

	/**
	 * Timer 를 적용해서 % 를 수정하는 방법을 고안.
	 */
</script>

<div class=" h-[422px] bg-white rounded-[25px] shadow">
	<div class="grid w-full h-full grid-flow-col grid-rows-5 gap-4 p-4">
		<StatusCharging chargeAmount={200} />
		<StatusWaiting />
		<StatusWaiting />
		<StatusWaiting />
		<StatusWaiting />
		<StatusCharging chargeAmount={50} />
		<StatusWaiting />
		<StatusWaiting />
		<StatusWaiting />
		<StatusWaiting />
	</div>
</div>
