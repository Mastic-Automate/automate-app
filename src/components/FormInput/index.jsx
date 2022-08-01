import React from 'react'
import styled from 'styled-components/native'
import {Controller} from 'react-hook-form'

import {Input} from '../Input'

const ErrorText = styled.Text`
    color: ${props => props.theme.error};
    font-size:12px;
`

export function FormInput({control, name, error, ...textInputProps}){
    return (
        <>
            <Controller 
                name={name}
                control={control}
                render={({field:{onChange, value}}) => (
                    <Input 
                        onChangeText={onChange}
                        value={value}
                        {...textInputProps}
                    />
                )}
            />
            {error && (
                <ErrorText>
                    {error.message}
                </ErrorText>
            )}
        </>
    )
}