import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiImageProps {
    src: string;
    children: any[];
}
@Component({
    selector: 'weui-image-preview',
    templateUrl: './weui-image-preview.html',
    styleUrls: ['./weui-image-preview.scss']
})
export class WeuiImagePreviewComponent extends ReactComponent<WeuiImageProps, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
