import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
    it('renders the system heading', () => {
        render(<App />)
        const heading = screen.getByRole('heading', { level: 1 })
        expect(heading.textContent).toBe('Consumer Complaint Automation System')
    })
})
