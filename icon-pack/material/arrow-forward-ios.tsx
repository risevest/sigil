import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.11499 20.23L7.88499 22L17.885 12L7.88499 2L6.11499 3.77L14.345 12L6.11499 20.23Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowForwardIos'

/**
 * Material Icon: Arrow Forward Ios
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_forward_ios Material Icon Docs}
 */
export const ArrowForwardIos = memo(Icon)
