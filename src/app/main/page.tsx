
'use client'
import CustomNode from '@/components/CustomNode/CustomNode';
import { useStateValue } from '@/components/GlobalContext';
import { initialState, reducer } from '@/components/reducer';

import React, { useCallback, useContext, useMemo, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, MarkerType, MiniMap } from 'reactflow';

import 'reactflow/dist/style.css';

export const initialNodes = [
    {
        id: '1', type: 'CustomNode', position: { x: 0, y: 600 }, data: {
            type: 'Bet'
            , emoji: '😎'
            , title: 'Launch push notifications',
            description: 'Push notifications will entice users to come back to our app more frequently.',
            status: 'Done'
        },

    },
    {
        id: '2', type: 'CustomNode', position: { x: 900, y: 50 }, data: {
            type: 'Work'
            , emoji: '🧰'
            , title: 'Launch push notifications',
            description: 'Push notifications will entice users to come back to our app more frequently.',
            status: 'Done'
        },

    },
    {
        id: '3', type: 'CustomNode', position: { x: 900, y: 450 }, data: {
            type: 'Work'
            , emoji: '🧰'
            , title: 'Launch push notifications',
            description: 'Push notifications will entice users to come back to our app more frequently.',
            status: 'Done'
        },

    },
    {
        id: '4', type: 'CustomNode', position: { x: 900, y: 900 }, data: {
            type: 'Work'
            , emoji: '🧰'
            , title: 'Launch push notifications',
            description: 'Push notifications will entice users to come back to our app more frequently.',
            status: 'Done'
        },

    },
    {
        id: '5', type: 'CustomNode', position: { x: 1600, y: 600 }, data: {
            type: 'Metric / Input'
            , emoji: '🌡️'
            , title: 'Launch push notifications',
            description: 'Push notifications will entice users to come back to our app more frequently.',
            status: 'Done'
        },

    },
];
const initialEdges = [
    {
        id: 'horizontal-e1-2',
        source: '1',
        type: 'smoothstep',
        target: '2',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 50,
            height: 50,
        },
    },
    {
        id: 'horizontal-e1-3',
        source: '1',
        type: 'smoothstep',
        target: '3',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 50,
            height: 50,
        },
    },
    {
        id: 'horizontal-e1-4',
        source: '1',
        type: 'smoothstep',
        target: '4',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 50,
            height: 50,
        },

    },
    {
        id: 'horizontal-e3-5',
        source: '3',
        target: '5',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 50,
            height: 50,
        },
    },
]

export default function Page() {
    const nodeTypes = useMemo(() => ({ CustomNode: CustomNode }), []);
    const [{ items }, dispatch] = useStateValue();
    const [edges, setEdges] = useState(initialEdges);


    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={items}
                edges={edges}
                fitView
            >

                <Background className='bg-slate-200' color='black' />
                <MiniMap />
                <Controls />
            </ReactFlow>

        </div >
    );
}