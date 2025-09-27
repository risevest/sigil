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
          d="M16.105 2a2 2 0 0 1 1.964 1.621l.024.158 1.777 16a2 2 0 0 1-1.84 2.216l-.147.005h-3.08a2 2 0 0 1-1.911-1.407l-.042-.16L12 16.61l-.85 3.824a2 2 0 0 1-1.788 1.56L9.198 22h-3.08a2 2 0 0 1-2-2.074l.011-.147 1.778-16a2 2 0 0 1 1.828-1.773L7.895 2zm.333 5H7.562L6.117 20h3.08l1.827-8.217a1 1 0 0 1 1.952 0L14.802 20h3.08L16.439 7Zm-.333-3h-8.21l-.111 1h8.432z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'TrouserLine'
/**
 * MingCute Icon: Trouser Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TrouserLine = Icon
