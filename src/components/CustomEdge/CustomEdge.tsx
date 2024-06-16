import { BaseEdge, EdgeProps, getStraightPath } from 'reactflow';

type Props = {}

const CustomEdge = (props: EdgeProps) => {
    const { sourceX, sourceY, targetX, targetY } = props;

    const [edgePath] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return <BaseEdge path={edgePath} {...props} />;
}

export default CustomEdge