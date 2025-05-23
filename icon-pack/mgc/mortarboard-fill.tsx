import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M19 12.282V14a7 7 0 0 1-14 0v-1.718l6.359 3.007a1.5 1.5 0 0 0 1.282 0zm-6.359-9.57 9.08 4.294c.734.346.827 1.302.279 1.803V13a1 1 0 0 1-2 0V9.81l-7.359 3.48a1.5 1.5 0 0 1-1.282 0l-9.08-4.295a1.1 1.1 0 0 1 0-1.988l9.08-4.294a1.5 1.5 0 0 1 1.282 0Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MortarboardFill'

/**
 * MingCute Icon: Mortarboard Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MortarboardFill = memo(Icon)
