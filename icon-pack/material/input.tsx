import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3.00977H3C1.9 3.00977 1 3.90977 1 5.00977V8.99977H3V4.98977H21V19.0198H3V14.9998H1V19.0098C1 20.1098 1.9 20.9898 3 20.9898H21C22.1 20.9898 23 20.1098 23 19.0098V5.00977C23 3.89977 22.1 3.00977 21 3.00977ZM11 15.9998L15 11.9998L11 7.99977V10.9998H1V12.9998H11V15.9998ZM21 3.00977H3C1.9 3.00977 1 3.90977 1 5.00977V8.99977H3V4.98977H21V19.0198H3V14.9998H1V19.0098C1 20.1098 1.9 20.9898 3 20.9898H21C22.1 20.9898 23 20.1098 23 19.0098V5.00977C23 3.89977 22.1 3.00977 21 3.00977ZM11 15.9998L15 11.9998L11 7.99977V10.9998H1V12.9998H11V15.9998Z" />
    </Svg>
  )
}

Icon.displayName = 'Input'

/**
 * Material Icon: Input
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:input Material Icon Docs}
 */
export const Input = memo(Icon)
