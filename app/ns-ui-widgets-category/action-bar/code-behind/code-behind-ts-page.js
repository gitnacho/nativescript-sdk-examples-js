"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_bar_1 = require("tns-core-modules/ui/action-bar");
function onLoaded(args) {
    var page = args.object;
    var newActionBar = new action_bar_1.ActionBar();
    newActionBar.title = "Code-Behind ActionBar";
    var newNavigaitonButton = new action_bar_1.NavigationButton();
    newNavigaitonButton.text = "Go Back";
    newActionBar.navigationButton = newNavigaitonButton;
    page.actionBar = newActionBar;
    page.actionBarHidden = false;
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1iZWhpbmQtdHMtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvZGUtYmVoaW5kLXRzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBNkU7QUFHN0Usa0JBQXlCLElBQWU7SUFDcEMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUUvQixJQUFNLFlBQVksR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztJQUNyQyxZQUFZLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO0lBQzdDLElBQU0sbUJBQW1CLEdBQUcsSUFBSSw2QkFBZ0IsRUFBRSxDQUFDO0lBQ25ELG1CQUFtQixDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDckMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO0lBRXBELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLENBQUM7QUFYRCw0QkFXQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGFjdGlvbmJhci1jb2RlLWJlaGluZC10c1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgQWN0aW9uQmFyLCBOYXZpZ2F0aW9uQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgIGNvbnN0IG5ld0FjdGlvbkJhciA9IG5ldyBBY3Rpb25CYXIoKTtcclxuICAgIG5ld0FjdGlvbkJhci50aXRsZSA9IFwiQ29kZS1CZWhpbmQgQWN0aW9uQmFyXCI7XHJcbiAgICBjb25zdCBuZXdOYXZpZ2FpdG9uQnV0dG9uID0gbmV3IE5hdmlnYXRpb25CdXR0b24oKTtcclxuICAgIG5ld05hdmlnYWl0b25CdXR0b24udGV4dCA9IFwiR28gQmFja1wiO1xyXG4gICAgbmV3QWN0aW9uQmFyLm5hdmlnYXRpb25CdXR0b24gPSBuZXdOYXZpZ2FpdG9uQnV0dG9uO1xyXG5cclxuICAgIHBhZ2UuYWN0aW9uQmFyID0gbmV3QWN0aW9uQmFyO1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxufVxyXG4vLyA8PCBhY3Rpb25iYXItY29kZS1iZWhpbmQtdHNcclxuIl19