import { FooterContainer } from './styles';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='rodape'>
                <ul>
                    <li><a href='https://github.com/adrielCarmo' target={'_blank'}><i class="fa-brands fa-github"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/adriel-carmo/' target={'_blank'}><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href='https://www.instagram.com/adriell_carmoo/' target={'_blank'}><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                <i class="fa-solid fa-copyright"></i> Todos os direitos reservados - 2022
                <p><i>by Adriel Carmo</i></p>
            </div>
        </FooterContainer>
    );
}

export default Footer;