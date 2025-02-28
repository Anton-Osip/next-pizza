import { Container,  Title, TopBar} from "@/components/shared";

export default function Home() {
    return (
        <div>
            <Container className = {'mt-10'}>
                <Title text = {'Все пиццы'} size = {'lg'} className = {'font-extrabold'}/>
            </Container>
            <TopBar/>

            <div style = {{height: '3000px'}}></div>

        </div>
    );
}
