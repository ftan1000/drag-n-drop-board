import React from 'react';
import paper from './assets/paper.png';
import styled from "styled-components";

interface NewsItemProps {
    id: string;
    title: string;
    imageId: number;
}

const Item = styled.div`
    box-shadow: 0 0 5px 2px #CCCCCC;
    border-radius: 2px;
    background-color: #FFF;
    height: 70px;
    width: 450px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`;

const Content = styled.div`
    text-align: left;
    width: 100%;
    margin: 5px;
`;

const PreviewImage = styled.img`
    margin: 5px;
    border-radius: 2px;
`;

const TitleRow = styled.div`
    max-height: 40px;
    overflow: hidden;
`;
const Title = styled.div`
    line-height: 20px;
`;

const MetadataRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    font-size: 14px;
`;

const Author = styled.div`
    color: deepskyblue;
`;

const CreatedDate = styled.div`
    color: #CCCCCC;
`;
const Indicators = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex:1;
`;

const Dot = styled.div`
    margin: 10px 20px;
    height: 8px;
    width: 8px;
    background-color: #9ACD32;
    border-radius: 50%;
    display: inline-block;
    margin-top: auto;
`;

function NewsItem(props: NewsItemProps) {
    return (
        <Item>
            <PreviewImage src={`https://picsum.photos/id/${props.imageId}/200/200`}/>
            <Content>
                <TitleRow>
                    <Title>{props.title}</Title>
                </TitleRow>
                <MetadataRow>
                    <img alt="" src={paper} width="16" height="16"/>
                    <Author>Author</Author>
                    <CreatedDate>
                        2021-03-15 13:45
                    </CreatedDate>
                </MetadataRow>
            </Content>
            <Indicators>
                <Dot />
            </Indicators>
        </Item>
    );
}

export default NewsItem;
