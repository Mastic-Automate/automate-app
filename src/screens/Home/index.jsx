import { FlatList } from 'react-native'
import { Plant } from '../../components/Plant'
import {InfoPlantCard} from '../../components/InfoPlantCard'

import {
    Container, 
    PlantsSection, 
    PlantsSectionTitle, 
    Title, 
    TopSection, 
    TopPlantImage,
    TopSectionCol1,
    TopSectionCol2
} from './styles'

import {appImages} from '../../global/images'

export function Home(){
    return (
        <Container>
            <TopSection>
                <TopSectionCol1>
                    <Title>A melhor rosa está no seu jardim!</Title>
                </TopSectionCol1>
                <TopSectionCol2>
                    <TopPlantImage 
                        source={appImages['plant1']}
                    />
                </TopSectionCol2>

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