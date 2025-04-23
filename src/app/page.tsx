import {cl} from "../classes/global";

export default function Home() {

    return (
        <div className="">
            <div className="">
                {/* Hero Section */}
                <section className="pt-20 bg-gray-50">
                    <div className="container mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-4xl font-bold mb-4">Межкомнатные двери Profil Doors</h1>
                                <p className="text-lg text-gray-600 mb-8">Широкий выбор дверей премиум-качества по
                                    доступным ценам</p>
                                <div className="flex space-x-4">
                                    <button
                                        className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors">
                                        Каталог дверей
                                    </button>
                                    <button
                                        className="border border-primary text-primary px-6 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors">
                                        Бесплатный замер
                                    </button>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gray-200 h-96 rounded-lg"></div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded">
                                    Скидка -20%
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Catalog Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Какие двери нужны?</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            <a href="#" className="group">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <p className="text-center font-medium">Межкомнатные</p>
                            </a>
                            <a href="#" className="group">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <p className="text-center font-medium">Алюминиевые</p>
                            </a>
                            <a href="#" className="group">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <p className="text-center font-medium">Скрытые</p>
                            </a>
                            <a href="#" className="group">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <p className="text-center font-medium">Входные</p>
                            </a>
                            <a href="#" className="group">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <p className="text-center font-medium">Системы</p>
                            </a>
                            <a href="#" className="group">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <p className="text-center font-medium">Перегородки</p>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Advantages Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Широкий выбор</h3>
                                <p className="text-gray-600">В каталоге представлены все межкомнатные двери по
                                    официальной цене</p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                                <p className="text-gray-600">Доставка со склада в Москве в сжатые сроки, отправка ТК по
                                    всей России</p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Сдадим под ключ</h3>
                                <p className="text-gray-600">Внимательный сервис сопроводит до сдачи объекта. Работаем с
                                    дизайн-проектами</p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Срок службы 20 лет</h3>
                                <p className="text-gray-600">Итальянские замки и петли, влагостойкое покрытие, гарантия
                                    24 месяца</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Models Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Популярные модели</h2>
                        <div className="flex space-x-4 mb-8">
                            <button className="text-primary font-medium border-b-2 border-primary">Хиты продаж</button>
                            <button className="text-gray-500 hover:text-primary">Складская программа</button>
                            <button className="text-gray-500 hover:text-primary">Входные в квартиру</button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {/* Product Card 1 */}
                            <div className="group">
                                <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                                    <div
                                        className="absolute top-3 right-3 bg-red-600 text-white text-sm px-2 py-1 rounded">-20%
                                    </div>
                                    <div
                                        className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <h3 className="font-bold mb-2">1.1.1PD</h3>
                                <p className="text-gray-600 mb-2">Доставка от 5 дней</p>
                                <p className="font-bold text-lg mb-4">14 666 руб.</p>
                                <button
                                    className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition-colors">
                                    В корзину
                                </button>
                            </div>
                            {/* More product cards... */}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Категории</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Межкомнатные двери</a>
                                    </li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Алюминиевые двери</a>
                                    </li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Скрытые двери</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Входные двери</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Раздвижные
                                        перегородки</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Клиентам</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">Оплата</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Доставка</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Профессиональный
                                        монтаж</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Дизайнерам</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Контакты</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Информация</h3>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white">О компании</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Сертификаты</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Политика
                                        конфиденциальности</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white">Обмен и возврат</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4">Контакты</h3>
                                <a href="tel:+74999385111" className="text-xl font-bold block mb-4">+7 499 93 85 111</a>
                                <button
                                    className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors mb-4">
                                    Заказать звонок
                                </button>
                                <p className="text-gray-400">Официальный дилер Profil Doors</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                            <p>© 2025 Profil Doors. Все права защищены.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
