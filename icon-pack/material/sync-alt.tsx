import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.41 13.41L6 12L2 16L6 20L7.41 18.59L5.83 17H21V15H5.83L7.41 13.41Z" />
      <Path d="M16.59 10.59L18 12L22 8L18 4L16.59 5.41L18.17 7H3V9H18.17L16.59 10.59Z" />
    </Svg>
  )
}

Icon.displayName = 'SyncAlt'

/**
 * Material Icon: Sync Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sync_alt Material Icon Docs}
 */
export const SyncAlt = memo(Icon)
