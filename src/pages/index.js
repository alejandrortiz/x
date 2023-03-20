import Layout from '@/components/Layout'
import { CaretUpIcon, MinusIcon, PiggyBank, PlusIcon } from '@/icons/Icons'
import { useEffect, useState } from 'react'

const TRANSACTIONS = [
  {
    id: 1,
    concept: 'Sushi N1',
    type: 'EXPENSE',
    occurred: 'Today',
    amount: 35.65,
    currency: 'EUR'
  }, {
    id: 2,
    concept: 'Salary',
    type: 'INCOME',
    occurred: 'Today',
    amount: 1500.10,
    currency: 'EUR'
  }, {
    id: 3,
    concept: 'Loan',
    type: 'EXPENSE',
    occurred: 'Yesterday',
    amount: 500.65,
    currency: 'EUR'
  }, {
    id: 4,
    concept: 'Supermarket',
    type: 'EXPENSE',
    occurred: 'Yesterday',
    amount: 35.65,
    currency: 'EUR'
  }, {
    id: 5,
    concept: 'Supermarket',
    type: 'EXPENSE',
    occurred: 'One weeks ago',
    amount: 67.65,
    currency: 'EUR'
  }, {
    id: 6,
    concept: 'Supermarket',
    type: 'EXPENSE',
    occurred: 'Two weeks ago',
    amount: 135.65,
    currency: 'EUR'
  }
]

function Card({ className, children, header }) {
  return (
    <article className={` w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${className}`}>
      {header && (
        <header>
          <h1 className='text-lg font-light mb-2'>Top Activity</h1>
        </header>
      )}
      {children}
    </article>
  )
}

function Table() {
  return (
    <div className='relative overflow-x-auto sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Product name
            </th>
            <th scope='col' className='px-6 py-3'>
              Color
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Apple MacBook Pro 17'
            </th>
            <td className='px-6 py-4'>Silver</td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Microsoft Surface Pro
            </th>
            <td className='px-6 py-4'>White</td>
            <td className='px-6 py-4'>Laptop PC</td>
            <td className='px-6 py-4'>$1999</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Magic Mouse 2
            </th>
            <td className='px-6 py-4'>Black</td>
            <td className='px-6 py-4'>Accessories</td>
            <td className='px-6 py-4'>$99</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Google Pixel Phone
            </th>
            <td className='px-6 py-4'>Gray</td>
            <td className='px-6 py-4'>Phone</td>
            <td className='px-6 py-4'>$799</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Apple Watch 5
            </th>
            <td className='px-6 py-4'>Red</td>
            <td className='px-6 py-4'>Wearables</td>
            <td className='px-6 py-4'>$999</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function List() {
  return (
    <>
      <div className='flow-root'>
        <ul role='list' className='divide-y divide-gray-200 dark:divide-gray-700'>
          {TRANSACTIONS.map(transaction => (
            <li key={transaction.id} className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <span className='h-4 w-4 bg-blue-400/50 rounded-lg text-cyan-700'>
                    <PiggyBank />
                  </span>
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                    {transaction.concept}
                  </p>
                  <p className='text-xs text-gray-500 truncate dark:text-gray-400'>
                    {transaction.occurred}
                  </p>
                </div>
                <div className='inline-flex items-center text-base text-gray-900 dark:text-white'>
                  <span className='h-2 w-2 mr-2'>{transaction.type === 'INCOME' ? <PlusIcon /> : <MinusIcon />}</span>
                  <span className='font-medium mr-2'>{transaction.amount}</span>
                  <span className='font-extralight'>{transaction.currency}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function Location({ latitude, longitude }) {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    getLocation({ latitude, longitude })
  }, [latitude, longitude])

  const getLocation = async({ latitude, longitude }) => {
    const response = await fetch(`/api/geocode?lat=${latitude}&lon=${longitude}`)
    const data = await response.json()
    setLocation(data)
  }

  return (
    <div>
      {location ? (<span>{location.address.city}</span>) : (<p>Loading location...</p>)}
    </div>
  )
}

function Dashboard() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }))
    }
  }, [])

  return (
    <>
      <section className='pb-8'>
        <div className='flex items-center space-x-4'>
          <img
            className='w-14 h-14 p-1 rounded-full ring-2 ring-sky-400 dark:ring-sky-400'
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2040a-0180-v0492-1100-alteredv2-copia-1671204136.jpg?crop=0.429xw:0.815xh;0.175xw,0&resize=1200:*'
            alt='Avatar image'
          />
          <div className='font-medium dark:text-white'>
            <div className='font-bold text-2xl'>
              Welcome back, <span className='font-normal'>Alejandro Ortiz de Urbina</span><span className='pl-2'>👋🏼</span>
            </div>
            <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
              {location && (<Location latitude={location.latitude} longitude={location.longitude} />)}
            </div>
          </div>
        </div>
      </section>
      <section className='pb-8'>
        <Card className='p-3 sm:p-5'>
          <div className='grid grid-cols-4 divide-x'>
            <div className='px-3 sm:px-5'>
              <h1 className='text-lg font-light'>Balance</h1>
              <div className='text-2xl font-semibold my-1'><span className='pr-1'>€</span>12,000.00</div>
              <div>
                <span class='bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                  <span className='w-3 h-3 mr-1'><CaretUpIcon /></span>
                  <span>12.00%</span>
                </span>
              </div>
            </div>
            <div className='px-3 sm:px-5'>
              <h1 className='text-lg font-light'>Profits</h1>
              <div className='text-2xl font-semibold my-1'><span className='pr-1'>€</span>1,200.00</div>
              <div>
                <span class='bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                  <span className='w-3 h-3 mr-1'><CaretUpIcon /></span>
                  <span>12.00%</span>
                </span>
              </div>
            </div>
            <div className='px-3 sm:px-5'>
              <h1 className='text-lg font-light'>Losses</h1>
              <div className='text-2xl font-semibold my-1'><span className='pr-1'>€</span>100.00</div>
              <div>
                <span class='bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300'>
                  <span className='w-3 h-3 mr-1'><CaretUpIcon /></span>
                  <span>12.00%</span>
                </span>
              </div>
            </div>
            <div className='px-3 sm:px-5'>
              <h1 className='text-lg font-light'>Incoming expenses</h1>
              <div className='text-2xl font-semibold my-1'><span className='pr-1'>€</span>100.00</div>
            </div>
          </div>
        </Card>
      </section>
      <section className='grid grid-cols-3 gap-4 sm:gap-8'>
        <div className='col-span-2'>
          <Card className='p-4 sm:p-8'>
            <Table />
          </Card>
        </div>
        <div className='col-span-1'>
          <Card className='p-4 sm:p-8'>
            <List />
          </Card>
        </div>
      </section>
    </>
  )
}

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}
