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
          d="M3 4a1 1 0 0 1 1-1h1c.917 0 1.738.411 2.288 1.06A4 4 0 0 1 14 7v6.918A4.692 4.692 0 0 1 17.785 12 3.215 3.215 0 0 1 21 15.215v.285a3.5 3.5 0 0 1-3.5 3.5H17a4.979 4.979 0 0 1-2.492-.665A4 4 0 0 1 10.738 21H10a1 1 0 1 1 0-2h.737a2 2 0 0 0 1.923-1.45l.21-.732A4.98 4.98 0 0 1 12 14V7a2 2 0 1 0-4 0v8a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1m12.093 12.316A2.985 2.985 0 0 0 17 17h.5a1.5 1.5 0 0 0 1.5-1.5v-.285c0-.671-.544-1.215-1.215-1.215a2.692 2.692 0 0 0-2.588 1.952z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CapricornLine'

/**
 * MingCute Icon: Capricorn Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CapricornLine = memo(Icon)
