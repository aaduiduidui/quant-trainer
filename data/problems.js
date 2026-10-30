// Quant Interview Trainer catalogue. Maintain this single data file.
window.QUANT_DATA = {
  "meta": {
    "title": "Quant Interview Trainer",
    "source": "Green Book exercises + local mathematics and programming questions",
    "difficulties": [
      "easy",
      "medium",
      "hard"
    ],
    "schemaVersion": 3,
    "upstream": {
      "repository": "https://github.com/ellenzishanli/quant_interview_trainer",
      "commit": "f0192f17bf602457d0a8f43857e83304b56d7771"
    },
    "localIntegration": {
      "accepted": 142,
      "merged": 37,
      "added": 105,
      "excludedIncomplete": 39,
      "excludedKnownErrors": 2
    },
    "contentLanguages": [
      "en",
      "zh"
    ],
    "userContributions": {
      "added": 2
    }
  },
  "chapters": [
    {
      "num": 2,
      "title": "Brain Teasers",
      "blurb": "Problems that need common sense, logic and creativity rather than heavy math. They test how you think, not what you memorized.",
      "topics": [
        {
          "id": "2.1",
          "title": "Problem Simplification",
          "note": "When a problem looks too complex, solve the smallest case first and grow the complexity until a pattern emerges.",
          "problems": [
            {
              "title": "Screwy Pirates",
              "difficulty": "hard",
              "tags": [
                "game theory",
                "backward induction",
                "simplification"
              ],
              "statement": "Five pirates loot a chest of 100 gold coins. They are democratic but ruthless. The most senior pirate proposes how to split the coins; **all** pirates (including the proposer) vote. If at least 50% accept, the split happens. Otherwise the proposer is thrown overboard and the next most-senior pirate proposes, and so on. Each pirate is perfectly rational and, in order: (1) wants to survive, (2) wants to maximize his gold, (3) all else equal, prefers fewer pirates left. How should the most senior pirate split the 100 coins?",
              "hint": "Don't start with 5 pirates. Start with 1, then 2, then build up — the pattern appears quickly.",
              "solution": "**The trick:** 5 pirates at once feels impossible, so shrink the problem. Solve the tiniest versions first, then climb back up — at each step a senior pirate only needs to *buy just enough votes to survive*.\n\nFirst, keep the rules straight: a plan passes with **50% or more** of the votes (so the proposer's own vote carries real weight), and each pirate's priorities, in order, are **(1) stay alive → (2) grab the most gold → (3) tie-break: prefer fewer pirates left**.\n\nNumber them P1 (most junior) up to P5 (most senior, who proposes first). Now build up:\n\n- **Only P1 left:** he keeps all 100. *(1 of 1 votes = 100% ≥ 50%.)*\n- **P2 & P1:** P2 votes for his own plan — 1 of 2 votes = 50%, which passes. So **P2 takes all 100, P1 gets 0.**\n- **P3, P2, P1:** P3 needs just **one** extra vote. Who's cheapest? **P1** — because if P3 is tossed overboard, we drop into the 'P2 & P1' world where P1 gets **0**. So a single coin beats his alternative. → **P3: 99, P2: 0, P1: 1.**\n- **P4, P3, P2, P1:** P4 needs one extra vote. If P4 dies we land in the P3 world where **P2 gets 0** — so P4 buys **P2** with 1 coin. → **P4: 99, P3: 0, P2: 1, P1: 0.**\n- **All 5:** P5 needs **two** extra votes. If P5 dies we reach the P4 world where **P1 and P3 each get 0** — they're the two cheapest to flip. Give each **one coin**.\n\n**Answer: P5 keeps 98, gives 1 coin each to P1 and P3, nothing to P2 and P4.** The vote passes 3–2.\n\nThe pattern: every proposer bribes exactly the pirates who would walk away with nothing in the next-smaller game.",
              "keyIdea": "Backward induction: anchor on the trivial base case and let each player reason about what happens if his proposal is rejected. The proposer only needs to bribe the cheapest votes.",
              "id": "2.1:screwy-pirates",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.1:screwy-pirates",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.1 / Screwy Pirates"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "海盗分金",
                  "statement": "五名海盗分100枚金币。资历最高者先提方案，所有人（含提议者）投票，赞成票至少一半即通过，否则提议者被处死，由下一位提议。每人完全理性，依次优先保命、金币最多、同等条件下让存活人数更少。最高资历者应如何分配？",
                  "solution": "按资历从低到高编号P1至P5，逆向归纳：一人时P1得100；两人时P2靠自己的一票得100，P1得0；三人时P3给P1一枚即可得其支持，分配为(P3,P2,P1)=(99,0,1)；四人时P4给下一轮得0的P2一枚，分配为(99,0,1,0)。五人时P5需再买两票，给下一轮得0的P1、P3各一枚，自己留98，方案以3比2通过。",
                  "hint": "从一人、两人的情形开始倒推。",
                  "keyIdea": "逆向归纳；收买下一轮收益最低的选民。",
                  "tags": [
                    "博弈论",
                    "逆向归纳",
                    "化简"
                  ]
                }
              }
            },
            {
              "title": "Tiger and Sheep",
              "difficulty": "medium",
              "tags": [
                "game theory",
                "parity",
                "induction",
                "mathematics"
              ],
              "statement": "There are 100 tigers and one sheep. A tiger that eats the sheep immediately becomes a sheep. All tigers are rational and know the rules; survival takes priority over eating. Under the classical model in which one tiger acts at a time, will any tiger eat the sheep?",
              "hint": "Start with 1 tiger, then 2, then 3. The answer depends only on whether the number of tigers is odd or even.",
              "solution": "**Intuition:** a tiger only eats the sheep if eating it doesn't turn *itself* into the next victim. Whether that's safe flips back and forth as we add tigers — and that flip is the entire answer.\n\nBuild it up one tiger at a time, each time asking: *'If I eat the sheep, do I survive the world I just created?'*\n\n- **1 tiger:** after eating it becomes the sheep, but there's no one left to eat it. Safe to eat → 🐑 **eaten**.\n- **2 tigers:** if one eats, it turns into a sheep — and the other tiger is now in the '1 tiger' situation and *will* eat it. Too risky → nobody eats → 🐑 **safe**.\n- **3 tigers:** eating creates a '2 tigers' world, where we just saw the sheep is **safe**. So the eater survives → it eats → 🐑 **eaten**.\n- **4 tigers:** eating creates a '3 tigers' world where the sheep gets eaten — so eating is suicide → 🐑 **safe**.\n\nNotice the pattern flips every time: **odd number of tigers → sheep eaten; even → sheep safe.** With **100** tigers (even), the sheep is **safe — not eaten**.",
              "keyIdea": "Parity argument via induction. Each tiger's safety depends on whether the situation it creates leaves an odd or even number of tigers.",
              "id": "2.1:tiger-and-sheep",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.1:tiger-and-sheep",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.1 / Tiger and Sheep"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0067"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "100只老虎与1只羊。吃羊的老虎立即变羊；老虎完全理性、共同知道规则，优先保命，其次吃羊。按经典逐次单只行动模型，会有老虎吃羊吗？",
                  "title": "老虎与羊",
                  "solution": "从小规模归纳：一虎会吃羊且存活；两虎中谁吃羊都会被另一虎吃，因此都不吃；三虎吃羊后变成两虎局面，故会吃。依此奇数只虎会吃，偶数只虎不吃。100为偶数，羊安全。",
                  "hint": "依次考虑1、2、3只老虎，观察奇偶性。",
                  "keyIdea": "通过归纳追踪吃羊后自身的生存条件。",
                  "tags": [
                    "博弈论",
                    "奇偶性",
                    "归纳",
                    "数学"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "问题简化",
              "note": "问题看起来过于复杂时，先解最小规模的情形，再逐步增加复杂度，直到发现规律。"
            }
          }
        },
        {
          "id": "2.2",
          "title": "Logic Reasoning",
          "problems": [
            {
              "title": "River Crossing",
              "difficulty": "easy",
              "tags": [
                "logic",
                "optimization"
              ],
              "statement": "Four people A, B, C, D must cross a river over a bridge that holds at most 2 people at a time. It's dark and they share one torch, which must travel with every crossing. A pair walks at the slower person's speed. Crossing times: A = 10 min, B = 5 min, C = 2 min, D = 1 min. What is the minimum time to get everyone across?",
              "hint": "The key is to make the two slowest people (A and B) cross together.",
              "solution": "**The key realization:** the 10-minute person is the bottleneck. You never want to waste a whole trip on them alone — instead send the **two slowest people (10 and 5) together**, so the 5-minute trip hides *inside* the 10-minute one and you only pay for it once. To set that up, use the two fastest people (C and D) as the shuttle drivers.\n\n1. **C & D cross** → 2 min  *(now C, D are on the far side)*\n2. **D comes back** with the torch → 1 min\n3. **A & B cross together** → 10 min  *(the two slow ones, in a single trip)*\n4. **C comes back** with the torch → 2 min\n5. **C & D cross** → 2 min\n\nTotal: 2 + 1 + 10 + 2 + 2 = **17 minutes** — and that's the minimum. *(Swapping who returns in steps 2/4 also gives 17.)*",
              "keyIdea": "Pair the two slowest travelers so you only 'pay' for the 10-minute crossing once. Use the fastest people as torch-bearers/ferries.",
              "id": "2.2:river-crossing",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:river-crossing",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / River Crossing"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "过桥",
                  "statement": "A、B、C、D过桥分别需10、5、2、1分钟。每次至多两人，必须携带唯一火把，同行按较慢者计时。所有人都要过桥，求最短时间。",
                  "solution": "C、D过去2分钟；D返回1分钟；A、B过去10分钟；C返回2分钟；C、D过去2分钟。共17分钟。让最慢两人同行，用最快两人运送火把。",
                  "hint": "让最慢的两个人一起过桥。",
                  "keyIdea": "合并两次慢速过桥的成本，用快者往返。",
                  "tags": [
                    "逻辑",
                    "优化"
                  ]
                }
              }
            },
            {
              "title": "Birthday Problem (Cheryl's Birthday)",
              "difficulty": "medium",
              "tags": [
                "logic",
                "deduction",
                "knowledge"
              ],
              "statement": "Boss A's birthday is one of: Mar 4, Mar 5, Mar 8; Jun 4, Jun 7; Sep 1, Sep 5; Dec 1, Dec 2, Dec 8. A tells colleague B only the **month** and colleague C only the **day**. Then:\n\n- B says: *“I don't know A's birthday, but I know C doesn't know it either.”*\n- C says: *“I didn't know A's birthday, but now I know it.”*\n- B says: *“Now I know it too.”*\n\nWhat is A's birthday?",
              "hint": "Just follow what each statement reveals about the month and day, step by step.",
              "solution": "**The idea:** nobody ever says the date out loud. Each sentence instead tells you what that person *can* or *can't* figure out — and each one quietly eliminates options. Track them in order.\n\nFirst, list how often each **day** appears: 1, 2, 4, 5, 7, 8. Two days are *unique* — **2** (only Dec 2) and **7** (only Jun 7). Hold that thought.\n\n**Statement 1 — B: \"I don't know, but I know C doesn't either.\"** B only knows the month. For B to be *certain* C can't already know, the month must contain **no unique day**. Jun has the unique day 7, and Dec has the unique day 2 — so B can rule those out only if B's month isn't one of them. → the month is **March or September**.\nSurvivors: Mar 4, Mar 5, Sep 1, Sep 5.\n\n**Statement 2 — C: \"Now I know it.\"** C knows the day. Among the four survivors, day **5** appears twice (Mar 5 *and* Sep 5), so if C had a 5 they'd still be stuck. Since C is now sure, the day is **not 5**. → survivors: **Mar 4** or **Sep 1**.\n\n**Statement 3 — B: \"Now I know it too.\"** B knows the month. The two survivors are in *different* months (March vs September), so the month alone pins it down — consistent with B being sure.\n\nBoth remaining options work for B, but only one day-value (from step 2) leaves a single candidate per month, and the unique consistent answer is **September 1**.",
              "keyIdea": "Common-knowledge deduction: each statement eliminates possibilities not by revealing the secret directly but by revealing what the speaker *can* and *cannot* deduce.",
              "id": "2.2:birthday-problem-cheryl-s-birthday",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:birthday-problem-cheryl-s-birthday",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Birthday Problem (Cheryl's Birthday)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "生日推理",
                  "statement": "A的生日候选为：3月4、5、8日；6月4、7日；9月1、5日；12月1、2、8日。B只知道月份，C只知道日期。B说：“我不知道，但我知道C也不知道。”C说：“原先不知道，现在知道了。”B说：“现在我也知道了。”问生日。",
                  "solution": "日期2和7仅出现一次，因此B的第一句话排除6月、12月，剩下3月4、5、8日和9月1、5日。C随后知道答案，排除重复的5日，剩3月4、8日与9月1日。B知道月份后也能确定，因此不能是仍有两个候选的3月，答案为9月1日。",
                  "hint": "逐句更新每个人可排除的候选日期。",
                  "keyIdea": "公共知识推理：从“对方知道什么”排除候选。",
                  "tags": [
                    "逻辑",
                    "逻辑推理",
                    "知识状态"
                  ]
                }
              }
            },
            {
              "title": "Card Game",
              "difficulty": "medium",
              "tags": [
                "symmetry",
                "expected value"
              ],
              "statement": "A casino offers a game with a normal 52-card deck. You flip two cards at a time. If both are black they go to the dealer's pile; if both red, to your pile; if mixed, discarded. After all 52 cards, whoever has more cards wins \\$100; otherwise you get nothing. How much would you pay to play?",
              "hint": "Use symmetry: every discarded pair removes one red and one black card.",
              "solution": "**Intuition:** instead of tracking every shuffle, look for something that *never changes* no matter how the cards fall. Here it's the colors — a discarded 'mixed' pair always throws away **one red and one black together**.\n\nSo follow the two colors:\n- Your pile only ever gains **reds**; the dealer's pile only ever gains **blacks**.\n- The deck starts with **26 red and 26 black**, and every removal (your pair, the dealer's pair, or a discard) takes them in a way that keeps the *leftover* reds and blacks marching down in lockstep.\n\nThe upshot: the number of cards you collect always **exactly equals** the number the dealer collects. **Every game is a tie.**\n\nSince you can never come out ahead, the game is worth exactly **\\$0 — don't pay anything to play.**",
              "keyIdea": "A symmetry/invariant argument: a mixed pair removes one of each color, so red-count and black-count remaining are always equal. The game is always a tie.",
              "id": "2.2:card-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:card-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Card Game"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "红黑配对",
                  "statement": "赌场用52张普通扑克牌，每次翻两张：全黑归庄家，全红归你，异色丢弃。翻完后牌多者赢100美元，否则无收益。你最多愿付多少入场费？",
                  "solution": "每次丢弃一红一黑。原有红黑各26张，若丢弃k对，则你和庄家最后各得26-k张，必然平局。因此收益恒为0，公平入场费为0。",
                  "hint": "每对异色弃牌都移除一红一黑。",
                  "keyIdea": "由总颜色数守恒证明最终两堆相等。",
                  "tags": [
                    "对称性",
                    "期望"
                  ]
                }
              }
            },
            {
              "title": "Burning Ropes",
              "difficulty": "easy",
              "tags": [
                "logic",
                "time measurement",
                "construction"
              ],
              "statement": "Two ropes each take exactly one hour to burn, but burn at nonuniform rates. How can you measure exactly 45 minutes?",
              "hint": "Light a rope from both ends and it burns in half the time, regardless of unevenness.",
              "solution": "**The key insight:** you can't trust any *point* on the rope (it burns unevenly), but you *can* trust the total — each rope always takes exactly 60 minutes end-to-end. And lighting a rope from **both ends** makes the two flames jointly eat the whole rope in half the time: **30 minutes**, no matter where they meet.\n\nNow combine that to build 45 = 30 + 15:\n\n1. **At t = 0:** light **rope 1 at both ends** *and* **rope 2 at one end**.\n2. **At t = 30 min:** rope 1 is fully burned (both-ends trick). Rope 2, lit at one end, has burned for 30 min so it has exactly **30 minutes of length left**. At this instant, **light rope 2's other end** too.\n3. Rope 2's remaining 30-min stub now burns from both ends → gone in **15 more minutes**.\n\nTotal elapsed: 30 + 15 = **45 minutes**.",
              "keyIdea": "Burning a rope from both ends always halves its time even when burning is uneven, because the two flames jointly consume the whole length.",
              "id": "2.2:burning-ropes",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:burning-ropes",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Burning Ropes"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0192"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "2 根燃烧速度不均匀但各自恰好烧 `1` 小时的绳子，如何准确计时 `45` 分钟？",
                  "title": "燃绳计时",
                  "solution": "同时点燃第一根两端及第二根一端。第一根30分钟烧完，此时点燃第二根另一端；第二根剩余的单端燃烧时间为30分钟，两端同时烧只需15分钟。合计45分钟。",
                  "hint": "两端同时点燃可将整根绳子的燃烧时间减半。",
                  "keyIdea": "利用总燃烧时间，而非绳长比例。",
                  "tags": [
                    "逻辑",
                    "计时",
                    "构造"
                  ]
                }
              }
            },
            {
              "title": "Defective Ball (12 Balls)",
              "difficulty": "hard",
              "tags": [
                "weighing",
                "information",
                "search"
              ],
              "statement": "You have 12 identical-looking balls. One is defective — either heavier OR lighter than the rest (you don't know which). Using a balance scale only **3 times**, identify the defective ball (and ideally whether it's heavy or light).",
              "hint": "First try it for 9 balls in 2 weighings when you already know the odd one is heavier. The key is to split into three groups of equal size, not two.",
              "solution": "**Why thirds, not halves?** A balance has *three* possible outcomes each time (left-heavy, right-heavy, balanced), so each weighing gives you up to 3-way information. With 3 weighings that's up to $3^3 = 27$ distinguishable outcomes — plenty for 12 balls × 2 (heavy or light). The catch is you don't know whether the bad ball is heavy or light, so you must design the weighings to reveal *both* which ball and its direction.\n\nLabel the balls 1–12 and split into three groups of 4.\n\n**Weighing 1 — {1,2,3,4} vs {5,6,7,8}:**\n\n**Case A — they balance.** The bad ball is among {9,10,11,12}, and balls 1–8 are all good.\n- **Weighing 2 — 9,10,11 vs 1,2,3 (known-good):**\n  - *Balances* → ball **12** is the culprit. **Weighing 3:** 12 vs a good ball tells you heavy or light.\n  - *Tips* → you now know the direction (e.g. heavy) and it's one of 9,10,11. **Weighing 3:** 9 vs 10 — heavier one is it, or if they balance it's 11.\n\n**Case B — they tip (say left side {1,2,3,4} is heavy).** So either one of 1–4 is *heavy*, or one of 5–8 is *light*. Eight suspects, each with a known 'suspected direction'.\n- **Weighing 2 — 1,2,5 vs 3,4,6** (a clever reshuffle that mixes suspects):\n  - *Balances* → the bad ball is among the untested {7,8} (both suspected light). **Weighing 3:** 7 vs 8 — the lighter is it.\n  - *Left still heavy* → consistent only with 1 or 2 being heavy (they stayed on the heavy side) or 6 being light. **Weighing 3:** 1 vs 2 finds it (balance ⇒ 6).\n  - *Tips the other way* → blame 3 or 4 (heavy) or 5 (light); **Weighing 3:** 3 vs 4 finds it (balance ⇒ 5).\n\nEvery branch resolves in exactly **3 weighings**.\n\n**General result:** with $n$ weighings you can pin down the odd ball among up to $\\frac{3^n - 3}{2}$ balls when heavy-or-light is unknown (and up to $3^n$ when you already know which).",
              "keyIdea": "Each 3-way weighing yields one of three outcomes (left, right, balance), so it carries $\\log_2 3$ bits. Splitting into thirds (not halves) maximizes information per weighing.",
              "id": "2.2:defective-ball-12-balls",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:defective-ball-12-balls",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Defective Ball (12 Balls)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "十二球称重",
                  "statement": "12个外观相同的球中恰有一个重量异常，未知偏重或偏轻。用天平称3次，找出异常球并判断轻重。",
                  "solution": "编号1至12。先称{1,2,3,4}与{5,6,7,8}。\n\n若平衡，异常在9至12：称9、10、11与已知正常的1、2、3；若平衡则12异常，最后与正常球比较；否则已知异常方向，称9与10即可在9、10、11中定位。\n\n若首次左重，候选为1至4偏重或5至8偏轻。第二次称{1,2,5}与{3,4,6}：平衡则7或8偏轻，互称可判；仍左重则1、2偏重或6偏轻，称1与2；右重则3、4偏重或5偏轻，称3与4。首次右重对称处理。\n\n每次天平有三种结果。未知轻重且无预先正常参照球时，n次最多处理$(3^n-3)/2$个球；已知异常方向时可处理$3^n$个。",
                  "hint": "先考虑已知偏重时的三分法；未知方向时要同时编码球号与轻重。",
                  "keyIdea": "利用三种称重结果构造完整决策树。",
                  "tags": [
                    "称重",
                    "信息",
                    "搜索"
                  ]
                }
              }
            },
            {
              "title": "Trailing Zeros",
              "difficulty": "easy",
              "tags": [
                "number theory",
                "factorials"
              ],
              "statement": "How many trailing zeros does $100!$ have in decimal notation? Explain.",
              "hint": "Each trailing zero needs a factor of 10 = 2 × 5. Count the 5s — they are rarer than the 2s.",
              "solution": "Each trailing zero requires a factor of $10=2\\times5$. There are more factors of 2 than of 5, so the answer is $\\lfloor100/5\\rfloor+\\lfloor100/25\\rfloor=20+4=24$.",
              "keyIdea": "Count factors of 5; Multiples of 25 contribute an extra factor; 24 trailing zeros",
              "id": "2.2:trailing-zeros",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "2.2:trailing-zeros",
              "rubric": [
                "Count factors of 5",
                "Multiples of 25 contribute an extra factor",
                "24 trailing zeros"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Trailing Zeros"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0194"
                }
              ],
              "verification": [
                "Legendre's formula counts the contribution of each power of 5."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "100! 的十进制末尾有多少个连续0？说明原因。",
                  "solution": "末尾0对应因子10=2×5，因子2更多，数因子5即可：⌊100/5⌋+⌊100/25⌋=20+4=24。",
                  "keyIdea": "计数因子5；25贡献额外因子；24",
                  "title": "阶乘末尾零",
                  "hint": "末尾零来自2×5，数更稀缺的因子5。",
                  "tags": [
                    "数论",
                    "阶乘"
                  ]
                }
              }
            },
            {
              "title": "Horse Race (25 Horses)",
              "difficulty": "medium",
              "tags": [
                "logic",
                "tournament",
                "sorting"
              ],
              "statement": "There are 25 horses, each running at a distinct constant speed. The track has 5 lanes, so you can race at most 5 horses at a time (and you have no timer — only finishing order). What is the minimum number of races to find the **3 fastest** horses?",
              "hint": "Race in 5 groups of 5 first, then think about which horses can still be in the top 3.",
              "solution": "**Answer: 7 races.** The whole game is *elimination by logic* — after each race, throw out every horse that provably can't be top-3.\n\n**Races 1–5 — race 5 groups of 5.** Now you know the ranking *within* each group. Immediately, the **4th and 5th of every group are out** (4 horses already beat them), leaving 3 live horses per group.\n\n**Race 6 — race the 5 group winners.** This ranks the groups. Call them A > B > C > D > E by their winners' finish. Now prune hard:\n- **Groups D and E:** even their winners are only 4th/5th overall — *all of D and E are out*.\n- **Group A's winner is the overall #1** (he beat all other group winners, who beat everyone in their groups). Lock him in.\n- A horse can be top-3 only if at most 2 horses beat it. Tracing that:\n  - Group A: its 2nd and 3rd could still be #2/#3.\n  - Group B: its winner (1 horse beats him: A's winner) and its 2nd could sneak in.\n  - Group C: only its winner is still alive (2 horses beat him: A's and B's winners).\n\nThat leaves exactly **5 candidates** for the remaining two spots: A2, A3, B1, B2, C1.\n\n**Race 7 — race those 5.** The top two finishers are the 2nd- and 3rd-fastest overall.\n\nTotal: 5 + 1 + 1 = **7 races**.",
              "keyIdea": "Prune aggressively after partial orderings: a horse can't be top-3 if 3 horses are already known to beat it. Only 5 candidates survive for the final race.",
              "id": "2.2:horse-race-25-horses",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:horse-race-25-horses",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Horse Race (25 Horses)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "赛马排名",
                  "statement": "25匹马速度互异且恒定，最多5匹同时赛跑，不能计时，只能观察排名。找出最快3匹至少要赛几场？",
                  "solution": "共7场。前5场分组，每组按速度编号；第6场让组冠军比赛，设A1>B1>C1>D1>E1。A1已是总冠军，仍可能争夺第二、三名的只有A2、A3、B1、B2、C1。第7场让这5匹比赛，前两名即总第二、三名。其他马均已确定至少有3匹更快，故可排除。",
                  "hint": "先分成五组比赛，再根据组冠军顺序缩小候选。",
                  "keyIdea": "用已知偏序排除不可能进入前三的马。",
                  "tags": [
                    "逻辑",
                    "锦标赛",
                    "排序"
                  ]
                }
              }
            },
            {
              "title": "Infinite Sequence",
              "difficulty": "medium",
              "tags": [
                "algebra",
                "limits"
              ],
              "statement": "An infinite power tower satisfies $x^{x^{x^{\\cdots}}}=2$. Find $x$.",
              "hint": "The exponent tower above the base is itself the same infinite tower.",
              "solution": "**The trick:** an infinite tower contains a copy of *itself*. Look at the exponent sitting on the bottom $x$ — it's $x^{x^{x^{\\cdots}}}$, which is the **same** infinite tower again. And we're told the whole tower equals 2, so that exponent equals 2 too.\n\nSo the giant expression collapses to one line:\n$$x^{\\big(x^{x^{\\cdots}}\\big)} = x^{2} = 2.$$\n\nSolve $x^2 = 2$: $x = \\sqrt{2} \\approx 1.414$.\n\n*(Sanity note: this self-substitution only works because the tower converges, which it does for bases up to $e^{1/e}\\approx 1.44$ — and $\\sqrt2$ is safely under that.)*",
              "keyIdea": "Self-similarity: an infinite recursive structure contains a copy of itself, so you can substitute the known value back in and collapse it to a simple equation.",
              "id": "2.2:infinite-sequence",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:infinite-sequence",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.2 / Infinite Sequence"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0196"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "设无限幂塔 `x^{x^{x^{\\cdot^{\\cdot}}}} = 2`，求 `x`。",
                  "title": "无限幂塔",
                  "solution": "利用幂塔自相似性，指数部分也等于2，故$x^2=2$，取正实底数得$x=\\sqrt2$。须保证幂塔收敛；$\\sqrt2$处于收敛区间$[e^{-e},e^{1/e}]$内。",
                  "hint": "底层x上方仍是同一个无限幂塔。",
                  "keyIdea": "递归结构自相似，并检查收敛条件。",
                  "tags": [
                    "代数",
                    "极限"
                  ]
                }
              }
            },
            {
              "id": "2.2:bridge-crossing",
              "title": "Bridge Crossing",
              "difficulty": "medium",
              "tags": [
                "logic",
                "optimization"
              ],
              "statement": "Four people take 1, 2, 8, and 10 minutes to cross a bridge. At most two can cross together, carrying the only torch; a pair takes the slower person's time. Everyone starts on the same side. Find the minimum total time and a crossing schedule.",
              "hint": "",
              "solution": "17 minutes: 1 and 2 cross (2), 1 returns (1), 8 and 10 cross (10), 2 returns (2), then 1 and 2 cross (2). A shortest-path search over states (set of people across, torch side) establishes optimality.",
              "keyIdea": "Give a complete legal schedule; Total 17 minutes; Justify optimality with a lower bound or shortest-path argument",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "2.2:river-crossing",
              "rubric": [
                "Give a complete legal schedule",
                "Total 17 minutes",
                "Justify optimality with a lower bound or shortest-path argument"
              ],
              "verification": [
                "Dijkstra's algorithm on the finite state graph exhausts all legal moves and gives shortest distance 17."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0068"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "四人过桥时间分别为 1、2、8、10 分钟。每次最多两人，必须带唯一火把，同行按较慢者计时。所有人最初在同侧，求最短总时间及方案。",
                  "solution": "17 分钟：1和2过去(2)，1回来(1)，8和10过去(10)，2回来(2)，1和2过去(2)。可用状态(已过桥人员集合,火把侧)的最短路验证最优性。",
                  "keyIdea": "合法完整过桥序列；合计 17；提供下界或最短路验证，不能只报数",
                  "title": "过桥变体",
                  "hint": "",
                  "tags": [
                    "逻辑",
                    "优化"
                  ]
                }
              }
            },
            {
              "id": "2.2:horse-races",
              "title": "Horse Races",
              "difficulty": "hard",
              "tags": [
                "logic",
                "comparison sorting",
                "optimal stopping",
                "optimal strategy"
              ],
              "statement": "There are 25 horses and five lanes. At most five horses race at a time, and timing is unavailable. How can you identify the fastest three horses? How can you identify the fastest five?",
              "hint": "",
              "solution": "The classic fastest-three problem requires seven races: five group heats, one race between group winners to order the groups, and one final race among the remaining candidates. Finding the fastest five leaves a larger candidate set and requires further elimination; this outline does not establish its optimal race count.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:horse-races",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0195"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "`25` 匹马、`5` 条赛道、每次最多跑 `5` 匹，不能计时。如何找出最快的前 `3` 匹？如何找出最快的前 `5` 匹？",
                  "solution": "找最快3匹的经典最少场数为7：5场分组赛、1场组冠军赛、1场剩余候选赛。找最快5匹时候选集更大，还需进一步筛选；当前提纲尚未证明该问的最优场数。",
                  "title": "赛马筛选",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "逻辑",
                    "比较排序",
                    "最优停止",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "2.2:equal-heads",
              "title": "Equal Heads",
              "difficulty": "easy",
              "tags": [
                "symmetry",
                "construction"
              ],
              "statement": "There are 1,000 coins, 980 tails up and 20 heads up. How can you split them into two piles with the same number of heads?",
              "hint": "",
              "solution": "Choose any 20 coins and flip all of them. Leave the other 980 coins in the second pile. If the chosen coins initially contain $k$ heads, both piles then contain $20-k$ heads.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.4:coin-piles",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0204"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "地上有 `1000` 枚硬币，其中 `980` 枚反面朝上、`20` 枚正面朝上。如何把它们分成两堆，使两堆中正面朝上的硬币数相同？",
                  "solution": "任取 20 枚硬币放成一堆，把这 20 枚全部翻面，其余 980 枚为另一堆。设取出的 20 枚里原本有 `k` 个正面，则翻面后这一堆有 `20-k` 个正面；另一堆原本正面数也正好是 `20-k`。",
                  "title": "等量正面",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "对称性",
                    "构造"
                  ]
                }
              }
            },
            {
              "id": "2.2:minimum-glass-balls",
              "title": "Minimum Glass Balls",
              "difficulty": "medium",
              "tags": [
                "dynamic programming",
                "optimization",
                "optimal strategy"
              ],
              "statement": "A 100-story building has an unknown fixed threshold: a ball breaks if dropped above the threshold. With no limit on drops, how many balls are needed to guarantee identification? If only two balls are available, what is the minimum worst-case number of drops?",
              "hint": "",
              "solution": "One ball suffices if drops are unlimited: test floors in increasing order until it breaks; if it survives floor 100, the threshold is 100. With two balls, the optimal worst-case count is 14, since $t(t+1)/2\\ge100$.",
              "keyIdea": "Distinguish balls from drops; One-ball linear search; Two balls require 14 drops",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "2.5:glass-balls-egg-drop",
              "rubric": [
                "Distinguish balls from drops",
                "One-ball linear search",
                "Two balls require 14 drops"
              ],
              "verification": [
                "A sequential one-ball strategy suffices, whereas zero balls cannot identify the threshold. Two-ball coverage follows triangular numbers."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0210"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "100层楼有固定未知临界层，球从高于临界层处落下会碎。没有投掷次数限制，最少需要几颗球才能保证确定临界层？另问：若仅有两球，最少最坏次数是多少？",
                  "solution": "无次数限制时一颗足够，从1层开始逐层试，首次碎即确定临界；若到100层仍未碎，则临界为100。两球的最少最坏次数为14，由t(t+1)/2≥100得到。",
                  "keyIdea": "不混淆球数与次数；一球线性方案；两球14次",
                  "title": "最少玻璃球",
                  "hint": "",
                  "tags": [
                    "动态规划",
                    "优化",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "2.2:five-card-trick",
              "title": "Five-Card Trick",
              "difficulty": "hard",
              "tags": [
                "construction",
                "information encoding",
                "playing cards"
              ],
              "statement": "A selects any five cards from a standard deck without jokers and gives them to B. B shows four of these cards to C. How can C determine the hidden fifth card?",
              "hint": "",
              "solution": "Use the Fitch Cheney five-card trick. Two of the five cards share a suit. B hides one and shows the other as the first card, choosing their cyclic rank distance to lie between 1 and 6. The order of the other three cards encodes that distance, allowing C to recover the hidden card.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.2:five-card-trick",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0221"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "去掉大小王的一副扑克牌中，A 任选 `5` 张交给 B，B 看过后选出 `4` 张给 C 展示。C 如何根据这 `4` 张牌准确说出第 `5` 张牌？",
                  "solution": "这是 Fitch Cheney 五张牌魔术。B 先在同花色的两张牌里选一张隐藏、另一张展示，再利用另外 3 张牌的展示顺序编码 1 到 6 的偏移量，C 据此唯一恢复被藏的那张牌。",
                  "title": "五张牌魔术",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "构造",
                    "信息编码",
                    "扑克牌"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "逻辑推理",
              "note": ""
            }
          }
        },
        {
          "id": "2.3",
          "title": "Thinking Out of the Box",
          "problems": [
            {
              "title": "Box Packing (53 Bricks)",
              "difficulty": "hard",
              "tags": [
                "coloring",
                "parity",
                "3D",
                "combinatorial counting",
                "construction",
                "solid geometry"
              ],
              "statement": "Can 53 bricks of size $1\\times1\\times4$ fit inside a $6\\times6\\times6$ cube?",
              "hint": "This is the 3D version of the classic chessboard-coloring problem. Color the box with 2×2×2 cubes in two colors.",
              "solution": "**Answer: No.** Volume alone *allows* it — 53 bricks occupy $53 \\times 4 = 212$ units, and the box holds $216$ — so the obstruction must be subtler. This is the classic chessboard-coloring trick, lifted into 3D.\n\n**Set up the coloring.** Chop the $6\\times6\\times6$ box into 27 small **$2\\times2\\times2$ cubes** (3 along each edge). Color these 27 cubes like a 3D checkerboard, alternating two colors. You can't split 27 evenly, so you get **14 cubes of one color and 13 of the other**.\n\n**The crucial fact.** Place any $1\\times1\\times4$ brick. Because it's 4 long and the colored cubes are 2 wide, the brick always spans two adjacent small cubes — covering **2 units in a 'black' cube and 2 units in a 'white' cube**. So *every* brick eats equal amounts of each color.\n\n**Count the scarce color.** The minority color totals $13 \\times 8 = 104$ unit-cells. Each brick needs 2 minority-color cells, so at most $104 / 2 = 52$ bricks can fit. The **53rd brick has no minority-color room left** — impossible.\n\nSo 53 bricks of size $1\\times1\\times4$ **cannot** be packed into the $6\\times6\\times6$ box.",
              "keyIdea": "Coloring/parity invariant in 3D: choose a coloring that every piece must respect equally, then count the scarce color to derive an upper bound.",
              "id": "2.3:box-packing-53-bricks",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.3:box-packing-53-bricks",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Box Packing (53 Bricks)"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0197"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "能否把 `53` 块 `1×1×4` 的长方体小砖放进一个 `6×6×6` 的立方体盒子里？",
                  "title": "长砖装箱",
                  "solution": "不能。在$6\\times6\\times6$盒中按$2\\times2\\times2$小块作三维棋盘染色，27块分成14块与13块两色。沿格点放置的每根$1\\times1\\times4$砖占两色各2个单位格。较少的一色只有$13\\times8=104$格，故最多容纳52块砖，放不下53块。",
                  "hint": "用2×2×2小立方体做三维棋盘染色。",
                  "keyIdea": "染色不变量给出比体积更强的上界。",
                  "tags": [
                    "染色",
                    "奇偶性",
                    "三维",
                    "组合计数",
                    "构造",
                    "立体几何"
                  ]
                }
              }
            },
            {
              "title": "Calendar Cubes",
              "difficulty": "medium",
              "tags": [
                "combinatorics",
                "lateral thinking",
                "construction",
                "combinatorial counting"
              ],
              "statement": "Label the six faces of each of two cubes with digits so that they can display every date from 01 to 31. How should the cubes be labeled?",
              "hint": "You need to display 11 and 22, so both cubes need a 1 and a 2. You have only 12 faces for 10 digits — be clever.",
              "solution": "To show 11 and 22, **both** cubes must carry a **1** and a **2**. To show single-digit days as 0X, both cubes must also carry a **0**.\n\nThat uses 3 faces on each cube (0, 1, 2), leaving 3 faces per cube (6 total) for the digits 3, 4, 5, 6, 7, 8, 9 — that's 7 digits for 6 faces. The trick: **a 6 can be flipped to serve as a 9!** So you only need to place 3,4,5,6,7,8 and reuse 6 as 9.\n\n- **Cube 1:** 0, 1, 2, 3, 4, 5\n- **Cube 2:** 0, 1, 2, 6, 7, 8 (with 6 also used as 9)",
              "keyIdea": "Out-of-the-box move: a physical 6 rotated 180° becomes a 9, freeing up a face. Forced constraints (need two 0s, 1s, 2s) come first; then exploit symmetry.",
              "id": "2.3:calendar-cubes",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.3:calendar-cubes",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Calendar Cubes"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0198"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "用两枚立方体骰子的六个面分别写上数字，使其能够表示所有日期 `01` 到 `31`。应如何标数字？",
                  "title": "日期骰子",
                  "solution": "11、22要求两枚骰子都含1、2；显示01至09还需两枚都含0。将6倒置作9，可取第一枚0、1、2、3、4、5，第二枚0、1、2、6、7、8。两枚可交换位置，覆盖01至31。",
                  "hint": "两枚都要有1和2；用旋转复用某个数字。",
                  "keyIdea": "先满足重复数字约束，再用6与9的旋转对称。",
                  "tags": [
                    "组合数学",
                    "发散思维",
                    "构造",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "title": "Door to Offer",
              "difficulty": "easy",
              "tags": [
                "logic",
                "self-reference"
              ],
              "statement": "One of two doors hides a car and the other a goat. One guard always tells the truth and the other always lies. You may ask one question to identify the door hiding the car.",
              "hint": "Make the answer pass through both guards so the lie cancels out.",
              "solution": "Ask either guard: **\"Would the other guard say that this door hides the car?\"** If the answer is yes, choose the other door; otherwise choose this door. The answer passes through exactly one liar, so it reverses the truth about the door.",
              "keyIdea": "Self-referential question design: chain the answer through both an honest and a dishonest source so their behaviors compose into a predictable (invertible) result.",
              "id": "2.3:door-to-offer",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.3:door-to-offer",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Door to Offer"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0199"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "两扇门，一扇后是汽车，一扇后是山羊；两个守卫一个永远说真话，一个永远说假话。只能问一个问题，如何确定哪扇门后是汽车？",
                  "title": "真假守卫",
                  "solution": "问任一守卫：“另一位守卫会说这扇门后有汽车吗？”若回答是，选另一扇；否则选此扇。信息恰经过一位说谎者，所得答案总与真实情况相反。",
                  "hint": "让回答同时经过诚实者和说谎者。",
                  "keyIdea": "嵌套提问使真假组合成为可预测的反转。",
                  "tags": [
                    "逻辑",
                    "自指"
                  ]
                }
              }
            },
            {
              "title": "Message Delivery",
              "difficulty": "easy",
              "tags": [
                "logic",
                "lateral",
                "protocol",
                "construction",
                "cryptographic intuition"
              ],
              "statement": "Two people want to deliver a message over an insecure channel. Each has a padlock and its own key. How can they send a locked box so that only the recipient can open it, without sending either key?",
              "hint": "You can put more than one lock on the box.",
              "solution": "1. **You** put the document in a box, lock it with **your** padlock, and send it.\n2. **Colleague** adds **their own** padlock and sends it back (now double-locked).\n3. **You** remove **your** lock and send it again (still locked by your colleague's padlock).\n4. **Colleague** removes their lock and opens the box.\n\nNo key ever travels in an unlocked box.",
              "keyIdea": "Layered locking — the box is never unprotected in transit. (This is the intuition behind Diffie–Hellman-style key exchange.)",
              "id": "2.3:message-delivery",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.3:message-delivery",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Message Delivery"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0200"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "两人各有一把挂锁及自己的钥匙，希望通过不安全信道传送装有消息的箱子。如何不传递钥匙而使箱子只被收件人打开？",
                  "title": "双锁传信",
                  "solution": "寄件人加自己的锁并寄出；收件人再加自己的锁寄回；寄件人去掉自己的锁再寄出；收件人去掉自己的锁开箱。运输中箱子始终至少有一把锁，钥匙无需寄送。",
                  "hint": "一个箱子可以同时挂两把锁。",
                  "keyIdea": "通过可逐层解除的双锁协议保持运输过程加锁。",
                  "tags": [
                    "逻辑",
                    "发散思维",
                    "协议",
                    "构造",
                    "密码学直觉"
                  ]
                }
              }
            },
            {
              "title": "Last Ball",
              "difficulty": "medium",
              "tags": [
                "invariant",
                "parity",
                "logic",
                "invariants"
              ],
              "statement": "A box contains 20 blue balls and 14 red balls. Remove any two balls: if their colors match, replace them with one blue ball; otherwise replace them with one red ball. Repeat until one remains. What color is it? What if there are initially 13 red balls?",
              "hint": "Track how the count of red balls changes at each step.",
              "solution": "The parity of the red count is invariant: RR removes two reds, BB leaves it unchanged, and RB replaced by R also leaves it unchanged. The total decreases by one each step, ensuring termination. An even initial red count of 14 gives a blue final ball; 13 gives red.",
              "keyIdea": "Check all three operations; Red-count parity is invariant; Decreasing total ensures termination; State both final colors",
              "id": "2.3:last-ball",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "2.3:last-ball",
              "rubric": [
                "Check all three operations",
                "Red-count parity is invariant",
                "Decreasing total ensures termination",
                "State both final colors"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Last Ball"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0201"
                }
              ],
              "verification": [
                "Check the parity change under each possible operation."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "盒中20蓝球、14红球。每次任取两个，同色则换成一蓝球，异色则换成一红球，直到仅余一球。最后颜色为何？初始红球改成13时呢？",
                  "solution": "红球数奇偶不变：RR使红数减2，BB不改红数，RB换R也不改红数。每步总球数减1，所以必终止。14红为偶数，末球蓝；13红为奇数，末球红。",
                  "keyIdea": "检查三类操作；红数奇偶不变；总数递减终止；两种结果",
                  "title": "最后一球",
                  "hint": "追踪红球数量的奇偶性。",
                  "tags": [
                    "不变量",
                    "奇偶性",
                    "逻辑",
                    "不变量"
                  ]
                }
              }
            },
            {
              "title": "Light Switches",
              "difficulty": "easy",
              "tags": [
                "information",
                "lateral"
              ],
              "statement": "One light bulb in a room, and four switches outside; exactly one controls the bulb. All start off. You may flip switches however you like, but may enter the room only **once**. How do you find the correct switch?",
              "hint": "A bulb gives you more than just on/off — it also gets hot.",
              "solution": "Use **two** binary signals: on/off **and** hot/cold (a bulb that was on becomes warm).\n\n1. Turn on **switch 1 and switch 2**; leave them for several minutes.\n2. Turn **off switch 2**, turn **on switch 3**, leave switch 4 off.\n3. Enter the room and feel the bulb:\n   - **On & hot** → switch 1\n   - **Off & hot** → switch 2\n   - **On & cold** → switch 3\n   - **Off & cold** → switch 4",
              "keyIdea": "Extract a second bit of information from a physical side-channel (heat). Two binary states distinguish 2×2 = 4 cases in a single observation.",
              "id": "2.3:light-switches",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.3:light-switches",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Light Switches"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "四开关一灯泡",
                  "statement": "室内有一只灯泡，室外有四个开关，恰一个控制该灯，初始全关。可任意操作开关，但只能进房一次，如何识别？",
                  "solution": "利用亮灭与冷热两个二元信号。先开1、2并等灯泡升温，再关2、开3，立即进房：亮且热为1，灭且热为2，亮且冷为3，灭且冷为4。需灯泡有足够热惯性，且新开灯尚未明显升温。",
                  "hint": "灯泡除了亮灭，还会发热。",
                  "keyIdea": "两个二元信号区分四种情况。",
                  "tags": [
                    "信息",
                    "发散思维"
                  ]
                }
              }
            },
            {
              "title": "Quant Salary",
              "difficulty": "easy",
              "tags": [
                "protocol",
                "privacy",
                "lateral"
              ],
              "statement": "Eight quants want to compute their **average** salary without anyone revealing their own salary to the others. How?",
              "hint": "Pass a running total around the circle, but mask the very first number.",
              "solution": "The first quant picks a large **random number R** (secret), adds his salary, and passes the sum to the second quant. Each subsequent quant adds their own salary and passes it on. After the eighth quant adds their salary, the total comes back to the first quant, who **subtracts R** and divides by 8 to get the average — and announces it.\n\nNo one sees any individual salary: every number passed is masked by R (and others' salaries) until the very end. This is a real, used technique for **secure aggregation** (e.g., sharing anonymized fund-position data).",
              "keyIdea": "Additive masking with a secret offset that only the originator can remove — a simple secure multi-party computation protocol.",
              "id": "2.3:quant-salary",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.3:quant-salary",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.3 / Quant Salary"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "薪资保密求和",
                  "hint": "用可抵消的随机数掩盖第一个人的薪资。",
                  "keyIdea": "随机掩码在聚合后抵消，只公开总和。",
                  "statement": "8名量化研究员想计算平均薪资而不直接公开各自薪资，如何做？",
                  "solution": "第一人选秘密随机数R，将R加自己的薪资传给第二人；后续每人累加自己的薪资，最后传回第一人。第一人减R再除以8，公开平均值。该简单加法掩码方案适用于按约定传递且不合谋的场景；平均数本身及多人合谋仍可能泄露信息。",
                  "tags": [
                    "协议",
                    "隐私",
                    "发散思维"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "跳出思维定式",
              "note": ""
            }
          }
        },
        {
          "id": "2.4",
          "title": "Application of Symmetry",
          "problems": [
            {
              "title": "Coin Piles",
              "difficulty": "medium",
              "tags": [
                "symmetry",
                "invariant"
              ],
              "statement": "Blindfolded in a room, you're told there are 1000 coins on the floor: 980 are tails-up and 20 are heads-up. You can't feel which side is up, but you can move coins and flip any you choose. Separate the coins into two piles, each with the **same number of heads**.",
              "hint": "Pick any 20 coins for one pile, then flip all of them.",
              "solution": "**The puzzle's twist:** you can't feel which way a coin faces, so you can't *aim*. The escape is to find a move that forces the two piles equal **no matter what** you happened to grab. Flipping is that move.\n\nThere are 20 heads total. **Scoop any 20 coins into pile A**; the other 980 form pile B.\n\nSay pile A happens to contain $m$ heads (you have no idea what $m$ is). Then it also has $20 - m$ tails, and pile B holds the **remaining** $20 - m$ heads.\n\nNow **flip every coin in pile A**:\n- its $m$ heads become tails,\n- its $20 - m$ tails become **heads**.\n\nSo pile A now shows $20 - m$ heads — which is *exactly* the number of heads in pile B. **The two piles match**, and it worked for every possible $m$, even though you never knew a single coin's orientation.",
              "keyIdea": "Symmetry through flipping: isolate exactly as many coins as there are heads, then flip the pile to convert its (unknown) tail-count into the matching head-count.",
              "id": "2.4:coin-piles",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.4:coin-piles",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.4 / Coin Piles"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "蒙眼分硬币",
                  "hint": "取出与正面总数相同数量的硬币并翻面。",
                  "keyIdea": "用互补计数构造两堆相同的正面数。",
                  "statement": "蒙眼时地上有1000枚硬币，980反面、20正面，无法触摸辨面，但可以移动或翻面。如何分两堆使正面数相同？",
                  "solution": "任取20枚为A堆，其余为B堆。若A原有m个正面，则B有20-m个正面。把A全部翻面后也有20-m个正面，两堆相同。",
                  "tags": [
                    "对称性",
                    "不变量"
                  ]
                }
              }
            },
            {
              "title": "Mislabeled Bags",
              "difficulty": "easy",
              "tags": [
                "logic",
                "deduction",
                "symmetry"
              ],
              "statement": "Three bags are all mislabeled: one contains only white balls, one only black balls, and one contains one of each. You may draw one ball from one bag. How can you correct every label?",
              "hint": "Use the fact that ALL labels are wrong. Pick from the bag labeled 'mix'.",
              "solution": "Draw from the bag labeled \"mixed\". Its label is wrong, so the color drawn identifies its pure contents. If white is drawn, this is the white bag; the bag labeled \"black\" must then be mixed, since it is neither black nor the already identified white bag. The remaining bag is black. Reverse the colors if black is drawn.",
              "keyIdea": "Exploit the 'all wrong' constraint: sampling the bag whose label rules out the most possibilities collapses the whole puzzle in one move.",
              "id": "2.4:mislabeled-bags",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.4:mislabeled-bags",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.4 / Mislabeled Bags"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0205"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "有 `3` 个标签都贴错的袋子：一个全白球，一个全黑球，一个一黑一白。只允许从某个袋子中摸一次球，如何纠正所有标签？",
                  "title": "错贴标签",
                  "solution": "从标有“混合”的袋中摸一球。标签必错，所以该袋是纯色，摸出的颜色即袋内颜色。若摸到白球，该袋全白；标“全黑”的袋既不全黑，也不可能是已找到的全白袋，只能混合；余袋全黑。黑球情况对称。",
                  "hint": "利用所有标签都错，从标为混合的袋子取球。",
                  "keyIdea": "选择能排除最多可能性的样本。",
                  "tags": [
                    "逻辑",
                    "逻辑推理",
                    "对称性"
                  ]
                }
              }
            },
            {
              "title": "Wise Men (50 in a Dungeon)",
              "difficulty": "hard",
              "tags": [
                "protocol",
                "symmetry"
              ],
              "statement": "A sultan holds 50 wise men. A glass starts bottom-down. Each minute the sultan randomly calls one wise man (possibly infinitely often), who may flip the glass over or not. When a wise man correctly declares that **all 50 have been called at least once**, everyone goes free; if wrong, all die. Wise men can't see or communicate except via the glass. Design a strategy.",
              "hint": "Designate one special 'counter' (spokesman) who is the only one allowed to count. The other 49 are symmetric.",
              "solution": "**The problem:** the glass is the *only* channel of communication, and it holds just one bit (up or down). You need to turn that single bit into a reliable **counter** of how many distinct people have been called. The fix is to make one person the dedicated tally-keeper and have everyone else 'raise a flag' exactly once.\n\nAppoint one **spokesman** (the counter). Because the other 49 are interchangeable, they all follow the *same* rule:\n\n- **Each ordinary man:** the **first time** he's called and finds the glass **down**, he flips it **up** — this is him signalling \"I've been here\" exactly once. After he's done that one time, he never touches the glass again (and if it's already up when he's called, he leaves it).\n- **The spokesman:** whenever he's called and finds the glass **up**, he flips it back **down** and adds **1** to his private count. (If it's down, he does nothing.)\n\nWhy it works: each ordinary man can raise the glass *at most once ever*, and only the spokesman lowers it. So every 'up → down' the spokesman performs corresponds to a **distinct new person** having been called. When his count reaches **49**, all 49 others have signalled — plus himself — so all 50 have been called. He safely declares everyone free.",
              "keyIdea": "Break symmetry by electing a single counter; make every other agent identical and able to signal 'I've been here' exactly once. The counter tallies unique signals.",
              "id": "2.4:wise-men-50-in-a-dungeon",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.4:wise-men-50-in-a-dungeon",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.4 / Wise Men (50 in a Dungeon)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "地牢智者",
                  "hint": "谁能在第一天离开？逐步增加有标记人数。",
                  "keyIdea": "通过公共知识和未发生的行动进行归纳。",
                  "statement": "50名智者被关押，杯子初始正放。每分钟随机叫一人，可翻杯或不动，除杯子外不能沟通。有人正确宣布所有人都被叫过即可全获释，误报则全死。设计策略。",
                  "solution": "预选一名计数者。其他49人各只发送一次信号：尚未发送且见杯正放时将其倒置，此后不再动杯；若已倒置则等待下次机会。计数者每次见倒置就复正并加1。数到49说明其他人都来过，加上自身可安全宣布。随机选择须保证各人持续获得访问机会；在独立均匀选择下几乎必然完成。",
                  "tags": [
                    "协议",
                    "对称性"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "对称性的应用",
              "note": ""
            }
          }
        },
        {
          "id": "2.5",
          "title": "Series Summation",
          "note": "Gauss's trick: pair the first and last terms. $\\sum_{n=1}^{N} n = \\tfrac{N(N+1)}{2}$, $\\sum n^2 = \\tfrac{N(N+1)(2N+1)}{6}$.",
          "problems": [
            {
              "title": "Clock Pieces",
              "difficulty": "easy",
              "tags": [
                "series",
                "sum"
              ],
              "statement": "A clock face (numbered 1–12) falls and breaks into three pieces such that the numbers on each piece add up to the **same** sum. What numbers are on each piece?",
              "hint": "Find the total, divide by 3 — then don't assume each piece is a neat contiguous arc.",
              "solution": "Total of 1..12 is $\\tfrac{12 \\cdot 13}{2} = 78$, so each piece must sum to $78/3 = 26$.\n\nMany people get stuck assuming each piece is a **contiguous** run of numbers. Drop that assumption (a real break can give irregular pieces) and a valid split appears:\n\n- **{5, 6, 7, 8}** = 26\n- **{1, 2, 11, 12}** = 26\n- **{3, 4, 9, 10}** = 26\n\n(The 'aha' is realizing the pieces needn't each be a single arc.)",
              "keyIdea": "Compute the total with Gauss's formula and divide by 3. The real trick is dropping the unstated assumption that each piece must be a contiguous arc.",
              "id": "2.5:clock-pieces",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.5:clock-pieces",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.5 / Clock Pieces"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "钟面碎片",
                  "hint": "总和除以3；不要假定碎片对应连续弧段。",
                  "keyIdea": "先求等分目标，再放弃题目未要求的几何限制。",
                  "statement": "标有1至12的钟面碎成三块，每块上数字之和相等。给出一种分法。",
                  "solution": "总和78，每块为26。一种分组为{5,6,7,8}、{1,2,11,12}、{3,4,9,10}。碎片可不规则，不能额外假设每块只覆盖一段连续圆弧。",
                  "tags": [
                    "级数",
                    "求和"
                  ]
                }
              }
            },
            {
              "title": "Missing Integers",
              "difficulty": "medium",
              "tags": [
                "series",
                "power sums",
                "algebra",
                "series summation"
              ],
              "statement": "Exactly two distinct integers $a,b$ are missing from 1 through 100. All other numbers are known. Recover $a,b$ using the sum and sum of squares.",
              "hint": "Compare both the sum and the sum of squares against their known totals.",
              "solution": "**The idea:** two unknowns ($x$ and $y$, the missing numbers) need two independent equations. You can manufacture them by comparing what the totals *should* be against what they *actually* are.\n\nLet $z_i$ be the 98 numbers you have. Use the known closed forms for $1$ to $100$:\n\n**Equation 1 (the sum):**\n$$x + y = \\frac{100\\cdot 101}{2} - \\sum_i z_i.$$\n\n**Equation 2 (the sum of squares):**\n$$x^2 + y^2 = \\frac{100\\cdot 101\\cdot 201}{6} - \\sum_i z_i^2.$$\n\nNow you have $x+y$ (call it $S$) and $x^2+y^2$ (call it $Q$). From $x+y=S$ get $y = S - x$, substitute into the second equation, and you get a single quadratic in $x$ — solve it for the two missing numbers.\n\nThis only sweeps the list a couple of times: **$O(n)$ time, $O(1)$ extra memory** — no sorting, no marking array needed.",
              "keyIdea": "Two unknowns need two independent equations; the sum and the sum of squares (first two power sums) suffice.",
              "id": "2.5:missing-integers",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.5:missing-integers",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.5 / Missing Integers"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0208"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "1到100中恰缺两个互异整数a、b，其余数均已知。如何用总和与平方和恢复a、b？",
                  "title": "缺失整数",
                  "solution": "设已知98个数为$z_i$，由总和得$S=a+b=5050-\\sum z_i$，由平方和得$Q=a^2+b^2=338350-\\sum z_i^2$。于是$ab=(S^2-Q)/2$，a、b为$t^2-St+ab=0$的两根。扫描数据耗时O(n)，额外空间O(1)。",
                  "hint": "同时比较总和与平方和。",
                  "keyIdea": "两个未知数用两个幂和恢复。",
                  "tags": [
                    "级数",
                    "幂和",
                    "代数",
                    "级数求和"
                  ]
                }
              }
            },
            {
              "title": "Counterfeit Coins I",
              "difficulty": "medium",
              "tags": [
                "weighing",
                "encoding",
                "logic",
                "construction"
              ],
              "statement": "There are ten bags of 100 coins each. Genuine coins weigh 10 grams. One bag contains counterfeit coins that are all either one gram lighter or one gram heavier. With one electronic-scale weighing, identify the bag and whether its coins are light or heavy.",
              "hint": "Take a different number of coins from each bag so the deviation reveals which bag.",
              "solution": "**The idea:** you only get *one* number from the scale, so you need to make each bag leave a *different fingerprint* on that number. Do it by taking a different quantity from each bag.\n\nTake **1 coin from bag 1, 2 from bag 2, 3 from bag 3, …, 10 from bag 10** — that's $1+2+\\cdots+10 = 55$ coins. If every coin were genuine (10 g), they'd weigh $550$ g exactly.\n\nNow suppose bag $i$ is the counterfeit one. You took $i$ of its coins, and each is off by $\\pm 1$ g, so the total is off by exactly $\\pm i$ grams:\n$$\\text{reading} = 550 \\pm i.$$\n\nRead the deviation: $|\\text{reading} - 550|$ **is the bag number**, and the **sign** tells you whether that bag's coins are light (9 g) or heavy (11 g). One weighing, fully solved.",
              "keyIdea": "Encode each bag with a unique multiplier (distinct coin counts) so a single measurement carries a recoverable signature of which bag deviated.",
              "id": "2.5:counterfeit-coins-i",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.5:counterfeit-coins-i",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.5 / Counterfeit Coins I"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0209"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "`10` 袋硬币，每袋 `100` 枚，其中一袋是假币，且该袋硬币每枚要么轻 `1` 克，要么重 `1` 克。只允许用电子秤称一次，如何找出假币袋并判断轻重？",
                  "title": "假币袋",
                  "solution": "从第i袋取i枚，共55枚。正常总重550克；若第i袋异常，称重偏差恰为±i克。偏差绝对值给袋号，符号给偏轻或偏重，一次足够。",
                  "hint": "每袋取不同数量，让偏差编码袋号。",
                  "keyIdea": "用不同乘数为每袋赋予可恢复的测量特征。",
                  "tags": [
                    "称重",
                    "编码",
                    "逻辑",
                    "构造"
                  ]
                }
              }
            },
            {
              "title": "Glass Balls (Egg Drop)",
              "difficulty": "medium",
              "tags": [
                "optimization",
                "search",
                "series",
                "dynamic programming"
              ],
              "statement": "A 100-story building has an unknown threshold $F\\in\\{0,\\ldots,100\\}$. An egg breaks when dropped above $F$ and survives otherwise. With two identical eggs, find the minimum worst-case number of drops and give a strategy.",
              "hint": "If the first egg breaks, how many floors can the remaining egg test?",
              "solution": "With two eggs and $t$ drops, at most $t+(t-1)+\\cdots+1=t(t+1)/2$ floors can be covered. Thirteen drops cover only 91 floors, while 14 cover 105, so the answer is 14. Drop first at floor 14, then at 27, 39, 50, and so on, capping at 100. After a break, test upward from the previous safe floor with the second egg.",
              "keyIdea": "14 drops; Triangular-number lower bound; Decreasing step sizes followed by linear search",
              "id": "2.5:glass-balls-egg-drop",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "2.5:glass-balls-egg-drop",
              "rubric": [
                "14 drops",
                "Triangular-number lower bound",
                "Decreasing step sizes followed by linear search"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.5 / Glass Balls (Egg Drop)"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0009"
                }
              ],
              "verification": [
                "Use the coverage recurrence $M(t,2)=M(t-1,1)+1+M(t-1,2)$ with $M(t,1)=t$."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "100 层楼有未知临界层 F∈{0,…,100}：从高于 F 的楼层扔鸡蛋会碎，否则不碎。有 2 个相同鸡蛋，求确定 F 的最少最坏投掷次数并给出策略。",
                  "hint": "第一颗碎后，余下次数能逐层检查多少层？",
                  "solution": "若最多 t 次且只有两蛋，可覆盖 t+(t-1)+…+1=t(t+1)/2 层。13 次只能覆盖 91 层，14 次能覆盖 105 层，故答案 14。先在 14 层扔，未碎再在 27、39、50…层扔，超过顶楼时截到 100；碎后用另一蛋从上次安全层往上逐层测试。",
                  "keyIdea": "14 次；三角数下界；递减步长及碎后的线性搜索",
                  "title": "双蛋落楼",
                  "tags": [
                    "优化",
                    "搜索",
                    "级数",
                    "动态规划"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "级数求和",
              "note": "高斯技巧：将首项与末项配对。$\\sum_{n=1}^{N}n=\\tfrac{N(N+1)}2$，$\\sum_{n=1}^{N}n^2=\\tfrac{N(N+1)(2N+1)}6$。"
            }
          }
        },
        {
          "id": "2.6",
          "title": "The Pigeon Hole Principle",
          "note": "If $n$ pigeons occupy fewer than $n$ holes, some hole has ≥2 pigeons. Generalized: $mn+1$ pigeons in $n$ holes ⟹ some hole has ≥ $m+1$.",
          "problems": [
            {
              "title": "Matching Socks",
              "difficulty": "easy",
              "tags": [
                "pigeonhole"
              ],
              "statement": "A drawer has 2 red, 20 yellow and 31 blue socks. In the dark, what's the minimum number of socks you must grab to **guarantee** a matching pair (same color)?",
              "hint": "There are only 3 colors (3 holes).",
              "solution": "There are 3 colors = 3 'holes'. By the pigeonhole principle, grabbing **4** socks guarantees that two share a color. (Three socks could be one of each color; the fourth must repeat one.)",
              "keyIdea": "With $k$ categories, $k+1$ items guarantee a repeat.",
              "id": "2.6:matching-socks",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.6:matching-socks",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.6 / Matching Socks"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "配对袜子",
                  "statement": "抽屉有2只红袜、20只黄袜、31只蓝袜。黑暗中至少拿几只，才能保证有同色一双？",
                  "solution": "共有三色。拿3只可能各色一只；拿4只由抽屉原理必有同色两只。答案4。",
                  "hint": "把三种颜色看作三个抽屉。",
                  "keyIdea": "k类物品取k+1件必有重复类别。",
                  "tags": [
                    "抽屉原理"
                  ]
                }
              }
            },
            {
              "title": "Handshakes",
              "difficulty": "easy",
              "tags": [
                "pigeonhole"
              ],
              "statement": "At a party you meet 25 team members. Each shakes hands with some number of others. Without knowing the totals, can you be **certain** that at least two people shook the same number of hands?",
              "hint": "26 people, each shakes 0 to 25 hands — but 0 and 25 can't both occur.",
              "solution": "Including you, there are **26 people**. Each person shook between **0 and 25** hands — that's 26 possible values, seemingly one per person. But **0** (shook no one) and **25** (shook everyone) cannot both occur: if someone shook all 25 others, nobody shook zero. So only 25 distinct values are actually possible for 26 people → by pigeonhole, **at least two people shook the same number of hands**.",
              "keyIdea": "Pigeonhole with a subtle exclusion: two of the 'holes' (0 and max) are mutually exclusive, shrinking the count below the number of people.",
              "id": "2.6:handshakes",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.6:handshakes",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.6 / Handshakes"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "握手次数",
                  "statement": "聚会上你与25名同事共26人，每人可与若干他人握手。能否保证至少两人握手次数相同？",
                  "solution": "每人次数为0至25，但0与25不能同时出现：若有人与所有人握手，则无人为0。因此实际至多25种次数，26个人由抽屉原理必有重复。",
                  "hint": "注意0次与25次互斥。",
                  "keyIdea": "先排除互斥计数，再应用抽屉原理。",
                  "tags": [
                    "抽屉原理"
                  ]
                }
              }
            },
            {
              "title": "Have We Met Before?",
              "difficulty": "hard",
              "tags": [
                "pigeonhole",
                "Ramsey"
              ],
              "statement": "Show that at a party of 6 people, either at least 3 of them all met each other before, or at least 3 of them are mutual strangers.",
              "hint": "Fix one person; by pigeonhole they have ≥3 acquaintances or ≥3 strangers among the other 5.",
              "solution": "**Setup.** Think of each pair of people as a link colored either 'friends' (met before) or 'strangers'. We want to show *some* triangle of three people is all one color.\n\n**Step 1 — pin down one person.** Pick any person P. P has 5 links to the others, each friend-or-stranger. Splitting 5 links into 2 colors, **pigeonhole** forces at least $\\lceil 5/2 \\rceil = 3$ of them to be the *same* color. Say P has **3 friends**: A, B, C. (The all-strangers case is identical by symmetry.)\n\n**Step 2 — look inside that trio.** Consider the three links *among* A, B, C:\n- If **any one** of those pairs are friends — say A–B — then **P, A, B** are three mutual friends. ✓\n- If **none** of them are friends, then A, B, C are **three mutual strangers**. ✓\n\nEither way a monochromatic triangle appears, so one of the two conclusions always holds. (This proves the Ramsey number $R(3,3) = 6$ — 6 people always force such a trio, 5 don't.)",
              "keyIdea": "Pigeonhole forces a monochromatic majority around one vertex; then a single case split on that trio closes the argument. Foundational Ramsey theory.",
              "id": "2.6:have-we-met-before",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.6:have-we-met-before",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.6 / Have We Met Before?"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "相识三人组",
                  "statement": "证明任意6人中，必有3人两两相识，或3人两两陌生。",
                  "solution": "固定一人P，与其他5人的关系分两类，至少3人同类。设P与A、B、C均相识：若三人中有任一对相识，则与P构成相识三角形；否则A、B、C两两陌生。P有3个陌生人的情况对称。由此给出R(3,3)≤6；五边形双色构造可说明5人不够。",
                  "hint": "固定一人，用抽屉原理找三段同色关系。",
                  "keyIdea": "将关系视为双色边，寻找单色三角形。",
                  "tags": [
                    "抽屉原理",
                    "拉姆齐理论"
                  ]
                }
              }
            },
            {
              "title": "Ants on a Square",
              "difficulty": "medium",
              "tags": [
                "pigeonhole",
                "geometry"
              ],
              "statement": "There are 51 ants on a unit square (side length 1). Show that some glass of radius 1/7 placed somewhere on the square can cover at least **3** ants.",
              "hint": "Divide the square into 25 smaller squares.",
              "solution": "Partition the unit square into a 5×5 grid of **25 small squares** (side 1/5). With 51 ants in 25 cells, by the generalized pigeonhole principle some cell contains at least $\\lceil 51/25 \\rceil = 3$ ants.\n\nA small square of side 1/5 has diagonal $\\tfrac{\\sqrt 2}{5} \\approx 0.283$, so it fits inside a circle of radius $\\tfrac{\\sqrt2}{10} \\approx 0.141 < \\tfrac{1}{7} \\approx 0.143$. So a glass of radius 1/7 can cover that whole small square — and thus its ≥3 ants.",
              "keyIdea": "Generalized pigeonhole gives a crowded cell; a geometric bound shows the target shape fits the cell.",
              "id": "2.6:ants-on-a-square",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.6:ants-on-a-square",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.6 / Ants on a Square"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "正方形上的蚂蚁",
                  "statement": "单位正方形内有51只蚂蚁。证明可放置半径1/7的圆形玻璃罩，罩住至少3只。",
                  "solution": "分成5×5共25个边长1/5的小方格，至少一格有3只蚂蚁。该格外接圆半径$\\sqrt2/10<1/7$，可被玻璃罩完全覆盖。",
                  "hint": "先分成25个小方格。",
                  "keyIdea": "抽屉原理给拥挤格，几何界保证罩住整格。",
                  "tags": [
                    "抽屉原理",
                    "几何"
                  ]
                }
              }
            },
            {
              "title": "Counterfeit Coins II",
              "difficulty": "hard",
              "tags": [
                "weighing",
                "encoding"
              ],
              "statement": "There are 5 bags of 100 coins each. A coin weighs 9, 10, or 11 g. Each bag is uniform but you don't know which type. Using a digital scale, how many weighings are needed to determine the coin type of **every** bag?",
              "hint": "Start with the 1-bag and 2-bag versions. For each bag, pick coin counts whose weighted deviations never collide.",
              "solution": "**One weighing** is enough. This is the previous problem turned up a notch: now *every* bag might be off, and in either direction ($-1$, $0$, or $+1$ gram per coin relative to 10 g). So each bag has **three** possible states — that's a base-3 (ternary) signal, and powers of 3 are exactly the weights that keep all combinations separable.\n\nTake **1, 3, 9, 27, 81** coins from bags 1–5. Relative to all-genuine, bag $i$ shifts the total by\n$$c_i \\times \\{-1, 0, +1\\}, \\quad c_i \\in \\{1, 3, 9, 27, 81\\}.$$\n\nBecause each weight is more than twice the sum of all smaller ones, no two different combinations of $\\{-1,0,+1\\}$ choices can ever produce the same total — this is **balanced ternary**, where every integer has a unique representation. So the single deviation you read off the scale decodes uniquely into the state of **all five bags at once**.",
              "keyIdea": "Balanced ternary encoding: powers of 3 as multipliers make the $\\{-1,0,+1\\}$ deviations of each bag uniquely recoverable from a single sum.",
              "id": "2.6:counterfeit-coins-ii",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.6:counterfeit-coins-ii",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.6 / Counterfeit Coins II"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "多袋假币",
                  "statement": "5袋各100枚硬币，每袋内部重量相同，但可能为9、10或11克。用电子秤最少称几次能识别每袋类型？",
                  "solution": "一次足够。各袋取1、3、9、27、81枚，以每枚10克为基准，偏差为这些权重与{-1,0,1}的加权和。平衡三进制表示唯一，因此能解出每袋类型。每个权重大于两倍所有较小权重之和，保证不同组合不冲突。",
                  "hint": "取币数量要使所有加权偏差互不碰撞。",
                  "keyIdea": "用平衡三进制同时编码每袋的三种状态。",
                  "tags": [
                    "称重",
                    "编码"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "抽屉原理",
              "note": "n只鸽子放进少于n个鸽笼，至少一个笼中有两只或以上。推广：mn+1只鸽子放进n个笼，至少一个笼中有m+1只或以上。"
            }
          }
        },
        {
          "id": "2.7",
          "title": "Modular Arithmetic",
          "problems": [
            {
              "title": "Prisoner Problem (100 Hats)",
              "difficulty": "hard",
              "tags": [
                "parity",
                "modular",
                "protocol"
              ],
              "statement": "100 prisoners stand in a line; each wears a red or blue hat and can see everyone ahead but not their own or those behind. Starting from the back, each guesses their own hat color (everyone hears the guesses). A correct guess means freedom. What strategy maximizes guaranteed survivors? Then: what if there are **3** colors?",
              "hint": "The first prisoner sacrifices himself to encode the parity of red hats he sees.",
              "solution": "**At least 99 of the 100 can be guaranteed.** The trick is that the very first guesser (the one at the back, who sees all 99 others) spends his own guess to broadcast a *checksum* that lets everyone ahead solve for their own hat.\n\n**Two colors.** Agree in advance: the back prisoner says **\"red\" if he sees an odd number of red hats, \"blue\" if even** — i.e. he announces the *parity* of reds ahead of him. He himself is just guessing (50/50 — he's the one we might lose).\n\nNow every other prisoner can deduce their own hat exactly. When it's your turn you know:\n- the parity the back prisoner announced,\n- the reds you *see* ahead of you,\n- the red guesses *called out behind* you.\n\nThose three together pin down whether *your* hat must be red or blue to keep the parity consistent. So all 99 ahead are saved. ✓\n\n**Three colors** (code red = 0, green = 1, blue = 2). Same idea with arithmetic instead of parity: the back prisoner announces the **sum of all hats he sees, mod 3**. Each later prisoner subtracts (the hats they see ahead + the colors already called behind) from that announced total, mod 3 — what's left is their own color. Again **99 guaranteed**.",
              "keyIdea": "The first guesser sacrifices himself to broadcast a checksum (parity mod 2, or sum mod 3). Everyone downstream solves for their own value from the running total.",
              "id": "2.7:prisoner-problem-100-hats",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.7:prisoner-problem-100-hats",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.7 / Prisoner Problem (100 Hats)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "排队猜帽",
                  "statement": "100名囚犯排队戴红或蓝帽，只看见前方。由最后一人起依次报自己的颜色，所有人听得到。猜对者获释，如何最大化保证获释人数？若有三种颜色呢？",
                  "solution": "保证99人。最后一人以自己的回答编码前方红帽数量的奇偶性，其自身可能答错；之后各人结合看见的颜色和此前已确定的颜色恢复自己的帽色。三色编号0、1、2，用颜色总和模3作校验，同样保证99人。最后一人看不到自己的帽子，所以无法保证100人都对。",
                  "hint": "第一人用回答广播一个校验值。",
                  "keyIdea": "用模2或模3校验让后续每人解出自身颜色。",
                  "tags": [
                    "奇偶性",
                    "模运算",
                    "协议"
                  ]
                }
              }
            },
            {
              "title": "Division by 9",
              "difficulty": "easy",
              "tags": [
                "number theory",
                "modular"
              ],
              "statement": "Prove the rule: an integer is divisible by 9 if and only if the sum of its digits is divisible by 9.",
              "hint": "Each power of 10 leaves remainder 1 when divided by 9.",
              "solution": "Write $a = a_n 10^n + a_{n-1}10^{n-1} + \\cdots + a_1 10 + a_0$. Note $10^k - 1 = \\underbrace{99\\cdots9}_{k}$ is divisible by 9 for all $k$.\n\nLet $b = a - (a_n + a_{n-1} + \\cdots + a_0)$ (the number minus its digit sum). Then\n$$b = a_n(10^n - 1) + a_{n-1}(10^{n-1} - 1) + \\cdots + a_1(10 - 1),$$\nand every term is divisible by 9, so $b$ is divisible by 9. Therefore $a$ is divisible by 9 **iff** the digit sum is. (Similarly, alternating digit sums give the divisibility rule for 11.)",
              "keyIdea": "Since $10 \\equiv 1 \\pmod 9$, every power of ten is $\\equiv 1$, so a number is congruent to its digit sum mod 9.",
              "id": "2.7:division-by-9",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.7:division-by-9",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.7 / Division by 9"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "九的整除判据",
                  "statement": "证明十进制整数可被9整除，当且仅当各位数字和可被9整除。",
                  "solution": "写$n=\\sum a_k10^k$。因$10\\equiv1\\pmod9$，所以$n\\equiv\\sum a_k\\pmod9$，二者相差9的倍数，整除性等价。模11时$10\\equiv-1$，可得到交错位数和判据。",
                  "hint": "每个10的幂模9均为1。",
                  "keyIdea": "用模运算消去位权。",
                  "tags": [
                    "数论",
                    "模运算"
                  ]
                }
              }
            },
            {
              "title": "Chameleon Colors",
              "difficulty": "medium",
              "tags": [
                "invariant",
                "modular"
              ],
              "statement": "An island has 13 red, 15 green, and 17 blue chameleons. When two chameleons of different colors meet, both change to the **third** color. Can they ever all become the same color?",
              "hint": "Consider the counts modulo 3.",
              "solution": "**Answer: No.** When something *can't* happen, look for an invariant — a quantity the move never changes. Here, watch the counts **modulo 3**.\n\nStart: $(R, G, B) = (13, 15, 17) \\equiv (1, 0, 2) \\pmod 3$. Notice the three residues are **all different**.\n\nNow look at one meeting: two colors each lose one chameleon and the third gains two. So the changes are $(-1, -1, +2)$ in some order. But mod 3, $-1 \\equiv +2 \\equiv 2$, so *every* count changes by the **same** amount ($+2$) mod 3:\n$$(1,0,2) \\to (1{+}2,\\,0{+}2,\\,2{+}2) = (0, 2, 1) \\pmod 3 \\;-\\; \\text{still all different.}$$\n\nBecause all three shift equally, the *gaps* between the residues never change — they stay all-distinct forever. But 'all one color' means two counts are 0 and equal mod 3 — residues **not** all distinct. That state is unreachable. So the chameleons can **never** all become the same color.",
              "keyIdea": "Invariant mod 3: the operation preserves the differences of the counts modulo 3, so an all-same configuration (impossible from distinct residues) is unreachable.",
              "id": "2.7:chameleon-colors",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.7:chameleon-colors",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.7 / Chameleon Colors"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "变色龙",
                  "statement": "岛上有13只红、15只绿、17只蓝变色龙。两只异色相遇都变成第三色。能否最终全部同色？",
                  "solution": "不能。每次三色计数变化为(-1,-1,+2)的排列，模3均相当于各加2，因此计数之差模3不变。初始模3余数为(1,0,2)，始终两两不同；全同色时有两个计数为0，余数相同，故不可达。",
                  "hint": "考虑三色计数模3后的变化。",
                  "keyIdea": "计数差模3是不变量。",
                  "tags": [
                    "不变量",
                    "模运算"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "模运算",
              "note": ""
            }
          }
        },
        {
          "id": "2.8",
          "title": "Math Induction",
          "problems": [
            {
              "title": "Coin Split Problem",
              "difficulty": "medium",
              "tags": [
                "induction",
                "invariant"
              ],
              "statement": "Split 1000 coins into two piles of $x$ and $y$ coins; record the product $xy$. Repeatedly split each pile further (recording the product each time) until every pile has 1 coin. Prove the **total of all recorded products** is the same regardless of how you split, and find it.",
              "hint": "Try small cases (n = 2, 3, 4), spot the pattern, then prove by strong induction.",
              "solution": "**Guess the pattern first.** Try tiny cases. Split 2 coins → only $1\\times1=1$, total **1**. Split 3 coins → $1\\times2=2$, then the pile of 2 splits for another 1, total **3**. The totals $0, 1, 3, 6, \\dots$ are the triangular numbers $\\tfrac{n(n-1)}{2}$ — and they don't seem to depend on *how* you split. Let's prove that.\n\n**Claim:** for $n$ coins the total is always $f(n) = \\tfrac{n(n-1)}{2}$, no matter the choices.\n\n**Proof by strong induction.** Base case $f(1) = 0$. For the step, the *first* split breaks $n$ coins into piles of $x$ and $n-x$, recording $x(n-x)$, after which the two piles are independent sub-games. So\n$$f(n) = x(n-x) + f(x) + f(n-x).$$\nAssume the formula holds for all sizes below $n$ and substitute:\n$$f(n) = x(n-x) + \\frac{x(x-1)}{2} + \\frac{(n-x)(n-x-1)}{2}.$$\nExpanding, all the $x$ terms cancel and this collapses to $\\tfrac{n(n-1)}{2}$ — **independent of $x$**, which is exactly the path-independence we wanted.\n\nFor 1000 coins: $f(1000) = \\tfrac{1000 \\cdot 999}{2} = \\mathbf{499{,}500}$.\n\n*(Neat reason why: $\\tfrac{n(n-1)}{2} = \\binom{n}{2}$ counts pairs of coins — and the process 'separates' each pair exactly once.)*",
              "keyIdea": "Strong induction confirms a path-independent invariant: the sum equals the number of distinct pairs, $\\binom{n}{2}$ (every pair of coins is 'separated' exactly once).",
              "id": "2.8:coin-split-problem",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.8:coin-split-problem",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.8 / Coin Split Problem"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "硬币递归分割",
                  "statement": "将1000枚硬币分成两堆，每次记录两堆数量之积，再继续分割直到每堆一枚。证明所有乘积总和与分割方式无关，并求其值。",
                  "solution": "令f(n)为总和，f(1)=0。首次分成x与n-x，则$f(n)=x(n-x)+f(x)+f(n-x)$。强归纳代入$f(k)=k(k-1)/2$，化简得$f(n)=n(n-1)/2$，与x无关。n=1000时为499500。也可计数：每对硬币恰在某次分割首次分离，总和即$\\binom n2$。",
                  "hint": "先算小规模，再用强归纳。",
                  "keyIdea": "每对硬币恰被分开一次，得到路径无关性。",
                  "tags": [
                    "归纳",
                    "不变量"
                  ]
                }
              }
            },
            {
              "title": "Chocolate Bar Problem",
              "difficulty": "easy",
              "tags": [
                "induction",
                "invariant"
              ],
              "statement": "A chocolate bar is an $m \\times n$ grid of squares. Each 'break' splits one rectangular piece into two rectangles along a grid line. What is the minimum number of breaks to reduce the whole bar into $mn$ individual 1×1 squares?",
              "hint": "Count how the number of pieces changes with each break.",
              "solution": "**Always $mn - 1$ breaks**, regardless of order. Each break increases the number of pieces by exactly **1**. You start with 1 piece and must reach $mn$ pieces, so you need exactly $mn - 1$ breaks. (Provable by induction, but the invariant makes it immediate.)\n\nFor a 6×8 bar: $48 - 1 = 47$ breaks.",
              "keyIdea": "Invariant: 'pieces' goes up by 1 per break, so the count of breaks is fixed at (final pieces − 1) no matter the strategy.",
              "id": "2.8:chocolate-bar-problem",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.8:chocolate-bar-problem",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.8 / Chocolate Bar Problem"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "掰巧克力",
                  "statement": "m×n巧克力每次沿网格将一个矩形掰成两个矩形，至少掰几次才能得到mn块1×1小块？",
                  "solution": "必为mn-1次。每次块数恰增加1，从1块到mn块需要mn-1次，与顺序无关。6×8时为47次。",
                  "hint": "计算每次掰开使块数增加多少。",
                  "keyIdea": "块数每次加一的不变量。",
                  "tags": [
                    "归纳",
                    "不变量"
                  ]
                }
              }
            },
            {
              "title": "Race Track (Gas Cans)",
              "difficulty": "hard",
              "tags": [
                "induction"
              ],
              "statement": "On a one-way circular track, $N$ gas cans are placed at various points; the total gas in them is exactly enough for one full loop. Your car starts empty and can hold unlimited gas, picking up cans as it passes. Prove there's always a starting position from which you can complete the full loop.",
              "hint": "Start with N = 1, 2 and induct. Or: merge two adjacent cans.",
              "solution": "**Prove it by induction on the number of cans $N$.**\n\n**Base case ($N = 1$):** the single can holds all the gas needed for the loop, so start there — done.\n\n**Inductive step:** assume any arrangement of $N-1$ cans (with just-enough total gas) has a valid start. Now take $N$ cans. \n\n*First, a key fact:* there must be **some** can that holds enough gas to reach the **next** can. Why? If every can fell short of its neighbor, then summed around the loop the total gas would be less than the total distance — but we're told they're exactly equal. Contradiction. So such a can, call it $i$, exists.\n\nNow **merge**: pour can $i+1$'s gas back into can $i$ and delete can $i+1$ (we know the car can cover that gap anyway). This is a legal $N-1$-can arrangement with the same total gas, so by the inductive hypothesis it has a valid starting point. **That same starting point works for the original $N$ cans** — when the car reaches $x_i$ it has at least as much gas as in the merged version, so it sails past $x_{i+1}$ and finishes the loop. ∎\n\n*(Quick alternative: track your running gas balance around the loop and start at the can right after the point where that balance hits its lowest value.)*",
              "keyIdea": "Inductive merging: there's always a 'self-sufficient' can that can absorb its successor, shrinking $N$ while preserving feasibility.",
              "id": "2.8:race-track-gas-cans",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.8:race-track-gas-cans",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.8 / Race Track (Gas Cans)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "环形加油",
                  "statement": "单向环形赛道上有N罐汽油，总量恰够跑一圈。汽车从空油箱出发，容量无限，经过时拾取汽油。证明总能选择一个起点完成一圈。",
                  "solution": "将汽油换算为行驶距离，记录绕环的累计供油减耗油曲线。总增量为0，从累计余额全局最小点之后的油罐出发，之后任何前缀余额都非负，故能完成一圈。也可归纳：总存在一罐足以到下一罐，合并相邻两罐并保留该段耗油约束，缩减为N-1罐情形。",
                  "hint": "从一两罐开始，或考察累计油量余额的最低点。",
                  "keyIdea": "累计和最小值提供可行环路起点。",
                  "tags": [
                    "归纳"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "数学归纳法",
              "note": ""
            }
          }
        },
        {
          "id": "2.9",
          "title": "Proof by Contradiction",
          "problems": [
            {
              "title": "Irrational Number (√2)",
              "difficulty": "easy",
              "tags": [
                "proof",
                "contradiction",
                "number theory"
              ],
              "statement": "Prove that $\\sqrt{2}$ is irrational.",
              "hint": "Assume it's a fraction in lowest terms and derive a parity contradiction.",
              "solution": "**The strategy of proof by contradiction:** assume the opposite of what you want, then show it forces something impossible. Here, assume $\\sqrt2$ *is* rational and watch it self-destruct.\n\nSuppose $\\sqrt2 = \\dfrac{m}{n}$ written in **lowest terms** — so $m$ and $n$ share no common factor (this is the assumption we'll blow up).\n\nSquare both sides: $2 = \\dfrac{m^2}{n^2}$, i.e.\n$$m^2 = 2n^2.$$\n\n- $m^2$ is twice something, so $m^2$ is **even**, which means **$m$ is even**. Write $m = 2x$.\n- Substitute: $(2x)^2 = 2n^2 \\Rightarrow 4x^2 = 2n^2 \\Rightarrow n^2 = 2x^2$. By the same logic, **$n$ is even** too.\n\nBut if both $m$ and $n$ are even, they share the factor 2 — **contradicting** \"lowest terms.\" The only thing we assumed was that $\\sqrt2$ is rational, so that must be false. Therefore $\\sqrt2$ is **irrational**. ∎",
              "keyIdea": "Assume the negation (rational, in lowest terms), then derive that both numerator and denominator are even — a contradiction with the reduced-fraction assumption.",
              "id": "2.9:irrational-number-2",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.9:irrational-number-2",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.9 / Irrational Number (√2)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "根号二无理性",
                  "statement": "证明$\\sqrt2$是无理数。",
                  "solution": "反设$\\sqrt2=m/n$为最简分数，则$m^2=2n^2$，故m为偶数。令m=2k，代回得$n^2=2k^2$，所以n也为偶数，与最简矛盾。",
                  "hint": "设为最简分数，寻找奇偶矛盾。",
                  "keyIdea": "反证法与分子分母同为偶数的矛盾。",
                  "tags": [
                    "证明",
                    "反证",
                    "数论"
                  ]
                }
              }
            },
            {
              "title": "Rainbow Hats (7 Prisoners)",
              "difficulty": "hard",
              "tags": [
                "modular",
                "protocol",
                "contradiction"
              ],
              "statement": "7 prisoners each get a hat in one of 7 rainbow colors (repeats allowed). Each sees the other 6 hats but not their own; they can't communicate. All write down a guess simultaneously. If **at least one** guesses correctly, all go free. Find a strategy that guarantees freedom.",
              "hint": "Code the colors 0–6. Make prisoner i guess so the total sum ≡ i (mod 7).",
              "solution": "**The idea:** we only need *one* prisoner to be right, so spread their guesses across all 7 possibilities of one hidden quantity — the total. Then whatever the truth is, exactly one prisoner 'bet' on it.\n\nCode the colors $0, 1, \\dots, 6$. Each prisoner $i$ assumes *\"the sum of all 7 hats is $\\equiv i \\pmod 7$\"* and guesses his own hat accordingly: he sees the other six, so he picks $g_i$ making\n$$g_i + (\\text{sum of the six he sees}) \\equiv i \\pmod 7.$$\nSo prisoner 0 bets the total is $\\equiv 0$, prisoner 1 bets $\\equiv 1$, …, prisoner 6 bets $\\equiv 6$ — covering **all** residues.\n\nNow the *real* total $S = \\sum_j x_j$ has some actual residue $r = S \\bmod 7$, and $r$ is one of $0,\\dots,6$. **Prisoner $r$ bet on exactly the right total**, so his guess for his own hat is correct. Since $r$ always exists, at least one prisoner is always right → everyone goes free.\n\n*(Why it can't fail: if everyone were wrong, the true sum would have to dodge all 7 residues mod 7 at once — impossible, there are only 7.)*",
              "keyIdea": "Cover all residues: each prisoner bets on a different value of the total sum mod 7, so whatever the real sum is, exactly the prisoner betting on that residue is correct.",
              "id": "2.9:rainbow-hats-7-prisoners",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "2.9:rainbow-hats-7-prisoners",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "2.9 / Rainbow Hats (7 Prisoners)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "彩虹帽",
                  "statement": "7名囚犯各戴7种颜色之一，可重复，每人看见其他6顶帽，不能沟通，同时猜自己的颜色。至少一人猜对则全获释，如何保证？",
                  "solution": "颜色及囚犯均编号0至6。囚犯i假设总颜色和模7为i，猜$g_i\\equiv i-\\sum_{j\\ne i}x_j\\pmod7$。真实总和必有某个余数r，囚犯r的假设正确，因此其帽色必猜对，保证至少一人正确。",
                  "hint": "让不同囚犯分别假设总颜色和为不同模7余数。",
                  "keyIdea": "覆盖全部模7余数，保证其中一个假设正确。",
                  "tags": [
                    "模运算",
                    "协议",
                    "反证"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "反证法",
              "note": ""
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "趣味思维题",
          "blurb": "运用常识、逻辑与创造力解决问题，重点考察思考过程，而非复杂计算或记忆。"
        }
      }
    },
    {
      "num": 3,
      "title": "Calculus & Linear Algebra",
      "blurb": "Limits, derivatives, integration, ODEs and matrix algebra — the analytical toolkit behind pricing and risk.",
      "topics": [
        {
          "id": "3.1",
          "title": "Limits and Derivatives",
          "note": "The derivative $f'(x)$ is the slope of the tangent / instantaneous rate of change. Master the chain, product, and quotient rules — plus the **logarithmic derivative** trick for powers-of-functions.",
          "problems": [
            {
              "title": "Basics of Derivatives",
              "difficulty": "medium",
              "tags": [
                "derivatives",
                "logarithmic differentiation"
              ],
              "statement": "What is the derivative of $y = x^{x}$ (and more generally $y = x^{x^{x}}$)?",
              "hint": "When both the base and the exponent contain $x$, take logs of both sides first.",
              "solution": "**The trick — logarithmic differentiation.** When the variable appears in *both* the base and the exponent, neither the power rule nor the exponential rule applies directly. Take $\\ln$ of both sides to turn the exponent into a product:\n$$y = x^x \\;\\Rightarrow\\; \\ln y = x\\ln x.$$\nDifferentiate both sides (chain rule on the left, product rule on the right):\n$$\\frac{1}{y}\\frac{dy}{dx} = \\ln x + x\\cdot\\frac1x = \\ln x + 1.$$\nSo\n$$\\frac{dy}{dx} = y(\\ln x + 1) = x^x(\\ln x + 1).$$\n\n**For the tower $y = x^{x^x}$:** same idea, $\\ln y = x^x \\ln x$. Differentiate the right side (it now needs the $x^x$ derivative we just found):\n$$\\frac1y\\frac{dy}{dx} = x^x(\\ln x + 1)\\ln x + x^x\\cdot\\frac1x \\;\\Rightarrow\\; \\frac{dy}{dx} = x^{x^x}\\Big(x^x(\\ln x+1)\\ln x + x^{x-1}\\Big).$$",
              "keyIdea": "Logarithmic differentiation: take $\\ln$ to drop the exponent into a product, then differentiate implicitly. Essential whenever the variable is in both base and exponent.",
              "id": "3.1:basics-of-derivatives",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.1:basics-of-derivatives",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.1 / Basics of Derivatives"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "对数求导",
                  "statement": "求$y=x^x$及更一般的$y=x^{x^x}$的导数，取x>0。",
                  "solution": "对数求导：$\\ln y=x\\ln x$，所以$y\\prime=x^x(\\ln x+1)$。对三层幂塔，$\\ln y=x^x\\ln x$，故$$y\\prime=x^{x^x}[x^x(\\ln x+1)\\ln x+x^{x-1}].$$",
                  "hint": "底数和指数都含x时，先取对数。",
                  "keyIdea": "取对数将幂转为乘积，再隐式求导。",
                  "tags": [
                    "导数",
                    "对数求导"
                  ]
                }
              }
            },
            {
              "title": "Maximum and Minimum",
              "difficulty": "easy",
              "tags": [
                "optimization",
                "calculus"
              ],
              "statement": "How do you find and classify the extrema of a function $f(x)$? When is a critical point a max, a min, or neither?",
              "hint": "Set the first derivative to zero, then use the second derivative (or sign changes) to classify.",
              "solution": "**Step 1 — find critical points.** Extrema occur where the tangent is flat or undefined: solve $f'(x) = 0$ (and check points where $f'$ doesn't exist, plus the endpoints of the domain).\n\n**Step 2 — classify** each critical point $x_0$ with the **second derivative test**:\n- $f''(x_0) > 0$ → curve is concave up → **local minimum**.\n- $f''(x_0) < 0$ → concave down → **local maximum**.\n- $f''(x_0) = 0$ → inconclusive; fall back to checking the **sign change** of $f'$ around $x_0$ (− to + is a min, + to − is a max, no change is an inflection/saddle).\n\n**Step 3 — global extrema.** On a closed interval, compare $f$ at all critical points *and* the two endpoints; the largest/smallest wins. (Don't forget the endpoints — a common slip.)",
              "keyIdea": "$f'=0$ locates candidates; the sign of $f''$ classifies them. For a global extremum on an interval, always also check the endpoints.",
              "id": "3.1:maximum-and-minimum",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.1:maximum-and-minimum",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.1 / Maximum and Minimum"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "极值判别",
                  "statement": "如何寻找并判别f(x)的极值？临界点何时为极大、极小或都不是？",
                  "solution": "检查$f\\prime=0$、导数不存在的点及定义域端点。若临界点二阶导数为正则局部极小，为负则局部极大；为零时不能判定，可看一阶导数符号：负转正为极小，正转负为极大。求闭区间全局极值时还需比较所有候选与端点。",
                  "hint": "先找一阶导数为零的候选，再用二阶导数或符号变化。",
                  "keyIdea": "局部判别与全局比较分开，不能漏端点。",
                  "tags": [
                    "优化",
                    "微积分"
                  ]
                }
              }
            },
            {
              "title": "L'Hospital's Rule",
              "difficulty": "medium",
              "tags": [
                "limits",
                "L'Hospital"
              ],
              "statement": "How do you evaluate indeterminate limits like $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$? Evaluate $\\lim_{x\\to 0}\\frac{\\sin x}{x}$ and $\\lim_{x\\to\\infty} x^{1/x}$.",
              "hint": "L'Hospital: for $0/0$ or $\\infty/\\infty$, differentiate top and bottom separately. For exponent forms, take logs first.",
              "solution": "**L'Hospital's rule:** if $\\lim \\frac{f}{g}$ is of the form $\\frac00$ or $\\frac{\\infty}{\\infty}$, then $\\lim\\frac{f}{g} = \\lim\\frac{f'}{g'}$ (when the latter exists) — differentiate numerator and denominator *separately* (not the quotient rule).\n\n**Example 1:** $\\lim_{x\\to0}\\frac{\\sin x}{x}$ is $\\frac00$. Differentiate top and bottom: $\\lim_{x\\to0}\\frac{\\cos x}{1} = 1$.\n\n**Example 2:** $\\lim_{x\\to\\infty} x^{1/x}$ is the indeterminate form $\\infty^0$. Take logs first: let $L = \\lim \\tfrac{\\ln x}{x}$, which is $\\frac{\\infty}{\\infty}$. L'Hospital gives $\\lim \\frac{1/x}{1} = 0$. Since $\\ln(\\text{answer}) = 0$, the limit is $e^0 = 1$.\n\n**Caution:** only apply it to genuine $\\frac00$ / $\\frac{\\infty}{\\infty}$ forms; for $0\\cdot\\infty$, $\\infty-\\infty$, or $1^\\infty$, first algebraically rearrange (or take logs) into a quotient.",
              "keyIdea": "For $0/0$ or $\\infty/\\infty$, differentiate top and bottom. For exponent indeterminates ($\\infty^0$, $1^\\infty$), take logs to convert to a quotient first.",
              "id": "3.1:l-hospital-s-rule",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.1:l-hospital-s-rule",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.1 / L'Hospital's Rule"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "洛必达求极限",
                  "statement": "如何处理0/0、∞/∞等未定式？求$\\lim_{x\\to0}\\sin x/x$及$\\lim_{x\\to\\infty}x^{1/x}$。",
                  "solution": "在满足洛必达法则的可导性、分母导数非零及导数比极限存在等条件下，0/0或∞/∞型可分别求分子、分母导数。第一问变为$\\lim\\cos x=1$。第二问先取对数，$\\ln x/x\\to0$，故原极限为$e^0=1$。其他未定式应先代数变形或取对数转成适用的商式。",
                  "hint": "商型未定式分别求导，指数型先取对数。",
                  "keyIdea": "先核对未定式和定理条件，再使用洛必达法则。",
                  "tags": [
                    "极限",
                    "洛必达"
                  ]
                }
              }
            },
            {
              "id": "3.1:l-hopital-s-rule",
              "title": "L'Hopital's Rule",
              "difficulty": "easy",
              "tags": [
                "statistics"
              ],
              "statement": "State the hypotheses of L'Hopital's rule.",
              "hint": "",
              "solution": "The ratio must have the indeterminate form $0/0$ or $\\infty/\\infty$. The numerator and denominator must be differentiable in a punctured neighborhood, the denominator's derivative must be nonzero there, and the derivative ratio must have a finite or infinite limit.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.1:l-hospital-s-rule",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0056"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "洛必达法则的前提。",
                  "solution": "必须是 0/0 或 ∞/∞ 型未定式，分子分母在邻域内可导，且分母导数不为 0，并且导数比值的极限存在或趋于无穷。",
                  "title": "洛必达条件",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "极限与导数",
              "note": "导数$f\\prime(x)$表示切线斜率或瞬时变化率。掌握链式、乘积及商的求导法则；底数和指数都含变量时，可用**对数求导**。"
            }
          }
        },
        {
          "id": "3.2",
          "title": "Integration",
          "note": "Integration reverses differentiation and measures area. Core tools: substitution, integration by parts ($\\int u\\,dv = uv - \\int v\\,du$), and recognizing probability densities.",
          "problems": [
            {
              "title": "Basics of Integration",
              "difficulty": "medium",
              "tags": [
                "integration",
                "by parts"
              ],
              "statement": "What are the main integration techniques, and when do you use each? Illustrate with $\\int x e^{x}\\,dx$.",
              "hint": "Substitution undoes the chain rule; integration by parts undoes the product rule.",
              "solution": "Two workhorse techniques:\n\n**Substitution** (reverses the chain rule): spot an inner function $u = g(x)$ whose derivative also appears, and rewrite $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$. Use it when the integrand is a composite times the inner derivative.\n\n**Integration by parts** (reverses the product rule): $\\int u\\,dv = uv - \\int v\\,du$. Use it for products like (polynomial)×(exp/log/trig). Pick $u$ to be the part that *simplifies* when differentiated.\n\n**Example $\\int x e^x\\,dx$:** let $u = x$ (simplifies to 1) and $dv = e^x dx$ (so $v = e^x$):\n$$\\int x e^x\\,dx = x e^x - \\int e^x\\,dx = x e^x - e^x + C = e^x(x-1) + C.$$\n\n(A handy mnemonic for choosing $u$ in by-parts: **LIATE** — Logarithmic, Inverse-trig, Algebraic, Trig, Exponential — earlier in the list makes the better $u$.)",
              "keyIdea": "Substitution undoes the chain rule; by-parts ($\\int u\\,dv = uv - \\int v\\,du$) undoes the product rule. Choose $u$ to be what simplifies under differentiation (LIATE).",
              "id": "3.2:basics-of-integration",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.2:basics-of-integration",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.2 / Basics of Integration"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "积分方法",
                  "statement": "常用积分技巧有哪些，各适用于什么情形？以$\\int xe^x\\,dx$为例。",
                  "solution": "换元法逆用链式法则：$\\int f(g(x))g\\prime(x)dx=\\int f(u)du$。分部积分逆用乘积法则：$\\int u\\,dv=uv-\\int v\\,du$。例中取u=x、dv=eˣdx，得$xe^x-e^x+C=e^x(x-1)+C$。选u时常优先对数、反三角、代数、三角、指数，使求导后更简单。",
                  "hint": "换元对应链式法则，分部积分对应乘积法则。",
                  "keyIdea": "选择求导后能简化的部分作u。",
                  "tags": [
                    "积分",
                    "分部积分"
                  ]
                }
              }
            },
            {
              "title": "Applications of Integration",
              "difficulty": "medium",
              "tags": [
                "integration",
                "area",
                "average"
              ],
              "statement": "What can definite integrals compute? Find the area under one arch of $\\sin x$ and the average value of $\\sin x$ over $[0,\\pi]$.",
              "hint": "Area is $\\int f\\,dx$; average value is $\\frac{1}{b-a}\\int_a^b f\\,dx$.",
              "solution": "Definite integrals accumulate quantities: **area** under a curve, **average value** of a function, volumes, arc lengths, and (crucially for quant work) **probabilities and expectations**.\n\n**Area under one arch of $\\sin x$** over $[0,\\pi]$:\n$$\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = 1 + 1 = 2.$$\n\n**Average value** over $[0,\\pi]$ (total area divided by interval length):\n$$\\bar f = \\frac{1}{\\pi - 0}\\int_0^\\pi \\sin x\\,dx = \\frac{2}{\\pi} \\approx 0.637.$$\n\nThe average-value formula $\\frac{1}{b-a}\\int_a^b f\\,dx$ is the continuous analog of averaging a list — and it's exactly how you compute the mean of a continuous random variable.",
              "keyIdea": "Definite integrals accumulate area, averages ($\\frac{1}{b-a}\\int f$), and expectations. The average value is the continuous version of a mean.",
              "id": "3.2:applications-of-integration",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.2:applications-of-integration",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.2 / Applications of Integration"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "定积分应用",
                  "statement": "定积分能计算什么？求sin x一拱下的面积及其在[0,π]的平均值。",
                  "solution": "定积分可累积面积、体积、弧长、概率和期望。$\\int_0^\\pi\\sin x\\,dx=[-\\cos x]_0^\\pi=2$。平均值为积分除以区间长度，即$2/\\pi\\approx0.637$；一般公式为$(b-a)^{-1}\\int_a^bf(x)dx$。",
                  "hint": "平均值等于积分除以区间长度。",
                  "keyIdea": "将连续累积量转为面积或平均值。",
                  "tags": [
                    "积分",
                    "面积",
                    "平均值"
                  ]
                }
              }
            },
            {
              "title": "Expected Value Using Integration",
              "difficulty": "medium",
              "tags": [
                "integration",
                "expectation",
                "probability"
              ],
              "statement": "For a continuous random variable with density $f(x)$, how do you compute $E[X]$ and $E[g(X)]$? Find $E[X]$ for $X \\sim \\text{Unif}[0,1]$ and for an exponential with rate $\\lambda$.",
              "hint": "$E[X] = \\int x f(x)\\,dx$; $E[g(X)] = \\int g(x) f(x)\\,dx$ over the support.",
              "solution": "For a continuous variable, expectation is an integral against the density:\n$$E[X] = \\int_{-\\infty}^{\\infty} x\\,f(x)\\,dx, \\qquad E[g(X)] = \\int_{-\\infty}^{\\infty} g(x)\\,f(x)\\,dx.$$\n\n**Uniform $[0,1]$** ($f(x) = 1$ on $[0,1]$):\n$$E[X] = \\int_0^1 x\\,dx = \\tfrac12.$$\n\n**Exponential rate $\\lambda$** ($f(x) = \\lambda e^{-\\lambda x}$, $x\\ge 0$): integrate by parts,\n$$E[X] = \\int_0^\\infty x\\,\\lambda e^{-\\lambda x}\\,dx = \\frac{1}{\\lambda}.$$\n\nA useful alternative for non-negative variables (avoids by-parts): $E[X] = \\int_0^\\infty P(X > x)\\,dx$ — integrate the survival function. For the exponential, $\\int_0^\\infty e^{-\\lambda x}dx = 1/\\lambda$ immediately.",
              "keyIdea": "Expectation is $\\int x f(x)\\,dx$ (and $E[g(X)] = \\int g\\,f$). For non-negative variables, $E[X] = \\int_0^\\infty P(X>x)\\,dx$ is often faster.",
              "id": "3.2:expected-value-using-integration",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.2:expected-value-using-integration",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.2 / Expected Value Using Integration"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "积分求期望",
                  "statement": "连续变量X的密度为f，如何计算E[X]及E[g(X)]？求U(0,1)及速率λ指数分布的均值。",
                  "solution": "$E[X]=\\int xf(x)dx$，$E[g(X)]=\\int g(x)f(x)dx$，需相应可积。均匀分布给$\\int_0^1x\\,dx=1/2$；指数分布给$\\int_0^\\infty x\\lambda e^{-\\lambda x}dx=1/\\lambda$。非负变量也可用$E[X]=\\int_0^\\infty P(X>x)dx$。",
                  "hint": "在支持集上对函数乘密度积分。",
                  "keyIdea": "期望是对分布的积分，非负情形可用尾积分。",
                  "tags": [
                    "积分",
                    "期望",
                    "概率"
                  ]
                }
              }
            },
            {
              "id": "3.2:payoff-decomposition",
              "title": "Payoff Decomposition",
              "difficulty": "hard",
              "tags": [
                "probability",
                "functional analysis"
              ],
              "statement": "Let $X$ be integrable and $f\\in C^2(\\mathbb R)$. Assume the second-derivative integrals used below have finite absolute expectation. Given $E[X]$ and $E[\\max(k,X)]$, $E[\\min(k,X)]$ for every $k$, express $E[f(X)]$ as an integral and state when expectation and integration may be interchanged.",
              "hint": "",
              "solution": "For any anchor $k$, the Carr-Madan / Breeden-Litzenberger decomposition is $$f(x)=f(k)+f\\prime(k)(x-k)+\\int_{-\\infty}^k f\\prime\\prime(t)(t-x)^+dt+\\int_k^\\infty f\\prime\\prime(t)(x-t)^+dt.$$ Take expectations. Recover the put and call terms from $E[(t-X)^+]=t-E[\\min(t,X)]$ and $E[(X-t)^+]=E[\\max(t,X)]-t$. Absolute integrability permits Fubini's theorem.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.2:payoff-decomposition",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0184"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "X可积，f∈C²(R)，并假设所用二阶导数积分的绝对期望有限。已知E[X]及各k下E[max(k,X)]、E[min(k,X)]，写出E[f(X)]的积分表示并说明交换积分与期望的条件。",
                  "solution": "对任意基点k，$$f(x)=f(k)+f\\prime(k)(x-k)+\\int_{-\\infty}^kf\\prime\\prime(t)(t-x)^+dt+\\int_k^\\infty f\\prime\\prime(t)(x-t)^+dt.$$取期望后，用$E[(t-X)^+]=t-E[\\min(t,X)]$与$E[(X-t)^+]=E[\\max(t,X)]-t$恢复积分项。绝对可积条件保证Fubini交换成立。",
                  "title": "收益分解",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "泛函分析"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "积分",
              "note": "积分与求导互逆，也可度量面积。主要工具包括换元、分部积分（$\\int u\\,dv=uv-\\int v\\,du$），以及识别概率密度。"
            }
          }
        },
        {
          "id": "3.3",
          "title": "Partial Derivatives & Multiple Integrals",
          "problems": [
            {
              "title": "Partial Derivatives & Multiple Integrals",
              "difficulty": "hard",
              "tags": [
                "multiple integrals",
                "polar coordinates",
                "Gaussian"
              ],
              "statement": "Evaluate the Gaussian integral $\\int_{-\\infty}^{\\infty} e^{-x^2/2}\\,dx$.",
              "hint": "Square it to get a double integral, then switch to polar coordinates.",
              "solution": "There's no elementary antiderivative for $e^{-x^2/2}$, so use the classic **square-and-polar** trick. Call the integral $I$ and look at $I^2$ as a double integral over the plane:\n$$I^2 = \\left(\\int_{-\\infty}^{\\infty} e^{-x^2/2}dx\\right)\\left(\\int_{-\\infty}^{\\infty} e^{-y^2/2}dy\\right) = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)/2}\\,dx\\,dy.$$\n\nNow switch to **polar coordinates** ($x = r\\cos\\theta$, $y = r\\sin\\theta$, $dx\\,dy = r\\,dr\\,d\\theta$), which makes $x^2 + y^2 = r^2$:\n$$I^2 = \\int_0^{2\\pi}\\int_0^\\infty e^{-r^2/2}\\,r\\,dr\\,d\\theta.$$\nThe inner integral is now elementary (substitute $u = r^2/2$): $\\int_0^\\infty e^{-r^2/2}r\\,dr = 1$. So $I^2 = \\int_0^{2\\pi} 1\\,d\\theta = 2\\pi$, giving\n$$I = \\sqrt{2\\pi}.$$\n\nThis is exactly why the standard normal density carries the $\\frac{1}{\\sqrt{2\\pi}}$ normalizing constant — so it integrates to 1.",
              "keyIdea": "Square the 1-D Gaussian into a 2-D integral, then polar coordinates turn it elementary (the extra $r$ is the key). Result $\\sqrt{2\\pi}$ is the normal's normalizer.",
              "id": "3.3:partial-derivatives-multiple-integrals",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.3:partial-derivatives-multiple-integrals",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.3 / Partial Derivatives & Multiple Integrals"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "高斯积分",
                  "statement": "计算$\\int_{-\\infty}^{\\infty}e^{-x^2/2}dx$。",
                  "solution": "设积分为I，平方并用非负积分交换得$I^2=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)/2}dxdy$。转极坐标，Jacobian为r，故$I^2=\\int_0^{2\\pi}\\int_0^\\infty e^{-r^2/2}r\\,drd\\theta=2\\pi$。I>0，因此$I=\\sqrt{2\\pi}$，这也解释标准正态密度的归一化常数。",
                  "hint": "平方转为二重积分，再换极坐标。",
                  "keyIdea": "极坐标的r因子使积分可直接换元。",
                  "tags": [
                    "重积分",
                    "极坐标",
                    "高斯"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "偏导数与重积分",
              "note": ""
            }
          }
        },
        {
          "id": "3.4",
          "title": "Important Calculus Methods",
          "note": "Taylor expansions approximate functions by polynomials; Newton's method finds roots by iterated tangents; Lagrange multipliers solve constrained optimization.",
          "problems": [
            {
              "title": "Taylor's Series",
              "difficulty": "medium",
              "tags": [
                "Taylor series",
                "approximation",
                "Euler's formula"
              ],
              "statement": "Write the Taylor series and use it to compute $i^i$ (where $i = \\sqrt{-1}$).",
              "hint": "Taylor-expand $e^x$, $\\sin x$, $\\cos x$ to derive Euler's formula, then take logs.",
              "solution": "**Taylor series** expands $f$ near $x_0$ as a polynomial built from its derivatives:\n$$f(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\cdots$$\nThe famous expansions (about 0): $e^x = \\sum \\frac{x^n}{n!}$, $\\sin x = x - \\frac{x^3}{3!} + \\cdots$, $\\cos x = 1 - \\frac{x^2}{2!} + \\cdots$.\n\n**Euler's formula falls out:** substitute $x = i\\theta$ into the $e^x$ series and group real/imaginary terms — they reassemble into $\\cos\\theta$ and $\\sin\\theta$:\n$$e^{i\\theta} = \\cos\\theta + i\\sin\\theta.$$\n\n**Now compute $i^i$.** Write $i$ in exponential form: $i = e^{i\\pi/2}$. Then\n$$i^i = \\big(e^{i\\pi/2}\\big)^i = e^{i^2\\pi/2} = e^{-\\pi/2} \\approx 0.208.$$\nStrikingly, $i^i$ is a **real** number. (There are other values $e^{-\\pi/2 + 2\\pi k}$ from the multivaluedness of the complex log, but the principal one is $e^{-\\pi/2}$.)",
              "keyIdea": "Taylor series of $e^x$ gives Euler's formula $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$; writing $i = e^{i\\pi/2}$ makes $i^i = e^{-\\pi/2}$, a real number.",
              "id": "3.4:taylor-s-series",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.4:taylor-s-series",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.4 / Taylor's Series"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "泰勒与复幂",
                  "statement": "写出泰勒级数，并计算$i^i$，其中$i=\\sqrt{-1}$。",
                  "solution": "在函数等于其泰勒展开的范围内，$f(x)=\\sum_{n\\ge0}f^{(n)}(x_0)(x-x_0)^n/n!$。由指数、正弦、余弦的级数得$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$。取复对数主值得$i=e^{i\\pi/2}$，故$i^i=e^{-\\pi/2}\\approx0.208$。复对数多值给出$e^{-\\pi/2+2\\pi k}$（k为整数）这组值。",
                  "hint": "由指数函数级数推欧拉公式，再取复对数。",
                  "keyIdea": "复幂需明确对数分支。",
                  "tags": [
                    "泰勒级数",
                    "近似",
                    "欧拉公式"
                  ]
                }
              }
            },
            {
              "title": "Newton's Method",
              "difficulty": "medium",
              "tags": [
                "root finding",
                "iteration"
              ],
              "statement": "Explain Newton's method for solving $f(x) = 0$, and use it to approximate $\\sqrt{2}$.",
              "hint": "Follow the tangent line down to the x-axis, repeat. The update is $x_{n+1} = x_n - f(x_n)/f'(x_n)$.",
              "solution": "**The idea:** to solve $f(x) = 0$, start at a guess, slide down the **tangent line** to where it crosses the x-axis, and use that as your next guess. The tangent at $x_n$ hits zero at\n$$x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}.$$\nNear a simple root it converges **quadratically** (the number of correct digits roughly doubles each step).\n\n**Approximating $\\sqrt2$:** solve $f(x) = x^2 - 2 = 0$, with $f'(x) = 2x$. The update simplifies beautifully:\n$$x_{n+1} = x_n - \\frac{x_n^2 - 2}{2x_n} = \\frac{x_n + 2/x_n}{2} \\;(\\text{the average of } x_n \\text{ and } 2/x_n).$$\nStart $x_0 = 1$: $x_1 = 1.5$, $x_2 = 1.41\\overline{6}$, $x_3 = 1.41421\\ldots$ — already accurate to 5 decimals in three steps. (This is the ancient 'Babylonian' square-root method.)",
              "keyIdea": "Newton iterates $x_{n+1} = x_n - f(x_n)/f'(x_n)$ (tangent to the axis), converging quadratically. For $\\sqrt2$ it becomes 'average $x$ with $2/x$'.",
              "id": "3.4:newton-s-method",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.4:newton-s-method",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.4 / Newton's Method"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "牛顿法",
                  "statement": "解释解f(x)=0的牛顿法，并用它逼近$\\sqrt2$。",
                  "solution": "用当前点切线的零点更新：$x_{n+1}=x_n-f(x_n)/f\\prime(x_n)$。在光滑简单根附近、初值足够近时二次收敛。取f=x²-2，得$x_{n+1}=(x_n+2/x_n)/2$。从1开始依次得到1.5、1.416666…、1.414215…，快速逼近根号二。",
                  "hint": "沿切线与横轴的交点迭代。",
                  "keyIdea": "局部线性化给更新公式，收敛依赖初值及根条件。",
                  "tags": [
                    "求根",
                    "迭代"
                  ]
                }
              }
            },
            {
              "title": "Lagrange Multipliers",
              "difficulty": "hard",
              "tags": [
                "constrained optimization",
                "Lagrange"
              ],
              "statement": "How do Lagrange multipliers solve constrained optimization? Maximize $xy$ subject to $x + y = 10$.",
              "hint": "At the optimum, the gradient of the objective is parallel to the gradient of the constraint: $\\nabla f = \\lambda\\nabla g$.",
              "solution": "**The principle:** to optimize $f(x,y)$ subject to $g(x,y) = c$, note that at the constrained optimum the objective's gradient must be **parallel** to the constraint's gradient (otherwise you could slide along the constraint to improve). That gives $\\nabla f = \\lambda\\nabla g$ for some multiplier $\\lambda$ — combine with the constraint and solve.\n\n**Maximize $f = xy$ subject to $g = x + y = 10$:**\n$$\\nabla f = (y, x), \\quad \\nabla g = (1,1) \\;\\Rightarrow\\; y = \\lambda,\\; x = \\lambda \\;\\Rightarrow\\; x = y.$$\nPlug into the constraint $x + y = 10$: $x = y = 5$. Maximum value $xy = 25$.\n\nIntuition check: among all rectangles with fixed perimeter, the **square** has the largest area — exactly what we found ($x = y$). The multiplier $\\lambda$ also has meaning: it's the rate at which the optimum improves as you relax the constraint (the 'shadow price').",
              "keyIdea": "Set $\\nabla f = \\lambda\\nabla g$ plus the constraint. $\\lambda$ is the shadow price — how much the optimum improves per unit of loosened constraint.",
              "id": "3.4:lagrange-multipliers",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.4:lagrange-multipliers",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.4 / Lagrange Multipliers"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "拉格朗日乘子",
                  "statement": "如何用拉格朗日乘子解约束优化？在x+y=10下最大化xy。",
                  "solution": "在约束梯度非零的光滑内点极值处，$\\nabla f=\\lambda\\nabla g$。此例(y,x)=λ(1,1)，故x=y=5。沿约束xy=x(10-x)=25-(x-5)²，确认全局最大为25。乘子在适当正则条件下表示放松约束对最优值的边际影响。",
                  "hint": "最优点的目标梯度与约束梯度平行。",
                  "keyIdea": "联立梯度条件和约束，并检验极值性质。",
                  "tags": [
                    "约束优化",
                    "拉格朗日"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "重要微积分方法",
              "note": "泰勒展开用多项式近似函数；牛顿法通过切线迭代求根；拉格朗日乘子法处理约束优化。"
            }
          }
        },
        {
          "id": "3.5",
          "title": "Ordinary Differential Equations",
          "note": "Classify first: separable? linear? homogeneous vs. nonhomogeneous? The general solution of a linear ODE = (homogeneous solution) + (one particular solution).",
          "problems": [
            {
              "title": "Separable Differential Equations",
              "difficulty": "easy",
              "tags": [
                "ODE",
                "separable"
              ],
              "statement": "Solve a separable ODE. Example: $\\frac{dy}{dx} = ky$.",
              "hint": "Get all the $y$'s on one side and all the $x$'s on the other, then integrate both sides.",
              "solution": "An ODE is **separable** if you can algebraically split the variables — all $y$ on one side, all $x$ on the other — then integrate each side independently.\n\n**Example $\\frac{dy}{dx} = ky$** (exponential growth/decay):\n$$\\frac{dy}{y} = k\\,dx \\;\\Rightarrow\\; \\int\\frac{dy}{y} = \\int k\\,dx \\;\\Rightarrow\\; \\ln|y| = kx + C.$$\nExponentiate: $y = Ae^{kx}$, where $A = \\pm e^{C}$ is fixed by an initial condition (e.g. $y(0) = y_0 \\Rightarrow A = y_0$). So $y = y_0 e^{kx}$.\n\nThis single equation underlies continuous compounding, radioactive decay, and the drift term of geometric Brownian motion.",
              "keyIdea": "Separate variables, integrate both sides. $\\frac{dy}{dx}=ky$ gives exponential $y = y_0 e^{kx}$ — the backbone of compounding and decay.",
              "id": "3.5:separable-differential-equations",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.5:separable-differential-equations",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.5 / Separable Differential Equations"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "可分离微分方程",
                  "statement": "解可分离方程，例如dy/dx=ky。",
                  "solution": "非零解满足dy/y=kdx，积分得ln|y|=kx+C，因此$y=Ae^{kx}$；A=0也给零解。有初值y(0)=y₀时，$y=y_0e^{kx}$。此形式描述指数增长与衰减。",
                  "hint": "把y与x分到两边，再分别积分。",
                  "keyIdea": "分离变量时注意被除去的零解。",
                  "tags": [
                    "常微分方程",
                    "可分离变量"
                  ]
                }
              }
            },
            {
              "title": "First-Order Linear Differential Equations",
              "difficulty": "medium",
              "tags": [
                "ODE",
                "integrating factor"
              ],
              "statement": "Solve a first-order linear ODE $\\frac{dy}{dx} + P(x)y = Q(x)$.",
              "hint": "Multiply by an integrating factor $\\mu(x) = e^{\\int P\\,dx}$ so the left side becomes a perfect derivative.",
              "solution": "A first-order linear ODE has the form $\\frac{dy}{dx} + P(x)y = Q(x)$. The trick is the **integrating factor** $\\mu(x) = e^{\\int P(x)\\,dx}$. Multiply through by $\\mu$ and the left side becomes exactly the derivative of a product:\n$$\\mu\\frac{dy}{dx} + \\mu P y = \\frac{d}{dx}\\big(\\mu y\\big) = \\mu Q.$$\nNow integrate both sides:\n$$\\mu(x)\\,y = \\int \\mu(x) Q(x)\\,dx + C \\;\\Rightarrow\\; y = \\frac{1}{\\mu(x)}\\left(\\int \\mu Q\\,dx + C\\right).$$\n\nThe whole method exists to engineer the left-hand side into a single $\\frac{d}{dx}(\\mu y)$ so you can just integrate.",
              "keyIdea": "Multiply by $\\mu = e^{\\int P\\,dx}$ to collapse the left side into $\\frac{d}{dx}(\\mu y)$, then integrate. The integrating factor is the whole game.",
              "id": "3.5:first-order-linear-differential-equations",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.5:first-order-linear-differential-equations",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.5 / First-Order Linear Differential Equations"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "一阶线性方程",
                  "statement": "求解$y\\prime+P(x)y=Q(x)$。",
                  "solution": "令积分因子$\\mu(x)=e^{\\int P(x)dx}$。乘后左边为$(\\mu y)\\prime=\\mu Q$，积分即得$$y=\\mu^{-1}\\left(\\int\\mu Q\\,dx+C\\right).$$",
                  "hint": "乘积分因子，把左边合成乘积的导数。",
                  "keyIdea": "构造积分因子，再直接积分。",
                  "tags": [
                    "常微分方程",
                    "积分因子"
                  ]
                }
              }
            },
            {
              "title": "Homogeneous Linear Equations",
              "difficulty": "medium",
              "tags": [
                "ODE",
                "characteristic equation"
              ],
              "statement": "Solve a constant-coefficient homogeneous linear ODE, e.g. $y'' - 3y' + 2y = 0$.",
              "hint": "Guess $y = e^{rx}$; you get a characteristic (algebraic) equation in $r$.",
              "solution": "For a constant-coefficient linear ODE like $ay'' + by' + cy = 0$, **guess $y = e^{rx}$**. Substituting turns the differential equation into an algebraic **characteristic equation** $ar^2 + br + c = 0$.\n\n**Example $y'' - 3y' + 2y = 0$:** characteristic equation $r^2 - 3r + 2 = 0 \\Rightarrow (r-1)(r-2) = 0$, roots $r = 1, 2$. Each root gives a solution, and the general solution is their linear combination:\n$$y = c_1 e^{x} + c_2 e^{2x}.$$\n\n**Root cases to know:**\n- **Distinct real** roots $r_1, r_2$: $y = c_1 e^{r_1 x} + c_2 e^{r_2 x}$.\n- **Repeated** root $r$: $y = (c_1 + c_2 x)e^{rx}$.\n- **Complex** roots $\\alpha \\pm i\\beta$: $y = e^{\\alpha x}(c_1\\cos\\beta x + c_2\\sin\\beta x)$ — oscillation from the imaginary part.",
              "keyIdea": "Guess $e^{rx}$ to get a characteristic polynomial; its roots (real/repeated/complex) dictate the solution form. Complex roots ⇒ oscillation.",
              "id": "3.5:homogeneous-linear-equations",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.5:homogeneous-linear-equations",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.5 / Homogeneous Linear Equations"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "齐次线性方程",
                  "statement": "求常系数齐次线性微分方程，例如$y\\prime\\prime-3y\\prime+2y=0$。",
                  "solution": "试$y=e^{rx}$，得到特征方程r²-3r+2=0，根为1、2，因此$y=c_1e^x+c_2e^{2x}$。一般二阶情形：异实根对应两个指数；重根r对应$(c_1+c_2x)e^{rx}$；共轭根α±iβ对应$e^{\\alpha x}(c_1\\cos\\beta x+c_2\\sin\\beta x)$。",
                  "hint": "试指数解，将微分方程化为特征多项式。",
                  "keyIdea": "特征根类型决定解的基。",
                  "tags": [
                    "常微分方程",
                    "特征方程"
                  ]
                }
              }
            },
            {
              "title": "Nonhomogeneous Linear Equations",
              "difficulty": "medium",
              "tags": [
                "ODE",
                "particular solution"
              ],
              "statement": "Solve a nonhomogeneous linear ODE, e.g. $y'' - 3y' + 2y = x$.",
              "hint": "General solution = homogeneous solution + any one particular solution.",
              "solution": "**The structure:** for $ay'' + by' + cy = R(x)$, the general solution is\n$$y = \\underbrace{y_h}_{\\text{homogeneous (RHS}=0)} + \\underbrace{y_p}_{\\text{one particular solution}}.$$\nYou already know how to get $y_h$ (characteristic equation); you just need *any single* $y_p$ that matches the right side.\n\n**Example $y'' - 3y' + 2y = x$:** from the previous problem, $y_h = c_1 e^x + c_2 e^{2x}$. For $y_p$, guess a form matching the RHS — since $R(x)=x$ is a degree-1 polynomial, try $y_p = mx + n$. Then $y_p'' = 0$, $y_p' = m$, so $0 - 3m + 2(mx+n) = x$. Matching coefficients: $2m = 1 \\Rightarrow m = \\tfrac12$, and $-3m + 2n = 0 \\Rightarrow n = \\tfrac34$. So\n$$y = c_1 e^x + c_2 e^{2x} + \\tfrac12 x + \\tfrac34.$$\n\n('Guess the form of the RHS' is the method of undetermined coefficients: polynomial → polynomial, $e^{kx}$ → $Ae^{kx}$, $\\sin/\\cos$ → combination of both.)",
              "keyIdea": "General = homogeneous + particular. Find $y_p$ by guessing a form matching the right-hand side (undetermined coefficients), then add the homogeneous solution.",
              "id": "3.5:nonhomogeneous-linear-equations",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.5:nonhomogeneous-linear-equations",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.5 / Nonhomogeneous Linear Equations"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "非齐次线性方程",
                  "statement": "求非齐次线性微分方程，例如$y\\prime\\prime-3y\\prime+2y=x$。",
                  "solution": "通解=齐次通解+任一特解。齐次部分为$c_1e^x+c_2e^{2x}$。试特解mx+n，代入得2m=1、-3m+2n=0，所以m=1/2、n=3/4。通解为$c_1e^x+c_2e^{2x}+x/2+3/4$。待定系数法依据右端选择多项式、指数或三角组合；与齐次解重合时需调整。",
                  "hint": "先求齐次解，再找一个特解。",
                  "keyIdea": "线性方程的解空间是齐次空间加一个特解。",
                  "tags": [
                    "常微分方程",
                    "特解"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "常微分方程",
              "note": "先分类：是否可分离变量？是否线性？齐次还是非齐次？线性非齐次方程的通解等于齐次通解加上一个特解。"
            }
          }
        },
        {
          "id": "3.6",
          "title": "Linear Algebra",
          "note": "Vectors, matrices, eigen-decompositions and matrix factorizations power covariance analysis, PCA, regression, and Monte Carlo correlation — the daily tools of quant work.",
          "problems": [
            {
              "title": "Vectors",
              "difficulty": "easy",
              "tags": [
                "vectors",
                "dot product"
              ],
              "statement": "What does the dot product measure, and when are two vectors orthogonal? What is the geometric meaning of $a\\cdot b$?",
              "hint": "$a\\cdot b = |a||b|\\cos\\theta$. Think about projection and the angle between vectors.",
              "solution": "The **dot product** of $a, b \\in \\mathbb{R}^n$ is $a\\cdot b = \\sum_i a_i b_i$, and geometrically\n$$a\\cdot b = |a|\\,|b|\\cos\\theta,$$\nwhere $\\theta$ is the angle between them. So it measures **how much two vectors point the same way** — it's $|b|$ times the (signed) length of $a$'s projection onto $b$.\n\nConsequences worth knowing:\n- **Orthogonal** (perpendicular) ⇔ $a\\cdot b = 0$ (since $\\cos 90° = 0$).\n- $a\\cdot a = |a|^2$, so the dot product gives length.\n- $\\cos\\theta = \\frac{a\\cdot b}{|a||b|}$ is the **cosine similarity** — and for mean-zero data vectors it's exactly the **correlation coefficient**, which is why linear algebra and statistics are so intertwined in quant work.",
              "keyIdea": "$a\\cdot b = |a||b|\\cos\\theta$ measures alignment/projection; zero means orthogonal. For centered data it *is* correlation — the bridge between geometry and statistics.",
              "id": "3.6:vectors",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:vectors",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.6 / Vectors"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "向量内积",
                  "statement": "内积测量什么？何时两向量正交？解释a·b的几何意义。",
                  "solution": "$a\\cdot b=\\sum a_ib_i=\\|a\\|\\|b\\|\\cos\\theta$，是a在b方向的有符号投影长度乘以b长度。内积为0即正交，且$a\\cdot a=\\|a\\|^2$。非零中心化数据向量的余弦相似度等于Pearson相关系数；未归一化内积本身不等于相关系数。",
                  "hint": "从长度、夹角及投影理解内积。",
                  "keyIdea": "内积连接几何投影与中心化数据相关。",
                  "tags": [
                    "向量",
                    "内积"
                  ]
                }
              }
            },
            {
              "title": "QR Decomposition",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "orthogonalization",
                "regression"
              ],
              "statement": "What is the QR decomposition, how is it computed, and what is it used for?",
              "hint": "Factor $A = QR$ with $Q$ orthonormal and $R$ upper-triangular — think Gram–Schmidt.",
              "solution": "**What it is:** any matrix $A$ (with independent columns) factors as\n$$A = QR,$$\nwhere $Q$ has **orthonormal columns** ($Q^\\top Q = I$) and $R$ is **upper-triangular**.\n\n**How:** apply **Gram–Schmidt** to the columns of $A$ — take each column, subtract its projections onto the already-orthonormalized earlier columns, and normalize. Those orthonormal vectors form $Q$; the projection coefficients fill $R$. (In practice, numerically stable variants like Householder reflections are used.)\n\n**Why it matters:** QR is the workhorse for **least-squares regression**. To solve $A x \\approx b$, substituting $A = QR$ reduces the normal equations to $R x = Q^\\top b$ — an easy triangular back-substitution, and far more numerically stable than forming $A^\\top A$ directly. It's also the engine of the **QR algorithm** for computing eigenvalues.",
              "keyIdea": "$A = QR$ (orthonormal $Q$ × triangular $R$) via Gram–Schmidt. It makes least-squares stable ($Rx = Q^\\top b$) and underlies eigenvalue algorithms.",
              "id": "3.6:qr-decomposition",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:qr-decomposition",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.6 / QR Decomposition"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "QR分解",
                  "statement": "定义QR分解，说明计算方法和用途。",
                  "solution": "满列秩矩阵可写A=QR，Q列正交归一，R上三角。Gram-Schmidt逐列减去已得方向上的投影并归一化；实际常用更稳定的Householder反射。最小二乘化为$Rx=Q^Tb$再回代，避免显式形成AᵀA；QR也用于特征值算法。",
                  "hint": "将A分为正交列矩阵与上三角矩阵。",
                  "keyIdea": "正交变换让最小二乘求解更稳定。",
                  "tags": [
                    "线性代数",
                    "正交化",
                    "回归"
                  ]
                }
              }
            },
            {
              "title": "Determinant, Eigenvalue & Eigenvector",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "eigenvalues"
              ],
              "statement": "Define eigenvalues/eigenvectors and explain how to find them. What do the determinant and trace tell you about them?",
              "hint": "$Av = \\lambda v$. Eigenvalues solve $\\det(A - \\lambda I) = 0$.",
              "solution": "An **eigenvector** $v$ of $A$ is a nonzero vector that $A$ merely **scales**, not rotates: $Av = \\lambda v$, with **eigenvalue** $\\lambda$ the scaling factor.\n\n**Finding them:** rewrite as $(A - \\lambda I)v = 0$. For a nonzero $v$ to exist, $A - \\lambda I$ must be singular, so\n$$\\det(A - \\lambda I) = 0 \\quad(\\text{the characteristic equation}).$$\nSolve this polynomial for the $\\lambda$'s, then for each $\\lambda$ solve $(A-\\lambda I)v = 0$ for its eigenvector(s).\n\n**Two beautiful shortcuts** linking eigenvalues to easy-to-read quantities:\n- $\\det(A) = \\prod_i \\lambda_i$ — the determinant is the **product** of eigenvalues (so $A$ is invertible ⇔ no zero eigenvalue).\n- $\\text{trace}(A) = \\sum_i \\lambda_i$ — the trace (sum of diagonal) is the **sum** of eigenvalues.\n\nThese power PCA (eigenvectors of the covariance matrix are the principal directions; eigenvalues are the variances along them).",
              "keyIdea": "Eigenvectors are directions $A$ only scales; eigenvalues solve $\\det(A-\\lambda I)=0$. Determinant = product of eigenvalues, trace = sum — the basis of PCA.",
              "id": "3.6:determinant-eigenvalue-eigenvector",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:determinant-eigenvalue-eigenvector",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.6 / Determinant, Eigenvalue & Eigenvector"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "特征值与行列式",
                  "statement": "定义特征值、特征向量及求法。行列式和迹与特征值有何关系？",
                  "solution": "非零v满足Av=λv即为特征向量，λ为特征值。由det(A-λI)=0求λ，再解(A-λI)v=0。按代数重数计算，det(A)=∏λᵢ，tr(A)=∑λᵢ。无零特征值等价于可逆；协方差矩阵的特征方向和特征值给PCA方向及方差。",
                  "hint": "先写Av=λv，再看何时有非零解。",
                  "keyIdea": "行列式为特征值乘积，迹为其和。",
                  "tags": [
                    "线性代数",
                    "特征值"
                  ]
                }
              }
            },
            {
              "title": "Positive Semidefinite/Definite Matrix",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "covariance"
              ],
              "statement": "What does it mean for a symmetric matrix to be positive (semi)definite, and why does it matter for covariance matrices?",
              "hint": "Positive definite ⇔ $x^\\top A x > 0$ for all nonzero $x$ ⇔ all eigenvalues positive.",
              "solution": "A symmetric matrix $A$ is **positive definite** if $x^\\top A x > 0$ for every nonzero vector $x$ (and **positive semidefinite**, PSD, if $\\ge 0$). Equivalent characterizations worth knowing:\n- all **eigenvalues are positive** (PSD: $\\ge 0$);\n- all **leading principal minors** are positive (Sylvester's criterion);\n- it has a **Cholesky factorization** $A = LL^\\top$.\n\n**Why it matters for covariance.** Any valid covariance matrix $\\Sigma$ **must** be PSD, because for any portfolio weights $w$, the variance $w^\\top\\Sigma w = \\text{Var}(w^\\top X) \\ge 0$ — variance can't be negative. So PSD-ness is the consistency condition for a covariance matrix. This shows up constantly: an estimated correlation matrix that *isn't* PSD (e.g. from mismatched data windows) will break Cholesky-based Monte Carlo and mean-variance optimization, and must be 'repaired' back to PSD.",
              "keyIdea": "Positive (semi)definite ⇔ $x^\\top A x > 0$ ($\\ge 0$) ⇔ eigenvalues positive (non-negative). Every covariance matrix must be PSD because variances $w^\\top\\Sigma w$ can't be negative.",
              "id": "3.6:positive-semidefinite-definite-matrix",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:positive-semidefinite-definite-matrix",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.6 / Positive Semidefinite/Definite Matrix"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "正定与半正定",
                  "statement": "实对称矩阵正定、半正定是什么意思？为什么协方差矩阵必须满足该性质？",
                  "solution": "正定要求所有非零x有xᵀAx>0，半正定改为≥0。对称矩阵相应等价于特征值全正或非负。正定还等价于所有顺序主子式为正，以及正对角Cholesky分解。协方差矩阵Σ满足$w^T\\Sigma w=\\operatorname{Var}(w^TX)\\ge0$，故必须半正定。估计结果若不满足，会影响相关模拟和优化。",
                  "hint": "从二次型和特征值判定。",
                  "keyIdea": "协方差半正定源于任意线性组合的方差非负。",
                  "tags": [
                    "线性代数",
                    "协方差"
                  ]
                }
              }
            },
            {
              "title": "LU and Cholesky Decomposition",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "factorization",
                "Monte Carlo"
              ],
              "statement": "What are the LU and Cholesky decompositions, and what are they used for?",
              "hint": "LU = lower × upper (Gaussian elimination). Cholesky is the symmetric-positive-definite special case, $A = LL^\\top$.",
              "solution": "**LU decomposition:** factor a square matrix $A = LU$ into a **lower**-triangular $L$ and an **upper**-triangular $U$. It's just **Gaussian elimination** recorded as matrices ($U$ is the row-echelon result; $L$ stores the elimination multipliers). Once you have it, solving $Ax = b$ becomes two fast triangular solves ($Ly = b$, then $Ux = y$) — and you can reuse the factorization for many right-hand sides.\n\n**Cholesky decomposition:** the special, more efficient case when $A$ is **symmetric positive definite**:\n$$A = L L^\\top,$$\none triangular factor and its transpose. It's about twice as fast as LU and numerically very stable.\n\n**The quant application — correlated random draws.** To simulate a vector of correlated normals with covariance $\\Sigma$, take independent standard normals $z$ and form $x = Lz$ where $\\Sigma = LL^\\top$. Then $\\text{Cov}(x) = L\\,\\text{Cov}(z)\\,L^\\top = LL^\\top = \\Sigma$. This Cholesky step is *the* standard way to inject correlation into Monte Carlo simulations (and it only works if $\\Sigma$ is genuinely PSD — see the previous problem).",
              "keyIdea": "LU = recorded Gaussian elimination (fast repeated solves); Cholesky $A=LL^\\top$ is the SPD special case. Cholesky turns independent normals into correlated ones ($x = Lz$) — the backbone of correlated Monte Carlo.",
              "id": "3.6:lu-and-cholesky-decomposition",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:lu-and-cholesky-decomposition",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "3.6 / LU and Cholesky Decomposition"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "LU与Cholesky",
                  "statement": "定义LU与Cholesky分解，并说明用途。",
                  "solution": "LU将消元过程记录为下三角L与上三角U，必要时使用置换PA=LU。解Ax=b转为Ly=Pb、Ux=y，可复用分解处理多个右端。实对称正定时有更高效的Cholesky分解A=LLᵀ。若Σ=LLᵀ且z为独立标准正态向量，x=Lz满足Cov(x)=LLᵀ=Σ，可生成相关正态样本；半正定奇异情形需相应分解实现。",
                  "hint": "LU对应高斯消元，Cholesky利用对称正定结构。",
                  "keyIdea": "三角分解复用求解；Cholesky用于相关随机模拟。",
                  "tags": [
                    "线性代数",
                    "因式分解",
                    "蒙特卡洛"
                  ]
                }
              }
            },
            {
              "id": "3.6:positive-definiteness",
              "title": "Positive Definiteness",
              "difficulty": "medium",
              "tags": [
                "linear algebra",
                "positive definite matrices",
                "statistics",
                "combinatorics"
              ],
              "statement": "Give equivalent criteria for a real symmetric matrix $A$ to be positive definite. State the assumptions that cannot be omitted.",
              "hint": "",
              "solution": "For real symmetric $A$, the following are equivalent: $x^TAx>0$ for every nonzero $x$; all eigenvalues are positive; all leading principal minors are positive (Sylvester's criterion); and $A=LL^T$ has a Cholesky factorization with positive diagonal entries in $L$. Checking diagonal entries alone is insufficient.",
              "keyIdea": "Require real symmetry; Quadratic-form and eigenvalue criteria; Leading principal minors or Cholesky factorization",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "3.6:positive-semidefinite-definite-matrix",
              "rubric": [
                "Require real symmetry",
                "Quadratic-form and eigenvalue criteria",
                "Leading principal minors or Cholesky factorization"
              ],
              "verification": [
                "The real symmetric spectral theorem and Sylvester's criterion."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0057"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对实对称矩阵 A，给出判断正定的等价条件，并说明不能省略的假设。",
                  "solution": "实对称 A 正定等价于：对一切非零 x，xᵀAx>0；全部特征值为正；所有顺序主子式为正（Sylvester 判据）；存在正对角的 Cholesky 分解 A=LLᵀ。不能把顺序主子式判据误写成只检查对角元素。",
                  "keyIdea": "实对称假设；二次型/特征值；顺序主子式或 Cholesky",
                  "title": "正定判据",
                  "hint": "",
                  "tags": [
                    "线性代数",
                    "正定矩阵",
                    "统计",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "3.6:random-matrix-invertibility",
              "title": "Random Matrix Invertibility",
              "difficulty": "medium",
              "tags": [
                "probability",
                "linear algebra",
                "expectation and variance",
                "combinatorics"
              ],
              "statement": "An $n\\times n$ matrix has independent $U(-1,1)$ entries. What is its probability of being invertible in the exact real-arithmetic model?",
              "hint": "",
              "solution": "The probability is 1. Its determinant is a nonzero polynomial in $n^2$ variables, whose zero set has Lebesgue measure zero. The joint entry distribution is absolutely continuous, so singularity has probability zero. Almost-sure invertibility does not imply good numerical conditioning.",
              "keyIdea": "Probability 1 rather than certainty; Measure-zero singular set; Distinguish ill-conditioning from exact singularity",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "3.6:random-matrix-invertibility",
              "rubric": [
                "Probability 1 rather than certainty",
                "Measure-zero singular set",
                "Distinguish ill-conditioning from exact singularity"
              ],
              "verification": [
                "The zero set of a nonzero polynomial has measure zero, proved by conditioning on variables and induction."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0076"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n×n 矩阵各元素独立服从 U(-1,1)，在精确实数模型中可逆概率是多少？",
                  "solution": "概率为1。行列式是 n² 个变量上的非零多项式，其零点集 Lebesgue 测度为0，联合分布绝对连续，所以奇异概率为0。几乎必可逆不代表数值上条件数好。",
                  "keyIdea": "概率1而非必然；零测集；数值病态与精确奇异区别",
                  "title": "随机矩阵可逆性",
                  "hint": "",
                  "tags": [
                    "概率",
                    "线性代数",
                    "期望与方差",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "3.6:art-gallery",
              "title": "Art Gallery",
              "difficulty": "hard",
              "tags": [
                "geometric probability"
              ],
              "statement": "For a simple polygon with $N$ vertices and no holes, guards may stand at vertices and see along segments entirely inside the polygon. Prove that $\\lfloor N/3\\rfloor$ stationary guards suffice.",
              "hint": "",
              "solution": "Triangulate the polygon and three-color the vertices so each triangle has all three colors. The smallest color class contains at most $\\lfloor N/3\\rfloor$ vertices. Guards at those vertices see every triangle, proving the art gallery theorem.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:art-gallery",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0078"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对无洞的简单N边形，守卫可放在顶点，视线为完全位于多边形内的线段。证明⌊N/3⌋个静止守卫足够。",
                  "solution": "对简单多边形作三角剖分，并将顶点三染色，使每个三角形三色齐全。最小颜色类至多有⌊N/3⌋个顶点，在这些点放守卫即可覆盖所有三角形。",
                  "title": "美术馆守卫",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "几何概率"
                  ]
                }
              }
            },
            {
              "id": "3.6:obtuse-vectors",
              "title": "Obtuse Vectors",
              "difficulty": "hard",
              "tags": [
                "mathematics"
              ],
              "statement": "What is the largest number of nonzero vectors in $n$-dimensional real Euclidean space whose pairwise angles are strictly obtuse? Prove the upper bound and give a construction attaining it.",
              "hint": "",
              "solution": "The maximum is $n+1$, attained by the centered vertex vectors of a regular simplex. This answer gives the construction; an upper-bound proof is still required.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:obtuse-vectors",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0079"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在n维实欧氏空间中，两两夹角严格为钝角的一组非零向量最多有多少个？证明上界并构造达到上界的例子。",
                  "solution": "最大为n+1，可由以原点为中心的正则单纯形的顶点向量达到。该解析只给出了构造，上界证明仍需补充。",
                  "title": "钝角向量",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "数学"
                  ]
                }
              }
            },
            {
              "id": "3.6:random-determinant",
              "title": "Random Determinant",
              "difficulty": "hard",
              "tags": [
                "probability",
                "linear algebra",
                "expectation",
                "expectation and variance"
              ],
              "statement": "An $n\\times n$ matrix $A$ has independent entries equally likely to be $-1$ or $1$. Find $\\operatorname{Var}(\\det A)$ for $n\\ge1$.",
              "hint": "",
              "solution": "The determinant expansion gives $E[\\det A]=0$. In its squared expansion, distinct permutations have zero cross expectation by independence and centering, while each diagonal term contributes 1. Thus $E[(\\det A)^2]=n!$ and the variance is $n!$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:random-determinant",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0169"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n阶矩阵A的元素独立且等概率为-1或1，求Var(det A)，n≥1。",
                  "solution": "`E[det(A)]=0`，且由行列式展开与独立性可得 `E[det(A)^2]=n!`，因此 `Var(det(A))=n!`。",
                  "title": "随机行列式",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "线性代数",
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "3.6:square-zero-matrix",
              "title": "Square-Zero Matrix",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "combinatorial counting",
                "combinatorics"
              ],
              "statement": "An $n\\times n$ binary matrix $A$ satisfies $A^2=0$ under ordinary real matrix multiplication. What is the maximum number of ones?",
              "hint": "",
              "solution": "The maximum is $\\lfloor n^2/4\\rfloor$. A construction is $A=\\begin{pmatrix}0&J\\\\0&0\\end{pmatrix}$ with a balanced all-ones upper-right block. For the upper bound, view $A$ as a directed graph: $A^2=0$ rules out every directed walk of length two, so vertices with outgoing edges and those with incoming edges are disjoint. At most $r(n-r)\\le\\lfloor n^2/4\\rfloor$ edges are possible.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:square-zero-matrix",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0170"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n阶0/1矩阵A满足实数域普通矩阵乘法A²=0，求A中1的个数最大值。",
                  "solution": "最大为$\\lfloor n^2/4\\rfloor$。取上下平衡的分块矩阵$A=\\begin{pmatrix}0&J\\\\0&0\\end{pmatrix}$达到上界。将A看作有向图邻接矩阵，A²=0排除长度2的有向步行，因此有出边的顶点与有入边的顶点不相交，边数至多r(n-r)，不超过该上界。",
                  "title": "平方为零的矩阵",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "线性代数",
                    "组合计数",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "3.6:odd-binary-matrices",
              "title": "Odd Binary Matrices",
              "difficulty": "medium",
              "tags": [
                "combinatorial counting",
                "linear algebra",
                "combinatorics",
                "counting"
              ],
              "statement": "For $n\\ge1$, count the $n\\times n$ binary matrices whose row sums and column sums are all odd.",
              "hint": "",
              "solution": "Fill the upper-left $(n-1)\\times(n-1)$ block arbitrarily. Row and column parity then uniquely determine the last column and row. The two requirements at the bottom-right corner agree because both target parity totals equal $n\\bmod2$. The count is $2^{(n-1)^2}$, including one matrix for $n=1$.",
              "keyIdea": "Count free entries; Complete the last row and column; Check corner consistency; Handle n=1",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "3.6:odd-binary-matrices",
              "rubric": [
                "Count free entries",
                "Complete the last row and column",
                "Check corner consistency",
                "Handle n=1"
              ],
              "verification": [
                "Over $GF(2)$ the constraints have rank $2n-1$."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0187"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n≥1，求每行和与每列和都为奇数的 n×n 二进制矩阵个数。",
                  "solution": "任填左上(n-1)×(n-1)块，再由各行各列奇偶要求唯一决定最后一列和最后一行；最后右下角两个约束一致，因为目标行奇偶总和与列奇偶总和都等于n mod2。故2^((n-1)^2)。n=1也给1个矩阵。",
                  "keyIdea": "自由变量数量；补行列；右下角一致性；n=1",
                  "title": "奇和二进制矩阵",
                  "hint": "",
                  "tags": [
                    "组合计数",
                    "线性代数",
                    "组合数学",
                    "计数"
                  ]
                }
              }
            },
            {
              "id": "3.6:consecutive-ones",
              "title": "Consecutive Ones",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "proof"
              ],
              "statement": "Let $A$ be an $n\\times n$ binary matrix with consecutive ones in every row. Prove that $\\det A\\in\\{-1,0,1\\}$.",
              "hint": "",
              "solution": "This is the total unimodularity property of interval matrices. A proof can use the consecutive-ones criterion: for any selected columns, assign alternating signs in column order. The signed sum in each row is then $-1$, 0, or 1. The total-unimodularity criterion implies that every minor, including the determinant, lies in $\\{-1,0,1\\}$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:consecutive-ones",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0188"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "设 `A` 是 `n` 阶 `01` 矩阵，且每一行中的 `1` 都是连续出现的。证明 `det(A)` 只能取 `-1, 0, 1`。",
                  "solution": "这是区间矩阵的全幺模性。对任意选中的列，按列顺序交替赋予±1符号，则每行所选列在其连续1区间内仍连续，带符号和只能为-1、0、1。由全幺模判据，每个子式均在{-1,0,1}，特别地行列式如此。",
                  "title": "连续一矩阵",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "线性代数",
                    "证明"
                  ]
                }
              }
            },
            {
              "id": "3.6:integer-inverse",
              "title": "Integer Inverse",
              "difficulty": "medium",
              "tags": [
                "linear algebra",
                "number theory",
                "integer matrices"
              ],
              "statement": "When is an integer square matrix $A$ invertible with an integer inverse? Give and prove a necessary and sufficient condition.",
              "hint": "",
              "solution": "Exactly when $\\det A=\\pm1$. Necessity: the determinants of $A$ and its integer inverse are integers with product 1. Sufficiency: $A^{-1}=\\operatorname{adj}(A)/\\det A$ is integer when the determinant is $\\pm1$.",
              "keyIdea": "Determinant ±1; Necessity from integer determinant product; Sufficiency from adjugate formula",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "3.6:integer-inverse",
              "rubric": [
                "Determinant ±1",
                "Necessity from integer determinant product",
                "Sufficiency from adjugate formula"
              ],
              "verification": [
                "Determinant multiplicativity and the adjugate identity."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0216"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "整数方阵 A 何时可逆且 A⁻¹ 的每个元素仍为整数？给出充要条件并证明。",
                  "solution": "充要条件 det(A)=±1。若 A和A⁻¹都是整数矩阵，两者行列式都是整数且乘积1，所以各为±1。反之伴随矩阵为整数，A⁻¹=adj(A)/det(A)仍为整数。",
                  "keyIdea": "det=±1；必要性用整数行列式乘积；充分性用伴随矩阵",
                  "title": "整数逆矩阵",
                  "hint": "",
                  "tags": [
                    "线性代数",
                    "数论",
                    "整数矩阵"
                  ]
                }
              }
            },
            {
              "id": "3.6:weyl-s-inequalities",
              "title": "Weyl's Inequalities",
              "difficulty": "hard",
              "tags": [
                "linear algebra",
                "matrix analysis"
              ],
              "statement": "Let $A,B$ be real symmetric $n\\times n$ matrices, with eigenvalues in decreasing order. State Weyl's upper and lower bounds relating the eigenvalues of $A+B$ to those of $A$ and $B$.",
              "hint": "",
              "solution": "For $i+j-1\\le n$, $$\\lambda_{i+j-1}(A+B)\\le\\lambda_i(A)+\\lambda_j(B).$$ For $i+j-n\\ge1$, $$\\lambda_{i+j-n}(A+B)\\ge\\lambda_i(A)+\\lambda_j(B).$$ In particular, $\\lambda_{\\min}(A)+\\lambda_{\\min}(B)\\le\\lambda_k(A+B)\\le\\lambda_{\\max}(A)+\\lambda_{\\max}(B)$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "3.6:weyl-s-inequalities",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0222"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "A、B为n阶实对称矩阵，采用特征值从大到小排序。给出A+B的特征值与A、B特征值之间的Weyl上下界。",
                  "solution": "特征值按降序排列。i+j-1≤n时，$\\lambda_{i+j-1}(A+B)\\le\\lambda_i(A)+\\lambda_j(B)$；i+j-n≥1时，$\\lambda_{i+j-n}(A+B)\\ge\\lambda_i(A)+\\lambda_j(B)$。特别地，各特征值介于$\\lambda_{\\min}(A)+\\lambda_{\\min}(B)$与$\\lambda_{\\max}(A)+\\lambda_{\\max}(B)$之间。",
                  "title": "Weyl不等式",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "线性代数",
                    "矩阵分析"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "线性代数",
              "note": "向量、矩阵、特征分解与矩阵分解支撑协方差分析、主成分分析、回归及蒙特卡洛相关模拟，是量化研究的常用工具。"
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "微积分与线性代数",
          "blurb": "极限、导数、积分、常微分方程与矩阵代数，构成定价和风险分析的数学工具。"
        }
      }
    },
    {
      "num": 4,
      "title": "Probability Theory",
      "blurb": "Combinatorics, conditional probability and Bayes, distributions, expectation/variance, and order statistics — the heart of quant interviews.",
      "topics": [
        {
          "id": "4.1",
          "title": "Basic Probability & Set Operations",
          "note": "Lean on **symmetry** and on identifying the right **events**. Often the elegant solution counts mutually exclusive, symmetric events instead of grinding through formulas.",
          "problems": [
            {
              "title": "Coin Toss Game",
              "difficulty": "medium",
              "tags": [
                "symmetry",
                "probability"
              ],
              "statement": "A tosses $n+1$ fair coins and B tosses $n$ fair coins, all independently. What is the probability that A gets strictly more heads than B?",
              "hint": "Remove one coin from A so both have $n$ coins and the situation is symmetric. What can happen with A's extra coin?",
              "solution": "**The setup looks lopsided** (A has an extra coin), so summing binomial probabilities would be ugly. Instead, hide the extra coin and exploit symmetry.\n\n**Step 1 — make it symmetric.** Set A's extra coin aside, so A and B each flip $n$ coins. Comparing those, exactly one of three things happens:\n- $E_1$: A leads, $E_2$: they tie, $E_3$: B leads.\n\nSince A and B are now identical, $P(E_1) = P(E_3)$. Call that $y$ each, and let $P(E_2) = x$. They sum to 1: $\\;2y + x = 1$.\n\n**Step 2 — bring back the extra coin** and ask when A ends up *strictly ahead overall*:\n- If A was **already leading** ($E_1$, prob $y$): A wins no matter what the extra coin does.\n- If they were **tied** ($E_2$, prob $x$): the extra coin breaks the tie in A's favor exactly half the time → contributes $x/2$.\n- If A was **behind** ($E_3$): one extra head can at best tie, never overtake → contributes 0.\n\n**Step 3 — add up:**\n$$P(\\text{A wins}) = y + \\tfrac{x}{2} = y + \\tfrac{1}{2}(1 - 2y) = \\tfrac{1}{2}.$$\n\n**Exactly $\\tfrac12$ — and notice $n$ never appeared.** The extra coin is precisely what's needed to overcome A's disadvantage of having to *strictly* beat B.",
              "keyIdea": "Strip away the asymmetry (the extra coin) to expose a symmetric core, then let the tie-breaking coin do the rest. The clean answer $1/2$ falls out without summing binomials.",
              "id": "4.1:coin-toss-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:coin-toss-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.1 / Coin Toss Game"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0099"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "A独立抛n+1枚公平硬币，B独立抛n枚公平硬币，全部抛掷独立。求A的正面个数严格大于B的概率。",
                  "title": "多一枚硬币",
                  "solution": "先藏起A的一枚硬币，两人各抛n枚，A领先与落后的概率均为y，打平为x，则2y+x=1。添回A的独立公平硬币，已领先必胜，打平有一半变胜，落后最多追平，故胜率y+x/2=1/2。",
                  "hint": "移去A多的一枚，先利用两边对称性。",
                  "keyIdea": "对称主体加一个独立的平局打破机制。",
                  "tags": [
                    "对称性",
                    "概率"
                  ]
                }
              }
            },
            {
              "title": "Card Game",
              "difficulty": "medium",
              "tags": [
                "symmetry",
                "expected value",
                "counting",
                "probability",
                "expectation"
              ],
              "statement": "You and a dealer each draw one card without replacement from a uniformly shuffled standard 52-card deck. Ranks run from A=1 to K=13, and ties are not wins. What is your probability of winning?",
              "hint": "Compare three symmetric events: your card higher, equal, or lower than the dealer's.",
              "solution": "By symmetry, winning and losing have equal probability. After your draw, 3 of the remaining 51 cards have the same rank, so the tie probability is $3/51=1/17$. Thus $P(\\text{win})=(1-1/17)/2=8/17$.",
              "keyIdea": "Symmetry between 'you higher' and 'dealer higher' reduces the problem to computing the tie probability $3/51$.",
              "id": "4.1:card-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:card-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.1 / Card Game"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0102"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "均匀洗匀52张无大小王牌，你和庄家不放回各取一张，按A=1至K=13比较点数，同点不算赢。求你获胜的概率。",
                  "title": "单牌比大小",
                  "solution": "胜负对称，平局概率为3/51=1/17，因此获胜概率(1-1/17)/2=8/17。",
                  "hint": "将结果分为高于、等于、低于庄家三类。",
                  "keyIdea": "对称性将问题归约为平局概率。",
                  "tags": [
                    "对称性",
                    "期望",
                    "计数",
                    "概率",
                    "期望"
                  ]
                }
              }
            },
            {
              "title": "Drunk Passenger",
              "difficulty": "hard",
              "tags": [
                "symmetry",
                "recursion"
              ],
              "statement": "100 passengers board a plane with 100 assigned seats. The first (drunk) passenger sits in a uniformly random seat. Each later passenger takes their own seat if free, otherwise a random free seat. What is the probability that the **last** passenger gets their own seat (#100)?",
              "hint": "Focus only on seats #1 and #100. By symmetry, which gets taken first?",
              "solution": "**The clever reframing:** ignore all 98 people in the middle and watch only **two special seats** — seat #1 (the drunk's own seat) and seat #100 (the last passenger's seat). The whole drama is decided by which of these two gets taken first.\n\nWhy those two? Trace what happens to the last passenger:\n- If **seat #100** gets occupied at some point before they board, they're out of luck — displaced.\n- If **seat #1** gets occupied first, then everyone else could sit in their own seat, and #100 is guaranteed free for the last passenger.\n\nSo the last passenger gets their seat **iff seat #1 is taken before seat #100**.\n\nNow the symmetry: every time *anyone* sits randomly (the drunk, or a later displaced passenger), seats #1 and #100 are just two of the available options with **equal** chance of being picked. Neither is ever favored over the other. So whichever gets grabbed first is a coin flip:\n$$P(\\text{last passenger gets seat \\#100}) = \\tfrac{1}{2}.$$\n\nStriking detail: this is $\\tfrac12$ whether there are 100 passengers or 2 — the count never matters.",
              "keyIdea": "Collapse a 100-step process to a race between two equally-likely seats. Symmetry gives $1/2$ with no recursion needed.",
              "id": "4.1:drunk-passenger",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:drunk-passenger",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.1 / Drunk Passenger"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "醉汉登机",
                  "statement": "100名乘客各有指定座位。第一人随机坐一座；之后每人若自己的座位空着就坐下，否则在剩余空座中随机选。最后一人坐到100号座的概率？",
                  "solution": "只看1号与100号座何者先被随机占用。若1号先被占，此后错位链结束，100号保留给最后一人；若100号先占则失败。每次随机选择对这两个空座对称，因此概率1/2，人数换成任意至少2人也一样。",
                  "hint": "只关注1号与100号两个特殊座位。",
                  "keyIdea": "把复杂错位过程压缩成两个对称座位的竞争。",
                  "tags": [
                    "对称性",
                    "递归"
                  ]
                }
              }
            },
            {
              "title": "N Points on a Circle",
              "difficulty": "hard",
              "tags": [
                "geometry",
                "mutually exclusive events"
              ],
              "statement": "$N$ points are drawn uniformly at random on the circumference of a circle. What is the probability that all $N$ points lie within some **semicircle**?",
              "hint": "Consider the event that, starting from point $n$ and going clockwise, all other points fall in the clockwise semicircle. Are these events (over the starting point) mutually exclusive?",
              "solution": "**The reframing:** \"all points fit in *some* semicircle\" is vague — there are infinitely many semicircles. Pin it down: if they all fit in one, there's a unique **leading** point — the one such that all the others lie in the half-circle *clockwise* from it.\n\nLabel the points $1,\\dots,N$ and define $E_i$ = \"point $i$ is that leading point\", i.e. the other $N-1$ points all fall in the semicircle starting at $i$ and going clockwise.\n\n**Probability of one $E_i$:** fix point $i$; each of the other $N-1$ points independently has a $\\tfrac12$ chance of landing in that specific semicircle, so\n$$P(E_i) = \\left(\\tfrac12\\right)^{N-1}.$$\n\n**Why we can just add them:** the $E_i$ are **mutually exclusive** — there can be only *one* leading point, so no two $E_i$ happen together. That means no messy overlap corrections:\n$$P(\\text{all in a semicircle}) = \\sum_{i=1}^{N} P(E_i) = N \\cdot \\frac{1}{2^{N-1}} = \\frac{N}{2^{N-1}}.$$\n\n*(Same logic for an arc that's a fraction $x \\le \\tfrac12$ of the circle gives $N x^{N-1}$.)*",
              "keyIdea": "Define one event per 'leading' point; mutual exclusivity lets you simply add probabilities instead of using inclusion–exclusion.",
              "id": "4.1:n-points-on-a-circle",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:n-points-on-a-circle",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.1 / N Points on a Circle"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "圆周半圆覆盖",
                  "statement": "圆周上独立均匀取N个点，它们全落在某个半圆内的概率？",
                  "solution": "令Eᵢ为其余N-1个点均落在以点i为起点的顺时针半圆内。$P(E_i)=2^{-(N-1)}$。除零概率的重合或对径情形外，这些起点事件互斥，故概率为$N/2^{N-1}$。对占圆周比例x≤1/2的弧，同理为$Nx^{N-1}$。",
                  "hint": "固定一个点作覆盖半圆的起点，考察这些事件是否互斥。",
                  "keyIdea": "给连续的覆盖问题指定唯一领先点。",
                  "tags": [
                    "几何",
                    "互斥事件"
                  ]
                }
              }
            },
            {
              "id": "4.1:simulated-annealing",
              "title": "Simulated Annealing",
              "difficulty": "medium",
              "tags": [
                "mathematics"
              ],
              "statement": "State the Metropolis acceptance probability when minimizing an objective. Explain how temperature and the cooling schedule affect escaping local minima and convergence.",
              "hint": "",
              "solution": "For objective increase $\\Delta E$ and temperature $T>0$, accept with probability $\\min(1,e^{-\\Delta E/T})$. High temperature permits uphill moves and helps escape local minima. Cooling makes the search more selective; rapid cooling can trap it, while convergence guarantees require appropriate assumptions and a sufficiently slow schedule.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:simulated-annealing",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0034"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "写出模拟退火最小化目标函数时的Metropolis接受概率，解释温度和冷却计划对跳出局部极小值及收敛的影响。",
                  "solution": "目标增量ΔE、温度T>0时，接受概率min(1,exp(-ΔE/T))。高温允许接受较差解以跳出局部极小；降温使搜索更保守。过快冷却会陷入局部最优，收敛保证还需模型条件及足够慢的冷却计划。",
                  "title": "模拟退火",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "数学"
                  ]
                }
              }
            },
            {
              "id": "4.1:alternating-coin-tosses",
              "title": "Alternating Coin Tosses",
              "difficulty": "easy",
              "tags": [
                "probability",
                "recurrences"
              ],
              "statement": "A and B alternately toss a fair coin independently, with A first. The first head wins. Find A's winning probability.",
              "hint": "",
              "solution": "Let $p$ be A's winning probability. Both players failing restarts the game, giving $p=1/2+(1/4)p$, so $p=2/3$. The probability of failing forever is zero.",
              "keyIdea": "Restart probability 1/4; Set up the recurrence; Probability 2/3",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.1:alternating-coin-tosses",
              "rubric": [
                "Restart probability 1/4",
                "Set up the recurrence",
                "Probability 2/3"
              ],
              "verification": [
                "Sum the geometric series $\\sum_{k\\ge0}(1/4)^k/2=2/3$."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0069"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "A、B 轮流独立抛公平硬币，A 先抛，先得到正面者胜。求 A 胜率。",
                  "solution": "令 p 为 A 胜率，一轮 A、B 均失败后重启，p=1/2+(1/4)p，所以 p=2/3。双方均永远失败概率为零。",
                  "keyIdea": "重启事件概率 1/4；方程；2/3",
                  "title": "轮流抛币",
                  "hint": "",
                  "tags": [
                    "概率",
                    "递推"
                  ]
                }
              }
            },
            {
              "id": "4.1:six-sevenths-game",
              "title": "Six-Sevenths Game",
              "difficulty": "easy",
              "tags": [
                "probability",
                "construction",
                "expectation and variance"
              ],
              "statement": "Using independent fair six-sided dice and allowing rerolls, design an almost-surely terminating game with winning probability $6/7$.",
              "hint": "",
              "solution": "Roll two dice per round. Fix a partition of the 36 ordered outcomes into 24 wins, 4 losses, and 8 rerolls. The eventual win probability is $24/(24+4)=6/7$. The restart probability is $2/9$, so termination is almost sure.",
              "keyIdea": "Specify the outcome partition; Obtain 6/7 by conditioning or recurrence; Prove termination",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.1:six-sevenths-game",
              "rubric": [
                "Specify the outcome partition",
                "Obtain 6/7 by conditioning or recurrence",
                "Prove termination"
              ],
              "verification": [
                "Solve $p=24/36+(8/36)p$."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0070"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "使用独立公平六面骰，允许重掷，设计几乎必然终止且获胜概率为 6/7 的游戏。",
                  "solution": "每轮掷两枚骰，把 36 个有序结果固定划分成 24 个赢、4 个输、8 个重来。最终赢率 24/(24+4)=6/7，每轮重来概率 2/9，因此几乎必然终止。",
                  "keyIdea": "明确结果划分；条件化或递推得到 6/7；终止性",
                  "title": "七分之六游戏",
                  "hint": "",
                  "tags": [
                    "概率",
                    "构造",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.1:sharpe-loss-probability",
              "title": "Sharpe Loss Probability",
              "difficulty": "easy",
              "tags": [
                "expectation",
                "expectation and variance"
              ],
              "statement": "Quarterly net returns are iid normal and the risk-free return is zero. The annualized Sharpe ratio, computed by square-root-of-time scaling, is 4. Find the probability of a negative quarterly return.",
              "hint": "",
              "solution": "The quarterly Sharpe ratio is $4/\\sqrt4=2$. Under the normal assumption, $P(R_q<0)=\\Phi(-2)\\approx0.0228$, about 2.28%.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:sharpe-loss-probability",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0088"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "假设季度净收益独立同分布且正态、无风险收益为0，年化Sharpe按均值和标准差的平方根时间法则折算且等于4。求季度收益为负的概率。",
                  "solution": "在收益率独立同分布且服从正态分布的假设下，年化 Sharpe 为 4，则季度 Sharpe 为 4 / sqrt(4) = 2。因为季度收益 R_q 近似服从正态分布，所以季度亏损概率是 P(R_q<0)=Φ(-2)≈0.0228，也就是约 2.28%。",
                  "title": "Sharpe亏损概率",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.1:ordered-sixes",
              "title": "Ordered Sixes",
              "difficulty": "medium",
              "tags": [
                "probability"
              ],
              "statement": "A, B, and C repeatedly roll a fair die in order ABCABC.... Find the probability that the first three occurrences of six are rolled by A, B, and C, respectively.",
              "hint": "",
              "solution": "Starting with A, the probability that A rolls the next six is $(1/6)/(1-(5/6)^3)=36/91$. After that six, play starts with B, and after B's six with C. The same conditional probability applies each time, so the answer is $(36/91)^3$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:ordered-sixes",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0090"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "三个玩家 A、B、C 按照 `ABCABC...` 的顺序轮流掷一个公平骰子。求：A 第一个掷出 6、B 第二个掷出 6、C 第三个掷出 6 的概率。",
                  "solution": "A 先于 B、C 第一个掷出 6 的概率是 1/6 / (1-(5/6)^3) = 36/91。之后从 B 开始同理，B 第二个掷出 6 的条件概率也是 36/91；再从 C 开始，C 第三个掷出 6 的条件概率也是 36/91。所以总概率是 (36/91)^3。",
                  "title": "顺序掷六",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率"
                  ]
                }
              }
            },
            {
              "id": "4.1:geometric-tail",
              "title": "Geometric Tail",
              "difficulty": "easy",
              "tags": [
                "probability",
                "stochastic processes"
              ],
              "statement": "Independently toss a coin with head probability $p\\in(0,1)$. Let $N$ be the toss number of the first head. For an integer $m\\ge0$, find $P(N>m)$.",
              "hint": "",
              "solution": "The event $N>m$ means the first $m$ tosses are all tails. Independence gives $(1-p)^m$, including 1 when $m=0$.",
              "keyIdea": "Geometric distribution starts at 1; First m tosses all fail; Check m=0",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.1:geometric-tail",
              "rubric": [
                "Geometric distribution starts at 1",
                "First m tosses all fail",
                "Check m=0"
              ],
              "verification": [
                "Multiply independent failure probabilities."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0095"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "独立抛正面概率 p∈(0,1) 的硬币，N 为首次正面所在的抛掷次数。对整数 m≥0 求 P(N>m)。",
                  "solution": "N>m 等价于前 m 次全反面，独立性给出 (1-p)^m。m=0 时为1。",
                  "keyIdea": "几何分布从1起算；前m次全失败；m=0",
                  "title": "几何分布尾部",
                  "hint": "",
                  "tags": [
                    "概率",
                    "随机过程"
                  ]
                }
              }
            },
            {
              "id": "4.1:two-round-heads",
              "title": "Two-Round Heads",
              "difficulty": "easy",
              "tags": [
                "probability",
                "distributions",
                "expectation and variance"
              ],
              "statement": "Toss $n$ coins independently, each with head probability $p$. Toss only the first-round heads once more, independently. What is the distribution of the number of heads obtained in the second round?",
              "hint": "",
              "solution": "For coin $i$, let $I_i$ indicate heads in both rounds. These indicators are iid Bernoulli$(p^2)$, so the second-round count is Binomial$(n,p^2)$. First-round heads are not included in this count.",
              "keyIdea": "Both-round probability p²; Independence across coins; Binomial distribution",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.1:two-round-heads",
              "rubric": [
                "Both-round probability p²",
                "Independence across coins",
                "Binomial distribution"
              ],
              "verification": [
                "Sum independent Bernoulli indicators."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0096"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "第一轮独立抛 n 枚正面概率 p 的硬币，只对第一轮正面的硬币独立再抛一次。第二轮新增正面数服从什么分布？",
                  "solution": "令 I_i 表示第 i 枚两轮均正面，I_i iid Bernoulli(p²)，故新增数 ∑I_i~Binomial(n,p²)。这里不包括第一轮已得到的正面数。",
                  "keyIdea": "两轮均正面的概率 p²；跨硬币独立；二项分布",
                  "title": "两轮正面",
                  "hint": "",
                  "tags": [
                    "概率",
                    "分布",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.1:candy-collection",
              "title": "Candy Collection",
              "difficulty": "medium",
              "tags": [
                "probability",
                "combinatorial counting",
                "expectation and variance",
                "combinatorial probability"
              ],
              "statement": "A jar contains 10 red, 20 blue, and 30 green candies. Draw uniformly without replacement until all red candies have been drawn. What is the probability that at least one blue and one green candy have already been drawn?",
              "hint": "",
              "solution": "Let $A$ mean no blue has been drawn. All 10 reds must precede all 20 blues in their relative order, so $P(A)=1/\\binom{30}{10}$. Likewise $P(B)=1/\\binom{40}{10}$ for no green, and $P(A\\cap B)=1/\\binom{60}{10}$. Inclusion-exclusion gives $1-1/\\binom{30}{10}-1/\\binom{40}{10}+1/\\binom{60}{10}$.",
              "keyIdea": "Use complementary events; Uniform relative order; Inclusion-exclusion",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.3:candies-in-a-jar",
              "rubric": [
                "Use complementary events",
                "Uniform relative order",
                "Inclusion-exclusion"
              ],
              "verification": [
                "Count red positions in the red-blue, red-green, and full sequences."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0111"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "罐中有10红糖、20蓝糖、30绿糖，每次等概率不放回取一颗，直到红糖全取完。求此时至少取过一蓝糖和一绿糖的概率。",
                  "solution": "令 A 为没有取到蓝糖，意味着在红蓝30颗的相对次序中全部10红都先于20蓝，P(A)=1/C(30,10)。同理 P(B)=1/C(40,10)，P(A∩B)=1/C(60,10)。答案 1-1/C(30,10)-1/C(40,10)+1/C(60,10)。",
                  "keyIdea": "补事件；相对次序等概率；容斥",
                  "title": "糖果已取事件",
                  "hint": "",
                  "tags": [
                    "概率",
                    "组合计数",
                    "期望与方差",
                    "组合概率"
                  ]
                }
              }
            },
            {
              "id": "4.1:poisson-waiting-time",
              "title": "Poisson Waiting Time",
              "difficulty": "easy",
              "tags": [
                "probability",
                "expectation",
                "stochastic processes",
                "expectation and variance"
              ],
              "statement": "In a homogeneous Poisson process with rate $\\lambda>0$, start at an event time and wait for the next event. Find the waiting-time distribution and its expectation.",
              "hint": "",
              "solution": "The waiting time is exponential with rate $\\lambda$, survival function $e^{-\\lambda t}$ for $t\\ge0$, and mean $1/\\lambda$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:poisson-waiting-time",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0117"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对速率λ>0的齐次泊松过程，从一个事件发生时刻起等待下一个事件，等待时间的分布与期望是多少？",
                  "solution": "对泊松过程，剩余寿命仍服从参数 λ 的指数分布，所以期望是 1/λ。",
                  "title": "泊松等待",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "随机过程",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.1:conditional-gaussian",
              "title": "Conditional Gaussian",
              "difficulty": "medium",
              "tags": [
                "probability",
                "conditional probability",
                "normal distribution",
                "expectation and variance"
              ],
              "statement": "Let $X,Y$ be independent standard normal variables. Find the regular conditional distribution of $X$ given $X+Y=1$, including its mean and variance.",
              "hint": "",
              "solution": "Set $S=X+Y$. Then $\\operatorname{Var}(S)=2$ and $\\operatorname{Cov}(X,S)=1$. Joint normality gives $X\\mid S=s\\sim N(s/2,1/2)$. At $s=1$, both the mean and variance are $1/2$. Since the conditioning event has probability zero, interpret this through a regular conditional distribution or conditional density.",
              "keyIdea": "Joint normality; Mean 1/2; Variance 1/2; Explain zero-probability conditioning",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.1:conditional-gaussian",
              "rubric": [
                "Joint normality",
                "Mean 1/2",
                "Variance 1/2",
                "Explain zero-probability conditioning"
              ],
              "verification": [
                "Use the conditional-normal formula or the independent coordinates $(X+Y)/\\sqrt2$ and $(X-Y)/\\sqrt2$."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0123"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "X、Y 独立标准正态，求 X 在 X+Y=1 条件下的正则条件分布及均值、方差。",
                  "solution": "令 S=X+Y，Var(S)=2，Cov(X,S)=1。联合正态的条件分布 X|S=s~N(s/2,1/2)，取s=1得均值1/2、方差1/2。事件概率为零，应按正则条件分布/条件密度理解。",
                  "keyIdea": "联合正态；均值1/2；方差1/2；零概率条件的解释",
                  "title": "条件正态",
                  "hint": "",
                  "tags": [
                    "概率",
                    "条件概率",
                    "正态分布",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.1:points-in-a-semicircle",
              "title": "Points in a Semicircle",
              "difficulty": "medium",
              "tags": [
                "probability",
                "expectation",
                "geometric probability",
                "expectation and variance"
              ],
              "statement": "Choose $N\\ge1$ points independently and uniformly on a circle. What is the probability that some semicircle contains them all?",
              "hint": "",
              "solution": "The probability is $N/2^{N-1}$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:points-in-a-hemisphere",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0128"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在圆周独立均匀取N≥1个点，求存在一个半圆包含全部点的概率。",
                  "solution": "经典结果是 N / 2^(N-1)。",
                  "title": "半圆覆盖",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "几何概率",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.1:two-urns",
              "title": "Two Urns",
              "difficulty": "medium",
              "tags": [
                "probability",
                "combinatorial counting",
                "combinatorial probability"
              ],
              "statement": "Distribute 100 red and 100 black balls between two nonempty urns. Choose an urn uniformly, then a ball uniformly from it. Minimize the probability of drawing red.",
              "hint": "",
              "solution": "Place one black ball alone in one urn and all other balls in the other. The red probability is $\\tfrac12\\cdot0+\\tfrac12\\cdot100/199=50/199$. To see the lower bound, let an urn of size $s\\le100$ contain $r$ reds. The sum of red fractions is $r/s+(100-r)/(200-s)$, increasing in $r$, so it is at least $100/(200-s)\\ge100/199$. Equality holds at $s=1,r=0$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:two-urns",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0133"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "100红球与100黑球分配到两个非空罐，先等概率选罐，再从该罐等概率取球。怎样分配使取红球概率最小？",
                  "solution": "一罐只放1个黑球，另一罐放其余199球，取红概率为$\\tfrac12\\cdot100/199=50/199$。证明下界：设较小罐有s≤100球，其中r红，两罐红球比例之和为r/s+(100-r)/(200-s)，随r递增，故至少100/(200-s)≥100/199。s=1、r=0取等号。",
                  "title": "双罐分球",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "组合计数",
                    "组合概率"
                  ]
                }
              }
            },
            {
              "id": "4.1:triangle-regression",
              "title": "Triangle Regression",
              "difficulty": "hard",
              "tags": [
                "statistics",
                "linear regression",
                "geometric probability"
              ],
              "statement": "Let $(X,Y)$ be uniform on the triangle with vertices $(0,1),(1,0),(1,1)$. Find the population $R^2$ when regressing $Y$ on $X$ with an intercept.",
              "hint": "",
              "solution": "The density is 2. Integration gives $E[X]=E[Y]=2/3$, $\\operatorname{Var}(X)=\\operatorname{Var}(Y)=1/18$, $E[XY]=5/12$, and covariance $-1/36$. Hence $\\rho=-1/2$ and the population simple-regression $R^2=\\rho^2=1/4$.",
              "keyIdea": "Uniform density 2; Compute the moments; Population R² equals squared correlation with an intercept",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.1:coefficient-of-determination",
              "rubric": [
                "Uniform density 2",
                "Compute the moments",
                "Population R² equals squared correlation with an intercept"
              ],
              "verification": [
                "Integrate over $0\\le x\\le1$, $1-x\\le y\\le1$."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0139"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "(X,Y) 在顶点为 (0,1)、(1,0)、(1,1) 的三角形内均匀分布。以带截距的总体线性回归拟合 Y 对 X，求 R²。",
                  "solution": "密度为2，E[X]=E[Y]=2/3，Var(X)=Var(Y)=1/18，E[XY]=5/12，Cov=-1/36。相关系数=-1/2，带截距一元回归总体 R²=ρ²=1/4。",
                  "keyIdea": "均匀密度2；矩计算；总体带截距 R²=ρ²",
                  "title": "三角域回归",
                  "hint": "",
                  "tags": [
                    "统计",
                    "线性回归",
                    "几何概率"
                  ]
                }
              }
            },
            {
              "id": "4.1:uniform-dice-sum",
              "title": "Uniform Dice Sum",
              "difficulty": "hard",
              "tags": [
                "probability",
                "combinatorial counting",
                "combinatorics",
                "dice"
              ],
              "statement": "Prove that no choice of face probabilities for two independent ordinary six-sided dice makes their sum uniform on 2 through 12.",
              "hint": "",
              "solution": "Factor an $x$ from each probability generating function, leaving real degree-five polynomials $P,Q$. Uniformity would require $P(x)Q(x)=(1+x+\\cdots+x^{10})/11$. Each real polynomial of odd degree has a real root. But $1+x+\\cdots+x^{10}$ has no real root: its roots are the nontrivial eleventh roots of unity. This is a contradiction.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:uniform-dice-sum",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0141"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "证明：无法仅通过重新设置两个普通六面骰各面的概率权重，使得点数和在 `2` 到 `12` 之间每个值都等概率出现。",
                  "solution": "两枚独立骰子的概率母函数各提出因子x，余下均为实系数五次多项式P、Q。若和均匀，则$P(x)Q(x)=(1+x+\\cdots+x^{10})/11$。实系数奇次多项式必有实根，但右侧的根都是非平凡11次单位根，没有实根，矛盾。",
                  "title": "均匀骰和",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "组合计数",
                    "组合数学",
                    "骰子"
                  ]
                }
              }
            },
            {
              "id": "4.1:floor-comparison",
              "title": "Floor Comparison",
              "difficulty": "hard",
              "tags": [
                "probability",
                "optimization",
                "number theory"
              ],
              "statement": "Let $Y\\sim U(0,100)$. Choose $X>0$ to maximize $P(\\lfloor(100-X)/Y\\rfloor>\\lfloor(100-Y)/X\\rfloor)$.",
              "hint": "",
              "solution": "Partition the $(X,Y)$ plane at the jump boundaries of the two floor functions, then compare the lengths of the admissible Y-intervals for each X. The current outline does not contain a completed derivation or a verified maximizing value.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:floor-comparison",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0168"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "设 `Y ~ U(0,100)`，求 `X>0`，使得 `P(\\lfloor(100-X)/Y\\rfloor > \\lfloor(100-Y)/X\\rfloor)` 最大。",
                  "solution": "按两个floor函数的跳点对(X,Y)平面分区，对每个X计算满足不等式的Y区间总长度并优化。当前仅有方法提纲，尚无完整推导或已核验的最优值。",
                  "title": "取整概率优化",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "优化",
                    "数论"
                  ]
                }
              }
            },
            {
              "id": "4.1:domineering",
              "title": "Domineering",
              "difficulty": "hard",
              "tags": [
                "game theory",
                "combinatorial counting",
                "recurrences",
                "combinatorics"
              ],
              "statement": "On a $2\\times n$ board, A moves first and may place only horizontal $1\\times2$ dominoes; B may place only vertical $2\\times1$ dominoes. Dominoes cannot overlap. A player unable to move loses. For which $n$ does A have a winning strategy?",
              "hint": "Partition the board into vertical strips. Prove that a width-4 strip is a horizontal-player win regardless of who starts; then investigate the special width-13 position with an exact search.",
              "solution": "### Result\nFor every positive integer $n$,\n$$\\boxed{\\text{A wins moving first}\\iff n\\notin\\{1,5,9,13\\}.}$$\nIn particular, the answer is not determined by parity. This solution gives explicit strategies for the infinite families and uses a complete finite game-tree calculation for the exceptional cases and the $2\\times13$ base position. The computational step is stated explicitly below.\n\n### 1. A response strategy for sums of blocks\nDraw imaginary vertical cuts between columns. B's vertical domino can never cross a cut. A voluntarily avoids crossing cuts, so play can be treated as a sum of independent blocks.\n\nSuppose A makes one opening move in a chosen block that leaves B in a losing position there, and every other block is also winning for A when B moves first. Whenever B plays in a block, A responds in that same block using its winning strategy. Such a response must exist: otherwise B's move would have won that local game. After A's reply, every block again has a position from which B loses moving first. The board is finite, so eventually B has no legal move. A never needs to cross a cut; extra available horizontal moves cannot invalidate this strategy.\n\n### 2. Elementary blocks of widths 2, 3, and 4\nNumber rows top/bottom and columns from 1.\n\n- **Width 2, A starts:** A fills the top row; B has no legal vertical move.\n- **Width 3, A starts:** A fills top cells 1–2. If B moves in this block, B must fill column 3; A then fills bottom cells 1–2. B is out of moves.\n- **Width 4, A starts:** A fills top cells 2–3. If B fills column 1, A fills bottom cells 3–4; if B fills column 4, A fills bottom cells 1–2. In either case B has no move.\n- **Width 4, B starts:** if B fills column 1 or 4, the remaining three columns form the preceding width-3 position with A to move. If B fills column 2, A fills top cells 3–4, leaving no full empty column; column 3 is symmetric. Thus A wins on a width-4 block regardless of who starts.\n\nIt follows by the block-response strategy that A wins for $n=4k$ ($k\\ge1$), $n=4k+2$, and $n=4k+3$ ($k\\ge0$). Use width-4 blocks, with one initial width-2 or width-3 block when needed.\n\n### 3. The width-13 base and the remaining family\nA $2\\times13$ board is a **second-player win**: A loses if A starts, while B loses if B starts. This fact needs verification; it does not follow merely from symmetry or from the board's odd width. The exact search in the next section proves both assertions by enumerating legal continuations.\n\nFor $n\\equiv1\\pmod4$ and $n\\ge17$, write\n$$n=13+4k,\\qquad k\\ge1.$$\nSplit into one width-13 block and $k$ width-4 blocks. A opens in a width-4 block using top cells 2–3. All blocks are now winning for A with B to move: untouched width-4 blocks are always A-wins, and the width-13 block is a second-player win. Apply the same-block response strategy. This proves A wins for every such $n$, including 17, 21, 25, and all larger widths in that residue class.\n\n### 4. Exact verification of the finite bases\nFor occupied-cell set $S$ and next player $p$, define $W(S,p)$ to mean that the player about to move can force a win. With $M_p(S)$ the legal domino placements,\n$$W(S,p)=\\bigvee_{d\\in M_p(S)}\\neg W(S\\cup d,1-p).$$\nAn empty disjunction is false: a player with no move loses. Each move occupies two new cells, so induction on the number of empty cells proves this recursion exact and terminating. Both the occupied cells **and the next player** belong in the memoization key. Ordinary impartial-game Nim rules do not apply because the players have different legal moves.\n\nThe following standalone Python code performs the full search, with memoization and short-circuit evaluation but no heuristic pruning. In the returned pair, the first Boolean means A wins when A starts; the second means **B** wins when B starts.\n\n```python\nfrom functools import lru_cache\n\n\ndef solve(n):\n    # Bit c is the top cell of column c; bit n+c is the bottom cell.\n    horizontal = tuple(3 << c for c in range(n - 1)) + tuple(\n        (3 << c) << n for c in range(n - 1)\n    )\n    vertical = tuple((1 << c) | (1 << (n + c)) for c in range(n))\n    moves = (horizontal, vertical)  # 0 = A, 1 = B\n\n    @lru_cache(None)\n    def win(occupied, turn):\n        # No legal move means False, including when empty at n=1 for A.\n        return any(\n            occupied & tile == 0 and not win(occupied | tile, 1 - turn)\n            for tile in moves[turn]\n        )\n\n    return win(0, 0), win(0, 1)\n\n\nfor n in range(1, 14):\n    a_first, b_first = solve(n)\n    assert a_first == (n not in {1, 5, 9, 13})\n    if n == 4:\n        assert (a_first, b_first) == (True, False)\n    if n == 13:\n        assert (a_first, b_first) == (False, False)\n    print(n, a_first, b_first)\n```\n\nFor $n=1,5,9,13$, the first Boolean is false, so B has a winning reply against every A opening. At $n=13$ the second Boolean is false as well, certifying the second-player base needed above. For any reached position, a winning strategy is obtained by choosing a legal move whose child has $W=\\mathrm{False}$; recomputing this rule after each opponent move supplies the local responses in the width-13 block. This is a finite, executable strategy, although exhaustive search is exponential and is not proposed as an efficient algorithm for arbitrary $n$.\n\nThe residue-class strategies cover every other positive integer, so the classification is complete. The role of computation is confined to these finite base results; checking a long numerical sequence alone would not prove the infinite claim.\n\n**Reference check:** the [University of Alberta Domineering outcome table](https://webdocs.cs.ualberta.ca/~games/domineering/updated.html), row 2, independently records vertical-player wins at widths 1, 5, 9 and a second-player win at width 13; these imply the same four losses for horizontal-first A. The proof above does not require extrapolating that table.",
              "keyIdea": "The horizontal-first losses are exactly 1, 5, 9, 13. Use width-4 response blocks and width-2/3 openings; for n = 13 + 4k, open in a width-4 block and use the second-player strategy in the width-13 block. The finite width-13 base is certified by exact partizan minimax.",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.1:domineering",
              "rubric": [
                "State the exact horizontal-first losing widths: 1, 5, 9, 13.",
                "Justify same-block responses: vertical moves cannot cross a vertical cut and horizontal may voluntarily restrict moves.",
                "Give explicit width-2/3 openings and prove horizontal wins on width 4 for either starting player.",
                "Certify width 13 is a second-player win with a complete finite search or a valid analytic proof; distinguish the two starting players.",
                "Cover n = 13 + 4k for k >= 1, and distinguish the finite computational bases from the infinite block proof."
              ],
              "verification": [
                "Independently derived and checked explicit width-2/3/4 strategies and the same-block response invariant.",
                "Executed the solution's exact occupied-cell minimax for both starting players through width 13; A-first losses are 1, 5, 9, 13; width 13 is losing for either player to move.",
                "Cross-checked finite base outcome classes against the University of Alberta Domineering table, row 2."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0171"
                },
                {
                  "type": "reference",
                  "reference": "https://webdocs.cs.ualberta.ca/~games/domineering/updated.html",
                  "locator": "Row 2: 1, 5, 9 are V; 13 is a second-player win."
                }
              ],
              "revision": 4,
              "translations": {
                "zh": {
                  "statement": "在 `2×n` 棋盘上进行博弈：A 先手，只能放横着的 `1×2` 骨牌；B 后手，只能放竖着的 `2×1` 骨牌；不能放者输。问哪些 `n` 下 A 有必胜策略？",
                  "solution": "### 结论\n对任意正整数 $n$，\n$$\\boxed{\\text{A 先手必胜}\\iff n\\notin\\{1,5,9,13\\}.}$$\n因此答案不是简单的奇偶规律。下面对无限多种宽度给出分块策略；对少数例外和关键的 $2\\times13$ 基础局面，给出完整博弈树搜索。这是一份明确包含有限计算核验的证明，不把计算结果伪装成直观的对称性结论。\n\n### 1. 分块后的同块应对原则\n在相邻列之间画若干条虚拟竖线。B 的竖骨牌不可能跨线；A 主动承诺不跨线放置，则各块可以独立处理。\n\n假设 A 在某一块先走一步，使该块成为“轮到 B 时 B 必败”的局面，且其余每块也都是“A 后手必胜”。以后 B 在哪一块落子，A 就在同一块按该块的必胜策略应对。A 一定有合法应手，否则 B 刚才那步已经赢了该局部游戏，与局部必胜保证矛盾。A 应对后，每块又都成为轮到 B 时 B 必败的局面。棋盘有限，最终必定是 B 先无棋可下。A 不需要跨线；允许但不用的额外横放选择不会破坏这个策略。\n\n### 2. 宽度为 2、3、4 的基础策略\n每一块都从左至右编号，分为上、下两行。\n\n- **宽 2，A 先手：**A 填满上行，B 无法竖放，立即输。\n- **宽 3，A 先手：**A 占据上行第 1、2 列。若 B 在此块落子，只能占据第 3 列；A 再占下行第 1、2 列，B 无棋可下。\n- **宽 4，A 先手：**A 先占上行第 2、3 列。B 若占第 1 列，A 占下行第 3、4 列；B 若占第 4 列，A 占下行第 1、2 列。两种情况下 B 都再无竖放位置。\n- **宽 4，B 先手：**B 若占第 1 或第 4 列，剩余连续三列就是 A 先手的宽 3 局面。B 若占第 2 列，A 占上行第 3、4 列，此后没有完整空列供 B 竖放；B 占第 3 列的情形左右对称。因此宽 4 时，无论谁先手，A 都能赢。\n\n由同块应对原则，$n=4k$（$k\\ge1$）时全部分成宽 4 的块；$n=4k+2$ 或 $4k+3$（$k\\ge0$）时，另留一块宽 2 或宽 3，并由 A 先在该块落子。三类宽度都能保证 A 获胜。\n\n### 3. 宽 13 的关键性质与最后一类宽度\n$2\\times13$ 棋盘是**后手必胜**：A 先手会输，B 先手也会输。这个性质不能只凭棋盘对称或“宽度为奇数”断言；下一节的精确搜索同时核验这两种先手情形。\n\n当 $n\\equiv1\\pmod4$ 且 $n\\ge17$ 时，写成\n$$n=13+4k,\\qquad k\\ge1.$$\n分为一块宽 13 和 $k$ 块宽 4。A 先在某一宽 4 块的上行第 2、3 列落子。现在每块在轮到 B 时都对 A 有利：宽 4 块无论谁先手都由 A 获胜，宽 13 块则由后手 A 获胜。以后逐块应对即可。于是 17、21、25 以及所有更大的模 4 余 1 的宽度也由 A 必胜。\n\n### 4. 有限基础局面的精确核验\n设 $S$ 是已占格集合，$p$ 是接下来行动的玩家，$W(S,p)$ 表示当前玩家能否强制获胜。记 $M_p(S)$ 为当前玩家的合法骨牌位置集合，则\n$$W(S,p)=\\bigvee_{d\\in M_p(S)}\\neg W(S\\cup d,1-p).$$\n没有合法走法时，空析取为假，即当前玩家输。每步恰好增加两个占格，因此按剩余空格数归纳，这个递推必然终止且精确穷尽所有应对。记忆化键必须同时包含**占格状态和轮到谁**。两人的合法走法不同，不能直接套用无偏博弈的 Nim 异或规则。\n\n以下 Python 代码可以独立运行。它使用记忆化和逻辑短路，但没有启发式剪枝。返回值的第一个布尔量表示“A 先手时 A 能否赢”，第二个表示“B 先手时 **B** 能否赢”。\n\n```python\nfrom functools import lru_cache\n\n\ndef solve(n):\n    # Bit c is the top cell of column c; bit n+c is the bottom cell.\n    horizontal = tuple(3 << c for c in range(n - 1)) + tuple(\n        (3 << c) << n for c in range(n - 1)\n    )\n    vertical = tuple((1 << c) | (1 << (n + c)) for c in range(n))\n    moves = (horizontal, vertical)  # 0 = A, 1 = B\n\n    @lru_cache(None)\n    def win(occupied, turn):\n        # No legal move means False, including when empty at n=1 for A.\n        return any(\n            occupied & tile == 0 and not win(occupied | tile, 1 - turn)\n            for tile in moves[turn]\n        )\n\n    return win(0, 0), win(0, 1)\n\n\nfor n in range(1, 14):\n    a_first, b_first = solve(n)\n    assert a_first == (n not in {1, 5, 9, 13})\n    if n == 4:\n        assert (a_first, b_first) == (True, False)\n    if n == 13:\n        assert (a_first, b_first) == (False, False)\n    print(n, a_first, b_first)\n```\n\n对于 $n=1,5,9,13$，第一个布尔量均为假，说明 B 能应对 A 的所有开局并强制取胜。$n=13$ 时第二个布尔量也是假，核验了上文需要的后手必胜性质。实际走到任一必胜局面时，只需选择一个使对手后继局面 $W=\\mathrm{False}$ 的合法落子；每轮重复此规则，就能执行宽 13 块中的局部应对策略。这是有限、可执行的策略，但穷举复杂度为指数级，不建议用它直接求任意大 $n$。\n\n前面三类余数与 $13+4k$ 的策略覆盖所有其余正整数，故分类完整。计算只承担有限基础局面的核验；单纯观察一串小规模结果，不能替代无限情形的证明。\n\n**外部核对：**[阿尔伯塔大学 Domineering 胜负表](https://webdocs.cs.ualberta.ca/~games/domineering/updated.html)的第 2 行也给出宽 1、5、9 时竖放方必胜、宽 13 时后手必胜，与 A 横放且先手的四个败例一致。上面的无限情形证明不依赖于对该表作外推。",
                  "title": "横竖骨牌博弈",
                  "hint": "沿竖线分块。先证明宽 4 的块无论谁先手都由横放方获胜，再用精确搜索核验宽 13 的特殊局面。",
                  "keyIdea": "A 先手仅在 1、5、9、13 时必败。用宽 4 块逐块应对，宽 2、3 块提供开局；对 n=13+4k，先走宽 4 块，宽 13 块采用后手策略。宽 13 的有限基础结论由带玩家状态的精确极小极大搜索核验。",
                  "tags": [
                    "博弈论",
                    "组合计数",
                    "递推",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "4.1:unlabeled-bins",
              "title": "Unlabeled Bins",
              "difficulty": "hard",
              "tags": [
                "combinatorial counting",
                "counting",
                "combinatorics"
              ],
              "statement": "Place $m$ labeled balls into $N$ indistinguishable bins, allowing empty bins. Count the allocations. Then require at least $k\\ge1$ balls in every bin.",
              "hint": "",
              "solution": "With empty bins allowed, the count is $\\sum_{j=0}^{\\min(m,N)}S(m,j)$, where $S(m,j)$ is a Stirling number of the second kind. If every bin has at least $k$ balls, the count is $m![z^m](e^z-\\sum_{r=0}^{k-1}z^r/r!)^N/N!$. For comparison, labeled bins give $N^m$ without restrictions and $N!S(m,N)$ when every bin is nonempty.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:unlabeled-bins",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0172"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "将m个有标号小球放入N个不可区分的桶，允许空桶。求分配数；再讨论每个桶至少k个球（k≥1）的情形。",
                  "solution": "允许空桶时，数目为$\\sum_{j=0}^{\\min(m,N)}S(m,j)$，S为第二类Stirling数。每桶至少k球时为$\\frac{m!}{N!}[z^m](e^z-\\sum_{r=0}^{k-1}z^r/r!)^N$。对比有标号桶：无约束为Nᵐ，每桶非空为N!S(m,N)。",
                  "title": "无标号桶",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "组合计数",
                    "计数",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "4.1:twelve-counterfeit-balls",
              "title": "Twelve Counterfeit Balls",
              "difficulty": "hard",
              "tags": [
                "logic",
                "information theory",
                "construction"
              ],
              "statement": "Exactly one of 12 balls is counterfeit, but it may be heavier or lighter. Identify it and its type with three balance-scale weighings. More generally, how many balls can be handled with $n$ weighings?",
              "hint": "",
              "solution": "The classic unknown-heavy-or-light problem allows $(3^n-3)/2$ balls without an initially known genuine reference ball, giving 12 for three weighings. A complete adaptive weighing tree is still needed for the concrete 12-ball construction; the count alone is not a solution.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.1:twelve-counterfeit-balls",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0193"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "`12` 个球中有 `1` 个假球，且不知道它更重还是更轻。如何用天平称 `3` 次找出假球并判断轻重？推广：用 `n` 次称重最多可处理多少个球？",
                  "solution": "未知轻重且起初没有正常参照球时，n次称重最多处理(3ⁿ-3)/2个球，三次对应12。具体12球仍须给完整自适应称重树，计数上界本身并不等于构造。",
                  "title": "十二球推广",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "逻辑",
                    "信息论",
                    "构造"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "基础概率与集合运算",
              "note": "善用**对称性**并选择恰当的**事件**。很多简洁解法通过互斥且对称的事件计数，避免繁琐地套用公式。"
            }
          }
        },
        {
          "id": "4.2",
          "title": "Combinatorial Analysis",
          "note": "Counting tools: **permutations** $\\frac{n!}{n_1!\\cdots n_r!}$, **combinations** $\\binom{n}{r}$, the **binomial theorem**, and **inclusion–exclusion** for unions of overlapping events.",
          "problems": [
            {
              "title": "Poker Hands",
              "difficulty": "medium",
              "tags": [
                "combinations",
                "counting",
                "probability",
                "combinatorial counting"
              ],
              "statement": "Draw an unordered five-card hand uniformly from a standard deck without jokers. Find the probabilities of four of a kind, full house, flush excluding straight flush, straight excluding straight flush, straight flush, and two pairs. An ace may be low or high in a straight.",
              "hint": "Total hands = $\\binom{52}{5}$. Build each hand by choosing values first, then suits.",
              "solution": "Total possible hands: $\\binom{52}{5} = 2{,}598{,}960$.\n\n**Four-of-a-kind:** choose the quad's value (13 ways), the 5th card is any of the other 48 → $13 \\times 48 = 624$.\n\n**Full house:** value of the triple (13), suits of the triple $\\binom{4}{3}$, value of the pair (12), suits of the pair $\\binom{4}{2}$:\n$$13 \\times \\binom{4}{3} \\times 12 \\times \\binom{4}{2} = 13 \\times 4 \\times 12 \\times 6 = 3{,}744.$$\n\n**Two pairs:** choose 2 values for the pairs $\\binom{13}{2}$, suits of each pair $\\binom{4}{2}\\binom{4}{2}$, and the 5th card from the remaining $44$ cards:\n$$\\binom{13}{2}\\binom{4}{2}\\binom{4}{2} \\times 44 = 78 \\times 6 \\times 6 \\times 44 = 123{,}552.$$\n\nDivide each by $\\binom{52}{5}$ for probabilities.\n\n**Additional hand counts:** flush excluding straight flush: $4\\binom{13}{5}-40=5108$; straight excluding straight flush: $10\\cdot4^5-40=10200$; straight flush: $10\\cdot4=40$. Divide each by $2{,}598{,}960$.",
              "keyIdea": "Always count in the order 'choose values → choose suits → choose remaining cards', being careful not to double-count the leftover card's value.",
              "id": "4.2:poker-hands",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.2:poker-hands",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Poker Hands"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0143"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "均匀抽取5张无大小王扑克牌，不计顺序。求四条、葫芦、同花（不含同花顺）、顺子（不含同花顺）、同花顺与两对概率；A可在顺子中作低端或高端。",
                  "solution": "总数$\\binom{52}{5}=2598960$。四条：13×48=624；葫芦：$13\\binom43\\cdot12\\binom42=3744$；两对：$\\binom{13}{2}\\binom42^2\\cdot44=123552$；同花但非同花顺：$4\\binom{13}{5}-40=5108$；顺子但非同花顺：$10\\cdot4^5-40=10200$；同花顺：10×4=40。各数除以2598960即概率。",
                  "title": "扑克牌型",
                  "hint": "先选点数，再选花色，最后选剩余单牌。",
                  "keyIdea": "按点数与花色分层计数，避免重复。",
                  "tags": [
                    "组合",
                    "计数",
                    "概率",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "title": "Hopping Rabbit",
              "difficulty": "easy",
              "tags": [
                "recursion",
                "Fibonacci",
                "induction",
                "algorithms",
                "dynamic programming"
              ],
              "statement": "Implement Python function `ways(n)` counting paths up exactly $n\\ge0$ stairs, using steps of size 1 or 2. There is one empty path for zero stairs. Analyze complexity.",
              "hint": "Before the final hop, the rabbit is on stair $n-1$ or $n-2$.",
              "solution": "```python\ndef ways(n):\n    if type(n) is not int or n < 0:\n        raise ValueError('n must be nonnegative')\n    a, b = 1, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n```\n\nThe recurrence is $f_0=f_1=1$, $f_n=f_{n-1}+f_{n-2}$. There are $O(n)$ additions and $O(1)$ integer variables. The answer uses $O(n)$ bits, so bit-space usage is not constant.",
              "keyIdea": "Recurrence and initial values; Implementation; Zero-stair boundary; State the integer complexity model",
              "id": "4.2:hopping-rabbit",
              "kind": "programming",
              "reviewStatus": "verified",
              "familyId": "4.2:hopping-rabbit",
              "rubric": [
                "Recurrence and initial values",
                "Implementation",
                "Zero-stair boundary",
                "State the integer complexity model"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Hopping Rabbit"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0144"
                }
              ],
              "verification": [
                "Classify paths by the last step; small-n enumeration provides a check."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "用 Python 实现 ways(n)，每次跳1或2级，求恰走完 n≥0 级台阶的方法数；约定0级有1种空走法。分析复杂度。",
                  "solution": "```python\ndef ways(n):\n    if type(n) is not int or n < 0:\n        raise ValueError('n must be nonnegative')\n    a, b = 1, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n```\n\nf0=f1=1，fn=f_(n-1)+f_(n-2)。O(n)次加法、O(1)个整数变量；结果整数需要O(n)位，不能说位空间恒定。",
                  "keyIdea": "递推与初值；实现；0级边界；整数复杂度口径",
                  "title": "跳台阶",
                  "hint": "最后一步前只能在n-1或n-2级。",
                  "tags": [
                    "递归",
                    "斐波那契",
                    "归纳",
                    "算法",
                    "动态规划"
                  ]
                }
              }
            },
            {
              "title": "Screwy Pirates 2",
              "difficulty": "hard",
              "tags": [
                "combinations",
                "cryptography",
                "inclusion",
                "combinatorial counting",
                "construction",
                "logic"
              ],
              "statement": "Design locks and key distribution for a chest shared by 11 people so that any six can open it together, but no group of fewer than six can. How many locks and keys are needed?",
              "hint": "Every subgroup of 6 should share a key to some lock that the other 5 pirates don't have.",
              "solution": "**Translate the requirement into locks.** \"Any 5 pirates must be *stuck*\" means: for every group of 5, there's at least one lock **none of them can open**. \"Any 6 can open everything\" means that whenever you add a 6th pirate, that missing key appears.\n\n**Step 1 — one lock per 5-pirate group.** For each possible group of 5 pirates, create a dedicated lock and give its key to the **other 6** pirates (everyone outside that group). Then those 5 are blocked by exactly that lock, but any 6th pirate is outside the group, so they hold the key — the blockade vanishes the moment the group grows to 6.\n\n**Step 2 — count the locks.** One lock per 5-pirate subset of 11:\n$$\\binom{11}{5} = 462 \\text{ locks}.$$\n\n**Step 3 — keys per pirate.** Each lock's key goes to 6 pirates, so there are $462 \\times 6$ key-copies total, shared equally among 11 pirates:\n$$\\frac{462 \\times 6}{11} = 252 \\text{ keys each}.$$\n\n(This is the spirit of Shamir's *How to Share a Secret* — threshold access built from combinatorics.)",
              "keyIdea": "Map each minimal 'forbidden' coalition to a lock; the complement holds its key. Threshold access = a combinatorial design problem.",
              "id": "4.2:screwy-pirates-2",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.2:screwy-pirates-2",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Screwy Pirates 2"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0145"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "宝箱需要加若干把锁，并分发钥匙，使得至少 `11` 个人中的任意 `6` 个人一起时可以打开宝箱，而少于 `6` 个人时一定打不开。应如何设计？",
                  "solution": "对11人中每个5人子集设置一把锁，仅给其余6人钥匙。任意5人都缺对应锁的钥匙；任意6人对每把锁至少有一人持钥匙，因此能打开全部。锁数$\\binom{11}{5}=462$，每把6份钥匙，总2772份，每人252把。",
                  "title": "门限宝箱",
                  "hint": "每个5人子集必须缺至少一把锁的钥匙。",
                  "keyIdea": "将禁止联盟对应到锁，让补集持钥匙。",
                  "tags": [
                    "组合",
                    "密码学",
                    "包含关系",
                    "组合计数",
                    "构造",
                    "逻辑"
                  ]
                }
              }
            },
            {
              "title": "Chess Tournament",
              "difficulty": "medium",
              "tags": [
                "counting",
                "probability",
                "recursion",
                "combinatorial counting"
              ],
              "statement": "Randomly assign $2^n$ players to a fixed single-elimination bracket. The strongest two always beat every other player. For $n\\ge1$, find the probability that they meet in the final.",
              "hint": "For them to meet in the final they must be drawn into different halves of the bracket.",
              "solution": "**The key simplification:** in a knockout bracket, two players can only meet in the *final* if they come from **opposite halves** of the bracket. (The whole field of $2^n$ splits into two halves of $2^{n-1}$; each half produces one finalist.) And since the best player always wins, both player 1 and player 2 will definitely win their own half — so the only question is whether they started in different halves.\n\nSo place player 1 anywhere. Now player 2 lands in one of the remaining $2^n - 1$ slots, of which $2^{n-1}$ sit in the *other* half. Therefore\n$$P(\\text{meet in final}) = \\frac{2^{n-1}}{2^n - 1}.$$\n\nThat's it — no need to track each round. (If you did multiply the round-by-round 'don't meet yet' probabilities, the product telescopes to the same answer.)",
              "keyIdea": "The whole tournament reduces to one question: do the two top players start in different halves? Counting slots beats multiplying round-by-round probabilities.",
              "id": "4.2:chess-tournament",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.2:chess-tournament",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Chess Tournament"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0146"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "2^n名选手随机均匀分配到固定单淘汰签表，实力前二均能必胜其他选手。求前二恰在决赛相遇的概率。n≥1。",
                  "title": "淘汰赛决赛",
                  "solution": "两强均必胜其他人，因此决赛相遇等价于初始在不同半区。固定第一人，第二人在其余2ⁿ-1个位置中均匀分配，其中2ⁿ⁻¹个在另一半区，故概率$2^{n-1}/(2^n-1)$。",
                  "hint": "两强必须分到不同半区。",
                  "keyIdea": "把多轮淘汰归约为初始签位计数。",
                  "tags": [
                    "计数",
                    "概率",
                    "递归",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "title": "Application Letters",
              "difficulty": "medium",
              "tags": [
                "inclusion-exclusion",
                "derangement",
                "probability",
                "combinatorial counting"
              ],
              "statement": "Five distinct letters are delivered to five people by a uniformly random bijection. What is the probability that nobody receives their own letter?",
              "hint": "Use inclusion–exclusion on the events $E_i$ = 'letter $i$ is in the correct envelope.'",
              "solution": "By inclusion-exclusion, the derangement count is $!5=5!\\sum_{k=0}^5(-1)^k/k!=44$. The probability is $44/120=11/30$.",
              "keyIdea": "Uniform bijection; Inclusion-exclusion or derangement recurrence; Probability 11/30",
              "id": "4.2:application-letters",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.2:application-letters",
              "rubric": [
                "Uniform bijection",
                "Inclusion-exclusion or derangement recurrence",
                "Probability 11/30"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Application Letters"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0104"
                }
              ],
              "verification": [
                "Use $D_n=(n-1)(D_{n-1}+D_{n-2})$, with $D_0=1,D_1=0$."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "5封不同的信随机一一投递给5个人，所有5!种对应等可能。求每个人都没拿到自己信的概率。",
                  "solution": "容斥：错排数 !5=5!∑_(k=0)^5(-1)^k/k!=44，所以概率44/120=11/30。",
                  "keyIdea": "一一映射抽样；容斥或错排递推；11/30",
                  "title": "信件错排",
                  "hint": "对每封信投对人的事件使用容斥。",
                  "tags": [
                    "容斥",
                    "错排",
                    "概率",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "title": "Birthday Problem",
              "difficulty": "medium",
              "tags": [
                "counting",
                "complement",
                "probability"
              ],
              "statement": "Assume birthdays are independent and uniform over 365 days, ignoring leap years. What is the smallest group size for which the probability of a shared birthday strictly exceeds one half?",
              "hint": "Compute the complement: the probability everyone's birthday is distinct.",
              "solution": "For $n$ people, the probability **all** birthdays differ is\n$$\\frac{365 \\times 364 \\times \\cdots \\times (365 - n + 1)}{365^n}.$$\nWe want this below $1/2$. Evaluating, $n = 22$ gives ≈ 0.524 (still >½) and $n = 23$ gives ≈ 0.493 (<½). So **23 people** make a shared birthday more likely than not.",
              "keyIdea": "Counting the complementary 'all distinct' event is far easier than the direct event. The surprisingly small answer (23) is the famous birthday paradox.",
              "id": "4.2:birthday-problem",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.2:birthday-problem",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Birthday Problem"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0105"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "假设每人生日独立均匀分布于365天，不计闰年。至少多少人才能使至少两人生日相同的概率严格超过1/2？",
                  "title": "生日碰撞",
                  "solution": "n人生日全不同的概率为$\\prod_{k=0}^{n-1}(365-k)/365$。n=22约0.524，n=23约0.493；首次低于1/2在23人，所以至少两人同生日概率首次超过1/2也在23人。",
                  "hint": "先算所有生日不同的补事件。",
                  "keyIdea": "补事件计数比直接数碰撞简单。",
                  "tags": [
                    "计数",
                    "补事件",
                    "概率"
                  ]
                }
              }
            },
            {
              "title": "100th Digit",
              "difficulty": "hard",
              "tags": [
                "binomial theorem",
                "conjugate",
                "number theory",
                "recurrences"
              ],
              "statement": "Find the 100th digit after the decimal point in $(1+\\sqrt2)^{3000}$.",
              "hint": "$(1+\\sqrt2)^n + (1-\\sqrt2)^n$ is an integer. What happens to $(1-\\sqrt2)^n$ as $n$ grows?",
              "solution": "**The trick:** you can't compute $(1+\\sqrt2)^{3000}$ directly, but you don't need to — pair it with its **conjugate** $(1-\\sqrt2)^{3000}$, because together they behave nicely.\n\n**Step 1 — the conjugate kills the irrational part.** Expand both with the binomial theorem. In $(1+\\sqrt2)^n$ the odd powers of $\\sqrt2$ are irrational; in $(1-\\sqrt2)^n$ those same terms appear with **opposite sign**. Add the two and every $\\sqrt2$ term cancels, leaving a whole number:\n$$\\underbrace{(1+\\sqrt2)^{3000} + (1-\\sqrt2)^{3000}}_{\\text{some integer } K}.$$\n\n**Step 2 — the conjugate term is microscopic.** Note $|1-\\sqrt2| = \\sqrt2 - 1 \\approx 0.414 < 1$. Raising a number below 1 to the 3000th power makes it *unimaginably* tiny:\n$$0 < (\\sqrt2-1)^{3000} \\ll 10^{-100}.$$\n\n**Step 3 — read off the digit.** Rearranging Step 1, $(1+\\sqrt2)^{3000} = K - (\\sqrt2-1)^{3000}$ — an integer minus a sliver smaller than $10^{-100}$. A number *just barely* below a whole number looks like $K{-}1.999\\ldots9\\ldots$, with a long run of 9s. Since the sliver is below $10^{-100}$, the 9s extend well past the 100th place.\n\nSo the **100th digit after the decimal point is 9**.",
              "keyIdea": "Add the conjugate to manufacture an integer; the conjugate's tiny magnitude forces a long run of 9s just below an integer.",
              "id": "4.2:100th-digit",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.2:100th-digit",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / 100th Digit"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0147"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "求 `(1+\\sqrt{2})^{3000}` 小数点后第 `100` 位数字。",
                  "title": "小数第一百位",
                  "solution": "共轭和$(1+\\sqrt2)^{3000}+(1-\\sqrt2)^{3000}=K$为整数，因二项展开中的无理项相消。第二项为正且小于10⁻¹⁰⁰，所以原数为K减去极小正数，其小数前100位均为9，第100位为9。",
                  "hint": "将其与共轭幂相加，得到整数。",
                  "keyIdea": "整数减去微小正数产生连续的9。",
                  "tags": [
                    "二项式定理",
                    "共轭",
                    "数论",
                    "递推"
                  ]
                }
              }
            },
            {
              "title": "Cubic of Integer",
              "difficulty": "medium",
              "tags": [
                "binomial theorem",
                "modular",
                "probability",
                "number theory"
              ],
              "statement": "Choose an integer $n$ uniformly from 1 through $10^{12}$. What is the probability that the last two decimal digits of $n^3$ are 11?",
              "hint": "The last two digits of $x^3$ depend only on the last two digits of $x$.",
              "solution": "Solve $n^3\\equiv11\\pmod{100}$. Modulo 4, $n\\equiv3$. Modulo 25, cubing is a bijection on the units because $\\gcd(3,20)=1$, giving $n\\equiv21$. The Chinese remainder theorem yields the unique class $n\\equiv71\\pmod{100}$, so the probability is $1/100$.",
              "keyIdea": "Reduce modulo 100; Unique residue class 71; Probability 1/100",
              "id": "4.2:cubic-of-integer",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.2:cubic-of-integer",
              "rubric": [
                "Reduce modulo 100",
                "Unique residue class 71",
                "Probability 1/100"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.2 / Cubic of Integer"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0148"
                }
              ],
              "verification": [
                "Enumeration of all 100 residues gives the unique solution 71; $71^3=357911$."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "从整数1到10^12中等概率取n，求 n³ 的十进制末两位为11的概率。",
                  "solution": "n³≡11(mod100)。模4要求n≡3；模25因单位群阶20且gcd(3,20)=1，立方在单位群上为双射，解为n≡21（21³≡11 mod25）。CRT得n≡71(mod100)，故概率1/100。可直接枚举0到99验证唯一解71。",
                  "keyIdea": "模100归约；唯一剩余类71；1/100",
                  "title": "立方末两位",
                  "hint": "末两位只取决于原数模100的余数。",
                  "tags": [
                    "二项式定理",
                    "模运算",
                    "概率",
                    "数论"
                  ]
                }
              }
            },
            {
              "id": "4.2:odd-grid-sums",
              "title": "Odd Grid Sums",
              "difficulty": "medium",
              "tags": [
                "probability",
                "combinatorial counting"
              ],
              "statement": "Arrange the integers 1 through 9 uniformly in a $3\\times3$ grid, using each once. Find the probability that every row sum and column sum is odd.",
              "hint": "Replace each number by its parity.",
              "solution": "Only the five odd-number positions matter, giving $\\binom95=126$ equally likely patterns. Each row contains one or three odds, so exactly one row has three and the others one each. The same holds for columns. The union of the all-odd row and all-odd column contains exactly five cells. There are nine such patterns, so the probability is $9/126=1/14$.",
              "keyIdea": "Reduce to odd positions; One row has three odds and the others one each; Nine valid patterns; Probability 1/14",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.2:odd-grid-sums",
              "rubric": [
                "Reduce to odd positions",
                "One row has three odds and the others one each",
                "Nine valid patterns",
                "Probability 1/14"
              ],
              "verification": [
                "Enumerate all $\\binom95$ parity patterns and check the six parity constraints; exactly nine pass."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0071"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "将数字 1—9 等概率随机排列到 3×3 方格，每数恰用一次。求每行、每列的数字之和都为奇数的概率。",
                  "hint": "将每个数字替换为它的奇偶性。",
                  "solution": "只看 5 个奇数所占位置，C(9,5)=126 种等概率。行中奇数个数须为 1 或 3，总数 5 强迫一行为3、另两行为1；列同理。选满奇数的一行及一列，它们的并集恰有5格，给出全部9种图案。故概率 9/126=1/14。",
                  "keyIdea": "归约为奇数位置；一行三奇数、另两行各一；9 种合法图案；1/14",
                  "title": "方格奇数和",
                  "tags": [
                    "概率",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "id": "4.2:digit-sum-total",
              "title": "Digit Sum Total",
              "difficulty": "easy",
              "tags": [
                "combinatorial counting",
                "combinatorics",
                "counting"
              ],
              "statement": "Sum the decimal digits of every integer from 1 through 1,000,000, then add all those digit sums. What is the result?",
              "hint": "",
              "solution": "In 000000 through 999999, each digit appears 100,000 times in each of six positions. The total is $6\\cdot45\\cdot100000=27000000$. Zero contributes nothing; the final number 1,000,000 adds 1. The result is 27,000,001.",
              "keyIdea": "Use leading zeros; Uniform digits in each position; Add the endpoint",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.2:digit-sum-total",
              "rubric": [
                "Use leading zeros",
                "Uniform digits in each position",
                "Add the endpoint"
              ],
              "verification": [
                "Count each digit position separately; direct enumeration can also check the result."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0185"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "把1到1000000每个整数的十进制各位数字相加，再将所有数字和相加，结果是多少？",
                  "solution": "000000到999999的每一位上，各数字出现100000次，因此6位总贡献6×45×100000=27000000；0贡献0，另加1000000的数字和1，结果27000001。",
                  "keyIdea": "补前导零计数；每位均匀；补上终点",
                  "title": "总数位和",
                  "hint": "",
                  "tags": [
                    "组合计数",
                    "组合数学",
                    "计数"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "组合分析",
              "note": "计数工具包括：重复元素的**排列数**$n!/(n_1!\\cdots n_r!)$、**组合数**$\\binom nr$、**二项式定理**，以及计算重叠事件并集的**容斥原理**。"
            }
          }
        },
        {
          "id": "4.3",
          "title": "Conditional Probability & Bayes' Formula",
          "note": "$P(A|B) = \\frac{P(AB)}{P(B)}$. Tools: the **multiplication rule**, the **law of total probability** $P(A) = \\sum_i P(A|F_i)P(F_i)$, and **Bayes' formula** to flip conditionals.",
          "problems": [
            {
              "title": "Boys and Girls",
              "difficulty": "medium",
              "tags": [
                "conditional probability",
                "sample space"
              ],
              "statement": "Part A: Mrs. Jackson has two children, at least one a boy. Probability both are boys? Part B: Your colleague Mr. Parker has two children; one is a boy walking with him. Probability both are boys?",
              "hint": "Write out the equally likely sample space {bb, bg, gb, gg} and condition carefully — the two parts condition on different information.",
              "solution": "Both parts share the same sample space — two kids, by (older, younger): $\\{bb, bg, gb, gg\\}$, each with probability $\\tfrac14$. The twist is **what each part lets you condition on**, and that changes the answer.\n\n**Part A — \"at least one is a boy.\"** This only rules out $gg$, leaving $\\{bb, bg, gb\\}$, all equally likely. Of those, just one is $bb$:\n$$P(bb \\mid \\text{at least one boy}) = \\frac{1/4}{3/4} = \\frac{1}{3}.$$\n\n**Part B — \"*this specific* child (the one walking with him) is a boy.\"** Now you've identified a *particular* child as a boy; the **other** child's gender is an independent coin flip, untouched by that information:\n$$P(\\text{both boys}) = \\frac{1}{2}.$$\n\n**Why they differ:** \"at least one of the two is a boy\" is a statement about the *pair* (it bundles $bg$ and $gb$ together), whereas \"this one is a boy\" isolates a *single* child and leaves the sibling free. Same words 'a boy,' very different conditioning.",
              "keyIdea": "The information you condition on determines the answer. 'At least one is a boy' (1/3) ≠ 'this specific one is a boy' (1/2).",
              "id": "4.3:boys-and-girls",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:boys-and-girls",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Boys and Girls"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "两个孩子",
                  "statement": "甲有两个孩子，已知至少一个男孩，两个都是男孩的概率？乙有两个孩子，陪他走路的那个确定是男孩，两个都是男孩的概率？",
                  "solution": "假设性别独立等概率。第一问有序样本空间BB、BG、GB、GG排除GG，答案1/3。第二问若所见孩子是与性别无关地指定或抽取的那个，另一个仍独立为男孩，答案1/2；若陪同行为有选择偏差，则必须另给抽样机制，不能直接套1/2。",
                  "hint": "区分对一对孩子的条件与对某个指定孩子的观察。",
                  "keyIdea": "条件事件与抽样机制共同决定答案。",
                  "tags": [
                    "条件概率",
                    "样本空间"
                  ]
                }
              }
            },
            {
              "title": "All-Girl World?",
              "difficulty": "medium",
              "tags": [
                "expectation",
                "intuition"
              ],
              "statement": "In a society every couple keeps having children until they get a girl, then stops. Genders are independent with $P(\\text{girl}) = 1/2$. Will this society end up with more girls than boys?",
              "hint": "Gender at birth doesn't depend on the stopping rule. What fraction of all births are girls?",
              "solution": "**No — the ratio stays exactly 50/50.** It's tempting to think 'everyone stops at a girl, so girls must be more common,' but that intuition is wrong.\n\nThe reason: a stopping rule decides *when a family stops having kids*, but it can't touch the coin flip that decides each individual birth. Every single birth, in every family, is independently a girl or boy with probability $\\tfrac12$ — the rule never gets to peek at or bias that flip. So pooling *all* births across society, exactly half are girls.\n\nWhat the preference *does* change is the **distribution of family sizes** (lots of one-child 'girl' families, fewer long 'boy-boy-…-girl' families), but it leaves the overall **sex ratio untouched** at 50/50.",
              "keyIdea": "A stopping rule based on outcomes cannot bias the underlying independent process. Expected boys = expected girls.",
              "id": "4.3:all-girl-world",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:all-girl-world",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / All-Girl World?"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "生女即止",
                  "statement": "每对夫妇持续生育，直到生下女孩才停止。各次性别独立，女孩概率1/2。社会中会出现女孩多于男孩吗？",
                  "solution": "每家最终一个女孩，停止前男孩数为几何失败次数，期望也为1。因此两性期望人数相同；家庭数增大时总体比例趋于1:1。停止规则改变家庭大小分布，不改变每次出生性别概率；有限社会的实际比例并非必然恰好相等。",
                  "hint": "停止规则不改变每次出生的独立性别概率。",
                  "keyIdea": "期望与大样本比例不能误说成有限样本恒等。",
                  "tags": [
                    "期望",
                    "直觉"
                  ]
                }
              }
            },
            {
              "title": "Unfair Coin",
              "difficulty": "medium",
              "tags": [
                "Bayes"
              ],
              "statement": "Among 1000 coins, 1 is double-headed; the other 999 are fair. You pick a coin at random and toss it 10 times — all 10 come up heads. What's the probability you picked the unfair coin?",
              "hint": "Bayes: combine the prior 1/1000 with the likelihood of 10 heads under each hypothesis.",
              "solution": "**Bayes updates a prior with evidence.** Let $A$ = 'picked the double-headed coin' and $B$ = 'saw 10 heads in a row'.\n\n- **Priors:** $P(A) = \\tfrac{1}{1000}$, $P(A^c) = \\tfrac{999}{1000}$.\n- **Likelihoods:** the trick coin *always* shows heads, $P(B \\mid A) = 1$; a fair coin shows 10 heads with $P(B \\mid A^c) = (\\tfrac12)^{10} = \\tfrac{1}{1024}$.\n\nApply Bayes (the denominator is the total probability of seeing 10 heads):\n$$P(A \\mid B) = \\frac{P(B\\mid A)P(A)}{P(B\\mid A)P(A) + P(B\\mid A^c)P(A^c)} = \\frac{1\\cdot\\tfrac{1}{1000}}{1\\cdot\\tfrac{1}{1000} + \\tfrac{1}{1024}\\cdot\\tfrac{999}{1000}} \\approx 0.506.$$\n\n**Why it lands near 50/50:** ten straight heads is about a 1-in-1024 fluke for a fair coin — almost exactly as rare as the 1-in-1000 chance of grabbing the trick coin. The two rarities nearly cancel, so the evidence pulls a tiny prior all the way up to roughly even odds.",
              "keyIdea": "Strong evidence (10 heads) updates a tiny prior (1/1000) to roughly even odds — because 10 heads is itself ~1/1000 likely for a fair coin.",
              "id": "4.3:unfair-coin",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:unfair-coin",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Unfair Coin"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "异常硬币后验",
                  "statement": "1000枚硬币中1枚双面正面，999枚公平。均匀选一枚，连续抛10次全正，选到异常币的概率？",
                  "solution": "异常先验1/1000，全正似然为1；公平先验999/1000，全正似然1/1024。贝叶斯给$P=1024/(999+1024)=1024/2023\\approx0.506$。十连正证据把很小的先验推到接近一半。",
                  "hint": "将先验与两种硬币下的十连正似然结合。",
                  "keyIdea": "后验由先验乘似然再归一化。",
                  "tags": [
                    "贝叶斯"
                  ]
                }
              }
            },
            {
              "title": "Fair Coin Extraction",
              "difficulty": "medium",
              "tags": [
                "symmetry",
                "algorithm",
                "probability",
                "construction"
              ],
              "statement": "Repeatedly toss a coin independently with an unknown but fixed head probability $p\\in(0,1)$. Construct a fair game and discuss its efficiency.",
              "hint": "Use two tosses and exploit a symmetry between two of the outcomes.",
              "solution": "Toss in pairs. Assign HT and TH to opposite winners; repeat after HH or TT. Both decisive outcomes have probability $p(1-p)$, proving fairness. The expected number of rounds is $1/[2p(1-p)]$, and expected tosses $1/[p(1-p)]$. At $p=0$ or 1 this method never terminates; dependence or changing p invalidates the proof.",
              "keyIdea": "Pair HT and TH; Prove fairness; Discuss efficiency and assumptions",
              "id": "4.3:fair-coin-extraction",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.3:fair-coin-extraction",
              "rubric": [
                "Pair HT and TH",
                "Prove fairness",
                "Discuss efficiency and assumptions"
              ],
              "followups": [
                "With head probability 0.7, design an almost-surely terminating game giving each player winning probability 1/2.",
                "Does the construction still work for unknown but fixed p in (0,1)?"
              ],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Fair Probability from an Unfair Coin"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0007"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0107"
                }
              ],
              "verification": [
                "Equal decisive-outcome probabilities and a geometric waiting time."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "独立重复使用同一枚固定正面概率 p∈(0,1) 的硬币，p未知。构造公平游戏并讨论效率。",
                  "solution": "两次一轮，HT、TH分别判两方赢，HH/TT重来。两种决定性结果概率同为p(1-p)，故公平。期望轮数1/[2p(1-p)]，抛掷次数1/[p(1-p)]。p=0或1无法用该方法终止，抛掷不独立或p漂移时原证明不再成立。",
                  "keyIdea": "HT与TH配对；公平证明；效率及假设",
                  "title": "公平币提取",
                  "hint": "成对抛掷，找概率相同的两种结果。",
                  "tags": [
                    "对称性",
                    "算法",
                    "概率",
                    "构造"
                  ]
                }
              }
            },
            {
              "title": "Dart Game",
              "difficulty": "medium",
              "tags": [
                "symmetry",
                "order",
                "independence"
              ],
              "statement": "Jason throws darts aiming at the center; skill is constant. The 2nd dart lands farther from center than the 1st. What is the probability the 3rd dart is farther from center than the **1st**? (General: $n$ darts.)",
              "hint": "Rank the throws by distance. Is 'the last throw is the best' independent of the order of the earlier throws?",
              "solution": "Because skill is constant, the dart distances are i.i.d. — so **all orderings of them are equally likely**, and we can answer with pure symmetry, no integrals.\n\nThe condition '2nd farther than 1st' is just telling us the 1st throw is the best (closest) so far. The general question becomes: given the 1st of $n$ throws is the best of those $n$, what's the chance the next throw is **also** farther than the 1st (i.e. doesn't become the new closest)?\n\nKey symmetry fact: among $n+1$ i.i.d. throws, each is equally likely to be the closest, so the $(n{+}1)$-th being the closest has probability $\\tfrac{1}{n+1}$ — and this is **independent** of how the first $n$ were ordered. Therefore the next throw is *not* the new best (so it's farther than the 1st) with probability\n$$1 - \\frac{1}{n+1} = \\frac{n}{n+1}.$$\n\nFor the 3-dart question, $n = 2$, giving $\\dfrac{2}{3}$.",
              "keyIdea": "Among i.i.d. values, 'the newest one is the maximum' has probability $1/(n+1)$ and is independent of the earlier ordering — a recurring symmetry trick.",
              "id": "4.3:dart-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:dart-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Dart Game"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "飞镖距离",
                  "statement": "飞镖瞄准靶心，水平不变。已知第二镖比第一镖离靶心更远，第三镖也比第一镖更远的概率？并推广到前n镖中第一镖最近时。",
                  "solution": "在距离独立同分布且无并列的模型下，所有排序等可能。第n+1镖成为全体最近的概率为1/(n+1)，且与前n镖内部排序独立。因此它比第一镖更远的条件概率为n/(n+1)。n=2时为2/3。",
                  "hint": "对距离排名，利用新样本排名与此前内部排序的独立性。",
                  "keyIdea": "交换性把条件概率化为排名计数。",
                  "tags": [
                    "对称性",
                    "排序",
                    "独立性"
                  ]
                }
              }
            },
            {
              "title": "Birthday Line",
              "difficulty": "hard",
              "tags": [
                "optimization",
                "conditional probability"
              ],
              "statement": "A theater gives a free ticket to the first person in line whose birthday matches someone earlier in line. Which position maximizes your chance of winning? (365 equally likely days.)",
              "hint": "To win at position $n$: the first $n-1$ people must all have distinct birthdays, AND yours must match one of them.",
              "solution": "**The tension:** standing later in line gives more earlier people for *your* birthday to match — good. But it also makes it more likely two of *those* earlier people already matched each other (ending the game before you) — bad. The winning spot balances these two forces.\n\nTo win at position $n$ you need two things: the first $n-1$ people all have **distinct** birthdays (so the prize hasn't been given out yet), **and** your birthday matches one of those $n-1$:\n$$P(n) = \\underbrace{\\frac{365\\cdot 364\\cdots(365-n+2)}{365^{n-1}}}_{\\text{first }n-1\\text{ all distinct}} \\times \\underbrace{\\frac{n-1}{365}}_{\\text{you match one}}.$$\n\n**Find the peak.** The best $n$ is where $P(n)$ stops increasing — where $P(n) \\ge P(n-1)$ and $P(n) \\ge P(n+1)$. Forming those ratios, the 365-factorial parts cancel and you're left with simple quadratic inequalities $n^2 - n - 365 < 0$ and $n^2 - 3n - 363 > 0$. Both hold at $n = 20$.\n\n**Stand 20th in line.**",
              "keyIdea": "Trade-off: deeper in line raises your match chance but lowers the chance the earlier birthdays are still all distinct. The product peaks at position 20.",
              "id": "4.3:birthday-line",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:birthday-line",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Birthday Line"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "生日排队",
                  "statement": "剧院给队列中首个与前人生日相同者免费票。生日独立均匀于365天，站第几位获奖概率最大？",
                  "solution": "第n位获奖要求前n-1人生日互异，自己与其一相同：$P_n=\\prod_{k=0}^{n-2}(365-k)/365\\cdot(n-1)/365$。比较相邻比值$P_{n+1}/P_n=n(366-n)/(365(n-1))$，大于1等价于n(n-1)<365。n=19仍增长、n=20开始下降，故第20位最优。",
                  "hint": "“前面尚无重复”与“自己匹配前面”同时发生。",
                  "keyIdea": "相邻概率比平衡等待更久的收益与提前出奖风险。",
                  "tags": [
                    "优化",
                    "条件概率"
                  ]
                }
              }
            },
            {
              "title": "Dice Order",
              "difficulty": "easy",
              "tags": [
                "conditional probability",
                "permutations",
                "probability",
                "expectation"
              ],
              "statement": "Roll three fair six-sided dice in a specified order. What is the probability that their values are strictly increasing?",
              "hint": "Condition on the three numbers being different.",
              "solution": "**Split it into two independent pieces:** (1) the three values must be *distinct*, and (2) given they're distinct, they must come out in increasing order.\n\n**Distinct:** the 2nd roll must avoid the 1st ($\\tfrac56$) and the 3rd must avoid both ($\\tfrac46$):\n$$P(\\text{all different}) = 1 \\cdot \\tfrac{5}{6}\\cdot\\tfrac{4}{6} = \\tfrac{20}{36}.$$\n\n**Increasing given distinct:** any three distinct numbers have $3! = 6$ equally likely orderings, and exactly **one** is strictly increasing → probability $\\tfrac16$.\n\nMultiply:\n$$P = \\frac{20}{36}\\times\\frac{1}{6} = \\frac{20}{216} = \\frac{5}{54}.$$",
              "keyIdea": "Split into 'distinct values' × 'correct ordering given distinct' — the ordering factor is simply $1/3!$.",
              "id": "4.3:dice-order",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:dice-order",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Dice Order"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0108"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "三个骰子同时掷出，点数严格递增的概率是多少？",
                  "title": "骰子递增",
                  "solution": "三枚全不同概率为(5/6)(4/6)，在此条件下6种顺序等可能，仅一种递增。因此概率(5/6)(4/6)(1/6)=5/54。",
                  "hint": "先条件化于点数互异。",
                  "keyIdea": "互异概率乘以指定排列的条件概率。",
                  "tags": [
                    "条件概率",
                    "排列",
                    "概率",
                    "期望"
                  ]
                }
              }
            },
            {
              "title": "Monty Hall Problem",
              "difficulty": "medium",
              "tags": [
                "conditional probability",
                "Bayes",
                "probability",
                "expectation"
              ],
              "statement": "A host knows where the car is, always opens goat doors until only your original door and one other remain, and always offers a switch. Your initial choice is uniform. Compare switching probabilities with one car and two goats versus one car and 999 goats.",
              "hint": "The host's action is not independent of where the car is. What's the chance your original pick was wrong?",
              "solution": "**Yes — switch. You win $\\tfrac{2}{3}$ of the time.**\n\nThe cleanest way to see it: think about what your switching strategy does in each starting case, *before* the host opens anything.\n\n- Your first pick is a **goat** with probability $\\tfrac{2}{3}$. In that case the host is *forced* to reveal the other goat, so the only door left to switch to is the **car**. Switching **wins**.\n- Your first pick is the **car** with probability $\\tfrac{1}{3}$. Then switching moves you to a goat. Switching **loses**.\n\nSo a switcher wins exactly when they *started* on a goat — probability $\\tfrac{2}{3}$ — versus $\\tfrac{1}{3}$ for someone who always stays.\n\n**Why intuition rebels:** it feels like 'two doors left, so 50/50.' But the host isn't a random door-opener — he *knows* where the car is and never opens it. That extra information is what tilts the leftover door to $\\tfrac{2}{3}$.\n\nWith 1,000 doors, switching wins with probability $999/1000$, since it wins exactly when the initial choice was a goat.",
              "keyIdea": "The host's informed action transfers probability. Your initial guess is wrong 2/3 of the time, and switching converts every one of those into a win.",
              "id": "4.3:monty-hall-problem",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:monty-hall-problem",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Monty Hall Problem"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0109"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "主持人知道车的位置、总会打开所有可打开的羊门直至只留原选门及另一扇门，并总提供换门机会。初选均匀，比较一车两羊与一车999羊时换门胜率。",
                  "title": "换门问题",
                  "solution": "换门当且仅当初选为羊时获胜。三门中初选羊概率2/3，所以换门胜率2/3，守门为1/3。1000门且主持人按题意开至仅留两门时，换门胜率999/1000。主持人知道车位并必开羊门是关键条件。",
                  "hint": "初选错误的概率是多少？主持人的开门不是独立随机事件。",
                  "keyIdea": "有信息的开门将所有初选错误转成换门获胜。",
                  "tags": [
                    "条件概率",
                    "贝叶斯",
                    "概率",
                    "期望"
                  ]
                }
              }
            },
            {
              "title": "Amoeba Population",
              "difficulty": "hard",
              "tags": [
                "law of total probability",
                "branching process",
                "probability",
                "expectation",
                "stochastic processes"
              ],
              "statement": "A discrete-generation Galton-Watson process starts with one individual. Each individual independently has 0, 1, 2, or 3 offspring, each with probability 1/4. Find the eventual extinction probability.",
              "hint": "Condition on the first minute and set up an equation: $P = \\sum P(\\text{extinct}\\,|\\,F_i)P(F_i)$.",
              "solution": "**The self-referential trick:** let $P$ be the probability the whole line eventually dies out, starting from one amoeba. The key fact is that **each amoeba's descendants die out independently**, so if there are ever $k$ amoebas, the chance *all* their lineages vanish is $P^k$.\n\nNow condition on what the original amoeba does in the first minute (four equally likely outcomes):\n- **dies** ($\\tfrac14$): population gone → contributes $\\tfrac14 \\cdot 1$.\n- **stays as 1** ($\\tfrac14$): back to one amoeba → contributes $\\tfrac14 \\cdot P$.\n- **splits into 2** ($\\tfrac14$): both lines must die → contributes $\\tfrac14 \\cdot P^2$.\n- **splits into 3** ($\\tfrac14$): all three must die → contributes $\\tfrac14 \\cdot P^3$.\n\nAdd them (law of total probability):\n$$P = \\tfrac14\\big(1 + P + P^2 + P^3\\big) \\;\\Longrightarrow\\; P^3 + P^2 - 3P + 1 = 0.$$\n\n$P=1$ is a root (factor it out), and the remaining quadratic gives the root that lies in $(0,1)$:\n$$P = \\sqrt2 - 1 \\approx 0.414.$$\n\nSo there's about a **41% chance of extinction** — meaning the colony survives forever with probability ~59%.",
              "keyIdea": "Branching-process extinction: independence makes a $k$-way split contribute $P^k$, yielding a fixed-point polynomial whose relevant root lies in $(0,1)$.",
              "id": "4.3:amoeba-population",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:amoeba-population",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Amoeba Population"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0110"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "离散代Galton–Watson过程从1个个体出发，每个个体独立地产生0、1、2、3个后代，各概率1/4。求最终灭绝概率。",
                  "title": "分枝过程灭绝",
                  "solution": "设单个个体最终灭绝概率q。条件于首代后代数，独立谱系给$q=(1+q+q^2+q^3)/4$。灭绝概率为[0,1]内最小不动点，解得$q=\\sqrt2-1\\approx0.414$，另一根1不是所需最小根。",
                  "hint": "按第一代后代数条件化，各谱系独立灭绝。",
                  "keyIdea": "分枝独立性把灭绝问题转成生成函数最小不动点。",
                  "tags": [
                    "全概率公式",
                    "分枝过程",
                    "概率",
                    "期望",
                    "随机过程"
                  ]
                }
              }
            },
            {
              "title": "Candies in a Jar",
              "difficulty": "hard",
              "tags": [
                "conditional probability",
                "symmetry"
              ],
              "statement": "A jar has 10 red, 20 blue, 30 green candies. Drawing one at a time without replacement, what's the probability that at least 1 blue and 1 green remain when the **last red** is drawn?",
              "hint": "Reframe via the *last* candy of each color. You want the red color to be exhausted before blue and before green.",
              "solution": "**Reframe around the *last* candy of each color.** 'At least one blue and one green remain when the last red is drawn' simply means the reds are used up **before** the blues and **before** the greens. In terms of the positions $T_r, T_b, T_g$ of each color's *final* candy, we want $T_r < T_b$ **and** $T_r < T_g$ — i.e. red finishes first.\n\nRed finishing first means the overall last candy is blue or green, and so on. Split into the two orders where red is first:\n$$P = P(T_r < T_b < T_g) + P(T_r < T_g < T_b).$$\n\n**Use a slick symmetry:** the very last candy among all 60 is equally likely to be any individual candy, so it's green with prob $\\tfrac{30}{60}$, blue with $\\tfrac{20}{60}$, etc. Then, *given* the last one's color, the last among the remaining two colors is again proportional to their counts.\n\n- **Green last, then blue:** $\\tfrac{30}{60}\\cdot\\tfrac{20}{20+10} = \\tfrac{30}{60}\\cdot\\tfrac{20}{30}$.\n- **Blue last, then green:** $\\tfrac{20}{60}\\cdot\\tfrac{30}{30+10} = \\tfrac{20}{60}\\cdot\\tfrac{30}{40}$.\n\n$$P = \\frac{30}{60}\\cdot\\frac{20}{30} + \\frac{20}{60}\\cdot\\frac{30}{40} = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}.$$",
              "keyIdea": "Translate 'reds run out first' into orderings of the *last* candy of each color; each color is equally likely to be last among any subset.",
              "id": "4.3:candies-in-a-jar",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:candies-in-a-jar",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Candies in a Jar"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "糖果剩余事件",
                  "statement": "罐中10红、20蓝、30绿糖，均匀不放回逐颗取。最后一颗红糖取出时，仍至少剩一蓝和一绿的概率？",
                  "solution": "令Tᵣ、Tᵦ、T𝓰为三色最后一次出现的位置，需要Tᵣ同时早于另两色。按最后两色次序分解：最后为绿、次后为蓝的概率$(30/60)(20/30)$；最后为蓝、次后为绿的概率$(20/60)(30/40)$。相加为1/3+1/4=7/12。",
                  "hint": "比较每种颜色最后一颗出现的顺序。",
                  "keyIdea": "把某色先耗尽转成各色最大位置的排序事件。",
                  "tags": [
                    "条件概率",
                    "对称性"
                  ]
                }
              }
            },
            {
              "title": "Coin Toss Game (A & B)",
              "difficulty": "hard",
              "tags": [
                "conditional probability",
                "symmetry"
              ],
              "statement": "A and B alternately toss a fair coin (A first). The game stops at the first occurrence of a **head immediately followed by a tail** (HT); whoever tossed that tail wins. What is the probability A wins?",
              "hint": "Condition on A's first toss and use symmetry between the players' positions.",
              "solution": "Two situations recur, so name both. Let $P$ = probability the **next tosser** wins from a *fresh* position (no pending $H$). Let $Q$ = probability the **next tosser** wins when there's already a **pending $H$** on the table.\n\n**Solve $Q$ first.** It's your turn with an $H$ already down:\n- you toss $T$ (prob $\\tfrac12$): you complete $HT$ → **you win**.\n- you toss $H$ (prob $\\tfrac12$): the $H$ is still pending, but now it's your *opponent's* turn in this same situation → you win with prob $1-Q$.\n$$Q = \\tfrac12 + \\tfrac12(1-Q) \\;\\Rightarrow\\; Q = \\tfrac{2}{3}.$$\n\n**Now the fresh game**, conditioning on the first toss:\n- toss $T$ (prob $\\tfrac12$): no $H$ yet, so the opponent now faces a fresh game as the next tosser → you win with prob $1-P$.\n- toss $H$ (prob $\\tfrac12$): an $H$ is pending and it's the opponent's turn → they're in the $Q$ situation, so you win with prob $1-Q = \\tfrac13$.\n$$P = \\tfrac12(1-P) + \\tfrac12\\cdot\\tfrac13 \\;\\Rightarrow\\; \\tfrac32 P = \\tfrac23 \\;\\Rightarrow\\; P = \\frac{4}{9}.$$\n\nSince A is the first tosser, **A wins with probability $\\tfrac{4}{9}$**. Sensibly below $\\tfrac12$: A can never win on toss 1 (no preceding $H$), so going first is a slight disadvantage here.",
              "keyIdea": "Set up a self-referential equation by conditioning on the first toss; symmetry lets you express sub-cases as $1 - P(A)$.",
              "id": "4.3:coin-toss-game-a-b",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:coin-toss-game-a-b",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Coin Toss Game (A & B)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "轮流等HT",
                  "statement": "A先，A、B轮流抛公平硬币，首次出现相邻HT时结束，抛出T者获胜。求A胜率。",
                  "solution": "令Q为已有后缀H时下一抛者获胜率，则Q=1/2+(1/2)(1-Q)，解得2/3。令P为无待匹配H时下一抛者胜率，则P=(1/2)(1-P)+(1/2)(1-Q)，解得4/9。A为首抛者，所以胜率4/9。",
                  "hint": "区分有无待匹配的H，并交换当前玩家视角。",
                  "keyIdea": "用后缀状态和角色对称列递推。",
                  "tags": [
                    "条件概率",
                    "对称性"
                  ]
                }
              }
            },
            {
              "title": "Russian Roulette Series",
              "difficulty": "medium",
              "tags": [
                "conditional probability"
              ],
              "statement": "A 6-chamber revolver, one bullet, barrel spun once so each chamber is equally likely. Two players take turns pulling the trigger (no re-spin). Would you go first or second? Variant: re-spin before every pull. Variant: two bullets in consecutive chambers, opponent survives the first pull — should you spin before your turn?",
              "hint": "Once spun, the bullet's position is fixed — count which trigger pulls hit it.",
              "solution": "The whole answer hinges on one distinction: **is the bullet's position fixed, or re-randomized each pull?**\n\n**Variant 1 — spin once, no re-spin.** The bullet is locked into one of chambers 1–6, all equally likely. Player 1 pulls chambers 1, 3, 5; player 2 pulls 2, 4, 6 — each owns exactly 3 of the 6 chambers, so each loses with probability $\\tfrac36 = \\tfrac12$. **Order doesn't matter.**\n\n**Variant 2 — re-spin before every pull.** Now each pull is an independent $\\tfrac16$ risk. Player 1 loses with prob $\\tfrac16$ on pull 1; player 2 only ever pulls if player 1 survived, etc. Summing player 2's loss over the rounds gives total loss probability $\\tfrac{5}{11} < \\tfrac{6}{11}$. **So go second.** (Re-spinning lets the first player 'use up' the risk first.)\n\n**Variant 3 — two bullets in *consecutive* chambers, opponent already survived pull 1.** The fired chamber was empty, so it was one of the 4 empties. Lay them out: of those 4 empty chambers, exactly **1** is immediately followed by a bullet (the empty right before the bullet-pair) and **3** are followed by another empty. So **without spinning**, your survival is $\\tfrac34$. If you **spin**, you reset to 4 empty chambers out of 6, survival $\\tfrac46 = \\tfrac23 < \\tfrac34$. **Don't spin.**",
              "keyIdea": "Distinguish independent (re-spin) from dependent (fixed bullet) trials. Conditioning on the survived chamber reshapes the odds.",
              "id": "4.3:russian-roulette-series",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:russian-roulette-series",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Russian Roulette Series"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "轮盘概率",
                  "statement": "六弹膛一颗子弹，初始只转一次，二人轮流扣动且不再转，选先还是后？若每次重转呢？若两颗子弹相邻，对手首发存活后，你应重转吗？",
                  "solution": "仅初转：先手占第1、3、5次，后手占2、4、6次，各损失概率1/2，无区别。每次重转：先手损失概率6/11，后手5/11，应后手。两颗相邻且已知上一膛空：四个可能空膛中三个后接空膛，不重转生存率3/4；重转为4/6=2/3，因此不重转。",
                  "hint": "区分固定弹位与每次重新随机化。",
                  "keyIdea": "条件化于已存活的信息，并识别各轮是否独立。",
                  "tags": [
                    "条件概率"
                  ]
                }
              }
            },
            {
              "title": "Aces",
              "difficulty": "medium",
              "tags": [
                "conditional probability",
                "counting",
                "probability"
              ],
              "statement": "Deal a uniformly shuffled 52-card deck to four players, 13 cards each. What is the probability that every player receives exactly one ace?",
              "hint": "Place the aces one at a time and track the conditional probability each lands in a fresh pile.",
              "solution": "**Place the four aces one at a time** and ask, at each step, for the chance the new ace lands in a pile that doesn't already hold one.\n\n- The **1st** ace goes anywhere — fine.\n- For the **2nd** ace, 51 card-slots remain; the $13$ in the 1st ace's pile are 'bad', so it lands in a fresh pile with prob $\\tfrac{52-13}{51} = \\tfrac{39}{51}$.\n- The **3rd** ace must avoid the two used piles ($26$ bad slots of $50$): $\\tfrac{26}{50}$.\n- The **4th** ace must land in the one remaining empty pile ($13$ of $49$): $\\tfrac{13}{49}$.\n\nMultiply the conditional probabilities:\n$$P = \\frac{39}{51}\\times\\frac{26}{50}\\times\\frac{13}{49} \\approx 0.105.$$\n\nSo each player holds exactly one ace about **10.5%** of the time.",
              "keyIdea": "Sequential conditioning: each new ace must fall into one of the not-yet-used piles, with shrinking favorable counts.",
              "id": "4.3:aces",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:aces",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Aces"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0114"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "52 张牌平均分给 4 个玩家，每人 13 张。求每个人都恰好拿到 1 张 A 的概率。",
                  "title": "四家各一张A",
                  "solution": "固定A逐张放入发牌位置。第一张不限；第二张落到未占A的牌堆概率39/51，第三张26/50，第四张13/49。乘积约0.105，即10.5%。",
                  "hint": "逐张放A，每次落入尚无A的牌堆。",
                  "keyIdea": "逐步条件概率相乘。",
                  "tags": [
                    "条件概率",
                    "计数",
                    "概率"
                  ]
                }
              }
            },
            {
              "title": "Gambler's Ruin Problem",
              "difficulty": "hard",
              "tags": [
                "difference equations",
                "random walk"
              ],
              "statement": "A gambler starts with \\$$i$, bets \\$1 each round, winning with prob $p$ (losing with $q = 1-p$). He stops at \\$0 (ruin) or \\$$N$ (goal). What is the probability he reaches \\$$N$?",
              "hint": "Let $P_i$ be the win probability from state $i$; set up the recurrence $P_i = pP_{i+1} + qP_{i-1}$.",
              "solution": "**Set up a recurrence on the state.** Let $P_i$ = probability of reaching the goal \\$$N$ starting from \\$$i$. One bet later you're at $i{+}1$ (prob $p$) or $i{-}1$ (prob $q$), so\n$$P_i = pP_{i+1} + qP_{i-1}, \\qquad P_0 = 0,\\; P_N = 1.$$\n\n**The trick to solve it:** rewrite using $p + q = 1$ so that consecutive *gaps* relate. It rearranges to\n$$P_{i+1} - P_i = \\frac{q}{p}\\,(P_i - P_{i-1}),$$\nso each gap is $\\tfrac{q}{p}$ times the previous one — the gaps form a **geometric sequence**. Summing the gaps from $0$ to $i$ and using the boundary conditions:\n$$P_i = \\begin{cases} \\dfrac{1 - (q/p)^i}{1 - (q/p)^N}, & p \\ne \\tfrac12 \\quad(\\text{biased}),\\\\[2mm] \\dfrac{i}{N}, & p = \\tfrac12 \\quad(\\text{fair}). \\end{cases}$$\n\n**Reading it:** in a fair game your chance of hitting the goal is just your fraction of the way there, $i/N$. With even a small edge against you ($q>p$), the $(q/p)^N$ term explodes and ruin becomes nearly certain — the mathematics behind why 'the house always wins.'",
              "keyIdea": "A linear difference equation with boundary conditions. The ratio $q/p$ drives a geometric solution; the fair case degenerates to the linear $i/N$.",
              "id": "4.3:gambler-s-ruin-problem",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:gambler-s-ruin-problem",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Gambler's Ruin Problem"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "赌徒达标",
                  "statement": "赌徒初始资金i，每轮以p赢1、q=1-p输1，直到0或N停止。求先到N的概率。",
                  "solution": "设Pᵢ为达标概率，Pᵢ=pPᵢ₊₁+qPᵢ₋₁，边界P₀=0、Pₙ=1。相邻差满足$P_{i+1}-P_i=(q/p)(P_i-P_{i-1})$，为等比数列。p≠1/2时$P_i=[1-(q/p)^i]/[1-(q/p)^N]$；p=1/2时为i/N。",
                  "hint": "对当前资金列差分方程并使用两个边界。",
                  "keyIdea": "相邻差等比，公平情形退化为线性解。",
                  "tags": [
                    "差分方程",
                    "随机游走"
                  ]
                }
              }
            },
            {
              "title": "Basketball Scores",
              "difficulty": "hard",
              "tags": [
                "induction",
                "law of total probability"
              ],
              "statement": "A player takes 100 free throws. The 1st shot scores 1 point, 1st miss scores 0; thereafter the probability of a make equals the fraction of shots made so far. After the first 2 shots (one make, one miss), what is the probability the player ends with exactly 50 makes in 100 shots?",
              "hint": "Let $P_{n,k}$ = prob of $k$ makes in $n$ shots. Compute small cases — the make-count is uniformly distributed.",
              "solution": "**Guess via small cases, then prove.** Let $P_{n,k}$ = probability of exactly $k$ makes after $n$ shots, starting from the given state (after 2 shots: 1 make, 1 miss). After shot 3, the make-probability is $\\tfrac{1}{2}$ (one make out of two so far), so $P_{3,1} = P_{3,2} = \\tfrac12$ — both equally likely.\n\nThat hints at a beautiful pattern: **the number of makes is uniformly distributed.**\n$$P_{n,k} = \\frac{1}{n-1}, \\qquad k = 1, 2, \\dots, n-1.$$\n\n**Why it holds (induction).** Suppose it's true at step $n$. To have $k$ makes after shot $n{+}1$, either you had $k{-}1$ makes and then *made* shot $n{+}1$ (probability $\\tfrac{k-1}{n}$), or you had $k$ makes and *missed* (probability $\\tfrac{n-k}{n}$). By the law of total probability:\n$$P_{n+1,k} = \\frac{1}{n-1}\\cdot\\frac{k-1}{n} + \\frac{1}{n-1}\\cdot\\frac{n-k}{n} = \\frac{1}{n-1}\\cdot\\frac{n-1}{n} = \\frac{1}{n}.$$\nUniform again — the self-reinforcing 'make rate = current fraction' is exactly what keeps every outcome equally likely (a Pólya-urn effect).\n\nFor $n = 100$: every make-count from 1 to 99 has probability $\\tfrac{1}{99}$, so\n$$P_{100,50} = \\frac{1}{99}.$$",
              "keyIdea": "A Pólya-urn-like reinforcement makes every possible make-count equally likely — the answer is uniform $\\frac{1}{n-1}$.",
              "id": "4.3:basketball-scores",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:basketball-scores",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Basketball Scores"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "自强化投篮",
                  "statement": "共投100次，已知前两次一中一失；此后每次命中概率等于此前命中比例。最终恰命中50次的概率？",
                  "solution": "令Pₙ,ₖ为n投中k球概率，从一中一失出发有P₂,₁=1。归纳可得k=1至n-1均为1/(n-1)：转移由k-1次后命中与k次后失手两项构成，内点相加为[(k-1)+(n-k)]/[n(n-1)]=1/n，端点单项也成立。因此100投各1至99中数等可能，答案1/99。",
                  "hint": "计算小规模的命中总数分布，寻找均匀性。",
                  "keyIdea": "Pólya式强化产生均匀计数分布。",
                  "tags": [
                    "归纳",
                    "全概率公式"
                  ]
                }
              }
            },
            {
              "title": "Cars on Road",
              "difficulty": "medium",
              "tags": [
                "independence",
                "complement"
              ],
              "statement": "On a highway the probability of seeing at least one car in 20 minutes is $609/625$. Assuming a constant arrival rate and independence across disjoint intervals, what is the probability of seeing at least one car in **5 minutes**?",
              "hint": "20 minutes = four independent 5-minute intervals. Work with the no-car probabilities.",
              "solution": "**Work with the 'nothing happens' probability** — it multiplies cleanly across independent intervals, whereas 'at least one' does not.\n\nA 20-minute window is four independent 5-minute windows. Let $p$ = prob of seeing a car in 5 minutes, so $1-p$ = prob of *no* car in 5 minutes. Seeing no car for the whole 20 minutes means no car in all four sub-intervals:\n$$(1-p)^4 = P(\\text{no car in 20 min}) = 1 - \\frac{609}{625} = \\frac{16}{625}.$$\n\nNotice $\\tfrac{16}{625} = \\left(\\tfrac{2}{5}\\right)^4$, so take the 4th root:\n$$1 - p = \\frac{2}{5} \\;\\Rightarrow\\; p = \\frac{3}{5}.$$",
              "keyIdea": "Multiply 'nothing happens' probabilities across independent sub-intervals; take the 4th root to scale 20 min down to 5 min.",
              "id": "4.3:cars-on-road",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:cars-on-road",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.3 / Cars on Road"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "道路来车",
                  "statement": "20分钟至少见一辆车的概率为609/625。假设到达率恒定且不相交区间独立，5分钟至少一辆的概率？",
                  "solution": "设5分钟至少一辆概率p，20分钟无车意味着四个5分钟均无车，所以(1-p)⁴=16/625=(2/5)⁴。得p=3/5。",
                  "hint": "先计算无车概率，独立区间的无车概率可乘。",
                  "keyIdea": "补事件在独立时间段上相乘。",
                  "tags": [
                    "独立性",
                    "补事件"
                  ]
                }
              }
            },
            {
              "id": "4.3:double-headed-coin",
              "title": "Double-Headed Coin",
              "difficulty": "easy",
              "tags": [
                "probability"
              ],
              "statement": "Among 999 fair coins is one double-headed coin. Select a coin uniformly and observe its tosses. How does Bayes' rule update the probability that it is double-headed?",
              "hint": "",
              "solution": "After $k$ consecutive heads, the posterior probability is $2^k/(999+2^k)$. After one head it is $2/1001$. Any observed tail rules out the double-headed coin.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:double-headed-coin",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0106"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在 999 枚正常硬币中混有 1 枚双面都是正面的硬币。随机取一枚并观察其抛掷结果后，如何用贝叶斯公式更新它是双面正面硬币的概率？",
                  "solution": "连续k次正面后的后验为2ᵏ/(999+2ᵏ)，一次正面为2/1001；若观察到反面，双正面硬币的后验为0。",
                  "title": "双正面硬币",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率"
                  ]
                }
              }
            },
            {
              "id": "4.3:two-children",
              "title": "Two Children",
              "difficulty": "easy",
              "tags": [
                "probability",
                "conditional probability",
                "Bayesian inference"
              ],
              "statement": "Two children have independent sexes, each equally likely to be a boy or girl. Given only that at least one is a boy, with no additional sampling or reporting mechanism, find the probability that both are boys.",
              "hint": "",
              "solution": "The equally likely possibilities BB, BG, GB, GG reduce to BB, BG, GB. Only BB qualifies, so the probability is $1/3$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:two-children",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0149"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "两个孩子的性别独立且男女各1/2，只知道至少一个是男孩（没有额外抽样或报告机制）。求两个都是男孩的条件概率。",
                  "solution": "经典版本“已知两个孩子中至少有一个是男孩，求两个都是男孩的概率”答案是 `1/3`。样本空间从 `BB,BG,GB,GG` 缩到 `BB,BG,GB`，其中只有 `BB` 满足。",
                  "title": "至少一男孩",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "条件概率",
                    "贝叶斯推断"
                  ]
                }
              }
            },
            {
              "id": "4.3:joint-defaults",
              "title": "Joint Defaults",
              "difficulty": "hard",
              "tags": [
                "probability"
              ],
              "statement": "Given marginal default probabilities for several entities and information about dependence, how can their joint default probability be calculated?",
              "hint": "",
              "solution": "A joint distribution must be specified; pairwise correlations alone generally do not determine it. Under a Gaussian copula model, map marginal probabilities to normal thresholds, then integrate or simulate using the latent correlation matrix to obtain $P(\\tau_1\\le T,\\ldots,\\tau_k\\le T)$. Marginals without an adequate dependence model do not determine a unique answer.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:joint-defaults",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0158"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "已知若干主体的违约边际概率与相关结构，如何计算联合违约概率？",
                  "solution": "必须指定联合分布，单有边际及成对相关一般不能唯一确定联合违约。高斯copula中把边际概率映射到正态阈值，结合潜在正态相关矩阵积分或模拟，求P(τ₁≤T,…,τₖ≤T)。缺少充分依赖模型时无唯一答案。",
                  "title": "联合违约",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率"
                  ]
                }
              }
            },
            {
              "id": "4.3:stick-breaking-die",
              "title": "Stick-Breaking Die",
              "difficulty": "hard",
              "tags": [
                "probability",
                "Bayesian inference",
                "dice"
              ],
              "statement": "Generate fixed die probabilities by $p_1\\sim U(0,1)$, $p_2\\mid p_1\\sim U(0,1-p_1)$, and continue allocating uniformly from the remaining mass, leaving the remainder for $p_6$. Conditional on these probabilities, rolls are independent. Given that the first roll is 2, find the probability that the second is also 2.",
              "hint": "Compute E[p₂²]/E[p₂]; do not assume a conjugate prior.",
              "solution": "Write $p_2=(1-U_1)U_2$ for independent uniform variables. Then $E[p_2]=1/4$ and $E[p_2^2]=1/9$. The posterior predictive probability is $E[p_2^2]/E[p_2]=4/9$. This ordered stick-breaking prior is asymmetric and is not Dirichlet$(1,\\ldots,1)$.",
              "keyIdea": "Conditional independence given fixed parameters; Ratio E[p²]/E[p]; Compute both moments; Answer 4/9 and identify the prior",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.3:stick-breaking-die",
              "rubric": [
                "Conditional independence given fixed parameters",
                "Ratio E[p²]/E[p]",
                "Compute both moments",
                "Answer 4/9 and identify the prior"
              ],
              "verification": [
                "Direct integration of the first two moments of independent uniform variables."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0223"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "先生成固定骰子参数：p₁~U(0,1)，p₂|p₁~U(0,1-p₁)，以后依次从剩余质量中均匀分配，p₆取剩余值。随后给定参数独立掷骰。已知第一次结果是2，求第二次仍是2的概率。",
                  "hint": "后验预测计算E[p₂²]/E[p₂]，不能擅自假定共轭先验。",
                  "solution": "p₂=(1-U₁)U₂，U₁、U₂ iid U(0,1)，所以 E[p₂]=1/4，E[p₂²]=1/9。后验预测 P(X₂=2|X₁=2)=E[p₂²]/E[p₂]=4/9。该顺序折棒先验不对称，不是Dirichlet(1,…,1)。",
                  "keyIdea": "固定参数后条件独立；比值E[p²]/E[p]；正确两个矩；4/9并辨别先验",
                  "title": "折棒骰子",
                  "tags": [
                    "概率",
                    "贝叶斯推断",
                    "骰子"
                  ]
                }
              }
            },
            {
              "id": "4.3:tournament-meeting-round",
              "title": "Tournament Meeting Round",
              "difficulty": "hard",
              "tags": [
                "conditional probability",
                "expectation",
                "symmetry",
                "combinatorial counting",
                "binary expansion"
              ],
              "statement": "There are $n\\ge2$ equally strong players in a single-elimination tournament. At the start of every round, players are paired uniformly at random. Every match is a fair, independent contest. If the number of players is odd, one player is chosen uniformly at random for a bye and advances without playing. Pairings are drawn afresh in the next round. Play continues until one champion remains.\n\nFix two distinct players, P and Q. Let $A$ be the event that they face each other, and let $T$ be that round number, with the first round numbered 1. Find\n$$E[T\\mid A]$$\nas a function of $n$, including values of $n$ that are not powers of two. Justify the conditional distribution used in your answer.",
              "hint": "The number of players at the start of each round is deterministic. Count the matches in each round, then use exchangeability of the original player labels to assign a probability to a particular pair. Condition only after summing the meeting probabilities.",
              "solution": "Let $R=\\lceil\\log_2n\\rceil$ and let\n$$m_r=\\left\\lceil\\frac{n}{2^{r-1}}\\right\\rceil,\\qquad r=1,\\ldots,R+1.$$\nThere are $m_r$ players at the start of round $r$, and $m_{R+1}=1$. The number of matches in round $r$ is deterministic:\n$$a_r=\\lfloor m_r/2\\rfloor=m_r-m_{r+1}.$$\nA bye is not a match and cannot be a meeting of P and Q.\n\n**Use exchangeability across the original labels.** All $\\binom n2$ original unordered pairs have the same probability of being a match in round $r$. Exactly $a_r$ pairs play that round, so\n$$P(A,\\ T=r)=\\frac{a_r}{\\binom n2}.$$\nA pair can meet at most once. Since every played match eliminates exactly one player, $\\sum_ra_r=n-1$, hence\n$$P(A)=\\frac{n-1}{\\binom n2}=\\frac2n,\\qquad\nP(T=r\\mid A)=\\frac{a_r}{n-1}.$$\nIn particular, the conditional round is not uniform.\n\nTherefore an expression involving only $n$ and ceilings is\n$$\\boxed{E[T\\mid A]=\\frac1{n-1}\\sum_{r=1}^{R}r\\left(\\left\\lceil\\frac n{2^{r-1}}\\right\\rceil-\\left\\lceil\\frac n{2^r}\\right\\rceil\\right).}$$\nTelescoping gives a shorter form:\n$$\\sum_{r=1}^{R}r(m_r-m_{r+1})=\\sum_{r=1}^{R}(m_r-1)\n=\\sum_{k=0}^{R-1}\\left\\lfloor\\frac{n-1}{2^k}\\right\\rfloor.$$\nLet $s_2(q)$ denote the number of 1-bits in the binary expansion of $q$. If $q=\\sum_jb_j2^j$, then\n$$\\sum_{k\\ge0}\\left\\lfloor\\frac q{2^k}\\right\\rfloor\n=\\sum_jb_j(2^{j+1}-1)=2q-s_2(q).$$\nTaking $q=n-1$ yields the closed form\n$$\\boxed{E[T\\mid A]=2-\\frac{s_2(n-1)}{n-1},\\qquad n\\ge2.}$$\n\n**Checks.** For $n=2,3,4,5$, the means are $1,\\ 3/2,\\ 4/3,\\ 7/4$. When $n=2^k$, the expression reduces to $2-k/(2^k-1)$. The formula remains valid with repeated byes for arbitrary $n$; it does not assume a fixed power-of-two bracket.",
              "keyIdea": "Exchangeability makes a fixed pair representative of all original pairs. Conditional meeting-round weights are the deterministic match counts, which telescope to a binary digit-sum formula.",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.2:chess-tournament",
              "rubric": [
                "Use round numbers starting at 1 and handle every n>=2, including odd populations and repeated byes.",
                "Derive m_r=ceil(n/2^(r-1)) and a_r=m_r-m_(r+1).",
                "Use label exchangeability to obtain P(A,T=r)=a_r/binom(n,2), not a uniform conditional round.",
                "Normalize with P(A)=2/n and sum r*a_r/(n-1).",
                "Derive the telescoping sum and define s_2 before stating 2-s_2(n-1)/(n-1)."
              ],
              "verification": [
                "Derived the round distribution by counting matches and original-label exchangeability.",
                "Executed an independent exact-rational tagged-pair survival recurrence for n=2..1024. Every meeting probability equaled 2/n and every conditional mean matched the closed form.",
                "Checked n=2,3,4,5,8,9: means 1,3/2,4/3,7/4,11/7,15/8, respectively."
              ],
              "followups": [
                "Why does conditioning on eventual meeting give the same round weights as selecting a played match uniformly?",
                "What simplifies when n is a power of two?",
                "Which part of the argument can fail if the specified players have different strengths or byes favor particular labels?"
              ],
              "sources": [
                {
                  "type": "user",
                  "reference": "conversation:2026-10-20",
                  "locator": "Random single-elimination tournament: conditional expected meeting round of two specified players"
                }
              ],
              "revision": 1,
              "translations": {
                "zh": {
                  "title": "淘汰赛相遇轮数",
                  "tags": [
                    "条件概率",
                    "期望",
                    "对称性",
                    "组合计数",
                    "二进制展开"
                  ],
                  "statement": "$n\\ge2$ 名实力相同的选手参加单败淘汰赛。每轮开始时均匀随机两两配对，每场双方各以 $1/2$ 的概率获胜，各场赛果独立。该轮人数为奇数时，均匀随机选一人轮空，直接晋级；下一轮重新随机配对，直到产生唯一冠军。\n\n指定两名不同选手甲、乙。设事件 $A$ 表示二人最终在一场比赛中相遇，$T$ 为相遇轮数，第一轮编号为1。求\n$$E[T\\mid A]$$\n用 $n$ 表示结果，须覆盖 $n$ 不是二的幂的情形，并说明所用条件分布的依据。",
                  "hint": "每轮开始时人数是确定的。先数该轮实际比赛场数，再利用原始选手标签的交换对称性，得到某一指定选手对在该轮相遇的概率；最后才对“最终相遇”条件化。",
                  "solution": "令 $R=\\lceil\\log_2n\\rceil$，第 $r$ 轮开始时人数为\n$$m_r=\\left\\lceil\\frac n{2^{r-1}}\\right\\rceil,\\qquad r=1,\\ldots,R+1.$$\n其中 $m_{R+1}=1$。第 $r$ 轮实际场数确定为\n$$a_r=\\lfloor m_r/2\\rfloor=m_r-m_{r+1}.$$\n轮空不算比赛，也不算甲乙相遇。\n\n**对原始选手标签使用交换对称性。** 原始 $\\binom n2$ 对选手，在第 $r$ 轮成为交手双方的概率相同。该轮恰有 $a_r$ 对交手，所以\n$$P(A,\\ T=r)=\\frac{a_r}{\\binom n2}.$$\n同一对最多相遇一次。每场淘汰一人，全程恰有 $n-1$ 场，故\n$$P(A)=\\frac{n-1}{\\binom n2}=\\frac2n,\\qquad\nP(T=r\\mid A)=\\frac{a_r}{n-1}.$$\n因此条件轮数并不均匀。\n\n得到仅含 $n$ 的求和式：\n$$\\boxed{E[T\\mid A]=\\frac1{n-1}\\sum_{r=1}^{R}r\\left(\\left\\lceil\\frac n{2^{r-1}}\\right\\rceil-\\left\\lceil\\frac n{2^r}\\right\\rceil\\right).}$$\n望远镜求和进一步化为\n$$\\sum_{r=1}^{R}r(m_r-m_{r+1})=\\sum_{r=1}^{R}(m_r-1)\n=\\sum_{k=0}^{R-1}\\left\\lfloor\\frac{n-1}{2^k}\\right\\rfloor.$$\n定义 $s_2(q)$ 为非负整数 $q$ 的二进制展开中1的个数。若 $q=\\sum_jb_j2^j$，则\n$$\\sum_{k\\ge0}\\left\\lfloor\\frac q{2^k}\\right\\rfloor\n=\\sum_jb_j(2^{j+1}-1)=2q-s_2(q).$$\n令 $q=n-1$，最终闭式为\n$$\\boxed{E[T\\mid A]=2-\\frac{s_2(n-1)}{n-1},\\qquad n\\ge2.}$$\n\n**核对。** $n=2,3,4,5$ 时，期望依次为 $1,3/2,4/3,7/4$。当 $n=2^k$ 时化为 $2-k/(2^k-1)$。该公式涵盖任意 $n$ 的多轮轮空，不需要固定的二的幂规模签表。",
                  "keyIdea": "指定选手对与所有原始选手对交换对称；相遇后的条件轮数权重就是各轮实际场数，望远镜求和再化为二进制位数公式。"
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "条件概率与贝叶斯公式",
              "note": "$P(A\\mid B)=P(AB)/P(B)$。常用工具包括**乘法公式**、**全概率公式**$P(A)=\\sum_iP(A\\mid F_i)P(F_i)$，以及反转条件方向的**贝叶斯公式**。"
            }
          }
        },
        {
          "id": "4.4",
          "title": "Discrete & Continuous Distributions",
          "note": "Know the common distributions cold (uniform, binomial, Poisson, geometric, normal, exponential). **Memorylessness** of the exponential and **moment generating functions** are recurring tools.",
          "problems": [
            {
              "title": "Meeting Probability",
              "difficulty": "medium",
              "tags": [
                "geometric probability",
                "uniform",
                "probability"
              ],
              "statement": "A and B arrive independently and uniformly on $[0,T]$, where $T>0$. Each waits $w\\ge0$, possibly beyond T. Find their probability of meeting.",
              "hint": "Represent arrival times on a T-by-T square. They meet exactly when their difference is at most w.",
              "solution": "For $0\\le w<T$, meeting means $|A-B|\\le w$. Removing two right triangles from the arrival-time square gives $1-(1-w/T)^2$. For $w\\ge T$, the probability is 1; for $w=0$, it is 0.",
              "keyIdea": "Independent uniform arrivals; Bound the arrival-time difference; Piecewise formula and boundaries",
              "id": "4.4:meeting-probability",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.4:meeting-probability",
              "rubric": [
                "Independent uniform arrivals",
                "Bound the arrival-time difference",
                "Piecewise formula and boundaries"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.4 / Meeting Probability"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0115"
                }
              ],
              "verification": [
                "Compute the area in the two-dimensional arrival-time square."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "A、B 独立均匀到达区间 [0,T]，T>0；两人各等待 w≥0（可等到 T 之后）。求相遇概率。",
                  "solution": "当0≤w<T，相遇等价于|A-B|≤w，单位正方形去掉两个直角三角形，概率1-(1-w/T)²。w≥T时概率1；w=0时连续到达相等的概率0。",
                  "keyIdea": "独立均匀；差值约束；分段与边界",
                  "title": "相遇概率",
                  "hint": "在T×T到达时刻正方形内，条件为到达时间差不超过w。",
                  "tags": [
                    "几何概率",
                    "均匀分布",
                    "概率"
                  ]
                }
              }
            },
            {
              "title": "Probability of Triangle",
              "difficulty": "hard",
              "tags": [
                "geometric probability",
                "uniform",
                "probability"
              ],
              "statement": "Choose two breakpoints independently and uniformly on a unit stick and cut at those locations. What is the probability that the three pieces form a nondegenerate triangle?",
              "hint": "Let the cut points be $x$ and $y$; the three pieces form a triangle iff no piece exceeds $1/2$.",
              "solution": "A triangle forms exactly when every piece is shorter than $1/2$. For ordered cuts $0<u<v<1$, require $u<1/2$, $v>1/2$, and $v-u<1/2$. The admissible area is $1/8$ out of total area $1/2$, so the probability is $1/4$. Breaking once and then choosing a piece to break is a different sampling model.",
              "keyIdea": "Specify the breakpoint model; Longest piece shorter than half; Probability 1/4",
              "id": "4.4:probability-of-triangle",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.4:probability-of-triangle",
              "rubric": [
                "Specify the breakpoint model",
                "Longest piece shorter than half",
                "Probability 1/4"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.4 / Probability of Triangle"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0116"
                }
              ],
              "verification": [
                "Area ratio in the ordered-breakpoint triangle."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在单位棍子上独立均匀选两个断点，按其位置折成三段。求三段能组成非退化三角形的概率。",
                  "solution": "三角形条件等价于每段长度都小于1/2。对有序断点0<u<v<1，条件为u<1/2、v>1/2、v-u<1/2，合法面积1/8、总面积1/2，概率1/4。若改成先折再随机选段折，模型不同。",
                  "keyIdea": "指定断点模型；最长段小于半长；1/4",
                  "title": "折棍成三角",
                  "hint": "三段能成三角形当且仅当每段小于总长的一半。",
                  "tags": [
                    "几何概率",
                    "均匀分布",
                    "概率"
                  ]
                }
              }
            },
            {
              "title": "Property of Poisson Process",
              "difficulty": "hard",
              "tags": [
                "Poisson process",
                "memorylessness"
              ],
              "statement": "Buses arrive as a Poisson process with mean inter-arrival time 10 min ($\\lambda = 0.1$/min). You arrive at a random time. What is your expected waiting time for the next bus? On average, how long ago did the last bus leave?",
              "hint": "Use the memorylessness of the exponential inter-arrival distribution.",
              "solution": "In a Poisson process the gaps between buses are **exponential** with mean $1/\\lambda = 10$ min, and the exponential is **memoryless**: the distribution of 'time until the next event' doesn't depend on how long you've already waited.\n\nSo when you show up at a random time, the wait for the **next** bus is still exponential with mean **10 minutes** — it doesn't matter that a bus may have left moments ago. By the identical (time-reversed) argument, the time **since the last** bus also averages **10 minutes**.\n\n**The apparent paradox:** forward 10 + backward 10 = **20 minutes** for the gap you landed in — twice the 'average' gap of 10! Both are correct. The resolution is the **inspection paradox**: a randomly chosen instant is more likely to fall inside a *long* gap than a short one, so the gap you sample is biased long. (For a general distribution the expected forward wait is $\\frac{E[X^2]}{2E[X]}$, which exceeds $\\frac{E[X]}{2}$ whenever the gaps have any variance.)",
              "keyIdea": "Memorylessness makes forward and backward waiting times each ~10 min; the apparent contradiction (20-min straddled interval) is the inspection paradox.",
              "id": "4.4:property-of-poisson-process",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:property-of-poisson-process",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.4 / Property of Poisson Process"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "泊松观察悖论",
                  "statement": "公交按速率0.1/分钟的泊松过程到达，平均间隔10分钟。你在随机时刻到达，等下一班的平均时间是多少？上一班平均多久前离开？",
                  "solution": "在平稳泊松模型中，指数分布无记忆，向前等待仍是均值10分钟的指数分布；时间反演同理，向后间隔也均值10分钟。两者和平均20分钟，不矛盾：随机时刻更易落在长间隔中，这是观察悖论。一般平稳更新过程中，有限二阶矩下平均前向等待为$E[X^2]/(2E[X])$。",
                  "hint": "使用指数分布的无记忆性，并区分随机时刻抽样与随机间隔抽样。",
                  "keyIdea": "长度偏置造成观察悖论。",
                  "tags": [
                    "泊松过程",
                    "无记忆性"
                  ]
                }
              }
            },
            {
              "title": "Moments of Normal Distribution",
              "difficulty": "hard",
              "tags": [
                "normal distribution",
                "moment generating function",
                "probability",
                "moments"
              ],
              "statement": "Give every nonnegative integer moment of a standard normal variable $Z$. Explain how to obtain the raw moments of $X\\sim N(\\mu,\\sigma^2)$.",
              "hint": "Odd moments vanish by symmetry. For even moments use the moment generating function $M(t) = e^{t^2/2}$.",
              "solution": "Symmetry gives $E[Z^{2k+1}]=0$. Integration by parts yields $E[Z^{2k}]=(2k-1)E[Z^{2k-2}]$, hence $(2k-1)!!=(2k)!/(2^k k!)$, with $E[Z^0]=1$. Expand $X=\\mu+\\sigma Z$ by the binomial theorem to obtain its raw moments.",
              "keyIdea": "Odd moments vanish; Even-moment recurrence and closed form; Distinguish raw and central moments",
              "id": "4.4:moments-of-normal-distribution",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.4:moments-of-normal-distribution",
              "rubric": [
                "Odd moments vanish",
                "Even-moment recurrence and closed form",
                "Distinguish raw and central moments"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.4 / Moments of Normal Distribution"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0155"
                }
              ],
              "verification": [
                "Integration by parts using the standard normal identity $\\phi\\prime(z)=-z\\phi(z)$."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "给出标准正态 Z 的所有整数阶非负矩，并说明如何得到 X~N(μ,σ²) 的原点矩。",
                  "solution": "对称性给出 E[Z^(2k+1)]=0，分部积分给出 E[Z^(2k)]=(2k-1)E[Z^(2k-2)]，因此为(2k-1)!!=(2k)!/(2^k k!)，E[Z^0]=1。X=μ+σZ 后用二项展开求任意原点矩。",
                  "keyIdea": "奇数矩0；偶数矩递推和闭式；区分原点矩与中心矩",
                  "title": "正态分布矩",
                  "hint": "奇数阶用对称性，偶数阶可用矩母函数或分部积分。",
                  "tags": [
                    "正态分布",
                    "矩母函数",
                    "概率",
                    "矩"
                  ]
                }
              }
            },
            {
              "id": "4.4:polar-walk",
              "title": "Polar Walk",
              "difficulty": "medium",
              "tags": [
                "probability",
                "combinatorial counting",
                "combinatorial probability"
              ],
              "statement": "Where on Earth can you start, walk 1 km south, 1 km west, then 1 km north, and return to your starting point?",
              "hint": "",
              "solution": "The North Pole is one solution. There are infinitely many near the South Pole: after walking south, you reach a latitude circle whose circumference is 1/k km for a positive integer k, so the westward leg makes exactly k full circuits.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:polar-walk",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0082"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "经典的在地球上，从哪里出发，向南 1km，转西 1km，再向北 1km，会回到原点？",
                  "solution": "北极是一个解；此外南极附近也有无穷多个解，即出发点位于“向南 1km 后落到某条纬线，沿该纬线向西 1km 正好绕整数圈”的那些点。",
                  "title": "极地行走",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "组合计数",
                    "组合概率"
                  ]
                }
              }
            },
            {
              "id": "4.4:points-in-a-hemisphere",
              "title": "Points in a Hemisphere",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "geometric probability",
                "combinatorial counting",
                "expectation and variance",
                "combinatorial probability"
              ],
              "statement": "Choose five points independently and uniformly on a sphere. What is the probability that some hemisphere contains all five?",
              "hint": "",
              "solution": "Wendel's theorem gives $2^{1-5}[\\binom40+\\binom41+\\binom42]=11/16$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:points-in-a-hemisphere",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0127"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "独立均匀取球面5个点，求存在一个半球包含全部5点的概率。",
                  "solution": "由 Wendel 定理，概率是 2^(1-5)·[C(4,0)+C(4,1)+C(4,2)] = 11/16。",
                  "title": "半球覆盖",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "几何概率",
                    "组合计数",
                    "期望与方差",
                    "组合概率"
                  ]
                }
              }
            },
            {
              "id": "4.4:obtuse-disk-triangle",
              "title": "Obtuse Disk Triangle",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "geometric probability",
                "expectation and variance"
              ],
              "statement": "Choose A and B independently and uniformly inside the unit disk, with center O. Find the probability that triangle OAB is obtuse.",
              "hint": "",
              "solution": "The probability is $3/4$. Equivalently, the acute-triangle probability is $1/4$; right and degenerate triangles have probability zero.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:obtuse-disk-triangle",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0129"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在单位圆盘内独立均匀取A、B，O为圆心，求三角形OAB为钝角三角形的概率。",
                  "solution": "结果是 3/4。可先算锐角三角形概率为 1/4，再取补集。",
                  "title": "圆盘钝角三角形",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "几何概率",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.4:separated-uniform-samples",
              "title": "Separated Uniform Samples",
              "difficulty": "medium",
              "tags": [
                "probability",
                "expectation",
                "expectation and variance"
              ],
              "statement": "Let X, Y, Z be independent U(0,6) variables. Find the probability that every pairwise absolute difference is strictly greater than 1.",
              "hint": "",
              "solution": "Sort the three values and subtract 0, 1, and 2 from them, respectively. This transforms the admissible ordered region into the ordered simplex of an interval of length 4. Its volume ratio is $(4/6)^3=8/27$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:separated-uniform-samples",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0131"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "X、Y、Z独立服从U(0,6)，求两两绝对差均严格大于1的概率。",
                  "solution": "先将三值排序，再分别减去0、1、2，满足相邻差大于1的有序区域转成长度4区间内的有序单纯形。体积比为(4/6)³=8/27。",
                  "title": "均匀样本间距",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.4:nearest-radius",
              "title": "Nearest Radius",
              "difficulty": "medium",
              "tags": [
                "probability",
                "order statistics",
                "geometric probability"
              ],
              "statement": "Choose $N\\ge1$ independent uniform points inside the three-dimensional unit ball. Find the median of their minimum distance D from the center.",
              "hint": "",
              "solution": "A single radius has CDF $r^3$ for $0\\le r\\le1$. Independence gives $P(D>r)=(1-r^3)^N$. The median solves $(1-m^3)^N=1/2$, giving $m=(1-2^{-1/N})^{1/3}$.",
              "keyIdea": "Volume ratio r³; Minimum-distance survival function by independence; Solve the median equation",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.4:nearest-radius",
              "rubric": [
                "Volume ratio r³",
                "Minimum-distance survival function by independence",
                "Solve the median equation"
              ],
              "verification": [
                "Volume scaling and independence."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0164"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在三维单位实心球内独立均匀取N≥1个点，到球心的最小距离D的中位数是多少？",
                  "solution": "单点半径CDF为r³（0≤r≤1），P(D>r)=(1-r³)^N。中位数m满足(1-m³)^N=1/2，所以m=(1-2^(-1/N))^(1/3)。",
                  "keyIdea": "实心球体积比r³；独立求最小值生存函数；中位数方程",
                  "title": "最近半径",
                  "hint": "",
                  "tags": [
                    "概率",
                    "次序统计量",
                    "几何概率"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "离散与连续分布",
              "note": "熟悉均匀、二项、泊松、几何、正态及指数等常见分布。指数分布的**无记忆性**与**矩母函数**是反复出现的工具。"
            }
          }
        },
        {
          "id": "4.5",
          "title": "Expected Value, Variance & Covariance",
          "note": "Use **indicator variables** + linearity of expectation to dodge hard counting. Key identities: $\\mathrm{Var}(X) = E[X^2] - E[X]^2$, $\\mathrm{Cov}(X,Y) = E[XY] - E[X]E[Y]$, and the **law of total expectation**.",
          "problems": [
            {
              "title": "Connecting Noodles",
              "difficulty": "medium",
              "tags": [
                "expectation",
                "recursion",
                "induction",
                "probability",
                "combinatorial counting"
              ],
              "statement": "Pair the 2n endpoints of n noodles uniformly at random. Find the expected final number of loops and the probability of forming exactly one loop.",
              "hint": "Start with 1 noodle, then 2. Each tie either joins two noodles or closes a loop.",
              "solution": "**Set up a recursion on the number of noodles.** With $n$ noodles there are $2n$ loose ends. Grab one end (any of them) and tie it to a *random* second end. There are $2n - 1$ other ends to tie to, and exactly **one** of them is the *other end of the same noodle* — tying those two closes a **loop**.\n\nSo each tie forms a new loop with probability $\\tfrac{1}{2n-1}$, and afterward you're left with $n-1$ noodles' worth of free ends. By linearity of expectation:\n$$E[f(n)] = \\frac{1}{2n-1} + E[f(n-1)], \\qquad E[f(1)] = 1.$$\n\nUnrolling the recursion gives a sum of odd reciprocals:\n$$E[f(n)] = 1 + \\frac{1}{3} + \\frac{1}{5} + \\cdots + \\frac{1}{2n-1}.$$\n\nFor 100 noodles, $E[f(100)] = \\sum_{k=1}^{100}\\frac{1}{2k-1} \\approx 3.28$ loops. (It grows like $\\tfrac12\\ln n$ — very slowly, so even 100 noodles average only ~3 loops.)\n\nThe probability of exactly one loop is $2^{n-1}(n-1)!/(2n-1)!!$.",
              "keyIdea": "Each tie closes a loop with probability $\\frac{1}{2n-1}$; linearity of expectation turns the process into a harmonic-like sum.",
              "id": "4.5:connecting-noodles",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:connecting-noodles",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Connecting Noodles"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0156"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n根面条的2n个端点等概率随机完全配对相连，求最终环数期望以及恰形成一个环的概率。",
                  "solution": "剩m条未闭合链时，固定一个端点，与其同链另一端相接的概率为1/(2m-1)，产生一环；否则合并两链。故期望递推Eₘ=Eₘ₋₁+1/(2m-1)，E₁=1，得到$\\sum_{k=1}^n1/(2k-1)$。n=100约3.28。恰成一大环的概率为$2^{n-1}(n-1)!/(2n-1)!!$。",
                  "title": "面条成环",
                  "hint": "一次连接要么合并两条链，要么闭合一个环。",
                  "keyIdea": "逐步闭环概率与期望线性性。",
                  "tags": [
                    "期望",
                    "递归",
                    "归纳",
                    "概率",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "title": "Optimal Hedge Ratio",
              "difficulty": "medium",
              "tags": [
                "variance",
                "covariance",
                "optimization",
                "statistics"
              ],
              "statement": "Returns A and B have finite standard deviations $\\sigma_A,\\sigma_B>0$ and correlation $\\rho$. Find the real h minimizing Var(A-hB). Explain the case $\\rho<0$.",
              "hint": "Write the portfolio variance as a function of $h$ and minimize.",
              "solution": "The variance is $\\sigma_A^2+h^2\\sigma_B^2-2h\\rho\\sigma_A\\sigma_B$. Differentiation gives $h^*=\\rho\\sigma_A/\\sigma_B$ and minimum variance $\\sigma_A^2(1-\\rho^2)$. If correlation is negative, h is negative, corresponding to a long position in B. Under h≥0, use $\\max(0,\\rho\\sigma_A/\\sigma_B)$.",
              "keyIdea": "Quadratic variance; Optimal hedge ratio; Constraints and correlation sign",
              "id": "4.5:optimal-hedge-ratio",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.5:optimal-hedge-ratio",
              "rubric": [
                "Quadratic variance",
                "Optimal hedge ratio",
                "Constraints and correlation sign"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Optimal Hedge Ratio"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0157"
                }
              ],
              "verification": [
                "First-order condition for a strictly convex quadratic."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "随机收益 A、B 的有限标准差分别为 σ_A、σ_B>0，相关系数ρ。求使 Var(A-hB) 最小的实数h，并解释ρ<0的情形。",
                  "solution": "方差=σ_A²+h²σ_B²-2hρσ_Aσ_B，求导得 h*=ρσ_A/σ_B，最小方差σ_A²(1-ρ²)。ρ<0时最优h<0，对应加多B而非做空；若强制h≥0，则最优为max(0,ρσ_A/σ_B)。",
                  "keyIdea": "二次方差；最优比例；约束与相关性符号",
                  "title": "最优对冲比例",
                  "hint": "把方差写成h的二次函数再求最小值。",
                  "tags": [
                    "方差",
                    "协方差",
                    "优化",
                    "统计"
                  ]
                }
              }
            },
            {
              "title": "Dice Game",
              "difficulty": "medium",
              "tags": [
                "law of total expectation",
                "recursion"
              ],
              "statement": "You roll a die and are paid its face value. If the roll is 4, 5, or 6 you may roll again — keeping what you've earned and adding the new roll. You stop once you roll 1, 2, or 3. What is the expected total payoff?",
              "hint": "Let $E$ be the expected payoff and condition on the first roll. You keep the 4/5/6 payment AND get to play the same game again.",
              "solution": "Let $E$ be the expected payoff. Condition on the first roll $Y$ (law of total expectation):\n\n- With prob $1/2$, $Y \\in \\{1,2,3\\}$ and the game stops. Expected payment $= 2$.\n- With prob $1/2$, $Y \\in \\{4,5,6\\}$: you collect that face value (average $5$) **and** roll again, which restarts an identical game worth $E$. So this branch is worth $5 + E$.\n\nTherefore\n$$E = \\tfrac{1}{2}(2) + \\tfrac{1}{2}(5 + E) = 1 + 2.5 + 0.5E \\Rightarrow 0.5E = 3.5 \\Rightarrow E = 7.$$",
              "keyIdea": "Condition on the first roll and solve the fixed-point equation. Because high rolls pay out *and* grant another turn, the expected payoff (7) far exceeds a single roll's mean (3.5).",
              "id": "4.5:dice-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:dice-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Dice Game"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "掷骰累积收益",
                  "statement": "掷公平骰子，点数为本次收益。若为4、5、6则保留收益并继续，为1、2、3则停止。求总收益期望。",
                  "solution": "设E为期望。首次低点概率1/2，条件均值2；高点概率1/2，条件收益5并重新开始。因此E=(1/2)·2+(1/2)(5+E)，解得E=7。",
                  "hint": "按首次点数条件化，高点既产生收益又提供继续机会。",
                  "keyIdea": "首步分析给自相似期望方程。",
                  "tags": [
                    "全期望公式",
                    "递归"
                  ]
                }
              }
            },
            {
              "title": "First Ace",
              "difficulty": "medium",
              "tags": [
                "indicator variables",
                "expectation",
                "symmetry",
                "probability",
                "order statistics"
              ],
              "statement": "Draw sequentially without replacement from a uniformly shuffled standard 52-card deck until the first ace. Find the expected number of draws, including the ace.",
              "hint": "The four aces split the 48 non-aces into five exchangeable gaps.",
              "solution": "The four aces split the 48 non-aces into five gaps with equal expected size. The initial gap has mean 48/5, so the expected draw count including the ace is $48/5+1=53/5=10.6$.",
              "keyIdea": "Sampling without replacement; Gap symmetry or negative hypergeometric law; Include the ace draw",
              "id": "4.5:first-ace",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.5:first-ace",
              "rubric": [
                "Sampling without replacement",
                "Gap symmetry or negative hypergeometric law",
                "Include the ace draw"
              ],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Card Game (Expected Position)"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0119"
                }
              ],
              "verification": [
                "Exchangeable gaps or the minimum-order-statistic formula $(52+1)/(4+1)$."
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "均匀洗匀一副不含大小王的52张牌，不放回依次抽到第一张A为止，含A那次共抽几次的期望是多少？",
                  "solution": "4张A将48张非A分成5段，5段期望长度相同，首段期望48/5，因此总次数期望48/5+1=53/5=10.6。",
                  "keyIdea": "不放回；间隙对称性或负超几何；包含A那次",
                  "title": "首张A",
                  "hint": "四张A把其余48张分为五段，这些间隙期望相同。",
                  "tags": [
                    "指示变量",
                    "期望",
                    "对称性",
                    "概率",
                    "次序统计量"
                  ]
                }
              }
            },
            {
              "title": "Sum of Random Variables",
              "difficulty": "hard",
              "tags": [
                "uniform",
                "induction",
                "geometry"
              ],
              "statement": "$X_1, X_2, \\dots$ are i.i.d. $U[0,1]$. What is the probability that $S_n = X_1 + \\cdots + X_n \\le 1$?",
              "hint": "It's the volume of an $n$-dimensional simplex. Try $n=2,3$, find the pattern, prove by induction.",
              "solution": "**Geometric picture first.** Since each $X_i \\sim U[0,1]$, the point $(X_1,\\dots,X_n)$ is uniform in the unit cube, so $P(S_n \\le 1)$ is just the **volume** of the slice $\\{x_i \\ge 0,\\; \\sum x_i \\le 1\\}$ — the standard $n$-simplex.\n\nCheck small cases: $n=2$ is a triangle of area $\\tfrac12$; $n=3$ is a tetrahedron of volume $\\tfrac16$. The pattern is\n$$P(S_n \\le 1) = \\frac{1}{n!}.$$\n\n**Prove it by induction**, peeling off the last variable. Condition on $X_{n+1} = x$: the remaining $n$ must sum to $\\le 1 - x$, which by the inductive hypothesis has probability $\\frac{(1-x)^n}{n!}$. Integrate over $x \\in [0,1]$:\n$$P(S_{n+1}\\le 1) = \\int_0^1 \\frac{(1-x)^n}{n!}\\,dx = \\frac{1}{n!}\\cdot\\frac{1}{n+1} = \\frac{1}{(n+1)!}. \\;\\checkmark$$",
              "keyIdea": "The event is the volume of a simplex; conditioning on the last variable gives the clean induction $\\frac{1}{n!} \\to \\frac{1}{(n+1)!}$.",
              "id": "4.5:sum-of-random-variables",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:sum-of-random-variables",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Sum of Random Variables"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "均匀随机变量和",
                  "statement": "X₁、X₂、…独立同服从U(0,1)，求$P(X_1+\\cdots+X_n\\le1)$。",
                  "solution": "这是单位立方体内标准单纯形$\\{x_i\\ge0,\\sum x_i\\le1\\}$的体积，为1/n!。可对最后一维归纳：若n维阈值t≤1的体积为tⁿ/n!，则n+1维为$\\int_0^1(1-x)^n/n!\\,dx=1/(n+1)!$。",
                  "hint": "先看二维三角形与三维四面体体积，再归纳。",
                  "keyIdea": "事件等价于单纯形体积，条件积分降维。",
                  "tags": [
                    "均匀分布",
                    "归纳",
                    "几何"
                  ]
                }
              }
            },
            {
              "title": "Coupon Collection",
              "difficulty": "medium",
              "tags": [
                "geometric distribution",
                "expectation",
                "probability",
                "combinatorial counting"
              ],
              "statement": "Each draw independently selects one of N coupon types uniformly, with repetition allowed. For N≥1, find the expected draws needed to collect every type.\n\n**Extension:** If n types are already owned, find the expected distinct types owned after m further draws, for 0≤n≤N and m≥0.",
              "hint": "Part A: after collecting $i-1$ types, the wait for a new type is geometric. Part B: use an indicator for each type.",
              "solution": "After i distinct types have been collected, the next new type arrives with probability $(N-i)/N$ per draw. Summing geometric waiting times gives $E[T]=N\\sum_{j=1}^N1/j=NH_N$.\n\nFor the extension, each of the N-n initially missing types remains absent with probability $(1-1/N)^m$. By linearity, the expected distinct count is $N-(N-n)(1-1/N)^m$. At m=0 this is n; interpret the zero-draw case directly when N=1.",
              "keyIdea": "Geometric stages for full collection; Indicators for initially missing types; Linearity of expectation",
              "id": "4.5:coupon-collection",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:coupon-collection",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Coupon Collection"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0121"
                },
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0122"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "每次独立等概率抽取N种优惠券之一，允许重复。集齐全部N种需要的抽取次数期望是多少？N≥1。\n\n**推广：** 每次独立等概率抽取N种优惠券之一，当前已拥有其中n种。再抽m次后，已拥有的不同种数期望是多少？0≤n≤N、m≥0。",
                  "solution": "已有i种时，下一种新券每次出现概率(N-i)/N，等待均值N/(N-i)。相加得集齐期望$NH_N=N\\sum_{j=1}^N1/j$。推广：原缺N-n种，每种再抽m次仍未出现的概率为(1-1/N)ᵐ，因此期望不同种数为N-(N-n)(1-1/N)ᵐ。m=0直接为n；N=1时零次抽取单独解释以避免0⁰记号歧义。",
                  "title": "优惠券收集",
                  "hint": "集齐用几何等待分阶段；已有部分券时对缺失种类用指示变量。",
                  "keyIdea": "几何阶段求和与缺失指示变量的期望线性性。",
                  "tags": [
                    "几何分布",
                    "期望",
                    "概率",
                    "组合计数"
                  ]
                }
              }
            },
            {
              "title": "Joint Default Probability",
              "difficulty": "hard",
              "tags": [
                "covariance",
                "correlation",
                "bounds"
              ],
              "statement": "Bond A defaults next year with prob 50%, bond B with 30%, and their default correlation is 0.3. What is the probability that **at least one** defaults? And what is the range of possible correlations?",
              "hint": "Write $P(A \\text{ or } B) = P(A) + P(B) - P(AB)$ and express $P(AB)$ via covariance of the default indicators.",
              "solution": "**Turn 'default' into a 0/1 variable.** Let $I_A, I_B$ be indicators (1 = default). A Bernoulli with default prob $p$ has mean $p$ and variance $p(1-p)$:\n$$E[I_A]=0.5,\\; \\mathrm{Var}(I_A)=0.25; \\qquad E[I_B]=0.3,\\; \\mathrm{Var}(I_B)=0.21.$$\n\n**Step 1 — get $P(\\text{both default})$ from the correlation.** Correlation × the two standard deviations gives covariance, and covariance unwinds to the joint probability:\n$$\\mathrm{Cov} = \\rho\\sqrt{\\mathrm{Var}(I_A)\\mathrm{Var}(I_B)} = 0.3\\sqrt{0.25\\cdot0.21} \\approx 0.0687,$$\n$$P(AB) = \\mathrm{Cov} + E[I_A]E[I_B] = 0.0687 + 0.15 = 0.2187.$$\n\n**Step 2 — inclusion–exclusion for 'at least one.'**\n$$P(A \\text{ or } B) = P(A) + P(B) - P(AB) = 0.5 + 0.3 - 0.2187 \\approx 0.581.$$\n\n**Bonus — correlation can't be anything.** $P(AB)$ is squeezed between $\\max(0, p_A{+}p_B{-}1)=0$ and $\\min(p_A,p_B)=0.3$. Converting those bounds back through the covariance formula limits the achievable correlation to roughly $\\rho \\in [-0.655,\\, 0.655]$ — so a default correlation of, say, 0.9 would be mathematically impossible for these two bonds.",
              "keyIdea": "Default indicators turn correlation into covariance, pinning down $P(AB)$; admissible joint probabilities bound the achievable correlation.",
              "id": "4.5:joint-default-probability",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:joint-default-probability",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.5 / Joint Default Probability"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "联合违约概率",
                  "statement": "债券A一年内违约概率50%，B为30%，违约指示变量相关系数0.3。求至少一方违约概率，以及相关系数可行范围。",
                  "solution": "违约指示变量均值为0.5、0.3，方差为0.25、0.21。故协方差$0.3\\sqrt{0.25\\cdot0.21}\\approx0.0687$，联合违约概率0.15+0.0687≈0.2187。容斥给至少一方违约概率0.8-0.2187≈0.5813。联合概率须在[0,0.3]内，转换为相关系数范围约[-0.655,0.655]。",
                  "hint": "将相关系数转为协方差，再解联合指示变量期望。",
                  "keyIdea": "Bernoulli联合概率受边际约束，相关不能任取。",
                  "tags": [
                    "协方差",
                    "相关性",
                    "界"
                  ]
                }
              }
            },
            {
              "id": "4.5:matching-dice-scores",
              "title": "Matching Dice Scores",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "variance",
                "expectation and variance"
              ],
              "statement": "Each of n people independently rolls a fair six-sided die. Every unordered pair with matching faces scores one point. Find the total score's expectation and variance. Repeat when a pair matching on face k scores k points.",
              "hint": "",
              "solution": "Let $m=\\binom n2$. A match indicator has mean 1/6 and variance 5/36. Disjoint pairs are independent; overlapping pairs have joint match probability 1/36 and zero covariance. Thus $E[S]=m/6$ and $\\operatorname{Var}(S)=5m/36$.\n\nFor weighted pair score Z, $E[Z]=7/12$, $E[Z^2]=91/36$, and $\\operatorname{Var}(Z)=35/16$. Two pairs sharing a person have product expectation 91/216 and covariance 35/432. Each triple contributes three unordered overlapping pair-pairs, with a factor of two in the variance expansion. Therefore $E[T]=7m/12$ and $\\operatorname{Var}(T)=35m/16+35\\binom n3/72$.",
              "keyIdea": "Pair indicators and covariances; Shared-person scores need not be independent; Weighted first and second moments; Count cross terms",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.5:matching-dice-scores",
              "rubric": [
                "Pair indicators and covariances",
                "Shared-person scores need not be independent",
                "Weighted first and second moments",
                "Count cross terms"
              ],
              "verification": [
                "Sum over outcomes for one pair and two overlapping pairs; for n=3, enumerate all 6³ rolls."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0091"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n人各独立掷一个公平六面骰。每对人若点数相同便得1分，求总分期望和方差；若同点数k的一对改得k分，期望与方差又是多少？",
                  "solution": "设m=C(n,2)。每对同点指示期望1/6、方差5/36；不交叠对独立，共享一人时两个指示的联合概率1/36，协方差也为0。因此总分期望m/6、方差5m/36。加权时每对得分Z满足E[Z]=7/12、E[Z²]=91/36、Var(Z)=35/16；共享一人的两对得分联合期望91/216，协方差35/432。每组三人有3组共享人的无序边对，方差的交叉项还要乘2，故E[T]=7m/12、Var(T)=35m/16+35C(n,3)/72。",
                  "keyIdea": "指示变量与成对协方差；不能将共享人的得分误认为独立；加权一二阶矩；交叉项计数",
                  "title": "同点骰子得分",
                  "hint": "",
                  "tags": [
                    "概率",
                    "期望",
                    "方差",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:coin-runs",
              "title": "Coin Runs",
              "difficulty": "medium",
              "tags": [
                "probability",
                "expectation",
                "stochastic processes",
                "expectation and variance"
              ],
              "statement": "Toss a coin independently n≥1 times, with head probability p. Find the mean and variance of the number of runs of identical outcomes. For example, HHTHTTH has five runs.",
              "hint": "",
              "solution": "For n≥2, $E[R]=1+2(n-1)p(1-p)$ and $\\operatorname{Var}(R)=2p(1-p)[(2n-3)-2(3n-5)p(1-p)]$. Use indicators for changes between adjacent tosses and account for adjacent-indicator covariance. For n=1, R=1 and its variance is zero.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:coin-runs",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0097"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "独立抛正面概率p的硬币n≥1次，求同面连续段数量的期望与方差。例如HHTHTTH有5段。",
                  "solution": "n≥2时，$E[R]=1+2(n-1)p(1-p)$，$\\operatorname{Var}(R)=2p(1-p)[(2n-3)-2(3n-5)p(1-p)]$。以相邻结果发生变化为指示变量，注意相邻指示变量的协方差。n=1时R=1，方差为0。",
                  "title": "硬币连续段",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "随机过程",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:pattern-waiting-time",
              "title": "Pattern Waiting Time",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "stochastic processes",
                "expectation and variance"
              ],
              "statement": "Independently toss a coin with head probability p∈(0,1). Find the expected tosses until HHTHHTTTHH first appears as a consecutive pattern.",
              "hint": "",
              "solution": "Build a prefix-matching automaton for the target pattern, with states recording the longest matched suffix. Solve the expected waiting-time equations with the completed pattern absorbing. KMP-style failure transitions account for overlaps. This outline does not yet provide a closed-form expectation.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:pattern-waiting-time",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0098"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对一枚正面概率为 `p` 的硬币，得到指定序列 `HHTHHTTTHH` 所需抛掷次数的期望是多少？",
                  "solution": "为目标串建立前缀匹配自动机，状态表示当前最长已匹配后缀，匹配完成为吸收状态。依据KMP式失败跳转处理重叠，并列期望等待时间方程。当前提纲尚未给最终闭式结果。",
                  "title": "模式等待时间",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "随机过程",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:ball-drawing-returns",
              "title": "Ball Drawing Returns",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "optimal stopping",
                "combinatorial counting",
                "expectation and variance",
                "optimal strategy",
                "combinatorial probability"
              ],
              "statement": "A box contains N+1 blue balls and N red balls. Draw uniformly without replacement, earning 1 for blue and losing 1 for red. You may stop at any time. Find the optimal expected profit.",
              "hint": "",
              "solution": "Let V(b,r) be the best expected additional profit with b blue and r red balls remaining. Then $V(b,r)=\\max(0,\\frac b{b+r}[1+V(b-1,r)]+\\frac r{b+r}[-1+V(b,r-1)])$, with V(0,0)=0 and zero-probability terms omitted. Evaluate V(N+1,N) by dynamic programming.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:ball-drawing-returns",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0100"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "盒中N+1蓝球、N红球，均匀不放回抽取，蓝球赚1、红球亏1，可随时停止。求最优期望收益。",
                  "solution": "设V(b,r)为余b蓝r红时的最优额外收益。V(0,0)=0，V(b,r)=max(0,b/(b+r)·[1+V(b-1,r)]+r/(b+r)·[-1+V(b,r-1)])，不存在颜色的零概率项省去。动态规划求V(N+1,N)。",
                  "title": "抽球最优收益",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "最优停止",
                    "组合计数",
                    "期望与方差",
                    "最优策略",
                    "组合概率"
                  ]
                }
              }
            },
            {
              "id": "4.5:four-card-statistics",
              "title": "Four-Card Statistics",
              "difficulty": "medium",
              "tags": [
                "probability",
                "expectation",
                "expectation and variance",
                "playing cards"
              ],
              "statement": "Draw four cards uniformly without replacement from a standard deck, with A=1, J=11, Q=12, K=13. Define the median as the average of the middle two ranks. Find its expectation, the expected sum of squared ranks, and the mean and variance of the red-card count.",
              "hint": "",
              "solution": "Rank reversal r↦14-r shows the expected median is 7. Linearity gives expected squared-rank sum $4(1^2+\\cdots+13^2)/13=252$. The red count is Hypergeometric(52,26,4), with mean 2 and variance $4(1/2)(1/2)(48/51)=16/17$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:four-card-statistics",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0101"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "从不含大小王的52张牌中均匀不放回取4张，点数A=1、J=11、Q=12、K=13，中位数定义为中间两点数均值。求中位数期望、点数平方和期望、红牌数期望与方差。",
                  "solution": "点数反转r↦14-r使中位数变为14减原值，故期望7。平方和期望为4·(1²+…+13²)/13=252。红牌数K服从Hypergeometric(52,26,4)，均值2，方差4·(1/2)(1/2)(48/51)=16/17。",
                  "title": "四张牌统计",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "期望与方差",
                    "扑克牌"
                  ]
                }
              }
            },
            {
              "id": "4.5:card-color-changes",
              "title": "Card Color Changes",
              "difficulty": "easy",
              "tags": [
                "probability",
                "expectation",
                "expectation and variance",
                "playing cards"
              ],
              "statement": "Shuffle a standard deck uniformly and reveal all cards in order. What is the expected number of color changes between adjacent cards?",
              "hint": "",
              "solution": "Any adjacent pair differs in color with probability 26/51. There are 51 pairs, so linearity gives expectation $51\\cdot26/51=26$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:card-color-changes",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0103"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "一副扑克牌只看红黑颜色，洗匀后按顺序翻完整副牌。问相邻两张牌颜色发生变化的次数的期望是多少？",
                  "solution": "相邻两张颜色不同的概率是 26/51，一共有 51 对相邻牌，所以期望变化次数是 51·26/51=26。",
                  "title": "牌色变化",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "期望与方差",
                    "扑克牌"
                  ]
                }
              }
            },
            {
              "id": "4.5:stopped-dice-sum",
              "title": "Stopped Dice Sum",
              "difficulty": "easy",
              "tags": [
                "probability",
                "expectation",
                "optimal stopping",
                "expectation and variance",
                "optimal strategy"
              ],
              "statement": "Roll a fair six-sided die, continuing after 4, 5, or 6 and stopping after 1, 2, or 3. Add every roll, including the final one. Find the expected total.",
              "hint": "",
              "solution": "If E is the expected total, first-step conditioning gives $E=(1+2+3+(4+E)+(5+E)+(6+E))/6$. Thus E=7.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:stopped-dice-sum",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0118"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "掷骰子：若掷出 `4、5、6` 就继续掷，否则停止并累计所有点数。求最终总点数的期望。",
                  "solution": "设期望为 E，则 E=(1+2+3+4+E+5+E+6+E)/6，解得 E=7。",
                  "title": "停止掷骰和",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "最优停止",
                    "期望与方差",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "4.5:uniform-sum-threshold",
              "title": "Uniform Sum Threshold",
              "difficulty": "medium",
              "tags": [
                "probability",
                "expectation",
                "stochastic processes",
                "expectation and variance"
              ],
              "statement": "Add independent U(0,1) variables until the running total first exceeds 1. Find the expected number of terms.",
              "hint": "",
              "solution": "The expectation is e. If T is the stopping count, $P(T>n)=P(U_1+\\cdots+U_n\\le1)=1/n!$ for n≥0. The tail-sum formula gives $E[T]=\\sum_{n=0}^\\infty1/n!=e$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:uniform-sum-threshold",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0120"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "需要多少个独立的 `U(0,1)` 随机变量相加，期望上才能第一次超过 1？",
                  "solution": "设T为首次和超过1的项数，$P(T>n)=P(U_1+\\cdots+U_n\\le1)=1/n!$。尾和公式给$E[T]=\\sum_{n=0}^\\infty1/n!=e$。",
                  "title": "均匀和越界",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "随机过程",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:banach-matchboxes",
              "title": "Banach Matchboxes",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "optimal stopping",
                "combinatorial counting",
                "expectation and variance",
                "optimal strategy",
                "combinatorial probability"
              ],
              "statement": "Two boxes each contain n balls. At each step select a box uniformly; remove one ball if it is nonempty, and stop if it is empty. Find the expected balls remaining in the other box.",
              "hint": "",
              "solution": "This is the Banach matchbox problem. The remaining count K has $P(K=k)=\\binom{2n-k}{n}2^{-(2n-k)}$ for k=0,...,n. Therefore $E[K]=\\sum_{k=0}^n k\\binom{2n-k}{n}2^{-(2n-k)}$. The stop occurs when an empty box is selected, rather than when a box first becomes empty.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:banach-matchboxes",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0124"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "有两只盒子 A、B，各含 `n` 个球。每一步先等概率选一个盒子，再从中取一个球；若选中的盒子已空则过程停止。问停止时另一个盒子中剩余球数的期望是多少？",
                  "solution": "停止时另一盒剩余数K满足$P(K=k)=\\binom{2n-k}{n}2^{-(2n-k)}$，k=0,…,n。因此$E[K]=\\sum_{k=0}^nk\\binom{2n-k}{n}2^{-(2n-k)}$。这里停止于选中空盒，不是某盒刚被取空时。",
                  "title": "Banach火柴盒",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "最优停止",
                    "组合计数",
                    "期望与方差",
                    "最优策略",
                    "组合概率"
                  ]
                }
              }
            },
            {
              "id": "4.5:group-meeting",
              "title": "Group Meeting",
              "difficulty": "medium",
              "tags": [
                "probability",
                "expectation",
                "stochastic processes",
                "expectation and variance"
              ],
              "statement": "N≥2 people arrive independently and uniformly between 9 and 10. Each waits 15 minutes, possibly beyond 10. Find the probability that all are present at one common time.",
              "hint": "",
              "solution": "They share a common time exactly when the range of arrival times is at most 15 minutes. After scaling to [0,1], the probability is $N(1/4)^{N-1}-(N-1)(1/4)^N$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.4:meeting-probability",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0126"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "N≥2人独立均匀在9点至10点到达，各等15分钟（可超过10点）。求所有人存在同一时刻同时在场的概率。",
                  "solution": "若要求所有人两两都能相遇，等价于到达时间的极差不超过 15 分钟。把时间缩放到 [0,1] 后，概率是 N(1/4)^(N-1) - (N-1)(1/4)^N。",
                  "title": "多人共同相遇",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "随机过程",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:meeting-frogs",
              "title": "Meeting Frogs",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "stochastic processes",
                "geometric probability",
                "expectation and variance"
              ],
              "statement": "Three frogs start at the three vertices of an equilateral triangle. Each minute every frog independently jumps uniformly to one of the other two vertices. Find the expected time until all three first occupy the same vertex.",
              "hint": "",
              "solution": "Reduce to two transient occupancy types: all separate and two together with one apart. Add the all-together absorbing state and solve the first-step equations. The expected time from the all-separate state is 6.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:meeting-frogs",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0135"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "三只青蛙分别站在等边三角形的三个顶点上。每分钟每只青蛙独立地、等概率跳到另外两个顶点之一。问三只青蛙第一次在同一个顶点相遇所需时间的期望是多少？",
                  "solution": "把状态压缩成“全分开”和“两只同点一只分开”两类，列马尔可夫链方程可得期望相遇时间是 6。",
                  "title": "青蛙会合",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "随机过程",
                    "几何概率",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:uniform-spacings",
              "title": "Uniform Spacings",
              "difficulty": "easy",
              "tags": [
                "probability"
              ],
              "statement": "Sort four independent U(0,1) samples as a≥b≥c≥d. Find P(a-b>b-c).",
              "hint": "",
              "solution": "The adjacent spacings are exchangeable and ties have probability zero. Swapping these two spacings exchanges the two strict inequalities, so the answer is 1/2.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:uniform-spacings",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0137"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "取4个独立U(0,1)随机变量，排序为a≥b≥c≥d，求P(a-b>b-c)。",
                  "solution": "相邻次序统计量间隙可交换，且并列概率0。交换a-b与b-c把两种严格不等式互换，故概率1/2。",
                  "title": "均匀间隙",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率"
                  ]
                }
              }
            },
            {
              "id": "4.5:mutual-nearest-neighbors",
              "title": "Mutual Nearest Neighbors",
              "difficulty": "hard",
              "tags": [
                "probability",
                "expectation",
                "order statistics",
                "expectation and variance"
              ],
              "statement": "Choose N≥2 points independently and uniformly in [0,1]. A point is good if it and its nearest neighbor are mutually nearest neighbors. Find the expected good-point count, including the small-N boundary.",
              "hint": "",
              "solution": "Distance ties have probability zero. For N=2, both points are good, giving expectation 2. For N≥3, the ordered internal gaps are exchangeable. Each end gap must be smaller than its one neighboring gap, with probability 1/2. Each of the N-3 interior gaps must be smallest among three neighboring gaps, with probability 1/3. Each successful gap contributes two good points, so the expectation is $2[1+(N-3)/3]=2N/3$.",
              "keyIdea": "Special case N=2; Mutual neighbors correspond to locally minimal gaps; Different endpoint and interior probabilities; Two points per pair",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "4.5:mutual-nearest-neighbors",
              "rubric": [
                "Special case N=2",
                "Mutual neighbors correspond to locally minimal gaps",
                "Different endpoint and interior probabilities",
                "Two points per pair"
              ],
              "verification": [
                "Exchangeability of uniform order-statistic spacings; for N=3 exactly one pair is mutual, giving expectation 2."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0138"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "从[0,1]独立均匀取N≥2个点。一个点若与其最近邻互为最近邻，称为good point。求good point数量的期望，说明小N边界。",
                  "solution": "几乎必然没有距离并列。N=2时两个点必互为最近邻，期望2。N≥3时，排序后的相邻间隙可交换。两端间隙只需小于其唯一相邻间隙，各概率1/2；内部的N-3个间隙须在相邻三个间隙中最小，各概率1/3。每个符合条件的间隙给一对互为最近邻点，所以期望2[1+(N-3)/3]=2N/3。",
                  "keyIdea": "N=2特例；互近邻对应局部最小间隙；端点与内部概率不同；每对贡献两点",
                  "title": "互为最近邻",
                  "hint": "",
                  "tags": [
                    "概率",
                    "期望",
                    "次序统计量",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:record-updates",
              "title": "Record Updates",
              "difficulty": "easy",
              "tags": [
                "probability",
                "expectation",
                "algorithms",
                "expectation and variance"
              ],
              "statement": "Scan a uniformly random permutation of n distinct numbers to find its maximum. Initialize m=a₁ and replace m whenever a larger value appears. Find the expected number of assignments, including initialization.",
              "hint": "",
              "solution": "Position i sets a new record with probability 1/i. Thus the expected count is $\\sum_{i=1}^n1/i=H_n$. Excluding initialization gives H_n-1.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:record-updates",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0162"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n个互异数字均匀随机排列后逐个扫描求最大值，初始化m=a₁，之后遇到更大值就赋给m。求包含初始化在内的赋值次数期望。",
                  "solution": "第 `i` 个元素成为新纪录的概率是 `1/i`，所以赋值总次数期望是 `∑_{i=1}^n 1/i = H_n`。若不把初始化算作一次更新，则是 `H_n-1`。",
                  "title": "扫描最大值",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "期望",
                    "算法",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "4.5:three-player-ruin",
              "title": "Three-Player Ruin",
              "difficulty": "hard",
              "tags": [
                "probability",
                "stochastic processes",
                "expectation",
                "expectation and variance"
              ],
              "statement": "Three players start with positive integer fortunes a,b,c. Each round they independently toss fair coins. Unless all outcomes match, the odd player takes one unit from each other player. Find the expected rounds until someone first goes bankrupt.",
              "hint": "",
              "solution": "Total wealth is conserved. A martingale or finite-state first-step system can determine the expected hitting time of a zero fortune. The previous outline claimed E[T]=ab+bc+ca from a constant drift, but it did not account for the nonzero boundary value of ab+bc+ca at first ruin. A complete stopping-time derivation remains required.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.5:three-player-ruin",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0181"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "三人初始正整数财富a、b、c，每轮独立同时抛公平硬币。若不全同面，异面者从其余各拿1元。求直到首次有人破产的期望轮数。",
                  "solution": "总财富守恒，可用鞅或有限状态首步方程求首次零财富时间。旧提纲从ab+bc+ca的恒定漂移直接断言E[T]=ab+bc+ca，但首次破产时该量通常仍非零，忽略了边界项。完整停止时间推导仍需补充。",
                  "title": "三人破产",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "随机过程",
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "期望、方差与协方差",
              "note": "利用**指示变量**及期望线性性简化计数。重要恒等式：$\\operatorname{Var}(X)=E[X^2]-E[X]^2$，$\\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y]$，以及**全期望公式**。"
            }
          }
        },
        {
          "id": "4.6",
          "title": "Order Statistics",
          "note": "For i.i.d. $X_1,\\dots,X_n$: the max has cdf $F_Z(x) = F(x)^n$ and the min has $F_W(x) = 1-(1-F(x))^n$. Differentiate for densities, then integrate for moments.",
          "problems": [
            {
              "title": "Expected Value of Max and Min",
              "difficulty": "medium",
              "tags": [
                "order statistics",
                "uniform"
              ],
              "statement": "$X_1,\\dots,X_n$ are i.i.d. $U[0,1]$. Find the expected value of the maximum $Z = \\max(X_i)$ and the minimum $W = \\min(X_i)$.",
              "hint": "Find the cdf of the max ($F(x)^n$), differentiate to a density, then integrate.",
              "solution": "**The cdf trick for extremes.** The maximum is $\\le x$ **iff every** sample is $\\le x$, so its cdf is $F(x)^n$. The minimum is $> x$ **iff every** sample is $> x$, giving the min cdf $1 - (1-F(x))^n$. For $U[0,1]$, $F(x) = x$.\n\n**Maximum.** cdf $F_Z(x) = x^n$ → density $f_Z(x) = nx^{n-1}$:\n$$E[Z] = \\int_0^1 x\\cdot nx^{n-1}\\,dx = \\frac{n}{n+1}.$$\n\n**Minimum.** cdf $1-(1-x)^n$ → density $n(1-x)^{n-1}$:\n$$E[W] = \\int_0^1 x\\cdot n(1-x)^{n-1}\\,dx = \\frac{1}{n+1}.$$\n\n**Sanity check with a nice picture:** $n$ random points drop $[0,1]$ into $n+1$ gaps, and by symmetry each gap averages $\\frac{1}{n+1}$. So the min sits at $\\frac{1}{n+1}$ and the max at $1 - \\frac{1}{n+1} = \\frac{n}{n+1}$ — exactly what the integrals gave.",
              "keyIdea": "Max cdf is $F^n$, min cdf is $1-(1-F)^n$; for the uniform the expectations are $\\frac{n}{n+1}$ and $\\frac{1}{n+1}$.",
              "id": "4.6:expected-value-of-max-and-min",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.6:expected-value-of-max-and-min",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.6 / Expected Value of Max and Min"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "样本极值期望",
                  "statement": "X₁,…,Xₙ独立同服从U(0,1)，求最大值Z与最小值W的期望。",
                  "solution": "最大值CDF为xⁿ，密度nxⁿ⁻¹，所以E[Z]=n/(n+1)。最小值CDF为1-(1-x)ⁿ，密度n(1-x)ⁿ⁻¹，故E[W]=1/(n+1)。也可用n个随机点产生n+1个可交换间隙，其平均长度均为1/(n+1)。",
                  "hint": "先求极值的CDF，再求密度并积分。",
                  "keyIdea": "独立性把极值CDF化成单点CDF的乘积。",
                  "tags": [
                    "次序统计量",
                    "均匀分布"
                  ]
                }
              }
            },
            {
              "title": "Correlation of Max and Min",
              "difficulty": "hard",
              "tags": [
                "order statistics",
                "covariance",
                "correlation"
              ],
              "statement": "$X_1, X_2$ i.i.d. $U[0,1]$. Let $Y = \\min(X_1,X_2)$ and $Z = \\max(X_1,X_2)$. What is the correlation of $Y$ and $Z$?",
              "hint": "Get the marginal densities of $Y$ and $Z$ for $n=2$, then compute $E[YZ]$ using $YZ = X_1 X_2$.",
              "solution": "Plan: get the means and variances of the min $Y$ and max $Z$, then their covariance, then divide. The one clever shortcut is for $E[YZ]$.\n\n**Densities for $n=2$** (from the max/min cdfs): $f_Y(y) = 2(1-y)$ and $f_Z(z) = 2z$. So $E[Y]=\\tfrac13$, $E[Z]=\\tfrac23$, and\n$$E[Y^2] = \\int_0^1 y^2\\cdot 2(1-y)\\,dy = \\tfrac16 \\Rightarrow \\mathrm{Var}(Y) = \\tfrac16 - \\tfrac19 = \\tfrac{1}{18},$$\n$$E[Z^2] = \\int_0^1 z^2\\cdot 2z\\,dz = \\tfrac12 \\Rightarrow \\mathrm{Var}(Z) = \\tfrac12 - \\tfrac49 = \\tfrac{1}{18}.$$\n\n**The shortcut for $E[YZ]$:** the min times the max equals the product of the *original* two values — $\\min\\cdot\\max = X_1 X_2$ — so no integral is needed:\n$$E[YZ] = E[X_1]E[X_2] = \\tfrac12\\cdot\\tfrac12 = \\tfrac14.$$\n\nThen $\\mathrm{Cov}(Y,Z) = \\tfrac14 - \\tfrac13\\cdot\\tfrac23 = \\tfrac{1}{36}$, and\n$$\\mathrm{corr}(Y,Z) = \\frac{1/36}{\\sqrt{(1/18)(1/18)}} = \\frac{1}{2}.$$\n\nThe positive $+\\tfrac12$ makes sense: a large minimum drags the maximum up with it, so they move together.",
              "keyIdea": "Use $\\min\\cdot\\max = X_1X_2$ to get $E[YZ]$ for free; the positive correlation ($1/2$) reflects that a large min forces a large max.",
              "id": "4.6:correlation-of-max-and-min",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.6:expected-value-of-max-and-min",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.6 / Correlation of Max and Min"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "两样本极值相关",
                  "statement": "两个独立U(0,1)变量，令Y为较小值、Z为较大值，求Corr(Y,Z)。",
                  "solution": "密度分别为2(1-y)、2z，得E[Y]=1/3、E[Z]=2/3，两方差均1/18。由YZ=X₁X₂，E[YZ]=1/4，协方差1/4-2/9=1/36。因此相关系数(1/36)/(1/18)=1/2。",
                  "hint": "利用最小值乘最大值等于原两数之积。",
                  "keyIdea": "乘积恒等式省去联合密度积分。",
                  "tags": [
                    "次序统计量",
                    "协方差",
                    "相关性"
                  ]
                }
              }
            },
            {
              "title": "Random Ants",
              "difficulty": "hard",
              "tags": [
                "symmetry",
                "order statistics",
                "expectation"
              ],
              "statement": "500 ants are placed uniformly at random on a 1-foot string, each facing a random direction, all moving at 1 ft/min. Colliding ants instantly reverse direction. What is the expected time for all ants to fall off the string?",
              "hint": "When two ants collide and reverse, it's the same as if they passed through each other — just swap labels.",
              "solution": "**The trick that dissolves the whole mess:** when two ants collide and reverse, picture them as two identical tokens *passing straight through* each other instead. Nothing observable changes — same set of positions and directions, just with the labels swapped. So you can pretend collisions **never happen**: every ant marches straight at 1 ft/min until it walks off an end.\n\nNow it's easy. The last ant to leave is whichever one has the **farthest to travel** in its (random) direction — the *maximum* distance-to-fall over all 500 ants. With ants placed uniformly on the 1-foot string and (by symmetry) each effectively needing to cover up to a $U[0,1]$ distance, the time for *all* of them to be gone is the expected maximum of 500 i.i.d. $U[0,1]$ values:\n$$E[\\text{time}] = \\frac{n}{n+1} = \\frac{500}{501} \\approx 0.998 \\text{ minutes}.$$\n\nSo despite 500 ants frantically bouncing off each other, they're all gone in just under a minute.",
              "keyIdea": "Pass-through relabeling removes collisions entirely; the answer becomes the expected max of i.i.d. uniforms, $\\frac{n}{n+1}$.",
              "id": "4.6:random-ants",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.6:random-ants",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "4.6 / Random Ants"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "线绳上的蚂蚁",
                  "statement": "500只蚂蚁独立均匀放在1英尺绳上，方向独立等概率，均以1英尺/分钟行走。相撞立即掉头。所有蚂蚁落下所需时间期望？",
                  "solution": "相撞掉头等价于穿过彼此并交换标签，因此整体落下时间不变，可忽略碰撞。每只按初始方向离开的距离独立U(0,1)，总时间为500个均匀变量最大值，期望500/501≈0.998分钟。",
                  "hint": "将碰撞视为交换标签后继续直行。",
                  "keyIdea": "去掉标签消除相互作用，再求最大值。",
                  "tags": [
                    "对称性",
                    "次序统计量",
                    "期望"
                  ]
                }
              }
            },
            {
              "id": "4.6:sample-extremes",
              "title": "Sample Extremes",
              "difficulty": "medium",
              "tags": [
                "probability",
                "order statistics"
              ],
              "statement": "Draw n independent samples from a continuous CDF F. Give the distributions and, when they exist, expectation formulas for the minimum and maximum. Include the U(0,1) case.",
              "hint": "",
              "solution": "The maximum CDF is F(x)^n and the minimum CDF is $1-(1-F(x))^n$. Expectations can be computed by integration against these distributions; if a density exists, integrate x against the corresponding order-statistic density. For U(0,1), the means are n/(n+1) and 1/(n+1), respectively.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.6:expected-value-of-max-and-min",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0159"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "从给定连续分布函数F独立抽n个样本，写出最大值与最小值的分布及其存在时的期望表达式，并给出U(0,1)特例。",
                  "solution": "最大值CDF为F(x)ⁿ，最小值为1-(1-F(x))ⁿ。期望存在时，对这些分布作积分；若有密度，可用对应次序统计量密度乘x积分。U(0,1)时最大值均值n/(n+1)，最小值1/(n+1)。",
                  "title": "一般样本极值",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "次序统计量"
                  ]
                }
              }
            },
            {
              "id": "4.6:extreme-correlation",
              "title": "Extreme Correlation",
              "difficulty": "medium",
              "tags": [
                "probability",
                "order statistics",
                "expectation",
                "expectation and variance"
              ],
              "statement": "For n≥2 independent U(0,1) samples, find the correlation between the minimum and maximum. Explain the joint-density calculation.",
              "hint": "",
              "solution": "Writing U for the minimum and V for the maximum, their joint density is $n(n-1)(v-u)^{n-2}$ on 0<u<v<1. The moments are E[U]=1/(n+1), E[V]=n/(n+1), and E[UV]=1/(n+2). Both variances are $n/[(n+1)^2(n+2)]$, yielding Corr(U,V)=1/n.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.6:expected-value-of-max-and-min",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0160"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对n≥2个独立U(0,1)样本，求最大值与最小值的相关系数，说明怎样从联合密度求解。",
                  "solution": "设U为最小值、V为最大值，联合密度n(n-1)(v-u)ⁿ⁻²，0<u<v<1。积分得E[U]=1/(n+1)、E[V]=n/(n+1)、E[UV]=1/(n+2)，两方差均为n/[(n+1)²(n+2)]，相关系数1/n。",
                  "title": "极值相关推广",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "次序统计量",
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "次序统计量",
              "note": "对独立同分布样本$X_1,\\ldots,X_n$，最大值的分布函数为$F_Z(x)=F(x)^n$，最小值为$F_W(x)=1-(1-F(x))^n$。求导得到密度，再积分计算各阶矩。"
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "概率论",
          "blurb": "组合、条件概率与贝叶斯、概率分布、期望方差及次序统计量，是量化面试的重要内容。"
        }
      }
    },
    {
      "num": 5,
      "title": "Stochastic Process & Calculus",
      "blurb": "Markov chains, martingales and random walks, dynamic programming, Brownian motion and Itô's lemma.",
      "topics": [
        {
          "id": "5.1",
          "title": "Markov Chain",
          "note": "A process with the **Markov property**: the future depends only on the present state, not the past. The art is **choosing the right state space**, then writing transition / absorption equations.",
          "problems": [
            {
              "title": "Gambler's Ruin Problem",
              "difficulty": "medium",
              "tags": [
                "Markov chain",
                "absorbing states"
              ],
              "statement": "Player M has \\$1, player N has \\$2. Each game the winner takes \\$1 from the loser; M wins each game with probability $2/3$. They play until one is bankrupt. What is the probability M wins (ends with all \\$3)?",
              "hint": "The total money is fixed at \\$3, so the state is just M's holdings $m \\in \\{0,1,2,3\\}$. States 0 and 3 are absorbing.",
              "solution": "**Pick the right state.** The two players' fortunes always add to \\$3, so you don't need to track both — just **M's money**, $m \\in \\{0,1,2,3\\}$. States 0 (M broke) and 3 (M has it all) are *absorbing* — the game ends there.\n\nLet $a_m$ = probability M eventually wins, starting from \\$$m$, with boundaries $a_0 = 0$ and $a_3 = 1$. From an interior state M goes up \\$1 with prob $\\tfrac23$ and down with $\\tfrac13$, so each $a_m$ is the weighted average of its neighbors:\n$$a_1 = \\tfrac{1}{3}a_0 + \\tfrac{2}{3}a_2, \\qquad a_2 = \\tfrac{1}{3}a_1 + \\tfrac{2}{3}a_3.$$\n\nSubstitute the boundaries and solve the two equations: $a_2 = \\tfrac67$, $a_1 = \\tfrac47$. M starts with \\$1, so\n$$P(\\text{M wins}) = a_1 = \\frac{4}{7}.$$\nSensibly above $\\tfrac12$ — M has the per-game edge, so even starting poorer (\\$1 vs \\$2) M is favored to sweep.",
              "keyIdea": "Reduce the 2-D money state to 1-D (M's holdings sum to a constant), then solve linear absorption equations with the two boundary conditions.",
              "id": "5.1:gambler-s-ruin-problem",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:gambler-s-ruin-problem",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.1 / Gambler's Ruin Problem"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "三元赌徒破产",
                  "statement": "M有1元，N有2元，每局胜者从败者得1元，M每局以2/3获胜，直到一方破产。M最终得3元的概率？",
                  "solution": "只需跟踪M资金m∈{0,1,2,3}。设aₘ为最终获胜概率，a₀=0、a₃=1，a₁=(1/3)a₀+(2/3)a₂，a₂=(1/3)a₁+(2/3)a₃。解得a₂=6/7、a₁=4/7，所求4/7。",
                  "hint": "总财富固定，只需一个人的资金作状态。",
                  "keyIdea": "一维吸收链结合边界解线性方程。",
                  "tags": [
                    "马尔可夫链",
                    "吸收状态"
                  ]
                }
              }
            },
            {
              "title": "Dice Question",
              "difficulty": "medium",
              "tags": [
                "Markov chain",
                "conditional probability"
              ],
              "statement": "Two players roll two dice repeatedly. Player A bets a sum of **12** will appear before two consecutive **7s**; player B bets two consecutive 7s come first. What is the probability A wins?",
              "hint": "Condition on the first roll's sum (12, 7, or other). 'Two consecutive 7s' needs a state tracking 'last roll was a 7'.",
              "solution": "**Why this needs a state, not just one probability:** 'two consecutive 7s' means the danger only exists *right after* a 7 was just rolled. So there are really two situations — a fresh roll, and 'the last roll was a 7' — and we condition accordingly. The relevant single-roll odds: $P(\\text{sum}=12)=\\tfrac{1}{36}$, $P(\\text{sum}=7)=\\tfrac{6}{36}$, $P(\\text{neither})=\\tfrac{29}{36}$.\n\nLet $P(A)$ be A's win probability from a fresh roll. Condition on that roll:\n- **12** ($\\tfrac1{36}$): A wins immediately.\n- **neither** ($\\tfrac{29}{36}$): nothing changes, back to a fresh roll → contributes $P(A)$.\n- **7** ($\\tfrac{6}{36}$): now we're 'one 7 in.' Look at the *next* roll: a 12 ($\\tfrac1{36}$) wins for A; a second 7 ($\\tfrac6{36}$) wins for B; anything else returns to a fresh roll worth $P(A)$.\n\nAssemble the equation and solve:\n$$P(A) = \\tfrac{1}{36} + \\tfrac{29}{36}P(A) + \\tfrac{6}{36}\\Big[\\tfrac{1}{36} + \\tfrac{29}{36}P(A)\\Big] \\;\\Rightarrow\\; P(A) = \\frac{7}{13}.$$\n\nSo betting on the **single 12 before the double-7** is the slightly better side ($\\tfrac{7}{13} > \\tfrac12$) — a 12 is rare, but needing *two* 7s in a row is even harder to pull off.",
              "keyIdea": "Consolidate equivalent positions into a few states ('start' vs 'just rolled a 7'); set up a self-referential equation and solve.",
              "id": "5.1:dice-question",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:dice-question",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.1 / Dice Question"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "十二与连七",
                  "statement": "反复掷两枚公平骰子，A押总和12先于连续两次总和7出现，B押相反。求A胜率。",
                  "solution": "单次总和12概率1/36、7概率6/36、其余29/36。设新局面A胜率P；首掷7后再条件化，则P=1/36+(29/36)P+(6/36)[1/36+(29/36)P]，解得7/13。",
                  "hint": "区分新状态与上次刚出现7的状态。",
                  "keyIdea": "连续模式需要记住有效后缀。",
                  "tags": [
                    "马尔可夫链",
                    "条件概率"
                  ]
                }
              }
            },
            {
              "title": "Coin Triplets",
              "difficulty": "hard",
              "tags": [
                "Markov chain",
                "expected value",
                "non-transitive"
              ],
              "statement": "Part A: Expected number of fair-coin tosses to first see **HHH** in a row? And to first see **THH**? Part B: Probability that **HHH** occurs before **THH** in the sequence? Part C: In a game where each player picks a triplet and the first to appear wins, would you go first or second?",
              "hint": "Build a Markov chain over the 'progress so far' states (S, H, HH, HHH). For Part B/C think about what must precede HHH.",
              "solution": "**Part A — expected waiting times.** Set up a tiny Markov chain over 'how much of the target you've built so far' (states like $\\varnothing, H, HH, HHH$) and solve the expected-steps-to-absorption equations:\n- to **HHH**: $E = 14$ tosses.\n- to **THH**: $E = 8$ tosses.\n\nWhy the gap? With HHH, a single tail anywhere wipes out *all* your progress back to zero. With THH, the leading T is 'easy' and the HH is protected — a stray T just re-arms the start, so it recovers far better.\n\n**Part B — which comes first?** $P(\\text{HHH before THH}) = \\tfrac{1}{8}$. The clean argument: unless the very first three tosses are $HHH$ (probability $(\\tfrac12)^3 = \\tfrac18$), *some* tail appears before you ever complete three heads — and the toss right before your eventual HHH run would be a T, which means **THH already occurred first**. So HHH wins only by sprinting out of the gate: $\\tfrac18$.\n\n**Part C — go second.** This game is **non-transitive** (Penney's game): there is no single 'best' triplet, so the second player has the advantage. Whatever triplet the first player names, you build a triplet that beats it by taking *their first two symbols as your last two* and prepending a well-chosen symbol — that gives you $>\\tfrac12$ (often $\\tfrac23$ or more). **Always choose to go second.**",
              "keyIdea": "Markov-chain absorption gives the expected waiting times; the non-transitivity (like Penney's game) means the second mover always has an edge.",
              "id": "5.1:coin-triplets",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:coin-triplets",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.1 / Coin Triplets"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "三连硬币模式",
                  "statement": "A：公平币首次出现HHH及THH的期望次数？B：HHH先于THH的概率？C：两人依次选三位模式，谁的先出现谁赢，应先选还是后选？",
                  "solution": "A：对前缀匹配状态列吸收时间方程，分别得14与8。HHH遇反面会清空进度，而THH中的反面可重新成为起始T。B：只有最初三次即HHH才能先胜；一旦先出现T，下一次连续HH便先完成THH，所以概率1/8。C：选择后手。Penney游戏非传递，针对先手模式可选有利反制模式，常用构造是把对方前两位作自己后两位，并把对方第二位取反作首位，胜率超过1/2。",
                  "hint": "用最长有效后缀作状态；比较HHH前必出现的片段。",
                  "keyIdea": "模式重叠决定等待时间，非传递性产生后选优势。",
                  "tags": [
                    "马尔可夫链",
                    "期望",
                    "非传递性"
                  ]
                }
              }
            },
            {
              "title": "Color Balls",
              "difficulty": "hard",
              "tags": [
                "Markov chain",
                "symmetry",
                "expected value"
              ],
              "statement": "A box has $n$ balls of $n$ different colors. Repeatedly pick a random pair, repaint the first to match the second, and return both. What is the expected number of steps until all balls are the same color?",
              "hint": "By symmetry, condition on the final color being color 1, and track only the count of color-1 balls as a Markov chain.",
              "solution": "**Cut the state space down with symmetry.** All colors are interchangeable, so condition on the final color being color 1 and just track $c$ = the number of color-1 balls. The states are $0,1,\\dots,n$, and only $c = n$ (all color 1) is absorbing.\n\n**Find the step probabilities.** A step changes $c$ only when you pick one color-1 ball and one non-color-1 ball, then repaint:\n- $c$ goes **up by 1** if the repainted (first) ball is a non-color-1 made to match a color-1 model,\n- $c$ goes **down by 1** in the mirror case,\n- otherwise $c$ is unchanged.\n\nBoth the up and down moves have the *same* probability $\\frac{c(n-c)}{n(n-1)}$, so this is a **symmetric** birth–death chain — like an unbiased random walk that pauses sometimes.\n\nSetting up and solving the expected-steps-to-absorption equations (with the relevant boundary) collapses to the clean closed form\n$$E[\\text{steps}] = (n-1)^2.$$",
              "keyIdea": "Symmetry collapses the state to a single count; the up/down transition probabilities are equal, yielding the clean closed form $(n-1)^2$.",
              "id": "5.1:color-balls",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:color-balls",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.1 / Color Balls"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "重染球颜色",
                  "statement": "n个球初始各不同色，每次均匀取有序的两个不同球，将第一个染成第二个颜色并放回。直到全同色的期望步数？",
                  "solution": "可从对称性或祖先合并过程降维。追踪某颜色球数c时，上下跳概率同为c(n-c)/[n(n-1)]，其余保持。须正确处理0与n边界及最终颜色条件，不能把条件化后的链误当原链。解一致色吸收时间得到$(n-1)^2$。",
                  "hint": "利用颜色对称性，追踪某颜色数量或反向祖先合并。",
                  "keyIdea": "有保持概率的生灭链与一致色吸收时间。",
                  "tags": [
                    "马尔可夫链",
                    "对称性",
                    "期望"
                  ]
                }
              }
            },
            {
              "id": "5.1:consecutive-heads",
              "title": "Consecutive Heads",
              "difficulty": "medium",
              "tags": [
                "probability",
                "stochastic processes",
                "expectation",
                "expectation and variance"
              ],
              "statement": "Toss a fair coin independently until two consecutive heads HH first appear. Find the expected total tosses, including the final toss.",
              "hint": "Whether the previous toss was H determines the next state.",
              "solution": "Let E₀ be the remaining expectation with no H suffix and E₁ with suffix H. Then E₀=1+(E₀+E₁)/2 and E₁=1+E₀/2. Solving gives E₀=6 and E₁=4.",
              "keyIdea": "Two suffix states; Correct failure-state transitions; Expected count 6",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "5.1:consecutive-heads",
              "rubric": [
                "Two suffix states",
                "Correct failure-state transitions",
                "Expected count 6"
              ],
              "verification": [
                "Solve the two-state linear system."
              ],
              "followups": [
                "What is the expectation when the head probability is p?"
              ],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0051"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "独立抛公平硬币，直到第一次出现连续两个正面 HH，求包括结束那次在内的总抛掷次数期望。",
                  "hint": "是否已有后缀H会改变后续状态。",
                  "solution": "设 E₀ 为尚无后缀 H 时的剩余期望，E₁ 为后缀 H 时的剩余期望。E₀=1+(E₀+E₁)/2，E₁=1+E₀/2，解得 E₀=6、E₁=4。",
                  "keyIdea": "两个后缀状态；失败后回到正确状态；答案 6",
                  "title": "连续两次正面",
                  "tags": [
                    "概率",
                    "随机过程",
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "5.1:gambler-s-ruin",
              "title": "Gambler's Ruin",
              "difficulty": "medium",
              "tags": [
                "probability",
                "stochastic processes"
              ],
              "statement": "A gambler starts with fortune i, between boundaries 0 and N. Each independent round wins 1 with probability p∈(0,1) and loses 1 otherwise. Play stops on reaching a boundary. Find the probability of hitting 0 first, distinguishing p=1/2.",
              "hint": "",
              "solution": "Put q=1-p. For p≠q, the ruin probability is $[(q/p)^i-(q/p)^N]/[1-(q/p)^N]$. For p=q=1/2 it is 1-i/N.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:gambler-s-ruin-problem",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0061"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "赌徒初始资金i，边界0和N，0<i<N；每次以p∈(0,1)赢1、以1-p输1，独立重复直到触边。求先到0的概率，区分p=1/2。",
                  "solution": "若每次赢的概率为 p、输为 q=1-p，初始资本 i，上界 N，则到达 N 前先破产的概率：当 p≠q 时为 ((q/p)^i-(q/p)^N)/(1-(q/p)^N)；当 p=q=0.5 时为 1-i/N。",
                  "title": "赌徒破产概率",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "随机过程"
                  ]
                }
              }
            },
            {
              "id": "5.1:triangle-return-paths",
              "title": "Triangle Return Paths",
              "difficulty": "medium",
              "tags": [
                "combinatorial counting",
                "recurrences",
                "geometric probability"
              ],
              "statement": "Starting at a specified vertex of a triangle graph, each step follows one edge to another vertex. How many paths return to the start after exactly six steps?",
              "hint": "",
              "solution": "Let a_t count paths at the start and b_t count paths at the other two vertices combined. Then a_(t+1)=b_t and b_(t+1)=2a_t+b_t, with a₀=1,b₀=0. The result is a₆=22. The adjacency spectrum also gives $(2^6+2)/3=22$.",
              "keyIdea": "Correct recurrence; Initial values; Count 22",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "5.1:triangle-return-paths",
              "rubric": [
                "Correct recurrence",
                "Initial values",
                "Count 22"
              ],
              "verification": [
                "Iterate the recurrence or enumerate all 2⁶ choice sequences."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0081"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在三角形三个顶点构成的图上，从指定顶点出发，每步沿一条边走到另一个顶点。恰走6步回到出发点的路径有多少条？",
                  "solution": "设 a_t 为回到起点路径数、b_t 为到达另外两个点的总路径数。a_(t+1)=b_t，b_(t+1)=2a_t+b_t，a₀=1、b₀=0，得 a₆=22。亦可由 K3 邻接矩阵谱得到 (2^6+2)/3=22。",
                  "keyIdea": "正确递推；初值；22",
                  "title": "三角回路计数",
                  "hint": "",
                  "tags": [
                    "组合计数",
                    "递推",
                    "几何概率"
                  ]
                }
              }
            },
            {
              "id": "5.1:pattern-stopping-parity",
              "title": "Pattern Stopping Parity",
              "difficulty": "hard",
              "tags": [
                "probability",
                "optimal stopping",
                "optimal strategy"
              ],
              "statement": "Roll a fair six-sided die until the consecutive pattern 1-2-3 first occurs. What is the probability that the stopping roll number is odd?",
              "hint": "",
              "solution": "Use prefix states {empty,1,12} together with the parity of the total rolls. Build the joint Markov chain and solve the absorption-probability equations. This outline specifies the method but does not provide the final probability.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:pattern-stopping-parity",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0092"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "不断掷一个骰子，直到连续按顺序出现 `1-2-3` 为止。求停止时恰好掷了奇数次的概率。",
                  "solution": "标准做法是构造前缀匹配状态 `{空,1,12}` 和“当前总次数奇偶性”的联合状态，建立马尔可夫链后列线性方程求解。这题核心是序列匹配 + 奇偶状态联立。",
                  "title": "模式停止奇偶",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "最优停止",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "5.1:first-odd-sum",
              "title": "First Odd Sum",
              "difficulty": "hard",
              "tags": [
                "probability",
                "stochastic processes"
              ],
              "statement": "Roll a fair 12-sided die labeled 1 through 12 until the running sum first becomes odd. What is the most likely final sum?",
              "hint": "",
              "solution": "The stopped sum consists of some even rolls followed by the first odd roll. Use a probability generating function or a recurrence for the probabilities of odd final sums, then compare them. This outline does not yet identify the mode.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:first-odd-sum",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0093"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "给定一个 12 面骰子，重复掷骰直到累计和第一次变成奇数。问最终累计和最有可能等于多少？",
                  "solution": "本质上是“若干个偶数和 + 第一个奇数”。标准做法是写生成函数或递推，比较各个奇数和的概率；这是一个典型的 stopping sum + parity 题。",
                  "title": "首次奇数和",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "随机过程"
                  ]
                }
              }
            },
            {
              "id": "5.1:biased-ruin-game",
              "title": "Biased Ruin Game",
              "difficulty": "medium",
              "tags": [
                "probability"
              ],
              "statement": "A coin has head probability 2/3. Heads earns you one unit from your opponent; tails costs you one. You start with 10 units and the opponent with 20. Repeat independently until one is bankrupt. Find the probability that the opponent goes bankrupt first.",
              "hint": "",
              "solution": "Use gambler's ruin with i=10, N=30, p=2/3, q=1/3. The probability of reaching 30 before 0 is $[1-(q/p)^i]/[1-(q/p)^N]=[1-(1/2)^{10}]/[1-(1/2)^{30}]$.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "4.3:gambler-s-ruin-problem",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0134"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "一枚硬币正面概率为 `2/3`、反面概率为 `1/3`。若出现正面，你从对手那里赢 1 元；若出现反面，你支付对手 1 元。你初始有 10 元，对手有 20 元，直到一方破产为止。求对手先破产的概率。",
                  "solution": "这是赌徒破产问题。设你初始资本 i=10，总资本 N=30，p=2/3,q=1/3，则你最终赢光对手的概率是 [1-(q/p)^i] / [1-(q/p)^N] = [1-(1/2)^10]/[1-(1/2)^30]。",
                  "title": "偏币赌徒",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率"
                  ]
                }
              }
            },
            {
              "id": "5.1:edge-cover-time",
              "title": "Edge Cover Time",
              "difficulty": "hard",
              "tags": [
                "probability",
                "stochastic processes",
                "graph theory"
              ],
              "statement": "A random walk starts at A on a triangle graph, moving independently and uniformly to either other vertex. Find the expected steps to traverse all three undirected edges. Extend to a tetrahedron graph, moving uniformly to any of the other three vertices.",
              "hint": "",
              "solution": "Use states recording the visited edge set and current vertex, with the all-covered state absorbing. Solve the first-step expectation equations. An edge count alone is insufficient because the arrangement of visited edges matters. The earlier outline's triangle value of 6 is unverified; use the state system to determine the answer.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:edge-cover-time",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0165"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在三角形图上从A出发，每步独立等概率走到另外两个顶点之一，求首次走过全部3条无向边的步数期望；推广到每步等概率转移到另外三个顶点的四面体图。",
                  "solution": "状态记录当前顶点与已走过的边集合，全部覆盖为吸收状态，列首步期望方程。只记录已覆盖边数不够，因为边的排列结构影响转移。旧提纲的三角形数值6尚未核验，应从状态系统确定答案。",
                  "title": "边覆盖时间",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "随机过程",
                    "图论"
                  ]
                }
              }
            },
            {
              "id": "5.1:pentagon-cover-endpoint",
              "title": "Pentagon Cover Endpoint",
              "difficulty": "hard",
              "tags": [
                "probability",
                "stochastic processes",
                "graph theory"
              ],
              "statement": "Perform a symmetric nearest-neighbor random walk on the vertices of a regular pentagon. Stop when every vertex has been visited. Which vertex is the most likely stopping location?",
              "hint": "",
              "solution": "Track the visited set and current vertex in a finite absorbing Markov chain to determine the endpoint distribution. Reflection symmetry equates the probabilities for vertices at equal distance from the start, but by itself does not compare different distances. The earlier claim favoring adjacent vertices is not established by symmetry alone.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.1:pentagon-cover-endpoint",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0179"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在正五边形的顶点上做对称随机游走，从某一顶点出发，直到第一次遍历完所有顶点为止。问停止时最可能停在哪个顶点？",
                  "solution": "用“已访问顶点集、当前顶点”构造有限吸收链，求终点分布。反射对称只能说明与起点等距离的顶点概率相同，不能比较不同距离。旧提纲偏向相邻顶点的结论并不能单凭对称性成立。",
                  "title": "五边形终点",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "随机过程",
                    "图论"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "马尔可夫链",
              "note": "**马尔可夫性**指给定当前状态后，未来不再依赖更早的历史。关键是**选好状态空间**，再写出转移概率或吸收方程。"
            }
          }
        },
        {
          "id": "5.2",
          "title": "Martingale & Random Walk",
          "note": "A **martingale** has $E[\\text{future} \\mid \\text{past}] = \\text{present}$. Optional stopping + **Wald's equality** ($E[S_N] = E[X]E[N]$) and the **reflection principle** crack most of these elegantly.",
          "problems": [
            {
              "title": "Drunk Man",
              "difficulty": "hard",
              "tags": [
                "random walk",
                "martingale",
                "optional stopping"
              ],
              "statement": "A drunk man is at the 17-meter mark of a 100-meter bridge. Each step he moves ±1 meter with probability 1/2 each. What is the probability he reaches the far end (100 m) before falling off the near end (0 m)? What is the expected number of steps to reach either end?",
              "hint": "$S_n$ and $S_n^2 - n$ are both martingales for a symmetric random walk. Apply optional stopping at the two boundaries.",
              "solution": "Two martingales do all the work — one for the *probability*, one for the *time*. The start is position 17, with absorbing ends at 0 and 100.\n\n**Probability of reaching 100.** The position $S_n$ is a **martingale** (each step is $\\pm1$ with equal odds, so the expected position never drifts). Optional stopping says the expected position when he stops equals where he started:\n$$E[S_{\\text{end}}] = 17.$$\nHe stops at 100 (prob $p$) or 0 (prob $1-p$), so $100p + 0 = 17 \\Rightarrow p = 0.17$. **17% chance** he reaches the far end first.\n\n**Expected number of steps.** Here's the trick: $S_n^2 - n$ is *also* a martingale. Optional stopping gives $E[S_{\\text{end}}^2 - N] = S_0^2 = 17^2$, i.e. $E[N] = E[S_{\\text{end}}^2] - 289$. Since $S_{\\text{end}}$ is 100 (prob 0.17) or 0, $E[S_{\\text{end}}^2] = 100^2(0.17) = 1700$, so\n$$E[N] = 1700 - 289 = 1441 \\text{ steps}.$$\n\n(General symmetric walk between $-\\beta$ and $\\alpha$: reach-$\\alpha$ probability is $\\frac{\\beta}{\\alpha+\\beta}$ and expected steps $\\alpha\\beta$ — no difference equations needed.)",
              "keyIdea": "Two martingales ($S_n$ for the hitting probability, $S_n^2-n$ for the expected time) plus optional stopping deliver both answers without solving difference equations.",
              "id": "5.2:drunk-man",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.2:drunk-man",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.2 / Drunk Man"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "醉汉过桥",
                  "statement": "醉汉从100米桥的17米处出发，每步独立等概率前进或后退1米。求先到100而非0的概率，以及到任一端的期望步数。",
                  "solution": "位置Sₙ是鞅，停止位置仅为0、100，适用停时论证给100p=17，故p=0.17。Sₙ²-n也是鞅，得E[T]=E[S_T²]-17²=10000·0.17-289=1441。一般从0出发到边界-β、α，右端命中率β/(α+β)，平均步数αβ。",
                  "hint": "使用Sₙ及Sₙ²-n两个鞅，并验证停时条件。",
                  "keyIdea": "位置鞅求命中率，平方补偿鞅求时间。",
                  "tags": [
                    "随机游走",
                    "鞅",
                    "可选停止"
                  ]
                }
              }
            },
            {
              "title": "Dice Game (Wald's Equality)",
              "difficulty": "medium",
              "tags": [
                "Wald's equality",
                "stopping time"
              ],
              "statement": "You roll a die and are paid the face value; if you roll 4, 5, or 6 you may roll again (keeping winnings); you stop on 1, 2, or 3. What is the expected total payoff? (Solve via stopping rules.)",
              "hint": "The number of rolls $N$ is geometric with stopping probability 1/2; apply Wald's equality.",
              "solution": "Each roll has expected value $E[X] = 3.5$. The game stops on $\\{1,2,3\\}$, probability $1/2$ each roll, so the number of rolls $N$ is geometric with $E[N] = 1/p = 2$. By **Wald's equality**:\n$$E[\\text{payoff}] = E[X]\\,E[N] = 3.5 \\times 2 = 7.$$",
              "keyIdea": "Wald's equality cleanly multiplies the per-roll mean by the expected number of rolls — no recursion needed.",
              "id": "5.2:dice-game-wald-s-equality",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.2:dice-game-wald-s-equality",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.2 / Dice Game (Wald's Equality)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "Wald掷骰收益",
                  "statement": "公平骰子每次按点数付钱，4、5、6继续，1、2、3停止，收益累加。用停止时间方法求期望总收益。",
                  "solution": "每次均值3.5，停止次数N为参数1/2的几何变量，E[N]=2。满足Wald等式条件，E[总收益]=E[X]E[N]=3.5×2=7；不要求N与各次结果独立。",
                  "hint": "停止次数几何分布，应用Wald等式。",
                  "keyIdea": "独立同分布增量与可积停时下的随机和期望。",
                  "tags": [
                    "Wald等式",
                    "停止时间"
                  ]
                }
              }
            },
            {
              "title": "Ticket Line",
              "difficulty": "hard",
              "tags": [
                "reflection principle",
                "ballot problem",
                "counting"
              ],
              "statement": "At a box office, $2n$ people queue: $n$ have only \\$5 bills, $n$ have only \\$10 bills. A ticket costs \\$5 and the seller starts with no change. What is the probability everyone can buy a ticket without anyone having to wait for change?",
              "hint": "Map \\$5-holders to +1 steps and \\$10-holders to −1 steps. You need a path that never goes negative — use the reflection principle.",
              "solution": "Encode \\$5 as $+1$, \\$10 as $-1$; the seller can always make change iff the running sum **never goes negative**. Total paths from $(0,0)$ to $(2n,0)$: $\\binom{2n}{n}$. By the **reflection principle**, the number of 'bad' paths (touching $-1$) equals $\\binom{2n}{n-1}$. So the good paths number\n$$\\binom{2n}{n} - \\binom{2n}{n-1} = \\frac{1}{n+1}\\binom{2n}{n}$$\n(a Catalan number). The probability is\n$$P = \\frac{1}{n+1}.$$",
              "keyIdea": "The reflection principle counts lattice paths that stay non-negative; the answer is the Catalan ratio $\\frac{1}{n+1}$.",
              "id": "5.2:ticket-line",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.2:ticket-line",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.2 / Ticket Line"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "买票找零",
                  "statement": "2n人随机排队买5元票，n人持5元，n人持10元，售票员初始无零钱。全员无需等待找零的概率？",
                  "solution": "持5元记+1，10元记-1，需要所有前缀和非负。总路径数$\\binom{2n}{n}$，反射原理给坏路径$\\binom{2n}{n-1}$。好路径为Catalan数$\\binom{2n}{n}/(n+1)$，故概率1/(n+1)。",
                  "hint": "将零钱余额转为非负格点路径。",
                  "keyIdea": "反射原理给Catalan比例。",
                  "tags": [
                    "反射原理",
                    "投票问题",
                    "计数"
                  ]
                }
              }
            },
            {
              "title": "Coin Sequence",
              "difficulty": "hard",
              "tags": [
                "martingale",
                "expected value",
                "induction"
              ],
              "statement": "For a fair coin, what is the expected number of tosses to get $n$ heads **in a row**?",
              "hint": "Find the pattern from $n=1,2,3$ (2, 6, 14), or use a 'gambler' martingale argument over stopping times.",
              "solution": "Let $E[f(n)]$ be the expected tosses for $n$ heads in a row. From the Markov chain: $E[f(1)]=2$, $E[f(2)]=6$, $E[f(3)]=14$. Each extra head requires reaching $(n)$ heads (cost $E[f(n)]$) then one more toss that, half the time, fails and restarts the last segment:\n$$E[f(n+1)] = E[f(n)] + \\tfrac{1}{2}\\cdot 1 + \\tfrac{1}{2}\\big(1 + E[f(n+1)]\\big) \\Rightarrow E[f(n+1)] = 2E[f(n)] + 2.$$\nSolving gives the closed form\n$$E[f(n)] = 2^{n+1} - 2.$$\n\n**Martingale view:** imagine a gambler entering at each toss betting \\$1 that the next $n$ are all heads (doubling on each win). When the streak completes, the total wealth left in the game equals $2^n + 2^{n-1} + \\cdots + 2 = 2^{n+1}-2$, which must equal the expected number of tosses (a fair game).",
              "keyIdea": "Either a doubling recurrence or a fair-betting martingale gives $E = 2^{n+1}-2$ — exponential, not linear, in $n$.",
              "id": "5.2:coin-sequence",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.2:coin-sequence",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.2 / Coin Sequence"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "连续n次正面",
                  "statement": "公平币出现连续n次正面的期望抛掷次数？",
                  "solution": "设Eₙ为期望，E₁=2。达到n连正再抛一次，正面结束，反面则从头等待n+1连正，故Eₙ₊₁=Eₙ+1+(1/2)Eₙ₊₁，得到Eₙ₊₁=2Eₙ+2，解为2ⁿ⁺¹-2。也可让每次新入场的赌徒押连续正面，用公平博彩鞅得到2+4+…+2ⁿ的同一结果。",
                  "hint": "观察2、6、14的递推，或用公平博彩鞅。",
                  "keyIdea": "额外一位引入失败重启，等待时间指数增长。",
                  "tags": [
                    "鞅",
                    "期望",
                    "归纳"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "鞅与随机游走",
              "note": "**鞅**满足给定历史时未来值的条件期望等于当前值。在满足相应条件时，可选停止、**Wald等式**（$E[S_N]=E[X]E[N]$）及**反射原理**能简洁解决许多问题。"
            }
          }
        },
        {
          "id": "5.3",
          "title": "Dynamic Programming",
          "note": "**Principle of optimality**: an optimal policy's tail is optimal for the tail subproblem. Start at the **final** stage and work **backward**, computing the cost-to-go at each state.",
          "problems": [
            {
              "title": "Dice Game (Up to 3 Rolls)",
              "difficulty": "medium",
              "tags": [
                "dynamic programming",
                "expected value"
              ],
              "statement": "You may roll a die up to 3 times. After the 1st or 2nd roll you may either take \\$$x$ (the face value) or roll again; you forgo the previous number. On the 3rd roll you must take whatever you get. What is your optimal strategy and the game's value?",
              "hint": "Work backward from the last roll.",
              "solution": "**Backward induction:**\n- **3rd roll** (must accept): expected value $3.5$.\n- **After 2nd roll:** keep if face $> 3.5$, i.e. keep 4,5,6; else roll. Expected payoff $= \\tfrac{1}{6}(4+5+6) + \\tfrac{3}{6}(3.5) = \\tfrac{15}{6} + 1.75 = 4.25$.\n- **After 1st roll:** keep if face $> 4.25$, i.e. keep 5 or 6; else roll. Expected payoff $= \\tfrac{1}{6}(5+6) + \\tfrac{4}{6}(4.25) = \\tfrac{11}{6} + \\tfrac{17}{6} = \\tfrac{28}{6} = \\tfrac{14}{3} \\approx 4.67$.\n\n**Value of the game = \\$$14/3 \\approx 4.67$**: keep 5–6 on roll 1, keep 4–6 on roll 2, accept roll 3.",
              "keyIdea": "Compute each stage's continuation value first; accept only when the current face beats the expected value of rolling on.",
              "id": "5.3:dice-game-up-to-3-rolls",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.3:dice-game-up-to-3-rolls",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.3 / Dice Game (Up to 3 Rolls)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "三次掷骰选择",
                  "statement": "最多掷公平骰子3次，前两次可接受当前点数收益或放弃并重掷，第三次必须接受。求最优策略和价值。",
                  "solution": "末次期望3.5，因此第二次保留4、5、6，第二阶段价值(4+5+6+3×3.5)/6=4.25。第一次仅保留5、6，初始价值(5+6+4×4.25)/6=14/3≈4.67。",
                  "hint": "从最后一次倒推。",
                  "keyIdea": "比较当前可兑现收益与继续价值。",
                  "tags": [
                    "动态规划",
                    "期望"
                  ]
                }
              }
            },
            {
              "title": "World Series",
              "difficulty": "hard",
              "tags": [
                "dynamic programming",
                "replication",
                "binomial tree"
              ],
              "statement": "Two teams play a best-of-7 series (first to 4 wins). You have \\$100 and want to bet so that if team R wins the series you net **+\\$100**, and if R loses you net **−\\$100**. You can only bet on individual games (not the series). How much do you bet at each state?",
              "hint": "Let $f(i,j)$ be your target net payoff when R has $i$ wins and the opponent $j$. Work backward from the series-ending states.",
              "solution": "Let $f(i,j)$ be the net payoff you must have at state $(i,j)$. Terminal states: $f(4,\\cdot) = +100$, $f(\\cdot,4) = -100$. Each game is a fair 50/50 outcome, so by no-arbitrage replication\n$$f(i,j) = \\frac{f(i+1,j) + f(i,j+1)}{2},$$\nand the bet placed on the next game is\n$$y = \\frac{f(i+1,j) - f(i,j+1)}{2}.$$\nWorking backward, $f(0,0) = 0$ (a fair game costs nothing) and the bet at the start is $f(3,3)$-type deltas — \\$31.25 on the first game. **This is exactly delta-hedging in a binomial tree**: the per-game bet is the option's delta, and European/American options are priced the same way numerically.",
              "keyIdea": "Replicate a series-level payoff with game-level bets via backward induction — the recombining tree is the binomial option-pricing model in disguise.",
              "id": "5.3:world-series",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.3:world-series",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.3 / World Series"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "系列赛下注",
                  "statement": "两队七局四胜，你有100元，只能逐局下注，希望R最终赢系列赛时净赚100，输时净亏100。各局公平且赔率1:1，应在各比分下注多少？",
                  "solution": "设比分(i,j)下所需累计净收益为f(i,j)，边界f(4,j)=100、f(i,4)=-100。公平复制要求f(i,j)=[f(i+1,j)+f(i,j+1)]/2，下一局押R的金额为[f(i+1,j)-f(i,j+1)]/2。倒推f(0,0)=0，首局下注31.25。该树形复制与二叉树对冲相同。",
                  "hint": "从系列赛结束时的目标收益倒推。",
                  "keyIdea": "按相邻终值差复制系列赛收益。",
                  "tags": [
                    "动态规划",
                    "复制",
                    "二叉树"
                  ]
                }
              }
            },
            {
              "title": "Dynamic Dice Game",
              "difficulty": "hard",
              "tags": [
                "dynamic programming",
                "optimal stopping"
              ],
              "statement": "A casino lets you roll a die repeatedly: after each roll you've accumulated \\$(face value of 1→\\$1, 2→\\$2, …, 5→\\$5); but if you ever roll a **6**, you lose everything and stop. After each roll you decide to keep the money or roll again. How much would you pay to play (risk-neutral)?",
              "hint": "If you have \\$$n$, compare the expected value of one more roll against keeping \\$$n$. There's a threshold.",
              "solution": "From an accumulated \\$$n$, rolling again has expected payoff\n$$\\tfrac{1}{6}(n+1) + \\tfrac{1}{6}(n+2) + \\cdots + \\tfrac{1}{6}(n+5) + \\tfrac{1}{6}(0) = \\tfrac{5}{6}n + 2.5.$$\nYou should roll again while this exceeds $n$, i.e. while $\\tfrac{5}{6}n + 2.5 > n \\Rightarrow n < 15$. So **stop once you reach \\$15 or more**. Define $E[f(n)]$ as the value given the stopping rule; for $n \\le 14$, $E[f(n)] = \\tfrac{1}{6}\\sum_{i=1}^{5} E[f(n+i)]$. Solving backward from the boundary gives $E[f(0)] \\approx 6.15$.\n\n**Pay at most \\$6.15.**",
              "keyIdea": "Optimal stopping: continue while the expected gain from another roll beats the sure amount; the threshold (\\$15) gives a backward recursion for the game's value.",
              "id": "5.3:dynamic-dice-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.3:dynamic-dice-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.3 / Dynamic Dice Game"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "掷六归零",
                  "statement": "反复掷骰，1至5按点数累加收益，掷6则清零并结束；每次可兑现停止或继续。风险中性下最多愿付多少？",
                  "solution": "已有n时再掷一次后立即停止的期望为5n/6+2.5，与n比较给阈值15。最优策略达到15或以上即停；n≤14时V(n)=(1/6)∑ᵢ₌₁⁵V(n+i)，边界V(n)=n。倒推V(0)约6.15，因此公平价格约6.15。",
                  "hint": "比较现有确定收益和继续的条件期望。",
                  "keyIdea": "阈值停止与有界区域的逆向递推。",
                  "tags": [
                    "动态规划",
                    "最优停止"
                  ]
                }
              }
            },
            {
              "title": "Dynamic Card Game",
              "difficulty": "hard",
              "tags": [
                "dynamic programming",
                "optimal stopping",
                "American option"
              ],
              "statement": "A 52-card deck (26 red, 26 black) is shuffled; cards are drawn without replacement. For each **red** drawn you win \\$1, for each **black** you lose \\$1. You may tell the dealer to **stop** at any time. What is the optimal stopping rule and the game's value?",
              "hint": "Let $f(b,r)$ be the value with $b$ black and $r$ red cards left in the deck. Compare stopping (current payoff) vs. continuing.",
              "solution": "Let $(b,r)$ be the black/red cards remaining. Note the payoff so far = (reds drawn − blacks drawn) = $b - r$ (since 26 of each total). At each state you choose the max of stopping or continuing:\n$$E[f(b,r)] = \\max\\!\\Big(\\,b - r,\\ \\tfrac{b}{b+r}E[f(b-1,r)] + \\tfrac{r}{b+r}E[f(b,r-1)]\\Big),$$\nwith boundaries $f(0,r) = 0$ and $f(b,0) = b$. Solving this recursion gives the value at the start:\n$$E[f(26,26)] \\approx \\$2.62.$$\nThis is precisely the valuation of an **American option** — at each state you decide whether to exercise (stop) now.",
              "keyIdea": "An optimal-stopping DP identical in form to American-option pricing: at every state, take the larger of immediate exercise (stop) and continuation value.",
              "id": "5.3:dynamic-card-game",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.3:dynamic-card-game",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.3 / Dynamic Card Game"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "红黑牌最优停止",
                  "statement": "52张牌红黑各26，均匀洗牌后不放回翻。红赚1、黑亏1，可随时停止。求最优停止策略与初始价值。",
                  "solution": "余b黑r红时，已有收益为b-r。状态值f(b,r)=max(b-r,[b f(b-1,r)+r f(b,r-1)]/(b+r))。边界f(0,r)=0、f(b,0)=b；当前收益不小于继续价值时停止。倒推f(26,26)约2.62。这与美式期权逐状态比较行权和继续的形式相同。",
                  "hint": "状态用剩余黑红数，比较停止和继续。",
                  "keyIdea": "有限牌堆上的最优停止动态规划。",
                  "tags": [
                    "动态规划",
                    "最优停止",
                    "美式期权"
                  ]
                }
              }
            },
            {
              "id": "5.3:optimal-head-fraction",
              "title": "Optimal Head Fraction",
              "difficulty": "hard",
              "tags": [
                "probability",
                "dynamic programming",
                "optimal stopping",
                "optimal strategy"
              ],
              "statement": "Toss a fair coin independently at most N≥1 times. At least one toss is required; after any toss you may stop and receive the observed fraction of heads. Give a dynamic program for the optimal strategy.",
              "hint": "The state needs only the number of tosses and heads. Compare stopping now with the expected value of another toss.",
              "solution": "Let V(h,t) be the best expected payoff after t tosses with h heads. The terminal value is V(h,N)=h/N. For 1≤t<N, $V(h,t)=\\max(h/t,[V(h+1,t+1)+V(h,t+1)]/2)$. Stop when the stopping term is at least the continuation term. The initial value is [V(1,1)+V(0,1)]/2. Backward induction takes O(N²) time and O(N) rolling storage.",
              "keyIdea": "State and terminal values; Maximize stopping versus continuation; Avoid division by zero at t=0; Complexity",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "5.3:optimal-head-fraction",
              "rubric": [
                "State and terminal values",
                "Maximize stopping versus continuation",
                "Avoid division by zero at t=0",
                "Complexity"
              ],
              "verification": [
                "Finite-horizon conditional expectation and backward induction."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0050"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "独立抛公平硬币，最多 N≥1 次。至少抛一次，之后每次可停下，以已出现正面数除以已抛次数作为收益。求最优策略的动态规划表达式。",
                  "hint": "只需抛掷次数与正面数作状态，比较停止收益和下一步期望。",
                  "solution": "设 V(h,t) 为已抛 t 次、其中 h 次正面时的最优期望收益。终值 V(h,N)=h/N；1≤t<N 时 V(h,t)=max(h/t,[V(h+1,t+1)+V(h,t+1)]/2)。当停止项不小于继续项时停止。初始价值 [V(1,1)+V(0,1)]/2。倒推需 O(N²) 时间，可用 O(N) 滚动空间。",
                  "keyIdea": "状态及终值；停止与继续取最大；处理 t=0 不能除零；复杂度",
                  "title": "最优正面比例",
                  "tags": [
                    "概率",
                    "动态规划",
                    "最优停止",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "5.3:paid-dice-rerolls",
              "title": "Paid Dice Rerolls",
              "difficulty": "hard",
              "tags": [
                "probability",
                "optimal stopping",
                "dynamic programming",
                "optimal strategy"
              ],
              "statement": "Roll a fair die labeled 1 through 100 for free. After observing a result, accept it as your payoff or pay 1 to reroll independently, repeatedly if desired. Maximize the expected accepted value minus all reroll fees. Find the strategy and the value before the first roll.",
              "hint": "",
              "solution": "Let V be the value before a free roll and c=V-1 the continuation value. Then $V=\\frac1{100}\\sum_{x=1}^{100}\\max(x,V-1)$. Solving gives c=1209/14≈86.3571 and V=1223/14≈87.3571. Stop at 87 or above, reroll otherwise. Check 86<c<87 and $100(c+1)=86c+\\sum_{x=87}^{100}x$. The stopping probability per roll is 14/100, ensuring finite expected rerolls.",
              "keyIdea": "Deduct the fee from continuation value; Bellman equation; Threshold 87; Value 1223/14 and consistency check",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "5.3:paid-dice-rerolls",
              "rubric": [
                "Deduct the fee from continuation value",
                "Bellman equation",
                "Threshold 87",
                "Value 1223/14 and consistency check"
              ],
              "verification": [
                "Solve the linear equation for each candidate integer threshold from 1 to 100 and check its interval; only 87 qualifies."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0163"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "公平100面骰点数为1至100。第一次免费掷出结果后可接受该点数作为收益，或付1元独立重掷；可重复选择。求使点数减总重掷费用的期望最大化的策略及首次投掷前的价值。",
                  "solution": "记首次免费掷前价值V，付费继续的价值c=V-1。观察x时取max(x,c)，所以V=(1/100)∑max(x,V-1)。解得c=1209/14≈86.3571、V=1223/14≈87.3571；点数≥87时停，否则重掷。核对86<c<87且100(c+1)=86c+∑_(x=87)^100 x。策略下每次停止概率14/100>0，期望重掷次数有限。",
                  "keyIdea": "费用计入继续价值；Bellman方程；阈值87；V=1223/14与一致性检查",
                  "title": "付费重掷",
                  "hint": "",
                  "tags": [
                    "概率",
                    "最优停止",
                    "动态规划",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "5.3:threshold-number-game",
              "title": "Threshold Number Game",
              "difficulty": "hard",
              "tags": [
                "game theory",
                "probability",
                "optimal stopping",
                "optimal strategy"
              ],
              "statement": "Two players simultaneously choose integers from 1 through n. If their difference is at most k, the larger wins; otherwise the smaller wins. Equal numbers tie. Find an optimal mixed strategy.",
              "hint": "",
              "solution": "Form the finite zero-sum payoff matrix with +1 for a win, -1 for a loss, and 0 for a tie. Solve its minimax linear program, or use indifference conditions on a proposed support. A complete strategy depends on n and k; a general unsupported claim about a pure equilibrium is insufficient.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.3:threshold-number-game",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0173"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "两个玩家各自在 `1` 到 `n` 中选一个整数。若两数之差不超过 `k`，则较大的数获胜；否则较小的数获胜；相同则平局。求最优混合策略。",
                  "solution": "建立有限零和收益矩阵：胜+1、负-1、平0。用极小极大线性规划求混合策略，或对候选支持集列无差异条件。具体策略依赖n、k，不能用未证明的纯策略均衡断言代替求解。",
                  "title": "阈值选数博弈",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "博弈论",
                    "概率",
                    "最优停止",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "5.3:discounted-number-game",
              "title": "Discounted Number Game",
              "difficulty": "hard",
              "tags": [
                "game theory",
                "optimal stopping",
                "optimal strategy"
              ],
              "statement": "Two players simultaneously choose integers from 1 through 100. If different, subtract 10 from the larger and compare; the larger transformed value wins. Equal original or transformed values tie. Payoffs are +1, -1, or 0. Find an optimal mixed strategy.",
              "hint": "",
              "solution": "For a difference greater than 10 the original larger number wins; for a difference from 1 through 9 the smaller wins; a difference of 10 ties. Build the finite zero-sum payoff matrix and solve for a minimax distribution by linear programming or support indifference conditions. This outline does not specify a verified optimal distribution.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.3:discounted-number-game",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0175"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "两人同时选1到100的整数。若不同，将较大数减10后比较大小，较大者胜；变换后相等或原数相同则平局。以胜得1、负得-1、平得0为收益，求最优混合策略。",
                  "solution": "原数差大于10则较大者赢，差1至9则较小者赢，差10平局。建立有限零和矩阵，通过线性规划或支持集无差异条件求极小极大分布。当前提纲没有已核验的最优混合分布。",
                  "title": "折扣选数博弈",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "博弈论",
                    "最优停止",
                    "最优策略"
                  ]
                }
              }
            },
            {
              "id": "5.3:generalized-egg-drop",
              "title": "Generalized Egg Drop",
              "difficulty": "hard",
              "tags": [
                "dynamic programming",
                "minimax",
                "binomial coefficients",
                "optimal strategy"
              ],
              "statement": "A building has $H\\ge1$ floors, and you have $n\\ge1$ identical glass balls. There is an unknown first breaking floor $X\\in\\{1,\\ldots,H\\}$: a drop from a floor below $X$ never breaks a ball, while a drop from floor $X$ or higher always breaks it. An unbroken ball can be reused; a broken ball is lost.\n\nDetermine $X$ with as few drops as possible in the worst case.\n\n1. Find the minimum worst-case number of drops for general $n,H$.\n2. Give a mathematical expression for the answer and an adaptive strategy attaining it.\n3. Prove optimality.\n\nThe first breaking floor is guaranteed to lie in the building; in particular, floor $H$ is known to break a ball. Do not introduce an extra possibility $X=H+1$.",
              "hint": "Count how many consecutive candidate values of $X$ can be distinguished with $t$ remaining drops and $n$ balls. After one drop, the breaking and surviving branches have different ball budgets. How many candidates remain when no balls or no drops are left?",
              "solution": "**Count candidates, rather than physical floors.** There are exactly $H$ possible values of $X$. Let $C(t,n)$ be the maximum number of consecutive candidate values distinguishable using at most $t$ drops and $n$ balls. A single known candidate needs no test, so\n$$C(0,n)=C(t,0)=1.$$\nA drop partitions the candidates into $X\\le y$ (the ball breaks) and $X>y$ (it survives). Thus, for $t,n\\ge1$,\n$$C(t,n)=C(t-1,n-1)+C(t-1,n).$$\nPascal's identity gives\n$$C(t,n)=\\sum_{i=0}^{\\min(n,t)}\\binom{t}{i}.$$\nConsequently the exact answer is\n$$\\boxed{D(n,H)=\\min\\left\\{t\\in\\mathbb Z_{\\ge0}:\\sum_{i=0}^{\\min(n,t)}\\binom{t}{i}\\ge H\\right\\}.}$$\nEquivalently, the sum starting at $i=1$ must be at least $H-1$, not $H$.\n\n**An attaining strategy.** Maintain the candidate interval $[L,U]$ and remaining budgets $t,n$, with $U-L+1\\le C(t,n)$. If $L=U$, report $X=L$ without another drop. Otherwise drop at\n$$y=\\min\\{U-1,\\ L+C(t-1,n-1)-1\\}.$$\nIf it breaks, retain $[L,y]$ and decrement both budgets. Otherwise retain $[y+1,U]$ and decrement only $t$. The breaking branch has at most $C(t-1,n-1)$ candidates. The surviving branch is either a single candidate (when the split is capped at $U-1$), or has at most $C(t-1,n)$ candidates. Continue recursively.\n\n**Why it is optimal.** Induct on the drop budget. Any first drop creates those same two branches, which by induction distinguish at most $C(t-1,n-1)$ and $C(t-1,n)$ candidates. Their sum is therefore an upper bound for every strategy. The interval-splitting strategy attains the bound, proving both necessity and sufficiency. Randomization cannot lower a guaranteed worst-case bound: every realized decision tree still obeys it.\n\n**Boundary checks.** $D(n,1)=0$; $D(1,H)=H-1$. With two balls, $C(t,2)=1+t(t+1)/2$, so\n$$D(2,H)=\\left\\lceil\\frac{\\sqrt{8H-7}-1}{2}\\right\\rceil.$$\nIf $n\\ge\\lceil\\log_2H\\rceil$, the answer is $\\lceil\\log_2H\\rceil$. For example, $D(2,7)=3$ and $D(2,100)=14$.\n\nIf the top floor were *not* guaranteed to break a ball, $X=H+1$ would be an additional candidate. That different version requires $C(t,n)\\ge H+1$, or $\\sum_{i=1}^{\\min(n,t)}\\binom ti\\ge H$.",
              "keyIdea": "Count candidate thresholds, including the one-candidate zero-drop base case. A break/survival capacity recurrence gives the binomial bound and an optimal adaptive split.",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "2.5:glass-balls-egg-drop",
              "rubric": [
                "Respect the given first-breaking-floor convention: exactly H candidates, not H+1.",
                "Use C(0,n)=C(t,0)=1 and derive the two-branch capacity recurrence.",
                "Obtain the binomial-sum minimum over nonnegative integer drop budgets.",
                "Give a feasible adaptive split and prove a matching decision-tree upper bound.",
                "Handle H=1, one ball, and the two-ball and sufficient-ball limits."
              ],
              "verification": [
                "Derived the candidate-count recurrence and an attaining interval split by induction.",
                "Executed exhaustive minimax split enumeration for H=1..40 and n=1..6; every optimum matched the binomial expression.",
                "Checked the distinction from the existing last-safe-floor problem, whose 100 physical floors permit 101 threshold states."
              ],
              "followups": [
                "How does the formula change if every floor may be safe, so X=H+1 is possible?",
                "Implement the capacity recurrence with O(n) storage; why must the ball-budget loop run downward?",
                "How would expected-cost minimization differ if a prior distribution on X were given?"
              ],
              "sources": [
                {
                  "type": "user",
                  "reference": "conversation:2026-10-20",
                  "locator": "Glass ball problem: n identical balls, H floors, first breaking floor X in 1..H"
                }
              ],
              "revision": 1,
              "translations": {
                "zh": {
                  "title": "玻璃球推广",
                  "tags": [
                    "动态规划",
                    "极小极大",
                    "二项式系数",
                    "最优策略"
                  ],
                  "statement": "一栋楼有 $H\\ge1$ 层，你有 $n\\ge1$ 个完全相同的玻璃球。存在未知的首个破碎楼层 $X\\in\\{1,\\ldots,H\\}$：低于 $X$ 扔球一定不碎，第 $X$ 层及以上扔球一定碎。未碎的球可以重复使用，碎球不能再用。\n\n设计策略准确确定 $X$，使最坏情况下的投掷次数最少。\n\n1. 一般的 $n,H$ 下，最少最坏次数是多少？\n2. 给出数学表达式及达到该次数的自适应策略。\n3. 证明最优性。\n\n已知临界楼层一定在楼内，因此第 $H$ 层已知会碎，不能额外加入 $X=H+1$ 的可能。",
                  "hint": "先考虑：剩余 $t$ 次投掷、$n$ 个球时，最多能区分多少个连续的临界楼层候选值？一次投掷后，“碎”和“不碎”分支的球数不同。没有球或没有投掷次数时，还能区分几个候选值？",
                  "solution": "**数候选临界值，而非直接套楼层覆盖公式。** 题设恰有 $H$ 个可能的 $X$。令 $C(t,n)$ 为最多 $t$ 次、$n$ 个球能区分的连续候选值数。只剩一个候选时无需投掷，故\n$$C(0,n)=C(t,0)=1.$$\n从 $y$ 层投掷，碎对应 $X\\le y$，不碎对应 $X>y$，因此\n$$C(t,n)=C(t-1,n-1)+C(t-1,n).$$\n由Pascal恒等式，\n$$C(t,n)=\\sum_{i=0}^{\\min(n,t)}\\binom{t}{i}.$$\n答案为\n$$\\boxed{D(n,H)=\\min\\left\\{t\\in\\mathbb Z_{\\ge0}:\\sum_{i=0}^{\\min(n,t)}\\binom{t}{i}\\ge H\\right\\}.}$$\n等价地，从 $i=1$ 开始求和时，右边应为 $H-1$，不是 $H$。\n\n**达到上界的策略。** 维护候选区间 $[L,U]$、剩余次数 $t$ 和球数 $n$，满足 $U-L+1\\le C(t,n)$。若 $L=U$，直接确定 $X=L$。否则选\n$$y=\\min\\{U-1,\\ L+C(t-1,n-1)-1\\}.$$\n碎则保留 $[L,y]$，球数及次数各减一；不碎则保留 $[y+1,U]$，仅次数减一。碎分支候选数至多 $C(t-1,n-1)$；不碎分支若被 $U-1$ 截断则仅一候选，否则至多 $C(t-1,n)$。递归即可。\n\n**最优性证明。** 对投掷预算归纳。任意首投都分为上述两支，按归纳假设最多分别区分 $C(t-1,n-1)$ 与 $C(t-1,n)$ 个候选，其和是所有策略的容量上界。上述区间划分又能达到该上界，故条件既必要又充分。随机化也不能降低保证意义下的最坏次数：每个实现出的决策树仍受此界限制。\n\n**边界核对。** $D(n,1)=0$；$D(1,H)=H-1$。两球时 $C(t,2)=1+t(t+1)/2$，所以\n$$D(2,H)=\\left\\lceil\\frac{\\sqrt{8H-7}-1}{2}\\right\\rceil.$$\n若 $n\\ge\\lceil\\log_2H\\rceil$，则答案为 $\\lceil\\log_2H\\rceil$。例如 $D(2,7)=3$，$D(2,100)=14$。\n\n若改为顶层也可能不碎，则还须加入 $X=H+1$，共 $H+1$ 个候选；那一版本才要求 $C(t,n)\\ge H+1$，亦即 $\\sum_{i=1}^{\\min(n,t)}\\binom ti\\ge H$。",
                  "keyIdea": "以候选临界值数量建模，一个候选无需投掷；碎与不碎的容量递推给出二项式界，并直接构造最优划分策略。"
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "动态规划",
              "note": "**最优性原理**：最优策略的后续部分，对应后续子问题也应最优。从**最后阶段**开始**逆向递推**，计算各状态的后续价值或成本。"
            }
          }
        },
        {
          "id": "5.4",
          "title": "Brownian Motion & Stochastic Calculus",
          "note": "$W(0)=0$, independent normal increments $W(t)-W(s) \\sim N(0, t-s)$. Key martingales: $W(t)^2 - t$ and $\\exp(\\lambda W(t) - \\tfrac12\\lambda^2 t)$. **Itô's lemma** is the chain rule with a second-order $\\tfrac12 f'' \\,dt$ term.",
          "problems": [
            {
              "title": "Brownian Motion (Definition & Properties)",
              "difficulty": "medium",
              "tags": [
                "Brownian motion",
                "martingale",
                "covariance"
              ],
              "statement": "Define Brownian motion and list its key properties. Then: what is the correlation of $B_t$ and $B_t^2$? And what is $P(B_1 > 0, B_2 < 0)$?",
              "hint": "Use symmetry for the correlation; for the joint sign probability, condition on $B_1$ and use independent increments.",
              "solution": "**Definition.** $W(t)$ is a Brownian motion if (1) $W(0) = 0$; (2) increments over non-overlapping intervals are **independent**; (3) each increment is normal, $W(t)-W(s) \\sim N(0, t-s)$; and paths are continuous. Handy consequences: $E[W(t)] = 0$, $E[W(t)^2] = t$, it's a **martingale**, $\\mathrm{Cov}(W(s),W(t)) = \\min(s,t)$, and the future depends only on the present (Markov). Two martingales worth memorizing: $W(t)^2 - t$ and $\\exp\\!\\big(\\lambda W(t) - \\tfrac12\\lambda^2 t\\big)$.\n\n**Correlation of $B_t$ and $B_t^2$.** $B_t \\sim N(0,t)$ is symmetric about 0, so its odd moments vanish: $E[B_t] = 0$ and $E[B_t^3] = 0$. Then\n$$\\mathrm{Cov}(B_t, B_t^2) = E[B_t^3] - E[B_t]E[B_t^2] = 0 - 0 = 0.$$\nSo **correlation $= 0$** — they're uncorrelated, even though clearly *not* independent ($B_t^2$ is a function of $B_t$!). A clean reminder that zero correlation ≠ independence.\n\n**$P(B_1 > 0,\\, B_2 < 0)$.** Split $B_2 = B_1 + (B_2 - B_1)$, where the increment $B_2 - B_1 \\sim N(0,1)$ is **independent** of $B_1 \\sim N(0,1)$. By symmetry both are mean-zero and the picture in the $(B_1,\\,B_2{-}B_1)$ plane is symmetric across both axes and the diagonals. Counting the symmetric regions, the event '$B_1>0$ and $B_2<0$' occupies exactly **one-eighth** of the probability:\n$$P(B_1 > 0,\\, B_2 < 0) = \\frac{1}{8}.$$",
              "keyIdea": "Symmetry kills odd moments (giving zero correlation); independent increments + symmetry partition the plane into 8 equal-probability regions, so the joint-sign probability is 1/8.",
              "id": "5.4:brownian-motion-definition-properties",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.4:brownian-motion-definition-properties",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.4 / Brownian Motion (Definition & Properties)"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "布朗运动",
                  "statement": "定义标准布朗运动及主要性质。求Bₜ与Bₜ²的相关系数，并求$P(B_1>0,B_2<0)$。",
                  "solution": "标准布朗运动从0出发，连续路径，独立平稳正态增量，Bₜ-Bₛ~N(0,t-s)。均值0、方差t、协方差min(s,t)，且有马尔可夫性。Bₜ、Bₜ²-t及$\\exp(\\lambda B_t-\\lambda^2t/2)$为鞅。t>0时，正态奇数矩为0，Cov(Bₜ,Bₜ²)=0，相关0但不独立。令X=B₁、Y=B₂-B₁为独立标准正态，则事件为X>0、Y<-X，占各向同性平面八分之一，概率1/8。",
                  "hint": "奇数矩用对称性；联合符号概率用独立增量。",
                  "keyIdea": "零相关不等于独立；独立正态的旋转对称给区域概率。",
                  "tags": [
                    "布朗运动",
                    "鞅",
                    "协方差"
                  ]
                }
              }
            },
            {
              "title": "Stopping Time / First Passage Time",
              "difficulty": "hard",
              "tags": [
                "stopping time",
                "martingale",
                "reflection"
              ],
              "statement": "Part A: Mean stopping time for a Brownian motion to first reach +1 or −1? Part B: For first passage to level $x>0$, what is the density of the passage time $\\tau_x$ and its expected value? Part C: $dX = dW$; if $X$ starts at 0, what is the probability it hits 3 before −5?",
              "hint": "$B_t^2 - t$ is a martingale (Part A). For Part C, use that $B_t$ is a martingale and apply optional stopping; the exponential martingale gives passage probabilities.",
              "solution": "**Part A — expected time to hit $\\pm1$.** Use the martingale $B_t^2 - t$. Optional stopping gives $E[B_T^2 - T] = 0$, so $E[T] = E[B_T^2]$. At the stopping time the process is at $+1$ or $-1$, so $B_T^2 = 1$ either way. Hence\n$$E[T] = 1.$$\n\n**Part B — distribution of the first-passage time to level $x$.** The **reflection principle** says the chance of having *touched* level $x$ by time $t$ is twice the chance of being above $x$ at time $t$:\n$$P(\\tau_x \\le t) = 2\\,P\\big(W(t) \\ge x\\big) = 2\\big(1 - \\Phi(x/\\sqrt t)\\big).$$\nDifferentiate in $t$ to get the density:\n$$f_{\\tau_x}(t) = \\frac{x}{\\sqrt{2\\pi}\\,t^{3/2}}\\,e^{-x^2/(2t)}.$$\nStriking fact: this tail is so heavy that $E[\\tau_x] = \\infty$ — Brownian motion reaches *any* level with probability 1, yet the **average** time to do so is infinite.\n\n**Part C — hit 3 before −5.** With no drift, $X = B$ is a martingale, so by optional stopping its expected stopping value equals its start, 0:\n$$3\\,p + (-5)(1-p) = 0 \\;\\Rightarrow\\; p = \\frac{5}{8}.$$\n(Same $\\frac{\\beta}{\\alpha+\\beta}$ rule as the discrete random walk — the continuous limit gives the identical boundary-hitting probability.)",
              "keyIdea": "$B_t^2 - t$ gives expected hitting times; the reflection principle gives the first-passage density; optional stopping of $B_t$ itself gives boundary-hitting probabilities $\\frac{\\beta}{\\alpha+\\beta}$.",
              "id": "5.4:stopping-time-first-passage-time",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.4:stopping-time-first-passage-time",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.4 / Stopping Time / First Passage Time"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "布朗首达时间",
                  "statement": "A：标准布朗运动首次到±1的期望时间？B：首次到x>0的时间τₓ密度及期望？C：从0出发先到3而非-5的概率？",
                  "solution": "A：Bₜ²-t结合停时论证给E[T]=E[B_T²]=1。B：反射原理给$P(\\tau_x\\le t)=2[1-\\Phi(x/\\sqrt t)]$，密度为$x e^{-x^2/(2t)}/(\\sqrt{2\\pi}t^{3/2})$，t>0；虽几乎必然到达，平均时间为∞。C：停止位置均值0，3p-5(1-p)=0，得5/8。",
                  "hint": "时间问题看Bₜ²-t，命中概率看Bₜ；单边首达分布用反射原理。",
                  "keyIdea": "区分双边可积退出时间与单边无限均值首达时间。",
                  "tags": [
                    "停止时间",
                    "鞅",
                    "反射"
                  ]
                }
              }
            },
            {
              "title": "Itô's Lemma",
              "difficulty": "hard",
              "tags": [
                "Ito's lemma",
                "martingale"
              ],
              "statement": "Itô's lemma: $df = \\big(\\partial_t f + \\mu\\,\\partial_x f + \\tfrac12\\sigma^2 \\partial_{xx} f\\big)dt + \\sigma\\,\\partial_x f\\,dW$. Use it: (A) Is $Z_t = \\sqrt{t}\\,B_t$ a martingale? (B) Is $W(t)^3$ a martingale?",
              "hint": "A process is a martingale iff its drift (the $dt$ coefficient) is zero. Apply Itô's lemma and inspect the drift.",
              "solution": "**The test to remember:** a process is a martingale **iff its drift — the $dt$ coefficient — is identically zero.** So apply Itô's lemma, read off the $dt$ term, and check whether it vanishes. (The extra $\\tfrac12\\sigma^2\\partial_{xx}f\\,dt$ term is the one ordinary calculus misses and the usual reason a 'nice-looking' process *fails* to be a martingale.)\n\n**(A) $Z_t = \\sqrt t\\,B_t$.** Here $f(B,t) = \\sqrt t\\,B$, so $\\partial_t f = \\tfrac{1}{2}t^{-1/2}B$, $\\partial_B f = \\sqrt t$, $\\partial_{BB}f = 0$. Itô gives\n$$dZ_t = \\underbrace{\\tfrac{1}{2}t^{-1/2}B_t}_{\\text{drift}}\\,dt + \\sqrt t\\,dB_t.$$\nThe drift is $\\tfrac12 t^{-1/2}B_t$, which is nonzero whenever $B_t \\ne 0$ (i.e. with probability 1). **Not a martingale.**\n\n**(B) $W(t)^3$.** Here $f = W^3$, so $\\partial_t f = 0$, $\\partial_W f = 3W^2$, $\\partial_{WW}f = 6W$. The crucial second-order term is $\\tfrac12(6W) = 3W$:\n$$d(W^3) = \\underbrace{3W_t}_{\\text{drift}}\\,dt + 3W_t^2\\,dW_t.$$\nDrift $3W_t \\ne 0$ (prob 1). **Not a martingale** — even though $W^3$ 'looks' centered, that Itô second-order term tilts it.",
              "keyIdea": "Itô's lemma adds a $\\tfrac12 f''\\,dt$ term beyond the ordinary chain rule. Zero drift ⇔ martingale; both $\\sqrt t\\,B_t$ and $W^3$ have nonzero drift, so neither qualifies.",
              "id": "5.4:it-s-lemma",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "5.4:it-s-lemma",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "5.4 / Itô's Lemma"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "伊藤引理",
                  "statement": "对dX=μdt+σdW，伊藤引理为$df=(f_t+\\mu f_x+\\tfrac12\\sigma^2f_{xx})dt+\\sigma f_xdW$。判断√t Bₜ及Wₜ³是否为鞅。",
                  "solution": "t>0时，$d(\\sqrt t B_t)=B_t/(2\\sqrt t)dt+\\sqrt t\\,dB_t$，有非零漂移，不是鞅。另$d(W_t^3)=3W_tdt+3W_t^2dW_t$，也不是鞅。伊藤积分无漂移通常先给局部鞅，升级为真鞅仍需可积性等条件；不能不加条件声称零漂移当且仅当真鞅。",
                  "hint": "应用伊藤引理，检查dt项并注意可积性条件。",
                  "keyIdea": "二阶变差产生普通链式法则没有的修正项。",
                  "tags": [
                    "伊藤引理",
                    "鞅"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "布朗运动与随机微积分",
              "note": "$W(0)=0$，增量独立且$W(t)-W(s)\\sim N(0,t-s)$。重要的鞅有$W(t)^2-t$及$\\exp(\\lambda W(t)-\\tfrac12\\lambda^2t)$。**伊藤引理**在普通链式法则中加入二阶修正项$\\tfrac12f^{\\prime\\prime}\\,dt$。"
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "随机过程与随机微积分",
          "blurb": "马尔可夫链、鞅与随机游走、动态规划、布朗运动及伊藤引理。"
        }
      }
    },
    {
      "num": 6,
      "title": "Finance",
      "blurb": "Option pricing, Black-Scholes, the Greeks, exotic options, and core finance questions (VaR, duration, forwards).",
      "topics": [
        {
          "id": "6.1",
          "title": "Option Pricing",
          "note": "Notation: $S$ = stock price, $K$ = strike, $\\tau = T-t$ = time to maturity, $r$ = risk-free rate, $\\sigma$ = volatility, $c/p$ = European call/put, $C/P$ = American call/put.",
          "problems": [
            {
              "title": "Put-Call Parity",
              "difficulty": "medium",
              "tags": [
                "no-arbitrage",
                "replication"
              ],
              "statement": "State put-call parity for European options on a non-dividend-paying stock and prove it. How does it change for dividend-paying stocks, and for American options?",
              "hint": "Build two portfolios with identical payoffs at maturity; no-arbitrage forces equal prices today.",
              "solution": "**The relation:** for European options (same $K$, same $T$) on a non-dividend stock,\n$$c + Ke^{-r\\tau} = p + S.$$\n\n**Proof by two portfolios with identical payoffs.**\n- Portfolio A: one call + cash $Ke^{-r\\tau}$ (which grows to exactly $K$ at $T$). At maturity it's worth $\\max(S_T - K, 0) + K = \\max(S_T,\\,K)$.\n- Portfolio B: one put + one share. At maturity: $\\max(K - S_T, 0) + S_T = \\max(S_T,\\,K)$.\n\nBoth portfolios pay the *same* amount in every scenario, so by no-arbitrage they must cost the same **today** — giving the parity. (If they didn't, you'd short the dearer and buy the cheaper for a riskless profit.)\n\n**With dividends $D$** (present value of dividends before $T$): the stock 'leaks' $D$, so\n$$c + Ke^{-r\\tau} = p + S - D.$$\n\n**American options:** early exercise breaks the clean equality; parity becomes a pair of inequalities, $S - K \\le C - P \\le S - Ke^{-r\\tau}$ (non-dividend case).",
              "keyIdea": "Two portfolios that pay identically at maturity must cost the same today. Put-call parity is the cleanest no-arbitrage relation and a constant interview staple.",
              "id": "6.1:put-call-parity",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "6.1:put-call-parity",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "6.1 / Put-Call Parity"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "看涨看跌平价",
                  "statement": "陈述无分红股票欧式期权的看涨看跌平价并证明。分红与美式期权如何改变关系？",
                  "solution": "同K、同到期的欧式期权满足$c+Ke^{-r\\tau}=p+S$。看涨加到期K现金，与看跌加股票，到期均为max(Sₜ,K)，无套利故现值相等。若到期前股息现值为D，则右边改为p+S-D。无分红、通常非负利率下美式关系为$S-K\\le C-P\\le S-Ke^{-r\\tau}$，提前行权破坏等式。",
                  "hint": "构造到期每种状态收益都相同的两个组合。",
                  "keyIdea": "逐状态相同收益必须具有相同价格。",
                  "tags": [
                    "无套利",
                    "复制"
                  ]
                }
              }
            },
            {
              "title": "Black-Scholes-Merton Differential Equation",
              "difficulty": "hard",
              "tags": [
                "Black-Scholes",
                "Ito's lemma",
                "hedging"
              ],
              "statement": "Write down the Black-Scholes-Merton PDE and sketch its derivation.",
              "hint": "Build a portfolio of the derivative hedged by $\\partial V/\\partial S$ shares; the randomness cancels, so the portfolio must earn the risk-free rate.",
              "solution": "**The PDE.** For a derivative $V(S,t)$ on a stock following $dS = \\mu S\\,dt + \\sigma S\\,dW$:\n$$\\frac{\\partial V}{\\partial t} + rS\\frac{\\partial V}{\\partial S} + \\tfrac12 \\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} = rV.$$\n\n**Derivation in three moves:**\n1. **Itô's lemma** on $V(S,t)$ gives\n$$dV = \\Big(\\tfrac{\\partial V}{\\partial t} + \\mu S\\tfrac{\\partial V}{\\partial S} + \\tfrac12\\sigma^2 S^2\\tfrac{\\partial^2 V}{\\partial S^2}\\Big)dt + \\sigma S\\tfrac{\\partial V}{\\partial S}\\,dW.$$\n2. **Hedge away the randomness.** Form the portfolio $\\Pi = V - \\tfrac{\\partial V}{\\partial S}S$ (long the derivative, short $\\tfrac{\\partial V}{\\partial S}$ shares). The $dW$ terms in $dV$ and in $\\tfrac{\\partial V}{\\partial S}dS$ **exactly cancel**, leaving $d\\Pi$ with no random term — the portfolio is instantaneously **riskless**.\n3. **No-arbitrage.** A riskless portfolio must earn the risk-free rate: $d\\Pi = r\\Pi\\,dt$. Substituting $\\Pi$ and matching terms gives the PDE.\n\nNotice $\\mu$ (the stock's real drift) **vanished** — option prices don't depend on expected return, only on $r$ and $\\sigma$. That's the seed of *risk-neutral pricing*.",
              "keyIdea": "Delta-hedging cancels the Brownian term, making the portfolio riskless; forcing it to earn $r$ gives the PDE. The real-world drift $\\mu$ drops out entirely.",
              "id": "6.1:black-scholes-merton-differential-equation",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "6.1:black-scholes-merton-differential-equation",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "6.1 / Black-Scholes-Merton Differential Equation"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "BSM方程",
                  "statement": "写出Black-Scholes-Merton偏微分方程并概述推导。",
                  "solution": "股票dS=μSdt+σSdW，无分红衍生品满足$V_t+rSV_S+\\tfrac12\\sigma^2S^2V_{SS}=rV$。对V用伊藤引理，再建立动态自融资的Delta对冲，持有衍生品并做空Vₛ股，收益dV-VₛdS的随机项抵消。无风险组合瞬时收益必须为r(V-SVₛ)dt，整理得PDE。真实漂移μ消去，反映风险中性定价。",
                  "hint": "用Vₛ股抵消衍生品的布朗随机项。",
                  "keyIdea": "自融资对冲与无套利收益率共同导出PDE。",
                  "tags": [
                    "BS模型",
                    "伊藤引理",
                    "对冲"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "期权定价",
              "note": "记号：S为股价，K为执行价，$\\tau=T-t$为剩余期限，r为无风险利率，$\\sigma$为波动率；c/p表示欧式看涨/看跌，C/P表示美式看涨/看跌。"
            }
          }
        },
        {
          "id": "6.2",
          "title": "The Greeks",
          "note": "Greeks are sensitivities of the option price: $\\Delta = \\partial V/\\partial S$, $\\Gamma = \\partial^2 V/\\partial S^2$, $\\Theta = \\partial V/\\partial t$, Vega $= \\partial V/\\partial\\sigma$, $\\rho = \\partial V/\\partial r$.",
          "problems": [
            {
              "title": "Delta",
              "difficulty": "medium",
              "tags": [
                "Greeks",
                "delta",
                "hedging"
              ],
              "statement": "What is the delta of a European call (non-dividend stock)? Why is it clean even though $N(d_1)$ and $N(d_2)$ both depend on $S$? What's the delta of an at-the-money call?",
              "hint": "Differentiate $c = SN(d_1) - Ke^{-r\\tau}N(d_2)$ carefully — the extra terms from $\\partial N(d_1)/\\partial S$ and $\\partial N(d_2)/\\partial S$ cancel.",
              "solution": "**Result:** $\\Delta = \\dfrac{\\partial c}{\\partial S} = N(d_1)$.\n\n**Why it's clean.** Naively differentiating $c = SN(d_1) - Ke^{-r\\tau}N(d_2)$ you'd worry about the chain-rule terms, since *both* $d_1$ and $d_2$ depend on $S$:\n$$\\frac{\\partial c}{\\partial S} = N(d_1) + S\\,N'(d_1)\\frac{\\partial d_1}{\\partial S} - Ke^{-r\\tau}N'(d_2)\\frac{\\partial d_2}{\\partial S}.$$\nBut a small miracle: $S\\,N'(d_1) = Ke^{-r\\tau}N'(d_2)$ (it follows from the definitions of $d_1, d_2$), and since $\\partial d_1/\\partial S = \\partial d_2/\\partial S$, the **last two terms cancel exactly**, leaving just $N(d_1)$.\n\n**At-the-money.** When $S = K$, $d_1 = \\tfrac{(r + \\sigma^2/2)\\tau}{\\sigma\\sqrt\\tau} > 0$, so $\\Delta = N(d_1) > 0.5$ — a hair above one-half. As $S \\gg K$, $\\Delta \\to 1$ (deep ITM call moves one-for-one with the stock); as $S \\ll K$, $\\Delta \\to 0$.",
              "keyIdea": "Delta = $N(d_1)$, the hedge ratio: how many shares to hold to neutralize a small move. The chain-rule terms cancel via $SN'(d_1)=Ke^{-r\\tau}N'(d_2)$; ATM delta is just over 0.5.",
              "id": "6.2:delta",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "6.2:delta",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "6.2 / Delta"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "看涨Delta",
                  "statement": "求无分红欧式看涨的Delta，解释d₁、d₂随S变化时链式项为何消去，并讨论平值Delta。",
                  "solution": "价格c=SΦ(d₁)-Ke⁻ʳᵗΦ(d₂)，求导得Φ(d₁)及两项链式项。因Sφ(d₁)=Ke⁻ʳᵗφ(d₂)，且∂d₁/∂S=∂d₂/∂S，链式项抵消，故Delta=Φ(d₁)。S=K时$d_1=(r+\\sigma^2/2)\\sqrt\\tau/\\sigma$，当r+σ²/2>0时Delta>1/2；深实值趋1，深虚值趋0。",
                  "hint": "仔细求导，利用两个正态密度项的恒等式。",
                  "keyIdea": "Delta是局部对冲比率，平值是否大于一半取决于参数。",
                  "tags": [
                    "希腊字母敏感度",
                    "Delta对冲比率",
                    "对冲"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "期权敏感度",
              "note": "期权价格的敏感度：$\\Delta=\\partial V/\\partial S$，$\\Gamma=\\partial^2V/\\partial S^2$，$\\Theta=\\partial V/\\partial t$，Vega为$\\partial V/\\partial\\sigma$，$\\rho=\\partial V/\\partial r$。"
            }
          }
        },
        {
          "id": "6.3",
          "title": "Option Portfolios & Exotic Options",
          "note": "Combine vanilla options into spreads and straddles to express views; price exotics (binary, exchange) with the same risk-neutral / no-arbitrage tools.",
          "problems": [
            {
              "title": "Binary Options",
              "difficulty": "hard",
              "tags": [
                "exotic options",
                "binary",
                "hedging"
              ],
              "statement": "Price a cash-or-nothing (digital) European call on a non-dividend stock (GBM), and explain why it's so hard to hedge near maturity.",
              "hint": "A cash-or-nothing call pays \\$1 if $S_T > K$. Its price is the discounted risk-neutral probability of finishing in the money.",
              "solution": "**Pricing.** A cash-or-nothing call pays exactly **\\$1 if $S_T > K$** and \\$0 otherwise. Its value is the discounted *probability* of that event under the risk-neutral measure — and we already know that probability is $N(d_2)$ (the same $d_2$ from Black-Scholes). So\n$$c_{\\text{binary}} = e^{-r\\tau}N(d_2).$$\n\n**Why it's a hedging nightmare near maturity.** Its delta is\n$$\\Delta = \\frac{\\partial c_{\\text{binary}}}{\\partial S} = e^{-r\\tau}N'(d_2)\\frac{1}{S\\sigma\\sqrt\\tau}.$$\nAs $\\tau \\to 0$ with $S$ near $K$, that $\\frac{1}{\\sqrt\\tau}$ blows up — **gamma explodes**. The payoff is a *cliff* at $K$: a penny of stock movement flips the payout between \\$0 and \\$1, so the delta hedge would need to swing between huge long and short share positions almost instantly. In practice this is un-hedgeable with the stock alone; traders instead **approximate the digital with a tight bull spread** (long a call at $K - \\varepsilon$, short at $K + \\varepsilon$, scaled by $\\frac{1}{2\\varepsilon}$), turning the cliff into a steep-but-finite ramp.",
              "keyIdea": "Binary call = $e^{-r\\tau}N(d_2)$ (discounted prob of finishing ITM). The payoff cliff at $K$ makes gamma explode near expiry, so it's hedged with a narrow bull spread, not the stock.",
              "id": "6.3:binary-options",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "6.3:binary-options",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "6.3 / Binary Options"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "数字期权",
                  "statement": "在无分红GBM模型中，求到期Sₜ>K支付1的欧式数字看涨价格，并解释临近到期时难对冲的原因。",
                  "solution": "风险中性下实值概率为Φ(d₂)，价格$e^{-r\\tau}\\Phi(d_2)$。Delta为$e^{-r\\tau}\\phi(d_2)/(S\\sigma\\sqrt\\tau)$；临近到期且接近执行价时变化非常剧烈，跳跃式支付对离散再平衡不利。可用K-ε看涨多头、K+ε看涨空头，按1/(2ε)缩放，近似窄牛市价差，将支付台阶变成陡斜坡；这仍有近似与执行风险。",
                  "hint": "数字支付的价格是贴现后的风险中性事件概率。",
                  "keyIdea": "不连续支付造成执行价附近高度敏感的对冲需求。",
                  "tags": [
                    "奇异期权",
                    "二进制",
                    "对冲"
                  ]
                }
              }
            },
            {
              "title": "Exchange Options",
              "difficulty": "hard",
              "tags": [
                "exotic options",
                "change of numeraire"
              ],
              "statement": "Price an exchange option paying $\\max(S_{1,T} - S_{2,T}, 0)$ at maturity, where $S_1, S_2$ are non-dividend GBM stocks with correlation $\\rho$.",
              "hint": "Use a change of numeraire: measure everything in units of stock 2 instead of dollars. The two-asset problem collapses to one.",
              "solution": "**The trick — change of numeraire.** Normally we price in dollars. But you can measure value in units of *another asset* as long as it's always positive. Here, use **$S_2$ as the numeraire**: divide the payoff by $S_{2,T}$,\n$$\\frac{\\max(S_{1,T} - S_{2,T}, 0)}{S_{2,T}} = \\max\\!\\Big(\\frac{S_{1,T}}{S_{2,T}} - 1,\\, 0\\Big).$$\nIn these units the payoff is just a **standard call with strike 1** on the single ratio $X = S_1/S_2$. Two correlated Brownian motions collapse into one.\n\n**Result (Margrabe's formula).** The ratio $X$ is itself lognormal with volatility\n$$\\hat\\sigma = \\sqrt{\\sigma_1^2 - 2\\rho\\sigma_1\\sigma_2 + \\sigma_2^2},$$\nso applying Black-Scholes (strike 1, no drift in the numeraire, zero rate) gives\n$$V = S_1 N(d_1) - S_2 N(d_2), \\quad d_1 = \\frac{\\ln(S_1/S_2) + \\tfrac12\\hat\\sigma^2\\tau}{\\hat\\sigma\\sqrt\\tau}, \\quad d_2 = d_1 - \\hat\\sigma\\sqrt\\tau.$$\nNote correlation enters only through $\\hat\\sigma$: more correlated assets move together, shrinking $\\hat\\sigma$ and the option's value.",
              "keyIdea": "Switch the numeraire to stock 2, turning a two-asset payoff into a one-asset call on the price ratio. Margrabe's formula uses the combined volatility $\\sqrt{\\sigma_1^2 - 2\\rho\\sigma_1\\sigma_2 + \\sigma_2^2}$.",
              "id": "6.3:exchange-options",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "6.3:exchange-options",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "6.3 / Exchange Options"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "交换期权",
                  "statement": "两只无分红GBM股票相关ρ，到期支付$\\max(S_{1,T}-S_{2,T},0)$，求价格。",
                  "solution": "以S₂作计价单位，支付变为max(S₁/S₂-1,0)，在对应测度中转为价格比率的执行价1看涨。有效波动$\\hat\\sigma=\\sqrt{\\sigma_1^2-2\\rho\\sigma_1\\sigma_2+\\sigma_2^2}$。Margrabe公式为$V=S_1\\Phi(d_1)-S_2\\Phi(d_2)$，其中$d_1=[\\ln(S_1/S_2)+\\hat\\sigma^2\\tau/2]/(\\hat\\sigma\\sqrt\\tau)$，$d_2=d_1-\\hat\\sigma\\sqrt\\tau$。更高相关通常降低差值波动及期权价值。",
                  "hint": "改用第二只股票作计价单位。",
                  "keyIdea": "换基准资产将双资产问题化为单一比率看涨。",
                  "tags": [
                    "奇异期权",
                    "计价单位变换"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "期权组合与奇异期权",
              "note": "可将普通期权组合成价差、跨式等策略；数字期权、交换期权等奇异期权也使用风险中性定价与无套利工具。"
            }
          }
        },
        {
          "id": "6.4",
          "title": "Other Finance Questions",
          "note": "Position-specific knowledge: portfolio theory, risk measures (VaR), fixed-income (duration/convexity, rate models), and forwards vs. futures.",
          "problems": [
            {
              "title": "Portfolio Optimization",
              "difficulty": "medium",
              "tags": [
                "Markowitz",
                "mean-variance",
                "diversification"
              ],
              "statement": "Two stocks A and B both have expected return 12%; A's return has std 20%, B's 30%, correlation 50%. How do you allocate to minimize the variance of the portfolio, and what's the lesson?",
              "hint": "Write the portfolio variance as a function of the weight $w$ in A; minimize. Diversification helps because correlation < 1.",
              "solution": "Since both stocks have the **same expected return** (12%), every allocation has the same expected return — so 'best' just means **minimum variance**. Put weight $w$ in A and $1-w$ in B:\n$$\\sigma_p^2 = w^2\\sigma_A^2 + (1-w)^2\\sigma_B^2 + 2w(1-w)\\rho\\sigma_A\\sigma_B.$$\nWith $\\sigma_A = 0.2$, $\\sigma_B = 0.3$, $\\rho = 0.5$, take $\\frac{d\\sigma_p^2}{dw} = 0$. The minimum-variance weight is\n$$w^* = \\frac{\\sigma_B^2 - \\rho\\sigma_A\\sigma_B}{\\sigma_A^2 + \\sigma_B^2 - 2\\rho\\sigma_A\\sigma_B} = \\frac{0.09 - 0.03}{0.04 + 0.09 - 0.06} = \\frac{0.06}{0.07} \\approx 86\\%\\text{ in A}.$$\n\n**The lesson (Markowitz):** because the correlation is below 1, the blended portfolio has **lower** volatility than *either* stock alone — diversification is a 'free lunch' in risk. (In matrix form for $N$ assets, you minimize $w^\\top \\Sigma w$ subject to a target return — the mean-variance frontier.)",
              "keyIdea": "With equal expected returns, optimize purely on variance. Correlation < 1 lets a mix beat both stand-alone stocks — the core of Markowitz diversification.",
              "id": "6.4:portfolio-optimization",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "6.4:portfolio-optimization",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "6.4 / Portfolio Optimization"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "组合最小方差",
                  "statement": "A、B股票期望收益均12%，标准差20%、30%，相关系数0.5。如何配置使组合方差最小？说明含义。",
                  "solution": "A权重w时，方差w²σₐ²+(1-w)²σᵦ²+2w(1-w)ρσₐσᵦ。求导得$w^*=(\\sigma_B^2-\\rho\\sigma_A\\sigma_B)/(\\sigma_A^2+\\sigma_B^2-2\\rho\\sigma_A\\sigma_B)=0.06/0.07=6/7$，B为1/7。两资产均值相同，配置不改变期望；本例组合波动低于两者，说明分散化收益。",
                  "hint": "把方差写成w的二次式并求导。",
                  "keyIdea": "相同收益下优化协方差结构以降低风险。",
                  "tags": [
                    "均值方差理论",
                    "均值方差",
                    "分散化"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "其他金融数学问题",
              "note": "相关背景包括组合理论、风险度量（如VaR）、固定收益（久期、凸性与利率模型），以及远期和期货的区别。"
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "金融数学",
          "blurb": "期权定价、BS模型、期权敏感度、奇异期权，以及VaR、久期、远期等金融背景。"
        }
      }
    },
    {
      "num": 7,
      "title": "Algorithms & Numerical Methods",
      "blurb": "Classic algorithms, bit tricks (the power of two), and numerical methods like Monte Carlo and finite differences.",
      "topics": [
        {
          "id": "7.1",
          "title": "Algorithms",
          "note": "Think in terms of asymptotic cost $T(n)$ as $n\\to\\infty$ (big-O). The recurring tricks: clever invariants, divide-and-conquer, and one-pass scans that maintain a running quantity.",
          "problems": [
            {
              "title": "Number Swap",
              "difficulty": "easy",
              "tags": [
                "bit manipulation",
                "in-place"
              ],
              "statement": "Swap two integers $i$ and $j$ **without** using a temporary variable.",
              "hint": "Either use arithmetic (sum then subtract), or XOR three times.",
              "solution": "**Arithmetic version** — stash the sum in one slot, then peel it apart:\n```\ni = i + j;   // i now holds the sum\nj = i - j;   // j becomes the old i\ni = i - j;   // i becomes the old j\n```\n(Caveat: the intermediate sum can **overflow** for large ints.)\n\n**XOR version** — overflow-safe, using $x \\oplus x = 0$ and $x \\oplus 0 = x$:\n```\ni = i ^ j;\nj = i ^ j;   // = (i^j)^j = original i\ni = i ^ j;   // = (i^j)^(original i) = original j\n```\nEach line folds one value into the other and back out, so no temp slot is needed. (Don't apply XOR-swap to the *same* memory location — it would zero it out.)",
              "keyIdea": "Use an invertible operation (add/subtract or XOR) to encode both values in one slot, then decode. XOR avoids the overflow risk of the arithmetic trick.",
              "id": "7.1:number-swap",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:number-swap",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Number Swap"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "整数交换",
                  "statement": "不使用临时变量交换两个整数i、j。",
                  "solution": "可先求和再相减，或三次异或：\n\n```\ni = i + j;   // i now holds the sum\nj = i - j;   // j becomes the old i\ni = i - j;   // i becomes the old j\n```\n\n```\ni = i ^ j;\nj = i ^ j;   // = (i^j)^j = original i\ni = i ^ j;   // = (i^j)^(original i) = original j\n```\n\n加减法中间值可能溢出；异或避免算术溢出，但两个变量不能指向同一存储位置，否则会被清零。",
                  "hint": "使用可逆的加减或异或操作。",
                  "keyIdea": "编码两个值后逐步解码，并检查溢出与别名风险。",
                  "tags": [
                    "位运算",
                    "原地算法"
                  ]
                }
              }
            },
            {
              "title": "Unique Elements",
              "difficulty": "easy",
              "tags": [
                "arrays",
                "one pass"
              ],
              "statement": "Given a **sorted** array, extract the distinct values in one pass.",
              "hint": "In a sorted array, an element is new exactly when it differs from the previous one.",
              "solution": "Sorting buys you a one-pass solution: equal values are adjacent, so an element is **new** precisely when it differs from the one before it. Walk through once, copying an element to the output only when $a_k \\ne a_{k-1}$:\n```\nresult = [a[0]];\nfor (k = 1; k < n; ++k)\n    if (a[k] != a[k-1]) result.push(a[k]);\n```\nThis is $O(n)$ time and (if done in-place) $O(1)$ extra space. If the array weren't sorted you'd either sort first ($O(n\\log n)$) or use a hash set ($O(n)$ time, $O(n)$ space).",
              "keyIdea": "On sorted data, 'distinct' becomes 'differs from neighbor' — a single $O(n)$ scan with no extra structure.",
              "id": "7.1:unique-elements",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:unique-elements",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Unique Elements"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "有序数组去重",
                  "statement": "给定已排序数组，单次扫描提取互异值。",
                  "solution": "有序时相等值相邻，只在当前值不同于前值时输出。空数组需先处理。\n\n```\nresult = [a[0]];\nfor (k = 1; k < n; ++k)\n    if (a[k] != a[k-1]) result.push(a[k]);\n```\n\n时间O(n)；输出新数组占O(n)，原地双指针版本额外空间O(1)。未排序时可先排序O(n log n)，或哈希平均O(n)时间、O(n)空间。",
                  "hint": "新值恰在与前值不同时出现。",
                  "keyIdea": "排序使全局去重变为相邻比较。",
                  "tags": [
                    "数组",
                    "单次扫描"
                  ]
                }
              }
            },
            {
              "title": "Horner's Algorithm",
              "difficulty": "easy",
              "tags": [
                "polynomials",
                "efficiency"
              ],
              "statement": "Evaluate a polynomial $a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0$ efficiently. How many multiplications?",
              "hint": "Factor out $x$ repeatedly from the inside out.",
              "solution": "Computing each power $x^k$ separately wastes multiplications. **Horner's method** rewrites the polynomial by repeatedly factoring out $x$:\n$$a_0 + x\\big(a_1 + x\\big(a_2 + \\cdots + x(a_{n-1} + x\\,a_n)\\big)\\big).$$\nEvaluate from the innermost parenthesis outward:\n```\nresult = a[n];\nfor (k = n-1; k >= 0; --k)\n    result = result * x + a[k];\n```\nThis uses only **$n$ multiplications and $n$ additions** — optimal, versus the naive $O(n^2)$ multiplications from recomputing powers.",
              "keyIdea": "Nested factoring ($a_0 + x(a_1 + x(\\cdots))$) evaluates an $n$-degree polynomial in just $n$ multiply-adds.",
              "id": "7.1:horner-s-algorithm",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:horner-s-algorithm",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Horner's Algorithm"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "Horner求值",
                  "statement": "高效计算$a_nx^n+\\cdots+a_1x+a_0$，需要多少次乘法？",
                  "solution": "将其改写为$a_0+x(a_1+x(\\cdots+x a_n))$，由内向外更新：\n\n```\nresult = a[n];\nfor (k = n-1; k >= 0; --k)\n    result = result * x + a[k];\n```\n\n使用n次乘法、n次加法。相比逐项重复计算各幂的朴素O(n²)乘法，线性复杂度更高效。",
                  "hint": "逐层提出x。",
                  "keyIdea": "嵌套乘加避免反复计算幂。",
                  "tags": [
                    "多项式",
                    "效率"
                  ]
                }
              }
            },
            {
              "title": "Moving Average",
              "difficulty": "easy",
              "tags": [
                "arrays",
                "sliding window"
              ],
              "statement": "Compute the moving average of a stream over a window of size $w$ efficiently (don't re-sum the whole window each step).",
              "hint": "When the window slides, only one element enters and one leaves.",
              "solution": "Keep a **running sum** of the current window. Each time the window slides by one, you don't re-add $w$ numbers — you just **add the entering element and subtract the leaving one**:\n```\nsum += x[i] - x[i-w];   // i >= w\naverage = sum / w;\n```\nThat's $O(1)$ work per step and $O(n)$ overall, versus the naive $O(nw)$ of summing the window from scratch each time. (Numerically, for very long streams, occasionally recompute the sum to avoid floating-point drift.)",
              "keyIdea": "Maintain a running window sum; a slide is one addition and one subtraction — $O(1)$ per step instead of $O(w)$.",
              "id": "7.1:moving-average",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:moving-average",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Moving Average"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "滑动平均",
                  "statement": "高效计算窗口大小w的流式滑动平均，不要每步重新求整个窗口和。",
                  "solution": "维护窗口总和，新元素加入、旧元素移出时只做一加一减：\n\n```\nsum += x[i] - x[i-w];   // i >= w\naverage = sum / w;\n```\n\n每步O(1)、总O(n)。流中需保存离开窗口的值，通常用O(w)环形缓冲；长时间浮点累加可定期重算降低漂移。",
                  "hint": "窗口平移只有一项进入、一项离开。",
                  "keyIdea": "维护可增量更新的统计量。",
                  "tags": [
                    "数组",
                    "滑动窗口"
                  ]
                }
              }
            },
            {
              "title": "Sorting Algorithm",
              "difficulty": "medium",
              "tags": [
                "sorting",
                "complexity"
              ],
              "statement": "Compare the common sorting algorithms — which to use when, and what are their time/space costs?",
              "hint": "Comparison sorts can't beat $O(n\\log n)$ in the worst case. Think about stability and memory too.",
              "solution": "Key facts to have ready:\n\n- **Quicksort** — average $O(n\\log n)$, worst case $O(n^2)$ (bad pivots), in-place ($O(\\log n)$ stack). Fastest in practice; the usual default.\n- **Merge sort** — $O(n\\log n)$ *guaranteed*, **stable**, but needs $O(n)$ extra space. Good when worst-case guarantees or stability matter, or for linked lists / external sorting.\n- **Heap sort** — $O(n\\log n)$ guaranteed, in-place, but not stable and poor cache behavior.\n- **Insertion sort** — $O(n^2)$, but excellent on **small or nearly-sorted** inputs (hence used as the base case inside quicksort).\n\n**Lower bound:** any *comparison-based* sort needs $\\Omega(n\\log n)$ comparisons in the worst case (there are $n!$ orderings, and each comparison gives one bit, so you need $\\log_2(n!) \\approx n\\log n$). You can beat it only with non-comparison sorts (counting/radix sort) when keys are small integers.",
              "keyIdea": "Quicksort for speed, merge sort for guarantees/stability. Comparison sorts are bounded below by $\\Omega(n\\log n)$; only radix/counting sort escapes it for bounded integer keys.",
              "id": "7.1:sorting-algorithm",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:sorting-algorithm",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Sorting Algorithm"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "排序比较",
                  "statement": "比较常见排序算法的使用情形、时间、空间及稳定性。",
                  "solution": "快排平均O(n log n)、最坏O(n²)，常见递归栈平均O(log n)、最坏O(n)，通常不稳定；归并保证O(n log n)、稳定，数组版常用O(n)额外空间；堆排保证O(n log n)、额外O(1)，不稳定且缓存表现可能较差；插排最坏O(n²)，适合小型或近有序数据。比较排序决策树有n!叶，最坏需Ω(log(n!))=Ω(n log n)比较；计数、基数排序利用键结构可避开该下界。",
                  "hint": "除时间外还比较稳定性、内存及输入特征。",
                  "keyIdea": "比较模型下界与工程需求共同决定算法。",
                  "tags": [
                    "排序",
                    "复杂度"
                  ]
                }
              }
            },
            {
              "title": "Random Permutation",
              "difficulty": "medium",
              "tags": [
                "randomization",
                "shuffling"
              ],
              "statement": "Generate a **uniformly random** permutation of an $n$-element array (every ordering equally likely).",
              "hint": "Go from the end: swap each position with a random earlier-or-equal position.",
              "solution": "Use the **Fisher–Yates shuffle**. Walk from the last index down to the first; at position $i$, pick a random index $j$ in $[0, i]$ and swap:\n```\nfor (i = n-1; i > 0; --i) {\n    j = random integer in [0, i];\n    swap(a[i], a[j]);\n}\n```\nThis is $O(n)$ and **provably uniform**: position $i$ receives any of its $i+1$ candidates with equal probability, so the total number of equally likely outcomes is $n\\cdot(n-1)\\cdots 1 = n!$ — exactly the number of permutations.\n\n**Common bug to avoid:** drawing $j$ from the *full* range $[0, n-1]$ each time does **not** give a uniform distribution (it produces $n^n$ equally likely runs, which isn't divisible by $n!$).",
              "keyIdea": "Fisher–Yates: swap each element with a uniformly chosen earlier element. $O(n)$ and exactly uniform — but the random index must be drawn from the shrinking range, not the whole array.",
              "id": "7.1:random-permutation",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:random-permutation",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Random Permutation"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "均匀洗牌",
                  "statement": "将n个元素的数组生成每种排列等概率的随机排列。",
                  "solution": "使用Fisher-Yates，从后向前为位置i均匀选择j∈[0,i]交换：\n\n```\nfor (i = n-1; i > 0; --i) {\n    j = random integer in [0, i];\n    swap(a[i], a[j]);\n}\n```\n\n各位置依次固定且候选等概率，共n!条等概率路径，每种排列概率1/n!，时间O(n)。若每次都从整个数组选j则一般不均匀；随机范围必须随i缩小。",
                  "hint": "从尾部开始，在尚未固定的范围中均匀抽取。",
                  "keyIdea": "逐步条件均匀性保证最终均匀。",
                  "tags": [
                    "随机化",
                    "洗牌"
                  ]
                }
              }
            },
            {
              "title": "Search Algorithm",
              "difficulty": "easy",
              "tags": [
                "binary search",
                "divide and conquer"
              ],
              "statement": "Find a target value in a **sorted** array efficiently.",
              "hint": "Halve the search range each comparison.",
              "solution": "**Binary search.** Keep a candidate range $[lo, hi]$; compare the target to the middle element and discard half the range each step:\n```\nlo = 0; hi = n-1;\nwhile (lo <= hi) {\n    mid = lo + (hi - lo) / 2;      // avoids overflow vs (lo+hi)/2\n    if (a[mid] == target) return mid;\n    else if (a[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n}\nreturn NOT_FOUND;\n```\nEach step halves the candidates, so it runs in **$O(\\log n)$**. Two classic pitfalls: compute `mid` as `lo + (hi-lo)/2` to avoid integer overflow, and be careful with the loop boundary (`<=` vs `<`) to not miss the last element.",
              "keyIdea": "Binary search halves the range per comparison → $O(\\log n)$. Watch the midpoint-overflow and off-by-one boundary bugs.",
              "id": "7.1:search-algorithm",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:search-algorithm",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Search Algorithm"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "二分搜索",
                  "statement": "在有序数组中高效查找目标值。",
                  "solution": "维护闭区间[lo,hi]，每次比较中点后排除一半候选：\n\n```\nlo = 0; hi = n-1;\nwhile (lo <= hi) {\n    mid = lo + (hi - lo) / 2;      // avoids overflow vs (lo+hi)/2\n    if (a[mid] == target) return mid;\n    else if (a[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n}\nreturn NOT_FOUND;\n```\n\n时间O(log n)、额外空间O(1)。中点用lo+(hi-lo)/2避免相加溢出，并确认整数取整及<=边界，不能漏最后一个候选。",
                  "hint": "每次比较把候选区间减半。",
                  "keyIdea": "维护区间不变量并正确处理边界。",
                  "tags": [
                    "二分搜索",
                    "分治"
                  ]
                }
              }
            },
            {
              "title": "Fibonacci Numbers",
              "difficulty": "medium",
              "tags": [
                "recursion",
                "dynamic programming"
              ],
              "statement": "Compute the $n$-th Fibonacci number efficiently. Why is naive recursion bad?",
              "hint": "Naive recursion recomputes the same subproblems exponentially many times.",
              "solution": "**Why naive recursion is terrible:** `fib(n) = fib(n-1) + fib(n-2)` recomputes the same values over and over — the call tree has $\\approx \\phi^n$ nodes, so it's **exponential** $O(\\phi^n)$.\n\n**Fix 1 — bottom-up iteration** ($O(n)$ time, $O(1)$ space): keep just the last two values.\n```\na = 0; b = 1;\nfor (k = 2; k <= n; ++k) { c = a + b; a = b; b = c; }\nreturn b;\n```\n\n**Fix 2 — matrix exponentiation** ($O(\\log n)$): since $\\begin{pmatrix}F_{n+1}\\\\F_n\\end{pmatrix} = \\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}^{n}\\begin{pmatrix}1\\\\0\\end{pmatrix}$, raise the matrix by fast exponentiation (repeated squaring).\n\n**Fix 3 — closed form** (Binet): $F_n = \\frac{\\phi^n - \\psi^n}{\\sqrt5}$ with $\\phi = \\frac{1+\\sqrt5}{2}$ — $O(1)$ but suffers floating-point error for large $n$.",
              "keyIdea": "Naive recursion is exponential because it recomputes subproblems. Memoize / iterate for $O(n)$, or use matrix power for $O(\\log n)$.",
              "id": "7.1:fibonacci-numbers",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:fibonacci-numbers",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Fibonacci Numbers"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "斐波那契",
                  "statement": "高效求第n个斐波那契数。为什么朴素递归效率差？",
                  "solution": "朴素递归不断重复相同子问题，调用数约φⁿ。迭代或记忆化仅需O(n)次加法：\n\n```\na = 0; b = 1;\nfor (k = 2; k <= n; ++k) { c = a + b; a = b; b = c; }\nreturn b;\n```\n\n上面迭代骨架需单独处理n=0。矩阵$\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}^n$快速幂只需O(log n)次矩阵运算。Binet闭式$F_n=(\\phi^n-\\psi^n)/\\sqrt5$存在，但有限精度直接计算大n会有舍入问题；任意精度成本不能视作常数。",
                  "hint": "避免重复计算子问题，或用矩阵快速幂。",
                  "keyIdea": "区分算术操作次数与大整数位复杂度。",
                  "tags": [
                    "递归",
                    "动态规划"
                  ]
                }
              }
            },
            {
              "title": "Maximum Contiguous Subarray",
              "difficulty": "medium",
              "tags": [
                "dynamic programming",
                "one pass"
              ],
              "statement": "Given an array of (possibly negative) numbers, find the contiguous subarray with the largest sum.",
              "hint": "Scan once, tracking the best sum that *ends at* the current position.",
              "solution": "**Kadane's algorithm**, a one-pass DP. Track `cur` = the largest subarray sum *ending at the current element*. At each element you either **extend** the previous run or **start fresh** at this element — whichever is larger:\n```\ncur = best = a[0];\nfor (i = 1; i < n; ++i) {\n    cur = max(a[i], cur + a[i]);   // extend, or restart here\n    best = max(best, cur);\n}\nreturn best;\n```\nThe insight: if the running sum ever goes negative, it can only *hurt* what follows, so you drop it and restart. This is **$O(n)$** time, $O(1)$ space — far better than the $O(n^2)$ brute force over all subarrays.",
              "keyIdea": "Kadane: maintain the best sum ending here; restart whenever the running sum turns negative. One $O(n)$ pass, because a negative prefix can never help the future.",
              "id": "7.1:maximum-contiguous-subarray",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:maximum-contiguous-subarray",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.1 / Maximum Contiguous Subarray"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "最大连续子数组",
                  "statement": "给定可能含负数的数组，求和最大的连续子数组。",
                  "solution": "Kadane算法维护cur为以当前位置结尾的最大子数组和，best为全局最好。每步选择延长前段或从当前重启：\n\n```\ncur = best = a[0];\nfor (i = 1; i < n; ++i) {\n    cur = max(a[i], cur + a[i]);   // extend, or restart here\n    best = max(best, cur);\n}\nreturn best;\n```\n\n时间O(n)、空间O(1)。初始化为a[0]可处理全负数组；空数组需事先定义行为。负前缀不会改善后续收益。",
                  "hint": "跟踪“恰在当前位置结尾”的最优和。",
                  "keyIdea": "丢弃负前缀，局部状态支持一次扫描。",
                  "tags": [
                    "动态规划",
                    "单次扫描"
                  ]
                }
              }
            },
            {
              "id": "7.1:permutation-count",
              "title": "Permutation Count",
              "difficulty": "easy",
              "tags": [
                "algorithms",
                "combinatorial counting",
                "Python"
              ],
              "statement": "Implement Python function `count_permutations(n)` returning the number of permutations of n distinct elements, for a nonnegative integer n. Discuss n=0 and complexity, then extend to repeated elements.",
              "hint": "Counting does not require generating every permutation.",
              "solution": "```python\ndef count_permutations(n):\n    if type(n) is not int or n < 0:\n        raise ValueError('n must be a nonnegative integer')\n    result = 1\n    for k in range(2, n + 1):\n        result *= k\n    return result\n```\n\nThe answer is n!, with 0!=1. The loop performs O(n) arbitrary-precision multiplications, not O(n) bit operations; the result itself requires Θ(n log n) bits. With multiplicities k₁,...,kₘ, the count is n!/(k₁!⋯kₘ!).",
              "keyIdea": "Factorial and 0!=1; Validate input; Distinguish integer-operation count from bit complexity; Remove duplicate permutations",
              "kind": "programming",
              "reviewStatus": "verified",
              "familyId": "7.1:permutation-count",
              "rubric": [
                "Factorial and 0!=1",
                "Validate input",
                "Distinguish integer-operation count from bit complexity",
                "Remove duplicate permutations"
              ],
              "verification": [
                "Multiplication principle; compare with math.factorial on small inputs."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0064"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "用 Python 实现 count_permutations(n)，返回 n 个互异元素的全排列个数，n 为非负整数。说明 n=0 和复杂度；追问含重复元素的情形。",
                  "hint": "只需计数，不必生成所有排列。",
                  "solution": "```python\ndef count_permutations(n):\n    if type(n) is not int or n < 0:\n        raise ValueError('n must be a nonnegative integer')\n    result = 1\n    for k in range(2, n + 1):\n        result *= k\n    return result\n```\n\n答案为 n!，0!=1。执行 O(n) 次大整数乘法；不能把位复杂度视为 O(n)，结果本身需要 Θ(n log n) 位。重复元素计数 n!/(k₁!…k_m!)。",
                  "keyIdea": "阶乘与 0!=1；合法输入；区分大整数操作次数和位复杂度；重复元素除重",
                  "title": "排列计数",
                  "tags": [
                    "算法",
                    "组合计数",
                    "Python"
                  ]
                }
              }
            },
            {
              "id": "7.1:twenty-four-game",
              "title": "Twenty-Four Game",
              "difficulty": "hard",
              "tags": [
                "algorithms",
                "backtracking",
                "probability",
                "playing cards",
                "combinatorics"
              ],
              "statement": "Given four integers, use each exactly once with +, -, *, / and parentheses to make 24. Design an algorithm that decides feasibility and returns an expression. Explain division-by-zero and floating-point handling.",
              "hint": "Consider how the final operation combines two expression subtrees.",
              "solution": "Recursively choose two current values a,b and try a+b, a-b, b-a, a*b, a/b if b≠0, and b/a if a≠0. Replace the pair with the result until one value remains, then test for 24. Use Fraction for exact rational arithmetic and carry expressions. Memoizing failed rational-multiset states avoids disrupting expression reconstruction. Four inputs have fixed size; generalizing to n inputs gives exponential or factorial-scale naive search, not a polynomial bound.",
              "keyIdea": "Pairwise merging covers binary expressions; Both subtraction and division orders; Use every input exactly once; Exact rationals and zero-division checks",
              "kind": "programming",
              "reviewStatus": "verified",
              "familyId": "7.1:twenty-four-game",
              "rubric": [
                "Pairwise merging covers binary expressions",
                "Both subtraction and division orders",
                "Use every input exactly once",
                "Exact rationals and zero-division checks"
              ],
              "verification": [
                "Every full binary expression has a final merge, giving an inductive completeness proof."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0075"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "给定4个整数，每个必须恰用一次，可用 +、-、*、/ 和任意括号构造24。设计可判定有解并返回一个表达式的程序方案，说明如何避免零除和浮点误差。",
                  "hint": "表达式最终一次运算把两棵子树合并。",
                  "solution": "递归选择两个当前值 a,b，枚举 a+b、a-b、b-a、a*b、a/b(b≠0)、b/a(a≠0)，替换为新值直到剩一个数，检查是否为24。用 Fraction 精确有理数并携带表达式；重复状态可按有理数多重集合缓存，但缓存失败状态最容易保留表达式正确性。四个数规模固定；若推广 n 个数，朴素递归是指数/阶乘级搜索，不能声称多项式。",
                  "keyIdea": "两数合并覆盖二叉表达式；减除双方向；不漏用或重用数字；精确有理数与零除",
                  "title": "二十四点搜索",
                  "tags": [
                    "算法",
                    "回溯",
                    "概率",
                    "扑克牌",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "7.1:josephus-survivor",
              "title": "Josephus Survivor",
              "difficulty": "medium",
              "tags": [
                "algorithms",
                "recurrences",
                "bit operations",
                "probability",
                "combinatorics"
              ],
              "statement": "Place n≥1 people in a circle, numbered from 1. Starting at 1, eliminate every second person, continuing from the next person. Implement the survivor function in Python and evaluate it for n=10¹⁵.",
              "hint": "",
              "solution": "```python\ndef survivor(n):\n    if type(n) is not int or n < 1:\n        raise ValueError('n must be positive')\n    p = 1 << (n.bit_length() - 1)\n    return 2 * (n - p) + 1\n```\n\nWrite n=2ᵐ+L with 0≤L<2ᵐ. Then J(n)=2L+1. For n=10¹⁵ the survivor is 874100093157377. No simulation of n eliminations is needed; analyze arbitrary-precision operation costs in terms of bit length.",
              "keyIdea": "One-based numbering; Highest power of two; Handle n=1; Avoid large-scale simulation",
              "kind": "programming",
              "reviewStatus": "verified",
              "familyId": "7.1:josephus-survivor",
              "rubric": [
                "One-based numbering",
                "Highest power of two",
                "Handle n=1",
                "Avoid large-scale simulation"
              ],
              "verification": [
                "Eliminating even labels gives the k=2 Josephus recurrence; rotating the leading binary bit yields the formula."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0089"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "n人围成一圈，从编号1开始报数，每报到第2人即出局，再从下一人继续。用 Python 实现幸存编号函数，并求 n=10^15 时的结果；n≥1。",
                  "solution": "```python\ndef survivor(n):\n    if type(n) is not int or n < 1:\n        raise ValueError('n must be positive')\n    p = 1 << (n.bit_length() - 1)\n    return 2 * (n - p) + 1\n```\n\n设 n=2^m+L，0≤L<2^m，J(n)=2L+1。n=10^15 时结果 874100093157377。无需模拟 n 次；大整数操作成本需随位数分析。",
                  "keyIdea": "1基编号；最高2次幂；处理 n=1；避免大规模模拟",
                  "title": "约瑟夫幸存者",
                  "hint": "",
                  "tags": [
                    "算法",
                    "递推",
                    "位运算",
                    "概率",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "7.1:second-largest-element",
              "title": "Second-Largest Element",
              "difficulty": "hard",
              "tags": [
                "algorithms",
                "comparison sorting"
              ],
              "statement": "In the comparison model, find the second-largest among N≥2 distinct elements using as few worst-case comparisons as possible. First handle powers of two, then general N, and justify a lower bound.",
              "hint": "",
              "solution": "Use N-1 tournament comparisons to find the maximum, keeping its direct opponents. The second-largest must be the largest of these opponents. For N a power of two, the winner has log₂N opponents, giving N+log₂N-2 comparisons. A balanced tournament gives at most N+ceil(log₂N)-2 for general N. A matching adversary lower-bound argument is required for a complete optimality proof.",
              "keyIdea": "",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.1:second-largest-element",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0217"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在比较模型中，从N≥2个互异元素找第二大值，设计最坏比较次数尽量少的算法；先分析N为2的幂，再讨论一般N并论证下界。",
                  "solution": "先用N-1次锦标赛比较找最大，并保存直接输给它的元素。第二大必在这些对手中。N为2的幂时，对手log₂N个，再用log₂N-1次找其中最大，共N+log₂N-2。一般平衡锦标赛至多N+ceil(log₂N)-2；完整最优性仍需匹配的对抗下界证明。",
                  "title": "第二大元素",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "算法",
                    "比较排序"
                  ]
                }
              }
            },
            {
              "id": "7.1:pairwise-difference-fit",
              "title": "Pairwise Difference Fit",
              "difficulty": "hard",
              "tags": [
                "algorithms",
                "linear algebra",
                "optimization",
                "statistics"
              ],
              "statement": "Given a finite real square matrix d with d[i][j]≈xᵢ-xⱼ and equal weight on all ordered pairs, implement Python code minimizing ∑ᵢⱼ(d[i][j]-(xᵢ-xⱼ))². Return estimates normalized to min(x)=0, for n≥1. Analyze complexity.",
              "hint": "",
              "solution": "```python\ndef estimate(d):\n    n = len(d)\n    if n == 0 or any(len(row) != n for row in d):\n        raise ValueError('expected nonempty square matrix')\n    raw = [(sum(d[i]) - sum(d[j][i] for j in range(n))) / (2*n)\n           for i in range(n)]\n    offset = min(raw)\n    return [v - offset for v in raw]\n```\n\nThe normal equations are 2(n xᵢ-∑x)=∑ⱼ(dᵢⱼ-dⱼᵢ). Under ∑x=0, rawᵢ=(row sum-column sum)/(2n); then shift the minimum to zero. This uses O(n²) arithmetic operations and O(n) extra numeric storage. Sparse or unequal-weight observations require a graph Laplacian system; disconnected components have undetermined relative offsets. A production implementation should also validate finite entries.",
              "keyIdea": "Correct gradient and factor 2n; Shift normalization; Implementation and input checks; Distinguish complete and sparse observations",
              "kind": "programming",
              "reviewStatus": "verified",
              "familyId": "7.1:pairwise-difference-fit",
              "rubric": [
                "Correct gradient and factor 2n",
                "Shift normalization",
                "Implementation and input checks",
                "Distinguish complete and sparse observations"
              ],
              "verification": [
                "Differentiate the objective coordinatewise and substitute the row-minus-column solution into all normal equations."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0219"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "输入有限实数方阵 d，d[i][j]≈x_i-x_j，所有有序对等权观测。用 Python 最小化 ∑_(i,j)(d[i][j]-(x_i-x_j))²，输出满足 min(x)=0 的估计。n≥1；说明复杂度。",
                  "solution": "```python\ndef estimate(d):\n    n = len(d)\n    if n == 0 or any(len(row) != n for row in d):\n        raise ValueError('expected nonempty square matrix')\n    raw = [(sum(d[i]) - sum(d[j][i] for j in range(n))) / (2*n)\n           for i in range(n)]\n    offset = min(raw)\n    return [v - offset for v in raw]\n```\n\n正规方程为2(n x_i-∑x)=∑_j(d_ij-d_ji)。选∑x=0得raw_i=(行和-列和)/(2n)，再平移。O(n²)算术操作、O(n)额外数值空间。稀疏缺边或非等权时应改为图拉普拉斯系统；不连通时分量间偏移不唯一。输入还应验证元素为有限数。",
                  "keyIdea": "正确梯度与2n系数；平移约束；实现与输入检查；区分完全观测和稀疏图",
                  "title": "成对差分拟合",
                  "hint": "",
                  "tags": [
                    "算法",
                    "线性代数",
                    "优化",
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "7.1:finite-deck-stopping",
              "title": "Finite-Deck Stopping",
              "difficulty": "hard",
              "tags": [
                "algorithms",
                "dynamic programming",
                "optimal stopping",
                "probability",
                "optimal strategy"
              ],
              "statement": "A uniformly shuffled deck contains n red and n green cards. Reveal without replacement, scoring +1 for red and -1 for green. You may stop before any draw or after any draw. Implement the optimal expected-score calculation for integer n≥0 and give a stopping rule.",
              "hint": "Separate the score already earned from the future value. Remaining color counts determine the future distribution.",
              "solution": "Let V(r,g) be the best expected additional score. Set V(0,0)=0 and $V(r,g)=\\max(0,[r(1+V(r-1,g))+g(-1+V(r,g-1))]/(r+g))$, omitting terms for absent colors. Compute in increasing r+g or with a two-dimensional table; the answer is V(n,n). Stop when the continuation value is nonpositive. Boundaries are V(r,0)=r and V(0,g)=0. The cost is O(n²) arithmetic operations and can be reduced to O(n) floating-point storage; exact rationals require separate bit-complexity accounting.",
              "keyIdea": "Additional-score state; Allow immediate stopping; Finite recurrence and boundaries; Complexity and stopping rule",
              "kind": "programming",
              "reviewStatus": "verified",
              "familyId": "4.5:ball-drawing-returns",
              "rubric": [
                "Additional-score state",
                "Allow immediate stopping",
                "Finite recurrence and boundaries",
                "Complexity and stopping rule"
              ],
              "verification": [
                "Backward induction on the finite deck; n=0 gives 0, n=1 gives 1/2, and n=2 gives 2/3."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0220"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "一副牌含 n 张红牌与 n 张绿牌，均匀洗牌后不放回翻牌。红牌+1、绿牌-1，允许翻牌前或任意翻牌后停止。实现函数计算最优期望得分，输入整数n≥0，并给出停止规则。",
                  "hint": "分离已有得分与未来额外收益，剩余颜色数决定未来分布。",
                  "solution": "设V(r,g)为从剩余牌获得的最优额外收益。V(0,0)=0；V(r,g)=max(0, [r(1+V(r-1,g))+g(-1+V(r,g-1))]/(r+g))，缺少某色时省去该项。按r+g递增或二维表计算，答案V(n,n)。继续项≤0时可以停。V(r,0)=r、V(0,g)=0。O(n²)算术操作，可压缩到O(n)浮点存储；若用有理数则另计位复杂度。",
                  "keyIdea": "额外收益状态；可立即停止；有界递推及边界；复杂度与停止规则",
                  "title": "有限牌堆停时",
                  "tags": [
                    "算法",
                    "动态规划",
                    "最优停止",
                    "概率",
                    "最优策略"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "算法",
              "note": "用$n\\to\\infty$时的渐近成本T(n)及大O记号分析复杂度。常见技巧包括不变量、分治，以及维护累计量的单次扫描。"
            }
          }
        },
        {
          "id": "7.2",
          "title": "The Power of Two",
          "note": "Binary thinking: numbers are sums of powers of 2, bit shifts multiply/divide by 2, and AND/XOR let you probe individual bits. Many puzzles reduce to 'encode in binary'.",
          "problems": [
            {
              "title": "Power of 2?",
              "difficulty": "easy",
              "tags": [
                "bit manipulation"
              ],
              "statement": "Determine whether a positive integer $x$ is a power of 2, in one operation.",
              "hint": "A power of 2 has exactly one bit set. What does subtracting 1 do to that bit pattern?",
              "solution": "A power of 2 in binary has **exactly one bit set** (e.g. $8 = 1000_2$). Subtracting 1 flips that bit off and turns all the lower bits on ($8-1 = 0111_2$). So $x$ and $x-1$ share **no** set bits, and\n$$x \\,\\&\\, (x-1) = 0 \\iff x \\text{ is a power of 2}.$$\n```\nbool isPowerOfTwo(x) { return x > 0 && (x & (x-1)) == 0; }\n```\nOne bitwise-AND does it. (For any other number, $x$ has $\\ge 2$ set bits and at least one survives the AND.)",
              "keyIdea": "$x \\,\\&\\, (x-1)$ clears the lowest set bit; the result is 0 only when $x$ had a single bit — i.e. a power of 2.",
              "id": "7.2:power-of-2",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.2:power-of-2",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.2 / Power of 2?"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "二的幂",
                  "statement": "用位运算判断正整数x是否为2的幂。",
                  "solution": "2的幂二进制恰有一个1，x-1把该位清零、低位变1，因此x&(x-1)仅在这种情形为0：\n\n```\nbool isPowerOfTwo(x) { return x > 0 && (x & (x-1)) == 0; }\n```\n\n先检查x>0，否则0也会误通过。",
                  "hint": "减1如何改变唯一的置位？",
                  "keyIdea": "x&(x-1)清除最低位1。",
                  "tags": [
                    "位运算"
                  ]
                }
              }
            },
            {
              "title": "Multiplication by 7",
              "difficulty": "easy",
              "tags": [
                "bit manipulation"
              ],
              "statement": "Multiply an integer by 7 without using the multiplication operator.",
              "hint": "$7x = 8x - x$, and multiplying by 8 is a left shift.",
              "solution": "Shifting left by $k$ bits multiplies by $2^k$, so $8x = x \\ll 3$. Then\n$$7x = 8x - x = (x \\ll 3) - x.$$\n```\nresult = (x << 3) - x;\n```\nOne shift and one subtraction. (Generally, any constant multiplier becomes a few shifts and adds/subtracts based on its binary form — e.g. $x\\times 6 = (x\\ll2)+(x\\ll1)$.)",
              "keyIdea": "Express the multiplier via powers of two: $7 = 8 - 1$, so $7x = (x\\ll 3) - x$. Shifts replace multiplication.",
              "id": "7.2:multiplication-by-7",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.2:multiplication-by-7",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.2 / Multiplication by 7"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "乘七的位运算",
                  "statement": "不使用乘法运算符，将一个整数乘7。",
                  "solution": "用7x=8x-x，8倍可左移3位：\n\n```\nresult = (x << 3) - x;\n```\n\n一次左移、一次减法。类似6x=(x<<2)+(x<<1)。固定宽度及有符号语言中需检查溢出和移位语义。",
                  "hint": "7=8-1，8倍等于左移3位。",
                  "keyIdea": "将常数分解为2的幂的和差。",
                  "tags": [
                    "位运算"
                  ]
                }
              }
            },
            {
              "title": "Probability Simulation",
              "difficulty": "hard",
              "tags": [
                "randomization",
                "binary expansion"
              ],
              "statement": "Using only a fair coin, design a simple game that you win with a given probability $p$, $0 < p < 1$.",
              "hint": "Write $p$ in binary; each fair-coin toss reveals one bit of a uniform random number.",
              "solution": "**The idea:** a sequence of fair-coin tosses builds a uniform random number in $(0,1)$ one **binary digit** at a time. Compare it against $p$'s binary expansion.\n\nWrite $p = 0.p_1 p_2 p_3\\cdots$ in binary ($p_i \\in \\{0,1\\}$). Toss the coin, calling heads = 1, tails = 0, to generate bits $s_1, s_2, \\dots$ of your random number. Compare bit by bit:\n- as soon as $s_i < p_i$ → **win** and stop;\n- as soon as $s_i > p_i$ → **lose** and stop;\n- if $s_i = p_i$, toss again for the next bit.\n\nSince your tossed bits form a uniform number in $[0,1)$, you win exactly when that number falls below $p$ — probability **$p$**. The game ends quickly: it terminates with probability $\\tfrac12$ at each step, so the expected number of tosses is just 2 (for finite-binary $p$, it always halts).",
              "keyIdea": "Fair-coin tosses generate the binary digits of a uniform $[0,1)$ number; compare against $p$'s binary expansion to win with probability exactly $p$.",
              "id": "7.2:probability-simulation",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.2:probability-simulation",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.2 / Probability Simulation"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "任意概率模拟",
                  "statement": "只用公平硬币设计获胜概率恰为给定p∈(0,1)的游戏。",
                  "solution": "写p的二进制展开0.p₁p₂…，公平币逐位生成均匀数U的二进制位sᵢ。首次不同处若sᵢ<pᵢ则胜，反之负，相同继续。于是获胜事件为U<p，概率p。比较到不同位几乎必然发生，期望2次；即使p有有限二进制展开，若后续补0进行比较，也只保证几乎必然终止，不能说每条无限序列都必停。",
                  "hint": "公平币给均匀随机数的独立二进制位。",
                  "keyIdea": "逐位比较在无需完整生成实数时实现事件采样。",
                  "tags": [
                    "随机化",
                    "二进制展开"
                  ]
                }
              }
            },
            {
              "title": "Poisonous Wine",
              "difficulty": "hard",
              "tags": [
                "binary encoding",
                "search"
              ],
              "statement": "You have 1000 bottles of wine; exactly one is poisoned. The poison kills a mouse in exactly 18 hours (no earlier symptoms). You have 10 mice and 20 hours before the party. How do you find the poisoned bottle in time?",
              "hint": "1000 < 1024 = 2^10. Give each bottle a 10-bit binary ID and assign one mouse per bit.",
              "solution": "**Recognize the binary structure:** $1000 < 1024 = 2^{10}$, and you have exactly **10 mice**. Number the bottles $0$–$999$ and write each number in **10-bit binary**. Assign mouse $k$ to **bit $k$**.\n\n**The test:** each mouse drinks from *every* bottle whose ID has a 1 in that mouse's bit position. (One round of sipping, well within the 18-hour deadline.)\n\n**Read the result after 18 hours:** the set of mice that die spells out the binary ID of the poisoned bottle — mouse $k$ dies iff bit $k$ of the poisoned bottle's number is 1. For example, if mice for bits 0, 5, 8 die, the poisoned bottle is $2^0 + 2^5 + 2^8 = 1 + 32 + 256 = 289$.\n\nTen mice give 10 bits = up to 1024 distinguishable bottles, comfortably covering 1000.",
              "keyIdea": "Binary encoding: each mouse reports one bit of the poisoned bottle's ID. $n$ mice distinguish $2^n$ bottles in a single simultaneous test.",
              "id": "7.2:poisonous-wine",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.2:poisonous-wine",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.2 / Poisonous Wine"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "毒酒编码",
                  "statement": "1000瓶酒恰1瓶有毒，毒物18小时后致死且此前无症状；10只小鼠，聚会20小时后开始。如何及时识别毒酒？",
                  "solution": "编号0至999，用10位二进制表示。第k只小鼠饮用所有第k位为1的瓶子的样品，同步进行一轮。18小时后死亡小鼠组成的位串即毒瓶编号，例如位0、5、8对应289。10个二元结果可区分2¹⁰=1024种情况，足够覆盖1000瓶。",
                  "hint": "1000小于2¹⁰，每个测试结果可携带一位信息。",
                  "keyIdea": "用并行二元测试编码候选编号。",
                  "tags": [
                    "二进制编码",
                    "搜索"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "二进制与二的幂",
              "note": "从二进制思考：整数可表示为二的幂之和；位移对应二的幂次缩放，AND与XOR可操作各个位。许多题目可归约为二进制编码。"
            }
          }
        },
        {
          "id": "7.3",
          "title": "Numerical Methods",
          "note": "When closed forms run out, simulate or discretize: **Monte Carlo** averages random payoffs; **finite differences** turn a PDE into a grid you can step through.",
          "problems": [
            {
              "title": "Monte Carlo Simulation",
              "difficulty": "medium",
              "tags": [
                "Monte Carlo",
                "random number generation"
              ],
              "statement": "How do you price a European option by Monte Carlo? And how do you generate $N(\\mu,\\sigma^2)$ samples if you only have a uniform $[0,1]$ generator?",
              "hint": "Average discounted payoffs over many simulated terminal prices. For normals, transform uniforms (inverse-CDF or Box–Muller).",
              "solution": "**Pricing.** The option price is the discounted **expected** payoff under the risk-neutral measure, so estimate it by averaging over many simulated paths. Simulate $M$ terminal stock prices $S_{T,k}$ (from the risk-neutral GBM, using normal shocks), then\n$$C \\approx e^{-r(T-t)}\\,\\frac{1}{M}\\sum_{k=1}^{M} \\max(S_{T,k} - K,\\,0).$$\nThe error shrinks like $1/\\sqrt{M}$ — slow, but it scales to high dimensions where PDE grids can't.\n\n**Generating normals from uniforms — two standard routes:**\n1. **Inverse transform:** if $U \\sim \\text{Unif}[0,1]$, then $X = F^{-1}(U)$ has CDF $F$. For the normal there's no closed-form $\\Phi^{-1}$, so you use a numerical approximation.\n2. **Box–Muller:** from two independent uniforms $U_1, U_2$, $\\;Z_1 = \\sqrt{-2\\ln U_1}\\cos(2\\pi U_2)$ and $Z_2 = \\sqrt{-2\\ln U_1}\\sin(2\\pi U_2)$ are two independent $N(0,1)$ samples.\n\nFinally scale: $X = \\mu + \\sigma Z$ gives $N(\\mu,\\sigma^2)$.",
              "keyIdea": "Monte Carlo = average discounted simulated payoffs (error $\\sim 1/\\sqrt M$). Build normals from uniforms via inverse-CDF or Box–Muller, then shift/scale by $\\mu,\\sigma$.",
              "id": "7.3:monte-carlo-simulation",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.3:monte-carlo-simulation",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.3 / Monte Carlo Simulation"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "蒙特卡洛定价",
                  "statement": "如何用Monte Carlo定价欧式期权？仅有U(0,1)生成器时如何产生N(μ,σ²)？",
                  "solution": "在风险中性测度下模拟M个终价，估计$C\\approx e^{-r\\tau}M^{-1}\\sum_{k=1}^M(S_{T,k}-K)^+$，有限方差下误差量级M⁻¹ᐟ²。正态可用逆CDF数值近似，或独立均匀U₁、U₂的Box-Muller变换：$Z_1=\\sqrt{-2\\ln U_1}\\cos(2\\pi U_2)$、$Z_2=\\sqrt{-2\\ln U_1}\\sin(2\\pi U_2)$。取U₁>0，再用X=μ+σZ缩放。",
                  "hint": "平均贴现后的风险中性支付；正态可由逆CDF或Box-Muller产生。",
                  "keyIdea": "定价是期望估计，需正确模拟分布并量化误差。",
                  "tags": [
                    "蒙特卡洛",
                    "随机数生成"
                  ]
                }
              }
            },
            {
              "title": "Finite Difference Method",
              "difficulty": "hard",
              "tags": [
                "finite differences",
                "PDE"
              ],
              "statement": "How does the finite difference method price a derivative, and what's the trade-off between the explicit and implicit schemes?",
              "hint": "Discretize the Black-Scholes PDE on a stock-price × time grid; replace derivatives with differences and step backward from the payoff.",
              "solution": "**The idea:** the option value solves the Black-Scholes PDE with the payoff as a *terminal* condition. Lay down a grid over stock price $S$ and time $t$, approximate the derivatives by **differences** between neighboring grid points, and march **backward** in time from the known payoff at maturity to today.\n\nReplace each derivative with a difference quotient — e.g. $\\frac{\\partial V}{\\partial S} \\approx \\frac{V_{i+1} - V_{i-1}}{2\\,\\Delta S}$ and $\\frac{\\partial^2 V}{\\partial S^2} \\approx \\frac{V_{i+1} - 2V_i + V_{i-1}}{\\Delta S^2}$ — turning the PDE into a system of algebraic equations linking adjacent time layers.\n\n**Explicit vs. implicit:**\n- **Explicit** — each new value is written directly from known values at the next time layer. Simple, but only **conditionally stable**: the time step must be tiny relative to $\\Delta S^2$, or the solution blows up.\n- **Implicit** (and Crank–Nicolson) — each layer requires solving a linear system (a tridiagonal solve). More work per step, but **unconditionally stable**, so you can take larger time steps. Crank–Nicolson averages the two and gains second-order accuracy in time.\n\nFinite differences naturally handle **American** options too — at each grid node take $\\max(\\text{continuation value},\\ \\text{intrinsic value})$, exactly the early-exercise check.",
              "keyIdea": "Discretize the BS PDE on a grid and step backward from the payoff. Explicit is simple but conditionally stable; implicit/Crank–Nicolson cost a linear solve per step but are unconditionally stable.",
              "id": "7.3:finite-difference-method",
              "kind": "programming",
              "reviewStatus": "pending",
              "familyId": "7.3:finite-difference-method",
              "rubric": [],
              "followups": [],
              "sources": [
                {
                  "type": "upstream",
                  "reference": "https://github.com/ellenzishanli/quant_interview_trainer/blob/f0192f17bf602457d0a8f43857e83304b56d7771/data/problems.js",
                  "locator": "7.3 / Finite Difference Method"
                }
              ],
              "revision": 2,
              "translations": {
                "zh": {
                  "title": "有限差分定价",
                  "statement": "有限差分如何定价衍生品？显式、隐式格式各有何权衡？",
                  "solution": "对股票价格与时间建网格，以到期支付作终值，给定边界后向回推。用$V_S\\approx(V_{i+1}-V_{i-1})/(2\\Delta S)$、$V_{SS}\\approx(V_{i+1}-2V_i+V_{i-1})/\\Delta S^2$离散PDE。显式直接用已知层更新，简单但需步长稳定条件；隐式每层解三对角系统，在标准抛物模型假设下更稳定。Crank-Nicolson对时间平均，二阶精度但非光滑支付仍可能振荡，稳定不等于任意步长都准确。美式还需处理价值不低于立即行权收益的约束。",
                  "hint": "把BS方程导数替换为网格差商，从终值反推。",
                  "keyIdea": "稳定性、精度与每步线性求解成本之间权衡。",
                  "tags": [
                    "有限差分",
                    "偏微分方程"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "数值方法",
              "note": "没有合适闭式解时，可模拟或离散化：**蒙特卡洛**对随机收益求平均；**有限差分**把偏微分方程转为可逐层求解的网格。"
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "算法与数值方法",
          "blurb": "经典算法、二进制位运算，以及蒙特卡洛与有限差分等数值方法。"
        }
      }
    },
    {
      "num": 8,
      "title": "Statistics & Research Mathematics",
      "blurb": "Regression, inference, regularisation and distribution transformations from the local question bank.",
      "topics": [
        {
          "id": "8.1",
          "title": "Regression & Linear Models",
          "problems": [
            {
              "id": "8.1:collinearity-and-t-tests",
              "title": "Collinearity and T-Tests",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "Can a t-test eliminate multicollinearity? Explain its effect on OLS standard errors and coefficient significance, and list possible remedies.",
              "hint": "",
              "solution": "A t-test assesses a coefficient hypothesis; it does not remove collinearity. Near-collinearity can inflate coefficient variances, reduce absolute t-statistics for a fixed effect, and make useful predictors individually insignificant. Diagnose dependence using rank, conditioning, or VIF, then consider feature selection, dimension reduction, orthogonalization, ridge, or lasso. VIF itself is a diagnostic, not a remedy.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:collinearity-and-t-tests",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0019"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "T检验能否消除多重共线性？解释共线性怎样影响OLS系数的标准误与显著性，并列举处理方式。",
                  "solution": "t检验检验系数假设，不会消除共线性。近似共线可抬高系数方差，在固定效应下减小绝对t值，使有用变量单独不显著。秩、条件数及VIF用于诊断；删选特征、降维、正交化、岭回归或Lasso可用于处理。VIF本身是诊断量，不是消除方法。",
                  "title": "共线性与t检验",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.1:multicollinearity",
              "title": "Multicollinearity",
              "difficulty": "medium",
              "tags": [
                "statistics",
                "linear regression"
              ],
              "statement": "Define multicollinearity in linear regression. Distinguish the effects of exact and near collinearity on estimation and prediction.",
              "hint": "",
              "solution": "Exact collinearity makes the design matrix rank deficient, so OLS coefficients are not unique. Near collinearity makes some eigenvalues of XᵀX small and inflates coefficient uncertainty along those directions under the homoscedastic covariance formula σ²(XᵀX)⁻¹. Coefficients can be unstable even when some prediction combinations remain stable. Possible remedies include feature selection, regularization, or dimension reduction.",
              "keyIdea": "Distinguish exact and near collinearity; Connect rank and coefficient variance; Unstable coefficients need not imply poor prediction",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.1:collinearity-and-t-tests",
              "rubric": [
                "Distinguish exact and near collinearity",
                "Connect rank and coefficient variance",
                "Unstable coefficients need not imply poor prediction"
              ],
              "verification": [
                "OLS normal equations and the homoscedastic coefficient-covariance formula."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0028"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在线性回归中，什么是多重共线性？区分完全共线与近似共线对估计和预测的影响。",
                  "solution": "完全共线使设计矩阵不满列秩，OLS 系数不唯一；近似共线时最小特征值接近零，σ²(XᵀX)⁻¹ 中部分方向的方差很大，系数不稳定，但某些预测组合仍可稳定。可用特征筛选、正则化或降维处理。",
                  "keyIdea": "区分完全与近似共线；联系秩和系数方差；不把系数不稳等同于预测一定差",
                  "title": "多重共线性",
                  "hint": "",
                  "tags": [
                    "统计",
                    "线性回归"
                  ]
                }
              }
            },
            {
              "id": "8.1:entropy-weighting",
              "title": "Entropy Weighting",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "List methods for handling multicollinearity. Define entropy weighting and its purpose, and explain why it does not automatically eliminate collinearity.",
              "hint": "",
              "solution": "Options include dropping redundant features, choosing cluster representatives, PCA/PLS, regularization, and orthogonalization. Entropy weighting assigns indicator weights from their dispersion after preprocessing: normalized proportions give entropy eⱼ, with weights proportional to 1-eⱼ. It is primarily a composite-scoring method; univariate dispersion weights do not by themselves remove dependence between features.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:collinearity-and-t-tests",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0029"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "列举多重共线性的处理方法。熵权法的定义与用途是什么，为什么它不能自动消除共线性？",
                  "solution": "处理可用删冗余特征、聚类选代表、PCA/PLS、正则化或正交化。熵权法先把指标转为比例，以熵eⱼ衡量分散性，权重正比1-eⱼ，主要用于综合评分。逐变量的分散性加权不会自动消除变量间相关结构。",
                  "title": "熵权法",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.1:variance-inflation-factor",
              "title": "Variance Inflation Factor",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "Define the variance inflation factor in linear regression and Pearson correlation between two variables. Distinguish redundancy among predictors from association with the prediction target.",
              "hint": "",
              "solution": "For predictor i, VIFᵢ=1/(1-Rᵢ²), where Rᵢ² comes from regressing it on the other predictors with an intercept. It measures linear redundancy and associated variance inflation. Pearson correlation is Cov(X,Y)/(σₓσᵧ) for finite nonzero standard deviations. Applied to a factor and future returns, it is often called an information coefficient. VIF concerns predictor dependence; factor-target correlation concerns association and must be evaluated out of sample for predictive claims.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:variance-inflation-factor",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0030"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "定义线性回归的方差膨胀因子VIF与两个变量的Pearson相关系数，区分‘特征间冗余’和‘特征与预测目标的关联’。",
                  "solution": "VIFᵢ=1/(1-Rᵢ²)，Rᵢ²来自以其他解释变量、含截距回归第i变量，描述线性冗余及方差膨胀。Pearson相关为Cov(X,Y)/(σₓσᵧ)，需有限非零标准差。因子与未来收益的相关常称IC；VIF看预测变量之间依赖，IC看与目标的关联，预测能力还需样本外评价。",
                  "title": "方差膨胀因子",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.1:collinearity-remedies",
              "title": "Collinearity Remedies",
              "difficulty": "easy",
              "tags": [
                "statistics"
              ],
              "statement": "How can multicollinearity in multiple regression be addressed?",
              "hint": "",
              "solution": "Consider removing or combining redundant variables, feature selection, PCA/PLS, ridge or lasso, orthogonalization, or collecting more informative data. More observations alone cannot resolve exact structural collinearity.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:collinearity-and-t-tests",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0058"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "多元回归共线性怎么处理。",
                  "solution": "可删去或合并冗余变量、特征筛选、PCA/PLS、岭回归或Lasso、正交化，或收集信息更丰富的数据。仅增加同类观测不能解决结构上的完全共线。",
                  "title": "共线性处理",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.1:coefficient-of-determination",
              "title": "Coefficient of Determination",
              "difficulty": "medium",
              "tags": [
                "statistics",
                "linear regression"
              ],
              "statement": "Define R² for in-sample OLS with an intercept and a nonconstant response. State when R²=SSR/SST holds.",
              "hint": "",
              "solution": "Define SST=∑(yᵢ-ȳ)², SSE=∑(yᵢ-ŷᵢ)², and R²=1-SSE/SST. In-sample OLS with an intercept makes residuals orthogonal to fitted values and preserves the response mean. Therefore SST=SSR+SSE, where SSR=∑(ŷᵢ-ȳ)², and R²=SSR/SST∈[0,1]. The decomposition need not apply out of sample or without an intercept.",
              "keyIdea": "Define SST and SSE; Conditions for orthogonal decomposition; Constant-response degeneracy",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.1:coefficient-of-determination",
              "rubric": [
                "Define SST and SSE",
                "Conditions for orthogonal decomposition",
                "Constant-response degeneracy"
              ],
              "verification": [
                "Projection orthogonality for OLS with an intercept."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0062"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对含截距的样本内 OLS 回归定义 R²，并说明 R²=SSR/SST 的前提。假设响应不是常数。",
                  "solution": "SST=∑(y_i-ȳ)²，SSE=∑(y_i-ŷ_i)²，R²=1-SSE/SST。含截距的样本内 OLS 中，残差与拟合值正交，且拟合均值等于响应均值，SST=SSR+SSE，故 R²=SSR/SST∈[0,1]。样本外或不含截距时不能直接套用分解。",
                  "keyIdea": "SST、SSE 定义；正交分解条件；常数响应的退化情况",
                  "title": "决定系数",
                  "hint": "",
                  "tags": [
                    "统计",
                    "线性回归"
                  ]
                }
              }
            },
            {
              "id": "8.1:regression-without-intercept",
              "title": "Regression Without Intercept",
              "difficulty": "hard",
              "tags": [
                "statistics",
                "linear regression"
              ],
              "statement": "Fit y=ax by in-sample least squares without an intercept, with SST=∑(yᵢ-ȳ)²>0. What is the range of centered R²=1-SSE/SST? How does it differ from uncentered R²?",
              "hint": "",
              "solution": "Centered R²≤1 but has no finite universal lower bound. For x=(1,-1), y=(M+1,M-1), the fitted a=1, SSE=2M², SST=2, so R²=1-M². Using uncentered denominator ∑yᵢ²>0 gives R²∈[0,1], because a=0 is an admissible candidate and the minimized SSE cannot exceed ∑yᵢ².",
              "keyIdea": "Specify the denominator; Centered R² bounded above by 1 but unbounded below; Explicit counterexample; Uncentered convention",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.1:coefficient-of-determination",
              "rubric": [
                "Specify the denominator",
                "Centered R² bounded above by 1 but unbounded below",
                "Explicit counterexample",
                "Uncentered convention"
              ],
              "verification": [
                "Explicit two-point example; the zero-coefficient candidate bounds uncentered R²."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0063"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在样本内最小二乘拟合 y=ax、无截距时，若 SST=∑(y_i-ȳ)²>0，中心化 R²=1-SSE/SST 的取值范围是什么？与非中心化 R² 有何区别？",
                  "solution": "中心化 R²≤1，但没有统一有限下界，可以任意负。例 x=(1,-1)、y=(M+1,M-1)，拟合 a=1，SSE=2M²、SST=2，R²=1-M²。若用非中心化分母 ∑y_i²>0，则因 a=0 是候选，最小 SSE≤∑y_i²，非中心化 R²∈[0,1]。",
                  "keyIdea": "明确分母；中心化 R² 上界 1、下无界；反例；非中心化口径",
                  "title": "无截距回归",
                  "hint": "",
                  "tags": [
                    "统计",
                    "线性回归"
                  ]
                }
              }
            },
            {
              "id": "8.1:ols-derivation",
              "title": "OLS Derivation",
              "difficulty": "medium",
              "tags": [
                "linear algebra",
                "linear regression",
                "statistics",
                "combinatorics"
              ],
              "statement": "For a full-column-rank design matrix X∈ℝⁿˣᵖ, derive the OLS coefficient estimate from the least-squares objective.",
              "hint": "",
              "solution": "Minimize ||y-Xβ||². Setting the gradient -2Xᵀ(y-Xβ) to zero gives XᵀXβ=Xᵀy. Full column rank makes XᵀX invertible, yielding β̂=(XᵀX)⁻¹Xᵀy. Numerical implementations generally use QR or SVD rather than explicitly forming an inverse.",
              "keyIdea": "Objective and gradient; Normal equations; Full column rank; Numerical solution advice",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.1:ols-derivation",
              "rubric": [
                "Objective and gradient",
                "Normal equations",
                "Full column rank",
                "Numerical solution advice"
              ],
              "verification": [
                "Differentiate the quadratic objective and use positive definiteness."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0072"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "设设计矩阵 X∈R^(n×p) 满列秩，写出 OLS 系数估计并从最小二乘目标推导。",
                  "solution": "最小化 ||y-Xβ||²，梯度 -2Xᵀ(y-Xβ)=0，得到正规方程 XᵀXβ=Xᵀy，满列秩保证 XᵀX 可逆，所以 β̂=(XᵀX)⁻¹Xᵀy。数值实现通常使用 QR/SVD 而非显式求逆。",
                  "keyIdea": "目标与梯度；正规方程；满列秩；数值求解建议",
                  "title": "OLS推导",
                  "hint": "",
                  "tags": [
                    "线性代数",
                    "线性回归",
                    "统计",
                    "组合数学"
                  ]
                }
              }
            },
            {
              "id": "8.1:gram-matrix-invertibility",
              "title": "Gram Matrix Invertibility",
              "difficulty": "medium",
              "tags": [
                "linear algebra"
              ],
              "statement": "For X∈ℝⁿˣᵖ, prove that XᵀX is invertible if and only if X has full column rank. State the corresponding condition for XXᵀ.",
              "hint": "",
              "solution": "Since vᵀXᵀXv=||Xv||², ker(XᵀX)=ker(X). Thus XᵀX is invertible exactly when ker(X)={0}, equivalent to full column rank. Likewise XXᵀ is invertible exactly when X has full row rank.",
              "keyIdea": "Distinguish XᵀX from XXᵀ; Equal kernels or quadratic-form proof; Column rank versus row rank",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.1:ols-derivation",
              "rubric": [
                "Distinguish XᵀX from XXᵀ",
                "Equal kernels or quadratic-form proof",
                "Column rank versus row rank"
              ],
              "verification": [
                "Direct proof of the null-space identity."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0073"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对 X∈R^(n×p)，证明 XᵀX 可逆当且仅当 X 满列秩，并说明 XXᵀ 的对应条件。",
                  "solution": "vᵀXᵀXv=||Xv||²，所以 ker(XᵀX)=ker(X)，前者可逆当且仅当 X 的核为{0}，即满列秩。XXᵀ 可逆则等价于 X 满行秩，不能混淆两个方向。",
                  "keyIdea": "明确 XᵀX 与 XXᵀ；核相同或二次型论证；列秩与行秩区别",
                  "title": "Gram矩阵可逆性",
                  "hint": "",
                  "tags": [
                    "线性代数"
                  ]
                }
              }
            },
            {
              "id": "8.1:simpson-s-paradox",
              "title": "Simpson's Paradox",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "Two groups each contain 100 paired observations (x,y). Separate simple linear regressions with intercepts have positive slopes b₁ and b₂. Must the slope of the pooled regression also be positive?",
              "hint": "",
              "solution": "No. Differences between group means can reverse the pooled slope even when both within-group slopes are positive. This is Simpson's paradox.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:simpson-s-paradox",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0074"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "两组各有100对(x,y)观测，分别作含截距一元回归，斜率b₁、b₂均为正。合并后的回归斜率必为正吗？",
                  "solution": "不必。组间均值差异可压过组内正相关，使合并斜率为负，这就是辛普森悖论。",
                  "title": "辛普森悖论",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.1:errors-and-residuals",
              "title": "Errors and Residuals",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "In y=Xβ+ε, distinguish unobserved errors from fitted OLS residuals. Explain which estimation or inference conclusions are supported by exogeneity, homoscedasticity, no serial correlation, and normality.",
              "hint": "",
              "solution": "Errors ε are deviations from the true conditional model; fitted residuals are y-Xβ̂. Under full column rank, E[ε|X]=0 gives OLS unbiasedness. Conditional covariance σ²I combines homoscedasticity and uncorrelated errors and yields the classical covariance formula and Gauss-Markov efficiency. Conditional normality additionally supports exact finite-sample t and F inference. These assumptions concern errors; fitted residuals are constrained by the fit and are not independent errors.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:errors-and-residuals",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0085"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对线性模型y=Xβ+ε，区分不可观测误差ε与OLS拟合残差。说明外生性、同方差、无自相关和正态性分别支持哪些估计或推断结论。",
                  "solution": "误差ε为真实条件模型偏差，拟合残差为y-Xβ̂。满列秩及E[ε|X]=0支持OLS无偏；条件协方差σ²I结合同方差与不相关误差，给经典协方差公式及Gauss-Markov效率；条件正态进一步支持小样本精确t、F推断。这些是误差的假设，拟合残差受投影约束，不能当作独立原始误差。",
                  "title": "误差与残差",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.1:multiple-regression-fit",
              "title": "Multiple Regression Fit",
              "difficulty": "hard",
              "tags": [
                "statistics",
                "linear regression"
              ],
              "statement": "Given the R² values from separate simple regressions of y on x₁ and x₂, what range can R² take when y is regressed on both? Use the same sample and include intercepts.",
              "hint": "",
              "solution": "The combined R² is at least max(R₁²,R₂²) and at most 1. For noncollinear predictors, $R^2=(r_{y1}^2+r_{y2}^2-2r_{y1}r_{y2}r_{12})/(1-r_{12}^2)$. Feasible correlations must make the joint correlation matrix positive semidefinite. Degenerate cases require separate treatment; for example, if both response correlations vanish, combined R² is also zero.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.1:coefficient-of-determination",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0218"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在同一样本、均含截距时，已知y分别对x₁、x₂回归的R²，问同时回归二者时R²的范围。",
                  "solution": "联合R²至少max(R₁²,R₂²)，至多1。非共线时R²=(rᵧ₁²+rᵧ₂²-2rᵧ₁rᵧ₂r₁₂)/(1-r₁₂²)，可行相关需联合相关矩阵半正定。退化情形另论，例如两个响应相关均为0，则联合R²也为0。",
                  "title": "多元回归拟合",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计",
                    "线性回归"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "回归与线性模型",
              "note": ""
            }
          }
        },
        {
          "id": "8.2",
          "title": "Inference & Statistical Learning",
          "problems": [
            {
              "id": "8.2:central-limit-theorem",
              "title": "Central Limit Theorem",
              "difficulty": "medium",
              "tags": [
                "statistics",
                "limit theorems"
              ],
              "statement": "State the iid central limit theorem for finite nonzero variance and write its standardized form.",
              "hint": "",
              "solution": "Let Xᵢ be iid with mean μ and variance σ²∈(0,∞). Then $\\sqrt n(\\bar X_n-\\mu)/\\sigma\\Rightarrow N(0,1)$. This is an asymptotic distribution for standardized fluctuations; it does not assert that every finite-sample mean is exactly normal.",
              "keyIdea": "Iid with finite nonzero variance; Square-root-n standardization; Convergence in distribution",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.2:central-limit-theorem",
              "rubric": [
                "Iid with finite nonzero variance",
                "Square-root-n standardization",
                "Convergence in distribution"
              ],
              "verification": [
                "Check the classical iid CLT assumptions, normalization, and mode of convergence."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0037"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "陈述独立同分布、有限非零方差情形的中心极限定理，写出标准化形式。",
                  "solution": "X_i iid，E[X_i]=μ，Var(X_i)=σ²∈(0,∞)。则 √n(均值-μ)/σ 依分布收敛到 N(0,1)。定理描述标准化误差的渐近分布，不声称有限样本均值必然正态。",
                  "keyIdea": "iid 与有限非零方差；√n 标准化；依分布收敛",
                  "title": "中心极限定理",
                  "hint": "",
                  "tags": [
                    "统计",
                    "极限定理"
                  ]
                }
              }
            },
            {
              "id": "8.2:laws-of-large-numbers",
              "title": "Laws of Large Numbers",
              "difficulty": "medium",
              "tags": [
                "statistics",
                "limit theorems"
              ],
              "statement": "For iid variables with E|X₁|<∞, state the weak and strong laws of large numbers. Distinguish them from the central limit theorem.",
              "hint": "",
              "solution": "The weak law gives convergence in probability of the sample mean to μ=E[X₁]; the strong law gives almost-sure convergence. The strong law implies the weak law. These laws describe the limiting mean; a CLT, under additional assumptions, describes the distribution of standardized fluctuations.",
              "keyIdea": "Two modes of convergence; Integrability assumption; Distinguish from the CLT",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.2:laws-of-large-numbers",
              "rubric": [
                "Two modes of convergence",
                "Integrability assumption",
                "Distinguish from the CLT"
              ],
              "verification": [
                "Check the iid integrable versions; finite variance is not required for these laws."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0038"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在 iid 且 E|X₁|<∞ 的情形下，陈述弱大数与强大数定律，并区分它们与中心极限定理。",
                  "solution": "弱大数：样本均值依概率收敛于 μ=E[X₁]；强大数：样本均值几乎处处收敛于 μ。强大数蕴含弱大数。大数定律描述均值趋于何处，CLT 在更强条件下描述标准化波动的极限分布。",
                  "keyIdea": "两种收敛；可积条件；与 CLT 区分",
                  "title": "大数定律",
                  "hint": "",
                  "tags": [
                    "统计",
                    "极限定理"
                  ]
                }
              }
            },
            {
              "id": "8.2:model-evaluation",
              "title": "Model Evaluation",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "Which metrics evaluate regression and binary prediction models? Distinguish in-sample fit, out-of-sample error, class imbalance, and probability calibration.",
              "hint": "",
              "solution": "For regression, use held-out MAE/MSE, R² with its evaluation convention, and residual diagnostics; adjusted R² and AIC/BIC concern fitted-model assessment. For classification, accuracy depends on prevalence and threshold, while precision, recall, F1, ROC-AUC, and PR-AUC answer different questions. Log loss, Brier score, and calibration plots evaluate probability forecasts. Use leakage-free out-of-sample evaluation; financial applications additionally require costs, risk, and stability checks.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.2:model-evaluation",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0055"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "回归与二分类预测模型各有哪些评估指标？说明样本内拟合、样本外误差、类别不平衡及概率校准的区别。",
                  "solution": "回归可用留出集MAE/MSE、明确口径的R²及残差诊断；调整R²、AIC/BIC针对拟合模型评价。分类准确率依赖类别比例与阈值，precision、recall、F1、ROC-AUC、PR-AUC衡量不同性质；对数损失、Brier分数和校准曲线评价概率预测。使用无泄漏样本外评价；金融应用还需交易成本、风险及稳定性分析。",
                  "title": "模型评估",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.2:overfitting",
              "title": "Overfitting",
              "difficulty": "easy",
              "tags": [
                "statistics"
              ],
              "statement": "How can overfitting be reduced?",
              "hint": "",
              "solution": "Reduce model complexity, regularize, select features within training folds, use early stopping, obtain more representative data, or impose justified prior constraints. Use cross-validation and an untouched test set to estimate generalization; evaluation alone does not change the fitted model. Limit repeated tuning against the same held-out data.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.2:overfitting",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0059"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "过拟合的解决办法。",
                  "solution": "可降低复杂度、正则化、在训练折内筛选特征、早停、增加代表性数据或加入合理先验约束。交叉验证与未触碰测试集用于估计泛化，评价本身不直接改变模型；避免反复根据同一留出集调参。",
                  "title": "过拟合",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.2:lasso-and-ridge",
              "title": "Lasso and Ridge",
              "difficulty": "medium",
              "tags": [
                "statistics",
                "optimization",
                "regularization"
              ],
              "statement": "Compare L1 and L2 regularization in linear regression. Explain why L1 often produces exact zero coefficients.",
              "hint": "",
              "solution": "L1 penalizes λ∑|βⱼ|, while L2 penalizes λ∑βⱼ². The L1 subgradient interval at zero permits optimal coefficients to remain exactly zero. L2 has a continuous gradient and generally shrinks rather than exactly zeros coefficients. Sparsity still depends on the data and penalty; the intercept is usually unpenalized.",
              "keyIdea": "Penalty formulas; Subgradients and sparsity; Avoid unconditional claims",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.2:lasso-and-ridge",
              "rubric": [
                "Penalty formulas",
                "Subgradients and sparsity",
                "Avoid unconditional claims"
              ],
              "verification": [
                "Compare soft thresholding and the ridge solution for one-dimensional squared loss."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0060"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "在线性回归中比较 L1 与 L2 正则化，解释 L1 为什么容易产生精确零系数。",
                  "solution": "L1 惩罚 λ∑|β_j|，L2 惩罚 λ∑β_j²。L1 在零处不可微，次梯度区间允许最优系数停在零；L2 梯度连续，一般连续收缩系数而非精确置零。系数是否被压零还依赖数据，截距通常不惩罚。",
                  "keyIdea": "惩罚公式；次梯度与稀疏；避免绝对化结论",
                  "title": "Lasso与岭回归",
                  "hint": "",
                  "tags": [
                    "统计",
                    "优化",
                    "正则化"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "统计推断与统计学习",
              "note": ""
            }
          }
        },
        {
          "id": "8.3",
          "title": "Distributions & Data Transformations",
          "problems": [
            {
              "id": "8.3:heavy-tailed-features",
              "title": "Heavy-Tailed Features",
              "difficulty": "medium",
              "tags": [
                "expectation",
                "expectation and variance"
              ],
              "statement": "How can a skewed or heavy-tailed continuous feature be winsorized, monotonically transformed, or quantile-transformed? Must it become normal, and what assumptions do the methods require?",
              "hint": "",
              "solution": "Options include winsorization, logarithms for positive data, Box-Cox or Yeo-Johnson transformations within their domains, and rank-based inverse-normal maps. Fit transformation parameters using training data. The aim is to control extreme-value influence or suit a model, rather than force normality; monotonicity and clipping affect information differently.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.3:heavy-tailed-features",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0021"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "一个连续数值特征呈明显偏态或重尾时，如何做去极值、单调变换或分位数变换？是否必须变成正态，分别需要哪些假设？",
                  "solution": "可去极值、对正数取对数、在定义域内用Box-Cox或Yeo-Johnson，以及基于秩的逆正态映射。参数只用训练数据拟合。目标是控制极端值影响或适应模型，不是强制正态；截断与严格单调变换保留信息的方式不同。",
                  "title": "重尾特征处理",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "8.3:normal-score-transform",
              "title": "Normal Score Transform",
              "difficulty": "medium",
              "tags": [
                "mathematics"
              ],
              "statement": "How can a skewed or heavy-tailed continuous variable be transformed toward normality? Distinguish affine standardization, logs, and normal-quantile mapping. Explain out-of-sample handling.",
              "hint": "",
              "solution": "Affine standardization changes location and scale but not shape. A log can reduce positive skew but requires positive inputs and does not guarantee normality. For a continuous known CDF F, Φ⁻¹(F(X)) is standard normal. In practice estimate F on training data, apply the fixed mapping to new data, and handle endpoint probabilities and ties explicitly to avoid infinities and leakage.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.3:heavy-tailed-features",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0023"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "对呈偏态或重尾的连续变量，如何构造近似正态的变换？区分仿射标准化、对数变换与分位数正态映射，并说明样本外处理。",
                  "solution": "仿射标准化只改位置尺度，不改形状。对数可降低正偏，但要求输入为正且不保证正态。若连续CDF F已知，则Φ⁻¹(F(X))为标准正态。实际用训练集估计F并固定映射给样本外数据，处理端点、并列及外推，避免无穷值与信息泄漏。",
                  "title": "正态分位数变换",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "数学"
                  ]
                }
              }
            },
            {
              "id": "8.3:z-score",
              "title": "Z-Score",
              "difficulty": "easy",
              "tags": [
                "statistics",
                "data transformations"
              ],
              "statement": "Define the population z-score for a variable with finite nonzero variance. Does this standardization make the variable normally distributed?",
              "hint": "Do the mean and variance uniquely determine a distribution?",
              "solution": "For Z=(X-μ)/σ with σ>0, E[Z]=0 and Var(Z)=1. Translation and positive scaling preserve distributional shape, so standardization does not generally produce normality. Sample standardization should specify how the mean and standard deviation are estimated.",
              "keyIdea": "Definition and positive scale; Mean and variance; Standardization is not normal transformation",
              "kind": "math",
              "reviewStatus": "verified",
              "familyId": "8.3:heavy-tailed-features",
              "rubric": [
                "Definition and positive scale",
                "Mean and variance",
                "Standardization is not normal transformation"
              ],
              "verification": [
                "Calculate moments directly under an affine transformation."
              ],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0024"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "定义总体 Z-score，并说明对有限、非零方差的变量进行 Z-score 标准化能否使其服从正态分布。",
                  "hint": "均值和方差足以决定分布吗？",
                  "solution": "Z=(X-μ)/σ，σ>0 时 E[Z]=0、Var(Z)=1。平移和正比例缩放不改变分布族的形状，故一般不会变成正态分布。样本标准化时应说明均值和标准差的估计口径。",
                  "keyIdea": "定义及 σ>0；均值方差；标准化不等于正态化",
                  "title": "Z分数",
                  "tags": [
                    "统计",
                    "数据变换"
                  ]
                }
              }
            },
            {
              "id": "8.3:scaling-methods",
              "title": "Scaling Methods",
              "difficulty": "easy",
              "tags": [
                "statistics"
              ],
              "statement": "Compare min-max scaling and z-score standardization in their effects on distribution shape and extreme values. Can either turn an arbitrary distribution into a normal one?",
              "hint": "",
              "solution": "Min-max scaling uses (x-min)/(max-min) when the range is nonzero; z-scoring uses (x-μ)/σ when σ>0. Both are affine and preserve shape, so neither creates normality. Extremes strongly affect the range and can affect the mean and standard deviation. Robust scaling, justified clipping, or nonlinear quantile transforms address different issues. Estimate preprocessing on training data and apply it consistently out of sample.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.3:heavy-tailed-features",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0025"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "比较min-max归一化与Z-score标准化对分布形状和极端值的影响。二者能否把任意分布变成正态？",
                  "solution": "极差非零时min-max=(x-min)/(max-min)，标准差正时z-score=(x-μ)/σ，均为仿射变换，保留形状，不能制造正态。极端值影响极差，也影响均值标准差。稳健缩放、合理截断与非线性分位数映射处理不同问题，均应只在训练集估计参数后应用样本外。",
                  "title": "缩放方法",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.3:return-distributions",
              "title": "Return Distributions",
              "difficulty": "medium",
              "tags": [
                "expectation",
                "expectation and variance"
              ],
              "statement": "Does the term \"stock return\" uniquely determine a cross-sectional distribution? Discuss normal-model assumptions, empirical skewness, heavy tails, and stratified checks.",
              "hint": "",
              "solution": "No distribution follows from the name alone. A normal model is an assumption to check, not a definition. Empirical returns may show skewness or heavy tails, varying by period, market state, and industry. Compare distributional diagnostics across these strata and state the sampling horizon before drawing conclusions.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.3:return-distributions",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0031"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "股票收益率的截面分布能否仅凭‘收益率’就唯一确定？讨论正态建模假设、经验偏度、厚尾及分层检验。",
                  "solution": "仅凭“收益率”名称不能确定分布。正态是待检验模型假设，不是定义。经验分布可能有偏度或重尾，且随时段、市场状态和行业变化。应明确采样频率，再分层比较分布诊断与不确定性。",
                  "title": "收益分布",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "期望",
                    "期望与方差"
                  ]
                }
              }
            },
            {
              "id": "8.3:tail-behavior",
              "title": "Tail Behavior",
              "difficulty": "medium",
              "tags": [
                "statistics"
              ],
              "statement": "What does heavy-tailed mean in statistical modeling? How would you compare extreme-event frequencies in an empirical return distribution with a normal model, and why are mean and variance insufficient?",
              "hint": "",
              "solution": "Specify the tail comparison being used: heavier than a matched normal tail is not identical to the formal absence of a finite moment-generating function for positive arguments. Compare empirical exceedance rates and tail quantiles with the fitted normal benchmark, accounting for sampling uncertainty and dependence. Distributions with equal means and variances can have very different tail probabilities; those two moments alone cannot determine extremes.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.3:return-distributions",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0032"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "统计建模中，什么是厚尾？如何比较经验收益分布与正态模型的极端事件频率，为什么不能仅凭均值和方差判断尾部？",
                  "solution": "须明确重尾定义：“相较同均值方差正态有更重尾部”不等同于严格的正参数矩母函数不存在。比较经验超阈概率、尾部分位数与拟合正态基准，同时考虑抽样误差和依赖。均值方差相同的分布可有完全不同的尾概率，仅凭两矩无法判定极端事件。",
                  "title": "尾部行为",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "统计"
                  ]
                }
              }
            },
            {
              "id": "8.3:association-measures",
              "title": "Association Measures",
              "difficulty": "medium",
              "tags": [
                "probability",
                "optimal stopping",
                "optimal strategy"
              ],
              "statement": "How would you measure association for discrete-continuous, discrete-discrete, and continuous-continuous variable pairs?",
              "hint": "",
              "solution": "For two continuous variables, Pearson measures linear association and Spearman measures monotone association. For categorical pairs, use contingency tables, chi-squared tests, Cramér's V, or mutual information. For a binary and continuous pair, point-biserial correlation applies; for multiple categories, consider ANOVA, the correlation ratio η², or mutual information. Mutual information can cover all cases but requires appropriate estimation. Discrete numeric variables may also support Pearson correlation when their numerical scale is meaningful.",
              "keyIdea": "",
              "kind": "math",
              "reviewStatus": "pending",
              "familyId": "8.3:association-measures",
              "rubric": [],
              "verification": [],
              "followups": [],
              "sources": [
                {
                  "type": "local",
                  "reference": "git:8c05b8f3069983a48b1007c3a5f1f49739c7cdba:笔面试题目/data/questions.json",
                  "locator": "q0086"
                }
              ],
              "revision": 3,
              "translations": {
                "zh": {
                  "statement": "如何比较离散型 vs 连续型; 离散型 vs 离散型; 连续型 vs 连续型的随机变量的相关性",
                  "solution": "连续-连续：Pearson看线性，Spearman看单调关联。类别-类别：列联表、卡方检验、Cramér V或互信息。二类-连续可用点二列相关；多类可用ANOVA、相关比η²或互信息。互信息较通用但需合理估计；有数值意义的离散变量也可使用Pearson，不能把所有离散变量都当无序类别。",
                  "title": "关联度量",
                  "hint": "",
                  "keyIdea": "",
                  "tags": [
                    "概率",
                    "最优停止",
                    "最优策略"
                  ]
                }
              }
            }
          ],
          "translations": {
            "zh": {
              "title": "分布与数据变换",
              "note": ""
            }
          }
        }
      ],
      "translations": {
        "zh": {
          "title": "统计与研究数学",
          "blurb": "来自本地题库的回归、统计推断、正则化与分布变换题目。"
        }
      }
    }
  ]
};
