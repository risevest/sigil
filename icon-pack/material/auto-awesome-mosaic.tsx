import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 5V19C3 20.1 3.89 21 5 21H11V3H5C3.89 3 3 3.9 3 5ZM9 19H5V5H9V19Z" />
      <Path d="M19 3H13V11H21V5C21 3.9 20.1 3 19 3ZM19 9H15V5H19V9Z" />
      <Path d="M13 21H19C20.1 21 21 20.1 21 19V13H13V21ZM15 15H19V19H15V15Z" />
    </Svg>
  )
}

Icon.displayName = 'AutoAwesomeMosaic'

/**
 * Material Icon: Auto Awesome Mosaic
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:auto_awesome_mosaic Material Icon Docs}
 */
export const AutoAwesomeMosaic = memo(Icon)
