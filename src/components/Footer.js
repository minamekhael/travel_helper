import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2025 Travel Helper. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;