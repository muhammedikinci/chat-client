<script>
  import { login } from './api'
  import { setToken, setUsername } from './storage'

  export let activeScreen
  let username = ""
  let password = ""
  let message = ""

  function setActiveStateToRegister() {
    activeScreen = "register"
  }

  async function loginHandler() {
    const response = await login(username, password)

    if (response.status == false) {
      message = response.message
    } else if (response.token) {
      setToken(response.token)
      setUsername(username)
      activeScreen = "chat"
    }
  }
</script>

<div class="flex flex-col xl:w-3/12 lg:w-5/12 md:w-6/12 w-full bg-slate-200 px-8 py-8 rounded-lg">
  <h1 class="text-4xl text-center mb-3">Login</h1>
  <div class="mb-2 text-sm text-center text-red-700 font-bold" >{message}</div>
  <label for="username">Username</label>
  <input bind:value={username} type="text" name="username" class="rounded-md border-none p-2 px-4 outline-slate-400">
  <label for="username" class="mt-3">Password</label>
  <input bind:value={password} type="password" name="password" class="rounded-md border-none p-2 px-4 outline-slate-400">
  <button class="mt-3 border-none py-3 bg-slate-300 font-bold rounded-md hover:bg-slate-400" on:click={loginHandler}>Login</button>
  <button class="mt-3 border-none underline" on:click={setActiveStateToRegister} >Register</button>
</div>