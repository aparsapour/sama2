import Link from 'next/link'
const MainItems = [
  {
    name: 'اطلاعات سخت افزار',
    sharh: 'ویرایش یا جستجوی سخت افزار ها',
    image: '/images/System.svg',
    link: '/',
  },
  {
    name: 'اطلاعات پایه',
    sharh: 'ثبت وتعییرات اطلاعات پایه',
    image: '/images/Info.svg',
    link: '/',
  },
  {
    name: 'کاربران',
    sharh: 'تعریف',
    image: '/images/Users.svg',
    link: '/',
  },
  {
    name: 'فعالیت',
    sharh: 'تعریف',
    image: '/images/Tickets.svg',
    link: '/',
  },
  {
    name: 'تغییر رمز عبور',
    sharh: ' تغییر رمز عبور',
    image: '/images/ChangePassword.svg',
    link: '/ChangePassword',
  },

]

export default function Home() {
  return (
    <ul className="divide-y divide-gray-400">
      {MainItems.map((items) => (
        <li key={items.name} className="flex p-4">
          <Link href={items.link}>
            <img className="w-20 h-20 rounded-sx" src={items.image} alt="" />
          </Link>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{items.name}</p>
            <p className="text-sm text-gray-500">{items.sharh}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
