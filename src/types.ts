export interface Vulnerability {
  id: string
  name: string
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  status: 'Open' | 'In Progress' | 'Resolved'
  discoveredAt: string
  remediatedAt: string | null
}

