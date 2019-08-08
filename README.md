# Easy Emoji picker

This is an easy emoji picker without images

## JQuery

### Installation

1. Import `script.js` (or `script.min.js`) in your project

   **Optional :** import `style.css` (or `style.min.css`) for the basic style of picker

2. Create an `textarea` or `input` field
3. Add button like

   ```html
   <input
     class="emojiPicker__picker"
     type="button"
     id="emojiPicker"
     value="😁"
   />
   ```

### Usage

Without options :

```js
$("#button").emojiInit("#target");
```

With options :

```js
$("#button").emojiInit("#target", {
  faceList: [
    "😁",
    "😂",
    "😃",
    "😄",
    "😉",
    "😊",
    "😍",
    "😘",
    "😲",
    "😷",
    "👈",
    "👉",
    "☝",
    "👆",
    "👇",
    "✌",
    "✋",
    "👌",
    "👍",
    "✊",
    "👊",
    "👋",
    "👏",
    "👐",
    "👣",
    "👀",
    "👂",
    "👃",
  ],
  success: function(emoji) {},
  error: function(emoji, error) {},
});
```
