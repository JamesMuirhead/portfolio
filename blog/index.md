<section class="block">
  <h2>Blog</h2>

  {% for post in site.posts %}
    <article class="list-item">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>

      {% if post.thumb %}
        <img class="list-thumb" src="{{ post.thumb | relative_url }}" alt="{{ post.title | escape }} thumbnail">
      {% endif %}

      {% if post.summary %}
        <p class="summary">{{ post.summary }}</p>
      {% else %}
        {% if post.excerpt %}
          <p class="summary">{{ post.excerpt | strip_html | truncate: 220 }}</p>
        {% endif %}
      {% endif %}

      <p><a class="btn" href="{{ post.url | relative_url }}">Read post</a></p>
    </article>
    <hr>
  {% endfor %}
</section>
