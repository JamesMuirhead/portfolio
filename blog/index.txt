---
layout: default
title: Blog
permalink: /blog/
---

<section class="block">
  <h2>Blog</h2>

  {% for post in site.posts %}
    <article class="block">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <p class="byline">{{ post.date | date: "%-d %B %Y" }}</p>
      {% if post.excerpt %}
        <p class="lede">{{ post.excerpt | strip_html | truncate: 220 }}</p>
      {% endif %}
      <p><a class="btn" href="{{ post.url | relative_url }}">Read post</a></p>
    </article>
    <hr>
  {% endfor %}
</section>
