import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.8 2.5L11.6 9.2L10.39 8.16L13.99 6.08L9.41 1.5L8 2.91L10.74 5.65L5 8.96L3.81 13.25L6.27 17.5L8 16.5L5.97 12.98L6.32 11.68L9.5 13.5L10 22.5H12L12.5 12.5L21 3.9L19.8 2.5Z" />
      <Path d="M5 7.5C6.10457 7.5 7 6.60457 7 5.5C7 4.39543 6.10457 3.5 5 3.5C3.89543 3.5 3 4.39543 3 5.5C3 6.60457 3.89543 7.5 5 7.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SportsMartialArts'

/**
 * Material Icon: Sports Martial Arts
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sports_martial_arts Material Icon Docs}
 */
export const SportsMartialArts = memo(Icon)
