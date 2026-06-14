export const heideggerNetwork = {
  id: "heidegger",
  label: "Heidegger",
  subtitle: "Being-in-the-World, Care & the Disclosure of Existence",
  accent: "#818cf8",
  storageKey: "semantic-network-heidegger",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "being-in-the-world",
      term: "Being-in-the-World",
      definition: "Heidegger's foundational concept — the insistence that human existence (Dasein) is not a subject enclosed in an interior that then reaches out to an external world, but is always already out there, engaged, embedded, and involved with things and others in a shared world. Being-in-the-world is a unitary structure, not a combination of three separate elements. The hyphenation is deliberate: subject, world, and the relation between them are not prior to each other but co-constitute each other in a single event of existence. This is Heidegger's most decisive departure from Descartes and from the entire modern epistemological tradition: the question is not how a subject gets access to an external world, but how the structure of always-already-being-out-there shapes everything we can know, do, and be.",
      thinkers: ["Martin Heidegger", "Hubert Dreyfus", "Charles Taylor"],
      tags: ["ontology", "existence", "world", "phenomenology", "dasein"],
      connections: [
        { to: "dasein", label: "is the structure of" },
        { to: "care", label: "is held together by" },
        { to: "ready-to-hand", label: "is disclosed through" },
        { to: "worlding", label: "is enacted as" },
        { to: "stimmung", label: "is always already coloured by" },
        { to: "thrownness", label: "includes the facticity of" },
        { to: "language-house-of-being", label: "is articulated in" },
      ],
      x: 400, y: 300, color: "#818cf8", status: "consolidated",
    },

    // ── Existential Analytic ──────────────────────────────────────────────────

    {
      id: "dasein",
      term: "Dasein",
      definition: "Heidegger's term for the kind of being that has being as a question for it — literally 'being-there', the entity whose being is an issue for it in its very being. Dasein is not equivalent to 'human being' or 'subject' or 'consciousness'; it is a formal designation for the entity that we each are, characterised above all by the fact that it does not simply exist but understands its existence, interprets it, and relates to it. Dasein is always mine — each Dasein exists in the first person, as a 'who' rather than a 'what'. It is constituted by existentials (ontological structures such as thrownness, projection, and care) rather than by properties or categories. Dasein's most extreme possibility — death — is the possibility that individualises it most completely, pulling it back from the anonymous they-self toward the ownmost structure of its being.",
      thinkers: ["Martin Heidegger", "William Richardson", "Hubert Dreyfus"],
      tags: ["ontology", "existence", "selfhood", "phenomenology", "being"],
      connections: [
        { to: "being-in-the-world", label: "is the being of" },
        { to: "care", label: "is whose being is" },
        { to: "thrownness", label: "is always already shaped by" },
        { to: "projection", label: "is always ahead of itself in" },
        { to: "the-they-self", label: "is ordinarily absorbed in" },
        { to: "anxiety", label: "is individualised by" },
        { to: "call-of-conscience", label: "is summoned by" },
      ],
      x: 220, y: 180, color: "#818cf8", status: "consolidated",
    },

    {
      id: "care",
      term: "Care",
      definition: "The structural whole of Dasein's being — the unity that holds together thrownness (always already in a situation), projection (always ahead toward possibilities), and fallenness (absorbed in the everyday world of das Man). Sorge, care, is not a psychological attitude or an ethical virtue but an ontological structure: it is what Dasein's being consists in, the formal description of a being that finds itself thrown into a world it did not choose, pressed forward into possibilities it must take up or flee, and always already fallen into the interpretations and practices of the they-world. Care is why Heidegger can say that Dasein is essentially temporal: the three dimensions of care — the already, the ahead-of-itself, the alongside — map onto past, future, and present as the ecstases of time.",
      thinkers: ["Martin Heidegger", "Charles Taylor", "Joan Stambaugh"],
      tags: ["ontology", "temporality", "structure", "existence", "dasein"],
      connections: [
        { to: "dasein", label: "is the being of" },
        { to: "thrownness", label: "includes the already of" },
        { to: "projection", label: "includes the ahead-of-itself of" },
        { to: "the-they-self", label: "includes the fallenness into" },
        { to: "anxiety", label: "is disclosed in its unity by" },
        { to: "being-in-the-world", label: "holds together" },
        { to: "gelassenheit", label: "finds its meditative counterpart in" },
      ],
      nuances: [
        { thinker: "Heidegger — Being and Time §41", note: "Heidegger arrives at care through a phenomenological analysis of Dasein's structure: Dasein is always already in a situation (thrownness), always pressing forward toward possibilities (projection), and always alongside things and others in the world (fallenness). Care names the unity of these three: the being whose being is an issue for it, always already in a world, always ahead of itself. This is not psychological care or ethical concern but the ontological constitution of existence." },
        { thinker: "The myth of Care — Hyginus", note: "Heidegger cites an ancient Roman myth in which the goddess Cura (Care) fashions a human figure from clay; Jupiter gives it spirit; Earth claims the body; Saturn arbitrates: for its lifetime the creature belongs to Care, who first fashioned it. At death, Jupiter takes the spirit, Earth the body. The name 'human' comes from humus, earth. Heidegger uses this myth to show that the insight that Dasein is Care is not merely his own invention but something that human self-understanding has always obscurely known." },
        { thinker: "Taylor — engaged agency", note: "Charles Taylor develops the Heideggerian insight that care is prior to detached reflection: we are always already caring beings, oriented toward what matters, before we adopt any reflective attitude toward our situation. This has consequences for ethics: the question is not how to motivate a detached subject to care, but how to understand and cultivate the caring orientations already constitutive of our being." },
      ],
      x: 400, y: 160, color: "#818cf8", status: "consolidated",
    },

    {
      id: "thrownness",
      term: "Thrownness",
      definition: "Geworfenheit — the condition of always already finding oneself in a situation, a world, a body, a language, a historical moment that one did not choose and cannot escape. Dasein does not first exist as a pure self and then enter a situation; it discovers itself as always already thrown — into a particular culture, a particular set of possibilities, a particular mood. Thrownness is not a deficiency to be overcome but an ontological structure: the facticity of existence, the weight of the already that every project must take up and work with or against. The mood of anxiety discloses thrownness most clearly — in anxiety, the familiar world withdraws and Dasein finds itself naked before the bare fact of its having-been-thrown, with no ground beneath it other than its own being.",
      thinkers: ["Martin Heidegger", "Simone de Beauvoir", "Pierre Bourdieu"],
      tags: ["facticity", "existence", "situation", "temporality", "dasein"],
      connections: [
        { to: "care", label: "is the already-dimension of" },
        { to: "dasein", label: "constitutes the facticity of" },
        { to: "anxiety", label: "is disclosed by" },
        { to: "projection", label: "is always taken up in" },
        { to: "stimmung", label: "is felt as" },
        { to: "the-they-self", label: "is ordinarily absorbed in the interpretations of" },
      ],
      nuances: [
        { thinker: "Heidegger — facticity and situation", note: "Heidegger insists that thrownness is not a past event that is over and done with but a permanent structure of Dasein's being: the having-been is not gone but maintained in existence as the weight that every project bears. To be thrown is to always already find oneself somewhere, as someone, with certain possibilities opened and others closed, without having chosen any of this." },
        { thinker: "Bourdieu — habitus", note: "Bourdieu's concept of habitus — the system of durable, transposable dispositions acquired through early social experience — is a sociological concretisation of thrownness: the particular throw each person receives is shaped by class, gender, culture, and history, and it structures all subsequent perception and action without being consciously available for revision. Thrownness is not general but specific; each Dasein is thrown differently." },
      ],
      x: 180, y: 320, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "projection",
      term: "Projection",
      definition: "Entwurf — the forward-throwing dimension of Dasein, always already ahead of itself toward its possibilities. Dasein does not first exist as a complete being and then occasionally take up projects; it is constitutively projective — it exists as the throwing-forward of itself toward what it can be. Projection is not a conscious plan or a deliberate choice; it is the ontological structure that makes any plan or choice possible. Dasein is always ahead of itself, already living toward certain possibilities that give shape and direction to its current engagement with the world. Together with thrownness, projection constitutes the temporal structure of existence: the not-yet presses forward from out of the already, and care holds both in tension.",
      thinkers: ["Martin Heidegger", "Jean-Paul Sartre", "Hannah Arendt"],
      tags: ["possibility", "temporality", "existence", "future", "dasein"],
      connections: [
        { to: "care", label: "is the ahead-of-itself dimension of" },
        { to: "dasein", label: "is a constitutive structure of" },
        { to: "thrownness", label: "always takes up" },
        { to: "anxiety", label: "discloses the nullity of" },
        { to: "call-of-conscience", label: "is recalled to its ownmost by" },
      ],
      nuances: [
        { thinker: "Heidegger — possibilities, not properties", note: "Heidegger distinguishes possibilities in his technical sense from mere logical possibilities or unrealised options: Dasein's possibilities are its ownmost ways of being, what it can be. To project toward a possibility is not to contemplate it but to live it forward. Dasein is its possibilities in a way that a stone is not: the stone is fully actual, whereas Dasein is always more than it actually is at any moment, always pressing toward what it is not yet." },
        { thinker: "Sartre — existence precedes essence", note: "Sartre's famous formula is a radicalisation of Heidegger's projection: human beings have no pre-given essence to realise but exist first and then project themselves into a self they are always in the process of becoming. Where Heidegger holds projection in tension with thrownness and limits radical freedom by facticity, Sartre emphasises the absolute character of projection — condemned to be free, we are fully responsible for what we project ourselves toward." },
      ],
      x: 220, y: 440, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "the-they-self",
      term: "The They-Self",
      definition: "Das Man — the anonymous public average into which Dasein is ordinarily absorbed: the way one does things, the way things are, the way one ought to behave, without any particular person being responsible for it. The they-self is not a conspiracy or an oppressive force but the normal condition of everyday existence: language, practices, standards of correctness, public interpretations of events — all these are always already in place before any individual Dasein arrives. Das Man is structurally necessary — without it, Dasein could not function in the social world — but it is also a mode of inauthenticity: absorbed in das Man, Dasein evades its ownmost possibilities, losing itself in what everyone does and no one takes responsibility for.",
      thinkers: ["Martin Heidegger", "Hannah Arendt", "Byung-Chul Han"],
      tags: ["sociality", "inauthenticity", "everydayness", "public", "dasein"],
      connections: [
        { to: "dasein", label: "is what ordinarily absorbs" },
        { to: "care", label: "is the fallenness dimension of" },
        { to: "anxiety", label: "pulls Dasein back from" },
        { to: "call-of-conscience", label: "is what summons Dasein away from" },
        { to: "thrownness", label: "provides the interpretations that shape" },
      ],
      nuances: [
        { thinker: "Heidegger — publicness and averageness", note: "Heidegger characterises das Man through three related phenomena: publicness (everything is interpreted in terms accessible to everyone), averageness (standards are set by the middling competence of no one in particular), and levelling-down (everything distinctive is reduced to what everyone can readily understand). Das Man is not evil but it is the site of Dasein's ordinary self-evasion: it offers the comfort of never having to take a stand as this particular self." },
        { thinker: "Arendt — the social and the public realm", note: "Arendt's distinction between the social (the realm of conformity, das Man writ large) and the public realm (the space of genuine action and speech where individuals appear as who they are) maps onto Heidegger's analysis while giving it a political dimension. The rise of the social in modernity is, for Arendt, the rise of das Man: the replacement of genuine plurality with behavioural conformity." },
      ],
      x: 580, y: 180, color: "#f87171", status: "consolidated",
    },

    {
      id: "anxiety",
      term: "Anxiety",
      definition: "Angst — the fundamental mood that individualises Dasein, pulling it back from absorption in das Man toward the bare structure of its own being. Anxiety is not fear, which always has a specific object; anxiety is anxious about nothing in particular — or rather, about the nothing, the groundlessness of Dasein's existence, the fact of being-in-the-world as such. In anxiety, the familiar world of involvements withdraws — nothing offers itself as relevant, nothing calls for engagement — and Dasein finds itself naked before its own thrownness and its ownmost possibilities. This is not a pathological state but an existential disclosure: anxiety reveals what ordinary absorption in das Man conceals — that Dasein has no given essence, no guaranteed ground, only the nullity of its thrownness and the openness of its projection.",
      thinkers: ["Martin Heidegger", "Søren Kierkegaard", "Jean-Paul Sartre"],
      tags: ["mood", "attunement", "authenticity", "nothing", "existence"],
      connections: [
        { to: "dasein", label: "individualises" },
        { to: "the-they-self", label: "withdraws Dasein from" },
        { to: "thrownness", label: "discloses the nullity of" },
        { to: "care", label: "discloses the unity of" },
        { to: "stimmung", label: "is the most individualising" },
        { to: "call-of-conscience", label: "prepares Dasein to hear" },
      ],
      nuances: [
        { thinker: "Heidegger — anxiety and the nothing", note: "Heidegger's lecture 'What is Metaphysics?' develops the analysis of anxiety as the mood that brings Dasein before the nothing — not the logical negation of some particular thing, but the groundlessness of existence as such. In anxiety, beings as a whole slip away; only the bare that of existence remains. This is the mood in which the fundamental question of metaphysics — why is there something rather than nothing? — becomes existentially urgent rather than merely academic." },
        { thinker: "Kierkegaard — the dizziness of freedom", note: "Kierkegaard, whom Heidegger credits as a forerunner, describes anxiety as the dizziness of freedom — the vertiginous condition of a being who is nothing fixed but must choose what to become. Heidegger inherits this but de-psychologises it: anxiety is not primarily about moral choice but about the ontological structure of a being that has no given essence, only its thrownness and its projection." },
      ],
      x: 580, y: 340, color: "#f87171", status: "consolidated",
    },

    {
      id: "call-of-conscience",
      term: "The Call of Conscience",
      definition: "The silent, wordless call that summons Dasein back from lostness in das Man toward its ownmost possibility — the possibility of authentic existence, of owning its thrownness and projecting from out of it rather than fleeing into the interpretations of the they-self. The call of conscience is structurally peculiar: it comes from nowhere identifiable, is addressed to no one in particular, and says nothing — yet it is heard as a summons. Heidegger argues that the caller is Dasein itself, summoning itself from its fallenness; the call is the voice of the care-structure calling Dasein home to its own being. What the call discloses is guilt — not moral guilt about specific deeds but the ontological guilt of a being that is always already not what it owes to itself, always thrown into a situation it did not choose and projecting from a nullity it cannot escape.",
      thinkers: ["Martin Heidegger", "Søren Kierkegaard"],
      tags: ["conscience", "authenticity", "selfhood", "guilt", "existence"],
      connections: [
        { to: "dasein", label: "summons" },
        { to: "the-they-self", label: "calls Dasein back from" },
        { to: "anxiety", label: "is prepared by" },
        { to: "care", label: "is the voice of" },
        { to: "projection", label: "recalls Dasein to its ownmost" },
      ],
      nuances: [
        { thinker: "Heidegger — guilt and nullity", note: "The guilt disclosed by the call of conscience is not moral wrongdoing but ontological: Dasein is guilty in the sense of being the null ground of a nullity — it did not choose its thrownness, it cannot fully master its projection, and it is always already fallen. Authenticity is not the overcoming of this guilt but its proper owning: standing in one's nullity without evasion, projecting from out of one's thrownness without pretending to a ground that is not there." },
        { thinker: "Silence as the mode of the call", note: "The call of conscience speaks in the mode of silence: it does not give advice, propose a course of action, or articulate a specific demand. It merely calls — disrupts the ordinary chatter of das Man and opens a space in which Dasein can hear its own being. This is why Heidegger connects the call to the capacity for genuine listening: authentic existence requires the ability to be still before what calls, rather than filling the silence with ready-made interpretations." },
      ],
      x: 620, y: 440, color: "#a78bfa", status: "consolidated",
    },

    // ── Disclosure & Truth ────────────────────────────────────────────────────

    {
      id: "aletheia",
      term: "Aletheia",
      definition: "The ancient Greek word for truth, which Heidegger recovers against its modern reduction to correctness or correspondence. Aletheia means literally un-concealment — a-letheia, the withdrawal of lēthē (hiddenness, forgetting). Truth, on this reading, is not primarily a property of propositions that correctly represent facts but an event: the coming-into-the-open of beings, their emerging from concealment into unconcealment. This is a happening that precedes and makes possible any true or false statement. Heidegger argues that the Greek philosophers before Plato understood truth in this primordial sense — as the self-showing of beings, the clearing in which things appear — and that the subsequent reduction of truth to correctness (adaequatio intellectus et rei) represents a fateful narrowing that has shaped the entire Western philosophical tradition and, through it, the character of modern science and technology.",
      thinkers: ["Martin Heidegger", "Aristotle", "Parmenides"],
      tags: ["truth", "disclosure", "ancient-greek", "ontology", "phenomenology"],
      connections: [
        { to: "being-in-the-world", label: "is the site of" },
        { to: "worlding", label: "is enacted in" },
        { to: "stimmung", label: "discloses beings through" },
        { to: "poiesis-techne", label: "is enacted through" },
        { to: "language-house-of-being", label: "is preserved in" },
        { to: "gelassenheit", label: "is most fully received through" },
        { to: "the-fourfold", label: "opens the space of" },
      ],
      nuances: [
        { thinker: "Heidegger — The Origin of the Work of Art", note: "In this essay, Heidegger argues that the artwork is a privileged site of aletheia: the work sets up a world and sets forth the earth, and in doing so enacts a strife between concealment and unconcealment from which truth happens. The Greek temple does not represent truth but constitutes a clearing — an open region — in which the gods, mortals, earth, and sky can appear as what they are. Art is not decoration but disclosure." },
        { thinker: "Plato's cave — the loss of aletheia", note: "Heidegger reads Plato's cave allegory as the decisive moment in which aletheia begins its transformation into correctness: the shadows are more or less accurate images of the real things, and the real things are more or less accurate copies of the Forms. Truth becomes a matter of correspondence rather than unconcealment. The light of the sun — which for Heidegger should be the clearing of aletheia itself — becomes merely the condition for seeing the Forms correctly. This reading is contested but historically influential." },
        { thinker: "Parmenides — the path of aletheia", note: "Parmenides' poem presents two paths: the path of aletheia (truth, unconcealment) and the path of doxa (opinion, appearance). Heidegger reads this not as a distinction between reliable and unreliable knowledge but as two fundamental orientations toward being: one that lets being show itself from itself, and one that substitutes a human construction for what shows itself. The path of aletheia requires a specific kind of attentiveness — a staying-with what appears rather than rushing to explain it." },
      ],
      x: 400, y: 480, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "stimmung",
      term: "Stimmung",
      definition: "Mood or attunement — the way in which Dasein always already finds itself disposed in a world, before any cognition or reflection. Stimmung is not a psychological colouring added to a neutral perception; it is the primary mode in which the world discloses itself to Dasein. Fear discloses a threatening world; joy discloses an open, welcoming one; boredom discloses the world as a whole in its indifference. Anxiety discloses the groundlessness of existence. Each Stimmung is simultaneously a disclosure of Dasein (how one finds oneself) and a disclosure of world (how the world shows up). Heidegger insists that Dasein is never without Stimmung — to be without mood would be to be outside of existence — and that the attunements that seem most neutral (undifferentiated pallid moods) are themselves a kind of disclosure of the world as neither pressing nor inviting.",
      thinkers: ["Martin Heidegger", "Hans Ulrich Gumbrecht", "Teresa Brennan"],
      tags: ["mood", "attunement", "affect", "disclosure", "phenomenology"],
      connections: [
        { to: "being-in-the-world", label: "always already colours" },
        { to: "aletheia", label: "is a primary mode of" },
        { to: "thrownness", label: "is the felt disclosure of" },
        { to: "anxiety", label: "is the individualising form of" },
        { to: "dasein", label: "is how Dasein always finds itself" },
      ],
      nuances: [
        { thinker: "Heidegger — attunement before cognition", note: "Heidegger's claim is ontologically radical: we are always already attuned before we think. The mood is not added to a prior neutral perception but is the very condition under which any perception is possible. This means that the traditional epistemological project — beginning from neutral sense data and constructing knowledge — misses the prior attunement that shapes what counts as data in the first place. Stimmung is the original hermeneutical situation." },
        { thinker: "Gumbrecht — presence and atmosphere", note: "Hans Ulrich Gumbrecht's work on 'atmosphere' — the non-semantic, bodily dimension of aesthetic experience — develops a contemporary analogue to Stimmung: the way spaces, artworks, and historical moments have a felt quality that precedes and shapes interpretation. Gumbrecht draws on Heidegger to argue that the modern humanities have over-privileged meaning at the expense of presence — the Stimmung in which meaning is received." },
      ],
      x: 180, y: 440, color: "#60a5fa", status: "consolidated",
    },

    // ── World & Dwelling ──────────────────────────────────────────────────────

    {
      id: "worlding",
      term: "Worlding",
      definition: "The world is not a container in which things are arranged but a happening, an event — the world worlds (die Welt weltet). Worlding names the dynamic, self-constituting character of the world as it opens in and through Dasein's existence and, above all, through things like artworks and temples that gather and disclose a world. The world is not the totality of present-at-hand things but the structured whole of involvements and significances within which things show up as what they are. Worlding is the ongoing event of this opening: the way a meaningful human world is always in the process of coming to be — through practices, language, things, moods, and the events that reveal or shatter the familiar. This connects directly to the worlding vocabulary in the Re-Rooting network: worlding as creative, relational, and always in process.",
      thinkers: ["Martin Heidegger", "Anna Tsing", "Donna Haraway"],
      tags: ["world", "ontology", "event", "disclosure", "dwelling"],
      connections: [
        { to: "being-in-the-world", label: "is the dynamic event of" },
        { to: "aletheia", label: "enacts" },
        { to: "the-fourfold", label: "is gathered in" },
        { to: "dwelling", label: "is the human form of" },
        { to: "language-house-of-being", label: "is articulated through" },
        { to: "ready-to-hand", label: "is ordinarily disclosed through" },
        { to: "ereignis", label: "is an expression of" },
      ],
      nuances: [
        { thinker: "Heidegger — The Origin of the Work of Art", note: "The Greek temple does not merely stand in a landscape; it opens a world — makes visible the gods, articulates the space of human action, gathers earth and sky into a meaningful whole. This is worlding in its most concentrated form: a thing that enacts the opening of a world rather than merely inhabiting one already opened. The work of art is paradigmatic for all worlding, which is always also an opening of significance." },
        { thinker: "Tsing — world-making in the Anthropocene", note: "Anna Tsing's concept of 'world-making' in 'The Mushroom at the End of the World' resonates with Heideggerian worlding while extending it ecologically and multispecies-wise: worlds are made together by humans and non-humans in specific places and practices, and the question of what worlds are opening or closing is both ontological and political. The patch of forest where matsutake grow is a worlding event involving fungi, trees, humans, and histories." },
      ],
      x: 580, y: 480, color: "#34d399", status: "consolidated",
    },

    {
      id: "dwelling",
      term: "Dwelling",
      definition: "Wohnen — the mode of being in which mortals are on the earth: not merely occupying space but inhabiting it with care, sparing and preserving the things and relations that make a place a home. In his late essay 'Building Dwelling Thinking', Heidegger argues that we do not first build and then dwell; rather, to build, in the deepest sense, is to let dwelling occur — to make conditions under which the fourfold can gather and hold. Dwelling is the way mortals are in the world: not as neutral inhabitants of a container but as caretakers of a meaningful place, responsive to the earth beneath, the sky above, the divinities that consecrate, and the mortals they share the world with. The loss of dwelling — what Heidegger calls homelessness — is among the deepest crises of modernity.",
      thinkers: ["Martin Heidegger", "Gaston Bachelard", "Tim Ingold"],
      tags: ["place", "home", "care", "ecology", "modernity"],
      connections: [
        { to: "the-fourfold", label: "is care for" },
        { to: "worlding", label: "is the human form of" },
        { to: "gelassenheit", label: "is the inner disposition of" },
        { to: "being-in-the-world", label: "is the full meaning of" },
        { to: "care", label: "is enacted as" },
        { to: "poiesis-techne", label: "is what building in the deepest sense enables" },
      ],
      nuances: [
        { thinker: "Heidegger — Building Dwelling Thinking", note: "The Old High German word for building — buan — also means to dwell, to remain, to stay in a place. Heidegger traces the etymological connection to argue that building, in its original sense, does not produce dwelling as an outcome but is itself a form of dwelling: to build authentically is to already be in the mode of caring preservation, responsive to what the fourfold asks. Modern construction that aims only at function or efficiency has lost this dimension of building as dwelling." },
        { thinker: "Bachelard — the poetics of space", note: "Bachelard's phenomenology of inhabited space in 'The Poetics of Space' develops a parallel account of dwelling as the primary human relationship to place: the house is not a geometric object but a lived space, full of memories, protections, and dreams. The corners, the cellar, the attic are not merely architectural features but existential structures — the ways in which a dwelling shelters and opens a human life. Bachelard's work is the most intimate phenomenological account of what Heidegger names ontologically." },
        { thinker: "Ingold — dwelling perspective", note: "Tim Ingold's 'dwelling perspective' in anthropology draws on both Heidegger and Merleau-Ponty to argue that human beings do not first inhabit a pre-given environment but bring forth a world through their skilled, attentive engagement with it over time. The Heideggerian insight that being-in-the-world is always already being-in-a-place is given ethnographic and ecological concreteness: dwelling is the living practice through which place and inhabitant mutually constitute each other." },
      ],
      x: 220, y: 560, color: "#34d399", status: "consolidated",
    },

    {
      id: "the-fourfold",
      term: "The Fourfold",
      definition: "Das Geviert — Heidegger's late concept of the four dimensions of the world that gather in every genuine thing and every act of dwelling: earth, sky, mortals, and divinities. The fourfold is not a cosmology imposed from outside but a structural description of the world as it opens for dwelling. Earth is the bearing and nourishing ground; sky is the solar path, the seasons, the weather; divinities are the beckoning messengers of the divine, whatever calls from beyond the merely human; mortals are the ones who can die, who inhabit the tension between birth and death. Things — a jug, a bridge, a building — gather the fourfold when they are allowed to be what they are rather than being reduced to mere objects of use or calculation. The fourfold gives Heidegger's thought a quasi-cosmological and poetic register that his early existential analytic lacks.",
      thinkers: ["Martin Heidegger", "David Farrell Krell", "Albert Borgmann"],
      tags: ["cosmology", "earth", "sky", "mortality", "sacred", "dwelling"],
      connections: [
        { to: "dwelling", label: "is what dwelling cares for" },
        { to: "worlding", label: "is gathered in" },
        { to: "aletheia", label: "opens the space of" },
        { to: "gelassenheit", label: "is received through" },
        { to: "poiesis-techne", label: "is gathered by genuine" },
        { to: "language-house-of-being", label: "is named and preserved by" },
      ],
      nuances: [
        { thinker: "Heidegger — The Thing", note: "Heidegger's analysis of the jug in 'The Thing' illustrates the fourfold: the jug gathers earth (clay, the earth from which it is made), sky (the rain and sun that fed the vine), mortals (those who pour and receive), and divinities (the libation poured for the gods). This is not metaphor or sentiment: Heidegger is arguing that the thing, when not reduced to a mere object, is always a gathering of the world's dimensions. Modern technology makes this gathering impossible by reducing things to standing-reserve (Bestand)." },
        { thinker: "Borgmann — focal practices and devices", note: "Albert Borgmann's technology criticism draws on Heidegger's fourfold to distinguish focal things and practices (which gather the fourfold, engage the whole person, and anchor a form of life) from devices (which deliver a commodity while concealing the machinery that produces it). The hearth gathers family, skills, seasons, and warmth; the central heating system delivers heat. The loss of the focal thing is a loss of the fourfold's gathering — a form of technological homelessness." },
      ],
      x: 420, y: 560, color: "#a78bfa", status: "consolidated",
    },

    // ── Later Heidegger ───────────────────────────────────────────────────────

    {
      id: "gelassenheit",
      term: "Gelassenheit",
      definition: "Releasement — the meditative, non-calculative mode of thinking and dwelling that lets things be what they are rather than compelling them to yield results. Where calculative thinking (the thinking that dominates modern technology and science) always pursues a purpose, secures an outcome, and treats beings as resources to be exploited, Gelassenheit opens toward beings in their own being — receptive, patient, waiting for what shows itself. Heidegger develops Gelassenheit in his late 'Discourse on Thinking' as the appropriate human response to the age of technology: not Luddite rejection but a transformed relationship, in which one can use modern things while holding oneself open to a deeper belonging. The word comes from the medieval mystic Meister Eckhart, whose Gelassenheit named the soul's release from self-will into openness to the divine — Heidegger inherits both the word and something of its spiritual resonance.",
      thinkers: ["Martin Heidegger", "Meister Eckhart", "John Caputo"],
      tags: ["meditative-thinking", "technology", "openness", "contemplation", "releasement"],
      connections: [
        { to: "aletheia", label: "is the disposition most open to" },
        { to: "dwelling", label: "is the inner disposition of" },
        { to: "the-fourfold", label: "is received through" },
        { to: "care", label: "finds its meditative counterpart in" },
        { to: "poiesis-techne", label: "is the alternative to the calculative thinking of" },
        { to: "ereignis", label: "opens toward" },
      ],
      nuances: [
        { thinker: "Heidegger — Discourse on Thinking", note: "Heidegger's conversation 'Gelassenheit' imagines a dialogue between a scientist, a teacher, and a scholar who gradually move toward a mode of thinking that is neither voluntary nor involuntary — a thinking that releases itself from the will to know in order to wait for what shows itself. This waiting is not passivity but a heightened receptivity: 'we are to do nothing but wait.' The paradox of Gelassenheit is that it cannot be willed; it requires the release of the will itself." },
        { thinker: "Eckhart — Abgeschiedenheit", note: "Meister Eckhart's mystical concept of Abgeschiedenheit (detachment) and Gelassenheit (letting-be) name the soul's release from attachment to creatures, self-will, and even spiritual ambition, so that it can become an open receptacle for the divine. Heidegger secularises this structure but preserves its form: Gelassenheit is the opening of a space of pure receptivity in which being — rather than God — can show itself without the interference of calculative appropriation." },
        { thinker: "Resonance with other traditions", note: "Gelassenheit resonates across traditions: with Weil's attention (the receptive emptying of the self), with the Zen concept of mushin (no-mind, action without the ego's commentary), with Wu Wei (the Daoist principle of non-forcing). In each case, the structure is similar: a release of the grasping, calculative self that opens toward something it could not have produced by its own effort. Gelassenheit is Heidegger's name for this structure within the Western philosophical and mystical tradition." },
      ],
      x: 160, y: 560, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "ereignis",
      term: "Ereignis",
      definition: "The Event of Appropriation — Heidegger's late and most difficult concept, naming the reciprocal belonging of being and human being, the event in which each is appropriated to the other. Ereignis resists translation: it draws on Ereignis (event), eignen (to own, to be proper to), and er-äugnen (to catch sight of). It names not a happening within the world but the happening through which world opens at all — the event of the mutual claiming of Dasein and being, each needing the other to be what it is. In Heidegger's later thought, Ereignis replaces Being and Time's framework: rather than asking about the being of Dasein, he asks about the event in which being and Dasein belong together. This gives his thought a more relational, even ecological character: neither being nor human being is primary; both arise in and through the event of their mutual appropriation.",
      thinkers: ["Martin Heidegger", "Reiner Schürmann", "Giorgio Agamben"],
      tags: ["event", "ontology", "being", "appropriation", "late-heidegger"],
      connections: [
        { to: "aletheia", label: "is the event-character of" },
        { to: "worlding", label: "is an expression of" },
        { to: "gelassenheit", label: "opens toward" },
        { to: "language-house-of-being", label: "is sheltered in" },
        { to: "the-fourfold", label: "gathers in" },
        { to: "being-in-the-world", label: "is the early formulation of what becomes" },
      ],
      nuances: [
        { thinker: "Heidegger — Contributions to Philosophy (Of the Event)", note: "In the Beiträge, written in the late 1930s but published posthumously, Heidegger attempts to think being no longer as presence or as the being of beings but as Ereignis — the event of disclosure, the sending of being that each historical epoch receives. The Beiträge is deliberately unsystematic: it is a preparation for thinking Ereignis rather than a theory of it, because Ereignis cannot be thought within the framework of the tradition it is meant to surpass." },
        { thinker: "Schürmann — anarchic beginning", note: "Reiner Schürmann's reading of Heidegger in 'Heidegger on Being and Acting' argues that Ereignis names an anarchic principle — a beginning without arche (ground or principle) — that puts in question all normative foundations. Each epoch appropriates being differently, and Ereignis names the groundless ground of this historical sending. This makes Heidegger's late thought simultaneously an ontology, a history of being, and an implicit politics." },
      ],
      x: 620, y: 560, color: "#818cf8", status: "consolidated",
    },

    // ── Language & Techne ─────────────────────────────────────────────────────

    {
      id: "language-house-of-being",
      term: "Language as the House of Being",
      definition: "Heidegger's late claim that language is not a tool human beings use to communicate pre-linguistic thoughts but the medium in which being discloses itself and in which human beings dwell. 'Language is the house of being. In its home, human being dwells.' Language speaks, and human beings speak only insofar as they respond to language's speaking — listen to what it calls forth. This reverses the usual relationship: we do not make language; language makes us, or rather, language and human being co-constitute each other in the event of speaking. Poetry, for Heidegger, is the primordial form of language — not because it is ornamental but because it is the place where language most fully enacts its world-disclosing power, naming things into their being and preserving the openness of aletheia against the reductive efficiency of technical communication.",
      thinkers: ["Martin Heidegger", "Hans-Georg Gadamer", "Paul Celan"],
      tags: ["language", "poetry", "being", "disclosure", "dwelling"],
      connections: [
        { to: "aletheia", label: "preserves" },
        { to: "worlding", label: "is articulated through" },
        { to: "ereignis", label: "is sheltered in" },
        { to: "the-fourfold", label: "names and preserves" },
        { to: "being-in-the-world", label: "is the medium of" },
        { to: "gelassenheit", label: "requires listening to" },
      ],
      nuances: [
        { thinker: "Heidegger — Hölderlin and poetry", note: "Hölderlin is Heidegger's privileged poet because his poetry does not merely describe a world but calls forth the sacred dimension of existence — the gods, the holy, the between-space in which mortals dwell. Heidegger reads Hölderlin's line 'poetically, man dwells' as the deepest statement of the human condition: dwelling is poetic in the sense that it requires the kind of language that opens rather than closes, names rather than labels, preserves rather than exploits." },
        { thinker: "Gadamer — language as conversation", note: "Gadamer develops the Heideggerian insight in a more dialogical direction: language is not the speaking of a subject but the event of a conversation in which understanding happens. 'We say we conduct a conversation, but the more genuine a conversation is, the less its conduct lies within the will of either partner.' This is language as Ereignis in the hermeneutical mode: the conversation is not ours but happens through us." },
        { thinker: "Celan — the meridian", note: "Paul Celan's poetry is for many readers the most powerful contemporary enactment of Heideggerian language: poetry that reaches toward what cannot be said through what can, that preserves the unspeakable within the spoken, that holds open the wound of absence rather than healing it with ready-made meaning. Celan's 'meridian' — the point where language touches its own limit and falls silent — names the threshold at which language becomes the house of being rather than its furnishings." },
      ],
      x: 400, y: 560, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "ready-to-hand",
      term: "Ready-to-Hand",
      definition: "Zuhandenheit — the mode of being of equipment in its normal, undisturbed use: the hammer that is simply being used, the floor that is simply being walked on, the language that is simply being spoken. In readiness-to-hand, the tool withdraws from explicit awareness: it is not noticed as an object but functions transparently in the service of the task. This is the primary mode in which the world is encountered — not as a collection of objects to be inspected but as a practical totality of involvements that recede into the background of absorbed activity. The contrast is present-at-hand (Vorhandenheit): the mode in which things become objects for theoretical inspection, typically when they break down or become unfamiliar, and suddenly appear as discrete entities with properties. Heidegger argues that present-at-hand is derivative: it arises from the breakdown of ready-to-hand engagement, not the other way round.",
      thinkers: ["Martin Heidegger", "Hubert Dreyfus", "Matthew Crawford"],
      tags: ["equipment", "practice", "embodiment", "world", "skill"],
      connections: [
        { to: "being-in-the-world", label: "is the primary disclosure of" },
        { to: "worlding", label: "is ordinarily disclosed through" },
        { to: "care", label: "is the practical expression of" },
        { to: "stimmung", label: "is the felt quality of absorbed" },
        { to: "poiesis-techne", label: "is the absorbed form of" },
        { to: "dwelling", label: "is the most intimate form of" },
      ],
      nuances: [
        { thinker: "Heidegger — the broken hammer", note: "When the hammer breaks or is missing, it suddenly becomes obtrusive — conspicuous as an object with properties rather than a transparent means of engagement. Heidegger uses this breakdown to argue that theoretical knowledge of the world as present-at-hand is not the primary mode of disclosure but a derivative one: we encounter the world first through our absorbed practical engagement, and only step back into contemplative inspection when that engagement is disrupted." },
        { thinker: "Dreyfus — coping and expertise", note: "Hubert Dreyfus developed the ready-to-hand analysis into a philosophy of skill and expertise that became influential in AI research and cognitive science. Expert coping — the chess grandmaster, the skilled driver — operates in the mode of readiness-to-hand: the expert does not deliberate and apply rules but responds directly and fluently to the demands of the situation. Dreyfus used this to challenge computationalist models of mind, which can only account for the present-at-hand mode of explicit rule-following." },
        { thinker: "Crawford — the resistance of things", note: "Matthew Crawford's 'Shop Class as Soulcraft' extends the ready-to-hand analysis into a philosophy of manual work: the skilled mechanic or craftsperson is in a state of readiness-to-hand, engaged in a dialogue with resistant material that cannot be reduced to following a procedure. The resistance of the material is not an obstacle to knowing but its very medium: it is through the push-back of the world that we learn what is actually there." },
      ],
      x: 160, y: 200, color: "#34d399", status: "consolidated",
    },

    {
      id: "poiesis-techne",
      term: "Poiesis & Techne",
      definition: "Heidegger's distinction between two modes of bringing-forth — poiesis (the coming-into-presence of beings through a creative act that lets them emerge into their own) and modern technology (Gestell, enframing), which challenges-forth rather than lets-emerge, compelling nature to deliver calculable results on demand. Both poiesis and ancient techne involve a bringing-forth, but poiesis lets the thing come to presence in its own way — the silversmith draws out what the silver can be — while modern technology imposes a predetermined form and reduces beings to standing-reserve (Bestand), resources available for exploitation. This distinction is not a nostalgic preference for the pre-modern but an ontological diagnosis: modern technology is a mode of disclosure, a way of encountering being, that forecloses other modes of disclosure and makes Gelassenheit increasingly difficult.",
      thinkers: ["Martin Heidegger", "Albert Borgmann", "Bernard Stiegler"],
      tags: ["technology", "making", "ontology", "disclosure", "modernity"],
      connections: [
        { to: "aletheia", label: "is enacted through" },
        { to: "dwelling", label: "in the deepest sense enables" },
        { to: "the-fourfold", label: "is gathered by genuine" },
        { to: "gelassenheit", label: "is the alternative to the calculative thinking of" },
        { to: "ready-to-hand", label: "is the absorbed form of" },
        { to: "worlding", label: "at its best enacts" },
      ],
      nuances: [
        { thinker: "Heidegger — The Question Concerning Technology", note: "Heidegger's key move is to show that technology is not merely a means or instrument but a mode of revealing — a way of disclosing beings. Modern technology discloses the world as standing-reserve: everything shows up as available for ordering, stockpiling, and deployment. The Rhine appears as a power source; the forester appears as a unit of the timber industry; the human being appears as human resources. This is not a choice but an epoch — a historically specific sending of being that shapes what can show up at all." },
        { thinker: "Borgmann — device paradigm", note: "Albert Borgmann distinguishes focal things (which gather the fourfold and engage the whole person) from devices (which deliver a commodity while concealing the machinery that produces them). The device paradigm is the social manifestation of Gestell: it promises availability without engagement, comfort without skill, presence without dwelling. Borgmann's response — focal practices that resist the device paradigm — is a practical articulation of Gelassenheit." },
      ],
      x: 580, y: 300, color: "#f59e0b", status: "consolidated",
    },

  ],
};
