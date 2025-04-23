"use client"
import React, {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../../public/logo.png';
import {cl} from "../../classes/global";
import { usePathname } from 'next/navigation'
import {paths} from "../../constants";

type Props = {}

const Header: FC<Props> = () => {
    const pathname = usePathname();

    if(pathname === `/${paths.admin}`) return null;

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={icon}
                                width={100}
                                height={50}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/catalog" className="text-primary hover:text-secondary">Каталог</Link>
                        <a href="#" className="text-primary hover:text-secondary">Акции</a>
                        <a href="#" className="text-primary hover:text-secondary">Дизайнерам</a>
                        <a href="#" className="text-primary hover:text-secondary">Услуги</a>
                        <a href="#" className="text-primary hover:text-secondary">Отзывы</a>
                        <a href="#" className="text-primary hover:text-secondary">Контакты</a>
                    </nav>

                    {/* Contact Info */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="tel:+74999385111" className="text-primary font-medium">+375 44 7794815</a>
                        <button
                            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                            Заказать звонок
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;