import { CentredContainer } from "../CentredContainer/CentredContainer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { RegisterInvitation } from "../RegisterInvitation/RegisterInvitation";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { Subscribe } from "../Subscribe/Subscribe";
import { Topbar } from "../Topbar/Topbar";

import SEARCH_ICON from "../../assets/search.svg";
import EMAIL_ICON from "../../assets/e-mail.svg";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useState } from "react";

export function Layout() {
  const [cartItems, setCartItems] = useState(() => {
    return localStorage["cartItems"]
      ? JSON.parse(localStorage["cartItems"])
      : [];
  });

  return (
    <>
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <MainContent>
          <RegisterInvitation />
          <CentredContainer>
            <Topbar>
              <Logo />
              <MainMenu />
              <InputWrapper
                icon={SEARCH_ICON}
                placeholder="Search for products..."
              />
              <IconMenu />
            </Topbar>
          </CentredContainer>
        </MainContent>
        <Outlet />
        <CentredContainer>
          <Subscribe>
            <InputWrapper
              icon={EMAIL_ICON}
              placeholder="Enter your email address"
            />
          </Subscribe>
        </CentredContainer>
        <Footer />
      </CartContext.Provider>
    </>
  );
}
