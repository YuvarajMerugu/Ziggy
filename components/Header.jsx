import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { UilShoppingBag } from '@iconscout/react-unicons'
import { useStore } from '../store/store'
import Link from 'next/link'
export default function Header() {
    const items = useStore((state) => state.cart.pizzas.length)
    return (
        <div className={css.header}>
            {/* Logo */}
            <div className={css.logo}>
                <Image src={Logo} alt=""
                    width={67} height={50} />
                <span>Ziggy</span>
            </div>
            {/* Menu */}
            <ul className={css.menu}>
                <li>Home</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>.
            {/* Rightside */}
            <div className={css.rightSide}>
                <Link href='/cart'>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="#2E2E2E" />
                        <div className={css.badge}>{items}</div>
                    </div>
                </Link>
            </div>
        </div>
    )
};
