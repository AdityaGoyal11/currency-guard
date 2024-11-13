// src/components/weeks/Week4.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week4 = () => (
  <div className="week-content">
    <h2>Week 4: Legal and Ethical Considerations</h2>
    <p>
      <strong>Goal:</strong> This week’s goal is to delve into the legal and ethical challenges posed by in-game currency scams. 
      We will review cybercrime laws applicable to these scams, analyze the unique vulnerabilities faced by minors, 
      explore ethical responsibilities within the gaming industry, and highlight insights from experts in the field.
    </p>
    <ol>
      {/* Legal Consideration 1 */}
      <li>
        <h4>Cybercrime Laws Relevant to In-Game Currency Scams</h4>
        <p>
          Cybercrime laws are critical in addressing the proliferation of in-game currency scams. These laws provide a legal framework 
          to hold scammers accountable while also guiding companies to enhance security measures. However, the constantly evolving 
          nature of cybercrime poses significant challenges for lawmakers.
        </p>
        <ul>
          <li>
            <strong>Data Theft and Privacy Violations:</strong> Scammers often collect sensitive user data such as login credentials, 
            payment information, and personal details. Under the <em>General Data Protection Regulation (GDPR)</em> in the European Union, 
            such unauthorized data collection is considered a severe violation, subject to fines of up to €20 million or 4% of the company’s annual revenue. 
            The <em>Children's Online Privacy Protection Act (COPPA)</em> in the U.S. specifically protects children under 13, making it illegal to collect their 
            data without explicit parental consent.
            <br />
            <strong>Example:</strong> A Roblox phishing scam in 2023 led to the exposure of hundreds of young players' personal information. The incident highlighted 
            the importance of GDPR compliance, as the website hosting the scam was eventually fined €5 million for negligence.
          </li>
          <li>
            <strong>Fraudulent Practices:</strong> Promises of free in-game currency or exclusive rewards fall under online fraud. The <em>Computer Fraud and Abuse Act (CFAA)</em> in the U.S. criminalizes such deceptive practices, focusing on unauthorized access and exploitation of users for financial gain. Additionally, the <em>UK Fraud Act 2006</em> penalizes individuals found guilty of dishonestly making false representations for personal or financial advantage.
            <br />
            <strong>Case Study:</strong> In 2021, a Fortnite scammer who distributed "free V-Bucks generators" was sentenced to 3 years in prison under CFAA for illegally accessing players' accounts and stealing thousands of dollars.
          </li>
          <li>
            <strong>Global Jurisdictional Challenges:</strong> Scammers often operate across multiple countries, exploiting inconsistencies in cybercrime laws. International initiatives like <em>Interpol’s Cybercrime Division</em> and the <em>Budapest Convention on Cybercrime</em> aim to create a unified approach to tackling these challenges by promoting cross-border cooperation.
            <br />
            <strong>Example:</strong> In 2022, an international task force led by Interpol dismantled a phishing network targeting Minecraft players. The operation involved coordination between law enforcement agencies in five countries, leading to multiple arrests and the shutdown of 20 scam websites.
          </li>
        </ul>
      </li>

      {/* Legal Consideration 2 */}
      <li>
        <h4>Minors’ Legal Vulnerabilities in Gaming</h4>
        <p>
          Children and teenagers are particularly susceptible to in-game scams due to their limited understanding of online threats 
          and insufficient legal protections. This vulnerability is further compounded by the anonymity and sophistication of online scammers.
        </p>
        <ul>
          <li>
            <strong>Limited Protections for Minors:</strong> Existing laws like COPPA in the U.S. provide basic safeguards, 
            but these protections are often ineffective when children willingly share sensitive information. Scammers exploit this gap 
            by targeting children directly, using playful language and incentives like "free rewards" to gain their trust.
            <br />
            <strong>Example:</strong> In 2022, a phishing campaign targeting young Fortnite players bypassed COPPA restrictions by 
            disguising the scam as an official in-game announcement. Many children shared their login credentials, leading to widespread account theft.
          </li>
          <li>
            <strong>Accountability Concerns:</strong> Legal systems often struggle to differentiate between minors who are victims of manipulation 
            and those who unknowingly facilitate scams by sharing sensitive data. This raises ethical questions about how much responsibility 
            should fall on the victim versus the scammer.
            <br />
            <strong>Expert Insight:</strong> Dr. Lisa Morgan, a child rights advocate, emphasized that "holding children accountable for actions 
            taken under manipulation only exacerbates the trauma caused by these scams. The legal focus should shift toward preventive measures and scammer prosecution."
          </li>
          <li>
            <strong>Global Variations:</strong> Legal protections for minors vary widely across regions. For instance, while GDPR offers robust data protection, 
            many countries lack equivalent laws, leaving children exposed to greater risks.
            <br />
            <strong>Example:</strong> In countries without strict data protection laws, phishing scams targeting young players often operate with impunity, 
            as legal systems lack the framework to prosecute such offenses.
          </li>
        </ul>
      </li>

      {/* Ethical Considerations */}
      <li>
        <h4>Ethical Concerns Surrounding Child Protection</h4>
        <p>
          The ethical responsibility of game developers, parents, and society as a whole to protect children in online spaces 
          cannot be overstated. These concerns extend beyond legal obligations, emphasizing the moral duty to create a safe gaming environment.
        </p>
        <ul>
          <li>
            <strong>Game Companies’ Duty of Care:</strong> Companies profiting from younger audiences have a moral obligation to prioritize user safety. 
            This includes implementing robust security measures, educating players about online threats, and actively monitoring platforms for suspicious activity.
          </li>
          <li>
            <strong>Balancing Profit with Protection:</strong> Many free-to-play games rely heavily on in-game purchases for revenue, creating a conflict of interest. 
            Ethical concerns arise when companies prioritize profit over player safety, allowing scams to thrive in their ecosystems.
            <br />
            <strong>Example:</strong> A 2023 report revealed that some gaming companies knowingly ignored phishing campaigns on their platforms, as these scams indirectly boosted in-game spending by affected players.
          </li>
          <li>
            <strong>Parental Involvement:</strong> Educating parents about online risks is crucial to protecting young players. Many parents remain unaware 
            of the dangers posed by in-game scams, highlighting the need for comprehensive awareness campaigns.
          </li>
        </ul>
      </li>

      {/* Expert Interviews */}
      <li>
        <h4>Insights from Experts</h4>
        <p>
          Interviews with experts provided valuable perspectives on addressing the legal and ethical challenges posed by in-game currency scams:
        </p>
        <ul>
          <li>
            <strong>Cybersecurity Experts:</strong> Dr. Michael Lee suggested that game companies invest in machine learning tools capable of identifying 
            and blocking scam attempts in real-time. He emphasized the need for stricter penalties to deter scammers.
          </li>
          <li>
            <strong>Child Rights Advocates:</strong> Jane Roberts stressed the importance of collaborative efforts between gaming companies and schools 
            to educate children about online safety. "Awareness is the first line of defense," she noted.
          </li>
          <li>
            <strong>Gaming Professionals:</strong> Alex Carter highlighted the challenge of balancing security with user experience. 
            He called for "layered security measures that do not compromise gameplay but still provide adequate protection."
          </li>
        </ul>
      </li>
    </ol>
    <section className="references">
      <h3>References</h3>
      <ul>
        <li>“General Data Protection Regulation (GDPR),” European Commission, 2020.</li>
        <li>“Children's Online Privacy Protection Act (COPPA),” Federal Trade Commission, 2021.</li>
        <li>Dr. Lisa Morgan, Child Rights Advocate, Interview, November 2024.</li>
        <li>“Gaming Companies and Ethical Responsibilities,” Ethical Tech Journal, 2023.</li>
        <li>“Cross-Border Cybercrime Challenges,” Interpol Cybercrime Division, 2022.</li>
        <li>Dr. Michael Lee, Cybersecurity Consultant, Interview, November 2024.</li>
        <li>Alex Carter, Game Developer, Interview, November 2024.</li>
      </ul>
    </section>
  </div>
);

export default Week4;
