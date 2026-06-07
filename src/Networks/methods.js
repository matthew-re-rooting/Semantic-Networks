// Methodologies vocabulary
// Auto-extracted from semantic-network.jsx

export const methodsNetwork = {
    id: "methods", label: "Methodologies",
    subtitle: "Black Swanning — Inquiry, Rhythm & Practice",
    accent: "#34d399", storageKey: "semantic-network-methods",
    initialNodes: [
      {
        id: "creative-inquiry", term: "Creative Inquiry",
        definition: "A mode of research that treats the act of inquiry itself as a creative, generative practice rather than a procedure for extracting pre-existing facts from a resistant world. Creative inquiry refuses the separation between the researcher and the researched, between knowing and making, between method and finding. It draws on artistic, contemplative, and participatory traditions alongside academic ones, treating them as equally valid ways of producing knowledge. The inquiry is creative not because it is merely expressive or subjective but because it genuinely produces something that was not there before — a new configuration of understanding, relationship, or world.",
        thinkers: ["Les Back","Anna Tsing","Sarah Pink","Donna Haraway","Maxine Sheets-Johnstone"],
        tags: ["methodology","inquiry","creativity","practice","research"],
        connections: [
          {to:"open-ended-learning",label:"learning dimension of"},
          {to:"channeling",label:"structured form of"},
          {to:"seasonal-study",label:"practised through"},
          {to:"seasonal-rhythm",label:"attuned to"},
          {to:"participatory-presence",label:"requires"},
        ],
        nuances: [
          {thinker:"Les Back",note:"In The Art of Inquiry, Les Back argues for a craft-based approach to social research: attentive, patient, responsive to what is actually there rather than what the method predicts will be there. For Back, the sociologist's notebook is like the painter's sketchbook — a place for noticing rather than a data collection instrument. Creative inquiry takes this seriously as a methodological commitment, not merely a stylistic preference."},
          {thinker:"Tsing",note:"Anna Tsing's The Mushroom at the End of the World exemplifies creative inquiry in practice: ethnographic thinking that follows the unexpected connections between fungi, forests, human communities, and global commodity chains without forcing them into a predetermined framework. The method is as generative as the findings."},
          {thinker:"Pink",note:"Sarah Pink's Doing Sensory Ethnography insists that fieldwork involves the whole body — smell, sound, texture, movement — not just observation and interview. Creative inquiry in the field is sensory inquiry: attending to what the body knows before the mind has named it."},
          {thinker:"Haraway",note:"Haraway's concept of situated knowledge and tentacular thinking provides the epistemological ground for creative inquiry: knowing that is partial, embodied, relational, and accountable — not a bird's-eye view but a hands-in-the-soil engagement."},
        ],
        x:300,y:200,color:"#34d399",status:"consolidated",source:"manual",
      },
      {
        id: "channeling", term: "Channeling",
        definition: "A three-stage phenomenologically grounded method for moving from diffuse, complex situations toward clear and grounded action. The method takes seriously that before strategy can be made, the terrain must be felt — not just mapped. It moves through: Sensing (generous, non-resolving attention to what is actually present — currents rather than conclusions), Orienting (distilling the meaningful threads running through what was sensed — directions without steps), and Setting Sail (translating threads into concrete, delegable next steps grounded in everything that has come before). The word channeling is deliberate: it implies both receiving — letting what is present come through without immediately categorising it — and directing: shaping the flow once currents have been identified.",
        thinkers: [],
        tags: ["methodology","inquiry","phenomenology","practice","strategy"],
        connections: [
          {to:"creative-inquiry",label:"structured form of"},
          {to:"open-ended-learning",label:"applied form of"},
          {to:"participatory-presence",label:"stage one requires"},
          {to:"seasonal-rhythm",label:"can be structured by"},
        ],
        nuances: [
          {thinker:"Stage 1 — Sensing",note:"The first stage is one of generous, non-resolving attention. The task is to get as much of the relevant material into the open as possible — documents, intuitions, tensions, questions, partial ideas, contradictions — without yet trying to organise or prioritise it. More is better. The posture is diffuse and receptive. Sensing resists the temptation to reach for structure too early. Its output is not a summary but a fuller picture of the field: a sense of the currents running through the situation, named but not yet directed."},
          {thinker:"Stage 2 — Orienting",note:"The second stage moves from field to pathway. Drawing on everything surfaced in sensing, orienting identifies the meaningful threads running through the material: the tensions that are real, the directions that are live, the choices that actually need to be made. Orienting holds direction without specifying steps — it gestures toward what kinds of things need to come into being without prescribing how. Threads are navigational, not topical. The tensions between threads are as important as the threads themselves."},
          {thinker:"Stage 3 — Setting Sail",note:"The third stage translates threads into action: concrete, delegable next steps, specific enough to act on and sequenced enough to build from, grounded in everything that has come before. Steps are assigned with awareness of who will carry them — their capacities, dispositions, and natural roles. Having felt the currents and found the threads, there is now enough to move by — not a fixed route, but a real heading."},
          {thinker:"Iteration",note:"Channeling is designed to be iterated. The sensing stage can be revisited and deepened; threads can be revised as new material surfaces; steps can feed back into new rounds of sensing. The method is a cycle as much as a sequence — particularly suited to situations where the usual strategic frameworks feel premature or reductive, where what is needed first is not a plan but a deeper attunement to what is actually at stake."},
        ],
        x:500,y:300,color:"#38bdf8",status:"consolidated",source:"paper",
      },
      {
        id: "open-ended-learning", term: "Open-Ended Learning",
        definition: "Learning that is not pre-structured by institutional requirements, credentialing frameworks, or predetermined outcomes — learning that preserves the genuine possibility of surprise, transformation, and accommodation rather than merely confirming what was already known. Open-ended learning is not without direction, but its direction emerges from the inquiry rather than being specified in advance. It is learning as lived process: following what is genuinely interesting, sitting with what is genuinely difficult, allowing the learner to be changed by what they encounter. In contrast to learning as information transfer or skill acquisition, open-ended learning is closer to Piaget's accommodation — the reorganisation of the whole framework in response to what cannot be assimilated.",
        thinkers: ["Dewey","Piaget","Freire","Hugh of Saint Victor","Illich"],
        tags: ["methodology","learning","inquiry","openness","education"],
        connections: [
          {to:"creative-inquiry",label:"learning dimension of"},
          {to:"channeling",label:"applied form of"},
          {to:"seasonal-study",label:"practised as"},
          {to:"seasonal-rhythm",label:"attuned through"},
          {to:"participatory-presence",label:"requires"},
        ],
        nuances: [
          {thinker:"Hugh of Saint Victor",note:"Hugh's distinction between sapientia (integrated wisdom that transforms the knower) and scientia (knowledge of particular things) maps directly onto open-ended learning versus credentialed instruction. Hugh's concept of restauratio — learning as the restoration of a capacity rather than the acquisition of a property — captures the transformative ambition of open-ended learning: not filling an empty vessel but waking up something already present."},
          {thinker:"Freire",note:"Paulo Freire's critique of the 'banking model' of education — in which the teacher deposits knowledge into the passive student — is the political dimension of open-ended learning. Genuine learning is always dialogical: it transforms both teacher and student, and it is always connected to the question of what kind of world is being reproduced or transformed through the educational act."},
          {thinker:"Illich",note:"Ivan Illich's Deschooling Society argues that institutional schooling systematically destroys the capacity for genuine learning by replacing it with the performance of learning — grades, credentials, certificates that stand in for the real thing. Open-ended learning is what education looks like when it is not captured by institutional logic."},
          {thinker:"Connection to research",note:"In the context of this research project, open-ended learning is both a methodological commitment — the researcher should be genuinely available to learn, to be surprised, to have their frameworks challenged — and a substantive interest: what forms of knowledge and learning are the communities under study cultivating, and what do they make possible?"},
        ],
        x:700,y:200,color:"#4ade80",status:"consolidated",source:"manual",
      },
      {
        id: "seasonal-study", term: "Seasonal Study",
        definition: "A practice of deep textual engagement structured by the rhythm of a season: one text studied, lived with, returned to, and allowed to deepen across the span of a spring, summer, autumn, or winter. Seasonal study is not reading for information or coverage but reading as inhabitation — allowing a single text to become a lens through which an entire season of living and thinking is refracted. The season is not arbitrary: different texts belong to different seasons, and the quality of attention that autumn brings is different from what spring makes possible. Seasonal study is a practice of slow knowledge — the kind of knowing that accumulates through sustained engagement rather than accumulation of material.",
        thinkers: [],
        tags: ["methodology","learning","rhythm","practice","place"],
        connections: [
          {to:"open-ended-learning",label:"practice of"},
          {to:"creative-inquiry",label:"practised through"},
          {to:"seasonal-rhythm",label:"structured by"},
          {to:"channeling",label:"can be integrated with"},
        ],
        nuances: [
          {thinker:"One text, one season",note:"The constraint is generative: studying one text per season forces depth over breadth, returns over first readings, lived engagement over coverage. A text read across a whole season is not the same text that was read in a week — it has been allowed to interact with daily life, with the changing light, with the questions that a particular season brings up. The meaning accumulates in the gap between readings as much as in the readings themselves."},
          {thinker:"Contemplative resonance",note:"Seasonal study resonates with lectio divina — the medieval monastic practice of slow, repeated, meditative reading — and with the Jewish practice of daf yomi (a page of Talmud per day across years). In both traditions, the text is not consumed but inhabited; the reader is changed by sustained proximity rather than by a single encounter. Seasonal study is a secular form of this contemplative relationship to text."},
          {thinker:"Seasonal attunement",note:"Different seasons bring different qualities of attention: winter's inwardness suits texts that require stillness and depth; spring's emergence suits texts that are generative and opening; summer's expansiveness suits texts that are wide-ranging and connective; autumn's harvesting suits texts that are integrative and concluding. Seasonal study treats these differences as methodologically relevant rather than incidental."},
        ],
        x:300,y:430,color:"#fb923c",status:"consolidated",source:"manual",
      },
      {
        id: "seasonal-rhythm", term: "Seasonal Rhythm",
        definition: "A mode of organising inquiry, work, and life that aligns with the rhythms of the natural year rather than the homogeneous, clock-measured time of industrial and academic schedules. Seasonal rhythm treats the year not as a container of equal units but as a cycle of qualitatively different phases — each with its own character, its own demands, and its own forms of knowledge. Inquiry structured by seasonal rhythm attends to what each phase makes possible: the germination of new questions in spring, the sustained work of summer, the harvest and integration of autumn, the rest and composting of winter. It is a form of temporal belonging — inhabiting time as a place rather than consuming it as a resource.",
        thinkers: ["Berry","Snyder","Thoreau","traditional ecological knowledge"],
        tags: ["methodology","rhythm","place","time","ecology"],
        connections: [
          {to:"seasonal-study",label:"structures"},
          {to:"open-ended-learning",label:"attuned through"},
          {to:"creative-inquiry",label:"attuned to"},
          {to:"channeling",label:"can structure iterations of"},
          {to:"participatory-presence",label:"deepened by"},
        ],
        nuances: [
          {thinker:"Against clock time",note:"Industrial modernity operates on clock time: homogeneous, measurable, interchangeable units that can be managed, optimised, and sold. Seasonal rhythm is the alternative temporal ontology: time as qualitatively differentiated, as cyclical rather than linear, as something you inhabit rather than something you spend. The academic calendar — semesters, terms, deadlines — is a residue of seasonal rhythm that has been largely stripped of its qualitative meaning."},
          {thinker:"Berry",note:"Wendell Berry's insistence on the seasonal character of farming knowledge — that the farmer who works the same land for decades accumulates a kind of knowing that cannot be transferred because it is knowledge of this land in this season — extends to inquiry. Research that is attuned to seasonal rhythm produces a different kind of knowledge than research that runs on the calendar year of grant cycles and publication deadlines."},
          {thinker:"Ecological knowing",note:"Traditional ecological knowledge in many indigenous traditions is irreducibly seasonal: what you know about a plant, a watershed, or a migration route is always knowledge of how it behaves in a particular season. Seasonal rhythm as a methodology honours this by treating time itself as a dimension of the phenomena being studied, not merely the container in which study takes place."},
        ],
        x:700,y:430,color:"#facc15",status:"consolidated",source:"manual",
      },
      {
        id: "participatory-presence", term: "Participatory Presence",
        definition: "The methodological commitment to being genuinely present — bodily, relationally, and temporally — in the situations being researched, rather than observing them from a managed distance. Participatory presence is more than participant observation: it names the full ontological weight of being-with rather than watching. The researcher who is participatorily present is affected by what they encounter, changed by the relationships they enter, and accountable to the communities they are part of. Knowledge produced through participatory presence is knowledge from within rather than about — and it carries the epistemological limitations and ethical obligations that this implies.",
        thinkers: ["Pink","Back","Weil","Ingold"],
        tags: ["methodology","research","ethics","embodiment","practice"],
        connections: [
          {to:"creative-inquiry",label:"requires"},
          {to:"open-ended-learning",label:"requires"},
          {to:"channeling",label:"stage one requires"},
          {to:"seasonal-rhythm",label:"deepened by"},
        ],
        nuances: [
          {thinker:"Weil",note:"Weil's concept of attention is the contemplative ground of participatory presence: the capacity to be fully present to what is actually there, without projection, without agenda, without the protective distance of the observer role. For Weil, this quality of attention is both the highest form of love and the precondition for genuine knowledge — which makes participatory presence an ethical as much as a methodological commitment."},
          {thinker:"Ingold",note:"Tim Ingold's concept of 'correspondence' — knowing through being alongside, through following, through attending to what unfolds rather than extracting what is already there — is perhaps the most precise articulation of participatory presence as a methodological posture. Ingold contrasts it with the 'extractive' model of fieldwork, in which the researcher collects data and leaves."},
          {thinker:"Back",note:"Les Back's insistence on the craft of attention — the sociologist as someone who notices what others overlook, who stays long enough to see what first impressions miss — gives participatory presence its practical dimension. It is not just an ethical posture but a skill that develops through practice, through the sustained discipline of being present."},
        ],
        x:500,y:530,color:"#c084fc",status:"consolidated",source:"manual",
      },
    ],
  };
