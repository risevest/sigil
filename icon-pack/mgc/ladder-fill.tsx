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
          d="M17 1.5a1.5 1.5 0 0 1 1.493 1.356L18.5 3v18a1.5 1.5 0 0 1-2.993.144L15.5 21v-1.5h-7V21a1.5 1.5 0 0 1-2.993.144L5.5 21V3a1.5 1.5 0 0 1 2.993-.144L8.5 3v1.5h7V3A1.5 1.5 0 0 1 17 1.5m-1.5 14h-7v1h7zm0-4h-7v1h7zm0-4h-7v1h7z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LadderFill'

/**
 * MingCute Icon: Ladder Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LadderFill = memo(Icon)
