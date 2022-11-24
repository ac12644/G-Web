import { useCallback, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { ellipseAddress, getChainData } from "./lib/utilities";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import Web3Modal from "web3modal";

const INFURA_ID = process.env.REACT_APP_INFURA_ID;
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
};

let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    case "SET_CHAIN_ID":
      return {
        ...state,
        chainId: action.chainId,
      };
    case "RESET_WEB3_PROVIDER":
      return initialState;
    default:
      throw new Error();
  }
}

export const Login = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { provider, web3Provider, address, chainId } = state;

  const connect = useCallback(async function () {
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    const network = await web3Provider.getNetwork();

    dispatch({
      type: "SET_WEB3_PROVIDER",
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    });
  }, []);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      });
      setAnchorEl(null);
    },
    [provider]
  );

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        // eslint-disable-next-line no-console
        console.log("accountsChanged", accounts);
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        });
      };

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        window.location.reload();
      };

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  const chainData = getChainData(chainId);

  const Btn = styled.button`
    display: inline-block;
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    outline: none;
    border: none;
    font-family: "VT323", monospace;
    font-size: ${(props) => props.theme.fontmd};
    padding: 0.9rem 2.3rem;
    margin-right: 5%;

    @media (min-width: 777px) {
      display: fixed;
      bottom: 50px;
    }

    border-radius: 50px;
    cursor: pointer;
    &:hover {
      transform: scale(0.9);
    }

    &::after {
      content: " ";
      position: absolute;
      top: 50%;
      left: 50%;

      width: 100%;
      height: 100%;
      border-radius: 50px;
      transform: translate(-50%, -50%) scale(0);
      border: 2px solid ${(props) => props.theme.text};
      transition: width 0.3s ease;
    }

    &:hover::after {
      transform: translate(-50%, -50%) scale(1.1);
      padding: 0.09rem 0.03rem;
    }
  `;

  return (
    <>
      {web3Provider ? (
        <Btn onClick={disconnect}>{ellipseAddress(address)}</Btn>
      ) : (
        <Btn onClick={connect}>Connect Wallet</Btn>
      )}
    </>
  );
};

export default Login;
