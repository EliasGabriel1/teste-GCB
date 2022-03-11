import {ContainerButton,ButtonCadastro, ButtonLink} from './styled'

function index(){
    return(
        <ContainerButton>
            <ButtonLink href="#">Healthy Recipes</ButtonLink>
            <ButtonLink href="#">Blog</ButtonLink>
            <ButtonLink href="#">Join</ButtonLink>
            <ButtonCadastro href="/Cadastro">Register</ButtonCadastro>
        </ContainerButton>
    )
}

export default index;