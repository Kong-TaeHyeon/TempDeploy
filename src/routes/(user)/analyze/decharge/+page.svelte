<script>
	import { page } from '$app/stores';
	import AnalyzeCharge from '../../../../lib/components/analyze/AnalyzeCharge.svelte';
	import TotalCharge from '../../../../lib/components/analyze/TotalCharge.svelte';

	import XgrayMark from '../../../../asset/svg/xGrayMark.svg';
	import XWhiteMark from '../../../../asset/svg/xWhiteMark.svg';
	import TotalDeCharge from '../../../../lib/components/analyze/TotalDeCharge.svelte';
	import AnalyzeDeCharge from '../../../../lib/components/analyze/AnalyzeDeCharge.svelte';

	let id = $page.url.searchParams.get('id') || '0';
</script>

<div class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600">
	<div class="mt-[38px] mb-[38px]">
		<div class="flex flex-row items-center w-full">
			<p class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight">
				방전 분석
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
			<div class="flex flex-row gap-[25px] p-4 ml-10">
				<div>
					<p class="text-black text-[22px] font-medium mb-[21px]">방전 누적 내역</p>
					<TotalDeCharge />
				</div>

				<div>
					<p class="text-black text-[22px] font-medium mb-[21px]">방전 시간별 분석</p>
					<AnalyzeDeCharge />
				</div>
			</div>

			<div class="flex flex-col p-4 ml-10">
				<p class="text-black text-[22px] font-medium mb-[21px]">방전 상세 내역</p>
				<div class="p-2 w-[1044px] h-[432px] bg-white rounded-[25px] shadow">
					<div class="flex flex-row gap-2 m-4">
						<button class="text-white w-[105.68px] h-10 bg-gray-500 rounded-[28px]">
							<div class="flex flew-row">
								<p class="ml-[21px]">완속</p>
								<img class="ml-[22.02px]" src={XWhiteMark} alt="" />
							</div></button
						>
						<button class="text-white w-[105.68px] h-10 bg-gray-500 rounded-[28px]">
							<div class="flex flew-row">
								<p class="ml-[21px]">급속</p>
								<img class="ml-[22.02px]" src={XWhiteMark} alt="" />
							</div></button
						>
						<button class="w-[105.68px] h-10 rounded-[28px] border border-gray-500">
							<div class="flex flew-row">
								<p class="ml-[21px]">일반</p>
								<img class="ml-[22.02px]" src={XgrayMark} alt="" />
							</div>
						</button>
						<button class="w-[105.68px] h-10 rounded-[28px] border border-gray-500">
							<div class="flex flew-row">
								<p class="ml-[21px]">자동</p>
								<img class="ml-[22.02px]" src={XgrayMark} alt="" />
							</div>
						</button>
					</div>
					<table class="table w-full table-auto">
						<thead class="bg-gray-100 rounded-[5px] shadow text-center">
							<tr>
								<th>일시</th>
								<th>방전기</th>
								<th>방전 속도</th>
								<th>방전기 유형</th>
								<th>방전 단가</th>
								<th>방전 시간</th>
								<th>방전량</th>
								<th>금액</th>
								<th>결제수단</th>
							</tr>
						</thead>
						<tbody class="text-center">
							<tr>
								<td class="flex flex-col items-center justify-center">
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>A-01</td>
								<td>급속</td>
								<td>자동</td>
								<td>410원</td>
								<td>30분</td>
								<td>100kW</td>
								<td>8,000원</td>
								<td>현대카드</td>
							</tr>
							<tr>
								<td class="flex flex-col items-center justify-center">
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>A-01</td>
								<td>급속</td>
								<td>자동</td>
								<td>410원</td>
								<td>30분</td>
								<td>100kW</td>
								<td>8,000원</td>
								<td>현대카드</td>
							</tr>
							<tr>
								<td class="flex flex-col items-center justify-center">
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>A-01</td>
								<td>급속</td>
								<td>자동</td>
								<td>410원</td>
								<td>30분</td>
								<td>100kW</td>
								<td>8,000원</td>
								<td>현대카드</td>
							</tr>
							<tr>
								<td class="flex flex-col items-center justify-center">
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>A-01</td>
								<td>급속</td>
								<td>자동</td>
								<td>410원</td>
								<td>30분</td>
								<td>100kW</td>
								<td>8,000원</td>
								<td>현대카드</td>
							</tr>
							<tr>
								<td class="flex flex-col items-center justify-center">
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>A-01</td>
								<td>급속</td>
								<td>자동</td>
								<td>410원</td>
								<td>30분</td>
								<td>100kW</td>
								<td>8,000원</td>
								<td>현대카드</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>
