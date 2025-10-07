import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M4.217 5.842c-.408-1.02.605-2.033 1.625-1.625L18.926 9.45c1.001.401 1.059 1.797.094 2.28l-3.918 1.958 4.676 4.676a1 1 0 0 1-1.414 1.414l-4.676-4.676-1.959 3.918c-.482.965-1.878.907-2.278-.095zm2.507.882 3.963 9.908 1.833-3.665a1 1 0 0 1 .447-.447l3.665-1.833z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Cursor2Line'
/**
 * MingCute Icon: Cursor 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Cursor2Line = Icon
