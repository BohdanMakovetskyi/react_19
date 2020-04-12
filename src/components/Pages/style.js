import React, { Component } from 'react';

import styled from 'styled-components';

export const Img = styled.div`
    display: block;
    height: 45px;
    width: 45px;
    background: rgb(241, 42, 175);
    border-radius: 50%;
    padding-top: 5px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const Title = styled.h2`
    color: #fff;
`;

export const InputName = styled.input`
    background: rgb(43, 41, 41);
    border: ${props => props.border ? '1px solid green': props.empty ? '1px solid #6a6a6a' :'1px solid red'};
    border-radius:3px;
    padding: 10px 10px 10px 10px;
    width:115px;
    margin-bottom: 20px;
    color: #fff;
`;

export const Input = styled.input`
    background: rgb(43, 41, 41);
    border: ${props => props.border ? '1px solid green': (props.empty ? '1px solid #6a6a6a' :'1px solid red')};
    border-radius:3px;
    padding: 10px 10px 10px 10px;
    width:250px;
    margin-bottom: 20px;
    color: #fff;
`;

export const Check = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 150px;
    margin-bottom: 20px;
    margin-left: 120px;
`;

export const CheckBox = styled.input`
    margin-top: 15px;
`;

export const Paragraph = styled.p`
    color: #fff;
    margin: 0;
    font-size: 13px;
    margin-top: 10px;
`;

export const Button = styled.button`
    padding: 10px 5px 10px 5px;
    width: 270px;
    border: none;
    border-radius:5px;
    background: rgb(89, 197, 197);
    margin-bottom: 5px;
`;

export const Website = styled.span`
    display: block;
    margin-top: 30px;
    font-size:13px;
    color: rgb(199, 194, 194);
`;

export const Photo = styled.img`
    height: 35px;
    width: 35px;
`;