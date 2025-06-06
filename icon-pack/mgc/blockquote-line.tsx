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
          d="M11.778 4.371a1 1 0 0 1-.15 1.407c-.559.452-.924.886-1.163 1.276a2 2 0 1 1-2.46 1.792c-.024-.492.02-1.15.293-1.892.326-.884.956-1.829 2.073-2.732a1 1 0 0 1 1.407.15ZM15 5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM4 14a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2zM3.006 8.846a2 2 0 1 0 2.459-1.792c.239-.39.604-.824 1.164-1.276A1 1 0 1 0 5.37 4.222c-1.117.903-1.747 1.848-2.073 2.732a4.757 4.757 0 0 0-.292 1.892Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BlockquoteLine'

/**
 * MingCute Icon: Blockquote Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BlockquoteLine = memo(Icon)
