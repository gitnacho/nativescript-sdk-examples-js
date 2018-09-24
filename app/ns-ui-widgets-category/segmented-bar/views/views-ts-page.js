"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("prop", 0);
    vm.set("sbSelectedIndex", 0);
    vm.set("visibility1", true);
    vm.set("visibility2", false);
    vm.set("visibility3", false);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function sbLoaded(args) {
    var segmentedBarComponent = args.object;
    segmentedBarComponent.on("selectedIndexChange", function (sbargs) {
        var page = sbargs.object.page;
        var vm = page.bindingContext;
        var selectedIndex = sbargs.object.selectedIndex;
        vm.set("prop", selectedIndex);
        switch (selectedIndex) {
            case 0:
                vm.set("visibility1", true);
                vm.set("visibility2", false);
                vm.set("visibility3", false);
                break;
            case 1:
                vm.set("visibility1", false);
                vm.set("visibility2", true);
                vm.set("visibility3", false);
                break;
            case 2:
                vm.set("visibility1", false);
                vm.set("visibility2", false);
                vm.set("visibility3", true);
                break;
            default:
                break;
        }
    });
}
exports.sbLoaded = sbLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3MtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXdzLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBOEQ7QUFJOUQsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFdEMsSUFBTSxFQUFFLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBWEQsd0NBV0M7QUFFRCxrQkFBeUIsSUFBSTtJQUV6QixJQUFNLHFCQUFxQixHQUFnQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZFLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLE1BQXFDO1FBQ2xGLElBQU0sSUFBSSxHQUFrQixNQUFNLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUNoRCxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLElBQU0sYUFBYSxHQUFrQixNQUFNLENBQUMsTUFBTyxDQUFDLGFBQWEsQ0FBQztRQUNsRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQztnQkFDRixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQztZQUNWO2dCQUNJLEtBQUssQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUE1QkQsNEJBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHtTZWdtZW50ZWRCYXIsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCI7XHJcbi8vID4+IHNlZ21lbnRlZC1iYXItdmlldy1jb2RlLXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+IGFyZ3Mub2JqZWN0O1xyXG4gICAgLy8gc2V0IHVwIHRoZSBTZWxlY3RlZEJhciBzZWxlY3RlZCBpbmRleFxyXG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG4gICAgdm0uc2V0KFwicHJvcFwiLCAwKTtcclxuICAgIHZtLnNldChcInNiU2VsZWN0ZWRJbmRleFwiLCAwKTtcclxuICAgIHZtLnNldChcInZpc2liaWxpdHkxXCIsIHRydWUpO1xyXG4gICAgdm0uc2V0KFwidmlzaWJpbGl0eTJcIiwgZmFsc2UpO1xyXG4gICAgdm0uc2V0KFwidmlzaWJpbGl0eTNcIiwgZmFsc2UpO1xyXG5cclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNiTG9hZGVkKGFyZ3MpIHtcclxuICAgIC8vIGhhbmRsZSBzZWxlY3RlZCBpbmRleCBjaGFuZ2VcclxuICAgIGNvbnN0IHNlZ21lbnRlZEJhckNvbXBvbmVudDogU2VnbWVudGVkQmFyID0gPFNlZ21lbnRlZEJhcj4gYXJncy5vYmplY3Q7XHJcbiAgICBzZWdtZW50ZWRCYXJDb21wb25lbnQub24oXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIChzYmFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9ICg8U2VnbWVudGVkQmFyPnNiYXJncy5vYmplY3QpLnBhZ2U7XHJcbiAgICAgICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSAoPFNlZ21lbnRlZEJhcj5zYmFyZ3Mub2JqZWN0KS5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIHZtLnNldChcInByb3BcIiwgc2VsZWN0ZWRJbmRleCk7XHJcbiAgICAgICAgc3dpdGNoIChzZWxlY3RlZEluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkxXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdm0uc2V0KFwidmlzaWJpbGl0eTJcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdm0uc2V0KFwidmlzaWJpbGl0eTNcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkxXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkyXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdm0uc2V0KFwidmlzaWJpbGl0eTNcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkxXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkyXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHZtLnNldChcInZpc2liaWxpdHkzXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyA8PCBzZWdtZW50ZWQtYmFyLXZpZXctY29kZS10c1xyXG4iXX0=