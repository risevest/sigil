import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.667 2c1.34 0 2.538.608 3.333 1.564A4.32 4.32 0 0 1 15.333 2h.067A2.6 2.6 0 0 1 18 4.6c0 .5-.108.973-.3 1.4h.3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h.3c-.192-.427-.3-.9-.3-1.4A2.6 2.6 0 0 1 8.6 2zM19 14h-6v5h5a1 1 0 0 0 .993-.883L19 18zm-8 0H5v4a1 1 0 0 0 1 1h5zm0-6H6a1 1 0 0 0-.993.883L5 9v3h6zm7 0h-5v4h6V9a1 1 0 0 0-1-1M8.667 4H8.6a.6.6 0 0 0-.6.6A1.4 1.4 0 0 0 9.4 6h1.576a2.334 2.334 0 0 0-2.31-2M15.4 4h-.067c-1.12 0-2.055.788-2.28 1.84l-.03.16H14.6A1.4 1.4 0 0 0 16 4.6a.6.6 0 0 0-.503-.592z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Gift2Line'
/**
 * MingCute Icon: Gift 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Gift2Line = Icon
