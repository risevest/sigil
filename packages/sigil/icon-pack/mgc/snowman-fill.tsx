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
          d="M12 2a5 5 0 0 1 4.33 7.5c.427.337.814.722 1.152 1.147l.197.26 1.614-1.614a1 1 0 0 1 1.497 1.32l-.083.094-2 2-.07.064a7 7 0 1 1-13.275 0l-.07-.064-2-2a1 1 0 0 1 1.32-1.497l.095.083 1.614 1.614A7 7 0 0 1 7.669 9.5 5 5 0 0 1 12 2m0 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.207-6.207-.5.5a1 1 0 0 0 1.414 1.414l.5-.5a1 1 0 0 0-1.414-1.414"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'SnowmanFill'
/**
 * MingCute Icon: Snowman Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SnowmanFill = Icon
