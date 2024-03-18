<script>
	import Reload from '../../../asset/svg/reload.svg';
</script>

<div class="flex flex-col w-[511px] h-[219px] bg-white rounded-[25px] shadow items-center">
	<div
		class="m-3 w-[479px] h-[145px] bg-[#6398FF] flex flex-row justify-center gap-3 rounded-[25px]"
	>
		<div class="flex items-baseline gap-1 flew-row">
			<p
				class="text-white
            text-[85px]
            font-medium"
			>
				2,000
			</p>
			<p class="text-white text-[38px] font-normal">kW</p>
		</div>
		<div
			class="w-[142px] text-center text-black text-xl font-normal flex flex-col items-center justify-center gap-3"
		>
			<p>2023. 12. 31</p>
			<p>PM 3:00</p>
			<img src={Reload} alt="" />
		</div>
	</div>

	<div class="flex flew-row gap-[14px]">
		<button class="w-[136px] h-[38px] bg-zinc-200 rounded-[50px] text-gray-500 text-lg font-medium"
			>WEEK</button
		>
		<button class="w-[136px] h-[38px] bg-[#4A88FF] rounded-[20px] text-white text-lg font-medium"
			>TODAY</button
		>
		<button class="w-[136px] h-[38px] bg-zinc-200 rounded-[50px] text-gray-500 text-lg font-medium"
			>MONTH</button
		>
	</div>
</div>
