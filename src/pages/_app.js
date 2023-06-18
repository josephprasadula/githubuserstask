import '@/styles/globals.css'
import { UsersProvider } from '@/context/userDataContext'

export default function App({ Component, pageProps }) {
  return <UsersProvider ><Component {...pageProps} /></UsersProvider>

}
