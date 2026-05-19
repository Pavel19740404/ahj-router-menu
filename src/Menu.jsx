import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', label: 'Главная', end: true },
  { to: '/drift', label: 'Дрифт-такси' },
  { to: '/timeattack', label: 'Time Attack' },
  { to: '/forza', label: 'Forza Karting' },
];

function Menu() {
  return (
    <nav className="menu">
      {menuItems.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            isActive ? 'menu__item menu__item-active' : 'menu__item'
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
