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
          d="M3 5a2 2 0 0 1 2-2h2a1 1 0 0 1 0 2H5v2a1 1 0 0 1-2 0zm0 14a2 2 0 0 0 2 2h2a1 1 0 1 0 0-2H5v-2a1 1 0 1 0-2 0zM19 3a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V5h-2a1 1 0 1 1 0-2zm2 16a2 2 0 0 1-2 2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0zM16.955 8.358a1 1 0 0 0-1.313-1.313l-9.9 4.243a1 1 0 0 0 .17 1.893l3.986.92.92 3.987a1 1 0 0 0 1.894.17zm-5.998 3.935-1.614-.372 4.789-2.053-2.053 4.79-.373-1.615a1 1 0 0 0-.749-.75"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'LiveLocationLine'
/**
 * MingCute Icon: Live Location Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LiveLocationLine = Icon
