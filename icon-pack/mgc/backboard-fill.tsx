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
          d="M4 4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4.653l.36 2.164a1 1 0 0 0 1.694.543l.293-.293.293.293a1 1 0 0 0 1.414 0l.293-.293.293.293a1 1 0 0 0 1.693-.543L15.347 18H20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm11.514 13 .333-2H16a1 1 0 0 0 0-2H8a1 1 0 1 0 0 2h.153l.333 2zM9 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BackboardFill'

/**
 * MingCute Icon: Backboard Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BackboardFill = memo(Icon)
