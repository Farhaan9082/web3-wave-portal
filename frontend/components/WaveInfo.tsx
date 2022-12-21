interface WaveInfo {
  address: string;
  timestamp: Date;
  message: string;
}

export const WaveInfo = ({ address, timestamp, message }: WaveInfo) => {
  const walletAddress =
    address.substring(0, 4) +
    "..." +
    address.substring(address.length - 4, address.length);
  return (
    <div className="w-full border-2 rounded-md border-black p-4 grid grid-cols-1 gap-5 md:grid-cols-[1fr_2fr_1fr]">
      <div className="">
        <h3 className="font-extrabold text-xl tracking-tight">Waver</h3>
        <p className="font-bold mt-1 text-blue-800">{walletAddress}</p>
      </div>
      <div className="">
        <h3 className="font-extrabold text-xl tracking-tight">Waved at</h3>
        <p className="font-bold mt-1">{timestamp.toString()}</p>
      </div>
      <div className="">
        <h3 className="font-extrabold text-xl tracking-tight">Message</h3>
        <p className="font-bold mt-1">{message}</p>
      </div>
    </div>
  );
};
