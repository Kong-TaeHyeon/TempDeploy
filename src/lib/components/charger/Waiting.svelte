<script>
	export let chargerName = 'A-1';
</script>

<div class=" flex w-[486px] h-[102px] bg-slate-50 items-center">
	<div class="flex flex-row ml-[31.56px]">
		<div class="flex flex-col">
			<div class="flex flex-row gap-2 mt-2">
				<div
					class="w-[60px] h-[39px] bg-slate-200 rounded-[30px] text-center text-white text-[22px] font-medium tracking-tight"
				>
					{chargerName}
				</div>
				<p class="text-center text-black text-opacity-20 text-[22px] font-medium tracking-tight">
					대기중
				</p>
			</div>
			<p
				class="mt-[10px] text-center text-black text-opacity-20 text-[11px] font-medium tracking-tight"
			>
				충전기 번호 : 5605-6050-9560-8089
			</p>
		</div>
		<div>
			<div class="flex flex-row items-center ml-10">
				<div>
					<p class="text-base font-medium tracking-tight text-center text-black text-opacity-20">
						자동
					</p>
					<p class="text-base font-medium tracking-tight text-center text-black text-opacity-20">
						고속
					</p>
				</div>
				<div class="flex flex-row align-baseline">
					<p class="text-black text-opacity-20 text-[47px] font-medium">100</p>
					<p class="text-black text-opacity-20 text-[17px] font-normal">kW</p>
				</div>
			</div>

			<div class="flex flex-row items-center gap-2 ml-10">
				<p class="text-xs tracking-tight text-center text-black text-opacity-20">일일 누적량</p>

				<div>
					<span style="text-black text-opacity-20 text-[19px] font-medium tracking-tight">300</span
					><span style="text-black text-opacity-20 text-base font-medium  tracking-tight">
					</span><span style="text-black text-opacity-20 text-[19px] font-medium  tracking-tight"
						>kW</span
					>
				</div>
			</div>
		</div>
	</div>
</div>
