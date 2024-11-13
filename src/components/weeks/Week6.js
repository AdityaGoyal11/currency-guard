// src/components/weeks/FinalReport.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week6 = () => (
  <div className="week-content">
    <h2>Comprehensive Report: Tackling In-Game Currency Scams</h2>
    <section className="introduction">
      <h3>Introduction</h3>
      <p>
        The rise of online gaming has created vast, engaging virtual worlds but has also opened doors for malicious actors. 
        In-game currency scams have become one of the most common cyber threats targeting gamers of all ages. Scammers exploit players’ desires for rare items, quick progression, or exclusive rewards, often deceiving them into sharing personal data, transferring money, or compromising account security.
      </p>
      <p>
        This report synthesizes the results of research, interviews, and community insights to propose a multi-pronged strategy for combating in-game scams. 
        It focuses on technological advancements, educational initiatives, and legal frameworks to address this issue comprehensively. Additionally, 
        the report offers tailored recommendations for game developers, lawmakers, parents, and the gaming community, aiming to foster a safe and enjoyable gaming ecosystem.
      </p>
    </section>

    <section className="technological-solutions">
      <h3>Technological Solutions</h3>
      <ol>
        <li>
          <h4>Enhanced Website Verification Tools</h4>
          <ul>
            <li>
              <strong>Secure Login Systems:</strong> Introduce OAuth (Open Authorization) or Single Sign-On (SSO) systems to ensure secure authentication without repeatedly sharing credentials. These systems minimize phishing risks.
            </li>
            <li>
              <strong>Verified Links:</strong> Websites and emails should feature clear markers of legitimacy, such as HTTPS encryption and security seals, ensuring players can easily distinguish genuine sources.
            </li>
            <li>
              <strong>AI-Powered Scam Detection Tools:</strong> Develop browser plug-ins or gaming-specific applications that flag phishing websites or suspicious links before players access them.
            </li>
          </ul>
        </li>
        <li>
          <h4>In-Game Scam Detection Systems</h4>
          <ul>
            <li>
              <strong>Behavioral Monitoring:</strong> Deploy AI systems that monitor in-game interactions for red flags, such as repeated unsolicited messages, unnatural item trades, or links shared in chat.
            </li>
            <li>
              <strong>Proactive Notifications:</strong> Develop automated systems that warn players when they receive potentially fraudulent messages or offers.
            </li>
            <li>
              <strong>Scam Databases:</strong> Maintain a dynamic, crowd-sourced database of known scammer accounts and suspicious activities to quickly identify and neutralize threats.
            </li>
          </ul>
        </li>
        <li>
          <h4>Secure Marketplaces for Trades and Purchases</h4>
          <ul>
            <li>
              <strong>Built-In Trading Platforms:</strong> Implement robust in-game marketplaces where players can exchange items or currency under strict security protocols.
            </li>
            <li>
              <strong>Transaction Validation:</strong> Use blockchain technology to create immutable records of trades, ensuring transparency and traceability.
            </li>
            <li>
              <strong>Smart Contracts:</strong> Integrate smart contracts that execute trades only when all parties meet pre-agreed terms.
            </li>
          </ul>
        </li>
        <li>
          <h4>Enhanced Account Security Measures</h4>
          <ul>
            <li>
              <strong>Mandatory Two-Factor Authentication (2FA):</strong> Developers should require 2FA for account logins, making unauthorized access significantly harder.
            </li>
            <li>
              <strong>Biometric Authentication:</strong> Incorporate advanced methods like fingerprint or facial recognition, especially for high-value accounts or professional e-sports players.
            </li>
            <li>
              <strong>Activity Logs:</strong> Provide detailed account activity logs so players can monitor for suspicious actions, such as unauthorized logins or unexplained item trades.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section className="educational-solutions">
      <h3>Educational Solutions</h3>
      <ol>
        <li>
          <h4>Awareness Campaigns</h4>
          <ul>
            <li>
              <strong>Mandatory Onboarding Tutorials:</strong> New players should be required to complete interactive tutorials that teach them to recognize scams, such as phishing messages or fake websites.
            </li>
            <li>
              <strong>Public Announcements:</strong> Use in-game notifications, newsletters, and social media to regularly warn players about ongoing scam tactics. Include examples to help players identify these threats.
            </li>
          </ul>
        </li>
        <li>
          <h4>Player Education Materials</h4>
          <ul>
            <li>
              <strong>Scam Recognition Guides:</strong> Publish detailed guides explaining common scam strategies (e.g., phishing, fake trades) and how to avoid them.
            </li>
            <li>
              <strong>Gamified Learning Tools:</strong> Create engaging games or quizzes that educate players about cybersecurity in a fun, interactive manner.
            </li>
            <li>
              <strong>Influencer Advocacy:</strong> Partner with popular streamers and content creators to promote scam-awareness messages, leveraging their reach to educate broader audiences.
            </li>
          </ul>
        </li>
        <li>
          <h4>Community Empowerment</h4>
          <ul>
            <li>
              <strong>Scam Reporting Systems:</strong> Simplify the reporting process for players. Allow them to flag suspicious activity in-game with just a few clicks.
            </li>
            <li>
              <strong>Crowd-Sourced Warnings:</strong> Display community-generated warnings about recent scams prominently in-game or on official forums.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section className="legal-solutions">
      <h3>Legal Solutions</h3>
      <ol>
        <li>
          <h4>Strengthening Cybercrime Laws</h4>
          <ul>
            <li>
              <strong>Punitive Measures:</strong> Governments should impose severe penalties, including fines and imprisonment, for those found guilty of online fraud.
            </li>
            <li>
              <strong>Extraterritorial Agreements:</strong> Create international collaborations to pursue scammers operating across borders, ensuring jurisdictional challenges do not hinder prosecution.
            </li>
          </ul>
        </li>
        <li>
          <h4>Developer Accountability</h4>
          <ul>
            <li>
              <strong>Compliance Standards:</strong> Mandate that developers adhere to minimum security requirements, such as encrypted data transmission and secure payment gateways.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <section className="recommendations">
      <h3>Recommendations for Key Stakeholders</h3>
      <p>
      <strong>For Game Developers:</strong> Build robust trading and purchasing systems within the game to eliminate reliance on third-party platforms.
      </p>
      <p>
      <strong>For Lawmakers:</strong> Pass comprehensive cybercrime legislation that punishes scammers and protects players.
      </p>
      <p>
      <strong>For Parents and Guardians:</strong> Educate children about online safety, emphasizing skepticism toward offers that seem too good to be true.
      </p>
    </section>

    <section className="conclusion">
      <h3>Conclusion</h3>
      <p>
        In-game currency scams represent a significant challenge in the modern gaming landscape. Through a coordinated effort involving technological innovation, community education, and robust legal frameworks, the impact of these scams can be substantially reduced. Game developers, lawmakers, parents, and the gaming community must work collaboratively to create a safer and more enjoyable gaming experience for everyone.
      </p>
    </section>
  </div>
);

export default Week6;
