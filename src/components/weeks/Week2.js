// src/components/weeks/Week2.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week2 = () => (
  <div className="week-content">
    <h2>Week 2: Data Collection Techniques and Vulnerability Exploitation in In-Game Currency Scams</h2>
    <p>This week’s objective is to understand the specific data collection methods these scam websites use, how they exploit young users' vulnerabilities, and the dangerous escalation that can lead to leaking sensitive family information, such as parents' bank details. This escalation adds a frightening layer to these scams, as they no longer only affect the young players but can impact entire families financially.Fake websites and phishing schemes targeting young gamers use a combination of methods to gather as much data as possible from their victims. These scams are designed to appear friendly and straightforward, taking advantage of the limited awareness young players have about online security. Here are some common techniques:


    </p>
    <ol>
      {/* Data Collection Technique 1 */}
      <li>
        <h4>Fake Account Verification Pages</h4>
        <p>
          Many scam websites present a fake verification page, which appears to be part of the game’s official site, asking the player 
          to "verify" their account. This page may prompt users to enter their game credentials, email address, and even personal information, 
          including birth dates or answers to common security questions.
        </p>
        <ul>
          <li>
            <strong>Example from Case Studies:</strong> In one reported case, a young Fortnite player entered their username and password on a 
            website promising free V-Bucks. The site then asked for their email and answers to security questions like their favorite pet’s name. 
            This information was later used to compromise other accounts linked to the player.
          </li>
        </ul>
      </li>

      {/* Data Collection Technique 2 */}
      <li>
        <h4>Requests for Payment Information Under the Pretense of Small Charges</h4>
        <p>
          Some scams request minimal credit card information, often suggesting a “small processing fee” for the free currency. This request 
          seems believable to young users, especially if they’ve seen payment information entered by their parents on other websites.
        </p>
        <ul>
          <li>
            <strong>Psychological Manipulation:</strong> Scammers use playful language to assure the user that it’s just a “quick verification step” 
            or “one small transaction” to secure the currency. Young players, unaware of the implications, often comply.
          </li>
          <li>
            <strong>Example:</strong> A study reported a case where a young player provided credit card details for a $1 transaction, which 
            later led to hundreds of dollars being charged to their parent’s card.
          </li>
        </ul>
      </li>

      {/* Data Collection Technique 3 */}
      <li>
        <h4>Installation of Malicious Browser Extensions or Apps</h4>
        <p>
        Some fake websites prompt users to download a browser extension or app that claims to "connect" with their game account or "boost" their in-game currency balance. These extensions or apps often serve as spyware, monitoring users' online activity, capturing keystrokes, or even taking screenshots.

        </p>
        <ul>
          <li>
            <strong>Example:</strong>  In a reported incident with Roblox, a player downloaded a "Robux generator" extension, which promised to generate free Robux daily. The extension monitored the player’s browsing activity and, when detecting that the player visited a legitimate website, directed them to a fake page that mirrored their parent’s banking portal. The extension recorded the login credentials entered, ultimately leading to unauthorized transactions [3].

          </li>
        </ul>
      </li>

      {/* Data Collection Technique 4 */}
      <li>
        <h4>Phishing Emails That Escalate to Financial Data Requests</h4>
        <p>
          After gathering initial game login information, scammers may escalate their phishing attempts. They often send emails or messages 
          posing as customer service representatives, claiming the account is "at risk" and requesting more sensitive details, like bank information.
        </p>
        <ul>
          <li>
            <strong>Scary Real-World Case:</strong> In one case, a scammer accessed a young player’s Fortnite account and sent a follow-up email pretending to be from the game's support team. They claimed the account was compromised and offered "extra security" by linking a parent’s bank account to ensure identity verification. The parents ended up providing enough financial details to allow multiple unauthorized transactions
          </li>
        </ul>
      </li>
    </ol>

    {/* Vulnerabilities of Young Users */}
    <section className="user-vulnerabilities">
      <h3>Why Young Users Are Particularly Vulnerable</h3>
      <ul>
        <li>
          <strong>Inexperience with Online Safety:</strong> Young users generally lack a comprehensive understanding of online safety and may not recognize the red flags associated with data requests. Scammers capitalize on this by presenting their fake sites as legitimate, knowing young players will often proceed without suspicion.

        </li>
        <li>
          <strong>Reliance on Parental Payment Information:</strong>Many young players are used to their parents paying for in-game purchases, often through saved credit cards in online gaming platforms. This familiarity can lead children to assume it’s safe to enter payment details without fully understanding the risks.
        </li>
        <li>
          <strong>Emotional Manipulation through Scarcity and Urgency:</strong> Scammers often create a sense of urgency by framing their offers as "limited-time" deals or by using countdown timers. Young users, especially those influenced by peer pressure or the desire to compete with friends, are more likely to fall for this tactic, which clouds their judgment and pushes them to act quickly.

        </li>
        <li>
          <strong>Social Influence in Gaming Communities:</strong> Gaming communities often serve as support networks where players discuss strategies, tips, and sometimes "secret hacks." Scammers exploit this trust by posing as friendly community members, influencing young players to trust their suggestions without verifying legitimacy.
        </li>
      </ul>
    </section>

    {/* Escalating Threat */}
    <section className="escalating-threat">
      <h3>The Escalating Threat: How Data Leaks Lead to Financial Theft</h3>
      <ol>
        <li>
          <strong>Step 1: Initial Data Capture:</strong> Scammers gather basic account information like usernames and passwords, 
          granting them access to the player’s account.
        </li>
        <li>
          <strong>Step 2: Exploiting the Account:</strong> Once they gain access, scammers may make small in-game purchases or send 
          scam messages to the player’s friends.
        </li>
        <li>
          <strong>Step 3: Advanced Data Requests:</strong> Posing as the game’s support team, scammers escalate their tactics to 
          request sensitive financial data from parents.
        </li>
        <li>
          <strong>Step 4: Financial Theft:</strong> With bank details in hand, scammers execute unauthorized transactions, 
          potentially costing families hundreds of dollars.
        </li>
      </ol>
    </section>

    {/* Case Study */}
    <section className="case-study">
      <h3>Case Study: The "Robux Giveaway" Incident</h3>
      <p>
      A well-documented case involving Roblox illustrates this escalation. A 12-year-old player came across a fake website offering free Robux. The website collected their username and password and asked them to download a "security plugin" to verify their account. The plugin, unbeknownst to the child, was spyware that recorded keystrokes. Later, when the child’s parents logged into their bank account, the spyware captured the bank login details. Within a week, the family noticed multiple unauthorized withdrawals, amounting to nearly $800 in charges, traced back to the information the spyware captured.

      </p>
    </section>

    {/* References */}
    <section className="references">
      <h3>References</h3>
      <ul>
        <li>“Fortnite Scam Case Study: How Phishing Sites Target Young Players,” GameSecurity Reports, 2021.</li>
        <li>“The Rise of In-Game Currency Scams: A Security Analysis,” Cybersecurity Weekly, 2022.</li>
        <li>“Roblox Scams and Their Impact on Families,” Cyber Threat Intelligence, 2021.</li>
        <li>“Case Study on Financial Theft via Gaming Scams,” Online Safety Journal, 2020.</li>
        <li>“Robux Giveaway Scam and Its Escalation to Bank Fraud,” Tech Security Insight, 2022.</li>
      </ul>
    </section>
  </div>
);

export default Week2;
