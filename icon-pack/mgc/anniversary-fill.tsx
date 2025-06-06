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
          d="M8 3a1 1 0 0 1 1 1v1h6V4a1 1 0 1 1 2 0v1h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 0 1 1-1m3.941 7.141c-1.638-1.657-3.99-.124-3.94 2.135.03 1.36 1.095 2.664 3.195 3.911l.053.032c.247.147.565.336.751.336.186 0 .504-.189.75-.336l.054-.032c2.1-1.247 3.165-2.551 3.195-3.911.05-2.26-2.302-3.792-3.94-2.135a.083.083 0 0 1-.117 0"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AnniversaryFill'

/**
 * MingCute Icon: Anniversary Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AnniversaryFill = memo(Icon)
