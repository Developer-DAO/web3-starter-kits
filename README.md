# Streamr Starter Kit

This is a starter kit for developers who want to use Streamr, a decentralized platform for real-time data. The kit provides a simple interface to connect to different data streams and visualize the data in real-time.

## Description

The Streamr Starter Kit is a Next.js application that uses the Streamr client to subscribe to data streams. It provides a simple interface to select a data stream and visualize the data and data variables in real-time. The kit is designed to be easy to use and modify, making it a great starting point for developers who want to build applications with Streamr.

## Quickstart Guide

1. Clone the repository: `git clone https://github.com/PSkinnerTech/streamr-starter-kit.git`
2. Navigate to the project directory: `cd streamr-starter-kit`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root of the project and add your Streamr private key: `PRIVATE_KEY=your_private_key`
5. Start the development server: `npm run dev`
6. Open your browser and navigate to `http://localhost:3000`

## Using the Starter Kit

1. Once you've started the development server, you'll see a page with a dropdown menu and two boxes labeled "Data Stream" and "Data Variables".
2. Use the dropdown menu to select a data stream. The "Data Stream" box will display the data from the selected stream in real-time, and the "Data Variables" box will display the variable names from the data stream.
3. To switch to a different data stream, simply select a different option from the dropdown menu. The data in the "Data Stream" and "Data Variables" boxes will update to reflect the new stream.

## Public Streams

The starter kit comes with two public streams:

- Weather Stream (`streams.dimo.eth/firehose/weather`)
- Node Metrics Stream (`streamr.eth/metrics/nodes/firehose/sec`)

You can add more streams by modifying the `index.tsx` file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
