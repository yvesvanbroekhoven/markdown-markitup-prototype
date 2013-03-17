$(document).on('click', '.markItUp .fullscreen', function(event) {
  var $markitup_wrapper = $(this).closest('.markItUp');
  $markitup_wrapper.addClass('fullscreen');
});

$(document).on('click', '.markItUp .close-fullscreen', function(event) {
  var $markitup_wrapper = $(this).closest('.markItUp');

  $markitup_wrapper.removeClass('fullscreen');
});

var markdown_settings = {
  nameSpace:          'markdown-editor', // Useful to prevent multi-instances CSS conflict
  previewParserPath:  'markitup/preview',
  onShiftEnter:       { keepDefault: false, openWith:'\n\n' },
  markupSet: [
    { name: 'Heading 2', key: '2', openWith: '## ', placeHolder: 'Your title here...', className: 'h2' },
    { name: 'Heading 3', key: '3', openWith: '### ', placeHolder: 'Your title here...', className: 'h3' },
    { name: 'Heading 4', key: '4', openWith: '#### ', placeHolder: 'Your title here...', className: 'h4' },
    { separator: '---' },
    { name: 'Bold', key: 'B', openWith: '**', closeWith: '**', className: 'bold' },
    { name: 'Italic', key: 'I', openWith: '_', closeWith: '_', className: 'italic' },
    { separator: '---' },
    { name: 'Preview', call: 'preview', className: "preview" },
    { name: 'Fullscreen', className: 'fullscreen' },
    { name: 'Close fullscreen', className: 'close-fullscreen' }
  ]
};

// Initialize
$('textarea').markItUp(markdown_settings);

// Initialize preview
$('.markItUpHeader .preview').trigger('mouseup');
