
document.addEventListener("DOMContentLoaded", function() {
  if (!window.hljs) return;

  hljs.registerLanguage('glimmr', function(hljs) {
    return {
      keywords: {
        keyword: 'fn when if else where import type module',
        literal: 'Number String Unit Boolean',
        built_in: 'true false'
      },
      contains: [
        hljs.COMMENT('//', '$'),
        hljs.COMMENT('/\\*', '\\*/'),
        { className: 'string', begin: '"', end: '"' },
        { className: 'number', begin: '\\b\\d+(\\.\\d+)?\\b' },
      ]
    };
  });

  hljs.highlightAll(); // Re-highlight all code blocks
  console.log("Custom language loaded: glimmr");
});

