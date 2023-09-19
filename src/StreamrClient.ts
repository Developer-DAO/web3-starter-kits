const StreamrClient = require("streamr-client");

interface Data {
  data: any;
}

let currentSubscriptions: any[] = [];

const main = async (streamId: string, handleData: (data: Data) => void) => {
  const client = new StreamrClient({
    auth: {
      privateKey: process.env.PRIVATE_KEY,
    },
  });

  client.on("error", (error: any) => {
    console.error("Error in StreamrClient:", error);
  });

  const stream = await client.getStream(streamId);

  const onMessage = (content: any) => {
    console.log(JSON.stringify(content, undefined, 2));
    handleData(content);
  };

  if (currentSubscriptions.length > 0) {
    currentSubscriptions.forEach(async (subscription) => {
      await subscription.unsubscribe();
    });
  }

  currentSubscriptions = await Promise.all(
    stream.getStreamParts().map(async (partition: any) => {
      return await client.subscribe(partition, onMessage);
    })
  );

  return { client, currentSubscriptions };
};

export default main;
