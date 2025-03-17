import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 9V7H8V17H16V15H10V13H16V11H10V9H16Z" />
    </Svg>
  )
}

Icon.displayName = 'EMobiledata'

/**
 * Material Icon: E Mobiledata
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:e_mobiledata Material Icon Docs}
 */
export const EMobiledata = memo(Icon)
