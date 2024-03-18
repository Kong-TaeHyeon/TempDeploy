<script>
  import { page } from "$app/stores";
  import ChargerSetting from "../../../../lib/components/charger/setting/ChargerSetting.svelte";

  let id = $page.url.searchParams.get("id") || "0";
</script>

<div
  class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600"
>
  <div class="mt-[38px] mb-[38px]">
    <div class="flex flex-row items-center w-full">
      <p
        class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight"
      >
        충전기 설정
      </p>
      <div class="flex ml-[75px] gap-4 flew-row h-full">
        <button
          class="{id === '0'
            ? 'bg-slate-50 text-[#2E4C5E]'
            : 'text-white'} rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight"
          on:click={() => (window.location.href = $page.url.pathname + "?id=0")}
          >남양연구소 주차타워1</button
        >

        <button
          class="rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight
					{id === '1' ? 'bg-slate-50 text-[#2E4C5E]' : 'text-white'}"
          on:click={() => (window.location.href = $page.url.pathname + "?id=1")}
          >남양연구소 주차타워1</button
        >
      </div>
    </div>
    <div class="bg-slate-50 rounded-[25px] w-[1200px]">
      <div class="flex-col ml-[60px]">
        <p class=" text-black text-[22px] font-medium mb-4">
          충전기 제어 및 설정
        </p>
        <div class="grid grid-flow-col grid-rows-5 gap-4">
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
          <ChargerSetting />
        </div>
      </div>
    </div>
  </div>
</div>
