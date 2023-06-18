import Image from 'next/image'
import Header from '@/components/header'
import Users from '@/components/users'

export default function Home() {
  return (
    <main
      className='w-auto p-4'
    >
      <Header />
      <Users />
    </main>
  )
}
