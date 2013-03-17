//
// Go fullscreen
//
$(document).on('click', '.markItUp .fullscreen', function(event) {
  var $markitup_wrapper = $(this).closest('.markItUp');
  $markitup_wrapper.addClass('fullscreen');
});


//
// Close fullscreen
//
$(document).on('click', '.markItUp .close-fullscreen', function(event) {
  var $markitup_wrapper = $(this).closest('.markItUp');

  $markitup_wrapper.removeClass('fullscreen');
});


//
// Toggle Markdown cheatsheet
//
$(document).on('click', '.markItUp .markdown-cheatsheet', function(event) {
  var $markdown_cheatsheet = $('#markdown-cheatsheet');

  if ( $markdown_cheatsheet.is(':visible') ) {
    $markdown_cheatsheet.fadeOut(300);

  } else {
    $markdown_cheatsheet.fadeIn(300);

  }
});


//
// Mark It Up settings
//
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
    { name: 'Link', key: 'L', openWith: '[[![Link text]!]', closeWith: ']([![Url:!:http://]!])', className: 'add-link' },
    { separator: '---' },
    { name: 'Preview', call: 'preview', className: "preview" },
    { name: 'Fullscreen', className: 'fullscreen' },
    { name: 'Close fullscreen', className: 'close-fullscreen' },
    { separator: '---' },
    { name: 'Markdown cheatsheet', className: 'markdown-cheatsheet' }
  ]
};


// Initialize
$('textarea').markItUp(markdown_settings);

// Initialize preview
$('.markItUpHeader .preview').trigger('mouseup');

// Load Markdown syntax cheatsheet
$.get('/markdown-cheatsheet', function(data) {
  var $div = $('<div id="markdown-cheatsheet" />');

  $div
    .html( data )
    .hide();

  $div.appendTo('body');
});
