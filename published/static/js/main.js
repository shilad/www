function loadCitations(data) {
    var info = $.csv.toObjects(data);
    var types = ['conference', 'journal', 'chapter', 'dissertation', 'tech'];
    for (var i = 0; i < types.length; i++) {
        loadCitationsWithType(info, types[i]);
    }
}

function loadCitationsWithType(info, type) {
    var source   = $("#" + type + "-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < info.length; i++) {
        if (info[i].type == type) {
            var html = template(info[i]);
            $(".pubtype.type-" + type + " .pubs ul").append(html);
        }
    }
}

$(document).ready(function() {
    $.get('/citations.csv?fooz', loadCitations);
});
