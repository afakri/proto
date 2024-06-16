'use client'
import CustomNode from '@/components/CustomNode/CustomNode';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog';
import { Input } from 'postcss';
import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background, Controls, MarkerType, MiniMap } from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
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
        id: '2', type: 'CustomNode', position: { x: 900, y: 300 }, data: {
            type: 'Work'
            , emoji: '🧰'
            , title: 'Launch push notifications',
            description: 'Push notifications will entice users to come back to our app more frequently.',
            status: 'Done'
        },

    },
    {
        id: '3', type: 'CustomNode', position: { x: 900, y: 600 }, data: {
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
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    const onNodeClick = (e, node) => {
        console.log(node)
    }

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                fitView
            >
                <Background className='bg-slate-200' color='black' />
                <MiniMap />
                <Controls />
            </ReactFlow>

        </div>
    );
}