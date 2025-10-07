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
          d="M20 3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1a1 1 0 1 1-2 0H7a1 1 0 1 1-2 0H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2H4v13h16zm-8 2a1 1 0 0 1 1 1v.126a4 4 0 0 1 2.855 4.945l.109.063a1 1 0 1 1-1 1.732l-.11-.063A3.99 3.99 0 0 1 12 16a3.99 3.99 0 0 1-2.854-1.197l-.11.063a1 1 0 1 1-1-1.732l.109-.063A4.004 4.004 0 0 1 11 8.126V8a1 1 0 0 1 1-1m0 3a2 2 0 0 0-1.818 2.836l.094.178a2 2 0 0 0 3.359.138l.11-.174A2 2 0 0 0 12 10"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'SafeBoxLine'
/**
 * MingCute Icon: Safe Box Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SafeBoxLine = Icon
