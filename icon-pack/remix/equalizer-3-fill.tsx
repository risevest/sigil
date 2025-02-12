import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 3V6H3V8H7V11H10V3H7ZM12 8H21V6H12V8ZM17 13V16H21V18H17V21H14V13H17ZM12 18H3V16H12V18Z" />
    </Svg>
  )
}

Icon.displayName = 'Equalizer3Fill'

/**
 * Remix Icon: Equalizer 3 Fill
 * @see {@link https://remixicon.com/icon/equalizer-3-fill Remix Icon Docs}
 */
export const Equalizer3Fill = memo(Icon)
