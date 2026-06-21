export const agencies = [
  {
    id:agency-1',
   : 'Digital Agency',
    whiteLabelDomain 'example.com',
    status 'active',
    createdAt: new Date('2022-01-01T00:00:00.000Z'),
    updatedAt: new Date('2-01-01T00:00:00.000Z'),
  },
];

export const projects = [
  {
    id: 'project-1',
    name: 'Client Project',
    agencyId: 'agency-1',
    stages: [
      {
        id: 'stage-1',
        name: 'Discovery',
        status: 'in_progress',
      },
      {
        id: 'stage-2',
        name: 'Design',
        status: 'pending',
      },
      {
        id: 'stage-3',
        name: 'Development',
        status: 'pending',
      },
      {
        id: 'stage-4',
        name: 'Review',
        status: 'pending',
      },
      {
        id: 'stage-5',
        name: 'Live',
        status: 'pending',
      },
    ],
    deliverables: [
      {
        id: 'deliverable-1',
        name: 'Project Plan',
        stageId: 'stage-1',
        status: 'approved',
      },
      {
        id: 'deliverable-2',
        name: 'Design Concept',
        stageId: 'stage-2',
        status: 'pending',
      },
    ],
  },
];

export const invoices = [
  {
    id: 'invoice-1',
    projectId: 'project-1',
    amount: 1000,
    status: 'pending',
  },
];

export const metrics = [
  { id: 'pipeline', label: 'Pipeline Value', value: '$486K', change: '+18.4%', trend: 'up', detail: 'Expansion-ready value this quarter' },
  { id: 'cycle', label: 'Cycle Time', value: '2.1d', change: '-31%', trend: 'down', detail: 'Median time from intake to decision' },
]

export const records = [
  { id: 'rec_001', name: 'Primary workflow intake', customer: 'Current workspace', status: 'queued', owner: 'Operations', value: 82000, priority: 'high', confidence: 96, cycleTime: '1.8d', nextStep: 'Prepare owner-ready output', notes: 'Generated contract fallback preserved deploy compatibility.', createdAt: '2026-05-01' },
  { id: 'rec_002', name: 'Risk review queue', customer: 'Current workspace', status: 'in_review', owner: 'Revenue', value: 64000, priority: 'medium', confidence: 88, cycleTime: '2.4d', nextStep: 'Resolve missing evidence', notes: 'Canonical record shape supports dashboard and feature screens.', createdAt: '2026-05-03' },
  { id: 'rec_003', name: 'Client-ready package', customer: 'Current workspace', status: 'approved', owner: 'Success', value: 41000, priority: 'medium', confidence: 91, cycleTime: '2.0d', nextStep: 'Export report', notes: 'Workflow output is ready for buyer review.', createdAt: '2026-05-04' },
]

export const activity = [
  { id: 'evt_1', title: 'Workflow intake normalized', actor: 'NEXUS OS', timestamp: '2026-05-23T10:30:00Z', status: 'queued' },
  { id: 'evt_2', title: 'Deploy contract checked', actor: 'BUILD gate', timestamp: '2026-05-23T10:45:00Z', status: 'approved' },
]
