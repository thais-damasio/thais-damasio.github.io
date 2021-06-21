import styled from 'styled-components';

const Footer = styled.footer`
    text-align: center;
    margin-top: 10px;
    padding: 25px;
    font-weight: 300;
`;

function FooterSection() {
    return (	
        <Footer>
            Thaís Damásio&nbsp;•&nbsp;2021 <br/>
            <small>Theme inspired by <a href="https://codepen.io/creativetim/pen/mzVQrP">this</a> project</small>
        </Footer>
    );
}

export default FooterSection;
