import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 24H0V0h24zM.742 12.594l-.002-.012-.035-.071-.004-.02.004-.014.035-.071q.005-.016-.005-.024l-.01-.004-.428-.017-.02.005-.013.01-.074.105-.004.014.004.012.074.104.016.012.017.004.427-.017q.016-.004.018-.016m.113.264-.002-.013-.093-.185-.01-.01-.011-.003-.43.018-.012.005-.007.008-.093.201a.03.03 0 0 0 .008.029l.014.004.614-.034q.019-.005.022-.02m-.002-.715a.02.02 0 0 0-.006-.027l-.014-.006-.614-.034a.023.023 0 0 0-.024.017l.002.015.093.201.008.01.011.004.43.017.012-.003.01-.01z" />
        <Path
          fill={color}
          d="M19.5 18a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h4.379L5.282 7.404a1.5 1.5 0 1 1 2.122-2.122L16.5 14.38V10a1.5 1.5 0 1 1 3 0z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ArrowRightDownFill'
/**
 * MingCute Icon: Arrow Right Down Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArrowRightDownFill = Icon
