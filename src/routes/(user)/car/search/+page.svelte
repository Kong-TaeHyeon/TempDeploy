<script>
	import { page } from '$app/stores';
	import CarEx from '../../../../asset/svg/carEx.svg';

	let id = $page.url.searchParams.get('id') || '0';
</script>

<div class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600">
	<div class="mt-[38px] mb-[38px]">
		<div class="flex flex-col items-start w-full">
			<p class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight">
				차량조회
			</p>
			<div class="flex flex-row items-center">
				<div class="flex flex-col bg-white rounded-[25px] w-[408px] p-4 z-50">
					<p class="text-[22px] font-medium mb-4">차량 검색</p>
					<div class="flex flex-row gap-2 text-opacity-20">
						<select class="rounded-[20px] border border-gray-600" value="carNumber">
							<option value="carNumber">차량번호</option>
							<option value="userName">사용자명</option>
							<option value="userNumber">회원번호</option>
						</select>
						<input
							class="w-[170.72px] rounded-[20px] border border-gray-600 text-center"
							placeholder="00가 1234"
						/>
						<button class="w-[62.76px] rounded-[20px] border border-gray-600">검색</button>
					</div>
					<div class="flex flex-col items-center justify-center">
						<img src={CarEx} alt="" />
						<div class="flex items-center gap-4 flew-row">
							<p class="text-lg font-medium tracking-tight text-zinc-800">HAC 회원번호</p>
							<p>0000-0000</p>
						</div>
					</div>

					<div class="w-[359px] rounded-[20px] border border-gray-400">
						<div class="p-[42px]">
							<div class="flex flex-row gap-[63px] mb-[26px]">
								<p class="text-[22px] font-semibold">사용자명</p>
								<p class="mr-4 text-left">홍길동</p>
							</div>
							<div class="flex flex-row gap-[63px] mb-[26px]">
								<p class="text-[22px] font-semibold">차량번호</p>
								<p class="mr-4 text-left">88가 1234</p>
							</div>
							<div class="flex flex-row gap-[63px] mb-[26px]">
								<p class="text-[22px] font-semibold">차량모델</p>
								<p class="mr-4 text-left">아이오닉5 2023</p>
							</div>
							<div class="flex flex-row">
								<p class="text-[22px] font-semibold">HAC 가입일</p>
								<p class="text-left ml-7">2023. 10. 30</p>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-slate-50 w-[800px] h-[700px] flex flex-col items-center">
					<div class="flex flex-row gap-4 mt-4">
						<input
							class=" rounded-[20px] border border-gray-600 text-center text-base font-medium tracking-tight"
							type="date"
						/>
						<input
							class="rounded-[20px] border border-gray-600 text-center text-base font-medium tracking-tight"
							type="date"
						/>
					</div>

					<div class="m-4 w-[726px] h-[704px] bg-white rounded-[25px] shadow">
						<table class="table w-full">
							<thead class="bg-gray-100 rounded-[5px] shadow text-center">
								<tr>
									<th>일시</th>
									<th>방문 목적</th>
									<th>총/방전량</th>
									<th>사용기기</th>
									<th>시간</th>
									<th>금액</th>
									<th>결제</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
								<tr>
									<td class="flex flex-col items-center justify-center">
										<p>2023.12.31</p>
										<p>15:00</p>
									</td>
									<td>충전</td>
									<td>100kW</td>
									<td>A-1</td>
									<td>30분</td>
									<td>8000원</td>
									<td class="flex flex-col items-center justify-center">
										<p>카드</p>
										<p>현대카드</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
