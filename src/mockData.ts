import { Vulnerability } from './types'

export const mockVulnerabilities: Vulnerability[] = [
  {
    id: '1',
    name: 'SQL Injection',
    severity: 'High',
    status: 'Open',
    discoveredAt: '2023-01-15T10:00:00Z',
    remediatedAt: null,
  },
  {
    id: '2',
    name: 'Cross-Site Scripting (XSS)',
    severity: 'Medium',
    status: 'In Progress',
    discoveredAt: '2023-02-01T14:30:00Z',
    remediatedAt: null,
  },
  {
    id: '3',
    name: 'Outdated SSL Certificate',
    severity: 'Low',
    status: 'Resolved',
    discoveredAt: '2023-03-10T09:15:00Z',
    remediatedAt: '2023-03-15T11:00:00Z',
  },
  {
    id: '4',
    name: 'Unpatched Operating System',
    severity: 'Critical',
    status: 'Open',
    discoveredAt: '2023-04-05T16:45:00Z',
    remediatedAt: null,
  },
  {
    id: '5',
    name: 'Weak Password Policy',
    severity: 'Medium',
    status: 'In Progress',
    discoveredAt: '2023-05-20T13:20:00Z',
    remediatedAt: null,
  },
]

