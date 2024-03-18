<script>
	/**
	 * 충전기 오류 경고 컴포넌트
	 * chargeNumber : 오류가 발생한 충전기의 번호
	 */
	import Warning from '../../../asset/svg/warning.svg';

	export let chargerNumber;

	export let showModal;
</script>

{#if showModal}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<div class="flex flex-col w-[578px] h-[299px] items-center rounded-[20px] bg-[#FFFFFF]">
			<div class="w-full h-[49px] bg-[#E6ECF3]"></div>
			<div class="h-[150px] flex flex-row items-center justify-center text-lg">
				<img src={Warning} alt="" class="mr-2" />
				{chargerNumber}번 충전기에 오류가 발생했습니다.
			</div>
			<div class="flex-grow" />
			<div class="w-full border-2 border-[#E7E7E7]" />

			<div class="flex justify-end w-full gap-2 mt-2 mb-2 rounded-md">
				<p>오늘 하루 이 창을 열지 않음</p>
				<button class="ml-4 mr-2" on:click={() => (showModal = !showModal)}>닫기</button>
			</div>
		</div>
	</div>
{/if}
