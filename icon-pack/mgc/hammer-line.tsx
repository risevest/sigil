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
          d="M6 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v12a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9h4a1 1 0 0 0 1-1V7a1 1 0 0 0-.293-.707l-.657-.657A9 9 0 0 0 12.686 3zm7 6h-1v11h1zm1-2h3.585a7 7 0 0 0-4.899-2H7v2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HammerLine'

/**
 * MingCute Icon: Hammer Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HammerLine = memo(Icon)
