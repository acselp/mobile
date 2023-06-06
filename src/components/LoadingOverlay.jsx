import { Heading, HStack, Row, Spinner } from "native-base";

export default function LoadingOverlay() {
  return (
    <Row height={"100%"} width={"full"} space={2} justifyContent="center">
      <Spinner size={"lg"} accessibilityLabel="Loading posts" />
    </Row>
  )
}
