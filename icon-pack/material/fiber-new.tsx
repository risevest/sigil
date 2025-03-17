import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.25 12.5L4.75 9H3.5V15H4.75V11.5L7.3 15H8.5V9H7.25V12.5ZM9.5 15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5V9H9.5V15ZM19.25 9V13.5H18.13V9.99H16.88V13.51H15.75V9H14.5V14C14.5 14.55 14.95 15 15.5 15H19.5C20.05 15 20.5 14.55 20.5 14V9H19.25Z" />
    </Svg>
  )
}

Icon.displayName = 'FiberNew'

/**
 * Material Icon: Fiber New
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fiber_new Material Icon Docs}
 */
export const FiberNew = memo(Icon)
