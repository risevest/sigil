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
          d="M5.5 5a1.5 1.5 0 1 0-3 0v14A1.5 1.5 0 0 0 4 20.5h16a1.5 1.5 0 0 0 0-3H5.5zm4 7a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0zM12 5.5A1.5 1.5 0 0 1 13.5 7v8a1.5 1.5 0 0 1-3 0V7A1.5 1.5 0 0 1 12 5.5m5.5 4.5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChartVerticalFill'

/**
 * MingCute Icon: Chart Vertical Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChartVerticalFill = memo(Icon)
