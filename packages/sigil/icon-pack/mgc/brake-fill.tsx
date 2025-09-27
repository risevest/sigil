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
          d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16M3.2 5.4a1 1 0 1 1 1.599 1.2A8.96 8.96 0 0 0 3 12c0 2.027.67 3.895 1.799 5.4a1 1 0 0 1-1.6 1.2A10.96 10.96 0 0 1 1 12c0-2.475.819-4.762 2.2-6.6m16.2-.2a1 1 0 0 1 1.4.2A10.96 10.96 0 0 1 23 12c0 2.475-.819 4.762-2.2 6.6a1 1 0 1 1-1.599-1.2A8.96 8.96 0 0 0 21 12c0-2.027-.67-3.895-1.799-5.4a1 1 0 0 1 .2-1.4ZM12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-6a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BrakeFill'
/**
 * MingCute Icon: Brake Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BrakeFill = Icon
