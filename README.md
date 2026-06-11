# Finance Planner

A personal finance forecasting tool built with React, TypeScript, Mantine, and Zustand.

The planner projects:

* Cash balance
* Investments
* Fixed Deposits (FD)
* Recurring Deposits (RD)
* Net worth

It also supports scenario planning through temporary expenses, bonus income, salary changes, and new investment instruments.

---

## Features

### Forecasting

Generate monthly projections for:

* Cash balance
* Investment corpus
* FD value
* RD value
* Net worth

---

### Scenario Lab

Create temporary scenarios without modifying the base plan.

Supported scenarios:

* One-off expense
* Bonus income
* Salary change
* Fixed deposit
* Recurring deposit

---

### Saved Scenarios

Save and reload frequently used scenario setups.

---

### Import / Export

Export the complete planner state to JSON.

Import previously exported plans to restore a planner instantly.

---

### Dashboard

Includes:

* Summary cards
* Wealth projection chart
* Asset breakdown chart
* Forecast table
* Net worth table
* Cashflow table
* Instruments table
* Event timeline

---

### Theme Support

* Light mode
* Dark mode

Theme preference is saved automatically.

---

## Project Structure

```text
src
├── app
├── components
├── data
├── engine
├── hooks
├── store
└── types
```

### app

Application setup and theme management.

### components

UI components grouped by feature.

### data

Default planner configuration.

### engine

Simulation and calculation logic.

### hooks

Reusable React hooks.

### store

Zustand state management.

### types

Shared TypeScript types.

---

## Configuration

The planner starts from `data/config.json`.

Example:

```json
{
  "forecast": {
    "startMonth": "2026-07",
    "totalMonths": 36
  },

  "income": {
    "monthly": 114400
  },

  "cash": {
    "openingBalance": 294400
  },

  "investments": {
    "openingCorpus": 800000,

    "schedule": {
      "2026-07": 40000
    }
  }
}
```

---

## Sample Configuration

```json
{
  "forecast": {
    "startMonth": "2026-07",
    "totalMonths": 36
  },

  "income": {
    "monthly": 114400
  },

  "cash": {
    "openingBalance": 294400
  },

  "expenses": {
    "defaultMonthly": 35000,
    "overrides": {
      "2026-07": 29000
    }
  },

  "investments": {
    "openingCorpus": 800000,

    "schedule": {
      "2026-07": 40000,
      "2027-01": 45000,
      "2027-07": 50000
    }
  },

  "creditCardBills": [
    {
      "month": "2026-07",
      "amount": 30040
    }
  ],

  "oneOffExpenses": [
    {
      "id": "expense-1",
      "month": "2026-09",
      "label": "Vacation",
      "amount": 43000
    }
  ],

  "instruments": [
    {
      "id": "fd-1",
      "type": "FD",
      "name": "SBI FD",
      "principal": 100000,
      "rate": 7.2,
      "startMonth": "2026-08",
      "durationMonths": 12
    }
  ],

  "salaryChanges": [
    {
      "id": "salary-1",
      "effectiveMonth": "2028-01",
      "newMonthlyIncome": 145000,
      "description": "Promotion"
    }
  ],

  "bonusIncome": [
    {
      "id": "bonus-1",
      "month": "2028-03",
      "amount": 100000,
      "description": "Annual Bonus"
    }
  ]
}
```

---

## Export Format

Exports contain:

```json
{
  "version": 1,
  "baseConfig": {},
  "overrides": {}
}
```

The exported file can be imported later to restore the planner state.

---

## Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Built With

* React
* TypeScript
* Vite
* Mantine
* Mantine Charts
* Zustand
* Zod
* Tabler Icons