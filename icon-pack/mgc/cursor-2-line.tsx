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
          d="M4.217 5.842c-.408-1.02.605-2.033 1.625-1.625L18.926 9.45c1.001.401 1.059 1.797.094 2.28l-3.918 1.958 4.676 4.676a1 1 0 0 1-1.414 1.414l-4.676-4.676-1.959 3.918c-.482.965-1.878.907-2.278-.095zm2.507.882 3.963 9.908 1.833-3.665a1 1 0 0 1 .447-.447l3.665-1.833z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Cursor2Line'

/**
 * MingCute Icon: Cursor 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Cursor2Line = memo(Icon)
