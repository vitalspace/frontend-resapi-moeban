<script lang="ts">
  import { isOpen } from "./stores/stores";

  import AddUser from "./components/addUser.svelte";
  import User from "./components/user.svelte";

  const openModal = () => ($isOpen = !$isOpen);
</script>

<div
  class="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 to-teal-100"
>
  <div class="sm:w-1/2 sm:mx-0 w-full mx-4 rounded-lg shadow-2xl bg-zinc-100 p-2 text-center">
    <section class="py-4">
      <h1 class="text-3xl text-gray-600 font-bold">Bun ResApi + Moeban DB.</h1>
    </section>

    <section>
      <div class="text-center py-4">
        <button
          on:click={() => openModal()}
          class="flex justify-center items-center mx-auto space-x-2 bg-cyan-400 text-white font-bold rounded-full"
          ><img class="w-8 h-8 hover:rotate-45 transition-all" src="add-circle-svgrepo-com.svg" alt="" />
          <p class="pr-2">Add User</p></button
        >
      </div>
      <div class="space-y-2">
        <User
          id={1}
          img={"aksdjdljka"}
          name={"Lucas"}
          occupation={"Student"}
          bio={"i like the video games"}
        />
      </div>
    </section>
  </div>
</div>

{#if $isOpen}
  <AddUser />
{/if}
