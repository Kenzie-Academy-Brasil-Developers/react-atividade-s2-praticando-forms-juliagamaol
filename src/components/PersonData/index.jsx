import { Container } from "../Container/styles"
export const PersonData = ({newData}) => {
    
        return(
            <Container>
                <h2>Nome: {newData.name}</h2>
                <span>User: {newData.user}</span>
                <span>E-mail: {newData.email}</span>
            </Container>
        )
}