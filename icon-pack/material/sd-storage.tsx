import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 4V20H6V8.83L10.83 4H18ZM18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 7H11V11H9V7ZM12 7H14V11H12V7ZM15 7H17V11H15V7Z" />
    </Svg>
  )
}

Icon.displayName = 'SdStorage'

/**
 * Material Icon: Sd Storage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sd_storage Material Icon Docs}
 */
export const SdStorage = memo(Icon)
