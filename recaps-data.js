/*
 * ================================================
 *  THE BASEBALL NERD — RANGERS RECAPS DATA
 *
 *  This is the ONLY file you need to edit when
 *  adding a new game recap.
 *
 *  Add new recaps at the TOP of the array so the
 *  most recent game always appears first.
 *
 *  FIELDS:
 *  id:       unique slug, no spaces (e.g. '4-7-26-royals')
 *  date:     display date (e.g. 'April 7, 2026')
 *  opponent: full team name (e.g. 'Kansas City Royals')
 *  home:     true if Rangers are home team, false if away
 *  result:   'win' or 'loss'
 *  score:    final score (e.g. 'TEX 5, KC 2')
 *  record:   Rangers record after game (e.g. '3-2')
 *  preview:  one sentence shown on the index card
 *  body:     full recap text — use \n\n between paragraphs
 * ================================================
 */

const RECAPS = [{
  id:'4-16-26-athletics',
  date:'2026-04-16',
  opponent:'Athletics',
  home:false,
  result:'win',
  score:'TEX 9, ATH 6',
  record:'10-9',  // ← fill in current record
  preview:"Sometimes a frustrated outfielder throwing water jugs in the dugout provides exactly the spark a team needs.",
  body:`Sometimes a frustrated outfielder throwing water jugs in the dugout provides exactly the spark a team needs. Wyatt Langford's ninth-inning tantrum became the catalyst for one of the Rangers' most improbable comebacks this season, turning a three-run deficit into a 9-6 victory over the Athletics at Sutter Health Park.

The Rangers entered the ninth trailing 6-3 after Nick Kurtz popped up a wind-aided ball that fell for an improbable double off Jakob Junis in the eighth, erasing what had been a two-run lead built on Josh Jung's seventh-inning homer. That bloop hit landed just in front of Langford. By the time the A's finished their three-run half inning, the mood in the visiting dugout had turned dark.

Between innings, Langford apparently decided the team needed a wake-up call. According to Jung, who spoke with Rangers sideline reporter Laura Stickells after the game, his teammate "threw some water jugs around and got the boys fired up." The display of frustration became a pressure valve for a team that had watched a winnable game slip away.

"I think everybody was kind of like calmed down a little bit," Jung explained with a laugh. "He kind of did it for all of us, probably. We were frustrated, but then we're just laughing. It's like one jug goes, and then the next goes, too."

Whatever the psychological effect, the Rangers immediately went to work against Justin Sterner. Kyle Higashioka reached on a fielder's choice that brought Jake Burger home when Sterner threw wildly, tying the game at six. Joc Pederson followed with a line drive single to center that scored Jung for the lead. Two batters later, Ezequiel Duran capped the four-run rally with a two-run single through the middle.

The comeback overshadowed what had been a grinding afternoon in Sacramento's 64-degree weather with 17-mph winds blowing left to right. Jack Leiter lasted just 5.2 innings in his fourth start, surrendering the lead in the fifth when Jacob Wilson and Carlos Cortes produced back-to-back RBI singles. The Rangers clawed back to even on Josh Smith's RBI double in the sixth, then seized control briefly on Jung's two-run shot in the seventh.

Cal Quantrill earned the victory with a clean ninth inning, but the story belonged to the unlikely rally that followed Langford's dugout dramatics. Sometimes leadership takes unconventional forms.`
},{
  id:'4-15-26-athletics',
  date:'2026-04-15',
  opponent:'Athletics',
  home:false,
  result:'loss',
  score:'TEX 5, ATH 6',
  record:'9-9',  // ← fill in current record
  preview:"Skip Schumaker took full responsibility for a loss that felt more like managerial miscalculation than player failure, and his postgame assessment carried the weight of someone who knew exactly when the game slipped away.",
  body:`Skip Schumaker took full responsibility for a loss that felt more like managerial miscalculation than player failure, and his postgame assessment carried the weight of someone who knew exactly when the game slipped away. "I think this game is solely on me," Schumaker said. "I made a bad strategy move in the middle of the game, and I put this one solely on me. The offense did their job, came back late with the big home run from Jake Burger. I put Cole Winn in a bad situation, and it ultimately cost us the game, in my opinion. So this one's on me."

The decision that haunted Schumaker came in the sixth inning, when he turned to Winn after pulling Jalen Beeks following a single inning of work. What happened next was spectacular in all the wrong ways for Texas. Shea Langeliers launched a four-pitch offering 467 feet to left center field, a moonshot that became the longest home run in Major League Baseball this season and turned a tied game into a two-run deficit. One inning later, Jacob Wilson added insult to injury with his own blast off Winn, extending the Athletics' lead to 6-2.

The conditions at Sutter Health Park practically screamed danger for pitchers willing to challenge hitters in the zone. With 65-degree temperatures and a nine-mph wind blowing out to center field, Kumar Rocker's early struggles made more sense in hindsight. The right-hander walked four batters in 4.2 innings, allowing early runs on Tyler Soderstrom's RBI double and Denzel Clarke's run-scoring single. Rocker either lacked command or was battling something else entirely, but the strategy of avoiding the strike zone proved costly when his replacements couldn't execute either.

The Rangers' offensive approach reflected a troubling trend in their early season work. Of their five hits, two left the ballpark for all five runs. Corey Seager's two-run homer in the third inning tied the game at 2-2, while Burger's three-run blast in the eighth nearly completed an improbable comeback. But with runners in scoring position just four times all night and converting only once, Texas showed little ability to manufacture runs beyond waiting for mistake pitches to drive. That approach left them one swing short when Joel Kuhnel closed out the ninth inning, preserving a 6-5 Athletics victory that felt equal parts preventable and predictable.`
},{
  id:'4-14-26-athletics',
  date:'2026-04-14',
  opponent:'Athletics',
  home:false,
  result:'loss',
  score:'TEX 1, ATH 2',
  record:'9-8',  // ← fill in current record
  preview:"Another lefty, another struggle for a Rangers offense that continues to unravel against southpaw pitching.",
  body:`Another lefty, another struggle for a Rangers offense that continues to unravel against southpaw pitching. Jeffrey Springs carved through Texas for 6.1 innings in a 2-1 Athletics victory at Sutter Health Park, extending the Rangers' troubling pattern against left-handed starters to 1-3 this season.

The game's cruel irony revealed itself in the third inning. MacKenzie Gore, who had navigated early trouble by stranding runners, finally cracked when Jacob Wilson laced a three-pitch ground ball to left field. The single scored Denzel Clarke and Shea Langeliers, transforming a 1-0 Rangers lead into a 2-1 deficit that would hold for the final six innings.

Texas had seized early momentum when Jake Burger drove home Brandon Nimmo with a line drive single in the first inning, rewarding an encouraging start against Springs. But that offensive burst proved fleeting. The Rangers managed just two more hits over the final eight frames, finishing a dismal 1-for-8 with runners in scoring position.

The numbers tell the story of missed opportunities. Texas stranded six runners, including four in scoring position with two outs. Josh Jung, Burger, Danny Jansen and Nimmo all came to the plate with chances to drive home runs in pressure spots, only to see those moments evaporate.

"Tonight was probably a combination of both approach and facing a good pitcher," manager Skip Schumaker said. "I thought in the first couple innings, our approach was really good. I thought we were going to put up maybe even a crooked number after Nimmo's leadoff double and then couple good at-bats after that. We had a couple good at-bats in the second, third inning, and then kind of lost our approach a little bit, swung outside the zone. Springs was good, too. He's been good."

Gore's command issues surfaced early and often. The left-hander walked six batters in 4.2 innings, constantly pitching from behind in counts. While he struck out five and limited hard contact, the free passes created the traffic that led to Wilson's decisive hit.

Springs, meanwhile, attacked the zone relentlessly. He walked just two Rangers while striking out five, retiring 15 of the final 19 batters he faced. Mark Leiter Jr. secured the save with a perfect ninth inning, striking out two to seal another frustrating night for a Texas offense that continues searching for answers against lefties.`
},
  {
    id:'4-13-26-athletics',
    date:'April 13, 2026',
    opponent:'Athletics',
    home:false,
    result:'win',
    score:'TEX 8, ATH 1',
    record:'9-7',
    preview:`Eovaldi threw seven shutout innings and Jake Burger hit two home runs as the Rangers beat the Athletics 8-1 in Sacramento. Texas went 5-for-15 with RISP despite the lopsided score.`,
    body:`Nathan Eovaldi delivered exactly what the Rangers needed on a mild Sacramento evening, spinning seven shutout innings in an 8-1 victory over the Athletics that showcased both his dominant stuff and the team's persistent offensive inefficiency with runners in scoring position.

The veteran right-hander was masterful from the first pitch, allowing just three hits while striking out seven and walking two. Eovaldi carved through the Athletics' lineup with surgical precision, needing only 91 pitches to complete seven frames and give the bullpen a much-needed breather. His early-season struggles now look like distant noise. This was the pitcher the Rangers envisioned when they brought him back, commanding the strike zone and attacking hitters with conviction.

Jake Burger provided the offensive fireworks with two towering home runs off Luis Severino. The first baseman's three-run blast in the opening frame scored Evan Carter and Corey Seager, giving Texas an immediate 3-0 cushion. He wasn't done. Burger launched his fourth homer of the young season in the third inning, a solo shot to right field that extended the lead to 4-0.

But beneath the comfortable final score lurked a troubling trend. The Rangers went just 5-for-15 with runners in scoring position, a 33% conversion rate that should concern anyone paying attention. Even in victory, Texas left opportunities scattered across the basepaths.

The eighth inning finally provided some breathing room when Josh Smith lined a two-RBI single to left field, plating Seager and Joc Pederson to make it 6-0. Josh Jung followed with a sharp double to center that scored Kyle Higashioka and Smith, pushing the lead to eight runs.

The Athletics' lone response came in the bottom half when Lawrence Butler took Luis Curvelo deep on the first pitch he saw, a solo homer that prevented the shutout but did little else. Sacramento managed just five hits total against Rangers pitching.

Severino lasted six innings for the Athletics but surrendered four earned runs on six hits, falling victim to Burger's power display early and never quite recovering his command. The 150-minute game time reflected multiple pitching changes and extended at-bats that stretched the proceedings well past the typical pace.

Eovaldi's gem saved valuable bullpen arms and provided the kind of dominant starting pitching performance that can anchor a rotation. The offense did enough damage, but those wasted scoring chances remain a nagging concern even in blowout wins.`
  },
  {
    id:'4-12-26-dodgers',
    date:'April 12, 2026',
    opponent:'Los Angeles Dodgers',
    home:false,
    result:'win',
    score:'TEX 5, LAD 2',
    record:'8-7',
    preview:`deGrom gave up a first-pitch homer to Ohtani, then struck out nine over six innings to earn the win. Jansen overturned four ABS challenges. Rangers won 5-2 at Dodger Stadium.`,
    body:`Jacob deGrom's afternoon started with the worst possible outcome. Shohei Ohtani turned on the very first pitch of the game and sent it screaming toward the right-center field wall. One swing, one run, and suddenly the Rangers ace found himself in an immediate deficit against baseball's most potent offense.

What followed was a masterclass in competitive fury. DeGrom didn't just bounce back from Ohtani's opening salvo. He dismantled the Dodgers' lineup with surgical precision over the next six innings, allowing nothing more damaging than four singles while striking out nine and walking three, including an intentional pass to the same Ohtani who had greeted him so rudely.

The right-hander's dominance came with assistance from an unexpected source behind the plate. Danny Jansen challenged five pitch calls that home plate umpires had ruled balls, and four were overturned in the Rangers' favor as strikes. In an era where catching framing gets dissected endlessly, Jansen's eye and advocacy for his pitcher proved decisive in maintaining deGrom's rhythm and command.

Texas clawed back methodically. Evan Carter answered Ohtani's blast with his own first-pitch home run in the third inning, a mirror image shot to right-center that leveled the score against Roki Sasaki. Josh Smith followed later that same inning with an RBI single that plated Joc Pederson and gave the Rangers their first lead.

The offensive breakthrough felt overdue given Texas's struggles with situational hitting. The Rangers went 2-for-14 with runners in scoring position and left 12 runners on base overall, including seven in scoring position with two outs. Those missed opportunities could have buried them against a Dodgers team that entered play leading the majors in runs scored.

Instead, Brandon Nimmo delivered twice when it mattered most. His sixth-inning groundout drove home Josh Jung for a crucial insurance run, then his eighth-inning RBI single extended the lead to 4-2 and effectively sealed the victory.

Kyle Tucker managed the Dodgers' only response to deGrom's recovery act, driving home Dalton Rushing in the seventh with a two-out single. But by then, the damage was done. DeGrom had transformed a nightmare opening into a statement performance, proving that even the best hitters in baseball couldn't solve him twice in the same afternoon.`
  },
  {
    id:'4-11-26-dodgers',
    date:'April 11, 2026',
    opponent:'Los Angeles Dodgers',
    home:false,
    result:'loss',
    score:'LAD 6, TEX 3',
    record:'7-7',
    preview:`Jack Leiter allowed four runs in the first inning and couldn't escape the third as the Rangers fell 6-3 at Dodger Stadium. Brandon Nimmo homered twice, accounting for all three Texas runs.`,
    body:`Jack Leiter's third start of the season unraveled in spectacular fashion during a disastrous first inning that sent the Rangers spiraling toward a 6-3 defeat at Dodger Stadium. What began as a promising evening after Brandon Nimmo's leadoff blast on just two pitches quickly devolved into a nightmare showcase of why Leiter remains a work in progress at the major league level.

The right-hander barely had time to savor Nimmo's early strike before everything collapsed. Shohei Ohtani answered immediately with a four-pitch home run to right field, knotting the score at one. Then came the sequence that defined the night. After Will Smith and Freddie Freeman reached base, Teoscar Hernandez demolished a three-pitch offering for a three-run bomb to left center, transforming a 1-1 tie into a 4-1 deficit faster than most fans could settle into their seats.

Leiter's command issues persisted throughout his abbreviated outing. The young starter walked four batters across just 3.2 innings, constantly pitching from behind in counts and serving up hittable strikes when he did find the zone. His night mercifully ended in the third inning after Hernandez drove in another run with a double-play grounder, a Will Smith run that extended the Dodgers' lead to 5-1 despite the twin killing.

Nimmo provided the lone bright spot in Texas's offensive attack, accounting for all three runs with a pair of home runs off Emmet Sheehan. His second blast in the sixth inning was particularly crucial, a two-run shot to right center that brought Josh Jung home and briefly rekindled hopes of a comeback. But the rest of the Rangers lineup managed just three hits across the game, going 0-for-3 with runners in scoring position and leaving three on base.

The bullpen trio of Tyler Alexander, Robert Garcia, and Chris Martin pitched admirably in relief, allowing just one run over 4.1 innings to keep the game within reach. Alexander was particularly effective across 2.1 scoreless frames. But Andy Pages' eighth-inning single off Martin, which scored Hernandez, provided the insurance run that sealed Texas's fate. Alex Vesia closed it out for the save.

Sheehan earned the victory by working six innings and limiting the damage to Nimmo's two swings. The right-hander struck out six while walking just one, demonstrating the kind of efficiency that eluded Leiter all evening. When your starter can't navigate the first inning without surrendering four runs, even heroic individual performances like Nimmo's aren't enough to salvage a road victory.`
  },
  {
    id:'4-10-26-dodgers',
    date:'April 10, 2026',
    opponent:'Los Angeles Dodgers',
    home:false,
    result:'loss',
    score:'LAD 8, TEX 7',
    record:'7-6',
    preview:"Bullpen meltdown at Dodger Stadium. After Kumar Rocker's five-inning start, three relievers were torched as the Rangers blew a late lead and lost 8-7 on Max Muncy's walk-off homer.",
    body:`Four Rangers relievers took the mound after Kumar Rocker's five-inning start, and three of them got torched in what became a bullpen meltdown at Dodger Stadium. The pen's collective 5 earned runs across 3.2 innings told the story of a 8-7 loss that slipped away in devastating fashion.

Robert Garcia entered for the sixth and immediately ran into trouble. The right-hander surrendered three hits and walked one in his lone inning of work, with Andy Pages delivering the crushing blow. Pages ripped a two-run double off Garcia that plated Max Muncy and Teoscar Hernández, flipping a 4-3 Rangers lead into a 5-4 deficit. Garcia's inability to keep runners off base set the tone for what followed.

Jalen Beeks provided the only bright spot from the bullpen, working a clean seventh inning despite allowing two hits. His scoreless frame kept the Rangers within striking distance, but the reprieve proved temporary.

Luis Curvelo took over for the eighth and got demolished. Pages ambushed him on just two pitches, launching a center field home run that scored Muncy and extended the Dodgers' lead to 7-4. Curvelo allowed four hits and a walk in his inning, matching Garcia's struggles with men on base. The Venezuelan righty couldn't locate his secondary pitches effectively, leaving too many offerings over the heart of the plate.

The Rangers mounted a stunning ninth-inning rally against Edwin Díaz, scoring three runs to tie the game at 7-7. Evan Carter's two-run homer and Ezequiel Duran's game-tying RBI single off the Dodgers closer gave Texas new life and seemingly rewarded their offensive persistence.

But Jacob Latz couldn't hold the tie. Skip Schumaker's decision to bring in the left-hander for the bottom of the ninth backfired spectacularly when Muncy turned on a 3-pitch sequence and deposited his fourth home run of the night over the right center field wall. Latz struck out two batters around the decisive blast, but the damage was done in just 0.2 innings of work.

The bullpen's collective failure overshadowed solid offensive contributions from Corey Seager's three-run homer and late-game heroics. Garcia, Curvelo, and Latz combined to allow 8 hits and 5 earned runs, proving unable to protect leads or maintain ties when the Rangers needed them most. Their struggles turned what should have been a competitive road victory into another painful lesson about bullpen depth.`
  },
  {
    id:'4-8-26-mariners',
    date:'April 8, 2026',
    opponent:'Seattle Mariners',
    home:true,
    result:'win',
    score:'TEX 3, SEA 0',
    record:'7-5',
    preview:"MacKenzie Gore struck out nine over five one-hit innings, and a chaotic fifth-inning rally gave Texas a 3-0 shutout win over Seattle. Attendance: 20,997.",
    body:"MacKenzie Gore's dominance carried the Rangers through four scoreless innings before the offense finally broke through in a chaotic fifth that decided this pitcher's duel at Globe Life Field. ..."
  },
  {
    id:'4-7-26-mariners',
    date:'April 7, 2026',
    opponent:'Seattle Mariners',
    home:true,
    result:'win',
    score:'TEX 3, SEA 2',
    record:'6-5',
    preview:"Kyle Higashioka's two-run homer in the fifth turned a 2-0 deficit into a 3-2 lead the Rangers never gave back. Eovaldi earned his first win of the season. Attendance: 22,411.",
    body:`Kyle Higashioka's two-run homer in the fifth inning turned what looked like another forgettable night at Globe Life Field into exactly the kind of spark this Rangers offense desperately needed. The veteran catcher's first home run of the season capped a three-run rally that erased Seattle's early lead and delivered a 3-2 victory in front of just 22,411 fans who witnessed something increasingly rare: clutch hitting when it mattered.

The Mariners had controlled the early narrative. Brendan Donovan needed just one pitch from Nathan Eovaldi to send a first-inning fastball over the right field wall, his third homer already this young season. Seattle doubled their advantage in the fifth when Cal Raleigh lined a three-pitch single to center, scoring Cole Young and pushing Donovan to third base. At 2-0, George Kirby looked poised to cruise through eight innings against a Rangers lineup that entered the night searching for any offensive rhythm.

Then the bottom of the fifth happened. Evan Carter started the comeback with a one-pitch single to right field, scoring Joc Pederson and cutting the deficit in half. Two batters later, Higashioka stepped in against Kirby and needed just two pitches to completely flip the script. His line drive found the left center field gap and kept carrying until it cleared the wall, bringing Carter home with him and putting Texas ahead 3-2.

That was all Eovaldi would need. The veteran right-hander worked six innings, allowing six hits and two earned runs while striking out seven Mariners. More importantly, he avoided the big inning that has plagued Rangers starters throughout this early season. Jacob Latz followed with two perfect innings of relief, and Jakob Junis navigated a nervous ninth inning for his first save despite allowing two hits.

Kirby deserved better than the loss. The Seattle starter went eight full innings, surrendering just six hits while walking nobody and striking out four. But in a game decided by execution in key moments, those three consecutive Rangers hitters in the fifth made the difference. For a franchise trying to maintain relevance after last season's championship run, nights like these feel essential. Small crowd, big moment. Sometimes that's enough.`
  },
  {
    id:'4-6-26-mariners',
    date:'April 6, 2026',
    opponent:'Seattle Mariners',
    home:true,
    result:'win',
    score:'TEX 2, SEA 1',
    record:'5-5',
    preview:"Jacob deGrom's second start of 2026 delivered five dominant innings, but it was Jake Burger's clutch sixth-inning double that gave Texas a 2-1 win over Seattle at Globe Life Field.",
    body:`Fifth-inning perfection from Jacob deGrom masked what became a grinding test of Texas bullpen depth. The Rangers ace delivered vintage deGrom through five innings, surrendering just one hit after Cal Raleigh's first-inning homer, but manager Bruce Bochy faced an increasingly delicate calculus as his rotation anchor exited after 83 pitches in his second start of 2026.

What followed was a masterclass in bullpen management. Six strikeouts against one walk suggested deGrom's trademark command remained sharp, but the Rangers needed four relievers to navigate the final four frames of a 2-1 victory over Seattle. Jalen Beeks earned the win with a scoreless sixth, though Tyler Alexander and Cole Winn combined for just one out in the eighth before Robert Garcia steadied the ship.

The offensive story centered on efficiency in rare scoring chances. Texas managed just seven hits against Logan Gilbert but capitalized when opportunities emerged. Corey Seager's first-inning single plated Wyatt Langford to immediately answer Raleigh's leadoff blast. The decisive blow came in the sixth when Jake Burger lined a double to left field, scoring Seager for what proved the winning margin.

Those moments of execution highlighted a frustrating pattern of squandered chances. The Rangers left five runners on base and managed just two hits in seven at-bats with runners in scoring position. Burger and Langford each grounded into double plays, killing potential rallies. With two outs and runners in scoring position, Texas went hitless in five attempts, including multiple failures by Burger despite his game-winning RBI.

Gilbert's six-inning effort kept Seattle within striking distance, but the Mariners offense managed just two hits total after the first inning. Julio Rodríguez, Josh Naylor and the bottom of the order combined to go hitless in 13 at-bats against Texas pitching.

Jakob Junis closed out a clean ninth for the save, completing a 147-minute affair that showcased both teams' early-season rust. The victory improved Texas to an encouraging start, though questions about rotation depth behind deGrom will require monitoring as April unfolds. For now, the bullpen answered when called upon, and clutch hitting from Seager and Burger provided just enough offense to secure Globe Life Field's first home victory of 2026.`
  },
  {
    id:'4-5-26-reds',
    date:'April 5, 2026',
    opponent:'Cincinnati Reds',
    home:true,
    result:'loss',
    score:'CIN 2, TEX 1',
    record:'4-5',
    preview:"Jack Leiter delivered the kind of performance that validates organizational patience, striking out nine Reds across five innings while allowing just four hits and one earned run in his second start of 2026.",
    body:`Jack Leiter delivered the kind of performance that validates organizational patience, striking out nine Reds across five innings while allowing just four hits and one earned run in his second start of 2026. The young right-hander looked sharp in the Globe Life Field afternoon sun, but his effort went for naught as Texas fell 2-1 to Cincinnati in a game that turned on late-inning execution.

The Rangers' offensive struggles with runners in scoring position told the familiar story of wasted opportunities. Texas went 0-for-6 with runners in scoring position and stranded eight baserunners, leaving Brandon Nimmo twice in those crucial spots and watching Wyatt Langford, Jake Burger, and Evan Carter each fail to deliver with two outs and runners threatening. Corey Seager's 0-for-4 day with two strikeouts exemplified the lineup's inability to break through against Cincinnati starter Chase Burns, who matched Leiter's dominance with nine strikeouts over six innings.

The breakthrough moments came in quick succession after both starters departed. Joc Pederson provided the Rangers' lone offensive highlight in the seventh inning, taking Burns deep to right field on a four-pitch at-bat for his first home run of the season. The variable 12 mph wind at Globe Life Field proved favorable for the veteran designated hitter's fly ball, evening the score at 1-1 and momentarily silencing the growing frustration among the 31,561 in attendance.

That momentum evaporated in the eighth when Robert Garcia's brief outing unraveled spectacularly. The reliever lasted just one-third of an inning, walking two batters before surrendering the decisive blow. Elly De La Cruz, who had scored Cincinnati's first run in the fourth on Eugenio Suárez's single to center, delivered the knockout punch with a ground ball single to right field that scored Matt McLain. Garcia's inability to locate the strike zone, evident in his two walks without recording a strikeout, epitomized the bullpen's failure in a winnable contest.

The 173-minute affair showcased the kind of pitching-heavy baseball that defines early season contests, but ultimately highlighted Texas's persistent offensive inconsistencies. Despite solid contributions from the bottom of the order, including hits from Kyle Higashioka and Carter, the Rangers couldn't capitalize when it mattered most. Brock Burke's perfect ninth inning secured the save for Cincinnati, striking out three Rangers to cap a frustrating afternoon in Arlington.`
  },
  {
    id:'4-4-26-reds',
    date:'April 4, 2026',
    opponent:'Cincinnati Reds',
    home:true,
    result:'loss',
    score:'CIN 2, TEX 0',
    record:'4-4',
    preview:"Opening night at Globe Life Field became a sobering reminder that baseball's cruelest mathematics often reduce to the simplest equation: two swings in the first inning, zero answers over the final eight.",
    body:`Opening night at Globe Life Field became a sobering reminder that baseball's cruelest mathematics often reduce to the simplest equation: two swings in the first inning, zero answers over the final eight. Kumar Rocker's Rangers debut dissolved into frustration as Cincinnati's Rhett Lowder authored a masterclass in precision pitching, blanking Texas 2-0 in front of 36,393 fans who watched their offense sputter through a season-opening shutout.

The damage arrived with surgical efficiency in the top of the first. Matt McLain reached base, and Elly De La Cruz promptly lined a four-pitch offering from Rocker into center field, plating the game's opening run as Evan Carter could only watch the ball skip past his glove. Three pitches later, Sal Stewart ripped a sharp liner to right field that Brandon Nimmo had no chance to cut off, scoring De La Cruz and staking the Reds to a 2-0 advantage before most fans had settled into their seats.

That early deficit would prove insurmountable against Lowder, who carved through the Rangers lineup with methodical precision. The right-hander scattered three hits across six innings, consistently locating his fastball and changing eye levels to keep Texas hitters off balance. Corey Seager managed one of only four Rangers hits, while Jake Burger and Josh Jung added singles in what became a frustrating exercise in stranded baserunners and missed opportunities.

Rocker settled after the rocky opening frame, working through five innings while allowing six hits and striking out three. The former Vanderbilt standout found his rhythm quickly, but the early damage lingered like a weight around the Rangers' collective neck. His bullpen mates, Jalen Beeks, Jacob Latz, Carter Baumler, and Tyler Alexander, combined for four scoreless innings that kept the game within reach.

The Rangers managed just two at-bats with runners in scoring position, going hitless in both opportunities. Joc Pederson left a runner at second in the fifth before grounding into a double play, while Carter stranded another scoring chance in the seventh. Eight runners left on base told the story of an offense that generated traffic but couldn't manufacture the clutch hit necessary to break through against Cincinnati's pitching staff.

Emilio Pagán closed out the ninth inning for his first save, walking two Rangers but escaping without damage. The loss dropped Texas to 0-1 in what figures to be a long season if their offensive struggles persist beyond this opening stumble.`
  },
  {
    id:'4-3-26-reds',
    date:'April 3, 2026',
    opponent:'Cincinnati Reds',
    home:true,
    result:'loss',
    score:'CIN 5, TEX 3',
    record:'4-3',
    preview:"Chris Martin's ninth-inning meltdown turned what should have been a crisp home opener into a painful lesson about closer hierarchy.",
    body:`Chris Martin's ninth-inning meltdown turned what should have been a crisp home opener into a painful lesson about closer hierarchy. The veteran right-hander, tasked with preserving a 3-3 tie, surrendered a two-run homer to Tyler Stephenson on his eighth pitch of the frame, gifting Cincinnati a 5-3 victory that left 37,635 fans shuffling toward the exits under the late afternoon sun at Globe Life Field.

Martin's collapse overshadowed what had been a tightly contested affair built around explosive individual moments. The Reds struck first in the second when Spencer Steer launched a two-run blast off MacKenzie Gore, but Danny Jansen answered immediately in the bottom half with a sharp double that plated Josh Jung and Evan Carter to level the score. The game stayed knotted until Elly De La Cruz took Gore deep in the sixth, his line drive finding the left-center gap for what appeared to be the decisive blow.

Gore's performance deserved better. The southpaw struck out nine over six innings while walking nobody, keeping Cincinnati's aggressive lineup largely in check despite surrendering three runs. His nine strikeouts represented the kind of swing-and-miss stuff that made him an attractive trade target, even as the three home runs reminded everyone why consistency remains elusive.

Wyatt Langford provided the heroics Texas needed in the seventh, ripping a double off Graham Ashcraft that brought home Brandon Nimmo and restored the deadlock. The moment felt like a breakthrough for the young outfielder, who entered the season with questions about his power stroke. Cole Winn and Jakob Junis bridged the gap to the ninth with clean innings, setting up what should have been a routine save situation.

Instead, Martin's command deserted him when it mattered most. Stephenson worked the count full before turning on a middle-middle fastball, sending it over the right-center wall with Steer aboard. The two-run shot highlighted Texas's bullpen depth concerns, particularly in high-leverage spots where margins for error disappear.

The Rangers managed just three hits with runners in scoring position, stranding seven baserunners in a game that demanded timely hitting. Corey Seager's three-strikeout afternoon epitomized the offensive struggles, as Cincinnati's pitching staff kept Texas off balance throughout. Brady Singer limited the damage over five innings before the Reds' bullpen closed things out efficiently. Tony Santillan earned the victory with a scoreless eighth, while Emilio Pagán secured his first save of the season.`
  },
  {
    id:'4-1-26-orioles',
    date:'April 1, 2026',
    opponent:'Baltimore Orioles',
    home:false,
    result:'loss',
    score:'BAL 9, TEX 4',
    record:'4-2',
    preview:"Fourth innings have a way of fooling you in baseball. When Josh Jung and Ezequiel Duran drove in two runs to tie things at Camden Yards, it felt like Nathan Eovaldi might have found his footing after a shaky start.",
    body:"Fourth innings have a way of fooling you in baseball. When Josh Jung and Ezequiel Duran drove in two runs to tie things at Camden Yards, it felt like Nathan Eovaldi might have found his footing after a shaky start. The veteran right-hander had surrendered four runs through three frames, but the Rangers had clawed back with timely hitting against Trevor Rogers. Maybe this would be different.\n\nIt wasn't. The fifth inning arrived like a sledgehammer.\n\nEovaldi's command, which had been spotty all afternoon, completely abandoned him when he needed it most. Samuel Basallo launched a solo shot to center field, his first big league homer in what might be a breakout season for Baltimore's catching prospect. Two batters later, after Dylan Beavers reached base, Jeremiah Jackson lined an RBI single that made it 6-2. When Taylor Ward lifted a sacrifice fly moments later, the damage was complete. Seven runs allowed through 4.2 innings. Not the kind of outing you expect from a pitcher who finished fourth in Cy Young voting just two seasons ago.\n\nEovaldi's struggles highlighted a concerning trend for Texas early in this season. The 34-year-old's fastball velocity looked fine, sitting in his usual mid-90s range, but his location was off by margins that become canyons at the major league level. His slider, typically a put-away pitch, hung in zones where big league hitters feast. Baltimore's lineup, retooled with Pete Alonso and featuring emerging young talent like Basallo and Beavers, took full advantage.\n\nBeavers particularly stood out, going 3-for-5 with a solo homer in the sixth that put an exclamation point on the rout. The outfielder's bat has been a revelation for an Orioles organization already rich with position player talent.\n\nCorey Seager provided the lone bright spot for Texas with a solo homer in the eighth, his third of the young season. But by then, Rogers had already logged six solid innings for the win, scattering six hits while keeping the Rangers' dangerous middle order largely in check.\n\nThe loss drops Texas to an early hole they'll need to dig out of quickly. When your veteran ace gets shellacked like this, particularly against a division rival building momentum, it stings in ways that go beyond the box score."
  },
  {
    id:'3-31-26-orioles',
    date:'March 31, 2026',
    opponent:'Baltimore Orioles',
    home:false,
    result:'win',
    score:'TEX 6, BAL 4',
    record:'4-1',
    preview:"Sometimes the most telling moment in a baseball game happens when everything appears secure. Chris Martin entered the ninth inning with a four-run cushion, the kind of lead that should make closing duties feel routine.",
    body:"Sometimes the most telling moment in a baseball game happens when everything appears secure. Chris Martin entered the ninth inning with a four-run cushion, the kind of lead that should make closing duties feel routine. Instead, Camden Yards witnessed exactly why no advantage feels safe in modern baseball.\n\nMartin surrendered a two-run double to Taylor Ward that cut the Rangers' lead in half, transforming what looked like a comfortable victory into something requiring actual attention. The veteran closer escaped without further damage, but not before reminding everyone that Baltimore's offense remains capable of late-inning theatrics even in a losing effort.\n\nThe drama felt appropriate for a game that never quite settled into predictable rhythms. Jacob deGrom pitched like someone still working back from injury concerns, lasting just 4.2 innings despite striking out seven. His command looked sharp enough, but the Orioles made consistent contact when they needed to. Pete Alonso's fourth-inning homer tied the game at one, and Gunnar Henderson's two-run double in the fifth briefly gave Baltimore a lead.\n\nWhat separated these teams was depth, both offensive and bullpen. Danny Jansen provided the decisive blow with a three-run homer in the seventh that gave Texas breathing room they thought they wouldn't need. The veteran catcher's blast came at the perfect moment, capitalizing on Baltimore's decision to stick with Yaramil Hiraldo perhaps one batter too long.\n\nCorey Seager delivered the kind of performance that justifies his contract extension, collecting two hits including a solo homer in the ninth that ultimately provided the winning margin. His ability to impact games both early and late has become a signature trait, and Tuesday's effort showcased exactly why the Rangers view him as irreplaceable.\n\nCole Winn earned the victory with 1.1 innings of scoreless relief, the kind of middle-innings contribution that often determines close games. His presence allowed manager Bruce Bochy to navigate deGrom's early exit without overextending the bullpen's key arms.\n\nWard finished 4-for-5 for Baltimore, a performance that deserved a better outcome. His late rally attempt highlighted how dangerous the Orioles can be even when trailing significantly.\n\nThe Rangers improved their early-season record while learning that comfortable leads require constant vigilance. Martin's ninth-inning scare served as a useful reminder that every out matters, regardless of the scoreboard situation."
  },
  {
    id:'3-30-26-orioles',
    date:'March 30, 2026',
    opponent:'Baltimore Orioles',
    home:false,
    result:'win',
    score:'TEX 5, BAL 2',
    record:'3-1',
    preview:"Camden Yards witnessed Jack Leiter's finest outing of the young season Sunday afternoon, as the Rangers' right-hander carved up Baltimore's lineup for eight strikeouts across six innings.",
    body:"Camden Yards witnessed Jack Leiter's finest outing of the young season Sunday afternoon, as the Rangers' right-hander carved up Baltimore's lineup for eight strikeouts across six innings in a 5-2 victory. The second-year starter found his command early and never wavered, allowing just five hits while walking one in what amounted to a statement performance against an improved Orioles club.\n\nThe game's trajectory shifted decisively in the second inning after Gunnar Henderson's solo homer had knotted things at one apiece. Texas erupted for three runs against Chris Bassitt, who struggled with his location throughout an abbreviated 4.1-inning start. Brandon Nimmo drove home the go-ahead run with a ground ball single to right, scoring Evan Carter from second base. Jake Burger followed with another RBI single, this one a line drive that plated Kyle Higashioka. Joc Pederson capped the rally with a sacrifice fly to left, giving the Rangers a 4-1 advantage they wouldn't relinquish.\n\nBurger emerged as the offensive catalyst, collecting two hits and two RBIs while scoring once. His first-inning RBI came courtesy of a fielder's choice that turned chaotic when Bassitt's throw sailed wide, allowing Nimmo to score and setting the tone for Baltimore's defensive struggles. Nimmo contributed two hits of his own, scoring twice and driving in a run from the leadoff spot.\n\nThe Orioles managed to scratch across another run in the fifth when Henderson delivered his second RBI of the afternoon, a ground ball single that scored Colton Cowser. But that marked their final breakthrough against Leiter, who induced weak contact and dominated the strike zone when protection was needed. Henderson finished 2-for-4 with both Baltimore RBIs, the lone bright spot in an otherwise frustrating offensive showing.\n\nJosh Smith provided insurance in the ninth inning with a clutch RBI single off Tyler Wells, scoring Burger with what proved to be the decisive run. The Rangers bullpen handled the final three frames without incident, with Tyler Alexander earning his first save of the season by retiring the side in order during the ninth. Baltimore managed just two hits over those final three innings, unable to mount any serious threat against Texas relievers who threw strikes and challenged hitters consistently."
  },
  {
    id:'3-29-26-phillies',
    date:'March 29, 2026',
    opponent:'Philadelphia Phillies',
    home:false,
    result:'win',
    score:'TEX 8, PHI 3',
    record:'2-1',
    preview:"Andrew McCutchen's three-run blast in the fourth inning turned a methodical Rangers victory into a rout, capping a commanding road performance that saw Texas dismantle Philadelphia 8-3 at Citizens Bank Park.",
    body:"Andrew McCutchen's three-run blast in the fourth inning turned a methodical Rangers victory into a rout, capping a commanding road performance that saw Texas dismantle Philadelphia 8-3 at Citizens Bank Park. The veteran designated hitter's towering drive to left field broke open what had been a tight contest and provided the cushion MacKenzie Gore needed to work through his occasional control issues.\n\nGore earned his first win of the season despite walking three batters over 5.1 innings, striking out seven Phillies while allowing just two hits. The left-hander looked sharp early, carrying a no-hitter into the fifth before Philadelphia finally broke through in the sixth. His ability to limit hard contact proved more valuable than pristine command, as the Phillies managed only scattered baserunners against his mix of breaking balls and well-located fastballs.\n\nThe Rangers built their lead gradually before McCutchen's explosion. Brandon Nimmo opened the scoring in the third with a two-run homer that brought home Sam Haggerty, who had reached on a single. That blast seemed to unlock something in the Texas offense, which had managed just two hits through the first two frames against Jesus Luzardo.\n\nLuzardo, making his Philadelphia debut after an offseason trade, couldn't find his rhythm against a patient Rangers lineup. The southpaw surrendered six earned runs over six innings, struggling particularly with his slider command in key situations. McCutchen's three-run shot came on a hanging breaking ball that never had a chance once it left the bat.\n\nTexas added insurance runs in the seventh when Ezequiel Duran doubled home Evan Carter and later scored on a Corey Seager sacrifice fly. The Rangers' approach looked disciplined throughout, working deep counts and capitalizing when Phillies pitchers fell behind in the count.\n\nPhiladelphia's offense sputtered against Gore and the Texas bullpen. Bryce Harper walked twice but never found a pitch to drive, while Trea Turner went hitless in four at-bats despite reaching base twice. The Phillies managed just four hits total, with only Bryson Stott's eighth-inning RBI single providing any sustained threat.\n\nThe victory marked an encouraging start for a Rangers rotation that enters 2026 with questions. Gore's performance suggested he might provide more stability than expected, particularly if his strikeout rate holds up over a full season."
  },
  {
    id:'3-28-26-phillies',
    date:'March 28, 2026',
    opponent:'Philadelphia Phillies',
    home:false,
    result:'win',
    score:'TEX 4, PHI 3 (10)',
    record:'1-1',
    preview:"Late-inning collapses have haunted this Rangers franchise for years, but Friday night at Citizens Bank Park showcased something different entirely.",
    body:"Late-inning collapses have haunted this Rangers franchise for years, but Friday night at Citizens Bank Park showcased something different entirely. A team that watched a commanding 3-0 lead evaporate in the ninth inning found a way to regroup and deliver when the stakes peaked in extras.\n\nThe initial script looked familiar enough. Corey Seager launched a solo shot in the first, his swing as smooth as ever in the early spring air. Jake Burger followed with a two-run blast in the third that scored Brandon Nimmo and gave Texas what felt like a comfortable cushion. Aaron Nola was laboring through his pitch count, and Jacob Latz was carving through Philadelphia's lineup with surgical precision through four scoreless frames.\n\nThen came the ninth inning meltdown that would have defined previous Rangers seasons. Robert Garcia and Chris Martin combined to surrender three runs in the frame, watching Philadelphia scratch and claw back from the dead. Adolis Garcia, wearing Phillies red now, doubled home Alec Bohm before Brandon Marsh delivered the knockout punch with a two-run single that silenced the visiting dugout.\n\nBut this Rangers group refused to fold. Andrew McCutchen, the veteran presence acquired specifically for moments like these, stepped up in the tenth with runners in scoring position. His ground ball single to left looked routine off the bat, but it carried the weight of a franchise trying to prove its mental toughness. Langford scored easily, and suddenly Texas held the lead again.\n\nTyler Alexander, working his second inning of relief, faced immediate pressure when Philadelphia managed to scratch across one run in the bottom half. With Otto Kemp ninety feet away and Bryce Harper's RBI single providing life, the Phillies had the tying run at third base. Alexander buckled down, inducing a critical strikeout to end the threat and secure his first save of the season.\n\nThe victory belonged to Chris Martin despite his ninth-inning struggles, a quirk of baseball's scoring rules that felt oddly appropriate. Sometimes winning requires surviving your worst moments, then finding just enough left in the tank when everything hangs in the balance."
  },
  {
    id:'3-26-26-phillies',
    date:'March 26, 2026',
    opponent:'Philadelphia Phillies',
    home:false,
    result:'loss',
    score:'PHI 5, TEX 3',
    record:'0-1',
    preview:"Too little, too late. That cruel baseball cliche played out in vivid detail at Citizens Bank Park as the Rangers mounted a frantic ninth-inning rally that fell just short.",
    body:"Too little, too late. That cruel baseball cliche played out in vivid detail at Citizens Bank Park as the Rangers mounted a frantic ninth-inning rally that fell just short of erasing eight innings of offensive futility.\n\nFor 24 outs, Cristopher Sanchez and the Philadelphia bullpen made Rangers hitters look like they were swinging underwater. Sanchez carved through the Texas lineup with surgical precision, retiring 18 of 20 batters while striking out 10. The left-hander's changeup buckled knees and induced weak contact, leaving Rangers runners stranded in the few moments they managed to reach base. Through eight frames, the visitors had managed just three hits and looked completely overmatched.\n\nThen the ninth inning happened. With Philadelphia closer Kyle Backhus on the mound protecting a five-run cushion, everything unraveled in spectacular fashion. Jake Burger launched a two-run homer to left center, his first long ball of the spring, cutting the deficit to 5-2. The Citizens Bank Park crowd, comfortable moments earlier, began shifting nervously as Danny Jansen followed with an RBI single that scored Kyle Higashioka and suddenly made it a two-run game.\n\nThe comeback bid represented everything that had been missing for eight innings. Burger's blast came on a 1-0 fastball that he turned on with authority, the kind of aggressive approach that had been notably absent earlier. Jansen's clutch hit with two outs showed the situational hitting that championship teams require. But Jhoan Duran entered and struck out the final batter to strand the tying run at second base.\n\nNathan Eovaldi's struggles set the tone early and often. The veteran right-hander allowed eight hits in 4.2 innings, including Kyle Schwarber's first-inning two-run homer and Alec Bohm's crushing three-run blast in the fifth that effectively decided the contest. Eovaldi's four-seam fastball lacked its typical bite, sitting in hittable zones too frequently against a disciplined Phillies lineup.\n\nThe loss highlighted familiar concerns about offensive consistency. Beyond Burger's heroics and Seager's two-hit effort, the Rangers managed little sustained pressure. Wyatt Langford struck out twice, continuing early-season struggles that bear monitoring as camp progresses."
  },
];
