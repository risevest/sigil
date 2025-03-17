import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.70498 6L8.29498 7.41L12.875 12L8.29498 16.59L9.70498 18L15.705 12L9.70498 6Z" />
    </Svg>
  )
}

Icon.displayName = 'NavigateNext'

/**
 * Material Icon: Navigate Next
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:navigate_next Material Icon Docs}
 */
export const NavigateNext = memo(Icon)
