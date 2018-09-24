"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = observable_1.fromObject({
        title: "ActionBar's Navigation Button demo"
    });
}
exports.onNavigatingTo = onNavigatingTo;
function onNavBtnTap(args) {
    console.log("Navigation button tapped!");
    var navigationButton = args.object;
    var frame = navigationButton.page.frame;
    frame.goBack();
}
exports.onNavBtnTap = onNavBtnTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1idXR0b24tdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tYnV0dG9uLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrREFBeUU7QUFNekUsd0JBQStCLElBQWU7SUFDMUMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLHVCQUFVLENBQUM7UUFDN0IsS0FBSyxFQUFFLG9DQUFvQztLQUM5QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBTEQsd0NBS0M7QUFFRCxxQkFBNEIsSUFBc0I7SUFFOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBRXpDLElBQU0sZ0JBQWdCLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkQsSUFBTSxLQUFLLEdBQVUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNqRCxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQVBELGtDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gYWN0aW9uLWJhci1uYXYtYnRuLXRzXHJcbmltcG9ydCB7IEV2ZW50RGF0YSwgZnJvbU9iamVjdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBGcmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IGZyb21PYmplY3Qoe1xyXG4gICAgICAgIHRpdGxlOiBcIkFjdGlvbkJhcidzIE5hdmlnYXRpb24gQnV0dG9uIGRlbW9cIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdkJ0blRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICAvLyBUaGlzIGNvZGUgd2lsbCBiZSBjYWxsZWQgb25seSBpbiBBbmRyb2lkLlxyXG4gICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIGJ1dHRvbiB0YXBwZWQhXCIpO1xyXG5cclxuICAgIGNvbnN0IG5hdmlnYXRpb25CdXR0b24gPSA8TmF2aWdhdGlvbkJ1dHRvbj5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IGZyYW1lID0gPEZyYW1lPm5hdmlnYXRpb25CdXR0b24ucGFnZS5mcmFtZTtcclxuICAgIGZyYW1lLmdvQmFjaygpO1xyXG59XHJcbi8vIDw8IGFjdGlvbi1iYXItbmF2LWJ0bi10c1xyXG4iXX0=