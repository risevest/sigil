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
          d="M17.03 14.758a1 1 0 0 1 1.962.37l-.022.115L18.28 18H19v-1a1 1 0 0 1 1.993-.116L21 17v1a1 1 0 0 1 .117 1.993L21 20v1a1 1 0 0 1-1.993.117L19 21v-1h-2a1 1 0 0 1-.993-1.113l.023-.13zM13.5 14a2.5 2.5 0 0 1 2.5 2.5v.325c0 .675-.241 1.327-.68 1.839L14.174 20H15a1 1 0 0 1 0 2h-3a1 1 0 0 1-.76-1.65l2.561-2.988a.825.825 0 0 0 .199-.537V16.5a.5.5 0 1 0-1 0 1 1 0 1 1-2 0 2.5 2.5 0 0 1 2.5-2.5M12 3a9 9 0 0 1 8.796 10.913 2.996 2.996 0 0 0-2.068-1.823 3 3 0 0 0-2.724.67A4.5 4.5 0 0 0 9 16.5c0 .886.384 1.682.994 2.23l-.272.318a2.998 2.998 0 0 0-.68 1.455A9 9 0 0 1 12 3m-1 3a1 1 0 0 0-1 1v3H9a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HoursFill'

/**
 * MingCute Icon: Hours Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HoursFill = memo(Icon)
