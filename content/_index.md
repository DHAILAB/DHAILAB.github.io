---
# Leave the homepage title empty to use the site title
title:
date: 2024-10-24
type: landing

sections:
  - block: hero
    content:
      title: |
        DHAI Lab
      image:
        filename: labmain.png
      text: |
        <br>

        The Wang Research Group (Data-Driven & Human-Centered AI in Healthcare and Medical Research [DHAI] Lab) works on developing and applying Machine Learning, Data Mining and Statistical methods on healthcare and (bio)medical data. Inspired by the human factors approach, DHAI lab also designs and develops Human-Centered Artificial Intelligence algorithms and tools for users to integrate, visualize, analyze, and interpret health data in order to improve the interoperability and accessibility of AI-assisted healthcare decision support. 
  
  - block: markdown
    content:
      title: Research Projects
      subtitle: Exploring the frontiers of Human-Centered AI
      text: |
        <div class="project-carousel-container">
          <div class="project-carousel">
            <div class="project-slide">
              <a href="/post/survival-analysis/">
                <img src="/media/project_survival.png" alt="Interactive & Explainable Survival Analysis">
                <h3>Interactive & Explainable Survival Analysis</h3>
                <p>Developing advanced time-to-event prediction algorithms with human-in-the-loop explanations. Our platform enables trustworthy survival analysis for equipment failure prediction in IoT systems, customer churn analytics in business intelligence, cybersecurity risk forecasting, and patient outcome modeling in healthcare settings.</p>
              </a>
            </div>
            <div class="project-slide">
              <a href="/post/digital-twin/">
                <img src="/media/project_digital_twin.png" alt="Digital Twin Powered Decision Making AI">
                <h3>Digital Twin Powered Decision Making AI</h3>
                <p>Leveraging reinforcement learning with online adaptation to create personalized decision-making policies powered by digital twin technology. Applications include smart building energy optimization, inventory and supply chain management, personalized learning paths in education, and adaptive treatment planning in healthcare.</p>
              </a>
            </div>
            <div class="project-slide">
              <a href="/post/graph-neural-networks/">
                <img src="/media/project_gnn.png" alt="Heterogeneous Graph Neural Networks">
                <h3>Heterogeneous Graph Neural Networks for Evolving Multimodal Data</h3>
                <p>Building sophisticated graph neural network architectures that integrate relational attributes with topological structures over time to analyze complex, evolving multimodal data. Key applications include brain disease detection, understanding metabolic mechanisms, molecular interaction analysis, and accelerating drug discovery processes.</p>
              </a>
            </div>
            <div class="project-slide">
              <a href="/post/llm-multi-agent/">
                <img src="/media/project_llm.png" alt="LLM- and RAG-Enabled Multi-Agent AI Systems">
                <h3>LLM & RAG-Enabled Multi-Agent AI Systems</h3>
                <p>Creating intelligent multi-agent systems powered by large language models and retrieval-augmented generation for enhanced interaction and knowledge processing. Applications span enterprise knowledge assistants, scientific research copilots, business workflow automation, and clinician-facing question-answering systems in healthcare.</p>
              </a>
            </div>
            <div class="project-slide">
              <a href="/post/privacy-ai/">
                <img src="/media/project_privacy.png" alt="Ethical & Privacy Preserving AI Systems">
                <h3>Ethical & Privacy Preserving AI Systems</h3>
                <p>Designing and implementing privacy-first AI inference systems with zero-retention architecture for trustworthy deployment. Our work encompasses privacy-preserving analytics, secure model deployment, federated learning for IoT devices, and protected health data pipelines that ensure ethical AI practices while maintaining high performance.</p>
              </a>
            </div>
          </div>
          <button class="carousel-btn prev" onclick="moveCarousel(-1)">‹</button>
          <button class="carousel-btn next" onclick="moveCarousel(1)">›</button>
          <div class="carousel-dots"></div>
        </div>
        <script src="/js/carousel.js"></script>
    design:
      columns: '1'
  
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
