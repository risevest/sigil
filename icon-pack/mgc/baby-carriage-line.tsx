import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7.746 2.609a1.476 1.476 0 0 1 1.817.656l.06.117L12.643 10H18V8.5a2.5 2.5 0 0 1 2.336-2.495L20.5 6h.5a1 1 0 0 1 .117 1.993L21 8h-.5a.5.5 0 0 0-.492.41L20 8.5V11a9 9 0 0 1-2.489 6.213 2.5 2.5 0 1 1-3.506 2.451L14 19.485a8.999 8.999 0 0 1-5.629.123L8 19.485v.015a2.5 2.5 0 1 1-3.511-2.287A9 9 0 0 1 7.746 2.61ZM5.5 19a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m11 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.428-7H4.072a7 7 0 0 0 13.856 0M8.012 4.67a7 7 0 0 0-3.89 5.03l-.05.3h6.372z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BabyCarriageLine'

/**
 * MingCute Icon: Baby Carriage Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BabyCarriageLine = memo(Icon)
