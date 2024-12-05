import { useState } from 'react'
import { VulnerabilityForm } from './components/VulnerabilityForm'
import { Dashboard } from './components/Dashboard'
import { Vulnerability } from './types'
import { mockVulnerabilities } from './mockData'

function App() {
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>(mockVulnerabilities)

  const handleVulnerabilitySubmit = (newVulnerability: Vulnerability) => {
    setVulnerabilities([...vulnerabilities, newVulnerability])
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Vulnerability Analytics Dashboard</h1>
      <VulnerabilityForm onSubmit={handleVulnerabilitySubmit} />
      <Dashboard vulnerabilities={vulnerabilities} />
    </div>
  )
}

export default App

