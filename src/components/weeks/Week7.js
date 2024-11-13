// src/components/weeks/Week7.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week7 = () => (
  <div className="week-content">
    <h2>Week 7: Creating This Webpage - A Journey in Web Development</h2>

    <section className="introduction">
      <h3>Introduction</h3>
      <p>
        Week 7 marks the culmination of an exciting and challenging project: creating a comprehensive, interactive webpage to 
        document in-game currency scams. This week focuses on reflecting on the technologies used, the learning process, and 
        the hurdles encountered during development. As someone new to web development, this experience has been both a 
        steep learning curve and an incredibly rewarding journey.
      </p>
    </section>

    <section className="tech-used">
      <h3>Technologies and Tools Used</h3>
      <ul>
        <li>
          <strong>React.js:</strong> The core technology powering this webpage. React’s component-based architecture made 
          it easier to break the project into smaller, manageable pieces like the landing page, weekly reports, and shared 
          components such as the header and footer.
        </li>
        <li>
          <strong>React Router:</strong> Implemented for seamless navigation between different pages, such as the timeline 
          and detailed weekly reports. Setting up routes was crucial for creating an interactive, multi-page experience.
        </li>
        <li>
          <strong>CSS:</strong> Custom styles were written to ensure a clean and responsive design. Additional effort went into 
          implementing a dark mode feature, using CSS variables to dynamically switch themes based on user preference.
        </li>
        <li>
          <strong>JavaScript (ES6):</strong> Leveraged for dynamic functionality, such as managing states, toggling dark mode, 
          and rendering components conditionally.
        </li>
        <li>
          <strong>Git and GitHub:</strong> Used for version control and hosting the project. It was essential for tracking changes, 
          experimenting with new features, and sharing progress.
        </li>
        <li>
          <strong>VS Code:</strong> The integrated development environment (IDE) of choice for coding, debugging, and editing files.
        </li>
      </ul>
    </section>

    <section className="learning-curve">
      <h3>The Learning Curve</h3>
      <p>
        As a beginner in web development, the learning process was intense but deeply fulfilling. Initially, concepts like 
        React’s state management, component lifecycle, and routing were challenging to grasp. Breaking down the project into 
        smaller tasks—like building the dark mode toggle, structuring weekly reports, and linking pages—helped manage the complexity.
      </p>
      <p>
        Debugging was another area of growth. From fixing syntax errors to resolving issues with mismatched imports and state 
        management, each obstacle taught valuable lessons. Online resources, tutorials, and documentation became indispensable 
        tools in overcoming these hurdles.
      </p>
    </section>

    <section className="key-challenges">
      <h3>Key Challenges</h3>
      <ul>
        <li>
          <strong>Implementing Dark Mode:</strong> Creating a toggle for dark mode was conceptually simple, but ensuring it worked 
          consistently across all components required significant effort. The use of CSS variables and React’s state system proved 
          to be a game-changer.
        </li>
        <li>
          <strong>Linking Pages:</strong> Setting up React Router for navigation was initially confusing. Understanding how to use 
          routes, dynamic URLs, and conditional rendering took time and experimentation.
        </li>
        <li>
          <strong>Formatting and Styling:</strong> Ensuring that the page looked clean and professional across devices was a constant 
          challenge. Managing responsive design and maintaining consistency between components required careful planning and testing.
        </li>
        <li>
          <strong>Managing State:</strong> Keeping track of the selected week and ensuring the correct content was displayed posed 
          challenges in managing React’s state. Debugging issues where the wrong week’s content was rendered provided valuable insights.
        </li>
        <li>
          <strong>Content Structuring:</strong> Balancing readability and interactivity involved creating a clear hierarchy of 
          headings, paragraphs, and lists. Each week’s report required meticulous attention to detail to maintain consistency.
        </li>
      </ul>
    </section>

    <section className="breakthroughs">
      <h3>Breakthroughs and Milestones</h3>
      <ul>
        <li>
          Successfully implementing dark mode with CSS variables and React state, making the site more user-friendly.
        </li>
        <li>
          Setting up dynamic routing with React Router, enabling seamless navigation between the landing page and weekly reports.
        </li>
        <li>
          Creating a reusable structure for weekly pages, ensuring consistency across all reports while allowing for unique content.
        </li>
        <li>
          Debugging and fixing issues with component rendering and styling, significantly improving the site’s overall functionality 
          and appearance.
        </li>
      </ul>
    </section>
  </div>
);

export default Week7;
