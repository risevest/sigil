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
          d="M18.71 17.565a4.25 4.25 0 0 0 0-6.01l-6.54-6.54A1 1 0 0 1 13.584 3.6l6.54 6.54a6.25 6.25 0 1 1-8.838 8.84l-7.954-7.955A4.501 4.501 0 0 1 9.698 4.66l7.953 7.953a2.752 2.752 0 0 1-3.892 3.891L6.513 9.257a1 1 0 0 1 1.414-1.415l7.247 7.247a.751.751 0 0 0 1.063-1.062L8.284 6.074A2.501 2.501 0 0 0 4.746 9.61l7.954 7.954a4.25 4.25 0 0 0 6.01 0Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AttachmentLine'

/**
 * MingCute Icon: Attachment Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AttachmentLine = memo(Icon)
