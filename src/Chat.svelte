<script>
  import io from 'socket.io-client'
  import { getToken } from './storage'

  const socket = io("http://localhost:8292", {
    query: { token: getToken() }
  })

  let messages = []
  let message = ''
  let users = []

  socket.on("get_users", (data) => {
    users = data
  })

  socket.on('messageChannel', (data) => {
    messages = [...messages, data]
  })

  socket.on("connect_error", (error) => {
    console.log(error.message)
  })

  function sendMessage() {
    socket.emit('messageChannel', message)
    message = ''
  }
</script>

<div class="flex flex-col w-5/12 bg-slate-200 px-8 py-8 rounded-lg">
  <h1 class="mb-4 font-bold text-4xl text-center">Chat</h1>
  <div class="w-full mb-4 bg-gray-300 rounded-md px-4 py-4">
    {#each users as user}
      {user.isActive ? "active" : "passive"}
      <div class="px-4 py-2 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-fit">{user.username}</div>
    {/each}
    {#each messages as message}
      <div class="px-4 py-2 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-fit">{message}</div>
    {/each}
  </div>
  <div class="w-full flex">
    <input bind:value={message} class="rounded-md px-2 py-2 w-full border-0" placeholder="Message..." type="text">
    <button on:click={sendMessage} class="rounded-md px-3 py-2 bg-pink-700 text-gray-50 border-0 ml-2">Send</button>
  </div>
</div>