<script>
	let charger;
</script>

<div class="flex flex-row w-[326] h-[68px] items-center bg-[#F7F8FD] text-[#9CA5B1]">
	<button class="z-20 w-[115px] h-[39px] rounded-[50px] bg-[#E7EBF7] text-xl m-1"
		>{charger?.number ?? '01'} 대기중</button
	>
	<p class="z-20 m-4 text-xl">로봇/초고속</p>
	<div class="text-lg font-medium tracking-tight text-center text-gray-400">완속/고속</div>
</div>
