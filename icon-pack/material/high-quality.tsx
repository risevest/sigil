import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V6H19V18ZM7.5 13H9.5V15H11V9H9.5V11.5H7.5V9H6V15H7.5V13ZM14 15H14.75V16.5H16.25V15H17C17.55 15 18 14.55 18 14V10C18 9.45 17.55 9 17 9H14C13.45 9 13 9.45 13 10V14C13 14.55 13.45 15 14 15ZM14.5 10.5H16.5V13.5H14.5V10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'HighQuality'

/**
 * Material Icon: High Quality
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:high_quality Material Icon Docs}
 */
export const HighQuality = memo(Icon)
