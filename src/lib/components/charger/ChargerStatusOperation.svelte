<script>
	let chargeAmount = 200;
</script>

<div class=" flex flex-row w-[511px] h-[219px] shadow bg-white gap-4 rounded-[25px]">
	<div class="flex flex-col w-full gap-[26px] ml-6 mt-6">
		<div class="flex flex-row items-center gap-4">
			<p class="text-[#7C7C7C] w-[69.2px]">충전시간</p>
			<p>300분</p>
			<div class="w-[311px] h-[15px] bg-[#E7EBF7]">
				<div
					id="charger-percent"
					class=" absolute z-10 h-[15px] bg-white"
					style="background: #0195E4; width : {chargeAmount}px"
				></div>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<p class="text-[#7C7C7C] w-[69.2px]">충전시간</p>
			<p>300분</p>
			<div class="w-[311px] h-[15px] bg-[#E7EBF7]">
				<div
					id="charger-percent"
					class=" absolute z-10 h-[15px] bg-white"
					style="background: #0ABCD7
                    ; width : {chargeAmount}px"
				></div>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<p class="text-[#7C7C7C] w-[69.2px]">대기시간</p>
			<p>300분</p>
			<div class="w-[311px] h-[15px] bg-[#E7EBF7]">
				<div
					id="charger-percent"
					class=" absolute z-10 h-[15px] bg-white"
					style="background: #9CA4B1;
                    width : {chargeAmount}px"
				></div>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<p class="text-[#7C7C7C]">미연결시간</p>
			<p>300분</p>
			<div class="w-[311px] h-[15px] bg-[#E7EBF7]">
				<div
					id="charger-percent"
					class=" absolute z-10 h-[15px] bg-white"
					style="background:  #9CA4B1;
                    ; width : {chargeAmount}px"
				></div>
			</div>
		</div>
	</div>
</div>
