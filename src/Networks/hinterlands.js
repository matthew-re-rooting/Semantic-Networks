export const hinterlandsNetwork = {
  id: "hinterlands",
  label: "Phenomenology of the Hinterlands",
  subtitle: "Landscape, Enchantment & the Edges of the Known World",
  accent: "#4ade80",
  storageKey: "semantic-network-hinterlands",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "hinterlands-node",
      term: "Hinterlands",
      definition: "The territory beyond the known — the back-country of experience, the places that sit behind and beyond the settled and legible world. Hinterlands is not a geographical category but a phenomenological and political one: it names the zone where the familiar starts to become strange, where the dominant systems lose their grip, where the maps run out and something else begins. The word carries its original geographical resonance (the territory behind a port or frontier, the land that feeds and sustains the visible centre but remains unseen from it) while opening onto a broader figure: the hinterlands of knowledge, of perception, of social life, of the self. To be in the hinterlands is to be neither entirely lost nor entirely found, neither at home nor in exile — but in the productive, unsettling, generative space between. This is a space that holds simultaneously the uncanny and the enchanted, the threatening and the freeing, the mythic and the mundane; and it is increasingly the space in which the most vital contemporary movements — regenerative, contemplative, pluriversal — are finding themselves.",
      thinkers: ["Susan Leigh Star", "John Law", "Anna Tsing", "Robert Macfarlane"],
      tags: ["landscape", "threshold", "phenomenology", "edges", "knowledge", "STS"],
      connections: [
        { to: "landscape", label: "is experienced as" },
        { to: "the-uncanny", label: "is characterised by" },
        { to: "dwelling-limits", label: "exceeds" },
        { to: "sts-hinterlands", label: "has a theoretical formulation in" },
        { to: "regenerative-hinterlands", label: "is being inhabited as" },
        { to: "creatures-of-the-hinterlands", label: "is peopled by" },
        { to: "threshold", label: "is constituted by" },
        { to: "enchantment", label: "is alive with" },
      ],
      x: 400, y: 300, color: "#4ade80", status: "consolidated",
    },

    // ── Phenomenological Ground ───────────────────────────────────────────────

    {
      id: "landscape",
      term: "Landscape",
      definition: "Not backdrop or scenery but a living field of forces, presences, and absences that constitutes and sometimes overwhelms the human subject within it. Landscape is the totality of known places — the world as it is known to those who dwell within it, who inhabit its places and journey along its paths — but also a penumbra that is only glimpsed or suspected: defined by the negative space of paths not taken, places avoided, and areas that remain permanently inaccessible. Critically, landscape is not merely what supports belonging and wisdom: it is also the site of threat, uncertainty, and the uncanny. Drawing on fieldwork in the Buddhist valley of Zangskar in the western Himalaya, anthropologist Samuel Maoz demonstrates that local stories of spirit encounters reveal a landscape shaped as much by doubt and the unknown as by knowledge and connection. The landscape opens onto hidden places, spirit villages, and territories that cannot be mapped — and it is this inexhaustible depth of the unknown that gives landscape its phenomenological density. To inhabit a landscape is always to inhabit more than one knows.",
      thinkers: ["Tim Ingold", "Edward Casey", "Keith Basso", "Samuel Maoz"],
      tags: ["place", "dwelling", "perception", "phenomenology", "ecology"],
      connections: [
        { to: "hinterlands-node", label: "is the lived form of" },
        { to: "the-uncanny", label: "can become" },
        { to: "dwelling-limits", label: "exceeds the ideal of" },
        { to: "the-hidden", label: "is always bordered by" },
        { to: "animate-landscape", label: "at its most alive becomes" },
        { to: "entanglement", label: "constitutes subjects through" },
        { to: "trail", label: "is traversed through" },
      ],
      nuances: [
        { thinker: "Ingold — the living landscape", note: "Tim Ingold defines landscape as the world as known to those who dwell therein — not a surface to be looked at but a medium to be moved through, attended to, and known through practice over time. The landscape is constituted through wayfaring: the paths people walk, the weather they endure, the materials they work with. It is always becoming rather than simply being, shaped by the movements of all its inhabitants." },
        { thinker: "Casey — getting back into place", note: "Edward Casey's phenomenology of place argues that place is not a container in which experience occurs but the very medium of experience — we are always already in a place, and our being is shaped by the particular character of the places we inhabit. Places have their own physiognomy, their own way of calling forth particular moods and modes of being. To be displaced is not merely to be elsewhere but to be existentially unsettled." },
        { thinker: "Maoz — the uncanny landscape", note: "Drawing on Zangskari Buddhist communities, Maoz argues that anthropological approaches to landscape have over-emphasised knowledge, wisdom, and belonging, obscuring the threatening, uncertain, and uncanny dimensions of living within a landscape. In Zangskar, the landscape is understood to contain hidden places, spirit villages, and forces that exceed human perception — and the appropriate response is not open engagement but careful management, avoidance, and the construction of protective architecture." },
      ],
      x: 200, y: 160, color: "#4ade80", status: "consolidated",
    },

    {
      id: "the-uncanny",
      term: "The Uncanny",
      definition: "The unsettling mingling of the familiar and the strange — the moment when a known place or person reveals an alien aspect, when the home becomes unhomely, when the ordinary world discloses a depth that was always there but not seen. Freud's unheimlich names this ambivalence precisely: un-heimlich, un-homely, the heimlich (the familiar, the homely, the domestic) turned inside out to reveal what it conceals. The standard reading treats the uncanny as a consequence of alienation — the loss of dwelling, the severance from the land. But the Zangskar material reverses this: in the Himalayan valleys, the uncanny is not a symptom of disconnection but of immersion — it emerges precisely because people are too deeply entangled with a landscape they can never fully know. The hidden people look exactly like neighbours; the spirit roads run through the village; the familiar wall becomes dangerous after dark. The uncanny is not what lies outside the known world but what the known world conceals within itself.",
      thinkers: ["Sigmund Freud", "Martin Heidegger", "Samuel Maoz", "Nicolas Royle"],
      tags: ["uncanny", "familiar", "strange", "landscape", "phenomenology"],
      connections: [
        { to: "hinterlands-node", label: "characterises" },
        { to: "landscape", label: "is a dimension of" },
        { to: "the-hidden", label: "arises from" },
        { to: "dwelling-limits", label: "is revealed by" },
        { to: "panic", label: "can erupt into" },
        { to: "black-forest", label: "is concentrated in" },
        { to: "enchantment", label: "is the other face of" },
      ],
      nuances: [
        { thinker: "Freud — the uncanny as return", note: "Freud's analysis identifies two sources of the uncanny: the return of repressed material (archaic beliefs, infantile anxieties) and the compulsion to repeat. In the landscape context, the uncanny is less a return of the repressed than a persistent presence: the forces that make places uncanny have never been absent, only temporarily overlooked. They are structural features of inhabiting a world one can never fully know." },
        { thinker: "Heidegger — Unheimlichkeit as homelessness", note: "For Heidegger, Unheimlichkeit (uncanniness or homelessness) is the fundamental mood of anxiety: the familiar world withdrawing to reveal the groundlessness of existence. The uncanny is not an occasional disturbance but the permanent underside of the ordinary — which is why, Heidegger argues, we are always fleeing into the they-self, into das Man's comfortable interpretations, to escape the unsettling truth of our existence. Dwelling is the attempt to create a home against this structural homelessness." },
        { thinker: "Maoz — uncanny from within", note: "Maoz's crucial revision: the uncanny in Zangskar emerges not from alienation but from immersion. It is precisely because people are entangled with their landscape — because they know they are shaped by its forces, subject to its spirits, vulnerable to its hidden dimensions — that familiar places become uncanny. The uncanny is not the absence of dwelling but its shadow: the cost of being genuinely in a world that exceeds one's knowledge." },
      ],
      x: 580, y: 160, color: "#f87171", status: "consolidated",
    },

    {
      id: "dwelling-limits",
      term: "Dwelling & Its Limits",
      definition: "Heidegger's concept of dwelling — the mode of being in which mortals are on the earth, inhabiting places with care and attentiveness — has dominated anthropological approaches to landscape, producing accounts that emphasise wisdom, belonging, and harmonious co-existence with the non-human world. But dwelling is an ideal rarely attained and sometimes actively undesirable. The Zangskar material demonstrates that local life is structured less by the cultivation of dwelling than by the management of threat: protective architecture, avoidance behaviour, ritual defence against the forces that flow through the landscape. The house stands against the wider landscape as the only reliable dwelling-place; the forest, the mountain, and the spirit-haunted roads are not places one dwells but places one navigates carefully. Dwelling's limits are not a failure of the concept but its necessary shadow: they reveal that genuine habitation of a world involves not only attentiveness and care but also fear, uncertainty, and the acknowledgment that the world exceeds every attempt to be at home in it.",
      thinkers: ["Martin Heidegger", "Tim Ingold", "Samuel Maoz", "Edward Casey"],
      tags: ["dwelling", "place", "limits", "threat", "landscape", "heidegger"],
      connections: [
        { to: "landscape", label: "is the ideal exceeded by" },
        { to: "hinterlands-node", label: "is exceeded by" },
        { to: "the-uncanny", label: "is the shadow of" },
        { to: "entanglement", label: "is complicated by" },
        { to: "the-house", label: "finds its only reliable form in" },
        { to: "unruliness", label: "is disrupted by" },
      ],
      nuances: [
        { thinker: "Heidegger — building dwelling thinking", note: "For Heidegger, dwelling is not a result of building but its precondition: genuine building already is dwelling, a caring preservation of the fourfold — earth, sky, mortals, divinities. The peasant farmhouse of the Black Forest is his paradigm: a building that gathers the fourfold, that has grown from the landscape and belongs to it. This is both a philosophical claim and a nostalgic idealisation that Heidegger never quite distinguishes from each other." },
        { thinker: "Ingold — dwelling as practice", note: "Ingold develops dwelling as a practice rather than an ideal: to dwell is to know a landscape through sustained, skilled, attentive engagement over time — through walking, working, watching. This de-romanticises the concept without abandoning it: dwelling is not a state of harmony but an ongoing practice of attentiveness. Yet even Ingold's account tends to emphasise knowledge and skill over uncertainty and threat." },
        { thinker: "The limits — Zangskar", note: "The Zangskari data is decisive: in a landscape saturated with spirits, hidden villages, and forces that exceed human perception, the appropriate orientation is not open dwelling but careful management. Dwelling as described by Heidegger and Ingold is a luxury available only to those whose landscapes are sufficiently benign — or sufficiently domesticated — to permit it. Where the uncanny is structurally present, dwelling must always be partial, defended, and aware of its own fragility." },
      ],
      x: 200, y: 420, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "the-hidden",
      term: "The Hidden",
      definition: "The structurally inaccessible dimension of landscape — the places that don't appear on any map, the villages that can only be reached at night, the territories where people go when they disappear and from which they sometimes don't return. The hidden is not merely what hasn't been found yet but what is constitutively beyond ordinary human perception and knowledge: it is the penumbra that surrounds the known world, defined by the negative space of paths not taken and areas that remain permanently inaccessible. In Zangskar, the beyulpa — the hidden people — inhabit villages that are structurally invisible to ordinary human sight, existing in parallel to the human world but folded away from it. This hiddenness is not a contingent fact about those specific places but a structural feature of landscape as such: the known world is always bordered by what it cannot know, and this border is not a line but a zone of gradual transition into the unknowable.",
      thinkers: ["Samuel Maoz", "Walter Benjamin", "Eduardo Kohn", "Nan Shepherd"],
      tags: ["hidden", "unknown", "landscape", "spirit", "perception"],
      connections: [
        { to: "landscape", label: "borders all" },
        { to: "the-uncanny", label: "is the source of" },
        { to: "hinterlands-node", label: "is the phenomenological core of" },
        { to: "enchantment", label: "is the other face of" },
        { to: "threshold", label: "is approached at" },
        { to: "black-forest", label: "has its mythic home in" },
        { to: "pathfinding", label: "is navigated through" },
      ],
      nuances: [
        { thinker: "Benjamin — the dialectical image", note: "Benjamin's concept of the dialectical image — the moment when the past flashes up in the present with sudden recognisability — is a form of the hidden becoming visible: what was always there but unseen suddenly appears. Benjamin's landscapes are urban, but his structure of concealed depth, sudden revelation, and the traces of what has been suppressed maps directly onto the hinterlands." },
        { thinker: "Kohn — how forests think", note: "Eduardo Kohn's anthropology of the Amazonian Runa demonstrates that the forest is not merely a setting for human life but an active semiotic environment — a place that thinks, signifies, and communicates through its own processes. The hidden, for Kohn, is not empty but full: the forest's depth conceals a constant production of signs, meanings, and relations that human beings participate in without fully understanding." },
        { thinker: "Shepherd — the plateau in depth", note: "Nan Shepherd's account of the Cairngorm plateau returns repeatedly to the experience of finding depth within what seemed known: the mountain has an interior that reveals itself only through sustained, patient, bodily engagement — and even then it is never fully disclosed. The hidden is not separate from the known but its depth, its thickness, its perpetual withdrawal behind every appearance." },
      ],
      x: 580, y: 420, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "threshold",
      term: "Threshold",
      definition: "The boundary between known and unknown — the edge of the village where the spirit roads begin, the treeline where the managed landscape gives way to the unmanaged, the moment in a journey when one has gone far enough that return is no longer guaranteed. The threshold is not a line but a zone: a space of heightened perceptual alertness and ontological ambiguity, where the categories that organise ordinary experience begin to loosen. To stand at a threshold is to be neither here nor there — neither securely inside the known nor safely outside it. Thresholds are the sites of the most intense phenomenological experience: the places where the familiar world reveals its contingency, where other possibilities press in, where the traveller must decide whether to proceed or turn back. In mythic traditions, the forest edge, the cave mouth, the river crossing, and the crossroads are all threshold figures — and they are also, in the contemporary sense, the places where new ways of living are being attempted.",
      thinkers: ["Arnold van Gennep", "Victor Turner", "Gaston Bachelard", "Walter Benjamin"],
      tags: ["threshold", "boundary", "transition", "place", "liminal"],
      connections: [
        { to: "hinterlands-node", label: "is constituted by" },
        { to: "the-hidden", label: "is approached at" },
        { to: "roaming", label: "is crossed in" },
        { to: "the-house", label: "is what separates interior from" },
        { to: "creatures-of-the-hinterlands", label: "is where one meets" },
        { to: "enchantment", label: "is where one enters" },
        { to: "pathfinding", label: "begins at" },
      ],
      nuances: [
        { thinker: "Van Gennep and Turner — liminality", note: "Van Gennep's rites of passage identify a three-stage structure: separation from the known, a liminal period of transition (literally 'threshold'), and incorporation into a new status. Victor Turner developed the liminal phase as a concept in its own right: the state of being betwixt and between, where normal social structures dissolve and new possibilities become visible. The hinterlands is, in this sense, a permanent liminality — a threshold one inhabits rather than passes through." },
        { thinker: "Bachelard — the dialectics of inside and outside", note: "Bachelard's phenomenology of space identifies the door, the drawer, the corner, and the nest as sites of existential significance: they mark the boundary between inside and outside, between the protected and the exposed. The threshold is the door writ large: the point where the warmth and security of the domestic interior meets the cold and uncertainty of the exterior. To cross it is always a small existential act." },
      ],
      x: 400, y: 480, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "entanglement",
      term: "Entanglement",
      definition: "The condition of being enmeshed in a web of forces, relations, and influences that one cannot fully see or understand — the phenomenological and ontological reality of being genuinely in a world rather than merely observing it from a distance. Entanglement is not a problem to be solved but a structural feature of existence: to inhabit a landscape, a community, or a practice is always to be shaped by forces that exceed one's awareness. The Zangskar material shows that entanglement with the landscape is both unavoidable and potentially overwhelming: the amchi Kunga's openness to the hidden people — his very responsiveness and power — is precisely what draws their attention and drains his strength. But entanglement is also the condition of all genuine knowledge, all genuine care, all genuine relation. The challenge is not to escape entanglement but to inhabit it with sufficient awareness to navigate its demands — which requires a kind of knowledge that is always partial, always in process, always aware of its own incompleteness.",
      thinkers: ["Tim Ingold", "Donna Haraway", "Karen Barad", "Samuel Maoz"],
      tags: ["relation", "ecology", "ontology", "knowledge", "vulnerability"],
      connections: [
        { to: "landscape", label: "is the condition of" },
        { to: "dwelling-limits", label: "complicates" },
        { to: "animate-landscape", label: "is the mode of relation in" },
        { to: "creatures-of-the-hinterlands", label: "is the condition of" },
        { to: "unruliness", label: "produces" },
        { to: "regenerative-hinterlands", label: "is the ground of" },
      ],
      nuances: [
        { thinker: "Ingold — the meshwork", note: "Ingold's concept of the meshwork — a tangle of lines of life and movement rather than a network of connected nodes — captures the structure of entanglement: one is not at a node in a network but threaded through a tangle of lines that are always moving, always becoming. To be in a landscape is to be caught up in this meshwork, one's own line of life knotted with those of plants, animals, weather, and other humans." },
        { thinker: "Barad — intra-action", note: "Karen Barad's concept of intra-action names a more radical entanglement than interaction: in interaction, pre-formed entities affect each other; in intra-action, entities are constituted through their entanglement. There are no pre-given subjects and objects; both emerge from the ongoing processes of material-discursive entanglement. The hinterlands, on this account, are not places that already-constituted subjects enter — they are the processes through which subjects and places co-constitute each other." },
      ],
      x: 200, y: 560, color: "#34d399", status: "consolidated",
    },

    // ── Movement & Navigation ─────────────────────────────────────────────────

    {
      id: "roaming",
      term: "Roaming",
      definition: "Movement without a fixed destination — the particular quality of bodily engagement with landscape that arises when one is genuinely open to where the path leads rather than intent on reaching a predetermined point. Roaming is not aimlessness but a different kind of aim: a receptivity to what the landscape offers, a willingness to be drawn by what calls rather than directed by what plans. It carries within it the productive possibility of the unforeseen encounter, the unexpected view, the path that leads somewhere one didn't know one was going. Rebecca Solnit's distinction between getting lost as disaster and getting lost as discovery is central here: roaming is the practice of remaining open to the second form of lostness, of refusing the closure that a fixed itinerary provides. In the hinterlands, roaming is both a phenomenological practice and a social posture: to roam is to refuse the efficiency demands of the dominant systems, to insist on a different relationship to time, space, and purpose.",
      thinkers: ["Rebecca Solnit", "Robert Macfarlane", "Bruce Chatwin", "Walter Benjamin"],
      tags: ["movement", "freedom", "landscape", "practice", "lostness"],
      connections: [
        { to: "trail", label: "departs from and returns to" },
        { to: "threshold", label: "crosses" },
        { to: "disorientation", label: "opens toward" },
        { to: "enchantment", label: "becomes receptive to" },
        { to: "waldeinsamkeit", label: "opens into" },
        { to: "songlines", label: "follows at its deepest" },
        { to: "pathfinding", label: "sometimes becomes" },
      ],
      nuances: [
        { thinker: "Solnit — A Field Guide to Getting Lost", note: "Solnit distinguishes the blue of distance — the colour of what is far away, of what one desires but cannot reach, of the unknown that beckons — from the anxiety of lostness. Getting lost, for Solnit, is not a failure of navigation but a mode of presence: the lost person is radically in the present, without the comfort of knowing where they are or where they are going, and this stripping of certainty opens a particular quality of attention. Roaming is the voluntary cultivation of this quality." },
        { thinker: "Benjamin — the flâneur", note: "Benjamin's flâneur — the urban wanderer who reads the city by drifting through it without purpose — is the metropolitan form of roaming: a practice of receptive attention that moves against the directed flows of productive urban life. The flâneur discovers what the purposeful passer-by misses: the dialectical image, the trace of another time, the crack in the surface of the familiar. In the hinterlands, the flâneur becomes the wanderer in the literal landscape." },
        { thinker: "Macfarlane — the old ways", note: "Robert Macfarlane's walks along ancient trackways and pilgrim routes enact roaming as a form of historical and ecological attention: to walk without haste through a landscape is to become available to what the landscape has accumulated — the marks of prior feet, the names of places, the way the light falls in a particular valley. Roaming, for Macfarlane, is a practice of listening to what the land says." },
      ],
      x: 160, y: 340, color: "#4ade80", status: "consolidated",
    },

    {
      id: "trail",
      term: "Trail",
      definition: "The path worn into the landscape by repeated passage — a record of prior attention, a form of collective memory materialised in the earth. A trail is not merely a route from one place to another but a layered text: it carries the traces of everyone who has walked it, the decisions they made at each fork, the pace they set and the places they paused. Ingold's distinction between transport (moving efficiently from A to B) and wayfaring (being genuinely on the way, attending to what the path offers) is the key phenomenological distinction: the trail, followed as wayfaring, is a form of ongoing encounter with the landscape rather than a means of traversing it. The trail also marks the boundary of the known: where the trail ends, the hinterlands begin. Robert Macfarlane writes of ancient trackways as lines of human desire worn into the surface of the earth — paths that connect not just places but times, carrying the feet of the present traveller through the accumulated choices of the past.",
      thinkers: ["Tim Ingold", "Robert Macfarlane", "Rebecca Solnit", "Gary Snyder"],
      tags: ["path", "wayfaring", "landscape", "memory", "movement"],
      connections: [
        { to: "landscape", label: "is how one traverses" },
        { to: "roaming", label: "provides the ground from which" },
        { to: "songlines", label: "in its deepest form becomes" },
        { to: "pathfinding", label: "is what precedes" },
        { to: "threshold", label: "leads toward" },
        { to: "hinterlands-node", label: "marks the edge of" },
        { to: "waldeinsamkeit", label: "leads into" },
      ],
      nuances: [
        { thinker: "Ingold — wayfaring", note: "Ingold contrasts transport (which moves a person as a package from point to point, indifferent to what lies between) with wayfaring (which moves through the world as a continuous line of experience, always in the midst of things, always knowing where one is by virtue of having come from somewhere). The trail is the material support of wayfaring: it offers a line of prior engagement with the landscape that the current walker takes up, continues, and adds to. To walk a trail is to join a community of walkers across time." },
        { thinker: "Snyder — the practice of the wild", note: "Gary Snyder's essays on wilderness and practice connect trail-following to Buddhist practice: both involve a sustained, attentive engagement with what is actually present, a refusal of distraction, a willingness to go at the pace the terrain demands. The trail is a form of discipline — it insists on the particular, the local, the actual — and this discipline is what opens onto the wild rather than closing it down." },
        { thinker: "Macfarlane — desire lines", note: "Macfarlane's account of 'desire lines' — the paths people make by walking where they want to go rather than where they are directed — connects trail to agency and to the body's own sense of the most natural way through a landscape. Desire lines are trails in formation: the expression of a collective bodily intelligence about how to move through a particular terrain. They resist the rationality of the designed path and follow instead the logic of the body in the landscape." },
      ],
      x: 160, y: 180, color: "#4ade80", status: "consolidated",
    },

    {
      id: "songlines",
      term: "Songlines",
      definition: "The Aboriginal Australian concept of paths that are simultaneously geographical, cosmological, and musical — routes across the landscape that were sung into existence by the Ancestor beings in the Dreaming and that must be continually re-sung by those who travel them to maintain the world. A songline is not a path through a pre-existing landscape but the act of creation that brought the landscape into being: each geographical feature — mountain, waterhole, sand dune — corresponds to a moment in an ancestor's journey and its song. To travel a songline is to participate in the ongoing creation of the world, to re-enact the originary act of singing the landscape into existence. Bruce Chatwin's exploration of the concept in The Songlines opens it toward a universal human truth: that to move through a landscape is always, at some level, to sing it into being — to bring it into meaning through the narrative of one's movement. The songline is the deepest form of trail: not merely a record of prior passage but a living cosmological act.",
      thinkers: ["Bruce Chatwin", "Deborah Bird Rose", "W.E.H. Stanner", "Robin Wall Kimmerer"],
      tags: ["cosmology", "landscape", "song", "indigenous", "creation", "movement"],
      connections: [
        { to: "trail", label: "is the deepest form of" },
        { to: "animate-landscape", label: "is the expression of" },
        { to: "roaming", label: "is followed at its deepest by" },
        { to: "enchantment", label: "is suffused with" },
        { to: "creatures-of-the-hinterlands", label: "are those who know the" },
        { to: "regenerative-hinterlands", label: "are the new" },
        { to: "pathfinding", label: "is the act of recovering" },
      ],
      nuances: [
        { thinker: "Chatwin — the need to move", note: "Chatwin's central thesis in The Songlines is that humans are constitutively nomadic — that the songlines express a deep truth about human existence that settled civilisation has suppressed: the need to move, to sing the landscape, to know the world through the body's passage through it. The songline is both a geographical route and a form of being-in-the-world that is prior to and more fundamental than settlement." },
        { thinker: "Rose — nourishing terrains", note: "Deborah Bird Rose's account of Aboriginal relationships with country goes deeper than Chatwin's romanticism: the songlines are not merely beautiful but obligatory, a form of reciprocal care between people and country. To sing the country is to nourish it; to neglect the songs is to let the country die. This is the most radical form of the animate landscape: the land not as a passive object of human attention but as a being that requires and responds to human care, that can flourish or decline depending on the quality of human engagement." },
        { thinker: "Stanner — the Dreaming", note: "W.E.H. Stanner's analysis of the Dreaming as 'everywhen' rather than a past time is essential to understanding songlines: the Ancestor beings' journeys are not historical events but ongoing realities that the present landscape embodies. The songline connects present and Dreaming not as past to present but as depth to surface: the landscape's current form is the Dreaming made visible, and the song restores the connection between them." },
      ],
      x: 160, y: 520, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "disorientation",
      term: "Disorientation",
      definition: "Not merely getting lost in space but a more fundamental unsettling of one's orientation in the world — the moment when the habitual maps of meaning, belonging, and competence cease to function and one finds oneself genuinely without bearings. In the forest or the hinterlands, disorientation begins with the body: the familiar perceptual field breaks down, motor competences that worked in the known world no longer suffice, the usual cues for orientation (the skyline, the road, the sound of habitation) are absent or misleading. But disorientation also has a deeper register: the existential disorientation of someone who has moved into genuinely new territory — socially, intellectually, spiritually — and finds that their old categories no longer serve. This disorientation is both threatening and productive: threatening because it withdraws the comfort of the known; productive because it opens the possibility of genuinely new orientation. In the hinterlands, disorientation is not a problem to be solved but a condition to be inhabited — the productive uncertainty of someone who is genuinely in the midst of something new.",
      thinkers: ["Rebecca Solnit", "Maurice Merleau-Ponty", "Édouard Glissant"],
      tags: ["lostness", "uncertainty", "body", "movement", "transformation"],
      connections: [
        { to: "roaming", label: "is opened by" },
        { to: "the-uncanny", label: "shades into" },
        { to: "threshold", label: "is intensified at" },
        { to: "panic", label: "can become" },
        { to: "enchantment", label: "can open into" },
        { to: "waldeinsamkeit", label: "precedes" },
        { to: "creatures-of-the-hinterlands", label: "is the initiatory condition of" },
      ],
      nuances: [
        { thinker: "Solnit — the uses of lostness", note: "Solnit distinguishes productive from paralysing lostness: the lost person who remains open to their situation can discover what the person who knows where they are cannot see. Disorientation strips away the automatic pilot of habit and forces a quality of presence that orientation forecloses. The forest that disorients is also the forest that makes things visible that the road conceals." },
        { thinker: "Glissant — the right to opacity", note: "Édouard Glissant's concept of opacity — the right of cultures and persons to remain irreducibly themselves, resistant to transparent comprehension — inverts disorientation: not the subject who is lost but the world that refuses to become fully legible. The hinterlands, in this sense, exercise their right to opacity: they are not problems awaiting solution but territories that deserve to remain, in some measure, unknown." },
        { thinker: "Merleau-Ponty — the body lost", note: "Merleau-Ponty's phenomenology of bodily orientation shows that spatial disorientation is never merely cognitive: the body's motor schemas, its practical orientation toward the familiar environment, fail along with the conceptual maps. To be lost in a forest is to lose the body's grip on the world — to find that the movements that usually suffice no longer produce the expected returns. Reorientation is therefore not just a cognitive achievement but a bodily one: a new grip, a new style of movement through unfamiliar terrain." },
      ],
      x: 580, y: 560, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "pathfinding",
      term: "Pathfinding",
      definition: "The act of making a path where none exists — or recovering one that has been lost, overgrown, or forgotten. Pathfinding is distinct from following a trail: it requires a different quality of attention, a reading of the terrain rather than a following of prior marks. The pathfinder attends to slope, vegetation, water, light, and wind to find the line of least resistance — or the line most true to their destination — through unmapped territory. In the hinterlands, pathfinding is both a literal and a metaphorical practice: the regenerative practitioner who is working in territory that has no established map, the researcher who is exploring conceptual terrain that no previous framework has organised, the community that is feeling its way toward a different way of living — all are engaged in a form of pathfinding. The songline tradition suggests that pathfinding at its deepest is a creative act: not finding a path that was already there but calling one into being through the act of moving.",
      thinkers: ["Tim Ingold", "Robert Macfarlane", "Ursula Le Guin", "Deborah Bird Rose"],
      tags: ["navigation", "creation", "movement", "landscape", "hinterlands"],
      connections: [
        { to: "trail", label: "is what precedes" },
        { to: "threshold", label: "begins at" },
        { to: "songlines", label: "at its deepest recovers" },
        { to: "the-hidden", label: "moves through" },
        { to: "roaming", label: "sometimes becomes" },
        { to: "regenerative-hinterlands", label: "is the practice of" },
        { to: "creatures-of-the-hinterlands", label: "is what" },
      ],
      nuances: [
        { thinker: "Le Guin — the carrier bag theory", note: "Ursula Le Guin's carrier bag theory of fiction proposes that the fundamental human story is not the hero's journey (straight, goal-directed, singular) but the gatherer's journey (meandering, multiple, attentive to what is found along the way). The carrier bag is a pathfinding tool: it allows one to move through the landscape collecting what is useful, building a different kind of knowledge from the accumulation of small encounters. This is the pathfinding of the hinterlands practitioner." },
        { thinker: "Ingold — lines", note: "Ingold's philosophical account of lines distinguishes the transport line (straight, connecting pre-given points) from the trace (left by movement through the world, always retrospective) from the thread (woven into a meshwork through sustained engagement). Pathfinding produces traces that may become threads that may become trails: the act of moving through unmapped territory is simultaneously creative and cumulative, each passage making the next slightly easier." },
      ],
      x: 400, y: 160, color: "#34d399", status: "consolidated",
    },

    // ── Atmospheric ───────────────────────────────────────────────────────────

    {
      id: "enchantment",
      term: "Enchantment",
      definition: "The quality of the world when it is experienced as alive, resonant, and addressed to one — not the naively supernatural but the phenomenologically real sense that things matter, that places speak, that the encounter with the non-human carries genuine significance. Jane Bennett's 'enchanted materialism' recovers enchantment as a philosophical and political concept: the experience of being struck and shaken by what one encounters, of having one's plans interrupted by the irreducible aliveness of things. In the forest and the hinterlands, enchantment is the other face of the uncanny: both involve the dissolution of the ordinary, the sudden revelation of a depth in familiar things, the experience of the world as more than utility or background. But where the uncanny is threatening — the familiar disclosing a hostile or disorienting depth — enchantment is compelling: the world revealing its beauty, its strangeness, its surplus of meaning. The forest is an enchanted space precisely because it holds both registers simultaneously.",
      thinkers: ["Jane Bennett", "Max Weber", "Morris Berman", "Robin Wall Kimmerer"],
      tags: ["magic", "wonder", "landscape", "animism", "affect"],
      connections: [
        { to: "hinterlands-node", label: "is alive with" },
        { to: "the-uncanny", label: "is the other face of" },
        { to: "the-hidden", label: "is the other face of" },
        { to: "animate-landscape", label: "is the lived experience of" },
        { to: "waldeinsamkeit", label: "deepens into" },
        { to: "black-forest", label: "is concentrated in" },
        { to: "creatures-of-the-hinterlands", label: "is encountered by" },
        { to: "songlines", label: "is suffused with" },
      ],
      nuances: [
        { thinker: "Bennett — vibrant matter", note: "Jane Bennett's enchanted materialism proposes that matter is never merely passive or inert: things have a kind of agency, a vibrancy, that exceeds their function as human tools or resources. To be enchanted by the world is to attend to this vibrancy — to remain open to being surprised, affected, and moved by what one encounters. Enchantment is therefore an ethical as well as an aesthetic category: it is the precondition for genuine care for the non-human world." },
        { thinker: "Weber — the disenchantment of the world", note: "Weber's diagnosis of modernity as the progressive disenchantment of the world — the replacement of magical, religious, and mythic frameworks by rational-bureaucratic ones — is the negative against which enchantment is defined. The hinterlands are, among other things, places where disenchantment has not fully succeeded: where the world still speaks, still calls, still demands a response that reason alone cannot provide." },
        { thinker: "Berman — the reenchantment of the world", note: "Morris Berman's 'The Reenchantment of the World' traces the loss of participatory consciousness — the animistic sense of being genuinely in relation with a living world — from the scientific revolution onwards, and argues for its recovery as a cultural and ecological necessity. This resonates with the hinterlands project: the regenerative practitioner is engaged in a practice of reenchantment, recovering a quality of attention and relation that the dominant systems have suppressed." },
      ],
      x: 580, y: 300, color: "#fbbf24", status: "consolidated",
    },

    {
      id: "panic",
      term: "Panic",
      definition: "The sudden, overwhelming fear that seizes travellers in wild and open places — named for Pan, the Greek god of the wilderness, whose presence was said to induce an inexplicable terror in those who wandered alone in the mountains or forests at midday. Panic is not ordinary fear (which has a specific object) but a dissolution of the self's boundaries in the presence of something vast, indifferent, and alive — a sudden awareness of one's smallness and vulnerability within a landscape that is fundamentally unconcerned with human welfare. It is the dark underside of enchantment: the same dissolution of the ordinary that makes enchantment possible also makes panic possible, because both involve the suspension of the ego's usual defences and the exposure of the self to what lies beyond them. In the hinterlands, panic names a real phenomenological risk: the possibility of being overwhelmed by one's own entanglement with a world that exceeds understanding.",
      thinkers: ["Pan — Greek mythology", "James Hillman", "Roger Caillois"],
      tags: ["fear", "wild", "landscape", "myth", "dissolution"],
      connections: [
        { to: "the-uncanny", label: "is the acute form of" },
        { to: "disorientation", label: "is the extreme of" },
        { to: "enchantment", label: "is the dark underside of" },
        { to: "animate-landscape", label: "is the overwhelming encounter with" },
        { to: "black-forest", label: "erupts in" },
        { to: "the-hidden", label: "is triggered by encounter with" },
      ],
      nuances: [
        { thinker: "Pan — the noonday terror", note: "Pan's panic was particularly associated with midday — the time when the sun is at its height and the landscape seems most solid and certain. The noonday panic is therefore a disruption of the ordinary precisely at the moment of greatest clarity: the certainty of the well-lit landscape suddenly cracks, and something vast and indifferent presses through. This is the uncanny in its most acute form: not the familiar becoming strange in the dark, but the familiar becoming strange in full daylight." },
        { thinker: "Hillman — the return of Pan", note: "James Hillman's essay on Pan and the nightmare argues for the psychological necessity of the Panic dimension: the ego's need to dissolve, to encounter what is genuinely wild and uncontrollable, is as fundamental as its need for orientation and control. To suppress Pan — to refuse the panic, to manage every encounter with the wild — is to produce a psychological and cultural impoverishment. The hinterlands are where Pan is still active." },
        { thinker: "Caillois — sacred terror", note: "Roger Caillois distinguishes the sacred as both fascinating and terrifying — Rudolf Otto's mysterium tremendum et fascinans — and panic as the terror-pole of this sacred ambivalence. The wild place that produces panic is not merely dangerous but sacred: the terror it induces is a form of encounter with what is genuinely other, genuinely beyond the human scale. Panic, properly understood, is a form of religious experience." },
      ],
      x: 580, y: 460, color: "#f87171", status: "consolidated",
    },

    {
      id: "animate-landscape",
      term: "Animate Landscape",
      definition: "The understanding of landscape as a living, communicative, and responsive reality — not the passive setting of human action but an active participant in the events that unfold within it. In animate landscape, the mountains, rivers, forests, and weather are not merely physical processes but presences — beings with their own modes of address, their own forms of agency, their own claims on the attention and care of those who inhabit them. This is not animism in a naive sense but a phenomenologically rigorous claim: that the categories adequate to living, communicating realities are irreducibly different from those adequate to inert objects, and that landscape, attended to with sufficient care, reveals itself to belong to the former category. Robin Wall Kimmerer's grammar of animacy, Eduardo Kohn's forest semiotics, and the Zangskari spirit landscape all describe versions of the same fundamental insight: that to be genuinely in a landscape is to be in conversation with it.",
      thinkers: ["Robin Wall Kimmerer", "Eduardo Kohn", "David Abram", "Nan Shepherd"],
      tags: ["animism", "landscape", "ecology", "perception", "communication"],
      connections: [
        { to: "landscape", label: "is the living form of" },
        { to: "enchantment", label: "is the lived experience of" },
        { to: "songlines", label: "is expressed through" },
        { to: "entanglement", label: "is the mode of relation in" },
        { to: "the-hidden", label: "contains" },
        { to: "panic", label: "is encountered when overwhelmed by" },
        { to: "regenerative-hinterlands", label: "is what" },
      ],
      nuances: [
        { thinker: "Kimmerer — the grammar of animacy", note: "Kimmerer argues that the Potawatomi language's use of animate grammatical forms for plants, rivers, and animals is not merely a linguistic convention but a phenomenological truth: these beings are genuinely alive, genuinely persons, genuinely present in ways that the English it effaces. To shift from 'it is raining' to 'the rain is doing what rain does' is to shift from a grammar of objects to a grammar of presences — a change that has ethical as well as linguistic consequences." },
        { thinker: "Shepherd — the mountain as other", note: "Nan Shepherd's account of the Cairngorms moves progressively from the mountain as object of the climber's conquest to the mountain as a presence that one enters and is entered by. Her final insight is that the mountain has its own life — not metaphorically but really — and that genuine knowledge of it requires not mastery but a kind of surrender: allowing the mountain to make of one what it will. This is animate landscape at its most philosophically precise." },
        { thinker: "Abram — the breathing earth", note: "David Abram's phenomenology of the animate earth argues that the world is not a backdrop to human experience but the very medium of perception: the atmosphere, the soil, the body of other species are not merely surrounding conditions but active participants in the perceptual field. To attend to this participation is to discover that the earth breathes, that the forest listens, that the wind carries meaning — not as projections of human consciousness but as actual properties of a more-than-human perceptual world." },
      ],
      x: 380, y: 560, color: "#34d399", status: "consolidated",
    },

    // ── Forest Figures ────────────────────────────────────────────────────────

    {
      id: "waldeinsamkeit",
      term: "Waldeinsamkeit",
      definition: "A German compound with no direct English equivalent, naming the particular mood — at once solitary, still, and spiritually resonant — that arises from being alone and deep in the forest. Literally 'forest solitude', Waldeinsamkeit is not mere loneliness or quietness but a specific quality of being: the sense of being held by the forest, of the self becoming permeable to the forest's rhythms, of ordinary concerns and social identities falling away to leave something quieter and more essential. The Romantic poet Ludwig Tieck coined it in a poem; Emerson used it in a letter; it became a word for a feeling that English speakers recognise but have no single word for. Waldeinsamkeit sits at the intersection of enchantment, contemplation, and disorientation: the self is not lost in the forest but it is gently dissolved, made porous, brought into a quality of presence that the social world makes difficult. It is the forest's gift to those who enter it without agenda.",
      thinkers: ["Ludwig Tieck", "Ralph Waldo Emerson", "Gaston Bachelard"],
      tags: ["solitude", "forest", "mood", "contemplation", "German-romanticism"],
      connections: [
        { to: "enchantment", label: "deepens into" },
        { to: "roaming", label: "opens into" },
        { to: "trail", label: "is found along" },
        { to: "disorientation", label: "begins with" },
        { to: "black-forest", label: "is most concentrated in" },
        { to: "animate-landscape", label: "is the mood of being in" },
        { to: "unruliness", label: "is the stillness found within" },
      ],
      nuances: [
        { thinker: "Tieck — the forest poem", note: "Ludwig Tieck's poem in which Waldeinsamkeit first appears describes the forest as a space where the ordinary world falls away and something older and quieter becomes present: the sounds of the city, the demands of social life, the weight of identity — all recede into the forest's green indifference, leaving a quality of presence that feels both ancient and immediate. Tieck captures the paradox: in the forest's solitude one is more, not less, oneself." },
        { thinker: "Bachelard — the house and the forest", note: "Bachelard's phenomenology identifies the forest as the archetype of the vast: the space where imagination is freed from the constraints of the domestic, where the daydream can range without encountering the walls that ordinarily contain it. Waldeinsamkeit, in Bachelard's terms, is the experience of this vastness becoming intimate — the forest not as an immensity that overwhelms but as a solitude that shelters." },
      ],
      x: 220, y: 280, color: "#4ade80", status: "consolidated",
    },

    {
      id: "black-forest",
      term: "The Black Forest",
      definition: "The Schwarzwald of southwest Germany — a landscape that carries multiple dense and overlapping registers simultaneously: the literal forest where Heidegger walked and wrote, whose paths became the Holzwege (woodpaths) of his philosophical imagination; the landscape from which the Brothers Grimm collected the fairy tales that gave the Western imagination its archetypal dark forest; the forest of German Romanticism and its particular cultivation of Waldeinsamkeit; and, more broadly, the figure of the dark, deep forest as the place where the rules of the ordinary world do not apply. Heidegger's Holzwege — woodpaths that lead into the forest and end unexpectedly, without reaching a destination — are both a literal feature of the Black Forest and a philosophical figure: paths of thinking that go deep into the matter and stop without resolution, because the matter does not resolve. The Black Forest is where philosophy, fairy tale, and phenomenology inhabit the same ground.",
      thinkers: ["Martin Heidegger", "Brothers Grimm", "Hans-Georg Gadamer", "Robert Macfarlane"],
      tags: ["forest", "Germany", "myth", "heidegger", "fairy-tale", "phenomenology"],
      connections: [
        { to: "the-uncanny", label: "is concentrated in" },
        { to: "enchantment", label: "is concentrated in" },
        { to: "waldeinsamkeit", label: "is most concentrated in" },
        { to: "the-hidden", label: "has its mythic home in" },
        { to: "dwelling-limits", label: "is where Heidegger thought" },
        { to: "panic", label: "erupts in" },
        { to: "unruliness", label: "is what makes it" },
      ],
      nuances: [
        { thinker: "Heidegger — Holzwege", note: "Heidegger's collection of essays published under the title Holzwege opens with a description of woodpaths: paths made by woodcutters that lead deep into the forest and end suddenly, without reaching a clearing or a destination. Each essay, Heidegger implies, is such a path — it goes as far into the matter as thinking can go and then stops, because the matter itself stops yielding. The Black Forest path is the model of Heideggerian thinking: not a highway from question to answer but a track into depth." },
        { thinker: "Grimm — the fairy tale forest", note: "The Brothers Grimm collected their tales largely from the regions surrounding the Schwarzwald, and the dark forest that appears in so many of them — the forest where Hansel and Gretel are abandoned, where Snow White takes refuge, where Red Riding Hood meets the wolf — is a mythic transformation of the actual landscape. The fairy tale forest is the place where children go when they leave the safety of home, where transformation happens, where the rules of the ordinary world no longer apply. It is the hinterlands as mythic figure." },
        { thinker: "The philosophical and the mythic together", note: "What makes the Black Forest such a rich node is precisely that the philosophical and the mythic are not separate: Heidegger walks the same paths that the Brothers Grimm's informants walked, breathes the same Waldeinsamkeit, is haunted by the same sense of paths that lead into depth without resolution. The Black Forest is where Western philosophy and Western mythology share the same ground — and where the question of what the forest means is answered differently depending on whether you are following a woodpath or a fairy tale." },
      ],
      x: 580, y: 200, color: "#6b7280", status: "consolidated",
    },

    {
      id: "unruliness",
      term: "Unruliness",
      definition: "The quality of exceeding management — the forest's, the community's, and the practitioner's capacity to resist being fully organised, categorised, or made legible by the dominant systems. James Scott's analysis of scientific forestry in Seeing Like a State shows how the modern state's attempt to make the forest legible — to replace the complex, multi-species tangle of the actual forest with a monocultural plantation that could be measured, predicted, and harvested — consistently failed because the actual forest exceeded every model of it. The forest is unruly: it refuses to be reduced to standing timber, resists simplification, generates complexity wherever it is suppressed. Anna Tsing writes of 'unruly edges' as the sites where the most interesting ecological and social processes occur. Unruliness is not chaos but a different kind of order — the order of the living, the order of what has not been domesticated, the order that exceeds the grid. In the hinterlands, unruliness is both a quality of the terrain and a quality of the creatures who inhabit it.",
      thinkers: ["James C. Scott", "Anna Tsing", "Donna Haraway", "Robin Wall Kimmerer"],
      tags: ["resistance", "ecology", "complexity", "management", "wild"],
      connections: [
        { to: "hinterlands-node", label: "is the fundamental character of" },
        { to: "dwelling-limits", label: "disrupts" },
        { to: "animate-landscape", label: "is a property of" },
        { to: "entanglement", label: "produces" },
        { to: "black-forest", label: "is what makes it" },
        { to: "creatures-of-the-hinterlands", label: "is embodied by" },
        { to: "regenerative-hinterlands", label: "is what" },
        { to: "waldeinsamkeit", label: "is the stillness found within" },
      ],
      nuances: [
        { thinker: "Scott — the failure of high modernism", note: "Scott's analysis in Seeing Like a State shows that high modernist projects of legibility and simplification consistently fail because they mistake the map for the territory — they treat their abstraction of the world as the world itself, and are then surprised when the world refuses to behave accordingly. The unruly forest is the counter-example that every such project encounters: the living complexity that exceeds the model and eventually overwhelms the plantation." },
        { thinker: "Tsing — friction and unruly edges", note: "Anna Tsing's concept of friction — the awkward, creative, and often productive encounters that occur when different ways of knowing and doing meet — is generated precisely at the unruly edges: the places where the dominant systems encounter what they cannot absorb. Tsing's Meratus Dayak communities, her matsutake mushrooms, her precarious laborers — all inhabit the unruly edges where the most interesting things happen precisely because the dominant systems cannot fully colonise them." },
      ],
      x: 400, y: 440, color: "#6b7280", status: "consolidated",
    },

    // ── STS & Social ──────────────────────────────────────────────────────────

    {
      id: "sts-hinterlands",
      term: "STS Hinterlands",
      definition: "Susan Leigh Star and John Law's concept of the hinterlands as the messy, complex, irreducibly multiple backstage of knowledge production — the territory that lies behind the clean, stabilised accounts of science and that is systematically excluded when a single coherent narrative is produced. In Star's formulation, scientific facts and stable categories are achieved by suppressing the hinterland: the local knowledge, the non-standard entities, the contradictions, the multiple and conflicting accounts that don't fit the emerging consensus. The hinterland is not the failure of knowledge but its condition: without the suppressed complexity of the hinterland, the clean account could not be produced. Star's insight is that the hinterland never disappears — it is always there, just out of frame, maintained by invisible work, ready to reassert itself when the clean account fails to account for what actually happens. This connects directly to the phenomenological hinterlands: both name what is excluded by dominant frameworks, what exceeds legibility, what presses back.",
      thinkers: ["Susan Leigh Star", "John Law", "Annemarie Mol", "Donna Haraway"],
      tags: ["STS", "knowledge", "complexity", "science", "multiplicity"],
      connections: [
        { to: "hinterlands-node", label: "gives a theoretical formulation to" },
        { to: "unruliness", label: "is produced by" },
        { to: "regenerative-hinterlands", label: "connects to" },
        { to: "creatures-of-the-hinterlands", label: "are those who inhabit" },
        { to: "the-hidden", label: "is the epistemic form of" },
        { to: "entanglement", label: "is the condition described by" },
      ],
      nuances: [
        { thinker: "Star — power, technology and conventions", note: "Star's essay introduces the hinterlands as a concept for the vast, messy territory of practice, local knowledge, and non-standard entities that lies behind any stabilised scientific or technical system. The hinterlands are not pre-scientific but post-scientific: they are what remains when the clean account is produced, the complexity that the account had to suppress in order to be clean. Star's politics are those of the hinterlands: making visible what has been suppressed, caring for what cannot be made to fit." },
        { thinker: "Law — after method", note: "John Law's 'After Method' extends Star's insight into a broader methodological critique: conventional social science methods are designed to produce clear, unambiguous results, and in doing so they suppress the hinterland — the mess, the multiplicity, the non-coherence — that is actually present in social life. A social science adequate to the hinterlands would need different methods: ones capable of attending to multiplicity, contradiction, and the productive mess of actual practice." },
        { thinker: "Mol — the body multiple", note: "Annemarie Mol's study of atherosclerosis in a Dutch hospital demonstrates that a single disease is actually multiple: it is enacted differently in different practices — clinical examination, pathology, radiology — and these enactments do not add up to a single coherent object. The hinterland, for Mol, is the multiplicity that each enactment suppresses: the other versions of the disease that could have been enacted but weren't. The hinterlands are always plural." },
      ],
      x: 620, y: 380, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "regenerative-hinterlands",
      term: "Regenerative Hinterlands",
      definition: "The living territory — geographical, social, intellectual, and spiritual — in which regenerative movements are finding themselves: the edges of the dominant systems where new ways of living, farming, governing, and knowing are being attempted. The regenerative hinterlands are not a utopia but a genuinely uncertain territory: those who inhabit them are doing the work of pathfinding in a landscape that has no established map, navigating by something that is more felt than known — the sense that something different is possible, that the dominant systems are failing, that the edges are where the generative processes are happening. They are both ecological (the rewilded land, the regenerative farm, the restored commons) and social (the community that is feeling its way toward a different form of life) and intellectual (the thinking that is happening at the edges of the dominant disciplines). The regenerative hinterlands are the contemporary form of the songline: paths being sung into being as they are walked.",
      thinkers: ["Anna Tsing", "Donna Haraway", "Robin Wall Kimmerer", "Vandana Shiva"],
      tags: ["regeneration", "ecology", "community", "practice", "edges"],
      connections: [
        { to: "hinterlands-node", label: "is the contemporary form of" },
        { to: "sts-hinterlands", label: "is connected to" },
        { to: "creatures-of-the-hinterlands", label: "is inhabited by" },
        { to: "pathfinding", label: "requires" },
        { to: "songlines", label: "are the new" },
        { to: "entanglement", label: "is grounded in" },
        { to: "animate-landscape", label: "is oriented toward" },
        { to: "unruliness", label: "embraces" },
      ],
      nuances: [
        { thinker: "Tsing — living in the ruins", note: "Anna Tsing's account of life in the ruins of industrial capitalism — foraging for matsutake mushrooms, making worlds in the gaps of the global supply chain — describes the regenerative hinterlands with precision: people and more-than-human beings who are finding ways to live well in the aftermath of the dominant systems' failures, in the spaces where those systems have withdrawn or never fully penetrated. The regenerative hinterlands are not pre-capitalist but post-capitalist — or, more accurately, non-capitalist: worlds being made in the margins and the ruins." },
        { thinker: "Haraway — staying with the trouble", note: "Donna Haraway's injunction to stay with the trouble — to remain in the difficult, multi-species, multi-temporal tangles of the present rather than fleeing into either despair or utopian escape — is the ethos of the regenerative hinterlands. To stay with the trouble is to do the work of world-making in the actual conditions of a damaged world, with the actual companions (human and non-human) that the damaged world provides. This is hinterlands work: slow, uncertain, generative." },
      ],
      x: 600, y: 540, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "creatures-of-the-hinterlands",
      term: "Creatures of the Hinterlands",
      definition: "Both the mythic beings who inhabit the edges of the known world — the spirits, hidden people, forest creatures, and uncanny presences that populate the hinterlands in traditions from Zangskar to the Black Forest to the Amazon — and the human beings who have chosen or been called to inhabit the regenerative, contemplative, and pluriversal edges of the contemporary world. The conjunction is deliberate: the mythic creature and the regenerative practitioner share a structural position. Both inhabit territory that the dominant systems do not map or manage. Both carry knowledge that the centre cannot access. Both are simultaneously marginal (from the perspective of the dominant systems) and generative (from the perspective of what is actually needed). The beyulpa of Zangskar, who inhabit a hidden village accessible only at night and whose gifts turn to dung in daylight, and the regenerative farmer who is rebuilding soil ecology in ways that conventional agriculture cannot account for — both are creatures of the hinterlands, both know things that the centre cannot see.",
      thinkers: ["Samuel Maoz", "Anna Tsing", "Ursula Le Guin", "Robin Wall Kimmerer"],
      tags: ["myth", "community", "edges", "regeneration", "beings", "practitioners"],
      connections: [
        { to: "hinterlands-node", label: "inhabit" },
        { to: "regenerative-hinterlands", label: "build" },
        { to: "sts-hinterlands", label: "carry the knowledge of" },
        { to: "threshold", label: "are met at" },
        { to: "enchantment", label: "are encountered through" },
        { to: "unruliness", label: "embody" },
        { to: "songlines", label: "know the" },
        { to: "pathfinding", label: "are engaged in" },
        { to: "disorientation", label: "have passed through" },
      ],
      nuances: [
        { thinker: "Maoz — the hidden people", note: "The beyulpa of Zangskar are the archetype: beings who inhabit a human-like world that is structurally invisible to ordinary perception, whose gifts are real but do not survive the transition back to the ordinary world, whose attention can be both a blessing and a drain. They are neither fully human nor fully other — recognisably like people, but operating by different rules, in possession of a different relationship to the landscape. The creature of the hinterlands is always this figure: familiar enough to be recognisable, different enough to be disorienting." },
        { thinker: "Le Guin — the carrier bag and its users", note: "Le Guin's carrier bag theory implicitly describes the creatures of the hinterlands: the gatherers, the tenders, the ones who move through the landscape attending to what is actually there rather than imposing a predetermined story upon it. These are not the heroes of the dominant narrative (who move in straight lines toward goals) but the practitioners of a different kind of intelligence — distributed, patient, attentive to the particular. The regenerative practitioner is Le Guin's carrier bag figure in contemporary form." },
        { thinker: "Tsing — salvage accumulation", note: "Tsing's concept of salvage accumulation — the way capitalism captures value from non-capitalist forms of life without producing them — identifies creatures of the hinterlands as the unwitting generators of the value that the centre extracts. The matsutake forager, the peasant farmer, the indigenous community whose knowledge is appropriated — all are hinterlands creatures whose worlds are productive precisely because they have not been fully colonised. Their challenge is to remain generative without being captured." },
      ],
      x: 400, y: 380, color: "#4ade80", status: "consolidated",
    },

    // ── The House ─────────────────────────────────────────────────────────────

    {
      id: "the-house",
      term: "The House",
      definition: "The bounded interior that stands against the wider landscape — the only reliable dwelling-place in a world structured by threat and the uncanny. In the Zangskar material, the house emerges as the primary refuge: when night falls and the landscape takes on its threatening aspect, when the man.i-wall becomes a gathering place for spirits and the paths are travelled by forces that don't distinguish between village and mountain, it is the sealed house that offers the only certain dwelling. The kitchen with its stove becomes an island of warmth and certainty in a landscape that is fundamentally uncertain. Bachelard's phenomenology of the house as the original form of human dwelling — the sheltered, enclosed, remembered space within which a human life takes shape — converges here with the Zangskari evidence: the house is the site of genuine habitation, the place where the fourfold can momentarily be held in a manageable form. But the house also names the limits of dwelling: beyond its walls, the hinterlands begin.",
      thinkers: ["Gaston Bachelard", "Samuel Maoz", "Martin Heidegger", "Emmanuel Levinas"],
      tags: ["dwelling", "interior", "shelter", "threshold", "home"],
      connections: [
        { to: "dwelling-limits", label: "is where dwelling is reliable" },
        { to: "threshold", label: "defines the boundary of" },
        { to: "the-uncanny", label: "is the refuge from" },
        { to: "hinterlands-node", label: "marks the edge of" },
        { to: "animate-landscape", label: "is the sealed interior that stands against" },
        { to: "waldeinsamkeit", label: "is what one leaves behind entering" },
      ],
      nuances: [
        { thinker: "Bachelard — the poetics of space", note: "Bachelard's phenomenology of the house describes it as the first universe of the human being — the original form of shelter and belonging from which all subsequent experience of space is oriented. The house is not merely a physical structure but a field of psychological meanings: the cellar is the unconscious, the attic is dreams, the corner is solitude, the nest is intimacy. To inhabit a house fully is to know its every recess — and to be known by them." },
        { thinker: "Maoz — the sealed house", note: "In Zangskar, the house is actively sealed against the threatening forces of the landscape: red ochre paint diverts the wandering tsen; the rigsum gonbo watches over the front door; protective door prints divert the envious gaze of neighbours. The house is not merely comfortable but defended — a carefully maintained boundary between the domestic interior and the spirit-haunted exterior. Dwelling, in this context, is not a harmonious opening toward the landscape but a constant vigilance against it." },
        { thinker: "Levinas — the dwelling as primary", note: "Levinas argues, against Heidegger, that dwelling in a house is the ontological precondition of all other forms of human activity: one must first be at home — sheltered, fed, intimate — before one can go out and encounter the other, the world, the demand of ethics. The house is not a retreat from the world but its condition of possibility: it is what makes the risky venture into the hinterlands possible, because there is somewhere to return to." },
      ],
      x: 200, y: 500, color: "#94a3b8", status: "consolidated",
    },

  ],
};
