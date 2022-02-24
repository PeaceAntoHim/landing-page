import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.label`
position: absolute;
`;

const Input = styled.input`
    position: absolute;
    right: 440px;
top: 1747px;
    
    $:checked + span {
        background-color: #F4BA00;

        $:before {
            left: 38px;
        }
    }
`;

const Slider = styled.span`
cursor: pointer;
height: 20px;
width: 40px;
border-radius: 100px;
position: absolute;
right: 440px;
top: 1747px;
background-color: #404040;
transition: background-color 0.2s;

&:before {
    content: "";
    position: absolute;
    left: 1px;  
    top: 1px;
    width: 17px;
    height: 17px;
    border-radius: 21px;
    transition:0.2s;
    background:#fff;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
`;



const Toggle = ({ onChange }) => (
        <InputWrapper>
            <Input type="checkbox" onChange={onChange} />
            <Slider />
        </InputWrapper>   
);

export default Toggle;