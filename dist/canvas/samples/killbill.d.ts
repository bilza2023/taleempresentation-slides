export namespace Slide {
    let uuid: string;
    let startTime: number;
    let endTime: number;
    let type: string;
    let template: string;
    let soundFileType: string;
    let items: {
        uuid: string;
        name: string;
        content: string;
        showAt: number;
        hideAt: null;
        extra: {};
        arr: never[];
        itemExtra: {
            text: string;
            x: number;
            y: number;
            fontSize: number;
            iconSize: number;
            fontFamily: string;
            icon: string;
            showBg: boolean;
            iconOnTop: boolean;
            iconErrorX: number;
            iconErrorY: number;
            bgColor: string;
            translate: boolean;
            command: string;
            name: string;
            color: string;
            showAt: number;
            globalAlpha: number;
            gap: number;
            dash: number;
            shadowOffsetX: number;
            shadowOffsetY: number;
            shadowColor: string;
            shadowBlur: number;
        };
    }[];
    namespace slideExtra {
        let backgroundColor: string;
        let canvasWidth: number;
        let canvasHeight: number;
        let cellHeight: number;
        let cellWidth: number;
        let bgImg: string;
        let bgGlobalAlpha: number;
        let xFactor: number;
        let yFactor: number;
        let showGrid: boolean;
        let gridLineWidth: number;
        let gridLineColor: string;
    }
}
