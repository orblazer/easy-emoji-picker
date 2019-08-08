# Jquery

This is doc for jQuery version of **Easy Emoji Picker**

## Installation

1. Import `jquery.js` in your project

   **Optional :** import `style.css` for the basic style of picker

2. Create an `textarea` or `input` field
3. Add an button like

   ```html
   <input
     class="emojiPicker__picker"
     type="button"
     id="emojiPicker"
     value="😁"
   />
   ```

## Usage

- Without options :

  ```js
  $("#button").easyEmojiPicker("#target");
  ```

- With options :

  ```js
  $("#button").easyEmojiPicker($("#target"), {
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

  Options :

  - `faceList` (`string[]`) : This is an list of available emoji
  - `success` (`function`) : This is an function called when emoji has success added to target.
  - `error` (`function`) : This is an function called when error is throwed.
