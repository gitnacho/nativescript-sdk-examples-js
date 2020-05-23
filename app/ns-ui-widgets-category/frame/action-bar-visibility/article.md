Тhе `actionBarVisibility` is a property that controls the visibility of the Navigation Bar in iOS and the Action Bar in Android for the current `Frame`. It should be set directly to the `Frame` and has three option values `auto`, `never`, `always`.

* `auto` - this is the default `actionBarVisibility` value and allows to specify the `ActionBar` visibility for each `Page` individually.

* `never` - this value hides the `ActionBar` for the current `Frame`.

* `always` - this one specifies that the `ActionBar` component should always be displayed for the current `Frame`. If a `Page` doesn't have a declared `ActionBar`, a default one will be displayed.

> **Note**: If you have set up some of the two properties(`never`, `always`) and you need to hide/show the `ActionBar` immediately in the currently loaded page, you need to set `Page`'s `actionBarHidden` property to `true` or `false`.

<snippet id='frame-action-bar-visibility'/>
