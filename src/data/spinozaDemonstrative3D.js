export const spinozaDemonstrative3DConfig = [
  { id: 'E1D1', position: [-4.2, 2.3, -2.2], size: 0.50 },
  { id: 'E1D3', position: [-2.9, 3.0, -2.1], size: 0.52 },
  { id: 'E1D4', position: [-1.45, 3.35, -1.9], size: 0.48 },
  { id: 'E1D5', position: [0.0, 3.45, -1.8], size: 0.48 },
  { id: 'E1D6', position: [1.55, 3.35, -1.9], size: 0.54 },
  { id: 'E1D7', position: [3.05, 3.0, -2.1], size: 0.50 },
  { id: 'E1A1', position: [4.25, 2.25, -2.2], size: 0.46 },
  { id: 'E1A3', position: [-4.25, 0.55, -1.8], size: 0.46 },
  { id: 'E1A7', position: [4.25, 0.55, -1.8], size: 0.46 },

  { id: 'E1P7', position: [-2.7, 1.25, -0.95], size: 0.58 },
  { id: 'E1P11', position: [0.0, 1.45, -0.80], size: 0.68, cardinal: true },
  { id: 'E1P14', position: [-1.25, 0.15, 0.0], size: 0.76, cardinal: true },
  { id: 'E1P15', position: [1.25, 0.15, 0.0], size: 0.82, cardinal: true },
  { id: 'E1P16', position: [2.95, -0.15, 0.65], size: 0.68, cardinal: true },
  { id: 'E1P18', position: [3.75, -1.45, 1.10], size: 0.60 },
  { id: 'E1P23', position: [2.25, -2.25, 1.35], size: 0.58 },
  { id: 'E1P25', position: [0.45, -2.80, 1.55], size: 0.60 },
  { id: 'E1P28', position: [-1.55, -2.70, 1.70], size: 0.60 },
  { id: 'E1P29', position: [-3.05, -1.85, 1.55], size: 0.68, cardinal: true },
  { id: 'E1P33', position: [-3.45, -0.25, 1.25], size: 0.68, cardinal: true },
  { id: 'E1P34', position: [-1.20, -0.65, 0.75], size: 0.68, cardinal: true },
  { id: 'E1P36', position: [0.20, -1.25, 1.05], size: 0.60 },
]

export const spinozaDemonstrative3DIds = new Set(
  spinozaDemonstrative3DConfig.map((item) => item.id),
)

export const spinozaDemonstrative3DConfigById = (id) =>
  spinozaDemonstrative3DConfig.find((item) => item.id === id) || null

export const spinozaDemonstrative3DCardinals = new Set(
  spinozaDemonstrative3DConfig
    .filter((item) => item.cardinal)
    .map((item) => item.id),
)
