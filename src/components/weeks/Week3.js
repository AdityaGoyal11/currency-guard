// src/components/weeks/Week3.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week3 = () => (
  <div className="week-content">
    <h2>Week 3: Security Measures and Responses</h2>
    <p>
      <strong>Goal:</strong> This week’s objective is to explore the security measures game companies have implemented to protect players, 
      assess the legal actions taken against scammers, investigate partnerships between game developers and law enforcement, and review 
      educational campaigns aimed at raising awareness about scams targeting young players.
    </p>
    <ol>
      {/* Security Measure 1 */}
      <li>
        <h4>Two-Factor Authentication (2FA)</h4>
        <p>
          <strong>What It Is:</strong> Two-Factor Authentication requires users to provide a second form of verification (like a code sent to a phone or email) 
          before accessing their account.
        </p>
        <p>
          <strong>Why It Helps:</strong> Even if scammers obtain a player's username and password, 2FA acts as an extra barrier that makes unauthorized access significantly harder.
        </p>
        <p>
          <strong>Example:</strong> Fortnite, one of the most popular games among younger audiences, actively encourages players to enable 2FA by offering free in-game rewards 
          to those who do. This not only boosts security but also motivates players to prioritize account protection.
        </p>
      </li>

      {/* Security Measure 2 */}
      <li>
        <h4>Automated Scam Detection and Reporting Systems</h4>
        <p>
          <strong>What It Is:</strong> Many gaming platforms have introduced machine learning algorithms to monitor and flag suspicious activity, such as phishing messages, 
          fake giveaways, and unusual login locations.
        </p>
        <p>
          <strong>Why It Helps:</strong> Automated systems help detect and block scam attempts in real-time, reducing the likelihood of players encountering scammers.
        </p>
        <p>
          <strong>Example:</strong> Platforms like Roblox use automated detection systems to scan for inappropriate content, scam messages, and suspicious third-party links 
          shared in-game or on community forums.
        </p>
      </li>

      {/* Security Measure 3 */}
      <li>
        <h4>Warning Messages About Common Scams</h4>
        <p>
          <strong>What It Is:</strong> To raise awareness, some game companies display warning messages about common scams, such as fake currency generators or phishing attempts. 
          These messages may appear on login screens, in parental control settings, or on company websites.
        </p>
        <p>
          <strong>Why It Helps:</strong> Warnings educate players about potential threats, reminding them not to trust offers of "free" currency or login requests from third-party sites.
        </p>
        <p>
          <strong>Example:</strong> Minecraft has issued prominent warnings on its login screen, cautioning players to be wary of websites promising free content and directing them 
          to official sources for downloads.
        </p>
      </li>

      {/* Legal Actions */}
      <li>
        <h4>Legal Actions Against Scammers</h4>
        <p>
          Legal action against scammers is challenging due to the anonymous and international nature of online crime. However, there have been some notable efforts to prosecute offenders and discourage these scams.
        </p>
        <ul>
          <li>
            <strong>High-Profile Legal Cases:</strong> Several companies have pursued legal action against scammers to set a precedent and discourage others. For instance, Epic Games, the maker of Fortnite, filed lawsuits against individuals who created and distributed cheating software that included phishing components.
            <p>
              <strong>Example:</strong> In 2019, Epic Games won a case against a group of hackers responsible for distributing cheats that included malware, which had the potential to steal user information and compromise accounts.
            </p>
          </li>
          <li>
            <strong>Collaboration with Law Enforcement:</strong> Many game companies now collaborate with law enforcement to address cybercrime. By reporting fraud cases to authorities, companies can help trace large-scale scam operations and identify repeat offenders.
            <p>
              <strong>Example:</strong> The U.K. National Crime Agency has collaborated with gaming companies to track down scam websites and phishing operations targeting young gamers. In several cases, these partnerships have led to the shutdown of fraudulent sites and the arrest of those involved.
            </p>
          </li>
        </ul>
      </li>

      {/* Partnerships with Law Enforcement */}
      <li>
        <h4>Partnerships Between Game Developers and Law Enforcement</h4>
        <p>
          Gaming companies are increasingly working with law enforcement agencies to combat the cybercrime threats posed by in-game scams. These partnerships help game developers 
          stay informed about the latest scam tactics and allow law enforcement agencies to better understand the gaming world.
        </p>
        <ul>
          <li>
            <strong>Cross-Border Collaboration:</strong> Given the global reach of online gaming, many game companies partner with international law enforcement agencies, sharing 
            information about scam trends and methods.
            <p>
              <strong>Example:</strong> In response to a rise in online gaming scams, the FBI has provided security guidelines to popular gaming companies to help them identify 
              and mitigate potential scams. These guidelines focus on user behavior and suspicious activities to monitor on gaming platforms.
            </p>
          </li>
          <li>
            <strong>Data Sharing for Tracking Scammers:</strong> Some gaming companies provide anonymized user data to law enforcement to help track and analyze scam activity patterns. 
            This data can include login IP addresses, scam link destinations, and known email addresses used in phishing attempts.
            <p>
              <strong>Example:</strong> By monitoring IP addresses and identifying clusters of suspicious behavior, companies have been able to help law enforcement agencies track 
              organized phishing groups across different regions.
            </p>
          </li>
        </ul>
      </li>

      {/* Educational Campaigns */}
      <li>
        <h4>Educational Campaigns Aimed at Raising Awareness</h4>
        <p>
          Preventing scams often requires proactive education for players and their families. Many gaming companies have launched awareness campaigns to inform young users and 
          parents about the risks associated with in-game scams.
        </p>
        <ul>
          <li>
            <strong>Parental Guides and Online Safety Resources:</strong> Some companies provide guides to help parents understand how to keep their children safe while gaming. 
            These guides typically cover account security, scam prevention, and privacy settings.
            <p>
              <strong>Example:</strong> Epic Games has published an online parental guide that includes information on how to enable 2FA, recognize scam attempts, and monitor in-game purchases.
            </p>
          </li>
          <li>
            <strong>Collaborations with Schools and Youth Organizations:</strong> In some regions, game developers partner with schools and youth organizations to educate children about 
            online scams and cybersecurity. These educational efforts often include presentations, workshops, and interactive activities designed to teach children about online threats.
            <p>
              <strong>Example:</strong> Microsoft partnered with youth organizations to introduce online safety workshops, using games like Minecraft to teach children how to recognize 
              and report suspicious activity.
            </p>
          </li>
          <li>
            <strong>In-Game Notifications and Awareness Campaigns:</strong> Game companies use in-game notifications and loading screen tips to spread awareness about scams. These 
            messages warn players to avoid sharing passwords, only trust official game sources, and be skeptical of free currency offers.
            <p>
              <strong>Example:</strong> Roblox includes rotating security messages on its login screen to educate players about common scams and remind them to avoid unofficial websites 
              or links shared by unknown users.
            </p>
          </li>
        </ul>
      </li>
    </ol>
    <section className="references">
      <h3>References</h3>
      <ul>
        <li>"Free In-Game Currency Scams," Norton, 2021.</li>
        <li>"What You Need to Know About Gaming Scams Targeting Children," Forbes, 2024.</li>
        <li>"The Growing Video Game Industry & The Rise of Scams," Eydle.</li>
        <li>"Time is Money and Online Game Scammers Have Lots of It," WeLiveSecurity.</li>
        <li>"FBI Offers Tips on Staying Safe from Online Gaming Scams," Cybersecurity Journal, 2023.</li>
        <li>"Cross-Border Cooperation on Gaming Scams," National Crime Agency, 2022.</li>
        <li>"How Data Sharing Helps Track Gaming Scammers," Cyber Threat Analysis Weekly, 2021.</li>
        <li>"Epic Games Parental Guide: Security Tips for Young Players," Epic Games, 2022.</li>
        <li>"Microsoft’s Online Safety Workshops Using Minecraft," Microsoft Youth Initiatives, 2023.</li>
        <li>"Roblox Security Notifications: Educating Young Gamers on Scam Risks," Roblox Press, 2022.</li>
      </ul>
    </section>
  </div>
);

export default Week3;
