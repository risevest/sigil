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
          d="M12 2a9.965 9.965 0 0 1 6.837 2.702l.234.227A9.973 9.973 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1 2.062V5a1 1 0 1 1-2 0v-.938A7.96 7.96 0 0 0 7.094 5.68l.663.663a1 1 0 1 1-1.414 1.414l-.663-.663A7.96 7.96 0 0 0 4.062 11H5a1 1 0 1 1 0 2h-.938a8.001 8.001 0 0 0 15.876 0H19a1 1 0 1 1 0-2h.938a7.96 7.96 0 0 0-1.618-3.906l-3.612 3.613a3 3 0 1 1-1.414-1.414l3.612-3.613A7.96 7.96 0 0 0 13 4.062M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Dashboard3Line'

/**
 * MingCute Icon: Dashboard 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Dashboard3Line = memo(Icon)
