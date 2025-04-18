import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.48497 3.29453H20.655C21.765 3.29453 22.655 4.18453 22.655 5.29453V17.2945C22.655 17.6345 22.575 17.9545 22.425 18.2345L20.655 16.4645V11.2945H15.485L11.485 7.29453H20.655V5.29453H9.48497L7.48497 3.29453ZM21.145 22.6045L17.825 19.2945H4.65497C3.54497 19.2945 2.65497 18.4045 2.65497 17.2945L2.66497 5.29453C2.66497 4.95453 2.74497 4.63453 2.89497 4.36453L1.34497 2.80453L2.75497 1.39453L22.555 21.1945L21.145 22.6045ZM4.65497 6.12453V7.29453H5.82497L4.65497 6.12453ZM15.825 17.2945L9.82497 11.2945H4.65497V17.2945H15.825Z" />
    </Svg>
  )
}

Icon.displayName = 'CreditCardOff'

/**
 * Material Icon: Credit Card Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:credit_card_off Material Icon Docs}
 */
export const CreditCardOff = memo(Icon)
