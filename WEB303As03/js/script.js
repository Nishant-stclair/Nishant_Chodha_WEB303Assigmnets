function fetchTeamDataUsingGetJSON() {
    $.getJSON('team.json', function(data) {
        var teamContent = '';
        $.each(data, function(index, member) {
            teamContent += '<h2>' + member.name + '</h2>';
            teamContent += '<h5>' + member.position + '</h5>';
            teamContent += '<p>' + member.bio + '</p>';
        });
        $('#team').html(teamContent);
    });
}

function fetchTeamDataUsingAjax() {
    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#team').html('Loading...');
        },
        error: function() {
            $('#team').html('The content could not be retrieved.');
        },
        success: function(data) {
            var teamContent = '';
            $.each(data, function(index, member) {
                teamContent += '<h2>' + member.name + '</h2>';
                teamContent += '<h5>' + member.position + '</h5>';
                teamContent += '<p>' + member.bio + '</p>';
            });
            $('#team').html(teamContent);
        }
    });
}

$(document).ready(function() {
    fetchTeamDataUsingGetJSON();
});
