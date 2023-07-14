<script lang="ts">
  import { isOpenModalDeleteUser, deleUserId } from "../stores/stores";

  export let id: number;
  export let img: string;
  export let name: string;
  export let bio: string;

  const deleteUser = async (id) => {
    $isOpenModalDeleteUser = !$isOpenModalDeleteUser;
    $deleUserId = id;
  };

  const updateUser = async (id) => {
    alert(id);
  };
</script>

<div class="flex items-center space-x-2 border-2 rounded-md p-2 font-serif">
  <img class="h-20 w-20 rounded-full border-2" src={img} alt="" />
  <div class="w-full text-left">
    <div class="flex justify-between">
      <p>id: {id}</p>
      <div class="mx-2 flex space-x-4">
        <button
        on:click={() => updateUser(id)}
          ><img class="w-6" src="update-alt-2-svgrepo-com.svg" alt="" /></button
        >
        <button on:click={() => deleteUser(id)}
          ><img class="w-6 h-6" src="delete-2-svgrepo-com.svg" alt="" /></button
        >
      </div>
    </div>
    <h2>name: {name}</h2>
    <p>
      bio: {bio}
    </p>
  </div>
</div>

