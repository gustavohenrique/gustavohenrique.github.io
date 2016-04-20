
(function($) {
    'use strict';

    getRepositories();
    getStackoverflowPosts();

    function getRepositories () {
        $.get('https://api.github.com/users/gustavohenrique/starred?page=1&per_page=5').then(showRepositories);
    }

    function showRepositories (repositories) {
        var div = $('#repositories');
        var html = '';
        for (var i = 0; i < repositories.length; i++) {
            var repository = repositories[i];
            html += '<div class="repository">';
            html += '<a class="name" href="' + repository.html_url + '" target="_blank">' + repository.full_name + '</a>';

            var language = repository.language || '';
            html += '<div class="language">' + language + '</div>';

            var description = repository.description || '';
            html += '<div class="description">' + description + '</div>';
            html += '</div>';
        }
        div.html(html);
    }

    function getStackoverflowPosts () {
        $.get('https://api.stackexchange.com/2.2/users/3730538/posts?order=desc&sort=activity&site=stackoverflow').then(showStackoverflowPosts);
    }

    function showStackoverflowPosts (response) {
        var posts = response.items;
        var div = $('#posts');
        var html = '';
        for (var i = 0; i < posts.length; i++) {
            var post = posts[i];
            html += '<div class="repository">';
            html += '<a class="name" href="' + post.link + '" target="_blank">' + post.post_id + '</a>';
            html += '</div>';
        }
        div.html(html);
    }

 })(jQuery);