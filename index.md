<section class="block">
  <h2>Projects</h2>

  {% assign items = site.projects | sort: 'title' %}
  {% for p in items %}
    <article class="list-item">
      <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>

      {% if p.thumb %}
        <img class="list-thumb" src="{{ p.thumb | relative_url }}" alt="{{ p.title | escape }} thumbnail">
      {% endif %}

      {% if p.summary %}
        <p class="summary">{{ p.summary }}</p>
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