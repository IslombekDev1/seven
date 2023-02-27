import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TbHeart, TbMessageCircle2, TbUser } from "react-icons/tb"
import Container from '../../utils/Container';
import {RedirectButton} from '../../utils/Components';
import { useTranslation } from "react-i18next";
import {  useSelector } from "react-redux";
import i18n from "../../language/i18next";

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation();
  const createUserData = useSelector(state => state.createReducer);
  console.log(createUserData);
  return location.pathname.includes("/auth") ? <></> : (
    <header>
      <Container>
        <div className='header__wrapper'>
          <img className='header__logo' src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png" alt="" />
          <nav>
            <ul className='language-select'>
              {/*                     tilni o'zgartiradi */}
              <li className={localStorage.getItem("lang") == "uz" ? "active-lang" : ''} onClick={() => i18n.changeLanguage("uz")}>O'z</li>
              <span>|</span>
              <li className={localStorage.getItem("lang") == "ru" ? "active-lang" : ''} onClick={() => i18n.changeLanguage("ru")}>Ru</li>
            </ul>
            <Link to="/message" className='header__nav-link'>
              <TbMessageCircle2 />
              {t("header_message")}
            </Link>
            <Link to="/like" className='header__nav-link'>
              <TbHeart />
            </Link>
            <Link to="/auth/create" className='header__nav-link'>
              <TbUser />
              {
                createUserData.user?.email ? createUserData.user?.email : t("header_account")
              }
            </Link>
            <RedirectButton redirect="/create-new" title="E'lon berish" type="light" />
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
