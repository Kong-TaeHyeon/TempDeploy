import { c as create_ssr_component, s as subscribe, e as escape, a as add_attribute } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { C as Contact } from "../../../../../chunks/contact.js";
const SendMessage = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%2010.6667L12%204M12%204L19%2010.6667M12%204V20'%20stroke='white'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let id = $page.url.searchParams.get("id") || "0";
  $$unsubscribe_page();
  return `<div class="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600"><div class="mt-[38px] mb-[38px]"><div class="flex flex-row items-center w-full"><p class="text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight" data-svelte-h="svelte-1247s01">유지보수관리</p> <div class="flex ml-[75px] gap-4 flew-row h-full"><button class="${escape(id === "0" ? "bg-slate-50 text-[#2E4C5E]" : "text-white", true) + " rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight"}">남양연구소 주차타워1</button> <button class="${"rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight " + escape(id === "1" ? "bg-slate-50 text-[#2E4C5E]" : "text-white", true)}">남양연구소 주차타워1</button></div></div> <div class="flex flex-row bg-slate-50 rounded-[25px] w-[1200px]" data-svelte-h="svelte-11f7689"><div class="ml-[78px] flex flex-col gap-2"><div class="mt-2"></div> <p class="text-black text-[22px] font-medium">문의/지원</p> <button class="w-[290px] h-[102px] bg-gray-600 rounded-[25px] shadow"><div class="flex flex-row items-center justify-center"><img${add_attribute("src", Contact, 0)} alt="" class="mr-2"> <p class="text-2xl font-medium text-center text-zinc-200">1:1 상담 문의</p></div></button></div> <div class="flex flex-col ml-[40px] gap-2 mb-4"><div class="mt-2"></div> <p class="text-black text-[22px] font-medium">관리 내역</p> <div class="w-[714px] h-[713px] bg-gradient-to-b from-white to-zinc-200 rounded-[5px] shadow"><p class="m-[17px] text-black text-[22px] font-medium">Charger helper</p> <div class="w-[714px] h-[555px] bg-gradient-to-b from-white to-zinc-200 rounded-[5px] shadow"> <div class="chat chat-end"><div class="bg-[#DEE2E6] chat-bubble text-gray-500 text-lg font-normal tracking-tight">내용을 작성해주세요</div></div> <div class="chat chat-end"><div class="bg-[#DEE2E6] chat-bubble text-gray-500 text-lg font-normal tracking-tight">차량 탭에 오류가 발생해요.</div></div> <div class="chat chat-start"><div class="text-lg text-black bg-white font-nomal chat-bubble">불편을 드려 죄송합니다.</div></div> <div class="chat chat-start"><div class="text-lg text-black bg-white font-nomal chat-bubble">해당 문제는 무엇으로 인해 발생하였으며, 현재 전산 복구를 통해 해결하였습니다.</div></div></div> <div class="flex items-center justify-center h-[90px] bg-white"><input class="text-center rounded-[25px] bg-[#F1F3F5] w-[599px] h-[56px]" placeholder="상세하게 작성해주시면 문제를 더 정확하게 파악할 수 있습니다."> <button class="ml-4 flex items-center justify-center w-14 h-14 rounded-[50px] bg-[#4B505E]"><img${add_attribute("src", SendMessage, 0)} alt=""></button></div></div></div></div></div></div>`;
});
export {
  Page as default
};