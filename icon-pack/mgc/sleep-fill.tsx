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
          d="M11.5 4A1.5 1.5 0 0 0 13 5.5h3.379l-4.44 4.44A1.5 1.5 0 0 0 13 12.5h7a1.5 1.5 0 1 0 0-3h-3.379l4.44-4.44A1.5 1.5 0 0 0 20 2.5h-7A1.5 1.5 0 0 0 11.5 4M4 10.5a1.5 1.5 0 1 1 0-3h5a1.5 1.5 0 0 1 1.06 2.56L7.622 12.5H9a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1-1.06-2.56l2.439-2.44zm8 7a1.5 1.5 0 0 1 0-3h4a1.5 1.5 0 0 1 1.06 2.56l-1.439 1.44H16a1.5 1.5 0 1 1 0 3h-4a1.5 1.5 0 0 1-1.06-2.56l1.439-1.44z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SleepFill'

/**
 * MingCute Icon: Sleep Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SleepFill = memo(Icon)
