import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 17V11C19 9.9 18.1 9 17 9H6V7L3 10L6 13V11H10V14H3V17C3 18.1 3.9 19 5 19H7C7 20.66 8.34 22 10 22C11.66 22 13 20.66 13 19H21V17H19ZM10 20C9.45 20 9 19.55 9 19C9 18.45 9.45 18 10 18C10.55 18 11 18.45 11 19C11 19.55 10.55 20 10 20ZM17 14H13V11H17V14ZM16 2V4H8V6H16V8L19 5L16 2Z" />
    </Svg>
  )
}

Icon.displayName = 'RvHookup'

/**
 * Material Icon: Rv Hookup
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rv_hookup Material Icon Docs}
 */
export const RvHookup = memo(Icon)
