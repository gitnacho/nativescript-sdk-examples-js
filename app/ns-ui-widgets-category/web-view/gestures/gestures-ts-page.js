"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var platform_1 = require("tns-core-modules/platform");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("webViewSrc", "<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");
    vm.set("touchResult", "Touch: x: _ y: _");
    vm.set("panResult", "Pan: deltaX: _ deltaY: _");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onWebViewLoaded(webargs) {
    var webview = webargs.object;
    if (platform_1.isAndroid) {
        webview.android.getSettings().setDisplayZoomControls(false);
    }
}
exports.onWebViewLoaded = onWebViewLoaded;
function webViewTouch(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("touchResult", "Touch: x: " + args.getX().toFixed(3) + " y: " + args.getY().toFixed(3));
    console.log("Touch: x: " + args.getX().toFixed(3) + " y: " + args.getY().toFixed(3));
}
exports.webViewTouch = webViewTouch;
function webViewPan(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("panResult", "Pan: deltaX: " + args.deltaX.toFixed(3) + " deltaY: " + args.deltaY.toFixed(3));
    console.log("Pan: deltaX: " + args.deltaX.toFixed(3) + " deltaY: " + args.deltaY.toFixed(3));
}
exports.webViewPan = webViewPan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VzdHVyZXMtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlc3R1cmVzLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBNEQ7QUFLNUQsc0RBQW9EO0FBRXBELHdCQUErQixJQUFJO0lBQy9CLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLDhGQUE4RixDQUFDLENBQUM7SUFDckgsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFQRCx3Q0FPQztBQUVELHlCQUFnQyxPQUFPO0lBQ25DLElBQU0sT0FBTyxHQUFxQixPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pELEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ1osT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRSxDQUFDO0FBQ0wsQ0FBQztBQUxELDBDQUtDO0FBRUQsc0JBQTZCLElBQUk7SUFDN0IsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZUFBYSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxZQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUMsQ0FBQztJQUMxRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUxELG9DQUtDO0FBRUQsb0JBQTJCLElBQUk7SUFDM0IsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsa0JBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQ2hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBWSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO0FBQzVGLENBQUM7QUFMRCxnQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbi8vID4+IHdlYnZpZXctaW1wb3J0XHJcbmltcG9ydCB7V2ViVmlld30gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvd2ViLXZpZXdcIjtcclxuLy8gPDwgd2Vidmlldy1pbXBvcnRcclxuaW1wb3J0IHtpc0FuZHJvaWR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbi8vID4+IHdlYnZpZXctanMtZ2VzdHVyZXMtdHNcclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gYXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICB2bS5zZXQoXCJ3ZWJWaWV3U3JjXCIsIFwiPCFET0NUWVBFIGh0bWw+PGh0bWw+PGJvZHk+PGgxPk15IEZpcnN0IEhlYWRpbmc8L2gxPjxwPk15IGZpcnN0IHBhcmFncmFwaC48L3A+PC9ib2R5PjwvaHRtbD5cIik7XHJcbiAgICB2bS5zZXQoXCJ0b3VjaFJlc3VsdFwiLCBcIlRvdWNoOiB4OiBfIHk6IF9cIik7XHJcbiAgICB2bS5zZXQoXCJwYW5SZXN1bHRcIiwgXCJQYW46IGRlbHRhWDogXyBkZWx0YVk6IF9cIik7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XHJcbn1cclxuLy8gZGlzYWJsaW5nIHRoZSBXZWJWaWV3J3Mgem9vbSBjb250cm9sKHJlcXVpcmVkIG9ubHkgZm9yIEFuZHJvaWQpXHJcbmV4cG9ydCBmdW5jdGlvbiBvbldlYlZpZXdMb2FkZWQod2ViYXJncykge1xyXG4gICAgY29uc3Qgd2VidmlldzpXZWJWaWV3ID0gPFdlYlZpZXc+IHdlYmFyZ3Mub2JqZWN0O1xyXG4gICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICAgIHdlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldERpc3BsYXlab29tQ29udHJvbHMoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbi8vIHNldHRpbmcgdXAgVG91Y2ggZ2VzdHVyZSBjYWxsYmFjayBtZXRob2RcclxuZXhwb3J0IGZ1bmN0aW9uIHdlYlZpZXdUb3VjaChhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0LnBhZ2U7XHJcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICB2bS5zZXQoXCJ0b3VjaFJlc3VsdFwiLCBgVG91Y2g6IHg6ICR7YXJncy5nZXRYKCkudG9GaXhlZCgzKX0geTogJHthcmdzLmdldFkoKS50b0ZpeGVkKDMpfWApO1xyXG4gICAgY29uc29sZS5sb2coYFRvdWNoOiB4OiAke2FyZ3MuZ2V0WCgpLnRvRml4ZWQoMyl9IHk6ICR7YXJncy5nZXRZKCkudG9GaXhlZCgzKX1gKTtcclxufVxyXG4vLyBzZXR0aW5nIHVwIFBhbiBnZXN0dXJlIGNhbGxiYWNrIG1ldGhvZFxyXG5leHBvcnQgZnVuY3Rpb24gd2ViVmlld1BhbihhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0LnBhZ2U7XHJcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICB2bS5zZXQoXCJwYW5SZXN1bHRcIiwgYFBhbjogZGVsdGFYOiAke2FyZ3MuZGVsdGFYLnRvRml4ZWQoMyl9IGRlbHRhWTogJHthcmdzLmRlbHRhWS50b0ZpeGVkKDMpfWApO1xyXG4gICAgY29uc29sZS5sb2coYFBhbjogZGVsdGFYOiAke2FyZ3MuZGVsdGFYLnRvRml4ZWQoMyl9IGRlbHRhWTogJHthcmdzLmRlbHRhWS50b0ZpeGVkKDMpfWApO1xyXG59XHJcbi8vIDw8IHdlYnZpZXctanMtZ2VzdHVyZXMtdHNcclxuIl19