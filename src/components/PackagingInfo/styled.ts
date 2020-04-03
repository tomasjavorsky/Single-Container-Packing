import styled from "styled-components";

export const ContainerInfoWrapper = styled.div`
    display: flex;
    margin: 24px;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 24px;
`

export const InfoTitle = styled.h3`
    margin: 0 0 16px 0;
`

export const InfoItem = styled.p`
    color: ${({ theme }) => theme.colors.shadow};
`

export const InfoItemUnderline = styled(InfoItem)`
    border-bottom: 1px solid ${({ theme }) => theme.colors.shadow};
    padding-bottom: 16px;
`