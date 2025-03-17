import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 18.5H11V16.5H13V18.5ZM15 14.5H9V20.5H15V14.5ZM19 9.8V4.5H16V7.1L12 3.5L2 12.5H5L12 6.19L19 12.5H22L19 9.8Z" />
    </Svg>
  )
}

Icon.displayName = 'Roofing'

/**
 * Material Icon: Roofing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:roofing Material Icon Docs}
 */
export const Roofing = memo(Icon)
