import styled from 'styled-components';

const LattesURL = "http://lattes.cnpq.br/5329322971923209"
const PinterestURL = "https://br.pinterest.com/damasiothais/meus-desenhos/";
const FernandoURL = "https://homepages.dcc.ufmg.br/~fernando/";
const UFMGURL = "https://ufmg.br/";
const CompilersLabURL = "http://lac.dcc.ufmg.br/";

const Summary = styled.div`
    text-align: justify;
    font-weight: 300;
`;

function SummaryComponent() {
    return (
        <Summary>
            <p>
                Hi! I am pursuing my master's degree in Computer Science at <a href={UFMGURL}>UFMG</a> (Federal University of Minas Gerais) and I am working in the <a href={CompilersLabURL}>Compilers Lab</a> under the supervision of <a href={FernandoURL}>Fernando M. Q. Pereira</a>. I love studying and I have a passion for the academic environment. Currently, I am focusing my efforts in researches in the compilers and programming languages area, which sparked my interest. <br />
                        I am motivated by challenges and I love innovating 🚀 <br />
                        A little bit about me:
                    </p>
            <ul>
                <li>
                    You can see my <a href={LattesURL}>lattes</a> (Brazilian system that contains the resume of my contributions in science, technology and innovation)
                        </li>
                <li>
                    I also love drawing and I spend a little bit of my time making some creations. You can see my <a href={PinterestURL}>drawings</a>
                </li>
            </ul>
            <p>
                It is a pleasure to have you here!
                    </p>
        </Summary>
    );
}

export default SummaryComponent;
