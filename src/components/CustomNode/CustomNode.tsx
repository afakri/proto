import React, { memo } from 'react';
import { Handle, NodeToolbar, Position } from 'reactflow';
import { Separator } from "@/components/ui/separator"
import { Badge } from '../ui/badge';

type Data = {
    data: {
        type: string,
        emoji: string,
        title: string,
        description: string,
        status: string,
        toolbarVisible: boolean,
        toolbarPosition: Position
    }
}

function CustomNode({ data }: Data) {
    return (
            <div className=" bg-white rounded-lg border-2 border-zinc-300 h-60">
                <div className="flex flex-col h-full">
                    <div className="flex px-2 py-3 h-8 items-center">
                        {data.emoji}
                        <div className='ml-2 font-medium text-lg'>{data.type}</div>
                    </div>
                    <Separator />
                    <div className='px-3 pt-5 h-5/6'>
                        <div className='font-bold mb-3 text-xl'>
                            {data.title}
                        </div>
                        <div >
                            <div className='font-medium mb-2'>
                                Goal/Hypothesis
                            </div>
                            {data.description}
                        </div>
                    </div>
                    <Separator />
                    <div className='px-2 font-medium py-3 flex flex-row justify-between text-lg'>
                        Status
                        <Badge className='bg-green-500' >{data.status}</Badge>
                    </div>
                </div>
                <Handle
                    type="target"
                    position={Position.Left}
                // isConnectable={isConnectable}
                />
                <Handle
                    type="source"
                    position={Position.Right}
                    id="a"
                    style={{ background: '#555' }}

                // isConnectable={isConnectable}
                />


            </div>
    );
}

export default memo(CustomNode);
