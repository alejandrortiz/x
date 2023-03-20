import { BackIcon } from '@/icons/Icons'
import { useState } from 'react'

export function AsideMenu({ item }) {
  const [active, setActive] = useState(false)

  const styles = active
    ? 'bg-[#377DFF] text-[#377DFF] hover:bg-[#377DFF]/85 shadow-md bg-opacity-20'
    : 'bg-transparent border-white/20 text-gray-500 hover:bg-gray-500/10'
  const icon = active && item.options.length > 0 ? <BackIcon /> : item.icon

  return (
    <>
      <div className='mt-4 mb-2 px-8 py-2 text-[#a1acb8] text-xs uppercase menu-header relative'>
        <span className='uppercase text-sm'>Section</span>
      </div>
      <div>
        <a
          className={`flex py-4 px-3 mx-4 h-11 gap-3 items-center rounded-lg transition-colors ${styles} duration-200 cursor-pointer text-sm flex-shrink-0 border`}
          onClick={() => setActive(!active)}
        >
          {icon}
          <span>{item.title}</span>
        </a>
      </div>
      {active && !!item.options && item.options.map((item) => (<MenuSubItem key={item.id} subItem={item} />))}
    </>
  )
}

function MenuSubItem({ subItem }) {
  const [active, setActive] = useState(false)

  const styles = active ? 'font-semibold active' : ''

  return (
    <div
      className='text-sm py-1'
      key={subItem.id}
    >
      <a
        className={`relative menu-link flex py-4 pl-12 mx-4 h-11 border-white/20 gap-3 items-center rounded-lg text-gray-500 transition-colors ${styles} hover:bg-gray-500/10 duration-200 cursor-pointer text-sm flex-shrink-0 border`}
        onClick={() => setActive(!active)}
      >
        <span>{subItem.title}</span>
      </a>
    </div>
  )
}
