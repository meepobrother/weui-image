import { WeuiImagePreviewComponent, WeuiImageDefault } from './weui-image-preview/weui-image-preview';
import { WeuiImageSettingComponent } from './weui-image-setting/weui-image-setting';

export const both = {
    'weui-image': {
        setting: WeuiImageSettingComponent,
        view: WeuiImagePreviewComponent,
        default: WeuiImageDefault
    }
};

export const preview = {
    'weui-image': WeuiImagePreviewComponent
};

export const entrys = [
    WeuiImagePreviewComponent,
    WeuiImageSettingComponent
];

export { WeuiImageProps } from './weui-image-preview/weui-image-preview';
