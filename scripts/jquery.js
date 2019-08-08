(function ($) {
  $.fn.easyEmojiPicker = function (target, options) {
    target = $(target)
    const button = $(this)

    options = $.extend(
      {
        faceList: [
          '😁',
          '😂',
          '😃',
          '😄',
          '😉',
          '😊',
          '😍',
          '😘',
          '😲',
          '😷',
          '👈',
          '👉',
          '☝',
          '👆',
          '👇',
          '✌',
          '✋',
          '👌',
          '👍',
          '✊',
          '👊',
          '👋',
          '👏',
          '👐',
          '👣',
          '👀',
          '👂',
          '👃'
        ],
        success: function (emoji) {},
        error: function (emoji, error) {
          console.error(emoji, error)
        }
      },
      options || {}
    )

    // Check target
    if (typeof target !== 'object' || target !== Object(target) || target.length <= 0) {
      const error = new Error('target object is undefined')
      if (typeof options.error === 'function') {
        options.error(null, error)
      } else {
        throw error
      }
      return
    }

    // Create emoji list
    let emojiListHtml = ''
    options.faceList.forEach(function (emoji, index) {
      emojiListHtml += `<i id="emoji-${index}" class="emojiPicker-menu__emoji" data-emoji="${emoji}">${emoji}</i>`
    })

    // Create emoji picker
    const menu = $(`<div class="emojiPicker-menu">${emojiListHtml}</div>`)
    button.after(menu)
    button.on('click', function () {
      menu.addClass('emojiPicker-menu--open')
    })

    // Close the menu if click outside
    $('body').on('click', function (event) {
      if (
        $(event.target).closest(menu).length === 0 &&
        $(event.target).closest(button).length === 0
      ) {
        menu.removeClass('emojiPicker-menu--open')
      }
    })

    // Add emoji
    menu.children('i[data-emoji]').on('click', function (event) {
      event.preventDefault()
      const emoji = $(this).attr('data-emoji')

      try {
        // Close menu
        menu.removeClass('emojiPicker-menu--open')

        // Add emoji on target
        const htmlTarget = target.get(0)
        if (document.all && htmlTarget.createTextRange && htmlTarget.caretPos) {
          const cursor = htmlTarget.caretPos
          cursor.text =
            cursor.text.charAt(cursor.text.length - 1) === ''
              ? emoji + ''
              : emoji
        } else if (htmlTarget.setSelectionRange) {
          const selectionStart = htmlTarget.selectionStart
          const selectionEnd = htmlTarget.selectionEnd
          const before = htmlTarget.value.substring(0, selectionStart)
          const after = htmlTarget.value.substring(selectionEnd)
          const emojiLength = emoji.length

          htmlTarget.value = before + emoji + after
          htmlTarget.focus()
          htmlTarget.setSelectionRange(
            selectionStart + emojiLength,
            selectionStart + emojiLength
          )
          htmlTarget.blur()
        } else {
          htmlTarget.value += emoji
        }

        if (typeof options.success === 'function') {
          options.success($(this))
        }
      } catch (error) {
        if (typeof options.error === 'function') {
          options.error($(this), error)
        } else {
          throw error
        }
      }
    })
  }
})(jQuery)
