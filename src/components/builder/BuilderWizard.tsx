import {
  Button,
  Group,
  Stepper,
} from "@mantine/core";

import {
  useState,
} from "react";

import ForecastStep
  from "./ForecastStep";

import BaselineStep
  from "./BaselineStep";

import InvestmentsStep
  from "./InvestmentsStep";

import EventsStep
  from "./EventsStep";

import InstrumentsStep
  from "./InstrumentsStep";

import ReviewStep
  from "./ReviewStep";

export default function BuilderWizard() {
  const [
    active,
    setActive,
  ] = useState(0);

  const nextStep =
    () =>
      setActive(
        (current) =>
          Math.min(
            current + 1,
            5
          )
      );

  const prevStep =
    () =>
      setActive(
        (current) =>
          Math.max(
            current - 1,
            0
          )
      );

  return (
    <>
      <Stepper
        active={active}
        allowNextStepsSelect={
          false
        }
      >
        <Stepper.Step
          label="Forecast"
          description="Timeline"
        >
          <ForecastStep />
        </Stepper.Step>

        <Stepper.Step
          label="Baseline"
          description="Income & Cash"
        >
          <BaselineStep />
        </Stepper.Step>

        <Stepper.Step
          label="Investments"
          description="Recurring Investments"
        >
          <InvestmentsStep />
        </Stepper.Step>

        <Stepper.Step
          label="Events"
          description="Bonuses & Expenses"
        >
          <EventsStep />
        </Stepper.Step>

        <Stepper.Step
          label="Instruments"
          description="FD & RD"
        >
          <InstrumentsStep />
        </Stepper.Step>

        <Stepper.Step
          label="Review"
          description="Generate"
        >
          <ReviewStep />
        </Stepper.Step>
      </Stepper>

      <Group
        justify="center"
        gap="xl"
        mt="xl"
      >
        <Button
          variant="default"
          disabled={
            active === 0
          }
          onClick={
            prevStep
          }
        >
          Back
        </Button>

        <Button
          onClick={
            nextStep
          }
          disabled={
            active === 5
          }
        >
          Next
        </Button>
      </Group>
    </>
  );
}