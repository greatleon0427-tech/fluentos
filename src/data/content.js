export const dailyScripts = [
  {
    id: "ces-booth",
    topic: "CES booth introduction",
    title: "Introducing Zdeer at CES",
    script:
      "Good morning, and welcome to the **Zdeer** booth | We build practical **health tech** products for people who want better daily hearing and smarter wellness support | At CES, we are showing our latest **AI-powered hearing aids** | They are designed for clear conversations, comfortable wearing, and simple setup | For overseas partners, our goal is not just to sell a device | It is to build a reliable local growth system | We support distributors with training, product stories, KOL marketing assets, and after-sales guidance | If you are focused on the U.S. market, we would love to understand your channels, your customers, and your timeline | Then we can discuss how Zdeer may fit into your portfolio.",
    phrases: [
      "practical health tech products",
      "clear conversations and comfortable wearing",
      "build a reliable local growth system",
      "support distributors with training",
      "fit into your portfolio",
    ],
    shadowing: [
      "Welcome to the Zdeer booth | we build practical health tech products.",
      "Our latest AI-powered hearing aids | are designed for clear conversations.",
      "For overseas partners | our goal is to build a reliable growth system.",
      "We support distributors | with training and KOL marketing assets.",
      "We would love to understand your channels | customers | and timeline.",
    ],
  },
  {
    id: "creator-outreach",
    topic: "KOL and creator communication",
    title: "Creator Partnership Pitch",
    script:
      "Hi, thanks for taking the call | I have followed your content because your reviews feel **practical** and **honest** | Zdeer is expanding in the U.S. market with health tech and hearing support products | We are looking for creators who can explain real user problems in simple language | For this campaign, we do not want a hard sales video | We want a clear story about daily communication, confidence, and convenience | If the product feels like a good fit for your audience, we can provide product samples, talking points, and flexible creative direction | Our team values authentic feedback | so we are open to your ideas before we finalize the content plan.",
    phrases: [
      "your reviews feel practical and honest",
      "explain real user problems in simple language",
      "not a hard sales video",
      "flexible creative direction",
      "open to your ideas",
    ],
    shadowing: [
      "Your reviews feel practical | and honest.",
      "We want creators | who can explain real user problems clearly.",
      "This is not a hard sales video | it is a clear user story.",
      "We can provide samples | talking points | and creative direction.",
      "We are open to your ideas | before we finalize the plan.",
    ],
  },
  {
    id: "investor-update",
    topic: "Business meeting and investor update",
    title: "Overseas Expansion Update",
    script:
      "Let me give you a quick update on our overseas expansion | Zdeer is moving from product validation to repeatable market growth | In the U.S., we are focusing on three channels | CES leads, distributor conversations, and creator-led education | The hearing aid category requires trust | so our messaging must be **clear**, **credible**, and easy to understand | We are improving our presentation materials, product demos, and partner onboarding process | The next milestone is to convert qualified conversations into pilot orders | After that, we will measure user feedback, content performance, and channel efficiency | This approach helps us grow carefully while protecting the brand.",
    phrases: [
      "moving from product validation to repeatable market growth",
      "creator-led education",
      "clear, credible, and easy to understand",
      "convert qualified conversations into pilot orders",
      "protecting the brand",
    ],
    shadowing: [
      "We are moving | from product validation | to repeatable growth.",
      "The hearing aid category requires trust | so our message must be clear.",
      "We are improving demos | materials | and partner onboarding.",
      "Our next milestone | is to convert qualified conversations.",
      "This approach helps us grow carefully | while protecting the brand.",
    ],
  },
];

export const shadowingLines = [
  {
    line: "Well, | that is a good question | and I think the short answer is trust.",
    note: "Link 'good question' smoothly. Keep 'trust' clear and slightly slower.",
  },
  {
    line: "Actually, | we are not just selling hearing aids | we are solving daily communication problems.",
    note: "Pronounce 'actually' as AK-shuh-lee. Stress 'solving' and 'communication'.",
  },
  {
    line: "To be honest, | the U.S. market needs a message that feels simple | credible | and human.",
    note: "Keep 'credible' as KREH-duh-bul, not cree-DI-bul.",
  },
  {
    line: "You know, | many customers do not want complicated tech | they want confidence.",
    note: "Reduce 'do not' naturally, but keep it clear in business speech.",
  },
  {
    line: "I mean, | if the demo is easy to understand | the sales conversation becomes much easier.",
    note: "Say 'conversation' as kon-ver-SAY-shun with stress on SAY.",
  },
  {
    line: "Let me put it this way | Zdeer helps partners turn product interest | into real market traction.",
    note: "Pause after 'this way'. Stress 'interest' and 'traction'.",
  },
  {
    line: "That is a good question | our first priority is to support distributors with practical tools.",
    note: "Make 'priority' four beats: pry-OR-uh-tee.",
  },
];

export const presentationLines = {
  opening: [
    "Good morning, everyone. I am Leon from Zdeer, and today I would like to share how we are building practical health tech for everyday communication.",
    "Thank you for visiting our CES booth. In the next few minutes, I will walk you through the product, the market opportunity, and our partner support model.",
    "Let me start with the problem: many people need hearing support, but they want a solution that feels simple, modern, and comfortable.",
  ],
  transition: [
    "Now that we have covered the user problem, let us look at the product experience.",
    "That brings me to our overseas market strategy.",
    "The next point is especially important for distributors and channel partners.",
  ],
  recovery: [
    "Let me say that more clearly.",
    "What I mean is this.",
    "Let me take one step back and explain the main idea.",
    "The key point I want to emphasize is simple.",
  ],
  closing: [
    "Thank you for your time. We would be happy to discuss pilot cooperation and next steps after this meeting.",
    "If Zdeer fits your market, we can support you with product training, content assets, and a clear launch plan.",
    "We are looking for long-term partners who care about product quality, customer trust, and sustainable growth.",
  ],
};

export const conversationRoles = [
  {
    id: "ces-organizer",
    role: "CES organizer",
    question: "Can you briefly explain what Zdeer is presenting at CES this year?",
    naturalAnswer:
      "Absolutely. This year, Zdeer is presenting AI-powered hearing support products designed for clearer daily conversations, easier setup, and a more comfortable user experience.",
    why:
      "It starts confidently, names the product category, and focuses on user benefits instead of only technical features.",
  },
  {
    id: "us-distributor",
    role: "U.S. distributor",
    question: "Why should our channel consider adding Zdeer to our portfolio?",
    naturalAnswer:
      "Zdeer could be a strong fit because we combine practical health tech, competitive product positioning, and partner support for training, content, and after-sales communication.",
    why:
      "This sounds stronger because it connects product value with the distributor's business needs.",
  },
  {
    id: "tiktok-creator",
    role: "TikTok creator",
    question: "What kind of video do you want me to create for this campaign?",
    naturalAnswer:
      "We would love a practical, story-driven video that shows how the product helps someone handle everyday conversations with more confidence.",
    why:
      "It gives creative direction without sounding controlling, which is better for creator collaboration.",
  },
  {
    id: "investor",
    role: "investor",
    question: "What is your strategy for entering the U.S. market?",
    naturalAnswer:
      "Our strategy is to start with focused validation through CES leads, distributor discussions, and creator-led education, then scale the channels that show repeatable traction.",
    why:
      "It sounds investor-ready because it explains sequence, learning, and scalable growth.",
  },
  {
    id: "media-interviewer",
    role: "media interviewer",
    question: "What makes Zdeer different from other health tech brands?",
    naturalAnswer:
      "Zdeer focuses on practical innovation. We want advanced technology to feel simple, useful, and approachable for real people in daily life.",
    why:
      "This avoids vague claims and gives the brand a clear position in plain English.",
  },
  {
    id: "amazon-partner",
    role: "Amazon partner",
    question: "How will you support product conversion on Amazon?",
    naturalAnswer:
      "We plan to support conversion with clear product pages, benefit-focused videos, creator content, review learning, and fast response to customer questions.",
    why:
      "It uses specific e-commerce language and shows that you understand the full conversion path.",
  },
];

export const phraseBank = [
  {
    scenario: "Email",
    phrases: [
      {
        english: "I wanted to follow up on our conversation at CES.",
        chinese: "我想跟进一下我们在 CES 上的交流。",
        example: "I wanted to follow up on our conversation at CES and share more details about Zdeer.",
      },
      {
        english: "Please let me know what timeline works best for you.",
        chinese: "请告诉我哪个时间安排最适合您。",
        example: "Please let me know what timeline works best for you for a product demo.",
      },
    ],
  },
  {
    scenario: "Meeting",
    phrases: [
      {
        english: "Let me give you a quick overview first.",
        chinese: "我先给您做一个快速概览。",
        example: "Let me give you a quick overview first, then we can discuss pricing.",
      },
      {
        english: "That is helpful context.",
        chinese: "这个背景信息很有帮助。",
        example: "That is helpful context. It helps us understand your channel needs.",
      },
    ],
  },
  {
    scenario: "Presentation",
    phrases: [
      {
        english: "The key point I want to emphasize is trust.",
        chinese: "我想强调的核心点是信任。",
        example: "The key point I want to emphasize is trust, especially in hearing health.",
      },
      {
        english: "Let us move to the market opportunity.",
        chinese: "我们来看一下市场机会。",
        example: "Let us move to the market opportunity in the U.S.",
      },
    ],
  },
  {
    scenario: "Negotiation",
    phrases: [
      {
        english: "We are open to discussing a pilot order first.",
        chinese: "我们可以先讨论试单。",
        example: "We are open to discussing a pilot order first before a larger rollout.",
      },
      {
        english: "Could we align on the expected support from both sides?",
        chinese: "我们能否确认双方预期的支持内容？",
        example: "Could we align on the expected support from both sides before finalizing terms?",
      },
    ],
  },
  {
    scenario: "Small talk",
    phrases: [
      {
        english: "How has the show been for you so far?",
        chinese: "到目前为止，您觉得这个展会怎么样？",
        example: "How has the show been for you so far? Have you seen any interesting health tech products?",
      },
      {
        english: "It is great to finally meet in person.",
        chinese: "很高兴终于线下见面了。",
        example: "It is great to finally meet in person after our email exchange.",
      },
    ],
  },
  {
    scenario: "Follow-up",
    phrases: [
      {
        english: "I will send over the product deck after the meeting.",
        chinese: "会后我会把产品资料发给您。",
        example: "I will send over the product deck after the meeting so your team can review it.",
      },
      {
        english: "Would it make sense to schedule a deeper discussion next week?",
        chinese: "下周安排一次更深入的讨论是否合适？",
        example: "Would it make sense to schedule a deeper discussion next week with your sales team?",
      },
    ],
  },
  {
    scenario: "Polite disagreement",
    phrases: [
      {
        english: "I see your point, but I would look at it slightly differently.",
        chinese: "我理解您的观点，但我会稍微从另一个角度看。",
        example: "I see your point, but I would look at it slightly differently based on the user feedback.",
      },
      {
        english: "That is a fair concern. Here is how we are addressing it.",
        chinese: "这个担心是合理的。我们是这样解决的。",
        example: "That is a fair concern. Here is how we are addressing it in our partner training.",
      },
    ],
  },
];

export const nativeFlowItems = [
  {
    id: "at-once",
    phrase: "at once",
    spoken: "at once",
    ipa: "/ət ˈwʌns/",
    meaning: "立刻；马上",
    focus: "Weak form",
    senseGroup: "Let us handle this | at once.",
    businessExample: "If the distributor confirms the order, | we can start onboarding | at once.",
    dailyExample: "If you feel uncomfortable, | tell me | at once.",
  },
  {
    id: "at-a-time",
    phrase: "at a time",
    spoken: "at a time",
    ipa: "/ət ə ˈtaɪm/",
    meaning: "一次；每次",
    focus: "Weak forms",
    senseGroup: "Let us take it | one step at a time.",
    businessExample: "For the U.S. rollout, | we should test one channel | at a time.",
    dailyExample: "Do not rush. | Just carry one box | at a time.",
  },
  {
    id: "want-to",
    phrase: "want to",
    spoken: "wanna",
    ipa: "/ˈwɑːnə/",
    meaning: "想要",
    focus: "Reduction",
    senseGroup: "I wanna make sure | we are aligned.",
    businessExample: "I wanna make sure | the campaign message feels natural.",
    dailyExample: "I wanna grab coffee | before the meeting.",
  },
  {
    id: "going-to",
    phrase: "going to",
    spoken: "gonna",
    ipa: "/ˈɡʌnə/",
    meaning: "将要；打算",
    focus: "Reduction",
    senseGroup: "We are gonna focus | on qualified leads first.",
    businessExample: "We are gonna launch with creators | before scaling paid ads.",
    dailyExample: "I am gonna call you | when I get to the hotel.",
  },
  {
    id: "got-to",
    phrase: "got to",
    spoken: "gotta",
    ipa: "/ˈɡɑːtə/",
    meaning: "必须；得",
    focus: "Reduction",
    senseGroup: "We gotta keep the message | simple.",
    businessExample: "We gotta explain the hearing aid benefits | in plain English.",
    dailyExample: "I gotta leave early | for the airport.",
  },
  {
    id: "kind-of",
    phrase: "kind of",
    spoken: "kinda",
    ipa: "/ˈkaɪndə/",
    meaning: "有点；某种程度上",
    focus: "Reduction",
    senseGroup: "It is kinda hard | to explain quickly.",
    businessExample: "The market is kinda competitive, | but the user need is clear.",
    dailyExample: "I am kinda tired | after the flight.",
  },
  {
    id: "a-lot-of",
    phrase: "a lot of",
    spoken: "a lotta",
    ipa: "/ə ˈlɑːtə/",
    meaning: "很多",
    focus: "Linking",
    senseGroup: "We received | a lotta useful feedback.",
    businessExample: "We got a lotta questions | about comfort and battery life.",
    dailyExample: "There are a lotta people | in the security line.",
  },
  {
    id: "out-of",
    phrase: "out of",
    spoken: "outta",
    ipa: "/ˈaʊtə/",
    meaning: "从……里面；缺少",
    focus: "Reduction",
    senseGroup: "We are almost | outta time.",
    businessExample: "We are outta stock | for that model this week.",
    dailyExample: "I am outta cash. | Can I pay by card?",
  },
  {
    id: "should-have",
    phrase: "should have",
    spoken: "should've",
    ipa: "/ˈʃʊdəv/",
    meaning: "本应该",
    focus: "Reduction",
    senseGroup: "We should've prepared | a shorter demo.",
    businessExample: "We should've sent the deck | before the call.",
    dailyExample: "I should've checked the gate | earlier.",
  },
  {
    id: "could-have",
    phrase: "could have",
    spoken: "could've",
    ipa: "/ˈkʊdəv/",
    meaning: "本可以",
    focus: "Reduction",
    senseGroup: "We could've explained it | more clearly.",
    businessExample: "We could've used a stronger opening | in the pitch.",
    dailyExample: "I could've taken a taxi, | but I walked.",
  },
  {
    id: "would-have",
    phrase: "would have",
    spoken: "would've",
    ipa: "/ˈwʊdəv/",
    meaning: "本会；本来会",
    focus: "Reduction",
    senseGroup: "That would've helped | the conversation.",
    businessExample: "A product video would've made the distributor meeting easier.",
    dailyExample: "I would've joined you, | but I had another call.",
  },
  {
    id: "and-then",
    phrase: "and then",
    spoken: "an then",
    ipa: "/ən ˈðen/",
    meaning: "然后",
    focus: "Connected speech",
    senseGroup: "We test the message | an then scale the channel.",
    businessExample: "First we validate the creator angle, | an then we increase the budget.",
    dailyExample: "I will check in, | an then meet you downstairs.",
  },
  {
    id: "next-step",
    phrase: "next step",
    spoken: "nex step",
    ipa: "/ˈnek step/",
    meaning: "下一步",
    focus: "Linking",
    senseGroup: "The nex step | is a pilot order.",
    businessExample: "The nex step is to align on pricing, | timeline, and launch support.",
    dailyExample: "The nex step is to find our gate.",
  },
];

const realLifeSeed = {
  Family: [
    ["Can you give me a hand?", "你能帮我一下吗？", "Could you give me a hand | for a second?"],
    ["I will take care of it.", "我来处理。", "I will take care of it | no problem."],
    ["Let me check with everyone first.", "我先问一下大家。", "Let me check with everyone first | and get back to you."],
    ["What time should we leave?", "我们几点出发？", "What time should we leave | to avoid traffic?"],
    ["That works for me.", "我可以；这个安排适合我。", "That works for me | thanks for checking."],
  ],
  Friends: [
    ["How have you been?", "你最近怎么样？", "How have you been | since we last met?"],
    ["Let us catch up soon.", "我们改天聚聚。", "Let us catch up soon | when things slow down."],
    ["I am down for that.", "我愿意；我可以。", "I am down for that | sounds fun."],
    ["No worries at all.", "完全没关系。", "No worries at all | we can do it next time."],
    ["That sounds like a plan.", "听起来不错，就这么定。", "That sounds like a plan | see you then."],
  ],
  Office: [
    ["Let us circle back on that.", "我们之后再回到这个问题。", "Let us circle back on that | after we review the numbers."],
    ["Could you walk me through it?", "你能带我过一遍吗？", "Could you walk me through it | step by step?"],
    ["I will keep you posted.", "我会持续更新你。", "I will keep you posted | as soon as I hear back."],
    ["Let us align on next steps.", "我们确认一下下一步。", "Let us align on next steps | before we leave."],
    ["That is a fair point.", "这个观点很合理。", "That is a fair point | and we should consider it."],
  ],
  Airport: [
    ["Could you tell me where Gate 25 is?", "你能告诉我 25 号登机口在哪里吗？", "Could you tell me | where Gate 25 is?"],
    ["Is this the line for security?", "这是安检队伍吗？", "Is this the line | for security?"],
    ["Do I need to take my laptop out?", "我需要把电脑拿出来吗？", "Do I need to take | my laptop out?"],
    ["Has boarding started yet?", "开始登机了吗？", "Has boarding started yet | for this flight?"],
    ["My flight was delayed.", "我的航班延误了。", "My flight was delayed | by about an hour."],
  ],
  Hotel: [
    ["I have a reservation under Leon.", "我用 Leon 的名字订了房。", "I have a reservation | under Leon."],
    ["Could I get a late checkout?", "我可以晚点退房吗？", "Could I get | a late checkout?"],
    ["Is breakfast included?", "包含早餐吗？", "Is breakfast included | with the room?"],
    ["Could you send someone to take a look?", "你能派人来看一下吗？", "Could you send someone | to take a look?"],
    ["Can I leave my luggage here?", "我可以把行李寄存在这里吗？", "Can I leave my luggage here | for a few hours?"],
  ],
  Restaurant: [
    ["Could we get a table for two?", "我们要一张两人桌。", "Could we get | a table for two?"],
    ["What do you recommend?", "你推荐什么？", "What do you recommend | here?"],
    ["Could I get this without onions?", "这个可以不要洋葱吗？", "Could I get this | without onions?"],
    ["We are ready to order.", "我们准备好点餐了。", "We are ready | to order."],
    ["Could we get the check?", "可以买单吗？", "Could we get | the check?"],
  ],
  "Coffee Shop": [
    ["Could I get a latte to go?", "我要一杯拿铁带走。", "Could I get | a latte to go?"],
    ["Can I have it with oat milk?", "可以换成燕麦奶吗？", "Can I have it | with oat milk?"],
    ["That is all, thank you.", "就这些，谢谢。", "That is all | thank you."],
    ["Could you make it less sweet?", "可以少甜一点吗？", "Could you make it | less sweet?"],
    ["Do you have Wi-Fi here?", "这里有 Wi-Fi 吗？", "Do you have Wi-Fi | here?"],
  ],
  Party: [
    ["So how do you know the host?", "你是怎么认识主人的？", "So | how do you know the host?"],
    ["I have heard a lot about you.", "久仰；我听说过你很多事。", "I have heard | a lot about you."],
    ["It was great meeting you.", "很高兴认识你。", "It was great | meeting you."],
    ["What brought you here tonight?", "你今晚为什么来这里？", "What brought you here | tonight?"],
    ["Let us stay in touch.", "我们保持联系。", "Let us stay | in touch."],
  ],
  "Small Talk": [
    ["How is your week going?", "这周过得怎么样？", "How is your week | going?"],
    ["Have you been here before?", "你以前来过这里吗？", "Have you been here | before?"],
    ["That is interesting.", "这很有意思。", "That is interesting | tell me more."],
    ["I am still getting used to it.", "我还在适应。", "I am still | getting used to it."],
    ["It has been a busy week.", "这周很忙。", "It has been | a busy week."],
  ],
  Networking: [
    ["What line of work are you in?", "你是做什么行业的？", "What line of work | are you in?"],
    ["What are you working on these days?", "你最近在做什么项目？", "What are you working on | these days?"],
    ["I would love to learn more.", "我很想进一步了解。", "I would love | to learn more."],
    ["Let me share my contact information.", "我给你我的联系方式。", "Let me share | my contact information."],
    ["Maybe there is a way to work together.", "也许我们有合作机会。", "Maybe there is a way | to work together."],
  ],
};

export const realLifeScenarios = Object.entries(realLifeSeed).map(([category, entries]) => ({
  category,
  sentences: entries.map(([english, meaning, natural], index) => ({
    id: `${category.toLowerCase().replaceAll(" ", "-")}-${index + 1}`,
    english,
    meaning,
    natural,
    senseGroup: natural,
  })),
  phrases: entries.map(([english, meaning, natural], index) => ({
    id: `${category.toLowerCase().replaceAll(" ", "-")}-phrase-${index + 1}`,
    english: english.split(" ").slice(0, Math.min(5, english.split(" ").length)).join(" "),
    meaning,
    natural,
    senseGroup: natural,
  })),
}));
