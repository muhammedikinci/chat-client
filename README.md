<br />
<p align="center">
  <h3 align="center">Chat API UI Project</h3>
</p>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#commands">Commands</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Getting Started

### Prerequisites

* npm&node
* Docker

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/muhammedikinci/chat-client
   cd ./chat-client
   ```
2. Install modules
   ```sh
   npm install
   ```

## Commands

Serve with development
```sh
npm run dev
```

## Run Docker

Build Dockerfile
```sh
docker build --tag chat_client .
```

Run image
```sh
docker run -it -p 8080:80 --rm --name chat_client chat_client
```

Go App
```sh
http://localhost:8080
```

## Contact

Muhammed İKİNCİ - muhammedikinci@outlook.com