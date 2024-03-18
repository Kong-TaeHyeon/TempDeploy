<script>
	import { page } from '$app/stores';
	import CurrentStatus from '../../../../lib/components/car/CurrentStatus.svelte';
	import ChargerStatusOperation from '../../../../lib/components/charger/ChargerStatusOperation.svelte';
	import DetailCharger from '../../../../lib/components/charger/DetailCharger.svelte';

	let id = $page.url.searchParams.get('id') || '0';
</script>

<div class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600">
	<div class="mt-[38px] mb-[38px]">
		<div class="flex flex-row items-center w-full">
			<p class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight">
				충전기 현황
			</p>
			<div class="flex ml-[75px] gap-4 flew-row h-full">
				<button
					class="{id === '0'
						? 'bg-slate-50 text-[#2E4C5E]'
						: 'text-white'} rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight"
					on:click={() => (window.location.href = $page.url.pathname + '?id=0')}
					>남양연구소 주차타워1</button
				>

				<button
					class="rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight
					{id === '1' ? 'bg-slate-50 text-[#2E4C5E]' : 'text-white'}"
					on:click={() => (window.location.href = $page.url.pathname + '?id=1')}
					>남양연구소 주차타워1</button
				>
			</div>
		</div>
		<div class="bg-slate-50 rounded-[25px] w-[1200px]">
			<div class="flex flex-row p-4 gap-[23px]">
				<div class="flex-col ml-[60px]">
					<p class=" text-black text-[22px] font-medium mb-4">충/방전 현황</p>
					<CurrentStatus />
				</div>

				<div class="flex-col">
					<p class=" text-black text-[22px] font-medium mb-4">충전기 운영</p>
					<ChargerStatusOperation />
				</div>
			</div>

			<div class="flex flex-col p-4 ml-[60px]">
				<p class=" text-black text-[22px] font-medium mb-4">상세 충전기 정보</p>
				<DetailCharger />
			</div>
		</div>
	</div>
</div>
