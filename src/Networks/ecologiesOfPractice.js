export const ecologiesOfPracticeNetwork = {
  id: "ecologies-of-practice",
  label: "Ecologies of Practice",
  subtitle: "Stengers — Obligation, Attention & the Non-Hierarchical Coexistence of Practices",
  accent: "#a3e635",
  storageKey: "semantic-network-ecologies-of-practice",
  initialNodes: [

    // ── Center ───────────────────────────────────────────────────────────────

    {
      id: "ecology-of-practices-node",
      term: "Ecology of Practices",
      definition: "Stengers' alternative to any project that would rank practices — scientific, artisanal, spiritual, artistic, indigenous — along a single scale of rationality, efficiency, or truth. 'Ecology' here is not a metaphor borrowed loosely from biology but a precise methodological stance: practices are to be thought the way an ecologist thinks organisms and milieus, as beings that differ, that have their own particular relations to their surroundings, and that cannot be adequately understood by reducing them to instances of one general category called 'practice as such.' The point is not tolerant relativism but attentiveness: to ask, of any given practice, what it needs in order to flourish, what would constitute a threat to it, and what it can and cannot be asked to answer for.",
      thinkers: ["Isabelle Stengers"],
      tags: ["epistemology", "ecology", "pluralism", "method"],
      connections: [
        { to: "practice", label: "composed of" },
        { to: "values", label: "immanent to" },
        { to: "milieu", label: "situated within" },
        { to: "interstices", label: "opens" },
        { to: "identity-of-practice", label: "protects" },
      ],
      nuances: [
        { thinker: "Stengers — 'Introductory Notes on an Ecology of Practices'", note: "Stengers is explicit that the term is chosen to avoid two familiar traps: judging practices by a supposedly neutral universal standard (usually modeled on physics), and simply relativizing all practices as equally arbitrary. Ecology asks a harder, more local question: what does this particular practice require in order not to be betrayed?" },
        { thinker: "Against epistemology's 'view from nowhere'", note: "The ecological framing deliberately displaces the philosopher from the position of judge surveying all practices from above, and relocates them as one more inhabitant among others, with their own stakes and their own partial view." },
      ],
      x: 400, y: 300, color: "#a3e635", status: "consolidated",
    },

    // ── Practice, obligation, identity ───────────────────────────────────────

    {
      id: "practice",
      term: "Practice",
      definition: "For Stengers, a practice is never simply the application of pre-existing knowledge; it is an achievement — a historically produced, always-fragile way of doing something that has to actively maintain the conditions of its own existence. A practice is defined less by its stated goals than by what it is obliged to take seriously, what would count within it as a failure or a betrayal, and what kind of risk it must be willing to run in order to remain itself rather than collapsing into something else (a technique, an ideology, a service).",
      thinkers: ["Isabelle Stengers"],
      tags: ["epistemology", "practice", "achievement", "method"],
      connections: [
        { to: "obligation", label: "defined by" },
        { to: "requirement", label: "answerable to" },
        { to: "identity-of-practice", label: "achieves" },
        { to: "instauration", label: "brought into being through" },
      ],
      nuances: [
        { thinker: "Stengers on practices as 'achievements, not givens'", note: "Treating a practice as an achievement rather than a natural fact means recognizing that it could have been otherwise, and could still be lost — which is precisely why an ecology of practices treats their protection as an ongoing labor rather than a settled matter." },
      ],
      x: 250, y: 190, color: "#a3e635", status: "consolidated",
    },

    {
      id: "obligation",
      term: "Obligation",
      definition: "The specific set of demands a practice places on its practitioners from within — not externally imposed rules but constitutive commitments without which the practice would no longer be recognizable to itself. A physicist's obligation to be surprised by an experiment, a therapist's obligation not to explain away a patient's account of their own experience: these are not moral add-ons but part of what makes the practice the practice it is.",
      thinkers: ["Isabelle Stengers"],
      tags: ["ethics", "practice", "obligation", "integrity"],
      connections: [
        { to: "requirement", label: "sharpened as" },
        { to: "guardians", label: "upheld by" },
      ],
      nuances: [
        { thinker: "Stengers on obligation vs. rule-following", note: "Obligation, unlike a rule, cannot be satisfied merely by mechanical compliance — it demands the practitioner's active, ongoing judgment about what fidelity to the practice requires in this particular, never entirely anticipated, situation." },
      ],
      x: 200, y: 340, color: "#a3e635", status: "provisional",
    },

    {
      id: "requirement",
      term: "Requirement",
      definition: "What a practice, a proposal, or a form of knowledge answers to from within — the exigence that gives a practice its integrity and prevents it from being reduced to whatever is convenient for an outside interest. To respect a requirement is to refuse both the fantasy of judging a practice by a universal external standard and the opposite fantasy that anything a practice does is automatically legitimate because it is 'its own.' In the ecology of practices, requirements are the closest thing a practice has to a nature, and honoring them is what distinguishes genuine plurality from mere permissiveness.",
      thinkers: ["Isabelle Stengers"],
      tags: ["ethics", "practice", "obligation", "integrity"],
      connections: [
        { to: "the-idiot", label: "protected against erosion by" },
        { to: "obligation", label: "source of" },
      ],
      nuances: [
        { thinker: "Stengers — 'exigence' as untranslatable demand", note: "As in the cosmopolitical writings, requirement/exigence names something closer to a vow a practice is held to than a rule it merely follows — which is why its erosion is experienced by practitioners as a betrayal, not just a change of procedure." },
      ],
      x: 300, y: 420, color: "#a3e635", status: "provisional",
    },

    {
      id: "identity-of-practice",
      term: "Identity of a Practice",
      definition: "Not a fixed essence but the particular, historically achieved 'manner' by which a practice holds itself answerable to its own obligations — the specific way it takes its object, its practitioners, and its risks seriously. A practice's identity is precisely what is at stake whenever it is asked to justify itself in terms borrowed from elsewhere (economic efficiency, generalizable method, popular demand): such translations can either leave the identity intact or quietly dissolve it.",
      thinkers: ["Isabelle Stengers"],
      tags: ["identity", "practice", "epistemology"],
      connections: [
        { to: "guardians", label: "defended by" },
        { to: "capture", label: "vulnerable to" },
        { to: "values", label: "expressed through" },
      ],
      nuances: [
        { thinker: "Stengers on translation as risk", note: "Whenever a practice must explain itself in a foreign idiom — to a funding body, a regulator, a media audience — it risks a translation that survives only by shedding exactly what made it that practice rather than another; identity is what such translations put at stake." },
      ],
      x: 500, y: 380, color: "#a3e635", status: "consolidated",
    },

    // ── Guardians & capture ──────────────────────────────────────────────────

    {
      id: "guardians",
      term: "Guardians",
      definition: "Those within a practice — not necessarily officials or authorities — who feel and defend its obligations against erosion, especially against the slow, often well-intentioned pressures that would substitute an external logic (efficiency, popularity, funding requirements) for the practice's own requirements. Guardianship is not gatekeeping in the sense of policing membership; it is closer to a form of care that keeps a practice answerable to what it owes itself.",
      thinkers: ["Isabelle Stengers"],
      tags: ["practice", "care", "resistance", "obligation"],
      connections: [
        { to: "capture", label: "resist" },
        { to: "obligation", label: "uphold" },
      ],
      nuances: [
        { thinker: "Stengers on the fragility of guardianship", note: "Guardians have no institutional guarantee of success; a practice can lose its guardians, or its guardians can themselves be captured by the very logics they were meant to resist — which is why an ecology of practices cannot treat protection as a one-time achievement." },
      ],
      x: 560, y: 260, color: "#65a30d", status: "provisional",
    },

    {
      id: "capture",
      term: "Capture",
      definition: "What happens when a practice's own requirements are quietly displaced by an external logic that comes to govern it in the requirement's name — as when scientific research is reoriented by metrics of publishability or commercial applicability until practitioners can no longer clearly tell whether they are answering to their object or to the metric. Capture is rarely a single dramatic event; it is usually gradual, often experienced by individual practitioners as simply 'how things are now,' which is precisely what makes it so difficult to resist without guardians who remember what was lost.",
      thinkers: ["Isabelle Stengers"],
      tags: ["practice", "capitalism", "critique", "erosion"],
      connections: [
        { to: "identity-of-practice", label: "threatens" },
        { to: "ecology-of-practices-node", label: "fragments" },
      ],
      nuances: [
        { thinker: "Stengers on capture and 'reciprocal capture'", note: "Stengers' broader work with Pignarre on 'reciprocal capture' between capitalism and technoscience gives the more local concept of a single practice being captured its larger political stakes: what happens to one laboratory or one discipline is symptomatic of a wider systemic dynamic." },
      ],
      x: 650, y: 340, color: "#65a30d", status: "provisional",
    },

    // ── Milieu & interstices ─────────────────────────────────────────────────

    {
      id: "milieu",
      term: "Milieu",
      definition: "The particular surrounding conditions — institutional, material, social — within which a practice takes place and that shape what it can and cannot do, without wholly determining it. Thinking practices ecologically means refusing to abstract them from their milieu as if 'the scientific method' or 'the craft' existed identically everywhere; a practice is always this practice, in this milieu, with these specific pressures and possibilities.",
      thinkers: ["Isabelle Stengers"],
      tags: ["ecology", "context", "materiality"],
      connections: [
        { to: "practice", label: "conditions" },
        { to: "interstices", label: "produces within" },
      ],
      nuances: [
        { thinker: "Ecological borrowing, made precise", note: "Stengers takes the ecological pairing of organism and milieu seriously enough to insist that, just as no organism can be understood apart from its environment, no practice can be understood by abstracting its 'pure' method from the concrete conditions that let it exist at all." },
      ],
      x: 300, y: 150, color: "#a3e635", status: "provisional",
    },

    {
      id: "interstices",
      term: "Interstices",
      definition: "The gaps and in-between spaces within and between milieus where practices are not fully determined by their surrounding conditions — spaces where something other than the dominant logic of a milieu can take hold, however precariously. Interstices matter to an ecology of practices because they are where new practices are born, where existing ones find room to resist capture, and where genuinely divergent ways of knowing can survive alongside more dominant ones.",
      thinkers: ["Isabelle Stengers"],
      tags: ["ecology", "possibility", "resistance", "emergence"],
      connections: [
        { to: "milieu", label: "opens within" },
        { to: "ecology-of-practices-node", label: "site of novelty for" },
      ],
      nuances: [
        { thinker: "Stengers on the political value of interstices", note: "Rather than looking for grand systemic transformation, Stengers is often drawn to the modest, local, interstitial spaces where an alternative practice can be nurtured — a stance closer to careful cultivation than to revolution." },
      ],
      x: 220, y: 60, color: "#65a30d", status: "provisional",
    },

    // ── Values, risk, attention ──────────────────────────────────────────────

    {
      id: "values",
      term: "Values",
      definition: "Not external moral standards applied to a practice from outside, but commitments immanent to the practice itself — what practitioners find themselves caring about simply by virtue of doing this work seriously. Stengers resists the fact/value split that would make values a merely subjective addition to an otherwise neutral practice: a practice's values are part of what makes it recognizable as that practice at all.",
      thinkers: ["Isabelle Stengers", "Alfred North Whitehead"],
      tags: ["ethics", "practice", "immanence"],
      connections: [
        { to: "practice", label: "immanent to" },
        { to: "identity-of-practice", label: "constitutive of" },
      ],
      nuances: [
        { thinker: "Whitehead's refusal of the fact/value split", note: "Stengers' treatment of values as immanent to practice draws directly on Whitehead's insistence that no occasion of experience is ever value-neutral — a metaphysical claim that grounds her otherwise quite practical, case-by-case ethics of practices." },
      ],
      x: 480, y: 210, color: "#a3e635", status: "provisional",
    },

    {
      id: "risk-taking",
      term: "Risk-Taking",
      definition: "Stengers' insistence that a practice worthy of the name must remain capable of being surprised, wrong, or transformed by what it encounters — must risk something rather than simply confirming what it already assumed. Risk-taking is what distinguishes a living practice from a merely repeated technique; where risk disappears, Stengers suggests, so does the practice's claim to be answerable to anything beyond its own procedures.",
      thinkers: ["Isabelle Stengers"],
      tags: ["practice", "risk", "epistemology", "vitality"],
      connections: [
        { to: "practice", label: "demanded by" },
        { to: "attention", label: "sharpened by" },
      ],
      nuances: [
        { thinker: "Stengers on the 'guaranteed' sciences", note: "Stengers is critical of forms of science and expertise that have insulated themselves so thoroughly from risk that they can no longer be surprised by their object — a condition she treats as a loss of vitality, not a mark of maturity." },
      ],
      x: 560, y: 150, color: "#65a30d", status: "provisional",
    },

    {
      id: "attention",
      term: "Attention / Paying Attention",
      definition: "A discipline in its own right, not a passive backdrop to knowing: the cultivated capacity to notice what a situation, an interlocutor, or a nonhuman other is actually presenting, rather than what one's existing categories predispose one to expect. Stengers, with Despret, treats attention as something that can be trained, degraded, or lost — and as a precondition for any practice's ability to be genuinely obligated to what it studies rather than merely projecting onto it.",
      thinkers: ["Isabelle Stengers", "Vinciane Despret"],
      tags: ["attention", "epistemology", "ethology", "practice"],
      connections: [
        { to: "risk-taking", label: "disciplines" },
        { to: "situated-knowledges", label: "form of" },
      ],
      nuances: [
        { thinker: "Despret — 'what would the animals say if we asked the right questions?'", note: "Vinciane Despret's ethological work, closely aligned with Stengers, shows how the quality of a researcher's attention to an animal changes what the animal is even able to show them — attentiveness is not neutral observation but an active, relational achievement." },
      ],
      x: 620, y: 420, color: "#65a30d", status: "provisional",
    },

    {
      id: "situated-knowledges",
      term: "Situated Knowledges",
      definition: "Haraway's term, closely resonant with Stengers' ecology of practices: the insistence that all knowledge is produced from a particular, embodied, partial location, and that objectivity worth having comes not from pretending to a view from nowhere but from being rigorously accountable for one's actual, situated position. Within an ecology of practices, situated knowledges gives the ecological metaphor its epistemic complement — practices don't just differ in method, they differ because they are literally situated differently.",
      thinkers: ["Donna Haraway", "Isabelle Stengers"],
      tags: ["epistemology", "feminism", "positionality", "objectivity"],
      connections: [
        { to: "attention", label: "grounded in" },
        { to: "ecology-of-practices-node", label: "resource for" },
      ],
      nuances: [
        { thinker: "Haraway — 'Situated Knowledges' (1988)", note: "Haraway's essay argues that the 'god trick' of seeing everything from nowhere is not just impossible but politically suspect — a critique that dovetails with Stengers' refusal of a single vantage from which all practices could be neutrally ranked." },
      ],
      x: 700, y: 300, color: "#65a30d", status: "provisional",
    },

    // ── Shared figures (also in Cosmopolitics) ──────────────────────────────

    {
      id: "the-idiot",
      term: "The Idiot",
      definition: "A figure Stengers borrows from Deleuze (who borrows it from Dostoevsky), at home in the ecology of practices as much as in cosmopolitics proper: the one who refuses to accept the terms in which a problem has already been framed, and who thereby forces a collective to slow down before a practice's requirements are traded away for the sake of speed or consensus. Within a given practice, the idiot's stubborn 'but wait' can be exactly what protects an obligation from being quietly abandoned.",
      thinkers: ["Isabelle Stengers", "Gilles Deleuze"],
      tags: ["politics", "figure", "resistance", "epistemology"],
      connections: [
        { to: "slowing-down", label: "practices" },
        { to: "requirement", label: "protects" },
      ],
      nuances: [
        { thinker: "Stengers on collective intelligence", note: "For Stengers, the idiot's role is not individual heroism but a function any collective needs — a standing invitation for someone, anyone, to interrupt when a decision or a practice's drift is moving too fast for its consequences to be thought through." },
      ],
      x: 140, y: 420, color: "#65a30d", status: "consolidated",
    },

    {
      id: "slowing-down",
      term: "Slowing Down (ralentir)",
      definition: "A deliberately unglamorous virtue, at work within practices as much as between them: the refusal to let urgency dictate the terms of a decision before what is actually at stake — including a practice's own obligations — has been adequately taken into account. Within an ecology of practices, slowing down is what protects a practice from trading its requirements for speed, efficiency, or the appearance of decisiveness.",
      thinkers: ["Isabelle Stengers"],
      tags: ["politics", "temporality", "ethics", "method"],
      connections: [
        { to: "the-idiot", label: "embodied in" },
        { to: "risk-taking", label: "makes possible" },
      ],
      nuances: [
        { thinker: "Stengers — against the 'we have no choice' reflex", note: "Just as in cosmopolitics, Stengers targets the rhetorical move whereby urgency forecloses deliberation — within a single practice, this reflex is what makes capture look like an unavoidable adaptation rather than a betrayal that could have been resisted." },
      ],
      x: 100, y: 300, color: "#65a30d", status: "consolidated",
    },

    // ── Instauration ─────────────────────────────────────────────────────────

    {
      id: "instauration",
      term: "Instauration",
      definition: "A term Stengers takes up from Étienne Souriau to name the specific mode by which a practice, a work, or a being is brought into full existence — not created from nothing by a sovereign maker, nor simply discovered as already complete, but instaured: gradually, riskily, patiently achieved through a process that could fail at any point, and to which the practice or work itself contributes as much as its practitioner. Instauration gives the ecology of practices a precise alternative to both creationist and discovery-based accounts of how a practice comes to exist.",
      thinkers: ["Étienne Souriau", "Isabelle Stengers", "Bruno Latour"],
      tags: ["ontology", "creation", "practice", "process"],
      connections: [
        { to: "practice", label: "names the making of" },
        { to: "ecology-of-practices-node", label: "key process within" },
      ],
      nuances: [
        { thinker: "Souriau — Les différents modes d'existence", note: "Souriau's neglected 1943 work, revived by Stengers and Latour, treats instauration as the general form of any genuine act of making — the artist does not simply impose a pre-formed idea on inert matter but works with a not-yet-existing work that resists, surprises, and partly determines its own completion." },
        { thinker: "Latour's revival of Souriau", note: "Latour's introduction to the English translation of Souriau helped bring instauration into wider STS and Stengersian vocabulary as an alternative to the modern opposition between fabrication (mere human construction) and discovery (finding what was already fully there)." },
      ],
      x: 480, y: 470, color: "#a3e635", status: "provisional",
    },

  ],
};
