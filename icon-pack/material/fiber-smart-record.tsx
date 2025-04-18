import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 4C4.58 4 1 7.58 1 12C1 16.42 4.58 20 9 20C13.42 20 17 16.42 17 12C17 7.58 13.42 4 9 4ZM9 18C5.69 18 3 15.31 3 12C3 8.69 5.69 6 9 6C12.31 6 15 8.69 15 12C15 15.31 12.31 18 9 18ZM17 4.26V6.35C19.33 7.17 21 9.39 21 12C21 14.61 19.33 16.83 17 17.65V19.74C20.45 18.85 23 15.73 23 12C23 8.27 20.45 5.15 17 4.26Z" />
    </Svg>
  )
}

Icon.displayName = 'FiberSmartRecord'

/**
 * Material Icon: Fiber Smart Record
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fiber_smart_record Material Icon Docs}
 */
export const FiberSmartRecord = memo(Icon)
