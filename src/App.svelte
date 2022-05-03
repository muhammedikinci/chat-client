<script>
  import Login from './Login.svelte'
  import Register from './Register.svelte'
  import Chat from './Chat.svelte'
  import { getToken } from './storage'

  let activeScreen = "login"

  if (getToken()) {
    activeScreen = "chat"
  }
</script>

<div class="flex justify-center items-center h-full">
  {#if activeScreen == "login"}
    <Login bind:activeScreen />
  {:else if activeScreen == "register"}
    <Register bind:activeScreen />
  {:else if activeScreen == "chat"}
    <Chat bind:activeScreen />
  {/if}
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>