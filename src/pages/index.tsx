import { useEffect, useState } from "react";
import subscribeToStream from "../StreamrClient";

interface StreamrData {
  data: any;
}

export default function Home() {
  const [streamrData, setStreamrData] = useState<StreamrData | null>(null);
  const [streamId, setStreamId] = useState<string>(
    "streamr.eth/metrics/nodes/firehose/sec"
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 7000);
    subscribeToStream(streamId, (data: any) => {
      setStreamrData(data);
    });
    return () => clearTimeout(timer);
  }, [streamId]);

  const handleStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreamId(event.target.value);
  };

  return (
    <div className="p-5">
      <h2 className="text-4xl pb-1">Select Stream</h2>
      <div className="mb-5">
        <input
          type="radio"
          id="weatherStream"
          name="stream"
          value="streamr.eth/metrics/nodes/firehose/sec"
          checked={streamId === "streamr.eth/metrics/nodes/firehose/sec"}
          onChange={handleStreamChange}
        />
        <label htmlFor="weatherStream">Node Metrics Stream</label>
        <br />
        <input
          type="radio"
          id="nodeMetricsStream"
          name="stream"
          value="streams.dimo.eth/firehose/weather"
          checked={streamId === "streams.dimo.eth/firehose/weather"}
          onChange={handleStreamChange}
        />
        <label htmlFor="nodeMetricsStream">Weather Stream</label>
      </div>
      <div className="flex justify-between">
        <div className="w-2/5 border border-white rounded p-2 h-[500px] overflow-auto">
          <h2 className="text-4xl pb-1 border-b-2 border-white">Data Stream</h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <pre>{JSON.stringify(streamrData, null, 2)}</pre>
          )}
        </div>
        <div className="w-2/5 border border-white rounded p-2 h-[500px] overflow-auto">
          <h2 className="text-4xl pb-1 border-b-2 border-white">
            Data Variables
          </h2>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            streamrData &&
            streamrData.data && (
              <pre>{Object.keys(streamrData.data).join("\n")}</pre>
            )
          )}
        </div>
      </div>
    </div>
  );
}
