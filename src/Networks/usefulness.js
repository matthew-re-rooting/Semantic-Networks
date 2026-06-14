export const usefulnessNetwork = {
  id: "usefulness",
  label: "Usefulness",
  subtitle: "Attention, Role & the Ethics of Being Needed",
  accent: "#f59e0b",
  storageKey: "semantic-network-usefulness",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "usefulness-node",
      term: "Usefulness",
      definition: "The condition of being fit for purpose, needed, or contributive — a word that carries more weight than mere utility. Etymologically, 'use' derives from the Latin usus, meaning practice, custom, experience as much as function, suggesting that usefulness is always embedded in a way of life rather than being a neutral property of persons or things. To be useful is to be woven into a situation, a relationship, a structure of need — and this weaving is one of the primary ways human beings find themselves at home in the world. Yet the very depth of this need makes usefulness a site of ethical complexity: it can be a genuine gift, a compulsive performance, a trap, or — in its most refined forms — something that happens without a self behind it claiming credit.",
      thinkers: ["Martin Heidegger", "Viktor Frankl", "Simone Weil", "Erich Fromm", "Zhuangzi"],
      tags: ["ethics", "practice", "phenomenology", "meaning", "relation"],
      connections: [
        { to: "attention", label: "requires" },
        { to: "being-needed", label: "felt as" },
        { to: "readiness-to-hand", label: "ontologically grounded in" },
        { to: "having-mode", label: "corrupted by" },
        { to: "useless-tree", label: "inverted by" },
        { to: "ecology-of-usefulness", label: "embedded in" },
        { to: "tenzo", label: "exemplified without ego by" },
      ],
      x: 400, y: 320, color: "#f59e0b", status: "consolidated",
    },

    // ── Weil / Ethical ────────────────────────────────────────────────────────

    {
      id: "attention",
      term: "Attention",
      definition: "Simone Weil's central ethical concept — a quality of presence that is the precondition of genuine usefulness, sharply distinguished from will, effort, or the desire to help. For Weil, attention is not something you can try to do; the trying is precisely what blocks it. It is a waiting, a receptive emptying of the self, in which the other can finally be seen as they actually are rather than as a surface onto which one's own need to be needed is projected. Genuine usefulness, on this account, must pass through attention: without it, we are serving our own reflection rather than the other person. Attention is therefore both an ethical practice and a form of love — perhaps the most difficult form, since it asks the self to become genuinely still.",
      thinkers: ["Simone Weil", "Iris Murdoch", "Iris Murdoch"],
      tags: ["ethics", "phenomenology", "love", "presence", "weil"],
      connections: [
        { to: "usefulness-node", label: "is the precondition of" },
        { to: "decreation", label: "requires" },
        { to: "presence", label: "is the quality of" },
        { to: "having-mode", label: "is blocked by" },
        { to: "mushin", label: "has a Zen parallel in" },
      ],
      nuances: [
        { thinker: "Weil — Waiting on God", note: "Weil writes that attention is the rarest and purest form of generosity — and also that it cannot be willed. The soul must be emptied of its projects and preoccupations, held in a kind of creative void, before it can truly receive the other. This is why she connects attention to prayer: both involve a suspension of the self's agenda." },
        { thinker: "Murdoch — the unselfing", note: "Iris Murdoch develops a parallel concept she calls 'unselfing' — the moment in which the ego's anxious busy-ness is interrupted, usually by beauty or by genuine encounter with another person, and reality briefly comes into focus. For Murdoch this is both the ground of moral perception and the beginning of love." },
        { thinker: "The attention trap", note: "Weil is careful to distinguish attention from the performance of attentiveness — the person who listens with visible effort, who makes a display of their care. True attention is largely invisible; it leaves the other feeling seen rather than helped. The moment the helper becomes the story, attention has been lost." },
      ],
      x: 580, y: 180, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "decreation",
      term: "Decreation",
      definition: "Weil's term for the withdrawal of the self's claims — a voluntary dissolution of the ego's need to be seen, needed, thanked, or affirmed — so that the other can actually be encountered. Decreation is not self-destruction or self-hatred but a kind of clearing: the removal of the self as an obstacle to genuine relation. In the context of usefulness, decreation names what must happen for a gift to be truly given rather than offered as a loan against future gratitude. It is the most demanding form of generosity because it asks not only for action but for the abandonment of the identity that action might confer.",
      thinkers: ["Simone Weil", "Meister Eckhart"],
      tags: ["ethics", "theology", "self", "weil", "gift"],
      connections: [
        { to: "attention", label: "is the inner movement of" },
        { to: "usefulness-node", label: "purifies" },
        { to: "having-mode", label: "is the antithesis of" },
        { to: "mushin", label: "resonates with" },
        { to: "presence", label: "makes possible" },
      ],
      nuances: [
        { thinker: "Weil — the void and the fullness", note: "For Weil, decreation is not experienced as loss but as a kind of opening — the void left by the withdrawn self becomes the space through which something real can enter. She draws on mystical traditions (Eckhart's Gelassenheit, the apophatic tradition) while insisting that decreation must be lived in the ordinary details of work, attention, and relation, not reserved for extraordinary spiritual states." },
        { thinker: "Eckhart — Gelassenheit", note: "Meister Eckhart's concept of Gelassenheit (releasement, letting-go) anticipates Weil's decreation: the soul must release its grasping at things, roles, and even its own spiritual achievements, to become the clear ground through which the divine acts. Both thinkers are suspicious of the self's tendency to colonise even its most generous impulses." },
      ],
      x: 660, y: 280, color: "#a78bfa", status: "consolidated",
    },

    // ── Psychological ─────────────────────────────────────────────────────────

    {
      id: "being-needed",
      term: "Being Needed",
      definition: "The psychological experience of usefulness as a primary axis of meaning — the satisfaction, and potential trap, of indispensability. Viktor Frankl's logotherapy identifies contribution as one of the fundamental sources of meaning: the sense that one's existence makes a difference to others, that something or someone would be diminished by one's absence. This is a genuine and deep human need, not merely a neurotic one. The difficulty arises when being needed becomes the primary ground of self-worth — when the self requires others to need it in order to feel it exists, and therefore subtly works to perpetuate their neediness rather than their flourishing.",
      thinkers: ["Viktor Frankl", "Erich Fromm", "Melanie Klein"],
      tags: ["psychology", "meaning", "identity", "frankl", "need"],
      connections: [
        { to: "usefulness-node", label: "is the felt form of" },
        { to: "having-mode", label: "slides into" },
        { to: "contribution", label: "is healthily expressed as" },
        { to: "role-distance", label: "is tempered by" },
        { to: "ecology-of-usefulness", label: "is shaped by" },
      ],
      nuances: [
        { thinker: "Frankl — Man's Search for Meaning", note: "Frankl observed in the concentration camps that those who maintained a sense of being needed — by a person, a work, a future task — were more likely to survive. Being needed is not a luxury but a basic orientation toward life; its absence is experienced as existential emptiness rather than mere disappointment." },
        { thinker: "Fromm — the productive vs symbiotic character", note: "Fromm distinguishes productive love (which wants the other to flourish and become independent) from symbiotic love (which needs the other to remain dependent). The person who must be needed is in a symbiotic relation — their generosity is structured to perpetuate rather than resolve the need it addresses." },
      ],
      x: 220, y: 200, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "contribution",
      term: "Contribution",
      definition: "The act of adding something genuine to a shared endeavour, relationship, or community — usefulness understood as participation rather than service. Contribution differs from mere function in that it implies a self that is genuinely invested, bringing something that is distinctively theirs rather than simply filling a role. It differs from being needed in that it is oriented outward toward the project rather than inward toward the contributor's sense of indispensability. Frankl treats contribution as the most robust form of meaning-making: not pleasure, not power, but the sense of having added something real to the world that would not have existed without one's presence.",
      thinkers: ["Viktor Frankl", "Hannah Arendt", "Charles Taylor"],
      tags: ["meaning", "practice", "community", "frankl", "action"],
      connections: [
        { to: "being-needed", label: "is the healthy form of" },
        { to: "usefulness-node", label: "is a primary expression of" },
        { to: "praxis-poiesis", label: "raises the question of" },
        { to: "skilled-engagement", label: "is realised through" },
        { to: "ecology-of-usefulness", label: "is always embedded in" },
      ],
      nuances: [
        { thinker: "Arendt — action and plurality", note: "For Arendt, genuine action — which she distinguishes from labour and work — is always contribution in a strong sense: the insertion of something new into the shared human world, in the presence of others who receive and respond to it. Contribution on this account is irreducibly public and relational; it cannot be done alone or in secret." },
        { thinker: "Taylor — strong evaluation", note: "Taylor argues that humans are beings who care about the quality of their motivations, not just their outcomes. Contribution that one does not endorse — going through the motions of usefulness — is experienced as a kind of self-betrayal. Genuine contribution requires that one can affirm what one is contributing to." },
      ],
      x: 160, y: 340, color: "#34d399", status: "consolidated",
    },

    // ── Heidegger / Phenomenological ──────────────────────────────────────────

    {
      id: "readiness-to-hand",
      term: "Readiness-to-Hand",
      definition: "Heidegger's concept of Zuhandenheit — the mode of being in which tools, and by extension persons, are most fully what they are when absorbed in purposive engagement rather than being held up for inspection. A hammer is most itself when it is being used fluently; when it breaks, it becomes merely present-at-hand — an object of scrutiny. Applied to persons, readiness-to-hand names a mode of dwelling in the world in which usefulness is not a property one has but a way one is — absorbed, responsive, fitting into the situation's demands without the awkwardness of self-consciousness. This is usefulness as ontological condition, prior to any question of efficiency or value.",
      thinkers: ["Martin Heidegger", "Matthew Crawford", "Hubert Dreyfus"],
      tags: ["phenomenology", "heidegger", "embodiment", "practice", "ontology"],
      connections: [
        { to: "usefulness-node", label: "is the ontological ground of" },
        { to: "skilled-engagement", label: "is expressed through" },
        { to: "presence", label: "is a form of" },
        { to: "mushin", label: "has a contemplative parallel in" },
        { to: "praxis-poiesis", label: "is related to" },
      ],
      nuances: [
        { thinker: "Heidegger — Being and Time", note: "Heidegger's analysis of equipment shows that the world is originally encountered not as a collection of objects but as a totality of involvements — a referential web in which each thing points to others in a chain of in-order-to relations. Usefulness, on this account, is not a secondary property added to things but the primary mode in which the world shows up for a being who is always already engaged in projects." },
        { thinker: "Crawford — Shop Class as Soulcraft", note: "Crawford's argument for skilled manual work draws directly on this Heideggerian insight: the mechanic or craftsperson who is genuinely responsive to the demands of the material is in a state of readiness-to-hand, absorbed in a dialogue with the world that produces both excellent work and genuine satisfaction. The problem with much contemporary work, he argues, is that it severs this engagement." },
      ],
      x: 200, y: 460, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "skilled-engagement",
      term: "Skilled Engagement",
      definition: "The condition of being genuinely responsive to a situation's demands — usefulness as a dialogue between person and world in which both are transformed by the exchange. Skilled engagement is not merely competence but a particular quality of attentiveness: the skilled person reads the situation, feels its resistances and affordances, and responds in ways that could not have been fully scripted in advance. Matthew Crawford's work on craft and repair grounds this philosophically: the satisfaction of skilled work comes not from imposing one's will on material but from entering into a kind of conversation with it, in which the material's own nature shapes what is done.",
      thinkers: ["Matthew Crawford", "Michael Polanyi", "Richard Sennett"],
      tags: ["craft", "practice", "embodiment", "attention", "making"],
      connections: [
        { to: "readiness-to-hand", label: "expresses" },
        { to: "contribution", label: "is realised through" },
        { to: "tenzo", label: "has a contemplative form in" },
        { to: "wu-wei", label: "approaches" },
        { to: "praxis-poiesis", label: "raises the question of" },
      ],
      nuances: [
        { thinker: "Sennett — The Craftsman", note: "Sennett argues that craftsmanship — the desire to do a job well for its own sake — is a basic human impulse that modern economic organisation systematically frustrates. Skilled engagement requires time, repetition, and the freedom to make mistakes; it cannot be extracted from a person by management techniques. Its satisfaction is inseparable from the quality of the engagement itself." },
        { thinker: "Polanyi — tacit knowing", note: "Polanyi's insight that we know more than we can tell is central to skilled engagement: the expert carpenter or surgeon acts on knowledge that cannot be fully articulated, that is held in the body and the trained hand rather than in explicit rules. This tacit dimension of usefulness is what makes skilled engagement irreducible to procedure." },
      ],
      x: 140, y: 460, color: "#34d399", status: "consolidated",
    },

    {
      id: "praxis-poiesis",
      term: "Praxis & Poiesis",
      definition: "Aristotle's fundamental distinction between two modes of purposive action: poiesis (making), in which the end is a product external to the activity itself, and praxis (doing), in which the end is internal to the activity — the action is its own point. Applied to usefulness, this distinction asks: is one's usefulness oriented toward an external result (the thing made, the problem solved, the person helped), or is it a form of being that is valuable in itself — a way of inhabiting one's relationships and responsibilities with full presence? Much modern usefulness is structured as poiesis, evaluated by its outputs; but the most meaningful forms of being useful may be closer to praxis.",
      thinkers: ["Aristotle", "Hannah Arendt", "Alasdair MacIntyre"],
      tags: ["aristotle", "ethics", "action", "philosophy", "making"],
      connections: [
        { to: "usefulness-node", label: "frames the question of" },
        { to: "contribution", label: "raises the question of" },
        { to: "skilled-engagement", label: "is lived in" },
        { to: "ecology-of-usefulness", label: "shapes how we read" },
        { to: "achievement-society", label: "is collapsed by" },
      ],
      nuances: [
        { thinker: "Aristotle — Nicomachean Ethics", note: "For Aristotle, the highest human activities — friendship, contemplation, political life — are forms of praxis: they have no point beyond themselves, and to treat them as means to external ends is to misunderstand and degrade them. Much of what passes for usefulness in modern life — productivity, output, deliverables — is structurally poietic, which may explain its tendency to generate a sense of emptiness even when successful." },
        { thinker: "Arendt — The Human Condition", note: "Arendt's tripartite division of labour, work, and action maps roughly onto a deepening of the praxis/poiesis distinction. Labour reproduces life; work produces a durable world of objects; action — the highest form — is praxis in Aristotle's sense: the exercise of freedom among equals, irreducible to its products. Genuine contribution, for Arendt, is action in this strong sense." },
      ],
      x: 360, y: 160, color: "#60a5fa", status: "consolidated",
    },

    // ── Fromm / Critical ──────────────────────────────────────────────────────

    {
      id: "having-mode",
      term: "The Having Mode",
      definition: "Erich Fromm's concept of the existential orientation in which one's relation to the world — including to other people — is structured by possession, accumulation, and control. In the having mode, usefulness becomes a form of acquisition: one accumulates the gratitude, dependence, and admiration of others, becoming indispensable rather than genuinely present. The having mode colonises even the most generous-seeming impulses, converting gift into loan, care into investment. Fromm contrasts it with the being mode, in which one is present, responsive, and genuinely in relation without tracking what returns.",
      thinkers: ["Erich Fromm", "Marcel Mauss", "Byung-Chul Han"],
      tags: ["critical-theory", "psychology", "fromm", "modernity", "ethics"],
      connections: [
        { to: "usefulness-node", label: "corrupts" },
        { to: "being-needed", label: "is the pathological form of" },
        { to: "attention", label: "blocks" },
        { to: "decreation", label: "is opposed by" },
        { to: "achievement-society", label: "is amplified by" },
        { to: "impression-management", label: "is performed through" },
      ],
      nuances: [
        { thinker: "Fromm — To Have or to Be", note: "Fromm argues that Western modernity has so thoroughly normalised the having mode that the being mode has become almost inaccessible — we experience our relationships, our work, even our ideas as possessions. The useful person, in the having mode, is one who has accumulated a stock of indispensabilities; their generosity is always, at some level, an investment." },
        { thinker: "Mauss — The Gift", note: "Marcel Mauss's anthropology of gift exchange reveals that even apparently selfless giving is embedded in systems of obligation and return. The gift that expects nothing is a rare and demanding achievement — and the social structures that make it possible are fragile. Most giving, including most helping, circulates in economies of debt that the having mode naturalises." },
      ],
      x: 560, y: 460, color: "#f87171", status: "consolidated",
    },

    {
      id: "achievement-society",
      term: "Achievement Society",
      definition: "Byung-Chul Han's diagnosis of late modernity as a society that has internalised the imperative of productivity so thoroughly that the subject becomes their own exploiter. In the achievement society, usefulness is no longer imposed from outside by a disciplinary authority but demanded from within by a superego of self-optimisation: one must always be performing, producing, contributing. The exhaustion Han describes — burnout, depression, the fatigue of the achievement-subject — is the pathology of usefulness without limit, usefulness that has become a compulsion rather than a gift.",
      thinkers: ["Byung-Chul Han", "Michel Foucault", "Gilles Deleuze"],
      tags: ["critical-theory", "modernity", "han", "productivity", "exhaustion"],
      connections: [
        { to: "having-mode", label: "amplifies" },
        { to: "usefulness-node", label: "turns into compulsion" },
        { to: "praxis-poiesis", label: "collapses into pure" },
        { to: "ecology-of-usefulness", label: "is a specific form of" },
        { to: "role-distance", label: "is resisted by" },
      ],
      nuances: [
        { thinker: "Han — The Burnout Society", note: "Han argues that the shift from a disciplinary society (you must) to an achievement society (you can) is not a liberation but a more insidious form of control: the subject now internalises the demand for productivity and becomes both master and slave. Burnout is the inevitable result — not the failure of the achievement-subject but its logical endpoint." },
        { thinker: "Foucault — technologies of the self", note: "Foucault's later work on how subjects are formed through practices of self-care and self-examination provides the genealogical background for Han's diagnosis: the achievement-subject is a specific historical formation, not a natural fact. This opens the question of what other practices of self-formation — including contemplative ones — might constitute a different relationship to usefulness." },
      ],
      x: 460, y: 480, color: "#f87171", status: "consolidated",
    },

    // ── Goffman / Sociological ─────────────────────────────────────────────────

    {
      id: "social-role",
      term: "Social Role",
      definition: "Erving Goffman's concept of the performed set of behaviours, attitudes, and presentations expected of someone occupying a particular social position. Roles are not merely external constraints but the primary medium through which social life is organised and usefulness is defined: to be a nurse, a teacher, a parent, a colleague is to inhabit a script that specifies what counts as useful, for whom, and in what register. Goffman's dramaturgical framework treats social life as performance — not in the pejorative sense of fakery, but in the sense that all social action is shaped by audience, context, and convention. Usefulness, on this account, is always role-relative: what counts as useful is defined by the stage one is on.",
      thinkers: ["Erving Goffman", "George Herbert Mead", "Peter Berger"],
      tags: ["sociology", "goffman", "performance", "identity", "structure"],
      connections: [
        { to: "usefulness-node", label: "socially scripts" },
        { to: "role-distance", label: "is held at arm's length by" },
        { to: "impression-management", label: "is maintained through" },
        { to: "ecology-of-usefulness", label: "is a primary unit of" },
        { to: "praxis-poiesis", label: "raises questions about" },
      ],
      nuances: [
        { thinker: "Goffman — The Presentation of Self in Everyday Life", note: "Goffman's central insight is that social interaction is structured by the management of impressions — each party working to present a coherent, credible self to the others. Roles provide the script and the costume; the performance is the means by which social reality is collectively sustained. This does not mean social life is hollow — the performances are real, and the roles genuinely shape who one becomes." },
        { thinker: "Berger & Luckmann — social construction", note: "Berger and Luckmann extend Goffman's insight into a full sociology of knowledge: roles are not just performed but internalised, becoming part of the self's structure through habitualisation and institutionalisation. Over time, one does not merely play the useful role — one becomes it, until role-distance requires a deliberate effort of self-awareness." },
      ],
      x: 300, y: 480, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "role-distance",
      term: "Role Distance",
      definition: "Goffman's concept of the gap between self and role — the capacity to perform a role while signalling, to oneself and others, that one is not reducible to it. Role distance is the small gestures of irony, playfulness, or detachment through which a person inhabits a role without being consumed by it. In the context of usefulness, role distance is ethically significant: it names the space between being useful and being defined by usefulness — the margin in which the self retains some freedom from the demands of its own indispensability. Without role distance, the useful self risks becoming identical with its function, leaving no remainder that is simply present rather than performing.",
      thinkers: ["Erving Goffman", "Richard Sennett", "Zygmunt Bauman"],
      tags: ["sociology", "goffman", "identity", "freedom", "self"],
      connections: [
        { to: "social-role", label: "creates distance from" },
        { to: "usefulness-node", label: "prevents reduction to" },
        { to: "being-needed", label: "tempers" },
        { to: "achievement-society", label: "resists" },
        { to: "presence", label: "makes space for" },
      ],
      nuances: [
        { thinker: "Goffman — Encounters", note: "Goffman observed role distance most vividly in situations where the role's demands are beneath the performer's sense of self — the surgeon who jokes during an operation, the child who rides a merry-go-round with elaborate nonchalance. The signal in each case is: I am doing this, but I am more than this. Role distance is the assertion of a self that exceeds its current assignment." },
        { thinker: "Sennett — The Corrosion of Character", note: "Sennett argues that flexible capitalism has made role distance both easier and more dangerous: the injunction to remain adaptable, to never identify too deeply with one's work, produces people who have no fixed commitments and therefore no deep competences or loyalties. Role distance without attachment is not freedom but drift." },
      ],
      x: 380, y: 500, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "impression-management",
      term: "Impression Management",
      definition: "Goffman's term for the active, ongoing work of presenting oneself in ways that sustain a desired social identity — including the identity of being useful, competent, or needed. Impression management is not simply deception; it is the normal condition of social life, in which all parties cooperate in sustaining a shared definition of the situation. In the context of usefulness, impression management names the performance of helpfulness, expertise, or contribution that may or may not correspond to genuine engagement. It sits in productive tension with Weil's attention and Fromm's having mode: the person managing impressions of usefulness is oriented toward how they appear rather than toward what is actually needed.",
      thinkers: ["Erving Goffman", "Erving Goffman"],
      tags: ["sociology", "goffman", "performance", "identity", "appearance"],
      connections: [
        { to: "social-role", label: "maintains" },
        { to: "having-mode", label: "is an expression of" },
        { to: "usefulness-node", label: "is the performance of" },
        { to: "attention", label: "is opposed to" },
        { to: "role-distance", label: "is complicated by" },
      ],
      nuances: [
        { thinker: "Goffman — stigma and face-work", note: "Goffman's related concept of face-work — the effort to maintain one's social face in interaction — shows that impression management is not merely strategic but deeply felt: threats to one's presented identity as useful, competent, or good are experienced as genuine threats to the self. The performance of usefulness is therefore not merely cynical but existentially significant." },
        { thinker: "Social media and the performance of help", note: "Contemporary social media has created new theatres for the impression management of usefulness: the public display of volunteering, giving, expertise, or care — documented and shared for an audience. This does not necessarily corrupt the underlying action, but it transforms its social meaning and creates new pressures to perform usefulness in legible, approvable forms." },
      ],
      x: 500, y: 380, color: "#38bdf8", status: "consolidated",
    },

    // ── Daoist / Zen ──────────────────────────────────────────────────────────

    {
      id: "useless-tree",
      term: "The Useless Tree",
      definition: "A recurring motif in Zhuangzi — the gnarled, enormous tree that has survived precisely because it cannot be used for timber, furniture, or fuel. Woodcutters pass it by; it is allowed to grow to immense size and shelter countless lives. The tree appears in a dream to a carpenter and explains: I have been cultivating my uselessness for a long time. The parable inverts the ordinary valuation of usefulness: the things most valued by the world — straightness, utility, productivity — are precisely what get things cut down in their prime. The useless thing, freed from instrumentality, paradoxically becomes most nourishing. Zhuangzi uses this to question whether the compulsion toward usefulness is itself a kind of violence against the natural order of things.",
      thinkers: ["Zhuangzi", "Martin Heidegger", "Giorgio Agamben"],
      tags: ["daoism", "zhuangzi", "inversion", "nature", "freedom"],
      connections: [
        { to: "usefulness-node", label: "radically questions" },
        { to: "wu-wei", label: "embodies the principle of" },
        { to: "achievement-society", label: "is a counterweight to" },
        { to: "ecology-of-usefulness", label: "reframes the terms of" },
        { to: "presence", label: "points toward" },
      ],
      nuances: [
        { thinker: "Zhuangzi — the relativity of use", note: "Zhuangzi's broader point is that 'usefulness' is always relative to a perspective and a purpose — what is useless from the carpenter's perspective is supremely useful from the tree's own perspective, and from the perspective of the creatures it shelters. The assumption that productivity-for-humans is the measure of value is itself a kind of narrowness, a failure of imagination about what kinds of flourishing exist." },
        { thinker: "Agamben — inoperativity", note: "Giorgio Agamben develops a political philosophy around the concept of inoperativity — the suspension of one's function, the refusal to be merely what one is used for. This resonates with the useless tree: genuine freedom, for Agamben, is not the freedom to be more productive but the freedom to be something other than one's function, to remain in a state of pure potentiality." },
      ],
      x: 160, y: 200, color: "#34d399", status: "consolidated",
    },

    {
      id: "tenzo",
      term: "Tenzo",
      definition: "The head cook of a Zen monastery — the figure at the center of Dogen's Instructions for the Cook (Tenzo Kyokun), one of the most precise accounts of usefulness without ego in any tradition. The tenzo's work is the most ordinary imaginable: washing vegetables, cooking rice, overseeing meals. Yet Dogen treats it as the fullest expression of Buddha-nature: not a stepping stone to something more important, not a form of service that earns spiritual merit, but a complete and total act in itself. The tenzo exemplifies usefulness from which the self claiming the usefulness has been withdrawn — not through discipline or suppression but through the complete absorption of self in task.",
      thinkers: ["Dogen", "Shunryu Suzuki", "Bernie Glassman"],
      tags: ["zen", "buddhism", "practice", "dogen", "work"],
      connections: [
        { to: "usefulness-node", label: "exemplifies without ego" },
        { to: "mushin", label: "acts from" },
        { to: "skilled-engagement", label: "is the contemplative form of" },
        { to: "decreation", label: "resonates with" },
        { to: "wu-wei", label: "embodies" },
        { to: "attention", label: "is the practice of" },
      ],
      nuances: [
        { thinker: "Dogen — Tenzo Kyokun", note: "Dogen's instructions are relentlessly practical: how to handle food with care, how to plan meals, how to maintain the kitchen. But each practical instruction is inseparable from an ontological one: to wash the rice is to wash the rice with your whole being, without remainder, without the commentary of a self observing itself being useful. The meal is not a means to the community's nourishment; it is the community's nourishment, full stop." },
        { thinker: "Glassman — street retreats", note: "Bernard Glassman extended the tenzo's lesson into radical social engagement: his Zen Peacemakers communities practice 'not knowing, bearing witness, and taking action' as the three pillars of engaged Buddhism. Usefulness here is not the application of a technique but the willingness to be fully present with what is, without the protection of a role or a plan." },
      ],
      x: 200, y: 320, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "mushin",
      term: "Mushin",
      definition: "Japanese Zen concept literally meaning 'no-mind' or 'no fixed mind' — the state of action without the ego's commentary, investment, or self-monitoring. In mushin, one does what the situation requires without the inner voice asking whether one is doing it well, whether one will be thanked, whether one is being sufficiently useful. It is not emptiness or inattention but a quality of presence that is prior to self-consciousness — the state in which the gap between perceiving and responding has been closed by training, practice, and the gradual dissolution of the self's need to manage its own performance. Mushin is the psychological correlate of Weil's attention and the experiential description of what Heidegger calls readiness-to-hand.",
      thinkers: ["Takuan Soho", "D.T. Suzuki", "Eugen Herrigel"],
      tags: ["zen", "buddhism", "embodiment", "practice", "attention"],
      connections: [
        { to: "attention", label: "has a Zen parallel in" },
        { to: "tenzo", label: "is the state from which acts" },
        { to: "wu-wei", label: "is expressed through" },
        { to: "readiness-to-hand", label: "has a phenomenological parallel in" },
        { to: "decreation", label: "resonates with" },
        { to: "skilled-engagement", label: "is the inner state of" },
      ],
      nuances: [
        { thinker: "Takuan Soho — The Unfettered Mind", note: "Takuan's letters to the swordsman Yagyu Munenori describe mushin as the condition in which the mind does not stop on anything — not on the opponent's sword, not on one's own technique, not on winning or losing. The mind that stops is already defeated. Applied to usefulness, mushin names the condition in which one is not stopped by the question of whether one is being useful, but simply responsive." },
        { thinker: "Herrigel — Zen in the Art of Archery", note: "Herrigel's account of learning Zen archery under a Japanese master captures mushin through the paradox of the shot that shoots itself: after years of training, the arrow releases not when the archer decides but when the bow is ready. The archer has been gradually removed from the equation. This is the model of usefulness-without-ego: the act happens, but no self is claiming it." },
      ],
      x: 300, y: 200, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "wu-wei",
      term: "Wu Wei",
      definition: "The Daoist principle of non-action or effortless action — not passivity but action that arises from the nature of the situation rather than from self-assertion or the ego's agenda. Wu wei is the mode of acting in which one is perfectly responsive to what is actually called for, without adding anything extra — no performance of effort, no claiming of credit, no resistance to the situation's own unfolding. In the context of usefulness, wu wei names the ideal of action that is so finely attuned that it does not register as action at all — the best ruler, says Laozi, is one whose people say 'we did it ourselves.' Wu wei is the Daoist ground for the useless tree: both express the principle that non-interference with the natural order is itself the highest form of contribution.",
      thinkers: ["Laozi", "Zhuangzi", "Alan Watts"],
      tags: ["daoism", "action", "nature", "effortlessness", "cosmology"],
      connections: [
        { to: "useless-tree", label: "is the principle of" },
        { to: "tenzo", label: "is embodied by" },
        { to: "mushin", label: "is expressed through" },
        { to: "skilled-engagement", label: "approaches" },
        { to: "usefulness-node", label: "reframes" },
        { to: "attention", label: "resonates with" },
      ],
      nuances: [
        { thinker: "Laozi — Tao Te Ching", note: "The Tao Te Ching returns repeatedly to the paradox of wu wei: the valley spirit that is empty yet never exhausted, the water that overcomes stone through yielding, the sage who acts without acting and teaches without words. The principle is not that nothing is done but that nothing is forced — that genuine usefulness, like water, finds its own level and does not strain against the shape of things." },
        { thinker: "Watts — The Way of Zen", note: "Alan Watts' translations of Daoist and Zen thought for Western audiences emphasise wu wei as the antidote to the Western compulsion to improve, fix, and be useful in visible, legible ways. The person who has internalised wu wei does not stop being active; they stop being anxious about their activity, and in doing so become capable of a subtler and more responsive form of engagement." },
      ],
      x: 120, y: 360, color: "#34d399", status: "consolidated",
    },

    // ── Synthesis ─────────────────────────────────────────────────────────────

    {
      id: "presence",
      term: "Presence",
      definition: "The quality of being fully here — attending to what is actually happening rather than to one's performance, role, or return. Presence is what the most demanding accounts of usefulness — Weil's attention, Dogen's tenzo, Buber's I-Thou — converge on as the ground from which genuine contribution arises. It is not a technique but a condition: the self that is present is not managing itself, not tracking its usefulness, not performing its role. Presence is both the precondition and the fruit of the ethical development that usefulness, at its best, requires. It sits in tension with the achievement society's demand for visible output, and with the having mode's need to accumulate proof of having contributed.",
      thinkers: ["Martin Buber", "Simone Weil", "Thich Nhat Hanh", "Eugene Gendlin"],
      tags: ["phenomenology", "ethics", "attention", "relation", "contemplation"],
      connections: [
        { to: "attention", label: "is the quality of" },
        { to: "decreation", label: "is made possible by" },
        { to: "role-distance", label: "requires space made by" },
        { to: "useless-tree", label: "points toward" },
        { to: "tenzo", label: "is exemplified by" },
        { to: "usefulness-node", label: "is the ground of genuine" },
      ],
      nuances: [
        { thinker: "Buber — I and Thou", note: "Buber's distinction between I-It and I-Thou relations turns on presence: in an I-It relation, the other is an object to be used, helped, or managed; in an I-Thou relation, both parties are fully present to each other, and something passes between them that cannot be planned or produced. Genuine usefulness, for Buber, can only arise from this second register — from a meeting, not a transaction." },
        { thinker: "Thich Nhat Hanh — interbeing", note: "Nhat Hanh's concept of interbeing — the radical mutual dependency of all phenomena — grounds presence in an ontological claim: to be present to another is not a generous extra but the recognition of what is actually the case. We are not separate selves choosing to connect; we are always already interpenetrating. Presence is the practice of noticing this." },
      ],
      x: 520, y: 260, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "ecology-of-usefulness",
      term: "Ecology of Usefulness",
      definition: "The critical framing that asks not merely 'am I being useful?' but: to whom, for what ends, within what structures, and at what cost? Usefulness is never abstract — it is always embedded in particular relationships, economies of value, and social arrangements that shape what counts as useful and who benefits. Being useful to a corporation, to a friend, to a community in struggle, to a living tradition — these are not the same act wearing the same moral clothing. The ecology of usefulness insists that the ethical quality of usefulness cannot be assessed from inside the act alone; it requires attention to the whole web of relations and power within which the act is embedded.",
      thinkers: ["Ivan Illich", "bell hooks", "James C. Scott"],
      tags: ["ethics", "politics", "critical-theory", "ecology", "structure"],
      connections: [
        { to: "usefulness-node", label: "embeds" },
        { to: "contribution", label: "contextualises" },
        { to: "social-role", label: "is structured by" },
        { to: "achievement-society", label: "is a pathological form of" },
        { to: "praxis-poiesis", label: "shapes how we read" },
        { to: "useless-tree", label: "is reframed by" },
      ],
      nuances: [
        { thinker: "Illich — Tools for Conviviality", note: "Ivan Illich's critique of professionalised service — medicine, education, social work — argues that institutions originally designed to serve human needs eventually reach a counterproductive threshold, generating the very problems they were designed to solve and creating dependency rather than capacity. Being useful within such institutions requires asking whether the institution itself serves the ends it claims." },
        { thinker: "hooks — teaching to transgress", note: "bell hooks' pedagogy insists that genuine usefulness in an educational context requires awareness of how race, class, and gender structure whose knowledge is valued and whose usefulness is recognised. To be useful without attending to these structures is to reproduce them — to be, as she says, complicit in the very conditions one claims to address." },
      ],
      x: 340, y: 380, color: "#60a5fa", status: "consolidated",
    },

    // ── Platonic / Wisdom ─────────────────────────────────────────────────────

    {
      id: "wisdom-as-condition",
      term: "Wisdom as Condition of Use",
      definition: "The argument developed in Plato's Euthydemus that wisdom is not one useful thing among others but the condition that makes anything useful at all. Socrates pursues the question of what kind of knowledge is actually beneficial and arrives at a striking conclusion: possessing good things — wealth, health, beauty, skill — is worthless unless you also have the wisdom to use them well. Without wisdom, the same goods that benefit the wise person harm the foolish one. Wisdom is therefore the meta-usefulness, the knowledge of how to use, which transforms neutral or even dangerous capacities into genuine benefits. This reframes usefulness entirely: the question is not whether one has useful things or skills, but whether one has the wisdom to deploy them rightly.",
      thinkers: ["Plato", "Socrates", "Gregory Vlastos"],
      tags: ["plato", "wisdom", "ancient-greek", "ethics", "knowledge"],
      connections: [
        { to: "usefulness-node", label: "is the condition of genuine" },
        { to: "phronesis-techne", label: "is elaborated as" },
        { to: "form-of-the-good", label: "requires orientation toward" },
        { to: "sophrosyne", label: "is grounded in" },
        { to: "ecology-of-usefulness", label: "asks the same question as" },
        { to: "praxis-poiesis", label: "reframes" },
      ],
      nuances: [
        { thinker: "Plato — Euthydemus 280-282", note: "In the Euthydemus, Socrates argues that all goods — wealth, health, courage, even knowledge — are only conditionally good. They benefit their possessor when used with wisdom and harm them when used without it. The sole unconditional good is wisdom itself, because wisdom is precisely the knowledge of how to use everything else rightly. This makes wisdom not a useful skill but the precondition of all usefulness." },
        { thinker: "Meno — virtue and teachability", note: "The Meno pushes the argument further: if virtue is a kind of knowledge, it should be teachable; but there seem to be no reliable teachers of it, which suggests virtue is not simply a skill. Socrates' tentative resolution — that virtue may be a kind of divine gift or right opinion rather than knowledge — keeps open the question of whether wisdom can be transmitted or only cultivated." },
        { thinker: "Contemporary relevance", note: "The Euthydemus argument has direct resonance with contemporary debates about expertise and usefulness: the technically skilled professional (lawyer, doctor, engineer) who lacks the wisdom to deploy their skill in the service of genuine human good is not merely neutral but potentially harmful. Wisdom as condition of use names the gap between competence and genuine beneficence." },
      ],
      x: 620, y: 380, color: "#facc15", status: "consolidated",
    },

    {
      id: "sophrosyne",
      term: "Sophrosyne",
      definition: "The Greek virtue usually translated as temperance, moderation, or self-knowledge — and in the context of usefulness, the capacity to know the limits of one's own competence, role, and knowledge. Plato's Charmides explores sophrosyne as a form of self-knowledge: knowing what one knows and does not know, which is itself a practical wisdom that prevents the dangerous overreach of misapplied usefulness. The person without sophrosyne is not merely ignorant but dangerously confident — useful in appearance, harmful in effect. Sophrosyne as self-knowledge connects directly to the Socratic tradition: the examined life is the one that has assessed its own capacities honestly enough to deploy them rightly.",
      thinkers: ["Plato", "Socrates", "Aristotle"],
      tags: ["plato", "virtue", "self-knowledge", "ancient-greek", "ethics"],
      connections: [
        { to: "wisdom-as-condition", label: "is the self-knowledge that grounds" },
        { to: "usefulness-node", label: "prevents the overreach of" },
        { to: "role-distance", label: "has a sociological parallel in" },
        { to: "attention", label: "resonates with" },
        { to: "phronesis-techne", label: "is the disposition underlying" },
      ],
      nuances: [
        { thinker: "Plato — Charmides", note: "In the Charmides, Socrates attempts to define sophrosyne and arrives at the puzzling formulation that it might be 'the knowledge of knowledge and ignorance' — knowing what you know and what you don't. This apparently abstract definition has a very practical point: the sophron person does not overreach their competence, does not pretend to knowledge they lack, and therefore cannot be dangerous in the way the confident ignorant person is." },
        { thinker: "Socratic ignorance", note: "The famous Socratic claim — that his wisdom consists in knowing that he knows nothing — is a form of sophrosyne in action. It is not false modesty but a genuine epistemic discipline: the refusal to be useful in ways that exceed one's actual understanding. In a culture that rewards confident expertise, Socratic sophrosyne is a kind of counter-cultural practice." },
        { thinker: "Limits and gift", note: "Sophrosyne reframes the relationship between limitation and usefulness: the person who knows their limits is more genuinely useful than the one who does not, because they will not cause harm through overconfidence. Knowing what one cannot do is as important to genuine usefulness as knowing what one can." },
      ],
      x: 700, y: 300, color: "#facc15", status: "consolidated",
    },

    {
      id: "form-of-the-good",
      term: "The Form of the Good",
      definition: "Plato's Republic argues that genuine usefulness — in the deepest sense — requires orientation toward what is actually good, not merely what is desired, requested, or socially valued. The Form of the Good is the highest object of philosophical knowledge: the source of being and truth, that toward which all genuine knowledge ultimately points. The philosopher-ruler is useful to the city not because they are technically skilled or socially adept but because they have glimpsed this form and can therefore orient the city's life toward genuine flourishing rather than mere preference-satisfaction. This introduces a radical and demanding criterion for usefulness: to be truly useful is to serve what is actually good, which may require refusing what is merely wanted.",
      thinkers: ["Plato", "Iris Murdoch", "Simone Weil"],
      tags: ["plato", "metaphysics", "ethics", "ancient-greek", "good"],
      connections: [
        { to: "wisdom-as-condition", label: "is the object of" },
        { to: "usefulness-node", label: "orients genuine" },
        { to: "attention", label: "is approached through" },
        { to: "ecology-of-usefulness", label: "raises the question of" },
        { to: "sophrosyne", label: "requires" },
      ],
      nuances: [
        { thinker: "Plato — Republic, the Sun analogy", note: "In the Republic's sun analogy, the Form of the Good is to the intelligible world what the sun is to the visible: the source of both being and knowability. Just as the sun makes things visible and enables growth, the Form of the Good makes things knowable and valuable. Usefulness that is not oriented toward this form is usefulness in the dark — activity without genuine direction." },
        { thinker: "Murdoch — The Sovereignty of Good", note: "Iris Murdoch revives the Platonic Form of the Good as a moral concept: the Good is the magnetic north of moral attention, the reality that genuine attention gradually discloses. For Murdoch, the connection between Platonic goodness and Weil's attention is direct: both describe a moral realism in which reality, rightly perceived, commands and guides action. To be genuinely useful is to serve what is real rather than what is merely desired." },
        { thinker: "Weil — waiting on God", note: "Weil's concept of the Good draws directly on Plato, whom she read with unusual depth. For her, the Form of the Good is not an abstract object of contemplation but a living presence that one can be oriented toward or away from in every act. The tenzo washing vegetables, if truly present and truly attending, is oriented toward the Good in Weil's Platonic sense — not despite the ordinariness of the task but through it." },
      ],
      x: 660, y: 180, color: "#facc15", status: "consolidated",
    },

    {
      id: "phronesis-techne",
      term: "Phronesis & Techne",
      definition: "Aristotle's distinction between two forms of practical knowledge: techne (craft knowledge, knowing how to make something) and phronesis (practical wisdom, knowing what is worth doing and how to act well in a particular situation). Techne is transmissible, teachable, and relatively context-independent — the skilled carpenter applies the same techniques across different pieces of wood. Phronesis is irreducibly situated: it is the capacity to perceive what a particular situation calls for, in all its specificity, and to respond appropriately — a capacity that cannot be reduced to rules or algorithms. In the context of usefulness, this distinction is fundamental: techne makes one competent, but phronesis makes one genuinely wise about when, how, and for whom to deploy that competence.",
      thinkers: ["Aristotle", "Hans-Georg Gadamer", "Alasdair MacIntyre"],
      tags: ["aristotle", "wisdom", "ethics", "knowledge", "practice"],
      connections: [
        { to: "wisdom-as-condition", label: "is Aristotle's elaboration of" },
        { to: "praxis-poiesis", label: "maps onto" },
        { to: "usefulness-node", label: "distinguishes two modes of" },
        { to: "skilled-engagement", label: "is expressed through both" },
        { to: "sophrosyne", label: "requires the disposition of" },
        { to: "ecology-of-usefulness", label: "is sensitive to the context of" },
      ],
      nuances: [
        { thinker: "Aristotle — Nicomachean Ethics VI", note: "Aristotle treats phronesis as the master virtue of practical life: the capacity to deliberate well about what conduces to the good life in general, not merely to a particular technical end. The phronimos (person of practical wisdom) is not someone who applies rules but someone who perceives situations with unusual clarity and responds to them with appropriateness — what Aristotle calls hitting the mean. Phronesis cannot be taught directly; it is acquired through experience, habituation, and the development of good character." },
        { thinker: "Gadamer — application in hermeneutics", note: "Gadamer revives the concept of phronesis in his hermeneutics: genuine understanding of a text or situation is not the application of a method (techne) but an act of practical wisdom in which one's own situation and the text's meaning are brought into productive dialogue. The interpreter who applies a fixed method misses what is actually being said; the phronimos hears it because they bring the right kind of attentiveness." },
        { thinker: "MacIntyre — practice and virtue", note: "MacIntyre argues that phronesis can only be developed within a practice — a coherent, socially established cooperative activity with internal goods and standards of excellence. The practical wisdom of a doctor, a teacher, or a craftsperson is inseparable from their participation in the practice that defines what counts as excellent doctoring, teaching, or crafting. This connects phronesis to the ecology of usefulness: wisdom is always formed within and by a particular tradition of practice." },
      ],
      x: 560, y: 120, color: "#facc15", status: "consolidated",
    },

    // ── Goethean ──────────────────────────────────────────────────────────────

    {
      id: "goethean-phenomenology",
      term: "Goethean Phenomenology",
      definition: "A mode of inquiry developed by Johann Wolfgang von Goethe and carried forward by the Nature Institute (Craig Holdrege, Stephen Talbott, and colleagues) that treats science as a participatory conversation with nature rather than a one-way extraction of data from a passive object. Goethean phenomenology is contextual, qualitative, and holistic: it resists the reduction of living phenomena to mechanisms, models, or abstract explanatory schemes, insisting instead that the phenomenon itself — encountered with patient, disciplined attention — is the primary locus of understanding. Where conventional science moves quickly from observation to explanation (the blackboard diagram that replaces what was seen), Goethean science lingers with the phenomenon, building exact inner pictures through repeated and varied observation, until the phenomenon begins to illuminate itself. This is Goethe's 'delicate empiricism': a science that deepens perception rather than replacing it. In the context of usefulness, Goethean phenomenology offers a model of knowing that is genuinely responsive rather than merely extractive — useful to the phenomenon on its own terms, not only to the researcher's pre-set questions.",
      thinkers: ["Johann Wolfgang von Goethe", "Craig Holdrege", "Stephen Talbott", "Henri Bortoft"],
      tags: ["phenomenology", "science", "nature", "holism", "perception", "ecology"],
      connections: [
        { to: "attention", label: "is grounded in" },
        { to: "skilled-engagement", label: "is a form of" },
        { to: "presence", label: "requires sustained" },
        { to: "wisdom-as-condition", label: "develops the perceptual basis of" },
        { to: "ecology-of-usefulness", label: "reframes usefulness toward" },
        { to: "phronesis-techne", label: "enacts a form of" },
      ],
      nuances: [
        { thinker: "Goethe — delicate empiricism", note: "Goethe described his approach as a 'delicate empiricism' (zarte Empirie) that becomes identical with the object itself. Rather than standing apart from nature to measure and explain it, the Goethean scientist enters into the phenomenon — through patient observation, exact inner picture-building, and the cultivation of what Goethe called the 'eyes of the spirit.' The observer is not neutralised but developed; the self becomes a more precise instrument of knowing." },
        { thinker: "Holdrege — science as conversation with nature", note: "Craig Holdrege of the Nature Institute describes Goethean science as a conversation with nature: the researcher brings questions, the phenomenon responds, and the response reshapes the questions. This iterative dialogue — which Holdrege practises through detailed phenomenological studies of individual plants and animals in their ecological context — is explicitly opposed to the model of extraction, in which nature is interrogated for pre-determined answers. The conversation requires the researcher to remain genuinely open to being surprised, corrected, and transformed by what they encounter." },
        { thinker: "Talbott — to explain or portray", note: "Stephen Talbott's essay 'To Explain or Portray' draws a fundamental distinction between scientific explanation (which replaces the phenomenon with an abstract mechanism) and portrayal (which renders the phenomenon more visible, more intelligible as itself). Goethean science is in the business of portrayal: it aims to make the thing more what it is rather than to substitute a model for it. This has direct implications for usefulness: genuine usefulness to a living thing or community may require portrayal rather than explanation — rendering it more itself rather than fitting it to a pre-existing template." },
        { thinker: "Bortoft — the whole in the parts", note: "Henri Bortoft's philosophical account of Goethe's method in 'The Wholeness of Nature' argues that Goethean perception is a practice of letting the whole appear through the parts — not constructing the whole from parts (the analytic move) but cultivating a quality of attention in which the organising principle of the whole becomes perceptible in each particular. This is directly relevant to the ecology of usefulness: to be genuinely useful to a living system requires perceiving the whole it is part of, not merely the parts one can manipulate." },
      ],
      x: 720, y: 440, color: "#34d399", status: "consolidated",
    },

  ],
};
