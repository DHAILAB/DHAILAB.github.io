---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        DHAI Lab
      image:
        filename: YRH_gnn.png
      text: |
        <br>
        
        The Wang Research Group (Data-Driven & Human-Centered AI in Healthcare and Medical Research [DHAI] Lab) works on developing and applying Machine Learning, Data Mining and Statistical methods on healthcare and (bio)medical data. Inspired by the human factors approach, DHAI lab also designs and develops Human-Centered Artificial Intelligence algorithms and tools for users to integrate, visualize, analyze, and interpret health data in order to improve the interoperability and accessibility of AI-assisted healthcare decision support. 
  
  - block: collection
    content:
      title: Latest Project
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: welcome.png
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

  - block: collection
    content:
      title: Latest Paper
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'paper-conference'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
