<section class="block">
  <h2>Blog</h2>

  {% for post in site.posts %}
    <article class="list-item">
      {% if post.thumb %}
        <a class="thumb" href="{{ post.url | relative_url }}">
          <img src="{{ post.thumb | relative_url }}" alt="{{ post.title | escape }} thumbnail">
        </a>
      {% endif %}

      <div class="item-body">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        {% if post.summary %}
          <p class="summary">{{ post.summary }}</p>
        {% else %}
          {% if post.excerpt %}
            <p class="summary">{{ post.excerpt | strip_html | truncate: 220 }}</p>
          {% endif %}
        {% endif %}
        <p><a class="btn" href="{{ post.url | relative_url }}">Read post</a></p>
      </div>
    </article>
    <hr>
  {% endfor %}
</section>
