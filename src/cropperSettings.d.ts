import { CropperDrawSettings } from "./cropperDrawSettings";
export interface ICropperSettings {
    canvasWidth?: number;
    canvasHeight?: number;
    width?: number;
    height?: number;
    minWidth?: number;
    minHeight?: number;
    minWithRelativeToResolution?: boolean;
    croppedWidth?: number;
    croppedHeight?: number;
    touchRadius?: number;
    cropperDrawSettings?: any;
    noFileInput?: boolean;
    allowedFilesRegex?: RegExp;
    rounded: boolean;
    keepAspect: boolean;
    preserveSize: boolean;
}
export declare class CropperSettings implements ICropperSettings {
    canvasWidth: number;
    canvasHeight: number;
    width: number;
    height: number;
    minWidth: number;
    minHeight: number;
    minWithRelativeToResolution: boolean;
    responsive: boolean;
    croppedWidth: number;
    croppedHeight: number;
    cropperDrawSettings: CropperDrawSettings;
    touchRadius: number;
    noFileInput: boolean;
    fileType: string;
    allowedFilesRegex: RegExp;
    preserveSize: boolean;
    private _rounded;
    private _keepAspect;
    constructor();
    rounded: boolean;
    keepAspect: boolean;
}
