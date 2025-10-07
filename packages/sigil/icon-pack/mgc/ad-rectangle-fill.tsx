import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM9.22 8h-.44a2 2 0 0 0-1.894 1.36l-.046.155-1.31 5.243a1 1 0 0 0 1.905.596l.035-.111L7.78 14h2.44l.31 1.242a1 1 0 0 0 1.962-.37l-.022-.114-1.31-5.243A2 2 0 0 0 9.22 8M18 8a1 1 0 0 0-.993.883L17 9v1.17a3 3 0 1 0-1.176 5.824L16 16h2a1 1 0 0 0 .993-.883L19 15V9a1 1 0 0 0-1-1m-2 4a1 1 0 0 1 .993.883L17 13v1h-1a1 1 0 1 1 0-2m-6.78-2 .5 2H8.28l.5-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'AdRectangleFill'
/**
 * MingCute Icon: Ad Rectangle Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AdRectangleFill = Icon
