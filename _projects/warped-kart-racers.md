---
title: Warped Kart Racers
subtitle: iOS, Mac, Apple TV
summary: I worked as a live ops designer on Apple Arcade's longest supported title.
thumb: /assets/img/highland-trip-thumb.jpg
hero: /assets/img/highland-trip.jpg
---

Warped Kart Racers is a kart racing game released on Apple Arcade, playable on Mac, iOS, and Apple TV, supporting touch, controller, and keyboard controls. As a member of the Warped Kart Racers team at Lively, I played a central role in shaping the gameplay experience and driving player engagement across five live updates.
{: .lede }

Reporting directly to the product owner, my responsibilities spanned live-ops analysis, gameplay design, and serving as the feature champion for new game modes. Initially contracted for two updates, our work helped maintain high player retention, prompting Apple to extend our contract for three additional updates. This extension made Warped Kart Racers the longest-supported title on Apple Arcade at the time.

## Key Contributions
- Live-ops analysis and design for five live updates
- Designed and then feature-championed three new game modes
- Wrote and maintained documentation on Confluence covering design, live-ops analysis, and playtest experiments
- Ran regular playtesting sessions with the team and wider studio and analyzed feedback
- Organized localization of in-game strings and achievements
- Pun master for achievements

![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture1.jpg' | relative_url }}){: .project-img }
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture2.jpg' | relative_url }}){: .project-img }

## League and Arcade Mode
In the initial releases, I contributed to the introduction of Arcade and League modes. Arcade mode was mostly feature complete when I joined the project, and my main contribution was the inclusion of new unique cosmetic items as rewards for beating different milestones, including a new type of item slot on karts: boosts. I was responsible for working out how boosts would fit into the existing kart customization UI and seasonal content.
League mode was a new game mode designed by me. The original intention was to have an online weekly tournament between players, but due to limitations on backend resources, we had to settle for a single-player weekly tournament against increasingly difficult AI. The player, upon winning races each week, would progress through different leagues of increasing difficulty from bronze to master. The first four difficulties reused AI difficulty profiles already in the game, but the two hardest leagues required new, harder difficulties.
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture3.png' | relative_url }}){: .project-img }
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture4.png' | relative_url }}){: .project-img }
A problem emerged in playtesting, since difficulty is mostly determined by the speed of the AI's kart compared to the player. When we increased the difficulty, it became more apparent that the AI karts were faster than the player. The solution required designing and working with programmers to set up a rubber banding system where the advantage the AI players had was hidden. They would only go very quickly when behind or far enough ahead of the player that their higher speed could not be easily seen.
I was responsible for all localization during my time on the project including the updates that contained League and Arcade mode. I ensured all necessary strings were included in our localization documentation, liaised with the external contractor who provided translations, ingested the translated strings into the game and updated achievements and metadata on App Store Connect.

## Elimination
With the contract extension, we embarked on crafting three new game modes with the goal of modifying the core experience, the first being Elimination. This battle royale-inspired mode challenged players by having the player in last place eliminated at set intervals until just one remained. Serving as the prototype for subsequent modes, Elimination allowed us to refine our UX flow and establish a rhythm of modifiers in weekly League events, laying the foundation for further game modes.
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture5.png' | relative_url }}){: .project-img }
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture6.png' | relative_url }}){: .project-img }
For this and the following game modes, I was the feature champion, owning stories and epics, working closely with other departments, and giving daily progress reports to the product owner. I also ran playtesting sessions with the wider studio and used this feedback to balance and improve the modes.

## Crowned
Crowned mode redefined battles, introducing a dynamic where one player, adorned with a crown, became the focal point of attention. Normal battles were similar in design to Balloon Battle in Mario Kart, with players earning points by hitting other players with items. In Crowned, the crowned player earned double points from hitting other players, but the crown could be stolen by hitting the crowned player.
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture7.png' | relative_url }}){: .project-img }
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture8.png' | relative_url }}){: .project-img }
This game mode required a lot of feedback and communication with the player. We also had to experiment a lot with the advantages the crowned player had. Should they also have a boost to speed? Should they have a temporary shield when they get the crown so they do not immediately lose it? Lots of experiments were carried out in the playtests to make the mode as engaging for both crowned and uncrowned players as possible. One of my key challenges was balancing the AI and how much they prioritized targeting the crowned player.

## Overcharged
The final game mode I designed was Overcharged. This was a race-only modifier that removed items from the track and replaced them with a battery on every kart. This battery is charged by drifting and directly affects the speed of its kart. A fully charged battery makes a kart go faster, and a low battery makes the kart slower. Charge can also be spent for a temporary speed boost.
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture9.png' | relative_url }}){: .project-img }
![Warped Kart Racers Screenshot]({{ '/assets/img/projects/warped-kart-racers/picture10.png' | relative_url }}){: .project-img }
The purpose of this game mode was to remove the random chance associated with items, catering to the desires of our passionate community. This mode provided a platform for showcasing mastery and skill, free from chance encounters. Through meticulous design and collaboration, we delivered a mode that resonated deeply with dedicated players.
