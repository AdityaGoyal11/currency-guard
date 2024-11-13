// src/components/weeks/Week1.js
import React from 'react';
import './Week.css'; // Optional: Add styling if needed

const Week1 = () => (
  <div className="week-content">
    <h2>Week 1: Understanding the Problem</h2>
    <p>
      <strong>Goal:</strong> The primary goal for this week is to establish a foundational understanding of in-game currency scams, 
      the methods scammers use to exploit players (especially younger audiences), and the resulting impact on these users.
    </p>
    <ol>
      {/* Scam Type 1 */}
      <li>
        <h4>Fake Websites Offering Free Currency</h4>
        <p>
          Fake websites are one of the most common scams targeting young players. These sites are carefully crafted to look like 
          legitimate sources affiliated with popular games and often use official-looking logos, colors, and fonts to create a 
          convincing facade.
        </p>
        <ul>
          <li>
            <strong>How They Work:</strong> These websites typically present an offer that seems too good to be true, like 
            "Get 10,000 V-Bucks for free!" or "Claim free Robux now!" The player is prompted to enter their username, password, 
            or even credit card details under the pretense that these are needed to verify their account or facilitate the "transaction." 
            Some sites may even simulate a fake "human verification" process where the player completes a short survey or captchas 
            to increase credibility.
          </li>
          <li>
            <strong>Tactics to Avoid Detection:</strong> These websites frequently change URLs and domain names to avoid detection 
            by game companies or security firms. Often, once a site is reported and taken down, a new one pops up under a slightly 
            different name.
          </li>
          <li>
            <strong>Psychological Manipulation:</strong> Young players are drawn to the promise of free currency, especially since 
            it allows them to purchase in-game items and stand out among peers. The design and wording are crafted to trigger 
            excitement and urgency, bypassing their natural skepticism.
          </li>
        </ul>
      </li>

      {/* Scam Type 2 */}
      <li>
        <h4>Phishing Scams via Email, Social Media, and In-Game Messaging</h4>
        <p>
          Phishing scams involve deceitful messages that impersonate official game representatives or even fellow players. These messages 
          may come through various channels, including email, social media platforms (e.g., Instagram, Facebook), or directly through 
          in-game messaging.
        </p>
        <ul>
          <li>
            <strong>How They Work:</strong> A phishing scam might start with an email or message claiming that the player’s account is 
            at risk or offering them a chance to win in-game rewards. Players are typically instructed to click on a link that takes them 
            to a fake login page resembling the official game site. Upon entering their details, scammers capture their credentials 
            and use them to access the account.
          </li>
          <li>
            <strong>In-Game Variants:</strong> In some games, scammers use in-game chat to reach potential victims. For example, a scammer 
            may send a message posing as an admin or another player offering an exclusive "deal" or "opportunity."
          </li>
          <li>
            <strong>Social Media Influence:</strong> Scammers often exploit the popularity of game-related social media accounts by posting 
            fake links in the comments or DMs of popular gaming influencers, directing followers to bogus pages promising free currency.
          </li>
        </ul>
      </li>

      {/* Scam Type 3 */}
      <li>
        <h4>Malicious Software Disguised as Cheats, Hacks, or Currency Generators</h4>
        <p>
          Malicious software (malware) scams target players looking for cheats, hacks, or currency generators to gain an advantage in games. 
          These scams are especially effective among players who may be struggling to progress in a game and are tempted by the promise of a "shortcut."
        </p>
        <ul>
          <li>
            <strong>How They Work:</strong> Players searching for ways to enhance gameplay or gain free currency may encounter websites or forums 
            offering "free hacks" or "currency generators." To access these cheats, players are instructed to download a file that supposedly 
            contains the promised tool. Once downloaded, the file installs malware on their device.
          </li>
          <li>
            <strong>Types of Malware Used:</strong> The malware can range from spyware, which monitors the player's activity and captures login credentials, to more invasive trojans or ransomware. In severe cases, malware can control the entire device, allowing scammers to access not just game accounts but also other sensitive information on the device.
          </li>
          <li>
            <strong>Real-World Impact:</strong>  This type of scam can have devastating effects, including data theft, financial loss, and in some cases, total control over the victim’s device. Reports have shown that malware disguised as gaming hacks has become increasingly sophisticated and can even evade detection by antivirus software for some time 
          </li>
        </ul>
      </li>

      {/* Scam Type 4 */}
      <li>
        <h4>Social Engineering in Gaming Communities and Forums</h4>
        <p>
          Social engineering scams in gaming communities involve scammers building relationships with players to exploit their trust. These scams 
          can be highly personalized, often involving a slow, calculated approach rather than the quick, automated methods seen in other scams.
        </p>
        <ul>
          <li>
            <strong>How They Work:</strong>  A scammer may join gaming forums, Discord servers, or other communities related to popular games. They may pose as fellow players, influencers, or even moderators. Over time, they build a rapport with young players, gaining their trust by sharing tips, offering in-game help, or providing small "gifts."

          </li>
          <li>
            <strong>Bait and Switch:</strong> Once trust is established, the scammer introduces an opportunity, such as a "giveaway" or an "investment" where they promise to double the player’s currency if the player shares their account details or currency first. In other cases, the scammer may convince the player to provide personal information for supposed rewards.

          </li>
          <li>
            <strong>Example:</strong> This scam is common on Discord, where scammers take advantage of the relaxed, peer-based environment to befriend players. It’s especially effective with younger players who might not realize they’re being manipulated. These social engineering tactics can be highly effective because they exploit the player’s social needs and the sense of community within the gaming world.


          </li>
        </ul>
      </li>

      {/* Scam Type 5 */}
      <li>
        <h4>Fake Giveaways and Competitions on Social Media and Streaming Platforms</h4>
        <p>
          With the rise of gaming influencers on platforms like YouTube, Twitch, and Instagram, scammers have increasingly exploited fake giveaways 
          and competitions to target followers.
        </p>
        <ul>
          <li>
            <strong>How They Work:</strong> A scammer creates a fake account impersonating a well-known gaming influencer and promotes a giveaway for 
            free currency or exclusive in-game items.
          </li>
          <li>
            <strong>Tactics on Streaming Platforms:</strong> On platforms like Twitch, scammers may use fake donation links or URLs in chat to direct viewers 
            to bogus websites where they are asked to enter their details.
          </li>
        </ul>
      </li>

      {/* Scam Type 6 */}
      <li>
        <h4>Fake Trade Offers or Item Sales</h4>
        <p>
          This scam involves trading or item-selling platforms where scammers offer to trade rare or valuable in-game items or currency. They may use 
          legitimate gaming marketplaces or in-game trading systems to offer items they don’t actually have.
        </p>
        <ul>
          <li>
            <strong>How They Work:</strong>  Scammers pose as trusted players with high-value items they’re willing to trade. They might ask for a partial payment upfront or request the player send their item first, claiming they’ll send their high-value item afterward. Once the player has sent their item or payment, the scammer vanishes
          </li>
          <li>
            <strong>Example</strong>  This type of scam is especially common in games with strong trading economies, such as Counter-Strike: Global Offensive (CS
) or Team Fortress 2, where items like weapon skins and accessories can hold significant real-world value. Young players looking to expand their collection or trade up in value are frequent targets.

          </li>
        </ul>
      </li>
    </ol>
    <section className="scam-insights">
      <h3>Why These Scams Are So Effective</h3>
      <ul>
        <li>
          <strong>Desire for Rewards and Status:</strong> Young players are enticed by promises of rare in-game items.
        </li>
        <li>
          <strong>Trust in Digital Interactions:</strong> Scammers exploit the lack of skepticism in younger audiences.
        </li>
        <li>
          <strong>Lack of Awareness:</strong> Many players are unaware of cybersecurity best practices and fail to recognize scams.
        </li>
      </ul>
    </section>
    <section className="references">
      <h3>References</h3>
      <ul>
        <li>“Gaming Malware on the Rise: The Threat of Cheat Software,” Cyber Threat Intelligence, 2021.</li>
        <li>“Understanding Social Engineering in Gaming,” Online Gaming and Security Journal, 2020.</li>
        <li>“The Impact of Phishing on Young Gamers,” Cybersecurity Magazine, 2022.</li>
        <li>“Fake Giveaways on Twitch and YouTube: The Hidden Threat,” TechBuzz Reports, 2021.</li>
        <li>“Item Trading Scams in Online Gaming Economies,” Game Economy Insight, 2022.</li>
      </ul>
    </section>
  </div>
);

export default Week1;
