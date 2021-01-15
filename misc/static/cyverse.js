/* Version 2.0, May 2020 */

$(document).ready(function() {
    $('table.docutils').tablesorter();
});
$(document).ready(function () {
    $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
});
