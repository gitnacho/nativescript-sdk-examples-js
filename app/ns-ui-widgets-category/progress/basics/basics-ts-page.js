"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("progressValue", 10);
    vm.set("progressMaxValue", 100);
    setInterval(function () {
        var value = vm.get("progressValue");
        vm.set("progressValue", value + 2);
    }, 300);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onProgressLoaded(args) {
    var sliderComponent = args.object;
    sliderComponent.on("valueChange", function (pargs) {
        console.log("Old Value: " + pargs.oldValue);
        console.log("New Value: " + pargs.value);
    });
}
exports.onProgressLoaded = onProgressLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUFnRjtBQUloRix3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXBDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsV0FBVyxDQUFDO1FBQ1IsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDN0IsQ0FBQztBQVhELHdDQVdDO0FBRUQsMEJBQWlDLElBQUk7SUFDakMsSUFBTSxlQUFlLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkQsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxLQUF5QjtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLEtBQUssQ0FBQyxRQUFVLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLEtBQUssQ0FBQyxLQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCw0Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgUHJvcGVydHlDaGFuZ2VEYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7UHJvZ3Jlc3N9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb2dyZXNzXCJcclxuLy8gPj4gcHJvZ3Jlc3MtdmFsdWUtY2hhbmdlLWV2ZW50LXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOlBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIC8vIHNldCB1cCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSBwcm9ncmVzcyBjb21wb25lbnRzXHJcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICB2bS5zZXQoXCJwcm9ncmVzc1ZhbHVlXCIsIDEwKTtcclxuICAgIHZtLnNldChcInByb2dyZXNzTWF4VmFsdWVcIiwgMTAwKTtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHZtLmdldChcInByb2dyZXNzVmFsdWVcIik7XHJcbiAgICAgICAgdm0uc2V0KFwicHJvZ3Jlc3NWYWx1ZVwiLCB2YWx1ZSArIDIpO1xyXG4gICAgfSwgMzAwKTtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxufVxyXG4vLyBoYW5kbGUgdmFsdWUgY2hhbmdlXHJcbmV4cG9ydCBmdW5jdGlvbiBvblByb2dyZXNzTG9hZGVkKGFyZ3MpIHtcclxuICAgIGNvbnN0IHNsaWRlckNvbXBvbmVudDpQcm9ncmVzcyA9IDxQcm9ncmVzcz5hcmdzLm9iamVjdDtcclxuICAgIHNsaWRlckNvbXBvbmVudC5vbihcInZhbHVlQ2hhbmdlXCIsIChwYXJnczogUHJvcGVydHlDaGFuZ2VEYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE9sZCBWYWx1ZTogJHtwYXJncy5vbGRWYWx1ZX1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTmV3IFZhbHVlOiAke3BhcmdzLnZhbHVlfWApO1xyXG4gICAgfSk7XHJcbn1cclxuLy8gPDwgcHJvZ3Jlc3MtdmFsdWUtY2hhbmdlLWV2ZW50LXRzXHJcbiJdfQ==