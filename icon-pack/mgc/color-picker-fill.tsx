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
          d="M20.477 3.511a3 3 0 0 0-4.243 0l-1.533 1.533a2.991 2.991 0 0 0-3.41.581l-.713.714a2 2 0 0 0 0 2.829l-6.486 6.485a3 3 0 0 0-.878 2.122v1.8a1.2 1.2 0 0 0 1.2 1.2h1.8a3 3 0 0 0 2.12-.88l6.486-6.484a2 2 0 0 0 2.829 0l.714-.715a2.991 2.991 0 0 0 .581-3.41l1.533-1.532a3 3 0 0 0 0-4.243M5.507 17.068l6.485-6.486 1.414 1.414-6.485 6.486a1 1 0 0 1-.707.293h-1v-1a1 1 0 0 1 .293-.707"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ColorPickerFill'

/**
 * MingCute Icon: Color Picker Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ColorPickerFill = memo(Icon)
