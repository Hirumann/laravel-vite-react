import './Header.css';

function Header() {
    return (
        <header className="flex w-full px-24 justify-between content-center bg-gray-900 sticky top-0">
            <a href="#" className="py-4 uppercase text-4xl font-bold">Силушка</a>
            <nav className="flex flex-wrap content-center uppercase">
                <ul>
                    <li className="float-left ml-8">
                        <a className="nav__link" href="#">Главная</a>
                    </li>
                    <li className="float-left ml-8">
                        <a className="nav__link" href="#">Расписание</a>
                    </li>
                    <li className="float-left ml-8">
                        <a className="nav__link" href="#">О нас</a>
                    </li>
                    <li className="float-left ml-8">
                        <a className="nav__link" href="#">Контакты</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;