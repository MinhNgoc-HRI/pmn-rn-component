import React from 'react';
import { Text as RNText } from 'react-native';
import type { RefText, TextBaseProps } from '../types';
import { equal, useTextProps } from '../Utils';

export const Text = React.memo(
  React.forwardRef<RefText, TextBaseProps>((props, ref) => {
    const custom_props = useTextProps(props);
    return <RNText ref={ref} {...custom_props} />;
  }),
  equal
);
// const getFont: (weight: TextBaseProps['weight']) => string = (weight) => {

//   switch (weight) {
//     case '100':
//     case '200':
//       return 'AvertaStd-ExtraLight';
//     case '300':
//       return 'AvertaStd-Light';
//     case 'normal':
//     case '400':
//     case '500':
//       return 'AvertaStd-Regular';
//     case '600':
//       return 'AvertaStd-Semibold';
//     case '800':
//       return 'AvertaStd-ExtraBold';
//     case '900':
//       return 'AvertaStd-Black';
//     case '700':
//     case 'bold':
//       return 'AvertaStd-Bold';
//     default:
//       return 'SF-Pro-Display-Medium';
//   }
// };
/**
 * custom lai text
 * add font family
 */
// export const Text = React.forwardRef<RefText, TextBaseProps>((props, ref) => {
//   const { weight, ...rest } = props;
//   return (
//     <TextRN
//       weight={Platform.OS === 'ios' ? weight : undefined}
//       // weight={weight}
//       lineHeight={props.size + fontSizeLine(4)}
//       fontFamily={getFont(weight)}
//       color={'#000'}
//       {...rest}
//       ref={ref}
//     />
//   );
// });

// Text.displayName = 'Text';
