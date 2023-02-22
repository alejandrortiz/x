import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Transaction() {
  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white p-8 rounded-lg'>
          <h1 className='text-4xl font-bold mb-10'>Transaction</h1>
          <div className='border-b mt-8 mb-8' />
          <div className='text-center text-blue-400 font-bold'>
            <Link href='/'>Go home</Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
