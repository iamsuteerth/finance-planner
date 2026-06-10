import {
  Alert,
  Text,
} from "@mantine/core";

interface Props {
  maturityValue: number;

  principal: number;

  maturityMonth: string;
}

export default function InstrumentPreview(
  props: Props
) {
  const interest =
    props.maturityValue -
    props.principal;

  return (
    <Alert
      color="blue"
      variant="light"
    >
      <Text fw={600}>
        Expected Outcome
      </Text>

      <Text size="sm">
        Principal:
        {" "}
        ₹
        {props.principal.toLocaleString()}
      </Text>

      <Text size="sm">
        Maturity:
        {" "}
        ₹
        {Math.round(
          props.maturityValue
        ).toLocaleString()}
      </Text>

      <Text size="sm">
        Interest:
        {" "}
        ₹
        {Math.round(
          interest
        ).toLocaleString()}
      </Text>

      <Text size="sm">
        Matures:
        {" "}
        {props.maturityMonth}
      </Text>
    </Alert>
  );
}