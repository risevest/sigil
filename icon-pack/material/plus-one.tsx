import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.5 8.5H8.5V12.5H4.5V14.5H8.5V18.5H10.5V14.5H14.5V12.5H10.5V8.5ZM15 6.58V8.4L17.5 7.9V18.5H19.5V5.5L15 6.58Z" />
    </Svg>
  )
}

Icon.displayName = 'PlusOne'

/**
 * Material Icon: Plus One
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:plus_one Material Icon Docs}
 */
export const PlusOne = memo(Icon)
