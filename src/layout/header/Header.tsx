import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";

export const Header = () => {
    return (
        <header>
            
            <Logo/>
            <Menu/>
        </header>
    );
};

