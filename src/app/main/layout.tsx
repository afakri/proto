'use client';
import { StateProvider } from '@/components/GlobalContext';
import { initialState, reducer } from '@/components/reducer';
import React from 'react'

type Props = {}

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            {children}
        </StateProvider>
    )
}

export default layout