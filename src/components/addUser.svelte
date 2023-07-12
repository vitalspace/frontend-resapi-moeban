<script lang="ts">
  import { isOpen } from "../stores/stores";

  const closeModal = () => {
    $isOpen = false;
  };
</script>

<div
  class="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-20"
>
  <div class="sm:w-2/5 w-full sm:mx-0 mx-4 rounded-lg border-2 bg-white py-2">
    <div class="pr-2 text-right">
      <button
        on:click={() => closeModal()}

        ><img class="w-6" src="cancel-circle-svgrepo-com.svg" alt="" /></button
      >
    </div>
    <h2 class="text-ce py-4 text-center text-2xl font-bold">Add User</h2>
    <div class="flex flex-col space-y-2 px-2">
      <input
        class="border-2 p-2"
        type="text"
        name=""
        id=""
        placeholder="Name"
      />
      <input class="border-2 p-2" type="" name="" id="" placeholder="img" />
      <input
        class="border-2 p-2"
        type="text"
        name=""
        id=""
        placeholder="email"
      />
      <textarea class="border-2 p-2" name="" id="" rows="5" />
      <button
        class="border-2 bg-green-300 py-2 font-bold text-white transition-all hover:bg-green-500"
        >Submit</button
      >
    </div>
  </div>
</div>
