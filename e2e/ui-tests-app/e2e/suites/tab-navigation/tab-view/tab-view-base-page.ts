import { AppiumDriver } from "nativescript-dev-appium";
import { PageObjectBaseModel } from "../../../page-object-base-model";
import { ElementCacheStrategy } from "./../../../helpers/navigation-helper";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";

export class TabViewBasePage extends PageObjectBaseModel {

    constructor(_driver: AppiumDriver, elementCacheStrategy?: ElementCacheStrategy) {
        super(_driver, ["tab-view"], elementCacheStrategy);
    }

    async init(subSuiteName: string) {
        this._naviagtionLinks.push(subSuiteName);
        await super.initSuite();
        this._driver.imageHelper.options.keepOriginalImageSize = true;
        this._driver.imageHelper.options.tolerance = 0;
        this._driver.imageHelper.options.toleranceType = ImageOptions.pixel;
    }
}