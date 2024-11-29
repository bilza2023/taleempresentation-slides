export default function getNewItem(): {
    name: string;
    content: string;
    itemExtra: {
        startTime: number;
        endTime: number;
        code: string;
        type: string;
        sp: never[];
    };
};
