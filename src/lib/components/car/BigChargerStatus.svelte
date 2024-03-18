<script>
	let charger;
	export let chargeAmount = 150; // 예제 충전량, 실제 충전량으로 변경해야 합니다.

	// 충전량에 따라 배경색을 계산하는 함수
</script>

<div
	class="flex flex-col w-[561px] h-[111px] justify-center"
	style="background: linear-gradient(269.35deg, rgba(0, 179, 255, 0.25) 19.49%, rgba(0, 56, 255, 0.25) 98.56%);
"
>
	<div class="flex flex-row">
		<button class="z-20 w-[115px] h-[39px] rounded-[50px] bg-[#0194E4] text-[#FFFFFF] text-xl m-1"
			>{charger?.number ?? '01'} 충전중</button
		>
		<p class="z-20 m-4 text-xl">로봇/초고속</p>
		<div class="z-20 flex flex-row">
			<p class="text-4xl">100</p>
			<p>kW</p>
		</div>
	</div>
</div>
