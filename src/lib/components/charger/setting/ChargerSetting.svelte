<script>
	export let chargerNumber = 'A-1';
</script>

<div
	class="gap-2 flex flex-row justify-center items-center w-[511px] h-[169px] bg-white rounded-[25px] shadow"
>
	<div class="flex flex-col w-[115.85px] h-[103px]">
		<div
			class=" text-center text-white text-xl font-medium tracking-tight flex items-center justify-center w-full h-[39px] bg-violet-500 rounded-[50px]"
		>
			{chargerNumber} 대기중
		</div>

		<div class="text-lg font-medium text-center text-black">연결 차량</div>
		<div class="text-base font-normal text-center text-black">88가 1234</div>
	</div>

	<div class="bg-slate-50 items-center justify-center w-[230px] h-[129px] flex flex-col">
		<div class="flex flex-row gap-2">
			<p>고정출력모드</p>
			<p>-8 ~ 8kWh</p>
		</div>
		<div
			class="text-center text-sky-900 text-base font-medium w-[174px] h-[35px] rounded-[30px] border border-sky-900"
		>
			가변출력으로 변경
		</div>
	</div>

	<button
		class="flex items-center justify-center w-[103px] h-12 bg-black bg-opacity-20 rounded-[28px] border border-black border-opacity-20"
	>
		<p class="text-lg font-medium text-center text-white">초기화</p>
	</button>
</div>
