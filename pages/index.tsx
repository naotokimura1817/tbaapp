import { ConnectWallet, Web3Button, useAddress, useConnect, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { NFTDROP_ADDRESS } from "../const/constatns";
import NFTGrid from "../components/NFTGrid";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(NFTDROP_ADDRESS);
  const { data, isLoading } = useOwnedNFTs(contract, address);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectWallet />
        {!address ? (
          <p className={styles.description}>Connect your wallet to get started.</p>
        ) : (
          <div>
            <h3>Your NFTs</h3>
            <NFTGrid 
              isLoading={isLoading}
              nfts={data}
              emptyText={"You don't own any NFTs yet."}
            />
          <Web3Button
          contractAddress={NFTDROP_ADDRESS}
          action={(contract) => contract.erc721.claim(1)}
          >Claim NFT</Web3Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
