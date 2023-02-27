---
title: Jennifer Harris' Books
section: Books
layout: base.njk
---



<div class="grid md:grid-cols-3 gap-5">
{% for b in books %}

<a href="{{ b.path }}">
<div class=" hover:bg-white pb-2">
<div class="flex flex-col md:h-80">
<img class="mt-auto px-6 py-4" src="/img/{{ b.path }}-cover.jpg"/>
</div>
<p class="text-center"><span class="italic font-bold">{{ b.title }}</span><br/>{{ b.pub }}</p>
</div>
</a>
{% endfor %}
</div>







