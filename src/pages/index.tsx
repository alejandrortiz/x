import Link from 'next/link'
import Layout from '../components/Layout'

function Dashboard() {
  return (
    <main>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white p-8 rounded-lg'>
          <h1 className='text-4xl font-bold mb-10'>Welcome to the paradise</h1>
          <div className='border-b mt-8 mb-8' />
          <div className='text-center text-blue-400 font-bold'>
            <Link href='/transaction'>Transaction</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}
