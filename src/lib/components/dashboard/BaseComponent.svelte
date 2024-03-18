<script>
	// 이름 설정 필요 . . . .
	import Flash from '../../../asset/svg/flash.svg';
	import UserProfilesPlus from '../../../asset/svg/userProfilesPlus.svg';

	export let textColor;
</script>

<div
	class="flex flex-col items-center justify-center w-[277px] h-[244px] shadow bg-[#FFFFFF] rounded-[25px]"
>
	<div class="flex flex-row gap-2">
		<img src={Flash} alt="" />
		<p>실시간 누적 전기량</p>
	</div>
	<div class="flex flex-row items-baseline">
		<p class={textColor + ' text-7xl'}>2000</p>
		<p>kW</p>
	</div>

	<p class=" text-[#73ebeb]"></p>
	<div class="flex flex-row gap-2">
		<img src={UserProfilesPlus} alt="" />
		<p>실시간 누적 이용고객</p>
	</div>
	<div class="flex flex-row items-baseline">
		<p class={textColor + ' text-7xl'}>50</p>
		<p>명</p>
	</div>
</div>
