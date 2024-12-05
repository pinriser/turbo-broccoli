import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VulnerabilityChart } from './VulnerabilityChart'
import { VulnerabilityTable } from './VulnerabilityTable'
import { Vulnerability } from '../types'

interface DashboardProps {
  vulnerabilities: Vulnerability[]
}

export function Dashboard({ vulnerabilities }: DashboardProps) {
  const openVulnerabilities = vulnerabilities.filter(v => v.status === 'Open').length
  const resolvedVulnerabilities = vulnerabilities.filter(v => v.status === 'Resolved').length

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Open Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{openVulnerabilities}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resolved Vulnerabilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{resolvedVulnerabilities}</p>
          </CardContent>
        </Card>
      </div>
      <VulnerabilityChart vulnerabilities={vulnerabilities} />
      <VulnerabilityTable vulnerabilities={vulnerabilities} />
    </div>
  )
}

