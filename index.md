<section class="block">

  {% assign items = site.projects | sort: 'title' %}
  {% for p in items %}
    <article class="list-item">
      <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>

      {% if p.thumb %}
        <a class="thumb-link" href="{{ p.url | relative_url }}" aria-label="{{ p.title }}">
          <img class="list-thumb" src="{{ p.thumb | relative_url }}" alt="{{ p.title | escape }} thumbnail">
        </a>
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
    {% unless forloop.last %}<hr>{% endunless %}
  {% endfor %}
</section>
