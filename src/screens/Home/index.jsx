import { FlatList } from 'react-native'
import styled from 'styled-components/native'
import { Plant } from '../../components/Plant'
import {InfoPlantCard} from '../../components/InfoPlantCard'

const Container = styled.View`
    background-color: ${props => props.theme.background1};
    flex: 1;
    padding-top: 20px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size:30px;
    font-weight: bold;
    width: 50%;
    margin-left:34px;
    margin-right:34px;
`

const TopSection = styled.View`
    height: 225px;
    background-color: ${props => props.theme.background1};
`

const PlantsSection = styled.ScrollView`
    background-color: ${props => props.theme.background2};
    flex:1;
`
const PlantsSectionTitle = styled.Text`
    font-weight:bold;
    font-size:28px;
    color: ${props => props.theme.title};
`

export function Home(){
    return (
        <Container>
            <TopSection>
                <Title>A melhor rosa está no seu jardim!</Title>
            </TopSection>
            
            <PlantsSection>
                <PlantsSectionTitle>
                    Plantas recentes
                </PlantsSectionTitle>
                <FlatList 
                    data={[{variant:'yellow', title:'Amarelo'}, {variant:'red', title:'Vermelho'}, {variant:'blue', title:'Azul'}]}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <Plant 
                                {...item}
                            />
                        )
                    }}
                    keyExtractor={(data)=> data.title}
                    showsHorizontalScrollIndicator={false}
                />
                <FlatList 
                    data={[{title:'Título', description:'Descrição'}]}
                    renderItem={({item}) => {
                        return (
                            <InfoPlantCard 
                                {...item}
                            />
                        )
                    }}
                    keyExtractor={item => item.title}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{margin:10}}
                />
            </PlantsSection>
        </Container>
    )
}