export namespace Slide {
    let items: ({
        name: string;
        content: string;
        showAt: number;
        itemExtra: {
            startTime: number;
            endTime: number;
            code: string;
            type: string;
            sp: never[];
        };
        _id?: undefined;
    } | {
        name: string;
        content: string;
        showAt: number;
        itemExtra: {
            startTime: number;
            endTime: number;
            code: string;
            type: string;
            sp: {
                code: string;
                type: string;
            }[];
        };
        _id: {
            $oid: string;
        };
    } | {
        name: string;
        content: string;
        showAt: number;
        itemExtra: {
            startTime: number;
            endTime: number;
            code: string;
            type: string;
            sp: {
                code: string;
                type: string;
            }[];
        };
        _id: string;
    })[];
    let slideExtra: never[];
}
