import * as pages from "tns-core-modules/ui/page";
import * as frame from "tns-core-modules/ui/frame";
import * as stackModule from "tns-core-modules/ui/layouts/stack-layout";
import * as button from "tns-core-modules/ui/button";
import * as text from "tns-core-modules/ui/text-field";

export function createPage() {
    var page = new pages.Page();
    var stack = new stackModule.StackLayout();

    var btn = new button.Button();
    btn.text = "Page A ???";
    btn.on(button.Button.tapEvent, function () {
        var newPage = "tests/pages/navigation/pageA";
        frame.topmost().navigate(newPage);
    });
    stack.addChild(btn);

    var backBtn = new button.Button();
    backBtn.text = "BACK";
    backBtn.on(button.Button.tapEvent, function () {
        frame.topmost().goBack();
    });
    stack.addChild(backBtn);

    var txt = new text.TextField();
    txt.text = "text new C";
    stack.addChild(txt);

    page.content = stack;

    return page;
}
//export var Page = page;
