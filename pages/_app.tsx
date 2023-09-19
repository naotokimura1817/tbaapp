import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { THIRDWEB_CLIENT_ID, THIRDWEB_SECRET_KEY, activeChain } from "../const/constatns";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
    clientId={THIRDWEB_CLIENT_ID}
    // secretKey={THIRDWEB_SECRET_KEY}
    activeChain={activeChain}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
