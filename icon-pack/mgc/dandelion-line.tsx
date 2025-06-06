import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 8a2 2 0 0 1 1.942 2.479C16.768 13.51 18 17.268 18 21a1 1 0 1 1-2 0c0-3.242-1.049-6.461-3.447-9.077A2.001 2.001 0 1 1 12 8m0-6a7.985 7.985 0 0 1 6.122 2.85A7.972 7.972 0 0 1 20 10a7.973 7.973 0 0 1-.77 3.43 1 1 0 0 1-1.807-.86A5.96 5.96 0 0 0 18 10a5.972 5.972 0 0 0-1.408-3.862 6 6 0 1 0-3.734 9.8 1 1 0 0 1 .284 1.981A8 8 0 1 1 12 2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DandelionLine'

/**
 * MingCute Icon: Dandelion Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DandelionLine = memo(Icon)
