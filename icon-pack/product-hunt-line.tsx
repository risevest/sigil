import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM13.3345 12C14.1629 12 14.8345 11.3284 14.8345 10.5C14.8345 9.67157 14.1629 9 13.3345 9H10.501V12H13.3345ZM13.3345 7C15.2675 7 16.8345 8.567 16.8345 10.5C16.8345 12.433 15.2675 14 13.3345 14H10.501V17H8.50098V7H13.3345Z" />
    </Svg>
  )
}

Icon.displayName = 'ProductHuntLine'

/**
 * Remix Icon: Product Hunt Line
 * @see {@link https://remixicon.com/icon/product-hunt-line Remix Icon Docs}
 */
export const ProductHuntLine = memo(Icon)
