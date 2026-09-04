import { analyticFollesdalMaps } from './analyticFollesdalMaps'

function sentenceCaseTag(tag) {
  if (!tag) return 'idea'
  return tag.toLowerCase()
}

function buildRelationSummary(phase, node) {
  const incoming = phase.edges
    .filter((edge) => edge.target === node.id)
    .map((edge) => {
      const source = phase.nodes.find(
        (candidate) => candidate.id === edge.source,
      )

      return source
        ? `recibe de “${source.title}” la relación “${edge.label || 'conecta'}”`
        : null
    })
    .filter(Boolean)

  const outgoing = phase.edges
    .filter((edge) => edge.source === node.id)
    .map((edge) => {
      const target = phase.nodes.find(
        (candidate) => candidate.id === edge.target,
      )

      return target
        ? `conduce a “${target.title}” mediante “${edge.label || 'conecta'}”`
        : null
    })
    .filter(Boolean)

  const pieces = [...incoming, ...outgoing]

  if (!pieces.length) {
    return 'Este nodo funciona como una pieza autónoma dentro de la fase.'
  }

  return `En el mapa, ${pieces.join('; ')}.`
}

function buildQuestion(phase, node) {
  return (
    `¿Qué función cumple “${node.title}” dentro de la fase ` +
    `“${phase.title}”?`
  )
}

function buildAnswer(phase, node) {
  const role = sentenceCaseTag(node.tag)

  return (
    `Cumple la función de ${role}: ${node.detail} ` +
    buildRelationSummary(phase, node)
  )
}

let ordinal = 0

export const analyticFollesdalGuide =
  analyticFollesdalMaps.flatMap((phase) =>
    phase.nodes.map((node) => {
      ordinal += 1

      return {
        id: `guide-${node.id}`,
        phaseId: phase.id,
        phaseRoman: phase.roman,
        phaseTitle: phase.title,
        nodeId: node.id,
        nodeTag: node.tag,
        bookSource: node.source,
        title: `${ordinal}. ${node.title}`,
        explanation:
          `${node.detail} Este nodo pertenece a la fase ${phase.roman}, ` +
          `“${phase.title}”, cuya pregunta rectora es: ${phase.question}`,
        keyIdea:
          `${node.tag}: ${node.title}. ` +
          `Su función es ayudar a sostener la tesis de la fase: ${phase.thesis}`,
        relationSummary: buildRelationSummary(phase, node),
        question: buildQuestion(phase, node),
        answer: buildAnswer(phase, node),
      }
    }),
  )
