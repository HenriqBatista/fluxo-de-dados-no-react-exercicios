import {TitleHeader, Imagem, Nome} from './styled'

export const Header = ({inputFoto, inputNome}) => {

    return(
        <TitleHeader>
            <Imagem src = {inputFoto}/>
            <Nome>{inputNome}</Nome>
            Insta4
        </TitleHeader>
        
    )
}