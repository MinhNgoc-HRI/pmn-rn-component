import * as React from 'react';
import {
  Box,
  Text,
  fontSizeLine,
  getOffset,
  heightLize,
  widthLize,
} from 'pmn-rn-component';

export default function App() {
  console.log(getOffset());
  return (
    <Box flex={1} middle center>
      <Box height={heightLize(50)} width={widthLize(50)} />
      <Text size={fontSizeLine(20)} color="#000">
        Hello
      </Text>
    </Box>
  );
}
