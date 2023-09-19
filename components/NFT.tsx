import { ThirdwebNftMedia } from "@thirdweb-dev/react";
import { NFT } from "@thirdweb-dev/react";

type Props = {
  nft: NFT;
};

export default function NFTComponent({ nft }: Props) {
  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} />
      <p>Token ID: {nft.metadata.id}</p>
      <p>{nft.metadata.name}</p>
    </>
  );
}
