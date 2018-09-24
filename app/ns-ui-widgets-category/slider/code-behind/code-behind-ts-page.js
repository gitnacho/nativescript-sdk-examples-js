"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var slider_1 = require("tns-core-modules/ui/slider");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var stackLayout = page.getViewById("stackLayoutId");
    vm.set("slResult", 22);
    var options = {
        sourceProperty: "age",
        targetProperty: "value"
    };
    var sliderComponent = new slider_1.Slider();
    sliderComponent.bind(options, vm);
    vm.set("age", 22);
    sliderComponent.on("valueChange", function (args) {
        vm.set("slResult", args.object.value);
    });
    stackLayout.addChild(sliderComponent);
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBNEQ7QUFJNUQscURBQWtEO0FBR2xELHNCQUE2QixJQUFJO0lBQzdCLElBQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLElBQU0sV0FBVyxHQUE4QixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRWpGLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRXZCLElBQU0sT0FBTyxHQUFHO1FBQ1osY0FBYyxFQUFFLEtBQUs7UUFDckIsY0FBYyxFQUFFLE9BQU87S0FDMUIsQ0FBQztJQUNGLElBQU0sZUFBZSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDckMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEIsZUFBZSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxJQUFJO1FBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFXLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxXQUFXLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXRDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUF2QkQsb0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7U3RhY2tMYXlvdXR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbi8vID4+IHNsaWRlci1pbXBvcnQgXHJcbmltcG9ydCB7U2xpZGVyfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIjtcclxuLy8gPDwgc2xpZGVyLWltcG9ydFxyXG4vLyA+PiBjcmVhdGluZy1zbGlkZXItY29kZS10c1xyXG5leHBvcnQgZnVuY3Rpb24gb25QYWdlTG9hZGVkKGFyZ3MpIHtcclxuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT4gYXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCB2bSA9IG5ldyBPYnNlcnZhYmxlKCk7XHJcbiAgICBjb25zdCBzdGFja0xheW91dDogU3RhY2tMYXlvdXQgPSA8U3RhY2tMYXlvdXQ+IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzdGFja0xheW91dElkXCIpO1xyXG5cclxuICAgIHZtLnNldChcInNsUmVzdWx0XCIsIDIyKTtcclxuICAgIC8vIGNyZWF0aW5nIG5ldyBTd2l0Y2ggYW5kIGJpbmRpbmcgdGhlIHZhbHVlIHByb3BlcnR5XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIHNvdXJjZVByb3BlcnR5OiBcImFnZVwiLFxyXG4gICAgICAgIHRhcmdldFByb3BlcnR5OiBcInZhbHVlXCJcclxuICAgIH07XHJcbiAgICBjb25zdCBzbGlkZXJDb21wb25lbnQgPSBuZXcgU2xpZGVyKCk7XHJcbiAgICBzbGlkZXJDb21wb25lbnQuYmluZChvcHRpb25zLCB2bSk7XHJcbiAgICAvLyBzZXR0aW5nIHNsaWRlci52YWx1ZSB0byAyMlxyXG4gICAgdm0uc2V0KFwiYWdlXCIsIDIyKTtcclxuXHJcbiAgICBzbGlkZXJDb21wb25lbnQub24oXCJ2YWx1ZUNoYW5nZVwiLCAoYXJncykgPT4ge1xyXG4gICAgICAgIHZtLnNldChcInNsUmVzdWx0XCIsICg8U2xpZGVyPmFyZ3Mub2JqZWN0KS52YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdGFja0xheW91dC5hZGRDaGlsZChzbGlkZXJDb21wb25lbnQpO1xyXG5cclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxufVxyXG4vLyA8PCBjcmVhdGluZy1zbGlkZXItY29kZS10c1xyXG4iXX0=