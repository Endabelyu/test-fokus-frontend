# Test Fokuslah Frontend

This is the frontend for the Test Fokuslah project. It is a React application that allows users to interact with the AI assistant and receive real-time feedback.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Shadcn UI

## Features

- Real-time chat with the AI assistant (using mockup data)
- Quick chat actions
- Mathematical rendering
- Mobile responsiveness

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Endabelyu/test-fokus-frontend.git

cd your-repo
```

2. Install the dependencies:

```bash
npm install
OR
yarn install
OR
pnpm install
OR
bun install
```

3. Start the development server:

```bash
npm run dev
OR
yarn dev
OR
pnpm dev
OR
bun run dev
```

## Assumptions

- This project assumes that you have a basic understanding of React and TypeScript.
- This project assums that you can made a logic to build a chat apps.
- This project is give me new experience to convert raw text to latex.

## Note how to wire this to Real LLM

- briefly how you would connect this UI to a real LLM API in production, including what
  payload you would send.

1. Create an account on OpenAI.

2. Store the API key securely using environment variables.

3. Use the API key to authenticate your requests to the OpenAI API.

4. Based on i look into documentation open API and see how to use it. in link [OpenAI API](https://platform.openai.com/docs/api-reference/chat)
i already use the same format payload to send to the API. We need adjust it accourding to the offical documentation an what model we use.
<!--

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. -->
