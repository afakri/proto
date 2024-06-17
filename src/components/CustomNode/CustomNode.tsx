import React, { memo, useState } from 'react';
import { Handle, NodeToolbar, Position } from 'reactflow';
import { Separator } from "@/components/ui/separator"
import { Badge } from '../ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil } from 'lucide-react';
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
    const [formdata, setformdata] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setformdata((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formdata);
        // You can now use the form data (e.g., send it to an API)
    };
    return (
        <Dialog>
            <div className=" bg-white rounded-lg border-2 border-zinc-300 h-96">
                <div className="flex flex-col h-full">
                    <div className="flex px-2 py-3 h-1/5 justify-space items-center">
                        <div className='flex w-full items-center'>

                            {data.emoji}
                            <div className='ml-2 font-medium text-lg'>{data.type}</div>
                        </div>
                        <DialogTrigger asChild>
                            <Pencil className='cursor-pointer' />
                        </DialogTrigger>
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

            </div >
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit Node</DialogTitle>
                        <DialogDescription>
                            Make changes to the node here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Title
                            </Label>
                            <Input id="title" value={data.title} onChange={handleChange} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Input id="description" value={data.description} onChange={handleChange} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default memo(CustomNode);
