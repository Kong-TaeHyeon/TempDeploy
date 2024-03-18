<script>
	import BaseComponent from '../../../lib/components/dashboard/BaseComponent.svelte';
	import TotalCharger from '../../../lib/components/dashboard/TotalCharger.svelte';
	import EachCharger from '../../../lib/components/dashboard/EachCharger.svelte';
	import ChargerOperation from '../../../lib/components/dashboard/ChargerOperation.svelte';
	import Discharging from '../../../asset/svg/discharging.svg';
	import Charging from '../../../asset/svg/charging.svg';

	import { page } from '$app/stores';

	let id = $page.url.searchParams.get('id') || '0';
</script>

<div class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600">
	<div class="mt-[38px] mb-[38px]">
		<div class="flex flex-row items-center w-full">
			<p class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight">
				대시보드
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
			<div class="flex flex-row gap-[25px] p-4">
				<div class="flex-col ml-[77px]">
					<div class="flex flex-row text-black text-[22px] font-medium tracking-tight">
						<img src={Charging} alt="" class="mr-2" />
						충전
					</div>
					<BaseComponent textColor="text-violet-500" />
				</div>
				<div class="flex-col">
					<div class="flex flex-row text-black text-[22px] font-medium tracking-tight">
						<img src={Discharging} alt="" class="mr-2" />
						방전
					</div>
					<BaseComponent textColor="text-violet-500" />
				</div>

				<div class="flex-col">
					<div class=" text-black text-[22px] font-medium font-['Noto Sans KR'] tracking-tight">
						충전
					</div>
					<TotalCharger />
				</div>
			</div>

			<div class="flex flex-row p-4 gap-[25px]">
				<div class="flex-col ml-[60px]">
					<p class=" text-black text-[22px] font-medium">개별 충전기 상태</p>
					<EachCharger />
				</div>

				<div class="flex-col">
					<p class=" text-black text-[22px] font-medium">충전기 운용</p>
					<ChargerOperation />
				</div>
			</div>
		</div>
	</div>
</div>
