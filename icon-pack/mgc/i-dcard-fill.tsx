import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM9.5 12h-2a2.5 2.5 0 0 0-2.495 2.336L5 14.5v.5a1 1 0 0 0 1.993.117L7 15v-.5a.5.5 0 0 1 .41-.492L7.5 14h2a.5.5 0 0 1 .492.41l.008.09v.5a1 1 0 0 0 1.993.117L12 15v-.5a2.5 2.5 0 0 0-2.336-2.495zm8.5 1h-4l-.117.007a1 1 0 0 0 0 1.986L14 15h4l.117-.007a1 1 0 0 0 0-1.986zm-2-3h-2a1 1 0 0 0-.117 1.993L14 12h2a1 1 0 0 0 .117-1.993zM8.5 8a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'IDcardFill'

/**
 * MingCute Icon: I Dcard Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const IDcardFill = memo(Icon)
