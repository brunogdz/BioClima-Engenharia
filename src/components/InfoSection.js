import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

function InfoSection() {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>Titulo</h1>
                    <p>TextoUm</p>
                    <p>Texto</p>
                    <Button to="/services">Contrate-nos</Button>
                </ColumnLeft>
                <ColumnRight>
                    <img src="" alt="preços" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

const Section = styled.section``;

const Container = styled.div``;

const ColumnLeft = styled.div``;

const ColumnRight = styled.div``;

export default InfoSection
