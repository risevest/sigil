import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 11V3H13L16.29 6.29L6.29 16.29L3 13V21H11L7.71 17.71L17.71 7.71L21 11Z" />
    </Svg>
  )
}

Icon.displayName = 'OpenInFull'

/**
 * Material Icon: Open In Full
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:open_in_full Material Icon Docs}
 */
export const OpenInFull = memo(Icon)
