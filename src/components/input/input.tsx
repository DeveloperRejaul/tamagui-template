import { TextInput } from '@config'
import React from 'react'
import { Control, FieldValues, useController } from 'react-hook-form'

interface IInput {
    control: Control<FieldValues>;
    name: string;
    defaultValue?: string
}

export default function input({ name, control, defaultValue }: IInput) {
    const { field } = useController({ name, control, defaultValue })
    return (
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
        />
    )
}