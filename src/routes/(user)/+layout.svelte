<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let pathname = $page.url.pathname;
	export let data;

	const { user } = data;

	let isOpen = false;

	const signOutHandler = async () => {
		let response = await fetch('/', {
			method: 'DELETE'
		});

		response = await response.json();

		if (response.code === 200) {
			alert('Log Out Success');
			goto('/signin');
		}
	};
</script>

<div class="navbar bg-[#252627]">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		</div>
		<div class="flex flex-row items-center gap-5 ml-10 text-xl text-white">
			<p class="text-4xl">HAC</p>
			<p>Hyundai Advanced Charging</p>
		</div>
	</div>
	<div class="hidden text-white navbar-center lg:flex">
		<ul class="px-1 menu menu-horizontal">
			<li><a href="/dashboard">대시보드</a></li>
			<li>
				<details>
					<summary>충전기</summary>
					<ul class="p-2 text-black">
						<li><a href="/charger/status">충전기 현황</a></li>
						<li><a href="/charger/setting">충전기 설정</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>차량</summary>
					<ul class="p-2 text-black">
						<li><a href="/car/search">차량 조회</a></li>
						<li><a href="/car/add">신규 등록</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>분석</summary>
					<ul class="p-2 text-black">
						<li><a href="/analyze/charge">충전</a></li>
						<li><a href="/analyze/decharge">방전</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary>유지보수</summary>
					<ul class="p-2 text-black">
						<li><a href="/maintain/admin">유지보수관리</a></li>
						<li><a href="/maintain/contact">메뉴얼</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>

	<div class="gap-4 text-white navbar-end">
		<p>{user.name} 연구원</p>
		<button on:click={signOutHandler}>Logout</button>
	</div>
</div>
<slot />
