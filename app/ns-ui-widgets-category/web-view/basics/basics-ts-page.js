"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var dialogs = require("tns-core-modules/ui/dialogs");
var web_view_1 = require("tns-core-modules/ui/web-view");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("webViewSrc", "https://docs.nativescript.org/");
    vm.set("result", "");
    vm.set("tftext", "https://docs.nativescript.org/");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onWebViewLoaded(webargs) {
    var page = webargs.object.page;
    var vm = page.bindingContext;
    var webview = webargs.object;
    vm.set("result", "WebView is still loading...");
    vm.set("enabled", false);
    webview.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        var message = "";
        if (!args.error) {
            message = "WebView finished loading of " + args.url;
        }
        else {
            message = "Error loading " + args.url + " : " + args.error;
        }
        vm.set("result", message);
        console.log("WebView message - " + message);
    });
}
exports.onWebViewLoaded = onWebViewLoaded;
function goBack(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var webview = page.getViewById("myWebView");
    if (webview.canGoBack) {
        webview.goBack();
        vm.set("enabled", true);
    }
}
exports.goBack = goBack;
function goForward(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var webview = page.getViewById("myWebView");
    if (webview.canGoForward) {
        webview.goForward();
    }
    else {
        vm.set("enabled", false);
    }
}
exports.goForward = goForward;
function submit(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var textField = args.object;
    var text = textField.text;
    vm.set("enabled", false);
    if (text.substring(0, 4) === "http") {
        vm.set("webViewSrc", text);
        textField.dismissSoftInput();
    }
    else {
        dialogs.alert("Please, add `http://` or `https://` in front of the URL string")
            .then(function () {
            console.log("Dialog closed!");
        });
    }
}
exports.submit = submit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQseURBQW9FO0FBSXBFLHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLGdDQUFnQyxDQUFDLENBQUM7SUFDdkQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBUEQsd0NBT0M7QUFFRCx5QkFBZ0MsT0FBTztJQUNuQyxJQUFNLElBQUksR0FBZ0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDOUMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixJQUFNLE9BQU8sR0FBc0IsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2hELEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpCLE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLElBQW1CO1FBQ3RELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxHQUFHLGlDQUErQixJQUFJLENBQUMsR0FBSyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sR0FBRyxtQkFBaUIsSUFBSSxDQUFDLEdBQUcsV0FBTSxJQUFJLENBQUMsS0FBTyxDQUFDO1FBQzFELENBQUM7UUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixPQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFsQkQsMENBa0JDO0FBRUQsZ0JBQXVCLElBQUk7SUFDdkIsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7QUFDTCxDQUFDO0FBUkQsd0JBUUM7QUFFRCxtQkFBMEIsSUFBSTtJQUMxQixJQUFNLElBQUksR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0MsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixJQUFNLE9BQU8sR0FBc0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztBQUNMLENBQUM7QUFURCw4QkFTQztBQUVELGdCQUF1QixJQUFJO0lBQ3ZCLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLElBQU0sU0FBUyxHQUEwQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JELElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDO2FBQzlFLElBQUksQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDO0FBZkQsd0JBZUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBzZXR0aW5nLXVybC13ZWJ2aWV3LXRzXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQge1dlYlZpZXcsIExvYWRFdmVudERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xyXG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgdm0uc2V0KFwid2ViVmlld1NyY1wiLCBcImh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL1wiKTtcclxuICAgIHZtLnNldChcInJlc3VsdFwiLCBcIlwiKTtcclxuICAgIHZtLnNldChcInRmdGV4dFwiLCBcImh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL1wiKTtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxufVxyXG4vLyBoYW5kbGluZyBXZWJWaWV3IGxvYWQgZmluaXNoIGV2ZW50XHJcbmV4cG9ydCBmdW5jdGlvbiBvbldlYlZpZXdMb2FkZWQod2ViYXJncykge1xyXG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPiB3ZWJhcmdzLm9iamVjdC5wYWdlO1xyXG4gICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xyXG4gICAgY29uc3Qgd2VidmlldzogV2ViVmlldyA9IDxXZWJWaWV3PiB3ZWJhcmdzLm9iamVjdDtcclxuICAgIHZtLnNldChcInJlc3VsdFwiLCBcIldlYlZpZXcgaXMgc3RpbGwgbG9hZGluZy4uLlwiKTtcclxuICAgIHZtLnNldChcImVuYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgIHdlYnZpZXcub24oV2ViVmlldy5sb2FkRmluaXNoZWRFdmVudCwgKGFyZ3M6IExvYWRFdmVudERhdGEpID0+IHtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgV2ViVmlldyBmaW5pc2hlZCBsb2FkaW5nIG9mICR7YXJncy51cmx9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gYEVycm9yIGxvYWRpbmcgJHthcmdzLnVybH0gOiAke2FyZ3MuZXJyb3J9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZtLnNldChcInJlc3VsdFwiLCBtZXNzYWdlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgV2ViVmlldyBtZXNzYWdlIC0gJHttZXNzYWdlfWApO1xyXG4gICAgfSk7XHJcbn1cclxuLy8gZ29pbmcgdG8gdGhlIHByZXZpb3VzIHBhZ2UgaWYgc3VjaCBpcyBhdmFpbGFibGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdvQmFjayhhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0LnBhZ2U7XHJcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICBjb25zdCB3ZWJ2aWV3OiBXZWJWaWV3ID0gPFdlYlZpZXc+IHBhZ2UuZ2V0Vmlld0J5SWQoXCJteVdlYlZpZXdcIik7XHJcbiAgICBpZiAod2Vidmlldy5jYW5Hb0JhY2spIHtcclxuICAgICAgICB3ZWJ2aWV3LmdvQmFjaygpO1xyXG4gICAgICAgIHZtLnNldChcImVuYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuLy8gZ29pbmcgZm9yd2FyZCBpZiBhIHBhZ2UgaXMgYXZhaWxhYmxlXHJcbmV4cG9ydCBmdW5jdGlvbiBnb0ZvcndhcmQoYXJncykge1xyXG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPiBhcmdzLm9iamVjdC5wYWdlO1xyXG4gICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xyXG4gICAgY29uc3Qgd2VidmlldzogV2ViVmlldyA9IDxXZWJWaWV3PiBwYWdlLmdldFZpZXdCeUlkKFwibXlXZWJWaWV3XCIpO1xyXG4gICAgaWYgKHdlYnZpZXcuY2FuR29Gb3J3YXJkKSB7XHJcbiAgICAgICAgd2Vidmlldy5nb0ZvcndhcmQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdm0uc2V0KFwiZW5hYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuLy8gY2hhbmdpbmcgV2ViVmlldyBzb3VyY2VcclxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdChhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0LnBhZ2U7XHJcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICBjb25zdCB0ZXh0RmllbGQ6IFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+IGFyZ3Mub2JqZWN0O1xyXG4gICAgY29uc3QgdGV4dCA9IHRleHRGaWVsZC50ZXh0O1xyXG4gICAgdm0uc2V0KFwiZW5hYmxlZFwiLCBmYWxzZSk7XHJcbiAgICBpZiAodGV4dC5zdWJzdHJpbmcoMCwgNCkgPT09IFwiaHR0cFwiKSB7XHJcbiAgICAgICAgdm0uc2V0KFwid2ViVmlld1NyY1wiLCB0ZXh0KTtcclxuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBkaWFsb2dzLmFsZXJ0KFwiUGxlYXNlLCBhZGQgYGh0dHA6Ly9gIG9yIGBodHRwczovL2AgaW4gZnJvbnQgb2YgdGhlIFVSTCBzdHJpbmdcIilcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8gPDwgc2V0dGluZy11cmwtd2Vidmlldy10c1xyXG4iXX0=