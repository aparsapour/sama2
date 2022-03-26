import Link from 'next/link'
import { useRouter } from 'next/router';
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
        link: '/ModiriatKarbaran',
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
    {
        name: 'ورود',
        sharh: ' ورود یه سیستم',
        image: '/images/Login.svg',
        link: '/Login',
    },
    {
        name: 'خروج',
        sharh: ' خروج از سیستم',
        image: '/images/Logout.svg',
        link: '/Logout',
    },

]

export default function Layout({ children }) {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen">
            <header
                className="sticky top-0 flex items-center justify-center font-semibold uppercase bg-purple-200 h-14"
            >
                سامانه متمرکز آمار (سما)
            </header>
            <div className="flex flex-row flex-1 md:flex-row">
                <aside>
                    <nav>
                        <ul>
                            {MainItems.map(({ name, sharh, image, link }) => (
                                <li key={name} className="flex p-4">
                                    <Link href={link}>
                                        <img className="w-20 h-20 rounded-sx" src={image} alt="" />
                                    </Link>
                                    <div className={`"flex p-2 ml-3 rounded cursor-pointer bg-fuchsia-200 hover:bg-fuchsia-400"  ${router.asPath === link && 'bg-fuchsia-600 text-white'}`}>
                                        <p className="text-sm font-medium text-gray-900">{name}</p>
                                        <p className="text-sm text-gray-500">{sharh}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className='h-screen md:w-10/12 bg-emerald-600 sm:w-80'>{children}</main>
            </div>
        </div>
    )
}
