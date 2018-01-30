import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactComponentSetting } from 'ng-react-component';

@Component({
    selector: 'weui-image-setting',
    templateUrl: './weui-image-setting.html',
    styleUrls: ['./weui-image-setting.scss']
})
export class WeuiImageSettingComponent extends ReactComponentSetting<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2,
        fb: FormBuilder
    ) {
        super(_differs, _ele, _render, fb);
    }

    ngOnInit() {
        this.initStyleForm();
    }

    onStyleChange(res) { }

    onPropsChange() { }

    onStateChange() { }
}
