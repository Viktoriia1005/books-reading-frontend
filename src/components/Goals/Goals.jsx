import {Description, InfoWrapper, Item, StatsItem, Text, Title, Wrapper,} from './Goals.styled';

const Goals = () => {
    const amountBooks = 3;
    const amountDays = 28;
    const booksLeft = 0;

    return (
        <>
            <Wrapper booksLeft={booksLeft}>
                <Title>Моя мета прочитати</Title>
                <InfoWrapper>
                    <StatsItem>
                        <Item>
                            <Text>{amountBooks}</Text>
                        </Item>
                        <Description>Кількість книжок</Description>
                    </StatsItem>
                    <StatsItem>
                        <Item>
                            <Text>{amountDays}</Text>
                        </Item>
                        <Description>Кількість днів</Description>
                    </StatsItem>
                    {!!booksLeft && (
                        <StatsItem>
                            <Item>
                                <Text booksLeft={booksLeft}>{booksLeft}</Text>
                            </Item>
                            <Description>Залишилось книжок</Description>
                        </StatsItem>
                    )}
                </InfoWrapper>
            </Wrapper>
        </>
    );
};

export default Goals;
