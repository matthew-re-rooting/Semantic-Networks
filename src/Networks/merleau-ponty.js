export const merleauPontyNetwork = {
  id: "merleau-ponty",
  label: "Merleau-Ponty",
  subtitle: "The Lived Body, Perception & the Flesh of the World",
  accent: "#2dd4bf",
  storageKey: "semantic-network-merleau-ponty",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "lived-body",
      term: "The Lived Body",
      definition: "The central concept of Merleau-Ponty's phenomenology — the body not as an object in the world (Körper, the body as a physical thing among things) but as the subject of experience, the living centre from which the world is perceived and engaged. The lived body (Leib) is the body I am rather than the body I have: it is not something I inhabit as a pilot inhabits a vessel but the very medium of my being-in-the-world. It perceives, moves, feels, desires, and knows in ways that are irreducible to either the purely physiological or the purely mental. Merleau-Ponty's most fundamental claim is that the tradition's division between subject and object, mind and body, inner and outer, has systematically obscured this primary reality: we are our bodies, and our bodies are always already in the world, engaged with things, other bodies, and the whole texture of lived experience before any reflection arises.",
      thinkers: ["Maurice Merleau-Ponty", "Edmund Husserl", "Simone de Beauvoir"],
      tags: ["body", "phenomenology", "subject", "ontology", "embodiment"],
      connections: [
        { to: "perception", label: "is the primary subject of" },
        { to: "motor-intentionality", label: "is oriented through" },
        { to: "habit-motor-schema", label: "acquires its competence through" },
        { to: "anonymous-body", label: "rests on" },
        { to: "prepersonal-existence", label: "is rooted in" },
        { to: "flesh", label: "is an instance of" },
        { to: "voice-mp", label: "expresses itself through" },
        { to: "style", label: "has its own" },
      ],
      x: 400, y: 300, color: "#2dd4bf", status: "consolidated",
    },

    // ── Core Perceptual ───────────────────────────────────────────────────────

    {
      id: "perception",
      term: "Perception",
      definition: "Not the passive reception of sense data but the body's active, skilled, and pre-reflective engagement with the world — a form of knowledge prior to cognition, rooted in the body's practical orientation toward its environment. For Merleau-Ponty, perception is the primary form of our contact with the world: it is not a mental event that processes information delivered by the senses but a bodily event in which a whole person is in contact with a whole world. The perceived world has a structure, a depth, and a meaning that is not imposed by the mind but encountered through the body's engagement with it. Perception always exceeds what can be made explicit: the perceived tree is richer than any description of it, the face more than any catalogue of features, because perception grasps the whole before any analysis into parts.",
      thinkers: ["Maurice Merleau-Ponty", "James Gibson", "Alva Noë"],
      tags: ["perception", "body", "world", "pre-reflective", "knowledge"],
      connections: [
        { to: "lived-body", label: "is the primary activity of" },
        { to: "motor-intentionality", label: "is grounded in" },
        { to: "phenomenal-field", label: "opens onto" },
        { to: "attention-mp", label: "is restructured by" },
        { to: "synesthesia", label: "is the intertwining of" },
        { to: "pregnancy", label: "is always already structured by" },
        { to: "depth", label: "always has" },
        { to: "solicitation", label: "is shaped by" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — Phenomenology of Perception", note: "Merleau-Ponty's great work opens with a double critique: of empiricism (which reduces perception to the reception of atomic sensations) and of intellectualism (which makes perception a construction of the constituting mind). Both distort the structure of actual perception: the empiricist misses its structured, meaningful character; the intellectualist misses its pre-reflective, bodily ground. What is needed is a return to the perceived world as it is lived, before either abstraction." },
        { thinker: "Gibson — ecological perception", note: "James Gibson's ecological approach to perception — developed independently — converges with Merleau-Ponty on several key points: perception is direct (not mediated by mental representations), relational (always a relation between organism and environment), and oriented toward affordances (the possibilities for action that the environment offers). Gibson's affordances are the ecological equivalent of what Merleau-Ponty calls solicitations: the world's invitations to the body's motor capacities." },
      ],
      x: 220, y: 180, color: "#2dd4bf", status: "consolidated",
    },

    {
      id: "motor-intentionality",
      term: "Motor Intentionality",
      definition: "The body's pre-reflective orientation toward the world through movement — an intentionality that is not the mind's directedness toward an object but the body's practical orientation toward its motor possibilities. Motor intentionality operates below the threshold of explicit intention: the dancer's body is directed toward the next movement before any conscious decision is made; the craftsperson's hand reaches for the tool before they have thought to reach. It is the body that intends, not the mind, and what it intends is not a propositional content but a practical engagement — a style of movement, a way of inhabiting a task. Motor intentionality is what makes skill possible: the expert's body is intentionally oriented toward the demands of the situation in a way that the novice's is not yet, and this orientation is the achievement of embodied learning rather than cognitive mastery.",
      thinkers: ["Maurice Merleau-Ponty", "Shaun Gallagher", "Maxine Sheets-Johnstone"],
      tags: ["movement", "intentionality", "skill", "body", "pre-reflective"],
      connections: [
        { to: "lived-body", label: "is the primary intentionality of" },
        { to: "perception", label: "grounds" },
        { to: "habit-motor-schema", label: "is organised by" },
        { to: "motility", label: "is felt from within as" },
        { to: "grip", label: "is expressed concretely through" },
        { to: "solicitation", label: "responds to" },
        { to: "gesture", label: "is the expressive form of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the motor project", note: "Merleau-Ponty describes motor intentionality as a motor project that is 'ahead of' the actual movement: the body is already oriented toward the goal before the movement begins, in a way that is not a mental representation of the goal but a bodily readiness toward it. The footballer who is in position before the ball arrives, the pianist whose fingers are already shaped for the next chord — these are expressions of motor intentionality that no cognitive model can fully account for." },
        { thinker: "Gallagher — body image and body schema", note: "Shaun Gallagher distinguishes body image (a conscious, sometimes mistaken representation of one's body) from body schema (the pre-reflective system of sensory-motor processes that organises posture and movement). Motor intentionality operates through the body schema: the schema is the organised intentional structure of the body's motor capacities, which can be updated through learning and disrupted by injury or disease." },
      ],
      x: 200, y: 340, color: "#2dd4bf", status: "consolidated",
    },

    {
      id: "habit-motor-schema",
      term: "Habit & Motor Schema",
      definition: "The way the body acquires skills and incorporates tools and environments into its practical competence — expanding its body-schema to include what was initially external. When a blind person learns to use a cane, the cane gradually ceases to be an object the hand grasps and becomes an extension of the body's perceptual reach: the tip of the cane is where the world is felt, not the handle. When a driver learns to drive, the car becomes an extension of their body-space: they feel the car's dimensions as their own, navigate tight spaces without calculating clearances. Habit, for Merleau-Ponty, is not mere repetition or mechanical automatism but a form of bodily knowledge — a way the body learns to inhabit a situation fluently, a sedimentation of motor experience into a new perceptual and motor capacity.",
      thinkers: ["Maurice Merleau-Ponty", "Pierre Bourdieu", "Tim Ingold"],
      tags: ["skill", "learning", "embodiment", "tool", "schema"],
      connections: [
        { to: "lived-body", label: "expands through" },
        { to: "motor-intentionality", label: "is organised by" },
        { to: "anonymous-body", label: "sediments into" },
        { to: "prepersonal-existence", label: "is continuous with" },
        { to: "motility", label: "is the felt quality of" },
        { to: "grip", label: "is acquired as" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the blind person's cane", note: "The cane example is one of the most vivid in all of Merleau-Ponty: for the expert user, the cane is not felt at the hand but at the tip. The body-schema has expanded to include the cane; the boundary of the body has been redrawn. This is not a metaphor for tool use but a phenomenological description of what actually happens when a tool is mastered: it becomes incorporated into the body's practical intentionality and ceases to be an object." },
        { thinker: "Bourdieu — habitus as embodied history", note: "Bourdieu's habitus is a sociological concretisation of Merleau-Ponty's motor schema: the durable, transposable dispositions that structure perception, thought, and action are themselves embodied — they are in the posture, the gait, the gesture, not merely in the mind. The habitus is social history turned into nature, sedimented into the body's motor schema as a second nature that feels entirely one's own." },
      ],
      x: 200, y: 480, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "phenomenal-field",
      term: "The Phenomenal Field",
      definition: "The structured perceptual world as it is lived — the world prior to the objective world of science, with its measurable distances, physical properties, and mathematical relations. The phenomenal field is not a subjective distortion of an objective reality but the primary form in which reality is given: it has its own structure (figure and ground, near and far, threatening and inviting), its own organisation (things appear as wholes before their parts), and its own meanings (the face is encountered as expressing before any feature is identified). Merleau-Ponty insists on the phenomenal field as a legitimate domain of inquiry distinct from both physiology (which studies the mechanism of perception) and psychology (which studies perception's cognitive processing): phenomenology describes what the phenomenal field is, in its own terms, before either reduction.",
      thinkers: ["Maurice Merleau-Ponty", "Gestalt psychologists", "Kurt Lewin"],
      tags: ["perception", "world", "structure", "pre-scientific", "lived"],
      connections: [
        { to: "perception", label: "is opened by" },
        { to: "depth", label: "always has" },
        { to: "pregnancy", label: "is always already organised by" },
        { to: "synesthesia", label: "is the intermodal unity of" },
        { to: "solicitation", label: "is structured as a field of" },
        { to: "attention-mp", label: "is restructured by" },
      ],
      nuances: [
        { thinker: "Gestalt psychology — the primacy of wholes", note: "Merleau-Ponty draws extensively on Gestalt psychology's discovery that perception is organised into figure-ground structures, that wholes are perceived before parts, and that the perceptual field has an intrinsic organisation that cannot be derived from the summation of atomic sensations. He radicalises this: the Gestalt psychologists discovered the structure of the phenomenal field empirically, but phenomenology can describe why this structure is necessary — because perception is always the body's practical engagement with a meaningful world." },
        { thinker: "Lewin — the life-space", note: "Kurt Lewin's concept of the life-space — the totality of facts that determine the behaviour of an individual at a given moment — converges with Merleau-Ponty's phenomenal field: both describe a perceptual-practical world that is neither purely objective nor purely subjective but the structured field within which a living being is situated and oriented. Lewin's valences (the positive and negative charges of objects in the life-space) are the psychological correlate of Merleau-Ponty's solicitations." },
      ],
      x: 580, y: 180, color: "#2dd4bf", status: "consolidated",
    },

    // ── Lived Dynamics ────────────────────────────────────────────────────────

    {
      id: "motility",
      term: "Motility",
      definition: "The lived experience of movement itself — not movement as a physicist describes it (displacement of a mass through space over time) but as it is felt from within: the swing of an arm, the weight of a step, the momentum of a turn, the gathering tension before a jump. Motility is the body's primary mode of being-in-the-world: we are not first static and then move; we are constitutively motile, always already in motion or poised for motion, oriented through our motor capacities toward the space around us. Merleau-Ponty argues that our spatial world is not given to a static perceiver and then traversed but is constituted through motility: near and far, up and down, here and there are motor distinctions before they are geometric ones. The body in movement is not executing a plan but enacting a style — a way of inhabiting space that is recognisably its own.",
      thinkers: ["Maurice Merleau-Ponty", "Maxine Sheets-Johnstone", "Thomas Fuchs"],
      tags: ["movement", "space", "body", "kinaesthesia", "style"],
      connections: [
        { to: "motor-intentionality", label: "is the felt dimension of" },
        { to: "habit-motor-schema", label: "is the felt quality of" },
        { to: "grip", label: "reaches its focus in" },
        { to: "prepersonal-existence", label: "is rooted in" },
        { to: "style", label: "expresses" },
        { to: "gesture", label: "becomes expressive as" },
      ],
      nuances: [
        { thinker: "Sheets-Johnstone — the primacy of movement", note: "Maxine Sheets-Johnstone argues that movement is not something the body does but what the body fundamentally is: the body is a moving body first and a sensing body second. Kinesthesia — the felt sense of one's own movement — is the most basic form of self-awareness, prior to any visual or tactile self-perception. This radicalises Merleau-Ponty's motility into an ontological claim: being is primarily kinetic, not static." },
        { thinker: "Fuchs — the body as lived history", note: "Thomas Fuchs develops the concept of the lived body as a temporal being: the body carries its history in its postures, its tensions, its habitual patterns of movement. Motility is not merely present-tense but laden with the past — the grief that has contracted the chest, the joy that has opened the gait, the anxiety that has shortened the step. The body moves its history through space." },
      ],
      x: 160, y: 420, color: "#34d399", status: "consolidated",
    },

    {
      id: "grip",
      term: "The Grip",
      definition: "The body's practical hold on the world — the way a skilled hand grips a tool, a climber reads a rockface through their fingertips, a musician feels the instrument as an extension of themselves. The grip is not a cognitive operation but a bodily achievement: the hand that grips already knows the object's weight, texture, and resistance before any explicit judgment is formed. It is a form of knowing through contact and resistance — the world pressing back against the body's reach in a way that discloses what is actually there. More broadly, the grip names the body's practical orientation toward a situation: to have a grip on things is to be in the mode of competent, absorbed engagement; to lose one's grip is to find oneself suddenly at a loss, the familiar world becoming strange and resistant. The grip is the bodily correlate of Heidegger's readiness-to-hand.",
      thinkers: ["Maurice Merleau-Ponty", "Matthew Crawford", "Mark Johnson"],
      tags: ["touch", "skill", "body", "knowledge", "contact"],
      connections: [
        { to: "motor-intentionality", label: "is expressed concretely through" },
        { to: "habit-motor-schema", label: "is acquired as" },
        { to: "motility", label: "reaches its focus in" },
        { to: "solicitation", label: "responds to the world's" },
        { to: "reversibility", label: "is the site of" },
        { to: "flesh", label: "is the bodily form of" },
      ],
      nuances: [
        { thinker: "Crawford — the resistance of things", note: "Matthew Crawford's philosophy of manual work gives the grip its richest phenomenological treatment: the skilled mechanic or craftsperson knows the material through the push-back it offers their hands. This resistance is not an obstacle to knowledge but its medium: it is through the grip's encounter with resistance that the world discloses its actual structure. The grip is where thought and matter meet most directly." },
        { thinker: "Johnson — the bodily basis of meaning", note: "Mark Johnson's account of image schemas — embodied patterns of experience that structure abstract thought — draws on the grip as one of the most fundamental: containment, force, balance, and path are all grounded in the body's practical engagement with the world. The grip is not merely a physical act but the prototype of a whole family of meaning-structures that extend from bodily experience into language and thought." },
      ],
      x: 160, y: 560, color: "#34d399", status: "consolidated",
    },

    {
      id: "solicitation",
      term: "Solicitation",
      definition: "The way the world calls forth bodily responses before any deliberate decision — the doorknob that solicits grasping, the step that solicits climbing, the face that solicits looking, the path that solicits walking. The world, for Merleau-Ponty, is not neutral material that the body then decides how to engage; it is a field of motor invitations and demands that address the body's practical capacities directly. Solicitations are perceived not as properties of objects but as calls to the body's motor possibilities: the perceived depth of a staircase is inseparable from the body's capacity to climb it; the graspable quality of a handle is perceived only by a body with hands that can grasp. Solicitation is thus the perceptual correlate of motor intentionality: the world appears structured by the body's practical possibilities, and those possibilities are called forth by the world's invitations.",
      thinkers: ["Maurice Merleau-Ponty", "James Gibson", "Hubert Dreyfus"],
      tags: ["perception", "world", "body", "invitation", "motor"],
      connections: [
        { to: "perception", label: "shapes" },
        { to: "phenomenal-field", label: "structures" },
        { to: "motor-intentionality", label: "calls forth" },
        { to: "grip", label: "invites" },
        { to: "attention-mp", label: "draws" },
        { to: "pregnancy", label: "is felt as" },
      ],
      nuances: [
        { thinker: "Gibson — affordances", note: "James Gibson's concept of affordances — the possibilities for action that the environment offers to a particular organism — is the ecological parallel to Merleau-Ponty's solicitations. Both describe a world that is not neutral but already organised by the organism's practical capacities: the cliff affords falling for the human but flying for the bird; the step solicits climbing for the adult but not the infant. The perceived world is always a practical world, structured by what a body with these capacities can do." },
        { thinker: "Dreyfus — absorbed coping", note: "Dreyfus uses the concept of solicitation to describe skilled, absorbed coping: the expert is not following rules or executing plans but responding to the situation's solicitations — the chess position that calls for an attack, the traffic that calls for braking, the student's expression that calls for a different explanation. Solicitation is the world's address to a body that is ready to receive it, and absorbed coping is the fluent response." },
      ],
      x: 560, y: 340, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "attention-mp",
      term: "Attention",
      definition: "For Merleau-Ponty, attention is not a searchlight of consciousness directed onto a pre-given world but a bodily reorientation that constitutes a new perceptual field — when we attend, the whole structure of experience reorganises itself. New figures emerge from ground; what was background becomes foreground; the object of attention becomes richer, more differentiated, more present. This is not merely a shift of focus but a transformation of the phenomenal field: the world itself changes when we attend to it differently. Attention is therefore a creative act rather than a receptive one — it does not merely reveal what was always there but brings forth a new organisation of the experienced world. This contrasts with both Weil's attention (which emphasises receptive self-emptying) and Husserl's (which emphasises the ego's focusing act): Merleau-Ponty's attention is a bodily, perceptual restructuring.",
      thinkers: ["Maurice Merleau-Ponty", "William James", "Francisco Varela"],
      tags: ["perception", "body", "restructuring", "field", "transformation"],
      connections: [
        { to: "perception", label: "restructures" },
        { to: "phenomenal-field", label: "reorganises" },
        { to: "solicitation", label: "is drawn by" },
        { to: "depth", label: "reveals new dimensions of" },
        { to: "synesthesia", label: "opens onto unexpected" },
        { to: "pregnancy", label: "allows to emerge" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — attention as constitution", note: "In the Phenomenology of Perception, Merleau-Ponty argues that attention does not merely illuminate what was already there: it constitutes a new perceptual field. Before I attend to the grain of the wood, the wood's surface is smooth and uniform; as I attend, grain emerges, texture becomes differentiated, depth appears. This is not because the wood changed but because attention reorganised the perceptual field, bringing forth a new figure-ground structure." },
        { thinker: "James — the stream of consciousness", note: "William James's account of attention as the taking possession by the mind of one of several simultaneously possible objects provides the psychological starting point from which Merleau-Ponty departs: where James sees attention as the mind's selective focus on pre-given data, Merleau-Ponty sees it as a bodily reorientation that constitutes new perceptual content. The difference is between attention as spotlight and attention as transformation." },
      ],
      x: 560, y: 440, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "synesthesia",
      term: "Synesthesia",
      definition: "The interpenetration of the senses — the colour of a sound, the weight of a texture, the brightness of a taste, the roughness of a voice. For Merleau-Ponty, synesthesia is not a neurological curiosity affecting a small number of people but evidence of the body's pre-objective sensory unity: before the senses are separated into distinct channels by reflective analysis, they form a single perceptual field that is simultaneously visual, tactile, auditory, and kinaesthetic. The infant does not first see and hear and then learn to coordinate these separate streams; the body is from the start a unified perceptual subject whose different sensory capacities are aspects of a single bodily engagement with the world. Synesthesia in its clinical form is simply a more vivid manifestation of what is always already the case: that the senses are not separate but intertwined.",
      thinkers: ["Maurice Merleau-Ponty", "Cytowic and Eagleman", "Wassily Kandinsky"],
      tags: ["perception", "senses", "body", "unity", "pre-reflective"],
      connections: [
        { to: "perception", label: "reveals the intertwining of" },
        { to: "phenomenal-field", label: "is the intermodal unity of" },
        { to: "flesh", label: "points toward the intertwining of" },
        { to: "attention-mp", label: "opens onto unexpected" },
        { to: "prepersonal-existence", label: "is rooted in" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the unity of the senses", note: "Merleau-Ponty argues that the perceived world is not a collection of sense data sorted by modality but a unified whole in which the senses resonate with each other: the roughness of sandpaper is simultaneously tactile and visual; the warmth of a voice is simultaneously auditory and thermal; the hardness of a surface is simultaneously visual and kinaesthetic. This unity is not constructed by the mind but lived by the body, whose pre-objective engagement with things is always already multi-modal." },
        { thinker: "Kandinsky — painting as synesthesia", note: "Kandinsky's theoretical writings on the spiritual in art explore the synesthetic relations between colour and sound: yellow is strident like a trumpet, blue is deep like a cello, red is warm like a drum. Whether or not one accepts Kandinsky's specific correlations, his work is evidence of the synesthetic texture of aesthetic experience — the way perceptual qualities bleed across sensory modalities in the lived encounter with art." },
      ],
      x: 580, y: 560, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "pregnancy",
      term: "Prégnance",
      definition: "A quality of perceptual fields that tends toward completion, coherence, and good form — the world's inherent tendency to organise itself into stable, meaningful configurations before the perceiver imposes any categories on it. Prégnance names the world's own directedness toward form: the half-heard melody that calls for its completion, the blurred shape that presses toward definition, the conversation that reaches for its resolution. Merleau-Ponty borrows the concept from Gestalt psychology but radicalises it: prégnance is not merely a property of visual fields but of the entire perceptual world — it is the way experience is always already oriented toward meaning, structure, and coherence, as if the world itself were reaching toward intelligibility. This is not the perceiver's imposition of form but the phenomenal field's own tendency.",
      thinkers: ["Maurice Merleau-Ponty", "Wolfgang Köhler", "Kurt Koffka"],
      tags: ["perception", "form", "tendency", "meaning", "gestalt"],
      connections: [
        { to: "perception", label: "always already structures" },
        { to: "phenomenal-field", label: "organises" },
        { to: "solicitation", label: "is felt as" },
        { to: "attention-mp", label: "allows to emerge" },
        { to: "chiasm", label: "points toward the world's own" },
        { to: "depth", label: "draws the perceiver toward" },
      ],
      nuances: [
        { thinker: "Gestalt — the law of Prägnanz", note: "The Gestalt psychologists' law of Prägnanz states that perception tends toward the simplest, most stable, most complete form available: the irregular shape is perceived as a circle, the broken line as continuous, the ambiguous figure as whichever interpretation is most coherent. Merleau-Ponty inherits this but goes further: prégnance is not merely a property of visual stimuli but of the lived world as such — things tend toward their own form, and perception is the body's response to this tendency." },
        { thinker: "The resonance with musicality", note: "Prégnance connects directly to the musicality network's account of cadence and rhythm: the musical phrase tends toward its resolution; the rhythm calls for its completion; the harmonic tension presses toward its release. What Merleau-Ponty describes perceptually, Goethe describes morphologically, and Husserl describes temporally (protention): the world is always already leaning forward toward its own next moment." },
      ],
      x: 420, y: 560, color: "#34d399", status: "consolidated",
    },

    {
      id: "depth",
      term: "Depth",
      definition: "The primary dimension of perceptual experience — not a third spatial dimension added to height and width, not a calculation from retinal disparity, but the way things appear at a distance, in a ground, with a background, as receding and approaching, as near and far. Depth is what gives the world its carnal richness: things are not flat images but solid presences encountered in a world that stretches away from the body in all directions. Merleau-Ponty argues that depth is not perceived by the objective body (which lacks any mechanism for directly sensing the third dimension) but by the lived body, whose motor capacities give space its orientation and whose practical engagement with things constitutes near and far as significant distances. Depth is also, in Merleau-Ponty's late work, the dimension of the invisible: what lies beneath the visible surface, the hidden lining of what appears.",
      thinkers: ["Maurice Merleau-Ponty", "Paul Cézanne", "Mark Johnson"],
      tags: ["space", "perception", "body", "distance", "visible"],
      connections: [
        { to: "perception", label: "is always structured by" },
        { to: "phenomenal-field", label: "gives" },
        { to: "attention-mp", label: "reveals new dimensions of" },
        { to: "pregnancy", label: "draws the perceiver toward" },
        { to: "visible-invisible", label: "opens toward" },
        { to: "flesh", label: "is the thickness of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — Cézanne's doubt", note: "In his essay on Cézanne, Merleau-Ponty describes how Cézanne's painting attempts to render the depth of perceived space — not the geometrically constructed depth of linear perspective but the lived depth of a world encountered by a body. Cézanne paints from the perspective of someone who is in the landscape rather than looking at it from outside: the trees lean into the painting, the mountain hovers, the table bulges — all because Cézanne is rendering depth as it is lived, not as it is measured." },
        { thinker: "The invisible depth of things", note: "In 'The Visible and the Invisible', Merleau-Ponty develops depth into an ontological concept: things have a depth that is never fully given, an invisible lining that makes the visible what it is. The colour of the apple is not exhausted by any particular view; the voice's timbre carries something that no analysis can capture; the face exceeds every description. Depth names this inexhaustibility of the real, its perpetual withdrawal behind every appearance." },
      ],
      x: 580, y: 240, color: "#60a5fa", status: "consolidated",
    },

    // ── The Anonymous & Pre-Personal ──────────────────────────────────────────

    {
      id: "anonymous-body",
      term: "The Anonymous Body",
      definition: "The body beneath personal identity — the layer of bodily existence that is shared, pre-personal, and functioning before the I takes it up as its own. The anonymous body breathes without deciding to breathe, catches a falling object before thinking to catch it, flinches from pain before any deliberate response, blinks at the sudden light. It is the body that we share with other human beings and, at a deeper level, with other organisms: a pre-individual stratum of life that underlies and supports the personal ego without being reducible to it. Merleau-Ponty insists that we never fully own our bodies: there is always an anonymous dimension of bodily life that runs on beneath personal experience, maintaining the vital functions, sustaining the perceptual field, enacting the habitual competences that the ego inherits rather than constitutes.",
      thinkers: ["Maurice Merleau-Ponty", "Thomas Fuchs", "Drew Leder"],
      tags: ["body", "anonymity", "pre-personal", "life", "shared"],
      connections: [
        { to: "lived-body", label: "underlies" },
        { to: "prepersonal-existence", label: "is continuous with" },
        { to: "habit-motor-schema", label: "is the site of sedimented" },
        { to: "flesh", label: "is the shared dimension of" },
        { to: "synesthesia", label: "is rooted in the" },
        { to: "intercorporeality", label: "is the ground of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the body as general subject", note: "Merleau-Ponty describes the anonymous body as a 'general subject of perception': not this particular person but a bodily subject that is shared across individual instances, a way of being-in-the-world that belongs to the human organism as such. This is not a mystical claim but a phenomenological one: the structure of my perception (figure-ground organisation, motor orientations, synesthetic unity) is shared with all other perceiving bodies, constituting a common bodily stratum beneath individual variation." },
        { thinker: "Leder — the absent body", note: "Drew Leder's 'The Absent Body' develops the anonymous body through the concept of bodily absence: the body is most fully present in experience precisely when it disappears — when it functions smoothly and anonymously, without demanding attention. Pain and dysfunction bring the body to the fore, into thematic awareness; skilled, absorbed action allows it to recede into the background as the anonymous ground of engagement. The anonymous body is the body at its most alive — doing its work invisibly." },
      ],
      x: 220, y: 560, color: "#2dd4bf", status: "consolidated",
    },

    {
      id: "prepersonal-existence",
      term: "Prepersonal Existence",
      definition: "The stratum of existence below the personal ego — a level of being where the body is continuous with its environment rather than separated from it, where the distinctions between self and world, inner and outer, subject and object have not yet been drawn. Prepersonal existence is the ground from which personal existence emerges and to which it always remains connected: when we are absorbed in a task, when we are moved by music, when we fall into deep sleep, we return to something close to this prepersonal stratum. It is not a primitive or deficient form of existence but the living root of all personal life — the anonymous, pre-reflective being-in-the-world that the personal ego inherits rather than constitutes. Illness, fatigue, and certain forms of absorption can temporarily dissolve the personal layer and restore something of this more diffuse, undifferentiated continuity with the world.",
      thinkers: ["Maurice Merleau-Ponty", "Eugene Minkowski", "Renaud Barbaras"],
      tags: ["pre-reflective", "body", "world", "continuity", "life"],
      connections: [
        { to: "lived-body", label: "is the root of" },
        { to: "anonymous-body", label: "is expressed in" },
        { to: "habit-motor-schema", label: "is continuous with" },
        { to: "motility", label: "is rooted in" },
        { to: "flesh", label: "is the ontological form of" },
        { to: "wild-being", label: "points toward" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the night of the world", note: "Merleau-Ponty describes prepersonal existence through the image of falling asleep: as consciousness ebbs, the personal layer dissolves and one sinks back into an undifferentiated continuity with the night — not into nothing but into a more diffuse, ambient form of being-in-the-world. The world does not vanish in sleep but becomes an enveloping milieu rather than a structured field of objects. Waking is the reconstitution of the personal layer from this prepersonal ground." },
        { thinker: "Minkowski — lived time and vitality", note: "Eugene Minkowski's phenomenological psychiatry analyses prepersonal existence through the concept of vital contact with reality: the schizophrenic patient has lost not their cognitive capacities but their pre-reflective, bodily attunement to the flow of time and the vital resonance with the world that is the ground of all personal engagement. Prepersonal existence is what mental illness most directly disrupts — the anonymous, living connection with the world that precedes all thought." },
      ],
      x: 160, y: 300, color: "#a78bfa", status: "consolidated",
    },

    // ── Expressive & Social ───────────────────────────────────────────────────

    {
      id: "style",
      term: "Style",
      definition: "The recognisable way in which a body, a person, an artwork, or a historical period inhabits the world — the signature of embodied existence that persists across all its particular expressions. Style is not a property added to behaviour but the manner of behaviour itself: the way this particular person walks, speaks, reaches, hesitates, laughs — irreducibly theirs, recognisable before any feature is identified, prior to any interpretation. For Merleau-Ponty, style is evidence of the body's expressive unity: the same person who paints also speaks and moves in a way that is recognisably theirs, because style is the expression of a whole embodied way of being-in-the-world rather than a set of acquired techniques. Artworks have style in the same sense: Cézanne's paintings are recognisably Cézanne's because they express a particular bodily engagement with the visible world, a particular way of meeting the world's solicitations.",
      thinkers: ["Maurice Merleau-Ponty", "Hans-Georg Gadamer", "Richard Shusterman"],
      tags: ["expression", "body", "aesthetics", "identity", "singularity"],
      connections: [
        { to: "lived-body", label: "has its own" },
        { to: "motility", label: "expresses" },
        { to: "gesture", label: "is expressed through" },
        { to: "voice-mp", label: "is carried by" },
        { to: "intercorporeality", label: "is recognised across bodies in" },
        { to: "wild-being", label: "is the personal expression of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — indirect language and the voices of silence", note: "In his essays on language and painting, Merleau-Ponty develops style as the key concept: every genuine artist has a style that is not a manner but a vision — a particular way of making the world visible that is inseparable from their bodily engagement with it. Style is not chosen but acquired: it is the sedimentation of a whole bodily history into a recognisable way of responding to the world's solicitations." },
        { thinker: "Gadamer — style and historical understanding", note: "Gadamer extends the concept of style into historical understanding: historical periods and cultural traditions have a style — a particular way of inhabiting the world — that can be recognised and entered into through hermeneutic understanding. To understand a past culture is not to decode its explicit meanings but to catch something of its style: the particular way it moved, felt, and saw." },
      ],
      x: 560, y: 160, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "gesture",
      term: "Gesture",
      definition: "Meaning expressed through bodily movement — communication that does not pass through the medium of language but is directly readable in the movement itself. The angry gesture does not symbolise anger; it is anger, finding its bodily expression. The dancer's movement does not represent something else but is itself the meaning. Gesture is the primary form of expression for Merleau-Ponty: it shows how meaning is bodily before it is linguistic, how understanding another person is primarily a matter of bodily resonance rather than cognitive inference. To understand a gesture is not to interpret a sign but to catch its meaning directly, in the way one body reads another — not as a code to be decoded but as a presence to be received.",
      thinkers: ["Maurice Merleau-Ponty", "David McNeill", "Maxine Sheets-Johnstone"],
      tags: ["expression", "body", "language", "movement", "meaning"],
      connections: [
        { to: "motor-intentionality", label: "is the expressive form of" },
        { to: "motility", label: "becomes expressive as" },
        { to: "style", label: "is expressed through" },
        { to: "voice-mp", label: "is continuous with" },
        { to: "intercorporeality", label: "is received through" },
        { to: "lived-body", label: "is the primary language of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the emotional gesture", note: "Merleau-Ponty argues that we understand the emotional gestures of others — the clenched fist of anger, the open arms of welcome, the contracted face of pain — not by inference from visible movement to hidden inner state but by direct bodily resonance: our own body catches the meaning of the gesture as a possible bodily expression, and we understand it as such. This is the basis of all social understanding: bodies reading bodies, prior to any theory of mind." },
        { thinker: "McNeill — gesture and thought", note: "David McNeill's research on the relationship between gesture and speech shows that gesture is not an accompaniment to language but constitutive of thought itself: speakers gesture as they think, and their gestures express aspects of meaning that their words do not. This empirical work supports Merleau-Ponty's philosophical claim that bodily expression and linguistic expression are aspects of a single communicative act rooted in the lived body." },
      ],
      x: 400, y: 480, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "voice-mp",
      term: "Voice",
      definition: "The body's most intimate form of expression — the place where interiority becomes exterior without ceasing to be interior. The voice is not merely a vehicle for conveying pre-formed thoughts; it is the very medium in which thought takes shape, resonating with the body's emotional and perceptual life in a way that no other form of expression does. For Merleau-Ponty, the voice is evidence of the body's expressive unity: the same living body that perceives, moves, and feels also speaks, and the voice carries the trace of all these dimensions — its timbre is the body's character, its rhythm is the body's time, its hesitations and urgencies are the body's emotional life made audible. The voice is also the primary form of intersubjective contact: to hear another's voice is to be touched by their bodily presence in a way that reading their words is not.",
      thinkers: ["Maurice Merleau-Ponty", "Adriana Cavarero", "Don Ihde"],
      tags: ["expression", "body", "language", "intersubjectivity", "presence"],
      connections: [
        { to: "lived-body", label: "is expressed through" },
        { to: "gesture", label: "is continuous with" },
        { to: "style", label: "carries" },
        { to: "intercorporeality", label: "reaches the other through" },
        { to: "flesh", label: "vibrates in" },
        { to: "anonymous-body", label: "resonates from" },
      ],
      nuances: [
        { thinker: "Cavarero — vocal uniqueness", note: "Adriana Cavarero's philosophy of the voice extends Merleau-Ponty's account into a politics of embodied singularity: the voice is the most uniquely personal expression of the body, irreducibly this person and no other. The voice's timbre carries the trace of this particular life — its history, its affects, its way of inhabiting language. Cavarero argues that Western philosophy has systematically privileged the semantic content of speech (what is said) over the vocal quality (who says it), and that recovering the voice means recovering the embodied singularity of the speaking subject." },
        { thinker: "Ihde — listening and voice", note: "Don Ihde's phenomenology of listening in 'Listening and Voice' develops the acoustic dimensions of lived experience: the voice is not merely sound but a form of presence, and listening to a voice is a way of being touched by another's bodily existence. Ihde extends Merleau-Ponty's visual primacy into a richer multimodal phenomenology in which listening has its own irreducible structure." },
      ],
      x: 580, y: 480, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "intercorporeality",
      term: "Intercorporeality",
      definition: "The way bodies resonate with and inhabit each other's spaces — the bodily ground of all social life, prior to any cognitive theory of other minds. Intercorporeality is not the inferential recognition of another person as a minded being like myself but a direct, pre-reflective bodily resonance: I catch the other's movement in my own motor system, their pain contracts something in me, their joy opens something, before any interpretation occurs. The mother and infant are the paradigm: the infant does not infer the mother's emotional state but lives it immediately in a shared bodily space. Intercorporeality is the flesh's social dimension — the way bodies are not isolated perceptual subjects but porous, mutually constituting presences that are always already in each other's bodily space.",
      thinkers: ["Maurice Merleau-Ponty", "Vittorio Gallese", "Thomas Fuchs"],
      tags: ["social", "body", "empathy", "resonance", "intersubjectivity"],
      connections: [
        { to: "anonymous-body", label: "is grounded in" },
        { to: "gesture", label: "is received through" },
        { to: "voice-mp", label: "reaches the other through" },
        { to: "style", label: "is recognised across bodies in" },
        { to: "flesh", label: "is the social dimension of" },
        { to: "reversibility", label: "is grounded in" },
      ],
      nuances: [
        { thinker: "Gallese — mirror neurons and resonance", note: "Vittorio Gallese's neuroscientific work on mirror neurons — which fire both when an action is performed and when it is observed — provides an empirical correlate for Merleau-Ponty's intercorporeality: the brain does not merely register another's action but re-enacts it in the motor system of the observer. Gallese calls this 'embodied simulation' — a pre-reflective, bodily resonance that underlies all social cognition. Whether or not the mirror neuron story is exactly right, it converges on Merleau-Ponty's phenomenological insight." },
        { thinker: "Fuchs — the intercorporeal field", note: "Thomas Fuchs develops the concept of the intercorporeal field: the shared bodily space that forms between people in interaction, structured by mutual solicitations, resonances, and rhythmic synchronisations. Couples who have lived together for decades develop a bodily attunement that is not cognitive but kinaesthetic: their movements anticipate each other, their rhythms synchronise, their emotional states resonate directly. This is intercorporeality as a lived social reality." },
      ],
      x: 400, y: 160, color: "#2dd4bf", status: "consolidated",
    },

    // ── Late Ontology ─────────────────────────────────────────────────────────

    {
      id: "flesh",
      term: "The Flesh",
      definition: "La Chair — Merleau-Ponty's most original and most difficult concept: flesh is not matter, not mind, not the body as object, not the soul as subject, but the reversible fabric from which both perceiver and perceived are cut. The hand that touches is also touchable; the eye that sees is also visible; the voice that speaks is also heard. This reversibility — the fact that the sensing body is always also sensible — means that there is no clean separation between subject and world: both are instances of the same flesh, the same element of being. Flesh is Merleau-Ponty's answer to the mind-body problem and to the subject-object dualism of the entire modern tradition: neither side is prior, because both are expressions of a more fundamental being that is neither purely active nor purely passive, neither purely inner nor purely outer, but both at once — the flesh of the world.",
      thinkers: ["Maurice Merleau-Ponty", "Renaud Barbaras", "Emmanuel Levinas"],
      tags: ["ontology", "body", "world", "reversibility", "late-merleau-ponty"],
      connections: [
        { to: "lived-body", label: "is an instance of" },
        { to: "chiasm", label: "has the structure of" },
        { to: "reversibility", label: "is constituted by" },
        { to: "wild-being", label: "is the ontological medium of" },
        { to: "depth", label: "is the thickness of" },
        { to: "intercorporeality", label: "is the social dimension of" },
        { to: "anonymous-body", label: "is the shared dimension of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — The Visible and the Invisible", note: "In his unfinished last work, Merleau-Ponty develops flesh as the fundamental ontological concept: it is the element — in the sense of water, air, earth — within which seeing and the visible, touching and the tangible, are carved out as two sides of the same fold. The flesh is not a substance but a style of being: a way of existing that is always both active and passive, always both self and world, because it is the very medium in which the distinction between self and world is drawn." },
        { thinker: "Barbaras — desire and the living", note: "Renaud Barbaras extends flesh into a philosophy of life: living beings are characterised by a constitutive incompleteness, a desire or lack that moves them toward a world from which they are never quite separate. Flesh, for Barbaras, names the ontological form of this desire: the living body's belonging to a world that it reaches toward and from which it is constituted. This gives Merleau-Ponty's concept an existential and even cosmological dimension." },
      ],
      x: 220, y: 440, color: "#2dd4bf", status: "consolidated",
    },

    {
      id: "reversibility",
      term: "Reversibility",
      definition: "The structural feature of embodied existence in which sensing and sensed, touching and touched, seeing and visible are aspects of a single event rather than two separate sides. When my left hand touches my right, I cannot say cleanly which is the toucher and which the touched: the roles flicker, the boundary wavers. This is not a perceptual illusion but a phenomenological truth — the body is always both subject and object, never purely one or the other. Reversibility is what Merleau-Ponty means by the flesh's intertwining: it is not that subject and object somehow merge but that they are carved from the same element, always tending toward each other, always on the verge of exchange. The reversibility of touch is the most vivid, but it extends to all the senses: the eye that sees is visible, the voice that speaks is heard, the body that perceives is perceived.",
      thinkers: ["Maurice Merleau-Ponty", "Henri Maldiney", "Renaud Barbaras"],
      tags: ["body", "touching", "seeing", "ontology", "flesh"],
      connections: [
        { to: "flesh", label: "is the constitutive structure of" },
        { to: "chiasm", label: "is the crossing that produces" },
        { to: "grip", label: "is the site of" },
        { to: "intercorporeality", label: "is grounded in" },
        { to: "lived-body", label: "is the mode of being of" },
        { to: "synesthesia", label: "is a form of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the two hands touching", note: "The two-hands-touching example is Merleau-Ponty's most concentrated phenomenological demonstration: when my left hand touches my right, the right hand is both an object felt by the left and a subject that feels the left. Neither role is primary; both are real. The body is the site where the distinction between subject and object is perpetually almost-drawn and perpetually not-quite-achieved. This oscillation is not a deficiency but the very structure of embodied existence." },
        { thinker: "Maldiney — the flesh of the world", note: "Henri Maldiney extends reversibility into aesthetics: the work of art is the site where the reversibility of flesh is most fully enacted — the painting is both made by the hand and makes the eye, both expresses the artist's body and constitutes a perceptual world. To encounter a great painting is to be touched by it as it touches the world: the flesh of the work and the flesh of the viewer enter into a reversible exchange." },
      ],
      x: 160, y: 180, color: "#f87171", status: "consolidated",
    },

    {
      id: "chiasm",
      term: "Chiasm",
      definition: "The crossing or intertwining structure — named after the Greek letter chi (χ) and the anatomical crossing of the optic nerves — that characterises the flesh and all its relations. The chiasm is the figure of reversibility: two elements that cross and intertwine without merging, each folding back onto the other in a way that makes their separation impossible without losing the structure altogether. In Merleau-Ponty's late ontology, the chiasm names the fundamental structure of being: seeing and the visible, touching and the tangible, self and world are chiasmically intertwined — neither prior to the other, each constituted through its crossing with the other. The chiasm is not a synthesis (which would produce a third thing) but an intertwining that preserves the distinction between the two sides while making them inseparable.",
      thinkers: ["Maurice Merleau-Ponty", "Jacques Derrida", "Renaud Barbaras"],
      tags: ["ontology", "crossing", "structure", "flesh", "late-merleau-ponty"],
      connections: [
        { to: "flesh", label: "is the structure of" },
        { to: "reversibility", label: "produces" },
        { to: "visible-invisible", label: "is the crossing of" },
        { to: "depth", label: "is the spatial form of" },
        { to: "wild-being", label: "is the ontological structure of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the fold of being", note: "Merleau-Ponty describes the chiasm as a fold of being: being folds back upon itself, and at the fold, two sides appear — seer and seen, toucher and touched, self and world. These sides are not two things that happen to be related; they are two aspects of a single fold, each constituted through the fold itself. The chiasm is therefore the fundamental ontological structure: not substance, not subject, not object, but the event of folding that produces both." },
        { thinker: "Derrida — the chiasm and difference", note: "Derrida's concept of différance — the structure of difference and deferral that underlies all presence — has significant structural parallels with Merleau-Ponty's chiasm: both name a structure that is neither purely active nor purely passive, neither pure identity nor pure difference, but a crossing that perpetually produces both without settling into either. The chiasm and différance converge on the same insight about the instability of any clean boundary between self and other, presence and absence." },
      ],
      x: 360, y: 400, color: "#e879f9", status: "consolidated",
    },

    {
      id: "visible-invisible",
      term: "The Visible and the Invisible",
      definition: "Merleau-Ponty's late ontological distinction between what appears and the depth from which it appears — the invisible not as the opposite of the visible but as its lining, its hidden underside, the inexhaustible reserve from which the visible is drawn. The invisible is not another realm but the depth dimension of this one: the back of the seen object, the absence that makes presence possible, the silence that makes sound intelligible, the body's own invisibility to itself (I cannot see my own seeing). The visible and invisible are chiasmically intertwined: each is constituted through its relation to the other, and the distinction between them is never stable. This is Merleau-Ponty's most radical contribution to ontology: being is not simply presence but a presence that is always also withdrawal, an appearing that is always also concealment.",
      thinkers: ["Maurice Merleau-Ponty", "Claude Lefort", "Renaud Barbaras"],
      tags: ["ontology", "perception", "being", "absence", "late-merleau-ponty"],
      connections: [
        { to: "chiasm", label: "is the crossing of" },
        { to: "flesh", label: "is the ontological medium of" },
        { to: "depth", label: "has its spatial form in" },
        { to: "wild-being", label: "is what" },
        { to: "perception", label: "is always pointing toward" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the unfinished work", note: "'The Visible and the Invisible' was left unfinished at Merleau-Ponty's death in 1961, accompanied by extensive working notes that show the work in progress. The incompleteness is philosophically significant: the ontology of flesh, chiasm, and the invisible is not a completed system but a gesture toward a way of thinking that cannot be fully articulated without falsifying itself. The unfinished character of the late work is itself an expression of the invisible — the depth that always exceeds what can be shown." },
        { thinker: "Lefort — the political invisible", note: "Claude Lefort, Merleau-Ponty's student and collaborator, extends the visible-invisible distinction into political philosophy: in democratic society, the site of power is an empty place — visible only in its effects, never fully occupied, always in withdrawal. This is the political form of Merleau-Ponty's ontological insight: the invisible is not nothing but the condition of possibility for every visible arrangement of power." },
      ],
      x: 560, y: 600, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "wild-being",
      term: "Wild Being",
      definition: "Être sauvage — Merleau-Ponty's late concept of a pre-reflective, pre-conceptual level of being from which both subjectivity and world emerge, prior to any division into subject and object, perceiver and perceived, self and other. Wild being is not chaos but a different kind of order: the order of the flesh before it has been organised by reflection, language, or conceptual thought. It is the brute or raw being that underlies all our cultural and intellectual elaborations — the being that Cézanne's painting touches, that poetry approaches, that phenomenology attempts to describe without domesticating. Wild being is what Merleau-Ponty means when he says that the flesh is not a fact but an element: it is the ontological medium within which both the human and the non-human, both the cultural and the natural, are carved out as temporary and revisable distinctions.",
      thinkers: ["Maurice Merleau-Ponty", "Renaud Barbaras", "Ted Toadvine"],
      tags: ["ontology", "being", "nature", "pre-reflective", "late-merleau-ponty"],
      connections: [
        { to: "flesh", label: "is expressed in" },
        { to: "chiasm", label: "has the structure of" },
        { to: "visible-invisible", label: "is what" },
        { to: "prepersonal-existence", label: "is approached through" },
        { to: "style", label: "is the personal expression of" },
        { to: "anonymous-body", label: "is the bodily form of" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — brute or wild being", note: "In his working notes, Merleau-Ponty contrasts 'wild' or 'brute' being with the cultivated being of reflection and concept: wild being is what remains when all our frameworks are stripped away, not as a primitive residue but as the inexhaustible ground from which all our frameworks are drawn and to which they return. Philosophy's task, for the late Merleau-Ponty, is to stay as close to this wild ground as language allows — to think in a way that does not domesticate what it touches." },
        { thinker: "Toadvine — Merleau-Ponty's philosophy of nature", note: "Ted Toadvine's work on Merleau-Ponty's philosophy of nature shows how wild being connects to the broader tradition of thinking nature as a productive, self-organising power (Naturphilosophie, Bergson, Whitehead): wild being is Merleau-Ponty's name for nature understood not as an object of science but as the inexhaustible generative ground from which both perceiving subjects and perceived worlds emerge. This gives his late ontology an ecological and cosmological dimension that the early phenomenology of perception lacked." },
      ],
      x: 220, y: 220, color: "#34d399", status: "consolidated",
    },

  ],
};
