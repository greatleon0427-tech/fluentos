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
