export const goetheanPhenomenologyNetwork = {
  id: "goethean-phenomenology",
  label: "Goethean Phenomenology",
  subtitle: "Delicate Empiricism, Wholeness & the Conversation with Nature",
  accent: "#34d399",
  storageKey: "semantic-network-goethean-phenomenology",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "goethean-science",
      term: "Goethean Science",
      definition: "A mode of scientific inquiry developed by Johann Wolfgang von Goethe and carried forward by researchers at the Nature Institute (Craig Holdrege, Stephen Talbott, and colleagues) that treats science as a participatory conversation with nature rather than a one-way extraction of data from a passive object. Where conventional science moves quickly from observation to explanation — replacing the phenomenon with a diagram, a mechanism, a gene — Goethean science lingers with the phenomenon itself, building exact inner pictures through repeated, patient, and varied observation until the phenomenon begins to illuminate itself from within. The approach is contextual (attending to things in their full relational web), qualitative (taking qualities seriously rather than reducing them to quantities), and holistic (refusing to explain the whole by its parts alone). Goethe called this 'delicate empiricism' — a science that deepens and transforms perception rather than replacing it with abstraction.",
      thinkers: ["Johann Wolfgang von Goethe", "Craig Holdrege", "Stephen Talbott", "Henri Bortoft"],
      tags: ["phenomenology", "science", "nature", "holism", "perception", "method"],
      connections: [
        { to: "delicate-empiricism", label: "practised as" },
        { to: "conversation-with-nature", label: "structured as" },
        { to: "wholeness", label: "oriented toward" },
        { to: "exact-picture-building", label: "proceeds through" },
        { to: "the-phenomenon", label: "stays close to" },
        { to: "participatory-knowing", label: "requires" },
      ],
      x: 400, y: 300, color: "#34d399", status: "consolidated",
    },

    // ── Core Method ───────────────────────────────────────────────────────────

    {
      id: "delicate-empiricism",
      term: "Delicate Empiricism",
      definition: "Goethe's own phrase for his scientific approach — zarte Empirie in German — naming a quality of attention that becomes, in his words, 'identical with the object itself.' It is delicate not because it is imprecise but because it refuses to impose, to rush past the phenomenon toward an explanation, to replace what is seen with what is theorised. Conventional empiricism gathers data in order to construct a model; delicate empiricism gathers attention in order to let the phenomenon speak. The scientist becomes a more refined instrument of perception — not neutralised but cultivated, so that their seeing is shaped by the thing itself rather than by pre-formed categories. Craig Holdrege describes this as requiring the researcher to remain genuinely open to being surprised, corrected, and transformed by what they encounter.",
      thinkers: ["Johann Wolfgang von Goethe", "Craig Holdrege"],
      tags: ["method", "perception", "empiricism", "attention", "science"],
      connections: [
        { to: "goethean-science", label: "is Goethe's name for" },
        { to: "exact-picture-building", label: "proceeds through" },
        { to: "participatory-knowing", label: "requires" },
        { to: "reductive-explanation", label: "is opposed to" },
        { to: "the-phenomenon", label: "stays with" },
      ],
      nuances: [
        { thinker: "Goethe — Theory of Colors", note: "In his polemic against Newton's optics, Goethe insisted that Newton had replaced the actual phenomenon of colour — colour as it appears to a seeing being in a world of light and shadow — with a mathematical abstraction. For Goethe, Newton's prism experiment was not an explanation of colour but a special case of it, artificially isolated. Delicate empiricism insists on beginning with the full phenomenon as it appears, not with a simplified experimental setup designed to produce a tractable result." },
        { thinker: "Holdrege — the observer as instrument", note: "Holdrege draws out the implication that in Goethean science the observer is not a neutral recorder but a developed instrument. This means that scientific training, in the Goethean sense, is as much a cultivation of the person as a cultivation of technique. The researcher who has spent years attending to plants becomes capable of perceptions unavailable to the untrained eye — not because they project more onto what they see but because they have learned to see more of what is actually there." },
      ],
      x: 220, y: 160, color: "#34d399", status: "consolidated",
    },

    {
      id: "exact-picture-building",
      term: "Exact Picture Building",
      definition: "One of the core methodological stages of Goethean science as articulated by Holdrege — the practice of constructing, in the mind's eye, a precise and mobile inner image of the phenomenon through repeated and varied observation. It is not imagination in the sense of invention but in the sense of a disciplined inner re-creation: one sees the plant at different seasons, in different conditions, from different angles, until a dynamic picture forms that can be held and turned in the mind. This inner picture is not a simplification of the phenomenon but a more complete grasp of it — one that includes its temporal development, its contextual variations, and its relations to other phenomena. The exactness demanded is qualitative as well as quantitative: the image must be faithful to the living, moving, transforming character of what was observed.",
      thinkers: ["Craig Holdrege", "Johann Wolfgang von Goethe", "Rudolf Steiner"],
      tags: ["method", "imagination", "perception", "practice", "science"],
      connections: [
        { to: "delicate-empiricism", label: "is the inner practice of" },
        { to: "goethean-science", label: "is a stage of" },
        { to: "the-phenomenon", label: "builds toward seeing" },
        { to: "wholeness", label: "moves toward" },
        { to: "participatory-knowing", label: "is a form of" },
      ],
      nuances: [
        { thinker: "Holdrege — skunk cabbage study", note: "In 'Doing Goethean Science', Holdrege demonstrates exact picture-building through a sustained study of skunk cabbage — observing it across seasons, noting its heat production, its unusual flowering sequence, its relationship to waterlogged soil. The inner picture that emerges is not a summary of facts but a felt sense of the plant's way of being: its tendency toward the marginal, the early, the warm. This gestalt cannot be captured in a list of properties but can be grasped as a living whole." },
        { thinker: "Steiner — imaginative cognition", note: "Rudolf Steiner, who edited Goethe's scientific writings, developed exact picture-building into a broader epistemological practice he called 'imaginative cognition' — the cultivation of the inner image as a legitimate mode of knowing, distinct from both sense perception and abstract thought. Steiner emphasised that this is exact in its own right: it demands the same rigour and self-discipline as mathematical thinking, but applied to living form rather than quantity." },
      ],
      x: 200, y: 320, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "the-phenomenon",
      term: "The Phenomenon",
      definition: "In Goethean science, the phenomenon is not an isolated data point extracted from context but a living, contextual event — the thing as it actually appears in its full relational setting, including its temporal development and its relations to other things. Goethean science insists on staying with the phenomenon rather than moving past it to an underlying mechanism. This is expressed in Stephen Talbott's distinction between explanation and portrayal: to explain a phenomenon is to replace it with something else (a model, a gene, a force); to portray it is to render it more fully visible, more intelligibly itself. The Goethean researcher asks not 'what underlies this?' but 'what is this, more fully?' — a question that deepens rather than dissolves the phenomenon.",
      thinkers: ["Johann Wolfgang von Goethe", "Stephen Talbott", "Craig Holdrege"],
      tags: ["method", "perception", "science", "appearance", "context"],
      connections: [
        { to: "goethean-science", label: "is what Goethean science stays with" },
        { to: "delicate-empiricism", label: "is approached through" },
        { to: "reductive-explanation", label: "is dissolved by" },
        { to: "wholeness", label: "discloses" },
        { to: "context-dependency", label: "is always embedded in" },
        { to: "portrayal", label: "is rendered visible by" },
      ],
      nuances: [
        { thinker: "Goethe — the primal phenomenon (Urphänomen)", note: "Goethe's concept of the Urphänomen (primal or archetypal phenomenon) names the point at which explanation gives way to pure showing: the phenomenon that is so fundamental, so transparent to itself, that to go behind it would be to lose rather than gain understanding. In optics, the interplay of light and darkness is the Urphänomen; in botany, the leaf. To reach the Urphänomen is not to have found the mechanism behind appearances but to have found the most eloquent appearance of all." },
        { thinker: "Talbott — to explain or portray", note: "Talbott's essay draws the sharpest possible distinction between scientific explanation and Goethean portrayal. Explanation always involves a reduction: the phenomenon is replaced by something smaller, more abstract, supposedly more fundamental. Portrayal involves an amplification: the phenomenon is rendered more richly, more completely itself. The difference is not merely aesthetic but epistemological — portrayal is a genuine mode of knowing, not a preliminary to the real work." },
      ],
      x: 560, y: 200, color: "#34d399", status: "consolidated",
    },

    {
      id: "conversation-with-nature",
      term: "Conversation with Nature",
      definition: "Holdrege's framing of Goethean science as a dialogue — the researcher brings questions, the phenomenon responds, and the response reshapes the questions in an iterative, open-ended exchange. This is opposed to the interrogation model of conventional science, in which nature is subjected to controlled experiments designed to extract predetermined answers. In a conversation, both parties are genuinely affected: the researcher is transformed by what they encounter, not merely confirmed in their hypotheses. This framing also implies that nature is, in some sense, a subject — not a person, but something that addresses us, that has something to say, that can surprise and correct us. Goethe wrote that nature 'speaks perpetually with us, and does not betray her secret' — the conversation is real, but it demands patience and a quality of listening that is rarely cultivated.",
      thinkers: ["Craig Holdrege", "Johann Wolfgang von Goethe", "David Abram"],
      tags: ["method", "relation", "ecology", "dialogue", "science"],
      connections: [
        { to: "goethean-science", label: "describes the structure of" },
        { to: "participatory-knowing", label: "requires" },
        { to: "the-phenomenon", label: "is the other party in" },
        { to: "animate-nature", label: "presupposes" },
        { to: "delicate-empiricism", label: "is the quality of listening in" },
      ],
      nuances: [
        { thinker: "Holdrege — being surprised", note: "Holdrege emphasises that genuine conversation requires remaining open to being surprised — to having one's expectations overturned by what the phenomenon actually shows. The researcher who enters with a fixed hypothesis and looks for confirmation is not in conversation but in monologue. Goethean method, at its most demanding, requires a willingness to have one's entire conceptual framework reshaped by prolonged attention to a particular organism or phenomenon." },
        { thinker: "Goethe — nature speaks perpetually", note: "The rhapsody on Nature that appeared in the inaugural issue of the journal Nature (1869) — attributed to Goethe — gives the fullest expression to this conversational understanding: 'She speaks perpetually with us, and does not betray her secret. We work on her constantly, and yet have no power over her.' Nature is neither mute material nor a human interlocutor, but something in between — an address that we can learn to hear but never compel." },
        { thinker: "Abram — the more-than-human field", note: "David Abram's phenomenology of the animate earth resonates with the Goethean framing: the landscape, the weather, the body of other species are not silent backdrops but active participants in a field of communicative exchange that oral cultures have always inhabited. Goethean science, on this reading, is the attempt to formalise and discipline what such cultures practise as a matter of course." },
      ],
      x: 580, y: 400, color: "#a78bfa", status: "consolidated",
    },

    // ── Epistemological ───────────────────────────────────────────────────────

    {
      id: "wholeness",
      term: "Wholeness",
      definition: "The central organising concept of Goethean science — the understanding that a living organism or phenomenon cannot be adequately known by analysing its parts alone, because the whole is not the sum of its parts but the principle that organises and gives meaning to each part. Henri Bortoft's philosophical account of Goethe's method argues that Goethean perception is a practice of letting the whole appear through the parts — not constructing the whole from parts (the analytic move) but cultivating a quality of attention in which the organising principle of the whole becomes perceptible in each particular. To know the whole is not to have surveyed all the parts but to have found the key that shows how each part belongs to all the others.",
      thinkers: ["Johann Wolfgang von Goethe", "Henri Bortoft", "Craig Holdrege", "Kurt Goldstein"],
      tags: ["holism", "ontology", "science", "organism", "perception"],
      connections: [
        { to: "goethean-science", label: "is the aim of" },
        { to: "the-phenomenon", label: "is disclosed in" },
        { to: "exact-picture-building", label: "is the goal of" },
        { to: "context-dependency", label: "requires understanding" },
        { to: "reductive-explanation", label: "is lost in" },
        { to: "urpflanze", label: "is concentrated in" },
      ],
      nuances: [
        { thinker: "Bortoft — the whole in the parts", note: "Bortoft's philosophical account in 'The Wholeness of Nature' argues that the Goethean whole is not located somewhere else — above or behind the parts — but is present in each part as the organising principle that makes it what it is. A leaf is not merely a piece of the plant; it is a concentrated expression of the plant's entire way of being. To see this — to perceive the whole in the part — is the perceptual achievement that Goethean training aims at." },
        { thinker: "Goldstein — the organism as whole", note: "Kurt Goldstein's 'The Organism' (1934), written from his experience with brain-injured soldiers, provides the most rigorous phenomenological argument for wholeness in biology: the organism cannot be understood as a collection of localised functions, because every response is always a response of the whole organism to its environment. Goldstein's work converges with Goethe's from the direction of neurology and pathology." },
      ],
      x: 400, y: 140, color: "#34d399", status: "consolidated",
    },

    {
      id: "participatory-knowing",
      term: "Participatory Knowing",
      definition: "The epistemological claim at the heart of Goethean science: that genuine knowledge of living nature requires the participation of the whole person — not merely the detached analytical intellect but perception, feeling, imagination, and thinking working together. The Goethean researcher is not a mirror passively reflecting facts but an active co-creator of the knowing event, whose quality of attention shapes what becomes visible. This does not mean that knowledge is merely subjective; it means that the subject must be sufficiently developed to be adequate to the object. Nature Institute's framing places human experience at the centre of scientific inquiry — not as a distortion to be corrected for but as the necessary medium through which the world becomes intelligible.",
      thinkers: ["Johann Wolfgang von Goethe", "Henri Bortoft", "Jorge Ferrer", "Michael Polanyi"],
      tags: ["epistemology", "science", "perception", "subject", "knowing"],
      connections: [
        { to: "goethean-science", label: "is the epistemological basis of" },
        { to: "delicate-empiricism", label: "is practiced as" },
        { to: "exact-picture-building", label: "is an instance of" },
        { to: "conversation-with-nature", label: "is required by" },
        { to: "reductive-explanation", label: "is suppressed by" },
      ],
      nuances: [
        { thinker: "Bortoft — authentic and counterfeit wholes", note: "Bortoft distinguishes authentic wholeness — in which the whole is genuinely present in the parts — from counterfeit wholeness, in which parts are merely aggregated into a collection that mimics unity. Participatory knowing is the capacity to perceive authentic wholeness: it requires a quality of attention that actively co-constitutes the knowing event rather than passively recording a pre-given object." },
        { thinker: "Polanyi — tacit knowing", note: "Polanyi's concept of tacit knowing — we know more than we can tell — provides a parallel framework: the expert's perception is shaped by internalised patterns of which they are not fully conscious. In Goethean science, this tacit dimension is deliberately cultivated: the researcher develops an embodied sense for the organism's way of being that cannot be fully articulated but guides all their specific observations." },
      ],
      x: 200, y: 460, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "context-dependency",
      term: "Context-Dependency",
      definition: "The principle that a living phenomenon cannot be understood in isolation from its context — its ecological setting, its developmental history, its relations to other organisms and to its environment across time. Context-dependency is both an ontological claim (things are constituted by their relations) and a methodological one (to understand a thing, you must study it in its context, not in artificial isolation). Holdrege's book 'Thinking Like a Plant' develops context-dependency as a general principle of living thinking: the plant leaf makes sense only in relation to the stem, the root, the season, the soil, the light — and the biologist's thinking must be as flexible and responsive as the plant's own form. To abstract a trait from its context is not to find its essence but to create an artefact.",
      thinkers: ["Craig Holdrege", "Johann Wolfgang von Goethe", "Jakob von Uexküll"],
      tags: ["ecology", "holism", "method", "organism", "relation"],
      connections: [
        { to: "wholeness", label: "is required by" },
        { to: "the-phenomenon", label: "is always embedded in" },
        { to: "goethean-science", label: "is a core principle of" },
        { to: "reductive-explanation", label: "is severed by" },
        { to: "animate-nature", label: "points toward" },
        { to: "conversation-with-nature", label: "means attending to" },
      ],
      nuances: [
        { thinker: "Holdrege — the contextual nature of traits", note: "Holdrege demonstrates context-dependency through a sustained critique of the concept of the 'gene for' a trait. The flower colour of a pea plant is not a fixed property caused by a gene but the outcome of a developmental process in which the gene, the cell, the organism, the environment, and the life history all participate. To say a gene 'causes' the colour is to treat an abstraction as if it were a cause, losing the actual living process in the process." },
        { thinker: "Uexküll — Umwelt", note: "Jakob von Uexküll's concept of the Umwelt — the species-specific perceptual and action world of an organism — anticipates Goethean context-dependency: each organism inhabits a world of meaning constructed through its own sensory and motor capacities, and understanding it requires entering imaginatively into that world. The organism is not a mechanism in an objective environment but a subject in a meaningful one." },
      ],
      x: 580, y: 460, color: "#a78bfa", status: "consolidated",
    },

    // ── Critical ──────────────────────────────────────────────────────────────

    {
      id: "reductive-explanation",
      term: "Reductive Explanation",
      definition: "The dominant mode of conventional science that Goethean phenomenology critically opposes — the move of explaining a phenomenon by something supposed to underlie it that is always less than the phenomenon itself: a mechanism, a gene, a set of molecules, a mathematical formula. Reductive explanation involves two essential moves: isolating the phenomenon from its context, and substituting an abstract model for what was actually observed. Holdrege's critique is pointed: both the trait and the gene that supposedly explains it are products of abstraction, so that one ends up explaining an abstraction with an even greater abstraction. The phenomenon — the actual, living, contextual event — has been left behind entirely. Reductive explanation is powerful within its domain, but it cannot, by its own logic, account for wholeness, context-dependency, or qualitative being.",
      thinkers: ["Craig Holdrege", "Stephen Talbott", "Johann Wolfgang von Goethe"],
      tags: ["critique", "science", "mechanism", "abstraction", "method"],
      connections: [
        { to: "goethean-science", label: "is what Goethean science opposes" },
        { to: "the-phenomenon", label: "replaces with abstraction" },
        { to: "wholeness", label: "loses sight of" },
        { to: "context-dependency", label: "severs" },
        { to: "portrayal", label: "is contrasted with" },
        { to: "delicate-empiricism", label: "is replaced by" },
      ],
      nuances: [
        { thinker: "Holdrege — functional explanation and its limits", note: "Holdrege demonstrates the limits of reductive explanation through the classic botany example: plants in shade grow broader leaves to capture more light. This seems explanatory — until one notices that equally plausible alternative explanations exist (why not stay small?). Every functional explanation of a complex biological phenomenon has equally plausible alternatives, because it abstracts one strand from a multi-determined whole and treats that strand as sufficient." },
        { thinker: "Talbott — the organism as text not machine", note: "Talbott argues that organisms are better understood as texts than as machines: a text has meaning that is not located in any single part but in the whole, and understanding it requires interpretive engagement rather than mechanical analysis. The attempt to explain a text by analysing its constituent letters and words misses what the text is — as does the attempt to explain an organism by its constituent molecules and genes." },
      ],
      x: 620, y: 300, color: "#f87171", status: "consolidated",
    },

    {
      id: "portrayal",
      term: "Portrayal",
      definition: "Stephen Talbott's key term for the mode of understanding that Goethean science aims at — the rendering of a phenomenon more fully and richly itself, as opposed to explanation, which replaces the phenomenon with something else. To portray a plant, an animal, or a landscape is to make it more visible — to illuminate its qualities, relations, and way of being in a way that leaves the reader or observer with a fuller, more adequate encounter with the thing itself. Portrayal is not mere description; it requires the same rigour and attentiveness as explanation, but deploys them in the service of the phenomenon rather than in the service of a theory. It is a form of knowledge precisely because it makes something more intelligible — but it makes it intelligible as itself rather than as an instance of a general mechanism.",
      thinkers: ["Stephen Talbott", "Johann Wolfgang von Goethe", "Craig Holdrege"],
      tags: ["method", "knowledge", "language", "science", "rendering"],
      connections: [
        { to: "the-phenomenon", label: "renders visible" },
        { to: "reductive-explanation", label: "is contrasted with" },
        { to: "goethean-science", label: "is the goal of" },
        { to: "exact-picture-building", label: "is expressed through" },
        { to: "wholeness", label: "makes accessible" },
      ],
      nuances: [
        { thinker: "Talbott — to explain or portray", note: "Talbott's essay of this title argues that science has almost entirely lost the capacity for portrayal — the ability to render phenomena more richly themselves — in its drive for explanation. This is not a minor aesthetic loss but an epistemological one: we end up knowing less about organisms because we have replaced the rich, contextual, living reality with a schematic model. Restoring portrayal is not a return to pre-scientific thinking but an advance to a more adequate science." },
        { thinker: "Goethe as poet-scientist", note: "Goethe's own scientific writings — on plant metamorphosis, on colour, on the intermaxillary bone — are themselves exemplary portrayals: they are written with the precision and attentiveness of a naturalist and the sensibility of a poet, in a way that makes the phenomenon more visible rather than explaining it away. The poet-scientist is not a contradiction for Goethe but a necessity: both modes of perception are required for adequate knowing." },
      ],
      x: 400, y: 480, color: "#60a5fa", status: "consolidated",
    },

    // ── Nature / Ontological ──────────────────────────────────────────────────

    {
      id: "animate-nature",
      term: "Animate Nature",
      definition: "The ontological presupposition of Goethean science — that nature is not inert material to be analysed but a living, self-organising, self-expressing reality that addresses us and can be entered into dialogue with. This is not animism in a naive sense but a rigorous philosophical position: that the categories adequate to living phenomena — wholeness, context-dependency, purposiveness, development, meaning — are irreducibly different from those adequate to mechanical systems. Goethe's rhapsody on Nature, quoted in the inaugural issue of the journal Nature (1869), gives the fullest expression: 'She brings forth ever new forms: what is there, never was; what was, never will return... There is everlasting life, growth, and movement in her and yet she does not stir from her place.' Animate nature is generative, unpredictable, and inexhaustible — and Goethean science is the attempt to be adequate to this inexhaustibility.",
      thinkers: ["Johann Wolfgang von Goethe", "Craig Holdrege", "David Abram", "Andreas Weber"],
      tags: ["ontology", "nature", "life", "ecology", "animism"],
      connections: [
        { to: "goethean-science", label: "is the ontological context of" },
        { to: "conversation-with-nature", label: "makes possible" },
        { to: "context-dependency", label: "points toward" },
        { to: "urpflanze", label: "expresses itself through" },
        { to: "wholeness", label: "is constituted by" },
      ],
      nuances: [
        { thinker: "Goethe — nature as artist", note: "Goethe's rhapsody describes nature as 'the sole artist, creating extreme contrast out of the simplest material, the greatest perfection seemingly without effort.' This is not metaphor but a philosophical claim: nature's generativity is not mechanical production but something closer to artistic creation — purposeful, form-seeking, excessive in its inventiveness. To study nature scientifically is therefore not only an analytical but an aesthetic endeavour." },
        { thinker: "Weber — biology as meaning", note: "Andreas Weber's 'Enlivenment' and other works develop a Goethean biology that treats organisms as subjects of experience — beings for whom things matter, who express themselves through their form and behaviour, who inhabit meaningful worlds. This is a radical extension of the Goethean intuition: if nature is animate, then biological science is not only about mechanisms but about meaning." },
        { thinker: "Abram — the breathing earth", note: "David Abram's phenomenology of the animate earth — developed in 'The Spell of the Sensuous' — provides a philosophical and ethnographic context for the Goethean claim: oral cultures have always inhabited a world in which the land, the weather, and the other species are alive, communicative, and addressed. Goethean science is the attempt to recover this perception within the context of rigorous inquiry." },
      ],
      x: 220, y: 440, color: "#34d399", status: "consolidated",
    },

    {
      id: "urpflanze",
      term: "Urpflanze",
      definition: "Goethe's concept of the archetypal plant (Urpflanze) — not a single ancestral species but a dynamic ideal form, a generative principle of plant-being from which all actual plant forms can be understood as variations. The Urpflanze is the wholeness of planthood made perceptible: not an abstract schema but a living image, grasped through the imagination after long acquaintance with many actual plants, that shows what it is to be a plant in a way that no single specimen does alone. Goethe's discovery that the various organs of a plant — root, stem, leaf, sepal, petal, stamen — are all metamorphoses of a single organ (the leaf) is the empirical basis for the Urpflanze: the plant is a single form expressing itself at different scales and in different modes of transformation.",
      thinkers: ["Johann Wolfgang von Goethe", "Rudolf Steiner", "Henri Bortoft"],
      tags: ["botany", "archetype", "form", "metamorphosis", "nature"],
      connections: [
        { to: "wholeness", label: "is a concentrated expression of" },
        { to: "animate-nature", label: "expresses" },
        { to: "exact-picture-building", label: "is arrived at through" },
        { to: "metamorphosis", label: "is revealed through" },
        { to: "goethean-science", label: "is a key discovery of" },
      ],
      nuances: [
        { thinker: "Goethe — The Metamorphosis of Plants", note: "Goethe's 1790 essay on plant metamorphosis argues that all the organs of a flowering plant are transformations of a single basic organ, which he calls the leaf. The sepal is a contracted leaf, the petal an expanded and coloured leaf, the stamen a further contracted and specialised leaf. This is not a metaphor: Goethe believed he had found the governing principle of plant form — the one thing that becomes many, the Urpflanze expressing itself through metamorphosis." },
        { thinker: "Steiner — the etheric formative forces", note: "Steiner interpreted the Urpflanze as pointing toward what he called the etheric body of the plant — the non-physical, formative dimension of plant life that shapes the physical form from within. Whether or not one accepts Steiner's spiritual-scientific framework, his interpretation draws out the implication that Goethe's archetypal form is not just a conceptual convenience but a real organising principle." },
      ],
      x: 160, y: 220, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "metamorphosis",
      term: "Metamorphosis",
      definition: "The principle that the forms of living organisms are not fixed types but dynamic transformations — one form becoming another through a continuous process of change that is governed by an underlying principle of wholeness. Goethe's discovery of plant metamorphosis (the leaf as the underlying form of all plant organs) and his work on comparative vertebrate anatomy (the skull as a metamorphosed series of vertebrae) established transformation as the central principle of organic form. Metamorphosis is not random change but patterned becoming: each new form is recognisably related to the ones before and after it, expressing the same essential nature in a different mode. This makes living form fundamentally temporal — it cannot be grasped in a static cross-section but only in the movement of its becoming.",
      thinkers: ["Johann Wolfgang von Goethe", "Craig Holdrege", "Andreas Weber"],
      tags: ["form", "transformation", "botany", "time", "becoming"],
      connections: [
        { to: "urpflanze", label: "is revealed through" },
        { to: "animate-nature", label: "is the mode of" },
        { to: "wholeness", label: "expresses" },
        { to: "context-dependency", label: "requires attending to" },
        { to: "exact-picture-building", label: "must be captured in" },
      ],
      nuances: [
        { thinker: "Goethe — vertebrate skull hypothesis", note: "Goethe's claim that the bones of the vertebrate skull are metamorphosed vertebrae — made on the basis of observations of a sheep's skull in Venice — was later confirmed by comparative anatomists. This discovery illustrates the power of Goethean method: rather than cataloguing skull bones as separate objects, Goethe saw through them to a single transforming principle. The skull is vertebrae become something else; the form remembers its origins." },
        { thinker: "Holdrege — dynamic thinking", note: "Holdrege extends the metamorphosis principle into what he calls 'dynamic thinking' — a mode of thought that can follow the transformations of living form without losing the thread of identity through change. Static thinking asks 'what is this?'; dynamic thinking asks 'how does this become?' The plant leaf that becomes petal that becomes stamen is not three different things but one form in three modes of expression." },
      ],
      x: 360, y: 460, color: "#f59e0b", status: "consolidated",
    },

    // ── Contemporary Extensions ───────────────────────────────────────────────

    {
      id: "whole-organism-biology",
      term: "Whole Organism Biology",
      definition: "The research programme developed at the Nature Institute by Craig Holdrege and colleagues — an approach to biology that takes the whole organism in its ecological context as the primary unit of study, resisting the reduction of biological understanding to genetics, molecular mechanisms, or evolutionary algorithms. Whole organism biology does not deny that genes and molecules are real and important; it insists that they can only be understood adequately when seen in relation to the whole organism that expresses them, the environment that shapes their expression, and the developmental history that has brought the organism to its current state. The programme involves extended, qualitative, contextual studies of individual species — studied across seasons, in their ecological relationships, in their full perceptual quality.",
      thinkers: ["Craig Holdrege", "Stephen Talbott", "Andreas Weber", "Kurt Goldstein"],
      tags: ["biology", "ecology", "science", "organism", "nature-institute"],
      connections: [
        { to: "goethean-science", label: "is a contemporary expression of" },
        { to: "context-dependency", label: "is grounded in" },
        { to: "wholeness", label: "takes as its focus" },
        { to: "animate-nature", label: "treats nature as" },
        { to: "reductive-explanation", label: "offers an alternative to" },
      ],
      nuances: [
        { thinker: "Holdrege — Thinking Like a Plant", note: "Holdrege's book demonstrates whole organism biology through sustained phenomenological studies of individual plant species — the stinging nettle, the yellow gentian, skunk cabbage — each studied in its ecological context, across seasons, in its full qualitative richness. The result is not a species account in the conventional biological sense but a portrait: the reader comes away with a felt sense of the plant's way of being in the world." },
        { thinker: "Talbott — Biology Worthy of Life", note: "Stephen Talbott's ongoing project 'Biology Worthy of Life' (accessible at bwo.life) is the most systematic contemporary attempt to develop a post-reductive biology adequate to the actual complexity of living organisms. Talbott argues that biology has systematically misled itself by treating organisms as if they were machines, and that recovering a biology worthy of life requires the kind of attentive, contextual, qualitative engagement that Goethe exemplified." },
      ],
      x: 620, y: 460, color: "#34d399", status: "consolidated",
    },

    {
      id: "sympoiesis",
      term: "Sympoiesis",
      definition: "Making-together — the concept developed by Beth Dempster and elaborated by Donna Haraway that living systems are not self-making (autopoietic) in isolation but always made-together with others, in webs of mutual constitution that blur the boundaries between organism and environment, self and world. Holdrege's recent essay 'Sympoiesis: From Thinking About to Being With' uses this concept to articulate what Goethean science is ultimately after: not the objective study of a separate organism but a way of being with living beings that allows their relational, co-constituted nature to become perceptible. Sympoiesis names the ontological truth that context-dependency is trying to describe: things are not first independent and then related; they are constituted through their relations all the way down.",
      thinkers: ["Craig Holdrege", "Donna Haraway", "Beth Dempster", "Lynn Margulis"],
      tags: ["ecology", "ontology", "relation", "biology", "co-constitution"],
      connections: [
        { to: "whole-organism-biology", label: "extends" },
        { to: "context-dependency", label: "is the ontological ground of" },
        { to: "animate-nature", label: "describes the mode of" },
        { to: "conversation-with-nature", label: "names what" },
        { to: "wholeness", label: "reframes" },
      ],
      nuances: [
        { thinker: "Holdrege — from thinking about to being with", note: "Holdrege's essay argues that Goethean science is ultimately a practice of being with living beings rather than thinking about them from a distance. Sympoiesis is the ontological name for what this being-with discovers: that organisms and their environments are not separate entities that interact but co-arising processes that constitute each other. The oak tree and the mycorrhizal fungi and the soil and the climate are not related — they are, in a deep sense, making each other." },
        { thinker: "Haraway — making kin", note: "Haraway's development of sympoiesis in 'Staying with the Trouble' situates it within a broader political and ethical project: to learn to make kin with the many other species that share our planet, in full recognition of our mutual constitution. This gives the Goethean project a political edge: attention to organisms as relational, co-constituted beings is not only epistemologically but ethically important — it is the ground of care." },
      ],
      x: 440, y: 480, color: "#a78bfa", status: "consolidated",
    },

    // ── Gestalt & Bildung ─────────────────────────────────────────────────────

    {
      id: "gestalt",
      term: "Gestalt",
      definition: "The formed appearance of a living thing — its shape, configuration, and perceptible wholeness as it presents itself at a given moment in space. Goethe introduced Gestalt as a morphological concept to name not merely outline or silhouette but the organised totality of an organism's form: the way its parts are disposed in relation to each other so as to constitute a recognisable whole. Gestalt is what the eye grasps when it sees a plant or animal as this kind of thing — not a collection of parts but a coherent, bounded form. Yet Goethe immediately qualified the concept: Gestalt, taken alone, is an abstraction, a freezing of what is in reality never static. The living form is always in the process of becoming something else, always in transition. Gestalt is therefore the necessary starting point of morphological observation — one must learn to see the form as it is — but it leads inevitably toward its counterpart, Bildung.",
      thinkers: ["Johann Wolfgang von Goethe", "Henri Bortoft", "Wolfgang Köhler"],
      tags: ["form", "morphology", "perception", "wholeness", "appearance"],
      connections: [
        { to: "bildung", label: "is the static face of what" },
        { to: "metamorphosis", label: "is the snapshot that" },
        { to: "wholeness", label: "is a perceptual form of" },
        { to: "exact-picture-building", label: "is the starting point for" },
        { to: "urpflanze", label: "is concentrated in" },
        { to: "the-phenomenon", label: "is how the phenomenon first appears" },
      ],
      nuances: [
        { thinker: "Goethe — Morphology writings", note: "Goethe wrote: 'The Germans have a word for the complex of existence presented by a physical organism: Gestalt.' He meant by this the totality of form as it can be grasped in a moment — the configuration that makes a plant or animal recognisably itself. But he immediately added the crucial qualification: this apparent stability is an abstraction, because in living nature nothing is truly at rest. Gestalt is real, but it is only one face of a living form that is always also Bildung." },
        { thinker: "Gestalt psychology — a parallel tradition", note: "The Gestalt psychology of Köhler, Wertheimer, and Koffka — though developed independently — inherits something of Goethe's morphological intuition: the perceptual whole is not constructed from parts but grasped immediately as a structured unity. The famous Gestalt principle that 'the whole is more than the sum of its parts' is a psychological rediscovery of Goethe's ontological claim about living form. The two traditions have rarely been brought into explicit dialogue, but the convergence is philosophically significant." },
        { thinker: "Bortoft — authentic wholeness", note: "Bortoft's analysis in 'The Wholeness of Nature' clarifies that the Gestalt as Goethe intends it is not a visual pattern or a mental construct but an authentic whole — a wholeness that is genuinely present in and as the form, not imposed on it by a perceiving mind. To see the Gestalt of a plant is to perceive the whole organising principle through its spatial expression. This is what Goethean training cultivates: the capacity to see Gestalt as an expression of wholeness, not merely as a recognisable shape." },
      ],
      x: 700, y: 200, color: "#f59e0b", status: "consolidated",
    },

    {
      id: "bildung",
      term: "Bildung",
      definition: "The dynamic process of formation — the becoming of form, the continuous self-shaping activity through which a living thing acquires and transforms its Gestalt over time. Where Gestalt names the form as it appears at a moment, Bildung names the living process from which that form continuously arises and into which it continuously passes. Goethe wrote that because nothing in organic nature is permanent, everything in a flux of continual motion, German 'frequently and fittingly makes use of the word Bildung' — formation and transformation together — for what in English would require several words to say. Bildung is therefore more fundamental than Gestalt in the Goethean framework: the static form is a momentary expression of an ongoing formative process, and to understand the form one must understand the process that generates it. This makes morphology irreducibly temporal: to know a plant's form is to know its developmental arc, not merely its current configuration. Bildung also carries the connotation of self-cultivation and education in German — the formation of a person through experience — which Goethe intends: living form is always self-forming, shaped from within as much as from without.",
      thinkers: ["Johann Wolfgang von Goethe", "Rudolf Steiner", "Hans-Georg Gadamer"],
      tags: ["form", "process", "development", "morphology", "becoming", "time"],
      connections: [
        { to: "gestalt", label: "is the dynamic process behind" },
        { to: "metamorphosis", label: "proceeds through" },
        { to: "animate-nature", label: "is the mode of" },
        { to: "wholeness", label: "is the temporal dimension of" },
        { to: "context-dependency", label: "unfolds through" },
        { to: "exact-picture-building", label: "must be captured dynamically in" },
      ],
      nuances: [
        { thinker: "Goethe — formation and transformation", note: "Goethe's key formulation is that Bildung encompasses both Bildung (formation) and Umbildung (transformation) — the forming and the re-forming are aspects of a single continuous process. This means that a living form is never fully itself at any one moment: it is always becoming what it is. The Urpflanze is not a static archetype but a dynamic principle of formative activity that expresses itself differently at each moment of the plant's development and in each species." },
        { thinker: "Steiner — life as formative force", note: "Steiner interpreted Bildung as pointing toward what he called the etheric or life body — the non-physical, formative dimension of living organisms that shapes matter into organised form from within. Whether or not one accepts this framework, Steiner draws out the implication that Bildung names a genuine causal power in organisms: the capacity for self-organisation that cannot be reduced to the physical-chemical processes it works through." },
        { thinker: "Gadamer — Bildung as human formation", note: "Gadamer's hermeneutics revives the concept of Bildung in its educational and humanistic sense — the self-formation of a person through encounter with what is other, through tradition, through the expansion of one's horizon. This resonates with the morphological sense: just as the plant forms itself through its encounter with light, soil, and season, the person forms themselves through their encounter with culture, language, and the claims of the other. Bildung in both senses is formation-through-relation." },
      ],
      x: 700, y: 340, color: "#f59e0b", status: "consolidated",
    },

  ],
};
