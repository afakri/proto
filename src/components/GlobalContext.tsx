import React, { createContext, useContext, useReducer, Dispatch, ReactNode } from 'react';

// Define the shape of the state
export interface Item {
    id: string,
    type: string,
    position: { x: number, y: number },
    data: {
        type: string,
        emoji: string,
        title: string,
        description:
        string,
        status: string,
    },
}

export interface State {
    items: Item[];
}

// Define action types
export type Action =
    | { type: 'ADD_ITEM'; payload: Item }
    | { type: 'UPDATE_ITEM'; payload: Item }
    | { type: 'UPDATE_ITEMS'; payload: Item[] }
    | { type: 'REMOVE_ITEM'; payload: { id: string } };

// Define the initial state
const initialState: State = {
    items: [],
};

// Create the context with the specified type
const StateContext = createContext<[State, Dispatch<Action>] | undefined>(undefined);

interface StateProviderProps {
    reducer: (state: State, action: Action) => State;
    initialState: State;
    children: ReactNode;
}

// Create a provider component
export const StateProvider = ({ reducer, initialState, children }: StateProviderProps) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Create a hook to use the state
export const useStateValue = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateValue must be used within a StateProvider');
    }
    return context;
};
