import type { IconDefinition, IconId } from './types'

/** ALSHAM Icon System™ — 48×48 grid · line art · 1.5–2px stroke */
export const ICON_REGISTRY: Record<IconId, IconDefinition> = {
  'ICO-001': { id: 'ICO-001', name: 'Foundation', category: 'Foundation', paths: ['M20 40V14l4-6 4 6v26', 'M16 40h16', 'M18 40V18h12v22'] },
  'ICO-002': { id: 'ICO-002', name: 'Infrastructure', category: 'Infrastructure', paths: ['M6 32h36', 'M10 32V20l14-8 14 8v12', 'M18 32V24h12v8'] },
  'ICO-003': { id: 'ICO-003', name: 'Expansion', category: 'Expansion', paths: ['M24 8v32', 'M8 24h32', 'M12 12l24 24', 'M36 12L12 36'] },
  'ICO-004': { id: 'ICO-004', name: 'Institutional', category: 'Institutional', paths: ['M8 38V18l16-10 16 10v20', 'M14 38V22h6v16', 'M28 38V22h6v16', 'M8 18h32'] },
  'ICO-005': { id: 'ICO-005', name: 'Assets', category: 'Assets', paths: ['M10 34l14-22 14 22', 'M14 34h20', 'M24 12v6', 'M20 20h8'] },
  'ICO-006': { id: 'ICO-006', name: 'Management', category: 'Management', paths: ['M12 10h24v28H12z', 'M16 16h16', 'M16 22h16', 'M16 28h10', 'M30 30l6 6'] },
  'ICO-007': { id: 'ICO-007', name: 'Authority', category: 'Authority', paths: ['M24 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z', 'M12 40h24'] },
  'ICO-008': { id: 'ICO-008', name: 'Knowledge', category: 'Knowledge', paths: ['M10 12h28v24H10z', 'M14 16h20', 'M14 22h20', 'M14 28h14', 'M24 8v4'] },
  'ICO-009': { id: 'ICO-009', name: 'Research', category: 'Research', paths: ['M20 34l-8-8 14-14 8 8-14 14z', 'M12 26l6 6', 'M30 10l4-4 4 4-4 4'] },
  'ICO-010': { id: 'ICO-010', name: 'Governance', category: 'Governance', paths: ['M24 8a10 10 0 1 1 0 20 10 10 0 0 1 0-20z', 'M24 14v10', 'M24 28v2', 'M8 38h32'] },
  'ICO-011': { id: 'ICO-011', name: 'Legacy', category: 'Legacy', paths: ['M24 6v8', 'M14 14h20l-2 24H16L14 14z', 'M18 22h12', 'M18 28h12', 'M12 40h24'] },
  'ICO-012': { id: 'ICO-012', name: 'Vault', category: 'Vault', paths: ['M10 16h28v22H10z', 'M16 16v-4a8 8 0 0 1 16 0v4', 'M24 26a4 4 0 1 0 0 0.01', 'M24 30v4'] },
  'ICO-013': { id: 'ICO-013', name: 'Observatory', category: 'Observatory', paths: ['M24 8l12 20H12L24 8z', 'M8 28h32', 'M18 28v12', 'M30 28v12', 'M14 40h20', 'M24 14a3 3 0 1 0 0 0.01'] },
  'ICO-014': { id: 'ICO-014', name: 'Select', category: 'Select', paths: ['M24 10l14 8v14H10V18l14-8z', 'M24 22l6 4v6H18v-6l6-4z', 'M20 32h8'] },
  'ICO-015': { id: 'ICO-015', name: 'Project', category: 'Project', paths: ['M8 12h32v24H8z', 'M12 16h24', 'M12 22h8', 'M24 22h12', 'M12 28h20', 'M12 34h14'] },
  'ICO-016': { id: 'ICO-016', name: 'Architecture', category: 'Architecture', paths: ['M6 36L24 10l18 26', 'M12 36h24', 'M18 36V26h12v10', 'M24 18v4'] },
  'ICO-017': { id: 'ICO-017', name: 'Strategy', category: 'Strategy', paths: ['M8 36h32', 'M12 36V20l12-8 12 8v16', 'M20 36V24h8v12', 'M24 12v4'] },
  'ICO-018': { id: 'ICO-018', name: 'Evidence', category: 'Evidence', paths: ['M12 8h24v32H12z', 'M16 14h16', 'M16 20h16', 'M16 26h12', 'M28 32l8 8', 'M30 30l4 4'] },
  'ICO-019': { id: 'ICO-019', name: 'Canon', category: 'Canon', paths: ['M14 8h20v32H14z', 'M18 8V6h12v2', 'M18 14h12', 'M18 20h12', 'M18 26h8', 'M10 12h4v24h-4z'] },
  'ICO-020': { id: 'ICO-020', name: 'Documentation', category: 'Documentation', paths: ['M14 6h16l6 6v28H14z', 'M30 6v6h6', 'M18 18h16', 'M18 24h16', 'M18 30h12'] },
  'ICO-021': { id: 'ICO-021', name: 'Automation', category: 'Automation', paths: ['M16 20h16v12H16z', 'M20 16V12h8v4', 'M12 32h24', 'M8 24h4', 'M36 24h4', 'M24 8v4'] },
  'ICO-022': { id: 'ICO-022', name: 'AI', category: 'AI', paths: ['M16 16h16v16H16z', 'M20 20h8v8h-8z', 'M12 24h4', 'M32 24h4', 'M24 12v4', 'M24 32v4'] },
  'ICO-023': { id: 'ICO-023', name: 'Security', category: 'Security', paths: ['M24 8l14 6v12c0 10-14 14-14 14S10 36 10 26V14l14-6z', 'M24 22a3 3 0 1 0 0 0.01'] },
  'ICO-024': { id: 'ICO-024', name: 'Community', category: 'Community', paths: ['M16 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12z', 'M32 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12z', 'M8 38c0-6 6-10 16-10s16 4 16 10'] },
  'ICO-025': { id: 'ICO-025', name: 'Publishing', category: 'Publishing', paths: ['M10 10h20v28H10z', 'M14 14h12', 'M14 20h12', 'M14 26h8', 'M30 14h8v20h-8z'] },
  'ICO-026': { id: 'ICO-026', name: 'Education', category: 'Education', paths: ['M24 10L8 18v14l16 8 16-8V18L24 10z', 'M24 18v22', 'M16 22v10', 'M32 22v10'] },
  'ICO-027': { id: 'ICO-027', name: 'Finance', category: 'Finance', paths: ['M12 36h24', 'M16 36V20c0-4 4-8 8-8s8 4 8 8v16', 'M20 28h8', 'M24 12V8'] },
  'ICO-028': { id: 'ICO-028', name: 'Health', category: 'Health', paths: ['M24 10v28', 'M10 24h28', 'M18 14h12v20H18z', 'M14 18h20'] },
  'ICO-029': { id: 'ICO-029', name: 'Law', category: 'Law', paths: ['M24 8v6', 'M12 14h24', 'M14 14v6c0 6 4 10 10 10s10-4 10-10v-6', 'M10 38h28'] },
  'ICO-030': { id: 'ICO-030', name: 'Technology', category: 'Technology', paths: ['M10 14h28v20H10z', 'M14 18h20', 'M18 24h4', 'M26 24h4', 'M18 30h12', 'M16 10h16v4H16z'] },
  'ICO-031': { id: 'ICO-031', name: 'Culture', category: 'Culture', paths: ['M12 32c0-8 5-14 12-14s12 6 12 14', 'M18 20a6 6 0 1 1 12 0', 'M8 36h32', 'M24 8v4'] },
  'ICO-032': { id: 'ICO-032', name: 'Innovation', category: 'Innovation', paths: ['M24 8l4 12h12l-10 8 4 12-10-8-10 8 4-12-10-8h12z', 'M8 40h32'] },
  'ICO-033': { id: 'ICO-033', name: 'Compass', category: 'Compass', paths: ['M24 8a16 16 0 1 1 0 32 16 16 0 0 1 0-32z', 'M24 14l4 10 10 4-10 4-4 10-4-10-10-4 10-4z'] },
  'ICO-034': { id: 'ICO-034', name: 'Codex', category: 'Codex', paths: ['M12 8h24v32H12z', 'M16 12h16', 'M16 18h16', 'M16 24h12', 'M8 10h4v28H8z', 'M36 10h4v28h-4z'] },
  'ICO-035': { id: 'ICO-035', name: 'Archive', category: 'Archive', paths: ['M8 14h32v24H8z', 'M12 14V10h24v4', 'M16 22h16', 'M16 28h12', 'M20 34h8'] },
  'ICO-036': { id: 'ICO-036', name: 'Map', category: 'Map', paths: ['M8 12l8-4 8 4 8-4 8 4v24l-8 4-8-4-8 4-8-4V12z', 'M16 8v28', 'M24 12v28', 'M32 8v28'] },
  'ICO-037': { id: 'ICO-037', name: 'Constellation', category: 'Constellation', paths: ['M12 16h4v4h-4z', 'M32 12h4v4h-4z', 'M20 28h4v4h-4z', 'M34 30h4v4h-4z', 'M14 16l18-2', 'M16 20l16 8', 'M24 20v8'] },
  'ICO-038': { id: 'ICO-038', name: 'Navigation', category: 'Navigation', paths: ['M10 24h20', 'M22 16l8 8-8 8', 'M8 8h8', 'M32 8h8', 'M8 32h8', 'M32 32h8'] },
  'ICO-039': { id: 'ICO-039', name: 'Engineering', category: 'Engineering', paths: ['M12 30h24', 'M16 30V18l8-6 8 6v12', 'M20 22h8v8h-8z', 'M24 12v4', 'M10 34h28'] },
  'ICO-040': { id: 'ICO-040', name: 'Heritage', category: 'Heritage', paths: ['M24 8l6 12h12l-10 8 4 12-12-8-12 8 4-12-10-8h12z', 'M8 38h32', 'M18 38V32h12v6'] },
}

export const ICON_LIST = Object.values(ICON_REGISTRY)

export const JOURNEY_ICON_MAP: Record<string, IconId> = {
  '00': 'ICO-014',
  '01': 'ICO-001',
  '02': 'ICO-023',
  '03': 'ICO-022',
  '04': 'ICO-026',
  '05': 'ICO-011',
  '06': 'ICO-027',
  '07': 'ICO-003',
  '08': 'ICO-012',
}

export const VERTICAL_ICON_MAP: Record<string, IconId> = {
  Saúde: 'ICO-028',
  Jurídico: 'ICO-029',
  Educação: 'ICO-026',
  Negócios: 'ICO-027',
  'Setor Público': 'ICO-004',
  'Mídia & Influência': 'ICO-025',
}
