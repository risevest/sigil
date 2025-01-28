import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.9711 17.1715 19.5568 18.5858 16.0223 15.0513 15.9486 15.125 15.2415 18.6605 13.8273 20.0747 9.58466 15.8321 4.63492 20.7818 3.2207 19.3676 8.17045 14.4179 3.92781 10.1752 5.34202 8.76101 8.87756 8.0539 8.95127 7.98019 5.4147 4.44362 6.82892 3.02941 20.9711 17.1715ZM18.8508 12.2228 20.1913 10.8823 20.8984 11.5894 22.3126 10.1752 13.8273 1.68994 12.4131 3.10416 13.1202 3.81126 11.7797 5.15176 18.8508 12.2228Z" />
    </Svg>
  )
}

Icon.displayName = 'UnpinFill'

/**
 * Remix Icon: Unpin Fill
 * @see {@link https://remixicon.com/icon/unpin-fill Remix Icon Docs}
 */
export const UnpinFill = memo(Icon)
