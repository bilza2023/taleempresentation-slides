export namespace Slide {
    let items: ({
        name: string;
        content: string;
        showAt: number;
        itemExtra: {
            step: number;
            startTime: number;
            endTime: number;
            fsStartTime: number;
            fsEndTime: number;
            code: string;
            type: string;
            sp: never[];
            selected: boolean;
            fs?: undefined;
            spVisibility?: undefined;
            fsVisibility?: undefined;
        };
        arr?: undefined;
        _id?: undefined;
    } | {
        name: string;
        content: string;
        showAt: number;
        itemExtra: {
            step: number;
            startTime: number;
            endTime: number;
            fsStartTime: number;
            fsEndTime: number;
            code: string;
            type: string;
            sp: {
                code: string;
                type: string;
            }[];
            fs: never[];
            spVisibility: boolean;
            fsVisibility: boolean;
            selected?: undefined;
        };
        arr: never[];
        _id: {
            $oid: string;
        };
    } | {
        name: string;
        content: string;
        showAt: number;
        itemExtra: {
            step: number;
            startTime: number;
            endTime: number;
            fsStartTime: number;
            fsEndTime: number;
            code: string;
            type: string;
            sp: {
                code: string;
                type: string;
            }[];
            fs: never[];
            spVisibility: boolean;
            fsVisibility: boolean;
            selected?: undefined;
        };
        arr: never[];
        _id: string;
    })[];
    let slideExtra: never[];
}
