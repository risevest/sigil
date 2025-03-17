import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM13 4.07C16.94 4.56 20 7.92 20 12C20 16.08 16.95 19.44 13 19.93V4.07Z" />
    </Svg>
  )
}

Icon.displayName = 'Contrast'

/**
 * Material Icon: Contrast
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:contrast Material Icon Docs}
 */
export const Contrast = memo(Icon)
