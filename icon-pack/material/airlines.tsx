import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.34 18H5.8L14.05 6H19.59L17.34 18ZM13 4L2 20H19L22 4H13ZM14.5 9C13.12 9 12 10.12 12 11.5C12 12.88 13.12 14 14.5 14C15.88 14 17 12.88 17 11.5C17 10.12 15.88 9 14.5 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Airlines'

/**
 * Material Icon: Airlines
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airlines Material Icon Docs}
 */
export const Airlines = memo(Icon)
