<script>
  // 충/방전 현황
  import ChargingCar from "../../../asset/svg/chargingCar.svg";
  import DischargingCar from "../../../asset/svg/dischargingCar.svg";

  import Charging from "../../../asset/svg/miniCharging.svg";
  import Discharging from "../../../asset/svg/miniDischarging.svg";
</script>

<div
  class=" flex flex-row w-[511px] h-[219px] bg-white gap-4 rounded-[25px] shadow"
>
  <div class="flex flex-col w-[234px] m-4">
    <p class="text-xl font-normal text-black">실시간 이용고객</p>
    <div
      class="bg-[#F7F8FD] rounded-[7px] h-full flex items-center justify-center flex-col text-center"
    >
      <p class=" text-7xl">100</p>
      <div class="flex flex-row gap-4 text-center">
        <div class="flex flex-row">
          <img src={Charging} alt="" class="mr-2 w-[21px] h-[24.6px]" />
          <p class="text-base font-normal text-zinc-500">충전 60</p>
        </div>
        <div class="flex flex-row">
          <img src={Discharging} alt="" class="mr-2 w-[21px] h-[24.6px]" />
          <p class="text-base font-normal text-zinc-500">방전 40</p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-[250px] flex flex-col m-4 gap-4">
    <p>충전 전력량</p>
    <div class="flex flex-row">
      <img src={ChargingCar} alt="" />
      <div
        class="flex flew-row w-[186px] bg-[#F7F8FD] rounded-[7px] items-baseline"
      >
        <p class="ml-2 text-4xl text-[#0194E4]">2000</p>
        <p class="text-2xl text-[#7E7E7E]">kW</p>
      </div>
    </div>

    <p>방전 전력량</p>
    <div class="flex flex-row">
      <img src={DischargingCar} alt="" />
      <div
        class="flex flew-row w-[186px] bg-[#F7F8FD] rounded-[7px] items-baseline"
      >
        <p class="ml-2 text-4xl text-[#0ABCD7]">2000</p>
        <p class="text-2xl text-[#7E7E7E]">kW</p>
      </div>
    </div>
  </div>
</div>
