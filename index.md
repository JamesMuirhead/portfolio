---
layout: default
title: Design
description: Game design portfolio and selected work.
---

<section class="block">
  <h2>Projects</h2>

  {% for p in site.projects %}
    <article class="block">
      <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>

      {% if p.thumb %}
        <img class="project-img" src="{{ p.thumb | relative_url }}" alt="{{ p.title }} thumbnail">
      {% endif %}

      {% if p.summary %}
        <p class="lede">{{ p.summary }}</p>
      {% endif %}

      <p class="links">
        <a class="btn" href="{{ p.url | relative_url }}">Learn more</a>
        {% if p.links %}
          {% for link in p.links %}
            <a class="btn" href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }}</a>
          {% endfor %}
        {% endif %}
      </p>
    </article>
    <hr>
  {% endfor %}
</section>
