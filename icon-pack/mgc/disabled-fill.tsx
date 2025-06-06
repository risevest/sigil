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
          d="m7.728 9.245.544 1.924a4.5 4.5 0 1 0 5.136 6.563l.102-.187 1.78.91a6.5 6.5 0 1 1-7.802-9.138zM11 2a3 3 0 0 1 1.5 5.599v1.32l1.743.581H16a1.5 1.5 0 0 1 0 3h-2c-.161 0-.321-.026-.474-.077l-1.026-.342V13a.5.5 0 0 0 .5.5h2a3.5 3.5 0 0 1 2.8 1.4l1.95 2.6H20a1.5 1.5 0 0 1 0 3h-1a1.5 1.5 0 0 1-1.2-.6l-2.4-3.2a.5.5 0 0 0-.4-.2h-2A3.5 3.5 0 0 1 9.5 13V7.599A3 3 0 0 1 11 2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DisabledFill'

/**
 * MingCute Icon: Disabled Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DisabledFill = memo(Icon)
