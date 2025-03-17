import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 7V4H5V7H2V20H10V16H14V20H22V7H19ZM20 18H16V14H8V18H4V9H7V6H17V9H20V18ZM8 8H10V9H8V12H11V11H9V10H11V7H8V8ZM15 9H14V7H13V10H15V12H16V7H15V9Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalConvenienceStore'

/**
 * Material Icon: Local Convenience Store
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_convenience_store Material Icon Docs}
 */
export const LocalConvenienceStore = memo(Icon)
