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
          d="M18 2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-3v-6a3 3 0 0 0-3-3h-1a3 3 0 0 0-3 3v6H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-6 12a1 1 0 0 1 .993.883L13 15v6h-3v-6a1 1 0 0 1 .883-.993L11 14zm6-10H5a1 1 0 0 0-.993.883L4 5v1a2 2 0 0 0 3.94.49l.032-.155a1 1 0 0 1 .898-.831L9 5.5a1 1 0 0 1 .993.883L10 6.5a1.5 1.5 0 0 0 2.993.144L13 6.5a1 1 0 0 1 .883-.993l.135-.007a1 1 0 0 1 .984.723l.026.112a2 2 0 0 0 3.967-.186L19 6V5a1 1 0 0 0-.883-.993z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Store2Fill'
/**
 * MingCute Icon: Store 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Store2Fill = Icon
