import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill="none" fill-rule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 5a2 2 0 0 1 1.995 1.85L22 7v10a2 2 0 0 1-1.85 1.995L20 19H4a2 2 0 0 1-1.995-1.85L2 17V7a2 2 0 0 1 1.85-1.995L4 5zM6.833 9H6a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-1.64l.626 1.126a1 1 0 0 0 1.748 0L10 12.359V14a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1h-.833a1 1 0 0 0-.874.514L8.5 10.941l-.793-1.427A1 1 0 0 0 6.833 9M16 9a1 1 0 0 0-.993.883L15 10v1.634a1 1 0 0 0-1.29 1.479l.083.094 1.5 1.5a1 1 0 0 0 1.32.083l.094-.083 1.5-1.5a1 1 0 0 0-1.09-1.631l-.117.058V10a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MarkdownFill'

/**
 * MingCute Icon: Markdown Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MarkdownFill = memo(Icon)
