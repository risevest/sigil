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
          d="M9 2a1 1 0 0 0 0 2h2v2H9.442a3 3 0 0 0-2.847 2.051l-1.236 3.71A7 7 0 0 0 5 13.973V19a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5.026a7 7 0 0 0-.36-2.214l-1.236-3.709A3 3 0 0 0 14.56 6H13V4a1 1 0 1 0 0-2zm1 11H7.096c.135-.683.405-1.342.625-2H10a1 1 0 1 1 0 2"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ShowerGelFill'
/**
 * MingCute Icon: Shower Gel Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShowerGelFill = Icon
