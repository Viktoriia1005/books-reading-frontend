import {btn, colors, input, mq} from '../../../baseStyles';
import {Rating, TextField} from '@mui/material';
import styled from '@emotion/styled';

export const Form = styled.form`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
`;

export const Title = styled.p`
    margin-bottom: 20px;

    ${mq.tablet} {
        margin-bottom: 12px;
    }
`;

export const StyledRating = styled(Rating)`
    margin-right: 10px;
`;

export const Label = styled.label`
    display: block;
    width: 100%;
`;

export const Input = styled.textarea`
    ${input};
    resize: none;
    display: inline-block;
    width: 100%;
    min-height: 170px;

    &:focus {
        box-shadow: none;
        border: 1px solid ${colors.mainBorder};
    }
`;

export const InputName = styled.p`
    margin-bottom: 8px;

    ${mq.tablet} {
        margin-bottom: 12px;
    }
`;

export const ErrWrapper = styled.div`
    color: ${colors.errorText};
    margin-bottom: 20px;
    font-size: 14px;

    ${mq.tablet} {
        display: flex;
        align-items: center;
    }
`;

export const Button = styled.button`
    ${btn};

    min-width: 96px;
    padding: 12px 14px;

    ${mq.tablet} {
        min-width: 130px;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 20px;

    ${mq.tablet} {
        gap: 28px;
    }
`;

export const YearPicker = styled(TextField)`
    & .MuiFormLabel-root {
        position: relative;
        font-size: 14px;
        color: ${colors.darkGrayText};
    }

    & input {
        ${input};
        margin: -1px;
        z-index: 10;
    }

    & fieldset {
        border: none;
    }

    & .MuiInputBase-root {
        ${input};
        border: none;
        padding: 0 16px 0 0;
        border-radius: 0;
        height: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const WrapYear = styled.div`
    margin-top: 8px;
    border: 1px solid ${colors.mainBorder};
    height: max-content;
`;
