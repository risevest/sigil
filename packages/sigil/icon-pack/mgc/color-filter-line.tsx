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
          d="M12 2a6 6 0 0 1 5.58 8.21A6 6 0 1 1 12 20.472 6 6 0 1 1 6.42 10.21 6 6 0 0 1 12 2m4 10a3.98 3.98 0 0 0-2.75 1.095c.478.86.75 1.852.75 2.905a6 6 0 0 1-.75 2.906A4 4 0 1 0 16 12m-8.45.025a4 4 0 1 0 3.9 1.95 5.99 5.99 0 0 1-3.9-1.95M12 4a4 4 0 0 0-.45 7.975 6 6 0 0 1 3.9-1.95A4 4 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ColorFilterLine'
/**
 * MingCute Icon: Color Filter Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ColorFilterLine = Icon
