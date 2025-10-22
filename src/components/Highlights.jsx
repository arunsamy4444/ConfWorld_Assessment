import React from 'react';
import '../styles/Highlights.css';

const Highlights = () => {
  const highlights = [
    {
      number: 1,
      text: "Multidisciplinary Platform – A unique forum uniting applied science, engineering, education, business, management, social sciences and humanities.",
      icon: "🔬"
    },
    {
      number: 2,
      text: "Global Participation – Engage with renowned scholars, industry leaders and professionals from across the world.",
      icon: "🌍"
    },
    {
      number: 3,
      text: "Call for Papers & Publications – Opportunities to publish in reputed scopus indexed journals. Selected papers from the conference will be considered for publication in high-impact journals, offering authors the chance to showcase their research on a global platform.",
      icon: "📝"
    },
    {
      number: 4,
      text: "Expert Keynote Sessions – Insights from distinguished speakers on cutting-edge research and global challenges.",
      icon: "🎤"
    },
    {
      number: 5,
      text: "Interactive Workshops & Panel Discussions – Hands-on learning and thought-provoking debates on contemporary issues.",
      icon: "💡"
    },
    {
      number: 6,
      text: "Networking Opportunities – Build academic, industrial and international collaborations.",
      icon: "🤝"
    },
    {
      number: 7,
      text: "Recognition & Awards – Best paper and presentation awards to acknowledge outstanding contributions.",
      icon: "🏆"
    },
    {
      number: 8,
      text: "Student & Young Researcher Engagement – Special sessions to inspire and guide the next generation of scholars.",
      icon: "🎓"
    }
  ];

  return (
    <section id="highlights" className="highlights section">
      <div className="container">
        <h2 className="section-title scroll-reveal">Key Highlights of ICAEBMS</h2>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card scroll-reveal">
              <div className="border-animation"></div>
              <div className="highlight-progress"></div>
              <div className="highlight-icon">{highlight.icon}</div>
              <div className="highlight-number">{highlight.number}</div>
              <div className="highlight-content">
                <p className="highlight-text">{highlight.text}</p>
              </div>
              <div className="highlight-info">Learn More</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;