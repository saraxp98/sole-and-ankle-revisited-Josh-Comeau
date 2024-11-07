import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, MAX_QUERIES, MIN_QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import {Menu, Search, ShoppingBag} from "react-feather";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>

                    <UnstyledButton>
                        <ShoppingBag id="shoppingBagBtn"/>
                    </UnstyledButton>
                    <UnstyledButton>
                        <Search id="searchBtn"/>
                    </UnstyledButton>
                    <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                        <Menu id="menuBtn"/>
                    </UnstyledButton>
                </Nav>
                <Side id="side4Laptop"/>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0 48px;
    //background-color: crimson;

    @media ${MAX_QUERIES.phone} {
        gap: 1rem;
    }

    @media ${MIN_QUERIES.tablet} {
        gap: 2rem;

        #shoppingBagBtn, #searchBtn, #menuBtn {
            display: none;
        }
    }
`;

const Side = styled.div`
    flex: 1;

    @media ${MAX_QUERIES.tablet} {
        &#side4Laptop {
            display: none;
        }
    }
`;

const NavLink = styled.a`
    display: none;

    @media ${MIN_QUERIES.tablet} {
        display: block;
        font-size: 1.125rem;
        text-transform: uppercase;
        text-decoration: none;
        color: ${COLORS.gray[900]};
        font-weight: ${WEIGHTS.medium};

        &:first-of-type {
            color: ${COLORS.secondary};
        }
    }
`;

export default Header;
