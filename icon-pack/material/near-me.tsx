import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.27 6.73L13.03 16.86L11.39 12.61L10.57 12.29L7.14 10.96L17.27 6.73ZM21 3L3 10.53V11.51L9.84 14.16L12.48 21H13.46L21 3Z" />
    </Svg>
  )
}

Icon.displayName = 'NearMe'

/**
 * Material Icon: Near Me
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:near_me Material Icon Docs}
 */
export const NearMe = memo(Icon)
