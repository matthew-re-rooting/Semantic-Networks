import { useState, useEffect, useRef, useCallback } from "react";

// ---NETWORK DEFINITIONS ---

const NETWORKS = {
  td: {
    id: "td", label: "Transdisciplinarity & Rupture",
    subtitle: "McCarthy — Epistemological Frameworks",
    accent: "#c084fc", storageKey: "semantic-network-nodes",
    initialNodes: [
      {
        id: "rupture", term: "Rupture",
        definition: "A radical break or discontinuity in the development of knowledge, science, or social imaginaries. Rupture is not mere revision — it signals a transformation of the very ground from which knowledge grows. Depending on the thinker, rupture can occur at the level of a single discipline, across sciences, or in the deepest strata of a civilization's assumptions about what knowledge is and who produces it.",
        thinkers: ["Bachelard","Kuhn","Foucault","Castoriadis","Morin"],
        tags: ["epistemology","change","science","history"],
        connections: [
          {to:"epistemological-obstacle",label:"overcome by"},{to:"paradigm",label:"disrupts"},
          {to:"episteme",label:"transforms"},{to:"social-imaginary",label:"reshapes"},
          {to:"transdisciplinarity",label:"enacted through"},
          {to:"accommodation",label:"triggers"},{to:"islands-of-stability",label:"produces new"},
          {to:"enabling-constraining",label:"caused by shift in"},
        ],
        nuances: [
          {thinker:"Bachelard",note:"Rupture occurs within a discipline when experimental evidence challenges epistemological obstacles — the ingrained common-sense myths that unknowingly hinder scientific progress."},
          {thinker:"Kuhn",note:"Crisis and revolutionary science are analogous to rupture: a period when anomalies accumulate and the existing paradigm can no longer contain them, opening space for a new one."},
          {thinker:"Foucault",note:"Epistemic rupture refers to the transformation of the deepest historical a priori — the conditions of possibility for knowledge itself — across entire civilizational eras."},
          {thinker:"Castoriadis",note:"Rupture is the moment when the instituted imaginary faces creative tension with the instituting imaginary, giving rise to genuinely new social forms."},
        ],
        x:500,y:300,color:"#c084fc",status:"consolidated",source:"manual",
      },
      {
        id: "epistemological-obstacle", term: "Epistemological Obstacle",
        definition: "For Bachelard, the epistemological obstacle is not an external difficulty but an internal one — a form of knowledge itself that impedes further knowing. Common sense, familiar analogies, and premature unification all function as obstacles by making the world seem already understood. Overcoming them requires rupture: a deliberate break with what felt like clarity.",
        thinkers: ["Bachelard"],
        tags: ["epistemology","science","obstacle"],
        connections: [{to:"rupture",label:"overcome by"},{to:"assimilation",label:"perpetuated by"}],
        x:280,y:180,color:"#818cf8",status:"consolidated",source:"manual",
      },
      {
        id: "paradigm", term: "Paradigm",
        definition: "Kuhn's concept of the shared exemplar — the constellation of beliefs, values, and problem-solving techniques shared by a scientific community. A paradigm defines what counts as a legitimate problem and what counts as a solution. When anomalies accumulate beyond a threshold, the paradigm enters crisis, and revolutionary science becomes possible.",
        thinkers: ["Kuhn"],
        tags: ["science","epistemology","community"],
        connections: [{to:"rupture",label:"disrupted by"},{to:"transdisciplinarity",label:"crossed by"}],
        x:720,y:180,color:"#38bdf8",status:"consolidated",source:"manual",
      },
      {
        id: "episteme", term: "Episteme",
        definition: "Foucault's term for the underlying historical a priori that governs what can be known and said in a given era. The episteme is not a worldview held by individuals but the invisible structure that makes certain discourses possible and others unthinkable. Epistemic ruptures are not chosen — they are geological shifts in the conditions of knowledge.",
        thinkers: ["Foucault"],
        tags: ["epistemology","history","power","discourse"],
        connections: [{to:"rupture",label:"transformed by"},{to:"ontological-turn",label:"related to"}],
        x:720,y:420,color:"#f472b6",status:"consolidated",source:"manual",
      },
      {
        id: "social-imaginary", term: "Social Imaginary",
        definition: "For Castoriadis, the social imaginary is the creative, self-instituting capacity of society — the radical imagination that produces new meanings, institutions, and forms of life. The instituted imaginary is what has been crystallised into norms and structures; the instituting imaginary is the living force that can rupture and re-create those structures.",
        thinkers: ["Castoriadis","Taylor"],
        tags: ["imagination","society","creation"],
        connections: [{to:"rupture",label:"reshaped by"},{to:"open-ended-learning",label:"enables"}],
        x:280,y:420,color:"#fb923c",status:"consolidated",source:"manual",
      },
      {
        id: "transdisciplinarity", term: "Transdisciplinarity",
        definition: "A mode of inquiry that does not merely combine disciplines but operates at a level of abstraction where disciplinary boundaries themselves are questioned. Transdisciplinarity is not interdisciplinarity — it does not coordinate disciplines from outside them but generates a new framework that reorganises what disciplines can see. It is, in this sense, a form of institutionalised rupture.",
        thinkers: ["Morin","Nicolescu","Piaget"],
        tags: ["epistemology","complexity","integration","science"],
        connections: [{to:"rupture",label:"enacted through"},{to:"paradigm",label:"crosses"},{to:"open-ended-learning",label:"requires"}],
        x:500,y:520,color:"#4ade80",status:"consolidated",source:"manual",
      },
      // NEW NODES FROM DOCUMENT
      {
        id: "enabling-constraining", term: "Enabling / Constraining",
        definition: "A paired conceptual frame from systems language: enabling refers to providing the conditions under which certain events, patterns, and processes become possible; constraining refers to the conditions that restrict them. Together, the pair describes how any configuration of forces, agents, or structures shapes the possibility space for action — without determining outcomes. The frame deliberately avoids causal determinism while remaining precise about directionality.",
        thinkers: ["Pickering","systems theory"],
        tags: ["systems","conditions","agency","process"],
        connections: [
          {to:"rupture",label:"shift in causes"},
          {to:"accommodation",label:"when constraining exceeds threshold"},
          {to:"dances-of-agency",label:"describes dynamics of"},
          {to:"islands-of-stability",label:"configurations of"},
        ],
        nuances: [
          {thinker:"Document",note:"Distinguished from 'assimilation and accommodation' in that enabling/constraining speaks from a systems perspective — about forces and patterns — while assimilation/accommodation speaks from an agent perspective about how understanding changes."},
          {thinker:"Pickering",note:"In Pickering's performative idiom, enabling and constraining describe the back-and-forth mangle of practice: human projects are enabled by nonhuman resistances overcome and constrained by those that hold."},
        ],
        x:160,y:300,color:"#34d399",status:"consolidated",source:"paper",
      },
      {
        id: "assimilation", term: "Assimilation",
        definition: "The process by which a person or organisation incorporates new information or experiences into an existing cognitive schema without changing the schema itself. Assimilation is the conservative movement of cognition — the world is made to fit existing categories. A child who calls a cat a 'dog' is assimilating the new creature into a familiar framework. In epistemological terms, assimilation is what happens when rupture has not yet occurred: the pressure of the new is absorbed into the old.",
        thinkers: ["Piaget","Bachelard"],
        tags: ["cognition","schema","learning","epistemology"],
        connections: [
          {to:"accommodation",label:"precedes, then yields to"},
          {to:"equilibration",label:"balanced against"},
          {to:"epistemological-obstacle",label:"perpetuated by"},
          {to:"rupture",label:"broken by"},
        ],
        nuances: [
          {thinker:"Piaget",note:"Piaget's foundational term: assimilation is one pole of a dialectic — the organism's tendency to incorporate the world into existing structures. Without it there is no continuity of understanding; with only it there is no growth."},
          {thinker:"Bachelard connection",note:"Bachelard's epistemological obstacles are, in Piagetian terms, schemas so successfully assimilating that they prevent the accommodation needed for scientific progress."},
        ],
        x:340,y:560,color:"#fb923c",status:"consolidated",source:"paper",
      },
      {
        id: "accommodation", term: "Accommodation",
        definition: "The process by which a person or organisation modifies or creates a new cognitive schema in response to information that does not fit existing frameworks. Accommodation is the transformative movement of cognition — rather than the world being made to fit, the framework is remade to fit the world. It is the micro-level mechanism through which rupture is actualised: each accommodation is a small rupture; genuine rupture is accommodation at scale.",
        thinkers: ["Piaget","Kuhn"],
        tags: ["cognition","schema","transformation","learning"],
        connections: [
          {to:"assimilation",label:"follows from failure of"},
          {to:"equilibration",label:"produces new"},
          {to:"rupture",label:"micro-level instance of"},
          {to:"islands-of-stability",label:"new schema is"},
          {to:"enabling-constraining",label:"triggered by over-constraining"},
        ],
        nuances: [
          {thinker:"Piaget",note:"Accommodation is triggered by disequilibrium — the felt cognitive discomfort when the world resists assimilation. The new schema that results is more adequate to the complexity encountered."},
          {thinker:"Document",note:"The document identifies accommodation with building 'new models that accommodate to the new complexity that has emerged' — and rupture as the name for the moment when assimilation gives way to accommodation."},
        ],
        x:660,y:560,color:"#c084fc",status:"consolidated",source:"paper",
      },
      {
        id: "equilibration", term: "Equilibration",
        definition: "Piaget's term for the ongoing balancing process between assimilation and accommodation that drives cognitive development. When new experiences can be assimilated, the system is in equilibrium. When they cannot, the resulting cognitive discomfort — disequilibrium — motivates accommodation and growth toward a higher-order equilibrium. Equilibration is not a static balance but a dynamic, directional process: each new equilibrium is richer and more comprehensive than the last.",
        thinkers: ["Piaget"],
        tags: ["cognition","development","balance","dynamics"],
        connections: [
          {to:"assimilation",label:"balances"},
          {to:"accommodation",label:"drives toward"},
          {to:"opponent-processing",label:"parallel to"},
        ],
        nuances: [
          {thinker:"Piaget",note:"Equilibration is Piaget's answer to the question of what drives development — not maturation alone, nor environment alone, but the self-regulating process by which the organism seeks ever more adequate ways of dealing with its world."},
        ],
        x:500,y:470,color:"#facc15",status:"consolidated",source:"paper",
      },
      {
        id: "opponent-processing", term: "Opponent Processing",
        definition: "A conceptual frame — borrowed from perceptual psychology but applied more broadly — in which opposing processes or forces produce stable output through their mutual tension. In colour vision, red and green opponent channels produce yellow through their interaction. Transposed to epistemology and social dynamics, opponent processing suggests that stability, creativity, or understanding may emerge not from the dominance of one force but from the sustained tension between opposed ones. Listed in the document as a node requiring further elaboration.",
        thinkers: ["Hering (perceptual origin)","Hurvich","Jameson"],
        tags: ["systems","tension","balance","cognition","dynamics"],
        connections: [
          {to:"equilibration",label:"parallel to"},
          {to:"enabling-constraining",label:"enables/constrains as opponent pair"},
          {to:"assimilation",label:"assimilation/accommodation as opponent pair"},
        ],
        nuances: [
          {thinker:"Document",note:"Mentioned twice in the document without full elaboration — once in the foundational vocabulary and once in the closing node list. Its position suggests it is meant to provide a structural metaphor for how paired concepts (enabling/constraining, assimilation/accommodation) function together, each given meaning by the other."},
          {thinker:"Broader application",note:"The opponent processing frame challenges resolution-as-goal: the aim is not to eliminate tension between opposites but to maintain productive tension. This connects directly to Pickering's 'mangle' — which is precisely productive resistance held in dynamic relation."},
        ],
        x:160,y:470,color:"#f472b6",status:"provisional",source:"paper",
      },
      {
        id: "ontological-turn", term: "Ontological Turn",
        definition: "The broader intellectual movement in STS and anthropology that shifts from asking 'how do different cultures represent the world?' to asking 'do different groups actually inhabit different worlds?' Rather than treating differences as competing interpretations of one reality, the ontological turn takes seriously the possibility of genuinely plural ontologies — not many perspectives on one nature, but many natures. This is Viveiros de Castro's 'multinaturalism' opposed to Euro-modern 'multiculturalism'.",
        thinkers: ["Pickering","Viveiros de Castro","Latour","Mol"],
        tags: ["ontology","anthropology","STS","epistemology","plurality"],
        connections: [
          {to:"episteme",label:"related to"},
          {to:"performative-idiom",label:"requires"},
          {to:"islands-of-stability",label:"each ontology as"},
          {to:"summoning",label:"different ontologies accessed by"},
        ],
        nuances: [
          {thinker:"Viveiros de Castro",note:"Multinaturalism: where Euro-modernism assumes one nature and many cultures (multiculturalism), Amerindian perspectivism assumes one culture — intentional beings relating to their worlds — and many natures."},
          {thinker:"Latour",note:"In We Have Never Been Modern, Latour argues that the modern constitution performs a purification — separating Nature from Culture — and then exports this framework as universal. The claim to be a meta-ontology is itself Euro-modernism's most provincial move."},
        ],
        x:720,y:300,color:"#4ade80",status:"consolidated",source:"paper",
      },
      {
        id: "performative-idiom", term: "Performative Idiom",
        definition: "Pickering's key methodological shift: away from a 'representational idiom' — where knowledge claims are evaluated as true or false descriptions of a fixed world — toward a 'performative idiom', where humans and nonhumans are understood as acting and becoming in the world rather than merely depicting it. In the performative view, science and shamanism are not competing descriptions of one nature but different ways of doing and engaging with a lively world. The shift is not only in which words are used but in how language is organised — organised for performance rather than depiction.",
        thinkers: ["Pickering"],
        tags: ["STS","ontology","performance","epistemology","methodology"],
        connections: [
          {to:"ontological-turn",label:"operationalises"},
          {to:"dances-of-agency",label:"described through"},
          {to:"islands-of-stability",label:"produces"},
          {to:"rupture",label:"offers alternative account of"},
        ],
        nuances: [
          {thinker:"Pickering",note:"The representational idiom asks: 'Is this knowledge true?' The performative idiom asks: 'What does this knowledge do?' The shift is from a correspondence theory of truth to a theory of practice and engagement."},
          {thinker:"Document",note:"The document notes that the performative idiom is not just about new vocabulary but about a different organisation of language — one structured for performance. This parallels the distinction between describing a dance and dancing."},
        ],
        x:720,y:420,color:"#38bdf8",status:"consolidated",source:"paper",
      },
      {
        id: "islands-of-stability", term: "Islands of Stability",
        definition: "Pickering's concept for relatively stabilised configurations of humans, nonhumans, and practices that hold together — achievements, not givens. Both a physics laboratory and a shamanic ritual can be understood as islands of stability, each tuned into a different 'lively nature'. Islands of stability are what rupture and accommodation produce: after a crisis, a new configuration achieves stability. They are always provisional — held together by ongoing practice — and always potentially disruptable.",
        thinkers: ["Pickering"],
        tags: ["STS","stability","ontology","practice","systems"],
        connections: [
          {to:"rupture",label:"produced after"},
          {to:"accommodation",label:"new schema stabilises as"},
          {to:"ontological-turn",label:"each ontology as"},
          {to:"performative-idiom",label:"product of"},
          {to:"summoning",label:"accessed through"},
          {to:"enabling-constraining",label:"configurations of"},
        ],
        nuances: [
          {thinker:"Pickering",note:"Islands of stability enable comparison between science and shamanism not as competing truth-claims but as different achieved configurations — both are real, both are productive of their respective worlds."},
          {thinker:"Connection to rupture",note:"A rupture destroys one island of stability and makes possible another. The period of crisis (Kuhn's revolutionary science, Piaget's disequilibrium) is precisely the interval between islands."},
        ],
        x:500,y:160,color:"#f59e0b",status:"consolidated",source:"paper",
      },
      {
        id: "summoning", term: "Summoning",
        definition: "The capacity of different skills, practices, settings, people, groups, and schemas to call forth or activate different elements across different ontologies. Summoning is not mere access or retrieval — it is the way in which the context of engagement shapes what is real, present, and active. A physics laboratory summons certain nonhuman agencies; a shamanic ritual summons others. The concept implies that what is available depends on what kind of island of stability one inhabits.",
        thinkers: ["Pickering"],
        tags: ["ontology","practice","STS","activation"],
        connections: [
          {to:"islands-of-stability",label:"accesses through"},
          {to:"ontological-turn",label:"different ontologies accessed by"},
          {to:"dances-of-agency",label:"mechanism of"},
          {to:"performative-idiom",label:"exemplifies"},
        ],
        nuances: [
          {thinker:"Document",note:"Summoning is listed in the closing nodes alongside Pickering without full elaboration, suggesting it is still developing. Its force is in connecting the ontological turn to practice: different ways of being summon different worlds into actuality."},
        ],
        x:840,y:300,color:"#f472b6",status:"provisional",source:"paper",
      },
      {
        id: "dances-of-agency", term: "Dances of Agency",
        definition: "From Pickering's The Mangle of Practice: the concept describes how human and nonhuman agencies interweave in open-ended, back-and-forth processes. Knowledge is bound up with and transformed in these performative dances — humans extend a project, nonhumans resist or accommodate, humans adjust, and so on indefinitely. Agency is not located in any single actor but emerges from the dance itself. The concept directly challenges both strong social constructionism (humans determine knowledge) and naive realism (nature determines knowledge).",
        thinkers: ["Pickering"],
        tags: ["STS","agency","practice","ontology","process"],
        connections: [
          {to:"performative-idiom",label:"described through"},
          {to:"decentered-becoming",label:"mechanism of"},
          {to:"enabling-constraining",label:"describes dynamics of"},
          {to:"summoning",label:"mechanism of"},
          {to:"islands-of-stability",label:"produces through iteration"},
        ],
        nuances: [
          {thinker:"Pickering",note:"In detailed case studies in physics and mathematics, Pickering shows that scientific knowledge is not discovered (realism) or constructed (constructivism) but mangled — shaped in the open-ended, unpredictable dance between human intention and material resistance."},
        ],
        x:840,y:420,color:"#34d399",status:"consolidated",source:"paper",
      },
      {
        id: "decentered-becoming", term: "Decentered Becoming",
        definition: "Pickering's description of the ontological character of the world as understood through the performative idiom: 'an indefinite multiplicity of performative entities endlessly becoming in decentered and emergent dances of agency.' Decentered means there is no fixed centre or subject driving events — agency is distributed and emergent, not located in any single actor. Becoming means that entities are not fixed substances but processes; they are what they do in relation to other entities.",
        thinkers: ["Pickering","Whitehead (resonance)","Deleuze (resonance)"],
        tags: ["ontology","process","emergence","STS","becoming"],
        connections: [
          {to:"dances-of-agency",label:"described through"},
          {to:"performative-idiom",label:"ontological consequence of"},
          {to:"ontological-turn",label:"implication of"},
        ],
        nuances: [
          {thinker:"Pickering",note:"Decentered becoming is the ontological backdrop of the performative idiom: if the world is always becoming through distributed dances of agency, then any stable configuration — any island of stability — is a local achievement against an ongoing flux."},
          {thinker:"Resonances",note:"Decentered becoming resonates with Whitehead's process philosophy and Deleuze's philosophy of difference — but emerges in Pickering from empirical STS work rather than speculative metaphysics."},
        ],
        x:840,y:540,color:"#818cf8",status:"consolidated",source:"paper",
      },
      {
        id: "open-ended-learning", term: "Open-Ended Learning",
        definition: "Learning that is not overly shaped or constrained by institutional requirements — whether regulative, normative, or cognitive. Open-ended learning preserves the capacity for accommodation: it does not pre-determine what schema a learner must arrive at, but holds space for genuine disequilibrium and genuine transformation. It is contrasted implicitly with learning that only allows assimilation — absorbing new content into pre-given frameworks without changing the framework.",
        thinkers: [],
        tags: ["learning","education","institution","openness"],
        connections: [
          {to:"transdisciplinarity",label:"requires"},
          {to:"social-imaginary",label:"enables"},
          {to:"accommodation",label:"makes space for"},
          {to:"rupture",label:"prepares for"},
        ],
        nuances: [
          {thinker:"Document",note:"Listed under 'Knowledge production, science, and learning' — positioned as the epistemic ideal corresponding to the social ideal of Creative Integration. Both resist functional differentiation as an organising logic."},
        ],
        x:160,y:160,color:"#fb923c",status:"provisional",source:"paper",
      },
    ],
  },
  vienna: {
    id: "vienna", label: "Viennese Aesthetic Vocabulary",
    subtitle: "1860–1910 — Art, Craft & Urban Form",
    accent: "#f59e0b", storageKey: "semantic-network-vienna",
    initialNodes: [
      { id:"gesamtkunstwerk", term:"Gesamtkunstwerk",
        definition:"The integration of all artistic disciplines — architecture, interior, furniture, graphics, objects — into a unified aesthetic whole. Originating in Wagnerian aesthetics, in Vienna the term became a social philosophy: the fragmentation of style was seen to reflect the fragmentation of modern life itself. A unified aesthetic environment was thus both an artistic and a moral ambition.",
        thinkers:["Wagner","Hoffmann","Moser","Klimt"], tags:["design","unity","modernity","social"],
        connections:[{to:"stil",label:"requires"},{to:"lebensform",label:"shapes"},{to:"kunstgewerbe",label:"elevates"},{to:"ornament",label:"contested by Loos"},{to:"wiener-werkstaette",label:"institutionalised in"},{to:"sitte-stadtbild",label:"urban parallel"}],
        nuances:[{thinker:"Secession",note:"For the Secessionists, Gesamtkunstwerk meant dissolving the hierarchy between fine art and applied art — no object too small to deserve artistic care."},{thinker:"Wiener Werkstätte",note:"Hoffmann and Moser pursued a total aesthetic environment, designing everything from buildings to cutlery, but the movement's expense risked turning reform into elite luxury."},{thinker:"Loos",note:"Loos violently rejected the Gesamtkunstwerk ethos, arguing in Ornament and Crime that decorative integration was cultural regression rather than progress."}],
        x:350,y:420,color:"#f59e0b",status:"consolidated",source:"manual" },
      { id:"kunstgewerbe", term:"Kunstgewerbe",
        definition:"Applied or decorative art — the broad field of craft-based objects made with aesthetic intention: furniture, ceramics, textiles, metalwork, bookbinding. In Vienna from the 1860s, Kunstgewerbe became a reform project: if industrial production was inevitable, then elevating the taste embedded in everyday objects could civilize capitalism and shape the moral condition of a society.",
        thinkers:["Eitelberger","Hoffmann","Moser"], tags:["craft","reform","industry","education"],
        connections:[{to:"materialgerechtigkeit",label:"governed by"},{to:"stilbildung",label:"requires"},{to:"formgefuehl",label:"cultivates"},{to:"gesamtkunstwerk",label:"absorbed into"},{to:"mak",label:"institutionalised at"}],
        nuances:[{thinker:"Eitelberger / MAK",note:"The Museum für Kunst und Industrie framed Kunstgewerbe as a liberal bourgeois civilizing project: train craftsmen in taste, and industrial society can be redeemed."},{thinker:"Wiener Werkstätte",note:"Hoffmann and Moser radicalised the concept — not reform of mass production but the creation of hand-made objects of complete artistic integrity."}],
        x:800,y:500,color:"#fb923c",status:"consolidated",source:"manual" },
      { id:"stil", term:"Stil",
        definition:"Style as a total principle — not mere surface decoration but the coherent formal language that unifies all expressions of a historical moment or a designed environment. For Vienna's reformers, the absence of a genuine modern Stil was the symptom of cultural crisis. Finding or inventing one adequate to modern life was the central task of art, architecture, and design.",
        thinkers:["Semper","Riegl","Hoffmann","Klimt"], tags:["form","history","modernity","coherence"],
        connections:[{to:"gesamtkunstwerk",label:"unified by"},{to:"stilbildung",label:"cultivated through"},{to:"kunstwollen",label:"driven by"},{to:"ornament",label:"expressed in"}],
        nuances:[{thinker:"Semper",note:"Gottfried Semper argued each historical epoch produces its own integral style from material, technique, and social function — a style cannot be arbitrarily chosen."},{thinker:"Riegl",note:"Riegl's Stilfragen traced the autonomous formal evolution of ornamental style, resisting reductive material or functional explanations."}],
        x:500,y:130,color:"#facc15",status:"consolidated",source:"manual" },
      { id:"kunstwollen", term:"Kunstwollen",
        definition:"Literally 'art-will' or 'artistic volition' — Alois Riegl's concept for the inner purposive drive that shapes the formal character of art in a given time and place. Kunstwollen resists reduction: it is neither material determinism nor imitation of nature, but an autonomous creative impulse that produces specific formal solutions. Every age has its own Kunstwollen, which gives its art integrity even when judged 'primitive' by other standards.",
        thinkers:["Riegl"], tags:["theory","form","will","history"],
        connections:[{to:"stil",label:"produces"},{to:"ornament",label:"manifests in"},{to:"materialgerechtigkeit",label:"in tension with"},{to:"stilbildung",label:"historically expresses"}],
        nuances:[{thinker:"Riegl",note:"Introduced in Stilfragen (1893) and developed in Spätrömische Kunstindustrie (1901). Kunstwollen opposes Semper's materialist theory — form is not determined by technique or function but by an inner artistic will."}],
        x:500,y:280,color:"#4ade80",status:"consolidated",source:"manual" },
      { id:"materialgerechtigkeit", term:"Materialgerechtigkeit",
        definition:"Material honesty or material fidelity — the principle that the formal treatment of an object should be truthful to the nature of its material. Wood should look and behave like wood; stone like stone; metal like metal. Violation of this principle was treated as both aesthetic failure and moral dishonesty. It became a cornerstone of Vienna's applied arts reform.",
        thinkers:["Semper","Eitelberger","Hoffmann"], tags:["craft","ethics","form","material"],
        connections:[{to:"kunstgewerbe",label:"grounds"},{to:"formgefuehl",label:"trained alongside"},{to:"ornament",label:"constrains"},{to:"stil",label:"contributes to"}],
        nuances:[{thinker:"Semper",note:"Semper's material theory of style saw each craft technique — weaving, ceramics, carpentry — as generating specific formal possibilities. Honesty to material was structural, not merely ethical."}],
        x:670,y:560,color:"#34d399",status:"consolidated",source:"manual" },
      { id:"stilbildung", term:"Stilbildung",
        definition:"Style-formation or taste-cultivation — the educational and social process through which sensitivity to coherent formal language is developed in craftsmen, designers, and the public. For museum reformers, Stilbildung was the practical goal: through drawing classes, museum collections, and workshops, the capacities for aesthetic judgment could be trained into a population.",
        thinkers:["Eitelberger","MAK reformers"], tags:["education","reform","taste","craft"],
        connections:[{to:"kunstgewerbe",label:"aims to elevate"},{to:"formgefuehl",label:"develops"},{to:"mak",label:"pursued at"},{to:"stil",label:"towards"}],
        nuances:[{thinker:"MAK reformers",note:"The founding logic of the Österreichisches Museum für Kunst und Industrie: display exemplary historical craft objects so that students and craftsmen absorb formal principles by looking."}],
        x:650,y:420,color:"#38bdf8",status:"consolidated",source:"manual" },
      { id:"formgefuehl", term:"Formgefühl",
        definition:"Feeling for form — an aesthetic sensibility or intuition that allows a craftsman or designer to judge the rightness of formal decisions. Not reducible to rules, Formgefühl is a cultivated capacity, something between instinct and trained judgment. The concept marks the limits of rationalist design theory: ultimately form-giving requires a felt, embodied sense that cannot be fully codified.",
        thinkers:["Semper","Riegl","Eitelberger"], tags:["sensibility","craft","embodiment","judgment"],
        connections:[{to:"materialgerechtigkeit",label:"applied through"},{to:"stilbildung",label:"cultivated by"},{to:"kunstgewerbe",label:"essential to"},{to:"lebensform",label:"embedded in"}],
        nuances:[{thinker:"Semper",note:"In Der Stil, Semper treats Formgefühl as the tacit dimension of craft knowledge — the accumulated wisdom of making that exceeds verbal instruction."}],
        x:300,y:200,color:"#818cf8",status:"consolidated",source:"manual" },
      { id:"ornament", term:"Ornament",
        definition:"Decorative form applied to or integrated into objects, surfaces, and buildings. In Vienna, ornament was the central contested terrain: for Riegl, ornament expressed autonomous formal will; for Semper, it was grounded in material technique; for the Secessionists, it was the vehicle of aesthetic unity; for Loos, it was crime — the mark of cultural degeneracy and wasted labour.",
        thinkers:["Riegl","Semper","Klimt","Loos","Hoffmann"], tags:["form","decoration","controversy","modernity"],
        connections:[{to:"kunstwollen",label:"expresses"},{to:"gesamtkunstwerk",label:"unifies in"},{to:"materialgerechtigkeit",label:"constrained by"},{to:"loos-kritik",label:"condemned in"},{to:"stil",label:"vehicle of"}],
        nuances:[{thinker:"Riegl",note:"Stilfragen (1893) traces a continuous formal evolution of ornament across cultures, arguing its logic is autonomous — not derived from nature or technique but from inner formal will."},{thinker:"Loos",note:"Ornament and Crime (1908): ornament is cultural regression. The modern person has overcome the need to decorate surfaces."},{thinker:"Secession",note:"For Klimt and the Secessionists, ornament was not regressive but the very medium through which psychological depth and aesthetic unity could be achieved."}],
        x:700,y:200,color:"#f472b6",status:"consolidated",source:"manual" },
      { id:"lebensform", term:"Lebensform",
        definition:"Form of life — the idea that aesthetic choices are not separable from the way a person or community lives. A coherent Lebensform means that artistic sensibility permeates daily existence: the home, clothing, social rituals, urban environment. For Vienna's art reformers, the goal was not merely beautiful objects but a beautiful and unified mode of life.",
        thinkers:["Hoffmann","Secession","Wiener Werkstätte"], tags:["life","unity","social","ethics"],
        connections:[{to:"gesamtkunstwerk",label:"realised through"},{to:"formgefuehl",label:"rooted in"},{to:"wiener-werkstaette",label:"pursued by"},{to:"sitte-stadtbild",label:"extended into city"}],
        nuances:[{thinker:"Wiener Werkstätte",note:"Hoffmann and Moser designed the complete environment — from building to spoon — because coherent Lebensform required no aesthetic gap between architecture and daily utensil."}],
        x:100,y:470,color:"#c084fc",status:"consolidated",source:"manual" },
      { id:"wiener-werkstaette", term:"Wiener Werkstätte",
        definition:"The Vienna Workshops — founded 1903 by Josef Hoffmann and Koloman Moser. The Werkstätte attempted to realise a complete aesthetic environment: furniture, textiles, metalwork, ceramics, clothing, books. It embodied the ideal of craft integrity and artistic unity, but its objects were expensive and its clientele wealthy — a persistent tension between social reform ambitions and elite luxury production.",
        thinkers:["Hoffmann","Moser"], tags:["institution","craft","design","reform"],
        connections:[{to:"gesamtkunstwerk",label:"institutionalises"},{to:"kunstgewerbe",label:"radicalises"},{to:"lebensform",label:"pursues"},{to:"secession",label:"emerges from"}],
        nuances:[{thinker:"Hoffmann",note:"The Werkstätte programme: 'We want to establish intimate contact between public, designer, and craftsman.' But the price of hand-craft made this public largely the Viennese upper bourgeoisie."}],
        x:180,y:500,color:"#fb923c",status:"consolidated",source:"manual" },
      { id:"secession", term:"Secession",
        definition:"The Vienna Secession — founded 1897, when Klimt, Hoffmann, Moser and others broke from the conservative Künstlerhaus. Its motto 'Der Zeit ihre Kunst, der Kunst ihre Freiheit' expressed its double ambition: a new style adequate to modernity, and freedom from academic hierarchy. It explicitly dissolved the boundary between fine and applied art.",
        thinkers:["Klimt","Hoffmann","Moser","Olbrich"], tags:["institution","avant-garde","modernity","reform"],
        connections:[{to:"gesamtkunstwerk",label:"pursues"},{to:"stil",label:"seeks new"},{to:"wiener-werkstaette",label:"generates"},{to:"loos-kritik",label:"criticised by"}],
        nuances:[{thinker:"Klimt",note:"Klimt's Beethoven Frieze (1902) was the movement's most complete Gesamtkunstwerk experiment — painting, architecture, music, and sculpture unified for a single exhibition."}],
        x:160,y:360,color:"#4ade80",status:"consolidated",source:"manual" },
      { id:"mak", term:"MAK / Museum für Kunst und Industrie",
        definition:"The Österreichisches Museum für Kunst und Industrie (today the MAK), founded 1864 by Rudolf von Eitelberger — the first applied arts museum in the German-speaking world, modelled on the V&A in London. Its founding logic: display historical craft masterworks so that designers and craftsmen absorb their formal principles through direct encounter.",
        thinkers:["Eitelberger"], tags:["institution","education","reform","history"],
        connections:[{to:"kunstgewerbe",label:"promotes"},{to:"stilbildung",label:"enables"},{to:"materialgerechtigkeit",label:"teaches"}],
        nuances:[{thinker:"Eitelberger",note:"Eitelberger was a liberal bourgeois art historian who believed the state had a duty to cultivate taste — the museum as pedagogical instrument for the modernization of craft."}],
        x:900,y:390,color:"#38bdf8",status:"consolidated",source:"manual" },
      { id:"sitte-stadtbild", term:"Stadtbild / Sitte",
        definition:"Camillo Sitte's conception of the city as an artistically composed visual whole — analysed in Städtebau nach seinen künstlerischen Grundsätzen (1889). Sitte treated the historic city as a painter treats a composition: spatial enclosure, visual sequence, the irregular placement of monuments within plazas. Though he never uses 'Gesamtkunstwerk', he treats the city as a unified artistic organism grown through time.",
        thinkers:["Sitte"], tags:["urbanism","space","history","composition"],
        connections:[{to:"gesamtkunstwerk",label:"urban parallel to"},{to:"lebensform",label:"spatial dimension of"},{to:"stil",label:"historically embedded"},{to:"ringstrasse",label:"critique of"}],
        nuances:[{thinker:"Sitte",note:"Sitte's model is emergent and historical; the Secessionists' is consciously designed and programmatic. Both treat the built environment as aesthetic totality, but by opposite methods."}],
        x:780,y:570,color:"#facc15",status:"consolidated",source:"manual" },
      { id:"loos-kritik", term:"Loos / Ornament and Crime",
        definition:"Adolf Loos's radical counter-position to the Viennese aesthetic reform consensus — crystallised in his 1908 essay Ornament und Verbrechen. Loos argued that ornament is not cultural richness but cultural lag: the impulse to decorate belongs to primitive and criminal psychology. Modern culture means restraint, the separation of art from everyday utility, and the embrace of plain, functional surfaces.",
        thinkers:["Loos"], tags:["critique","modernity","rupture","design"],
        connections:[{to:"ornament",label:"condemns"},{to:"gesamtkunstwerk",label:"rejects"},{to:"secession",label:"breaks from"},{to:"materialgerechtigkeit",label:"shares concern with"}],
        nuances:[{thinker:"Loos",note:"Paradoxically, Loos shared the reform movement's concern for material honesty, but drew the opposite conclusion: strip ornament away entirely rather than refining it."}],
        x:500,y:560,color:"#f472b6",status:"consolidated",source:"manual" },
      { id:"ringstrasse", term:"Ringstraße",
        definition:"Vienna's monumental boulevard constructed from the 1860s onward — a planned urban ensemble of historicist public buildings intended to represent imperial civic identity. For Vienna's reform generation, the Ringstraße became the symbol of everything wrong: historical eclecticism, stylistic pastiche, surface spectacle without genuine cultural unity.",
        thinkers:["Sitte (critic)","Loos (critic)","Secession (reaction)"], tags:["urbanism","history","eclecticism","critique"],
        connections:[{to:"sitte-stadtbild",label:"critiqued by"},{to:"stil",label:"lacks genuine"},{to:"loos-kritik",label:"symptom addressed by"},{to:"secession",label:"provokes"}],
        nuances:[{thinker:"Schorske",note:"Carl Schorske's Fin-de-Siècle Vienna reads the Ringstraße as the liberal bourgeoisie's self-representation in stone — and the aesthetic revolt of the 1890s as a generational rejection of that image."}],
        x:940,y:210,color:"#818cf8",status:"consolidated",source:"manual" },
      { id:"kunstgenuss", term:"Kunstgenuss",
        definition:"Art-enjoyment or art-pleasure — the felt, bodily experience of aesthetic absorption in a work. In the Vienna reform context the term carried ethical weight — if the objects and environments of daily life were well made, Kunstgenuss would become democratically available, not confined to the museum.",
        thinkers:["Eitelberger","Riegl","Secession"], tags:["aesthetics","pleasure","experience","sensibility"],
        connections:[{to:"kunstwollen",label:"felt response to"},{to:"formgefuehl",label:"related to"},{to:"lebensform",label:"enriches"},{to:"zweckfreiheit",label:"enabled by"}],
        nuances:[{thinker:"Riegl",note:"Riegl's formal analysis of art is ultimately in service of recovering Kunstgenuss — the goal of art history is to make us feel again what earlier cultures felt when they produced their forms."}],
        x:750,y:310,color:"#f472b6",status:"consolidated",source:"manual" },
      { id:"kunsterlebnis", term:"Kunsterlebnis",
        definition:"Art-experience — a more phenomenologically weighted term than Kunstgenuss, emphasising the lived, temporal encounter with a work rather than the pleasure it yields. Kunsterlebnis implies that genuine engagement with art transforms the one who undergoes it: it is an event, not merely a sensation.",
        thinkers:["Dilthey","Gadamer","Secession"], tags:["aesthetics","experience","phenomenology","transformation"],
        connections:[{to:"kunstgenuss",label:"deepens into"},{to:"lebensform",label:"shapes"},{to:"gesamtkunstwerk",label:"produced by"},{to:"zweckfreiheit",label:"requires"}],
        nuances:[{thinker:"Gadamer",note:"Gadamer inherits the term and radicalises it: the Kunsterlebnis is not a private psychological event but a claim the work makes on us — an encounter that reorganises our understanding."}],
        x:800,y:160,color:"#818cf8",status:"consolidated",source:"manual" },
      { id:"zweckfreiheit", term:"Zweckfreiheit",
        definition:"Freedom from purpose — the Kantian idea that genuine aesthetic experience involves a suspension of instrumental thinking, a contemplation of form for its own sake rather than for any end it serves.",
        thinkers:["Kant","Schiller","Secession","Hoffmann"], tags:["aesthetics","freedom","autonomy","making"],
        connections:[{to:"kunstgenuss",label:"enables"},{to:"kunsterlebnis",label:"condition of"},{to:"secession",label:"declared by"},{to:"gesamtkunstwerk",label:"animates"}],
        nuances:[{thinker:"Kant",note:"Kant's Critique of Judgment: the beautiful pleases without concept and without interest — Zweckfreiheit (purposiveness without purpose) is the formal structure of this disinterested pleasure."}],
        x:250,y:130,color:"#facc15",status:"consolidated",source:"manual" },
      { id:"grossstadt", term:"Grossstadt",
        definition:"The metropolis — the great city as a qualitatively new form of human experience. Around 1900 in German-speaking culture, Grossstadt named both an empirical fact and a contested aesthetic question: whether the modern city could become a unified artistic whole. Otto Wagner's position — that the Grossstadt demands and makes possible a new artistic vision at the level of the entire urban plan — is the foreground of this node.",
        thinkers:["Otto Wagner","Sitte","Simmel","Toennies","Loos"], tags:["urbanism","modernity","planning","vision"],
        connections:[{to:"ringstrasse",label:"supersedes"},{to:"sitte-stadtbild",label:"diverges from"},{to:"gesamtkunstwerk",label:"scales up to city"},{to:"lebensform",label:"shapes at urban scale"}],
        nuances:[{thinker:"Otto Wagner",note:"In Moderne Architektur (1895), Wagner argues that only an artist — not an engineer or bureaucrat — can give the expanding metropolis its necessary form."},{thinker:"Simmel",note:"Georg Simmel's Die Grossstadt und das Geistesleben (1903): the metropolis produces the blasé type — a person who has deadened their responses to survive overstimulation."}],
        x:940,y:470,color:"#38bdf8",status:"consolidated",source:"manual" },
      { id:"beethoven-frieze", term:"Beethoven Frieze (Klimt, 1902)",
        definition:"Gustav Klimt's monumental wall painting created for the 14th Secession exhibition, 1902 — designed as a temporary work, intended to be destroyed after the exhibition closed. The Frieze is the most concentrated single artifact in which the Vienna network's tensions become visible: Gesamtkunstwerk within Gesamtkunstwerk, ornament as psychological language, the dissolution of fine and decorative art.",
        thinkers:["Klimt","Beethoven (source)","Schiller (via Beethoven)","Wagner (Gesamtkunstwerk concept)"], tags:["artifact","ornament","narrative","aesthetics","process"],
        connections:[{to:"gesamtkunstwerk",label:"exemplifies within"},{to:"secession",label:"centrepiece of 1902 exhibition"},{to:"ornament",label:"deploys as psychological language"},{to:"kunsterlebnis",label:"designed to produce"}],
        nuances:[{thinker:"Process / Temporality",note:"The Frieze was designed to be temporary — Gesamtkunstwerk as event rather than object. Its accidental survival changes its meaning."}],
        x:360,y:560,color:"#f59e0b",status:"consolidated",source:"manual" },
      { id:"gemischter-satz", term:"Gemischter Satz",
        definition:"The indigenous Viennese field-blend wine — grown on the hills within the city boundary, pressed from many grape varieties harvested together. As a cultural form, Gemischter Satz embodies a social philosophy antithetical to the Gesamtkunstwerk's controlled aesthetic totality: its beauty is unplanned, emergent from mixture rather than unified vision.",
        thinkers:["Viennese folk culture","Schorske (social context)"], tags:["culture","social","wine","city"],
        connections:[{to:"kaffeehausleben",label:"counterpart to"},{to:"lebensform",label:"popular form of"},{to:"gesamtkunstwerk",label:"informal counterpoint to"}],
        nuances:[{thinker:"Unplanned totality",note:"Gemischter Satz achieves unity without a guiding artistic will. The blend emerges from cohabitation over time, not design."}],
        x:180,y:200,color:"#4ade80",status:"consolidated",source:"manual" },
      { id:"schmaeh", term:"Schmaeh",
        definition:"An untranslatable Viennese mode of social interaction — not quite irony, not quite charm, not quite cynicism, but a way of holding warmth and detachment simultaneously. Schmaeh says serious things through apparent lightness; it deflects sentimentality without becoming cold.",
        thinkers:["Karl Kraus","Nestroy","Freud (jokes)","Thomas Bernhard"], tags:["culture","language","irony","social"],
        connections:[{to:"kaffeehausleben",label:"performed in"},{to:"wiener-gemutlichkeit",label:"unsettles"},{to:"loos-kritik",label:"shares mode with"},{to:"dekadenz",label:"coping response to"}],
        nuances:[{thinker:"Karl Kraus",note:"Kraus's satirical method in Die Fackel is Schmaeh elevated to literary form — the deadpan quotation of an opponent's words as the most devastating critique."}],
        x:120,y:260,color:"#facc15",status:"consolidated",source:"manual" },
      { id:"kaffeehausleben", term:"Kaffeehausleben",
        definition:"Coffeehouse life — the social institution through which Viennese intellectual, artistic, and political culture actually reproduced itself. The Viennese Kaffeehaus was simultaneously an office, salon, postal address, reading room, and debating chamber.",
        thinkers:["Karl Kraus","Altenberg","Trotsky","Herzl","Klimt"], tags:["culture","institution","social","language"],
        connections:[{to:"gemischter-satz",label:"counterpart to"},{to:"schmaeh",label:"primary venue of"},{to:"secession",label:"social substrate of"},{to:"lebensform",label:"defines Viennese"}],
        nuances:[{thinker:"Social function",note:"The Kaffeehaus solved a specific Viennese problem: apartments were small and cold, but the coffeehouse was warm, spacious, and cheap."}],
        x:100,y:370,color:"#fb923c",status:"consolidated",source:"manual" },
      { id:"wiener-gemutlichkeit", term:"Wiener Gemutlichkeit",
        definition:"Viennese cosiness or conviviality — the quality of social warmth, unhurried ease, and pleasurable togetherness. But it has a profound underside: Gemutlichkeit as cultural anaesthetic, as the specifically Viennese talent for making the unbearable comfortable, for conducting the business of decline in a pleasant tone of voice.",
        thinkers:["Karl Kraus","Bernhard","Canetti","Zweig"], tags:["culture","social","atmosphere","critique"],
        connections:[{to:"schmaeh",label:"expressed through"},{to:"kaffeehausleben",label:"cultivated in"},{to:"dekadenz",label:"masks"},{to:"lebensform",label:"popular version of"}],
        nuances:[{thinker:"Karl Kraus",note:"Kraus saw Gemutlichkeit as Vienna's most dangerous quality: it was the cultural solvent that dissolved all serious distinctions."}],
        x:120,y:160,color:"#34d399",status:"consolidated",source:"manual" },
      { id:"ringstrasse-gesellschaft", term:"Ringstrasse-Gesellschaft",
        definition:"Ringstraße society — the specific social formation that built the boulevard, commissioned its institutions, and constituted the dominant cultural public of late nineteenth-century Vienna: the liberal upper bourgeoisie, largely but not exclusively Jewish.",
        thinkers:["Schorske","Zweig","Freud","Mahler","Schnitzler"], tags:["social","class","history","institution"],
        connections:[{to:"ringstrasse",label:"built and inhabited"},{to:"secession",label:"patronised and was challenged by"},{to:"wiener-gemutlichkeit",label:"performed"},{to:"dekadenz",label:"symptom of exhaustion of"}],
        nuances:[{thinker:"Schorske",note:"Schorske's Fin-de-Siecle Vienna argues that the Ringstrasse-Gesellschaft's turn to aestheticism was a response to political failure."}],
        x:870,y:130,color:"#818cf8",status:"consolidated",source:"manual" },
      { id:"dekadenz", term:"Dekadenz / Fin-de-siecle Stimmung",
        definition:"Decadence and the mood of the fin de siecle — the pervasive sense in Vienna around 1890-1910 of civilisational lateness, of living at an ending, of hypercultivation as simultaneously the highest achievement and the surest sign of exhaustion.",
        thinkers:["Hofmannsthal","Schnitzler","Klimt","Nietzsche","Schorske"], tags:["culture","history","atmosphere","crisis","modernity"],
        connections:[{to:"ringstrasse-gesellschaft",label:"experienced by"},{to:"wiener-gemutlichkeit",label:"concealed by"},{to:"secession",label:"aesthetic response to"},{to:"gesamtkunstwerk",label:"intensified pursuit of"}],
        nuances:[{thinker:"Hofmannsthal",note:"Hugo von Hofmannsthal's Ein Brief (1902) is the canonical text of Viennese Dekadenz: a fictional letter describing complete loss of faith in language."}],
        x:780,y:130,color:"#f87171",status:"consolidated",source:"manual" },
    ],
  },
  apocalyptic: {
    id:"apocalyptic", label:"Apocalyptic Ethics",
    subtitle:"End Times, Moral Urgency & the Politics of Catastrophe",
    accent:"#f87171", storageKey:"semantic-network-apocalyptic",
    initialNodes: [
      { id:"apocalypse", term:"Apocalypse",
        definition:"From the Greek apokalypsis — an unveiling or revelation. In its original theological sense, apocalypse does not mean destruction but disclosure: the pulling back of a veil to reveal a deeper truth about the world and its condition. In secular modernity the term has migrated toward catastrophe and ending, but the ethical dimension of revelation — crisis making visible what was previously hidden — remains central to apocalyptic thinking across traditions.",
        thinkers:["John of Patmos","Benjamin","Derrida","Zizek"], tags:["theology","revelation","crisis","modernity"],
        connections:[{to:"eschatology",label:"structured by"},{to:"katechon",label:"held back by"},{to:"moral-urgency",label:"generates"},{to:"witness",label:"demands"}],
        nuances:[{thinker:"Benjamin",note:"Walter Benjamin's 'now of recognisability' treats apocalyptic moments as ruptures in homogeneous historical time."},{thinker:"Derrida",note:"For Derrida, the apocalyptic tone in philosophy is always a call — an injunction demanding a response."}],
        x:500,y:280,color:"#f87171",status:"consolidated",source:"manual" },
      { id:"eschatology", term:"Eschatology",
        definition:"The study or doctrine of last things — death, judgment, the end of history, final states. In theological traditions, eschatology structures the meaning of present action by reference to an ultimate horizon. In secular and political thought eschatological structures persist: the idea that history has a direction, that the present moment is critical.",
        thinkers:["Moltmann","Pannenberg","Lowith","Agamben"], tags:["theology","history","time","politics"],
        connections:[{to:"apocalypse",label:"frames"},{to:"katechon",label:"includes"},{to:"moral-urgency",label:"grounds"},{to:"messianism",label:"related to"}],
        nuances:[{thinker:"Lowith",note:"Karl Lowith's Meaning in History argues that modern secular philosophies of progress are secularised eschatologies."}],
        x:720,y:180,color:"#fb923c",status:"consolidated",source:"manual" },
      { id:"katechon", term:"Katechon",
        definition:"From Paul's Second Letter to the Thessalonians — the restrainer that holds back the end of history. In political theology it has described the Roman Empire, the Church, the sovereign state, and secular modernity itself as structures that defer the final reckoning.",
        thinkers:["Paul","Schmitt","Agamben","Taubes"], tags:["theology","politics","power","delay"],
        connections:[{to:"apocalypse",label:"restrains"},{to:"eschatology",label:"operates within"},{to:"sovereignty",label:"embodied in"},{to:"moral-urgency",label:"in tension with"}],
        nuances:[{thinker:"Taubes",note:"Jacob Taubes reads Paul against Schmitt: where Schmitt's katechon conserves the world, Paul's messianism demands its transformation."}],
        x:310,y:160,color:"#818cf8",status:"consolidated",source:"manual" },
      { id:"moral-urgency", term:"Moral Urgency",
        definition:"The ethical condition in which the weight of impending catastrophe restructures the relationship between knowledge, deliberation, and action. Moral urgency compresses time: it makes acting now feel more important than thinking further.",
        thinkers:["Jonas","Levinas","Camus","Jaspers"], tags:["ethics","action","time","crisis"],
        connections:[{to:"apocalypse",label:"produced by"},{to:"responsibility",label:"intensifies"},{to:"katechon",label:"frustrated by"},{to:"witness",label:"expressed through"}],
        nuances:[{thinker:"Jonas",note:"Hans Jonas's imperative of responsibility — act so that the effects of your action are compatible with the permanence of genuine human life."}],
        x:680,y:390,color:"#4ade80",status:"consolidated",source:"manual" },
      { id:"responsibility", term:"Responsibility",
        definition:"In apocalyptic ethics, responsibility takes on an expanded temporal and spatial scope — extending to future generations, non-human life, and planetary systems that cannot speak for themselves.",
        thinkers:["Jonas","Arendt","Derrida","Young"], tags:["ethics","agency","future","accountability"],
        connections:[{to:"moral-urgency",label:"demanded by"},{to:"witness",label:"enacted through"},{to:"apocalypse",label:"structured by"},{to:"testimony",label:"requires"}],
        nuances:[{thinker:"Arendt",note:"Arendt's distinction between responsibility and guilt: collective responsibility cannot be reduced to individual guilt, yet it implies real political obligations."}],
        x:840,y:300,color:"#34d399",status:"consolidated",source:"manual" },
      { id:"witness", term:"Witness",
        definition:"The practice and ethical obligation of bearing witness — recording, transmitting, and insisting on the reality of catastrophe for those who were not present or who wish not to know.",
        thinkers:["Levi","Agamben","Derrida","Wiesel"], tags:["memory","language","ethics","trauma"],
        connections:[{to:"responsibility",label:"enacts"},{to:"moral-urgency",label:"responds to"},{to:"testimony",label:"produces"},{to:"apocalypse",label:"responds to"}],
        nuances:[{thinker:"Agamben",note:"In Remnants of Auschwitz, Agamben argues that the true witness — the one who reached the bottom — could not speak."}],
        x:500,y:470,color:"#f472b6",status:"consolidated",source:"manual" },
      { id:"messianism", term:"Messianism",
        definition:"The structure of expectation organised around a coming redemption. In philosophical usage, messianism is distinguished from any specific Messiah: it names the formal structure of an unconditional promise, a justice-to-come never reducible to existing institutions.",
        thinkers:["Benjamin","Derrida","Levinas","Bloch"], tags:["theology","hope","justice","futurity"],
        connections:[{to:"eschatology",label:"animates"},{to:"apocalypse",label:"responds to"},{to:"katechon",label:"opposed by"},{to:"moral-urgency",label:"transforms into"}],
        nuances:[{thinker:"Derrida",note:"Derrida's messianism without messianism: a structural openness to the other and to the future that does not fill in what arrives."}],
        x:280,y:390,color:"#facc15",status:"consolidated",source:"manual" },
      { id:"sovereignty", term:"Sovereignty & Exception",
        definition:"Carl Schmitt's definition — sovereign is he who decides on the exception — links sovereignty directly to apocalyptic logic: the state of exception is the political analogue of the end of normal time.",
        thinkers:["Schmitt","Agamben","Benjamin","Foucault"], tags:["politics","power","law","exception"],
        connections:[{to:"katechon",label:"embodied in"},{to:"eschatology",label:"operates within"},{to:"moral-urgency",label:"claims to justify"},{to:"responsibility",label:"evades through exception"}],
        nuances:[{thinker:"Agamben",note:"The state of exception has become the rule. Bare life — stripped of political form — is the hidden foundation of sovereign power."}],
        x:160,y:300,color:"#38bdf8",status:"consolidated",source:"manual" },
      { id:"testimony", term:"Testimony & Archive",
        definition:"The material and institutional practices through which the memory of catastrophe is preserved, transmitted, and made available to future judgment. Archives are never neutral — they are sites of power, selection, and exclusion.",
        thinkers:["Derrida","Foucault","Mbembe","Ricoeur"], tags:["memory","institution","power","language"],
        connections:[{to:"witness",label:"materialises"},{to:"responsibility",label:"enables"},{to:"apocalypse",label:"resists erasure by"}],
        nuances:[{thinker:"Derrida",note:"Archive Fever: the archive is haunted by the death drive — the desire to preserve is inseparable from the desire to destroy."}],
        x:700,y:490,color:"#c084fc",status:"consolidated",source:"manual" },
    ],
  },
};

// ---CONSTANTS ---

const PALETTE = ["#c084fc","#f472b6","#fb923c","#facc15","#4ade80","#34d399","#38bdf8","#818cf8"];
const TAG_COLORS = {
  epistemology:"#818cf8",science:"#38bdf8",change:"#c084fc",history:"#fb923c",
  ontology:"#4ade80",institution:"#facc15",complexity:"#34d399",imagination:"#f472b6",
  craft:"#fb923c",design:"#f59e0b",reform:"#4ade80",modernity:"#38bdf8",
  form:"#c084fc",unity:"#facc15",social:"#34d399",ethics:"#818cf8",
  education:"#38bdf8",urbanism:"#f59e0b",space:"#4ade80",critique:"#f472b6",
  material:"#fb923c",theory:"#818cf8",will:"#c084fc",life:"#34d399",
  "avant-garde":"#f472b6",sensibility:"#facc15",coherence:"#38bdf8",
  controversy:"#f472b6",decoration:"#fb923c",embodiment:"#4ade80",
  judgment:"#818cf8",rupture:"#c084fc",taste:"#facc15",eclecticism:"#fb923c",
  composition:"#f59e0b",aesthetics:"#f472b6",pleasure:"#facc15",
  transformation:"#c084fc",autonomy:"#4ade80",making:"#fb923c",
  phenomenology:"#818cf8",artifact:"#f59e0b",narrative:"#fb923c",
  process:"#4ade80",planning:"#38bdf8",vision:"#c084fc",
  wine:"#4ade80",irony:"#facc15",city:"#38bdf8",atmosphere:"#34d399",
  class:"#818cf8",theology:"#f87171",revelation:"#fb923c",crisis:"#f472b6",
  delay:"#818cf8",exception:"#38bdf8",trauma:"#f472b6",futurity:"#facc15",
  accountability:"#34d399",hope:"#facc15",justice:"#4ade80",law:"#38bdf8",
  power:"#818cf8",action:"#4ade80",time:"#38bdf8",agency:"#34d399",
  memory:"#c084fc",language:"#818cf8",
  systems:"#34d399",conditions:"#38bdf8",conditions:"#38bdf8",
  cognition:"#c084fc",schema:"#818cf8",learning:"#4ade80",
  development:"#fb923c",balance:"#facc15",dynamics:"#f472b6",
  tension:"#f472b6",STS:"#34d399",practice:"#38bdf8",plurality:"#4ade80",
  methodology:"#818cf8",performance:"#f472b6",stability:"#facc15",
  emergence:"#4ade80",becoming:"#c084fc",openness:"#38bdf8",
  activation:"#fb923c",community:"#818cf8",discourse:"#38bdf8",
  creation:"#4ade80",integration:"#34d399",obstacle:"#f472b6",
  default:"#94a3b8",
};
const tagColor = t => TAG_COLORS[t] || TAG_COLORS.default;

const STATUS_STYLES = {
  consolidated: { border:"none", opacity:1 },
  provisional:  { border:"2px dashed rgba(255,255,255,0.5)", opacity:0.9 },
  contested:    { border:"2px dashed #f472b6", opacity:0.9 },
  proposed:     { border:"2px dashed rgba(255,255,255,0.3)", opacity:0.7 },
};

const SOURCE_ICONS = { manual:"✎", transcript:"◉", voice:"♪", paper:"▤", personal:"★" };

const INPUT_TYPES = [
  { id:"transcript", label:"Transcript", icon:"◉", color:"#38bdf8", desc:"Meeting or interview transcript" },
  { id:"voice",      label:"Voice Note", icon:"♪", color:"#4ade80", desc:"Record or describe an idea" },
  { id:"paper",      label:"Paper / Text", icon:"▤", color:"#fb923c", desc:"Academic paper or document" },
  { id:"personal",   label:"Personal Note", icon:"★", color:"#f472b6", desc:"Reflection, story, or imaginary" },
];

// ---AI EXTRACTION ---

async function extractNodesFromInput(inputType, content, existingNodes, networkContext) {
  const existingTerms = existingNodes.map(n => `"${n.term}" (id: ${n.id})`).join(", ");
  const systemPrompt = `You are a semantic network builder for an interdisciplinary research group. 
Your task is to extract conceptual nodes from research inputs and integrate them into an existing network.
Always respond with ONLY valid JSON, no markdown, no explanation.`;

  const inputDescriptions = {
    transcript: "a meeting or interview transcript",
    voice: "a voice note or spoken reflection",
    paper: "an academic paper or text excerpt",
    personal: "a personal reflection, story, or imaginary",
  };

  const userPrompt = `You are analysing ${inputDescriptions[inputType]} for a research network about: "${networkContext}".

EXISTING NODES in the network: ${existingTerms}

INPUT CONTENT:
"""
${content}
"""

Extract 2-5 key conceptual nodes from this input. For each node:
- Choose terms that are genuinely conceptually significant, not just keywords
- Write definitions that are rich and contextual (3-5 sentences)
- Connect to existing nodes where meaningful
- For personal/voice inputs, preserve the associative, imaginative quality
- Mark status as "proposed" (new idea) or "provisional" (developing)

Return ONLY this JSON structure:
{
  "nodes": [
    {
      "term": "Term Name",
      "definition": "Rich definition...",
      "thinkers": ["Name1", "Name2"],
      "tags": ["tag1", "tag2"],
      "connections": [{"to": "existing-node-id", "label": "relationship"}],
      "nuances": [{"thinker": "Name", "note": "Specific nuance..."}],
      "status": "proposed",
      "color": "#38bdf8",
      "sourceQuote": "Brief quote or phrase from the input that prompted this node"
    }
  ],
  "networkNote": "One sentence about what this input contributes to the network overall."
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error("API " + response.status + ": " + (errData?.error?.message || response.statusText));
  }

  const data = await response.json();
  if (data.error) throw new Error("Claude: " + data.error.message);

  const text = (data.content || []).map(b => b.text || "").join("").trim();
  if (!text) throw new Error("Empty response from Claude");

  const clean = text.replace(/^```json\s*/m, "").replace(/^```\s*/m, "").replace(/```\s*$/m, "").trim();
  const parsed = JSON.parse(clean);
  if (!parsed.nodes || !Array.isArray(parsed.nodes)) throw new Error("Unexpected shape: " + text.slice(0,100));
  return parsed;
}

// ---GRAPH COMPONENTS ---

function NodeCircle({ node, selected, onSelect }) {
  const r = selected ? 40 : 30;
  const st = STATUS_STYLES[node.status] || STATUS_STYLES.consolidated;
  return (
    <g onClick={() => onSelect(node)} style={{ cursor:"pointer" }}>
      {node.status !== "consolidated" && (
        <circle cx={node.x} cy={node.y} r={r+4} fill="none"
          stroke={node.status === "contested" ? "#f472b6" : "rgba(255,255,255,0.2)"}
          strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      )}
      <circle cx={node.x} cy={node.y} r={r} fill={node.color||"#c084fc"}
        opacity={selected ? 1 : st.opacity}
        style={{
          filter: selected ? `drop-shadow(0 0 20px ${node.color||"#c084fc"})` : `drop-shadow(0 0 6px ${node.color||"#c084fc"}88)`,
          transition:"all 0.25s ease",
        }} />
      <circle cx={node.x} cy={node.y} r={r} fill="none" stroke="white"
        strokeWidth={selected?2:1} opacity={0.25} />
      <text x={node.x} y={node.y+(node.status!=="consolidated"?-2:1)}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontFamily="'Crimson Pro', serif"
        fontSize={selected?"12":"10"} fontWeight="600"
        style={{ userSelect:"none", pointerEvents:"none" }}>
        {node.term.length > 13 ? node.term.slice(0,12)+"…" : node.term}
      </text>
      {node.status !== "consolidated" && (
        <text x={node.x} y={node.y+14} textAnchor="middle"
          fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="'Space Mono', monospace"
          style={{ userSelect:"none", pointerEvents:"none" }}>
          {node.status}
        </text>
      )}
    </g>
  );
}

function EdgeLine({ from, to, label }) {
  const dx = to.x-from.x, dy = to.y-from.y;
  const len = Math.sqrt(dx*dx+dy*dy);
  if (len===0) return null;
  const ux=dx/len, uy=dy/len;
  return (
    <g>
      <line x1={from.x+ux*33} y1={from.y+uy*33} x2={to.x-ux*33} y2={to.y-uy*33}
        stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="4 3" />
      {label && <text x={(from.x+to.x)/2} y={(from.y+to.y)/2-6} textAnchor="middle"
        fill="rgba(255,255,255,0.3)" fontFamily="'Crimson Pro',serif" fontSize="9"
        style={{ userSelect:"none", pointerEvents:"none" }}>{label}</text>}
    </g>
  );
}

// ---INPUT PANEL ---

function InputPanel({ onPropose, networkContext, existingNodes }) {
  const [activeType, setActiveType] = useState("transcript");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const startVoice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setError("Speech recognition not available. Try Chrome or Edge, or type instead."); return; }
    try {
      const recognition = new SR();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        let final = "", interim = "";
        for (let i = 0; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) final += result[0].transcript + " ";
          else interim += result[0].transcript;
        }
        setContent(final + interim);
      };
      recognition.onerror = (event) => {
        if (event.error === "not-allowed") setError("Microphone access denied.");
        else setError("Recording error: " + event.error);
        setRecording(false);
      };
      recognition.onend = () => setRecording(false);
      recognitionRef.current = recognition;
      recognition.start();
      setRecording(true);
      setError("");
    } catch (e) { setError("Could not start recording: " + e.message); }
  };

  const stopVoice = () => {
    if (recognitionRef.current) { recognitionRef.current.stop(); recognitionRef.current = null; }
    setRecording(false);
  };

  const handleExtract = async () => {
    if (!content.trim()) return;
    setLoading(true); setError("");
    try {
      const result = await extractNodesFromInput(activeType, content, existingNodes, networkContext);
      onPropose(result.nodes, result.networkNote, activeType);
      setContent("");
    } catch (e) {
      setError("Extraction failed: " + (e.message || "unknown error"));
    }
    setLoading(false);
  };

  const it = INPUT_TYPES.find(t => t.id === activeType);

  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column" }}>
      <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.12em", marginBottom:"14px" }}>INPUT STREAM</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", marginBottom:"16px" }}>
        {INPUT_TYPES.map(t => (
          <button key={t.id} onClick={() => { setActiveType(t.id); setContent(""); setError(""); }}
            style={{ padding:"10px 8px", borderRadius:"8px", cursor:"pointer", textAlign:"left", background: activeType===t.id ? `${t.color}18` : "rgba(255,255,255,0.03)", border: activeType===t.id ? `1px solid ${t.color}55` : "1px solid rgba(255,255,255,0.08)", transition:"all 0.2s" }}>
            <div style={{ fontSize:"16px", marginBottom:"3px" }}>{t.icon}</div>
            <div style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color: activeType===t.id ? t.color : "rgba(255,255,255,0.5)", letterSpacing:"0.04em" }}>{t.label}</div>
          </button>
        ))}
      </div>
      <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
        {activeType === "voice" && (
          <div style={{ marginBottom:"10px" }}>
            <div style={{ display:"flex", gap:"8px", marginBottom:"6px" }}>
              <button onClick={recording ? stopVoice : startVoice}
                style={{ flex:1, padding:"10px", borderRadius:"7px", cursor:"pointer", background: recording ? "rgba(244,114,182,0.2)" : "rgba(74,222,128,0.15)", border: recording ? "1px solid rgba(244,114,182,0.5)" : "1px solid rgba(74,222,128,0.4)", color: recording ? "#f472b6" : "#4ade80", fontFamily:"'Space Mono',monospace", fontSize:"11px" }}>
                {recording ? "[ ] Stop" : "[o] Record"}
              </button>
            </div>
          </div>
        )}
        <div style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.25)", marginBottom:"6px" }}>
          {activeType==="transcript" && "PASTE TRANSCRIPT OR MEETING NOTES"}
          {activeType==="voice" && "TRANSCRIPT WILL APPEAR BELOW"}
          {activeType==="paper" && "PASTE PAPER EXCERPT OR ABSTRACT"}
          {activeType==="personal" && "YOUR REFLECTION, STORY, OR IMAGINARY"}
        </div>
        <textarea value={content} onChange={e => setContent(e.target.value)}
          placeholder={activeType==="transcript" ? "Paste a meeting transcript or discussion notes..." : activeType==="voice" ? "Or type your spoken note here..." : activeType==="paper" ? "Paste an abstract or passage from a paper..." : "Write a personal reflection or metaphor..."}
          style={{ flex:1, minHeight:"180px", ...inputSt, resize:"none", lineHeight:"1.6" }} />
        {error && <div style={{ fontSize:"12px", color:"#f472b6", marginTop:"8px", fontFamily:"'Space Mono',monospace" }}>{error}</div>}
        <button onClick={handleExtract} disabled={!content.trim() || loading}
          style={{ marginTop:"12px", padding:"12px", borderRadius:"8px", cursor: content.trim()&&!loading ? "pointer" : "default", background: content.trim()&&!loading ? `${it.color}20` : "rgba(255,255,255,0.03)", border: `1px solid ${content.trim()&&!loading ? it.color+"55" : "rgba(255,255,255,0.08)"}`, color: content.trim()&&!loading ? it.color : "rgba(255,255,255,0.2)", fontFamily:"'Space Mono',monospace", fontSize:"11px", letterSpacing:"0.06em", transition:"all 0.2s" }}>
          {loading ? "EXTRACTING NODES…" : `EXTRACT FROM ${it.label.toUpperCase()}`}
        </button>
      </div>
    </div>
  );
}

// ---REVIEW PANEL ---

function ReviewPanel({ proposed, networkNote, onAccept, onReject, onAcceptAll, existingNodes }) {
  return (
    <div style={{ height:"100%", overflowY:"auto" }}>
      <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.12em", marginBottom:"10px" }}>PROPOSED NODES</div>
      {networkNote && (
        <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"8px", padding:"12px", marginBottom:"16px" }}>
          <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.1em", marginBottom:"6px" }}>NETWORK NOTE</div>
          <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.6)", lineHeight:1.65, margin:0, fontStyle:"italic" }}>{networkNote}</p>
        </div>
      )}
      <button onClick={onAcceptAll} style={{ width:"100%", padding:"9px", marginBottom:"14px", borderRadius:"7px", cursor:"pointer", background:"rgba(74,222,128,0.12)", border:"1px solid rgba(74,222,128,0.35)", color:"#4ade80", fontFamily:"'Space Mono',monospace", fontSize:"11px", letterSpacing:"0.05em" }}>
        ACCEPT ALL {proposed.length} NODES
      </button>
      {proposed.map((node, i) => (
        <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"10px", padding:"14px", marginBottom:"12px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:12, height:12, borderRadius:"50%", background:node.color||"#c084fc", flexShrink:0 }} />
              <div style={{ fontSize:"17px", fontWeight:300, color:"#f1f5f9" }}>{node.term}</div>
            </div>
            <span style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.4)", padding:"2px 7px", borderRadius:"4px" }}>{node.status}</span>
          </div>
          {node.sourceQuote && <div style={{ fontSize:"12px", fontStyle:"italic", color:"rgba(255,255,255,0.35)", borderLeft:"2px solid rgba(255,255,255,0.1)", paddingLeft:"10px", marginBottom:"8px" }}>"{node.sourceQuote}"</div>}
          <p style={{ fontSize:"13px", lineHeight:1.65, color:"rgba(255,255,255,0.65)", marginBottom:"10px" }}>{node.definition}</p>
          {node.connections?.length > 0 && (
            <div style={{ marginBottom:"10px" }}>
              {node.connections.map((c,j) => {
                const t = existingNodes.find(n=>n.id===c.to);
                return <span key={j} style={{ display:"inline-block", fontSize:"10px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.4)", padding:"2px 8px", borderRadius:"4px", marginRight:"5px", marginBottom:"4px" }}>{c.label} → {t?.term || c.to}</span>;
              })}
            </div>
          )}
          <div style={{ display:"flex", gap:"7px" }}>
            <button onClick={() => onAccept(node, i)} style={{ flex:1, padding:"8px", borderRadius:"6px", cursor:"pointer", background:"rgba(74,222,128,0.12)", border:"1px solid rgba(74,222,128,0.3)", color:"#4ade80", fontFamily:"'Space Mono',monospace", fontSize:"10px" }}>Accept</button>
            <button onClick={() => onReject(i)} style={{ flex:1, padding:"8px", borderRadius:"6px", cursor:"pointer", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.4)", fontFamily:"'Space Mono',monospace", fontSize:"10px" }}>Dismiss</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---NODE DETAIL ---

function DeleteButton({ onDelete }) {
  const [confirming, setConfirming] = useState(false);
  if (confirming) {
    return (
      <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
        <span style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color:"rgba(255,100,100,0.7)" }}>Delete?</span>
        <button onClick={() => { onDelete(); setConfirming(false); }} style={{ background:"rgba(255,100,100,0.15)", border:"1px solid rgba(255,100,100,0.4)", color:"#f87171", borderRadius:"4px", padding:"2px 8px", cursor:"pointer", fontSize:"11px", fontFamily:"'Space Mono',monospace" }}>Yes</button>
        <button onClick={() => setConfirming(false)} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.4)", borderRadius:"4px", padding:"2px 8px", cursor:"pointer", fontSize:"11px", fontFamily:"'Space Mono',monospace" }}>No</button>
      </div>
    );
  }
  return <button onClick={() => setConfirming(true)} style={{ background:"transparent", border:"none", color:"rgba(255,100,100,0.25)", cursor:"pointer", fontSize:"14px", padding:"0 0 0 8px", lineHeight:1 }} title="Delete node">×</button>;
}

function NodeDetail({ node, nodes, onSelectRelated, onDelete, onStatusChange }) {
  return (
    <div style={{ overflowY:"auto", height:"100%" }}>
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:"25px", fontWeight:300, color:"#f1f5f9", letterSpacing:"-0.02em", lineHeight:1.2, marginBottom:"6px" }}>{node.term}</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"5px", marginBottom:"8px" }}>
            {(node.tags||[]).map(tag => (
              <span key={tag} style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", background:`${tagColor(tag)}22`, color:tagColor(tag), border:`1px solid ${tagColor(tag)}55`, padding:"2px 7px", borderRadius:"20px", letterSpacing:"0.1em", textTransform:"uppercase" }}>{tag}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:"6px", alignItems:"center", marginBottom:"4px" }}>
            <span style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)" }}>{SOURCE_ICONS[node.source||"manual"]} {node.source||"manual"}</span>
            <span style={{ fontSize:"9px", color:"rgba(255,255,255,0.15)" }}>—</span>
            <select value={node.status||"consolidated"} onChange={e=>onStatusChange(node.id,e.target.value)}
              style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.5)", borderRadius:"4px", padding:"2px 6px", cursor:"pointer" }}>
              {["consolidated","provisional","contested","proposed"].map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <DeleteButton onDelete={onDelete} />
      </div>
      {node.thinkers?.length > 0 && (
        <div style={{ marginBottom:"14px" }}>
          <div style={secLabel}>THINKERS</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
            {node.thinkers.map(t => <span key={t} style={{ fontSize:"12px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.55)", border:"1px solid rgba(255,255,255,0.1)", padding:"3px 10px", borderRadius:"4px" }}>{t}</span>)}
          </div>
        </div>
      )}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", margin:"12px 0" }} />
      <p style={{ fontSize:"15px", lineHeight:1.8, color:"rgba(255,255,255,0.75)", marginBottom:"18px" }}>{node.definition}</p>
      {node.sourceQuote && <div style={{ fontSize:"13px", fontStyle:"italic", color:"rgba(255,255,255,0.35)", borderLeft:"2px solid rgba(255,255,255,0.1)", paddingLeft:"12px", marginBottom:"16px" }}>"{node.sourceQuote}"</div>}
      {node.nuances?.length > 0 && (
        <div style={{ marginBottom:"18px" }}>
          <div style={secLabel}>BY THINKER</div>
          {node.nuances.map((n,i) => (
            <div key={i} style={{ marginBottom:"12px", paddingLeft:"12px", borderLeft:"2px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.4)", marginBottom:"3px" }}>{n.thinker}</div>
              <p style={{ fontSize:"14px", color:"rgba(255,255,255,0.58)", lineHeight:1.65, margin:0, fontStyle:"italic" }}>{n.note}</p>
            </div>
          ))}
        </div>
      )}
      {node.connections?.length > 0 && (
        <div>
          <div style={secLabel}>CONNECTIONS</div>
          {node.connections.map(conn => {
            const target = nodes.find(n=>n.id===conn.to);
            return (
              <div key={conn.to} onClick={() => target && onSelectRelated(target)}
                style={{ display:"flex", alignItems:"center", gap:"10px", padding:"8px 10px", borderRadius:"6px", marginBottom:"5px", cursor:target?"pointer":"default", background:"rgba(255,255,255,0.03)", transition:"background 0.15s" }}
                onMouseEnter={e=>{if(target)e.currentTarget.style.background="rgba(255,255,255,0.07)"}}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}>
                {target && <div style={{ width:8, height:8, borderRadius:"50%", background:target.color||"#c084fc", flexShrink:0 }} />}
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"14px", color:target?"#f1f5f9":"rgba(255,255,255,0.3)" }}>
                    {target?.term||conn.to}
                    {!target && <span style={{ fontSize:"10px", fontFamily:"monospace", marginLeft:6, color:"rgba(255,100,100,0.4)" }}>(not yet defined)</span>}
                  </div>
                  {conn.label && <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.28)", marginTop:"1px" }}>{conn.label}</div>}
                </div>
                {target && <span style={{ color:"rgba(255,255,255,0.2)", fontSize:"14px" }}>→</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---EMPTY STATE ---

function EmptyState({ nodes, onSelect, accent, onReset }) {
  const byStatus = { consolidated:[], provisional:[], contested:[], proposed:[] };
  nodes.forEach(n => (byStatus[n.status||"consolidated"]||byStatus.consolidated).push(n));
  return (
    <div style={{ overflowY:"auto", height:"100%" }}>
      <div style={secLabel}>ALL TERMS</div>
      <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.28)", lineHeight:1.7, fontStyle:"italic", marginBottom:"12px" }}>Click any node in the graph to explore it. Use Input Stream to add new material.</p>
      <button onClick={onReset} style={{ marginBottom:"18px", padding:"6px 12px", borderRadius:"6px", cursor:"pointer", fontSize:"10px", fontFamily:"'Space Mono',monospace", background:"rgba(255,100,100,0.08)", border:"1px solid rgba(255,100,100,0.2)", color:"rgba(255,100,100,0.5)" }}>Reset to defaults</button>
      {Object.entries(byStatus).map(([status, ns]) => ns.length > 0 && (
        <div key={status} style={{ marginBottom:"16px" }}>
          <div style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.2)", letterSpacing:"0.12em", marginBottom:"7px", textTransform:"uppercase" }}>{status}</div>
          {ns.map(n => (
            <div key={n.id} onClick={() => onSelect(n)}
              style={{ display:"flex", alignItems:"center", gap:"10px", padding:"7px 10px", borderRadius:"6px", cursor:"pointer", marginBottom:"3px", background:"rgba(255,255,255,0.03)", transition:"background 0.15s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.07)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:n.color||accent, flexShrink:0 }} />
              <span style={{ fontSize:"14px", flex:1 }}>{n.term}</span>
              <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.2)" }}>{SOURCE_ICONS[n.source||"manual"]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ---NETWORK VIEW ---

function NetworkView({ networkId, accent }) {
  const net = NETWORKS[networkId];
  const [nodes, setNodes] = useState(net.initialNodes);
  const [selected, setSelected] = useState(null);
  const [rightPanel, setRightPanel] = useState("detail");
  const [proposed, setProposed] = useState([]);
  const [networkNote, setNetworkNote] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [dragging, setDragging] = useState(null);
  const svgRef = useRef();
  const dragOffset = useRef({x:0,y:0});

  useEffect(() => {
    async function load() {
      try {
        const result = await window.storage.get(net.storageKey, false);
        if (result?.value) {
          const saved = JSON.parse(result.value);
          if (Array.isArray(saved) && saved.length > 0) {
            const savedIds = new Set(saved.map(n=>n.id));
            const newInitial = net.initialNodes.filter(n=>!savedIds.has(n.id));
            setNodes([...saved, ...newInitial]);
            return;
          }
        }
      } catch {}
      setNodes(net.initialNodes);
    }
    load();
  }, [net.storageKey]);

  const save = useCallback(async (newNodes) => {
    setSaveStatus("saving…");
    try {
      await window.storage.set(net.storageKey, JSON.stringify(newNodes), false);
      setSaveStatus("saved ✓");
      setTimeout(()=>setSaveStatus(""),2000);
    } catch { setSaveStatus("error"); }
  }, [net.storageKey]);

  const updateNodes = n => { setNodes(n); save(n); };
  const handleSelect = node => { setSelected(s=>s?.id===node.id?null:node); setRightPanel("detail"); };

  const handleMouseDown = e => {
    const rect = svgRef.current.getBoundingClientRect();
    const wx = (e.clientX-rect.left)*(1000/rect.width);
    const wy = (e.clientY-rect.top)*(600/rect.height);
    const hit = nodes.find(n=>Math.hypot(n.x-wx,n.y-wy)<38);
    if (hit) { setDragging(hit.id); dragOffset.current={x:wx-hit.x,y:wy-hit.y}; e.preventDefault(); }
  };
  const handleMouseMove = e => {
    if (!dragging) return;
    const rect = svgRef.current.getBoundingClientRect();
    const wx = (e.clientX-rect.left)*(1000/rect.width)-dragOffset.current.x;
    const wy = (e.clientY-rect.top)*(600/rect.height)-dragOffset.current.y;
    setNodes(prev=>prev.map(n=>n.id===dragging?{...n,x:wx,y:wy}:n));
  };
  const handleMouseUp = () => { if(dragging){save(nodes);setDragging(null);} };

  const handlePropose = (proposedNodes, note, sourceType) => {
    const withMeta = proposedNodes.map(n => ({
      ...n,
      id: n.term.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),
      source: sourceType, status: n.status||"proposed",
      x: 150+Math.random()*700, y: 100+Math.random()*400,
    }));
    setProposed(withMeta); setNetworkNote(note); setRightPanel("review");
  };

  const handleAccept = (node, idx) => {
    const newNodes = [...nodes, node]; updateNodes(newNodes);
    const remaining = proposed.filter((_,i)=>i!==idx); setProposed(remaining);
    if (remaining.length===0) setRightPanel("detail");
  };
  const handleAcceptAll = () => { updateNodes([...nodes, ...proposed]); setProposed([]); setRightPanel("detail"); };
  const handleReject = idx => {
    const remaining = proposed.filter((_,i)=>i!==idx); setProposed(remaining);
    if (remaining.length===0) setRightPanel("detail");
  };
  const handleStatusChange = (id, status) => {
    const newNodes = nodes.map(n=>n.id===id?{...n,status}:n); updateNodes(newNodes);
    setSelected(s=>s?.id===id?{...s,status}:s);
  };
  const deleteNode = id => {
    updateNodes(nodes.filter(n=>n.id!==id).map(n=>({...n,connections:(n.connections||[]).filter(c=>c.to!==id)})));
    setSelected(null);
  };
  const handleReset = async () => {
    try { await window.storage.delete(net.storageKey, false); } catch {}
    setNodes(net.initialNodes); setSelected(null);
  };

  const selectedNode = nodes.find(n=>n.id===selected?.id)||null;
  const edges = [];
  nodes.forEach(node => (node.connections||[]).forEach(conn => {
    const t = nodes.find(n=>n.id===conn.to);
    if(t) edges.push({from:node,to:t,label:conn.label,key:`${node.id}-${conn.to}`});
  }));

  return (
    <div style={{ display:"flex", flex:1, overflow:"hidden", height:"100%" }}>
      <div style={{ flex:1, position:"relative" }}>
        <svg ref={svgRef} viewBox="0 0 1000 600" style={{ width:"100%", height:"100%", display:"block" }}
          onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          <defs>
            <radialGradient id="bgr" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e"/><stop offset="100%" stopColor="#0d0d14"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="1000" height="600" fill="url(#bgr)"/>
          {Array.from({length:20}).map((_,i)=><line key={`v${i}`} x1={i*55} y1={0} x2={i*55} y2={600} stroke="rgba(255,255,255,0.016)" strokeWidth="1"/>)}
          {Array.from({length:12}).map((_,i)=><line key={`h${i}`} x1={0} y1={i*55} x2={1000} y2={i*55} stroke="rgba(255,255,255,0.016)" strokeWidth="1"/>)}
          {edges.map(e=><EdgeLine key={e.key} from={e.from} to={e.to} label={e.label}/>)}
          {nodes.map(node=><NodeCircle key={node.id} node={node} selected={selectedNode?.id===node.id} onSelect={handleSelect}/>)}
        </svg>
        <div style={{ position:"absolute", bottom:14, left:18, fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.18)", lineHeight:2 }}>
          drag to reposition · click to explore
          <div style={{ display:"flex", gap:"12px", marginTop:"4px" }}>
            {["consolidated","provisional","contested","proposed"].map(s=>(
              <span key={s} style={{ color: s==="contested"?"#f472b6":s==="proposed"?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.18)" }}>○ {s}</span>
            ))}
          </div>
        </div>
        {saveStatus && <div style={{ position:"absolute", bottom:14, right:18, fontFamily:"'Space Mono',monospace", fontSize:"10px", color:"#4ade80", opacity:0.7 }}>{saveStatus}</div>}
      </div>
      <div style={{ width:"360px", borderLeft:"1px solid rgba(255,255,255,0.07)", display:"flex", flexDirection:"column", background:"rgba(255,255,255,0.015)", flexShrink:0 }}>
        <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.07)", flexShrink:0 }}>
          {[
            { id:"detail", label:"Explore" },
            { id:"input", label:"Input Stream" },
            ...(proposed.length>0 ? [{ id:"review", label:`Review (${proposed.length})` }] : []),
          ].map(tab=>(
            <button key={tab.id} onClick={()=>setRightPanel(tab.id)}
              style={{ flex:1, padding:"11px 8px", border:"none", cursor:"pointer", background: rightPanel===tab.id ? "rgba(255,255,255,0.05)" : "transparent", color: rightPanel===tab.id ? "#f1f5f9" : "rgba(255,255,255,0.3)", fontFamily:"'Space Mono',monospace", fontSize:"10px", letterSpacing:"0.05em", borderBottom: rightPanel===tab.id ? `2px solid ${accent}` : "2px solid transparent", transition:"all 0.2s" }}>
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ flex:1, overflow:"hidden", padding:"20px 20px 16px" }}>
          {rightPanel==="input" && <InputPanel onPropose={handlePropose} networkContext={net.label+" — "+net.subtitle} existingNodes={nodes} />}
          {rightPanel==="review" && <ReviewPanel proposed={proposed} networkNote={networkNote} onAccept={handleAccept} onReject={handleReject} onAcceptAll={handleAcceptAll} existingNodes={nodes} />}
          {rightPanel==="detail" && !selectedNode && <EmptyState nodes={nodes} onSelect={n=>{setSelected(n);setRightPanel("detail");}} accent={accent} onReset={handleReset} />}
          {rightPanel==="detail" && selectedNode && <NodeDetail node={selectedNode} nodes={nodes} onSelectRelated={n=>setSelected(n)} onDelete={()=>deleteNode(selectedNode.id)} onStatusChange={handleStatusChange} />}
        </div>
      </div>
    </div>
  );
}

// ---ROOT APP ---

export default function App() {
  const [activeNet, setActiveNet] = useState("td");
  const net = NETWORKS[activeNet];
  return (
    <div style={{ fontFamily:"'Crimson Pro',Georgia,serif", background:"#0d0d14", minHeight:"100vh", display:"flex", flexDirection:"column", color:"#e2e8f0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
      <div style={{ padding:"13px 24px", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,0.02)", flexShrink:0 }}>
        <div>
          <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.25)", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"2px" }}>Semantic Network</div>
          <div style={{ fontSize:"18px", fontWeight:300, color:"#f1f5f9", letterSpacing:"-0.01em" }}>Living Vocabulary</div>
        </div>
        <div style={{ display:"flex", gap:"6px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"8px", padding:"4px" }}>
          {Object.values(NETWORKS).map(n=>(
            <button key={n.id} onClick={()=>setActiveNet(n.id)}
              style={{ padding:"7px 14px", borderRadius:"6px", cursor:"pointer", border:"none", background: activeNet===n.id ? `${n.accent}20` : "transparent", color: activeNet===n.id ? n.accent : "rgba(255,255,255,0.3)", fontFamily:"'Space Mono',monospace", fontSize:"10px", letterSpacing:"0.04em", boxShadow: activeNet===n.id ? `0 0 0 1px ${n.accent}44` : "none", transition:"all 0.2s" }}>
              {n.label}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding:"7px 24px", borderBottom:"1px solid rgba(255,255,255,0.05)", background:"rgba(255,255,255,0.01)", flexShrink:0 }}>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.22)", letterSpacing:"0.1em" }}>
          {net.subtitle} · {NETWORKS[activeNet].initialNodes.length} seed terms
        </span>
      </div>
      <div style={{ flex:1, display:"flex", overflow:"hidden" }}>
        <NetworkView key={activeNet} networkId={activeNet} accent={net.accent}/>
      </div>
    </div>
  );
}

const secLabel = { fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.27)", letterSpacing:"0.12em", marginBottom:"9px", marginTop:"4px" };
const inputSt = { width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"7px", padding:"10px 12px", color:"#e2e8f0", fontSize:"14px", fontFamily:"'Crimson Pro',Georgia,serif", outline:"none", boxSizing:"border-box", display:"block" };
