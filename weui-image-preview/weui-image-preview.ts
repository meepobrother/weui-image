import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener,
    HostBinding
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiImageProps {
    src: string;
    children: any[];
    style: any;
}
export class WeuiImageDefault {
    src = '//placehold.it/100x100';
    children = [];
    style = {
        [`width.px`]: 100,
        [`height.px`]: 100
    };
    title = '图片';
    // 可拖拽
    drag = true;
    // 可放置
    drop = true;
    // 缩放
    scale = true;
    // move
    move = true;
}
@Component({
    selector: 'img.weui-image-preview',
    templateUrl: './weui-image-preview.html',
    styleUrls: ['./weui-image-preview.scss']
})
export class WeuiImagePreviewComponent extends ReactComponent<WeuiImageProps, any> {
    @HostBinding('attr.src') _src: string;
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    ngOnInit() {
        this.setStyle(this.props.style);
        this._src = this.props.src;
    }

    onPropsChange() { }

    onStateChange() { }
}
