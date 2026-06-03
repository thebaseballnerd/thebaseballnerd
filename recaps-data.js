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
 *  gamePk:   MLB Stats API game ID (for MLB Stories embed)
 *  preview:  one sentence shown on the index card
 *  body:     full recap text — use \n\n between paragraphs
 * ================================================
 */

const RECAPS = [
// AUTO-GENERATED: 2026-06-02
{
  id:"2026-06-02-rangers-at-cardinals",
  date:"2026-06-02",
  awayTeam:"Texas Rangers",
  homeTeam:"St. Louis Cardinals",
  away_runs:7,
  home_runs:4,
  result:"loss",
  score:"Texas Rangers 7, St. Louis Cardinals 4",
  winner:"Cal Quantrill",
  loser:"Riley O'Brien",
  save:"Jakob Junis",
  gamePk:823052,
  preview:"The Cardinals outhit the Rangers 13 to 9 but watched a comfortable lead evaporate in the ninth inning as Texas scored three runs to steal a 7-4 victory at Busch Stadium. St. Louis",
  body:`The Cardinals outhit the Rangers 13 to 9 but watched a comfortable lead evaporate in the ninth inning as Texas scored three runs to steal a 7-4 victory at Busch Stadium. St. Louis had controlled the game's rhythm early, taking a 2-0 lead on Jimmy Crooks' RBI single in the second and Nolan Gorman's seventh home run in the fourth, both off Nathan Eovaldi. When Jordan Walker's single tied the game 4-4 in the seventh, it felt like the Cardinals might find another gear. Instead, Riley O'Brien walked into a buzzsaw.

The ninth inning unraveled with surgical precision. Joc Pederson lined a single to left field to score Evan Carter and break the tie. Josh Jung followed with another single to right, driving home Michael Helman. Brandon Nimmo capped the rally with a sacrifice fly that brought Pederson home for the final margin. O'Brien allowed three hits and three runs in his lone inning of work, taking the loss as the Cardinals fell silent after carrying a 4-4 tie into the final frame. Cal Quantrill earned the win despite throwing just one-third of an inning, while Jakob Junis locked down the save with a clean ninth. Pederson finished 3-for-4 with two RBIs, and Kyle Higashioka collected three hits as Texas salvaged what looked like a lost cause.`
},
{
  id:"2026-06-02-athletics-at-cubs",
  date:"2026-06-02",
  awayTeam:"Athletics",
  homeTeam:"Chicago Cubs",
  away_runs:2,
  home_runs:1,
  result:"loss",
  score:"Athletics 2, Chicago Cubs 1",
  winner:"Gage Jump",
  loser:"Jameson Taillon",
  save:"Hogan Harris",
  gamePk:824675,
  preview:"The Athletics turned a first-inning deficit into a 2-1 victory at Wrigley Field, riding Gage Jump's dominant seven-inning performance to steal a low-scoring affair from the Cubs. C",
  body:`The Athletics turned a first-inning deficit into a 2-1 victory at Wrigley Field, riding Gage Jump's dominant seven-inning performance to steal a low-scoring affair from the Cubs. Chicago struck first when Nico Hoerner scored on Alex Bregman's groundout in the bottom of the first, but that early lead would be all Jameson Taillon could protect. Nick Kurtz answered in the third with his 11th home run of the season, a fly ball to left center that knotted the game at 1-1.

The Athletics grabbed the lead for good in the fourth when Zack Gelof delivered the game-winner, lining a single to center field that scored Brent Rooker and moved Henry Bolte to second base. Jump was masterful after allowing that first-inning run, surrendering just two more hits over his final six innings while striking out five Cubs batters. Taillon matched him pitch for pitch until the fourth, but those two runs in consecutive innings proved costly as Chicago managed just four hits total against Athletics pitching. Hogan Harris earned the save, preserving a crucial road victory for the A's in front of 36,065 at Wrigley Field.`
},
{
  id:"2026-06-02-orioles-at-sox",
  date:"2026-06-02",
  awayTeam:"Baltimore Orioles",
  homeTeam:"Boston Red Sox",
  away_runs:4,
  home_runs:2,
  result:"loss",
  score:"Baltimore Orioles 4, Boston Red Sox 2",
  winner:"Shane Baz",
  loser:"Connelly Early",
  save:"Rico Garcia",
  gamePk:824754,
  preview:"The Orioles turned what looked like another Red Sox home opener into their own power showcase, riding home runs from Pete Alonso and Coby Mayo to a 4-2 victory at Fenway Park. Balt",
  body:`The Orioles turned what looked like another Red Sox home opener into their own power showcase, riding home runs from Pete Alonso and Coby Mayo to a 4-2 victory at Fenway Park. Baltimore struck early and often against Connelly Early, who surrendered all four runs through 5.1 innings as the visitors seized control with three straight scoring innings. Mayo's solo blast in the second tied the game after the Red Sox had grabbed a first-inning lead on Wilyer Abreu's sacrifice fly, but Alonso's two-run shot in the third put Baltimore ahead for good.

The Orioles tacked on an insurance run in the fourth when Blaze Alexander drove home Tyler O'Neill with another sacrifice fly, building a 4-1 cushion that would prove decisive. Shane Baz weathered an early stumble to earn the win, allowing just four hits over seven innings despite giving up both Boston runs on sacrifice flies. The Red Sox managed only five hits total, with Jarren Duran and Masataka Yoshida each striking out three times. Rico Garcia locked down the save with a perfect ninth inning, striking out two to finish off Baltimore's road victory in front of 35,004 at Fenway.`
},
{
  id:"2026-06-02-sox-at-twins",
  date:"2026-06-02",
  awayTeam:"Chicago White Sox",
  homeTeam:"Minnesota Twins",
  away_runs:4,
  home_runs:6,
  result:"win",
  score:"Chicago White Sox 4, Minnesota Twins 6",
  winner:"Connor Prielipp",
  loser:"Davis Martin",
  save:"Yoendrys Gómez",
  gamePk:823700,
  preview:"The Twins turned a 3-0 deficit into a commanding lead with an explosive fourth inning that broke the game wide open. Davis Martin, who had surrendered three runs in the third, watc",
  body:`The Twins turned a 3-0 deficit into a commanding lead with an explosive fourth inning that broke the game wide open. Davis Martin, who had surrendered three runs in the third, watched his afternoon unravel completely as Minnesota sent nine batters to the plate in the fourth. Luke Keaschall started the rally with a line drive single to left that scored Trevor Larnach, cutting the deficit to 3-2. Tristan Gray followed with another single to left, plating Austin Martin and Keaschall to give the Twins their first lead at 4-3. Alex Jackson capped the four-run frame with a fly ball single to right that scored Gray, pushing Minnesota ahead 5-3.

The damage continued into the fifth as Martin allowed his sixth and final run when Keaschall singled to left again, this time driving home Josh Bell. Miguel Vargas had given Chicago their early advantage with a two-RBI single in the third that scored Chase Meidroth and Randal Grichuk, but the White Sox managed just one more run the rest of the way. Chase Meidroth's ground ball single in the seventh brought home Luisangel Acuña, who had stolen three bases in the game, but it only cut Minnesota's lead to 6-4. Yoendrys Gómez closed out the final 1.1 innings without allowing a hit to earn the save, while Prielipp picked up the win despite lasting only six innings and allowing four earned runs.`
},
{
  id:"2026-06-02-guardians-at-yankees",
  date:"2026-06-02",
  awayTeam:"Cleveland Guardians",
  homeTeam:"New York Yankees",
  away_runs:9,
  home_runs:4,
  result:"loss",
  score:"Cleveland Guardians 9, New York Yankees 4",
  winner:"Colin Holderman",
  loser:"Cam Schlittler",
  save:"",
  gamePk:823541,
  preview:"Paul Goldschmidt looked ready to power the Yankees to victory at home, driving in four runs through the first four innings to stake New York to a 4-3 lead. His two-run homer in the",
  body:`Paul Goldschmidt looked ready to power the Yankees to victory at home, driving in four runs through the first four innings to stake New York to a 4-3 lead. His two-run homer in the third inning answered Cleveland's early sacrifice fly, and his two-run single in the fourth seemed to give the Yankees control after Kyle Manzardo's two-run blast had briefly put the Guardians ahead. But Cam Schlittler couldn't hold the lead, surrendering the tying and go-ahead runs in the fifth inning on a Travis Bazzana sacrifice fly and José Ramírez's double that scored Patrick Bailey.

The Guardians pulled away with patient hitting and timely power, capitalizing on every opportunity the Yankees' bullpen provided. Ramírez collected his second double of the game in the seventh inning off Tim Hill, driving home Brayan Rocchio to extend Cleveland's lead to 6-4. The knockout punch came in the eighth when Bazzana ripped a three-run double off Camilo Doval, bringing home Angel Martínez, Daniel Schneemann and Steven Kwan. Colin Holderman earned the win with a perfect fifth inning, and Cleveland's bullpen shut down New York completely over the final five frames, allowing just two hits while the offense piled up 12 hits total in the 9-4 victory.`
},
{
  id:"2026-06-02-rockies-at-angels",
  date:"2026-06-02",
  awayTeam:"Colorado Rockies",
  homeTeam:"Los Angeles Angels",
  away_runs:8,
  home_runs:2,
  result:"loss",
  score:"Colorado Rockies 8, Los Angeles Angels 2",
  winner:"Tomoyuki Sugano",
  loser:"Grayson Rodriguez",
  save:"",
  gamePk:824026,
  preview:"The Rockies demolished the Angels 8-2 at Angel Stadium, turning what started as a quiet evening into a home run parade that left Grayson Rodriguez battered and the home crowd of 26",
  body:`The Rockies demolished the Angels 8-2 at Angel Stadium, turning what started as a quiet evening into a home run parade that left Grayson Rodriguez battered and the home crowd of 26,426 deflated. Rodriguez surrendered all eight Colorado runs across just 3.2 innings, watching helplessly as the Rockies circled the bases with ruthless efficiency in the second and fourth innings. Hunter Goodman started the onslaught with a solo homer in the second, followed by Ezequiel Tovar's sacrifice fly and Edouard Julien's RBI single that made it 3-0. The fourth inning brought complete devastation: Jake McCarthy's RBI single, then Willi Castro's three-run blast to right field, then TJ Rumfield's solo shot to right center that capped the scoring at 8-0.

Tomoyuki Sugano earned the victory by holding the Angels to just two runs in five innings, those coming on Wade Meckler's two-run double in the fifth that scored Jorge Soler and Mike Trout. The Angels managed seven hits but couldn't string together the timely hitting that Colorado displayed with surgical precision. Sam Aldegheri pitched admirably in relief for Los Angeles, throwing 5.1 scoreless innings and striking out five, but the damage was already done. The Rockies finished with 12 hits and benefited from two Angels errors, while their own defense played flawlessly behind Sugano and three relievers who combined to shut down any hopes of a comeback under the partly cloudy, 76-degree sky.`
},
{
  id:"2026-06-02-tigers-at-rays",
  date:"2026-06-02",
  awayTeam:"Detroit Tigers",
  homeTeam:"Tampa Bay Rays",
  away_runs:8,
  home_runs:0,
  result:"loss",
  score:"Detroit Tigers 8, Tampa Bay Rays 0",
  winner:"Jack Flaherty",
  loser:"Steven Matz",
  save:"Enmanuel De Jesus",
  gamePk:822971,
  preview:"Steven Matz lasted just five outs at Tropicana Field, and those five outs cost the Rays the entire game. Gleyber Torres launched a solo home run in the first inning, then Dillon Di",
  body:`Steven Matz lasted just five outs at Tropicana Field, and those five outs cost the Rays the entire game. Gleyber Torres launched a solo home run in the first inning, then Dillon Dingler drove in Matt Vierling with a sacrifice fly to make it 2-0. The second inning turned into a complete disaster for Matz. Wenceel Pérez crushed a two-run homer to score Spencer Torkelson, then Matt Vierling doubled home Zack Short for a fifth run. By the time Matz trudged off the mound with one out in the second, Detroit had sent nine batters to the plate and built a lead that felt insurmountable in the dome's stale air.

Jack Flaherty and the Tigers' bullpen made sure that early explosion held up, shutting down Tampa Bay completely in an 8-0 victory. Flaherty allowed five hits over five innings with six strikeouts, departing after facing one batter in the sixth. Enmanuel De Jesus was even better, throwing four hitless innings with four strikeouts to close out the shutout. The Tigers added three more runs late on sacrifice flies by Zack Short and Matt Vierling in the sixth, then Riley Greene's solo homer in the seventh. Tampa Bay managed just five hits and never threatened to score, stranding runners against Detroit's dominant pitching performance that turned an early offensive outburst into a comfortable road victory.`
},
{
  id:"2026-06-02-royals-at-reds",
  date:"2026-06-02",
  awayTeam:"Kansas City Royals",
  homeTeam:"Cincinnati Reds",
  away_runs:3,
  home_runs:4,
  result:"win",
  score:"Kansas City Royals 3, Cincinnati Reds 4",
  winner:"Brock Burke",
  loser:"John Schreiber",
  save:"",
  gamePk:824511,
  preview:"The Reds walked off in extras thanks to Spencer Steer's power surge and clutch hitting when it mattered most. After Kansas City grabbed a 3-0 lead in the fourth inning on Michael M",
  body:`The Reds walked off in extras thanks to Spencer Steer's power surge and clutch hitting when it mattered most. After Kansas City grabbed a 3-0 lead in the fourth inning on Michael Massey's two-run single and a Jac Caglianone RBI groundout, both off Andrew Abbott, the game became a showcase for Cincinnati's comeback ability. Steer provided the offensive backbone with two home runs, his eighth of the season in the fifth inning off Noah Cameron and his ninth in the eighth off Matt Strahm, each time pulling the Reds closer to the Royals' early advantage.

The drama reached its peak in the ninth when Will Benson tied the game with a solo home run off Lucas Erceg, his third of the season, sending the 25,824 fans at Great American Ball Park into a frenzy. Extra innings brought the decisive moment when Blake Dunn lined a single to right field off John Schreiber, scoring Steer for the 4-3 walk-off victory. Noah Cameron had given Kansas City seven strong innings with just one hit allowed and eight strikeouts, but the Royals' bullpen couldn't hold the lead as each reliever surrendered exactly one run. Brock Burke earned the win with a scoreless tenth inning, striking out one and walking one to complete Cincinnati's rally from three runs down.`
},
{
  id:"2026-06-02-dodgers-at-diamondbacks",
  date:"2026-06-02",
  awayTeam:"Los Angeles Dodgers",
  homeTeam:"Arizona Diamondbacks",
  away_runs:6,
  home_runs:5,
  result:"loss",
  score:"Los Angeles Dodgers 6, Arizona Diamondbacks 5",
  winner:"Blake Treinen",
  loser:"Michael Soroka",
  save:"Tanner Scott",
  gamePk:825079,
  preview:"The Dodgers built a commanding 6-2 lead through seven innings, but the Diamondbacks nearly pulled off a stunning comeback in the bottom of the seventh that fell just one run short.",
  body:`The Dodgers built a commanding 6-2 lead through seven innings, but the Diamondbacks nearly pulled off a stunning comeback in the bottom of the seventh that fell just one run short. Los Angeles got off to a blazing start against Michael Soroka, scoring four times in the first two innings on a two-run homer by Freddie Freeman and a two-run triple by Shohei Ohtani. The Diamondbacks chipped away with solo runs in the third and fifth, Corbin Carroll connecting for a homer and Ketel Marte driving in Jorge Barrosa on a sacrifice fly. When the Dodgers tacked on two more in the seventh on a sacrifice fly by Andy Pages and a single by Mookie Betts, a comfortable win seemed assured.

Then the seventh inning turned chaotic for Los Angeles. Kyle Hurt walked three batters and surrendered a two-run double to Nolan Arenado that scored Ketel Marte and Gabriel Moreno. Will Klein replaced Hurt but immediately walked Pavin Smith with the bases loaded, bringing Arenado home and cutting the deficit to 6-5. The Diamondbacks had loaded the bases again and the crowd of 32,829 at Chase Field sensed something special brewing under the closed roof. But Klein escaped further damage, and Tanner Scott shut the door in the ninth for the save. Blake Treinen picked up the win despite allowing a walk in his brief appearance, while Michael Soroka took the loss after giving up four early runs that proved decisive.`
},
{
  id:"2026-06-02-marlins-at-nationals",
  date:"2026-06-02",
  awayTeam:"Miami Marlins",
  homeTeam:"Washington Nationals",
  away_runs:7,
  home_runs:3,
  result:"loss",
  score:"Miami Marlins 7, Washington Nationals 3",
  winner:"John King",
  loser:"Miles Mikolas",
  save:"",
  gamePk:822728,
  preview:"Four scoreless innings gave way to pure chaos at Nationals Park, where the Marlins and Nationals combined for 10 runs across the final five frames. Miles Mikolas had cruised throug",
  body:`Four scoreless innings gave way to pure chaos at Nationals Park, where the Marlins and Nationals combined for 10 runs across the final five frames. Miles Mikolas had cruised through four innings before the fifth inning turned him into a batting practice pitcher. Joe Mack started the avalanche with a two-run homer to center field, scoring Owen Caissie ahead of him. Heriberto Hernández followed immediately with his fourth homer of the year, also to center field. Otto Lopez capped the stunning sequence with his fifth home run, this one to left field, giving Miami a 4-0 lead on three consecutive swings.

The Nationals clawed back with gritty at-bats rather than power displays. Luis García Jr. drove in Keibert Ruiz with a force out in the sixth inning off Ryan Gusto. The seventh inning brought more manufactured runs as Dylan Crews delivered an RBI single on a soft grounder to third base that scored CJ Abrams, with Leo Jiménez's throwing error allowing Crews to reach second base. Keibert Ruiz followed with a groundout that plated Daylen Lile, pulling Washington within 4-3. The comeback bid died in the ninth when Hernández crushed his second homer of the night, a two-run shot to left field off Mitchell Parker that scored Jakob Marsee and sealed the 7-3 victory. John King earned the win in relief while Mikolas absorbed the loss after allowing four earned runs on six hits.`
},
{
  id:"2026-06-02-mets-at-mariners",
  date:"2026-06-02",
  awayTeam:"New York Mets",
  homeTeam:"Seattle Mariners",
  away_runs:3,
  home_runs:8,
  result:"win",
  score:"New York Mets 3, Seattle Mariners 8",
  winner:"Logan Gilbert",
  loser:"Jonah Tong",
  save:"",
  gamePk:823129,
  preview:"Carson Benge delivered everything the Mets could ask for from their cleanup hitter, launching two home runs and driving in all three of his team's runs. His third-inning two-run bl",
  body:`Carson Benge delivered everything the Mets could ask for from their cleanup hitter, launching two home runs and driving in all three of his team's runs. His third-inning two-run blast to right center field brought A.J. Ewing home and tied the game at 2-2, then his solo shot to center field in the sixth inning accounted for New York's final run. But Benge's heroics couldn't mask a brutal night for Mets pitching that unraveled completely in the middle innings.

The collapse started early when Huascar Brazobán surrendered a two-run homer to Patrick Wisdom in the second inning, then accelerated under Jonah Tong's watch. Tong allowed four runs across 3.1 innings, including a crushing three-run homer by Jhonny Pereda in the fifth that broke open what had been a tight game. Randy Arozarena scored the go-ahead run in the third on a fielding error by first baseman Mark Vientos, and Julio Rodríguez added a sacrifice fly in the fourth before Pereda's blast made it 7-2. Even after Benge's second homer cut the deficit, Rodríguez answered immediately with his own solo shot off Cionel Pérez to cap the 8-3 rout. Logan Gilbert earned the win by striking out eight Mets across 5.1 innings, limiting the damage to Benge's two swings while the Mariners collected 11 hits in front of 28,329 fans at T-Mobile Park.`
},
{
  id:"2026-06-02-pirates-at-astros",
  date:"2026-06-02",
  awayTeam:"Pittsburgh Pirates",
  homeTeam:"Houston Astros",
  away_runs:10,
  home_runs:6,
  result:"loss",
  score:"Pittsburgh Pirates 10, Houston Astros 6",
  winner:"Bubba Chandler",
  loser:"Mike Burrows",
  save:"Gregory Soto",
  gamePk:824189,
  preview:"The Pirates turned a two-run deficit into a 10-6 victory at Daikin Park, powered by a relentless offensive attack that produced 13 hits and overcame early struggles against Houston",
  body:`The Pirates turned a two-run deficit into a 10-6 victory at Daikin Park, powered by a relentless offensive attack that produced 13 hits and overcame early struggles against Houston starter Mike Burrows. After Yordan Alvarez staked the Astros to a 2-0 lead in the first inning with a two-run homer off Bubba Chandler, the Pirates answered immediately in the second when Endy Rodríguez launched his first home run of the season, a two-run shot that tied the game after an umpire review overturned the original call. Houston scratched out single runs in the third and fourth innings to build a 4-2 advantage, but Burrows struggled with command as he issued five walks through five innings while allowing eight hits.

The game turned decisively in the sixth inning when the Pirates erupted for four runs to seize control. Oneil Cruz delivered the key blow with a three-run homer that gave Pittsburgh a 5-4 lead, then Jake Mangum added another run with a bunt single that scored Endy Rodríguez after a throwing error by third baseman Isaac Paredes. The Pirates weren't finished, tacking on three more runs in the eighth when Brandon Lowe crushed a three-run homer off Bryan Abreu, and adding another run in the ninth on Rodríguez's RBI double. Despite a late rally that produced two runs in the bottom of the ninth off Dennis Santana, the Astros couldn't overcome their pitching struggles, as Bubba Chandler earned the victory while Gregory Soto recorded the save.`
},
{
  id:"2026-06-02-padres-at-phillies",
  date:"2026-06-02",
  awayTeam:"San Diego Padres",
  homeTeam:"Philadelphia Phillies",
  away_runs:2,
  home_runs:3,
  result:"win",
  score:"San Diego Padres 2, Philadelphia Phillies 3",
  winner:"José Alvarado",
  loser:"Jeremiah Estrada",
  save:"Jhoan Duran",
  gamePk:823460,
  preview:"The Phillies clawed back from a two-run deficit with timely hitting and clutch relief pitching to edge the Padres 3-2 at Citizens Bank Park. San Diego struck first in the third inn",
  body:`The Phillies clawed back from a two-run deficit with timely hitting and clutch relief pitching to edge the Padres 3-2 at Citizens Bank Park. San Diego struck first in the third inning when Gavin Sheets launched a two-run homer to right field off Aaron Nola, scoring Fernando Tatis Jr. who had reached safely for the third time in four at-bats. The early lead felt substantial given Nola's dominance through the first two frames, but Philadelphia's offense found its rhythm in the fourth inning when Bryce Harper answered with his own two-run blast to center field, plating Trea Turner to knot the game at 2-2.

The decisive moment came in the sixth inning on what appeared to be a rally-killing play. With runners on base, Alec Bohm grounded into a double play that erased two Phillies baserunners but allowed Harper to cross home plate for the winning run off reliever Jeremiah Estrada. Brandon Marsh had been a catalyst all afternoon, collecting four hits in four at-bats and stealing a base, while Miguel Andujar provided two hits and a stolen base for San Diego. José Alvarado earned the victory with a clean seventh inning, and Jhoan Duran locked down the save by striking out all three batters he faced in the ninth, capping a bullpen effort that held the Padres scoreless over the final six innings.`
},
{
  id:"2026-06-02-giants-at-brewers",
  date:"2026-06-02",
  awayTeam:"San Francisco Giants",
  homeTeam:"Milwaukee Brewers",
  away_runs:3,
  home_runs:8,
  result:"win",
  score:"San Francisco Giants 3, Milwaukee Brewers 8",
  winner:"Kyle Harrison",
  loser:"Trevor McDonald",
  save:"",
  gamePk:823782,
  preview:"The Giants never recovered from Trevor McDonald's disastrous first inning at American Family Field. Jake Bauers crushed a three-run homer to center field, scoring Christian Yelich",
  body:`The Giants never recovered from Trevor McDonald's disastrous first inning at American Family Field. Jake Bauers crushed a three-run homer to center field, scoring Christian Yelich and Jackson Chourio ahead of him. McDonald settled down after that early explosion, but the damage was done. The Giants managed just one run through seven innings despite collecting 10 hits, with Willy Adames providing their lone bright spot via a solo homer in the sixth.

The eighth inning turned into a wild shootout that ultimately buried San Francisco. The Giants finally broke through against Abner Uribe, getting RBI singles from Bryce Eldridge and Jung Hoo Lee to cut the deficit to 4-3. But Tristan Beck couldn't hold the line in the bottom half. Christian Yelich delivered a two-run single to right field, Jackson Chourio followed with an RBI double to center, and Brice Turang capped the four-run outburst with another RBI single. Harrison earned the win despite allowing that sixth-inning homer, striking out 12 Giants batters in 5.2 innings of work. The Brewers finished with eight runs on 12 hits, getting multi-hit games from Yelich, Chourio, Turang, Garrett Mitchell, and Sal Frelick in front of 29,728 fans on a clear 68-degree evening.`
},
{
  id:"2026-06-02-jays-at-braves",
  date:"2026-06-02",
  awayTeam:"Toronto Blue Jays",
  homeTeam:"Atlanta Braves",
  away_runs:3,
  home_runs:4,
  result:"win",
  score:"Toronto Blue Jays 3, Atlanta Braves 4",
  winner:"Bryce Elder",
  loser:"Kevin Gausman",
  save:"Raisel Iglesias",
  gamePk:824918,
  preview:"Kevin Gausman and Bryce Elder turned in nearly identical performances, each surrendering three earned runs across their starts, but it was Gausman who absorbed the loss in a taut 4",
  body:`Kevin Gausman and Bryce Elder turned in nearly identical performances, each surrendering three earned runs across their starts, but it was Gausman who absorbed the loss in a taut 4-3 defeat at Truist Park. The Blue Jays starter allowed all four Atlanta runs through six innings, including a costly Matt Olson solo homer in the sixth that proved to be the difference. Elder matched Gausman's workload, going 6.2 innings while yielding three runs, highlighted by Kazuma Okamoto's two-run blast in the second inning that briefly knotted the game at 2-2.

The game's pivotal sequence unfolded in the sixth inning. Daulton Varsho's sacrifice fly off Elder tied the contest 3-3, giving Toronto momentum after trailing since the third. But Gausman couldn't hold the line in the bottom half, surrendering Olson's 17th home run of the season to put Atlanta back ahead for good. The Blue Jays managed nine hits but couldn't string together another rally against Robert Suarez and Raisel Iglesias, who combined for 2.1 shutout innings to secure the save for Iglesias. Despite the offensive output from both sides, Atlanta's ability to answer each Toronto surge ultimately decided this back-and-forth affair before 30,937 fans.`
},

// AUTO-GENERATED: 2026-06-01
{
  id:"2026-06-01-rangers-at-cardinals",
  date:"2026-06-01",
  awayTeam:"Texas Rangers",
  homeTeam:"St. Louis Cardinals",
  away_runs:2,
  home_runs:1,
  result:"loss",
  score:"Texas Rangers 2, St. Louis Cardinals 1",
  winner:"Jacob deGrom",
  loser:"Michael McGreevy",
  save:"Jacob Latz",
  gamePk:823050,
  preview:"Jacob deGrom dominated through five innings at Busch Stadium, striking out eight Cardinals while allowing just four hits. The Rangers ace looked sharp in his return to form, workin",
  body:`Jacob deGrom dominated through five innings at Busch Stadium, striking out eight Cardinals while allowing just four hits. The Rangers ace looked sharp in his return to form, working efficiently through a St. Louis lineup that managed only scattered singles against him. Michael McGreevy matched zeros early for the Cardinals, but the Rangers broke through in the fourth when Brandon Nimmo reached base and scored on Ezequiel Duran's line drive double to left field. Duran, who finished 3-4 on the night, provided the spark Texas needed to crack McGreevy's solid effort.

The Rangers extended their lead in the fifth when Danny Jansen reached base and eventually scored on Joc Pederson's ground ball single to center field, pushing Nicky Lopez to third in the process. McGreevy settled in after allowing those two runs, finishing six innings with five hits allowed and two walks, but the early damage proved costly. The Cardinals finally answered in the sixth when Masyn Winn took Peyton Gray deep to left field for his second homer of the season, cutting the deficit to 2-1. That lone run represented St. Louis's only breakthrough against a Rangers bullpen that shut the door completely. Tyler Alexander, Jakob Junis, and Jacob Latz each contributed scoreless innings, with Latz earning the save by striking out two in a clean ninth inning to secure the 2-1 victory.`
},
{
  id:"2026-06-01-sox-at-twins",
  date:"2026-06-01",
  awayTeam:"Chicago White Sox",
  homeTeam:"Minnesota Twins",
  away_runs:6,
  home_runs:9,
  result:"win",
  score:"Chicago White Sox 6, Minnesota Twins 9",
  winner:"Joe Ryan",
  loser:"David Sandlin",
  save:"",
  gamePk:823702,
  preview:"The fifth inning turned into a bloodbath that decided everything. What started as a tight 5-4 game became a rout when Tyler Davis couldn't find the strike zone or get anybody out.",
  body:`The fifth inning turned into a bloodbath that decided everything. What started as a tight 5-4 game became a rout when Tyler Davis couldn't find the strike zone or get anybody out. Austin Martin singled home Kody Clemens. Victor Caratini drove in Josh Bell with another single. Luke Keaschall lifted a sacrifice fly to score Trevor Larnach. Tristan Gray added a sacrifice fly in foul territory to bring home Austin Martin. Four runs crossed the plate, and suddenly the Twins led 9-4 in a game that had been close all afternoon.

The White Sox had fought back from early trouble to make it interesting. David Sandlin gave up Tristan Gray's grand slam in the fourth inning after Trevor Larnach's RBI single in the first, but Chicago answered with power. Miguel Vargas launched a two-run homer in the fifth, his 14th of the year. Andrew Benintendi followed with a solo shot for his fifth. When the ninth inning arrived, Vargas tried one more time with a two-run blast off Travis Adams, his 15th of the season, but the hole was too deep. Joe Ryan earned the win despite allowing four earned runs in six innings, striking out nine White Sox hitters while walking none. The Twins took this one 9-6 at Target Field.`
},
{
  id:"2026-06-01-rockies-at-angels",
  date:"2026-06-01",
  awayTeam:"Colorado Rockies",
  homeTeam:"Los Angeles Angels",
  away_runs:9,
  home_runs:8,
  result:"loss",
  score:"Colorado Rockies 9, Los Angeles Angels 8",
  winner:"Antonio Senzatela",
  loser:"Kirby Yates",
  save:"",
  gamePk:824027,
  preview:"The eighth inning belonged to Colorado. Down 6-3 entering the frame, the Rockies erupted for five runs against Angels reliever José Fermin, turning a comfortable Los Angeles lead i",
  body:`The eighth inning belonged to Colorado. Down 6-3 entering the frame, the Rockies erupted for five runs against Angels reliever José Fermin, turning a comfortable Los Angeles lead into an 8-6 advantage. Kyle Karros started the rally with a double that scored Sterlin Thompson, then Tyler Freeman singled home Karros to cut the deficit to one. Hunter Goodman delivered the knockout punch, launching his 14th home run to left field that brought home Jake McCarthy and Freeman for a three-run blast that stunned the 27,165 fans at Angel Stadium.

The Angels had controlled this game after Jose Siri's grand slam in the third inning gave them a 5-2 lead, erasing an early Colorado advantage built on Troy Johnston's RBI single and McCarthy's solo homer. But Colorado's eighth-inning explosion proved too much to overcome, even after Jorge Soler's clutch triple in the bottom half scored Adam Frazier and Donovan Walton to tie the game at eight. TJ Rumfield provided the final blow in the ninth with a sacrifice fly off Kirby Yates that scored Kyle Karros for the decisive run. Antonio Senzatela earned the win despite allowing two runs in the eighth, while Kyle Freeland had struggled earlier for Colorado, surrendering five earned runs including Siri's grand slam. The victory capped a wild back-and-forth affair that saw both teams collect 10 hits but with Colorado capitalizing when it mattered most.`
},
{
  id:"2026-06-01-tigers-at-rays",
  date:"2026-06-01",
  awayTeam:"Detroit Tigers",
  homeTeam:"Tampa Bay Rays",
  away_runs:10,
  home_runs:9,
  result:"loss",
  score:"Detroit Tigers 10, Tampa Bay Rays 9",
  winner:"Tyler Holton",
  loser:"Griffin Jax",
  save:"Will Vest",
  gamePk:822974,
  preview:"The Tigers turned Tropicana Field into their personal launch pad, smashing six home runs in a wild 10-9 victory that saw 19 runs fly around the dome. Dillon Dingler demolished Tamp",
  body:`The Tigers turned Tropicana Field into their personal launch pad, smashing six home runs in a wild 10-9 victory that saw 19 runs fly around the dome. Dillon Dingler demolished Tampa Bay pitching with two home runs and four RBI, going 4-for-5 in a performance that anchored Detroit's 14-hit attack. Riley Greene and Kerry Carpenter each added solo shots in a brutal third inning that chased Griffin Jax after he surrendered six runs on seven hits through four innings. The Tigers scored in five different innings, building leads only to watch Tampa Bay claw back each time.

What looked like a Detroit runaway became a genuine thriller when the Rays exploded for four runs in the eighth inning to make it 10-9. Junior Caminero's two-run homer off Ty Madden in the fourth started Tampa Bay's comeback, followed by Ryan Vilade's three-run blast off Brenan Hanifee in the sixth. The decisive eighth saw Nick Fortes drive in two with a double off Will Vest, then Ben Williamson plate two more on a single that deflected off Spencer Torkelson. But Vest settled down to strand the tying run, earning the save after Tyler Holton picked up the win in relief. The 13,695 fans witnessed a slugfest where Detroit's power barrage barely held off Tampa Bay's late surge.`
},
{
  id:"2026-06-01-royals-at-reds",
  date:"2026-06-01",
  awayTeam:"Kansas City Royals",
  homeTeam:"Cincinnati Reds",
  away_runs:9,
  home_runs:2,
  result:"loss",
  score:"Kansas City Royals 9, Cincinnati Reds 2",
  winner:"Luinder Avila",
  loser:"Lyon Richardson",
  save:"",
  gamePk:824510,
  preview:"Lane Thomas demolished the Cincinnati Reds before most fans had settled into their seats at Great American Ball Park. With runners on every base in the first inning, Thomas launche",
  body:`Lane Thomas demolished the Cincinnati Reds before most fans had settled into their seats at Great American Ball Park. With runners on every base in the first inning, Thomas launched a grand slam off Lyon Richardson to left center field, scoring Carter Jensen, Bobby Witt Jr., and Jac Caglianone for an instant 4-0 Kansas City lead. JJ Bleday answered immediately with a solo homer off Luinder Avila in the bottom half, but that would be all the fight Cincinnati could muster against a relentless Royals offense that collected 13 hits in a 9-2 rout.

The Reds turned to Brandon Leibrandt after Richardson's disastrous opening frame, but he absorbed the brunt of Kansas City's continued assault over six innings of work. Caglianone crushed a two-run homer in the fifth, Vinnie Pasquantino drove in Nick Loftin with a single in the sixth, and Michael Massey added a solo blast in the seventh, all off Leibrandt's offerings. Nick Loftin capped Thomas's four-RBI night with a sacrifice fly that scored Thomas in the ninth before Matt McLain provided Cincinnati's only other bright spot with an RBI double that scored Edwin Arroyo. Avila earned the victory despite allowing Bleday's early homer, working five innings while striking out five, as the Royals cruised to victory in front of 19,409 fans on a pleasant 74-degree evening.`
},
{
  id:"2026-06-01-dodgers-at-diamondbacks",
  date:"2026-06-01",
  awayTeam:"Los Angeles Dodgers",
  homeTeam:"Arizona Diamondbacks",
  away_runs:1,
  home_runs:4,
  result:"win",
  score:"Los Angeles Dodgers 1, Arizona Diamondbacks 4",
  winner:"Taylor Clarke",
  loser:"Emmet Sheehan",
  save:"Paul Sewald",
  gamePk:825078,
  preview:"The Dodgers carried a 1-0 lead into the sixth inning at Chase Field, built on Shohei Ohtani's scoring run in the third when Freddie Freeman grounded out to drive him home against E",
  body:`The Dodgers carried a 1-0 lead into the sixth inning at Chase Field, built on Shohei Ohtani's scoring run in the third when Freddie Freeman grounded out to drive him home against Eduardo Rodriguez. Ohtani had collected three hits in four at-bats, providing the offensive spark Los Angeles needed. Emmet Sheehan cruised through the early innings, allowing just three hits through six-plus frames while striking out three without issuing a walk. The young pitcher looked poised to carry the Dodgers to victory until the Diamondbacks found their power stroke.

Tommy Troy changed everything with one swing in the sixth, launching his first career home run to left field off Sheehan to tie the game 1-1. An inning later, Nolan Arenado followed with his eighth homer of the season, a fly ball to left center that gave Arizona a 2-1 advantage. Sheehan's night ended after 6.1 innings, having surrendered both runs on solo shots. The Diamondbacks delivered the knockout blow in the eighth against Jack Dreyer when Ketel Marte lined his tenth home run of the year to left field, scoring Tommy Troy ahead of him for a 4-1 lead. Taylor Clarke earned the win with a perfect inning, striking out two, while Paul Sewald locked down the save in the ninth to complete Arizona's comeback victory before 31,410 fans under the closed roof.`
},
{
  id:"2026-06-01-marlins-at-nationals",
  date:"2026-06-01",
  awayTeam:"Miami Marlins",
  homeTeam:"Washington Nationals",
  away_runs:7,
  home_runs:3,
  result:"loss",
  score:"Miami Marlins 7, Washington Nationals 3",
  winner:"Sandy Alcantara",
  loser:"Richard Lovelady",
  save:"",
  gamePk:822730,
  preview:"The Nationals held a 3-1 lead through five innings at Nationals Park, but their bullpen collapsed in spectacular fashion as the Marlins stormed back for a 7-3 victory. Cade Cavalli",
  body:`The Nationals held a 3-1 lead through five innings at Nationals Park, but their bullpen collapsed in spectacular fashion as the Marlins stormed back for a 7-3 victory. Cade Cavalli had worked through five innings despite some early trouble, surrendering just one run on five hits while striking out six. The home team looked positioned to steal a win after Jacob Young's two-run homer in the second and Curtis Mead's RBI single in the third had given them the advantage. But Richard Lovelady entered in the sixth and immediately unraveled, allowing two runs while recording just two outs as Miami flipped the script.

Lovelady's brief but disastrous outing proved the turning point. Heriberto Hernández launched a two-run homer to tie the game at 3-3, then Connor Norby followed with an RBI double that put the Marlins ahead for good. Sandy Alcantara had steadied after his early struggles, working seven strong innings and keeping Washington's offense quiet after the third inning. The ninth inning became a rout when Cole Henry took the mound and surrendered three more runs. Liam Hicks opened the frame with a solo homer, then Kyle Stowers capped the scoring with a two-run blast to right center that made it 7-3. Otto Lopez reached base four times for Miami, going 3-for-4 with a walk, as the Marlins collected 10 hits and turned a two-run deficit into a four-run victory.`
},
{
  id:"2026-06-01-mets-at-mariners",
  date:"2026-06-01",
  awayTeam:"New York Mets",
  homeTeam:"Seattle Mariners",
  away_runs:2,
  home_runs:3,
  result:"win",
  score:"New York Mets 2, Seattle Mariners 3",
  winner:"Gabe Speier",
  loser:"A.J. Minter",
  save:"",
  gamePk:823131,
  preview:"Home runs decided everything in a pitchers' duel that stretched to extra innings at T-Mobile Park. The Mariners walked off with a 3-2 victory on Cole Young's soft line drive single",
  body:`Home runs decided everything in a pitchers' duel that stretched to extra innings at T-Mobile Park. The Mariners walked off with a 3-2 victory on Cole Young's soft line drive single to left field in the 10th inning, scoring Randy Arozarena and capping a game where both teams managed just six hits combined. Four of the five runs came via the long ball, with lead changes in the fifth, sixth, and seventh innings before Seattle finally broke through against A.J. Minter.

Colt Emerson's third-inning homer off Sean Manaea gave the Mariners the early advantage, but the Mets answered with back-to-back solo shots from Jared Young and Marcus Semien in the fifth and sixth innings off Emerson Hancock. Josh Naylor's sixth home run of the season tied it at 2-2 in the seventh, taking Brooks Raley deep to right field. From there, both bullpens locked down, with Seattle's Gabe Speier working a perfect 10th inning with two strikeouts to earn the win after Minter couldn't escape the bottom of the frame. The 23,037 fans witnessed a classic pitcher-friendly affair where Hancock struck out seven over six innings and Manaea allowed just one hit through five frames before the late-inning fireworks.`
},
{
  id:"2026-06-01-giants-at-brewers",
  date:"2026-06-01",
  awayTeam:"San Francisco Giants",
  homeTeam:"Milwaukee Brewers",
  away_runs:2,
  home_runs:16,
  result:"win",
  score:"San Francisco Giants 2, Milwaukee Brewers 16",
  winner:"Chad Patrick",
  loser:"Landen Roupp",
  save:"",
  gamePk:823781,
  preview:"Matt Chapman's two-run homer in the second inning gave the Giants a brief 2-0 lead, but what followed was a complete meltdown that turned American Family Field into a launching pad",
  body:`Matt Chapman's two-run homer in the second inning gave the Giants a brief 2-0 lead, but what followed was a complete meltdown that turned American Family Field into a launching pad for Milwaukee offense. Landen Roupp surrendered seven runs in that same second inning, watching helplessly as the Brewers sent 10 batters to the plate. Sal Frelick doubled home Jake Bauers to start the rally, Luis Rengifo singled home the tying run, then Jackson Chourio doubled home two more to give Milwaukee the lead for good. Brice Turang capped the explosion with a triple that scored two, and William Contreras added a sacrifice fly to make it 7-2 after two innings.

The Giants never recovered from that second-inning disaster, managing just three more hits over the final seven innings while Milwaukee poured on 9 more runs. Roupp allowed one more run in the fourth before departing, but the parade of Giants relievers offered no relief. Wilkin Ramos gave up two runs in the sixth on an Andrew Vaughn single that scored two thanks to a Jung Hoo Lee error. Matt Gage surrendered two more in the seventh, and Buddy Kennedy was tagged for four runs in the eighth as the Brewers reached 16 runs. Christian Yelich collected three hits and two RBI to lead Milwaukee's 18-hit attack, while the Giants managed just five hits in the 16-2 demolition that saw Chad Patrick earn the win and Roupp take the loss.`
},

// AUTO-GENERATED: 2026-05-31
{
  id:"2026-05-31-royals-at-rangers",
  date:"2026-05-31",
  awayTeam:"Kansas City Royals",
  homeTeam:"Texas Rangers",
  away_runs:3,
  home_runs:6,
  result:"win",
  score:"Kansas City Royals 3, Texas Rangers 6",
  winner:"Jack Leiter",
  loser:"Michael Wacha",
  save:"Jacob Latz",
  gamePk:822895,
  preview:"The Rangers turned the first inning into a four-run avalanche that buried Kansas City before Michael Wacha could find his footing. Ezequiel Duran delivered the knockout blow with a",
  body:`The Rangers turned the first inning into a four-run avalanche that buried Kansas City before Michael Wacha could find his footing. Ezequiel Duran delivered the knockout blow with a two-run triple to left field, scoring Josh Jung and Jake Burger. Alejandro Osuna followed with an RBI single to right, then Kyle Higashioka capped the eruption with a line drive double to center that plated Osuna. Jung added two more runs in the fourth with another single to left, and suddenly the Royals faced a 6-0 crater that seemed impossible to escape.

Kansas City's offense couldn't solve Jack Leiter, who carved through the lineup with 10 strikeouts over 5.2 innings while allowing just three hits. The Royals finally broke through in the seventh when Lane Thomas singled home Michael Massey off Jalen Beeks, then Massey launched a two-run homer to right center in the eighth against Gavin Collyer to score Isaac Collins. But that late surge only made the final margin respectable. Wacha absorbed all six runs over five innings, walking four and surrendering eight hits in a performance that doomed Kansas City from the start. The Rangers controlled this one wire to wire, with Jacob Latz earning the save in a 6-3 victory that never felt closer than the final score suggested.`
},
{
  id:"2026-05-31-diamondbacks-at-mariners",
  date:"2026-05-31",
  awayTeam:"Arizona Diamondbacks",
  homeTeam:"Seattle Mariners",
  away_runs:2,
  home_runs:3,
  result:"win",
  score:"Arizona Diamondbacks 2, Seattle Mariners 3",
  winner:"Luis Castillo",
  loser:"Jonathan Loáisiga",
  save:"",
  gamePk:823133,
  preview:"The Diamondbacks managed just three hits all night and still nearly stole a game at T-Mobile Park. Arizona's offense disappeared for long stretches against Bryce Miller and Luis Ca",
  body:`The Diamondbacks managed just three hits all night and still nearly stole a game at T-Mobile Park. Arizona's offense disappeared for long stretches against Bryce Miller and Luis Castillo, who combined to hold them to two runs through nine innings. But timely hitting from Ketel Marte in the eighth inning, a sacrifice fly that scored Gabriel Moreno, forced extra innings and gave the Diamondbacks life they probably didn't deserve.

Merrill Kelly bore the heaviest load for Arizona, surrendering both Seattle home runs that defined the middle innings. Cole Young took him deep in the second inning, then Dominic Canzone followed with another solo shot in the sixth to put the Mariners back ahead after the Diamondbacks had scratched across the tying run. Seattle's 11 hits told the story of sustained pressure, while Arizona's offense managed just enough to hang around until the tenth. Jonathan Loáisiga entered for the Diamondbacks in extra innings and immediately walked himself into trouble, allowing Victor Robles to drive home Randy Arozarena with a ground ball single to shortstop that ended it 3-2. Luis Castillo picked up the win for his five innings of work, while the loss fell to Loáisiga after his brief but costly appearance.`
},
{
  id:"2026-05-31-braves-at-reds",
  date:"2026-05-31",
  awayTeam:"Atlanta Braves",
  homeTeam:"Cincinnati Reds",
  away_runs:4,
  home_runs:6,
  result:"win",
  score:"Atlanta Braves 4, Cincinnati Reds 6",
  winner:"Nick Lodolo",
  loser:"Spencer Strider",
  save:"Sam Moll",
  gamePk:824512,
  preview:"JJ Bleday owned the right field corner at Great American Ball Park, driving home two runs on a pair of doubles that both found Ronald Acuña Jr. in right field. His first came in th",
  body:`JJ Bleday owned the right field corner at Great American Ball Park, driving home two runs on a pair of doubles that both found Ronald Acuña Jr. in right field. His first came in the bottom of the first, a sharp line drive that scored Elly De La Cruz to tie the game at 1-1 after Acuña Jr. had given Atlanta the early lead with a homer to left center. Bleday struck again in the third inning, another sharp liner to right field that again brought home De La Cruz, putting Cincinnati ahead 2-1. Spencer Strider couldn't solve the Reds' attack, surrendering seven hits and four earned runs through five innings despite striking out eight batters.

The middle innings belonged to Cincinnati as they slowly pulled away from the Braves. Will Benson's double to right field in the fourth inning scored Spencer Steer, aided by a fielding error from Acuña Jr. that helped extend the lead to 3-1. Atlanta kept fighting back, getting solo homers from Acuña Jr. and Jorge Mateo plus a sacrifice fly from Austin Riley to stay within striking distance at 4-3 through six innings. But P.J. Higgins doubled home another run off Didier Fuentes in the sixth, and Eugenio Suárez crushed a solo homer off Dylan Dodd in the seventh to give the Reds breathing room at 6-3. Acuña Jr. managed one final RBI single in the ninth to score Dominic Smith, but Sam Moll came on to record the save and preserve the 6-4 victory for Nick Lodolo and the Reds.`
},
{
  id:"2026-05-31-sox-at-guardians",
  date:"2026-05-31",
  awayTeam:"Boston Red Sox",
  homeTeam:"Cleveland Guardians",
  away_runs:9,
  home_runs:4,
  result:"loss",
  score:"Boston Red Sox 9, Cleveland Guardians 4",
  winner:"Jovani Morán",
  loser:"Colin Holderman",
  save:"",
  gamePk:824430,
  preview:"The Red Sox turned a one-run deficit into a five-run laugher with six runs in the seventh inning at Progressive Field, overwhelming the Guardians 9-4. Boston trailed 4-3 entering t",
  body:`The Red Sox turned a one-run deficit into a five-run laugher with six runs in the seventh inning at Progressive Field, overwhelming the Guardians 9-4. Boston trailed 4-3 entering the seventh before the Cleveland bullpen imploded. Tim Herrin walked Wilyer Abreu to tie the game, then surrendered a two-run single to Masataka Yoshida that put Boston ahead for good. The damage continued against Codi Heuer, who allowed an RBI single to Isiah Kiner-Falefa and a two-run triple to Caleb Durbin that capped the six-run outburst.

Jarren Duran set the tone early with a solo homer off Tanner Bibee in the first inning, his 10th of the season. The Guardians answered in the second when Austin Hedges drove home two runs with a single off Ranger Suarez, and they regained the lead in the fifth on RBI hits from José Ramírez and Chase DeLauter. But Bibee, who had held Boston to three runs through six innings, gave way to the bullpen that couldn't hold the line. Jovani Morán earned the win with 1.1 scoreless innings of relief, while Colin Holderman took the loss after allowing two earned runs in just one-third of an inning.`
},
{
  id:"2026-05-31-cubs-at-cardinals",
  date:"2026-05-31",
  awayTeam:"Chicago Cubs",
  homeTeam:"St. Louis Cardinals",
  away_runs:1,
  home_runs:5,
  result:"win",
  score:"Chicago Cubs 1, St. Louis Cardinals 5",
  winner:"Matthew Liberatore",
  loser:"Jordan Wicks",
  save:"Hunter Dobbins",
  gamePk:823053,
  preview:"The Cardinals buried the Cubs early and never looked back in a 5-1 victory at Busch Stadium, putting together a devastating first three innings that left Chicago scrambling to reco",
  body:`The Cardinals buried the Cubs early and never looked back in a 5-1 victory at Busch Stadium, putting together a devastating first three innings that left Chicago scrambling to recover. Jordan Wicks lasted just two innings, surrendering two earned runs on four hits before departing after facing one batter in the third. The damage began immediately in the first inning when Jordan Walker lined an RBI single to right field, scoring JJ Wetherholt, followed by Alec Burleson's sacrifice popup that plated Iván Herrera for a quick 2-0 lead.

The third inning delivered the knockout punch when Ethan Roberts took over for Wicks and promptly allowed two more runs. Burleson struck again with a fly ball single to left that scored Wetherholt, then Masyn Winn capped the rally with a sharp liner to center field that brought home both Iván Herrera and Burleson for a commanding 5-0 advantage. The Cubs managed just seven hits against Matthew Liberatore and Hunter Dobbins, with their lone breakthrough coming via Alex Bregman's solo homer in the sixth inning. Liberatore earned the win with 5.1 shutout innings, while Dobbins secured the save despite allowing Bregman's blast, holding Chicago to four hits over 3.2 innings to seal the Cardinals' convincing triumph before 34,753 fans.`
},
{
  id:"2026-05-31-tigers-at-sox",
  date:"2026-05-31",
  awayTeam:"Detroit Tigers",
  homeTeam:"Chicago White Sox",
  away_runs:1,
  home_runs:2,
  result:"win",
  score:"Detroit Tigers 1, Chicago White Sox 2",
  winner:"Brandon Eisert",
  loser:"Drew Anderson",
  save:"Tyler Davis",
  gamePk:824592,
  preview:"Spencer Torkelson's first-inning double off Sean Burke gave the Tigers an early lead they would carry for six innings, but it wouldn't be enough at Rate Field. Kevin McGonigle scor",
  body:`Spencer Torkelson's first-inning double off Sean Burke gave the Tigers an early lead they would carry for six innings, but it wouldn't be enough at Rate Field. Kevin McGonigle scored on the play, and Detroit looked poised to steal a road win behind Keider Montero's dominant performance. The Tigers starter held the White Sox to just 2 hits over 6 scoreless innings with 4 strikeouts, silencing a crowd of 28,764 on a pleasant 66-degree evening.

Everything unraveled for Detroit in the seventh. Drew Anderson entered and immediately surrendered a game-tying home run to Colson Montgomery, his 15th of the season. Anderson wasn't finished. Chase Meidroth reached base, Jacob Gonzalez followed with a single, and Tristan Peters delivered the crushing blow with an RBI single to left field that scored Meidroth and gave Chicago a 2-1 lead. Anderson lasted just 0.2 innings, allowing 4 hits and 2 runs that would decide the game. Brandon Eisert earned the win for the White Sox, while Tyler Davis locked down the save to complete the comeback victory.`
},
{
  id:"2026-05-31-angels-at-rays",
  date:"2026-05-31",
  awayTeam:"Los Angeles Angels",
  homeTeam:"Tampa Bay Rays",
  away_runs:2,
  home_runs:5,
  result:"win",
  score:"Los Angeles Angels 2, Tampa Bay Rays 5",
  winner:"Shane McClanahan",
  loser:"Jack Kochanowicz",
  save:"Bryan Baker",
  gamePk:822976,
  preview:"Jack Kochanowicz never found his command at Tropicana Field, walking four batters in just 2.1 innings as the Angels fell to the Rays 5-2. Jonathan Aranda jumped on the young right-",
  body:`Jack Kochanowicz never found his command at Tropicana Field, walking four batters in just 2.1 innings as the Angels fell to the Rays 5-2. Jonathan Aranda jumped on the young right-hander early, launching his 11th home run of the season in the first inning. The third inning unraveled completely for Kochanowicz. Victor Mesa Jr. drove in Aranda with a sharp single to center, then Cedric Mullins drew a walk to push the Rays ahead 3-1. By the time Kochanowicz exited, he had surrendered five hits and three earned runs while issuing four free passes.

The Angels managed just two runs despite collecting nine hits against Shane McClanahan and the Tampa Bay bullpen. Logan O'Hoppe provided the lone bright spot with his second home run of the season in the seventh inning, cutting the deficit to 3-2. But Drew Pomeranz immediately gave those hopes back in the bottom half, allowing Ben Williamson's RBI single and then walking in Chandler Simpson with the bases loaded to make it 5-2. McClanahan earned the victory with five solid innings, allowing four hits and one earned run without issuing a walk. Bryan Baker closed out the ninth for the save, preserving the Rays' comfortable margin in front of 16,589 fans under the dome.`
},
{
  id:"2026-05-31-marlins-at-mets",
  date:"2026-05-31",
  awayTeam:"Miami Marlins",
  homeTeam:"New York Mets",
  away_runs:1,
  home_runs:10,
  result:"win",
  score:"Miami Marlins 1, New York Mets 10",
  winner:"Nolan McLean",
  loser:"John King",
  save:"David Peterson",
  gamePk:823621,
  preview:"The Mets turned a pleasant 75-degree evening at Citi Field into a nightmare for Miami's pitching staff, pounding seven different Marlins hurlers in a 10-1 blowout before 40,634 fan",
  body:`The Mets turned a pleasant 75-degree evening at Citi Field into a nightmare for Miami's pitching staff, pounding seven different Marlins hurlers in a 10-1 blowout before 40,634 fans. Carson Benge got the rout started in the first inning with a solo homer off John King, and Marcus Semien followed in the second with a two-run blast that scored Mark Vientos to put the Mets ahead 3-0. The Marlins managed just one answer when Owen Caissie doubled home Javier Sanoja in the fourth, but that brief spark only delayed the inevitable.

The Mets added two more runs in the fourth when Luis Torrens singled home A.J. Ewing and Brett Baty to extend the lead to 5-1. The real damage came in the sixth inning when Josh White melted down completely. White walked Bo Bichette to score Marcus Semien, then served up a grand slam to Juan Soto that sailed into the right center field seats. Luis Torrens, Carson Benge, and Bo Bichette all crossed the plate ahead of Soto as the Mets turned a 6-1 game into a laugher. Miami's offense managed just three hits against Nolan McLean and David Peterson, who combined to limit the visitors to one run. The Marlins used seven pitchers in a futile attempt to stop the bleeding, but by then the damage was done and the Mets had their most lopsided victory in recent memory.`
},
{
  id:"2026-05-31-brewers-at-astros",
  date:"2026-05-31",
  awayTeam:"Milwaukee Brewers",
  homeTeam:"Houston Astros",
  away_runs:2,
  home_runs:0,
  result:"loss",
  score:"Milwaukee Brewers 2, Houston Astros 0",
  winner:"Jacob Misiorowski",
  loser:"Tatsuya Imai",
  save:"Trevor Megill",
  gamePk:824187,
  preview:"The Astros offense vanished into the Houston night, managing just three hits in a lifeless 2-0 loss to Milwaukee at Daikin Park. Jacob Misiorowski carved through the heart of their",
  body:`The Astros offense vanished into the Houston night, managing just three hits in a lifeless 2-0 loss to Milwaukee at Daikin Park. Jacob Misiorowski carved through the heart of their lineup for seven innings, striking out eight batters while allowing only scattered singles to Jeremy Peña, Isaac Paredes and Jake Meyers. Yordan Alvarez struck out three times. Taylor Trammell struck out three times. The Astros stranded what few baserunners they managed, never mounting a serious threat against the Brewers right-hander.

Milwaukee needed only one swing to decide this pitcher's duel. Jake Bauers turned on a Tatsuya Imai pitch in the fourth inning and sent it over the left field wall, scoring Andrew Vaughn ahead of him for the game's only runs. The two-run homer was all the offense either team could muster on a night when pitching dominated completely. Imai settled in after the fourth, working six innings total while striking out five, but that one mistake pitch proved fatal. Abner Uribe and Trevor Megill closed out the final two innings for Milwaukee, with Megill earning the save by striking out two in a perfect ninth. The shutout win moved the Brewers past an Astros team that could manage little offensive production all evening.`
},
{
  id:"2026-05-31-twins-at-pirates",
  date:"2026-05-31",
  awayTeam:"Minnesota Twins",
  homeTeam:"Pittsburgh Pirates",
  away_runs:3,
  home_runs:9,
  result:"win",
  score:"Minnesota Twins 3, Pittsburgh Pirates 9",
  winner:"Braxton Ashcraft",
  loser:"Zebby Matthews",
  save:"",
  gamePk:823373,
  preview:"The Pirates turned a quiet evening at PNC Park into a nine-run celebration, but not before Zebby Matthews handed them every opportunity they needed. Matthews lasted just 4.1 inning",
  body:`The Pirates turned a quiet evening at PNC Park into a nine-run celebration, but not before Zebby Matthews handed them every opportunity they needed. Matthews lasted just 4.1 innings and surrendered five runs, watching helplessly as Pittsburgh's lineup picked him apart piece by piece. Ryan O'Hearn opened the scoring with a solo homer in the second, followed by Jared Triolo's RBI single that plated Oneil Cruz. The damage only multiplied from there. Nick Gonzales crushed a two-run homer to center in the third, then Brandon Lowe added another RBI single in the fifth before Matthews finally got the hook.

The fifth inning became a full meltdown for Minnesota's pitching staff. Mike Paredes entered with the Pirates leading 5-0 and immediately walked Oneil Cruz to force home another run. Jake Mangum lifted a sacrifice fly to score Bryan Reynolds, then Henry Davis delivered the knockout punch with a two-run single that stretched Pittsburgh's lead to 9-0. Brooks Lee provided the only bright spots for the Twins, launching a two-run homer in the sixth and a solo homer in the ninth off Braxton Ashcraft and Brandan Bidois respectively. His second homer made it 3-9, but Ashcraft had already done his job with six innings of dominant work, striking out 11 batters without issuing a walk to earn the victory in front of 19,358 fans under sunny skies.`
},
{
  id:"2026-05-31-yankees-at-athletics",
  date:"2026-05-31",
  awayTeam:"New York Yankees",
  homeTeam:"Athletics",
  away_runs:13,
  home_runs:8,
  result:"loss",
  score:"New York Yankees 13, Athletics 8",
  winner:"Will Warren",
  loser:"Jacob Lopez",
  save:"",
  gamePk:825001,
  preview:"The Yankees turned a three-run deficit into a 13-run explosion in the most lopsided third inning you'll see this season. After Will Warren surrendered three first-inning runs on a",
  body:`The Yankees turned a three-run deficit into a 13-run explosion in the most lopsided third inning you'll see this season. After Will Warren surrendered three first-inning runs on a Trent Grisham error and a Lawrence Butler RBI single, New York faced Jacob Lopez in the third and made him pay. Lopez lasted just seven batters as the Yankees sent multiple men to the plate, scoring four runs before giving way to Michael Kelly. Paul Goldschmidt started the rally with an RBI single, Ben Rice drove home two with a double to tie it, and Aaron Judge's single put the Yankees ahead for good.

What followed was pure carnage against Michael Kelly, who inherited the mess and made it exponentially worse. The Yankees kept hitting, kept running, kept scoring. José Caballero walked in a run, Trent Grisham singled home two more, Anthony Volpe added another RBI single, and Max Schuemann doubled in two. Ben Rice capped his monster day with a two-run triple, his second extra-base hit of the inning, before Cody Bellinger mercifully ended the torture with an RBI single. By the time the dust settled, Rice had driven in four runs, Schuemann had two RBIs, and the Yankees led 13-3. The Athletics managed late homers from Brent Rooker and Jonah Heim off Tim Hill, plus an eighth-inning RBI double from Nick Kurtz, but the damage was irreversible. Will Warren earned the win despite allowing three runs in the first, while Lopez absorbed a loss that belonged more to one disastrous inning than any larger failing.`
},
{
  id:"2026-05-31-phillies-at-dodgers",
  date:"2026-05-31",
  awayTeam:"Philadelphia Phillies",
  homeTeam:"Los Angeles Dodgers",
  away_runs:1,
  home_runs:9,
  result:"win",
  score:"Philadelphia Phillies 1, Los Angeles Dodgers 9",
  winner:"Yoshinobu Yamamoto",
  loser:"Andrew Painter",
  save:"",
  gamePk:823944,
  preview:"The Dodgers dismantled Philadelphia's pitching staff in front of 50,677 fans at UNIQLO Field, turning what started as a scoreless duel into a 9-1 rout. Andrew Painter never found h",
  body:`The Dodgers dismantled Philadelphia's pitching staff in front of 50,677 fans at UNIQLO Field, turning what started as a scoreless duel into a 9-1 rout. Andrew Painter never found his rhythm, surrendering four runs through the first four innings before the bullpen made things worse. Alex Freeland tormented the Phillies all afternoon, going 2-for-3 with a home run and collecting both a double that scored Max Muncy in the second and a solo shot in the fourth. Ryan Ward added his own homer in that same fourth inning, capping a brutal stretch that saw Painter allow seven hits and four earned runs in just 3.1 innings of work.

The carnage continued against Philadelphia's relievers as the Dodgers poured on five more runs across the middle innings. Tanner Banks gave up a two-run single to Alex Call in the fifth that scored Mookie Betts and Kyle Tucker. Chase Shugart allowed a sacrifice fly to Freddie Freeman in the sixth and a home run to Max Muncy, his 14th of the season, in the seventh. Nolan Hoffman couldn't escape either, surrendering a Freeman sacrifice fly in the eighth. Yoshinobu Yamamoto dominated the other dugout entirely, striking out 10 batters while allowing just four hits across 5.1 shutout innings. The Phillies finally broke through in the ninth when Bryson Stott launched his sixth home run of the season off Jonathan Hernández, but by then the outcome had been decided hours earlier under the sunny, 82-degree skies.`
},
{
  id:"2026-05-31-padres-at-nationals",
  date:"2026-05-31",
  awayTeam:"San Diego Padres",
  homeTeam:"Washington Nationals",
  away_runs:2,
  home_runs:4,
  result:"win",
  score:"San Diego Padres 2, Washington Nationals 4",
  winner:"Zack Littell",
  loser:"Griffin Canning",
  save:"Clayton Beeter",
  gamePk:822729,
  preview:"The Padres lineup looked lost for six innings against Zack Littell, managing just five hits while watching Washington build a commanding lead. Griffin Canning kept San Diego close",
  body:`The Padres lineup looked lost for six innings against Zack Littell, managing just five hits while watching Washington build a commanding lead. Griffin Canning kept San Diego close early, but the Nationals broke through in the fourth when Luis García Jr. launched a solo homer to center field. The damage multiplied an inning later as James Wood connected on a two-run blast, scoring Keibert Ruiz and putting Washington ahead 3-0. Through six innings, San Diego's stars went silent: Fernando Tatis Jr., Gavin Sheets, and Manny Machado combined to go 0-for-12.

The seventh inning brought chaos and hope in equal measure. Jackson Merrill sparked the Padres rally with his third hit of the game, and Xander Bogaerts worked a walk to put runners on base. Ty France delivered the breakthrough with a sharp double to left field, scoring Bogaerts and advancing Merrill to third. Nick Castellanos followed with a sacrifice fly to center, cutting the deficit to 3-2 and suddenly making this a one-run game. But Washington had an immediate answer in the bottom half when Andrés Chaparro doubled home Nasim Nuñez off Adrian Morejon, restoring the two-run cushion that would hold up for a 4-2 victory. Clayton Beeter closed out the ninth for the save, leaving the Padres to wonder what might have been after their brief taste of momentum.`
},
{
  id:"2026-05-31-giants-at-rockies",
  date:"2026-05-31",
  awayTeam:"San Francisco Giants",
  homeTeam:"Colorado Rockies",
  away_runs:19,
  home_runs:6,
  result:"loss",
  score:"San Francisco Giants 19, Colorado Rockies 6",
  winner:"Caleb Kilian",
  loser:"Tanner Gordon",
  save:"",
  gamePk:824354,
  preview:"The Giants collected 25 hits and scored 19 runs in a demolition of the Rockies at Coors Field, turning what began as a competitive game into a rout by the fifth inning. Jung Hoo Le",
  body:`The Giants collected 25 hits and scored 19 runs in a demolition of the Rockies at Coors Field, turning what began as a competitive game into a rout by the fifth inning. Jung Hoo Lee went 5-for-6 with 2 RBI to pace the offensive assault, while Rafael Devers added four hits and Casey Schmitt contributed three hits and 2 RBI. The turning point came in the fifth when San Francisco exploded for seven runs against Zach Agnos, capped by Willy Adames' grand slam that stretched a 7-3 lead to 11-3. Matt Chapman doubled home Jung Hoo Lee to start the rally, Drew Gilbert followed with an RBI triple, and Casey Schmitt singled home another run before Adames cleared the bases.

Colorado's pitching staff crumbled under the relentless attack, with Agnos surrendering seven earned runs in just one inning of work. Tanner Gordon lasted three innings as the starter, allowing four earned runs on six hits before giving way to the bullpen. The Giants added insult to injury with Jesus Rodriguez launching a two-run homer in the ninth inning for the final margin. Caleb Kilian earned the victory, while the Rockies managed just 10 hits in the loss despite the offensive environment at Coors Field.`
},
{
  id:"2026-05-31-jays-at-orioles",
  date:"2026-05-31",
  awayTeam:"Toronto Blue Jays",
  homeTeam:"Baltimore Orioles",
  away_runs:5,
  home_runs:9,
  result:"win",
  score:"Toronto Blue Jays 5, Baltimore Orioles 9",
  winner:"Kyle Bradish",
  loser:"Spencer Miles",
  save:"",
  gamePk:824832,
  preview:"Spencer Miles watched his afternoon unravel in devastating fashion at Camden Yards. The Blue Jays starter surrendered six runs through three innings, capped by Colton Cowser's thre",
  body:`Spencer Miles watched his afternoon unravel in devastating fashion at Camden Yards. The Blue Jays starter surrendered six runs through three innings, capped by Colton Cowser's three-run homer to right center field that put Baltimore ahead 6-0. Miles allowed five hits and walked three batters before his day mercifully ended. Kyle Bradish dominated on the other side, throwing seven innings while allowing one run on four hits and striking out four. The Orioles added three more runs in the sixth against Hayden Juenger, with Gunnar Henderson driving home Blaze Alexander on a double to center field and Adley Rutschman plating Taylor Ward on a sacrifice fly.

Down 9-0 entering the seventh, Toronto finally broke through against Bradish when Charles McAdoo grounded into a force out that scored Ernie Clement. The real fireworks came in the eighth against Tyler Wells, who couldn't retire a single batter cleanly. Clement doubled home Nathan Lukes, then Yohendrick Piñango crushed a three-run homer to right field, driving home Kazuma Okamoto and Clement to cut the deficit to 9-5. Piñango finished 2-for-2 with three RBI in the losing effort. The late rally wasn't enough to overcome the early damage, as Baltimore coasted to a 9-5 victory behind Cowser's four RBI performance and Pete Alonso's two-hit day that included an RBI single in the third inning.`
},
{
  id:'5-20-26-athletics-angels',
  date:'2026-05-20',
  focusTeam:'Athletics',
  opponent:'Los Angeles Angels',
  home:false,
  result:'win',
  score:'ATH 6, LAA 5',
  record:'25-24',  // ← fill in
  gamePk:824032,
  preview:"While Nick Kurtz, Shea Langeliers and Brent Rooker command most of the attention in the A's revamped lineup, Jeff McNeil delivered the swing that mattered most in a thrilling 6-5 extra-inning victory over the Angels at Angel Stadium.",
  body:`While Nick Kurtz, Shea Langeliers and Brent Rooker command most of the attention in the A's revamped lineup, Jeff McNeil delivered the swing that mattered most in a thrilling 6-5 extra-inning victory over the Angels at Angel Stadium. The veteran second baseman crushed a game-tying solo shot off Kirby Yates in the ninth inning, his second homer of the season, setting up Tyler Soderstrom's walk-off RBI single in the tenth.

McNeil's clutch blast came after the A's had watched a 3-2 lead evaporate in spectacular fashion during the second inning. Aaron Civale, making his tenth start of the season, surrendered three home runs in his five-inning stint, including back-to-back solo shots from Jo Adell and Josh Lowe that flipped a tie game into a 5-3 deficit. Jorge Soler had earlier matched the Athletics' early two-run outburst with a two-run homer of his own in the first, turning Tyler Soderstrom's clutch two-RBI single into a temporary advantage.

The Athletics battled back methodically against Angels starter Jack Kochanowicz, who worked six innings despite issuing four walks. Kurtz trimmed the deficit to 5-4 in the seventh with an RBI single that scored Darell Hernaiz, though the rally stalled when Carlos Cortes got thrown out at third on Mike Trout's assist. The Athletics' struggles with runners in scoring position, going just 5-for-13 in those situations, nearly proved costly as they stranded nine baserunners through the first eight innings.

Luis Medina and Mark Leiter Jr. steadied the ship out of the bullpen after Civale's early exit, combining for three scoreless innings to keep the deficit manageable. That proved crucial when McNeil stepped in against Yates with one out in the ninth. The lefty worked a seven-pitch battle before launching his dramatic equalizer to right field.

Extra innings brought more dramatics. Scott Barlow earned the victory with a perfect tenth inning, striking out one while hitting a batter. In the bottom half, Soderstrom delivered his second clutch hit of the night, a two-pitch single to left that scored Kurtz from second base. Josh Lowe's fielding error allowed Soderstrom to reach third, but the damage was already done. Hogan Harris closed it out despite issuing two walks, securing his save and the A's comeback victory in a contest that stretched nearly three hours.`
},{
  id:'5-16-26-houston-astros',
  date:'2026-05-16',
  opponent:'Houston Astros',
  home:false,
  result:'loss',
  score:'TEX 1, HOU 4',
  record:'21-24',  // ← fill in current record
  gamePk:824193,
  preview:"Another night, another home run parade for Jacob deGrom.",
  body:`deGrom surrendered four solo shots at Daikin Park, watching his team drop a 4-1 decision to Houston that felt more lopsided than the final score suggested. What made this loss particularly galling wasn't just the power barrage against deGrom, but the complete offensive ineptitude that left 13 runners stranded and produced just one hit in 10 at-bats with runners in scoring position.

The tone was set early when Jose Altuve needed just three pitches to take deGrom deep in the bottom of the first. Two batters later, Yordan Alvarez followed with his 15th homer of the season, an 8-pitch battle that ended with another ball sailing over the right field wall. The Rangers had fallen behind 2-0 before recording their third out, and deGrom's troubling trend with the long ball was already in full display.

Things got worse in the fourth when Christian Walker crushed a first-pitch fastball to left-center for his 11th homer. Four pitches later, Zach Cole added insult to injury with another deep fly to right field, capping a disastrous outing that saw deGrom allow four home runs in six innings. The veteran right-hander struck out four and walked none, but the command issues that have plagued him this season were evident as Houston hitters repeatedly turned on mistake pitches.

While deGrom was serving up batting practice fastballs, Kai-Wei Teng was suffocating the Rangers offense through five innings. The Houston starter allowed just two hits while walking four and striking out seven, consistently working out of trouble as Texas squandered scoring chances. The Rangers managed to load the bases twice but couldn't capitalize, a theme that would define their evening.

The lone bright spot came in the seventh when Joc Pederson finally broke through with a ground-ball single to center field, scoring Jake Burger for the Rangers' only run. But even that rally fizzled as they left runners on second and third, another missed opportunity in a game full of them.

Skip Schumaker's club entered the night needing to find consistency, but this performance highlighted their biggest weaknesses. DeGrom's transformation into a home run machine has become a serious concern, while the offense's inability to execute with runners in scoring position continues to waste quality opportunities. At 1-for-10 with runners in scoring position, this was baseball malpractice.`
},{
  id:'5-15-26-houston-astros',
  date:'May 15, 2026',
  opponent:'Houston Astros',
  home:false,
  result:'loss',
  score:'TEX 0, HOU 2',
  record:'21-23',  // ← fill in current record
  gamePk:824194,
  preview:"Hand it to Spencer Arrighetti. Throwing a no-hitter through 7 against a little league team is something to be proud of.",
  body:`Spencer Arrighetti carved through the Rangers lineup like a surgeon with a scalpel, allowing just one hit over 7.1 innings in a masterful performance that silenced Texas bats at Daikin Park. The Astros right-hander walked four but consistently escaped trouble, stranding Rangers runners in scoring position twice with two outs and inducing a double play grounder from Brandon Nimmo to snuff out another threat.

Only Justin Foscue managed to solve Arrighetti's arsenal, collecting the Rangers' lone hit in what became a frustrating 2-0 loss. The shutout extended Texas's recent offensive struggles, as Skip Schumaker's lineup managed just four walks against Houston pitching but failed to capitalize on any scoring opportunities. The Rangers went 0-for-3 with runners in scoring position, leaving Foscue and Kyle Higashioka stranded in key spots.

Jack Leiter delivered his finest outing of the season but suffered the cruel fate of a hard-luck loss. The young right-hander scattered just three hits across seven innings, striking out six while issuing three walks. His only mistake came in the third inning when Isaac Paredes turned on a 2-1 fastball and drove it over the left field wall for his fourth home run of the year. That solo shot proved to be all Houston needed, though they added insurance in the eighth.

Cole Winn entered in relief and immediately found trouble, surrendering a line drive single to Braden Shewmake that plated Nick Allen with the game's second run. Yordan Alvarez had reached base earlier in the frame and moved into scoring position before Allen's appearance, setting up Shewmake's RBI knock that effectively sealed the contest.

The offensive futility stung most for Texas. Joc Pederson and Andrew McCutchen split time at designated hitter but combined to go 0-for-3. Ezequiel Duran endured a particularly rough night, striking out three times in four at-bats while failing to advance any of the runners who reached base ahead of him.

Bryan King closed out the victory for Houston, retiring all five batters he faced with one strikeout. The combined one-hitter marked just the second time this season the Rangers managed fewer than two hits in a game, highlighting how thoroughly Arrighetti dominated from first pitch to last.`
},{
  id:'5-13-26-arizona-diamondbacks',
  date:'2026-05-13',
  opponent:'Arizona Diamondbacks',
  home:true,
  result:'win',
  score:'TEX 6, AZ 5',
  record:'21-22',  // ← fill in current record
  gamePk:822900,
  preview:"If I were a scout, this would be my entry for Paul Sewald; has trouble holding a lead at Globe Life Field.",
  body:`A three-run lead in the ninth inning should feel comfortable. Paul Sewald had other ideas, and the Rangers turned what looked like certain defeat into a stunning 6-5 walkoff victory that left 26,049 fans at Globe Life Field wondering how they'd just witnessed one of the season's most improbable comebacks.

Jake Burger's three-run blast in the fifth inning seemed to provide all the cushion Kumar Rocker would need. The Rangers starter had navigated five innings of traffic, allowing just three hits while issuing four walks in what felt like a typical Rocker outing. Burger turned on Ryne Nelson's first pitch and sent Evan Carter and Alejandro Osuna home ahead of him, capping a rally that broke open a scoreless game in decisive fashion.

But baseball rewards patience, and Arizona chipped away methodically. Lourdes Gurriel Jr. doubled home Nolan Arenado in the sixth against Cole Winn. The veteran Arenado returned the favor an inning later, lifting a sacrifice fly off Peyton Gray to score Ketel Marte and trim the deficit to 3-2.

Skip Schumaker's bullpen management became increasingly desperate as the game stretched past three hours. Jacob Latz entered the ninth with a one-run lead and immediately surrendered it. Arenado ripped a double to left, scoring Corbin Carroll to tie the game. Two batters later, Ildemaro Vargas lined a single to the same spot, plating both Geraldo Perdomo and Arenado to give the Diamondbacks what appeared to be a decisive 5-3 advantage.

The ninth inning bottom half unfolded like a fever dream. Ezequiel Duran doubled home Josh Jung to cut the lead to one. Burger followed with his second clutch hit of the night, a line drive single that scored Duran and knotted the game at five. Danny Jansen needed just one pitch against Juan Morillo to end it, grounding a single through the left side that sent Osuna home with the winning run.

Cal Quantrill earned the victory after cleaning up Latz's mess with a scoreless ninth inning. The Rangers improved their record in dramatic fashion, turning a 3-0 lead into a 3-5 deficit and back into victory in the span of two chaotic innings. Sometimes the best-laid plans crumble, and sometimes that works out perfectly.`
},{
  id:'5-12-26-arizona-diamondbacks',
  date:'May 12, 2026',
  opponent:'Arizona Diamondbacks',
  home:true,
  result:'win',
  score:'TEX 7, AZ 1',
  record:'20-22',  // ← fill in current record
  gamePk:822903,
  preview:"Joc Pederson wasted no time making his statement Monday night at Globe Life Field.",
  body:`Joc Pederson wasted no time making his statement Monday night at Globe Life Field. The Rangers leadoff man turned on Zac Gallen's first pitch of the game and launched it into the right field stands for his third home run of the season. That early blast set the tone for what became a 7-1 demolition of the Arizona Diamondbacks.

The offensive explosion belonged almost entirely to Texas, but it took patience to fully materialize. After Ildemaro Vargas answered Pederson's opener with a solo shot to left center in the second inning, the game remained tight through four frames. MacKenzie Gore kept Arizona's bats quiet while his offense methodically built separation.

Ezequiel Duran provided the first separation punch with a fourth-inning solo homer to right field off Gallen, his third of the year. That 3-1 advantage felt manageable for Arizona until the fifth inning arrived like a summer thunderstorm.

The pivotal sequence began when Corey Seager reached on a fielder's choice that plated Brandon Nimmo. Seager's struggles at the plate continued as he finished 0-for-4, but his timely groundball pushed across a crucial insurance run. That proved to be just the beginning of Gallen's fifth-inning collapse.

Duran followed with an RBI single through the left side of the infield, scoring Seager to make it 5-1. Alejandro Osuna kept the rally alive with another run-scoring single to center field. By the time Jake Burger capped the four-run frame with his second RBI single of the night, Arizona had seen enough of their struggling starter.

Gore dominated throughout his eight-inning masterpiece, surrendering just three hits while striking out five. The left-hander's efficiency kept Skip Schumaker's bullpen fresh and the Diamondbacks guessing. Only Vargas managed to solve Gore consistently, collecting the lone run on his second-inning blast.

Burger emerged as an unsung hero with a perfect 3-for-3 night that included two RBIs and a walk. His consistent at-bats provided the foundation for Texas to break the game open when opportunities presented themselves. Nimmo added three hits before departing after tweaking his ankle at first base during the later innings.

The lopsided victory showcased the Rangers' depth and patience against quality pitching. Even when Gallen found his rhythm early, Texas continued grinding out competitive at-bats until the fifth-inning breakthrough changed everything.`
},{
  id:'5-11-26-arizona-diamondbacks',
  date:'May 11, 2026',
  opponent:'Arizona Diamondbacks',
  home:true,
  result:'loss',
  score:'TEX 0, AZ 1',
  record:'19-22',  // ← fill in current record
  gamePk:822901,
  preview:"Michael Soroka carved through the Rangers lineup like it was still 2019, turning back the clock with six-plus innings of dominant pitching that silenced a sparse Globe Life Field crowd.",
  body:`Michael Soroka carved through the Rangers lineup like it was still 2019, turning back the clock with six-plus innings of dominant pitching that silenced a sparse Globe Life Field crowd. The Arizona right-hander allowed just three hits and struck out five in a masterful performance that reminded everyone why he was once considered among baseball's brightest young stars before injuries derailed his trajectory.

The decisive blow came early and stayed that way. Corbin Carroll reached base to start the game, and Geraldo Perdomo immediately capitalized with a three-pitch at-bat that ended in a line drive double to right field. Brandon Nimmo had no chance as Carroll raced home with what proved to be the game's only run. That quick strike in the first inning was all Soroka needed, and more importantly, all he would get.

Jakob Junis battled through 2.2 innings before Skip Schumaker made the early hook, but the damage was already done. The Rangers starter surrendered that early run and never found his rhythm, though the bullpen performed admirably behind him. Jalen Beeks, Peyton Gray, Cole Winn, and Tyler Alexander combined for six-plus innings of mostly effective relief work, keeping the deficit manageable and the game within reach.

Except Texas couldn't reach anything against Soroka. The Rangers managed just four hits all night and went 0-for-3 with runners in scoring position. Most damaging was Evan Carter's failure to deliver in two separate opportunities with runners on second and two outs. Those moments defined a listless offensive performance that left 22,651 fans with little to cheer about in a cavernous ballpark that felt even emptier than the attendance suggested.

Corey Seager went hitless in three at-bats, continuing a concerning trend for the Rangers' highest-paid player. Josh Jung managed no hits in four trips. The middle of the order produced nothing while Soroka methodically worked through his business with the efficiency of a surgeon.

Paul Sewald closed it out with a perfect ninth inning to secure Arizona's 1-0 victory. For a Rangers team trying to stay relevant in an increasingly competitive AL West, performances like this only accelerate the fan apathy evident in those empty seats. Soroka's renaissance continues while Texas searches for answers that seem increasingly elusive.`
},{
  id:'5-10-26-chicago-cubs',
  date:'May 10, 2026',
  opponent:'Chicago Cubs',
  home:true,
  result:'win',
  score:'TEX 3, CHC 0',
  record:'19-21',  // ← fill in current record
  gamePk:822902,
  preview:"Jacob deGrom carved through the Cubs lineup like a surgeon with a scalpel, delivering 10 strikeouts across seven dominant innings in a 3-0 Rangers victory that showcased exactly why his chase for 2,000 career strikeouts remains must-watch baseball.",
  body:`Jacob deGrom carved through the Cubs lineup like a surgeon with a scalpel, delivering 10 strikeouts across seven dominant innings in a 3-0 Rangers victory that showcased exactly why his chase for 2,000 career strikeouts remains must-watch baseball. The right-hander allowed just three hits and zero walks, retiring 21 of 24 batters faced in what amounted to a clinic in precision pitching.

The offensive fireworks were limited but timely. Josh Jung sparked both scoring rallies, reaching base four times on three hits. In the fourth inning, Jung's presence on the basepaths paid dividends when Alejandro Osuna grounded into what became a run-scoring fielder's choice. The Cubs challenged the tag play at home plate, but the call stood, giving Texas its first run against Jameson Taillon.

That lone run held up until the eighth inning, when Jung again found himself in scoring position before Evan Carter launched his fifth home run of the season off Daniel Palencia. The two-run blast to right field provided all the cushion deGrom's masterpiece required.

The most glaring storyline wasn't what Texas accomplished, but what they failed to execute. The Rangers went 0-for-6 with runners in scoring position, a stunning display of offensive futility that could have derailed any game not backed by elite pitching. They weren't even trying to get runners home, leaving multiple opportunities scattered across nine innings like discarded lottery tickets.

Taillon actually pitched well enough to win most games, allowing just one earned run through 5.1 innings while striking out four. But when deGrom is operating at this level, good enough isn't nearly sufficient. The Cubs managed only three base hits total, with Nico Hoerner accounting for two of them.

Jacob Latz closed out the final two innings with a perfect performance, allowing no hits while striking out one to earn the save. The Cubs' offensive futility was complete, managing zero extra-base hits against Rangers pitching.

Skip Schumaker's club improved to 8-0 in deGrom's starts this season, a testament to both the ace's continued excellence and the team's ability to manufacture just enough offense when their rotation delivers dominance. The 137-minute game time reflected the crisp pace deGrom maintained throughout his outing, never allowing Chicago's hitters to find any rhythm or comfort zone.`
},{
  id:'5-9-26-chicago-cubs',
  date:'May 9, 2026',
  opponent:'Chicago Cubs',
  home:true,
  result:'win',
  score:'TEX 6, CHC 0',
  record:'18-21',  // ← fill in current record
  gamePk:822905,
  preview:"Justin Foscue comes through, and the Rangers find new life. Does it continue this afternoon in Arlington?",
  body:`Edward Cabrera looked like a pitcher who had lost his way. The Cubs right-hander surrendered five runs across five innings at Globe Life Field Friday night, watching strike after strike get tattooed by Rangers hitters who seemed to know what was coming. Even a broken clock is right twice a day, and for Texas, every swing felt perfectly timed.

Josh Jung opened the scoring parade in the second inning with a four-pitch demolition job, turning Cabrera's offering into his fifth home run of the season. The blast to right center field set the tone for what would become a methodical dismantling. Two batters later, Alejandro Osuna delivered the knockout punch of the frame, lining a single to left that plated Evan Carter and pushed the lead to 2-0.

Cabrera's struggles intensified in the fourth. Joc Pederson needed just two pitches to double Carter home, then Osuna struck again with another RBI single, this time finding the gap against the shifted defense. The Cubs starter was hemorrhaging runs, his command evaporating in the Texas heat.

Justin Foscue provided the exclamation point in the fifth, launching his first homer of 2026 into the left field seats. The four-pitch sequence represented everything wrong with Cabrera's night. Location, velocity, sequencing. Nothing worked.

While Cabrera imploded, Jack Leiter navigated through early turbulence to give Skip Schumaker exactly what the Rangers needed. The young right-hander scattered three hits across 4.2 innings, though his five walks suggested the command still needs refinement. Six strikeouts demonstrated the swing-and-miss stuff remains electric when he finds the zone.

Jalen Beeks emerged from the bullpen to earn the victory with 1.1 innings of scoreless relief. Cole Winn and Gavin Collyer followed suit, preserving the shutout through the final three frames. The Cubs managed just five hits total, never mounting a serious threat against the Rangers' collection of arms.

Kyle Higashioka capped the scoring in the sixth with a sharp single off Jacob Webb, plating Jung for the final margin. At 2 hours and 43 minutes, this one dragged on longer than the lopsided score suggested, but Texas never let Chicago back into the conversation.

The 35,807 in attendance witnessed a performance that showcased both the Rangers' offensive depth and their ability to piece together quality innings from the pitching staff when the starter exits early.`
},{
  id:'5-8-26-chicago-cubs',
  date:'May 8, 2026',
  opponent:'Chicago Cubs',
  home:true,
  result:'loss',
  score:'TEX 1, CHC 7',
  record:'17-21',  // ← fill in current record
  gamePk:822904,
  preview:"Seven starts into his major league career, Kumar Rocker continues to demonstrate he's not ready for this level.",
  body:`Seven starts into his major league career, Kumar Rocker continues to demonstrate he's not ready for this level. The right-hander lasted just 3.2 innings against Chicago, surrendering three runs on four hits while walking three batters in a 7-1 Cubs victory at Globe Life Field that felt decided before the Rangers even found their footing.

Rocker's struggles materialized immediately. Ian Happ grounded a three-pitch single to left field in the first inning, plating Michael Conforto for an early Chicago lead. But the real damage came in the fourth, when Seiya Suzuki turned an eight-pitch battle into a two-run homer to center field, scoring Happ ahead of him. That blast effectively ended Rocker's evening, though Skip Schumaker let him face two more batters before mercifully pulling him.

The numbers tell the story of a pitcher still searching for command. Three walks in fewer than four innings. Constant traffic on the basepaths. An inability to put hitters away when ahead in counts. For all the velocity and potential, Rocker's seventh start looked disturbingly similar to his first six.

Chicago's Ben Brown provided a stark contrast, no-hitting the Rangers through four innings while striking out three. The Cubs starter made Rangers hitters look foolish, locating his fastball and keeping them off balance with secondary offerings. When Ryan Rolison replaced Brown in the fifth, he immediately ran into trouble, walking two batters before Justin Foscue lined a single to left that scored Evan Carter for the Rangers' only run.

That brief moment of hope evaporated quickly. Pete Crow-Armstrong doubled home Michael Busch in the sixth for a 4-1 Cubs lead. Then came the seventh-inning avalanche. Busch ripped a sharp line drive to left field that cleared the bases, scoring Alex Bregman, Happ, and Suzuki in one devastating swing that turned a competitive game into a rout.

Cal Quantrill, who relieved Rocker, bore the brunt of Chicago's late-game surge. The veteran right-hander allowed four runs across 3.1 innings, including all three of Busch's RBIs. The Rangers managed just two hits total, going 1-for-5 with runners in scoring position while stranding five baserunners.

At 32,394 fans witnessed another reminder that rushing prospects rarely works. Rocker's development continues, but somewhere other than Globe Life Field would serve everyone better.`
},{
  id:'5-7-26-yankees',
  date:'May 7, 2026',
  opponent:'New York Yankees',
  home:false,
  result:'loss',
  score:'TEX 2, NYY 9',
  record:'17-20',  // ← fill in current record
  gamePk:823551,
  preview:"Ugly, sloppy defense, an inability to be efficient on the mound and nagging injuries have allowed the Rangers to be what everyone expected them to be. Coming home to face the Cubs is now an even bigger task after dropping 4 of 6 on the road.",
  body:`A dropped popup changed everything for MacKenzie Gore and the Rangers in what became a 9-2 blowout loss at Yankee Stadium. The left-hander was navigating the sixth inning with minimal damage when Alejandro Osuna lost track of Amed Rosario's routine fly ball, opening the floodgates for a six-run Yankees rally that transformed a tight 2-1 game into a rout.

Gore entered the afternoon carrying a 5.18 ERA through his first seven starts, the kind of numbers that explain why Washington was shopping him before the trade. His command issues surfaced again, as he reached three-ball counts 45 times this season, tied for fourth-most in the majors. The inability to get ahead consistently finally caught up to him in that disastrous sixth frame.

The Rangers had clawed back from an early deficit thanks to Ezequiel Duran's power display. After Cody Bellinger's first-inning triple off a misplayed ball by Joc Pederson scored Paul Goldschmidt, Duran answered with a solo blast in the third on the first pitch he saw from Brendan Beck. Two innings later, Duran drove in another run on a forceout that scored Osuna for a 2-1 lead.

But Pederson's defensive miscues in right field foreshadowed larger problems. The veteran hasn't played the outfield consistently since September 2023 with San Francisco, and it showed. His first-inning struggles contributed to multiple extra bases, including Bellinger's RBI triple. There's a reason Skip Schumaker replaced him with Andrew McCutchen after two innings.

The sixth inning unraveled quickly once Osuna's error kept the Yankees' rally alive. Trent Grisham delivered the knockout punch with a three-run double that scored Bellinger, Rosario, and Ryan McMahon. J.C. Escarra followed with an RBI single before Gore finally exited. The damage continued against relievers Jalen Beeks and Cole Winn, as Aaron Judge and Bellinger tacked on two more runs to make it 7-2.

Texas managed just five hits and stranded 10 runners, going 1-for-5 with runners in scoring position. The offensive futility extended a troubling pattern for a lineup that couldn't capitalize on scoring chances. Corey Seager walked twice but never crossed the plate despite batting behind Duran's production.

The Yankees added late insurance runs in the seventh and eighth innings, with Max Schuemann and McMahon driving home the final tallies in what became a 3-hour, 11-minute marathon. Gore's season-long command problems and the team's defensive lapses combined for another forgettable afternoon in the Bronx.`
},{
  id:'5-6-26-yankees',
  date:'May 6,2026',
  opponent:'New York Yankees',
  home:false,
  result:'win',
  score:'TEX 6, NYY 1',
  record:'17-19',  // ← fill in current record
  gamePk:823550,
  preview:"The Texas Rangers' true ace pitcher carved up the surging Yankees on Wednesday night in the Bronx, the only run scored was a solo shot by Aaron Judge. Eovaldi completed the 8th inning with 100 pitches to allow Jacob Latz to effeciently close out the game, one the Rangers desperately needed.",
  body:`Nathan Eovaldi carved through the Yankees lineup like a surgeon with a scalpel, delivering eight innings of near-perfection that overshadowed what should have been a statement offensive performance. The veteran right-hander allowed just three hits and one run while striking out eight, throwing exactly 100 pitches in a masterclass that reminded everyone why Texas traded for him in the first place.

But here's the maddening paradox of this 6-1 victory at Yankee Stadium. The Rangers exploded for six runs on nine hits, yet still managed to showcase their most glaring weakness in the process. They went 2-for-10 with runners in scoring position and left seven men on base, including four runners stranded in scoring position with two outs. Even in victory, the fundamental inability to capitalize on scoring chances remains a festering wound.

The offensive fireworks started early when Corey Seager took Will Warren deep on just four pitches in the first inning, his seventh homer of the season sailing into the right field seats. The third inning brought more drama as Ezequiel Duran ripped a line drive double to left, scoring Brandon Nimmo. Two batters later, Evan Carter launched his fourth home run of the year, also to right field, plating Duran and extending the lead to 4-0.

The fourth inning continued the assault on Warren. Duran lifted a sacrifice fly to center, bringing home Jake Burger. Seager followed immediately with an RBI single to right, scoring Andrew McCutchen and chasing the Yankees starter after just four innings of work.

Yet between those explosive moments lurked missed opportunities. Josh Jung struck out three times in five at-bats. Kyle Higashioka whiffed three times as well. The middle of the order continues to hemorrhage production, leaving too much on the shoulders of Seager and the top of the lineup.

Eovaldi's dominance made those concerns academic tonight. After Aaron Judge's three-pitch home run in the sixth provided the Yankees' only run, the Rangers ace settled back into cruise control. He walked nobody, attacked the strike zone relentlessly, and gave Skip Schumaker exactly what this rotation desperately needed.

The victory masks deeper issues, though. When you're winning 6-1 and still leaving this many runners stranded, it exposes the razor-thin margin for error this team operates within. Eovaldi won't pitch this brilliantly every fifth day.`
},{
  id:'5-5-26-yankees',
  date:'May 5, 2026',
  opponent:'New York Yankees',
  home:false,
  result:'loss',
  score:'TEX 4, NYY 7',
  record:'16-19',  // ← fill in current record
  gamePk:823553,
  preview:"The Texas Rangers had the bases loaded, not once, but twice, and could not bring home a runner. Whatever style of baseball this team is playing, it is not professional and is not well-coached.",
  body:`Jacob deGrom delivered a vintage performance at Yankee Stadium, carving through New York's lineup with surgical precision for six-plus innings. Seven strikeouts, one walk, and the kind of command that made him a two-time Cy Young winner. The only problem? His offense forgot how to hit with runners in scoring position.

The Rangers stranded 12 runners on base in a 7-4 loss that felt like watching a master craftsman's work get demolished by his own construction crew. deGrom surrendered just six earned runs through 6.1 innings, but those numbers don't tell the story of an offense that went 3-for-13 with runners in scoring position and left eight runners stranded in two-out situations.

Texas jumped ahead early with textbook situational hitting in the first inning. Joc Pederson lifted a sacrifice fly to center, scoring Evan Carter. Two batters later, Ezequiel Duran singled to right field, plating Corey Seager for a 2-0 advantage. Then the clutch hitting vanished like morning fog in the Bronx heat.

The Yankees chipped away methodically. Cody Bellinger doubled home Aaron Judge in the first, cutting the deficit to 3-1. Ryan McMahon's two-run homer in the second tied it at three. Jazz Chisholm Jr. took deGrom deep in the sixth for the go-ahead run, a solo shot that highlighted how thin margins become razor-sharp when your offense can't capitalize on opportunities.

Bellinger delivered the crushing blow in the seventh, a two-RBI double off Jalen Beeks that scored McMahon and José Caballero, stretching New York's lead to 6-3. Paul Goldschmidt added insult with a solo homer in the eighth against Tyler Alexander.

Josh Jung collected three hits in five at-bats, but left three runners in scoring position with two outs. Sam Haggerty and Danny Jansen combined for two more such failures. Jake Burger managed an RBI groundout in the ninth, scoring Duran for the final margin, but it felt like statistical noise after watching the Rangers waste chance after chance.

The 15-mph wind blowing right to left at Yankee Stadium didn't help Texas hitters, but wind doesn't explain swinging through hittable pitches with runners 90 feet away. deGrom deserved better than this listless offensive display. Skip Schumaker's club showed championship-level starting pitching and Little League-level situational awareness.`
},{
  id:'5-3-26-detroit-tigers',
  date:'May 3, 2026',
  opponent:'Detroit Tigers',
  home:false,
  result:'loss',
  score:'TEX 1, DET 7',
  record:'16-18',  // ← fill in current record
  gamePk:824285,
  preview:"The Texas Rangers remain in second place in the AL West simply because the rest of the AL West is playing horrendous baseball at this point in the season. Whatever Skip Schumaker is trying to do is just simply not working out.",
  body:`Offensive futility doomed the Rangers in a 7-1 loss to Detroit at Comerica Park, extending their early-season struggles with another dismal showing at the plate. Seven total runners reached base all night. Four made it to scoring position. The Rangers went 0-for-4 with runners in scoring position and managed just eight total bases as a team.

Jack Leiter pitched well enough through five innings before unraveling in the seventh, but the offense provided no support whatsoever. The Rangers collected six hits and drew two walks across nine innings against a Detroit bullpen game. That's not major league caliber production.

Spencer Torkelson broke the scoreless deadlock in the fifth with a two-run homer to left center, his sixth of the season. Riley Greene had reached base ahead of him, and Torkelson turned on Leiter's offering in just three pitches. The 12 mph wind blowing out to left field likely helped carry the ball over the wall.

Leiter surrendered another run in the sixth when Kevin McGonigle lined a single to right field, scoring Jake Rogers. The right-hander had struck out 10 batters through 6.2 innings but couldn't escape the seventh inning intact.

The Rangers finally broke through against Ricky Vanasco in the seventh when Kyle Higashioka grounded out softly to first base, scoring Ezequiel Duran. Josh Smith had reached third base, but that lone RBI represented the sum total of Texas offensive production.

Detroit buried the game in the bottom of the seventh. Hao-Yu Lee singled off Leiter to score Kerry Carpenter, then Skip Schumaker pulled his starter. Tyler Alexander entered and immediately gave up back-to-back RBI singles to McGonigle and Matt Vierling. Vierling's double to right field plated two more runs, turning a manageable deficit into a rout.

Josh Smith collected two of the Rangers' six hits. Corey Seager, Brandon Nimmo and Josh Jung each managed one hit apiece but combined for five strikeouts. Jake Burger went 0-for-4 with two strikeouts. Evan Carter went hitless in four at-bats.

The Rangers left runners in scoring position with two outs three times, including twice by Nimmo and once by Burger. Seager grounded into a double play. This was an offensive performance completely devoid of clutch hitting or sustained rallies. Unless something changes quickly, this season will slip away before Memorial Day arrives.`
},{
  id:'5-2-26-detroit-tigers',
  date:'May 2, 2026',
  opponent:'Detroit Tigers',
  home:false,
  result:'loss',
  score:'TEX 1, DET 5',
  record:'16-17',  // ← fill in current record
  gamePk:824284,
  preview:"43 pitches. 2 stolen bases from a painfully slow delivery. 5 runs scored. 2 innings pitched. Kumar Rocker got rocked and Skip Schumaker had seen enough.",
  body:`Kumar Rocker's season hit rock bottom on a frigid Friday night in Detroit, where his command evaporated faster than warmth from the 48-degree air. The Rangers' embattled starter lasted just two innings, surrendering five runs on six hits while watching baserunners steal at will against him. Complete chaos.

The nightmare began immediately in the first inning when Dillon Dingler crushed a three-run homer to left field, capping a rally that scored Colt Keith and Riley Greene. Rocker threw just four pitches to Dingler, all of them hittable. The second inning brought more misery as Kevin McGonigle and Gleyber Torres delivered back-to-back RBI singles, the latter coming on a three-pitch sequence that suggested Rocker had completely lost his feel.

What made the early deficit particularly crushing was Josh Jung's fielding error in the second frame, which allowed two runs that should have stayed off the board. Jung, normally reliable with the glove, couldn't handle a routine chance that turned a manageable situation into a rout. Skip Schumaker had seen enough after 43 pitches from his starter.

The Rangers' offensive response? Practically nonexistent. They went 0-for-6 with runners in scoring position and stranded seven baserunners against Detroit starter Keider Montero, who cruised through 6.2 innings despite the cold conditions that typically favor pitchers. Jake Burger's solo homer in the fourth provided the only run, a meaningless tally in what had already become a lost cause.

Cal Quantrill, Peyton Gray, and Gavin Collyer combined for six shutout innings in relief, showcasing exactly what the Rangers needed from their rotation but didn't get from Rocker. Their efforts felt hollow given the early hole. The bullpen threw 105 pitches to clean up another Rocker mess, taxing arms that will be needed throughout the long season.

This marked Rocker's sixth start, and the pattern is becoming undeniable. When he's bad, he's catastrophically bad. The stolen bases suggest his slow delivery remains a liability, while the command issues point to deeper mechanical problems. At some point, the Rangers will need to confront whether their investment in the former Vanderbilt ace is paying dividends or just accumulating costly mistakes like this frigid Detroit disaster.`
},{
  id:'5-1-26-detroit-tigers',
  date:'May 1, 2026',
  opponent:'Detroit Tigers',
  home:false,
  result:'win',
  score:'TEX 5, DET 4',
  record:'16-16',  // ← fill in current record
  gamePk:824287,
  preview:"In a game that began with the Rangers showing an explosive offense, both teams settled into a contest to see who could outlast the other on a cold and wet afternoon in Detroit.",
  body:`Under gray skies and a persistent drizzle at Comerica Park, the Rangers manufactured just enough offense in the late innings to escape Detroit with a messy 5-4 victory that exposed troubling early-season cracks. What should have been a comfortable win after building a 4-0 lead through three innings instead became a bullpen-taxing slog that raises questions about rotation depth as Texas heads toward a crucial series in New York.

MacKenzie Gore's struggles told the story of an afternoon that went sideways quickly. The left-hander labored through 94 pitches to record just 11 outs, walking three and surrendering the Rangers' four-run cushion before Skip Schumaker mercifully pulled him with one out in the fourth. Gore's 58.5% strike rate reflects a pitcher still searching for command in his seventh start, and the timing couldn't be worse with five more bullpen arms now needed to finish a game that should have been locked down by the starter.

The early offensive surge painted a different picture entirely. Josh Jung delivered twice against Jack Flaherty, driving in Brandon Nimmo with a line drive to left in the first inning before adding another RBI single in a three-run third. Danny Jansen's solo shot to left field in that same third inning marked his second homer of the season, while Joc pederson tacked on a sacrifice fly to seemingly put the game away at 4-0.

Detroit's comeback began immediately in the bottom of the fourth when Wenceel Pérez punished Gore with a two-RBI single, then Hao-Yu Lee followed with a soft liner to right that scored Spencer Torkelson. The Tigers completed their rally in the fifth against Jalen Beeks when Riley Greene's forceout brought home Kerry Carpenter to even the score at four.

Alejandro Osuna rescued the Rangers in the eighth with the game's most crucial swing, turning on a first-pitch offering from Burch Smith and lining a double down the left field line to score Jake Burger. That clutch hit off the Tigers' most effective reliever provided just enough margin for Jacob Latz to nail down his save in the ninth.

The bullpen parade that followed Gore's early exit ultimately held, with Tyler Alexander earning the win despite the committee approach consuming five different arms. On a cold, dreary afternoon that stretched past three hours, the Rangers found a way to steal one, but the inefficient pitching performance hardly inspires confidence to begin a six game road trip that culminates in the Bronx.`
},{
  id:'4-29-26-yankees',
  date:'April 29, 2026',
  opponent:'New York Yankees',
  home:true,
  result:'win',
  score:'TEX 3, NYY 0',
  record:'15-16',  // ← fill in current record
  gamePk:822907,
  preview:"Nathan Eovaldi did Nasty Nate stuff at Globe Life Field Wednesday afternoon, making sure to give his team a chance against a Yankees lineup that did not want to be shutout for seven innings in a 3-0 Rangers victory.",
  body:`Nathan Eovaldi dominated with surgical precision at Globe Life Field, carving through the Yankees lineup for seven shutout innings in a 3-0 Rangers victory that felt both inevitable and painfully delayed. The veteran right-hander scattered just four hits while striking out seven, looking every bit like the ace Texas needs him to be in his seventh start of the season.

What should have been a rout against rookie Elmer Rodríguez instead became a masterclass in squandered opportunities. The Yankees starter was making his major league debut, walking four batters through four innings while clearly fighting his nerves on the mound. Yet the Rangers managed just two runs against him, failing repeatedly to capitalize on prime scoring chances that would have broken the game open early.

The breakthrough finally came in the fifth inning when Josh Jung delivered the decisive blow. With runners in scoring position, Jung grounded a single to left fielder Max Schuemann that brought home both Alejandro Osuna and Ezequiel Duran for a 2-0 lead. The two-RBI knock represented exactly the kind of clutch hitting that had been absent through four frustrating innings of missed chances.

Duran emerged as the catalyst throughout the afternoon, reaching base in all three plate appearances and scoring twice. His ability to get on base consistently provided the foundation for what limited offense the Rangers could muster against a Yankees staff that changed pitchers five times across nine innings.

The insurance run came in the seventh when Sam Haggerty singled home Duran with a ground ball to center fielder Trent Grisham. By then, Eovaldi had the Yankees completely stifled, retiring Aaron Judge four straight times and limiting Ben Rice to singles despite his three-hit afternoon.

Jacob Latz closed out the final two frames with typical efficiency, allowing just one hit while preserving the shutout. The 2 hour, 43 minute affair dragged through multiple pitching changes, but Eovaldi's dominance made the outcome feel predetermined once the Rangers finally solved Rodríguez. Skip Schumaker's club improved their record with a performance that showcased their pitching strength while highlighting persistent offensive inconsistencies that could prove costly against better lineups.`
},{
  id:'4-28-26-yankees',
  date:'April 28, 2026',
  opponent:'New York Yankees',
  home:true,
  result:'loss',
  score:'TEX 2, NYY 3',
  record:'14-16',  // ← fill in current record
  gamePk:822908,
  preview:"Another night, another chapter in the Rangers' ongoing offensive struggles as they fell 3-2 to the Yankees at Globe Life Field, a defeat that felt both predictable and preventable.",
  body:`Another night, another chapter in the Rangers' ongoing offensive struggles as they fell 3-2 to the Yankees at Globe Life Field, a defeat that felt both predictable and preventable. The numbers tell the story of a team treading water. One-for-ten with runners in scoring position. Ten men left on base. Corey Seager grounding into yet another double play to kill a potential rally.

Jacob deGrom delivered exactly what the Rangers needed from their ace, spinning six innings of three-hit ball with five strikeouts and zero walks. The only blemish came in the first inning when Cody Bellinger doubled home Aaron Judge on a four-pitch sequence that found the gap in center field. DeGrom settled in immediately after that, retiring the next 18 batters he faced with the kind of surgical precision that reminded everyone why he commands ace money. But in a season where run support has been scarce, even vintage deGrom wasn't enough.

The Yankees extended their lead in the seventh when Austin Wells took Jalen Beeks deep on just three pitches, a fastball that caught too much of the plate and disappeared over the right field wall. That homer loomed large as the Rangers continued to waste opportunities, stranding runners in scoring position in multiple innings while their lineup looked overmatched against Yankees starter Cam Schlittler.

The ninth inning provided both hope and heartbreak in equal measure. Aaron Judge crushed a Cole Winn fastball to left-center for his 12th homer of the season, seemingly putting the game away at 3-0. But the Rangers showed life in the bottom half. Danny Jansen tripled home Andrew McCutchen to break the shutout, then Josh Jung followed with a line drive single to left that scored Jansen and brought the tying run to second base.

That's when the familiar demons surfaced. With Brandon Nimmo on second and momentum building, the Rangers needed situational hitting. Instead, they got more of the same offensive futility that has defined this .500 start to the season. Skip Schumaker's club is running out of excuses for these fundamental failures at the plate. Until someone in that clubhouse learns how to execute with runners in scoring position, this team will continue spinning its wheels in mediocrity, wasting strong pitching performances and frustrating a fan base that deserves better.`
},{
  id:'4-27-26-yankees',
  date:'April 27, 2026',
  opponent:'New York Yankees',
  home:true,
  result:'loss',
  score:'TEX 2, NYY 4',
  record:'14-15',  // ← fill in current record
  gamePk:822906,
  preview:"Max Fried carved through the Rangers lineup like a surgeon on Monday night, and the numbers behind Corey Seager's struggles tell a story that's becoming impossible to ignore.",
  body:`Max Fried carved through the Rangers lineup like a surgeon on Monday night, and the numbers behind Corey Seager's struggles tell a story that's becoming impossible to ignore. The Yankees southpaw scattered just four hits across six shutout innings in a 4-2 victory at Globe Life Field, but it was his mastery over the Rangers' franchise shortstop that crystallized a troubling trend.

Seager went 0-for-4 with three strikeouts, extending his April misery to a .186/.268/.372 slash line that would make a backup utility player cringe. But the real concern isn't the surface numbers. It's what's happening when sliders cross the plate. After slugging .730 against 259 sliders in 2025, Seager is posting a microscopic .048 slugging percentage against 97 sliders this season. His whiff rate on the pitch has ballooned from 36.7% to 53.1%, and opposing pitchers have clearly taken notice.

Fried exploited that weakness ruthlessly, leaving Seager looking overmatched in crucial spots. The Rangers went 1-for-5 with runners in scoring position, with Seager stranding runners in two separate at-bats when a timely hit could have changed the complexion of the game.

Meanwhile, Jack Leiter endured his worst outing of the young season, surrendering four runs on three home run balls that told the story of the night. Ben Rice opened the floodgates in the third inning with a first-pitch bomb to center field that scored Trent Grisham. Aaron Judge followed immediately with a line drive homer to left field. Jazz Chisholm Jr. added insult to injury in the fourth, turning on another first-pitch offering and depositing it over the right-center field wall.

The Rangers managed only token resistance. Joc Pederson broke the shutout with a solo homer in the seventh inning, and Alejandro Osuna delivered a two-out RBI single in the ninth that scored Jake Burger and brought Josh Smith to second base. But by then, David Bednar had entered to close out the victory for New York.

Leiter's struggles were stark. Three home runs allowed in six innings, with all the damage coming on pitches opponents jumped on early in counts. The 2h 48m game time reflected the stop-and-start nature of an evening where momentum never shifted toward the home team. For a Rangers offense that managed just seven runners left on base, the real damage was done by their inability to capitalize when opportunities presented themselves.`
},{
  id:'4-26-26-athletics',
  date:'April 26, 2026',
  opponent:'Athletics',
  home:true,
  result:'loss',
  score:'TEX 1, ATH 2',
  record:'14-14',  // ← fill in current record
  gamePk:822911,
  preview:"A 1-2-3 eighth inning by Jack Perkins sealed another frustrating afternoon for the Rangers, who watched their best scoring opportunity slip away when Danny Jansen struck out with runners in scoring position for the third time.",
  body:`A 1-2-3 eighth inning by Jack Perkins sealed another frustrating afternoon for the Rangers, who watched their best scoring opportunity slip away when Danny Jansen struck out with runners in scoring position for the third time. The final strikeout punctuated a day when Texas managed just one run despite leaving 11 runners on base in a 2-1 loss to Oakland.

Kumar Rocker's fifth start of the season unraveled in spectacular fashion during the opening frame. Carlos Cortes lined an eight-pitch battle into the gap in center field, driving home both Tyler Soderstrom and Brent Rooker with a triple that gave the Athletics all the offense they would need. The early deficit forced Rocker into damage control mode for the remainder of his six-inning effort, though he settled down nicely after the rocky beginning.

The Rangers' lone response came in the sixth when Jacob Lopez's throwing error on Evan Carter's sacrifice bunt attempt allowed Josh Jung to score from third base. Carter reached first safely on the miscue, but Texas couldn't capitalize on the momentum shift. The rally died there despite Jung's 2-for-4 performance that represented one of the few bright spots in an otherwise anemic offensive display.

Skip Schumaker's lineup managed just five hits while going 1-for-9 with runners in scoring position. Corey Seager endured an 0-for-5 afternoon that dropped his early-season average, while the designated hitter spot produced minimal contributions from both Joc Pederson and Andrew McCutchen, who combined to go 0-for-3. Pederson's double play in the seventh inning exemplified the Rangers' inability to string together meaningful at-bats.

The Athletics bullpen took control after J.T. Ginn's early exit, with Perkins delivering two scoreless frames for the save. His six strikeouts over the final two innings highlighted Texas's struggles to make contact in crucial moments. The game stretched to two hours and 47 minutes as both teams worked deep counts and made frequent pitching changes, but only Oakland managed to execute when opportunities arose.

Globe Life Field's 32,031 fans witnessed another example of how early deficits can prove insurmountable when the offense fails to capitalize on scoring chances. The Rangers bullpen kept pace after Rocker's departure, but the damage from that first-inning triple proved decisive in a game that hinged on execution rather than power.`
},{
  id:'4-25-26-athletics',
  date:'April 25, 2026',
  opponent:'Athletics',
  home:true,
  result:'win',
  score:'TEX 4, ATH 3',
  record:'14-13',  // ← fill in current record
  gamePk:822910,
  preview:"Josh Jung belted a sixth inning home run to cap a dramatic comeback as the Rangers rallied from a 3-0 deficit to beat the Athletics 4-3 at Globe Life Field on Friday night.",
  body:`Josh Jung's two-run homer in the sixth inning capped a dramatic comeback as the Rangers rallied from a 3-0 deficit to beat the Athletics 4-3 at Globe Life Field on Friday night. The blast, Jung's fourth of the season, came on just two pitches from Jeffrey Springs and gave Texas its first lead of the game.

The Athletics jumped ahead early, building their three-run advantage through the first three innings. Darell Hernaiz drove in the first run with a single in the second, scoring Jacob Wilson. The visitors added two more in the third when Colby Thomas singled home Shea Langeliers and Wilson followed with a sacrifice fly that brought Nick Kurtz across.

But Texas began chipping away immediately. Brandon Nimmo answered with a sacrifice fly in the bottom of the third, plating Danny Jansen. Two batters later, Corey Seager lined a single to center that scored Evan Carter and cut the deficit to 3-2.

MacKenzie Gore weathered the early storm despite allowing three runs over five innings. The left-hander struck out seven but needed 108 pitches to get through his outing, walking three and surrendering six hits. Gore's ability to limit further damage after the third proved crucial, giving the Rangers offense time to mount their comeback.

The decisive moment came in the sixth when Springs, who had settled in after the rocky third inning, faced Jung with Seager on base. On a 1-1 count, Jung turned on a pitch and drove it to right-center for the go-ahead runs. The third baseman's hot streak continues to mirror his 2023 All-Star form, and his clutch hitting provided exactly the spark Texas needed.

Cole Winn earned the victory with a perfect sixth inning, striking out one. The Rangers bullpen locked things down from there, with Jalen Beeks, Jakob Junis, and Jacob Latz each contributing scoreless frames. Latz worked around a single in the ninth to secure his first save.

Texas showed impressive efficiency with runners in scoring position, going 3-for-5 in those situations while leaving just four men on base. That kind of clutch hitting, combined with Jung's resurgent bat, offers hope for a team still trying to climb above .500 this season. The 152-minute victory improved the Rangers' record and demonstrated the type of comeback ability that could define their 2026 campaign.`
},
  {
    id:'4-24-26-athletics',
    date:'April 24, 2026',
    opponent:'Athletics',
    home:true,
    result:'loss',
    score:'TEX 1, ATH 8',
    record:'13-13',
    gamePk:822909,
    preview:"If the Rangers really expect to play baseball in October, they might want to start doing it in April.",
    body:`Five home runs surrendered. Seven runners stranded. A .167 batting average with runners in scoring position that turned what should have been a competitive game into an embarrassing 8-1 loss to the Athletics at Globe Life Field.

The carnage started immediately against Nathan Eovaldi, who faced a nightmare first inning that epitomized everything wrong with this Rangers performance. Nick Kurtz needed just one pitch to launch a leadoff homer to right field. Two batters later, Carlos Cortes followed with another blast to right center on a three-pitch sequence. Then Tyler Soderstrom made it three home runs on three swings, crushing a center field shot on the very first offering he saw.

Three batters, three homers, three runs, and suddenly the Rangers faced a mountain they never seriously threatened to climb. This against Luis Severino, a pitcher who entered the game sporting an ERA north of 5.00 and looking every bit the part of someone the Rangers should have feasted upon. Instead, Severino carved through the Rangers lineup like a Cy Young candidate, working 6.2 innings while allowing just one run.

That lone run came in the fourth when Josh Jung drove home Corey Seager with a ground-rule double to left field, providing the only moment of offensive competence in what became a clinic on how not to execute with runners in scoring position. The Rangers managed six hits but converted just once in six chances with runners in scoring position, leaving runners stranded in scoring position with two outs on three separate occasions.

Eovaldi, making his sixth start of the season, couldn't recover from that disastrous opening frame. He surrendered six runs through six innings, including another three-run homer to Cortes in the fifth that effectively ended any hope of a comeback. The veteran right-hander allowed four total home runs, watching the Athletics' hitters turn routine at-bats into batting practice swings.

Cal Quantrill couldn't stem the bleeding in relief, surrendering a ninth-inning, two-run homer to Zack Gelof that capped the embarrassment. For a Rangers team harboring October aspirations, this performance exposed fundamental flaws that won't disappear against better competition. You cannot survive giving up four home runs while failing to capitalize on scoring opportunities against struggling pitching.`
  },
  {
    id:'4-23-26-pittsburgh-pirates',
    date:'April 23, 2026',
    opponent:'Pittsburgh Pirates',
    home:true,
    result:'win',
    score:'TEX 6, PIT 1',
    record:'13-12',
    gamePk:822912,
    preview:"Evan Carter thought he hit a homerun. It hit the wall in right center. It was still a homerun. His first inside-the-park home run.",
    body:`Evan Carter took one look at Bubba Chandler's offering and sent it screaming toward the right-center gap at Globe Life Field, a line drive with enough carry to find the wall. What happened next turned a routine extra-base hit into the highlight of the Rangers' 6-1 victory over Pittsburgh.

Carter's inside-the-park home run in the third inning broke a scoreless tie and provided the signature moment in what became a dominant display by Jacob deGrom and the Texas offense. The center fielder circled the bases as the Pirates scrambled to retrieve the carom, scoring Josh Jung ahead of him for a 2-0 lead that would only grow from there.

The fourth inning belonged to Corey Seager, who launched his sixth home run of the season to right field after Joc Pederson had driven in Josh Smith with a two-pitch single. Seager's three-run blast gave the Rangers a commanding 6-0 advantage and effectively ended Chandler's evening. The Pirates starter surrendered seven hits and six earned runs in just four innings, walking three and striking out four in a performance that never found its rhythm.

DeGrom looked every bit the ace through 5.2 innings, collecting 10 strikeouts while allowing only five hits and one walk. The right-hander's lone blemish came via Oneil Cruz's solo home run to center field in the fifth, a towering shot that briefly interrupted what had been a masterful demonstration of command and velocity. Still, deGrom's dominance set the tone early and often, keeping Pittsburgh's lineup off balance with a mix of fastballs and breaking balls that generated swings and misses throughout his outing.

Skip Schumaker's bullpen handled the final 3.1 innings without allowing a hit, with Jalen Beeks, Jakob Junis, and Peyton Gray each contributing scoreless frames. The Pirates managed just five hits total, with Nick Gonzales accounting for two of them in a losing effort that never threatened after Carter's third-inning heroics.

The victory improved Texas to a strong start in the early season, with deGrom's fifth start of 2026 serving as a reminder of his continued excellence when healthy. But it was Carter's sprint around the bases that provided the defining image of a night when everything clicked for the Rangers at Globe Life Field.`
  },
  {
    id:'4-22-26-pittsburgh-pirates',
    date:'April 22, 2026',
    opponent:'Pittsburgh Pirates',
    home:true,
    result:'loss',
    score:'TEX 4, PIT 8',
    record:'12-12',
    gamePk:822913,
    preview:"Again with the bullpen. Just when you think you get out, they climbed right back in, turning what could have been into a nightmare that culminated with a really loud thud from a foul pole.",
    body:`Relief pitching collapsed in spectacular fashion at Globe Life Field, turning what should have been a routine Rangers win into an eight-run nightmare that left 24,289 fans leaving the ninth inning as disappointed as possible. Cole Winn and Jalen Beeks combined to surrender four runs in the ninth inning alone, transforming a 4-4 tie into Pittsburgh's most decisive victory of the young season.

The meltdown began innocuously enough when Jake Mangum reached on a fielder's choice that scored Nick Gonzales, giving the Pirates a 5-4 lead. Skip Schumaker had seen enough of Winn after just one-third of an inning and summoned Beeks to clean up the mess. Instead, Oneil Cruz launched the first pitch he saw over the right field foul pole, with the ball landing on top of the pole and skipping into the third deck. That three-run bomb essentially ended the contest before most fans realized what happened.

A half inning earlier, the Rangers had clawed back from a 4-2 deficit with Jake Burger's clutch two-out single in the eighth that plated Andrew McCutchen and Brandon Nimmo against Gregory Soto. The hit capped a spirited rally that seemed to validate the club's improved depth, particularly with veteran additions like McCutchen providing late-game production off the bench.

Jack Leiter carried most of the load through five innings but couldn't escape a disastrous fifth that featured consecutive RBI singles from Brandon Lowe and Bryan Reynolds. Reynolds' hit proved especially costly as a throwing error by Nimmo allowed two runs to score, turning a manageable 2-2 tie into a two-run deficit. Leiter's 5.0-inning performance showed promise, striking out five while limiting hard contact through the first four frames.

The Rangers' offensive struggles with runners in scoring position, managing just one hit in seven opportunities, foreshadowed their inability to build substantial leads. Josh Jung's two-run homer in the second provided the evening's lone offensive highlight, but the club's collective failure to capitalize on scoring chances left too much pressure on a bullpen that simply couldn't deliver when it mattered most. Tyler Alexander and Gavin Collyer had bridged the gap admirably through the seventh and eighth, making the ninth-inning collapse all the more deflating for a Rangers squad still searching for consistency in the season's early weeks.`
  },
  {
    id:'4-21-26-pittsburgh-pirates',
    date:'April 21, 2026',
    opponent:'Pittsburgh Pirates',
    home:true,
    result:'win',
    score:'TEX 5, PIT 1',
    record:'12-11',
    gamePk:822914,
    preview:"Another frustrating night with runners in scoring position haunted the Rangers, even in a 5-1 victory over Pittsburgh at Globe Life Field.",
    body:`Another frustrating night with runners in scoring position haunted the Rangers, even in a 5-1 victory over Pittsburgh at Globe Life Field. Texas managed just three hits in 12 at-bats with runners in scoring position, leaving eight men on base despite pounding Carmen Mlodzinski for five runs in 4.1 innings.

Kumar Rocker earned his first win of the season with six solid innings, surrendering only four hits and one run while striking out five. The right-hander worked around early trouble after Ryan O'Hearn singled home Oneil Cruz in the first inning, settling into a rhythm that kept Pittsburgh's offense quiet the rest of his outing.

The Rangers answered immediately in the second. Evan Carter grounded a single to right field that scored Joc Pederson, and Josh Smith followed with a sacrifice fly to right that brought home Josh Jung for a 2-1 lead. That two-run inning proved to be the turning point, as Texas never trailed again.

Mlodzinski unraveled completely in the fifth inning. Ezequiel Duran doubled down the left field line to score Smith, then Corey Seager lined a single to center that plated Duran. Jung capped the three-run frame with a force out that still managed to score Seager, chasing the Pirates starter from the game.

Duran finished in left field after Wyatt Langford exited early, going 1-for-2 with an RBI and a run scored in his extended role. The lineup managed to generate enough offense despite the persistent struggles with runners in scoring position that have plagued this team early in the season.

Brandon Nimmo endured an 0-for-5 night and left two runners in scoring position with two outs. Danny Jansen also stranded two runners in scoring position during late situations, continuing the maddening trend that nearly cost Texas what should have been a comfortable win.

Cole Winn, Jacob Latz, and Jakob Junis combined for three scoreless innings to close out the victory, with Winn and Latz each striking out two batters in their respective frames. The bullpen work helped Skip Schumaker's club improve their record while highlighting both the promise of their pitching staff and the ongoing concerns with clutch hitting that could define their season.`
  },
  {
    id:'4-19-26-seattle-mariners',
    date:'April 19, 2026',
    opponent:'Seattle Mariners',
    home:false,
    result:'loss',
    score:'TEX 2, SEA 5',
    record:'11-11',
    gamePk:823150,
    preview:"The Rangers dropped the series finale in Seattle behind another rough outing from MacKenzie Gore.",
    body:`MacKenzie Gore's fifth start of the season lasted exactly 18 pitches too long. The Rangers lefty surrendered three home runs in his five innings at T-Mobile Park, each one a reminder of why this venue has become such a house of horrors for Texas.

The damage came in waves. Rob Refsnyder needed just one pitch to send Gore's first offering of the game over the left field wall in the bottom of the first. An inning later, J.P. Crawford turned a four-pitch at-bat into a two-run shot to right field, scoring Mitch Garver ahead of him. The knockout blow arrived in the fifth when Randy Arozarena crushed a three-pitch sequence for his second homer of the season, plating Julio Rodríguez and pushing Seattle's lead to 5-0.

Gore's struggles continued a troubling pattern for Rangers starters in Seattle. The southpaw allowed seven hits and five earned runs across his five frames, striking out five but never finding the command to keep Seattle's hitters off balance. Each home run came on a different count, suggesting Gore's location was consistently problematic rather than falling behind hitters.

The Rangers' offense managed just four hits against Bryan Woo, who carved through the Texas lineup with surgical precision. Woo struck out six over seven innings, allowing only two runs in the seventh when Texas finally showed signs of life. Josh Jung drove home Corey Seager with a sacrifice fly to right field, then Evan Carter followed with a sharp double to right that scored Wyatt Langford.

But that seventh-inning rally represented the extent of Texas's offensive output. The Rangers went 1-for-5 with runners in scoring position and left five men on base. Jake Burger struck out three times in four at-bats, emblematic of an approach that generated little pressure against Seattle's pitching staff.

Skip Schumaker's bullpen provided four scoreless innings after Gore's exit, with Tyler Alexander, Jalen Beeks, Gavin Collyer and Jakob Junis combining to keep the deficit manageable. The late-game work offered a glimpse of what might have been possible with earlier offensive production.

Instead, the Rangers fell to 10-40 at T-Mobile Park since 2020, extending their series-winning drought in Seattle to six consecutive visits. Andrés Muñoz struck out the side in the ninth to secure the save, punctuating another frustrating afternoon in the Pacific Northwest.`
  },
  {
    id:'4-18-26-seattle-mariners',
    date:'April 18, 2026',
    opponent:'Seattle Mariners',
    home:false,
    result:'loss',
    score:'TEX 3, SEA 7',
    record:'11-10',
    gamePk:823151,
    preview:"Rangers waste chances in 7-3 loss, stranding 16 runners and exposing a clutch hitting failure that outweighs any pitching or defensive issues.",
    body:`Everything that could go wrong did go wrong for the Rangers in this 7-3 debacle at T-Mobile Park, but the most damning indictment wasn't the final score. It was watching this offense repeatedly fail when it mattered most, stranding 16 runners and going just 1-for-8 with runners in scoring position in a performance that exposed fundamental flaws Skip Schumaker can't ignore.

The Rangers put plenty of men on base, collecting 11 hits and drawing seven walks against Seattle pitching. They just couldn't bring them home when the opportunities presented themselves. Kyle Higashioka left three runners in scoring position with two outs. Brandon Nimmo stranded two more in the same situation. Josh Jung, despite launching his second home run of the season in the sixth inning, also left two runners stranded with two outs. This wasn't bad luck or good Seattle pitching. This was systematic failure in clutch moments.

Nathan Eovaldi's struggles compounded the offensive futility. The veteran right-hander surrendered early damage when Julio Rodríguez drove home J.P. Crawford with a two-pitch single in the first inning, then watched Dominic Canzone deliver the knockout blow in the fourth. Canzone's sharp grounder to center plated both Randy Arozarena and Luke Raley, putting Texas in a 3-0 hole that would prove insurmountable given their inability to capitalize with runners in scoring position.

When Jung finally broke through with his solo shot off George Kirby in the sixth, it felt like momentum might shift. Instead, Raley answered immediately with his fifth home run of the season off Eovaldi, restoring Seattle's three-run cushion and effectively ending any realistic comeback hopes.

The eighth inning became a showcase of defensive incompetence and bullpen meltdown. Cal Quantrill entered with a manageable deficit and promptly imploded. Cole Young's sharp grounder deflected off second baseman Ezequiel Duran, allowing two more runs to score. Leo Rivas then added insult with a sacrifice fly that made it 7-1.

Texas managed some ninth-inning dignity when Carter drove home Wyatt Langford and Duran doubled in Josh Smith, but by then this 3-hour, 13-minute slog had already revealed too much about a team struggling with fundamental execution. The Rangers left the ballpark with plenty of questions about their ability to perform when games hang in the balance.`
  },
  {
    id:'4-17-26-seattle-mariners',
    date:'April 17, 2026',
    opponent:'Seattle Mariners',
    home:false,
    result:'win',
    score:'TEX 5, SEA 0',
    record:'11-9',
    gamePk:823152,
    preview:"Jacob deGrom's return to Seattle turned into a battle of attrition that the Rangers ultimately won through persistence rather than dominance.",
    body:`Jacob deGrom's return to Seattle turned into a battle of attrition that the Rangers ultimately won through persistence rather than dominance. The ace threw 88 pitches in those four innings, but the 30-pitch first inning was indicative of what Seattle hitters were going to do all night. While he didn't allow any runs, he had traffic and deep counts in every frame.

Brandon Nimmo provided the early fireworks, turning on a Logan Gilbert fastball for a three-pitch home run in the first inning. That quick strike masked what would become a grinding affair that stretched over three hours and eight minutes. Gilbert settled in after that rough start, striking out seven Rangers over 5.1 innings, but the damage accumulated incrementally.

The Mariners made deGrom work harder than his final line suggested. Four hits and two walks across four frames told only part of the story. Josh Naylor collected two hits in two at-bats against the Rangers starter, while Julio Rodríguez and J.P. Crawford each found holes in the Texas defense. DeGrom's pitch count climbed steadily as Seattle hitters fouled off strike three and worked full counts.

Corey Seager became the catalyst for Texas offense after that initial blast. The shortstop reached base in the third inning and scored on Wyatt Langford's line drive single to left field. Seager repeated the pattern in the seventh, coming around to score on Jake Burger's sharp liner to center field that plated the third run against Jose A. Ferrer.

Skip Schumaker leaned heavily on his bullpen after deGrom's early exit. Gavin Collyer earned the victory with 1.1 innings of one-hit relief, followed by a parade of arms that held Seattle scoreless through the final five frames. Tyler Alexander, Jalen Beeks, Cole Winn, and Jacob Latz each contributed scoreless innings as the Rangers bullpen combined for five shutout frames.

The ninth inning provided the finishing touches to Seattle's frustration. Andrew McCutchen drove in Langford with a sacrifice fly to right field, then Jung capped the scoring with a sharp double that brought home Burger. Casey Legumina surrendered both runs in his 2.1-inning stint, watching Texas hitters collect four hits against his offerings.

Seattle managed seven hits but couldn't string together the timely hitting necessary to crack Texas pitching. The Mariners left runners stranded throughout the evening, unable to solve the Rangers' bullpen depth in a game that showcased endurance over explosiveness.`
  },
  {
    id:'4-16-26-athletics',
    date:'April 16, 2026',
    opponent:'Athletics',
    home:false,
    result:'win',
    score:'TEX 9, ATH 6',
    record:'10-9',
    gamePk:825023,
    preview:"Sometimes a frustrated outfielder throwing water jugs in the dugout provides exactly the spark a team needs.",
    body:`Sometimes a frustrated outfielder throwing water jugs in the dugout provides exactly the spark a team needs. Wyatt Langford's ninth-inning tantrum became the catalyst for one of the Rangers' most improbable comebacks this season, turning a three-run deficit into a 9-6 victory over the Athletics at Sutter Health Park.

The Rangers entered the ninth trailing 6-5 after Nick Kurtz popped up a wind-aided ball that fell for an improbable double off Jakob Junis in the eighth, erasing what had been a two-run lead built on Josh Jung's seventh-inning homer. That bloop hit landed just in front of Langford. By the time the A's finished their three-run half inning, the mood in the visiting dugout had turned dark.

Between innings, Langford apparently decided the team needed a wake-up call. According to Jung, who spoke with Rangers sideline reporter Laura Stickells after the game, his teammate "threw some water jugs around and got the boys fired up." The display of frustration became a pressure valve for a team that had watched a winnable game slip away.

"I think everybody was kind of like calmed down a little bit," Jung explained with a laugh. "He kind of did it for all of us, probably. We were frustrated, but then we're just laughing. It's like one jug goes, and then the next goes, too."

Whatever the psychological effect, the Rangers immediately went to work against Justin Sterner. Kyle Higashioka reached on a fielder's choice that brought Jake Burger home when Sterner threw wildly, tying the game at six. Joc Pederson followed with a line drive single to center that scored Jung for the lead. Two batters later, Ezequiel Duran capped the four-run rally with a two-run single through the middle.

The comeback overshadowed what had been a grinding afternoon in Sacramento's 64-degree weather with 17-mph winds blowing left to right. Jack Leiter lasted just 5.2 innings in his fourth start, surrendering the lead in the fifth when Jacob Wilson and Carlos Cortes produced back-to-back RBI singles. The Rangers clawed back to even on Josh Smith's RBI double in the sixth, then seized control briefly on Jung's two-run shot in the seventh.

Cal Quantrill earned the victory with a clean ninth inning, but the story belonged to the unlikely rally that followed Langford's dugout dramatics. Sometimes leadership takes unconventional forms.`
  },
  {
    id:'4-15-26-athletics',
    date:'April 15, 2026',
    opponent:'Athletics',
    home:false,
    result:'loss',
    score:'TEX 5, ATH 6',
    record:'9-9',
    gamePk:825021,
    preview:"Skip Schumaker took full responsibility for a loss that felt more like managerial miscalculation than player failure, and his postgame assessment carried the weight of someone who knew exactly when the game slipped away.",
    body:`Skip Schumaker took full responsibility for a loss that felt more like managerial miscalculation than player failure, and his postgame assessment carried the weight of someone who knew exactly when the game slipped away. "I think this game is solely on me," Schumaker said. "I made a bad strategy move in the middle of the game, and I put this one solely on me. The offense did their job, came back late with the big home run from Jake Burger. I put Cole Winn in a bad situation, and it ultimately cost us the game, in my opinion. So this one's on me."

The decision that haunted Schumaker came in the sixth inning, when he turned to Winn after pulling Jalen Beeks following a single inning of work. What happened next was spectacular in all the wrong ways for Texas. Shea Langeliers launched a four-pitch offering 467 feet to left center field, a moonshot that became the longest home run in Major League Baseball this season and turned a tied game into a two-run deficit. One inning later, Jacob Wilson added insult to injury with his own blast off Winn, extending the Athletics' lead to 6-2.

The conditions at Sutter Health Park practically screamed danger for pitchers willing to challenge hitters in the zone. With 65-degree temperatures and a nine-mph wind blowing out to center field, Kumar Rocker's early struggles made more sense in hindsight. The right-hander walked four batters in 4.2 innings, allowing early runs on Tyler Soderstrom's RBI double and Denzel Clarke's run-scoring single. Rocker either lacked command or was battling something else entirely, but the strategy of avoiding the strike zone proved costly when his replacements couldn't execute either.

The Rangers' offensive approach reflected a troubling trend in their early season work. Of their five hits, two left the ballpark for all five runs. Corey Seager's two-run homer in the third inning tied the game at 2-2, while Burger's three-run blast in the eighth nearly completed an improbable comeback. But with runners in scoring position just four times all night and converting only once, Texas showed little ability to manufacture runs beyond waiting for mistake pitches to drive. That approach left them one swing short when Joel Kuhnel closed out the ninth inning, preserving a 6-5 Athletics victory that felt equal parts preventable and predictable.`
  },
  {
    id:'4-14-26-athletics',
    date:'April 14, 2026',
    opponent:'Athletics',
    home:false,
    result:'loss',
    score:'TEX 1, ATH 2',
    record:'9-8',
    gamePk:825022,
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
    gamePk:825024,
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
    gamePk:823966,
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
    gamePk:823967,
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
    gamePk:823968,
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
    gamePk:822915,
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
    gamePk:822916,
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
    gamePk:822918,
    preview:"Jacob deGrom's second start of 2026 delivered five dominant innings, but it was Jake Burger's clutch sixth-inning double that gave Texas a 2-1 win over Seattle at Globe Life Field.",
    body:`Fifth-inning perfection from Jacob deGrom masked what became a grinding test of Texas bullpen depth. The Rangers ace delivered vintage deGrom through five innings, surrendering just one hit after Cal Raleigh's first-inning homer, and Skip Schumaker faced an increasingly delicate calculus as his rotation anchor exited after 83 pitches in his second start of 2026.

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
    gamePk:822917,
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
    gamePk:822920,
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
    gamePk:822919,
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
    gamePk:824860,
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
    gamePk:824861,
    preview:"Sometimes the most telling moment in a baseball game happens when everything appears secure. Chris Martin entered the ninth inning with a four-run cushion, the kind of lead that should make closing duties feel routine.",
    body:"Sometimes the most telling moment in a baseball game happens when everything appears secure. Chris Martin entered the ninth inning with a four-run cushion, the kind of lead that should make closing duties feel routine. Instead, Camden Yards witnessed exactly why no advantage feels safe in modern baseball.\n\nMartin surrendered a two-run double to Taylor Ward that cut the Rangers' lead in half, transforming what looked like a comfortable victory into something requiring actual attention. The veteran closer escaped without further damage, but not before reminding everyone that Baltimore's offense remains capable of late-inning theatrics even in a losing effort.\n\nThe drama felt appropriate for a game that never quite settled into predictable rhythms. Jacob deGrom pitched like someone still working back from injury concerns, lasting just 4.2 innings despite striking out seven. His command looked sharp enough, but the Orioles made consistent contact when they needed to. Pete Alonso's fourth-inning homer tied the game at one, and Gunnar Henderson's two-run double in the fifth briefly gave Baltimore a lead.\n\nWhat separated these teams was depth, both offensive and bullpen. Danny Jansen provided the decisive blow with a three-run homer in the seventh that gave Texas breathing room they thought they wouldn't need. The veteran catcher's blast came at the perfect moment, capitalizing on Baltimore's decision to stick with Yaramil Hiraldo perhaps one batter too long.\n\nCorey Seager delivered the kind of performance that justifies his contract extension, collecting two hits including a solo homer in the ninth that ultimately provided the winning margin. His ability to impact games both early and late has become a signature trait, and Tuesday's effort showcased exactly why the Rangers view him as irreplaceable.\n\nCole Winn earned the victory with 1.1 innings of scoreless relief, the kind of middle-innings contribution that often determines close games. His presence allowed Skip Schumaker to navigate deGrom's early exit without overextending the bullpen's key arms.\n\nWard finished 4-for-5 for Baltimore, a performance that deserved a better outcome. His late rally attempt highlighted how dangerous the Orioles can be even when trailing significantly.\n\nThe Rangers improved their early-season record while learning that comfortable leads require constant vigilance. Martin's ninth-inning scare served as a useful reminder that every out matters, regardless of the scoreboard situation."
  },
  {
    id:'3-30-26-orioles',
    date:'March 30, 2026',
    opponent:'Baltimore Orioles',
    home:false,
    result:'win',
    score:'TEX 5, BAL 2',
    record:'3-1',
    gamePk:824863,
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
    gamePk:823487,
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
    gamePk:823488,
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
    gamePk:823486,
    preview:"Too little, too late. That cruel baseball cliche played out in vivid detail at Citizens Bank Park as the Rangers mounted a frantic ninth-inning rally that fell just short.",
    body:"Too little, too late. That cruel baseball cliche played out in vivid detail at Citizens Bank Park as the Rangers mounted a frantic ninth-inning rally that fell just short of erasing eight innings of offensive futility.\n\nFor 24 outs, Cristopher Sanchez and the Philadelphia bullpen made Rangers hitters look like they were swinging underwater. Sanchez carved through the Texas lineup with surgical precision, retiring 18 of 20 batters while striking out 10. The left-hander's changeup buckled knees and induced weak contact, leaving Rangers runners stranded in the few moments they managed to reach base. Through eight frames, the visitors had managed just three hits and looked completely overmatched.\n\nThen the ninth inning happened. With Philadelphia closer Kyle Backhus on the mound protecting a five-run cushion, everything unraveled in spectacular fashion. Jake Burger launched a two-run homer to left center, his first long ball of the spring, cutting the deficit to 5-2. The Citizens Bank Park crowd, comfortable moments earlier, began shifting nervously as Danny Jansen followed with an RBI single that scored Kyle Higashioka and suddenly made it a two-run game.\n\nThe comeback bid represented everything that had been missing for eight innings. Burger's blast came on a 1-0 fastball that he turned on with authority, the kind of aggressive approach that had been notably absent earlier. Jansen's clutch hit with two outs showed the situational hitting that championship teams require. But Jhoan Duran entered and struck out the final batter to strand the tying run at second base.\n\nNathan Eovaldi's struggles set the tone early and often. The veteran right-hander allowed eight hits in 4.2 innings, including Kyle Schwarber's first-inning two-run homer and Alec Bohm's crushing three-run blast in the fifth that effectively decided the contest. Eovaldi's four-seam fastball lacked its typical bite, sitting in hittable zones too frequently against a disciplined Phillies lineup.\n\nThe loss highlighted familiar concerns about offensive consistency. Beyond Burger's heroics and Seager's two-hit effort, the Rangers managed little sustained pressure. Wyatt Langford struck out twice, continuing early-season struggles that bear monitoring as camp progresses."
  },
];
