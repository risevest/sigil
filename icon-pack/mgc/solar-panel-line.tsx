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
          d="M18.18 4a2 2 0 0 1 1.924 1.455l.037.153 1.72 8.598a1.5 1.5 0 0 1-1.337 1.788L20.39 16H13v2h2a1 1 0 0 1 .117 1.993L15 20H9a1 1 0 0 1-.117-1.993L9 18h2v-2H3.61a1.5 1.5 0 0 1-1.491-1.662l.02-.132 1.72-8.598a2 2 0 0 1 1.803-1.602L5.82 4zm1 7h-3.575l.3 3h3.875zm-5.585 0h-3.19l-.3 3h3.79zm-5.2 0H4.82l-.6 3h3.875zm9.785-5h-3.075l.3 3h3.375zm-5.085 0h-2.19l-.3 3h2.79zm-4.2 0H5.82l-.6 3h3.375z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SolarPanelLine'

/**
 * MingCute Icon: Solar Panel Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SolarPanelLine = memo(Icon)
