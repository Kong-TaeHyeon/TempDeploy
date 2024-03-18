<script>
	let charger;
	export let chargeAmount = 150; // 예제 충전량, 실제 충전량으로 변경해야 합니다.

	// 충전량에 따라 배경색을 계산하는 함수
</script>

<div
	class="flex flex-row w-[380px] h-[68px] items-center"
	style="background: linear-gradient(270deg, rgba(70, 232, 222, 0.25) 28.85%, rgba(1, 181, 221, 0.25) 108.02%);
    "
>
	<button class="z-20 w-[115px] h-[39px] rounded-[50px] bg-[#0194E4] text-[#FFFFFF] text-xl m-1"
		>{charger?.number ?? '01'} 방전중</button
	>
	<p class="z-20 m-4 text-xl">로봇/초고속</p>
	<div class="z-20 flex flex-row">
		<p class="text-4xl">100</p>
		<p>kW</p>
	</div>

	<div
		id="charger-percent"
		class=" absolute z-10 h-[68px] bg-white"
		style="background: linear-gradient(270deg, #8CEFE9 23.07%, #01B5DD 108.02%);
        width : {chargeAmount}px"
	></div>
</div>
