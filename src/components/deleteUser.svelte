<script lang="ts">
  import { isOpenModalDeleteUser, deleUserId, users } from "../stores/stores";
  import { deleteUserEndPoint } from "../lib/deleteuser";

  const deleteUser = async () => {
    const res = await deleteUserEndPoint($deleUserId)
    $users = res;
    cancel();
  }

  const cancel = () => {
    $isOpenModalDeleteUser = false;
  };
</script>

<div
  class="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-20"
>
  <div class="bg-white text-center space-y-2 p-4 rounded-lg">
    <p>{$deleUserId}</p>
    <h2>Are you sure you want to delete this user?</h2>
    <div class="space-x-2 text-white">
        <button on:click={() => cancel()} class="bg-green-300 px-4 py-2 hover:bg-green-400 transition-all">Cancel</button>
        <button on:click={() => deleteUser()} class="bg-red-300 px-4 py-2 hover:bg-red-400 transition-all">Delete</button>
    </div>
  </div>
</div>
