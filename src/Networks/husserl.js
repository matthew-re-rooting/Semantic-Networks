export const husserlNetwork = {
  id: "husserl",
  label: "Husserl",
  subtitle: "Intentionality, the Lifeworld & the Structures of Experience",
  accent: "#e879f9",
  storageKey: "semantic-network-husserl",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "intentionality",
      term: "Intentionality",
      definition: "The foundational discovery of Husserlian phenomenology, inherited and radicalised from Franz Brentano: consciousness is always consciousness of something — every act of mind is directed toward an object, has a content, reaches beyond itself toward a world. There is no pure inner mental state, no experience that simply floats free of any object; the structure of directedness is constitutive of mind as such. This means that the traditional epistemological question — how does a subject enclosed in its inner states get access to an outer world? — is dissolved rather than answered: consciousness is always already out there, in its intentional structure, before any question of access arises. Intentionality is not a property consciousness sometimes has but its very mode of being. From this single insight, Husserl builds a systematic phenomenology: the task is to describe the full range of intentional structures through which the world is given to experience.",
      thinkers: ["Edmund Husserl", "Franz Brentano", "Dan Zahavi"],
      tags: ["consciousness", "mind", "directedness", "phenomenology", "ontology"],
      connections: [
        { to: "noesis-noema", label: "is analysed through" },
        { to: "epoché", label: "is revealed by" },
        { to: "horizon", label: "always comes with" },
        { to: "time-consciousness", label: "has a temporal structure in" },
        { to: "passive-synthesis", label: "has a pre-reflective basis in" },
        { to: "fulfilment-frustration", label: "is dynamically enacted through" },
        { to: "constitution", label: "is the source of" },
      ],
      x: 400, y: 300, color: "#e879f9", status: "consolidated",
    },

    // ── Method ────────────────────────────────────────────────────────────────

    {
      id: "natural-attitude",
      term: "The Natural Attitude",
      definition: "The pre-reflective, taken-for-granted orientation toward the world that characterises everyday existence — the unexamined assumption that the world simply is there, independent of our experience of it, as a collection of things with stable properties available for our use and knowledge. The natural attitude is not a theory or a belief but a lived posture: we are ordinarily absorbed in the world, dealing with things, pursuing purposes, without pausing to ask how the world comes to be given to us as it is. Husserl takes the natural attitude seriously as the ground of all experience — it is not an error to be corrected — but phenomenology requires its temporary suspension in order to examine what it conceals: the structures of intentional constitution through which the natural world is given. The natural attitude is also the site of sedimentation: layers of habitual, unquestioned meaning that have accumulated through experience and now function as the invisible ground of perception.",
      thinkers: ["Edmund Husserl", "Alfred Schutz", "Peter Berger"],
      tags: ["everyday", "pre-reflective", "world", "assumption", "attitude"],
      connections: [
        { to: "epoché", label: "is suspended by" },
        { to: "lifeworld", label: "is the lived form of" },
        { to: "sedimentation", label: "is constituted through" },
        { to: "intentionality", label: "is the unreflective exercise of" },
        { to: "horizon", label: "is structured by" },
      ],
      nuances: [
        { thinker: "Husserl — Ideas I", note: "Husserl describes the natural attitude as the general thesis of the natural standpoint: the world is simply there, and I am simply in it. This thesis is not a judgment I make but a lived posture, a way of being oriented that underlies all my particular judgments and activities. The phenomenological reduction does not refute this thesis but brackets it — puts it out of play temporarily — in order to examine how the world comes to be given as it is." },
        { thinker: "Schutz — the social world", note: "Alfred Schutz extends Husserl's analysis of the natural attitude into a sociology of everyday life: the social world is structured by typifications, recipes, and stocks of knowledge that function in the natural attitude as unquestioned givens. Schutz's phenomenological sociology shows how the natural attitude is not merely individual but intersubjective — it is shared, transmitted, and maintained through social interaction." },
      ],
      x: 180, y: 160, color: "#e879f9", status: "consolidated",
    },

    {
      id: "epoché",
      term: "The Epoché",
      definition: "The phenomenological reduction — the methodological move of bracketing the natural attitude's assumption that the world simply exists as we ordinarily take it to be, in order to examine the structures of experience itself. The epoché is not Cartesian doubt: it does not deny the existence of the world but suspends the question of existence in order to attend to how the world is given. After the epoché, the world is still there — but now as the world-as-experienced, the correlate of intentional acts, rather than the world simply taken for granted. This suspension opens the transcendental field: the domain of pure experience and its intentional structures, prior to all theoretical commitment. Husserl describes the epoché as a radical beginning — a clearing away of accumulated assumptions in order to see experience as it actually is. The movement is always also a return: the reduction leads back to the lifeworld enriched by what has been found in the transcendental register.",
      thinkers: ["Edmund Husserl", "Pyrrhonist tradition", "Maurice Merleau-Ponty"],
      tags: ["method", "reduction", "bracketing", "consciousness", "transcendental"],
      connections: [
        { to: "natural-attitude", label: "suspends" },
        { to: "intentionality", label: "reveals the structure of" },
        { to: "transcendental-subjectivity", label: "opens onto" },
        { to: "eidetic-variation", label: "is complemented by" },
        { to: "lifeworld", label: "always returns to" },
        { to: "evidence", label: "aims at" },
      ],
      nuances: [
        { thinker: "Husserl — the radical beginning", note: "Husserl insists that phenomenology must begin without presuppositions — a more radical beginning than Descartes, who kept the ego and the cogito as his bedrock. The epoché suspends even these: what remains is not the thinking ego but the transcendental field of experience, prior to any determination of subject or object. This is not scepticism but methodological rigour: one cannot describe experience adequately while assuming what experience gives us." },
        { thinker: "Merleau-Ponty — the incomplete reduction", note: "Merleau-Ponty famously noted that 'the most important lesson which the reduction teaches us is the impossibility of a complete reduction.' We can never fully step back from our being-in-the-world; we are always already embedded in a pre-reflective bodily existence that cannot be fully made the object of transcendental reflection. This is not a failure of Husserl's method but its most important result — it shows the depth of our engagement with the world." },
      ],
      x: 180, y: 340, color: "#e879f9", status: "consolidated",
    },

    {
      id: "eidetic-variation",
      term: "Eidetic Variation",
      definition: "Husserl's method for disclosing essences (eide) — the invariant structures that make a thing the kind of thing it is. The procedure is imaginative: one takes an example of the phenomenon and varies it freely in imagination, asking at each step whether the thing could still be what it is if this feature were removed or altered. What survives all variation — what cannot be eliminated without the thing ceasing to be what it is — is the essence. Eidetic variation is not empirical generalisation (which collects instances and abstracts common features) but an a priori disclosure: it reveals what must be the case for a thing of this kind to be given at all. The method has a playful, creative dimension — it requires genuine imaginative freedom, not just enumeration of known cases — and a rigorous one: the essence is only disclosed when all relevant variations have been genuinely entertained.",
      thinkers: ["Edmund Husserl", "Max Scheler", "Edith Stein"],
      tags: ["method", "essence", "imagination", "a-priori", "variation"],
      connections: [
        { to: "epoché", label: "is complemented by" },
        { to: "evidence", label: "aims at eidetic" },
        { to: "intentionality", label: "discloses the essential structures of" },
        { to: "constitution", label: "reveals the conditions of" },
        { to: "passive-synthesis", label: "operates on the results of" },
      ],
      nuances: [
        { thinker: "Husserl — Ideas I, §3-4", note: "Husserl distinguishes the empirical generality of the natural sciences (this and this and this tone are all tones) from the eidetic necessity of phenomenology (a tone must have pitch, duration, and intensity to be a tone at all). Eidetic variation discloses the second kind of necessity: not what things happen to share but what they must share to be what they are. This is why phenomenology, for Husserl, is an a priori science — one that describes necessary structures rather than contingent regularities." },
        { thinker: "Stein — empathy and the other", note: "Edith Stein applied eidetic variation to the experience of empathy, asking what is invariant across all cases of genuinely experiencing another's experience as theirs rather than one's own. Her analysis discloses the essential structure of Einfühlung: a non-primordial, non-inferential givenness of the other's experience that is neither perception nor imagination but its own irreducible act-type." },
      ],
      x: 160, y: 480, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "evidence",
      term: "Evidence",
      definition: "Evidenz — not mere certainty or psychological conviction but the mode of givenness in which something shows itself adequately to consciousness: the fulfilment of an intention in direct intuition. Evidence is the criterion of phenomenological truth, but it is not a single standard: there are degrees and modes of evidence, from the apodictic evidence of logical and mathematical truths (which cannot be doubted without contradiction) to the adequate evidence of simple perceptual givens, to the presumptive evidence of the outer world (which is always given in profiles and could in principle be revised). Husserl insists that all genuine knowledge — including scientific knowledge — is ultimately grounded in evidence: in the direct givenness of something to experience, however mediated. The task of phenomenology is to return all abstract and theoretical claims to the evidence on which they rest.",
      thinkers: ["Edmund Husserl", "Dan Zahavi", "Rudolf Bernet"],
      tags: ["truth", "givenness", "intuition", "knowledge", "method"],
      connections: [
        { to: "epoché", label: "is what the epoché aims at" },
        { to: "fulfilment-frustration", label: "is achieved through" },
        { to: "intentionality", label: "is the fulfilment of" },
        { to: "noesis-noema", label: "is analysed through" },
        { to: "eidetic-variation", label: "aims at eidetic" },
        { to: "lifeworld", label: "is ultimately grounded in" },
      ],
      nuances: [
        { thinker: "Husserl — the principle of principles", note: "In Ideas I, Husserl states what he calls the principle of principles: that every originary presentive intuition is a source of authority for knowledge — that what presents itself in intuition is to be taken simply as what it presents itself as, within the limits in which it presents itself. This is not naive realism but a phenomenological principle: the task of philosophy is to return to the things themselves as they are given, rather than constructing theories that substitute for direct givenness." },
        { thinker: "Degrees of evidence", note: "Husserl distinguishes adequate evidence (in which the object is fully and directly given, as in the givenness of a simple sense content) from apodictic evidence (in which the object's existence cannot be doubted without contradiction, as in logical truths) from presumptive evidence (in which the object is given but always with an open horizon of possible revision, as in perception of physical things). Most of our evidence is presumptive — the world is always given as open to further experience." },
      ],
      x: 160, y: 600, color: "#a78bfa", status: "consolidated",
    },

    // ── Structural Concepts ───────────────────────────────────────────────────

    {
      id: "noesis-noema",
      term: "Noesis & Noema",
      definition: "The correlational structure through which Husserl analyses any intentional experience: the noesis is the act of intending — the perceiving, remembering, imagining, judging — with its particular character and mode of grasping; the noema is the object as intended — the content of the act, the object-as-it-appears under this mode of givenness. The noema is not the real object in the world but the object as it presents itself to this act: the perceived tree as perceived, with its particular profile, its colour in this light, its position in this landscape. Every intentional act has both a noetic and a noematic side, and phenomenological description must attend to both. The noema includes both what is meant (the object) and how it is meant (its mode of givenness), making it a richer concept than mere content or representation.",
      thinkers: ["Edmund Husserl", "Dagfinn Føllesdal", "David Woodruff Smith"],
      tags: ["intentionality", "structure", "object", "act", "phenomenology"],
      connections: [
        { to: "intentionality", label: "analyses the structure of" },
        { to: "horizon", label: "is surrounded by" },
        { to: "evidence", label: "is analysed through" },
        { to: "constitution", label: "is built up through" },
        { to: "fulfilment-frustration", label: "is completed or disappointed in" },
        { to: "passive-synthesis", label: "is pre-constituted by" },
      ],
      nuances: [
        { thinker: "Husserl — Ideas I §88-96", note: "Husserl's introduction of the noesis/noema distinction is one of the most technically demanding moments in phenomenology. The key point is that the noema is neither a mental image (which would make perception merely indirect) nor the real object (which would conflate intentional and real objects). It is the object as meant — the X toward which the act is directed, with all its determinations as they appear from this perspective and in this mode of givenness." },
        { thinker: "Føllesdal — the noema as Fregean sense", note: "Dagfinn Føllesdal influentially interpreted the noema as analogous to Frege's sense (Sinn): just as the same reference can be picked out by different senses (the morning star / the evening star both refer to Venus), the same object can be intended through different noemata. This interpretation connects Husserlian phenomenology to analytic philosophy of language and has been both influential and contested." },
      ],
      x: 580, y: 160, color: "#e879f9", status: "consolidated",
    },

    {
      id: "horizon",
      term: "Horizon",
      definition: "Every experience comes with a fringe of implicit co-presence — the back of the cup that is not seen but anticipated, the other side of the street, the future moments of a melody already shaping its present tone. The horizon is the structure of implicit expectation and implication that surrounds every act of attention, giving it its depth and situatedness. Husserl distinguishes the inner horizon (the unfulfilled aspects of the object itself — the back of the cup, its underside, its interior) from the outer horizon (the surrounding context — the table, the room, the world within which the cup is given). Every object is given against a horizon, and the horizon is never itself an object but the background condition of any objectivity. The horizon structure means that experience is never self-contained: it is always pointing beyond itself, always already reaching toward what has not yet shown itself.",
      thinkers: ["Edmund Husserl", "Hans-Georg Gadamer", "Dan Zahavi"],
      tags: ["structure", "perception", "context", "implication", "temporality"],
      connections: [
        { to: "intentionality", label: "always comes with" },
        { to: "natural-attitude", label: "is structured by" },
        { to: "noesis-noema", label: "surrounds" },
        { to: "time-consciousness", label: "has a temporal form in" },
        { to: "lifeworld", label: "is the ultimate horizon of" },
        { to: "passive-synthesis", label: "is constituted through" },
        { to: "fulfilment-frustration", label: "generates the expectations that lead to" },
      ],
      nuances: [
        { thinker: "Husserl — inner and outer horizon", note: "The inner horizon of an object comprises all its co-intended but not directly given aspects: the back of a seen object, the further melody implied by its opening bars, the unactualized possibilities of a perceived thing. The outer horizon is the field within which the object appears: other objects, the room, the world. Both horizons are co-present in every experience without being thematically intended — they form the implicit background that gives the thematic foreground its depth." },
        { thinker: "Gadamer — horizon and fusion", note: "Gadamer borrows the concept of horizon for his hermeneutics: every interpreter has a horizon — a range of vision determined by their historical situation — and understanding is a fusion of horizons between interpreter and text. Gadamer extends Husserl's primarily perceptual concept into the domain of historical understanding, where horizons are shaped by tradition, language, and belonging." },
      ],
      x: 600, y: 280, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "time-consciousness",
      term: "Time-Consciousness",
      definition: "Husserl's analysis of the living present as constituted by three inseparable dimensions: retention (the just-past held in the now, allowing the present moment to resound with what has just been), primal impression (the knife-edge of the now, the direct contact with what is presently given), and protention (the about-to-come already shaping the now, the implicit anticipation of what is coming). These are not three separate phases of time but three aspects of a single living present that is always thick with past and future. Without retention, a melody would be a series of disconnected tones rather than a musical phrase; without protention, each moment would be a shock rather than a continuation. Time-consciousness is not consciousness of time (as if time were an object) but the temporal structure of consciousness itself — the way experience flows and holds itself together as an ongoing stream.",
      thinkers: ["Edmund Husserl", "Dan Zahavi", "Evan Thompson"],
      tags: ["time", "temporality", "retention", "protention", "consciousness"],
      connections: [
        { to: "intentionality", label: "has its temporal structure in" },
        { to: "passive-synthesis", label: "is the most basic form of" },
        { to: "horizon", label: "has a temporal form in" },
        { to: "living-present", label: "is the analysis of" },
        { to: "sedimentation", label: "accumulates through" },
        { to: "fulfilment-frustration", label: "unfolds through" },
      ],
      nuances: [
        { thinker: "Husserl — On the Phenomenology of the Consciousness of Internal Time", note: "Husserl's lectures on time-consciousness distinguish the phenomenological now (the living present, thick with retention and protention) from the objective now of physics (a dimensionless instant). The melody example is central: to hear a melody as a melody rather than as a series of separate tones, retention must hold the previous notes as just-past while protention anticipates the coming notes. The melody exists only in this temporal thickness of consciousness." },
        { thinker: "Zahavi — the three-phase model", note: "Dan Zahavi clarifies that retention, primal impression, and protention are not three distinct phases but three aspects of a unified structure. Retention is not a memory of the past but the past held in the living present — the fading tail of the present moment. Protention is not an anticipation of the future but the leading edge of the present already leaning forward. Together they constitute the specious present — the minimum temporal unit of experience." },
      ],
      x: 600, y: 400, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "passive-synthesis",
      term: "Passive Synthesis",
      definition: "The pre-active, pre-reflective syntheses through which the stream of experience is already organised before any deliberate act of consciousness. Where active synthesis involves the ego's deliberate engagement — judging, comparing, collecting — passive synthesis operates below the threshold of intention: it is the way the field of experience organises itself into figures and grounds, similarities and contrasts, temporal continuities and associations, without any act of the will. Association is the most fundamental passive synthesis: similarity and temporal contiguity draw experiences together into unified wholes before the ego acts. Passive synthesis is the domain in which habit, sedimentation, and embodied skill operate: the hand that reaches for the cup does not need to deliberate because the synthesis has already occurred at a pre-personal level. Husserl's discovery of passive synthesis is his deepest move toward what Merleau-Ponty will develop as the body's pre-reflective engagement with the world.",
      thinkers: ["Edmund Husserl", "Maurice Merleau-Ponty", "Renaud Barbaras"],
      tags: ["pre-reflective", "embodiment", "association", "habit", "synthesis"],
      connections: [
        { to: "intentionality", label: "is the pre-reflective basis of" },
        { to: "time-consciousness", label: "is grounded in" },
        { to: "sedimentation", label: "accumulates as" },
        { to: "noesis-noema", label: "pre-constitutes" },
        { to: "horizon", label: "constitutes" },
        { to: "kinesthesia", label: "is anchored in" },
        { to: "constitution", label: "is the pre-active layer of" },
      ],
      nuances: [
        { thinker: "Husserl — Analyses Concerning Passive and Active Synthesis", note: "In his lectures on passive synthesis, Husserl traces how the most basic structures of experience — the unity of a perceptual object, the temporal continuity of a melody, the grouping of similar elements — are constituted before any act of the ego. These are not given to the ego but to a pre-personal level of experience that the ego inherits and builds upon. Passive synthesis is the hidden infrastructure of all conscious life." },
        { thinker: "Bridge to Merleau-Ponty", note: "Husserl's passive synthesis is the point at which his transcendental phenomenology opens most directly toward Merleau-Ponty's phenomenology of the body: the pre-active syntheses that organise experience are, for Merleau-Ponty, anchored in the body's motor schemas, habits, and kinesthetic self-awareness. The anonymous body — the body that perceives and moves below the level of the personal ego — is the embodied form of Husserlian passive synthesis." },
      ],
      x: 220, y: 560, color: "#34d399", status: "consolidated",
    },

    {
      id: "constitution",
      term: "Constitution",
      definition: "The process by which objects, meanings, other subjects, and the world itself are built up through acts of consciousness — not created ex nihilo (Husserl is not a simple idealist) but disclosed in their specific mode of givenness. To say that consciousness constitutes the world is not to say that the world is a mental construction but that the world's meaning — its structure as experienced — is not simply read off from a pre-given reality but is the result of intentional acts that bestow sense on what is encountered. Constitution operates at multiple levels: passive synthesis constitutes the most basic perceptual unities; active synthesis constitutes higher-order objects like numbers, states of affairs, and cultural meanings. The tension between constitution and discovery — does consciousness make meaning or find it? — is one of the most productive unresolved tensions in phenomenology, and Husserl's answer is never simply one or the other.",
      thinkers: ["Edmund Husserl", "Eugen Fink", "Rudolf Bernet"],
      tags: ["meaning", "consciousness", "ontology", "idealism", "givenness"],
      connections: [
        { to: "intentionality", label: "is the source of" },
        { to: "transcendental-subjectivity", label: "is performed by" },
        { to: "passive-synthesis", label: "has a pre-active layer in" },
        { to: "noesis-noema", label: "is built up through" },
        { to: "lifeworld", label: "constitutes the ground of" },
        { to: "intersubjectivity", label: "extends to" },
        { to: "sedimentation", label: "leaves deposits through" },
      ],
      nuances: [
        { thinker: "Husserl — constitution and discovery", note: "Husserl insists that constitution is not creation: the table is not brought into being by my perceiving it, but its sense as a table — as a usable piece of furniture with a top and legs, belonging to a domestic context — is constituted through acts of experience. The world's existence is presupposed; its meaning is constituted. This is a subtle but crucial distinction: phenomenology is a science of meaning, not a denial of reality." },
        { thinker: "Fink — the world as constituted horizon", note: "Eugen Fink, Husserl's closest collaborator in his later years, developed the concept of constitution toward a more radical idealism: the world itself, as the total horizon of all possible experience, is constituted in and through transcendental subjectivity. This pushes Husserl's position in an idealist direction that many later phenomenologists (Heidegger, Merleau-Ponty) resist, but it follows consistently from Husserl's own transcendental turn." },
      ],
      x: 400, y: 480, color: "#e879f9", status: "consolidated",
    },

    // ── Temporal & Genetic ────────────────────────────────────────────────────

    {
      id: "living-present",
      term: "The Living Present",
      definition: "Lebendige Gegenwart — Husserl's late concept of the pulsing, self-renewing now from which all temporal experience flows and to which it returns. The living present is not a dimensionless instant but the very life of consciousness: the throbbing, self-streaming source that is always already both retaining its own just-past and reaching toward its own coming moment. Husserl returns to this concept obsessively in his late manuscripts, sensing that it is the most fundamental level of temporal constitution — prior to the retention-primal impression-protention structure, which is itself a product of the living present's self-differentiation. The living present has an almost contemplative quality in these late analyses: it is the point at which phenomenological reflection touches something that cannot be fully objectified, the very movement of experience as it happens.",
      thinkers: ["Edmund Husserl", "Klaus Held", "Evan Thompson"],
      tags: ["time", "consciousness", "source", "presence", "contemplation"],
      connections: [
        { to: "time-consciousness", label: "is the source of" },
        { to: "passive-synthesis", label: "is the most primordial" },
        { to: "intentionality", label: "is the living source of" },
        { to: "sedimentation", label: "is the contrast to" },
        { to: "transcendental-subjectivity", label: "is the most primordial form of" },
      ],
      nuances: [
        { thinker: "Husserl — the unpublished manuscripts", note: "In the manuscripts collected in Husserliana vol. X and beyond, Husserl pushes behind the retention-protention structure to ask about the living present that already has this structure. He finds himself at the limit of phenomenological reflection: the living present is what makes all reflection possible and therefore cannot be fully made into an object of reflection. This is the point at which Husserl's phenomenology most clearly approaches its own limits — and opens toward something like contemplative experience." },
        { thinker: "Thompson — mind in life", note: "Evan Thompson draws on Husserl's living present in his account of the relationship between life, consciousness, and time: the autopoietic self-maintenance of living systems has a temporal structure that is analogous to the living present — a self-renewing now that constitutes its own continuity through continuous self-differentiation. The living present is the phenomenological expression of what biology studies as self-organisation." },
      ],
      x: 580, y: 520, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "sedimentation",
      term: "Sedimentation",
      definition: "The process by which past acts of consciousness leave deposits that become the unquestioned ground of present experience — habits of perception, typifications, cultural meanings, and practical know-how that have settled into the natural attitude as invisible infrastructure. Sedimentation is not merely psychological habit but a phenomenological structure: the meaning-bestowals of past experience become the implicit pre-given through which new experience is received. A skilled reader does not laboriously decode letters and words; the earlier acts of learning to read have sedimented into a transparent competence. A native speaker does not construct their language; it has sedimented into the pre-given medium of their thought. Sedimentation is the condition of possibility for the fluency of everyday life — and the source of the unquestioned assumptions that the epoché must learn to bracket.",
      thinkers: ["Edmund Husserl", "Maurice Merleau-Ponty", "Pierre Bourdieu"],
      tags: ["habit", "history", "pre-reflective", "culture", "embodiment"],
      connections: [
        { to: "natural-attitude", label: "constitutes the invisible ground of" },
        { to: "passive-synthesis", label: "accumulates as" },
        { to: "constitution", label: "leaves deposits through" },
        { to: "time-consciousness", label: "accumulates through" },
        { to: "epoché", label: "is what the epoché must unsettle" },
        { to: "genetic-phenomenology", label: "is studied by" },
        { to: "lifeworld", label: "is the accumulated deposit in" },
      ],
      nuances: [
        { thinker: "Husserl — The Origin of Geometry", note: "In this late essay, Husserl analyses how geometric truths, originally discovered through specific acts of idealisation and intuition, have sedimented into a tradition that transmits them as ready-made results, increasingly detached from their experiential origins. This sedimentation is both enabling (it allows science to progress without re-discovering everything) and dangerous (it produces a science that has forgotten the living experience from which it arose — the crisis of European sciences)." },
        { thinker: "Bourdieu — habitus and sedimented history", note: "Bourdieu's concept of habitus — the system of durable dispositions acquired through early social experience — is a sociological concretisation of Husserlian sedimentation: the habitus is sedimented social history turned into nature, the deposit of past experiences that orients present perception and action without appearing as history at all. Bourdieu makes explicit what Husserl leaves implicit: sedimentation is not only cognitive but bodily, not only individual but social." },
      ],
      x: 220, y: 420, color: "#34d399", status: "consolidated",
    },

    {
      id: "genetic-phenomenology",
      term: "Genetic Phenomenology",
      definition: "The later development of Husserl's phenomenology that shifts from static description of intentional structures (what experience is) to genetic account of how those structures are constituted over time (how experience came to be as it is). Static phenomenology describes the essential features of a type of experience — perception, memory, imagination — as it is found at a given moment. Genetic phenomenology asks how the ego, its habits, and its world-horizon were constituted through the history of its experience — how sedimentation, passive synthesis, and active accomplishments have built up the experiential structures we inherit. This shift represents Husserl's most significant internal development and opens phenomenology toward developmental psychology, cultural history, and the question of embodiment in a way that static phenomenology could not.",
      thinkers: ["Edmund Husserl", "Anthony Steinbock", "Natalie Depraz"],
      tags: ["development", "history", "method", "time", "constitution"],
      connections: [
        { to: "sedimentation", label: "studies the accumulation of" },
        { to: "passive-synthesis", label: "traces the development of" },
        { to: "lifeworld", label: "accounts for the genesis of" },
        { to: "constitution", label: "asks how" },
        { to: "time-consciousness", label: "is grounded in" },
        { to: "intersubjectivity", label: "includes the genesis of" },
      ],
      nuances: [
        { thinker: "Husserl — from static to genetic", note: "The shift from static to genetic phenomenology is not a rejection of the earlier work but a deepening of it: static phenomenology establishes the essential structures; genetic phenomenology asks how those structures arose and how they develop. The two approaches are complementary — one describes the a priori, the other traces the genesis. Together they give a fuller picture of experience than either could provide alone." },
        { thinker: "Steinbock — generative phenomenology", note: "Anthony Steinbock extends genetic phenomenology into what he calls generative phenomenology: the study of how experiential structures are constituted not only in the history of an individual ego but across generations, in the transmission of culture, tradition, and intersubjective meaning. This opens Husserl's phenomenology toward the study of historical communities and their shared horizons — a dimension that neither static nor genetic phenomenology fully addresses." },
      ],
      x: 380, y: 560, color: "#a78bfa", status: "consolidated",
    },

    // ── Lived Dynamics ────────────────────────────────────────────────────────

    {
      id: "fulfilment-frustration",
      term: "Fulfilment & Frustration",
      definition: "The dynamic by which intentional acts are either confirmed by intuition or disappointed by it — the continuous micro-drama of experience in which expectations meet the world. When I reach for the cup and it is there, warm and solid in my hand, my perceptual intention is fulfilled: the anticipated content meets the actually given. When the cup is lighter than expected, or is not there at all, my intention is frustrated: the anticipated noema does not match what intuition provides. This dynamic operates at every level of experience — perceptual, emotional, cognitive, practical — and is the source of experience's inherent drama: things are never simply given but always arriving in relation to what was already anticipated. Fulfilment is not merely cognitive but bodily: the grip that meets resistance, the ear that hears the expected cadence, the reader whose prediction is confirmed or overturned.",
      thinkers: ["Edmund Husserl", "Leonard Meyer", "Drew Leder"],
      tags: ["perception", "expectation", "dynamism", "body", "knowledge"],
      connections: [
        { to: "intentionality", label: "dynamically enacts" },
        { to: "horizon", label: "generates the expectations that lead to" },
        { to: "evidence", label: "is achieved through" },
        { to: "time-consciousness", label: "unfolds through" },
        { to: "noesis-noema", label: "completes or disappoints" },
        { to: "kinesthesia", label: "is bodily enacted through" },
      ],
      nuances: [
        { thinker: "Husserl — Logical Investigations VI", note: "In the sixth Logical Investigation, Husserl develops his account of fulfilment in the context of knowledge: cognition is not a matter of representations corresponding to reality but of intentions being fulfilled in intuition. The empty intention (I think of Paris) is fulfilled when I actually perceive Paris: the meaning-intention and the intuitive content coincide. This account of knowledge as fulfilment is Husserl's deepest contribution to epistemology." },
        { thinker: "Meyer — musical expectation", note: "Leonard Meyer's account of musical meaning in 'Emotion and Meaning in Music' is a phenomenological analysis of fulfilment and frustration in the domain of sound: musical meaning arises from the interplay of expectations created by the musical style and their satisfaction, delay, or denial. Meyer's musicology is, without knowing it, an application of Husserlian intentional analysis to the temporal arts — and connects directly to the musicality network's cadence node." },
      ],
      x: 580, y: 460, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "kinesthesia",
      term: "Kinesthesia",
      definition: "The felt sense of one's own bodily movement — the proprioceptive, muscular awareness through which the body knows its own position and motion from within. For Husserl, kinesthesia is foundational to all spatial experience: it is the body's self-movement that gives space its orientations (here/there, near/far, up/down, left/right) and that makes possible the systematic exploration of objects from multiple perspectives. The spatial world is not given to a static perceiver but constituted through the kinesthetic system — the structured patterns of movement through which the body engages and explores its environment. Kinesthesia is not a sixth sense added to the five but the motor infrastructure of all sensation: every perceptual act is accompanied by, and in many cases enabled by, the body's actual or potential movement.",
      thinkers: ["Edmund Husserl", "Maurice Merleau-Ponty", "Maxine Sheets-Johnstone"],
      tags: ["body", "movement", "space", "perception", "embodiment"],
      connections: [
        { to: "passive-synthesis", label: "is anchored in" },
        { to: "fulfilment-frustration", label: "bodily enacts" },
        { to: "constitution", label: "is the motor basis of spatial" },
        { to: "intersubjectivity", label: "is shared in" },
        { to: "empathy", label: "has a motor basis in" },
      ],
      nuances: [
        { thinker: "Husserl — Thing and Space", note: "In his lectures on Thing and Space, Husserl analyses how the constitution of a spatial object requires the system of kinesthetic motivations: to perceive a thing as having sides, depth, and three-dimensionality requires that the body be capable of moving around it, of actually or potentially exploring it from different angles. Space is not given but constituted through the body's kinesthetic freedom — its capacity for oriented movement." },
        { thinker: "Sheets-Johnstone — the primacy of movement", note: "Maxine Sheets-Johnstone's philosophy of movement extends the Husserlian analysis: movement is not something the body does but what the body primordially is — the lived body is fundamentally a moving body, and cognition, perception, and self-awareness are all grounded in the qualitative experience of movement. This is kinesthesia understood as the very medium of lived experience rather than merely one sensory channel among others." },
      ],
      x: 180, y: 220, color: "#34d399", status: "consolidated",
    },

    // ── Intersubjectivity & Lifeworld ─────────────────────────────────────────

    {
      id: "empathy",
      term: "Empathy",
      definition: "Einfühlung — Husserl's term for the specific intentional act by which we constitute the other as another subject like ourselves: not a projection of our own experience onto an other body, nor an inference from behaviour to hidden inner states, but a non-primordial, analogical givenness in which the other's bodily behaviour is immediately perceived as the expression of a lived body like one's own. Empathy is Husserl's solution to the problem of other minds: the other is not known by analogy with oneself (as in classical analogical inference) but encountered in a specific intentional act that presents their experience as theirs rather than mine. The other's body is not an object among objects but an animate organism — a Leib rather than a Körper — whose comportment immediately solicits a bodily recognition rather than a cognitive inference.",
      thinkers: ["Edmund Husserl", "Edith Stein", "Dan Zahavi"],
      tags: ["other", "intersubjectivity", "recognition", "ethics", "body"],
      connections: [
        { to: "intersubjectivity", label: "is the foundational act of" },
        { to: "kinesthesia", label: "has a motor basis in" },
        { to: "constitution", label: "extends to" },
        { to: "lifeworld", label: "is constituted in the shared" },
        { to: "passive-synthesis", label: "has a pre-reflective dimension in" },
      ],
      nuances: [
        { thinker: "Husserl — Fifth Cartesian Meditation", note: "In the Fifth Meditation, Husserl attempts to show how the other ego is constituted within my sphere of ownness through a process of analogical apperception: the other's body, perceived as similar to mine in its structure and behaviour, is appresented as an animate organism — a body that, like mine, is lived from within. This is the most technically demanding passage in Husserl's published work, and also the most contested: many critics argue that he never successfully escapes the solipsism he sets out to overcome." },
        { thinker: "Stein — empathy as its own act-type", note: "Edith Stein's dissertation 'On the Problem of Empathy' argues more clearly than Husserl that empathy is a sui generis intentional act — irreducible to perception, imagination, or memory — through which another's experience is given as theirs. Stein distinguishes primordial experience (which is mine) from empathic experience (which is the other's, given to me as theirs): the distinction preserves the otherness of the other while accounting for the genuine givenness of their experience." },
      ],
      x: 580, y: 600, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "intersubjectivity",
      term: "Intersubjectivity",
      definition: "The constitution of a shared world through the mutual recognition and co-constitution of subjects — not merely the co-existence of separate individuals but the deeper structure through which a common world of meanings, objects, and norms is built up and maintained. For Husserl, intersubjectivity is not a secondary achievement (individuals first exist, then interact) but a structural feature of experience: the world is from the start given as a common world, as a world for everyone, not merely for me. The objectivity of scientific knowledge, the validity of cultural meanings, and the normativity of social life all depend on intersubjectivity as their condition of possibility. This makes intersubjectivity one of Husserl's deepest and most difficult problems: how can transcendental subjectivity, which seems to be irreducibly mine, give rise to a genuinely shared world?",
      thinkers: ["Edmund Husserl", "Alfred Schutz", "Dan Zahavi"],
      tags: ["other", "community", "world", "objectivity", "ethics"],
      connections: [
        { to: "empathy", label: "is grounded in" },
        { to: "lifeworld", label: "is the shared horizon of" },
        { to: "constitution", label: "extends to" },
        { to: "transcendental-subjectivity", label: "pluralises" },
        { to: "genetic-phenomenology", label: "includes the genesis of" },
        { to: "natural-attitude", label: "underlies the shared structure of" },
      ],
      nuances: [
        { thinker: "Husserl — the communalised lifeworld", note: "Husserl argues that the lifeworld is from the start communal — it is always already a shared world, structured by intersubjective practices, meanings, and norms that no individual constitutes alone. The objectivity of the physical world — its being there for everyone — is itself an intersubjective achievement: it is the world as constituted through the convergence of multiple perspectives, each supplementing and correcting the others." },
        { thinker: "Schutz — the structure of the social world", note: "Alfred Schutz translates Husserl's intersubjectivity into a phenomenological sociology: the social world is structured by typifications, reciprocal perspectives, and stocks of shared knowledge that make interaction possible. Schutz's key concept of the 'general thesis of the alter ego' — the taken-for-granted assumption that others experience the world much as I do — is a phenomenological analysis of the intersubjective infrastructure of the natural attitude." },
      ],
      x: 420, y: 160, color: "#e879f9", status: "consolidated",
    },

    {
      id: "lifeworld",
      term: "The Lifeworld",
      definition: "Lebenswelt — Husserl's late and most generative concept: the pre-theoretical, pre-scientific world of everyday experience that underlies and makes possible all scientific theorising, yet which modern science has increasingly forgotten and covered over. The lifeworld is the world as we live it before any scientific abstraction — the world of colours and textures, of meaningful places and relationships, of practical cares and bodily engagements. It is the ultimately self-evident ground to which all theoretical constructions must be returned if they are to regain their meaning. Husserl's diagnosis is that modern science has substituted its idealised mathematical constructions for the lifeworld from which they were abstracted, producing a crisis of meaning: science can tell us everything about nature as a system of mathematical relations but nothing about what any of it means for a human life.",
      thinkers: ["Edmund Husserl", "Maurice Merleau-Ponty", "Jürgen Habermas"],
      tags: ["everydayness", "science", "meaning", "crisis", "pre-theoretical"],
      connections: [
        { to: "natural-attitude", label: "is the lived form of" },
        { to: "epoché", label: "is returned to after" },
        { to: "intersubjectivity", label: "is the shared horizon of" },
        { to: "sedimentation", label: "is the accumulated deposit in" },
        { to: "crisis", label: "is forgotten in" },
        { to: "constitution", label: "constitutes the ground of" },
        { to: "horizon", label: "is the ultimate horizon of" },
        { to: "evidence", label: "is ultimately grounded in" },
      ],
      nuances: [
        { thinker: "Husserl — The Crisis of European Sciences", note: "Husserl's last major work diagnoses a crisis in the meaning of scientific rationality: Galileo's mathematisation of nature was a magnificent achievement, but it covered over the lifeworld from which its concepts were abstracted. The result is a science of nature without any contact with the world as humanly experienced — a science that can calculate everything and understand nothing in the humanly relevant sense. The recovery of the lifeworld is for Husserl the task of a renewed phenomenology." },
        { thinker: "Habermas — system and lifeworld", note: "Jürgen Habermas appropriates the lifeworld concept for critical theory, distinguishing the communicatively structured lifeworld (the intersubjective horizon of shared meanings and norms) from the system (the economy and the state, which operate through money and power rather than communicative understanding). The colonisation of the lifeworld by the system — the replacement of communicative action with strategic action — is Habermas's diagnosis of the pathologies of modernity." },
      ],
      x: 400, y: 140, color: "#e879f9", status: "consolidated",
    },

    {
      id: "crisis",
      term: "The Crisis of European Sciences",
      definition: "Husserl's late diagnosis of Western modernity's deepest problem: the sciences have become so absorbed in their technical methods and mathematical formalisations that they have lost contact with the lifeworld from which their concepts were originally abstracted, and with the human questions — of meaning, value, and existence — that motivated their development. The crisis is not a technical failure but a spiritual one: science answers every question except the ones that matter most to human beings living their lives. Husserl traces the origins of the crisis to Galileo's mathematisation of nature — the substitution of an idealised mathematical manifold for the qualitative, experienced world — and calls for a return to the lifeworld as the ground of meaning. The task is not to abandon science but to reconnect it to its experiential roots and recover its significance for human life.",
      thinkers: ["Edmund Husserl", "Hans Blumenberg", "Jan Patočka"],
      tags: ["modernity", "science", "meaning", "culture", "critique"],
      connections: [
        { to: "lifeworld", label: "is forgotten in" },
        { to: "sedimentation", label: "results from the" },
        { to: "natural-attitude", label: "pervades the scientific" },
        { to: "epoché", label: "is a response to" },
        { to: "transcendental-subjectivity", label: "must be recovered to address" },
      ],
      nuances: [
        { thinker: "Husserl — the teleology of reason", note: "Husserl's diagnosis is not merely critical but teleological: European culture has a telos — the infinite task of reason — that has been distorted but not abandoned by the crisis. The crisis calls not for the rejection of rationality but for its renewal on a phenomenological foundation: a rationality that remains in contact with the lifeworld and answers to the full range of human experience. This gives Husserl's late work a quasi-messianic dimension." },
        { thinker: "Patočka — the care for the soul", note: "Jan Patočka extends Husserl's diagnosis into a philosophy of history: the crisis of European sciences is a symptom of the loss of the care for the soul — the Socratic orientation toward the inner life as the ground of all genuine knowledge. Patočka sees in Husserl's phenomenology a recovery of this ancient orientation, updated for the conditions of modernity." },
      ],
      x: 600, y: 160, color: "#f87171", status: "consolidated",
    },

    {
      id: "transcendental-subjectivity",
      term: "Transcendental Subjectivity",
      definition: "The constituting subject that Husserl reaches after the full performance of the phenomenological reduction — not the personal ego of everyday life, not the empirical self studied by psychology, but the transcendental field of intentional constitution within which all objects, meanings, and even the empirical ego are given. Transcendental subjectivity is the ultimate subject of experience: the pure, anonymous consciousness that is the condition of possibility for any experience at all. It is not a thing in the world but the source of the world's sense — the dimension of experience that cannot itself be experienced as an object because it is the condition of all objectivity. Husserl's transcendental turn is his most contested move: Heidegger replaces transcendental subjectivity with Dasein (thrown, finite, historically situated), and Merleau-Ponty replaces it with the lived body, arguing that there is no experience prior to the embodied engagement with the world.",
      thinkers: ["Edmund Husserl", "Martin Heidegger", "Maurice Merleau-Ponty"],
      tags: ["transcendental", "consciousness", "subject", "constitution", "idealism"],
      connections: [
        { to: "epoché", label: "is revealed by" },
        { to: "constitution", label: "performs" },
        { to: "intersubjectivity", label: "is pluralised in" },
        { to: "living-present", label: "is the most primordial form of" },
        { to: "crisis", label: "must be recovered to address" },
        { to: "intentionality", label: "is the subject of" },
      ],
      nuances: [
        { thinker: "Husserl — the transcendental turn", note: "Husserl's move to transcendental phenomenology — in Ideas I and increasingly in his later work — represents a radicalisation of the phenomenological method: it is not enough to describe experience as a psychologist might; one must reach the transcendental dimension from which experience and world are constituted together. This move alienated many of his students (Heidegger, Merleau-Ponty, Sartre) who found the transcendental subject too abstract and ahistorical." },
        { thinker: "Heidegger and Merleau-Ponty — the critique", note: "Both Heidegger and Merleau-Ponty accept Husserl's discovery of intentionality while rejecting his transcendental solution. For Heidegger, transcendental subjectivity remains within the modern subject-object framework that phenomenology should overcome; Dasein is always already in the world, thrown and finite, not a constituting subject. For Merleau-Ponty, the lived body is the actual subject of experience, and any attempt to reach a pure transcendental consciousness behind the body is an abstraction that distorts rather than clarifies experience." },
      ],
      x: 420, y: 380, color: "#e879f9", status: "consolidated",
    },

  ],
};
