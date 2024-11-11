/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogContent, DialogOverlay} from '@reach/dialog';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import {COLORS, WEIGHTS} from "../../constants";
// import '@reach/dialog/styles.css' //--> NON USO GLI STILI PREDEFINITI PER CUSTOMIZZARE LA DIALOG!
const MobileMenu = ({isOpen, onDismiss}) => {

    return (
        <Overlay isOpen={isOpen} onClose={onDismiss}>
            <MyDialogContent>
                <MyCloseBtn onClick={onDismiss}><Icon id="close"/></MyCloseBtn>

                <Navbar>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Navbar>

                <Footer>
                    <FooterLink href="/terms">Terms and Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/contact">Contact Us</FooterLink>
                </Footer>
            </MyDialogContent>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: hsla(255deg 5% 40% / 0.8);
`;

const MyDialogContent = styled(DialogContent)`
    background-color: ${COLORS.white};
    width: 80%;
    height: 100%;
    margin-left: auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MyCloseBtn = styled(UnstyledButton)`
    position: absolute;
    top: 1.625rem;
    right: 1rem;
`;

const Navbar = styled.nav`
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    flex-direction: column;
    gap: 1.375rem;
`;

const NavLink = styled.a`
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
    font-size: 1.125rem;
    text-transform: uppercase;
    line-height: 1.32rem;

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

const Footer = styled.footer`
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
`;

const FooterLink = styled.a`
    text-decoration: none;
    // font-weight: ${WEIGHTS.normal};
    color: ${COLORS.gray[700]};
    font-size: 0.875rem;
    line-height: 1.027rem;
`;

export default MobileMenu;
