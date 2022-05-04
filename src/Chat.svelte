<script>
  import io from 'socket.io-client'
  import { getToken, getUsername } from './storage'

  const username = getUsername()

  const socket = io("http://localhost:8291", {
    query: { token: getToken() }
  })

  let currentMessenger = ""

  let messages = []
  let message = ''
  let users = []

  socket.on("get_users", (data) => {
    users = data
  })

  socket.on('getMessage', (data) => {
    if (data.username == username) {
      messages = [...messages, { content: data.message, isSender: true }]
    } else if (data.username == currentMessenger) {
      messages = [...messages, { content: data.message, isSender: false }]
    }
  })

  socket.on("getConversation", (data) => {
    console.log(data)
    messages = data
  })

  socket.on("connect_error", (error) => {
    console.log(error.message)
  })

  function sendMessage() {
    socket.emit('sendMessage', message)
    message = ''
  }

  function startMessaging(username) {
    currentMessenger = username

    socket.emit('getConversation', currentMessenger)
  }
</script>

<div class="flex flex-col xl:w-8/12 lg:w-10/12 md:w-10/12 w-full bg-slate-200 px-8 py-8 rounded-lg">
  <h1 class="mb-4 font-bold text-4xl text-center">Chat</h1>
  <div class="grid grid-cols-4">
    <div class="col-span-3 mb-4 mr-2 bg-slate-300 rounded-md px-4 py-4 max-h-96 overflow-auto">
      <div class="w-full text-center rounded-md bg-slate-200 mb-2">Messages with {currentMessenger}</div>
      {#each messages as message}
        {#if message.isSender}
          <div class="px-4 py-2 mb-2 bg-lime-700 rounded-md font-semibold text-gray-50 w-fit">{message.content}</div>
        {:else}
          <div class="px-4 py-2 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-fit">{message.content}</div>
        {/if}
      {/each}
    </div>
    <div class="mb-4 bg-slate-300 rounded-md px-4 py-4 max-h-96 overflow-auto">
      <div class="w-full text-center rounded-md bg-slate-200 mb-2">Users</div>
      {#each users.filter((u) => u.isActive && u.username != username) as user}
        <div on:click={() => { startMessaging(user.username) }} class="px-2 py-1 mb-2 bg-lime-700 rounded-md font-semibold text-gray-50 w-content hover:bg-slate-600 hover:cursor-pointer">{user.username}</div>
      {/each}
      {#each users.filter((u) => !u.isActive) as user}
        <div on:click={() => { startMessaging(user.username) }} class="px-2 py-1 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-content hover:bg-slate-600 hover:cursor-pointer">{user.username}</div>
      {/each}
    </div>
  </div>
  <div class="w-full flex">
    <input bind:value={message} class="rounded-md px-2 py-2 w-full border-0" placeholder="Message..." type="text">
    <button on:click={sendMessage} class="rounded-md px-3 py-2 bg-pink-700 text-gray-50 border-0 ml-2">Send</button>
  </div>
</div>