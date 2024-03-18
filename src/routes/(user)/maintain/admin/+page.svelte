<script>
	import { page } from '$app/stores';
	import Contact from '../../../../asset/svg/contact.svg';

	let id = $page.url.searchParams.get('id') || '0';
</script>

<div class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600">
	<div class="mt-[38px] mb-[38px]">
		<div class="flex flex-row items-center w-full">
			<p class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight">
				유지보수관리
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
		<div class="flex flex-row bg-slate-50 rounded-[25px] w-[1200px]">
			<div class="ml-[78px] flex flex-col gap-2">
				<div class="mt-2"></div>
				<p class="text-black text-[22px] font-medium">문의/지원</p>
				<button class="w-[290px] h-[102px] bg-gray-600 rounded-[25px] shadow">
					<div class="flex flex-row items-center justify-center">
						<img src={Contact} alt="" class="mr-2" />
						<p class="text-2xl font-medium text-center text-zinc-200">1:1 상담 문의</p>
					</div>
				</button>
			</div>

			<div class="flex flex-col ml-[40px] gap-2">
				<div class="mt-2"></div>
				<p class="text-black text-[22px] font-medium">관리 내역</p>
				<table class="table w-[669px]">
					<thead class="bg-gray-100 rounded-[5px] shadow text-center">
						<tr>
							<th>신청 일시</th>
							<th>처리 일시</th>
							<th>문의 내용</th>
							<th>문의 방법</th>
							<th>담당자</th>
							<th>처리 결과</th>
						</tr>
					</thead>
					<tbody class="text-center">
						<tr>
							<td class="flex flex-col items-center justify-center">
								<p>2023.12.31</p>
								<p>15:00</p>
							</td>
							<td>
								<p>2023.12.31</p>
								<p>15:00</p>
							</td>
							<td>전산 오류</td>
							<td>원격지원</td>
							<td>김현대</td>

							<td>
								<button
									class="text-center text-violet-500 text-sm w-[67.40px] h-[24.31px] rounded-[41px] border border-violet-500"
								>
									확인중
								</button>
							</td>
						</tr>
						<tr>
							<td class="flex flex-col items-center justify-center">
								<p>2023.12.31</p>
								<p>15:00</p>
							</td>
							<td>
								<p>2023.12.31</p>
								<p>15:00</p>
							</td>
							<td>전산 오류</td>
							<td>원격지원</td>
							<td>김현대</td>

							<td>
								<button
									class="text-center text-violet-500 text-sm w-[67.40px] h-[24.31px] rounded-[41px] border border-violet-500"
								>
									확인중
								</button>
							</td>
						</tr>

						{#each [1, 2, 3, 4, 5, 6, 7, 8] as index}
							<tr>
								<td class="flex flex-col items-center justify-center">
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>
									<p>2023.12.31</p>
									<p>15:00</p>
								</td>
								<td>전산 오류</td>
								<td>원격지원</td>
								<td>김현대</td>

								<td>
									<button
										class="text-center text-gray-500 text-sm w-[67.40px] h-[24.31px] rounded-[41px] border border-gary-500"
									>
										확인중
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
