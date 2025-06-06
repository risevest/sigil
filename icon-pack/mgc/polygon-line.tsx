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
          d="M6.907 3.908A1.25 1.25 0 0 1 9.02 3.79l.073.117L11 7.34V6a2 2 0 0 1 1.85-1.995L13 4h6a2 2 0 0 1 1.995 1.85L21 6v6a2 2 0 0 1-1.85 1.995L19 14h-2.207a5.5 5.5 0 1 1-10.66.29l.074-.29H3.425a1.25 1.25 0 0 1-1.147-1.747l.054-.11zM11.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M19 6h-6v4.207A5.504 5.504 0 0 1 15.743 12H19zM8 6.06 4.7 12h2.557a5.504 5.504 0 0 1 2.735-1.79l.274-.071z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'PolygonLine'

/**
 * MingCute Icon: Polygon Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PolygonLine = memo(Icon)
