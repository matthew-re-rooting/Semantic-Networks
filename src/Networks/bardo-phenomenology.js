export const bardoPhenomenologyNetwork = {
  id: "bardo-phenomenology",
  label: "Bardo Phenomenology",
  subtitle: "Haunting, Liminality & the Intermediate State",
  accent: "#c084fc",
  storageKey: "semantic-network-bardo-phenomenology",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "the-bardo",
      term: "The Bardo",
      definition: "The intermediate state — literally 'between' (bar) 'two' (do) in Tibetan — the condition of being in transition between one form of existence and another. The Bardo Thodol (the Tibetan Book of the Dead, more precisely 'Liberation Through Hearing in the Intermediate State') describes six bardos: not only the state after death but the bardo of waking life, the bardo of dream, the bardo of meditation, the bardo of dying, the bardo of dharmata (the arising of luminosity), and the bardo of becoming (the transition toward rebirth). The key phenomenological insight is that bardo is not only what happens after death but the structure of all transitional experience — any moment of groundlessness, uncertainty, or between-ness is a bardo. To inhabit a bardo is to be in a state in which the old structures have dissolved and the new ones have not yet formed: the familiar landmarks are gone, the body may be absent or unreliable, and consciousness is more naked and more vulnerable than ordinary life permits. The bardo is both a cosmological claim about what happens to consciousness between lives and a phenomenological description of the structure of all liminal experience.",
      thinkers: ["Padmasambhava", "Chögyam Trungpa", "Sogyal Rinpoche", "Francesca Fremantle"],
      tags: ["tibetan-buddhism", "liminality", "death", "consciousness", "transition"],
      connections: [
        { to: "haunting", label: "is the condition of being stuck in" },
        { to: "the-between", label: "is the formal structure of" },
        { to: "liminality", label: "is the secular parallel to" },
        { to: "the-clear-light", label: "offers the opportunity of" },
        { to: "karmic-winds", label: "is navigated through" },
        { to: "the-wandering-consciousness", label: "is experienced as" },
        { to: "hospicing-modernity", label: "provides the framework for" },
        { to: "the-six-bardos", label: "encompasses" },
      ],
      x: 400, y: 300, color: "#c084fc", status: "consolidated",
    },

    // ── Tibetan Core ──────────────────────────────────────────────────────────

    {
      id: "the-six-bardos",
      term: "The Six Bardos",
      definition: "The complete map of intermediate states in Tibetan Buddhist teaching — six conditions of consciousness, each with its own texture, its own dangers, and its own opportunities for recognition and liberation. The bardo of waking life (kyné bardo): ordinary consciousness, where the habits and attachments that will shape the death bardo are formed. The bardo of dream (milam bardo): the intermediate state of sleep and dreaming, where consciousness rehearses its capacity for recognition in conditions less stable than waking. The bardo of meditation (samten bardo): the luminous awareness cultivated in practice. The bardo of dying (chikhai bardo): the moment of death, when the elements dissolve and the Clear Light appears. The bardo of dharmata (chönyid bardo): the arising of the peaceful and wrathful deities as projections of one's own mind. The bardo of becoming (sidpa bardo): the wandering of consciousness driven by karmic winds toward rebirth. The crucial insight is that these six are not sequential stations through which one passes once at death but recurring structures of experience — the dream bardo is entered every night; the dying bardo is rehearsed in every moment of genuine release.",
      thinkers: ["Padmasambhava", "Karma Lingpa", "Chögyam Trungpa", "Tenzin Wangyal Rinpoche"],
      tags: ["tibetan-buddhism", "consciousness", "death", "dream", "meditation"],
      connections: [
        { to: "the-bardo", label: "is the full structure of" },
        { to: "tibetan-dream-yoga", label: "works with the dream bardo of" },
        { to: "the-clear-light", label: "appears in the dying bardo of" },
        { to: "the-peaceful-wrathful-deities", label: "arise in the dharmata bardo of" },
        { to: "karmic-winds", label: "drive the becoming bardo of" },
        { to: "rigpa", label: "is what is recognised or missed in each of" },
      ],
      nuances: [
        { thinker: "Trungpa — the bardos as present experience", note: "Chögyam Trungpa's radical reinterpretation of the bardos insisted that they are not primarily teachings about what happens after death but descriptions of how mind works right now. The chikhai bardo's dissolution of solidity happens every time a fixed sense of self is threatened; the chönyid bardo's projections of terrifying and beautiful visions happen in every strong emotional experience; the sidpa bardo's desperate search for a body happens every time consciousness grasps for familiar ground. The bardos are a map of mind, not only a map of death." },
        { thinker: "Tenzin Wangyal — the Bön tradition", note: "The Bön tradition — Tibet's pre-Buddhist spiritual lineage — has its own parallel bardo teachings, the A-Khrid and Dzogchen systems, which describe similar intermediate states with different symbolic imagery. Tenzin Wangyal Rinpoche's work makes clear that the bardo teachings are not uniquely Buddhist but arise from a deeper Tibetan understanding of consciousness as fundamentally luminous and of the intermediate states as opportunities for the recognition of this luminosity." },
      ],
      x: 220, y: 160, color: "#c084fc", status: "consolidated",
    },

    {
      id: "the-clear-light",
      term: "The Clear Light",
      definition: "The luminosity that appears at the moment of death — and in deep sleep, and in the gaps between thoughts in meditation — as the most direct presentation of the mind's ultimate nature. The Clear Light is not something exotic or external: it is what awareness is when it is not obscured by conceptual elaboration, habitual tendency, or the sense of a separate self. At the moment of death, when the elements dissolve and ordinary consciousness ceases, the Clear Light arises spontaneously, like the sun emerging from behind clouds. If consciousness can recognise this luminosity as its own nature — if it can rest in it rather than fleeing from it — liberation is immediate. Most consciousness cannot: it is too conditioned, too frightened by the unfamiliar, too attached to the structures of ordinary experience. It flees from the brilliance of its own nature and enters the subsequent bardos. The Clear Light is therefore the highest opportunity and the most commonly missed moment: the gift that is always being offered and almost always refused.",
      thinkers: ["Padmasambhava", "Longchenpa", "Dilgo Khyentse Rinpoche", "Ken Wilber"],
      tags: ["tibetan-buddhism", "consciousness", "luminosity", "liberation", "death"],
      connections: [
        { to: "the-bardo", label: "is the opportunity offered in" },
        { to: "rigpa", label: "is the recognition of" },
        { to: "the-six-bardos", label: "appears in the dying bardo of" },
        { to: "the-witness", label: "is approached through" },
        { to: "tibetan-dream-yoga", label: "is prepared for through" },
        { to: "dissolution-of-self", label: "is the condition for encountering" },
      ],
      nuances: [
        { thinker: "Longchenpa — the nature of mind", note: "Longchenpa's vast commentary on the Dzogchen tradition describes the Clear Light not as a state to be achieved but as the ever-present ground of all experience: mind's natural state is luminous emptiness, and the apparent obscurations are not something added to this ground but movements within it. The Clear Light is not encountered for the first time at death; it is the ever-present background that death temporarily strips away the obscuring foreground to reveal." },
        { thinker: "The phenomenology of recognition", note: "The moment of recognising the Clear Light has a specific phenomenological structure: it is not a cognitive achievement (one cannot think one's way to it) nor a passive reception (one must have been prepared by practice to recognise it). It is more like the moment of aesthetic recognition described in the musicality network — the moment when a pattern suddenly coheres, when what was obscure becomes transparent, when one sees what was always already there. The difference is that the stakes are ultimate." },
      ],
      x: 580, y: 160, color: "#c084fc", status: "consolidated",
    },

    {
      id: "rigpa",
      term: "Rigpa",
      definition: "The natural state of awareness — the clear, luminous, spacious quality of mind when it is not obscured by conceptual elaboration or habitual reactivity. Rigpa is not a special state to be achieved but what mind always already is, prior to the movements of thought, emotion, and self-referential concern. It is both the recognition that the Clear Light is one's own nature and the capacity for this recognition — the awakened awareness that can see through the bardo's projections and rest in its own luminosity. In the bardo, rigpa is what is either recognised or missed at each moment of potential liberation: when the Clear Light appears, rigpa recognises it as itself; when the wrathful deities arise, rigpa recognises them as its own projections. The loss of rigpa — marigpa, non-recognition, ignorance — is what keeps consciousness wandering in the bardo and cycling through the six realms. Phenomenologically, rigpa is the state in which the witness and the witnessed are recognised as one: not the detached observer watching from outside, but awareness knowing itself as the ground of all appearance.",
      thinkers: ["Padmasambhava", "Longchenpa", "Sogyal Rinpoche", "Namkhai Norbu"],
      tags: ["tibetan-buddhism", "awareness", "recognition", "dzogchen", "liberation"],
      connections: [
        { to: "the-clear-light", label: "is the recognition of" },
        { to: "the-bardo", label: "is what navigates" },
        { to: "the-witness", label: "is the phenomenological approach to" },
        { to: "the-six-bardos", label: "is what is recognised or missed in" },
        { to: "tibetan-dream-yoga", label: "is cultivated through" },
        { to: "haunting", label: "is the opposite of" },
      ],
      nuances: [
        { thinker: "Sogyal Rinpoche — the nature of mind", note: "Sogyal Rinpoche's description of rigpa in The Tibetan Book of Living and Dying distinguishes it from ordinary mind (sems) as the difference between the sky and the clouds: ordinary mind is the constant movement of thoughts, emotions, and perceptions; rigpa is the sky in which all this movement occurs — unchanging, unaffected, luminous. The practice of recognising rigpa is the practice of shifting identification from the clouds to the sky; and this shift is what the bardo requires." },
        { thinker: "Non-recognition as the root of wandering", note: "The Tibetan term for ignorance — marigpa — literally means non-recognition, the failure to recognise one's own nature. This is the root of all suffering and all bardo wandering: not a lack of information or a moral failure but a failure of recognition, a looking past what is directly present. The bardo teachings are instructions for recognition, and the entire practice of Tibetan Buddhism can be understood as preparation for the moment of recognition that the dying bardo offers." },
      ],
      x: 580, y: 300, color: "#a855f7", status: "consolidated",
    },

    {
      id: "karmic-winds",
      term: "Karmic Winds",
      definition: "The forces that drive consciousness through the bardo without its consent — not external compulsions imposed from outside but the accumulated force of one's own habitual tendencies, attachments, and aversions, which have solidified through repeated action into something that now moves the consciousness like a wind moves a leaf. In the Sidpa Bardo (the bardo of becoming), the wandering consciousness is blown hither and thither by karmic winds: drawn toward certain kinds of experience by attachment, repelled by others by aversion, unable simply to rest or choose because the karmic momentum has built up a force that overwhelms the moment-to-moment capacity for choice. This is the bardo's form of unfreedom: not external constraint but internal compulsion, the self haunted by its own accumulated patterns. Phenomenologically, karmic winds describe the experience of being driven by forces one cannot see, cannot address, and cannot resist through ordinary willpower — the sense that one is not choosing one's direction but being carried by something that has been building for a long time.",
      thinkers: ["Padmasambhava", "Chogyam Trungpa", "Herbert Guenther"],
      tags: ["karma", "habit", "compulsion", "consciousness", "tibetan-buddhism"],
      connections: [
        { to: "the-bardo", label: "navigate consciousness through" },
        { to: "the-six-bardos", label: "drive the becoming bardo of" },
        { to: "the-wandering-consciousness", label: "propel" },
        { to: "attachment", label: "are generated by" },
        { to: "haunting", label: "are the mechanism of" },
        { to: "the-hungry-ghost", label: "drive consciousness toward" },
      ],
      nuances: [
        { thinker: "Trungpa — karma as neurosis", note: "Trungpa translates the concept of karmic winds into psychological language: karma is not cosmic bookkeeping but the accumulated neurotic patterns of habitual mind — the grooves worn by repeated reactions, the defaults that mind falls into when it is not attending. The karmic winds that drive consciousness in the bardo are the same winds that drive ordinary neurotic behaviour: the automatic reaching for comfort, the automatic fleeing from discomfort, the automatic grasping for the familiar even when the familiar is suffering." },
        { thinker: "The phenomenology of compulsion", note: "Karmic winds are phenomenologically distinctive: they feel like desire and aversion but are not chosen. The consciousness in the bardo wants to go to the bright lights but is drawn to the dim; wants to rest but is compelled to move; recognises the peaceful deities as familiar but is terrified of them. This structure — wanting one thing while doing another, recognising the direction of harm while being unable to change course — is the phenomenological form of all compulsive behaviour, and the bardo makes it maximally visible." },
      ],
      x: 200, y: 400, color: "#c084fc", status: "consolidated",
    },

    {
      id: "the-peaceful-wrathful-deities",
      term: "The Peaceful & Wrathful Deities",
      definition: "The 42 peaceful and 58 wrathful deities who arise in the Chönyid Bardo (the bardo of dharmata) are not external beings but projections of the meditator's own mind — aspects of awakened awareness appearing in symbolic form that consciousness must recognise as its own nature rather than flee from or cling to. The peaceful deities arise first, radiating brilliant, sometimes blinding lights of five colours — the energies of the five buddha families, the five wisdoms of awakened mind. Alongside each brilliant light appears a seductive, familiar dim light: the light of one of the six realms, the comfortable glow of habitual samsaric existence. The wrathful deities arise subsequently: terrifying in appearance, roaring, surrounded by flames and skulls — but equally projections of one's own mind, equally aspects of awakened awareness, and equally offering the opportunity for recognition. The horror they produce is the horror of encountering one's own unrecognised wisdom in its most uncompromising form. Both the brilliant lights and the terrifying forms require the same response: recognition of them as one's own nature, rather than flight into the familiar dim lights of the six realms.",
      thinkers: ["Padmasambhava", "Chogyam Trungpa", "Robert Thurman"],
      tags: ["tibetan-buddhism", "projection", "deity", "consciousness", "recognition"],
      connections: [
        { to: "the-six-bardos", label: "arise in the dharmata bardo of" },
        { to: "rigpa", label: "are what is recognised or projected by" },
        { to: "the-clear-light", label: "are condensed forms of" },
        { to: "the-six-realms", label: "offer the dim lights of as alternative" },
        { to: "dissolution-of-self", label: "become possible to recognise after" },
        { to: "haunting", label: "when unrecognised become" },
      ],
      nuances: [
        { thinker: "Thurman — the Tibetan Book of the Dead", note: "Robert Thurman's translation and commentary emphasises that the peaceful and wrathful deities are a complete mandala of awakened consciousness: together they represent every aspect of mind in its liberated form. The wrathful deities are not punishments but purifications — they appear wrathful because they are the energy of wisdom meeting the energy of habitual confusion, and this meeting is necessarily intense. To recognise them as oneself is not a pleasant experience but a liberating one." },
        { thinker: "Jung — projection and the shadow", note: "Carl Jung's concept of projection — the unconscious attribution to external figures of contents that belong to the psyche — provides a psychological parallel: the wrathful deities are the shadow projected outward, the unacknowledged contents of mind appearing as threatening external forces. Recognition, in Jungian terms, is the withdrawal of projection — owning what one has disowned. The bardo teachings and depth psychology converge on the same insight: the terrifying other is, in some essential sense, oneself." },
      ],
      x: 580, y: 440, color: "#a855f7", status: "consolidated",
    },

    {
      id: "the-six-realms",
      term: "The Six Realms",
      definition: "The six modes of samsaric existence toward which bardo consciousness is drawn by its habitual tendencies — not necessarily places but qualities of experience, flavours of suffering and confusion that characterise different ways of being unrecognised. The god realm: blissful, proud, oblivious to impermanence, eventually crashing. The jealous god (asura) realm: competitive, paranoid, always fighting. The human realm: the middle path between too much comfort and too much suffering, the most auspicious for practice. The animal realm: driven purely by instinct, without the capacity for reflection. The hungry ghost realm: craving without satisfaction, desire without fulfilment. The hell realm: intensity of suffering, heat and cold, no respite. In the Sidpa Bardo, consciousness is drawn toward the realm that matches its predominant habitual tendency: the proud toward the gods, the envious toward the asuras, the lustful toward humans, the stupid toward animals, the greedy toward hungry ghosts, the hateful toward the hell realms. The dim lights in the Chönyid Bardo are the seductive glow of these realms — familiar, recognisable, and ultimately more prison than home.",
      thinkers: ["Padmasambhava", "Chögyam Trungpa", "Pema Chödrön"],
      tags: ["tibetan-buddhism", "samsara", "suffering", "rebirth", "consciousness"],
      connections: [
        { to: "the-bardo", label: "are what consciousness cycles through without" },
        { to: "the-hungry-ghost", label: "includes" },
        { to: "the-peaceful-wrathful-deities", label: "offer the dim lights of as alternative" },
        { to: "karmic-winds", label: "draw consciousness toward through" },
        { to: "attachment", label: "are maintained by" },
        { to: "the-wandering-consciousness", label: "is what seeks" },
      ],
      nuances: [
        { thinker: "Trungpa — the realms as psychological states", note: "Trungpa's radical reinterpretation describes the six realms not as metaphysical locations but as psychological states available in ordinary human experience: god-realm consciousness is the state of blissful absorption; asura consciousness is competitive paranoia; hungry ghost consciousness is the specific suffering of craving that cannot be satisfied. This is the bardo teaching as social phenomenology: the six realms are a complete map of the ways that unrecognised mind suffers." },
        { thinker: "Pema Chödrön — working with the realms", note: "Pema Chödrön's teachings on the six realms emphasise that recognition of which realm one is in is itself a form of practice: the moment you notice you are in hungry ghost consciousness — grasping, insatiable, unable to be satisfied by what you receive — is the moment a different response becomes possible. The six realms are not traps but diagnostics: they name the specific textures of samsaric suffering precisely enough to allow recognition." },
      ],
      x: 400, y: 480, color: "#c084fc", status: "consolidated",
    },

    {
      id: "the-hungry-ghost",
      term: "The Hungry Ghost",
      definition: "The being with an enormous stomach and a tiny mouth — perpetually craving, perpetually consuming, perpetually unsatisfied. The hungry ghost realm is the realm of addiction in the broadest sense: not only substance addiction but the addictive structure of consciousness that reaches compulsively for satisfaction and finds, at the moment of receipt, that the satisfaction has already moved to the next object. The hungry ghost is the consumer in the deluge: the person whose desire has been so thoroughly warped by the attention economy and the advertising system that it can never land, never rest, never find genuine nourishment. There is always something more, something better, something that promises satisfaction but delivers only the intensification of desire. The Tibetan image is precise: the stomach is vast because the desire is vast; the mouth is tiny because the capacity for genuine reception — for being genuinely nourished — has been reduced to almost nothing. To eat through a straw while starving is the hungry ghost's condition.",
      thinkers: ["Padmasambhava", "Gabor Maté", "Chögyam Trungpa"],
      tags: ["addiction", "craving", "desire", "tibetan-buddhism", "consumer"],
      connections: [
        { to: "the-six-realms", label: "is one of" },
        { to: "karmic-winds", label: "drives consciousness toward" },
        { to: "attachment", label: "is the extreme form of" },
        { to: "the-wandering-consciousness", label: "is the social form of" },
        { to: "boundary-consciousness", label: "has dissolved the boundaries needed for" },
        { to: "the-bardo", label: "is a specific mode of wandering in" },
      ],
      nuances: [
        { thinker: "Maté — In the Realm of Hungry Ghosts", note: "Gabor Maté's book on addiction takes its title from the hungry ghost realm because the addictive structure — the insatiable craving, the compulsive seeking of relief that only intensifies the underlying pain — is precisely what the Tibetan image describes. Maté's insight is that addiction is not a moral failure but a response to pain: the hungry ghost became hungry for a reason, and the tiny mouth is the wound through which nourishment keeps failing to pass. Treating addiction requires attending to the wound, not just the craving." },
        { thinker: "The hungry ghost and contemporary consumption", note: "The hungry ghost realm is the most directly applicable of the six realms to contemporary social conditions: the attention economy is a hungry ghost machine, engineered to produce the specific suffering of stimulation without nourishment, engagement without satisfaction, connection without genuine relation. The social media feed, the streaming queue, the news cycle — all have the structure of the enormous stomach and the tiny mouth: vast appetite, minimal satisfaction, perpetual return for more." },
      ],
      x: 580, y: 540, color: "#f87171", status: "consolidated",
    },

    {
      id: "tibetan-dream-yoga",
      term: "Tibetan Dream Yoga",
      definition: "The practice of recognising the dream state as another bardo — of maintaining lucid awareness through sleep and dreaming as preparation for maintaining lucid awareness through dying and the death bardo. In dream yoga, the practitioner learns first to recognise that they are dreaming (lucid dreaming in the Western term) and then to work with the dream: transforming terrifying dream figures into benign ones, flying, dissolving the dream scenery altogether, and finally resting in the luminous awareness that underlies all dreaming. The logic is precise: if one can recognise during a dream that the terrifying figure chasing one is a projection of one's own mind, one can recognise during the Chönyid Bardo that the wrathful deities are projections of one's own mind. The practice dimension of the bardo teachings is essentially this: to cultivate the capacity for recognition in the relatively safe and rehearsable conditions of the dream bardo, so that it is available when the stakes are ultimate. Dream yoga is also a practice of boundary consciousness — of learning to maintain awareness across the threshold between waking and sleeping, to carry continuity of recognition through states that ordinarily dissolve it.",
      thinkers: ["Tenzin Wangyal Rinpoche", "Namkhai Norbu", "Stephen LaBerge"],
      tags: ["practice", "dream", "consciousness", "tibetan-buddhism", "lucidity"],
      connections: [
        { to: "the-six-bardos", label: "works with the dream bardo of" },
        { to: "the-clear-light", label: "prepares for recognition of" },
        { to: "rigpa", label: "cultivates" },
        { to: "the-witness", label: "trains" },
        { to: "boundary-consciousness", label: "is a form of" },
        { to: "thresholds", label: "is the practice of maintaining awareness at" },
      ],
      nuances: [
        { thinker: "Tenzin Wangyal — the practice of dream yoga", note: "Tenzin Wangyal Rinpoche's Dream Yoga describes the four practices: recognising the dream, transforming the dream, unifying with the dream, and resting in luminosity. Each stage cultivates a deeper form of recognition: from 'I know I am dreaming' to 'I can change what appears' to 'I can dissolve the distinction between dreamer and dreamed' to 'I can rest in the awareness that underlies all of this.' This progression mirrors the stages of bardo recognition: the more complete the recognition, the deeper the liberation." },
        { thinker: "LaBerge — lucid dreaming and consciousness research", note: "Stephen LaBerge's scientific research on lucid dreaming at Stanford provides empirical verification that the capacity dream yoga cultivates is real and trainable: people can learn to recognise that they are dreaming and to maintain reflective awareness within the dream state. While LaBerge's framework is secular and psychological, his research supports the Tibetan claim that the dreaming mind is accessible to training — and that this training has implications for how consciousness navigates all transitional states." },
      ],
      x: 160, y: 200, color: "#a855f7", status: "consolidated",
    },

    {
      id: "liberation-through-hearing",
      term: "Liberation Through Hearing",
      definition: "The title of the Bardo Thodol and its core soteriological claim: that consciousness in the bardo can still hear and be guided, and that even a consciousness that did not practise during life can be liberated by hearing the instructions at the moment of death — if it can recognise what it is hearing. The text is meant to be read aloud to the dying and the recently dead by a lama or trained practitioner: the voice acts as a guide, orienting the bardo consciousness toward recognition rather than confusion, toward the brilliant lights rather than the seductive dim ones. This is why the sensory modality of hearing — rather than seeing or touching — is central: the bardo consciousness has lost its body and cannot see with physical eyes, but hearing persists, and the voice of instruction can reach where no hand can. The concept also has a broader application: it suggests that communication across the threshold between the living and the dead is genuinely possible, and that the quality of attention brought by the living to the dying has real effects on the trajectory of the dying consciousness.",
      thinkers: ["Padmasambhava", "Sogyal Rinpoche", "Joan Halifax"],
      tags: ["tibetan-buddhism", "voice", "death", "guidance", "hearing"],
      connections: [
        { to: "the-bardo", label: "is the practice for navigating" },
        { to: "the-clear-light", label: "guides toward recognition of" },
        { to: "ancestor-presence", label: "is a form of" },
        { to: "the-witness", label: "is what the voice cultivates in" },
        { to: "thresholds", label: "accompanies consciousness across" },
        { to: "hospicing-modernity", label: "provides a model for" },
      ],
      nuances: [
        { thinker: "Halifax — being with dying", note: "Joan Halifax's contemplative medicine practice at the Upaya Zen Center draws on the Bardo Thodol's model of liberation through hearing to develop a secular practice of accompaniment for the dying: the cultivation of a quality of presence by caregivers and loved ones that can genuinely support the dying person's transition. Halifax's work demonstrates that the Tibetan insight — that hearing matters, that the quality of the voice at the bedside matters — translates into contemporary hospice practice with significant effect." },
        { thinker: "The voice across the threshold", note: "Liberation through hearing names a specific form of communication that crosses the threshold between life and death: the voice that reaches the bardo consciousness is not merely information but a form of presence, an orientation, a reminder of what the consciousness already knows but cannot access in its confusion. This is the voice as phenomenological concept from the voice and vocality network in its most extreme application: the voice that maintains contact with a consciousness that has lost its body." },
      ],
      x: 160, y: 440, color: "#c084fc", status: "consolidated",
    },

    // ── Phenomenological ──────────────────────────────────────────────────────

    {
      id: "haunting",
      term: "Haunting",
      definition: "To be haunted is essentially not to have a sense of autonomy — to be driven, compelled, and inhabited by forces one cannot see, address, or release. The ghost is the being whose will has been captured by something it cannot name: an unfinished situation, an unresolved grief, an injustice that has not been acknowledged, a desire that has not been fulfilled. The haunted person is not fully present in their own life: part of them is elsewhere, caught in something that continues to press on the present even as the ordinary world moves on. Avery Gordon's sociological concept of haunting extends this: haunting is how the social — how what has been suppressed, denied, or disappeared — continues to make itself felt. The ghost is the figure of what returns when what has been done cannot be undone and what has been denied cannot stay denied. In the bardo context, haunting is the condition of the consciousness that cannot complete its dying: that wanders between worlds, drawn back to the living by attachment, unable to release what the living are also unable to release. To be haunted is to be in a bardo without the guide, without the practice, without the recognition that would allow release.",
      thinkers: ["Avery Gordon", "Jacques Derrida", "Nicolas Abraham", "Maria Torok"],
      tags: ["haunting", "autonomy", "ghost", "social-theory", "bardo"],
      connections: [
        { to: "the-bardo", label: "is the condition of being stuck in" },
        { to: "karmic-winds", label: "is driven by" },
        { to: "rigpa", label: "is the opposite of" },
        { to: "hauntology", label: "is the cultural form of" },
        { to: "attachment", label: "is generated by" },
        { to: "the-wandering-consciousness", label: "describes" },
        { to: "gordons-haunting", label: "is given social theory by" },
        { to: "ancestor-presence", label: "is distinguished from" },
      ],
      x: 580, y: 200, color: "#f87171", status: "consolidated",
    },

    {
      id: "liminality",
      term: "Liminality",
      definition: "The threshold state — betwixt and between, neither here nor there, neither what one was nor what one will become. Arnold van Gennep identified liminality as the middle phase of all rites of passage: after separation from the old status and before incorporation into the new, there is a period of genuine in-between-ness in which ordinary social structures are suspended, identity is fluid, and transformation is possible. Victor Turner developed the concept further, identifying communitas — the egalitarian, unstructured fellowship of those in liminality together — as its distinctive social form. The bardo is the ultimate liminality: the state between lives, between bodies, between one configuration of consciousness and the next. But liminality is also the structure of all genuinely transitional experience: the period between one form of life and another, the threshold state that all genuine change requires moving through. Contemporary life has two contradictory relationships to liminality: the dominant culture tries to eliminate it (liminality is inefficient, unproductive, and unmeasurable) while certain practices and communities deliberately cultivate it (retreat, initiation, pilgrimage, contemplative practice) as the condition of genuine transformation.",
      thinkers: ["Arnold van Gennep", "Victor Turner", "Bjorn Thomassen"],
      tags: ["threshold", "transition", "ritual", "identity", "social-theory"],
      connections: [
        { to: "the-bardo", label: "is the secular parallel to" },
        { to: "thresholds", label: "is the experience of" },
        { to: "the-between", label: "is the temporal form of" },
        { to: "dissolution-of-self", label: "involves" },
        { to: "hospicing-modernity", label: "is the collective form of" },
        { to: "gramscis-interregnum", label: "is the political form of" },
        { to: "ancestor-presence", label: "is when one meets" },
      ],
      nuances: [
        { thinker: "Turner — communitas", note: "Turner's concept of communitas — the egalitarian, spontaneous, direct relation between people in liminality — names what makes the threshold state potentially generative rather than merely frightening: in liminality, the normal social structures of hierarchy, role, and status dissolve, and people meet each other as bare human beings. Communitas is the social form of the Clear Light: what appears when the structures that ordinarily separate people are temporarily removed. The regenerative hinterlands practitioner might recognise this as describing their own communities of practice." },
        { thinker: "Thomassen — permanent liminality", note: "Bjorn Thomassen identifies the contemporary condition as one of 'permanent liminality' — a condition in which the transitional phase has become the permanent state rather than a temporary passage. Where traditional liminality was bounded, temporary, and followed by re-incorporation into a renewed social order, contemporary liminality seems to have no end: the transition continues without arrival, the threshold is inhabited indefinitely. This is the collective bardo of the present moment." },
      ],
      x: 200, y: 560, color: "#a855f7", status: "consolidated",
    },

    {
      id: "the-wandering-consciousness",
      term: "The Wandering Consciousness",
      definition: "The Sidpa Bardo (the bardo of becoming) consciousness that is driven by karmic winds, seeking a body, terrified and disoriented, haunted by the life just ended and pulled toward the life about to begin. The wandering consciousness has lost its body and with it the stable orientation that embodiment provides: it has no fixed location, no reliable perceptual field, no bodily ground. It experiences hallucinations produced by its own karma, hears terrifying sounds, feels pursued by demons that are its own projections. It desperately seeks something familiar — a body, a womb, a form of existence — not because what it finds will be good but because anything familiar is preferable to the groundlessness of the between. The wandering consciousness is the haunted being par excellence: driven without direction, seeking without knowing what it seeks, unable to rest and unable to find genuine refuge. In contemporary terms, the wandering consciousness is recognisable in the person who has lost their fundamental orientation — through grief, through trauma, through the collapse of the structures that previously gave life its direction — and who moves through the world seeking ground that is not there.",
      thinkers: ["Padmasambhava", "Chögyam Trungpa", "Elisabeth Kübler-Ross"],
      tags: ["consciousness", "bardo", "disorientation", "seeking", "grief"],
      connections: [
        { to: "the-bardo", label: "is the experience of" },
        { to: "karmic-winds", label: "is propelled by" },
        { to: "haunting", label: "is the condition of" },
        { to: "the-six-realms", label: "seeks refuge in" },
        { to: "the-hungry-ghost", label: "in its seeking resembles" },
        { to: "the-return", label: "eventually arrives at" },
        { to: "attachment", label: "is driven by" },
      ],
      nuances: [
        { thinker: "Trungpa — the mental body", note: "In the Sidpa Bardo, the wandering consciousness inhabits a 'mental body' — not a physical body but a body of habit, a body made entirely of karmic tendency and familiar pattern. This mental body can pass through walls, can be in multiple places at once, can hear the thoughts of the living — and yet it is more imprisoned than the physical body ever was, because it is entirely constituted by its own conditioning without the material resistance of a physical world to bump up against. The mental body of the Sidpa Bardo is the most naked form of psychological conditioning." },
        { thinker: "Kübler-Ross — the stages of dying", note: "Elisabeth Kübler-Ross's stages of grief — denial, anger, bargaining, depression, acceptance — describe a journey that parallels the bardo's structure: the wandering consciousness that cannot accept its dying moves through similar stages of resistance before arriving at something like recognition. Kübler-Ross's work demonstrates that the bardo structure is not only a Tibetan cultural framework but a phenomenological description of how consciousness actually responds to radical loss — of the body, of the life, of everything it had taken as its ground." },
      ],
      x: 400, y: 540, color: "#c084fc", status: "consolidated",
    },

    {
      id: "dissolution-of-self",
      term: "Dissolution of Self",
      definition: "The progressive dissolution of the sense of self that the bardo experience involves — and that the bardo teachings hold is simultaneously the most terrifying and the most liberating feature of the intermediate state. As the elements dissolve at death (earth dissolves into water, water into fire, fire into air, air into space, space into consciousness), the body falls away, then the familiar world, then the sense of being a coherent, bounded subject. Buddhist philosophy understands this dissolution as revealing what was always the case: that the self was never a fixed, independent entity but a process, a construction, a habit of mind that the bardo strips away to reveal the luminous awareness that underlies it. The dissolution is terrifying because the self that is dissolving is everything one has taken oneself to be; it is liberating because what is revealed is what one actually is. Phenomenologically, dissolution of self connects to Merleau-Ponty's prepersonal existence, Heidegger's anxiety (which reveals the groundlessness of the self), and the mystical traditions' accounts of ego death as a necessary precondition for genuine transformation.",
      thinkers: ["Padmasambhava", "Stanislav Grof", "William James"],
      tags: ["self", "dissolution", "death", "liberation", "consciousness"],
      connections: [
        { to: "the-clear-light", label: "is the condition for encountering" },
        { to: "the-bardo", label: "characterises" },
        { to: "rigpa", label: "reveals" },
        { to: "liminality", label: "is the phenomenological form of" },
        { to: "the-peaceful-wrathful-deities", label: "makes possible recognition of" },
        { to: "the-witness", label: "is distinguished from by" },
        { to: "boundary-consciousness", label: "requires understanding of" },
      ],
      nuances: [
        { thinker: "Grof — holotropic states", note: "Stanislav Grof's research on non-ordinary states of consciousness — through LSD, breathwork, and near-death experiences — documents the phenomenology of dissolution of self with remarkable precision: the specific stages of ego dissolution, the encounter with terrifying and beautiful figures that parallel the wrathful and peaceful deities, the eventual breakthrough into a state of luminous awareness that is experienced as more real than ordinary consciousness. Grof's work provides empirical depth to the Tibetan map." },
        { thinker: "James — the varieties of religious experience", note: "William James identified the dissolution of the ordinary self — what he called 'mystical experience' in its various forms — as one of the most significant and most neglected data points in the psychology of religion: something happens in these states that is not merely subjective, that leaves lasting transformation, that has a quality of noetic revelation. James's empirical respect for these experiences, without dogmatic commitment to any interpretation of them, remains a model for approaching the dissolution of self phenomenologically." },
      ],
      x: 580, y: 400, color: "#a855f7", status: "consolidated",
    },

    {
      id: "the-witness",
      term: "The Witness",
      definition: "The quality of consciousness that can observe experience without being entirely swept away by it — the awareness that knows the dream is a dream, that knows the bardo visions are projections, that knows the wrathful deity is one's own mind appearing in fearsome form. The witness is not detachment (the uninvolved observer standing outside experience) but a different quality of presence: aware within the experience, not collapsed into it. In Tibetan practice, the witness is cultivated through meditation: the repeated practice of noticing thoughts, emotions, and sensations arising without identifying completely with them, of recognising the awareness that is present even in the midst of intense experience. The witness is what the haunted consciousness has lost: it is entirely inside its haunting, unable to step back and recognise what is happening. The cultivation of the witness is therefore the primary preparation for the bardo: to develop the capacity to remain aware even in the most extreme and disorienting conditions.",
      thinkers: ["Padmasambhava", "Ken Wilber", "Daniel Siegel"],
      tags: ["awareness", "meditation", "consciousness", "practice", "recognition"],
      connections: [
        { to: "rigpa", label: "is the approach to" },
        { to: "tibetan-dream-yoga", label: "is trained by" },
        { to: "the-clear-light", label: "is approached through" },
        { to: "dissolution-of-self", label: "remains present through" },
        { to: "haunting", label: "is what the haunted consciousness has lost" },
        { to: "boundary-consciousness", label: "maintains at the threshold" },
      ],
      nuances: [
        { thinker: "Wilber — the witness in Integral theory", note: "Ken Wilber distinguishes the witness (the awareness that observes experience) from the observed (the content of experience) and from identification with either: the witness is not the ego watching from behind (which is still a form of subtle self) but pure awareness prior to the subject-object split. Wilber's Integral framework connects this to Husserl's transcendental subjectivity, to Vedanta's concept of the Atman, and to the Tibetan rigpa: all name the same structure of awareness that underlies and is not exhausted by its contents." },
        { thinker: "Siegel — mindsight", note: "Daniel Siegel's concept of mindsight — the capacity to observe one's own mental processes with clarity and equanimity — provides a neuroscientifically grounded account of what the witness cultivates: the prefrontal cortex's capacity to regulate and observe the emotional and reactive processes of the amygdala and limbic system. Siegel's work suggests that the bardo preparation the Tibetan tradition describes is not merely metaphysical but involves real changes in the neural architecture of self-regulation." },
      ],
      x: 200, y: 280, color: "#c084fc", status: "consolidated",
    },

    {
      id: "attachment",
      term: "Attachment",
      definition: "The clinging to what was — the inability to let go of the life, the body, the relationships, the identity, the familiar patterns of experience that death or radical transition has taken. Attachment (upadana in Sanskrit) is what prevents recognition of the Clear Light and what drives the Sidpa Bardo consciousness toward rebirth in familiar patterns rather than toward liberation. The consciousness that is deeply attached to its previous life will be drawn back to the places and people of that life, will be unable to release what the living are also unable to release, will wander as a ghost through what is no longer its home. In the contemporary context, attachment names the forces that keep people in the collective bardo of modernity: the clinging to the forms of life that are dying, the inability to grieve what is genuinely over, the desperate maintenance of what can no longer be maintained. Attachment is not the same as love: love can release what it loves; attachment cannot. The bardo teachings do not ask for the elimination of love but for the transformation of attachment into a love that can release.",
      thinkers: ["Padmasambhava", "Thich Nhat Hanh", "John Bowlby"],
      tags: ["attachment", "clinging", "grief", "liberation", "buddhism"],
      connections: [
        { to: "haunting", label: "generates" },
        { to: "karmic-winds", label: "feeds" },
        { to: "the-wandering-consciousness", label: "drives" },
        { to: "the-hungry-ghost", label: "is the extreme form of" },
        { to: "the-six-realms", label: "maintains the cycle of" },
        { to: "hospicing-modernity", label: "is what must be worked with in" },
        { to: "the-return", label: "must be transformed for" },
      ],
      nuances: [
        { thinker: "Thich Nhat Hanh — interbeing and non-attachment", note: "Thich Nhat Hanh's teaching on non-attachment insists that non-attachment is not indifference but a different quality of love: the love that holds lightly, that can let the beloved be what they are and go where they go. The attached love says 'I cannot live without you'; the non-attached love says 'I love you enough to want what is best for you, even if that means release.' In the bardo context, the transformation of attachment is the transformation from haunting love to liberating love." },
        { thinker: "Bowlby — attachment theory", note: "John Bowlby's attachment theory describes the primary human need for secure attachment to a caregiver and the specific patterns of anxiety and avoidance that develop when this need is not adequately met. The bardo's attachment is not pathological in Bowlby's sense but existential: it is the natural clinging of consciousness to what has been its home, its body, its familiar world. The bardo teachings work with this natural clinging rather than condemning it, providing conditions for release rather than demanding it." },
      ],
      x: 400, y: 160, color: "#f87171", status: "consolidated",
    },

    {
      id: "the-between",
      term: "The Between",
      definition: "The formal structure of all liminal experience — the state of being in neither one place nor another, neither one time nor another, neither one identity nor another. The Between is the literal translation of bardo, but it names a phenomenological structure that extends far beyond the Tibetan context: the between is the structure of all genuine transition, all authentic threshold experience, all moments in which one form of life has ended and another has not yet begun. The Between is characterised by specific phenomenological features: the absence of the familiar ground, the suspension of ordinary social roles and identities, the heightened perceptual sensitivity that comes from having no fixed framework to filter experience through, and the simultaneous presence of the past (what has been lost) and the future (what has not yet arrived). The Between is both the most uncomfortable and the most generative of states: it is where genuine transformation becomes possible precisely because the structures that ordinarily prevent transformation have been temporarily dissolved.",
      thinkers: ["Victor Turner", "Martin Heidegger", "Emmanuel Levinas"],
      tags: ["liminality", "threshold", "transition", "phenomenology", "time"],
      connections: [
        { to: "the-bardo", label: "is the formal structure of" },
        { to: "liminality", label: "is the temporal form of" },
        { to: "thresholds", label: "is experienced at" },
        { to: "dissolution-of-self", label: "involves" },
        { to: "gramscis-interregnum", label: "is the political form of" },
        { to: "hospicing-modernity", label: "is the civilisational form of" },
      ],
      nuances: [
        { thinker: "Levinas — the il y a", note: "Levinas describes the il y a (the 'there is') as the neutral, impersonal rumble of being that underlies all particular beings — an experience of pure existence without any particular existent, which he associates with insomnia, with horror, with the impossibility of nothingness. The il y a is the Between in its most unsettling form: existence without subject, being without anything to be, the between that has no sides. Levinas's il y a gives the bardo's groundlessness its philosophical depth." },
        { thinker: "Heidegger — anxiety and the nothing", note: "Heidegger's analysis of anxiety as the mood that opens onto nothing — not a particular nothing but the nothing of existence's groundlessness — describes the experience of the between from the existential-analytic perspective: the moment when the familiar world withdraws and nothing particular offers itself as relevant, when existence appears in its naked contingency without the ordinarily comforting furniture of the they-world. This is the bardo's phenomenological structure translated into Heideggerian language." },
      ],
      x: 160, y: 340, color: "#818cf8", status: "consolidated",
    },

    {
      id: "thresholds",
      term: "Thresholds",
      definition: "The moments and places of crossing — the irreversible transitions that mark the passage from one form of life to another. A threshold, once crossed, changes what is possible: the person who has crossed a particular threshold cannot uncross it, cannot return to the innocence of before-crossing, even if they return to the same physical place. Birth, death, initiation, marriage, rupture, bereavement, diagnosis, conversion — all are thresholds in this sense. The bardo is the threshold between lives, but it is also the most concentrated form of a structure that runs through all significant human experience. What makes a threshold different from a mere change is precisely this irreversibility: after the threshold, something that was possible is no longer possible, and something that was impossible has become the new reality. The bardo teachings are, among other things, a set of instructions for crossing thresholds with the greatest possible awareness — for bringing the quality of recognition to the crossing that transforms it from a stumbling into a genuine passage.",
      thinkers: ["Arnold van Gennep", "Gaston Bachelard", "John O'Donohue"],
      tags: ["threshold", "transition", "irreversibility", "place", "phenomenology"],
      connections: [
        { to: "liminality", label: "is entered through" },
        { to: "the-between", label: "is experienced at" },
        { to: "tibetan-dream-yoga", label: "is the practice of maintaining awareness at" },
        { to: "liberation-through-hearing", label: "accompanies consciousness across" },
        { to: "hospicing-modernity", label: "names what" },
        { to: "the-return", label: "is the crossing of" },
        { to: "ancestor-presence", label: "is available at" },
      ],
      nuances: [
        { thinker: "O'Donohue — the threshold as gift", note: "John O'Donohue's poetic philosophy of thresholds treats them as gifts rather than merely dangers: the threshold is the place where something genuinely new becomes possible, where the familiar self is loosened enough that a larger self can emerge. O'Donohue's prayer for thresholds — 'May you experience each day as a sacred gift woven around the heart of wonder' — is a bardo practice in disguise: the invitation to bring the quality of awareness to the crossings that ordinary life tends to hurry past." },
        { thinker: "Bachelard — the door", note: "Bachelard's phenomenology of the door identifies it as the archetypal threshold: the point where inside and outside are distinguished and connected simultaneously. To stand at a door is to be at a threshold: one has left one space and not yet entered another, is between the protection of the interior and the openness of the exterior. Bachelard's door is the domestic form of the bardo threshold: the small rehearsal of the crossing that dying requires at a cosmic scale." },
      ],
      x: 580, y: 560, color: "#a855f7", status: "consolidated",
    },

    // ── Social & Political ────────────────────────────────────────────────────

    {
      id: "hospicing-modernity",
      term: "Hospicing Modernity",
      definition: "Vanessa Machado de Oliveira's (Andreotti's) concept for the appropriate response to the dying of modernity as a form of life — not to try to save or reform it, not to hasten its death, not to deny that it is dying, but to accompany it through its dying with the quality of presence that good hospice care requires. Hospice care does not try to cure; it tries to ensure that dying happens with dignity, awareness, and as little unnecessary suffering as possible. To hospice modernity is to attend to what is actually happening — the genuine collapse of the systems, assumptions, and ways of life that have organised the dominant culture for several centuries — without the flight into denial (it will be fine, we just need better policies) or the flight into despair (there is nothing to be done). The bardo is the framework that makes hospicing modernity thinkable: if dying is a passage rather than an ending, if the intermediate state is navigable with the right quality of attention, if what comes after depends in part on how the dying is conducted, then the question of how modernity dies matters enormously for what becomes possible afterward.",
      thinkers: ["Vanessa Machado de Oliveira", "Stephen Jenkinson", "Joan Halifax"],
      tags: ["modernity", "transition", "decolonial", "hospice", "collective"],
      connections: [
        { to: "the-bardo", label: "uses as its framework" },
        { to: "liminality", label: "is the collective form of" },
        { to: "thresholds", label: "names what must be crossed in" },
        { to: "attachment", label: "must work with" },
        { to: "gramscis-interregnum", label: "is the practice adequate to" },
        { to: "liberation-through-hearing", label: "finds a model in" },
        { to: "the-return", label: "makes possible" },
      ],
      nuances: [
        { thinker: "Andreotti — Hospicing Modernity", note: "Andreotti's book articulates the hospicing modernity framework through the lens of decolonial education: those of us formed by modernity cannot simply step outside it, but we can develop the capacity to sit with its dying without either clinging to it or rushing toward the new. This requires what she calls 'holding space' — the capacity to be present with difficulty, uncertainty, and loss without fleeing into premature resolution. The bardo practice of the witness is the contemplative form of this same capacity." },
        { thinker: "Jenkinson — die wise", note: "Stephen Jenkinson's work on dying and grief — developed through years of palliative care — argues that the quality of a death shapes the quality of what follows for the living: the community that has learned to die well has learned something essential about how to live. Hospicing modernity requires the same quality of skill that Jenkinson calls 'death literacy': the capacity to be genuinely present to dying without the defences of denial, premature hope, or abandonment." },
      ],
      x: 200, y: 160, color: "#4ade80", status: "consolidated",
    },

    {
      id: "gramscis-interregnum",
      term: "Gramsci's Interregnum",
      definition: "Antonio Gramsci's formulation from the Prison Notebooks — 'The old is dying and the new cannot be born; in this interregnum a great variety of morbid symptoms appear' — is perhaps the most precise secular formulation of the collective bardo. The interregnum is the political between: the space after the death of one hegemony (one dominant set of assumptions, institutions, and ways of organising collective life) and before the birth of another. In the interregnum, nothing is settled: the old forms still exist but have lost their authority; the new forms have not yet consolidated; and the morbid symptoms — the monsters, the pathologies, the extreme formations — arise to fill the vacuum. Gramsci wrote this in Mussolini's Italy, watching fascism arise in the interregnum of the liberal democratic order's crisis. The contemporary application is direct: the interregnum of industrial modernity, globalised capitalism, and the nation-state system is producing its own morbid symptoms — the zombie phenomenologies, the deluges, the pathological formations of the hinterlands — and what comes next depends in part on what quality of consciousness can be brought to the between.",
      thinkers: ["Antonio Gramsci", "Stuart Hall", "Wolfgang Streeck"],
      tags: ["politics", "transition", "hegemony", "interregnum", "collective"],
      connections: [
        { to: "the-between", label: "is the political form of" },
        { to: "liminality", label: "is the political form of" },
        { to: "hospicing-modernity", label: "is what" },
        { to: "hauntology", label: "produces the conditions for" },
        { to: "ancestor-presence", label: "requires turning to" },
        { to: "the-bardo", label: "is the collective form of" },
      ],
      nuances: [
        { thinker: "Gramsci — morbid symptoms", note: "Gramsci's phrase 'morbid symptoms' is precise: in the interregnum, what appears is not merely confusion or uncertainty but pathological formations — ways of being, political movements, cultural phenomena — that are generated specifically by the condition of being between. The morbid symptom is the bardo vision: the projection of the unrecognised energies of the old order appearing in distorted, terrifying, or seductive form. To recognise the morbid symptom as a morbid symptom is the beginning of political rigpa." },
        { thinker: "Streeck — how will capitalism end?", note: "Wolfgang Streeck's diagnosis of the interregnum of contemporary capitalism — in which the system is visibly failing but no alternative has consolidated — describes the contemporary collective bardo with sociological precision: the institutions that were supposed to manage capitalism's instabilities have lost their authority; the alternative visions that might provide direction are fragmented and weak; and the system continues in a state of 'organised chaos', producing crises that it cannot resolve. This is the sidpa bardo of civilisation: driven by accumulated momentum, seeking a form that can hold." },
      ],
      x: 400, y: 200, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "gordons-haunting",
      term: "Gordon's Haunting",
      definition: "Avery Gordon's sociological concept of haunting — developed in Ghostly Matters — as the way that what has been suppressed, denied, disappeared, or violently erased continues to make itself felt in the present. The ghost, for Gordon, is not a supernatural being but a social figure: the form taken by what a society has done but cannot acknowledge, by the people whose lives and deaths do not register in the official record, by the injustices that are structurally necessary but politically inconvenient. To be haunted, in Gordon's sense, is to be visited by what has been excluded: the traces of the disappeared, the weight of the unacknowledged, the insistent presence of what the dominant order has declared absent. Gordon's haunting is political haunting: it names how the past's violence continues to structure the present even when — especially when — that violence is not officially remembered. The bardo framework illuminates this: the social ghost is the consciousness that cannot complete its transition because the injustice that killed it has not been acknowledged, the grief that should have been done has not been done.",
      thinkers: ["Avery Gordon", "W.E.B. Du Bois", "Toni Morrison"],
      tags: ["social-theory", "haunting", "justice", "memory", "ghost"],
      connections: [
        { to: "haunting", label: "gives social theory to" },
        { to: "hauntology", label: "connects to" },
        { to: "ancestor-presence", label: "is the shadow side of" },
        { to: "attachment", label: "is generated by unresolved social" },
        { to: "the-bardo", label: "describes the social form of" },
        { to: "gramscis-interregnum", label: "produces the conditions for" },
      ],
      nuances: [
        { thinker: "Gordon — Ghostly Matters", note: "Gordon's key insight is methodological as well as theoretical: to understand haunting, one must develop a 'complex personhood' — a willingness to attend to what is not fully present, what is felt rather than seen, what makes itself known through its effects rather than its appearance. This is the phenomenological attitude applied to social justice: attending to what has been made absent, following the traces of the disappeared, letting the ghost speak. Gordon's methodology is a form of political liberation through hearing." },
        { thinker: "Morrison — Beloved", note: "Toni Morrison's novel Beloved gives the most powerful literary form to Gordon's concept: the ghost of Sethe's murdered daughter, who returns as a physical presence, embodies the impossibility of leaving behind what has not been properly grieved. The haunting is not pathological but necessary: Sethe cannot move forward while the murder remains unacknowledged, ungrieved, unintegrated into the narrative of her life. The novel enacts what hospicing modernity requires: the willingness to be with the ghost until the ghost can be released." },
      ],
      x: 580, y: 300, color: "#f87171", status: "consolidated",
    },

    {
      id: "hauntology",
      term: "Hauntology",
      definition: "Derrida's portmanteau of 'haunting' and 'ontology' — a mode of being that is neither present nor absent, neither living nor dead, neither past nor future but somehow all of these simultaneously. Derrida coined the term in Specters of Marx to describe the persistent presence of the Marxist tradition after its apparent death: the ghost that returns, that refuses to stay buried, that insists on being reckoned with. Mark Fisher developed hauntology into a cultural diagnosis of the contemporary moment: the present haunted by futures that never arrived, by the debris of broken promises, by the persistence of what should have been superseded. The hauntological condition is the bardo condition at the cultural level: forms that have outlasted their animating principle, cultural productions that can only recombine what has already been rather than genuinely creating something new, a present that is saturated with the past and unable to imagine a genuinely different future. Hauntology names the cultural form of the wandering consciousness: a civilisation that has lost its direction and keeps returning to what it has already been.",
      thinkers: ["Jacques Derrida", "Mark Fisher", "Simon Reynolds"],
      tags: ["ghost", "culture", "time", "memory", "derrida"],
      connections: [
        { to: "haunting", label: "is the cultural form of" },
        { to: "gordons-haunting", label: "connects to" },
        { to: "gramscis-interregnum", label: "is produced by" },
        { to: "the-between", label: "inhabits" },
        { to: "the-wandering-consciousness", label: "is the cultural form of" },
        { to: "hospicing-modernity", label: "is what must be worked through in" },
      ],
      nuances: [
        { thinker: "Fisher — lost futures", note: "Fisher's hauntology is specifically about the loss of futurity: the cultural condition in which genuine novelty — the arrival of something genuinely new, not a recombination of the familiar — has become impossible. The hauntological present is saturated with the past, recycling prior styles and forms, unable to escape the gravity of what has already been. This is the bardo of culture: the state between the death of one cultural form and the birth of another, in which the wandering consciousness of the culture keeps returning to its own past rather than moving through toward what comes next." },
        { thinker: "Reynolds — retromania", note: "Simon Reynolds' concept of retromania — the contemporary music industry's obsessive recycling of prior decades' styles rather than generating genuinely new forms — gives hauntology its most culturally specific application. Retromania is the sound of the cultural bardo: consciousness that cannot release the past and cannot generate the future, moving through an eternal present that is somehow always already the past. Reynolds traces this across multiple decades of popular music, showing how the retromaniac tendency has intensified as the digital archive has made every prior moment of culture simultaneously accessible." },
      ],
      x: 580, y: 440, color: "#818cf8", status: "consolidated",
    },

    {
      id: "boundary-consciousness",
      term: "Boundary Consciousness",
      definition: "The capacity to maintain awareness at and across the thresholds that ordinary consciousness habitually dissolves or hardens: the boundary between self and other, between waking and dreaming, between the personal and the transpersonal, between the living and the dead. Drawing on Melanie Klein's account of the infant's primary psychological work of establishing the boundary between self and other — the good object and the bad object, the inside and the outside — boundary consciousness names the more developed capacity to work with these boundaries fluidly rather than rigidly. In Klein's terms, the paranoid-schizoid position (rigid splitting of good and bad, self and other) gives way, with development, to the depressive position (the capacity to hold ambivalence, to recognise that the good and bad object are the same object, to mourn rather than split). Boundary consciousness in the bardo context is the capacity to remain aware at the dissolution of all ordinary boundaries that dying involves: to know that the self is dissolving without being entirely consumed by that dissolution, to maintain the witness through the crossing of the thresholds.",
      thinkers: ["Melanie Klein", "Donald Winnicott", "Wilfred Bion"],
      tags: ["boundaries", "consciousness", "psychology", "threshold", "klein"],
      connections: [
        { to: "tibetan-dream-yoga", label: "is cultivated through" },
        { to: "the-witness", label: "is maintained through" },
        { to: "dissolution-of-self", label: "requires understanding of" },
        { to: "thresholds", label: "enables crossing of" },
        { to: "the-hungry-ghost", label: "prevents dissolution into" },
        { to: "the-between", label: "is the capacity to inhabit" },
      ],
      nuances: [
        { thinker: "Klein — the depressive position", note: "Klein's depressive position — the developmental achievement of being able to hold ambivalence, to recognise that the loved and hated object are the same, to mourn rather than split — is the psychological precondition for boundary consciousness. The person who can only operate in the paranoid-schizoid mode (splitting, projection, rigid boundaries) cannot navigate the bardo's dissolution of ordinary boundaries: they will either cling to the boundaries that are dissolving or be entirely overwhelmed by their dissolution. The depressive position is the psychological preparation for bardo." },
        { thinker: "Winnicott — transitional space", note: "Winnicott's concept of the transitional space — the play space between self and other, neither fully inner nor fully outer, where creativity and genuine development occur — is the developmental form of boundary consciousness: the capacity to be in the between, to inhabit the space where the usual boundaries are loosened without being overwhelmed by their absence. The transitional object (the teddy bear that is neither the self nor the mother but partakes of both) is the first bardo object: the first practice of being in the between." },
      ],
      x: 200, y: 460, color: "#a855f7", status: "consolidated",
    },

    // ── Cross-Traditional ─────────────────────────────────────────────────────

    {
      id: "ancestor-presence",
      term: "Ancestor Presence",
      definition: "The understanding, across many traditions, that the dead are not simply gone but remain present as an active dimension of the lives of the living — guides, resources, interlocutors, and sometimes as demanding presences who require attention and acknowledgment. The Tibetan tradition's bardo teachings explicitly include practices for calling on lineage teachers and ancestors as guides through the intermediate state. African diasporic traditions of ancestor veneration understand the dead as the most active and most available dimension of the spiritual community: the ancestors have gone ahead and can see what the living cannot. Indigenous traditions across many cultures maintain relationships with the ancestors as a source of guidance, strength, and continuity. Ancestor presence is distinguished from haunting: haunting is the condition of ancestors who have not been properly released, who are stuck in the between, who are visiting because something is unresolved; ancestor presence is the condition of ancestors who have been properly honoured and who return as resource rather than burden. The practice of ancestor veneration is, in bardo terms, the practice of facilitating release — giving the dead what they need to complete their passage.",
      thinkers: ["Malidoma Somé", "Martin Prechtel", "Daniel Foor"],
      tags: ["ancestor", "tradition", "death", "community", "guidance"],
      connections: [
        { to: "haunting", label: "is distinguished from" },
        { to: "liberation-through-hearing", label: "is a form of" },
        { to: "liminality", label: "is when one meets" },
        { to: "thresholds", label: "is available at" },
        { to: "gordons-haunting", label: "is the shadow side of" },
        { to: "the-return", label: "accompanies" },
        { to: "gramscis-interregnum", label: "requires turning to" },
      ],
      nuances: [
        { thinker: "Somé — Of Water and the Spirit", note: "Malidoma Somé's account of his Dagara community's ancestor practices describes a relationship with the dead that is not fearful but necessary: the ancestors are the most senior members of the community, the ones who have passed through death and can therefore see what the living cannot. To lose contact with the ancestors is to lose access to the wisdom that only comes from having crossed the threshold. Contemporary Western culture's inability to maintain this contact is, for Somé, one of its most significant impoverishments." },
        { thinker: "Prechtel — the grief of the dead", note: "Martin Prechtel's account of Tzutujil Mayan grief practices describes the specific obligation of the living toward the dead: the dead must be properly fed and released, or they become what hauntology names — stuck, demanding, visiting in distorted forms. Prechtel's rituals of grief are bardo practices: the elaborate, communal work of helping the dead complete their passage by giving them everything they need to release their attachment to the living world. Grief, properly done, is liberation through hearing." },
      ],
      x: 400, y: 380, color: "#34d399", status: "consolidated",
    },

    {
      id: "the-return",
      term: "The Return",
      definition: "The bardo ends — one way or another. In liberation, consciousness recognises the Clear Light and is released from the cycle of rebirth. In rebirth, the bardo consciousness is drawn toward a womb by karmic winds and begins again. In haunting, the consciousness that cannot complete its transition returns to the living world as a ghost, a presence, a demand for attention. And in the initiatory structure, the person who has gone through the between returns transformed, carrying something that those who have never crossed the threshold do not have. The return is phenomenologically significant not as arrival but as what the crossing has made possible: the person who has been in the between and come back is different from the person who went in, and this difference is the work of the bardo. Near-death experience research (Kenneth Ring, Pim van Lommel) documents the specific transformation that the encounter with the bardo edge produces: a deepened sense of purpose, a reduced fear of death, a heightened capacity for love and presence, and often a sense of having something important to communicate. The return from the bardo is the moment of potential transformation that the whole structure exists to enable.",
      thinkers: ["Kenneth Ring", "Pim van Lommel", "Mircea Eliade"],
      tags: ["return", "transformation", "death", "initiation", "consciousness"],
      connections: [
        { to: "the-bardo", label: "is what ends" },
        { to: "thresholds", label: "is the crossing of" },
        { to: "the-wandering-consciousness", label: "eventually arrives at" },
        { to: "attachment", label: "must be transformed for" },
        { to: "ancestor-presence", label: "accompanies" },
        { to: "hospicing-modernity", label: "makes possible" },
        { to: "liberation-through-hearing", label: "is guided by" },
      ],
      nuances: [
        { thinker: "Ring — Lessons from the Light", note: "Kenneth Ring's research on near-death experiences documents the return's specific phenomenological content: the being of light, the life review, the border that cannot be crossed, the reluctant return. Most significantly, Ring documents the transformation that the near-death experience produces in those who return: a consistent pattern of reduced materialism, increased spirituality, deepened compassion, and a sense of having been given something important to do. The return from the bardo edge is transformative in a way that no other experience quite replicates." },
        { thinker: "Eliade — shamanic death and return", note: "Mircea Eliade's analysis of shamanic initiation across cultures identifies the death-and-return structure as the universal core of shamanic practice: the shaman undergoes a symbolic or sometimes literal near-death, travels through the underworld, and returns with knowledge, power, and healing capacity that is only available to those who have made the journey. The shaman is the expert in the bardo: the person who can navigate the between and bring back what the living need from the dead." },
      ],
      x: 200, y: 360, color: "#4ade80", status: "consolidated",
    },

  ],
};
