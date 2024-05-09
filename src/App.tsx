
import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function App() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button onClick={() => open()}>Connect Wallet</button>
      <button onClick={() => open({ view: 'Networks' })}> Select Networks</button>
    </>
  )
}
    
    



