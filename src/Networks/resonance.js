export const resonanceNetwork = {
  id: "resonance",
  label: "Resonance",
  subtitle: "Sympathetic Vibration, Harmonia & the Depth of Being Moved",
  accent: "#60a5fa",
  storageKey: "semantic-network-resonance",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "resonance-node",
      term: "Resonance",
      definition: "The condition in which something vibrates in response to another — not merely receiving an impact but being set into motion by it, at its own natural frequency, in a way that amplifies and transforms both parties. Resonance is older than any single tradition: it names a structural feature of the world that physics, cosmology, myth, psychology, and social thought have each articulated in their own register. What is common across these registers is a specific quality of relation: neither mere contact (which leaves both parties unchanged) nor merger (which dissolves distinction), but a responsive vibration in which two things remain themselves while something passes between them that could not have existed in either alone. To resonate is to be genuinely affected — to be moved, at one's own depth, by what one encounters.",
      thinkers: ["Hartmut Rosa", "Victor Zuckerkandl", "Pythagoras", "C.G. Jung", "Martin Buber"],
      tags: ["relation", "cosmology", "phenomenology", "depth", "vibration", "ontology"],
      connections: [
        { to: "harmonia", label: "ancient ground of" },
        { to: "sympathetic-vibration", label: "physical basis of" },
        { to: "being-moved", label: "felt as" },
        { to: "rosa-resonance", label: "sociologically theorised by" },
        { to: "echo", label: "distorted form of" },
        { to: "the-sounding-world", label: "requires" },
        { to: "recognition", label: "enacted through" },
      ],
      x: 400, y: 320, color: "#60a5fa", status: "consolidated",
    },

    // ── Physical / Cosmological ───────────────────────────────────────────────

    {
      id: "harmonia",
      term: "Harmonia",
      definition: "The Greek cosmological principle of fitting-together — the hidden concord that holds apparently unlike things in right relation. For Pythagoras and his school, harmonia was not merely pleasant sound but a mathematical and ontological truth: the ratios governing musical intervals are the same ratios that govern the spacing of planetary orbits, the mixture of elements, and the constitution of the soul. The cosmos is not merely orderly but tuned — and resonance is the audible sign of this tuning. Heraclitus extended the concept: harmonia is not the absence of tension but its productive holding, the bow and the lyre united by the string that is always being pulled in two directions at once.",
      thinkers: ["Pythagoras", "Heraclitus", "Plato", "Johannes Kepler"],
      tags: ["cosmology", "ancient-greek", "mathematics", "ontology"],
      connections: [
        { to: "resonance-node", label: "is the cosmological ground of" },
        { to: "sympathetic-vibration", label: "is the principle behind" },
        { to: "the-sounding-world", label: "names the resonant order of" },
        { to: "call-and-response", label: "is realised through" },
      ],
      nuances: [
        { thinker: "Pythagoras — music of the spheres", note: "The Pythagorean doctrine of the music of the spheres (musica universalis) held that the planets in their orbits produce tones inaudible to ordinary human ears but constitutive of cosmic order. The ratios of these tones — discovered empirically through the monochord — were the same as the ratios of just musical intervals. Mathematics, music, and cosmology were one inquiry." },
        { thinker: "Kepler — Harmonices Mundi", note: "Kepler's 1619 Harmonices Mundi attempted to demonstrate that the angular velocities of the planets correspond to the intervals of the musical scale. He was not writing metaphor: he believed the solar system is literally a polyphonic composition. The cosmological ambition of resonance runs directly through him." },
        { thinker: "Heraclitus — the tension of opposites", note: "Heraclitus's fragments insist that the unity of the cosmos is the harmonia of opposites held in tension: the bow and the lyre are unified precisely by the opposing forces in their strings. Resonance on this account is not agreement but the productive tension that makes a note possible." },
      ],
      x: 180, y: 140, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "sympathetic-vibration",
      term: "Sympathetic Vibration",
      definition: "The physical phenomenon in which a body set into oscillation causes another body — sharing its natural frequency — to vibrate without direct contact. Strike one tuning fork and another across the room will hum. This is the physical root of all metaphorical uses of resonance: the demonstration that things can be moved by each other across a distance, through the medium of air or field, simply by virtue of sharing a structure. Sympathetic vibration is the empirical ground for the intuition that like calls to like — and that the world is made of things that can be tuned to each other.",
      thinkers: ["Galileo Galilei", "Ernst Chladni", "Hans Jenny"],
      tags: ["physics", "acoustics", "vibration", "frequency", "material"],
      connections: [
        { to: "harmonia", label: "gives empirical body to" },
        { to: "resonance-node", label: "is the physical basis of" },
        { to: "the-sounding-world", label: "pervades" },
        { to: "morphic-resonance", label: "extended into biology by" },
      ],
      nuances: [
        { thinker: "Galileo — pendulum resonance", note: "Galileo observed that a pendulum set swinging would gradually induce motion in another pendulum of the same length hung nearby — even without physical contact. He described this as a kind of 'sympathy' between the two systems, an ancient word he could not quite escape even in the context of nascent mechanics." },
        { thinker: "Chladni figures", note: "Ernst Chladni's sand-pattern experiments — in which sand on a vibrating plate organises itself into precise geometric figures at different frequencies — demonstrated that vibration has form: each frequency produces its own pattern. This gave visual evidence that the world is full of hidden order waiting to be called forth by the right resonance." },
        { thinker: "Cymatics — water and sound", note: "Cymatics (Hans Jenny's term for Chladni's extended project) showed that sound organises matter — that resonant frequencies produce stable, complex, beautiful forms in fluid and granular media. This connected physical resonance to cosmogonic myths of the world spoken or sung into being." },
      ],
      x: 160, y: 300, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "the-sounding-world",
      term: "The Sounding World",
      definition: "The understanding of reality as fundamentally sonorous — constituted by vibration, frequency, and resonant address rather than by silent, inert matter. This is not a single thinker's thesis but a convergent intuition across traditions: the Vedic understanding of nada brahman (the universe as sound), the Gospel of John's logos (the Word through which all things were made), Indigenous cosmologies in which landscape and community are in ongoing resonant address, and contemporary physics' description of matter as standing waves in quantum fields. The sounding world is the ontological context without which resonance would be mere metaphor: the claim that resonance is not an exception but the norm.",
      thinkers: ["David Abram", "R. Murray Schafer", "Robin Wall Kimmerer", "Pauline Oliveros"],
      tags: ["cosmology", "ecology", "animism", "soundscape", "ontology"],
      connections: [
        { to: "resonance-node", label: "is the ontological context of" },
        { to: "harmonia", label: "is ordered by" },
        { to: "logos", label: "is given voice by" },
        { to: "call-and-response", label: "is structured as" },
        { to: "sympathetic-vibration", label: "is physically constituted by" },
      ],
      nuances: [
        { thinker: "Nada Brahman — the Vedic sound-cosmos", note: "In certain Vedic and Tantric traditions, the universe is understood as the vibration of Brahman — nada brahman, the sound-absolute. The primordial sound om (AUM) is not a symbol of this but its audible form: a resonance that underlies and generates all differentiated existence. To chant is to participate consciously in the cosmic resonance that is always already occurring." },
        { thinker: "Abram — the more-than-human sounding field", note: "David Abram argues that the animate earth is not silent but full of address — wind, birdsong, insect hum, water — and that oral cultures maintain an active, reciprocal resonance with this field. Alphabetic literacy, he argues, redirected human attention from the sounding landscape to the silent written page, gradually deafening us to the more-than-human conversation we inhabit." },
        { thinker: "Oliveros — deep listening", note: "Composer Pauline Oliveros developed 'deep listening' as both a practice and a philosophy: the cultivation of attention to the entire field of sound — including those sounds we habitually filter out — as a way of inhabiting the sounding world rather than merely extracting information from it. Deep listening is a practice of resonance." },
      ],
      x: 200, y: 470, color: "#34d399", status: "consolidated",
    },

    // ── Mythic / Sacred ───────────────────────────────────────────────────────

    {
      id: "logos",
      term: "Logos",
      definition: "The word, reason, or principle through which the world is spoken into being and held in order — a concept that moves across Greek philosophy, Jewish wisdom literature, and Christian theology while retaining a common resonant core: that reality is not mute but addressed, that things exist because something has called them forth. In Heraclitus, logos is the rational principle hidden beneath apparent chaos. In John's Gospel, it is the Word that was in the beginning and through which all things were made. What these share is the intuition that the world is a response to a prior sounding — that existence itself is a form of resonance with an originary call.",
      thinkers: ["Heraclitus", "Philo of Alexandria", "Gospel of John", "Hans-Georg Gadamer"],
      tags: ["sacred", "language", "cosmogony", "theology", "creation"],
      connections: [
        { to: "the-sounding-world", label: "gives voice to" },
        { to: "call-and-response", label: "inaugurates all" },
        { to: "echo", label: "without genuine response becomes" },
        { to: "recognition", label: "is the moment of resonant" },
      ],
      nuances: [
        { thinker: "Heraclitus — logos as hidden harmony", note: "For Heraclitus, logos is the rational account of how things are — but also the pattern that is actually in things, whether or not anyone articulates it. 'Although the logos is common, most people live as if they had their own private understanding.' To resonate with the logos is to hear what is actually being said by the world's unfolding." },
        { thinker: "John 1:1 — In the beginning was the Word", note: "The opening of John's Gospel is a cosmogonic resonance claim: the Word (logos) was not only the agent of creation but its substance — 'without him nothing was made that has been made.' Creation is not fabrication from inert material but a calling forth: things exist because they have been addressed, and they continue to exist as ongoing responses to that address." },
        { thinker: "Gadamer — language as the house of being", note: "Gadamer, following Heidegger, argued that language is not a tool we use to describe a pre-linguistic world but the medium in which world and understanding are co-constituted. To understand something is to find the word that resonates with it — and the word, when found, transforms both speaker and thing." },
      ],
      x: 420, y: 100, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "echo",
      term: "Echo",
      definition: "The mythological and phenomenological figure of resonance that returns only what was sent — the copy without the response, the reflection without the transformation. In Ovid's Metamorphoses, Echo is cursed to repeat only the last words spoken to her; she wastes away loving Narcissus, who loves only his own reflection. Echo and Narcissus together name a closed system: nothing genuinely new enters. As a phenomenological concept, echo names the failure mode of resonance — the encounter that appears to respond but in fact only confirms. Recognising echo — in a conversation, a community, a media environment — is part of learning to seek genuine resonance.",
      thinkers: ["Ovid", "Hartmut Rosa", "Julia Kristeva", "Marshall McLuhan"],
      tags: ["myth", "failure-mode", "narcissism", "media", "relation"],
      connections: [
        { to: "resonance-node", label: "is the distorted form of" },
        { to: "logos", label: "without genuine response becomes" },
        { to: "rosa-resonance", label: "is distinguished from resonance by" },
        { to: "being-moved", label: "is its opposite — remaining unmoved" },
        { to: "recognition", label: "substitutes mirroring for" },
      ],
      nuances: [
        { thinker: "Ovid — Echo and Narcissus", note: "Ovid's myth is a parable of resonance's failure on both sides: Narcissus cannot be moved by anything other than his own image; Echo cannot speak except in repetition. They are mirror-images of the same impoverishment — one absorbed in self, one reduced to reflection — and their meeting produces nothing but frustration." },
        { thinker: "Rosa — echo chambers", note: "Rosa uses the echo concept to diagnose a pathology of contemporary media culture: the algorithmically curated environment that returns only amplified versions of what we already believe, producing the feeling of resonance while foreclosing genuine encounter with alterity. Echo chambers are resonance simulacra — they feel like connection while enforcing isolation." },
        { thinker: "McLuhan — the medium echoes", note: "McLuhan's observation that Narcissus mistook his own reflection for another being becomes a media theory: every medium is an extension of ourselves that, if not critically examined, becomes a closed loop of self-amplification. The resonance we feel with our screens may be the echo of our own projected desire." },
      ],
      x: 620, y: 160, color: "#f87171", status: "consolidated",
    },

    // ── Psychological / Depth ─────────────────────────────────────────────────

    {
      id: "archetypal-resonance",
      term: "Archetypal Resonance",
      definition: "The experience in which a story, image, figure, or encounter strikes a depth in us that exceeds the personal — when something in culture, myth, or dream calls forth a response that feels ancient, collective, and larger than individual history. Jung understood archetypes not as fixed images but as dynamic patterns of psychic energy — inherited predispositions that, when activated by the right stimulus, produce resonance across individuals and epochs. Hillman extended this into a poetics: the soul is a field of imaginal resonances, and psychological life is the ongoing attempt to hear which images are calling.",
      thinkers: ["C.G. Jung", "James Hillman", "Marie-Louise von Franz", "Clarissa Pinkola Estés"],
      tags: ["depth-psychology", "myth", "archetype", "soul", "image"],
      connections: [
        { to: "resonance-node", label: "operates through" },
        { to: "being-moved", label: "is experienced as" },
        { to: "recognition", label: "produces a specific form of" },
        { to: "echo", label: "must be distinguished from mere" },
        { to: "logos", label: "arises when psyche resonates with" },
      ],
      nuances: [
        { thinker: "Jung — collective unconscious as resonant field", note: "Jung's collective unconscious is not a storehouse of identical images but a field of structural tendencies — forms that predispose individuals to experience certain patterns of meaning, emotion, and imagery. The archetype is like a crystal lattice that shapes how psychic energy organises itself: it is the frequency, not the content. When an archetype is activated, the individual resonates with something larger than personal history." },
        { thinker: "Hillman — soul-making through image", note: "James Hillman's archetypal psychology reframes the therapeutic task as learning to resonate with the images that arise in dreams, symptoms, and obsessions — not to interpret them away but to dwell with them until their particular quality of soul becomes perceptible. Images resonate; they do not mean. Psychological life is imaginal resonance." },
        { thinker: "Estés — the wild resonance", note: "Clarissa Pinkola Estés' work on the wild woman archetype uses the concept of resonance explicitly: certain stories produce a specific response in women across cultures — a shiver of recognition, a sense of something known and remembered — that marks the activation of an archetypal pattern. The response is not learned but called forth." },
      ],
      x: 580, y: 440, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "morphic-resonance",
      term: "Morphic Resonance",
      definition: "Rupert Sheldrake's controversial hypothesis that nature is shaped by memory — that organisms, habits, and forms are influenced by previous similar organisms across time and space through a non-material field of resonance. A morphic field is the field of a species, a habit, or a form; morphic resonance is the influence of past similar patterns on present ones, without the transfer of energy but through a kind of formal resonance. The hypothesis sits outside mainstream science, but it gives philosophical form to a widely held intuition: that like calls to like across time, that the past is not merely over but still resonantly present.",
      thinkers: ["Rupert Sheldrake", "Henri Bergson", "Alfred North Whitehead"],
      tags: ["biology", "field-theory", "memory", "pattern", "time"],
      connections: [
        { to: "sympathetic-vibration", label: "extends across time what" },
        { to: "archetypal-resonance", label: "has structural parallels with" },
        { to: "resonance-node", label: "proposes a biological form of" },
        { to: "the-sounding-world", label: "implies a world structured by" },
      ],
      nuances: [
        { thinker: "Sheldrake — A New Science of Life", note: "Sheldrake proposes that each species has a morphic field — a kind of memory-field — and that learning or change in one part of the species makes the same learning easier for others, not through genetic transmission but through resonance across the field." },
        { thinker: "Bergson — duration and memory", note: "Bergson's philosophy of duration, in which the past is not abolished but carried forward in the living present, offers a sympathetic context for Sheldrake's intuition. If time is not a series of discrete instants but a continuous flowing, then past forms are not simply gone — they persist, resonantly, in the duration of living things." },
        { thinker: "Philosophical value regardless of scientific status", note: "Whatever its empirical status, morphic resonance is philosophically significant as a rigorous attempt to think the resonance between like patterns across time — the sense in which a tradition, a practice, or a form of life is not merely remembered but resonantly continuous. It names something that purely mechanistic accounts cannot accommodate." },
      ],
      x: 160, y: 460, color: "#34d399", status: "provisional",
    },

    // ── Relational / Ethical ──────────────────────────────────────────────────

    {
      id: "rosa-resonance",
      term: "Rosa's Resonance",
      definition: "Hartmut Rosa's sociological theory of resonance as the fundamental criterion of a good life and a good society — understood in contrast to the alienation produced by modernity's logic of acceleration and availability. For Rosa, resonance is a specific mode of relation to world, others, and self in which one is genuinely affected, in which something speaks to us and we can respond, and in which both parties are transformed by the encounter. Resonance has four axes: the horizontal (social relations), the diagonal (work, practice, democracy), the vertical (nature, history, religion), and the self (one's own body and inner life).",
      thinkers: ["Hartmut Rosa"],
      tags: ["sociology", "modernity", "alienation", "ethics", "critical-theory"],
      connections: [
        { to: "resonance-node", label: "sociologically theorises" },
        { to: "being-moved", label: "requires genuine" },
        { to: "echo", label: "distinguishes resonance from" },
        { to: "call-and-response", label: "is structured as" },
        { to: "recognition", label: "produces and requires" },
      ],
      nuances: [
        { thinker: "Rosa — the four axes of resonance", note: "Rosa's four axes correspond to different scales of relational life. Horizontal resonance: friendship, love, political community. Diagonal resonance: work, civic engagement, democratic practice. Vertical resonance: nature, art, religion, history. Self-resonance: the body, emotions, inner voice — the capacity to be moved by and responsive to one's own depths." },
        { thinker: "Rosa — acceleration as resonance-killer", note: "Rosa's diagnosis of modernity centres on the way acceleration converts the world into a series of points to be reached, boxes to be ticked, things to be consumed. In this mode, nothing has time to speak to us; everything is available but nothing resonates. The acceleration of availability paradoxically produces a world of mute, manipulable objects." },
        { thinker: "Rosa — resonance is not harmony", note: "Rosa carefully distinguishes resonance from harmony, agreement, or pleasant feeling. Resonance can be disturbing, demanding, even painful — what matters is that one is genuinely moved, that something passes between self and world that transforms both. A resonant confrontation with death or injustice is still resonance; a comfortable encounter that leaves one unchanged is not." },
      ],
      x: 600, y: 300, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "being-moved",
      term: "Being Moved",
      definition: "The fundamental event of resonance as experienced from within — the moment in which something external penetrates the habitual armour of self-possession and genuinely affects us, shifts something in us, leaves us changed. Being moved is the phenomenological signature of resonance: it is how resonance is felt. It stands opposed to two failure modes: the numbness that cannot be reached by what is real, and the sentimental emotionality that is moved by everything superficially and therefore by nothing deeply. To be genuinely moved is to allow something to matter — which is itself a form of exposure and vulnerability.",
      thinkers: ["Hartmut Rosa", "Martha Nussbaum", "Simone Weil", "Rainer Maria Rilke"],
      tags: ["phenomenology", "emotion", "vulnerability", "ethics", "affect"],
      connections: [
        { to: "resonance-node", label: "is the felt form of" },
        { to: "rosa-resonance", label: "is required by" },
        { to: "archetypal-resonance", label: "is the experience of" },
        { to: "echo", label: "is the opposite of" },
        { to: "recognition", label: "accompanies genuine" },
        { to: "call-and-response", label: "is what enables" },
      ],
      nuances: [
        { thinker: "Nussbaum — upheavals of thought", note: "Martha Nussbaum's philosophy of emotion treats emotions not as irrational intrusions but as forms of evaluative judgment — and being moved as a cognitive as well as affective event. To be moved by a tragedy is to judge that what has happened matters, that the persons involved have genuine worth. Emotional responsiveness is therefore an epistemic virtue, not a weakness." },
        { thinker: "Weil — affliction and openness", note: "Simone Weil distinguishes mere suffering from affliction — the condition in which something penetrates to the root of one's existence and cannot be managed or absorbed. The capacity to be genuinely moved — to allow affliction to be affliction — is a form of spiritual attention. The temptation is always to protect oneself, to manage the encounter, to remain at a safe distance." },
        { thinker: "Rilke — beauty as the beginning of terror", note: "The first Duino Elegy opens: 'Who, if I cried out, would hear me among the angels?' Rilke's great subject is the terrifying beauty of existence — things so resonant they threaten to overwhelm. Being moved, for Rilke, is not comfort but exposure: the world's beauty strikes like an arrow, and the only adequate response is to become an instrument worthy of the wound." },
      ],
      x: 440, y: 500, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "recognition",
      term: "Recognition",
      definition: "The moment in which one is seen — and the resonance of being genuinely perceived, named, or affirmed in one's particularity. Recognition is not mere identification (being categorised correctly) but an event of resonant address: the other turns toward me in a way that acknowledges what I actually am, not merely what role I occupy. Hegel's master-slave dialectic made recognition central to self-consciousness; Honneth's critical theory developed it as the basic currency of social life. In each case, recognition operates through resonance: the other's perception vibrates at the same frequency as what I most deeply am.",
      thinkers: ["G.W.F. Hegel", "Axel Honneth", "Charles Taylor", "Martin Buber"],
      tags: ["social-theory", "ethics", "identity", "relation", "phenomenology"],
      connections: [
        { to: "resonance-node", label: "is a primary form of" },
        { to: "being-moved", label: "accompanies genuine" },
        { to: "rosa-resonance", label: "is a dimension of" },
        { to: "call-and-response", label: "is the culmination of" },
        { to: "echo", label: "is corrupted into mere mirroring by" },
        { to: "archetypal-resonance", label: "has an impersonal depth in" },
      ],
      nuances: [
        { thinker: "Honneth — the struggle for recognition", note: "Axel Honneth's critical theory argues that the fundamental social struggle is not primarily over material distribution but over recognition — the need to be affirmed in one's love, one's rights, and one's social contribution. Social pathologies (humiliation, invisibility, disrespect) are injuries to resonance: the world fails to vibrate back in a way that confirms one's existence as mattering." },
        { thinker: "Buber — I-Thou and genuine address", note: "Buber distinguishes the I-It relation (in which the other is an object to be used or understood) from the I-Thou relation (in which the other is addressed as a genuine subject). Recognition, in Buber's terms, is the opening of an I-Thou encounter — and it is mutual: the moment of genuine recognition transforms both parties, because both are genuinely present to the other's presence." },
        { thinker: "Taylor — the politics of recognition", note: "Charles Taylor argues that misrecognition — the projection of a diminished or distorted identity onto a person or group — can be as damaging as material deprivation. Identity is partly dialogically formed: we become who we are through being recognised, and when that recognition is withheld or falsified, something is damaged at the root." },
      ],
      x: 240, y: 200, color: "#a78bfa", status: "consolidated",
    },

    // ── Ecological / Animist ──────────────────────────────────────────────────

    {
      id: "call-and-response",
      term: "Call and Response",
      definition: "The structural pattern of resonant exchange — in which one sounding calls forth another, which calls forth another, in a living chain of mutual address and reply. Call and response is the form that resonance takes when it unfolds in time between distinct voices. It is the structure of West African and African-American musical traditions; the pattern of ecological communication (bird territories, whale song, wolf howl); the form of prayer, liturgy, and the psalms; and what Buber means by genuine dialogue. In each case, something is risked — the call goes out without guarantee of reply — and when reply comes, it is not merely an echo but a genuine response: something new has entered.",
      thinkers: ["Martin Buber", "Fred Moten", "Robin Wall Kimmerer", "Paul Celan"],
      tags: ["music", "ecology", "dialogue", "liturgy", "exchange", "relation"],
      connections: [
        { to: "resonance-node", label: "is the temporal structure of" },
        { to: "the-sounding-world", label: "is how a resonant world is organised" },
        { to: "logos", label: "is inaugurated by" },
        { to: "being-moved", label: "is what enables genuine" },
        { to: "recognition", label: "culminates in" },
        { to: "harmonia", label: "realises cosmological" },
      ],
      nuances: [
        { thinker: "West African and African diasporic tradition", note: "Call and response is a structural feature of many West African musical traditions and their diasporic descendants — gospel, blues, jazz, funk. It is not merely an aesthetic pattern but a social technology: the congregation's response completes the preacher's call; the band's reply shapes the soloist's next phrase. The form enacts a community in which no voice is sovereign and all voices are accountable to each other's sounding." },
        { thinker: "Moten — the resistance of the object", note: "Fred Moten's work on Black performance and social life argues that the sounding of the commodity — the cry of the slave as commodity — inaugurates a call that has never been fully answered, a resonance that continues to organise Black cultural life as a response to and through that originary wound. Call and response, on this reading, is not only aesthetic but political: a way of keeping alive what refuses to be silenced." },
        { thinker: "Kimmerer — species as call and response", note: "Kimmerer reads the relations between species — pollinator and flower, mycorrhizal network and root, predator and prey — as forms of call and response refined over millions of years. The flower's colour is a call; the bee's visit is a response. The ecosystem is a vast, slow conversation in which each species has both a voice and an obligation to listen." },
      ],
      x: 380, y: 500, color: "#34d399", status: "consolidated",
    },

  ],
};
