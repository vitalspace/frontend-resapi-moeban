<script lang="ts">
  import { createUserEndPoint } from "../lib/createUser";
  import { isOpen, users } from "../stores/stores";
  const closeModal = () => ($isOpen = false);

  let name: string;
  let img: string;
  let email: string;
  let bio: string;

  const createUser = async () => {
    const patron = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    if (!patron.test(email)) {
      alert("Esto no es un email");
      return;
    }
    if (!name || !img || !email || !bio) {
      alert("All data must be completed");
      return;
    }

    const res = await createUserEndPoint({ name, img, email, bio });
    if (res) {
      $users = res;
      $isOpen = false;
    }
  };
</script>

<div
  class="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-20"
>
  <div class="sm:w-2/5 w-full sm:mx-0 mx-4 rounded-lg border-2 bg-white py-2">
    <div class="pr-2 text-right">
      <button on:click={() => closeModal()}
        ><img class="w-6" src="cancel-circle-svgrepo-com.svg" alt="" /></button
      >
    </div>
    <h2 class="text-ce py-4 text-center text-2xl font-bold">Add User</h2>
    <div class="flex flex-col space-y-2 px-2">
      <input
        bind:value={name}
        class="border-2 p-2"
        type="text"
        name=""
        id=""
        placeholder="Name"
      />
      <input
        bind:value={img}
        class="border-2 p-2"
        type=""
        name=""
        id=""
        placeholder="img"
      />
      <input
        bind:value={email}
        class="border-2 p-2"
        type="text"
        name=""
        id=""
        placeholder="email"
      />
      <textarea bind:value={bio} class="border-2 p-2" name="" id="" rows="5" />
      <button
        on:click={() => createUser()}
        class="border-2 bg-green-300 py-2 font-bold text-white transition-all hover:bg-green-500"
        >Submit</button
      >
    </div>
  </div>
</div>
