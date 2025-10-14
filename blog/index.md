---
layout: default
title: Blog
permalink: /blog/
---

<section class="block">
  <h2>Blog</h2>

  {% for post in site.posts %}
    <article class="list-item">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>

      {% if post.thumb %}
        <a class="thumb-link" href="{{ post.url | relative_url }}" aria-label="{{ post.title }}">
          <img class="list-thumb" src="{{ post.thumb | relative_url }}" alt="{{ post.title | escape }} thumbnail">
        </a>
      {% endif %}

      {% if post.summary %}
        <p class="summary">{{ post.summary }}</p>
      {% else %}
        {% if post.excerpt %}
          <p class="summary">{{ post.excerpt | strip_html | truncate: 220 }}</p>
        {% endif %}
      {% endif %}

      <p class="links">
        <a class="btn" href="{{ post.url | relative_url }}">Read post</a>
        {% if post.links %}
          {% for link in post.links %}
            <a class="btn" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }}</a>
          {% endfor %}
        {% endif %}
      </p>
    </article>
    {% unless forloop.last %}<hr>{% endunless %}
  {% endfor %}
</section>
