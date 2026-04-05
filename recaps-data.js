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

const RECAPS = [
  {
    id:'4-1-26-orioles',
    date:'April 1, 2026',
    opponent:'Baltimore Orioles',
    home:false,
    result:'loss',
    score:'BAL 9, TEX 4',
    record:'2-2',
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
    record:'2-1',
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
    record:'1-1',
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
    record:'0-1',
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
    record:'0-1',
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
