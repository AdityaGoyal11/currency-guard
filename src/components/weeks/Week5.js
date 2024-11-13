// src/components/weeks/Week5.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week5 = () => (
  <div className="week-content">
    <h2>Week 5: Report on Experiences with In-Game Video Game Scams</h2>
    <p>
      <strong>Goal:</strong> This week I decided to interview some of the residents in my uni accomodation, since there are a lot of people whi play online video games. I found very interesting stuff about their experiences and they all have consented that I can put their stories in this project. Below is a summary of the experieces reported by players of different backgorunds, highlighting the scam, resolution and their personal takeaway from it.
    </p>
    <ol>
      {/* Interview 1 */}
      <li>
        <h4>Robbie, Age 20 – The "Free Skin" Trap</h4>
        <p>
          Robbie, an avid player of a popular battle royale game, encountered a scam involving a "free legendary skin." 
          A direct message from another player offered the skin and provided a link to a third-party website requiring her to log in with her game credentials.
        </p>
        <ul>
          <li>
            <strong>Scam Encounter:</strong> "I was so excited to get the skin I had been wanting for ages but couldn’t afford. The website looked legit, even using the game's official logo. I logged in, but then nothing happened. A day later, my account was hacked, and I lost all my in-game progress and items."
          </li>
          <li>
            <strong>Resolution:</strong> Robbie contacted the game's support team, who helped her recover her account. She also activated two-factor authentication (2FA) to prevent future hacks.
          </li>
          <li>
            <strong>Takeaway:</strong> Robbie learned the importance of avoiding suspicious links and interacting only with official sources. 
            "If it's too good to be true, it probably is," he said.
          </li>
        </ul>
      </li>

      {/* Interview 2 */}
      <li>
        <h4>Jake, Age 19 – The "Unlimited Coins" Scheme</h4>
        <p>
          Jake was targeted by a YouTube video promising unlimited in-game currency for his favorite sports simulation game. 
          The video directed him to a website requiring him to complete surveys and download apps to "generate" the coins.
        </p>
        <ul>
          <li>
            <strong>Scam Encounter:</strong> "At first, I thought it was a win-win. But after downloading a couple of apps, 
            my phone started behaving weirdly, and I got bombarded with ads. And, of course, no coins were added to my account."
          </li>
          <li>
            <strong>Resolution:</strong> Jake uninstalled the apps and performed a factory reset on his phone. 
            He also installed an antivirus program to clean up any remaining threats.
          </li>
          <li>
            <strong>Takeaway:</strong> "I've learned to recognise the red flags. Free coins? No way. I only earn them through legitimate gameplay now."
          </li>
        </ul>
      </li>

      {/* Interview 3 */}
      <li>
        <h4>Kartik, Age 18 – The Social Engineering Trick</h4>
        <p>
          While playing a massive multiplayer online role-playing game (MMORPG), Kartik befriended another player who claimed to be struggling financially. 
          The scammer convinced her to "lend" them some premium in-game currency, promising to pay her back.
        </p>
        <ul>
          <li>
            <strong>Scam Encounter:</strong> "They were very convincing and played the sympathy card. I felt bad and sent them the currency. They immediately disappeared, and I never heard from them again."
          </li>
          <li>
            <strong>Resolution:</strong> Kartik reported the scammer to the game moderators. While the in-game currency couldn’t be recovered, 
            the scammer's account was banned.
          </li>
          <li>
            <strong>Takeaway:</strong> "Even in virtual worlds, trust is a two-way street. I now avoid giving anything of value to strangers, no matter how genuine they seem."
          </li>
        </ul>
      </li>

      {/* Interview 4 */}
      <li>
        <h4>Liam, Age 19 – The Phishing Campaign</h4>
        <p>
          Liam received an email that appeared to be from the developers of his favorite first-person shooter game. The email claimed he had won a contest 
          and needed to log in to claim his prize. The link led to a fake login page.
        </p>
        <ul>
          <li>
            <strong>Scam Encounter:</strong> "The email looked so real with the official logo and even links to what seemed like the game's website. 
            I was thrilled to win a contest I didn’t even remember entering. But after entering my login details, my account was compromised."
          </li>
          <li>
            <strong>Resolution:</strong> Liam's parents helped him recover his account by contacting the game developer’s support team. 
            They also reported the phishing email to the developers, who issued a warning to other players.
          </li>
          <li>
            <strong>Takeaway:</strong> "Now, I double-check every email. I never click on links from emails unless I’m 100% sure they’re from the game developers."
          </li>
        </ul>
      </li>
    </ol>
    <section className="takeaways">
      <h3>Summary and Lessons Learned</h3>
      <p>
        These experiences highlight the diverse tactics used by scammers and the importance of vigilance in online gaming environments. 
        Whether through phishing emails, social engineering, or fake offers, scammers prey on players' excitement and trust. 
        Players can protect themselves by recognizing red flags, enabling 2FA, and avoiding interactions with unofficial sources.
      </p>
    </section>
  </div>
);

export default Week5;
