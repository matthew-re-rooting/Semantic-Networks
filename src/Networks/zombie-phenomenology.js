export const zombiePhenomenologyNetwork = {
  id: "zombie-phenomenology",
  label: "Zombie Phenomenology",
  subtitle: "Desire, Flesh & the Collapse of Presence",
  accent: "#84cc16",
  storageKey: "semantic-network-zombie-phenomenology",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "the-zombie",
      term: "The Zombie",
      definition: "The zombie is not primarily a horror figure but a phenomenological one: a being that moves without genuine interiority, that persists without genuinely living, that goes through the motions of desire, sociality, and bodily life without the animating principle that makes these motions meaningful. As a philosophical concept, the zombie names a specific mode of human existence — one that is becoming increasingly common under the conditions of the deluge, the attention economy, and the systematic warping of desire by capitalist culture. The zombie is not dead: it is undead, which is worse — it maintains the forms of life without their substance, the appearance of presence without genuine being-there. This network traces the zombie condition across its multiple registers: the political history of the original Haitian zombie (a figure of enslaved, will-less labour), the phenomenology of the body that has lost its flesh, the psychology of desire that has been misdirected toward its own diminishment, and the social forms that persist after their animating principle has departed.",
      thinkers: ["Erich Fromm", "Maurice Merleau-Ponty", "Martin Heidegger", "Mark Fisher"],
      tags: ["phenomenology", "body", "desire", "capitalism", "presence"],
      connections: [
        { to: "haitian-zombie", label: "originates in" },
        { to: "warping-of-desire", label: "is constituted by" },
        { to: "zombification-of-flesh", label: "enacts" },
        { to: "das-man", label: "is absorbed in" },
        { to: "contagion", label: "spreads through" },
        { to: "zombie-apocalypse", label: "collectively produces" },
        { to: "the-undead", label: "is a specific form of" },
      ],
      x: 400, y: 300, color: "#84cc16", status: "consolidated",
    },

    // ── Origin & History ──────────────────────────────────────────────────────

    {
      id: "haitian-zombie",
      term: "The Haitian Zombie",
      definition: "The original zombie — not the flesh-eating monster of Hollywood horror but a person whose will and soul have been stolen, who has been reduced to a state of enslaved, will-less labour, moving and working without interiority or agency. The Haitian zombie emerges from the specific history of plantation slavery and its aftermath: it is the ultimate expression of what colonial violence does to a person — the theft not only of their freedom and their labour but of the very capacity for self-direction, desire, and presence that makes a person a person. Zora Neale Hurston's fieldwork in Haiti in the 1930s documented accounts of zombification as a real social practice: individuals rendered into a death-like state through pharmacological means and then revived into a condition of total compliance. Wade Davis's later ethnobotanical research identified the probable mechanism. What matters phenomenologically is the structure: the Haitian zombie is the person from whom agency has been extracted while the body continues to function. This is the political and historical ground of the zombie figure — and it means that the zombie metaphor, when applied to contemporary conditions, carries the weight of colonial history: to speak of zombification is always, at some level, to speak of the theft of agency.",
      thinkers: ["Zora Neale Hurston", "Wade Davis", "Achille Mbembe", "CLR James"],
      tags: ["history", "haiti", "colonialism", "agency", "slavery"],
      connections: [
        { to: "the-zombie", label: "is the origin of" },
        { to: "warping-of-desire", label: "is the historical precursor to" },
        { to: "bodily-alienation", label: "is the most extreme form of" },
        { to: "ritual-deprivation", label: "involves systematic" },
        { to: "the-bite", label: "has its historical form in" },
        { to: "contagion", label: "spreads through colonial" },
      ],
      nuances: [
        { thinker: "Hurston — Tell My Horse", note: "Zora Neale Hurston's account of Haitian zombie lore in Tell My Horse describes the zombie not as monster but as victim: the person who has been zombified is pitied, not feared. The zombie is the one to whom the worst thing has happened — not death but the theft of death's release, the forced continuation of existence without the person who should be living it. Hurston's account grounds the zombie figure in a specific community's experience of violation and survival." },
        { thinker: "Mbembe — necropolitics", note: "Achille Mbembe's concept of necropolitics — the political management of who may live and who must die, who is allowed to inhabit the world of the living and who is reduced to the status of the living dead — extends the Haitian zombie into a political theory. Necropolitics names the condition of those whose lives are maintained just enough to be exploited, whose existence is tolerated at the price of their full humanity. The zombie is the necropolitical subject: alive enough to labour, dead enough not to resist." },
        { thinker: "Davis — The Serpent and the Rainbow", note: "Wade Davis's ethnobotanical research identified tetrodotoxin (from puffer fish) and datura as possible pharmacological components of zombie powder, capable of inducing a near-death state followed by apparent resurrection. Whatever the precise mechanism, Davis's work demonstrates that zombification is embedded in a specific social context — the Vodou system of law and justice — and functions as a sanction against antisocial behaviour. The zombie is produced by and within a community that has the power to remove personhood as a form of punishment." },
      ],
      x: 180, y: 160, color: "#84cc16", status: "consolidated",
    },

    {
      id: "zombie-apocalypse",
      term: "Zombie Apocalypse",
      definition: "Not the cinematic scenario of flesh-eating hordes but a more precise and more troubling phenomenon: the collapse of collective attention and presence — the condition in which a population continues to move, consume, produce, and interact while the quality of genuine engagement, genuine care, and genuine presence has drained away. The zombie apocalypse is not an event but a process: it is happening now, gradually, without a clear moment of onset, in the progressive degradation of the conditions that make genuine human presence possible. The apocalypse here is not catastrophic destruction but the slow, quiet substitution of the forms of life for their substance — the world still running but nobody genuinely home in it. This is the collective form of what the zombie condition names individually: a civilisation that has the appearance of vitality while the animating principle — genuine desire, genuine attention, genuine relation — has been progressively depleted. The zombie apocalypse is the end of the world not with a bang but with a glaze.",
      thinkers: ["Mark Fisher", "Guy Debord", "Paul Virilio", "Bernard Stiegler"],
      tags: ["apocalypse", "attention", "collective", "presence", "culture"],
      connections: [
        { to: "the-zombie", label: "is the collective form of" },
        { to: "apocalyptic-faith", label: "is the passive response to" },
        { to: "contagion", label: "spreads through" },
        { to: "das-man", label: "is the social medium of" },
        { to: "brain-rot", label: "is characterised by" },
        { to: "glaze", label: "is visible in" },
        { to: "the-undead", label: "is populated by" },
      ],
      nuances: [
        { thinker: "Fisher — the slow cancellation of the future", note: "Mark Fisher describes a cultural condition in which the future has been cancelled — not by catastrophe but by the exhaustion of the collective imagination. The zombie apocalypse, for Fisher, is not the dramatic end but the quiet continuation: culture reproducing itself without genuine novelty, art recycling prior forms, politics cycling through the same positions, the future arriving as repetition of the past. The walking dead are the cultural forms that persist after their animating principle has departed." },
        { thinker: "Stiegler — the disruption of attention", note: "Bernard Stiegler's analysis of tertiary retention — the technical systems through which collective memory is stored and transmitted — identifies the systematic destruction of attention as the defining feature of contemporary capitalism. The zombie apocalypse, in Stiegler's terms, is the pharmacological crisis of attention: the same technologies that enable collective intelligence are being used to exploit and destroy it, producing a population that is technically connected and genuinely disconnected, nominally present and actually absent." },
      ],
      x: 580, y: 160, color: "#84cc16", status: "consolidated",
    },

    // ── Desire ────────────────────────────────────────────────────────────────

    {
      id: "warping-of-desire",
      term: "Warping of Desire",
      definition: "The systematic misdirection of human desire by the structures of capitalist culture — not the suppression of desire but its capture and redirection toward objects and experiences that serve the system's reproduction rather than the person's genuine flourishing. Desire in its healthy form is the movement of a person toward what they genuinely need, toward what genuinely calls them, toward the world in all its richness and otherness. Warped desire moves toward what has been placed in its path by the attention economy, the advertising system, and the logic of compulsive engagement: the next scroll, the next purchase, the next outrage, the next dopamine hit. The warping is sophisticated rather than crude: it does not simply suppress desire but engineers it, shapes it, and makes the engineered version feel like the authentic one. Deleuze and Guattari's concept of desiring-machines that get captured and redirected is the theoretical framework; Fromm's distinction between biophilia and necrophilia is the ethical dimension. The person with warped desire does not know their desire has been warped — it feels like their desire, which is precisely what makes the warping effective.",
      thinkers: ["Erich Fromm", "Gilles Deleuze", "Félix Guattari", "Herbert Marcuse"],
      tags: ["desire", "capitalism", "psychology", "alienation", "manipulation"],
      connections: [
        { to: "the-zombie", label: "constitutes" },
        { to: "necrophilia", label: "in its extreme becomes" },
        { to: "mortal-attraction", label: "produces" },
        { to: "wicked-desire", label: "can generate" },
        { to: "the-bite", label: "is initiated by" },
        { to: "das-man", label: "is maintained by" },
        { to: "haitian-zombie", label: "has historical precedent in" },
      ],
      nuances: [
        { thinker: "Marcuse — repressive desublimation", note: "Herbert Marcuse's concept of repressive desublimation names a specific form of desire-warping: the apparent liberation of desire (sexual permissiveness, consumer freedom, the removal of taboos) that actually serves repression by channelling desire into commercially and politically safe outlets. The warped desire is not frustrated desire but desire that has been given a false object — one that pacifies without genuinely satisfying, that produces the sensation of fulfilment without its substance." },
        { thinker: "Deleuze & Guattari — desire and capitalism", note: "Deleuze and Guattari's central insight in Anti-Oedipus is that desire is not lack (the Freudian formulation) but production — desire makes worlds, connects, creates. Capitalism's specific operation on desire is not repression but capture: desiring-machines are connected to the socius, their productive energy is harnessed, and desire is made to invest in its own repression. The zombie's warped desire is desire that has been made to invest in the very system that depletes it." },
      ],
      x: 220, y: 420, color: "#a3e635", status: "consolidated",
    },

    {
      id: "necrophilia",
      term: "Necrophilia",
      definition: "Erich Fromm's concept — not a sexual pathology but a characterological orientation: the love of the dead, the mechanical, the controlled, as opposed to biophilia, the love of the living, the growing, the unpredictable. The necrophilic character is more comfortable with things than with people, with control than with growth, with death than with life — and finds in the mechanical, the predictable, and the quantifiable a satisfaction that the living and the spontaneous cannot provide. Fromm developed the concept to describe certain political leaders (he was thinking of Hitler and Stalin) but identified it as a broader cultural tendency: the preference for bureaucratic procedure over living encounter, for technological control over organic process, for the neat and the dead over the messy and the alive. In the context of zombie phenomenology, necrophilia names the psychological interior of the zombie condition: the desire that has been so thoroughly warped that it now moves away from life rather than toward it.",
      thinkers: ["Erich Fromm", "Ernest Becker", "Otto Rank"],
      tags: ["desire", "fromm", "death", "psychology", "biophilia"],
      connections: [
        { to: "warping-of-desire", label: "is the extreme form of" },
        { to: "wicked-desire", label: "is adjacent to" },
        { to: "mortal-attraction", label: "generates" },
        { to: "bodily-alienation", label: "produces" },
        { to: "total-exhaustion", label: "is the endpoint of" },
        { to: "the-zombie", label: "is the psychic interior of" },
      ],
      nuances: [
        { thinker: "Fromm — The Heart of Man", note: "Fromm describes the necrophilic character as one who 'is attracted to and fascinated by all that is not alive, all that is dead; corpses, decay, feces, dirt.' But he immediately extends this beyond the literal: the necrophilic loves order because order is the death of spontaneity; loves to talk about the past because the past is fixed and cannot surprise; loves machines because machines are predictable and controllable. The zombie is this character taken to its logical conclusion: a being for whom the living world has lost its call." },
        { thinker: "Becker — the denial of death", note: "Ernest Becker's argument in The Denial of Death is the dark complement to Fromm's necrophilia: humans are the animals that know they will die, and much of human culture is the elaborate symbolic system constructed to manage this knowledge. The necrophilic character, paradoxically, has not overcome this denial but succumbed to it differently: by moving toward death rather than fleeing it, by investing in what is dead rather than what is alive, as if to make peace with mortality by embracing it." },
      ],
      x: 160, y: 320, color: "#f87171", status: "consolidated",
    },

    {
      id: "wicked-desire",
      term: "Wicked Desire",
      definition: "The pleasure in watching others punished, humiliated, exposed, or destroyed — not merely the mild Schadenfreude of seeing the arrogant fall but a more sustained and darker appetite: the desire to witness and participate in the destruction of others, especially others perceived as having transgressed some norm. René Girard's scapegoating mechanism is the structural account: communities periodically require a victim onto whom accumulated tension and resentment can be discharged, and the scapegoat's destruction produces a temporary peace. Nietzsche's ressentiment is the psychological account: the person who cannot affirm their own life displaces this failure onto others, finding in their suffering a substitute satisfaction. In the contemporary context, wicked desire is the engine of the cancellation economy and the shitstorm: the swarm that converges not to argue or persuade but to punish, to expose, to witness humiliation. It is a desire that has been so thoroughly warped that it can only find satisfaction in the diminishment of others.",
      thinkers: ["René Girard", "Friedrich Nietzsche", "Sigmund Freud"],
      tags: ["desire", "violence", "ressentiment", "scapegoating", "psychology"],
      connections: [
        { to: "warping-of-desire", label: "is generated by" },
        { to: "necrophilia", label: "is adjacent to" },
        { to: "mortal-attraction", label: "is a specific form of" },
        { to: "contagion", label: "spreads mimetically through" },
        { to: "das-man", label: "is channelled by" },
        { to: "apocalyptic-faith", label: "generates" },
      ],
      nuances: [
        { thinker: "Girard — the scapegoat mechanism", note: "Girard's mimetic theory identifies desire as fundamentally imitative: we desire what others desire, which produces rivalry, which produces violence, which requires a scapegoat to discharge. The scapegoat's destruction is cathartic because it temporarily resolves the mimetic crisis — but it requires a new scapegoat when the tension builds again. The cancellation economy is a scapegoating machine: it provides a continuous supply of victims onto whom the accumulated resentment and anxiety of the zombie condition can be discharged." },
        { thinker: "Nietzsche — ressentiment", note: "Nietzsche's ressentiment names the specific psychology of wicked desire: the desire of those who cannot affirm their own life to negate the life of others. The person of ressentiment defines themselves negatively — not 'I am strong' but 'they are weak'; not 'I am good' but 'they are evil'. Wicked desire is ressentiment finding its contemporary vehicle: the platform that provides, at zero cost, the opportunity to participate in the public humiliation of others and feel righteous while doing it." },
      ],
      x: 200, y: 540, color: "#f87171", status: "consolidated",
    },

    {
      id: "mortal-attraction",
      term: "Mortal Attraction",
      definition: "The draw toward what harms, what depletes, what leads toward one's own diminishment — knowing something is bad and being drawn to it anyway, perhaps because of that. Mortal attraction has the structure of addiction: the repeated return to what one knows does not nourish, the compulsive engagement with what one knows is destroying one's capacity for genuine engagement. But it is broader than addiction: it names the specific pull of the things that accelerate zombification — the addictive app, the outrage cycle, the content that depletes without nourishing, the relationship that drains rather than feeds. Freud's death drive (Thanatos) is the deepest theoretical account: the pull toward dissolution, toward the reduction of tension to zero, toward the inorganic state that preceded life. Augustine's amor vitiosus — disordered love, love that has turned from the properly ordered object toward something that diminishes it — is the ethical formulation. In the zombie condition, mortal attraction is not the exception but the norm: the systematic warping of desire has made what depletes feel like what nourishes.",
      thinkers: ["Sigmund Freud", "Augustine of Hippo", "Kent Berridge"],
      tags: ["desire", "addiction", "death-drive", "compulsion", "harm"],
      connections: [
        { to: "warping-of-desire", label: "is a product of" },
        { to: "necrophilia", label: "has its characterological root in" },
        { to: "wicked-desire", label: "is adjacent to" },
        { to: "the-bite", label: "is what makes one vulnerable to" },
        { to: "total-exhaustion", label: "accelerates" },
        { to: "brain-rot", label: "produces" },
      ],
      nuances: [
        { thinker: "Freud — the death drive", note: "Freud's late concept of Thanatos — the drive toward dissolution, toward the reduction of all tension to zero, toward the inorganic state — names the pull toward non-being that operates alongside Eros. In Beyond the Pleasure Principle, Freud observed that patients compulsively repeat traumatic experiences rather than simply seeking pleasure — and concluded that something in the organism drives it toward its own undoing. Mortal attraction is Thanatos finding its contemporary forms: the scroll that continues past the point of pleasure, the outrage that one seeks out despite knowing it harms." },
        { thinker: "Berridge — wanting without liking", note: "Kent Berridge's neuroscience of desire distinguishes wanting (the dopaminergic drive toward an object) from liking (the hedonic pleasure of receiving it). In addiction and mortal attraction, wanting and liking become dissociated: the person wants what they do not like, is driven toward what does not satisfy. The wanting system has been captured by the object — or the platform — and continues to drive toward it even when the liking system consistently reports dissatisfaction. This is the neuroscience of the zombie's desire." },
      ],
      x: 380, y: 460, color: "#f87171", status: "consolidated",
    },

    // ── Body ──────────────────────────────────────────────────────────────────

    {
      id: "zombification-of-flesh",
      term: "Zombification of Flesh",
      definition: "The corruption of Merleau-Ponty's flesh — the reversible, intertwining fabric of being in which touching and being touched, seeing and being seen, are two sides of a single event. The zombie's flesh has lost its reversibility: it touches without being touched, moves through the world without the world moving through it, is in contact without genuine contact. Merleau-Ponty's chiasm — the crossing structure in which self and world, body and thing, perceiver and perceived are intertwined — has come undone. The zombified flesh is flesh without depth, flesh that encounters surfaces rather than depths, flesh that moves through the world without the world's resistance and invitation registering in return. This is the phenomenological form of bodily alienation at its most fundamental: not merely the loss of bodily awareness but the loss of the body's capacity for genuine encounter with the world.",
      thinkers: ["Maurice Merleau-Ponty", "Drew Leder", "Thomas Fuchs"],
      tags: ["flesh", "merleau-ponty", "body", "reversibility", "alienation"],
      connections: [
        { to: "the-zombie", label: "is enacted by" },
        { to: "bodily-alienation", label: "is the deepest form of" },
        { to: "numbness", label: "produces" },
        { to: "glaze", label: "extends into the visual in" },
        { to: "aesthetic-amnesia", label: "underlies" },
        { to: "warping-of-desire", label: "is accompanied by" },
      ],
      nuances: [
        { thinker: "Merleau-Ponty — the reversibility of flesh", note: "For Merleau-Ponty, the most fundamental feature of the flesh is its reversibility: the hand that touches is also touchable; the eye that sees is also visible. This reversibility is not symmetrical — I do not touch myself and the world in exactly the same way — but it means that the body is never purely a subject or purely an object: it oscillates between the two. The zombified flesh has lost this oscillation: it is stuck in the position of the subject that acts without being acted upon, the perceiver that is not perceived, the toucher that is not touched." },
        { thinker: "Fuchs — the lived body and deadening", note: "Thomas Fuchs identifies a specific form of bodily deadening — the progressive loss of the body's capacity for resonance, for being genuinely affected by what one encounters — as a phenomenological description of depression and dissociation. The zombified flesh is the body in this condition of deadening: still capable of motion and perception, but no longer capable of the mutual affect that makes perception meaningful. Things are seen but not met; people are encountered but not genuinely other." },
      ],
      x: 600, y: 340, color: "#84cc16", status: "consolidated",
    },

    {
      id: "bodily-alienation",
      term: "Bodily Alienation",
      definition: "The experience of one's own body as foreign, mechanical, or external — the body as something one carries around rather than something one is. Marx's alienation extended into phenomenology: as the worker is alienated from the product of their labour, from the act of production, and from their species-being, the zombified subject is alienated from the instrument of their existence — the body that perceives, moves, desires, and relates. Bodily alienation takes multiple forms in the contemporary condition: the body as a machine to be optimised (the biohacking, fitness-tracking, productivity-maximising body); the body as an image to be managed (the selfie body, the social media body, the body that is always being performed for an external gaze); and the body as an inconvenience to be minimised (the body that must be fed, rested, and moved, interrupting the pure flow of screen-mediated experience). In all these forms, the body ceases to be the medium of genuine engagement with the world and becomes instead an object of management, performance, or suppression.",
      thinkers: ["Karl Marx", "Drew Leder", "Susan Bordo"],
      tags: ["body", "alienation", "marx", "phenomenology", "self"],
      connections: [
        { to: "zombification-of-flesh", label: "is expressed as" },
        { to: "numbness", label: "produces" },
        { to: "haitian-zombie", label: "has its most extreme historical form in" },
        { to: "bed-rotting", label: "finds its contemporary expression in" },
        { to: "glaze", label: "extends into" },
        { to: "total-exhaustion", label: "deepens into" },
      ],
      nuances: [
        { thinker: "Leder — the dys-appearing body", note: "Drew Leder's phenomenology of the body shows that the healthy body is normally absent — it functions without demanding attention, disappearing into its tasks. Bodily alienation is a specific form of the body's reappearance: not the dys-appearance of pain or dysfunction but the strange appearance of the body as other, as object, as something looked at rather than lived from. The person who experiences their body as a machine to be optimised or an image to be managed has lost the primary first-person relation to their own embodiment." },
        { thinker: "Bordo — the body as cultural text", note: "Susan Bordo's analysis of how cultural norms — especially around gender and beauty — are inscribed in and through the body demonstrates that bodily alienation is not merely individual but cultural: the body that is managed, shaped, and performed in accordance with external norms is a body that has been colonised, made to carry meanings that are not its own. The zombified body is the body as cultural text — perfectly legible, perfectly managed, and no longer anyone's home." },
      ],
      x: 580, y: 460, color: "#a3e635", status: "consolidated",
    },

    {
      id: "numbness",
      term: "Numbness",
      definition: "The anesthesia of sustained overwhelm, disengagement, and zombification — not the absence of sensation but the progressive failure of sensation's capacity to register, to matter, to produce response. Numbness is what happens when the deluge continues long enough, when mortal attraction has depleted the capacity for genuine attraction, when the flesh has been sufficiently zombified that it no longer vibrates in response to what it encounters. The numb person is not unconscious: they perceive, register, and respond — but nothing lands with genuine weight, nothing produces the quality of being-affected that distinguishes genuine experience from its simulation. Rosa's resonance has failed completely: the world addresses the numb person and the address bounces back without finding a surface to vibrate. Numbness is both a defence and a symptom: a defence against the overwhelming quantity of the deluge, and a symptom of the progressive depletion of the capacity to feel that the defence itself produces. The zombie is numb not because it feels nothing but because feeling has been reduced to a surface phenomenon — sensations without depth, responses without genuine reception.",
      thinkers: ["Hartmut Rosa", "Paul Virilio", "Robert Jay Lifton"],
      tags: ["sensation", "affect", "defence", "depletion", "body"],
      connections: [
        { to: "zombification-of-flesh", label: "is produced by" },
        { to: "bodily-alienation", label: "accompanies" },
        { to: "total-exhaustion", label: "precedes" },
        { to: "glaze", label: "extends into" },
        { to: "aesthetic-amnesia", label: "deepens into" },
        { to: "bed-rotting", label: "enables" },
      ],
      nuances: [
        { thinker: "Lifton — psychic numbing", note: "Robert Jay Lifton coined 'psychic numbing' to describe the psychological defence of atomic bomb survivors: faced with an experience too overwhelming to be processed, the psyche shuts down its affective response, maintaining functional cognition while suspending the capacity for genuine feeling. Contemporary numbness has a similar structure but a different cause: not a single overwhelming event but the sustained low-grade overwhelm of the deluge, which produces the same shutdown through chronic rather than acute exposure." },
        { thinker: "Rosa — the muting of resonance", note: "Rosa identifies numbness as the endpoint of the acceleration dynamic: when the world demands more than the person can resonate with, the resonance system gradually shuts down. The numb person is not alienated in the old sense — they are not separated from a world they long for — but desensitised: the world no longer calls, not because it has changed but because the capacity to hear its call has been depleted. This is resonance failure at its most complete." },
      ],
      x: 580, y: 560, color: "#818cf8", status: "consolidated",
    },

    {
      id: "glaze",
      term: "Glaze",
      definition: "The non-attention of the screen-facing subject — eyes open, body present, but nobody genuinely home. The glaze is the visual and attentional correlate of numbness: the look that passes through rather than landing on, the gaze that scans without seeing, the eyes that move across content without the content registering as genuinely encountered. In Merleau-Ponty's terms, the glazed eye has lost its capacity for depth perception in the phenomenological sense: it sees surfaces without the sense of depth, thickness, and inexhaustibility that genuine visual encounter involves. The glazed person is technically awake and apparently attending — scrolling, watching, reading — but in a mode of pseudo-attention that produces the sensation of engagement without its substance. The glaze is the visual form of the zombie condition: the appearance of presence without genuine being-there. It is worth noting that the glaze is not passive: it is actively produced and maintained by platforms designed to keep users in exactly this state — attentive enough to consume, disengaged enough not to reflect.",
      thinkers: ["Maurice Merleau-Ponty", "Bernard Stiegler", "Jenny Odell"],
      tags: ["attention", "screen", "vision", "presence", "digital"],
      connections: [
        { to: "numbness", label: "extends into" },
        { to: "bodily-alienation", label: "is a form of" },
        { to: "brain-rot", label: "contributes to" },
        { to: "aesthetic-amnesia", label: "produces" },
        { to: "bed-rotting", label: "is the characteristic look of" },
        { to: "zombie-apocalypse", label: "is visible in" },
        { to: "das-man", label: "is the attentional mode of" },
      ],
      nuances: [
        { thinker: "Stiegler — the attention economy", note: "Bernard Stiegler's analysis of the attention economy identifies the glaze as its primary product: platforms compete for attention by producing states of low-grade engagement that are sufficient to generate data and advertising revenue but insufficient to produce genuine thought, genuine affect, or genuine relation. The glaze is the attentional state that the attention economy requires: captured enough to be monetised, disengaged enough not to demand anything in return." },
        { thinker: "Odell — on attention and seeing", note: "Jenny Odell's argument for the importance of genuine attention — of actually seeing what is in front of you, attending to the particular bird or tree or face rather than the category it represents — identifies the glaze as its opposite: the mode in which everything is recognised (categorised, scrolled past) without being genuinely seen. The glaze is the attentional mode of a culture that has substituted recognition for perception, categorisation for encounter." },
      ],
      x: 400, y: 560, color: "#a3e635", status: "consolidated",
    },

    {
      id: "the-aimless-hunt",
      term: "The Aimless Hunt",
      definition: "The zombie's characteristic movement through the world — not the purposeful stride of someone going somewhere, nor the receptive roaming of someone genuinely open to what they find, but the driven, directionless seeking of something that cannot be named. The zombie hunts but does not know what it is hunting for; it moves toward the next stimulus, the next screen, the next food source, the next outrage, without any overarching orientation that would distinguish one target from another. The aimless hunt is desire without object — or rather, desire that has been warped to the point where no genuine object presents itself, only the motion of seeking. It is both compelled (the zombie cannot stop) and purposeless (the zombie has no purpose). Phenomenologically, the aimless hunt names the destruction of what Husserl called horizon: the sense of implicit purpose and direction that gives any particular moment of seeking its orientation within a larger field of meaning. Without horizon, all seeking is aimless; without genuine desire, all hunting is empty.",
      thinkers: ["Edmund Husserl", "Erich Fromm", "Georges Bataille"],
      tags: ["movement", "desire", "seeking", "directionlessness", "body"],
      connections: [
        { to: "the-zombie", label: "is the characteristic movement of" },
        { to: "warping-of-desire", label: "results from" },
        { to: "numbness", label: "is driven by" },
        { to: "mortal-attraction", label: "is directed by" },
        { to: "bed-rotting", label: "is the horizontal form of" },
        { to: "brain-rot", label: "both produces and is produced by" },
      ],
      nuances: [
        { thinker: "Bataille — general economy and expenditure", note: "Georges Bataille's concept of general economy — the excess energy that living systems must expend, which can be discharged through luxury, eroticism, sacrifice, or war — describes the energy behind the aimless hunt: there is excess that must go somewhere, but in the zombie condition it has no genuine outlet. The aimless hunt is the zombie's attempt to discharge what has nowhere to go — seeking without finding, spending without enriching, hunting without quarry." },
        { thinker: "Husserl — the loss of horizon", note: "Husserl's concept of horizon — the implicit field of expectation, co-intention, and anticipation that surrounds any particular act of consciousness — names what the aimless hunt has lost: the sense of direction, purpose, and meaningful context that would make any particular seeking part of a larger oriented engagement with the world. Without horizon, experience collapses into a series of disconnected stimulations; the aimless hunt is the movement of a consciousness that has lost its horizon." },
      ],
      x: 200, y: 200, color: "#84cc16", status: "consolidated",
    },

    // ── Cultural & Social ─────────────────────────────────────────────────────

    {
      id: "das-man",
      term: "Das Man",
      definition: "Heidegger's they-self — the anonymous public average into which Dasein is ordinarily absorbed, whose taste, judgment, and orientation replaces one's own. In the zombie context, das Man is not merely a philosophical abstraction but the lived condition of the person whose desire has been so thoroughly colonised by the collective that they can no longer distinguish between what they genuinely want and what the they-world has placed in their path. The zombie likes what everyone likes, is shocked by what the news cycle has determined is shocking, finds beautiful what the algorithm has determined is beautiful, and calls all of this their own taste and judgment. Das Man in the zombie condition is not the ordinary fallenness that Heidegger describes — the comfortable absorption in public interpretation that still retains the structure of a possible authentic alternative — but something more thorough: the condition in which the call of conscience cannot be heard because the noise of the they-world has become total. The zombie does not even experience das Man as an external constraint; it is simply what one is, indistinguishably from what one could be.",
      thinkers: ["Martin Heidegger", "Theodor Adorno", "Byung-Chul Han"],
      tags: ["heidegger", "conformity", "identity", "authenticity", "social"],
      connections: [
        { to: "the-zombie", label: "is what absorbs" },
        { to: "aesthetic-amnesia", label: "produces" },
        { to: "warping-of-desire", label: "maintains" },
        { to: "glaze", label: "is the attentional mode of" },
        { to: "wicked-desire", label: "channels" },
        { to: "zombie-apocalypse", label: "is the social medium of" },
        { to: "contagion", label: "spreads through" },
      ],
      nuances: [
        { thinker: "Heidegger — das Man and authenticity", note: "For Heidegger, das Man is not an evil to be eliminated but the structural condition of ordinary existence: we are always already in a social world of shared language, shared practices, and shared interpretations, and this world is always already shaping what shows up for us. The call of conscience is the possibility of hearing, through this noise, one's ownmost possibility — what one genuinely is beyond the they-self's comfortable interpretations. The zombie condition is das Man without the call: the social absorption so total that no ownmost voice can be heard." },
        { thinker: "Adorno — the culture industry", note: "Adorno's analysis of the culture industry shows how das Man is produced and maintained by the mass media system: standardised products are presented as individual choices, conformity is packaged as freedom, and the consumer who chooses between pre-given options is affirmed as autonomous. The zombie consumer is the culture industry's ideal subject: one who experiences the industry's offerings as their own desires, the industry's judgments as their own taste, the industry's repetitions as genuine novelty." },
      ],
      x: 580, y: 200, color: "#6366f1", status: "consolidated",
    },

    {
      id: "ritual-deprivation",
      term: "Ritual Deprivation",
      definition: "The loss of the shared, embodied, repeating practices that gave life its rhythm, its meaning, its connection to something larger than individual preference. Victor Turner's liminality, Arnold van Gennep's rites of passage, and Émile Durkheim's collective effervescence all describe what ritual does: it marks time, it dissolves and reconstitutes the self, it binds individuals into a community through shared bodily participation in something that exceeds any individual. The zombie is the person who has been deprived of these practices — who has no threshold experiences, no collective gatherings that mark transition and loss, no embodied participation in something shared. Ritual deprivation is not the absence of habit (the zombie has many habits) but the absence of meaningful, collective, embodied practices that connect the individual to a larger rhythm. The result is a specific form of existential impoverishment: the sense that nothing is marked, nothing is gathered, nothing is consecrated — that time passes without being properly inhabited.",
      thinkers: ["Victor Turner", "Émile Durkheim", "Arnold van Gennep", "Ivan Illich"],
      tags: ["ritual", "community", "embodiment", "meaning", "time"],
      connections: [
        { to: "the-zombie", label: "produces the conditions for" },
        { to: "haitian-zombie", label: "was historically enforced by" },
        { to: "aesthetic-amnesia", label: "deepens" },
        { to: "bodily-alienation", label: "contributes to" },
        { to: "total-exhaustion", label: "leaves no resources for recovering from" },
        { to: "das-man", label: "is replaced by the practices of" },
      ],
      nuances: [
        { thinker: "Turner — liminality and communitas", note: "Turner's analysis of ritual identifies the liminal phase — the threshold state between the old self and the new — as the site of genuine transformation: in liminality, the normal social structures dissolve and a state of communitas (unstructured, egalitarian fellowship) becomes possible. Ritual deprivation is the loss of access to this liminal state: the person who has no rituals has no structured opportunity to dissolve, to be remade, to experience genuine communitas. They remain stuck in the ordinary social structure without the periodic renewal that ritual provides." },
        { thinker: "Durkheim — collective effervescence", note: "Durkheim's concept of collective effervescence — the heightened state of energy and vitality that arises when people gather together in shared ritual action — names what ritual deprivation takes away: the experience of being part of something larger than oneself, of the individual boundaries dissolving into a collective body. Collective effervescence is the opposite of the zombie condition: it is the moment when the person is most alive, most genuinely present, most genuinely in contact with others. Its loss produces the specific flatness of the ritual-deprived." },
      ],
      x: 160, y: 440, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "aesthetic-amnesia",
      term: "Aesthetic Amnesia",
      definition: "The inability to speak about, respond to, or be moved by beauty — not merely the failure of taste but the loss of the capacity for aesthetic experience altogether. The question 'what do you find beautiful?' produces a blank: not 'I find x beautiful' or even 'I'm not sure' but a genuine emptiness, as if the question is in a language one once spoke but can no longer access. Aesthetic amnesia is the zombification of the faculty of aesthetic response: not a matter of having wrong taste (das Man's problem) but of having lost contact with the inner register from which genuine aesthetic response arises. Kant's aesthetic judgment required a specific kind of disinterested attention — a setting aside of personal interest in order to be genuinely open to the object's beauty or sublimity. Aesthetic amnesia is the condition in which this attention is no longer available: the person who has been in the deluge long enough, whose desire has been sufficiently warped, whose flesh has been sufficiently zombified, finds that they cannot attend to beauty because they cannot attend.",
      thinkers: ["Immanuel Kant", "John Dewey", "Elaine Scarry"],
      tags: ["aesthetics", "beauty", "attention", "perception", "amnesia"],
      connections: [
        { to: "numbness", label: "is the aesthetic form of" },
        { to: "glaze", label: "is produced by" },
        { to: "das-man", label: "is intensified by" },
        { to: "zombification-of-flesh", label: "underlies" },
        { to: "ritual-deprivation", label: "deepens" },
        { to: "brain-rot", label: "accompanies" },
      ],
      nuances: [
        { thinker: "Scarry — on beauty and being just", note: "Elaine Scarry's argument in On Beauty and Being Just connects aesthetic experience to the ethical: genuine encounters with beauty produce in the perceiver a heightened attentiveness, a widening of concern, a sense of the world's inexhaustibility. Aesthetic amnesia is therefore not merely an aesthetic loss but an ethical one: the person who cannot respond to beauty is also less capable of the kind of attentiveness that justice requires. The zombie's aesthetic amnesia is inseparable from their moral flattening." },
        { thinker: "Dewey — art as experience", note: "John Dewey's account of aesthetic experience as a heightened, unified form of ordinary experience — experience that achieves completion, that has a genuine beginning, development, and resolution — identifies what aesthetic amnesia has lost: not merely the capacity to respond to art but the capacity for unified experience as such. The aesthetically amnesiac person cannot have aesthetic experience because they cannot have genuine experience: the deluge has fragmented their capacity for the kind of sustained, developing engagement from which aesthetic experience arises." },
      ],
      x: 400, y: 180, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "bed-rotting",
      term: "Bed Rotting",
      definition: "The contemporary practice of remaining in bed not to sleep or rest but to scroll, to do nothing, to let time pass without genuine engagement or genuine rest. Bed rotting is the zombie condition in its most literal spatial form: the person who is present but not present, alive but not living, whose body is horizontal while their attention is captured by the screen, whose waking hours and sleeping hours have blurred into a single undifferentiated state of low-grade stimulation and high-grade absence. It is distinct from genuine rest (which is productive, renewing, and embodied) and from genuine illness (which has a specific cause and trajectory): bed rotting is the occupation of the resting position without the restoration of rest, the use of the bed as a site of neither sleep nor waking but of the zombie's characteristic in-between. The bed, in Bachelard's phenomenology, is the site of the most intimate form of dwelling — sheltered, warm, enclosed. Bed rotting is the corruption of this intimacy: the most private space inhabited in the most dissociated mode.",
      thinkers: ["Gaston Bachelard", "Jonathan Crary", "Byung-Chul Han"],
      tags: ["rest", "body", "screen", "dissociation", "contemporary"],
      connections: [
        { to: "bodily-alienation", label: "is a contemporary expression of" },
        { to: "numbness", label: "is enabled by" },
        { to: "glaze", label: "is the characteristic look of" },
        { to: "the-aimless-hunt", label: "is the horizontal form of" },
        { to: "total-exhaustion", label: "is a response to" },
        { to: "brain-rot", label: "both produces and is produced by" },
      ],
      nuances: [
        { thinker: "Crary — 24/7", note: "Jonathan Crary's analysis of the 24/7 culture — the elimination of genuine rest by a capitalism that operates continuously and requires its subjects to remain continuously available — describes the context in which bed rotting arises: the bed has lost its function as a site of genuine withdrawal from the demands of the world, because the world (in the form of the phone) has followed one into it. Bed rotting is the zombie's response to a culture that has eliminated genuine rest: one occupies the position of rest without accessing its substance." },
        { thinker: "Han — the burnout of the positive", note: "Han's account of the achievement society's paradoxical exhaustion describes bed rotting as its symptom: the person who has been required to be continuously productive, continuously positive, continuously available eventually collapses into a state that looks like rest but is its opposite — not the productive emptiness of genuine rest but the empty fullness of someone who has used themselves up and cannot access genuine renewal. Bed rotting is the burnout society's bedroom." },
      ],
      x: 160, y: 560, color: "#84cc16", status: "consolidated",
    },

    {
      id: "brain-rot",
      term: "Brain Rot",
      definition: "The contemporary vernacular for the condition of having consumed so much low-quality, high-stimulation content that one's capacity for sustained attention, complex thought, genuine curiosity, and deep engagement has been progressively degraded. Brain rot is not merely distraction (which is temporary and reversible) but a cumulative impairment: the repeated exposure to content designed to trigger rapid, shallow responses gradually restructures the attentional system, making sustained engagement increasingly difficult and rapid, shallow response increasingly the default. It is the zombie condition at the level of cognitive capacity: not the loss of intelligence but the erosion of the particular kind of attention — slow, sustained, willing to sit with difficulty — from which complex thought and genuine aesthetic experience arise. The person with advanced brain rot is not stupid; they are cognitively capable of many things but progressively less capable of the specific mode of attention that would allow them to recognise or address their condition.",
      thinkers: ["Nicholas Carr", "Maryanne Wolf", "Bernard Stiegler"],
      tags: ["attention", "cognition", "digital", "degradation", "media"],
      connections: [
        { to: "zombie-apocalypse", label: "characterises" },
        { to: "glaze", label: "contributes to" },
        { to: "aesthetic-amnesia", label: "accompanies" },
        { to: "mortal-attraction", label: "is accelerated by" },
        { to: "the-aimless-hunt", label: "both produces and is produced by" },
        { to: "bed-rotting", label: "is mutually reinforced by" },
        { to: "das-man", label: "makes total absorption in" },
      ],
      nuances: [
        { thinker: "Carr — The Shallows", note: "Nicholas Carr's argument that internet use is restructuring the brain toward shallow, rapid processing at the expense of deep reading and sustained concentration is the empirical basis for brain rot: the attentional habits fostered by digital media — rapid switching, continuous partial attention, the expectation of instant gratification — are precisely the habits that make deep engagement progressively harder. Brain rot names the cumulative effect of these habits over years of intensive use." },
        { thinker: "Wolf — Reader, Come Home", note: "Maryanne Wolf's neuroscience of reading shows that the deep reading brain — the brain capable of sustained, immersive engagement with complex text — is a cultural achievement that must be cultivated and that can be lost. Brain rot is the loss of this achievement: the progressive erosion of the capacity for deep reading (and by extension, deep thinking) through the habituation of the attentional system to shallow, rapid processing. The brain rot condition is the failure to sustain the cultural work of maintaining deep literacy." },
      ],
      x: 400, y: 380, color: "#6366f1", status: "consolidated",
    },

    // ── Collective & Existential ───────────────────────────────────────────────

    {
      id: "apocalyptic-faith",
      term: "Apocalyptic Faith",
      definition: "Not bad faith in the Sartrean sense (the denial of freedom through self-deception) but a specific contemporary variant: the state of believing that the world is ending — or at least that things are irreversibly bad — and using this belief not to act but to justify non-action. Apocalyptic faith is the zombie's philosophical posture toward the permanent emergency: 'what's the point?' as a permanent orientation rather than a temporary response. It is faith rather than knowledge because it is held with a certainty that exceeds the evidence and that is immune to counter-argument: the person in apocalyptic faith does not merely think the world is bad but experiences the world's badness as a fundamental condition against which action is futile. Mark Fisher's capitalist realism is the cultural form — it is easier to imagine the end of the world than the end of the current system — but apocalyptic faith adds an affective dimension: the zombie does not merely think alternatives are impossible but feels this impossibility, inhabits it, and finds in it a perverse comfort. The world is ending; one need not choose; one can watch.",
      thinkers: ["Mark Fisher", "Jean-Paul Sartre", "Walter Benjamin"],
      tags: ["faith", "apocalypse", "bad-faith", "politics", "passivity"],
      connections: [
        { to: "zombie-apocalypse", label: "is the passive response to" },
        { to: "total-exhaustion", label: "is produced by" },
        { to: "wicked-desire", label: "generates" },
        { to: "das-man", label: "is reinforced by" },
        { to: "zombie-apocalypse", label: "is sustained by" },
        { to: "the-undead", label: "maintains the forms of life of" },
      ],
      nuances: [
        { thinker: "Fisher — it's easier to imagine the end of the world", note: "Fisher's formulation names the specific structure of apocalyptic faith: not that people actually believe the world will end but that they cannot imagine it continuing differently. The apocalyptic is the negative image of utopia: where utopia names a possible better world, the apocalyptic names the impossibility of any world other than the current one, extended to its catastrophic conclusion. Apocalyptic faith inhabits this impossibility and makes it a form of life." },
        { thinker: "Benjamin — the revolutionary interruption", note: "Benjamin's concept of the Jetztzeit — the moment of revolutionary interruption, when time stops and genuine change becomes possible — is the counterpoint to apocalyptic faith: where apocalyptic faith sees only the continuity of the bad, Benjamin's revolutionary moment sees the possibility of stopping the catastrophe by recognising it as such. The zombie's apocalyptic faith is the inability to occupy Benjamin's moment: to see the emergency as an emergency rather than as the nature of things." },
      ],
      x: 580, y: 380, color: "#f87171", status: "consolidated",
    },

    {
      id: "the-undead",
      term: "The Undead",
      definition: "What should be dead but persists — the figure of things that have lost their animating principle but continue to function, to occupy space, to make demands. The undead names the zombie condition at the systemic level: institutions that have lost their purpose but maintain their procedures; cultural forms that have lost their vitality but continue to be reproduced; ways of life that have ceased to nourish but continue to be inhabited; desires that have been extinguished but continue to drive behaviour through inertia. Derrida's hauntology names the theoretical structure: the present haunted by the debris of past forms, by futures that never arrived, by the persistence of what should have been superseded. Mark Fisher developed this into a cultural diagnosis of the contemporary moment: the undead is the dominant cultural form — the past that cannot be laid to rest, the future that cannot arrive, the present that is neither alive nor dead but perpetually in-between.",
      thinkers: ["Mark Fisher", "Jacques Derrida", "Franco 'Bifo' Berardi"],
      tags: ["persistence", "death", "culture", "haunting", "system"],
      connections: [
        { to: "the-zombie", label: "is the systemic form of" },
        { to: "zombie-apocalypse", label: "is populated by" },
        { to: "apocalyptic-faith", label: "maintains the forms of life of" },
        { to: "das-man", label: "is maintained by" },
        { to: "warping-of-desire", label: "is sustained by" },
        { to: "ritual-deprivation", label: "is the condition of" },
      ],
      nuances: [
        { thinker: "Fisher — hauntology and lost futures", note: "Fisher's hauntology identifies the specific form of undead persistence in contemporary culture: not the survival of the past into the present (which would be merely conservative) but the haunting of the present by futures that were promised and never arrived. The welfare state, the space age, the social movements of the 1960s and 1970s — these are the lost futures that haunt the present as undead possibilities, neither alive nor dead, neither realisable nor mournable." },
        { thinker: "Berardi — the slow cancellation", note: "Franco 'Bifo' Berardi's analysis of the slow cancellation of the future — the progressive foreclosure of genuine novelty, genuine risk, genuine transformation — describes the cultural condition in which the undead thrives: when the future can only be imagined as the past repeated, all that remains is the undead persistence of forms that have outlasted their animating principle. The zombie apocalypse is the civilisation of the undead." },
      ],
      x: 200, y: 360, color: "#818cf8", status: "consolidated",
    },

    {
      id: "contagion",
      term: "Contagion",
      definition: "The mimetic transmission of the zombie condition — the way that disengagement, desire-warping, bodily alienation, and apocalyptic faith spread through social contact. Contagion is not merely metaphorical: the zombie condition is genuinely transmissible, not through a bite (as in horror mythology) but through the far more mundane mechanisms of mimesis, social norm formation, and the redesign of shared environments. Gabriel Tarde's mimicry — the fundamental tendency of social life to imitate, to copy, to conform — is the mechanism: the zombie condition spreads because the behaviours, postures, and orientations of the zombified are adopted by those around them, partly through unconscious imitation and partly through the redesign of shared spaces (offices, schools, homes) in ways that discourage genuine presence. René Girard's mimetic desire — we desire what others desire — extends this: the warped desires of the zombie are contagious because desire itself is mimetic. In the digital environment, contagion is algorithmically amplified: the platform rewards and spreads the content that produces the most zombie-like engagement.",
      thinkers: ["Gabriel Tarde", "René Girard", "Elias Canetti"],
      tags: ["mimesis", "social", "transmission", "desire", "spread"],
      connections: [
        { to: "the-zombie", label: "spreads through" },
        { to: "das-man", label: "operates through" },
        { to: "wicked-desire", label: "is transmitted through" },
        { to: "zombie-apocalypse", label: "produces" },
        { to: "the-bite", label: "is the acute form of" },
        { to: "warping-of-desire", label: "transmits" },
      ],
      nuances: [
        { thinker: "Tarde — the laws of imitation", note: "Gabriel Tarde's sociology identifies imitation as the fundamental mechanism of social life: we learn to desire, to believe, to act by imitating others, and society is constituted by these flows of imitation. The zombie condition spreads through the same mechanism: the posture of disengagement, the habit of the glaze, the practice of bed rotting are all learned through imitation of those around us. The contagion is social before it is individual." },
        { thinker: "Canetti — crowds and power", note: "Elias Canetti's analysis of the crowd identifies contagion as its fundamental dynamic: in a crowd, the individual's barriers dissolve and they become available for the transmission of impulse, emotion, and orientation from one body to another. The digital swarm is Canetti's crowd without the physical co-presence: the same transmission of impulse and the same dissolution of individual resistance, mediated by screens rather than physical contact. The zombie apocalypse is a slow-motion crowd in which the contagion is not enthusiasm but disengagement." },
      ],
      x: 580, y: 540, color: "#a3e635", status: "consolidated",
    },

    {
      id: "total-exhaustion",
      term: "Total Exhaustion",
      definition: "The depletion not merely of cognitive and emotional resources (burnout) but of the vital force itself — the exhaustion of the capacity to want, to feel, to be genuinely moved by anything. Total exhaustion is beyond burnout: the burned-out person still has enough energy left to feel their exhaustion; the totally exhausted person has passed beyond even this. It is the endpoint of the deluge's dynamics, the condition toward which dynamic stabilisation, chronic urgency, mortal attraction, and the aimless hunt all tend when sustained long enough. Weil's affliction names its spiritual form; Fromm's necrophilia names its psychological form; total exhaustion names its phenomenological form: the person who is technically alive but from whom life is draining, who moves but does not project forward, who perceives but does not receive, who exists but is not genuinely present. The totally exhausted person has been zombified not by a single transformative event but by the slow accumulation of the deluge's demands.",
      thinkers: ["Simone Weil", "Byung-Chul Han", "Franco 'Bifo' Berardi"],
      tags: ["exhaustion", "depletion", "vitality", "burnout", "body"],
      connections: [
        { to: "total-exhaustion", label: "is the deepening of" },
        { to: "numbness", label: "is the phenomenological form of" },
        { to: "numbness", label: "precedes" },
        { to: "bodily-alienation", label: "deepens" },
        { to: "the-zombie", label: "is the condition of" },
        { to: "mortal-attraction", label: "is accelerated by" },
        { to: "bed-rotting", label: "is a response to" },
      ],
      nuances: [
        { thinker: "Berardi — the exhaustion of desire", note: "Franco 'Bifo' Berardi's analysis of the exhaustion of the social body — the progressive depletion of the desire and energy that animate collective life — describes total exhaustion at the civilisational scale: the sense that the social organism has used itself up, that the resources from which renewal normally comes have been depleted, that what remains is the inertial continuation of forms that are no longer animated by genuine desire or genuine hope. Total exhaustion is the zombie condition of the collective." },
        { thinker: "Han — tiredness and the right to refuse", note: "Han draws on Peter Handke's concept of a 'fundamental tiredness' — a tiredness that is not merely the absence of energy but a specific condition of the ego's dissolution, which can paradoxically be generative — to suggest that there is a tiredness beyond burnout that might be the condition for a different kind of presence. Total exhaustion, from this angle, contains within it the possibility of a different kind of rest: not the recovery of energy for more achievement, but the dissolution of the achievement-subject itself." },
      ],
      x: 400, y: 540, color: "#6366f1", status: "consolidated",
    },

    {
      id: "the-bite",
      term: "The Bite",
      definition: "The moment of initiation into the zombie condition — the specific encounter with the platform, the content, the system, the habit, or the relationship that hooks and begins the transformation. The bite is the acute version of what contagion describes structurally: where contagion names the diffuse, ambient transmission of the zombie condition through social environments, the bite names the precise moment of entry — the first time one loses an hour to a social media feed and finds it was three; the first time one discovers that outrage is more engaging than contentment; the first time one realises that the phone is more interesting than the room. In the Haitian zombie tradition, the bite is the pharmacon — the substance that induces the death-like state and the subsequent zombie condition. In the contemporary context, the pharmacon is the platform: the digital environment that is simultaneously medicine and poison, tool and trap, the thing that connects and the thing that zombifies.",
      thinkers: ["Wade Davis", "Bernard Stiegler", "Tristan Harris"],
      tags: ["initiation", "addiction", "platform", "transformation", "pharmacon"],
      connections: [
        { to: "contagion", label: "is the acute form of" },
        { to: "warping-of-desire", label: "initiates" },
        { to: "mortal-attraction", label: "is what makes one vulnerable to" },
        { to: "haitian-zombie", label: "has its historical form in" },
        { to: "brain-rot", label: "begins the process of" },
        { to: "the-zombie", label: "initiates the transformation into" },
      ],
      nuances: [
        { thinker: "Stiegler — the pharmacon", note: "Bernard Stiegler uses Derrida's reading of Plato's pharmacon — the substance that is simultaneously remedy and poison — to describe the ambivalence of technical systems: the same tools that enable collective intelligence can be deployed to exploit and destroy it. The bite is the moment when the pharmacon reveals its poisonous side: when the tool that promised connection, knowledge, and efficiency discloses its capacity to zombify, to capture, to deplete." },
        { thinker: "Harris — the attention engineers", note: "Tristan Harris's account of the deliberate engineering of addictive engagement in social media platforms describes the bite from the inside: the specific mechanisms (variable reward schedules, social validation loops, endless scroll) that are designed to produce the first hook and maintain it. The bite is not accidental; it is the product of sophisticated engineering applied to the oldest mechanism of desire-capture: the variable reward that keeps the organism returning for the next hit." },
      ],
      x: 360, y: 200, color: "#f87171", status: "consolidated",
    },

  ],
};
