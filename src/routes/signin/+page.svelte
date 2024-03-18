<script>
	let id, password;

	// 요청.
	const onSubmitHandler = async () => {
		let response = await fetch('/signin', {
			method: 'POST',
			body: JSON.stringify({ id, password }),
			headers: {
				'content-type': 'application/json'
			}
		});

		response = await response.json();

		if (response.code === 200) {
			window.location.href = '/dashboard';
		} else {
			id = '';
			password = '';
			document.getElementById('my_modal_1').showModal();
		}
	};
</script>

<div
	class="relative flex justify-center min-h-screen"
	style="background: conic-gradient(from 180deg at -13.64% 106.82%, #4B505E 0deg, rgba(9.06, 13.53, 23.38, 0.88) 2deg, #4B505E 360deg);"
>
	<!-- Lighting Bar -->
	<div class="flex flex-col items-center">
		<div class="relative -rotate-180 h-96">
			<div
				class="absolute top-0 left-0 w-4 bg-indigo-600 shadow h-96 rounded-tl-xl rounded-tr-xl blur-lg"
			></div>
			<div
				class="w-2.5 h h-96 left-[3px] top-[3.72px] absolute mix-blend-hard-light bg-white bg-opacity-5 rounded-tl-lg rounded-tr-lg"
			></div>
			<div
				class="w-1 h h-96 left-[6px] top-[6.20px] absolute opacity-90 mix-blend-lighten bg-white rounded-tl-lg rounded-tr-lg blur-none"
			></div>
		</div>

		<div class="relative flex flex-row items-center w-full h-full">
			<div class="text-[#FFFFFF] w-[300px] h-[111px]">
				<p class="text-7xl">HAC</p>
				<p>Hyundai Advanced Charging</p>
			</div>
			<div class="flex flex-col gap-6">
				<input
					bind:value={id}
					class="h-12 text-center bg-white w-80 rounded-xl"
					type="text"
					placeholder="관리자 계정"
				/>
				<input
					bind:value={password}
					class="h-12 text-center bg-white w-80 rounded-xl"
					type="password"
					placeholder="비밀번호"
				/>
				<div class="w-36 flex flex-row text-white text-sm font-normal font-['Roboto'] leading-none">
					<input type="checkbox" />
					<p class="ml-2">로그인 유지하기</p>
				</div>
			</div>

			<div class="ml-4">
				<button
					on:click={onSubmitHandler}
					style="background: #272829; text-align: center; color: white; font-size: 18px; font-family: Noto Sans KR; font-weight: 500; letter-spacing: 0.20px; word-wrap: break-word"
					class="h-12 mt-5 rounded-full w-36">로그인하기</button
				>
			</div>
		</div>

		<div
			class="mb-4 text-center text-white text-base font-medium font-['Noto Sans KR'] tracking-tight flex items-center"
		>
			Hyundai Charging Service Ver 0.1.
		</div>
	</div>
</div>

<!-- Input 요소 -->
<dialog id="my_modal_1" class="modal">
	<div class="flex flex-col modal-box items-center justify-center w-[578px] h-[299px] gap-4">
		<div class="text-2xl font-medium text-black">입력하신 정보가 일치하지 않습니다.</div>
		<div class="text-center text-black text-opacity-20 text-lg font-medium font-['Inter']">
			관리자 ID/PW를 다시 입력해주시기 바랍니다.
		</div>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn bg-white w-[228px] h-[55px] rounded-[30px] border border-gray-600"
					>로그인 재시도</button
				>
			</form>
		</div>
	</div>
</dialog>
